import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sample courses data
// Sample courses data - Beekeeping
const allCourses = [
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
  "Бүгд",
  "Үндэс",
  "Бүтээгдэхүүн боловсруулах",
  "Үүрний менежмент",
  "Маркетинг",
  "Орчин үеийн арга",
];

const levels = [
  { value: "beginner", label: "Анхан шат" },
  { value: "intermediate", label: "Дунд шат" },
  { value: "advanced", label: "Ахисан шат" },
];

function FilterSidebar() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 font-semibold">Ангилал</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-2">
              <Checkbox id={`cat-${cat}`} />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Levels */}
      <div>
        <h3 className="mb-3 font-semibold">Түвшин</h3>
        <div className="space-y-2">
          {levels.map((level) => (
            <label
              key={level.value}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox id={`level-${level.value}`} />
              <span className="text-sm">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-3 font-semibold">Үнэ</h3>
        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2">
            <Checkbox id="price-free" />
            <span className="text-sm">Үнэгүй</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <Checkbox id="price-paid" />
            <span className="text-sm">Төлбөртэй</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default async function CoursesPage() {
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

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">
            Бүх сургалтууд
          </h1>
          <p className="text-muted-foreground">
            Танд тохирсон сургалтыг олж, мэдлэгээ тэлээрэй. {allCourses.length}{" "}
            сургалт олдлоо.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Сургалт хайх..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="bg-transparent lg:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Шүүлтүүр
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Шүүлтүүр</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            Үнэгүй
            <button className="ml-1 hover:text-destructive">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <FilterSidebar />
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {allCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Өмнөх
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                2
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                3
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Дараах
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
