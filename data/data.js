const { v4: uuidv4 } = require("uuid");


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

module.exports = users;