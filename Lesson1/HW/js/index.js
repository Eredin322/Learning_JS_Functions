//функция
//function declaration



function testFunction(){
  const x = 5;
  const y = 10;
  console.log(x + y);
}

function hello(){
  console.log('Hello');
  testFunction();
}

function testFunction2(){
  function t3(){
    console.log('t3 function')
  }
  t3();
  console.log('test function 2');
}

unixTime();

hello(); 
testFunction2();
// t3(); !Error

// Функция которая выводит время unix в консоль
function unixTime(){
    let time = Math.floor(new Date().getTime());
    console.log(time);
}


unixTime();
unixTime();

randomInt();

function randomInt(){  
  console.log('random int 555')
}

randomInt();
randomInt();

// console.log(randomInt);

//Генерирует случайное число в каком-то диапозоне
let min = 300;
let max = 350;
function rand(){
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);  
}

rand();
 
min = 5;
max = 10;
rand();

let c = 9;
function count () {
  c++;
  console.log(c);
}

count();
count();
count();
count();
count();

let w = 100;
function blockWidth () {
  w++;
  document.querySelector('.out').style.width = w + 'px'
}

document.querySelector('.out').addEventListener('mousemove', blockWidth());
// document.querySelector('.out').onclick = count;

