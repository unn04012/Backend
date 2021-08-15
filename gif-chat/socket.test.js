import WebSocket from './socket';
import Client from 'socket.io-client';
import express from 'express';


describe('test socket', () =>{
    let serverSocket, clientSocket;

    beforeAll((done) => {
        const app = express();
        serverSocket = app.listen(3000, () => {
            console.log('listening on 3000');
        }); // express server 실행                              
         
        // clientSocket 생성
        clientSocket = new Client('http://localhost:3000', {
            path : '/socket.io',
        });

        WebSocket(serverSocket);       
        clientSocket.on('connect', done);        
    });    

    afterAll(() => {
        serverSocket.close();        
    });

    test('reply event socket', (done) => {        
        clientSocket.emit('reply', 'Hello Node.js')
        done();
        // expect(result).toBe(data);        
    });

    test('error event socket', (done) => {
        clientSocket.emit('error', 'error event occur');
        done();
    });    
    
    test('socket connection success', (done) => {    
        clientSocket.on('news', (data) => {            
            expect(data).toBe('Hello Socket.IO');            
            done();
        });                
    });

    test('disconnect event socket', (done) => {
        clientSocket.disconnect();
        done();
    });

   
   
})