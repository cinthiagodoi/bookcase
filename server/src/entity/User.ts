import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import {IsEmail, validate, validateOrReject, IsNotEmpty} from 'class-validator';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    fullfillmentId: number;

		@Column()
		@IsNotEmpty({message: 'Name should not be empty'})
		name: string;
		

		@Column()
		@IsEmail()
		@IsNotEmpty()
    email: string;

		@Column()
		@IsNotEmpty()
		password: string;

		constructor(user: Partial<User>){
			Object.assign(this, user);
		}

}

