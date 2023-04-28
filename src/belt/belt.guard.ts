import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   const request = context.switchToHttp().getRequest();
   
   //validate request

  ///const hasBackist = request.user.belts.includes('black');
   
   //can be used for authorization purposes
    return true;
  }
  // when the boolean is true it means the action will be permitted
  //if it is false then it will be forbiden 
}
