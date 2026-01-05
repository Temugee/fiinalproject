import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getCurrentUser } from "@/lib/auth";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        user={{
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-foreground">Тохиргоо</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Профайл</TabsTrigger>
            <TabsTrigger value="security">Нууцлал</TabsTrigger>
            <TabsTrigger value="preferences">Сонголт</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Профайл мэдээлэл</CardTitle>
                <CardDescription>
                  Хэрэглэгчийн нэр, имэйлээ шинэчлэх
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Нэр</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div>
                  <Label htmlFor="email">Имэйл</Label>
                  <Input id="email" defaultValue={user.email} />
                </div>
                <Button>Хадгалах</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Нууцлалын тохиргоо</CardTitle>
                <CardDescription>
                  Нууц үг солих, хоёр шатлалт баталгаажуулалт
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="password">Шинэ нууц үг</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="2fa">Хоёр шатлалт баталгаажуулалт</Label>
                  <Switch id="2fa" />
                </div>
                <Button>Хадгалах</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Сонголтууд</CardTitle>
                <CardDescription>
                  Theme болон мэдэгдлийн тохиргоо
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkmode">Dark Mode</Label>
                  <Switch id="darkmode" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Мэдэгдэл</Label>
                  <Switch id="notifications" defaultChecked />
                </div>
                <Button>Хадгалах</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
