import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { InvalidCredentialsException } from "../exceptions/invalid_credentials_exception.js";
import { getDependency } from "../libs/dependencies.js";
import bcrypt from "bcrypt";
import config from "../config.js";
import jwt from "jsonwebtoken";


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

    const UserService = getDependency("UserService");
    const user = await UserService.getSingleOrNullByUsername(
      credentials.username
    );

    if (!user) throw new InvalidCredentialsException();
    /*console.log('calculando hash');
            const hash = await bcrypt.hash('1234', 2);
            const hash2 = await bcrypt.hash('12345', 2);
            console.log('hash 1: ' + hash);
            console.log('hash 2: ' + hash2);
            console.log('hash calculado');*/

    if (!(await bcrypt.compare(credentials.password, user.hashedPassword)))
      throw new InvalidCredentialsException();

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        fullName: user.fullName,
      },
      config.jwtKey,
      {
        expiresIn: "1",
      }
    );

    return { token };
  }
}
