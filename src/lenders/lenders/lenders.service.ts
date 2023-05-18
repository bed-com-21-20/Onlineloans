import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lenders } from 'src/User/typeorm/lenders';
import { Repository } from 'typeorm';
import { CreateLenderParams } from 'src/utils/types';
import { UpdateLenderDto } from 'src/User/dto/update-lender.dto';
import { UpdateLenderParams} from 'src/utils/types';

@Injectable()
export class LendersService {
  Repository: any;
    constructor(
        @InjectRepository(lenders)
         private lendersRepository: Repository<lenders>,
        ){}


   async getlender(): Promise<lenders[]>{
    return await this.lendersRepository.find();
}

getOneLender(id: number){
    const lender = this.lendersRepository.findOneById(id);

    if(!lender){
        throw new Error('lender not found');
    }
    return lender;
}

//getlenderByID(id: number){}


createlender(lenderDetails: CreateLenderParams){
    try{
    const newLender = this.lendersRepository.create({ 
        ...lenderDetails,
   // createdAt: new Date(),
    });
   return this.lendersRepository.save(newLender);
}
   catch(err){
       throw new NotFoundException();
    }
}
 
   

    upDateLender(id: number, updateLenderDetails: UpdateLenderParams){
        return this.lendersRepository.update(id, { ...updateLenderDetails});
    }
    
 
    removelender(id: number){
        return this.lendersRepository.delete(id);
    }

}
