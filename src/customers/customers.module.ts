import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
//import { User } from 'src/==dry=run/users/entities/user.entity';
import entities from './typeorm';


@Module({
 
  controllers: [CustomersController],
  providers: [],
})
export class CustomersModule {}
