import {getRepository, getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from 'class-validator';
import e = require("express");

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
			const user = this.userRepository.create(request.body);
			validate(user).then(async errors => {
				if(errors.length > 0) {
					console.log('failed')
					response.send(errors);
				}else {
					await getManager().save(user);
					response.send(user)
				}
			})
		}	

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        const results = await this.userRepository.remove(userToRemove);
        return response.send(results);
    }

}