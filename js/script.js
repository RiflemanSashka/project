"use strict";

const result = confirm("Are you here?");

console.log(result);

const answer = prompt("Вам есть 18?", "Укажите возраст");
console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Как Ваше имя?', "");
answers[1] = prompt('Какая Ваша фамилия?', "");
answers[2] = prompt('Сколько Вам лет?', "");

console.log(typeof(answers));

const user = "Sasha";
alert(`Hi, ${user}`);

console.log('arr' + " - object");

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

