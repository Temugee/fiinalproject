import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AdminSettingsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Тохиргоо</h1>
        <p className="text-muted-foreground">
          Системийн үндсэн тохиргоог удирдах
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">Ерөнхий</TabsTrigger>
          <TabsTrigger value="payments">Төлбөр</TabsTrigger>
          <TabsTrigger value="appearance">Гадаад үзэмж</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Ерөнхий тохиргоо</CardTitle>
              <CardDescription>
                Платформын нэр болон холбоо барих мэдээлэл
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="platformName">Платформын нэр</Label>
                <Input id="platformName" placeholder="Батаагийн Зөгийн Бал" />
              </div>
              <div>
                <Label htmlFor="contactEmail">Холбоо барих имэйл</Label>
                <Input id="contactEmail" placeholder="info@beekeeping.mn" />
              </div>
              <Button>Хадгалах</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Төлбөрийн тохиргоо</CardTitle>
              <CardDescription>
                Төлбөрийн системүүдийг идэвхжүүлэх
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>QPay</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Хаан банк</Label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <Label>SocialPay</Label>
                <Switch />
              </div>
              <Button>Хадгалах</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Гадаад үзэмж</CardTitle>
              <CardDescription>UI theme болон өнгөний тохиргоо</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Dark Mode</Label>
                <Switch />
              </div>
              <div>
                <Label htmlFor="primaryColor">Үндсэн өнгө</Label>
                <Input id="primaryColor" placeholder="#FFD700" />
              </div>
              <Button>Хадгалах</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
