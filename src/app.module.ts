import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './==dry=run/users/users.module';
import { CustomersService } from './customers/customers.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import entities from './customers/typeorm';

@Module({
 
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'onlineloan',
    entities,
    synchronize: true,

  }),
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
