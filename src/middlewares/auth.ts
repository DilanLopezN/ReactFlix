import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";



export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization

  if(!authorizationHeader) return res.status(401).json({
    message: "Não autorizado: token não encontrado"
  })

  const token = authorizationHeader.replace(/Bearer /,"")

  jwtService.verifyToken(token, (err, decoded) => {
    if(err || typeof decoded === 'undefined') return res.status(401).json({
      message: 'Não autorizado: token inválido'
    })

    userService.findByEmail((decoded as JwtPayload).email).then( user => {
      //@ts-ignore
      req.user = user
      next()
    } )
  })
}