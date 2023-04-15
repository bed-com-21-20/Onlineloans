import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getposts(): string {
    return 'Get posts';
  }
}
