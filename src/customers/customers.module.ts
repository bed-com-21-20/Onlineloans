import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
//import { User } from 'src/==dry=run/users/entities/user.entity';
import entities from './typeorm';


@Module({
  imports: [CustomersService , CustomersModule,TypeOrmModule.forRoot({
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
  controllers: [CustomersController],
  providers: [],
})
export class CustomersModule {}
