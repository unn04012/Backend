import WebSocket from './socket';
import {createServer} from 'http';
import {Server} from 'socket.io';
import Client from './socket.io-client';


describe('test socket', () =>{
    let io, serverSocket, clientSocket;

    beforeAll((done) => {
        const httpServer = createServer();
        httpServer.listen()
    })
})