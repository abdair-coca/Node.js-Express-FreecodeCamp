const fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log("El archivo fue leido correctamente.")
})

const contenido = "Este es el nuevo contenido.";

fs.writeFile('Salida.txt', contenido, err => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("El archivo se escribio correctamente.");
    }
})