import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Нэвтрэх шаардлагатай" }, { status: 401 })
    }

    const { invoiceId } = await request.json()

    const db = await getDatabase()

    const payment = await db.collection("payments").findOne({
      invoiceId,
      userId: user._id,
    })

    if (!payment) {
      return NextResponse.json({ error: "Төлбөр олдсонгүй" }, { status: 404 })
    }

    // In production, you would check with QPay API here
    // For demo, we'll simulate a successful payment after some time

    return NextResponse.json({
      status: payment.status,
      paid: payment.status === "completed",
    })
  } catch (error) {
    console.error("Payment check error:", error)
    return NextResponse.json({ error: "Төлбөр шалгахад алдаа гарлаа" }, { status: 500 })
  }
}
