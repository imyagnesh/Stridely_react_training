// original code
// var a = 1;

// var a = 2;

// function add(a, b) {
//     return a + b;
// }


// interpreted code

var a;

function add(a,b) {
    return a + b;
}

console.log(a);
console.log(add(1,2));

a = 1;

a = 2;

console.log(a);
console.log(add(1,2));