import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { getCurrentUser } from "@/lib/auth"
import { ObjectId } from "mongodb"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const isFree = searchParams.get("free") === "true"
    const search = searchParams.get("search")

    const db = await getDatabase()

    const query: Record<string, unknown> = { isPublished: true }

    if (category) {
      query.category = category
    }

    if (isFree) {
      query.isFree = true
    }

    if (search) {
      query.$text = { $search: search }
    }

    const courses = await db.collection("courses").find(query).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ courses })
  } catch (error) {
    console.error("Courses fetch error:", error)
    return NextResponse.json({ error: "Сургалтууд татахад алдаа гарлаа" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Зөвхөн админ сургалт үүсгэх боломжтой" }, { status: 403 })
    }

    const data = await request.json()
    const db = await getDatabase()

    const course = {
      ...data,
      instructor: {
        name: user.name,
        avatar: user.avatar || "/instructor-teaching.png",
        bio: "",
      },
      enrolledCount: 0,
      rating: 0,
      reviews: [],
      isPublished: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      lessons:
        data.lessons?.map((lesson: { id?: string }, index: number) => ({
          ...lesson,
          _id: new ObjectId(),
          order: index + 1,
        })) || [],
    }

    const result = await db.collection("courses").insertOne(course)

    return NextResponse.json({
      success: true,
      courseId: result.insertedId,
    })
  } catch (error) {
    console.error("Course creation error:", error)
    return NextResponse.json({ error: "Сургалт үүсгэхэд алдаа гарлаа" }, { status: 500 })
  }
}
