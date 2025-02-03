const fs = require('fs').promises;

async function leerArchivo () {
    try{
        const data = await fs.readFile('datos.txt', 'utf8');
        console.log(data);
    }catch (err){
        console.log(`el error ocurrio leyendo: ${err}`)
    }
}
leerArchivo();