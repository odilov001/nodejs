const fs = require("fs");
const path = require("path");

module.exports = (bot) => {
	bot.on("message", async (msg) => {
		const chatId = msg.chat.id;
		const text = msg.text;

		if (text === "/info") {
			const imagePath = path.join(__dirname, "../assets/photos/fox.jpeg");
			await bot.sendPhoto(chatId, fs.createReadStream(imagePath));
			return bot.sendMessage(chatId, `Sizning telegram username bu ${msg.from?.username}, sizning ismingiz esa ${msg.from?.first_name}`);
		}

		if (text === "video") {
			const videoPath = path.join(__dirname, "../assets/videos/study.mp4");
			return bot.sendVideo(chatId, fs.createReadStream(videoPath));
		}

		if (text === "rasm") {
			const imagePath = path.join(__dirname, "../assets/photos/fox.jpeg");
			return bot.sendPhoto(chatId, fs.createReadStream(imagePath));
		}

		if (text === "pdf") {
			const pdfPath = path.join(__dirname, "../assets/doc/lesson.pdf");
			return bot.sendDocument(chatId, fs.createReadStream(pdfPath));
		}
	});
};
