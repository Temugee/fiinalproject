// app/categories/page.tsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";

const categories = [
  { name: "Үндэс", icon: "🐝", count: 45 }, // Зөгий үржүүлэлтийн суурь мэдлэг
  { name: "Бүтээгдэхүүн боловсруулах", icon: "🍯", count: 32 }, // Бал, лав, прополис
  { name: "Үүрний менежмент", icon: "🏠", count: 28 }, // Үүрний хяналт, хатан хамгаалалт
  { name: "Маркетинг", icon: "🛒", count: 24 }, // Зах зээлд гаргах, борлуулалт
  { name: "Орчны мэдлэг", icon: "🌼", count: 18 }, // Байгаль, ургамал, тэжээл
  { name: "Хувь хүний хөгжил", icon: "📚", count: 15 }, // Зөгийчин болох, ур чадвар хөгжүүлэх
];

// Хэрэв Lucide icon ашиглах бол жишээ:
// import { Bee, Package, Home, ShoppingCart, Flower2, BookOpen } from "lucide-react"
// const categories = [
//   { name: "Үндэс", icon: <Bee className="h-6 w-6" />, count: 45 },
//   { name: "Бүтээгдэхүүн боловсруулах", icon: <Package className="h-6 w-6" />, count: 32 },
//   { name: "Үүрний менежмент", icon: <Home className="h-6 w-6" />, count: 28 },
//   { name: "Маркетинг", icon: <ShoppingCart className="h-6 w-6" />, count: 24 },
//   { name: "Орчны мэдлэг", icon: <Flower2 className="h-6 w-6" />, count: 18 },
//   { name: "Хувь хүний хөгжил", icon: <BookOpen className="h-6 w-6" />, count: 15 },
// ]

export default async function CategoriesPage() {
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

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Badge className="mb-3 w-fit bg-primary/10 text-primary hover:bg-primary/20">
              Зөгийн аж ахуй
            </Badge>
            <h1 className="text-3xl font-bold text-foreground">
              Сургалтын ангилалууд
            </h1>
            <p className="mt-2 text-muted-foreground">
              Өөрт тохирох чиглэлээ сонгоод суралцаж эхлээрэй.
            </p>
          </div>
          <Button variant="outline" className="bg-transparent" asChild>
            <Link href="/courses">Бүх сургалтууд руу</Link>
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/courses?category=${encodeURIComponent(cat.name)}`}
            >
              <Card className="group h-full transition-all hover:border-primary hover:shadow-md">
                <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                  {/* Emoji icon */}
                  <div className="mb-2 text-4xl">{cat.icon}</div>
                  {/* Lucide icon жишээ (дээрх alternative массив ашиглавал): */}
                  {/* <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {cat.icon}
                  </div> */}
                  <h3 className="font-semibold text-foreground">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cat.count} сургалт
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-between rounded-xl border bg-muted/30 p-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Ангиллаар шүүж хайх
            </h2>
            <p className="text-sm text-muted-foreground">
              Танд тохирсон сургалтыг category сонгож шүүгээд олоорой.
            </p>
          </div>
          <Button asChild>
            <Link href="/courses">Сургалтууд үзэх</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
