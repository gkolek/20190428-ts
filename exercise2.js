var Role;
(function (Role) {
    Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
var users = [
    { id: 1, userName: 'first', role: Role.Admin },
    { id: 2, userName: 'seconds', role: Role.SuperAdmin },
    { id: 3, userName: 'third', role: Role.User },
    { id: 4, userName: 'forth', role: Role.User, hairColor: 'blond' },
];
function getUserById(userId) {
    var user = users.find(function (x) { return x.id === userId; });
    return user;
}
var getUsersByRole = function (role) { return users.filter(function (x) { return x.role === role; }); };
