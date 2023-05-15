import { MinLength, MaxLength, IsEnum} from 'class-validator';
import { IsNotEmpty} from "class-validator";

export class CreateUserDto {

@MinLength(10)
@IsNotEmpty()
username: string;

@MinLength(10)
@IsNotEmpty()
emailAddress: string;

@MinLength(10)
@MaxLength(10)
@IsNotEmpty()
password:  string;

} 
