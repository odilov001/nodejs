res.write() → javob yozadi
res.end() → javobni tugatadi

const http = require("http");

const server = http.createServer((req, res) => {
res.end("Hello World");
});

server.listen(3000);

const http = require("http");

const server = http.createServer((req,res)=>{

if(req.url === "/"){
res.end("Home Page")
}

else if(req.url === "/about"){
res.end("About Page")
}

else{
res.end("Page not found")
}

})

server.listen(3000)

const http = require("http");

const users = [
{ id:1, name:"Ali"},
{ id:2, name:"Vali"}
]

const server = http.createServer((req,res)=>{

res.setHeader("Content-Type","application/json")

res.end(JSON.stringify(users))

})

server.listen(3000)
