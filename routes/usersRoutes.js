const router = require("express").Router();
const { getUsers, filterUsers, getSingleUser, createUser, deleteUser, updateUser } = require("../controllers/usersController");

router.get("/", getUsers);
router.get("/query", filterUsers);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;