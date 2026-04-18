const dotenv = require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const messageHandler = require("./handlers/message");
const photoHandler = require("./handlers/photo");
const commandHandler = require("./handlers/command");

messageHandler(bot);
photoHandler(bot);
commandHandler(bot);

bot.onText(/rasm/i, (msg) => {
	try {
		bot.sendPhoto(msg.chat.id, {
			source: process.env.photo,
		});
	} catch (err) {
		console.error(err);
	}
});

bot.onText(/btn/i, (msg) => {
	bot.sendMessage(msg.chat.id, "Bosing", {
		reply_markup: {
			inline_keyboard: [[{ text: "Bosing", callback_data: "click" }]],
		},
	});
});
bot.on("callback_query", (query) => {
	bot.sendMessage(query.message.chat.id, "Button bosildi");
});
