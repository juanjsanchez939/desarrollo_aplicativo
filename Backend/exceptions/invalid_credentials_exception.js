export class InvalidCredentialsException extends Error {
    constructor(){
        super('Credenciales Invalidas.');
    }
}