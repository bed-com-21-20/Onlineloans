import { PartialType } from "@nestjs/mapped-types";
import { CreateLenderDto } from "./CreateLender.dto";


export class UpdateLenderDto extends PartialType(CreateLenderDto){
    fname: string;
    emailAddress: string;
    phonenum: number;

}