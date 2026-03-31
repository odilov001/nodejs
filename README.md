2. PROJECT STRUCTURE
   project/
   ├── models/
   │ └── User.js
   ├── routes/
   │ └── auth.js
   ├── middleware/
   │ └── auth.js
   ├── server.js
   └── .env

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// DB ulanish
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'));

// route ulash
app.use('/api/auth', authRoutes);

// server start
app.listen(3000, () => console.log('Server running'));

👉 Vazifasi:

Serverni ishga tushiradi
DB ga ulanadi
Route’larni ulaydi
📄 2. models/User.js

👉 Bu — database modeli

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
username: String,
password: String,
});

module.exports = mongoose.model('User', userSchema);

Vazifasi:

Userni DB’da saqlash 4. BCRYPT NIMA?

bcrypt

Nima qiladi?

Passwordni yashiradi (hash qiladi)

❗ Nega hash qilish kerak?

Agar hash qilmasak:

password: 123456

Agar DB buzilsa → hamma password chiqib ketadi

Hash qilinganda:
password: $2b$10$Xyz....

hech kim o‘qiy olmaydi

const bcrypt = require('bcrypt');

const hashed = await bcrypt.hash(password, 10);

10 = salt rounds (xavfsizlik darajasi)

🔍 Qanday tekshiriladi?
const isMatch = await bcrypt.compare(password, user.password);
JWT NIMA?
🔧 Qanday yaratiladi?
const jwt = require('jsonwebtoken');

const token = jwt.sign(
{ id: user.\_id },
process.env.JWT_SECRET
);
Qanday tekshiriladi?
const decoded = jwt.verify(token, process.env.JWT_SECRET);
routes/auth.js

🔹 REGISTER
router.post('/register', async (req, res) => {
const { username, password } = req.body;

// 1. password hash
const hashed = await bcrypt.hash(password, 10);

// 2. DB ga saqlash
const user = await User.create({
username,
password: hashed
});

res.json(user);
});

🔹 LOGIN
router.post('/login', async (req, res) => {
const { username, password } = req.body;

// 1. user topish
const user = await User.findOne({ username });
if (!user) return res.status(404).json({ msg: "User not found" });

// 2. password tekshirish
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

// 3. token yaratish
const token = jwt.sign({ id: user.\_id }, process.env.JWT_SECRET);

res.json({ token });
});

👉 Flow:

👉 Bu — himoya qatlami

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
const token = req.headers.authorization;

if (!token) return res.status(401).json({ msg: "No token" });

try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded;
next();
} catch {
res.status(401).json({ msg: "Invalid token" });
}
};
router.get('/profile', authMiddleware, (req, res) => {
res.json({
msg: "Welcome",
user: req.user
});
});

const jwt = require('jsonwebtoken');

const token = jwt.sign(
{ id: "user_id_here" },
"YOUR_SECRET_KEY", // process.env.JWT_SECRET
{ expiresIn: '1h' }
);

console.log(token);
const decoded = jwt.verify(token, "YOUR_SECRET_KEY");
console.log(decoded.id);
Tokenni tekshirish → npm orqali, jsonwebtoken yordamida

Agar token ichidagi ma’lumotni ko‘rmoqchi bo‘lsangiz:

const decoded = jwt.decode(token);
console.log(decoded);