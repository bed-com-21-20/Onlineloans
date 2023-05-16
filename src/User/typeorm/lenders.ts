import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class lenders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fname: string;

    @Column()
    @IsEmail()
    emailAddress: string;

    @Column({type: "bigint"})
    phonenum: number;

   }