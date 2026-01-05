import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { verifyAuth } from "@/lib/auth"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await verifyAuth(token)
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const client = await clientPromise
    const db = client.db("bataa-honey")

    const [totalUsers, totalCourses, payments, enrollments, recentEnrollments, courses] = await Promise.all([
      db.collection("users").countDocuments(),
      db.collection("courses").countDocuments({ status: "published" }),
      db.collection("payments").find({ status: "completed" }).toArray(),
      db.collection("enrollments").countDocuments(),
      db
        .collection("enrollments")
        .aggregate([
          { $sort: { enrolledAt: -1 } },
          { $limit: 5 },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $lookup: {
              from: "courses",
              localField: "courseId",
              foreignField: "_id",
              as: "course",
            },
          },
        ])
        .toArray(),
      db
        .collection("courses")
        .aggregate([
          { $match: { status: "published" } },
          {
            $lookup: {
              from: "enrollments",
              localField: "_id",
              foreignField: "courseId",
              as: "enrollments",
            },
          },
          {
            $project: {
              title: 1,
              enrollments: { $size: "$enrollments" },
            },
          },
          { $sort: { enrollments: -1 } },
          { $limit: 5 },
        ])
        .toArray(),
    ])

    const totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0)

    const analytics = {
      totalUsers,
      totalCourses,
      totalRevenue,
      totalEnrollments: enrollments,
      monthlyGrowth: {
        users: 12,
        revenue: 8,
        enrollments: 15,
      },
      recentEnrollments: recentEnrollments.map((e) => ({
        userName: e.user?.[0]?.name || "Хэрэглэгч",
        courseName: e.course?.[0]?.title || "Сургалт",
        date: e.enrolledAt,
      })),
      popularCourses: courses.map((c) => ({
        title: c.title,
        enrollments: c.enrollments,
      })),
    }

    return NextResponse.json(analytics)
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
