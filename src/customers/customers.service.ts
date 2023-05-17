import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { customers } from 'src/User/typeorm';
import { Repository} from 'typeorm';
import { CreateCustomerDto} from 'src/User/dto/create-customer.dto';
import { UpdateCustomerDto} from 'src/User/dto/update-customer.dto';

@Injectable()
export class CustomersService {
    Repository: any;
    constructor(
        @InjectRepository(customers)
        private customersRepository: Repository<customers>,          
        ){}


   async getCustomer(): Promise<customers[]> {
        return await this.customersRepository.find();
   }

   getOneCustomer(id: number){
       const customer = this.customersRepository.findOneById(id);
       
       if(!customer){
           throw new Error('Customer not Found');
       }
       return customer;
   }


    createCustomer(customerDetails: CreateCustomerDto){
        try{
            const newCustomer = this.customersRepository.create({
                ...customerDetails,
            });
            return this.customersRepository.save(newCustomer);
        } 
        catch(err){
            throw new NotFoundException();
        }
    }


    editCustomer(id: number, updateCustomerDto: UpdateCustomerDto){
        this.customersRepository = this.Repository.map((customers) =>{

            if(customers.id==id){
                return { ...customers, ...updateCustomerDto};
            }
        });
        return this.getOneCustomer(id);
    }

   async removeCustomer(id: number): Promise<void>{
       await this.customersRepository.delete(id);
   }


}
