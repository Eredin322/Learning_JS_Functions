// =================================================
// === как функции обращаются к переменным. Пример 1
// =================================================

let a = 10;

function f1() {
    console.log('(global) a = ' + a);
}

// f1(); // 10
a = 99;
// f1(); // 99

// =================================================
// === как функции обращаются к переменным. Пример 2
// =================================================

function f2() {
    let a = 33;
    console.log('(local) a = ' + a);
}

// f2(); // 33

// =================================================
// === иногда переменные нужны снаружи
// =================================================


function createStep(n = 0) {
    let count = n;
    return function () {
        count++;
        console.log(count);
    }
}

// let step1 = createStep();
// let step2 = createStep(200);
// console.log(step1);
// step1(); // 1
// step1(); // 2

// step2(); // 1
// step2(); // 2

// =================================================
// === Задача на попрошайку, с рекурсией 
// =================================================

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function createBeggar() {
    let s = 0;
    return function beggar() {
        s += randomInteger(0, 100);
        console.log(s);
        if (s >= 250) return;
        beggar();
    }
}

// let begg = createBeggar();
// let begg2 = createBeggar();
// begg();
// console.log('=====');
// begg2();

// let p = 1;