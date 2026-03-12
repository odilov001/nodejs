/** Import modules */
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
let count = 0;

/** Middleware */
app.use(express.json());

/** Data */
let users = [
	{
		id: uuidv4(),
		first_name: "Temurbek",
		last_name: "To'xtasinov",
		age: 20,
		job: "frontend",
	},
	{
		id: uuidv4(),
		first_name: "Jahongir",
		last_name: "To'xtasinov",
		age: 20,
		job: "pupil",
	},
	{
		id: uuidv4(),
		first_name: "Ali",
		last_name: "To'xtasinov",
		age: 22,
		job: "teacher",
	},
];

/** GET ALL USERS */
app.get("/users", (req, res) => {
	res.json(users);
});

/** FILTER USERS  */
app.get("/users/query", (req, res) => {
	const { job } = req.query;

	// if (job === undefined) {
	// 	return res.status(400).json({ message: "Job is required" });
	// }
	const filteredUsers = users.filter((user) => user.job === job);

	res.json(filteredUsers);
});

/** GET SINGLE USER */
app.get("/users/:id", (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	res.json(user);
});

/** CREATE USER */
app.post("/users", (req, res) => {
	const newUser = {
		id: uuidv4(),
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		age: req.body.age,
		job: req.body.job,
	};

	users.push(newUser);

	res.status(201).json(newUser);
});

/** UPDATE USER */
app.put("/users/:id", (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.age = req.body.age;
	user.job = req.body.job;

	res.status(200).json(user);
});

/** DELETE USER */
app.delete("/users/:id", (req, res) => {
	const user = users.find((user) => user.id === req.params.id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	users = users.filter((user) => user.id !== req.params.id);
	res.json({ message: "User deleted" });
});

/** SERVER */
app.listen(3000, () => {
	console.log("Server running on port 3000");
});
