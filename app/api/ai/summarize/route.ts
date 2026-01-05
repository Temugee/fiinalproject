import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { lessonContent, lessonTitle } = await req.json()

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `Дараах хичээлийн агуулгыг Монгол хэлээр товчлон бичнэ үү.

Хичээлийн нэр: ${lessonTitle}
Агуулга: ${lessonContent}

Шаардлага:
- 3-5 гол санааг bullet point-аар бич
- Энгийн, ойлгомжтой хэллэг хэрэглэ
- Суралцагчдад хэрэгтэй гол ойлголтуудыг онцол`,
      maxOutputTokens: 500,
      temperature: 0.5,
    })

    return Response.json({ summary: text })
  } catch (error) {
    console.error("Summarize error:", error)
    return Response.json({ error: "Товчлоход алдаа гарлаа" }, { status: 500 })
  }
}
