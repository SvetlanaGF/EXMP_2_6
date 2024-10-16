// Задание 1: Определение функций (Function Declaration)
// Напишите функцию greet , которая принимает имя пользователя и выводит сообщение в
// формате: "Привет, [имя]!"
// // Пример вызова функции:
// greet("Иван");
function greet(name) {
    return `Привет, ${name}!`
};

console.log(greet("Иван"));

// Задание 2: Function Expression
// Создайте функцию multiply , которая принимает два числа и возвращает их произведение.
// Используйте Function Expression.
// // Пример вызова функции:
// let result = multiply(3, 4);
const multiply2 = function(a, b) {
    return a * b;
};
let result2 = multiply2(3, 4);
console.log(`Ответ на задание 2: ${result2}`);

// Задание 3: Анонимные функции
// Создайте анонимную функцию, которая выводит в консоль "Анонимная функция вызвана!" и
// немедленно вызовите её.

// Вызов функции:
(function() {
    console.log("Анонимная функция вызвана!");
})();

//     Задание 4: Самовызывающаяся функция (IIFE)
//     Создайте самовызывающуюся функцию, которая выводит в консоль "IIFE выполнена".
//     Пример вызова IIFE:
(function(message) {
    console.log(`Принято сообщение: ${message}`);
}) ("Самовызывающаяся функция сразу выполняется.");

//     Задание 5: Вложенные функции
//     Создайте функцию outer , которая внутри содержит функцию inner . Функция inner
//     должна возвращать строку "Внутренняя функция". Функция outer должна вызывать функцию
//     inner и возвращать её результат.
//     // Пример вызова функции:
//     let message = outer();
function outer(messageInFunctionOuter) {
    function inner() {
        console.log('Это сообщение передается из внутренней функции. Вот оно: "Внутренняя функция"');
    }
    console.log(`Внешней функцией получено сообщение. Вот оно: ${messageInFunctionOuter}`);
    inner();
}
let result5 = outer("Передаю сообщение во внешнюю функцию");

//     Задание 6: Привязка функции к контексту (bind)
//     Создайте объект person с полем name. Добавьте функцию sayName, которая выводит имя
//     объекта. Привяжите функцию к объекту с помощью bind.
//     // Пример вызова:
//     person.sayName();
let person = {
    name6: "John Doe",
    sayName: function() {
        console.log(this.name6);
    }
};
let boundSayName = person.sayName.bind(person);
let result6 = boundSayName();

//     Задание 7: Замыкания
//     Создайте функцию counter , которая возвращает другую функцию. Эта внутренняя функция
//     должна увеличивать счетчик на 1 при каждом вызове и выводить текущее значение.
//     // Пример использования:
//     let count = counter();
//     count(); // 1
//     count(); // 2

function counter() {
    let count = 0;
    return function() {
        count += 1;
        console.log(count);
    };
}
console.log("Ответ на задание 7 (см.ниже):");
let count = counter();
count();
count();
count();

//     Задание 8: Передача функции в качестве аргумента
// Создайте функцию execute , которая принимает функцию и два числа в качестве
// аргументов. Выполните переданную функцию с этими числами.
// // Пример использования:
// execute(multiply, 2, 5);

function multiply8(a, b) {
    return a * b;
}

function execute(func, num1, num2) {
    return func(num1, num2); // Выполняем переданную функцию с двумя числами
}

let result8 = execute(multiply8, 2, 5);
console.log(`Ответ на задание 8: ${result8}`);