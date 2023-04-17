import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true // 只會傳入有宣告的屬性, 其他屬性會被排除
    })
  )
  await app.listen(3000);
}
bootstrap();
