import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',

    })
    id: number;

    @Column({
        nullable: false,
        default: '', 
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,
        default: '', 
    })
    emailAddress: string;

    @Column({
        nullable: false,
        default: '', 
    })
    password:  string;
}

//here we are creating a table for customers

@Entity()
export class customers{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: ' customer_id',

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

    @Column()
    emailAddress: string;

}