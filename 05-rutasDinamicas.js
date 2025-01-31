const http = require('http');

const servidor = http.createServer((req, res) => {
    if(req.url.startsWith('/saludo/')){
        const nombre = req.url.split('/')[2]; //el valor despues de /saludo/....
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Hola, ${nombre}`);
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Ruta no encontrada.");
    }
});

const puerto = 3000;

servidor.listen(puerto,() => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})