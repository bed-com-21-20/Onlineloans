import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/User/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
   
    // async signIn(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne(username);
    //     if (user?.password !== pass) {
    //       throw new UnauthorizedException();
    //     }
    //     const payload =  { password, ...result } = user;
    //  return {
        // access_token: await this.jwtService.signAsync(payload),
    //},

    //    
    //   }

}
