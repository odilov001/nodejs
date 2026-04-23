const fs = require("fs");
const path = require("path");

const mainMenu = {
	keyboard: [
		[{ text: "📚 Kurslar" }, { text: "👨‍🏫 O'qituvchilar" }],
		[{ text: "📅 Jadval" }, { text: "💰 Narxlar" }],
		[{ text: "📞 Kontakt" }, { text: "ℹ️ Haqimizda" }],
	],
	resize_keyboard: true,
	persistent: true,
};

module.exports = (bot) => {
	bot.onText(/\/start/, async (msg) => {
		const chatId = msg.chat.id;
		const firstName = msg.from?.first_name || "Foydalanuvchi";
		const imagePath = path.join(__dirname, "../assets/photos/fox.jpeg");

		await bot.sendPhoto(
			chatId,
			fs.createReadStream(imagePath),
			{
				caption:
					`🎓 <b>Assalomu alaykum, ${firstName}!</b>\n\n` +
					`📚 <b>Ta'lim Markaziga Xush Kelibsiz!</b>\n\n` +
					`Bu yerda siz:\n` +
					`✅ Sifatli kurslarni topasiz\n` +
					`✅ Professional o'qituvchilar bilan ishlaysiz\n` +
					`✅ Amaliy bilimlar olasiz\n\n` +
					`👇 <b>Quyidagi tugmalardan birini tanlang:</b>`,
				parse_mode: "HTML",
			},
			{ contentType: "image/jpeg" },
		);

		await bot.sendMessage(chatId, "📋 <b>Asosiy Menyu</b>", {
			parse_mode: "HTML",
			reply_markup: mainMenu,
		});
	});

	bot.onText(/\/contact/, async (msg) => {
		await sendContact(bot, msg.chat.id);
	});

	bot.on("message", async (msg) => {
		const chatId = msg.chat.id;
		const text = msg.text;
		if (!text) return;

		if (text === "📚 Kurslar") {
			await bot.sendMessage(
				chatId,
				`📚 <b>Bizning Kurslarimiz</b>\n\n` +
					`1️⃣ <b>Frontend Development</b> — 3 oy\n` +
					`2️⃣ <b>Backend (Node.js)</b> — 4 oy\n` +
					`3️⃣ <b>UI/UX Design</b> — 2 oy\n` +
					`4️⃣ <b>Python &amp; Data Science</b> — 5 oy\n\n` +
					`📌 Batafsil ma'lumot uchun /contact ga murojaat qiling`,
				{
					parse_mode: "HTML",
					reply_markup: {
						inline_keyboard: [
							[{ text: "📝 Ro'yxatdan o'tish", callback_data: "register" }],
							[{ text: "💰 Narxlarni ko'rish", callback_data: "prices" }],
							[{ text: "🔙 Orqaga", callback_data: "back" }],
						],
					},
				},
			);
		}

		if (text === "💰 Narxlar") {
			await bot.sendMessage(
				chatId,
				`💰 <b>Kurs Narxlari</b>\n\n` +
					`Frontend      — 500,000 so'm\n` +
					`Backend       — 600,000 so'm\n` +
					`UI/UX Design  — 450,000 so'm\n` +
					`Python        — 550,000 so'm\n\n` +
					`🎁 <b>Chegirmalar:</b>\n` +
					`• 2 kurs birga — 15% chegirma\n` +
					`• Do'st taklif qilsang — 10% chegirma`,
				{ parse_mode: "HTML" },
			);
		}

		if (text === "👨‍🏫 O'qituvchilar") {
			await bot.sendMessage(
				chatId,
				`👨‍🏫 <b>O'qituvchilarimiz</b>\n\n` +
					`🧑‍💻 <b>Sardor Karimov</b> — Frontend\n` +
					`   5 yillik tajriba | 200+ talaba\n\n` +
					`👩‍💻 <b>Nilufar Rahimova</b> — UI/UX\n` +
					`   4 yillik tajriba | 150+ talaba\n\n` +
					`🧑‍💻 <b>Jasur Toshmatov</b> — Backend\n` +
					`   6 yillik tajriba | 300+ talaba`,
				{ parse_mode: "HTML" },
			);
		}

		if (text === "📅 Jadval") {
			await bot.sendMessage(
				chatId,
				`📅 <b>Dars Jadvali</b>\n\n` +
					`🕘 <b>Ertalabki guruh:</b> 09:00 — 11:00\n` +
					`🕐 <b>Kunduzgi guruh:</b> 13:00 — 15:00\n` +
					`🕕 <b>Kechki guruh:</b>   17:00 — 19:00\n\n` +
					`📆 Darslar: Dushanba — Shanba\n` +
					`🏖 Dam olish: Yakshanba`,
				{ parse_mode: "HTML" },
			);
		}

		if (text === "ℹ️ Haqimizda") {
			await bot.sendMessage(
				chatId,
				`ℹ️ <b>Biz Haqimizda</b>\n\n` +
					`🏫 Ta'lim markazimiz 2020 yildan buyon\n` +
					`faoliyat yuritib kelmoqda.\n\n` +
					`📊 <b>Statistika:</b>\n` +
					`• 1000+ bitiruvchilar\n` +
					`• 15+ kurslar\n` +
					`• 95% ish bilan ta'minlanish\n\n` +
					`🏆 <b>Yutuqlarimiz:</b>\n` +
					`• Top 3 IT markaz (2023)\n` +
					`• Best EdTech Award (2024)`,
				{ parse_mode: "HTML" },
			);
		}

		if (text === "📞 Kontakt") {
			await sendContact(bot, chatId);
		}
	});

	bot.on("callback_query", async (query) => {
		const chatId = query.message.chat.id;
		await bot.answerCallbackQuery(query.id);

		if (query.data === "register") {
			await bot.sendMessage(
				chatId,
				`📝 <b>Ro'yxatdan O'tish</b>\n\n` +
					`Quyidagi ma'lumotlarni yuboring:\n\n` +
					`1. Ismingiz\n` +
					`2. Telefon raqamingiz\n` +
					`3. Qaysi kursga qiziqasiz\n\n` +
					`Yoki to'g'ridan-to'g'ri adminga yozing 👇`,
				{
					parse_mode: "HTML",
					reply_markup: {
						inline_keyboard: [[{ text: "💬 Adminga yozish", url: "https://t.me/dev_odilov" }]],
					},
				},
			);
		}

		if (query.data === "prices") {
			await bot.sendMessage(chatId, `💰 <b>Narxlar haqida admin bilan gaplashing</b>`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [[{ text: "💬 Admin", url: "https://t.me/dev_odilov" }]],
				},
			});
		}

		if (query.data === "back") {
			await bot.sendMessage(chatId, "🏠 <b>Asosiy Menyu</b>", {
				parse_mode: "HTML",
				reply_markup: mainMenu,
			});
		}
	});
};

async function sendContact(bot, chatId) {
	await bot.sendMessage(
		chatId,
		`📞 <b>Bog'lanish Uchun</b>\n\n` +
			`👤 <b>Mas'ul shaxs:</b> Admin\n` +
			`📱 <b>Telefon:</b> +998 90 123 45 67\n` +
			`💬 <b>Telegram:</b> @dev_odilov\n` +
			`🌐 <b>Vebsayt:</b> www.example.uz\n\n` +
			`🕐 <b>Ish vaqti:</b>\n` +
			`Dushanba — Shanba: 09:00 — 18:00`,
		{
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [[{ text: "📱 Telegram'da yozing", url: "https://t.me/dev_odilov" }]],
			},
		},
	);
}
