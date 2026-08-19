# Study Bot

A Telegram bot to assist students with summarizing study materials and quizzing. Built with Node.js, Telegraf, Express, and OpenAI.

## Features
- Upload study material (photo/PDF) to start.
- Summarize content.
- Quiz me.

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file with:
   - BOT_TOKEN=your_telegram_bot_token
   - AI_API_KEY=your_openai_compatible_api_key
   - AI_API_BASE_URL=your_api_base_url (optional, default: openai)
   - AI_MODEL=your_model (optional, default: gpt-4o)
   - PORT=your_port (optional, default: 3000)
4. Start the bot: `npm start`
