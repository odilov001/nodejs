const { Server } = require("socket.io");

const express = require("express");
const cors = require("cors");

const io = new Server({
	cors: {
		origin: "*", // hamma corsga ruxsat beramiz
		methods: ["GET", "POST", "PUT", "DELETE"], // ruxsat berilgan metodlar
	},
});

//on connection hodisasi yuz berganda ishlaydi
//socket - bu foydalanuvchi bilan bog'lanish uchun ishlatiladi
//socket.id - bu foydalanuvchining unikal identifikatori
//on socketdan foydalanganimizda, biz foydalanuvchi bilan bog'lanish va uzilish hodisalarini kuzatib boramiz. Bu hodisalar yuz berganda, biz konsolga foydalanuvchining ulangan yoki uzilganligini chiqaramiz.
io.on("connection", (socket) => {
	console.log("User ulandi:", socket.id);
	socket.on("disconnect", () => {
		console.log("User uzildi:", socket.id);
	});
	// emit - bu foydalanuvchiga xabar yuborish uchun ishlatiladi va broadcast - bu barcha foydalanuvchilarga xabar yuborish uchun ishlatiladi

	socket.on("send_msg", (msg) => {
		socket.broadcast.emit("receiveMessage", msg);
	});
});

require("dotenv").config();

const app = express();

/** DB */
const connectDB = require("./config/db");
connectDB();
/** MIDDLEWARE */

app.use(cors());
app.use(express.json());

/** ROUTES */
const chatRouters = require("./routes/routes");
app.use("/live", chatRouters);

/** SERVER */

io.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
