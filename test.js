// const  path  = require('path');

const { isArray, isObject, cloneDeep, isPlainObject } = require("lodash");

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let number2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// number.join(number2);
// console.log(path.join(__dirname, 'public', 'images', 'car.jpg'))
// let number3 = number.join('!')
// console.log(number3);
// const Number = (num)=> +num
// console.log(number3.split('!').map(Number));
// console.log(number);
// console.log(+("1"));
const list = []
const list2 = isPlainObject(list) ? cloneDeep(list) : undefined
console.log(list, list2);