// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(r, h) {
    const result = 2 * Math.PI * r * (r + h);
    console.log(result);
    return result;
}

squareCylinder(2, 5)