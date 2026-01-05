import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // QPay callback format
    const { payment_id, invoice_id, qpay_payment_id } = data

    const db = await getDatabase()

    // Find and update payment
    const payment = await db.collection("payments").findOneAndUpdate(
      { invoiceId: invoice_id, status: "pending" },
      {
        $set: {
          status: "completed",
          transactionId: qpay_payment_id || payment_id,
          completedAt: new Date(),
        },
      },
      { returnDocument: "after" },
    )

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 })
    }

    // Enroll user in course
    await db.collection("users").updateOne(
      { _id: payment.userId },
      {
        $addToSet: { enrolledCourses: payment.courseId },
      },
    )

    // Update course enrollment count
    await db.collection("courses").updateOne({ _id: payment.courseId }, { $inc: { enrolledCount: 1 } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Payment callback error:", error)
    return NextResponse.json({ error: "Callback processing failed" }, { status: 500 })
  }
}
