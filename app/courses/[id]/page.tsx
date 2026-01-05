import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, Star, PlayCircle, CheckCircle, Lock, BookOpen, Award, Globe } from "lucide-react"
import { getCurrentUser } from "@/lib/auth"

// Sample course data
const courseData = {
  id: "1",
  title: "Вэб хөгжүүлэлтийн үндэс - HTML, CSS, JavaScript",
  description: `Энэхүү сургалтаар та вэб хөгжүүлэлтийн бүх үндсэн ойлголтуудыг эзэмшиж, өөрийн анхны вэбсайтыг бүтээх чадвартай болно.

Сургалтын агуулга:
- HTML-ийн бүх элементүүд, семантик хэрэглээ
- CSS-ийн үндэс, Flexbox, Grid
- JavaScript-ийн суурь ойлголтууд
- DOM манипуляци
- Responsive дизайн
- Практик төсөл бүтээх`,
  shortDescription: "Вэб хөгжүүлэлтийн суурь мэдлэгийг эзэмшиж, өөрийн анхны вэбсайтыг бүтээгээрэй.",
  thumbnail: "/web-development-coding.png",
  price: 0,
  isFree: true,
  category: "Вэб хөгжүүлэлт",
  level: "beginner" as const,
  duration: 480,
  enrolledCount: 2345,
  rating: 4.8,
  reviewCount: 342,
  instructor: {
    name: "Батаа",
    avatar: "/mongolian-teacher.jpg",
    bio: "10 жилийн туршлагатай вэб хөгжүүлэгч. Олон улсын төслүүдэд оролцсон туршлагатай.",
    studentsCount: 5400,
    coursesCount: 8,
  },
  lessons: [
    { id: "1", title: "Сургалтын танилцуулга", duration: 10, isFree: true },
    { id: "2", title: "HTML-ийн үндэс", duration: 45, isFree: true },
    { id: "3", title: "HTML элементүүд", duration: 60, isFree: false },
    { id: "4", title: "CSS-ийн танилцуулга", duration: 40, isFree: false },
    { id: "5", title: "CSS Flexbox", duration: 55, isFree: false },
    { id: "6", title: "CSS Grid", duration: 50, isFree: false },
    { id: "7", title: "JavaScript үндэс", duration: 70, isFree: false },
    { id: "8", title: "DOM манипуляци", duration: 60, isFree: false },
    { id: "9", title: "Төсөл бүтээх", duration: 90, isFree: false },
  ],
  whatYouWillLearn: [
    "HTML, CSS, JavaScript-ийн үндэс",
    "Responsive вэбсайт бүтээх",
    "DOM-тай ажиллах",
    "Орчин үеийн CSS техникүүд",
    "Практик төсөл хийх",
  ],
  requirements: ["Компьютерын үндсэн мэдлэг", "Интернэт холболт", "Суралцах хүсэл эрмэлзэл"],
  reviews: [
    {
      id: "1",
      userName: "Энхбаяр",
      rating: 5,
      comment: "Маш сайн тайлбарласан, ойлгомжтой. Үнэхээр их зүйл сурлаа.",
      date: "2024-01-15",
    },
    {
      id: "2",
      userName: "Ганцэцэг",
      rating: 5,
      comment: "Энэ сургалтаас үнэхээр их зүйл сурсан. Багш маш сайн тайлбарлана.",
      date: "2024-01-10",
    },
  ],
}

const levelLabels = {
  beginner: "Анхан шат",
  intermediate: "Дунд шат",
  advanced: "Ахисан шат",
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await getCurrentUser()

  // In real app, fetch course from database
  const course = courseData

  if (!course) {
    notFound()
  }

  const totalDuration = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)
  const hours = Math.floor(totalDuration / 60)
  const minutes = totalDuration % 60

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user ? { name: user.name, email: user.email, role: user.role, avatar: user.avatar } : null} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground to-foreground/90 py-12 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline" className="border-background/30 text-background">
                  {levelLabels[course.level]}
                </Badge>
              </div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{course.title}</h1>
              <p className="mb-6 text-lg text-background/80">{course.shortDescription}</p>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-background/60">({course.reviewCount} үнэлгээ)</span>
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.enrolledCount.toLocaleString()} суралцагч
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {hours}ц {minutes}м
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {course.lessons.length} хичээл
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-background/60">Багш</p>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                    <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
                      <PlayCircle className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    {course.isFree ? (
                      <span className="text-3xl font-bold text-green-600">Үнэгүй</span>
                    ) : (
                      <span className="text-3xl font-bold">{course.price.toLocaleString()}₮</span>
                    )}
                  </div>
                  <Button className="mb-3 w-full" size="lg" asChild>
                    <Link href={user ? `/courses/${course.id}/learn` : "/login"}>
                      {user ? "Суралцаж эхлэх" : "Нэвтэрч суралцах"}
                    </Link>
                  </Button>
                  {!course.isFree && (
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      Сагсанд нэмэх
                    </Button>
                  )}

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {hours} цаг {minutes} минут
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{course.lessons.length} хичээл</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Бүх төхөөрөмжөөс хандах</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Гэрчилгээ олгоно</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Тойм</TabsTrigger>
                  <TabsTrigger value="curriculum">Агуулга</TabsTrigger>
                  <TabsTrigger value="instructor">Багш</TabsTrigger>
                  <TabsTrigger value="reviews">Үнэлгээ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  {/* What you'll learn */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Юу сурах вэ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {course.whatYouWillLearn.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Description */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Сургалтын тухай</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line text-muted-foreground">{course.description}</p>
                    </CardContent>
                  </Card>

                  {/* Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Шаардлага</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="curriculum">
                  <Card>
                    <CardHeader>
                      <CardTitle>Сургалтын агуулга</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.lessons.length} хичээл • {hours} цаг {minutes} минут
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {course.lessons.map((lesson, index) => (
                          <AccordionItem key={lesson.id} value={lesson.id}>
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                                  {index + 1}
                                </span>
                                <span className="text-left">{lesson.title}</span>
                                {lesson.isFree ? (
                                  <Badge variant="secondary" className="ml-2">
                                    Үнэгүй
                                  </Badge>
                                ) : (
                                  <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                                )}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex items-center justify-between pl-11 text-sm text-muted-foreground">
                                <span>Видео хичээл</span>
                                <span>{lesson.duration} минут</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Image
                          src={course.instructor.avatar || "/placeholder.svg"}
                          alt={course.instructor.name}
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="mb-1 text-xl font-semibold">{course.instructor.name}</h3>
                          <p className="mb-4 text-muted-foreground">{course.instructor.bio}</p>
                          <div className="flex gap-6 text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{course.instructor.studentsCount.toLocaleString()} суралцагч</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span>{course.instructor.coursesCount} сургалт</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Суралцагчдын үнэлгээ</CardTitle>
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <span className="text-xl font-bold">{course.rating}</span>
                          <span className="text-muted-foreground">({course.reviewCount} үнэлгээ)</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Rating breakdown */}
                      <div className="mb-6 space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-3">
                            <span className="w-8 text-sm">{stars} од</span>
                            <Progress value={stars === 5 ? 85 : stars === 4 ? 12 : 3} className="h-2 flex-1" />
                            <span className="w-12 text-sm text-muted-foreground">
                              {stars === 5 ? "85%" : stars === 4 ? "12%" : "3%"}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Reviews */}
                      <div className="space-y-6">
                        {course.reviews.map((review) => (
                          <div key={review.id} className="border-t pt-6 first:border-0 first:pt-0">
                            <div className="mb-2 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                                  {review.userName.charAt(0)}
                                </div>
                                <div>
                                  <p className="font-medium">{review.userName}</p>
                                  <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar on desktop - hidden on mobile as card is in hero */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
