const SYSTEM_PROMPT = `You are a career digital twin for Pratiksha Deshmukh. Answer questions about her career, roles, product leadership, AI experience, timeline, skills, and professional achievements. Keep your answers accurate, concise, and career-focused.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OpenRouter API key" });
  }

  const { messages, question } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Question is required" });
  }

  const filteredHistory = Array.isArray(messages)
    ? messages.filter(
        (msg) =>
          msg &&
          (msg.role === "user" || msg.role === "assistant") &&
          typeof msg.content === "string",
      )
    : [];

  const payload = {
    model: "openai/gpt-oss-120b:free",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...filteredHistory,
      { role: "user", content: question },
    ],
    temperature: 0.2,
    max_tokens: 800,
  };

  try {
    const response = await fetch(
      "https://api.openrouter.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      const errorMessage =
        data?.error?.message || data?.message || "OpenRouter error";
      return res.status(response.status).json({ error: errorMessage });
    }

    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) {
      return res
        .status(502)
        .json({ error: "Invalid response from OpenRouter" });
    }

    return res.status(200).json({ answer });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Request failed" });
  }
}
