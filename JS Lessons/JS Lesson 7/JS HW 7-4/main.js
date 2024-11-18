// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'roman', 'rom', 'rom@rom.com', '+900000099', ['mobile phone', 'web camera', 'mouse']),
    new Client(2, 'vasya', 'vas', 'vas@vas.com', '+8000000088', ['monitor', 'tablet']),
    new Client(3, 'denis', 'den', 'den@den.com', '+700000077', ['laptop', 'headphones']),
    new Client(4, 'petya', 'pet', 'pet@pet.com', '+6000000066', ['TV', 'laptop']),
    new Client(5, 'stepan', 'step', 'step@step.com', '+500000055', ['phone', 'headphones']),
    new Client(6, 'dima', 'dim', 'dim@dim.com', '+400000044', ['tablet', 'phone', 'laptop']),
    new Client(7, 'vetal', 'vet', 'vet@vet.com', '+30000033', ['laptop', 'TV']),
    new Client(8, 'sergiy', 'serg', 'serg@serg.com', '+200000022', ['phone', 'tablet']),
    new Client(9, 'ivan', 'iv', 'iv@iv.com', '+100000011', ['mouse', 'laptop']),
    new Client(10, 'oleg', 'ol', 'ol@ol.com', '+111111111', ['phone', 'headphones'])
];
console.log(clients);