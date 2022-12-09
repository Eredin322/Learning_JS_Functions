function f1(a, b, c) {

}

function sum() {
    const x = 5;
    const y = 6;
    console.log(x + y);
}

// sum();

// let x = 55;
// let y = 66;
function sum2() {
    console.log(x + y);
}

// sum2();

// x = 100;
// y = 200;
// sum2();

// Аргументы

function sum3(a, b) {
    console.log(a + b);
}

// sum3(44, 11);


function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
}

function showSum2(elem2, x, y) {
    elem2.textContent = x + y;
}
// showSum('.out-2', 5, 6);
// showSum2(document.querySelector('.out-1'), 42, 6);


function showSum3() {
    console.log(arguments);
    document.querySelector(arguments[2]).textContent = arguments[0] + arguments[1];
}

// showSum3(10, 10, '.out-1');

function showSumAll() {
    // console.log(arguments);
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    let sum = Array.from(arguments).reduce((accum, item) => accum + item)
    console.log(sum);
}

// showSumAll(4, 5, 6, 5);

function showSumAll2(...args) {
    console.log(args);
    let sum = args.reduce((accum, item) => accum + item)
    console.log(sum);
}

// showSumAll2(4, 5, 6, 5); // 20

// функция как аргумент

function showAll(res) {
    document.querySelector('.out-1').innerHTML = `<b>${res}</b>`;
}

function showSumAll3(y, ...x) {
    y(x);
}

showSumAll3(showAll, 88, 55, 45);