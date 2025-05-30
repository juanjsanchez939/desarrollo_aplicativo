export class UserMockup {
    static users = [
        {
            username: 'admin',
            password: '1234',
            hashedPassword: "$2b$04$Cs8NtW/J5q0iXU1qr9NwJexKuddh8ZE4AAUJ6B2WRuvbOnSRkpT3K",
            fullName: 'Admin',
            email: 'admin@fake.com',
            roles: ['admin'],
        },
        {
            username: 'operator',
            password: '12345',
            hashedPassword: "$2b$04$/.RFCF8byjmxmiDnKUrCjeXl7d5jrvQR1do1eX3rDPM19pmq3Lmza",
            fullName: 'Operator',
            email: 'operator@fake.com',
            roles : ['operator'],	
        },
    ];

    static async getSingleOrNullByUsername(username) {
        return this.users.find(u => u.username === username);
    }

    static async get(){
        return this.users.map(user => {
            return {
                username: user.username,
                fullName: user.fullName,
                email: user.email,
                roles: user.roles
            };
        });
    }
}