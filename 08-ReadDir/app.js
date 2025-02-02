const fs = require('fs');

const directorio = 'C:/Users/HP VICTUS/Desktop/SoftwarEngineering/1-Back-end/Node.js-Express-FreecodeCamp';
const rutaArchivo = 'resumen.txt'

fs.readdir(directorio, {withFileTypes : true}, (err, files) => {
    if(err){
        console.log(err);
    }
    console.log(`archivos en el directorio ${directorio}: `);
    fs.writeFile(rutaArchivo, '', err => {
        if(err){
            console.log(err);
       }
       console.log("Archivo creado correctamente.");

       files.forEach(file => {
        fs.appendFile(rutaArchivo, `${file.name}\n`, err => {
            if(err){
                console.log(`Error al escribir ${file.name} en el archivo: `, err);
            }
            console.log("correcto.")
        })
       });
    });
})