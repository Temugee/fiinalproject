"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClassDiagramPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Системийн Class Diagram
        </h1>
        <p className="text-muted-foreground mb-8">
          Bataa's Honey - Онлайн Сургалтын Платформ
        </p>

        {/* Main Class Diagram */}
        <div className="bg-card border border-border rounded-xl p-8 overflow-x-auto">
          <svg viewBox="0 0 1400 1100" className="w-full min-w-[1200px]">
            {/* User Class */}
            <g transform="translate(50, 50)">
              <rect
                width="220"
                height="280"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="2"
                rx="4"
              />
              <rect width="220" height="40" fill="#f59e0b" rx="4" />
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                User
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="220"
                y2="40"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - _id: ObjectId
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - name: string
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - email: string
              </text>
              <text x="10" y="114" className="fill-foreground text-xs">
                - password: string
              </text>
              <text x="10" y="132" className="fill-foreground text-xs">
                - role: "admin" | "user"
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                - enrolledCourses: ObjectId[]
              </text>
              <text x="10" y="168" className="fill-foreground text-xs">
                - createdAt: Date
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="180"
                x2="220"
                y2="180"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <text x="10" y="200" className="fill-foreground text-xs">
                + register(): Promise
              </text>
              <text x="10" y="218" className="fill-foreground text-xs">
                + login(): Promise
              </text>
              <text x="10" y="236" className="fill-foreground text-xs">
                + enrollCourse(): Promise
              </text>
              <text x="10" y="254" className="fill-foreground text-xs">
                + getEnrolledCourses(): Course[]
              </text>
              <text x="10" y="272" className="fill-foreground text-xs">
                + updateProgress(): void
              </text>
            </g>

            {/* Course Class */}
            <g transform="translate(350, 50)">
              <rect
                width="240"
                height="320"
                fill="#dbeafe"
                stroke="#3b82f6"
                strokeWidth="2"
                rx="4"
              />
              <rect width="240" height="40" fill="#3b82f6" rx="4" />
              <text
                x="120"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Course
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="240"
                y2="40"
                stroke="#3b82f6"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - _id: ObjectId
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - title: string
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - description: string
              </text>
              <text x="10" y="114" className="fill-foreground text-xs">
                - instructor: string
              </text>
              <text x="10" y="132" className="fill-foreground text-xs">
                - price: number
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                - isFree: boolean
              </text>
              <text x="10" y="168" className="fill-foreground text-xs">
                - category: string
              </text>
              <text x="10" y="186" className="fill-foreground text-xs">
                - thumbnail: string
              </text>
              <text x="10" y="204" className="fill-foreground text-xs">
                - lessons: Lesson[]
              </text>
              <text x="10" y="222" className="fill-foreground text-xs">
                - enrolledCount: number
              </text>
              <text x="10" y="240" className="fill-foreground text-xs">
                - isPublished: boolean
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="252"
                x2="240"
                y2="252"
                stroke="#3b82f6"
                strokeWidth="1"
              />
              <text x="10" y="272" className="fill-foreground text-xs">
                + create(): Promise
              </text>
              <text x="10" y="290" className="fill-foreground text-xs">
                + update(): Promise
              </text>
              <text x="10" y="308" className="fill-foreground text-xs">
                + delete(): Promise
              </text>
            </g>

            {/* Lesson Class */}
            <g transform="translate(670, 50)">
              <rect
                width="220"
                height="240"
                fill="#dcfce7"
                stroke="#22c55e"
                strokeWidth="2"
                rx="4"
              />
              <rect width="220" height="40" fill="#22c55e" rx="4" />
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Lesson
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="220"
                y2="40"
                stroke="#22c55e"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - _id: ObjectId
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - title: string
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - content: string
              </text>
              <text x="10" y="114" className="fill-foreground text-xs">
                - videoUrl: string
              </text>
              <text x="10" y="132" className="fill-foreground text-xs">
                - duration: number
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                - order: number
              </text>
              <text x="10" y="168" className="fill-foreground text-xs">
                - isFree: boolean
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="180"
                x2="220"
                y2="180"
                stroke="#22c55e"
                strokeWidth="1"
              />
              <text x="10" y="200" className="fill-foreground text-xs">
                + create(): Promise
              </text>
              <text x="10" y="218" className="fill-foreground text-xs">
                + update(): Promise
              </text>
              <text x="10" y="236" className="fill-foreground text-xs">
                + getSummary(): string
              </text>
            </g>

            {/* Payment Class */}
            <g transform="translate(970, 50)">
              <rect
                width="220"
                height="280"
                fill="#fce7f3"
                stroke="#ec4899"
                strokeWidth="2"
                rx="4"
              />
              <rect width="220" height="40" fill="#ec4899" rx="4" />
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Payment
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="220"
                y2="40"
                stroke="#ec4899"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - _id: ObjectId
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - userId: ObjectId
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - courseId: ObjectId
              </text>
              <text x="10" y="114" className="fill-foreground text-xs">
                - amount: number
              </text>
              <text x="10" y="132" className="fill-foreground text-xs">
                - method: PaymentMethod
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                - status: PaymentStatus
              </text>
              <text x="10" y="168" className="fill-foreground text-xs">
                - transactionId: string
              </text>
              <text x="10" y="186" className="fill-foreground text-xs">
                - qrCode: string
              </text>
              <text x="10" y="204" className="fill-foreground text-xs">
                - createdAt: Date
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="216"
                x2="220"
                y2="216"
                stroke="#ec4899"
                strokeWidth="1"
              />
              <text x="10" y="236" className="fill-foreground text-xs">
                + createPayment(): Promise
              </text>
              <text x="10" y="254" className="fill-foreground text-xs">
                + checkStatus(): Promise
              </text>
              <text x="10" y="272" className="fill-foreground text-xs">
                + processCallback(): void
              </text>
            </g>

            {/* Progress Class */}
            <g transform="translate(50, 380)">
              <rect
                width="220"
                height="220"
                fill="#f3e8ff"
                stroke="#a855f7"
                strokeWidth="2"
                rx="4"
              />
              <rect width="220" height="40" fill="#a855f7" rx="4" />
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Progress
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="220"
                y2="40"
                stroke="#a855f7"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - _id: ObjectId
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - userId: ObjectId
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - courseId: ObjectId
              </text>
              <text x="10" y="114" className="fill-foreground text-xs">
                - lessonId: ObjectId
              </text>
              <text x="10" y="132" className="fill-foreground text-xs">
                - completed: boolean
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                - completedAt: Date
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="162"
                x2="220"
                y2="162"
                stroke="#a855f7"
                strokeWidth="1"
              />
              <text x="10" y="182" className="fill-foreground text-xs">
                + markComplete(): Promise
              </text>
              <text x="10" y="200" className="fill-foreground text-xs">
                + getProgress(): number
              </text>
              <text x="10" y="218" className="fill-foreground text-xs">
                + getCertificate(): Certificate
              </text>
            </g>

            {/* AIService Class */}
            <g transform="translate(350, 420)">
              <rect
                width="240"
                height="200"
                fill="#fef9c3"
                stroke="#eab308"
                strokeWidth="2"
                rx="4"
              />
              <rect width="240" height="40" fill="#eab308" rx="4" />
              <text
                x="120"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                AIService
              </text>

              {/* Attributes */}
              <line
                x1="0"
                y1="40"
                x2="240"
                y2="40"
                stroke="#eab308"
                strokeWidth="1"
              />
              <text x="10" y="60" className="fill-foreground text-xs">
                - model: string
              </text>
              <text x="10" y="78" className="fill-foreground text-xs">
                - systemPrompt: string
              </text>
              <text x="10" y="96" className="fill-foreground text-xs">
                - temperature: number
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="108"
                x2="240"
                y2="108"
                stroke="#eab308"
                strokeWidth="1"
              />
              <text x="10" y="128" className="fill-foreground text-xs">
                + chat(): AsyncIterable
              </text>
              <text x="10" y="146" className="fill-foreground text-xs">
                + getRecommendations(): Course[]
              </text>
              <text x="10" y="164" className="fill-foreground text-xs">
                + summarizeLesson(): string
              </text>
              <text x="10" y="182" className="fill-foreground text-xs">
                + generateQuiz(): Quiz
              </text>
              <text x="10" y="200" className="fill-foreground text-xs">
                + answerQuestion(): string
              </text>
            </g>

            {/* PaymentProvider Interface */}
            <g transform="translate(670, 420)">
              <rect
                width="220"
                height="180"
                fill="#e0f2fe"
                stroke="#0ea5e9"
                strokeWidth="2"
                rx="4"
                strokeDasharray="5,5"
              />
              <rect width="220" height="40" fill="#0ea5e9" rx="4" />
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                «interface»
              </text>
              <text
                x="110"
                y="26"
                textAnchor="middle"
                className="fill-white font-bold text-xs"
                dy="14"
              >
                PaymentProvider
              </text>

              {/* Methods */}
              <line
                x1="0"
                y1="40"
                x2="220"
                y2="40"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
              <text x="10" y="70" className="fill-foreground text-xs">
                + createInvoice(): Promise
              </text>
              <text x="10" y="90" className="fill-foreground text-xs">
                + checkPayment(): Promise
              </text>
              <text x="10" y="110" className="fill-foreground text-xs">
                + generateQR(): string
              </text>
              <text x="10" y="130" className="fill-foreground text-xs">
                + handleCallback(): void
              </text>
              <text x="10" y="150" className="fill-foreground text-xs">
                + refund(): Promise
              </text>
              <text x="10" y="170" className="fill-foreground text-xs">
                + getTransactionHistory(): []
              </text>
            </g>

            {/* QPay Class */}
            <g transform="translate(620, 650)">
              <rect
                width="140"
                height="100"
                fill="#e0f2fe"
                stroke="#0ea5e9"
                strokeWidth="2"
                rx="4"
              />
              <rect width="140" height="30" fill="#0ea5e9" rx="4" />
              <text
                x="70"
                y="20"
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                QPay
              </text>
              <line
                x1="0"
                y1="30"
                x2="140"
                y2="30"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
              <text x="10" y="50" className="fill-foreground text-xs">
                - apiKey: string
              </text>
              <text x="10" y="68" className="fill-foreground text-xs">
                - merchantId: string
              </text>
              <line
                x1="0"
                y1="76"
                x2="140"
                y2="76"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
              <text x="10" y="94" className="fill-foreground text-xs">
                + implements all
              </text>
            </g>

            {/* KhanBank Class */}
            <g transform="translate(780, 650)">
              <rect
                width="140"
                height="100"
                fill="#e0f2fe"
                stroke="#0ea5e9"
                strokeWidth="2"
                rx="4"
              />
              <rect width="140" height="30" fill="#0ea5e9" rx="4" />
              <text
                x="70"
                y="20"
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                KhanBank
              </text>
              <line
                x1="0"
                y1="30"
                x2="140"
                y2="30"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
              <text x="10" y="50" className="fill-foreground text-xs">
                - accountNo: string
              </text>
              <text x="10" y="68" className="fill-foreground text-xs">
                - apiSecret: string
              </text>
              <line
                x1="0"
                y1="76"
                x2="140"
                y2="76"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
              <text x="10" y="94" className="fill-foreground text-xs">
                + implements all
              </text>
            </g>

            {/* Enums */}
            <g transform="translate(970, 380)">
              <rect
                width="200"
                height="120"
                fill="#fef2f2"
                stroke="#ef4444"
                strokeWidth="2"
                rx="4"
              />
              <rect width="200" height="30" fill="#ef4444" rx="4" />
              <text
                x="100"
                y="20"
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                «enum» PaymentStatus
              </text>
              <line
                x1="0"
                y1="30"
                x2="200"
                y2="30"
                stroke="#ef4444"
                strokeWidth="1"
              />
              <text x="10" y="50" className="fill-foreground text-xs">
                PENDING
              </text>
              <text x="10" y="68" className="fill-foreground text-xs">
                COMPLETED
              </text>
              <text x="10" y="86" className="fill-foreground text-xs">
                FAILED
              </text>
              <text x="10" y="104" className="fill-foreground text-xs">
                REFUNDED
              </text>
            </g>

            <g transform="translate(970, 520)">
              <rect
                width="200"
                height="120"
                fill="#fef2f2"
                stroke="#ef4444"
                strokeWidth="2"
                rx="4"
              />
              <rect width="200" height="30" fill="#ef4444" rx="4" />
              <text
                x="100"
                y="20"
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                «enum» PaymentMethod
              </text>
              <line
                x1="0"
                y1="30"
                x2="200"
                y2="30"
                stroke="#ef4444"
                strokeWidth="1"
              />
              <text x="10" y="50" className="fill-foreground text-xs">
                QPAY
              </text>
              <text x="10" y="68" className="fill-foreground text-xs">
                KHAN_BANK
              </text>
              <text x="10" y="86" className="fill-foreground text-xs">
                GOLOMT_BANK
              </text>
              <text x="10" y="104" className="fill-foreground text-xs">
                SOCIAL_PAY
              </text>
            </g>

            {/* Relationships */}
            {/* User -> Course (enrolledCourses) */}
            <line
              x1="270"
              y1="150"
              x2="350"
              y2="150"
              stroke="#64748b"
              strokeWidth="2"
            />
            <polygon points="345,145 355,150 345,155" fill="#64748b" />
            <text x="290" y="140" className="fill-muted-foreground text-xs">
              enrolls *
            </text>

            {/* Course -> Lesson (composition) */}
            <line
              x1="590"
              y1="150"
              x2="670"
              y2="150"
              stroke="#64748b"
              strokeWidth="2"
            />
            <polygon points="590,150 580,145 580,155" fill="#64748b" />
            <text x="610" y="140" className="fill-muted-foreground text-xs">
              1..*
            </text>

            {/* User -> Payment */}
            <line
              x1="160"
              y1="330"
              x2="160"
              y2="360"
              stroke="#64748b"
              strokeWidth="2"
            />
            <line
              x1="160"
              y1="360"
              x2="1080"
              y2="360"
              stroke="#64748b"
              strokeWidth="2"
            />
            <line
              x1="1080"
              y1="360"
              x2="1080"
              y2="330"
              stroke="#64748b"
              strokeWidth="2"
            />
            <polygon points="1075,335 1080,325 1085,335" fill="#64748b" />
            <text x="600" y="352" className="fill-muted-foreground text-xs">
              makes *
            </text>

            {/* User -> Progress */}
            <line
              x1="160"
              y1="330"
              x2="160"
              y2="380"
              stroke="#64748b"
              strokeWidth="2"
            />
            <polygon points="155,375 160,385 165,375" fill="#64748b" />
            <text x="170" y="360" className="fill-muted-foreground text-xs">
              tracks *
            </text>

            {/* Course -> Payment */}
            <line
              x1="590"
              y1="200"
              x2="970"
              y2="200"
              stroke="#64748b"
              strokeWidth="2"
            />
            <text x="750" y="192" className="fill-muted-foreground text-xs">
              for 1
            </text>

            {/* PaymentProvider -> QPay/KhanBank */}
            <line
              x1="690"
              y1="600"
              x2="690"
              y2="650"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="850"
              y1="600"
              x2="850"
              y2="650"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <polygon
              points="685,645 690,655 695,645"
              fill="none"
              stroke="#64748b"
            />
            <polygon
              points="845,645 850,655 855,645"
              fill="none"
              stroke="#64748b"
            />

            {/* Legend */}
            <g transform="translate(50, 800)">
              <rect
                width="400"
                height="180"
                fill="#f8fafc"
                stroke="#e2e8f0"
                strokeWidth="1"
                rx="4"
              />
              <text x="20" y="25" className="fill-foreground font-bold text-sm">
                Тайлбар (Legend)
              </text>

              <rect
                x="20"
                y="40"
                width="30"
                height="20"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <text x="60" y="55" className="fill-foreground text-xs">
                Entity Class
              </text>

              <rect
                x="20"
                y="70"
                width="30"
                height="20"
                fill="#e0f2fe"
                stroke="#0ea5e9"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text x="60" y="85" className="fill-foreground text-xs">
                Interface
              </text>

              <rect
                x="20"
                y="100"
                width="30"
                height="20"
                fill="#fef2f2"
                stroke="#ef4444"
                strokeWidth="1"
              />
              <text x="60" y="115" className="fill-foreground text-xs">
                Enumeration
              </text>

              <line
                x1="200"
                y1="50"
                x2="260"
                y2="50"
                stroke="#64748b"
                strokeWidth="2"
              />
              <polygon points="255,45 265,50 255,55" fill="#64748b" />
              <text x="270" y="55" className="fill-foreground text-xs">
                Association
              </text>

              <line
                x1="200"
                y1="80"
                x2="260"
                y2="80"
                stroke="#64748b"
                strokeWidth="2"
              />
              <polygon points="200,80 190,75 190,85" fill="#64748b" />
              <text x="270" y="85" className="fill-foreground text-xs">
                Composition
              </text>

              <line
                x1="200"
                y1="110"
                x2="260"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <polygon
                points="255,105 260,115 265,105"
                fill="none"
                stroke="#64748b"
              />
              <text x="270" y="115" className="fill-foreground text-xs">
                Implementation
              </text>

              <text x="20" y="145" className="fill-muted-foreground text-xs">
                * = олон (many)
              </text>
              <text x="20" y="165" className="fill-muted-foreground text-xs">
                1..* = нэг буюу түүнээс олон
              </text>
            </g>

            {/* Database Info */}
            <g transform="translate(500, 800)">
              <rect
                width="350"
                height="180"
                fill="#f8fafc"
                stroke="#e2e8f0"
                strokeWidth="1"
                rx="4"
              />
              <text x="20" y="25" className="fill-foreground font-bold text-sm">
                MongoDB Collections
              </text>

              <text x="20" y="50" className="fill-foreground text-xs">
                • users - Хэрэглэгчдийн мэдээлэл
              </text>
              <text x="20" y="70" className="fill-foreground text-xs">
                • courses - Сургалтын мэдээлэл
              </text>
              <text x="20" y="90" className="fill-foreground text-xs">
                • payments - Төлбөрийн түүх
              </text>
              <text x="20" y="110" className="fill-foreground text-xs">
                • progress - Суралцагчийн явц
              </text>

              <text x="20" y="140" className="fill-muted-foreground text-xs">
                Database: MongoDB
              </text>
              <text x="20" y="160" className="fill-muted-foreground text-xs">
                ODM: Native MongoDB Driver
              </text>
            </g>

            {/* Tech Stack */}
            <g transform="translate(900, 800)">
              <rect
                width="280"
                height="180"
                fill="#f8fafc"
                stroke="#e2e8f0"
                strokeWidth="1"
                rx="4"
              />
              <text x="20" y="25" className="fill-foreground font-bold text-sm">
                Технологийн Stack
              </text>

              <text x="20" y="50" className="fill-foreground text-xs">
                • Frontend: Next.js 15, React 19
              </text>
              <text x="20" y="70" className="fill-foreground text-xs">
                • Styling: Tailwind CSS v4
              </text>
              <text x="20" y="90" className="fill-foreground text-xs">
                • Database: MongoDB
              </text>
              <text x="20" y="110" className="fill-foreground text-xs">
                • Auth: JWT, bcryptjs
              </text>
              <text x="20" y="130" className="fill-foreground text-xs">
                • AI: Vercel AI SDK
              </text>
              <text x="20" y="150" className="fill-foreground text-xs">
                • Payment: QPay, Khan Bank API
              </text>
              <text x="20" y="170" className="fill-foreground text-xs">
                • Language: TypeScript
              </text>
            </g>
          </svg>
        </div>

        {/* Additional Documentation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">User Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Хэрэглэгчийн бүртгэл, нэвтрэлт, сургалтанд элсэх үйлдлүүдийг
                удирдана. Admin болон энгийн хэрэглэгч гэсэн хоёр төрөлтэй.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Сургалтын агуулга, үнэ, категори, хичээлүүдийг агуулна. Үнэгүй
                болон төлбөртэй сургалтуудыг дэмжинэ.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lesson Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Сургалтын хичээл бүрийн агуулга, видео, дараалал зэргийг
                хадгална. Course-тэй composition холбоотой.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Төлбөрийн мэдээлэл, QPay/Khan Bank интеграци, QR код үүсгэх
                зэрэг төлбөрийн бүх үйлдлүүдийг удирдана.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AIService Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                AI Tutor чатбот, сургалтын санал болгох, хичээлийн хураангуй
                гаргах зэрэг AI функцуудыг хариуцна.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progress Class</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Хэрэглэгчийн сургалтын явц, дууссан хичээлүүд, гэрчилгээ авах
                эрхийг хянана.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Relationships Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Классуудын хоорондын харилцаа</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Харилцаа</th>
                    <th className="text-left p-3">Төрөл</th>
                    <th className="text-left p-3">Тайлбар</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">User → Course</td>
                    <td className="p-3">Many-to-Many</td>
                    <td className="p-3">
                      Нэг хэрэглэгч олон сургалтанд элсэж болно
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Course → Lesson</td>
                    <td className="p-3">One-to-Many (Composition)</td>
                    <td className="p-3">
                      Нэг сургалт олон хичээлтэй, сургалт устгагдвал хичээлүүд ч
                      устна
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">User → Payment</td>
                    <td className="p-3">One-to-Many</td>
                    <td className="p-3">
                      Нэг хэрэглэгч олон төлбөр хийж болно
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Course → Payment</td>
                    <td className="p-3">One-to-Many</td>
                    <td className="p-3">
                      Нэг сургалтанд олон төлбөр хийгдэж болно
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">User → Progress</td>
                    <td className="p-3">One-to-Many</td>
                    <td className="p-3">Нэг хэрэглэгчийн олон сургалтын явц</td>
                  </tr>
                  <tr>
                    <td className="p-3">PaymentProvider → QPay/KhanBank</td>
                    <td className="p-3">Implementation</td>
                    <td className="p-3">
                      Төлбөрийн интерфэйсийг хэрэгжүүлсэн классууд
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
