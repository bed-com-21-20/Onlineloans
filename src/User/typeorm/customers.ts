import { Entity, Column, PrimaryGeneratedColumn, Double} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


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
    emailAddress: string;

    @Column('double')
    amount: number;

    @Column()
    dateBorrowed: Date;

    @Column()
    repaymentDate: Date;
}
