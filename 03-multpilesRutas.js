const http = require('http');

const servidor = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Pagina de inicio");
    }else if(req.url === "/about"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Acerca de esta pagina");
    }else if(req.url === "/contact"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Contacto: abdaircoca@gmail.com");
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Ruta no encontrada.")
    }
})

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log(`El servidor esta ecuchando en el puerto ${puerto}...`)
})