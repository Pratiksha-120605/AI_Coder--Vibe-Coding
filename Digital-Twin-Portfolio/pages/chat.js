import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SYSTEM_PROMPT = `You are a career digital twin for Pratiksha Deshmukh. Answer questions about her career, skills, product and engineering leadership, timeline, roles, AI experience, and personal brand. Keep answers helpful, concise, and focused on career facts and achievements.`;

export default function CareerChat() {
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your career digital twin. Ask me anything about Pratiksha's career, experience, or work approach.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitQuestion = async (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    const nextHistory = [...history, { role: "user", content: question }];
    setHistory(nextHistory);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory, question }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "OpenRouter request failed");
      }

      const data = await response.json();
      setHistory((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 md:px-0 py-10">
        <section className="bg-slate-900/90 border border-white/10 rounded-3xl p-8 shadow-xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Career AI Chat
            </h1>
            <p className="mt-3 text-gray-300 max-w-3xl">
              Ask about Pratiksha's career, product leadership, AI experience,
              timeline, and achievements. Powered by OpenRouter and the
              openai/gpt-oss-120b:free model.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {history.map((message, index) => (
              <div
                key={index}
                className={`rounded-3xl p-4 shadow-sm ${
                  message.role === "user"
                    ? "bg-slate-800 text-white self-end"
                    : "bg-white/5 border border-white/5 text-gray-100"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">
                  {message.role === "user" ? "You" : "Career Twin"}
                </div>
                <div className="whitespace-pre-wrap text-sm leading-6">
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submitQuestion} className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-300">Ask a question</span>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="What is Pratiksha's most recent role?"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Thinking..." : "Send question"}
              </button>
              <div className="text-xs text-gray-400">
                Tip: ask follow-up questions to continue the conversation.
              </div>
            </div>

            {error ? (
              <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-4 text-sm text-rose-100">
                {error}
              </div>
            ) : null}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
