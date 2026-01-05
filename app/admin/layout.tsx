import type React from "react"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin/sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar user={{ name: user.name, email: user.email, avatar: user.avatar }} />
      <main className="flex-1 overflow-auto bg-muted/30">{children}</main>
    </div>
  )
}
