import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader)
  if(authHeader === undefined){
    res.status(401).send();
  }
  const token = authHeader.split(' ')[1];

  if(token == null){
    res.status(401).send();
  }

  try {
    const jwtValid = jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) return res.status(403).send();
      req.user = user;
      next();
    })

  }catch(err) {
    res.status(500).send();
  }
}