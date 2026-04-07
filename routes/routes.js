const express = require("express");
const router = express.Router();

const { createChat } = require("../controllers/data-request");

router.post("/chat", createChat);

module.exports = router;
