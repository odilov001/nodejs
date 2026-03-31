const express = require("express");
const cors = require("cors");

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
const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
