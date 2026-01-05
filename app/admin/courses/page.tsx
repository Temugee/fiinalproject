import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Users,
} from "lucide-react";

// Sample data
const courses = [
  {
    id: "1",
    title: "Зөгий үржүүлэлтийн үндэс",
    thumbnail: "/test1.jpg",
    category: "Зөгий үржүүлэлт",
    price: 0,
    isFree: true,
    isPublished: true,
    enrolledCount: 2345,
    rating: 4.8,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Зөгийн бал боловсруулах технологи",
    thumbnail: "/test2.jpg",
    category: "Бүтээгдэхүүн боловсруулах",
    price: 89000,
    isFree: false,
    isPublished: true,
    enrolledCount: 1823,
    rating: 4.9,
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    title: "Зөгийн бүтээгдэхүүний маркетинг",
    thumbnail: "/test3.jpg",
    category: "Маркетинг",
    price: 129000,
    isFree: false,
    isPublished: false,
    enrolledCount: 0,
    rating: 0,
    createdAt: "2024-03-10",
  },
];

export default function AdminCoursesPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Сургалтууд</h1>
          <p className="text-muted-foreground">Сургалтуудаа удирдах</p>
        </div>
        <Button asChild>
          <Link href="/admin/courses/new">
            <Plus className="mr-2 h-4 w-4" />
            Шинэ сургалт
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Сургалт хайх..." className="pl-9" />
        </div>
      </div>

      {/* Courses Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Сургалт
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Ангилал
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Үнэ
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Төлөв
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Суралцагч
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b last:border-0">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={course.thumbnail || "/placeholder.svg"}
                          alt={course.title}
                          width={60}
                          height={40}
                          className="rounded object-cover"
                        />
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {course.createdAt}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge variant="outline">{course.category}</Badge>
                    </td>
                    <td className="px-4 py-4">
                      {course.isFree ? (
                        <Badge className="bg-green-500 text-white">
                          Үнэгүй
                        </Badge>
                      ) : (
                        <span>{course.price.toLocaleString()}₮</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        variant={course.isPublished ? "default" : "secondary"}
                      >
                        {course.isPublished ? "Нийтлэгдсэн" : "Ноорог"}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{course.enrolledCount.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/courses/${course.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Үзэх
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/courses/${course.id}/edit`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Засах
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
