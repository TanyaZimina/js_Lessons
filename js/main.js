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
//console.log(addExpenses.length);
//console.log("Период равен " + period + " месяцев");
//console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(','));


money = prompt("Ваш месячный доход?");
addExpenses = prompt("Укажите ваши расходы за месяц через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");
let expenses1 = prompt("Ваша обязательная статься расходов?");
let amount1 = prompt("Во сколько вам это обходится?");
let expenses2 = prompt("Введите другую обязательную статью расходов");
let amount2 = prompt("Во сколько вам она обходится?");


//console.log("Миссия будет достигнута за " + Math.ceil(mission / budgetMounth) + " месяцев(-а)");





function getExpensesMonth () {
   return  parseInt(amount1) + parseInt(amount2);
};

console.log("Расходы за месяц = ", getExpensesMonth());

function getAccumulatedMonth () {
    return money - amount1 - amount2;
};

console.log("Ваш бюджет на день = ", getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return mission / accumulatedMonth;
};

console.log("Вы достигните цель через", getTargetMonth(), "Месяцев");

let budgetDay = accumulatedMonth / 30;
console.log("Ваш дневной бюджет = " + Math.floor(budgetDay));

let getStatusIncome = function(){
    if (budgetDay >= 1200){
        console.log("У вас высокий уровень дохода");
    } else if (600 <= budgetDay && budgetDay < 1200){
        console.log("У вас средний уровень дохода");
    } else if (0 <= budgetDay && budgetDay < 600){
        console.log("Ваш уровень дохода ниже среднего");
    } else if (budgetDay < 0){
        console.log("Что то пошло не так");
    }
};

getStatusIncome();
