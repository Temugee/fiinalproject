import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Нийт хэрэглэгч",
    value: "2,345",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Нийт сургалт",
    value: "48",
    change: "+3",
    trend: "up",
    icon: BookOpen,
  },
  {
    title: "Энэ сарын орлого",
    value: "4,520,000₮",
    change: "+23%",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Идэвхтэй суралцагч",
    value: "1,234",
    change: "-5%",
    trend: "down",
    icon: TrendingUp,
  },
];

const recentEnrollments = [
  {
    user: "Болд",
    course: "Зөгий үржүүлэлтийн үндэс",
    date: "2 цагийн өмнө",
    amount: "89,000₮",
  },
  {
    user: "Сарнай",
    course: "Зөгийн бал боловсруулах технологи",
    date: "5 цагийн өмнө",
    amount: "129,000₮",
  },
  {
    user: "Тэмүүлэн",
    course: "Үүрний менежмент",
    date: "1 өдрийн өмнө",
    amount: "Үнэгүй",
  },
  {
    user: "Анхбаяр",
    course: "Зөгийн бүтээгдэхүүний маркетинг",
    date: "2 өдрийн өмнө",
    amount: "149,000₮",
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Хяналтын самбар
          </h1>
          <p className="text-muted-foreground">Тавтай морил, админ</p>
        </div>
        <Button asChild>
          <Link href="/admin/courses/new">
            <Plus className="mr-2 h-4 w-4" />
            Шинэ сургалт
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  )}
                >
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Сүүлийн бүртгэлүүд</CardTitle>
            <CardDescription>Шинээр элссэн суралцагчид</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEnrollments.map((enrollment, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{enrollment.user}</p>
                    <p className="text-sm text-muted-foreground">
                      {enrollment.course}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{enrollment.amount}</p>
                    <p className="text-sm text-muted-foreground">
                      {enrollment.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Түргэн үйлдлүүд</CardTitle>
            <CardDescription>Түгээмэл хийгддэг үйлдлүүд</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              asChild
            >
              <Link href="/admin/courses/new">
                <Plus className="mr-2 h-4 w-4" />
                Шинэ сургалт нэмэх
              </Link>
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              asChild
            >
              <Link href="/admin/users">
                <Users className="mr-2 h-4 w-4" />
                Хэрэглэгчид удирдах
              </Link>
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              asChild
            >
              <Link href="/admin/payments">
                <CreditCard className="mr-2 h-4 w-4" />
                Төлбөрүүд харах
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
