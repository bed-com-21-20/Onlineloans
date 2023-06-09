import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {user} from './User/typeorm/User';
import { LendersModule } from './lenders/lenders.module';
import { UsersModule } from './User/users.module'
import { CustomersModule } from './customers/customers.module';
import { CustomersController} from './customers/customers.controller';
import { LendersController } from './lenders/lenders/lenders.controller';
import { customers } from './User/typeorm';
import { lenders } from './User/typeorm/lenders';
import { UsersController } from './User/users.controller';

@Module({
 
  imports: [UsersModule,LendersModule,CustomersModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'onlineloan',
    entities: [user,customers,lenders],  
    synchronize: true,

  })
],

<<<<<<< HEAD
  controllers: [AppController,LendersController,CustomersController,UsersController],
=======
  controllers: [AppController,LendersController,CustomersController],
>>>>>>> 1803ef1e51cacbfbee9ec0e81784871b2f19c4b4
  providers: [AppService]
})
export class AppModule {}
