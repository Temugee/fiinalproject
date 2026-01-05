"use client"
import { use } from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Loader2, CheckCircle, QrCode, Smartphone, Shield, Clock } from "lucide-react"
import { toast } from "sonner"

interface PaymentData {
  invoiceId: string
  qrCode: string
  deepLinks: { name: string; logo: string; link: string }[]
  amount: number
  courseName: string
}

// Sample course data
const courseData: Record<string, { title: string; price: number; thumbnail: string }> = {
  "2": { title: "Python програмчлал", price: 89000, thumbnail: "/python-programming-concept.png" },
  "3": { title: "UI/UX Дизайн", price: 129000, thumbnail: "/ui-ux-design-figma.jpg" },
  "4": { title: "Дата шинжилгээ", price: 149000, thumbnail: "/data-analysis-charts.png" },
  "6": { title: "Дижитал маркетинг", price: 79000, thumbnail: "/digital-marketing-concept.png" },
}

export default function CheckoutPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("qpay")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const course = courseData[courseId]

  useEffect(() => {
    if (!course) {
      router.push("/courses")
    }
  }, [course, router])

  // Poll for payment status
  useEffect(() => {
    if (!paymentData) return

    const interval = setInterval(async () => {
      setIsChecking(true)
      try {
        const res = await fetch("/api/payment/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ invoiceId: paymentData.invoiceId }),
        })

        const data = await res.json()

        if (data.paid) {
          toast.success("Төлбөр амжилттай хийгдлээ!")
          router.push(`/courses/${courseId}/learn`)
        }
      } catch (error) {
        console.error("Check error:", error)
      } finally {
        setIsChecking(false)
      }
    }, 5000) // Check every 5 seconds

    return () => clearInterval(interval)
  }, [paymentData, courseId, router])

  const handleCreatePayment = async () => {
    setIsLoading(true)

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, method: paymentMethod }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Төлбөр үүсгэхэд алдаа гарлаа")
      }

      setPaymentData(data.payment)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Алдаа гарлаа")
    } finally {
      setIsLoading(false)
    }
  }

  // Demo: Simulate successful payment
  const handleDemoPayment = async () => {
    toast.success("Demo: Төлбөр амжилттай!")
    router.push(`/courses/${courseId}/learn`)
  }

  if (!course) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/courses/${courseId}`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Төлбөр төлөх</h1>
            <p className="text-muted-foreground">Сургалтанд элсэх</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Payment Section */}
          <div className="lg:col-span-2">
            {!paymentData ? (
              <Card>
                <CardHeader>
                  <CardTitle>Төлбөрийн хэлбэр сонгох</CardTitle>
                  <CardDescription>Монголын банкуудын аппликэйшнээр төлнө үү</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                      <RadioGroupItem value="qpay" id="qpay" />
                      <Label htmlFor="qpay" className="flex flex-1 cursor-pointer items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00A859]">
                          <QrCode className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">QPay</p>
                          <p className="text-sm text-muted-foreground">QR код уншуулах эсвэл банкны апп</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                      <RadioGroupItem value="khanbank" id="khanbank" />
                      <Label htmlFor="khanbank" className="flex flex-1 cursor-pointer items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#004990]">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Хаан банк</p>
                          <p className="text-sm text-muted-foreground">Khan Bank Mobile App</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                      <RadioGroupItem value="socialpay" id="socialpay" />
                      <Label htmlFor="socialpay" className="flex flex-1 cursor-pointer items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6B00]">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">SocialPay</p>
                          <p className="text-sm text-muted-foreground">SocialPay апп</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1" onClick={handleCreatePayment} disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Төлбөр үүсгэх
                    </Button>
                    <Button variant="outline" className="bg-transparent" onClick={handleDemoPayment}>
                      Demo төлбөр
                    </Button>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      Аюулгүй төлбөр
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Шууд идэвхжүүлнэ
                    </span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Payment QR Code */
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>QR код уншуулна уу</CardTitle>
                  <CardDescription>Банкны аппликэйшнээрээ QR код уншуулан төлбөрөө хийнэ үү</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    {/* QR Code */}
                    <div className="mb-6 rounded-2xl bg-white p-6 shadow-lg">
                      <Image
                        src={paymentData.qrCode || "/placeholder.svg"}
                        alt="Payment QR Code"
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>

                    <p className="mb-6 text-center text-sm text-muted-foreground">
                      {isChecking ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Төлбөр шалгаж байна...
                        </span>
                      ) : (
                        "Төлбөр хийсний дараа автоматаар идэвхжүүлнэ"
                      )}
                    </p>

                    <Separator className="my-4" />

                    {/* Bank Apps */}
                    <p className="mb-4 text-sm font-medium">Эсвэл банкны апп сонгох:</p>
                    <div className="grid w-full grid-cols-3 gap-3">
                      {paymentData.deepLinks.map((bank) => (
                        <a
                          key={bank.name}
                          href={bank.link}
                          className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Smartphone className="h-5 w-5" />
                          </div>
                          <span className="text-xs">{bank.name}</span>
                        </a>
                      ))}
                    </div>

                    <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setPaymentData(null)}>
                      Буцах
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Захиалгын мэдээлэл</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex gap-3">
                  <Image
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    width={80}
                    height={50}
                    className="rounded object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">Онлайн сургалт</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Сургалтын үнэ</span>
                    <span>{course.price.toLocaleString()}₮</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Хөнгөлөлт</span>
                    <span className="text-green-600">0₮</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Нийт</span>
                  <span className="text-primary">{course.price.toLocaleString()}₮</span>
                </div>

                <div className="mt-6 space-y-2 rounded-lg bg-muted p-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Бүрэн хандалт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Гэрчилгээ олгоно</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>AI туслах үйлчилгээ</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
