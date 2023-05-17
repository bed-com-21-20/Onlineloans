import { IsNotEmpty, IsNumber, IsDate } from "class-validator";

export class CreateCustomerDto{
    @IsNotEmpty()
    Fname: string;

    @IsNotEmpty()
    RegNumber: string;

    @IsNotEmpty()
    PhoneNumber: number;

    @IsNotEmpty()
    hostelName: string;

    @IsNotEmpty()
    emailAddress: string;

    @IsNumber()
    amount: number;

    @IsDate()
    dateBorrowed: Date;
    @IsDate()
    repaymentDate: Date;

}