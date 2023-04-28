import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './==dry=run/users/users.module';
//import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
