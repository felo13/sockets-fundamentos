// Es el mismo objeto del backend
var socket = io();

// on() son para escuchar
// Cuando el server se desconecta, él sigue intentando conectarse sólo, hasta que se vuelva a reactivar
socket.on('connect', function() {
    console.log('Conectado a Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con Servidor');
});

// Enviar información
// El evento no debe tener carcateres especiales ni espacios
// El segundo psarámetro puede ser culquier cosa, pero se acostumbra mejor enviar siempre un objeto
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Se disparó el callback', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});