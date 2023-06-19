import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LendersModule } from './lenders/lenders.module';
import { UsersModule } from './User/users.module';
import { CustomersModule } from './customers/customers.module';
import { CustomersController } from './customers/customers.controller';

import { UsersController } from './User/users.controller';
import { user, customers } from './User/typeorm';
import { lenders } from 'OnlineloansAPI/src/User/typeorm';
import { LendersController } from './lenders/lenders/lenders.controller';

@Module({
  imports: [
    UsersModule,
    LendersModule,
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://yrfsvjec:2nJPN38MBU1fDq-DAcPKvk-HHAp8AYZY@lucky.db.elephantsql.com/yrfsvjec',
     
      entities: [user, customers, lenders],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    LendersController,
    CustomersController,
    UsersController,
  ],
  providers: [AppService],
})
export class AppModule {}
