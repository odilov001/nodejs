const http = require("http");

const users = [
	{ id: 1, name: "Ali" },
	{ id: 2, name: "Vali" },
];
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello from the home page ");
		res.end();
	} else if (req.url === "/users") {
		res.setHeader("Content-Type", "application/json");
		res.write(JSON.stringify(users));
		res.end();
	}
});
// server.listen(port,callback function);

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
