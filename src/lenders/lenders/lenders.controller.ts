import { Controller, Get, Post, Delete, Put, Body, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CreateLenderDto } from 'src/User/dto/CreateLender.dto';
import { LendersService } from './lenders.service';
import { lenders } from 'src/User/typeorm/lenders';
import {  UpdateLenderDto } from 'src/User/dto/update-lender.dto';

@Controller('lenders')
export class LendersController {
    constructor( private lendersService: LendersService){ }

//returns all lenders in the database
    @Get()
    getlenders(){
        return this.lendersService.getlender();
    }
 
    //Get / lender/id

    @Get(':id')
    getOneLender(@Param('id' ) id: number){

        try{
            return this.lendersService.getOneLender(id);
        } catch (err){
            throw new NotFoundException();
        }
    }

   
    @Post()
    createlender(@Body() createlenderDto: CreateLenderDto){
        
        this.lendersService.createlender(createlenderDto);
    }

    // DELETE /customer/: id 
    @Delete(':id')
    async removelender(@Param('id', ParseIntPipe) id: number){
       await this.lendersService.removelender(id)
    }


    @Put(':id')
    async editlender(@Param('id', ParseIntPipe) id: number,
     @Body() UpdateLenderDto: UpdateLenderDto
     ){
      await this.lendersService.upDateLender(id, UpdateLenderDto );
    }


}
