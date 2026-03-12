│
├── controllers
│ └── usersController.js exports.getUsers barcha so'rovlar yoziladi export bilan
│
├── routes
│ └── usersRoutes.js. const router = require("express").Router();

                                 const {
                                   getUsers,
                                   getSingleUser,
                                   createUser,
                                   deleteUser,
                                 } = require("../controllers/usersController");

                                 router.get("/", getUsers);
                                 router.get("/:id", getSingleUser);
                                 router.post("/", createUser);
                                 router.delete("/:id", deleteUser);

module.exports = router;
│
├── middleware
│ └── logger.js
│
├── data
│ └── users.js. data qilish kerak userlarni object va export
│
├── app.js.
const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());

/\*_ middleware _/
app.use(logger);

/\*_ routes _/
app.use("/users", usersRoutes);

app.listen(3000, () => {
console.log("Server running on port 3000");
});

Bu middleware serverga kelayotgan har bir request haqida ma’lumotni konsolga chiqarish uchun ishlatiladi. Backendda bu juda foydali, chunki serverga kim, qaysi URL orqali, qanday metod bilan murojaat qilganini ko‘rish mumkin.
next() — requestni keyingi middleware yoki route ga yuboradi.
Agar next() yozilmasa
 request shu joyda to‘xtab qoladi
 browser javob olmaydi
