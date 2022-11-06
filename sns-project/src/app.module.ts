import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { initConfiguration } from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [initConfiguration] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
