import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './typeorm/User';
import { UsersService } from './users.service';


@Module({
 imports: [TypeOrmModule.forFeature([user])],
 providers: [UsersService], 
 controllers: [UsersController],
 exports: [UsersService]
  
})
export class UsersModule {}
 