import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //TODO resolve http port to createServer
  await app.listen(3000);
}
bootstrap();
