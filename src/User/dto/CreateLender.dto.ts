import { IsNotEmpty, MinLength } from "class-validator";

export class CreateLenderDto{

@IsNotEmpty()
@MinLength(5)
fname: string;

@IsNotEmpty()
emailAddress: string;

@IsNotEmpty()
@MinLength(10)
phonenum: number;


}