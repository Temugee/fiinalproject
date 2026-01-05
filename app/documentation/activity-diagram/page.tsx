"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ActivityDiagramPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Activity Diagram
          </h1>
          <p className="text-muted-foreground text-lg">
            Батаагийн Зөгийн Бал - Үйл ажиллагааны диаграм
          </p>
        </div>

        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="registration">Бүртгэл</TabsTrigger>
            <TabsTrigger value="purchase">Худалдан авалт</TabsTrigger>
            <TabsTrigger value="learning">Суралцах</TabsTrigger>
            <TabsTrigger value="admin">Админ</TabsTrigger>
          </TabsList>

          {/* Registration Activity */}
          <TabsContent value="registration">
            <Card>
              <CardHeader>
                <CardTitle>Хэрэглэгч бүртгүүлэх үйл ажиллагаа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg
                    viewBox="0 0 600 800"
                    className="w-full max-w-2xl mx-auto"
                  >
                    {/* Start */}
                    <circle cx="300" cy="30" r="15" fill="#1f2937" />

                    {/* Arrow to first action */}
                    <line
                      x1="300"
                      y1="45"
                      x2="300"
                      y2="70"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 1: Open registration page */}
                    <rect
                      x="150"
                      y="80"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="300"
                      y="110"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Бүртгэлийн хуудас нээх
                    </text>

                    <line
                      x1="300"
                      y1="130"
                      x2="300"
                      y2="160"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 2: Fill form */}
                    <rect
                      x="150"
                      y="170"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="300"
                      y="200"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Мэдээлэл оруулах (Нэр, И-мэйл, Нууц үг)
                    </text>

                    <line
                      x1="300"
                      y1="220"
                      x2="300"
                      y2="250"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision 1: Valid data? */}
                    <polygon
                      points="300,260 380,310 300,360 220,310"
                      fill="#f59e0b"
                    />
                    <text
                      x="300"
                      y="315"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Мэдээлэл
                    </text>
                    <text
                      x="300"
                      y="330"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      зөв үү?
                    </text>

                    {/* No branch */}
                    <line
                      x1="220"
                      y1="310"
                      x2="100"
                      y2="310"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="310"
                      x2="100"
                      y2="195"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="195"
                      x2="150"
                      y2="195"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="130" y="300" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* Yes branch */}
                    <line
                      x1="300"
                      y1="360"
                      x2="300"
                      y2="390"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="320" y="380" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* Action 3: Check email exists */}
                    <rect
                      x="150"
                      y="400"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="300"
                      y="430"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      И-мэйл давхардал шалгах
                    </text>

                    <line
                      x1="300"
                      y1="450"
                      x2="300"
                      y2="480"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision 2: Email exists? */}
                    <polygon
                      points="300,490 380,540 300,590 220,540"
                      fill="#f59e0b"
                    />
                    <text
                      x="300"
                      y="540"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      И-мэйл
                    </text>
                    <text
                      x="300"
                      y="555"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      бүртгэлтэй?
                    </text>

                    {/* Yes - error */}
                    <line
                      x1="380"
                      y1="540"
                      x2="500"
                      y2="540"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <rect
                      x="450"
                      y="515"
                      width="120"
                      height="50"
                      fill="#ef4444"
                      rx="8"
                    />
                    <text
                      x="510"
                      y="545"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Алдаа харуулах
                    </text>
                    <text x="420" y="530" fontSize="12" fill="#ef4444">
                      Тийм
                    </text>

                    {/* No branch - continue */}
                    <line
                      x1="300"
                      y1="590"
                      x2="300"
                      y2="620"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="320" y="610" fontSize="12" fill="#22c55e">
                      Үгүй
                    </text>

                    {/* Action 4: Hash password */}
                    <rect
                      x="150"
                      y="630"
                      width="300"
                      height="50"
                      fill="#8b5cf6"
                      rx="8"
                    />
                    <text
                      x="300"
                      y="660"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Нууц үг шифрлэх (bcrypt)
                    </text>

                    <line
                      x1="300"
                      y1="680"
                      x2="300"
                      y2="710"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 5: Save to DB */}
                    <rect
                      x="150"
                      y="720"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="300"
                      y="750"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      MongoDB-д хадгалах
                    </text>

                    <line
                      x1="300"
                      y1="770"
                      x2="300"
                      y2="800"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* End */}
                    <circle
                      cx="300"
                      cy="820"
                      r="12"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="3"
                    />
                    <circle cx="300" cy="820" r="8" fill="#1f2937" />

                    <defs>
                      <marker
                        id="arrowhead2"
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

          {/* Purchase Activity */}
          <TabsContent value="purchase">
            <Card>
              <CardHeader>
                <CardTitle>Сургалт худалдан авах үйл ажиллагаа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg
                    viewBox="0 0 700 950"
                    className="w-full max-w-2xl mx-auto"
                  >
                    {/* Start */}
                    <circle cx="350" cy="30" r="15" fill="#1f2937" />

                    <line
                      x1="350"
                      y1="45"
                      x2="350"
                      y2="70"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 1 */}
                    <rect
                      x="200"
                      y="80"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="110"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Сургалт сонгох
                    </text>

                    <line
                      x1="350"
                      y1="130"
                      x2="350"
                      y2="160"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision: Free or Paid? */}
                    <polygon
                      points="350,170 440,220 350,270 260,220"
                      fill="#f59e0b"
                    />
                    <text
                      x="350"
                      y="220"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Үнэгүй үү?
                    </text>

                    {/* Free branch */}
                    <line
                      x1="260"
                      y1="220"
                      x2="100"
                      y2="220"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="220"
                      x2="100"
                      y2="850"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="850"
                      x2="200"
                      y2="850"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="150" y="210" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* Paid branch */}
                    <line
                      x1="350"
                      y1="270"
                      x2="350"
                      y2="300"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="370" y="290" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* Action 2 */}
                    <rect
                      x="200"
                      y="310"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="340"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Төлбөрийн хуудас руу очих
                    </text>

                    <line
                      x1="350"
                      y1="360"
                      x2="350"
                      y2="390"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 3 */}
                    <rect
                      x="200"
                      y="400"
                      width="300"
                      height="50"
                      fill="#ec4899"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="430"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Төлбөрийн арга сонгох (QPay/Khan)
                    </text>

                    <line
                      x1="350"
                      y1="450"
                      x2="350"
                      y2="480"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 4 */}
                    <rect
                      x="200"
                      y="490"
                      width="300"
                      height="50"
                      fill="#8b5cf6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="520"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      QR код үүсгэх
                    </text>

                    <line
                      x1="350"
                      y1="540"
                      x2="350"
                      y2="570"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 5 */}
                    <rect
                      x="200"
                      y="580"
                      width="300"
                      height="50"
                      fill="#06b6d4"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="610"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Банк апп-аар QR уншуулах
                    </text>

                    <line
                      x1="350"
                      y1="630"
                      x2="350"
                      y2="660"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision: Payment success? */}
                    <polygon
                      points="350,670 440,720 350,770 260,720"
                      fill="#f59e0b"
                    />
                    <text
                      x="350"
                      y="715"
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      Төлбөр
                    </text>
                    <text
                      x="350"
                      y="730"
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      амжилттай?
                    </text>

                    {/* Failed branch */}
                    <line
                      x1="440"
                      y1="720"
                      x2="550"
                      y2="720"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <rect
                      x="520"
                      y="695"
                      width="140"
                      height="50"
                      fill="#ef4444"
                      rx="8"
                    />
                    <text
                      x="590"
                      y="725"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Алдаа харуулах
                    </text>
                    <text x="480" y="710" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* Success branch */}
                    <line
                      x1="350"
                      y1="770"
                      x2="350"
                      y2="800"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="370" y="790" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* Action 6 */}
                    <rect
                      x="200"
                      y="810"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="840"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Бүртгэл үүсгэх (Enrollment)
                    </text>

                    <line
                      x1="350"
                      y1="860"
                      x2="350"
                      y2="890"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* End */}
                    <circle
                      cx="350"
                      cy="910"
                      r="12"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="3"
                    />
                    <circle cx="350" cy="910" r="8" fill="#1f2937" />

                    <defs>
                      <marker
                        id="arrowhead2"
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

          {/* Learning Activity */}
          <TabsContent value="learning">
            <Card>
              <CardHeader>
                <CardTitle>Суралцах үйл ажиллагаа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg
                    viewBox="0 0 700 900"
                    className="w-full max-w-2xl mx-auto"
                  >
                    {/* Start */}
                    <circle cx="350" cy="30" r="15" fill="#1f2937" />

                    <line
                      x1="350"
                      y1="45"
                      x2="350"
                      y2="70"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 1 */}
                    <rect
                      x="200"
                      y="80"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="110"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Миний сургалтууд хуудас нээх
                    </text>

                    <line
                      x1="350"
                      y1="130"
                      x2="350"
                      y2="160"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 2 */}
                    <rect
                      x="200"
                      y="170"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="200"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Сургалт сонгох
                    </text>

                    <line
                      x1="350"
                      y1="220"
                      x2="350"
                      y2="250"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 3 */}
                    <rect
                      x="200"
                      y="260"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="290"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Хичээлийн жагсаалт ачаалах
                    </text>

                    <line
                      x1="350"
                      y1="310"
                      x2="350"
                      y2="340"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Fork - parallel activities */}
                    <rect
                      x="200"
                      y="350"
                      width="300"
                      height="8"
                      fill="#1f2937"
                      rx="2"
                    />

                    {/* Branch 1: Watch video */}
                    <line
                      x1="280"
                      y1="358"
                      x2="280"
                      y2="390"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <rect
                      x="180"
                      y="400"
                      width="200"
                      height="50"
                      fill="#8b5cf6"
                      rx="8"
                    />
                    <text
                      x="280"
                      y="430"
                      textAnchor="middle"
                      fill="white"
                      fontSize="13"
                    >
                      Видео хичээл үзэх
                    </text>

                    {/* Branch 2: AI Tutor */}
                    <line
                      x1="420"
                      y1="358"
                      x2="420"
                      y2="390"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <rect
                      x="320"
                      y="400"
                      width="200"
                      height="50"
                      fill="#ec4899"
                      rx="8"
                    />
                    <text
                      x="420"
                      y="430"
                      textAnchor="middle"
                      fill="white"
                      fontSize="13"
                    >
                      AI Туслахаас асуух
                    </text>

                    <line
                      x1="280"
                      y1="450"
                      x2="280"
                      y2="480"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="420"
                      y1="450"
                      x2="420"
                      y2="480"
                      stroke="#374151"
                      strokeWidth="2"
                    />

                    {/* Join */}
                    <rect
                      x="200"
                      y="490"
                      width="300"
                      height="8"
                      fill="#1f2937"
                      rx="2"
                    />

                    <line
                      x1="350"
                      y1="498"
                      x2="350"
                      y2="530"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 4 */}
                    <rect
                      x="200"
                      y="540"
                      width="300"
                      height="50"
                      fill="#f59e0b"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="570"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Хичээл дуусгах товч дарах
                    </text>

                    <line
                      x1="350"
                      y1="590"
                      x2="350"
                      y2="620"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 5 */}
                    <rect
                      x="200"
                      y="630"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="660"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Явц хадгалах (Progress)
                    </text>

                    <line
                      x1="350"
                      y1="680"
                      x2="350"
                      y2="710"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision: More lessons? */}
                    <polygon
                      points="350,720 440,770 350,820 260,770"
                      fill="#f59e0b"
                    />
                    <text
                      x="350"
                      y="765"
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      Дараагийн
                    </text>
                    <text
                      x="350"
                      y="780"
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      хичээл?
                    </text>

                    {/* Yes - loop back */}
                    <line
                      x1="260"
                      y1="770"
                      x2="120"
                      y2="770"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="120"
                      y1="770"
                      x2="120"
                      y2="285"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="120"
                      y1="285"
                      x2="200"
                      y2="285"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="170" y="760" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* No - end */}
                    <line
                      x1="350"
                      y1="820"
                      x2="350"
                      y2="850"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="370" y="840" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* End */}
                    <circle
                      cx="350"
                      cy="870"
                      r="12"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="3"
                    />
                    <circle cx="350" cy="870" r="8" fill="#1f2937" />

                    <defs>
                      <marker
                        id="arrowhead2"
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

          {/* Admin Activity */}
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Админ сургалт удирдах үйл ажиллагаа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <svg
                    viewBox="0 0 700 850"
                    className="w-full max-w-2xl mx-auto"
                  >
                    {/* Start */}
                    <circle cx="350" cy="30" r="15" fill="#1f2937" />

                    <line
                      x1="350"
                      y1="45"
                      x2="350"
                      y2="70"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 1 */}
                    <rect
                      x="200"
                      y="80"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="110"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Админ панел нэвтрэх
                    </text>

                    <line
                      x1="350"
                      y1="130"
                      x2="350"
                      y2="160"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision: Admin role? */}
                    <polygon
                      points="350,170 440,220 350,270 260,220"
                      fill="#f59e0b"
                    />
                    <text
                      x="350"
                      y="220"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Админ эрхтэй?
                    </text>

                    {/* No - redirect */}
                    <line
                      x1="440"
                      y1="220"
                      x2="550"
                      y2="220"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <rect
                      x="520"
                      y="195"
                      width="140"
                      height="50"
                      fill="#ef4444"
                      rx="8"
                    />
                    <text
                      x="590"
                      y="225"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Хандалт хориглох
                    </text>
                    <text x="480" y="210" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* Yes branch */}
                    <line
                      x1="350"
                      y1="270"
                      x2="350"
                      y2="300"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="370" y="290" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* Action 2 */}
                    <rect
                      x="200"
                      y="310"
                      width="300"
                      height="50"
                      fill="#8b5cf6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="340"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Шинэ сургалт үүсгэх
                    </text>

                    <line
                      x1="350"
                      y1="360"
                      x2="350"
                      y2="390"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 3 */}
                    <rect
                      x="200"
                      y="400"
                      width="300"
                      height="50"
                      fill="#3b82f6"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="430"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Сургалтын мэдээлэл оруулах
                    </text>

                    <line
                      x1="350"
                      y1="450"
                      x2="350"
                      y2="480"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Decision: Free or Paid? */}
                    <polygon
                      points="350,490 440,540 350,590 260,540"
                      fill="#f59e0b"
                    />
                    <text
                      x="350"
                      y="540"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Төлбөртэй?
                    </text>

                    {/* Yes - set price */}
                    <line
                      x1="440"
                      y1="540"
                      x2="550"
                      y2="540"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <rect
                      x="520"
                      y="515"
                      width="140"
                      height="50"
                      fill="#ec4899"
                      rx="8"
                    />
                    <text
                      x="590"
                      y="545"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      Үнэ тохируулах
                    </text>
                    <line
                      x1="590"
                      y1="565"
                      x2="590"
                      y2="620"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <line
                      x1="590"
                      y1="620"
                      x2="350"
                      y2="620"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <text x="480" y="530" fontSize="12" fill="#22c55e">
                      Тийм
                    </text>

                    {/* No - free */}
                    <line
                      x1="350"
                      y1="590"
                      x2="350"
                      y2="630"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />
                    <text x="370" y="610" fontSize="12" fill="#ef4444">
                      Үгүй
                    </text>

                    {/* Action 4 */}
                    <rect
                      x="200"
                      y="640"
                      width="300"
                      height="50"
                      fill="#10b981"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="670"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Хичээлүүд нэмэх
                    </text>

                    <line
                      x1="350"
                      y1="690"
                      x2="350"
                      y2="720"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* Action 5 */}
                    <rect
                      x="200"
                      y="730"
                      width="300"
                      height="50"
                      fill="#06b6d4"
                      rx="8"
                    />
                    <text
                      x="350"
                      y="760"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                    >
                      Сургалт нийтлэх
                    </text>

                    <line
                      x1="350"
                      y1="780"
                      x2="350"
                      y2="810"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead2)"
                    />

                    {/* End */}
                    <circle
                      cx="350"
                      cy="830"
                      r="12"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="3"
                    />
                    <circle cx="350" cy="830" r="8" fill="#1f2937" />

                    <defs>
                      <marker
                        id="arrowhead2"
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
