import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Brain,
  Zap,
  Shield,
  CreditCard,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

// Sample data for demonstration
const featuredCourses = [
  {
    id: "1",
    title: "Зөгий үржүүлэлтийн үндэс",
    shortDescription:
      "Зөгийн аж ахуйг эхнээс нь суралцаж, үүрний бүтэц, зөгийн амьдралын мөчлөгийг ойлгоно.",
    thumbnail: "/test.png",
    price: 0,
    isFree: true,
    category: "Үндэс",
    level: "beginner" as const,
    duration: 300,
    enrolledCount: 120,
    rating: 4.8,
    instructor: { name: "Батаа", avatar: "/placeholder-user.jpg" },
  },
  {
    id: "2",
    title: "Зөгийн бал боловсруулах технологи",
    shortDescription:
      "Зөгийн балаа хэрхэн цуглуулах, боловсруулах, хадгалах талаар суралцана.",
    thumbnail: "/test1.jpg",
    price: 89000,
    isFree: false,
    category: "Бүтээгдэхүүн боловсруулах",
    level: "intermediate" as const,
    duration: 480,
    enrolledCount: 85,
    rating: 4.9,
    instructor: { name: "Болд", avatar: "/placeholder-user.jpg" },
  },
  {
    id: "3",
    title: "Зөгийн үүрний менежмент",
    shortDescription:
      "Үүрний эрүүл мэнд, зөгийн хатан хамгаалалт, өвчин эмгэгийн хяналт.",
    thumbnail: "/test2.jpg",
    price: 129000,
    isFree: false,
    category: "Үүрний менежмент",
    level: "advanced" as const,
    duration: 600,
    enrolledCount: 60,
    rating: 4.7,
    instructor: { name: "Сарнай", avatar: "/placeholder-user.jpg" },
  },
  {
    id: "4",
    title: "Зөгийн бүтээгдэхүүний маркетинг",
    shortDescription:
      "Зөгийн бал, лав, прополис зэрэг бүтээгдэхүүнийг зах зээлд гаргах арга.",
    thumbnail: "/test3.jpg",
    price: 149000,
    isFree: false,
    category: "Маркетинг",
    level: "intermediate" as const,
    duration: 420,
    enrolledCount: 45,
    rating: 4.6,
    instructor: { name: "Тэмүүжин", avatar: "/placeholder-user.jpg" },
  },
  {
    id: "5",
    title: "Зөгийн лав, прополис боловсруулах",
    shortDescription:
      "Зөгийн лав, прополисыг эмчилгээ болон бүтээгдэхүүнд ашиглах арга.",
    thumbnail: "/test4.jpg",
    price: 0,
    isFree: true,
    category: "Бүтээгдэхүүн боловсруулах",
    level: "beginner" as const,
    duration: 360,
    enrolledCount: 150,
    rating: 4.5,
    instructor: { name: "Оюунаа", avatar: "/placeholder-user.jpg" },
  },
  {
    id: "6",
    title: "Орчин үеийн зөгийн аж ахуй",
    shortDescription:
      "Орчин үеийн технологи, тоног төхөөрөмж ашиглан зөгийн аж ахуйг хөгжүүлэх.",
    thumbnail: "/test5.jpg",
    price: 79000,
    isFree: false,
    category: "Орчин үеийн арга",
    level: "advanced" as const,
    duration: 540,
    enrolledCount: 70,
    rating: 4.4,
    instructor: { name: "Ганбаатар", avatar: "/placeholder-user.jpg" },
  },
];

const categories = [
  { name: "Үндэс", icon: "🐝", count: 45 }, // Зөгий үржүүлэлтийн суурь мэдлэг
  { name: "Бүтээгдэхүүн боловсруулах", icon: "🍯", count: 32 }, // Бал, лав, прополис
  { name: "Үүрний менежмент", icon: "🏠", count: 28 }, // Үүрний хяналт, хатан хамгаалалт
  { name: "Маркетинг", icon: "🛒", count: 24 }, // Зах зээлд гаргах, борлуулалт
  { name: "Орчны мэдлэг", icon: "🌼", count: 18 }, // Байгаль, ургамал, тэжээл
  { name: "Хувь хүний хөгжил", icon: "📚", count: 15 }, // Зөгийчин болох, ур чадвар хөгжүүлэх
];

const stats = [
  { value: "1000+", label: "Суралцагчид" },
  { value: "30+", label: "Сургалтууд" },
  { value: "10+", label: "Багш нар" },
  { value: "95%", label: "Сэтгэл ханамж" },
];

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        user={
          user
            ? {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
              }
            : null
        }
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-тай хамтран суралц
              </Badge>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Чанартай боловсрол
                <span className="text-primary"> хүн бүрт</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Монголын шилдэг багш нартай хамтран бэлтгэсэн сургалтуудаар
                мэдлэгээ тэлж, AI туслахтай хамтран хурдан суралцаарай.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/courses">
                    Сургалтууд үзэх
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent"
                  asChild
                >
                  <Link href="/ai-tutor">
                    <Brain className="mr-2 h-4 w-4" />
                    AI Туслах туршиx
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <Image
                  src="/mongolian-grassland-golden-hour-beehives.jpg"
                  alt="Онлайн сургалт"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">45 суралцагч</div>
                      <div className="text-sm text-muted-foreground">
                        энэ сард элссэн
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 -top-6 rounded-xl bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">AI Туслах</div>
                      <div className="text-sm text-muted-foreground">
                        24/7 дэмжлэг
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Яагаад биднийг сонгох вэ?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Бид танд хамгийн сайн суралцах туршлагыг санал болгоно
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">AI Туслах</h3>
                <p className="text-sm text-muted-foreground">
                  Хиймэл оюун ухаанаар ажилладаг туслах танд 24/7 дэмжлэг
                  үзүүлнэ
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">Хурдан суралцах</h3>
                <p className="text-sm text-muted-foreground">
                  Практик дасгалууд, бодит төслүүдээр мэдлэгээ бататгана
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-green-500/5 to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-semibold">Чанарын баталгаа</h3>
                <p className="text-sm text-muted-foreground">
                  Туршлагатай багш нарын бэлтгэсэн чанартай контент
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-semibold">Хялбар төлбөр</h3>
                <p className="text-sm text-muted-foreground">
                  QPay, Хаан банк зэрэг Монголын төлбөрийн системүүд
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground">
                Сургалтын ангилалууд
              </h2>
              <p className="text-muted-foreground">
                Өөрт тохирох чиглэлээ сонгоорой
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/categories">
                Бүгдийг үзэх
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/courses?category=${category.name}`}
              >
                <Card className="transition-all hover:border-primary hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 text-4xl">{category.icon}</div>
                    <h3 className="mb-1 font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} сургалт
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground">
                Онцлох сургалтууд
              </h2>
              <p className="text-muted-foreground">
                Хамгийн их сонирхогдож буй сургалтууд
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/courses">
                Бүх сургалтууд
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Tutor Section */}
      <section className="bg-gradient-to-br from-foreground to-foreground/90 py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {/* <Badge className="w-fit bg-primary text-primary-foreground">
                <Sparkles className="mr-1 h-3 w-3" />
                Шинэ боломж
              </Badge> */}
              <h2 className="text-3xl font-bold sm:text-4xl">
                AI Туслахтай хамтран суралцаарай
              </h2>
              <p className="text-lg text-background/80">
                Манай хиймэл оюун ухаанаар ажилладаг туслах танд 24/7 тусална.
                Ямар ч асуултанд хариулж, таны суралцах замыг хөнгөвчилнө.
              </p>
              <ul className="space-y-3">
                {[
                  "Хичээлийн агуулгыг тайлбарлана",
                  "Асуултанд хариулна",
                  "Дасгал бодоход туслана",
                  "Суралцах зөвлөмж өгнө",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/ai-tutor">
                  AI Туслах туршиx
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <Image
                  src="/ai-assistant-chat-interface-honey-theme-golden.jpg"
                  alt="AI Туслах"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Суралцаж эхлэхэд бэлэн үү?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Бүртгүүлээд үнэгүй сургалтуудаас эхлээрэй. Таны ирээдүйн хөрөнгө
                оруулалт энд эхэлнэ.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Үнэгүй бүртгүүлэх
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/courses?filter=free">Үнэгүй сургалтууд</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
