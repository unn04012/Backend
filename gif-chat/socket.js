import SocketIO  from "socket.io";

export default (server) => {
    const io = SocketIO(server, {path : '/socket.io'});

    io.on('connection', (socket) => {
        const req = socket.request;
        const ip = req.headers['s-forwarded-for'] || req.socket.remoteAddress;
        console.log('새로운 클라이언트 접속', ip, socket.id, req.ip);
        socket.on('disconnect', () => {
            console.log('클라이언트 접속 해제', ip, socket.id);
            cleartInterval(socket.interval);
        });

        socket.on('error', (error) => {
            console.error(error);
        });

        socket.on('reply', (data) => { // client에서 오는 data
            console.log('client : ', data);
        });

        socket.interval = setInterval(() => { // 3초마다 news 이벤트를 발생하고 Hello Soket.IO를 전송
            socket.emit('news', 'Hello Socket.IO');            
        }, 3000);
    })
}