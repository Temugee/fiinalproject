import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Award,
  Play,
  Trophy,
  Target,
  Flame,
  Calendar,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

// Sample enrolled courses
// Sample enrolled courses
const enrolledCourses = [
  {
    id: "1",
    title: "Зөгий үржүүлэлтийн үндэс",
    thumbnail: "/test.png",
    progress: 65,
    totalLessons: 9,
    completedLessons: 6,
    lastAccessed: "2 цагийн өмнө",
  },
  {
    id: "2",
    title: "Зөгийн бал боловсруулах технологи",
    thumbnail: "/test1.jpg",
    progress: 30,
    totalLessons: 12,
    completedLessons: 4,
    lastAccessed: "1 өдрийн өмнө",
  },
];

const completedCourses = [
  {
    id: "3",
    title: "Зөгийн үүрний менежмент",
    thumbnail: "/test2.jpg",
    completedDate: "2024-01-15",
    certificate: true,
  },
];

const achievements = [
  {
    icon: Flame,
    title: "7 өдрийн streak",
    description: "7 хоног дараалан зөгийчний хичээлд орсон",
  },
  {
    icon: Trophy,
    title: "Анхны бал",
    description: "Эхний сургалтаа дуусгаж бал авсан",
  },
  {
    icon: Target,
    title: "Шаргуу зөгийч",
    description: "10 хичээл үзэж дуусгасан",
  },
];

const learningStats = [
  { label: "Нийт суралцсан цаг", value: "24", unit: "цаг" },
  { label: "Дууссан хичээл", value: "45", unit: "" },
  { label: "Гэрчилгээ", value: "1", unit: "" },
  { label: "Streak", value: "7", unit: "өдөр" },
];

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        user={{
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        }}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">
            Сайн байна уу, {user.name}!
          </h1>
          <p className="text-muted-foreground">Өнөөдөр юу суралцах вэ?</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningStats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}
                    {stat.unit}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="in-progress">
              <TabsList className="mb-6">
                <TabsTrigger value="in-progress">
                  Үргэлжилж буй ({enrolledCourses.length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Дууссан ({completedCourses.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="in-progress">
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative aspect-video w-full sm:aspect-auto sm:w-48">
                          <Image
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-1 flex-col justify-between p-4">
                          <div>
                            <h3 className="mb-2 font-semibold">
                              {course.title}
                            </h3>
                            <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {course.completedLessons}/{course.totalLessons}{" "}
                                хичээл
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.lastAccessed}
                              </span>
                            </div>
                            <div className="mb-3">
                              <div className="mb-1 flex items-center justify-between text-sm">
                                <span>Явц</span>
                                <span className="font-medium">
                                  {course.progress}%
                                </span>
                              </div>
                              <Progress
                                value={course.progress}
                                className="h-2"
                              />
                            </div>
                          </div>
                          <Button size="sm" className="w-fit" asChild>
                            <Link href={`/courses/${course.id}/learn`}>
                              <Play className="mr-2 h-4 w-4" />
                              Үргэлжлүүлэх
                            </Link>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}

                  {enrolledCourses.length === 0 && (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <h3 className="mb-2 font-semibold">
                          Одоогоор сургалт байхгүй байна
                        </h3>
                        <p className="mb-4 text-muted-foreground">
                          Сургалтуудаас сонгож суралцаж эхлээрэй
                        </p>
                        <Button asChild>
                          <Link href="/courses">Сургалтууд үзэх</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="space-y-4">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative aspect-video w-full sm:aspect-auto sm:w-48">
                          <Image
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-1 flex-col justify-between p-4">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <h3 className="font-semibold">{course.title}</h3>
                              <Badge className="bg-green-500">Дууссан</Badge>
                            </div>
                            <p className="mb-3 text-sm text-muted-foreground">
                              <Calendar className="mr-1 inline h-4 w-4" />
                              Дууссан: {course.completedDate}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {course.certificate && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-transparent"
                              >
                                <Award className="mr-2 h-4 w-4" />
                                Гэрчилгээ татах
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-transparent"
                              asChild
                            >
                              <Link href={`/courses/${course.id}`}>
                                Дахин үзэх
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Амжилтууд
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended */}
            <Card>
              <CardHeader>
                <CardTitle>Санал болгох</CardTitle>
                <CardDescription>Таны сонирхолд тулгуурлан</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/courses/3"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <Image
                      src="/ui-ux-design-figma.jpg"
                      alt="UI/UX"
                      width={60}
                      height={40}
                      className="rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Зөгий үүрний менежмент
                      </p>
                      <p className="text-xs text-muted-foreground">129,000₮</p>
                    </div>
                  </Link>
                  <Link
                    href="/courses/4"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <Image
                      src="/data-analysis-charts.png"
                      alt="Data"
                      width={60}
                      height={40}
                      className="rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Зөгийн бал боловсруулах технологи
                      </p>
                      <p className="text-xs text-muted-foreground">149,000₮</p>
                    </div>
                  </Link>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-transparent"
                  asChild
                >
                  <Link href="/courses">Бүх сургалтууд</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
