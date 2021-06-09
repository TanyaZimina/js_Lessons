'use strict';
/*jshint esversion: 6 */


let money = 50000;
let income = "Подработка";
let addExpenses = "Ипотека, Транспорт, Одежда";
let deposit = true;
let mission = 400000;
let period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(','));


money = prompt("Ваш месячный доход?");
addExpenses = prompt("Укажите ваши расходы за месяц через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");
let expenses1 = prompt("Ваша обязательная статься расходов?");
let amount1 = prompt("Во сколько вам это обходится?");
let expenses2 = prompt("Введите другую обязательную статью расходов");
let amount2 = prompt("Во сколько вам она обходится?");
let budgetMounth = money - amount1 - amount2;

console.log("Ваш месячный бюджет = " + budgetMounth);

console.log("Миссия будет достигнута за " + Math.ceil(mission / budgetMounth) + " месяцев(-а)");
let budgetDay = budgetMounth / 30;
console.log("Ваш дневной бюджет = " + Math.floor(budgetDay));

if (budgetDay >= 1200){
    console.log("У вас высокий уровень дохода");
} else if (600 <= budgetDay && budgetDay < 1200){
    console.log("У вас средний уровень дохода");
} else if (0 <= budgetDay && budgetDay < 600){
    console.log("Ваш уровень дохода ниже среднего");
} else if (budgetDay < 0){
    console.log("Что то пошло не так");
}