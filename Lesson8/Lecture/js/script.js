// Pure Functions

function squad(n) {
    return n ** 2;
}

// console.log(squad(4));

function squad2(n) {
    document.querySelector('.out-1').textContent = squad(n);
}
// squad2(45);

// Не чистая функция, есть внешняя переменная
let count = 0;
function myCount() {
    return count++;
}

// console.log(myCount());
// console.log(myCount());
// console.log(myCount());


// Не чистая функция, есть побочный эффект "Вывод модального окна"
function showAlert() {
    alert('Hello');
}
// showAlert();


// Не чистая функция, а может и чистая, смотря как посмотреть
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 0.5) + min);
}

// for (let i = 0; i < 20; i++) {
//     console.log(randomInt(10, 20));
// } 


//Не чистая функция impure//
function year(d) {
    let today = new Date();
    let year = today.getFullYear();
    return (year - d);
}
console.log(year(2000));

function hello() {
    console.log('hello');
}
hello.hi = 123;
console.log(hello.hi);

function pOdd() {
    console.log('odd');
}

function pEven() {
    console.log('even');
}

function myNumber(n, odd, even) {
    if (n % 2 === 0) return even;
    else return odd;
}

let z = myNumber(5, pOdd, pEven);
// console.log(z);
z();

const w = [
    { name: 'Ivan', 'age': 25 },
    { name: 'Serg', 'age': 35 },
    { name: 'Olga', 'age': 27 },
]

let w1 = [];
for (let i = 0; i < w.length; i++) {
    if (w[i].age >= 26) w1.push(w[i]);
}
console.log(w1);

function mySort(item) {
    if (item.age >= 26) return true;
}

let w2 = w.filter(mySort);

console.log(w2);

let w2 = w.filter(item => item.age >= 26);