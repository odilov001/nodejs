const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/** DB */
const connectDB = require("./config/db");
connectDB();
/** MIDDLEWARE */
app.use(cors());
app.use(express.json());

/** ROUTES */
const usersRoutes = require("./routes/usersRoutes");
app.use("/auth", usersRoutes);

/** SERVER */

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
