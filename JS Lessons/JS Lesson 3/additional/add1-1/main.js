// #WpkK0ZH1
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numberArray = [1, 2, 3, 4, 5];
// console.log(numberArray);

// let stringArray = ['okten', 'school', 'cool', 'is', 'programming'];
// console.log(stringArray);

// let mixedArray = ['hello', 22, 33, true, false]
// console.log(mixedArray);


// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let numbArray = [1, 2, 3, 4, 5];
// console.log(numbArray[4]);

// #iLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }
// в зворотньому
// let i = numbers.length - 1;
// while (i >= 0) {
//     console.log(numbers[i]);
//     i--;
// }

// 2. перебрати його циклом for
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// зворотній
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let p = 1;
// while (p < numbers.length) {
//     console.log(numbers[p]);
//     p += 2;
// }
// в зворотньму коли не знаємо кількість чисел у масиві
// let i = numbers.length - 1;
// if (i % 2 === 0) {
//     i--;
// }
// while (i >= 0) {
//     console.log(numbers[i]);
//     i -= 2;
// }
// в зворотньму коли знаємо кількість чисел у масиві
// let i = numbers.length - 2;
//
// while (i >= 0) {
//     console.log(numbers[i]);
//     i -= 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < numbers.length; i += 2) {
//     console.log(numbers[i]);
// }
// в зворотньому коли знаємо кількість чисел у масиві
// for (let i = numbers.length - 2; i >= 0; i -= 2) {
//     console.log(numbers[i]);
// }

// в зворотньму коли не знаємо кількість чисел у масиві
// let startIndex = numbers.length % 2 === 0 ? numbers.length - 1 : numbers.length - 2;
//
// for (let i = startIndex; i >= 0; i -= 2) {
//     console.log(numbers[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// в зворотньому
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0)
//         console.log(numbers[i]);
// }

// в зворотньому
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "okten";
//     }
// }
// console.log(numbers)

// в зворотньому
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 3 === 0) {
//         console.log("okten");
//     } else {
//         console.log(numbers[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i])
// }

// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let number of numbers) {
//     console.log(number);
// }
// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let string of strings) {
//     console.log(string);
// }

// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let any = [1, 'two', true, 4, 'five', false, 7, 'eight', true, 10];
// for (let anyElement of any) {
//     console.log(anyElement);
// }

// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let any = [1, 'two', true, 4, 'five', false, 7, 'eight', true, 10];
// for (let anyElement of any) {
//     if (typeof anyElement === "boolean") {
//         console.log(anyElement);
//     }
// }


// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let any = [1, 'two', true, 4, 'five', false, 7, 'eight', true, 10];
// for (let anyElement of any) {
//     if (typeof anyElement === 'number') {
//         console.log(anyElement);
//     }
// }

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let any = [1, 'two', true, 4, 'five', false, 7, 'eight', true, 10];
// for (let anyElement of any) {
//     if (typeof anyElement === 'string') {
//         console.log(anyElement);
//     }
// }

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = 'two';
// arr[2] = true;
// arr[3] = 4;
// arr[4] = 'five';
// arr[5] = false;
// arr[6] = 7;
// arr[7] = 'eight';
// arr[8] = true;
// arr[9] = 10;
// for (const arrElement of arr) {
//     console.log(arrElement);
// }


// #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log('Step №' + i);
//     document.write('Step №' + i + '<br>');
// }

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log('Step №' + i);
//     document.write('Step №' + i + '<br>');
// }

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 200; i += 2) {
//     console.log('Step №' + i);
//     document.write('Step №' + i + '<br>');
// }


// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log('Step №' + i);
//         document.write('Step №' + i + '<br>');
//     }
// }

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log('Step №' + i);
//         document.write('Step №' + i + '<br>');
//     }
// }

// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
let books = [
    {
        title: "Мистецтво війни",
        pages: 200,
        authors: ["Сунь Цзи"],
        genres: ["Філософія", "Стратегія"]
    },
    {
        title: "Великий Гетсбі",
        pages: 180,
        authors: ["Френсіс Скотт Фіцджеральд"],
        genres: ["Роман", "Драма"]
    },
    {
        title: "Війна і мир",
        pages: 1200,
        authors: ["Лев Толстой"],
        genres: ["Історичний роман", "Епос", "Філософія"]
    },
    {
        title: "1984",
        pages: 350,
        authors: ["Джордж Орвелл"],
        genres: ["Фантастика", "Антиутопія"]
    },
    {
        title: "Магічний світ Гаррі Поттера",
        pages: 500,
        authors: ["Джоан Роулінг", "Джеймс Поттер"],
        genres: ["Фентезі", "Пригоди", "Магія"]
    },
    {
        title: "Щоденник Ван Гога",
        pages: 150,
        authors: ["Вінсент Ван Гог"],
        genres: ["Біографія", "Мистецтво"]
    }
];

for (let book of books) {
    if (book.pages > books[0].pages) {
        books[0] = book;
    }
}
console.log('Найбільша книга:',books[0].title,'- сторінок:',books[0].pages)