// Nodejitsu
var httpServer = require('http-server');

var port = 80,
    host = '0.0.0.0';

var options = {
    root: './public',
    autoIndex: true,
    cache: true
};

function onListening() {
    console.log('Starting up http-server, serving '
        + server.root
        + ' on port: '
        + port.toString());
}

var server = httpServer.createServer(options);
server.listen(port, host, onListening);

if (process.platform !== 'win32') {
    //
    // Signal handlers don't work on Windows.
    //
    process.on('SIGINT', function () {
        console.log('http-server stopped.');
        process.exit();
    });
}