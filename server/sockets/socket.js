const { io } = require('../server');

// Cada que se recarga el navegador web él detecta que hay una conexión.
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desonectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // Con esto hago que el mensaje le llegue a todos los clientes que estén conectados
        client.broadcast.emit('enviarMensaje', data);
        // callback();
        /* if (data.usuario) {
            callback({
                resp: 'TODO SALIÓ BIEN'
            });
        } else {
            callback({
                resp: 'NO MANDASTE EL USUARIO MONO...'
            });
        } */

    });
});