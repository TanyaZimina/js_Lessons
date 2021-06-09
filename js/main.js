'use strict';
/*jshint esversion: 6 */

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = "Подработка",
    addExpenses = prompt("Укажите ваши расходы за месяц через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 400000,
    period = 10;

//1) Переписать функцию start циклом do while

    let start = function() {
        do{
            money = prompt("Ваш месячный доход?");
        }
        while(!isNumber(money));
    };
    
    start();


 let showTypeof = function(item){
        console.log(typeof item);
    };
    showTypeof(money);
    showTypeof(income);
    showTypeof(deposit);

console.log(addExpenses.toLowerCase().split(','));

//2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth

let expenses1, expenses2;

let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt("Ваша обязательная статься расходов?")
        } else if (i === 1) {
            expenses2 = prompt("Введите другую обязательную статью расходов")
        }

            sum += +prompt("Во сколько вам это обходится?");
            while (!isNumber(sum)) {
                sum = +prompt("Во сколько вам это обходится?");
            }
    }

    console.log(sum);
    return sum;
}

let expensesAmount = getExpensesMonth();
console.log("Расходы за месяц = " + expensesAmount);

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};
console.log("Ваш бюджет на день = ", getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

//3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”

let getTargetMonth = function(){
    return Math.ceil(mission / accumulatedMonth);
};

    if (getTargetMonth() >= 0){
        console.log("Вы достигните цель через", getTargetMonth(), "Месяцев");
    } else 
          console.log("Цель не будет достигнута");


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
