import { Controller, Get, Post, Put, Delete, Body,Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from 'src/User/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/User/dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService){}


    @Get()
    getCustomer(){
        return this.customersService.getCustomer();
    }

    @Get(':id')
    getOneCustomer(@Param('id')id: number){
        try{
            return this.customersService.getOneCustomer(id);
        } catch (err){
            throw new NotFoundException();
        }
    } 

    @Post()
    createCustomer(@Body() createcustomerDto: CreateCustomerDto){
        this.customersService.createCustomer(createcustomerDto);
    }

    @Put(':id')
   async editCustomer(@Param('id', ParseIntPipe) id: number,
     @Body() updatecustomerDto: UpdateCustomerDto
     ){
      await this.customersService.updateCustomer(id, updatecustomerDto);
    }

    @Delete(':id') 
    async remove(@Param('id', ParseIntPipe) id: number){
       await this.customersService.removeCustomer(id);
    } 

}

