import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Play } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  isFree: boolean;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number;
  enrolledCount: number;
  rating: number;
  instructor: {
    name: string;
    avatar: string;
  };
}

const levelLabels = {
  beginner: "Анхан шат",
  intermediate: "Дунд шат",
  advanced: "Ахисан шат",
};

export function CourseCard({
  id,
  title,
  shortDescription,
  thumbnail,
  price,
  isFree,
  category,
  level,
  duration,
  enrolledCount,
  rating,
  instructor,
}: CourseCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/20 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Play className="h-5 w-5" />
          </div>
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          {isFree ? (
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              Үнэгүй
            </Badge>
          ) : (
            <Badge variant="secondary">{price.toLocaleString()}₮</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {levelLabels[level]}
          </Badge>
        </div>
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {shortDescription}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {Math.floor(duration / 60)}ц {duration % 60}м
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {enrolledCount.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            {rating.toFixed(1)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/30 px-4 py-3">
        <div className="flex items-center gap-2">
          <Image
            src={instructor.avatar || "/placeholder.svg"}
            alt={instructor.name}
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-sm text-muted-foreground">
            {instructor.name}
          </span>
        </div>
        <Button size="sm" asChild>
          <Link href={`/courses/${id}`}>Үзэх</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
