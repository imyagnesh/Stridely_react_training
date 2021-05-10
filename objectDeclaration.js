// OOPS Concept

// Object oriented Programing Language

const firstName = "Yagnesh";

const lastName = "Modh";

// es6 onwards

// to bind "related information"
const self = {
    firstName,
    lastName,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    address: {
        line1: 'ahmedabad',
        line2: 'gujarat',
        pinCode: '123324',
    },
    project: [
        {
            name: 'react project'
        }
    ]
}

console.log(self);

console.log(self.firstName);
console.log(self.lastName);
console.log(self.fullName());
console.log(self.project);

// CRUD

// NESTING

// JOIN


// ARRAY



// immutable vs mutable

// mutable
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    f: {
        l:10,
        m: 9,
        n: 8
    }
}

const newObj = {
    d: 5,
    h: 6
}

const obj3 = {...newObj, ...obj};

console.log(obj3);


// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     if(obj[key] === 4) {

//     }
// }

const obj2 = {...obj, f: { ...obj.f, m: 11 }};

console.log(obj2);



console.log(obj);

const d = 5;

// destructuring
const {d: objD, c, ...rest} = obj;
console.log(d);
console.log(objD);
console.log(c);
console.log(rest);
// console.log(a);
// console.log(b);

// console.log(obj.a);
// console.log(obj.b);
// obj.b = 5;

// delete obj.b;


// console.log(obj);

// immutable
// old javascript
// const obj1 = Object.assign({}, obj, { c: 3});
// console.log(obj1);

// ES6
// spread operator
// const obj1 = {...obj, b: 4};

// console.log(obj1);





// mutable
const arr = [1,2,3,4];
arr.push(5);

console.log(arr);

// api -> user -> arr

// user - change

//

const firstName = "abc";

const gender = 'female';

const user = {
    firstName: 'Yagnesh',
    lastName: 'Modh',
    gender: 'male'
}

const {gender: g, ...rest1} = user;

console.log(rest1);


// {
//     firstName: 'Yagnesh',
//     lastName: 'Modh'
// }







