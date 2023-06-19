import { MinLength, MaxLength, IsEnum} from 'class-validator';
import { IsNotEmpty} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
@ApiProperty({})
@MinLength(10)
@IsNotEmpty()
username: string;

@ApiProperty({})
@MinLength(10)
@IsNotEmpty()
emailAddress: string;

@ApiProperty({})
@MinLength(10)
@MaxLength(10)
@IsNotEmpty()
password:  string;

} 
