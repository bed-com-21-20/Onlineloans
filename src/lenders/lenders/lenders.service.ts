import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lenders } from 'src/User/typeorm/lenders';
import { Repository } from 'typeorm';
import { CreateLenderParams } from 'src/utils/types';

@Injectable()
export class LendersService {
    constructor(
        @InjectRepository(lenders)
         private lendersRepository: Repository<lenders>,
        ){}


getlender(){}

createlender(lenderDetails: CreateLenderParams){
    try{
    const newLender = this.lendersRepository.create({ 
        ...lenderDetails,
   // createdAt: new Date(),
    });
   return this.lendersRepository.save(newLender);}
   catch(err){throw new NotFoundException();}
}


    
updatelender(){}

removelender(){}

}
