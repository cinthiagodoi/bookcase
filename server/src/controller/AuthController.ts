import {getRepository, getManager, Index} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class AuthController {
  private userRepository = getRepository(User);

  async login(req: Request, res: Response, next: NextFunction) {
    const user = await this.userRepository.findOne({ email: req.body.email });

    if( !user ) {
      res.status(400).send('User/ password invalid');
    }
    else {
      try {
        const userCompare = await bcrypt.compare( req.body.password, user.password )
        if( userCompare ) {
          const accessToken = jwt.sign({user}, process.env.SECRET) 
          res.status(200).send({ accessToken: accessToken });
        }
      } catch(err) {
        console.log(err)
        res.status(500).send();
      }
    }
   
  }
}

