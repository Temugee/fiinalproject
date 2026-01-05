"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, DollarSign, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Bot } from "lucide-react"
import Link from "next/link"

interface Analytics {
  totalUsers: number
  totalCourses: number
  totalRevenue: number
  totalEnrollments: number
  monthlyGrowth: {
    users: number
    revenue: number
    enrollments: number
  }
  recentEnrollments: Array<{
    userName: string
    courseName: string
    date: string
  }>
  popularCourses: Array<{
    title: string
    enrollments: number
  }>
}

export default function AdminAnalyticsPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics")
      if (res.ok) {
        const data = await res.json()
        setAnalytics(data)
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 bg-muted rounded" />
          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Нийт хэрэглэгчид",
      value: analytics?.totalUsers || 0,
      icon: Users,
      change: analytics?.monthlyGrowth.users || 0,
      changeLabel: "өмнөх сараас",
    },
    {
      title: "Нийт сургалтууд",
      value: analytics?.totalCourses || 0,
      icon: BookOpen,
      change: 0,
      changeLabel: "идэвхтэй",
    },
    {
      title: "Нийт орлого",
      value: `₮${(analytics?.totalRevenue || 0).toLocaleString()}`,
      icon: DollarSign,
      change: analytics?.monthlyGrowth.revenue || 0,
      changeLabel: "өмнөх сараас",
    },
    {
      title: "Нийт бүртгэлүүд",
      value: analytics?.totalEnrollments || 0,
      icon: TrendingUp,
      change: analytics?.monthlyGrowth.enrollments || 0,
      changeLabel: "өмнөх сараас",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Аналитик</h1>
              <p className="text-muted-foreground">Платформын статистик мэдээлэл</p>
            </div>
            <Link href="/admin">
              <Button variant="outline">Админ хэсэг рүү буцах</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                {stat.change !== 0 && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    {stat.change > 0 ? (
                      <ArrowUpRight className="h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-500" />
                    )}
                    <span className={stat.change > 0 ? "text-green-500" : "text-red-500"}>
                      {Math.abs(stat.change)}%
                    </span>
                    {stat.changeLabel}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Алдартай сургалтууд</CardTitle>
              <CardDescription>Хамгийн олон бүртгэлтэй сургалтууд</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.popularCourses?.length ? (
                  analytics.popularCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {index + 1}
                        </div>
                        <span className="font-medium">{course.title}</span>
                      </div>
                      <span className="text-muted-foreground">{course.enrollments} бүртгэл</span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">Мэдээлэл байхгүй</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Сүүлийн бүртгэлүүд</CardTitle>
              <CardDescription>Сүүлд бүртгүүлсэн хэрэглэгчид</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.recentEnrollments?.length ? (
                  analytics.recentEnrollments.map((enrollment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{enrollment.userName}</p>
                        <p className="text-sm text-muted-foreground">{enrollment.courseName}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(enrollment.date).toLocaleDateString("mn-MN")}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">Мэдээлэл байхгүй</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AI функцүүдийн хэрэглээ
            </CardTitle>
            <CardDescription>AI туслах болон зөвлөмжийн статистик</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4">
                <div className="text-2xl font-bold text-primary">156</div>
                <p className="text-sm text-muted-foreground">AI чат харилцаа</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-2xl font-bold text-primary">89</div>
                <p className="text-sm text-muted-foreground">Сургалт зөвлөмж</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-2xl font-bold text-primary">234</div>
                <p className="text-sm text-muted-foreground">Хичээл тойм үүсгэсэн</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
