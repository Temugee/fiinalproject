import type { ObjectId } from "mongodb"

export interface Course {
  _id: ObjectId
  title: string
  description: string
  shortDescription: string
  thumbnail: string
  price: number
  isFree: boolean
  category: string
  level: "beginner" | "intermediate" | "advanced"
  duration: number // minutes
  lessons: Lesson[]
  instructor: {
    name: string
    avatar: string
    bio: string
  }
  enrolledCount: number
  rating: number
  reviews: Review[]
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Lesson {
  _id: ObjectId
  title: string
  description: string
  videoUrl?: string
  content: string
  duration: number
  order: number
  isFree: boolean
}

export interface Review {
  userId: ObjectId
  userName: string
  rating: number
  comment: string
  createdAt: Date
}

export interface Payment {
  _id: ObjectId
  userId: ObjectId
  courseId: ObjectId
  amount: number
  currency: string
  method: "qpay" | "khanbank" | "socialpay"
  status: "pending" | "completed" | "failed"
  transactionId?: string
  qrCode?: string
  createdAt: Date
  completedAt?: Date
}

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}
