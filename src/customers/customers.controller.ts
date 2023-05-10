import { Controller, Get, Param, Post, Put, Delete, Body, Query, NotFoundException, ValidationPipe, ParseIntPipe, UseGuards, UsePipes } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
//import { query } from 'express';
import { CustomersService } from './customers.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('customers')
export class CustomersController {

    constructor(private readonly customersService: CustomersService){}

// GET / Customers --> []
 @Get()
 getCustomer(@Query('Reg_Number') Reg_Number: 'Bed-com'| 'Bsc-com'){
    //const service = new CustomersService();
    return this.customersService.getCustomer(Reg_Number);
 } 

//GET / customer/:id --> { ... }

@Get(':id')
getonecustomer(@Param('id') id: number ){
    try{
    return this.customersService.getonecustomer(id);
    } catch (err){
        throw new NotFoundException();
    }

}

//POST /Customer
 @Post('create')
 @UsePipes(ValidationPipe)
 creatCustomer(@Body() createCustomerDto: CreateCustomerDto){
 }



// POST /customer 
@Post()
@UseGuards(BeltGuard) // used to protect  route in this case, the post route
createCustomer(@Body(new ValidationPipe()) createCustomerDto: CreateCustomerDto ){
   
    return this.customersService.createCustomer(createCustomerDto);
       }

// PUT /customer/:id --> { ... }
@Put(':id')
updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto){
    return this.customersService.updateCustomer(+id, updateCustomerDto);
    
}
// DELETE /customer/: id 
@Delete(':id')
removeCustomer(@Param('id', ParseIntPipe) id: number){
    return this.customersService.removeCustomer(id);
}

}