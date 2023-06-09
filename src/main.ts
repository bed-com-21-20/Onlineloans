import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });
 const options = new DocumentBuilder()
    .setTitle('Online-loans Customers')
    .setDescription('The Online-loans API description')
    .setVersion('1.0')
    .addTag('Users, Customers, Lenders')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

  await app.listen(3000);
=======
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const config = new DocumentBuilder()
  .setTitle('online-loans')
  .setDescription('Online-loans API')
  .setVersion('1.0')
  .addTag('swagger')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000);

>>>>>>> 1e42e8bd0ae6f42f3126da565d92d41644cb848f
}
bootstrap();
