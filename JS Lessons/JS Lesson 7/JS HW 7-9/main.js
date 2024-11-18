// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    let myArray = this;
    for (let item of myArray) {
        callback(item);
    }
};
[1, 2, 3, 4, 5].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    let arr = [];
    for (let item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    {id: 1, name: 'vasya', surname: 'prom', phone: '+323233232333'},
    {id: 2, name: 'petya', surname: 'pet', phone: '+22323233233'},
    {id: 3, name: 'oleg', surname: 'ole', phone: '+300000222'},
    {id: 4, name: 'boris', surname: 'bor', phone: '+40000000004'},
    {id: 5, name: 'roman', surname: 'rom', phone: '+5000000055'},
    {id: 6, name: 'sergiy', surname: 'ser', phone: '+600000066'},
    {id: 7, name: 'stepan', surname: 'step', phone: '+7000000077'},
    {id: 8, name: 'vetal', surname: 'vet', phone: '+8000000088'},
    {id: 9, name: 'dima', surname: 'dim', phone: '+900000099'},
    {id: 10, name: 'denis', surname: 'den', phone: '+1000000011'},
];
let result = users.myFilter((user) => user.id % 2 === 0);
console.log(result)