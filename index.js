/**Import modules */
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

/**Variables */

let users = [
	{
		id: 1,
		firs_name: "Temurbek",
		last_name: "To'xtasinov",
		age: 20,
		job: "frontend",
	},
	{
		id: 2,
		firs_name: "Jahongir",
		last_name: "To'xtasinov",
		age: 20,
		job: "pupil",
	},
	{
		id: 3,
		firs_name: "Ali",
		last_name: "To'xtasinov",
		age: 22,
		job: "teacher",
	},
	{
		id: 4,
		firs_name: "Vali",
		last_name: "To'xtasinov",
		age: 20,
		job: "cook",
	},
	{
		id: 5,
		firs_name: "Alisher",
		last_name: "To'xtasinov",
		age: 20,
		job: "cook",
	},
];
let id = 1;

/** Request and Response Methods */

app.use(express.json());

/** FILTER  USERS */
app.get("/users/query", (req, res) => {
	const filteredUsers = users.filter((user) => user.job === req.query.job);
	res.send(filteredUsers);
});
/** GET ALL USERS */

app.get("/users", (req, res) => {
	res.send(users);
});

/** POST NEW USER */

app.post("/users", (req, res) => {
	const user = { id: id++, firs_name: req.body.firs_name, last_name: req.body.last_name, age: req.body.age, job: req.body.job };
	users.push(user);
	res.status(201).send(user);
});

/** GET SINGLE USER */
// app.get("/users/:id", (req, res) => {
// 	const user = users.find((user) => user.id === parseInt(req.params.id));

// 	if (user) {
// 		res.send(user);
// 	} else {
// 		res.status(404).json({ message: "Foydalanuvchi topilmadi" });
// 	}
// });

/** DELETE SINGLE USER */

/** EDIT SINGLE USER */

/** LISTEN PORT */

app.listen(3000, () => console.log("Server is running"));
