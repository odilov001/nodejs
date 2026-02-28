npm init

install nodemon => bu saytni yaratib bo'lingandan keyin ishlatiladigan run uchun qo'llaniladi -D qilish kerak
install uui paket => bu ID generatsiya qiladigan paket
module.exports = object yozish kerak bu globalniy tarzda export qilish degani

buni fileda import qilish uchun

biron bir o'zgaruvchi va
required('')
users papkasini ichida class yaratib olsa hambo'ladi

**dirname
**filename
modules papka ochish kerak
path.js ochish kerak
pathni import qilish uchun required('path')
bu esa Basename methodi hisoblanadi(file nomini chiqarib beradi)
clg(path.basename(\_\_filename))
papka nomini qaytarish uchun
path.dirname(\_\_filename)
//extname yani turgan papkani nomini chiqarib berad
clg(path.extname(\_\_filename))
agar malumotlarni object sifatida chiqarmoqchi bo'lsam
o'zgaruvchi va path.parse(\_\_filename)
.join() bu methodi shunga kiritilgan filegahca bo'lgan yo'lni ko'rsatib beradi
yani
join(\_\_dirname, 'database','mongodb', 'db.js')
