const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const client = redis.createClient();

const connectRedis = async () => {
	try {
		await client.connect(process.env.MONGO_URI);
		console.log("Redis connected");
	} catch (error) {
		console.error("Redis error:", error.message);
		process.exit(1);
	}
};

module.exports = { client, connectRedis };
