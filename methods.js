const arr = [1,2,3,4,5,6]

// const sum = arr.reduce((p, c)  => p + c, 0);

// console.log(sum);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum = sum + element;
// }
// console.log(sum);


// const arr1 = arr.map(item => {
//     if(item === 3) {
//         return 6
//     }
//     return item;
// })

// [ 1, 2, 6, 4, 5, 6 ]

// const arr1 = arr.reduce((p, c) => {
//     if(c === 3) {
//         return [...p, 6]
//     }
//     return [...p, c]
// }, []);
// console.log(arr1);

// console.log(arr1);

// const arr1 = arr.findIndex(value => value === 3);
// console.log(arr1);

// const index = arr.reduce((p,c, index) => {
//     if(c === 3) {
//         return index
//     }
//     return p;
// }, -1)

// console.log(index);

// const arr1 = arr.find(value => value === 10);
// console.log(arr1);

// const arr1 = arr.filter(x => x !== 3);

// console.log(arr1);


// const arr1 = arr.some(index => index === 10);
// console.log(arr1);

// const arr1 = arr.every((value, index) => value === index + 1);

// console.log(arr1);

// const arr1 = arr.fill(6, 2, 4);
// console.log(arr1);





// findIndex
// find
// filter
// some
// map
// reduce

const user = {
    id: 1,
    fn: 'y',
    ln: 'm'
}

//  [1,2,3]

// [1,5,6]

const arr1 = [
    {
        id: 1,
        fn: 'y',
        ln: 'm'
    },
    {
        id: 2,
        fn: 'a',
        ln: 'b'
    },
    {
        id: 3,
        fn: 'c',
        ln: 'd'
    }
]

const arr2 = [
    {
        id: 1,
        fn: 'y',
        ln: 'm'
    },
    {
        id: 5,
        fn: 'p',
        ln: 'q'
    },
    {
        id: 5,
        fn: 'l',
        ln: 'n'
    }
]

const matchRecords = arr1.filter(item => {
    return arr2.some(x => x.id === item.id);
})

console.log(matchRecords);



// {
//     matchRecord: [],
//     missMathRecords: []
// }
