import { getDependencies } from "../libs/dependencies";

export class UserService{
    static async getSingleOrNullByUsername(username){
        const UserModel = getDependencies('UserModel');
        return await UserModel.getSingleOrNullByUsername(username);
    }
}