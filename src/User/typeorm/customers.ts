import { Entity, Column, PrimaryGeneratedColumn, Double} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsDate } from "class-validator";


@Entity()
export class customers{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'customer_id',

    })
    customer_Number: number;

    @Column()
    Fname: string;

    @Column({
        nullable: false,
        default: '',
    })
    RegNumber: string;

    @Column({
        nullable: false,
        
    })
    PhoneNumber: number;

    @Column('text')
    hostelName: string;

    @Column('text')
    @IsEmail()
    emailAddress: string;

    @Column('int')
    amount: number;

    @Column()
    @IsDate()
    dateBorrowed: Date;

    @Column()
    @IsDate()
    repaymentDate: Date;
   
}
