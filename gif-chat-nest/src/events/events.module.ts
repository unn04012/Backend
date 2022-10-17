import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger-module';
import { ChatEventsGateway } from './chat-events.gateway';
import { RoomEventsGateway } from './room-events.gateway';

@Module({
  providers: [RoomEventsGateway, ChatEventsGateway],
  imports: [LoggerModule],
  exports: [RoomEventsGateway, ChatEventsGateway],
})
export class EventsModule {}
