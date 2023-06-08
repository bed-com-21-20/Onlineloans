import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/User/users.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService,UsersService, LocalStrategy],
  controllers: [AuthController]

})
  
export class AuthModule {}
