import { MinLength, IsEnum} from 'class-validator';
export class CreateCustomerDto {

@MinLength(6)
name: 'Bed-com | Bsc-com';


Reg_Number: string;

Phone_Number: number;

}
