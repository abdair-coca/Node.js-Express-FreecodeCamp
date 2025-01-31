const http = require('http');

const servidor = http.createServer((req, res) => {
    //definimos los datos en json
    const datos = {
        name : "Abdair",
        age : 18,
        fecha : new Date()
    };

    if(req.url === "/usuario"){
        res.writeHead(200, {'Content-Type': "application/json"});
        //Envia la respuesta en formato json
        res.end(JSON.stringify(datos));
    }else {
        res.writeHead(404, {'Content-Type': "text/plain"});
        res.end("Ruta no encontrada.")
    }
})

const puerto = 3000;

servidor.listen(puerto,() => {
    console.log(`El servidor esta ecuchando en el puerto ${puerto}...`)
})