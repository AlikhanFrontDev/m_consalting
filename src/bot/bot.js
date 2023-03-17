const { Telegraf } = require('telegraf');
const TOKEN = '6156957454:AAG4fw_GOgWnqwc0lfq3EUEkEsEYcpiB6fg'
const bot = new Telegraf(TOKEN);

const web_link = 'https://gregarious-maamoul-17ded1.netlify.app'

bot.start((ctx) =>
    ctx.reply('Welcome', {
        reply_markup: { keyboard: [[{ text: "menu", web_app: { url: web_link } }]] }
    }));
bot.launch();