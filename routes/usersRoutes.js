const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/data-request");

router.post("/login", createUser);

module.exports = router;
