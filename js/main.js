/*jshint esversion: 6 */

let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;

money = 50000;
income = "Подработка";
addExpenses = "Ипотека, Транспорт, Одежда";
deposit = true;
mission = 400000;
period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(','));

let budgetDay;

budgetDay = money / 30;
console.log(budgetDay);