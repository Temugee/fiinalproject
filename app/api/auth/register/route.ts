import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDatabase } from "@/lib/mongodb"
import { hashPassword, createToken } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Бүх талбарыг бөглөнө үү" }, { status: 400 })
    }

    const db = await getDatabase()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "Энэ имэйл хаягаар бүртгэл үүссэн байна" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      role: "user",
      enrolledCourses: [],
      createdAt: new Date(),
    })

    // Create token
    const token = await createToken(result.insertedId.toString(), "user")

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({
      success: true,
      user: { id: result.insertedId, name, email, role: "user" },
    })
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json({ error: "Серверт алдаа гарлаа" }, { status: 500 })
  }
}
