import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {user} from './User/typeorm/User';
import { LendersModule } from './lenders/lenders.module';
import { UsersModule } from './User/users.module'
@Module({
 
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'onlineloan',
    entities: [user],
    synchronize: true,

  })
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
