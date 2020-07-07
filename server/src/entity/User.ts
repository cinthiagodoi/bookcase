import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import {IsEmail, validate, validateOrReject, IsNotEmpty} from 'class-validator';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    fullfillmentId: number;

		@Column()
		@IsNotEmpty( { message: 'Name is required'})
		name: string;
		

		@Column()
		@IsEmail({}, { message: 'Incorrecetemail'})
		@IsNotEmpty( { message: 'Email is required'})
    email: string;

		@Column()
		@IsNotEmpty( { message: 'password is required'})
		password: string;

		constructor(user: Partial<User>){
			Object.assign(this, user);
		}

}

