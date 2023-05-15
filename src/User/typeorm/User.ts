import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class user{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',

    })
    id: number;

    @ApiProperty()
    @Column({
        nullable: false,
        default: '', 
    })
    username: string;

    @ApiProperty()
    @Column({
        name: 'email_address',
        nullable: false,
        default: '', 
    })
    emailAddress: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: '', 
    })
    password:  string;
}

