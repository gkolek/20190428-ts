// tsc exercise1 --watch

//TYPES
let _isHuman: boolean = true;
let _message: string = 'Twoja wiadomość';
let _amount: number = 30;

let _values: Array<number> = [1, 2, 3, 4, 5];
let _values2: number[] = [1, 2, 3, 4, 5];

let value: any = 123;
value = '123';
value = true;

enum Role1 {
    Admin,
    User = 1,
    Guest
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let anyArrType: any[] = [1, 2, '3', true, { data: 'x' }]

let _void: void = null
let _null: null = null
let _undefined: undefined = undefined
//TYPES

//todo: popraw bledy zwiazane ze zlym typowaniem

let companyName = 'InfoShare';

let userName: number = 'super-user';
let userExists: string = true;
let count = +"30";

let values: Array<number> = [1, 2, 3, "4", 5];

//todo: popraw bledy zwiazane ze zlym typowaniem