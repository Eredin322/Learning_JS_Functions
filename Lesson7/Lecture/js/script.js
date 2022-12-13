// 'use strict';
//Function declaration
// if (true) {
//     function f1() {
//         console.log('function 1 if');
//     }
// }
// else {
//     function f1() {
//         console.log('function 1 else')
//     }
// }

// f1();

//Function expression

function f2() {
    console.log(f2.name);
    console.log('function f2');
}

// f2();

const f3 = function (a) {
    console.log('function f3' + a);
}

// f3();

const f4 = f3;
// f4();

// console.log(f4 === f3);
// console.log(f4 == f3);


const f5 = function example() {
    console.log(f5.name)
    console.log(example.name);
    console.log('function example');
}
f5();
// example(); // ERROR

const f6 = f5;
f6();