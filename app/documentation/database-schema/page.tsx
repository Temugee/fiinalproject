"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DatabaseSchemaPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Database Schema
          </h1>
          <p className="text-muted-foreground text-lg">
            Батаагийн Зөгийн Бал - MongoDB Өгөгдлийн сангийн бүтэц
          </p>
        </div>

        {/* ER Diagram */}
        <Card>
          <CardHeader>
            <CardTitle>Entity Relationship Diagram (ERD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <svg viewBox="0 0 1200 700" className="w-full min-w-[1000px]">
                {/* Users Collection */}
                <g transform="translate(50, 50)">
                  <rect width="220" height="200" fill="#3b82f6" rx="8" />
                  <rect
                    y="40"
                    width="220"
                    height="160"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="110"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    users
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="180" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    name: String
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    email: String
                  </text>
                  <text x="170" y="105" fontSize="10" fill="#22c55e">
                    unique
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    password: String
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    role: String
                  </text>
                  <text x="170" y="145" fontSize="10" fill="#8b5cf6">
                    enum
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    avatar: String
                  </text>
                  <text x="15" y="185" fontSize="12" fill="#374151">
                    createdAt: Date
                  </text>
                </g>

                {/* Courses Collection */}
                <g transform="translate(350, 50)">
                  <rect width="250" height="280" fill="#10b981" rx="8" />
                  <rect
                    y="40"
                    width="250"
                    height="240"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="125"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    courses
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="210" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    title: String
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    description: String
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    instructor: String
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    price: Number
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    isFree: Boolean
                  </text>
                  <text x="15" y="185" fontSize="12" fill="#374151">
                    category: String
                  </text>
                  <text x="15" y="205" fontSize="12" fill="#374151">
                    thumbnail: String
                  </text>
                  <text x="15" y="225" fontSize="12" fill="#374151">
                    level: String
                  </text>
                  <text x="180" y="225" fontSize="10" fill="#8b5cf6">
                    enum
                  </text>
                  <text x="15" y="245" fontSize="12" fill="#374151">
                    duration: String
                  </text>
                  <text x="15" y="265" fontSize="12" fill="#374151">
                    isPublished: Boolean
                  </text>
                </g>

                {/* Lessons Collection */}
                <g transform="translate(680, 50)">
                  <rect width="220" height="220" fill="#8b5cf6" rx="8" />
                  <rect
                    y="40"
                    width="220"
                    height="180"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="110"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    lessons
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="180" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    courseId: ObjectId
                  </text>
                  <text x="180" y="85" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    title: String
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    content: String
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    videoUrl: String
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    duration: Number
                  </text>
                  <text x="15" y="185" fontSize="12" fill="#374151">
                    order: Number
                  </text>
                  <text x="15" y="205" fontSize="12" fill="#374151">
                    isFree: Boolean
                  </text>
                </g>

                {/* Enrollments Collection */}
                <g transform="translate(50, 320)">
                  <rect width="220" height="180" fill="#f59e0b" rx="8" />
                  <rect
                    y="40"
                    width="220"
                    height="140"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="110"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    enrollments
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="180" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    userId: ObjectId
                  </text>
                  <text x="180" y="85" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    courseId: ObjectId
                  </text>
                  <text x="180" y="105" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    enrolledAt: Date
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    completedAt: Date
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    progress: Number
                  </text>
                </g>

                {/* Progress Collection */}
                <g transform="translate(350, 380)">
                  <rect width="250" height="160" fill="#ec4899" rx="8" />
                  <rect
                    y="40"
                    width="250"
                    height="120"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="125"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    progress
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="210" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    userId: ObjectId
                  </text>
                  <text x="210" y="85" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    lessonId: ObjectId
                  </text>
                  <text x="210" y="105" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    completed: Boolean
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    completedAt: Date
                  </text>
                </g>

                {/* Payments Collection */}
                <g transform="translate(680, 320)">
                  <rect width="260" height="260" fill="#ef4444" rx="8" />
                  <rect
                    y="40"
                    width="260"
                    height="220"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="130"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    payments
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="220" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    userId: ObjectId
                  </text>
                  <text x="220" y="85" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    courseId: ObjectId
                  </text>
                  <text x="220" y="105" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    amount: Number
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    method: String
                  </text>
                  <text x="210" y="145" fontSize="10" fill="#8b5cf6">
                    enum
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    status: String
                  </text>
                  <text x="210" y="165" fontSize="10" fill="#8b5cf6">
                    enum
                  </text>
                  <text x="15" y="185" fontSize="12" fill="#374151">
                    invoiceId: String
                  </text>
                  <text x="15" y="205" fontSize="12" fill="#374151">
                    qrCode: String
                  </text>
                  <text x="15" y="225" fontSize="12" fill="#374151">
                    transactionId: String
                  </text>
                  <text x="15" y="245" fontSize="12" fill="#374151">
                    createdAt: Date
                  </text>
                </g>

                {/* AI Chats Collection */}
                <g transform="translate(980, 50)">
                  <rect width="180" height="180" fill="#06b6d4" rx="8" />
                  <rect
                    y="40"
                    width="180"
                    height="140"
                    fill="white"
                    rx="0 0 8 8"
                  />
                  <text
                    x="90"
                    y="28"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    ai_chats
                  </text>

                  <text x="15" y="65" fontSize="12" fill="#374151">
                    _id: ObjectId
                  </text>
                  <text x="140" y="65" fontSize="10" fill="#f59e0b">
                    PK
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#374151">
                    userId: ObjectId
                  </text>
                  <text x="140" y="85" fontSize="10" fill="#ef4444">
                    FK
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#374151">
                    messages: Array
                  </text>
                  <text x="15" y="125" fontSize="12" fill="#374151">
                    courseId: ObjectId
                  </text>
                  <text x="15" y="145" fontSize="12" fill="#374151">
                    createdAt: Date
                  </text>
                  <text x="15" y="165" fontSize="12" fill="#374151">
                    updatedAt: Date
                  </text>
                </g>

                {/* Relationships */}
                {/* Users -> Enrollments */}
                <path
                  d="M 160 250 L 160 320"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow)"
                />
                <text x="170" y="285" fontSize="11" fill="#374151">
                  1:N
                </text>

                {/* Courses -> Enrollments */}
                <path
                  d="M 475 330 L 270 410"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow)"
                />
                <text x="380" y="360" fontSize="11" fill="#374151">
                  1:N
                </text>

                {/* Courses -> Lessons */}
                <path
                  d="M 600 175 L 680 175"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow)"
                />
                <text x="630" y="165" fontSize="11" fill="#374151">
                  1:N
                </text>

                {/* Users -> Progress */}
                <path
                  d="M 160 250 Q 160 460 350 460"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  markerEnd="url(#arrow)"
                />

                {/* Lessons -> Progress */}
                <path
                  d="M 790 270 L 600 460"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  markerEnd="url(#arrow)"
                />

                {/* Users -> Payments */}
                <path
                  d="M 270 320 Q 450 300 680 400"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow)"
                />

                {/* Courses -> Payments */}
                <path
                  d="M 600 270 L 680 370"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow)"
                />

                {/* Users -> AI Chats */}
                <path
                  d="M 270 150 L 980 150"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  markerEnd="url(#arrow)"
                />

                <defs>
                  <marker
                    id="arrow"
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

        {/* Detailed Schema Tables */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-500 rounded" />
                  users Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">name</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Хэрэглэгчийн нэр</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">email</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>И-мэйл хаяг</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>{" "}
                        <Badge className="bg-green-500">Unique</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">password</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Шифрлэгдсэн нууц үг (bcrypt)</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">role</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Хэрэглэгчийн эрх (user/admin)</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500">Enum</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">avatar</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Профайл зургийн URL</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">createdAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Бүртгүүлсэн огноо</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500">Auto</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-emerald-500 rounded" />
                  courses Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">title</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Сургалтын нэр</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">description</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Сургалтын тайлбар</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">instructor</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Багшийн нэр</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">price</TableCell>
                      <TableCell>
                        <Badge variant="outline">Number</Badge>
                      </TableCell>
                      <TableCell>Үнэ (₮)</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">isFree</TableCell>
                      <TableCell>
                        <Badge variant="outline">Boolean</Badge>
                      </TableCell>
                      <TableCell>Үнэгүй эсэх</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default: false</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">category</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Ангилал</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">thumbnail</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Зургийн URL</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">level</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>
                        Түвшин (beginner/intermediate/advanced)
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500">Enum</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">duration</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Нийт үргэлжлэх хугацаа</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">isPublished</TableCell>
                      <TableCell>
                        <Badge variant="outline">Boolean</Badge>
                      </TableCell>
                      <TableCell>Нийтлэгдсэн эсэх</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default: false</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lessons">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-purple-500 rounded" />
                  lessons Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">courseId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Сургалтын ID (courses руу холбоос)</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">title</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Хичээлийн нэр</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">content</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Хичээлийн агуулга (HTML/Markdown)</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">videoUrl</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Видео хичээлийн URL</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">duration</TableCell>
                      <TableCell>
                        <Badge variant="outline">Number</Badge>
                      </TableCell>
                      <TableCell>Үргэлжлэх хугацаа (минут)</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">order</TableCell>
                      <TableCell>
                        <Badge variant="outline">Number</Badge>
                      </TableCell>
                      <TableCell>Дараалал</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">isFree</TableCell>
                      <TableCell>
                        <Badge variant="outline">Boolean</Badge>
                      </TableCell>
                      <TableCell>Үнэгүй үзүүлэх хичээл</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default: false</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enrollments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-amber-500 rounded" />
                  enrollments Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">userId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Хэрэглэгчийн ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">courseId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Сургалтын ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">enrolledAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Бүртгүүлсэн огноо</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500">Auto</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">completedAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Дуусгасан огноо</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Nullable</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">progress</TableCell>
                      <TableCell>
                        <Badge variant="outline">Number</Badge>
                      </TableCell>
                      <TableCell>Явцын хувь (0-100)</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default: 0</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Индекс:</strong> userId + courseId нь давхардахгүй
                    байх (unique compound index)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-500 rounded" />
                  payments Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">userId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Хэрэглэгчийн ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">courseId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Сургалтын ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">amount</TableCell>
                      <TableCell>
                        <Badge variant="outline">Number</Badge>
                      </TableCell>
                      <TableCell>Төлбөрийн дүн (₮)</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Required</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">method</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Төлбөрийн арга</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500">
                          Enum: qpay, khanbank, socialpay
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">status</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Төлбөрийн төлөв</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500">
                          Enum: pending, paid, failed, refunded
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">invoiceId</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Нэхэмжлэлийн дугаар (QPay)</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">qrCode</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>QR код (Base64)</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">transactionId</TableCell>
                      <TableCell>
                        <Badge variant="outline">String</Badge>
                      </TableCell>
                      <TableCell>Гүйлгээний дугаар</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Optional</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">createdAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Үүсгэсэн огноо</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500">Auto</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">paidAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Төлсөн огноо</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Nullable</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-pink-500 rounded" />
                  progress Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Талбар</TableHead>
                      <TableHead>Төрөл</TableHead>
                      <TableHead>Тайлбар</TableHead>
                      <TableHead>Шаардлага</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">_id</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Үндсэн түлхүүр</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Primary Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">userId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Хэрэглэгчийн ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">lessonId</TableCell>
                      <TableCell>
                        <Badge variant="outline">ObjectId</Badge>
                      </TableCell>
                      <TableCell>Хичээлийн ID</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Foreign Key</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">completed</TableCell>
                      <TableCell>
                        <Badge variant="outline">Boolean</Badge>
                      </TableCell>
                      <TableCell>Дуусгасан эсэх</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default: false</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">completedAt</TableCell>
                      <TableCell>
                        <Badge variant="outline">Date</Badge>
                      </TableCell>
                      <TableCell>Дуусгасан огноо</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Nullable</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Индекс:</strong> userId + lessonId нь давхардахгүй
                    байх (unique compound index)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* MongoDB Indexes */}
        <Card>
          <CardHeader>
            <CardTitle>MongoDB Индексүүд</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // users collection
                </p>
                <p>
                  db.users.createIndex({"{"} email: 1 {"}"}, {"{"} unique: true{" "}
                  {"}"})
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // courses collection
                </p>
                <p>
                  db.courses.createIndex({"{"} category: 1 {"}"})
                </p>
                <p>
                  db.courses.createIndex({"{"} isPublished: 1 {"}"})
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // lessons collection
                </p>
                <p>
                  db.lessons.createIndex({"{"} courseId: 1, order: 1 {"}"})
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // enrollments collection
                </p>
                <p>
                  db.enrollments.createIndex({"{"} userId: 1, courseId: 1 {"}"},{" "}
                  {"{"} unique: true {"}"})
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // payments collection
                </p>
                <p>
                  db.payments.createIndex({"{"} userId: 1 {"}"})
                </p>
                <p>
                  db.payments.createIndex({"{"} status: 1 {"}"})
                </p>
                <p>
                  db.payments.createIndex({"{"} invoiceId: 1 {"}"})
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  // progress collection
                </p>
                <p>
                  db.progress.createIndex({"{"} userId: 1, lessonId: 1 {"}"},{" "}
                  {"{"} unique: true {"}"})
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
