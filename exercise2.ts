enum Role {
    SuperAdmin,
    Admin,
    User
}
var users = [
    { id: 1, userName: 'first', role: Role.Admin },
    { id: 2, userName: 'seconds', role: Role.SuperAdmin },
    { id: 3, userName: 'third', role: Role.User },
]


function getUserById(userId: number) {
    const user = users.find(x => x.id === userId);
    return user;
}

const getUsersByRole = (role: Role) => users.filter(x => x.role === role);

