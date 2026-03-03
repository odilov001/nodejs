Modullar
| Modul | Nima uchun kerak |
| ------ | ------------------------------- |
| path | Fayl yo‘lini xavfsiz boshqarish |
| os |z Server ma’lumotlari |
| fs | Fayl bilan ishlash |
| event | malumotlar kirdi chiqdi va o'zgarishlarni xabardor qilib turadi

require('os')
.freemem() // bosh xotira kompyuterdagi
.useInfo() // Foynadlanuvchi
.platform() //qaysi platformada
.totalmem()// qancha ram bor
require('fs')
fs.readFile('.index.js', fn(err,file){})
.writefile
.rename homework
.unlink

const EventEmitter =require('event')
const emitter = new EventEmitter()
emitter.emit('message',{id, url})// bu biron bir narsani chiqarish va tarqatish yoki xabardor qilish degani

emitter.on('message', (arg)=>{
clg('Listening.....')
})
