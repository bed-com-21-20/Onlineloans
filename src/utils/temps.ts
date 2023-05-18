import { Column } from "typeorm";
import { IsEmail, IsDate } from "class-validator";
import { type } from "os";


export type CreateCustomerParams = {
    Fname: string;

    RegNumber: string;

    PhoneNumber: number;

    hostelName: string;

    emailAddress: string;

    amount: number;

    dateBorrowed: Date;

    repaymentDate: Date; 
      
};

export type UpdateCustomerParams = {
    Fname: string;
    PhoneNumber: number;
    hostelName: string;
    emailAddress: string;
    amount: number;
};
