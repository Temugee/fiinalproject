import { cookies } from "next/headers"
import { jwtVerify, SignJWT } from "jose"
import bcrypt from "bcryptjs"
import { getDatabase } from "./mongodb"
import { ObjectId } from "mongodb"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production")

export interface User {
  _id: ObjectId
  email: string
  name: string
  role: "admin" | "user"
  avatar?: string
  enrolledCourses: ObjectId[]
  createdAt: Date
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createToken(userId: string, role: string): Promise<string> {
  return new SignJWT({ userId, role }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(JWT_SECRET)
}

export async function verifyToken(token: string): Promise<{ userId: string; role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { userId: string; role: string }
  } catch {
    return null
  }
}

export async function verifyAuth(
  token: string,
): Promise<{ id: string; role: string; email: string; name: string } | null> {
  try {
    const payload = await verifyToken(token)
    if (!payload) return null

    const db = await getDatabase()
    const user = await db.collection("users").findOne({ _id: new ObjectId(payload.userId) })

    if (!user) return null

    return {
      id: user._id.toString(),
      role: user.role,
      email: user.email,
      name: user.name,
    }
  } catch {
    return null
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) return null

  const payload = await verifyToken(token)
  if (!payload) return null

  const db = await getDatabase()
  const user = await db.collection("users").findOne({ _id: new ObjectId(payload.userId) })

  return user as User | null
}

export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === "admin"
}
