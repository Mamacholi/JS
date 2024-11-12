// - створити стрілочну функцію яка повертає найменьше число з масиву
let arrayMinValue = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}

console.log(arrayMinValue([88, 99, -111]));