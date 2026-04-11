const { Server } = require("socket.io");

const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

/** DB and REDIS */
const connectDB = require("./config/db");
const { connectRedis } = require("./config/redis");
connectDB();
connectRedis();
/** MIDDLEWARE */

app.use(cors());
app.use(express.json());

/** ROUTES */
const userRouter = require("./routes/routes");
app.use("/api", userRouter);

/** SERVER */

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
