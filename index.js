const dotenv = require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env., { polling: true });

bot.onText("/help", (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, "Qanday yordam kerak?");
});

bot.onText("/start", (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, "Assalomu alaykum");
});
bot.on("message", (msg) => {
	if (msg.text === "salom") {
		const chatId = msg.chat.id;
		bot.sendMessage(chatId, "Assalomu alaykum, botga hush kelibsiz");
	}
	if (msg.text === "hello") {
		const chatId = msg.chat.id;
		bot.sendMessage(chatId, "Welcome to my bot");
	}
});
