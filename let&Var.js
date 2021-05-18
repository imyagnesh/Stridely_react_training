// let a = 1;

// a = 2;

// console.log(a);

// scoping
// {
//     let a = 1;
// }

const a = 1;
// a = 2;

// {
//     const a = 1;
// }

// console.log(abc());

// function abc() {
//     console.log('hello');
// }

// function abc() {
//     console.log('hacked');
// }

// console.log(abc());



const abc = function() {
    console.log('hello');
}

var abc = function() {
    console.log('hacked');
}

console.log(abc());


