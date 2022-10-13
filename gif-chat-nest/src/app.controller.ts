import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //TODO inject event gateway module
  constructor(private readonly appService: AppService) {}

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

  @Post('room')
  postRoom(@Req() request: Request, @Res() response: Response) {
    //TODO inject event module
  }
}
