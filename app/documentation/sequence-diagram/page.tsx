"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SequenceDiagramPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Sequence Diagram
          </h1>
          <p className="text-muted-foreground text-lg">
            Батаагийн Зөгийн Бал - Системийн дараалал диаграм
          </p>
        </div>

        <Tabs defaultValue="auth" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="auth">Нэвтрэлт</TabsTrigger>
            <TabsTrigger value="purchase">Худалдан авалт</TabsTrigger>
            <TabsTrigger value="learning">Суралцах</TabsTrigger>
            <TabsTrigger value="ai">AI Туслах</TabsTrigger>
          </TabsList>

          {/* Authentication Sequence */}
          <TabsContent value="auth">
            <Card>
              <CardHeader>
                <CardTitle>Хэрэглэгчийн нэвтрэлт / бүртгэл</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 900 600" className="w-full min-w-[800px]">
                    {/* Actors */}
                    <g className="actors">
                      {/* User */}
                      <rect
                        x="50"
                        y="30"
                        width="100"
                        height="40"
                        fill="#f59e0b"
                        rx="4"
                      />
                      <text
                        x="100"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Хэрэглэгч
                      </text>
                      <line
                        x1="100"
                        y1="70"
                        x2="100"
                        y2="550"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Frontend */}
                      <rect
                        x="230"
                        y="30"
                        width="100"
                        height="40"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <text
                        x="280"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Frontend
                      </text>
                      <line
                        x1="280"
                        y1="70"
                        x2="280"
                        y2="550"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* API */}
                      <rect
                        x="410"
                        y="30"
                        width="100"
                        height="40"
                        fill="#10b981"
                        rx="4"
                      />
                      <text
                        x="460"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        API Route
                      </text>
                      <line
                        x1="460"
                        y1="70"
                        x2="460"
                        y2="550"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Auth Service */}
                      <rect
                        x="590"
                        y="30"
                        width="100"
                        height="40"
                        fill="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="640"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Auth Service
                      </text>
                      <line
                        x1="640"
                        y1="70"
                        x2="640"
                        y2="550"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* MongoDB */}
                      <rect
                        x="770"
                        y="30"
                        width="100"
                        height="40"
                        fill="#ef4444"
                        rx="4"
                      />
                      <text
                        x="820"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        MongoDB
                      </text>
                      <line
                        x1="820"
                        y1="70"
                        x2="820"
                        y2="550"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </g>

                    {/* Sequence Messages */}
                    <g className="messages">
                      {/* Step 1 */}
                      <line
                        x1="100"
                        y1="120"
                        x2="270"
                        y2="120"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="185"
                        y="110"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        1. Нэвтрэх форм бөглөх
                      </text>

                      {/* Step 2 */}
                      <line
                        x1="280"
                        y1="160"
                        x2="450"
                        y2="160"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="365"
                        y="150"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        2. POST /api/auth/login
                      </text>

                      {/* Step 3 */}
                      <line
                        x1="460"
                        y1="200"
                        x2="630"
                        y2="200"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="545"
                        y="190"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        3. validateCredentials()
                      </text>

                      {/* Step 4 */}
                      <line
                        x1="640"
                        y1="240"
                        x2="810"
                        y2="240"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="725"
                        y="230"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        4. findOne(email)
                      </text>

                      {/* Step 5 - Return */}
                      <line
                        x1="810"
                        y1="280"
                        x2="650"
                        y2="280"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="725"
                        y="270"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        5. user document
                      </text>

                      {/* Step 6 */}
                      <line
                        x1="640"
                        y1="320"
                        x2="640"
                        y2="350"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                      />
                      <rect
                        x="580"
                        y="320"
                        width="120"
                        height="30"
                        fill="#f3f4f6"
                        stroke="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="640"
                        y="340"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        6. bcrypt.compare()
                      </text>

                      {/* Step 7 */}
                      <line
                        x1="640"
                        y1="380"
                        x2="640"
                        y2="410"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                      />
                      <rect
                        x="580"
                        y="380"
                        width="120"
                        height="30"
                        fill="#f3f4f6"
                        stroke="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="640"
                        y="400"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        7. generateToken()
                      </text>

                      {/* Step 8 - Return */}
                      <line
                        x1="630"
                        y1="440"
                        x2="470"
                        y2="440"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="550"
                        y="430"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        8. JWT token
                      </text>

                      {/* Step 9 - Return */}
                      <line
                        x1="450"
                        y1="480"
                        x2="290"
                        y2="480"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="370"
                        y="470"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        9. {"{"}token, user{"}"}
                      </text>

                      {/* Step 10 */}
                      <line
                        x1="280"
                        y1="520"
                        x2="280"
                        y2="540"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <rect
                        x="200"
                        y="510"
                        width="160"
                        height="30"
                        fill="#f3f4f6"
                        stroke="#3b82f6"
                        rx="4"
                      />
                      <text
                        x="280"
                        y="530"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        10. Cookie-д хадгалах
                      </text>
                    </g>

                    {/* Arrow marker */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Purchase Sequence */}
          <TabsContent value="purchase">
            <Card>
              <CardHeader>
                <CardTitle>Сургалт худалдан авах үйл явц</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 1000 700" className="w-full min-w-[900px]">
                    {/* Actors */}
                    <g className="actors">
                      {/* User */}
                      <rect
                        x="30"
                        y="30"
                        width="80"
                        height="40"
                        fill="#f59e0b"
                        rx="4"
                      />
                      <text
                        x="70"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Хэрэглэгч
                      </text>
                      <line
                        x1="70"
                        y1="70"
                        x2="70"
                        y2="650"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Frontend */}
                      <rect
                        x="160"
                        y="30"
                        width="80"
                        height="40"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <text
                        x="200"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Frontend
                      </text>
                      <line
                        x1="200"
                        y1="70"
                        x2="200"
                        y2="650"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Checkout API */}
                      <rect
                        x="290"
                        y="30"
                        width="80"
                        height="40"
                        fill="#10b981"
                        rx="4"
                      />
                      <text
                        x="330"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Checkout
                      </text>
                      <line
                        x1="330"
                        y1="70"
                        x2="330"
                        y2="650"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Payment Service */}
                      <rect
                        x="420"
                        y="30"
                        width="80"
                        height="40"
                        fill="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="460"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Payment
                      </text>
                      <line
                        x1="460"
                        y1="70"
                        x2="460"
                        y2="650"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* QPay */}
                      <rect
                        x="550"
                        y="30"
                        width="80"
                        height="40"
                        fill="#ec4899"
                        rx="4"
                      />
                      <text
                        x="590"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        QPay
                      </text>
                      <line
                        x1="590"
                        y1="70"
                        x2="590"
                        y2="650"
                        stroke="#ec4899"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* MongoDB */}
                      <rect
                        x="680"
                        y="30"
                        width="80"
                        height="40"
                        fill="#ef4444"
                        rx="4"
                      />
                      <text
                        x="720"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        MongoDB
                      </text>
                      <line
                        x1="720"
                        y1="70"
                        x2="720"
                        y2="650"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* User App */}
                      <rect
                        x="810"
                        y="30"
                        width="80"
                        height="40"
                        fill="#06b6d4"
                        rx="4"
                      />
                      <text
                        x="850"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Bank App
                      </text>
                      <line
                        x1="850"
                        y1="70"
                        x2="850"
                        y2="650"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </g>

                    {/* Sequence Messages */}
                    <g className="messages">
                      {/* Step 1 */}
                      <line
                        x1="70"
                        y1="110"
                        x2="190"
                        y2="110"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="130"
                        y="100"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        1. Худалдаж авах
                      </text>

                      {/* Step 2 */}
                      <line
                        x1="200"
                        y1="140"
                        x2="320"
                        y2="140"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="260"
                        y="130"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        2. POST /payment/create
                      </text>

                      {/* Step 3 */}
                      <line
                        x1="330"
                        y1="170"
                        x2="450"
                        y2="170"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="390"
                        y="160"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        3. createPayment()
                      </text>

                      {/* Step 4 */}
                      <line
                        x1="460"
                        y1="200"
                        x2="580"
                        y2="200"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="520"
                        y="190"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        4. createInvoice()
                      </text>

                      {/* Step 5 - Return QR */}
                      <line
                        x1="580"
                        y1="240"
                        x2="470"
                        y2="240"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="525"
                        y="230"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        5. QR code + invoice
                      </text>

                      {/* Step 6 - Save to DB */}
                      <line
                        x1="460"
                        y1="280"
                        x2="710"
                        y2="280"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="585"
                        y="270"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        6. payments.insertOne()
                      </text>

                      {/* Step 7 - Return */}
                      <line
                        x1="710"
                        y1="310"
                        x2="470"
                        y2="310"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="590"
                        y="300"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        7. payment_id
                      </text>

                      {/* Step 8 */}
                      <line
                        x1="450"
                        y1="350"
                        x2="340"
                        y2="350"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="395"
                        y="340"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        8. QR data
                      </text>

                      {/* Step 9 */}
                      <line
                        x1="320"
                        y1="390"
                        x2="210"
                        y2="390"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="265"
                        y="380"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        9. QR харуулах
                      </text>

                      {/* Step 10 - User scans */}
                      <line
                        x1="70"
                        y1="430"
                        x2="840"
                        y2="430"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="455"
                        y="420"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        10. QR уншуулах / Банк апп-аар төлөх
                      </text>

                      {/* Step 11 - Callback */}
                      <line
                        x1="590"
                        y1="470"
                        x2="470"
                        y2="470"
                        stroke="#22c55e"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="530"
                        y="460"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#22c55e"
                      >
                        11. Webhook callback
                      </text>

                      {/* Step 12 */}
                      <line
                        x1="460"
                        y1="500"
                        x2="710"
                        y2="500"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="585"
                        y="490"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        12. updateOne(status: paid)
                      </text>

                      {/* Step 13 */}
                      <line
                        x1="460"
                        y1="540"
                        x2="710"
                        y2="540"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="585"
                        y="530"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        13. enrollments.insertOne()
                      </text>

                      {/* Step 14 - Notify */}
                      <line
                        x1="450"
                        y1="580"
                        x2="210"
                        y2="580"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="330"
                        y="570"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#22c55e"
                      >
                        14. Төлбөр амжилттай
                      </text>

                      {/* Step 15 */}
                      <line
                        x1="200"
                        y1="620"
                        x2="80"
                        y2="620"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="140"
                        y="610"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#22c55e"
                      >
                        15. Сургалтад хандах
                      </text>
                    </g>

                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Sequence */}
          <TabsContent value="learning">
            <Card>
              <CardHeader>
                <CardTitle>Суралцах үйл явц</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 900 550" className="w-full min-w-[800px]">
                    {/* Actors */}
                    <g className="actors">
                      <rect
                        x="50"
                        y="30"
                        width="100"
                        height="40"
                        fill="#f59e0b"
                        rx="4"
                      />
                      <text
                        x="100"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Суралцагч
                      </text>
                      <line
                        x1="100"
                        y1="70"
                        x2="100"
                        y2="500"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="230"
                        y="30"
                        width="100"
                        height="40"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <text
                        x="280"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Course Page
                      </text>
                      <line
                        x1="280"
                        y1="70"
                        x2="280"
                        y2="500"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="410"
                        y="30"
                        width="100"
                        height="40"
                        fill="#10b981"
                        rx="4"
                      />
                      <text
                        x="460"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        API
                      </text>
                      <line
                        x1="460"
                        y1="70"
                        x2="460"
                        y2="500"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="590"
                        y="30"
                        width="100"
                        height="40"
                        fill="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="640"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Progress
                      </text>
                      <line
                        x1="640"
                        y1="70"
                        x2="640"
                        y2="500"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="770"
                        y="30"
                        width="100"
                        height="40"
                        fill="#ef4444"
                        rx="4"
                      />
                      <text
                        x="820"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        MongoDB
                      </text>
                      <line
                        x1="820"
                        y1="70"
                        x2="820"
                        y2="500"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </g>

                    <g className="messages">
                      <line
                        x1="100"
                        y1="110"
                        x2="270"
                        y2="110"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="185"
                        y="100"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        1. Хичээл сонгох
                      </text>

                      <line
                        x1="280"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="365"
                        y="140"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        2. GET /api/lessons/{"{id}"}
                      </text>

                      <line
                        x1="460"
                        y1="190"
                        x2="810"
                        y2="190"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="635"
                        y="180"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        3. lessons.findOne()
                      </text>

                      <line
                        x1="810"
                        y1="230"
                        x2="470"
                        y2="230"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="640"
                        y="220"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        4. lesson data
                      </text>

                      <line
                        x1="450"
                        y1="270"
                        x2="290"
                        y2="270"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="370"
                        y="260"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        5. Видео + агуулга
                      </text>

                      <line
                        x1="270"
                        y1="310"
                        x2="110"
                        y2="310"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="190"
                        y="300"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        6. Хичээл үзэх
                      </text>

                      <line
                        x1="100"
                        y1="350"
                        x2="270"
                        y2="350"
                        stroke="#22c55e"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="185"
                        y="340"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#22c55e"
                      >
                        7. Дуусгах товч
                      </text>

                      <line
                        x1="280"
                        y1="390"
                        x2="630"
                        y2="390"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="455"
                        y="380"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        8. POST /api/progress
                      </text>

                      <line
                        x1="640"
                        y1="430"
                        x2="810"
                        y2="430"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="725"
                        y="420"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        9. updateProgress()
                      </text>

                      <line
                        x1="630"
                        y1="470"
                        x2="110"
                        y2="470"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="370"
                        y="460"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#22c55e"
                      >
                        10. Явц шинэчлэгдсэн
                      </text>
                    </g>

                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Tutor Sequence */}
          <TabsContent value="ai">
            <Card>
              <CardHeader>
                <CardTitle>AI Туслах үйл явц</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 900 500" className="w-full min-w-[800px]">
                    {/* Actors */}
                    <g className="actors">
                      <rect
                        x="50"
                        y="30"
                        width="100"
                        height="40"
                        fill="#f59e0b"
                        rx="4"
                      />
                      <text
                        x="100"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        Суралцагч
                      </text>
                      <line
                        x1="100"
                        y1="70"
                        x2="100"
                        y2="450"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="250"
                        y="30"
                        width="100"
                        height="40"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <text
                        x="300"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        AI Chat UI
                      </text>
                      <line
                        x1="300"
                        y1="70"
                        x2="300"
                        y2="450"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="450"
                        y="30"
                        width="100"
                        height="40"
                        fill="#10b981"
                        rx="4"
                      />
                      <text
                        x="500"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        AI API Route
                      </text>
                      <line
                        x1="500"
                        y1="70"
                        x2="500"
                        y2="450"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      <rect
                        x="650"
                        y="30"
                        width="120"
                        height="40"
                        fill="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="710"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        OpenAI / Vercel AI
                      </text>
                      <line
                        x1="710"
                        y1="70"
                        x2="710"
                        y2="450"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </g>

                    <g className="messages">
                      <line
                        x1="100"
                        y1="110"
                        x2="290"
                        y2="110"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="195"
                        y="100"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        1. Асуулт бичих
                      </text>

                      <line
                        x1="300"
                        y1="150"
                        x2="490"
                        y2="150"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="395"
                        y="140"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        2. POST /api/ai/chat
                      </text>

                      <rect
                        x="420"
                        y="180"
                        width="160"
                        height="40"
                        fill="#f3f4f6"
                        stroke="#10b981"
                        rx="4"
                      />
                      <text
                        x="500"
                        y="200"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        3. System prompt +
                      </text>
                      <text
                        x="500"
                        y="215"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        context боловсруулах
                      </text>

                      <line
                        x1="500"
                        y1="240"
                        x2="700"
                        y2="240"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="600"
                        y="230"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#374151"
                      >
                        4. streamText()
                      </text>

                      <rect
                        x="630"
                        y="260"
                        width="160"
                        height="30"
                        fill="#f3f4f6"
                        stroke="#8b5cf6"
                        rx="4"
                      />
                      <text
                        x="710"
                        y="280"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        5. AI хариу боловсруулах
                      </text>

                      <line
                        x1="700"
                        y1="310"
                        x2="510"
                        y2="310"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="605"
                        y="300"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#8b5cf6"
                      >
                        6. Stream chunks
                      </text>

                      <line
                        x1="490"
                        y1="350"
                        x2="310"
                        y2="350"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="400"
                        y="340"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#8b5cf6"
                      >
                        7. ReadableStream
                      </text>

                      <line
                        x1="290"
                        y1="390"
                        x2="110"
                        y2="390"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead)"
                      />
                      <text
                        x="200"
                        y="380"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#22c55e"
                      >
                        8. Хариу real-time харуулах
                      </text>

                      <rect
                        x="30"
                        y="410"
                        width="140"
                        height="30"
                        fill="#fef3c7"
                        stroke="#f59e0b"
                        rx="4"
                      />
                      <text
                        x="100"
                        y="430"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#374151"
                      >
                        Суралцагч хариу унших
                      </text>
                    </g>

                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
