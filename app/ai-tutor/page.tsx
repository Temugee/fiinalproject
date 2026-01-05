"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useChat, type UIMessage } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bot,
  User,
  Send,
  Sparkles,
  BookOpen,
  Code,
  Palette,
  TrendingUp,
  ArrowLeft,
  Loader2,
  Leaf,
  Droplet,
  Home,
  ShoppingCart,
} from "lucide-react";

const suggestedQuestions = [
  { icon: Leaf, text: "Зөгий үржүүлэлтийн үндэс юу вэ?", category: "Үндэс" },
  {
    icon: Droplet,
    text: "Зөгийн бал хэрхэн боловсруулах вэ?",
    category: "Бүтээгдэхүүн боловсруулах",
  },
  {
    icon: Home,
    text: "Үүрний менежментэд юуг анхаарах хэрэгтэй вэ?",
    category: "Үүрний менежмент",
  },
  {
    icon: ShoppingCart,
    text: "Зөгийн бүтээгдэхүүнийг хэрхэн зах зээлд гаргах вэ?",
    category: "Маркетинг",
  },
  {
    icon: BookOpen,
    text: "Зөгийчний ур чадварыг хэрхэн хөгжүүлэх вэ?",
    category: "Хувь хүний хөгжил",
  },
];

function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-gradient-to-br from-primary to-accent text-foreground"
        }`}
      >
        {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        }`}
      >
        {message.parts.map((part, index) => {
          if (part.type === "text") {
            return (
              <div
                key={index}
                className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap"
              >
                {part.text}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default function AITutorPage() {
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage({ text: question });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h1 className="font-semibold">AI Туслах</h1>
                <p className="text-xs text-muted-foreground">
                  Танд туслахад бэлэн
                </p>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Онлайн
          </Badge>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="flex flex-col items-center justify-center px-4 py-12">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">
                AI Туслахтай танилц
              </h2>
              <p className="mb-8 max-w-md text-center text-muted-foreground">
                Би танд хичээлийн агуулгыг тайлбарлах, асуултанд хариулах,
                суралцахад туслах зорилготой.
              </p>

              {/* Suggested Questions */}
              <div className="w-full max-w-lg">
                <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
                  Жишээ асуултууд:
                </p>
                <div className="grid gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestedQuestion(q.text)}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 text-left transition-colors hover:border-primary hover:bg-muted"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <q.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{q.text}</p>
                        <p className="text-xs text-muted-foreground">
                          {q.category}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Messages */
            <ScrollArea className="h-[calc(100vh-200px)]" ref={scrollAreaRef}>
              <div className="space-y-6 p-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Bot className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="rounded-2xl bg-muted px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm text-muted-foreground">
                          Бодож байна...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
        </div>
      </main>

      {/* Input Area */}
      <div className="sticky bottom-0 border-t border-border bg-background p-4">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Асуултаа бичнэ үү..."
                className="min-h-[52px] resize-none pr-12"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute bottom-2 right-2"
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            AI туслах нь алдаа гаргаж болно. Чухал мэдээллийг шалгаж
            баталгаажуулна уу.
          </p>
        </form>
      </div>
    </div>
  );
}
