enum Role {
    SuperAdmin,
    Admin,
    User
}
interface User {
    id: number;
    userName: string;
    role: Role;
    hairColor: string
}

var users:Array<User> = [
    { id: 1, userName: 'first', role: Role.Admin },
    { id: 2, userName: 'seconds', role: Role.SuperAdmin },
    { id: 3, userName: 'third', role: Role.User },
    { id: 4, userName: 'forth', role: Role.User, hairColor:'blond' },
]


function getUserById(userId: number) {
    const user = users.find(x => x.id === userId);
    return user;
}

const getUsersByRole = (role: Role) => users.filter(x => x.role === role);

