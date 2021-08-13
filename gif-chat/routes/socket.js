import WebSocket from 'ws';

const servers = (server) => {
    const wss = new WebSocket.Server({server, port : 3001});

    wss.on('connection', (ws, req) => {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log('새로운 클라이언트 접속', ip);
        ws.on('message', (message) => { // 클라이언트로부터 메시지 수신 시
            console.log(message);
        });
        ws.on('error', (error) => {
            console.error(error);
        });
        ws.on('close', () => {
            console.log('클라이언트 접속 해제', ip);
            clearInterval(ws.interval);
        });

        ws.interval = setInterval(() => {
            if(ws.readyState === ws.OPEN){
                ws.send('서버에서 클라이언트로 메시지를 보냅니다');
            }
        }, 3000);
    })
}
export default servers; 