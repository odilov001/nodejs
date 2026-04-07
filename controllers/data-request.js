const Chat = require("../models/chat.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { io } = require("../index");

/** READ */
exports.getChat = async (req, res) => {
	try {
		const chat = await Chat.find();
		res.status(200).json(chat);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
/** CREATE */
exports.createChat = async (req, res) => {
	try {
		const { msg } = req.body;
		const newChat = new Chat({ msg });
		await newChat.save();

		io.emit("newChat", newChat);

		res.status(201).json(newChat);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
