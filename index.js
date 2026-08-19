require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const storage = require('node-persist');

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

storage.init();

// Webhook setup for Render
app.use(bot.webhookCallback('/telegram-webhook'));

bot.start((ctx) => ctx.reply('Welcome! Upload study material (photo/PDF) to start.'));

bot.on('message', async (ctx) => {
    ctx.reply('Received! What should I do?', Markup.inlineKeyboard([
        [Markup.button.callback('📝 Summarize', 'summarize')],
        [Markup.button.callback('🎓 Quiz Me', 'quiz')]
    ]));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bot running on port ${PORT}`));
