export class InvalidArgumentException extends Error {
    constructor(){
        super('Argumentos Invalidos.');
        this.statusCode = 400;
    }
}