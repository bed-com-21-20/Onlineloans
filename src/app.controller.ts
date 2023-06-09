<<<<<<< HEAD
import { Controller, Get, UseGuards } from '@nestjs/common';
=======
import { Controller, Get } from '@nestjs/common';
>>>>>>> 1e42e8bd0ae6f42f3126da565d92d41644cb848f
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
<<<<<<< HEAD
    return this.appService.getHello();
=======
    return this.appService.getposts();
>>>>>>> 1e42e8bd0ae6f42f3126da565d92d41644cb848f
  }
}
