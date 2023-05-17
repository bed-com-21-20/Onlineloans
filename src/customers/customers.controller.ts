import { Controller, Get, Post, Put, Delete, Body,Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from 'src/User/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/User/dto/update-customer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService){}


    @Get()
    getCustomer(){
        return this.customersService.getCustomer();
    }

    @Get('id')
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
    editCustomer(@Param('id', ParseIntPipe) id: number, updatecustomerDto: UpdateCustomerDto){
        return this.customersService.editCustomer(id, updatecustomerDto);
    }

    @Delete('id')
    removeCustomer(@Param('id,', ParseIntPipe) id: number){
        return this.customersService.removeCustomer(id);
    }

}

