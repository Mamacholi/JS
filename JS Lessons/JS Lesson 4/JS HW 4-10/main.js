// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {// for(const number of numbers) без  let number = numbers[i]; інший варіант
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}

console.log(arrayMinValue([88, 99, -111]));