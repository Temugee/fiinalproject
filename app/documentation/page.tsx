import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, GitBranch, Activity, Database } from "lucide-react";

export default function DocumentationPage() {
  const diagrams = [
    {
      title: "Class Diagram",
      description: "Системийн классуудын бүтэц, харилцаа холбоо",
      href: "/documentation/class-diagram",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: "Sequence Diagram",
      description: "Үйл явцын дараалал, объектуудын харилцан үйлдэл",
      href: "/documentation/sequence-diagram",
      icon: GitBranch,
      color: "bg-green-500",
    },
    {
      title: "Activity Diagram",
      description: "Үйл ажиллагааны урсгал, шийдвэр гаргалт",
      href: "/documentation/activity-diagram",
      icon: Activity,
      color: "bg-purple-500",
    },
    {
      title: "Database Schema",
      description: "MongoDB өгөгдлийн сангийн бүтэц, ERD диаграм",
      href: "/documentation/database-schema",
      icon: Database,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Системийн баримт бичиг
          </h1>
          <p className="text-muted-foreground text-lg">
            Батаагийн Зөгийн Бал - Онлайн сургалтын платформ
          </p>
          <p className="text-muted-foreground">
            Бакалаврын ажлын UML диаграмууд
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diagrams.map((diagram) => (
            <Link key={diagram.href} href={diagram.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${diagram.color}`}>
                      <diagram.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{diagram.title}</CardTitle>
                      <CardDescription>{diagram.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Дэлгэрэнгүй үзэхийн тулд дарна уу →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ашигласан технологи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">Next.js 15</p>
                <p className="text-sm text-muted-foreground">
                  Frontend Framework
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">MongoDB</p>
                <p className="text-sm text-muted-foreground">Database</p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">Vercel AI SDK</p>
                <p className="text-sm text-muted-foreground">AI Integration</p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">QPay / Khan Bank</p>
                <p className="text-sm text-muted-foreground">Payment Gateway</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
