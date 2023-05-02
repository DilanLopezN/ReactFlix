import jwt from 'jsonwebtoken'
const secret = 'jwtkey'
export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
return jwt.sign(payload, secret, {
  expiresIn: expiration
})
  },
  verifyToken: (token: string, cbf: jwt.VerifyCallback) => {
    jwt.verify(token, secret, cbf)
  }
}