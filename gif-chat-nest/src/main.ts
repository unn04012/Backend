import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path/posix';

import { AppModule } from './app.module';
import { ConfigurationReader } from './configurations/configuration-reader';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useWebSocketAdapter(new SocketIoAdapter(app));

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '../public', 'views'));
  app.setViewEngine('html');

  const { httpPort } = new ConfigurationReader();
  await app.listen(httpPort);
  console.log(`listening on port ${httpPort}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
