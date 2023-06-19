import { IsNotEmpty, IsNumber, IsDate } from "class-validator";
import { ApiProduces, ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto{
    @ApiProperty({})
    @IsNotEmpty()
    Fname: string;

    @ApiProperty()
    @IsNotEmpty()
    RegNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    PhoneNumber: number;
    @ApiProperty()
    @IsNotEmpty()
    hostelName: string;
    @ApiProperty()
    @IsNotEmpty()
    emailAddress: string;
    @ApiProperty()
    @IsNumber()
    amount: number;
    @ApiProperty()
    @IsDate()
    dateBorrowed: Date;
    @ApiProperty()
    @IsDate()
    repaymentDate: Date;

}