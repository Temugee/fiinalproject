"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AdminSidebarProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Хяналтын самбар" },
  { href: "/admin/courses", icon: BookOpen, label: "Сургалтууд" },
  { href: "/admin/users", icon: Users, label: "Хэрэглэгчид" },
  { href: "/admin/payments", icon: CreditCard, label: "Төлбөрүүд" },
  { href: "/admin/analytics", icon: BarChart3, label: "Статистик" },
  { href: "/admin/messages", icon: MessageSquare, label: "Мессежүүд" },
  { href: "/admin/settings", icon: Settings, label: "Тохиргоо" },
];

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold">Админ</span>
        </Link>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={user.avatar || "/placeholder-user.jpg"}
              alt={user.name}
            />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="mt-2 w-full justify-start text-muted-foreground"
          asChild
        >
          <Link href="/api/auth/logout">
            <LogOut className="mr-2 h-4 w-4" />
            Гарах
          </Link>
        </Button>
      </div>
    </div>
  );
}
