module.exports = (bot) => {
	bot.on("message", (msg) => {
		const chatId = msg.chat.id;
		if (msg.text === "text") {
			bot.sendMessage(chatId, "Text");
		}
	});
};
