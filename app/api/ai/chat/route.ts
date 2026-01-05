import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const systemPrompt = `Та бол "Батаагийн Зөгийн Бал" онлайн сургалтын платформын AI туслах юм.

Таны үүрэг:
- Суралцагчдад хичээлийн агуулгыг тайлбарлах
- Асуултанд Монгол хэлээр хариулах
- Суралцах зөвлөмж өгөх
- Дасгал бодоход туслах
- Програмчлал, вэб хөгжүүлэлт, дизайн, маркетинг зэрэг салбаруудаар туслах

Хариултын шаардлага:
- Монгол хэлээр хариулна
- Энгийн, ойлгомжтой хэллэг хэрэглэнэ
- Жишээ, код үзүүлбэл markdown форматаар бичнэ
- Эерэг, урамшуулсан өнгө аясаар хариулна
- Хэрэв программ код бичвэл тайлбар нэмнэ`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  // convertToModelMessages нь async тул await хэрэгтэй
  const prompt = await convertToModelMessages(messages)

//   const result = await streamText({
//   model: "openai:gpt-4o-mini", // ✅ use provider directly
//   system: systemPrompt,
//   messages: prompt,
//   maxOutputTokens: 2000,
//   temperature: 0.7,
// })

// const result = await streamText({
//   model: "openai:gpt-4o-mini", // ✅ provider шууд
//   system: systemPrompt,
//   messages: prompt,
// })
const result = streamText({
  model: 'anthropic/claude-sonnet-4.5',
  prompt: 'Why is the sky blue?'
})


  return result.toUIMessageStreamResponse()
}
