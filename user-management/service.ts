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

interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    role: Role;
    country: Country;
}

class UserService {
    private users: Array<User>

    public addUser(newUser: User): void {
        const user = this.users.find(x => x.userName === newUser.userName)
        if (user) return

        this.users.push(user);
    }

    public removeUser(id: number): void {
        const user = this.users.find(x => x.id === id)
        if (!user) return

        this.users.filter((x => x.id !== id))
    }

    public updateUser(id: number): void {
        const userIndex = this.users.indexOf(user)
        if (userIndex === -1) return

        this.users[userIndex].userName = user.userName;
        this.users[userIndex].firstName = user.firstName;
        this.users[userIndex].lastName = user.lastName;
        this.users[userIndex].country = user.country;
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

userService.addUser(user);