//// Service powinien :
// - potrafić dodać użytkownika do listy
// - potrafić usunąć użytkownika z listy
// - potrafić zaktualizowac dane uzytkownika
// - nie pozwolić dodać dwoch uzytkownik o takim samym userName
// - nie pozwolić dodać uzytkownika z pustym userName

enum Role {
    SuperAdmin1,
    Admin1,
    User1
}
enum Country {
    Poland,
    Holland,
    Hungary,
    Russia,
    Denmark,
    Germany
}

class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    role: Role;
    country: Country;
}

class UserService {
    private users: Array<User>

    public addUser(user: User): void {
        this.users.push(user);
    }
}

const userService = new UserService();
const user: User = {
    id: 0,
    userName: 'grze',
    firstName: 'grzegorz',
    lastName: 'kolek',
    country: Country.Poland,
    role: Role.SuperAdmin1
}

userService.addUser();