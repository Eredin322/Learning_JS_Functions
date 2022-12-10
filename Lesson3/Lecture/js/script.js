// let sum = 0
function f1(x, y) {
    let sum = x + y;
    return sum;
}

f1(4, 5);
f1(4, 45);

function f2() {
    return 2
}

// f2();
// console.log(f2() + 2) // 2
// console.log(11 + 3 + 5 + f1(4, 5)); // 28
// console.log(f1(6, 7) + f1(4, 5)); // 22

function randInt(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

let r = randInt(1, 2);
console.log(r);
console.log(randInt(222, 333));

// alert(f1(3, 4));

// использовать в выражениях
// document.querySelector('body').style.background = 'rgb(23, 156, 201)';
document.querySelector('body').style.background = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;

function indexOfEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

let result = indexOfEmul([22, 33, 44, 55], 44);
console.log(result);

console.group('example 5');
const arr5 = [[3, 4, 5], [6, 7, 8]];
function t5() {
    let s = 0;
    for (let i = 0; i < arr5.length; i++) {
        s += sum(arr5[i]);
    }
    console.log(s);
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

t5();
console.groupEnd();

console.group('example 6')

function t6() {
    let a = 88;
    return (
        a
    )
}

console.log(t6());
console.groupEnd()

console.group('example 7');
const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]]

const evenArr7 = arr7.filter(item => {
    return (sum(item) % 2 === 0)
})

console.log(evenArr7);

console.groupEnd();

function t8() {
    return sum;
}
let s = t8();
console.log(s([10, 20, 30]));