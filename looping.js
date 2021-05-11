// for
// foreach
// while 
// dowhile
// forof
// forin


// 100000

// for -> 7 
// foreach -> 3
// while -> 4
// dowhile -> 4


var arr = [...Array(1000000).keys()];




console.time('while')
let j = 0
while (j < arr.length) {
    const element = arr[j];
    j++;
}
console.timeEnd('while')


console.time('dowhile')
let k = 0
do {
    const element = arr[k];
    k++
} while (k < arr.length);
console.timeEnd('dowhile')


console.time('forEach')
arr.forEach(element => {
});
console.timeEnd('forEach')

console.time('for')
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
}
console.timeEnd('for')


// ES6
// forin
// forof

const arr = [1,2,3,4,5,6];

for (const iterator of arr) {
    console.log(iterator);
}

const obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
};

for (const [key, value] of Object.entries(obj)) {
    console.log(key);
    console.log(value);
}

// const obj2 = {
//     a: 1,
//     b: 2,
// }

// const obj1 = {...obj, ...obj2}

// console.log(obj1);

// const user = {
//     firstName: 'Yagnesh',
//     lastName: 'Modh'
// }

// const firstName = 'Rohit';
// const lastName = 'Rohit';


// for (const key in obj) {
//     obj[key] = 
// }

// console.log(obj);


// console.log(Object.keys(obj));


