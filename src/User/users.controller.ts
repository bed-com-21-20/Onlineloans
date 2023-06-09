import { Controller, Get, Param, Post, Put, Delete, Body, NotFoundException, ValidationPipe, ParseIntPipe, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';


@Controller('user')
export class UsersController {

    constructor(private UsersService: UsersService){}

// // GET / Customers --> []

 @Get()
 getCustomer(){
      return this.UsersService.findAll();
 } 


// //GET / customer/:id --> { ... }

@Get(':id')
getOneLender(@Param('id' ) id: number){

    try{
        return this.UsersService.findOne(id);
    } catch (err){
        throw new NotFoundException();
    }
}

//POST /Customer

 @Post('create')
 @UsePipes(ValidationPipe)
 creatCustomer(@Body() createUserDto: CreateUserDto){
     this.UsersService.createUser(createUserDto);
 }


 @Put(':id')
 async updateUser(@Param('id', ParseIntPipe) id: number,
  @Body() UpdateUserDto: UpdateUserDto
  ){
   await this.UsersService.updateUser(id, UpdateUserDto );
 }


@Delete(':id')
removeCustomer(@Param('id', ParseIntPipe) id: number){
    return this.UsersService.remove(id);
}

}