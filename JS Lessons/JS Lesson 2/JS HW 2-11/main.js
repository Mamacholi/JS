// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x;

if (x === undefined) {
    x = 'default';
} else if (x === null) {
    x = 'default';
} else if (x === 0) {
    x = 'default';
} else if (x === false) {
    x = 'default';
} else if (x === '') {
    x = 'default';
} else if (x === NaN) {
    x = 'default';
}

console.log(x);
