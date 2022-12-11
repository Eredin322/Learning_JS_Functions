function sum(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

let a = sum(4, 5);
console.log(a);

document.querySelector('.b-1').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
});

// Запуск двух функций
document.querySelector('.b-2').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

//callback
const ar1 = [4, 5, 6, 7, 8];
function pow2(a) {
    return a ** 2;
}
const res = ar1.map(pow2);
console.log(res);

// filter

const res6 = ar1.filter(function (item, index) {
    if (index % 2 === 0) return true;
})
console.log(res6);
// Пишем на стрелочной функции
const res7 = ar1.filter((item, index) => index % 2 === 0)
console.log(res7);

//arrow & this
document.querySelector('.b-3').addEventListener('click', function () {
    console.log(this);
})

document.querySelector('.b-3').addEventListener('click', () => {
    console.log(this);
})

// arrow аргументы

const f1 = (...args) => {
    // console.log(arguments);
    console.log('work ne wolk');
    return args.reduce((accum, item) => accum + item)
}
f1();