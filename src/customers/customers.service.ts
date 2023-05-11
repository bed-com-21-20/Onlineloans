import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { user } from './typeorm/User';

@Injectable()
export class CustomersService {
   
    constructor(
        @InjectRepository(user)
        private readonly userRepository: Repository<user>,        
        
    ){}
    
   async findAll(): Promise<user[]>{
       return await this.userRepository.find();
  }
     
    private customers = [
        {   id : 0, 
            Reg_Number: 'Bed-com',
            name: 'Wabla', 
            Phone_Number: 20
        },
        {   id : 2, 
            Reg_Number: 'Bsc-com',
            name: 'Kho', 
            Phone_Number: 15
        },


    ];

    //this will filter by Reg#
    getCustomer(name:string){
        console.log(this.customers);
        if(name){ 
            return this.customers.filter((customer)=> customer.name === name);
        }
        return this.customers;

    }
    
    getonecustomer(id: number ){
        const customer = this.customers.find((customer) => customer.id == id);
       
       if(!customer){
           throw new Error('customer not found');
       }
        return customer;
    }

    
    createCustomer(creatCustomerDto: CreateCustomerDto){
      const newCustomer = {
          ...CreateCustomerDto,
          id: Date.now(),
      };
      
        this.customers.push();
        return newCustomer;
    }
   updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto){
        this.customers = this.customers.map((customer) =>{
            if(customer.id ==id){
                return { ...customer, ...updateCustomerDto};
            }
            return customer;
        });

        return this.getonecustomer(id);
    }


removeCustomer(id:number){
    const toBeRemoved = this.getonecustomer(id);

    this.customers = this.customers.filter((customer) => customer.id !==id);
}



}
