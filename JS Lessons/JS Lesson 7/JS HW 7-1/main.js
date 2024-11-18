// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

const user = new User(1, 'vasya', 'prom', '+32323232323');
console.log(user);

let users = [
    new User(1, 'vasya', 'prom', '+323233232333'),
    new User(2, 'petya', 'pet', '+22323233233'),
    new User(3, 'oleg', 'ole', '+300000222'),
    new User(4, 'boris', 'bor', '+40000000004'),
    new User(5, 'roman', 'rom', '+5000000055'),
    new User(6, 'sergiy', 'serg', '+600000066'),
    new User(7, 'stepan', 'step', '+7000000077'),
    new User(8, 'vetal', 'vet', '+8000000088'),
    new User(9, 'dima', 'dim', '+900000099'),
    new User(10, 'denis', 'den', '+1000000011')
];
console.log(users);