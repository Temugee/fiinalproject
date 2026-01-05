import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { verifyAuth } from "@/lib/auth"
import { cookies } from "next/headers"
import { ObjectId } from "mongodb"

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ error: "Нэвтрэх шаардлагатай" }, { status: 401 })
    }

    const user = await verifyAuth(token)
    if (!user) {
      return NextResponse.json({ error: "Нэвтрэх шаардлагатай" }, { status: 401 })
    }

    const { courseId } = await request.json()

    if (!courseId) {
      return NextResponse.json({ error: "Сургалт сонгоно уу" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("bataa-honey")

    const course = await db.collection("courses").findOne({
      _id: new ObjectId(courseId),
    })

    if (!course) {
      return NextResponse.json({ error: "Сургалт олдсонгүй" }, { status: 404 })
    }

    // Check if already enrolled
    const existingEnrollment = await db.collection("enrollments").findOne({
      userId: new ObjectId(user.id),
      courseId: new ObjectId(courseId),
    })

    if (existingEnrollment) {
      return NextResponse.json({ error: "Та энэ сургалтад бүртгүүлсэн байна" }, { status: 400 })
    }

    // For free courses, enroll directly
    if (course.price === 0) {
      await db.collection("enrollments").insertOne({
        userId: new ObjectId(user.id),
        courseId: new ObjectId(courseId),
        enrolledAt: new Date(),
        progress: 0,
        completedLessons: [],
      })

      return NextResponse.json({
        success: true,
        message: "Амжилттай бүртгэгдлээ",
      })
    }

    // For paid courses, check if payment is completed
    const payment = await db.collection("payments").findOne({
      userId: new ObjectId(user.id),
      courseId: new ObjectId(courseId),
      status: "completed",
    })

    if (!payment) {
      return NextResponse.json(
        {
          error: "Төлбөр төлөх шаардлагатай",
          requirePayment: true,
        },
        { status: 402 },
      )
    }

    await db.collection("enrollments").insertOne({
      userId: new ObjectId(user.id),
      courseId: new ObjectId(courseId),
      enrolledAt: new Date(),
      progress: 0,
      completedLessons: [],
    })

    return NextResponse.json({
      success: true,
      message: "Амжилттай бүртгэгдлээ",
    })
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "Серверийн алдаа" }, { status: 500 })
  }
}
