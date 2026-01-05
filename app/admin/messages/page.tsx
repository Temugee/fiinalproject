import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Eye, Trash2, Reply, Link } from "lucide-react";

// Sample messages data
const messages = [
  {
    id: "1",
    user: "Болд",
    email: "bold@example.com",
    subject: "Сургалтын талаар асуулт",
    content: "Зөгий үржүүлэлтийн үндэс хичээлд гэрчилгээ олгох уу?",
    status: "unread",
    date: "2026-01-05 14:30",
  },
  {
    id: "2",
    user: "Сарнай",
    email: "sarnai@example.com",
    subject: "Төлбөрийн асуудал",
    content: "QPay ашиглахад алдаа гарлаа, яаж шийдэх вэ?",
    status: "read",
    date: "2026-01-04 12:15",
  },
  {
    id: "3",
    user: "Тэмүүлэн",
    email: "temuulen@example.com",
    subject: "Санал хүсэлт",
    content: "Үүрний менежмент хичээлд илүү видео нэммээр байна.",
    status: "unread",
    date: "2026-01-03 10:45",
  },
];

export default function AdminMessagesPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Мессежүүд</h1>
          <p className="text-muted-foreground">
            Хэрэглэгчдийн илгээсэн мессежүүдийг удирдах
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Мессеж хайх..." className="pl-9" />
        </div>
      </div>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Сүүлийн мессежүүд</CardTitle>
          <CardDescription>Хэрэглэгчдийн асуулт, санал хүсэлт</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Хэрэглэгч
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Имэйл
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Гарчиг
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Статус
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Огноо
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b last:border-0">
                    <td className="px-4 py-4 font-medium">{msg.user}</td>
                    <td className="px-4 py-4">{msg.email}</td>
                    <td className="px-4 py-4">{msg.subject}</td>
                    <td className="px-4 py-4">
                      <Badge
                        variant={
                          msg.status === "unread" ? "default" : "secondary"
                        }
                      >
                        {msg.status === "unread" ? "Шинэ" : "Уншсан"}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">{msg.date}</td>
                    <td className="px-4 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/messages/${msg.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Үзэх
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/messages/${msg.id}/reply`}>
                              <Reply className="mr-2 h-4 w-4" />
                              Хариулах
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Устгах
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
