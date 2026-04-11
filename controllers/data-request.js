const Users = require("../models/user.models");
const client = require("../config/redis");

/** READ */

exports.getUsers = async (req, res) => {
	try {
		await client.set("users", JSON.stringify([]));
		const cache = await client.get("users");

		if (cache) {
			res.status(200).json(JSON.parse(cache));
		} else {
			const users = await Users.find();
			await client.set("users", JSON.stringify(users));
			res.status(200).json(users);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

/** CREATE */
exports.createUser = async (req, res) => {
	try {
		const user = await Users.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
