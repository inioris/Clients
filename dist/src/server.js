"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const loader_1 = require("../config/loader");
const port = loader_1.default.port;
app_1.buildApp(loader_1.default)
    .then((app) => {
    app.set('port', port);
    const server = http_1.createServer(app);
    server.on('error', onError);
    server.on('listening', onListening);
    server.listen(port);
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
        switch (error.code) {
            case 'EACCES':
                console.log(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening on ${bind}`);
    }
})
    .catch(err => {
    console.log('An error ocurred while building the app:');
    console.log(err);
});
//# sourceMappingURL=server.js.map