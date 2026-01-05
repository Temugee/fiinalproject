import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { getCurrentUser } from "@/lib/auth"
import { ObjectId } from "mongodb"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Нэвтрэх шаардлагатай" }, { status: 401 })
    }

    const { courseId, method } = await request.json()

    const db = await getDatabase()

    // Get course
    const course = await db.collection("courses").findOne({ _id: new ObjectId(courseId) })

    if (!course) {
      return NextResponse.json({ error: "Сургалт олдсонгүй" }, { status: 404 })
    }

    if (course.isFree) {
      return NextResponse.json({ error: "Энэ үнэгүй сургалт" }, { status: 400 })
    }

    // Check if already enrolled
    if (user.enrolledCourses?.includes(new ObjectId(courseId))) {
      return NextResponse.json({ error: "Та аль хэдийн бүртгүүлсэн байна" }, { status: 400 })
    }

    // Create payment record
    const orderId = `ORD${Date.now()}`
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/payment/callback`

    // For demo, we'll use QPay mock
    // In production, you'd use actual credentials
    const paymentResult = {
      success: true,
      invoiceId: `INV${Date.now()}`,
      qrCode: generateMockQRCode(course.price, orderId),
      deepLinks: [
        { name: "QPay", logo: "/banks/qpay.png", link: `qpay://payment?invoice=INV${Date.now()}` },
        {
          name: "Хаан банк",
          logo: "/banks/khanbank.png",
          link: `khanbank://pay?amount=${course.price}&ref=${orderId}`,
        },
        {
          name: "SocialPay",
          logo: "/banks/socialpay.png",
          link: `socialpay://pay?amount=${course.price}&ref=${orderId}`,
        },
        { name: "Голомт банк", logo: "/banks/golomt.png", link: `golomtbank://pay?amount=${course.price}` },
        { name: "TDB", logo: "/banks/tdb.png", link: `tdbmbank://pay?amount=${course.price}` },
        { name: "Төрийн банк", logo: "/banks/statebank.png", link: `statebank://pay?amount=${course.price}` },
      ],
    }

    // Save payment record
    await db.collection("payments").insertOne({
      userId: user._id,
      courseId: new ObjectId(courseId),
      amount: course.price,
      currency: "MNT",
      method,
      status: "pending",
      orderId,
      invoiceId: paymentResult.invoiceId,
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      payment: {
        invoiceId: paymentResult.invoiceId,
        qrCode: paymentResult.qrCode,
        deepLinks: paymentResult.deepLinks,
        amount: course.price,
        courseName: course.title,
      },
    })
  } catch (error) {
    console.error("Payment creation error:", error)
    return NextResponse.json({ error: "Төлбөр үүсгэхэд алдаа гарлаа" }, { status: 500 })
  }
}

// Generate mock QR code data URL for demo
function generateMockQRCode(amount: number, orderId: string): string {
  // In production, this would be the actual QR code from QPay
  // For demo, we return a placeholder
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="white"/>
      <rect x="20" y="20" width="160" height="160" fill="none" stroke="black" stroke-width="2"/>
      <text x="100" y="90" text-anchor="middle" font-size="14" fill="black">QPay QR</text>
      <text x="100" y="110" text-anchor="middle" font-size="12" fill="gray">${amount.toLocaleString()}₮</text>
      <text x="100" y="130" text-anchor="middle" font-size="10" fill="gray">${orderId}</text>
    </svg>
  `)}`
}
