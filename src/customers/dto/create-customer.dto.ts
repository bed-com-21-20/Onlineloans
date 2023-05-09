import { MinLength, MaxLength, IsEnum} from 'class-validator';
import { IsNotEmpty} from "class-validator";

export class CreateCustomerDto {

@MinLength(30)
@IsNotEmpty()
fname: string;

@MinLength(30)
@IsNotEmpty()
RegNumber: string;

@MinLength(10)
@MaxLength(10)
@IsNotEmpty()
PhoneNumber: number;

}
