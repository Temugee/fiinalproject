// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCurrentUser } from "@/lib/auth";
import { Leaf, Droplet, Shield, Users } from "lucide-react";

export default async function AboutPage() {
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
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <Badge className="mb-4 w-fit bg-primary/10 text-primary">
            Бидний тухай
          </Badge>
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Батаагийн Зөгийн Бал
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Монголын нөхцөлд тохирсон онлайн сургалтын платформ. Зөгий
            үржүүлэлтийн мэдлэгийг түгээн, орон нутгийн төлбөрийн системүүдийг
            дэмжсэн, AI туслахтай хамтран суралцах боломжийг олгож байна.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Манай зорилго</h2>
              <p className="text-muted-foreground">
                Зөгий үржүүлэлтийн мэдлэгийг олон нийтэд хүртээмжтэй болгох,
                орчин үеийн технологи ашиглан сургалтын чанарыг сайжруулах,
                зөгийн аж ахуйг тогтвортой хөгжүүлэхэд хувь нэмэр оруулах.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Алсын хараа</h2>
              <p className="text-muted-foreground">
                Монголын зөгийн аж ахуйг дэлхийн жишигт хүргэх, мэдлэгтэй,
                чадварлаг зөгийчдийг бэлтгэх, бүтээгдэхүүнийг олон улсын зах
                зээлд гаргах.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Үнэт зүйлс
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="mx-auto mb-3 h-8 w-8 text-green-600" />
                <h3 className="mb-2 font-semibold">Байгальд ээлтэй</h3>
                <p className="text-sm text-muted-foreground">
                  Орчны тогтвортой байдлыг эрхэмлэнэ.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Droplet className="mx-auto mb-3 h-8 w-8 text-yellow-500" />
                <h3 className="mb-2 font-semibold">Чанартай бүтээгдэхүүн</h3>
                <p className="text-sm text-muted-foreground">
                  Зөгийн бал, лав, прополисын цэвэр чанар.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-3 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 font-semibold">Итгэлцэл</h3>
                <p className="text-sm text-muted-foreground">
                  Хэрэглэгчийн өгөгдөл, сургалтын чанарын баталгаа.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Нийгэмд хувь нэмэр</h3>
                <p className="text-sm text-muted-foreground">
                  Зөгийчдийн хамтын нийгэмлэгийг хөгжүүлнэ.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Бидэнтэй хамт суралцаж эхлээрэй
          </h2>
          <p className="mb-6 text-muted-foreground">
            Зөгий үржүүлэлтийн мэдлэгээ тэлж, ирээдүйдээ хөрөнгө оруулалт
            хийгээрэй.
          </p>
          <Button size="lg" asChild>
            <Link href="/courses">Сургалтууд үзэх</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
