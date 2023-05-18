import { PartialType } from "@nestjs/swagger";
import { CreateCustomerDto } from "./create-customer.dto";

export class UpdateCustomerDto extends PartialType(CreateCustomerDto){

Fname: string;
RegNumber:string;
PhoneNumber:number;
hostelName: string;
emailAddress: string;
amount: number;
dateBorrowed: Date;
repaymentDate: Date;

}