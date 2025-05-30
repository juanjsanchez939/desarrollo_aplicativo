export class UserMockup {
    static users = [
        {
            username: 'admin',
            password: '1234',
            hashPassword: " ",
            fullName: 'Admin',
            email: 'admin@fake.com',
        },
        {
            username: 'operator',
            password: '12345',
            hashPassword: " ",
            fullName: 'Operator',
            email: 'operator@fake.com',
        },
    ];

    static async getSingleOrNullByUsername(username) {
        return this.users.find(u => u.username === username);
    }
}