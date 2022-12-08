// Функция
// Function declaration

function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x + y);
}

function hello() {
    console.log('hello');
}

function testFunction2() {
    function t3() {
        console.log('t3 function');
    }
    t3();
    console.log('test function 2');
}
// hello();
// testFunction2();
// t3(); // ERROR

function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}


unixTime();
unixTime();

function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

randomInt();

function randomInt() {
    console.log('random int 555');
}
randomInt();
randomInt();

console.log(randomInt);

function rand(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

rand(1, 100);

function count() {
    let c = 9;
    c++;
    console.log(c);
}

count();
count();
count();
count();
count();