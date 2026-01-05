"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Loader2, ChevronDown, ChevronUp } from "lucide-react"

interface LessonAISummaryProps {
  lessonTitle: string
  lessonContent: string
}

export function LessonAISummary({ lessonTitle, lessonContent }: LessonAISummaryProps) {
  const [summary, setSummary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const generateSummary = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/ai/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonTitle, lessonContent }),
      })

      if (!res.ok) throw new Error("Failed to generate summary")

      const data = await res.json()
      setSummary(data.summary)
      setIsExpanded(true)
    } catch (error) {
      console.error("Failed to generate summary:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">AI Товчлол</CardTitle>
          </div>
          {summary && (
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!summary ? (
          <Button onClick={generateSummary} disabled={isLoading} size="sm" className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Товчилж байна...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Хичээлийг товчлох
              </>
            )}
          </Button>
        ) : (
          isExpanded && (
            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-sm">{summary}</div>
          )
        )}
      </CardContent>
    </Card>
  )
}
