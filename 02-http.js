const http = require('http');

const servidor = http.createServer((req, res)=>{
    console.log(req.url)
    res.end("Bienvenido a mi servidor");
})

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})