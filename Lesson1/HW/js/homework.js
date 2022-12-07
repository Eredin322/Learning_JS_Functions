// Task 1
// Создайте функцию getRandomInt, которая выводит в блок 
// .out-1 случайное целое число от 117 до 132. Все переменные должны быть внутри функции. 
// Запустите эту функцию.



// Task 2
// Чуть усложним. Сейчас первая задача жестко завязана на значения 117 и 132. 
// Напишите функцию getRandomInt2, которая на основе min, max генерирует случайное 
// целое число в этом диапазоне и выводит в out-2. Запустите эту функцию.



// Task 3
// Не забываем, что функции можно вызывать внутри другой функции. 
// Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и 
// запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 
// вы увидите текст hello 2021.



// Task 4
// Да, мы отработали запуск одной функции внутри другой, но сейчас мы чуть усложним задачу, 
// чтобы вы понимали как можно вкладывать фукнции одна в другую. 
// Сразу оговорка, это ухудшает читабельность и разбор кода, пользуйтесь данным методом с умом. 
// Сейчас мы создадим две фукнции hello которая выводит в out-4 текст 'Hello ' и f2021, 
// которая будет запускать hello и выводить += 2021. Эти функции уже написаны, ознакомьтесь с ними. 
// Обратите внимание, они написаны внутри функции t4. Почему? 
// Потому что если мы просто их напишем в коде, то 
// они затрут функции с такими же именами выше по коду! А нам это не нужно.
// В чем суть задачи? Напишите функцию, t4_1 которая запускает функцию t4 при клике на кнопке .b-4.
// Обратите внимание, как у нас запускаются функции t4_1-> t4->f2021->hello




// Task 5
// Устали? У нас есть две функции. 
// Одна even, вторая odd. Напишите функцию t5, которая получает из input.i-5 число, 
// проверяет его на четность и запускает even если число четное и odd если нет.


// Task 6
// Давайте усложним задачу. 
// У нас есть функцию getRandomInt2 которая использует переменные min, max выводит в out-2 случайное 
// целое число. Напишите функцию t6, которая запускает getRandomInt2, 
// после чего, получает из .out-2 сгенерированное число и определяет 
// четное оно или нет. Если четное, запускает функцию even, если нет - odd. 
// Обратите внимание, как написаны функции even, odd.


// Task 7
// Дана переменная z7 равная 91. При клике по кнопке b-7 запускается функция t7, 
// которая увеличивает переменную z7 на единицу и выводит в out-7. Добавьте условие, что если 
// z7 равна 100, то дальше мы не увеличиваем значение z7.


// Task 8
// Дана переменная z8 равная 0. 
// Напишите функцию t8, которая при клике по .b-8 увеличивает z8 на единицу и запускает 
// функцию showNumber. Если число z8 равно 9, то при последующем клике становится равным 0.


// Task 9
// Напишите функцию t9, которая в зависимости от значения переменной z9, 
// делает активным option s.9 в таким же value. Внимание, z9 может иметь значения 1, 2, 3, 4, 5. 
// Действия запускаются по кнопке .b-9.


// Task 10
// Напишите функцию, которая перебирает массив ar10 и в ar10_res записывает 
// только числа из ar10. В конце функции t10 для вывода массива запустите функцию showArr.
