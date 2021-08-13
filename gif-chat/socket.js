import SocketIO from 'socket.io';

export default (server) => {
    const io = SocketIO(server, {path : '/socket.io'});

    io.on('connection', (socket) => {
        const req = socket.request;
        const ip = req.headers['s-forwarded-for'] || req.socket.remoteAddress;
    })
}