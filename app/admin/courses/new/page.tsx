"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Loader2, Plus, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";

const categories = [
  "Програмчлал",
  "Вэб хөгжүүлэлт",
  "Дизайн",
  "Бизнес",
  "Маркетинг",
  "Дата шинжилгээ",
  "Хэл сурах",
  "Хувь хүний хөгжил",
];

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  isFree: boolean;
}

export default function NewCoursePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    level: "beginner",
    price: 0,
    isFree: true,
    thumbnail: "",
  });
  const [lessons, setLessons] = useState<Lesson[]>([
    { id: "1", title: "", description: "", duration: 0, isFree: true },
  ]);

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: Date.now().toString(),
        title: "",
        description: "",
        duration: 0,
        isFree: false,
      },
    ]);
  };

  const removeLesson = (id: string) => {
    if (lessons.length > 1) {
      setLessons(lessons.filter((l) => l.id !== id));
    }
  };

  const updateLesson = (
    id: string,
    field: keyof Lesson,
    value: string | number | boolean
  ) => {
    setLessons(
      lessons.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          lessons: lessons.map((l, i) => ({ ...l, order: i + 1 })),
        }),
      });

      if (!res.ok) {
        throw new Error("Сургалт үүсгэхэд алдаа гарлаа");
      }

      toast.success("Сургалт амжилттай үүсгэгдлээ!");
      router.push("/admin/courses");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Алдаа гарлаа");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/courses">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Шинэ сургалт</h1>
          <p className="text-muted-foreground">Шинэ сургалт үүсгэх</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Үндсэн мэдээлэл</CardTitle>
                <CardDescription>
                  Сургалтын үндсэн мэдээллийг оруулна уу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Сургалтын нэр</Label>
                  <Input
                    id="title"
                    placeholder=""
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Товч тайлбар</Label>
                  <Textarea
                    id="shortDescription"
                    placeholder="Сургалтын товч тайлбар (100-150 үсэг)"
                    rows={2}
                    value={formData.shortDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shortDescription: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Дэлгэрэнгүй тайлбар</Label>
                  <Textarea
                    id="description"
                    placeholder="Сургалтын бүрэн тайлбар"
                    rows={6}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Зураг URL</Label>
                  <Input
                    id="thumbnail"
                    placeholder="https://example.com/image.jpg"
                    value={formData.thumbnail}
                    onChange={(e) =>
                      setFormData({ ...formData, thumbnail: e.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Lessons */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Хичээлүүд</CardTitle>
                  <CardDescription>
                    Сургалтын хичээлүүдийг нэмнэ үү
                  </CardDescription>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addLesson}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Хичээл нэмэх
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex gap-4 rounded-lg border p-4"
                  >
                    <div className="flex items-center">
                      <GripVertical className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                          {index + 1}
                        </span>
                        <Input
                          placeholder="Хичээлийн нэр"
                          value={lesson.title}
                          onChange={(e) =>
                            updateLesson(lesson.id, "title", e.target.value)
                          }
                        />
                      </div>
                      <Textarea
                        placeholder="Хичээлийн тайлбар"
                        rows={2}
                        value={lesson.description}
                        onChange={(e) =>
                          updateLesson(lesson.id, "description", e.target.value)
                        }
                      />
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`duration-${lesson.id}`}>
                            Хугацаа (мин)
                          </Label>
                          <Input
                            id={`duration-${lesson.id}`}
                            type="number"
                            className="w-20"
                            value={lesson.duration}
                            onChange={(e) =>
                              updateLesson(
                                lesson.id,
                                "duration",
                                Number.parseInt(e.target.value) || 0
                              )
                            }
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            id={`free-${lesson.id}`}
                            checked={lesson.isFree}
                            onCheckedChange={(checked) =>
                              updateLesson(lesson.id, "isFree", checked)
                            }
                          />
                          <Label htmlFor={`free-${lesson.id}`}>Үнэгүй</Label>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => removeLesson(lesson.id)}
                      disabled={lessons.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category & Level */}
            <Card>
              <CardHeader>
                <CardTitle>Ангилал</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Ангилал</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Ангилал сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Түвшин</Label>
                  <Select
                    value={formData.level}
                    onValueChange={(value) =>
                      setFormData({ ...formData, level: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Анхан шат</SelectItem>
                      <SelectItem value="intermediate">Дунд шат</SelectItem>
                      <SelectItem value="advanced">Ахисан шат</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Үнэ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Switch
                    id="isFree"
                    checked={formData.isFree}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        isFree: checked,
                        price: checked ? 0 : formData.price,
                      })
                    }
                  />
                  <Label htmlFor="isFree">Үнэгүй сургалт</Label>
                </div>
                {!formData.isFree && (
                  <div className="space-y-2">
                    <Label htmlFor="price">Үнэ (₮)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="89000"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: Number.parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="space-y-3 pt-6">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Сургалт үүсгэх
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link href="/admin/courses">Цуцлах</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
