// #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);