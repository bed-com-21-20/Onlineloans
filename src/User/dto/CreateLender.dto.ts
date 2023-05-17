import { IsNotEmpty, MinLength, IsString, IsInt } from "class-validator";

export class CreateLenderDto{

@IsNotEmpty()
@MinLength(5)
@IsString()
fname: string;

@IsNotEmpty()
emailAddress: string;

@IsNotEmpty()
@MinLength(10)
@IsInt()
phonenum: number;


}