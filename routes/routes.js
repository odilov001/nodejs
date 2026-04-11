const express = require("express");
const router = express.Router();

const { createUser, getUsers } = require("../controllers/data-request");

router.post("/create", createUser);
router.get("/get", getUsers);

module.exports = router;
