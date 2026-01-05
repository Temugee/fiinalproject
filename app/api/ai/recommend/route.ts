import { generateObject } from "ai"
import { z } from "zod"

const recommendationSchema = z.object({
  recommendations: z.array(
    z.object({
      courseId: z.string(),
      title: z.string(),
      reason: z.string(),
      matchScore: z.number().min(0).max(100),
    }),
  ),
  personalizedMessage: z.string(),
})

export async function POST(req: Request) {
  try {
    const { userInterests, completedCourses, currentLevel } = await req.json()

    const { object } = await generateObject({
      model: "openai/gpt-4o-mini",
      schema: recommendationSchema,
      prompt: `Хэрэглэгчийн мэдээлэл дээр үндэслэн сургалт санал болго.

Сонирхол: ${userInterests.join(", ")}
Дууссан сургалтууд: ${completedCourses.join(", ")}
Түвшин: ${currentLevel}

Боломжит сургалтууд:
1. id: "1", title: "Вэб хөгжүүлэлтийн үндэс", category: "Вэб хөгжүүлэлт"
2. id: "2", title: "Python програмчлал", category: "Програмчлал"
3. id: "3", title: "UI/UX Дизайн", category: "Дизайн"
4. id: "4", title: "Дата шинжилгээ", category: "Дата шинжилгээ"
5. id: "5", title: "Англи хэлний үндэс", category: "Хэл сурах"
6. id: "6", title: "Дижитал маркетинг", category: "Маркетинг"

3 сургалт санал болгож, яагаад тохирохыг Монгол хэлээр тайлбарла.`,
    })

    return Response.json(object)
  } catch (error) {
    console.error("Recommendation error:", error)
    return Response.json({ error: "Санал болгоход алдаа гарлаа" }, { status: 500 })
  }
}
