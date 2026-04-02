const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/** CREATE */
exports.createUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username) {
			return res.status(400).json({ message: "Username is required" });
		}

		if (!password) {
			return res.status(400).json({ message: "Password is required" });
		}
		// Salt rounds 10, bu 10 raqami daraja yani 10 barobar kuchliroq undan yuqori bo'lib ketsa yani 30 40 100 bo'lsa murakkab darajada degani ammo serverda backand ishlashi sustlashib ketadi
		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await User.create({ username, password: hashedPassword });

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username,
				password: user.password,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "14d" },
		);
		res.status(201).json({ user, token });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
