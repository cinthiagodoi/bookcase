import {getRepository, getManager, Index} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from 'class-validator';
import * as jwt from 'jsonwebtoken';

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
				console.log(request.user)

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
					try {
						const accessToken = jwt.sign({user}, process.env.SECRET);
						response.status(200).send({ accessToken: accessToken });
					} catch(err) {
						console.log(err)
						response.status(500).send(err);
					}

				}
			})
		}	

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        const results = await this.userRepository.remove(userToRemove);
        return response.send(results);
    }

}