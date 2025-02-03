const EventEmittter = require('events');

const NewMensaje = new EventEmittter();

NewMensaje.on('mensaje',(Texto)=>{
    console.log(`El mensaje es: ${Texto}`);
});

const Texto = "Evento disparado con exito!!";

NewMensaje.emit('mensaje', Texto);
