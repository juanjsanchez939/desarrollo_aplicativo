import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { InvalidCredentialsException } from "../exceptions/invalid_credentials_exception.js";
import bcrypt from 'bcrypt';;
import config from '../config.js';

export class LoginService {
  static async login(credentials) {
    if (
      !credentials ||
      !credentials.username ||
      !credentials.password ||
      typeof credentials.username !== "string" ||
      typeof credentials.password !== "string"
    )
      throw new InvalidArgumentException();


    if (!(await bcrypt.compare(credentials.password, user.hashedPassword)))
        throw new InvalidCredentialsException();
    

    const token = jwt.sing(
      {
        userId: user.id,
        username: user.username,
        fullName: user.fullName,
      },
      config.jwtKey,
      {
        expiresIn: '1'
      }
    );

    return {
      token: jwt
    };
  }
}
