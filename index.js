const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 3000;

const users = [];
app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello from the home page");
});

app.get("/users", (req, res) => {
	res.json(users);
	res.send(users);
});
app.post("/users", (req, res) => {
	const user = {
		id: uuidv4(),
		first_name: req.body.first_name,
		last_name: req.body.last_name,
	};
	users.push(user);
	res.json(user);
	res.send(user);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
