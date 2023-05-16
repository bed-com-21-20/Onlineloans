import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';

@Controller('customers')
export class CustomersController {


    @Get()
    getCustomer(){}

    @Post()
    createCustomer(){}

    @Put()
    editCustomer(){}

    @Delete()
    removeCustomer(){}

}

