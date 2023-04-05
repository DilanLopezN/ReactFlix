import { Request, Response } from "express";
import { userService } from "../services/userService";
import { request } from "http";
import { jwtService } from "../services/jwtService";

export const authController = {
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, birth, phone} = req.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)
      if(userAlreadyExists){
        throw new Error("Email already exists")
      }

      const user = await userService.create({
        firstName,
        lastName,
        birth,
        email,
        password,
        phone,
        role: 'user'
      })
      return res.status(201).json(user)
    } catch (error) {
      if(error instanceof Error) {
        return res.status(400).json({message: error.message})
      }
      
    }
  },

  // POST /auth/login

  login: async (req: Request, res: Response) => {
    const { email, password} = req.body

    try {
      const user = await userService.findByEmail(email)

      if(!user) return res.status(404).json({message: 'Email não registrado'})

      user.checkPassword(password, (err, isSame) => {
        if(err) return res.status(400).json({message: err.message})

        if(!isSame) return res.status(401).json({message: 'Senha incorreta'})

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }
        const token = jwtService.signToken(payload,'1d')

        return res.json({ authenticaded: true, user, token})
      })

    } catch (error) {
      return res.status(401).json({message: error})

    }
  }
}