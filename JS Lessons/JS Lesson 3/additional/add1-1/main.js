// #WpkK0ZH1
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);

let stringArray = ['okten', 'school', 'cool', 'is', 'programming'];
console.log(stringArray);

let mixedArray = ['hello', 22, 33, true, false]
console.log(mixedArray);


// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let numbArray = [1, 2, 3, 4, 5];
console.log(numbArray[4]);

// #qLQLJSeN7i
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
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// 2. перебрати його циклом for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let p = 1;
while (p < numbers.length) {
    console.log(numbers[p]);
    p += 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < numbers.length; i += 2) {
    console.log(numbers[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let q = 0;
while (q < numbers) {
    if (numbers[q] % 2 === 0) {
        console.log(numbers[q]);
    }
    q++;
}
