const { OpenAI } = require('openai');

// Supports any OpenAI-compatible API (DeepSeek, Groq, OpenRouter, etc.)
const client = new OpenAI({
    baseURL: process.env.AI_API_BASE_URL || 'https://api.openai.com/v1',
    apiKey: process.env.AI_API_KEY
});

async function getAIResponse(prompt) {
    try {
        const response = await client.chat.completions.create({
            model: process.env.AI_MODEL || 'gpt-4o',
            messages: [
                { role: "system", content: "You are an expert Iraqi study assistant. Provide concise, accurate answers in a mix of Arabic and simple English." },
                { role: "user", content: prompt }
            ]
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("AI API Error:", error);
        return "Sorry, I am having trouble connecting to the brain right now.";
    }
}

module.exports = { getAIResponse };
