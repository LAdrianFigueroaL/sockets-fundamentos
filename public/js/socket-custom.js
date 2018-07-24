var socket = io();

//escuchar procesos
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion al servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Adrian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});