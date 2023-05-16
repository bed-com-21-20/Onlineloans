import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { CreateLenderDto } from 'src/User/dto/CreateLender.dto';
import { LendersService } from './lenders.service';

@Controller('lenders')
export class LendersController {
    constructor( private lendersService: LendersService){ }


    @Get()
    getlenders(){}
 
    @Post()
    createlender(@Body() createlenderDto: CreateLenderDto){
        
        this.lendersService.createlender(createlenderDto);
    }

    @Delete()
    removelender(){}

    @Put()
    editlender(){}



}
