// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Немезида',
    pageCount: 384,
    genre: 'детектив',
    authors: [
        {name: 'Аґата Крісті',
        age: 85}
    ]
};
let book2 = {
    title: 'Мисливці Дюни',
    pageCount: 592,
    genre: 'фантастика',
    authors: [
        {name: ['Б. Герберт', 'К. Андерсон'],
        age: [77, 62]}
    ]
};
let book3 = {
    title: 'Міжзір’я. Книга 2',
    pageCount: 408,
    genre: 'фантастика',
    authors: [
        {name: 'Брендон Сандерсон',
        age: 48}
    ]
};