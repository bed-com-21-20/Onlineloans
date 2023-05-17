import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lenders } from 'src/User/typeorm/lenders';
import { Repository } from 'typeorm';
import { CreateLenderParams } from 'src/utils/types';
import { UpdateLenderDto } from 'src/User/dto/update-lender.dto';

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
 
    updatelender(id: number, updateLenderDto: UpdateLenderDto ){
        this.lendersRepository = this.Repository.map((lender) =>{

            if(lender.id ==id){
                return { ...lender, ...updateLenderDto};
            }
        });
        return this.getOneLender(id);
    }

    //    updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto){
//         this.customers = this.customers.map((customer) =>{
//             if(customer.id ==id){
//                 return { ...customer, ...updateCustomerDto};
//             }
//             return customer;
//         });

//         return this.getonecustomer(id);
//     }


    async removelender(id: number): Promise<void>{
        await this.lendersRepository.delete(id);
    }

}
