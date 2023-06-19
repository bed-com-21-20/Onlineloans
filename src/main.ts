import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });
 const options = new DocumentBuilder()
    .setTitle('Online-loans Customers')
    .setDescription('Apply Online-loans ')
    .setVersion('1.0')
    .addTag("Oline Loans")
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
