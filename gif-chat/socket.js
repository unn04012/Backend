import axios from "axios";
import SocketIO  from "socket.io";

export default (server, app, sessionMiddleware) => {
    const io = SocketIO(server, {path : '/socket.io'});
    app.set('io', io);

    const room = io.of('/room'); // namespace 부여 메서드
    const chat = io.of('/chat');

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.request, next);
    })

    room.on('connection', (socket) => {
        console.log('room 네임스페이스에 접속');
        socket.on('disconnect', () => {
            console.log('room 네임스페이스 접속 해제');
        });
    });
    
    chat.on('connection', (socket) => {
        console.log('chat 네임스페이스에 접속');
        const req = socket.request;
        const {headers : {referer}} = req; 
        const roomId = referer.split('/')[referer.split('/').length-1].replace(/\?.+/, '');

        socket.join(roomId); // 방에 들어올 경우

        socket.to(roomId).emit('join', {
            user : 'system',
            chat : `${req.session.color}님이 입장하셨습니다.`,
        });

        socket.on('disconnect', async () => {
            console.log('chat 네임스페이스 접속 해제');
            socket.leave(roomId); // 방에 나갈 경우
            const currentRoom = socket.adapter.rooms[roomId];
            const userCount = currentRoom ? currentRoom.length : 0;

            if(userCount === 0){
                const result = await axios.delete(`http://localhost:8005/room/${roomId}`)                    ;
                if(result) console.log('방 제거 요청 성공');
                else console.error(result.error);
            }else{
                socket.to(roomId).emit('exit', {
                    user : 'system',
                    chat : `${req.session.color}님이 퇴장하셨습니다.`
                });
            }
        });
    });       
};