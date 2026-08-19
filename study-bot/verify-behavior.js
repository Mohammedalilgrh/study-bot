process.env.AI_API_KEY = 'test';
process.env.AI_API_BASE_URL = 'https://api.openai.com/v1';
process.env.AI_MODEL = 'gpt-4o';

try {
    const { getAIResponse } = require('./ai');
    console.log("Verification Success: ai.js loaded and exported getAIResponse function:", typeof getAIResponse === 'function');
    process.exit(0);
} catch (e) {
    console.error("Verification Failed:", e.message);
    process.exit(1);
}
