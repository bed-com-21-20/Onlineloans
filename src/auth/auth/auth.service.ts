import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/User/users.service';


@Injectable()
export class AuthService 
{
    constructor(
        private userService: UsersService
         
        
    ){}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOneUser(username);
        if (user && user.password === password) {
          // Password matches
          return user;
        }
        return null;
      }
}
