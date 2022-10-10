import { Module } from '@nestjs/common';

import { DefaultLogger } from './logger-default';

@Module({
  providers: [DefaultLogger],
  exports: [DefaultLogger],
})
export class LoggerModule {}
