// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [
    new Cinderella('olya', 21, 40),
    new Cinderella('anya', 22, 41),
    new Cinderella('vika', 23, 39),
    new Cinderella('tanya', 27, 33),
    new Cinderella('natali', 25, 38),
    new Cinderella('sveta', 28, 36),
    new Cinderella('zoryana', 20, 37),
    new Cinderella('olya', 26, 40),
    new Cinderella('tina', 21, 38),
    new Cinderella('olesya', 27, 35)
];
let prince = new Prince('Shrek', 70, 41);

for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log('Ось моя Попелюшка:', cinderella)
    }
}
let bingoCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
console.log('Ось моя Попелюшка:', bingoCinderella);



