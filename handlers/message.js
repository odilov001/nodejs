module.exports = (bot) => {
	bot.on("message", (msg) => {
		const chatId = msg.chat.id;
		if (msg.text === "salom") {
			bot.sendMessage(chatId, `Salom qalesan ${msg.from?.first_name}`);
		}
	});
};
