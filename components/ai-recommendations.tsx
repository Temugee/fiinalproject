"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Loader2, ArrowRight } from "lucide-react"

interface Recommendation {
  courseId: string
  title: string
  reason: string
  matchScore: number
}

interface AIRecommendationsProps {
  userInterests: string[]
  completedCourses: string[]
  currentLevel: string
}

const courseImages: Record<string, string> = {
  "1": "/web-development-coding.png",
  "2": "/python-programming-concept.png",
  "3": "/ui-ux-design-figma.jpg",
  "4": "/data-analysis-charts.png",
  "5": "/english-learning-concept.png",
  "6": "/digital-marketing-concept.png",
}

export function AIRecommendations({ userInterests, completedCourses, currentLevel }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [personalizedMessage, setPersonalizedMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const res = await fetch("/api/ai/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userInterests, completedCourses, currentLevel }),
        })

        if (!res.ok) throw new Error("Failed to fetch")

        const data = await res.json()
        setRecommendations(data.recommendations)
        setPersonalizedMessage(data.personalizedMessage)
      } catch (error) {
        console.error("Failed to fetch recommendations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendations()
  }, [userInterests, completedCourses, currentLevel])

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">AI санал болгож байна...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">AI Санал болгож байна</CardTitle>
            <CardDescription>Таны сонирхолд тулгуурлан</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {personalizedMessage && <p className="mb-4 text-sm text-muted-foreground">{personalizedMessage}</p>}

        <div className="space-y-4">
          {recommendations.map((rec) => (
            <Link
              key={rec.courseId}
              href={`/courses/${rec.courseId}`}
              className="flex items-start gap-4 rounded-lg border border-border p-3 transition-colors hover:border-primary hover:bg-muted"
            >
              <Image
                src={courseImages[rec.courseId] || "/placeholder.svg"}
                alt={rec.title}
                width={80}
                height={50}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-medium">{rec.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {rec.matchScore}% тохирно
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{rec.reason}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>

        <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
          <Link href="/courses">Бүх сургалтууд үзэх</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
