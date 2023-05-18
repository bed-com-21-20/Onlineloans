import { Controller, Get, Param, Post, Put, Delete, Body, Query, NotFoundException, ValidationPipe, ParseIntPipe, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user } from "./typeorm/User";
import { UsersService } from './users.service';
import { BeltGuard } from 'src/belt/belt.guard';
import { customers } from './typeorm';


@Controller('user')
export class UsersController {

    constructor(private UsersService: UsersService){}

// // GET / Customers --> []

 @Get()
 getCustomer(id: number){
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

// // POST /customer 
// @Post()
// @UseGuards(BeltGuard) // used to protect  route in this case, the post route
// createCustomer(@Body(new ValidationPipe()) createCustomerDto: CreateCustomerDto ){
   
//     return this.customersService.createCustomer(createCustomerDto);
//        }


// // DELETE /customer/: id 

@Delete(':id')
removeCustomer(@Param('id', ParseIntPipe) id: number){
    return this.UsersService.remove(id);
}

}