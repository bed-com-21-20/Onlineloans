import { IsNotEmpty, MinLength } from "class-validator";
import { type } from "os";

export type CreateLenderParams ={

fname: string;

emailAddress: string;

phonenum: number;
   
};

export type UpdateLenderParams ={

    fname: string;
    
    emailAddress: string;
    
    phonenum: number;
       
    };

    export type CreateUserParams ={

       username: string;
       password: string;
       emailAddress: string;
           
        };
    
    
        
