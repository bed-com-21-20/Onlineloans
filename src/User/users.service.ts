import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user } from './typeorm/User';

//export type ;
@Injectable()
 export class UsersService {
    
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>,
        ){}


async findOneUser(username:string): Promise<user | undefined> {
    return this.userRepository.findOneBy({username});
}
 

   async findAll(): Promise<user[]>{
       return await this.userRepository.find();
  }

  findOne(id: number): Promise< user | null> {
    return this.userRepository.findOneBy({ id });
  }
  
  createUser(UserDetails: CreateUserDto){
    try{
   const newUser = this.userRepository.create({
         ...UserDetails,
            });
     return this.userRepository.save(newUser)
       }
           catch(err){
            throw new NotFoundException();
       }
   }

   async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  updateUser(id: number, updateUserDetails: UpdateUserDto){
    return this.userRepository.update(id, { ...updateUserDetails});
}

 
}
