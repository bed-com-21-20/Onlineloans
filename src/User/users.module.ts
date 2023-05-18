import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { user } from './typeorm/User';

@Module({
 imports: [TypeOrmModule.forFeature([user])],
 providers: [UsersService], 
 controllers: [UsersController],
 exports: [UsersService]
  
})
export class UsersModule {}
 