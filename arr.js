// Mutable
// Immutable
// CRUD
// ADD/UPDATE/REMOVE data at location
// Nested Array
// JOIN


const arr = [1,2,3,4,5];

const [,...rest] = arr;

console.log(rest);

// const newArr = [8,9, 10];
// console.log(arr);

// const arr1 = [0, ...arr];
// console.log(arr1);

// const arr2 = [...arr, ...newArr];
// console.log(arr2);

// const arr21 = arr2.slice(0, 5);
// console.log(arr21);

// const arr22 = arr2.slice(5);
// console.log(arr22);

// const a = 1;
// const b = '1';

// console.log(typeof a);
// console.log(typeof b);

// console.log(a === b);

// const index = arr2.findIndex(item => item === 5);

// console.log(index);

// const arr3 = [
//     ...arr2.slice(0, index),
//     11,
//     ...arr2.slice(index + 1)
// ];

// console.log(arr3);



// // CRUD Operation
// // mutable
// // LILO
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// // FIFO
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// // arr.splice(2, 2);
// // console.log(arr);

// arr.splice(2,2, 8);
// console.log(arr);




// // arr.splice(2, 1);
// // console.log(arr);

// // arr.splice(2, 1, 8);
// // console.log(arr);

// // splice -> mutable
// // slice


const a = 1;
const b = 2;

// else
const c = a || b;
console.log(c);

// if
const d = a && b;
console.log(d);

const obj = {
  a: 1,
  b: 2,
};

// const key = 'c'

// const obj1 = {...obj, [key]: 3}

// console.log(obj1);

const users = [
  {
    name: "Yagnesh",
    gender: "male",
    age: 30,
  },
  {
    name: "rohit",
    gender: "male",
    age: 28,
  },
  {
    name: "virat",
    gender: "male",
    age: 26,
  },
  {
    name: "deepika",
    gender: "female",
    age: 32,
  },
  {
    name: "priyanka",
    gender: "female",
    age: 34,
  },
  {
    name: "alia",
    gender: "female",
    age: 18,
  },
  {
    name: "tabasum",
    gender: "other",
    age: 18,
  },
];

// const groupBy = users.reduce((p, c) => {
//     (p[c.gender] = p[c.gender] || []).push(c);
//     return p;
// }, {});

// const groupBy = users.reduce((p, c) => ({ ...p, [c.gender]: p[c.gender] ? [...p[c.gender], c] : [c] }), {});

// console.log(groupBy);

// {
//     '10-19': [],
//     '20-29': [],
//     '30-39': []
// }

// const obj = {
//     male: [],
//     female: []
// }

const groupByAge = users.reduce((p, c) => {
  const gap = Math.floor(c.age / 10);
  const ageGroup = `${gap}0-${gap}9`;
  return { ...p, [ageGroup]: p[ageGroup] ? [...p[ageGroup], c] : [c] };
}, {});
console.log(groupByAge);
