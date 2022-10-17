import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { request } from 'express';
import { ChatDto, CreateRoomDto } from './app.dto';
import { AppService } from './app.service';
import { ChatEventsGateway } from './events/chat-events.gateway';
import { RoomEventsGateway } from './events/room-events.gateway';

@Controller()
export class AppController {
  //TODO inject event gateway module
  constructor(
    private readonly appService: AppService,
    private readonly roomEventGateway: RoomEventsGateway,
    private readonly chatEventGateway: ChatEventsGateway,
  ) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: this.appService.getHello() };
  }

  @Get('main')
  @Render('main')
  getMain() {
    return { message: this.appService.getHello() };
  }

  @Get('room')
  @Render('room')
  getRoom() {
    return { message: this.appService.getHello() };
  }

  @Get('room/:id')
  @Render('chat')
  public getRoomId() {
    const room = {
      title: 'test',
      chats: [],
      user: 'test1',
    };
    return room;
  }

  @Post('room/:id/chat')
  public async postChat(
    @Param('id') id: string,

    @Res() res: Response,
    @Body() chat: ChatDto,
  ) {
    // this.chatEventGateway.chat(id, chat.chat);
    return 'ok';
  }

  @Post('room')
  @Redirect('/room')
  public async postRoom(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createRoomDto: CreateRoomDto,
  ) {
    const newRoom = this.roomEventGateway.createRoom(createRoomDto);
    return { url: `/room/${newRoom._id}` };
  }
}
