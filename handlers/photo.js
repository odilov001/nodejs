module.exports = (bot) => {
	bot.on("message", async (msg) => {
		const chatId = msg.chat.id;
		const text = msg.text;

		if (text === "/info") {
			await bot.sendPhoto(chatId, "https://i.pinimg.com/280x280_RS/c0/bf/29/c0bf29cb53e21df37381f71b9d2b8054.jpg");
			return bot.sendMessage(chatId, `Sizning telegram username bu ${msg.from?.username}, sizning ismingiz esa ${msg.from?.first_name} ${msg.from?.last_name}`);
		}
	});
};
