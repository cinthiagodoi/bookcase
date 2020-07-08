import {getRepository, getManager, Index} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from 'class-validator';

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
			const data = {}
			validate(user).then(async errors => {
				if(errors.length > 0) {
					for(let i = 0; errors.length > i;){
						errors.forEach(erro => {
							data[erro.property] = Object.values(erro.constraints)
							i++
						})
						response.status(400).send(data);
					}          
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