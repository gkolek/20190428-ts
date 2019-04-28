//// Service powinien :
// - potrafić dodać użytkownika do listy
// - potrafić usunąć użytkownika z listy
// - potrafić zaktualizowac dane uzytkownika
// - nie pozwolić dodać dwoch uzytkownik o takim samym userName
// - nie pozwolić dodać uzytkownika z pustym userName
var Role;
(function (Role) {
    Role[Role["SuperAdmin1"] = 0] = "SuperAdmin1";
    Role[Role["Admin1"] = 1] = "Admin1";
    Role[Role["User1"] = 2] = "User1";
})(Role || (Role = {}));
var Country;
(function (Country) {
    Country[Country["Poland"] = 0] = "Poland";
    Country[Country["Holland"] = 1] = "Holland";
    Country[Country["Hungary"] = 2] = "Hungary";
    Country[Country["Russia"] = 3] = "Russia";
    Country[Country["Denmark"] = 4] = "Denmark";
    Country[Country["Germany"] = 5] = "Germany";
})(Country || (Country = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
    };
    return UserService;
}());
var userService = new UserService();
var user = {
    id: 0,
    userName: 'grze',
    firstName: 'grzegorz',
    lastName: 'kolek',
    country: Country.Poland,
    role: Role.SuperAdmin1
};
userService.addUser();
