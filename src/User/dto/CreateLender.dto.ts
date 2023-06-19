import { IsNotEmpty, MinLength, IsString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLenderDto{
@ApiProperty({})
@IsNotEmpty()
@MinLength(5)
@IsString()
fname: string;

@ApiProperty({})
@IsNotEmpty()
emailAddress: string;

@ApiProperty({})
@IsNotEmpty()
@MinLength(10)
@IsInt()
phonenum: number;


}