import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, CheckCircle, XCircle, Clock } from "lucide-react";

// Sample payment data
const payments = [
  {
    id: "1",
    user: "Болд",
    email: "bold@example.com",
    course: "Зөгий үржүүлэлтийн үндэс",
    amount: 89000,
    method: "QPay",
    status: "completed",
    date: "2024-01-15 14:30",
    transactionId: "QP12345678",
  },
  {
    id: "2",
    user: "Сарнай",
    email: "sarnai@example.com",
    course: "Зөгийн бал боловсруулах технологи",
    amount: 129000,
    method: "Хаан банк",
    status: "completed",
    date: "2024-01-15 12:15",
    transactionId: "KB87654321",
  },
  {
    id: "3",
    user: "Тэмүүлэн",
    email: "temuulen@example.com",
    course: "Үүрний менежмент",
    amount: 149000,
    method: "SocialPay",
    status: "pending",
    date: "2024-01-15 10:45",
    transactionId: null,
  },
  {
    id: "4",
    user: "Анхбаяр",
    email: "anhbayar@example.com",
    course: "Зөгийн бүтээгдэхүүний маркетинг",
    amount: 79000,
    method: "QPay",
    status: "failed",
    date: "2024-01-14 16:20",
    transactionId: null,
  },
];

const statusConfig = {
  completed: {
    label: "Амжилттай",
    icon: CheckCircle,
    className: "bg-green-100 text-green-700",
  },
  pending: {
    label: "Хүлээгдэж буй",
    icon: Clock,
    className: "bg-yellow-100 text-yellow-700",
  },
  failed: {
    label: "Амжилтгүй",
    icon: XCircle,
    className: "bg-red-100 text-red-700",
  },
};

export default function AdminPaymentsPage() {
  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Төлбөрүүд</h1>
        <p className="text-muted-foreground">Төлбөрийн түүх болон статистик</p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Нийт орлого (энэ сар)
            </p>
            <p className="text-2xl font-bold text-green-600">
              {totalRevenue.toLocaleString()}₮
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Амжилттай гүйлгээ</p>
            <p className="text-2xl font-bold">
              {payments.filter((p) => p.status === "completed").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Хүлээгдэж буй</p>
            <p className="text-2xl font-bold text-yellow-600">
              {payments.filter((p) => p.status === "pending").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Export */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Хэрэглэгч, сургалт хайх..." className="pl-9" />
        </div>
        <Button variant="outline" className="bg-transparent">
          <Download className="mr-2 h-4 w-4" />
          Татах
        </Button>
      </div>

      {/* Payments Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Хэрэглэгч
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Сургалт
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Дүн
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Хэлбэр
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Төлөв
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Огноо
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => {
                  const status =
                    statusConfig[payment.status as keyof typeof statusConfig];
                  return (
                    <tr key={payment.id} className="border-b last:border-0">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">{payment.user}</p>
                          <p className="text-sm text-muted-foreground">
                            {payment.email}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{payment.course}</td>
                      <td className="px-4 py-4 font-medium">
                        {payment.amount.toLocaleString()}₮
                      </td>
                      <td className="px-4 py-4">
                        <Badge variant="outline">{payment.method}</Badge>
                      </td>
                      <td className="px-4 py-4">
                        <Badge className={status.className}>
                          <status.icon className="mr-1 h-3 w-3" />
                          {status.label}
                        </Badge>
                      </td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {payment.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
