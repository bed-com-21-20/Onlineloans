import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  //imports: [ CustomersService]
  controllers: [CustomersController],
  providers: [],
})
export class CustomersModule {}
