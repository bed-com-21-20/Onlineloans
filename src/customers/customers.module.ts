import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [CustomersService , CustomersModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'onlineloans',
    entities: [],
    synchronize: true

  }),
],
  controllers: [CustomersController],
  providers: [],
})
export class CustomersModule {}
