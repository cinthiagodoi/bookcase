import {Entity, PrimaryGeneratedColumn, Column, Unique, BeforeInsert, BeforeUpdate} from "typeorm";
import {IsEmail, validate, validateOrReject, IsNotEmpty} from 'class-validator';
import * as bcrypt from 'bcrypt';

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

		@BeforeInsert()
		@BeforeUpdate()
		hashPassword() {
			if(this.password) {
				const salt = bcrypt.genSaltSync();
				const hashPassword = bcrypt.hashSync(this.password, salt);
				this.password = hashPassword;
			}
		}

		constructor(user: Partial<User>){
			Object.assign(this, user);
		}
}


