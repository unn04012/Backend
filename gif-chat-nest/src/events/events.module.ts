import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger-module';
import { EventsGateway } from './events.gateway';

@Module({
  providers: [EventsGateway],
  imports: [LoggerModule],
})
export class EventsModule {}
