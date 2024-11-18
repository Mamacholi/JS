// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

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

function sorter(user1, user2) {
    return user2.id - user1.id;
}

console.log(users.sort(sorter));