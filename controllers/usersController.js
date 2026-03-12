/** Import modules */
const { v4: uuidv4 } = require("uuid");
const users = require("../data/data");

/** GET ALL USERS */
exports.getUsers = (req, res) => {
	res.json(users);
};

/** FILTER USERS  */
exports.filterUsers = (req, res) => {
	const { job } = req.query;

	const filteredUsers = users.filter((user) => user.job === job);

	res.json(filteredUsers);
};

/** GET SINGLE USER */
exports.getSingleUser = (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	res.json(user);
};

/** CREATE USER */
exports.createUser = (req, res) => {
	const newUser = {
		id: uuidv4(),
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		age: req.body.age,
		job: req.body.job,
	};

	users.push(newUser);

	res.status(201).json(newUser);
};

/** UPDATE USER */
exports.updateUser = (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.age = req.body.age;
	user.job = req.body.job;

	res.status(200).json(user);
};

/** DELETE USER */
exports.deleteUser = (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	users = users.filter((user) => user.id !== req.params.id);
	res.json({ message: "User deleted" });
};
