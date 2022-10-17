import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';

import { Server } from 'http';
import { from, map, Observable } from 'rxjs';
import { Socket } from 'socket.io';
import { DefaultLogger } from 'src/logger/logger-default';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/chat',
})
export class ChatEventsGateway implements NestGateway {
  @WebSocketServer()
  server: Server; // IO
  private roomId: any;

  constructor(private readonly logger: DefaultLogger) {
    this.logger.setContext('chat-event-gateway');
  }

  @SubscribeMessage('events')
  public findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log(data);

    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  @SubscribeMessage('message')
  public chat(
    @ConnectedSocket() client: Socket,
    @MessageBody('message') message: string,
    @MessageBody('roomId') roomId: string,
  ) {
    // console.log(roomId, {촘ㅅ});

    client.to(roomId).emit('chat', { chat: message });
  }

  public handleDisconnect(client: Socket) {
    client.leave(this.roomId);
    const currentRoom = client.rooms[this.roomId];
    // const userCount = currentRoom ? currentRoom.length : 0;
    client.to(this.roomId).emit('exit', {
      user: 'system',
      chat: `고객님이 퇴장하셨습니다.`,
    });

    this.logger.log(`client disconnected : ${client.id}`);
  }

  public handleConnection(@ConnectedSocket() client: Socket) {
    this.logger.log(`client connected to chat namespace : ${client.id}`);
    const req = client.request;
    const {
      headers: { referer },
    } = req;
    this.roomId = referer
      .split('/')
      [referer.split('/').length - 1].replace(/\?.+/, '');

    client.join(this.roomId);
    client.to(this.roomId).emit('join', {
      user: 'system',
      chat: `고객님이 입장하셨습니다.`,
    });
    this.logger.log(`${client.id} join room : ${this.roomId}`);
  }

  public afterInit() {
    this.logger.log(`init websocket server`);
  }
}
