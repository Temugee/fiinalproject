import Link from "next/link";
import {
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Droplet,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplet className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Батаагийн Зөгийн Бал</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Монголын шилдэг онлайн сургалтын платформ. Чанартай боловсрол хүн
              бүрт хүртээмжтэй.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Түргэн холбоос</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Бүх сургалтууд
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?filter=free"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Үнэгүй сургалтууд
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Ангилалууд
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tutor"
                  className="text-muted-foreground hover:text-foreground"
                >
                  AI Туслах
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Дэмжлэг</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Түгээмэл асуултууд
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Холбоо барих
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Нууцлалын бодлого
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Холбоо барих</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Улаанбаатар хот</li>
              <li>Утас: +976 9900 0000</li>
              <li>Имэйл: info@bataahoney.mn</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Bataa's Honey. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
