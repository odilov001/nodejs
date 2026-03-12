const express = require("express");
const app = express();

// const logger = require("./middleware/logger");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());

// app.use(logger);

app.use("/users", usersRoutes);

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
