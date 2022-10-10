import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
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
})
export class EventsGateway implements NestGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly logger: DefaultLogger) {
    this.logger.setContext('event-gateway');
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

  public handleDisconnect(client: Socket) {
    this.logger.log(`client disconnected : ${client.id}`);
  }
  public handleConnection(client: Socket) {
    this.logger.log(`client connected : ${client.id}`);
  }

  public afterInit() {
    this.logger.log(`init websocket server`);
  }
}