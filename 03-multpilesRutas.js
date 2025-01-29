const http = require('http');

const servidor = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Pagina de inicio");
    }else if(req.url === "/about"){
        res.end("Acerca de esta pagina");
    }else if(req.url === "/contact"){
        res.end("Contacto: abdaircoca@gmail.com");
    }
})

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log(`El servidor esta ecuchando en el puerto ${puerto}...`)
})