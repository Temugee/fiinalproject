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
  UserCheck,
} from "lucide-react";

// Sample users data
const users = [
  {
    id: "1",
    name: "Болд",
    email: "bold@example.com",
    avatar: "/user1.jpg",
    role: "Суралцагч",
    enrolledCourses: 3,
    status: "active",
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Сарнай",
    email: "sarnai@example.com",
    avatar: "/user2.jpg",
    role: "Суралцагч",
    enrolledCourses: 2,
    status: "active",
    joinedAt: "2024-02-01",
  },
  {
    id: "3",
    name: "Тэмүүлэн",
    email: "temuulen@example.com",
    avatar: "/user3.jpg",
    role: "Суралцагч",
    enrolledCourses: 1,
    status: "inactive",
    joinedAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Анхбаяр",
    email: "anhbayar@example.com",
    avatar: "/user4.jpg",
    role: "Админ",
    enrolledCourses: 0,
    status: "active",
    joinedAt: "2024-04-05",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Хэрэглэгчид</h1>
          <p className="text-muted-foreground">
            Хэрэглэгчдийн мэдээллийг удирдах
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/users/new">
            <Plus className="mr-2 h-4 w-4" />
            Шинэ хэрэглэгч
          </Link>
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Хэрэглэгч хайх..." className="pl-9" />
        </div>
      </div>

      {/* Users Table */}
      <Card>
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
                    Үүрэг
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Сургалт
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Статус
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Элссэн огноо
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b last:border-0">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        {/* src={user.avatar || "/placeholder-user.jpg"} */}
                        <Image
                          src={"/placeholder-user.jpg"}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <p className="font-medium">{user.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">{user.email}</td>
                    <td className="px-4 py-4">
                      <Badge variant="outline">{user.role}</Badge>
                    </td>
                    <td className="px-4 py-4">{user.enrolledCourses}</td>
                    <td className="px-4 py-4">
                      <Badge
                        variant={
                          user.status === "active" ? "default" : "secondary"
                        }
                      >
                        {user.status === "active" ? "Идэвхтэй" : "Идэвхгүй"}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">{user.joinedAt}</td>
                    <td className="px-4 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/users/${user.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Үзэх
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/users/${user.id}/edit`}>
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
