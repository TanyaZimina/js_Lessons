'use strict';
/*jshint esversion: 6 */

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};


let money, 
start = function() {
    do{
        money = prompt("Ваш месячный доход?");
    }
    while(!isNumber(money));
};

start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt("Укажите ваши расходы за месяц через запятую");
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
              
        for (let i = 0; i < 2; i++) {
            let expenses;
            let amount;
            if (i === 0) {
                expenses = prompt("Ваша обязательная статься расходов?")
            } else if (i === 1) {
                expenses = prompt("Введите другую обязательную статью расходов")
            }
            amount = +prompt("Во сколько вам это обходится?");
                while (!isNumber(amount)) {
                amount = +prompt("Во сколько вам это обходится?");
            } 
            appData.expenses[expenses] = +amount;
        } 

        // let sum = 0;
        // for (let key in appData.expenses) {
        //     sum = sum + appData.expenses[key];
        // }
        // //console.log(sum);
        // appData.expensesMonth = sum;
    },

    getExpensesMonth: function(){
        let sum = 0;
        for (let key in appData.expenses) {
            sum = sum + appData.expenses[key];
        }
        appData.expensesMonth = sum;
        return appData.expensesMonth;
    },

    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getTargetMonth: function(){
        return Math.ceil(appData.mission / appData.budgetMonth);
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            console.log("У вас высокий уровень дохода");
        } else if (600 <= appData.budgetDay && appData.budgetDay < 1200){
            console.log("У вас средний уровень дохода");
        } else if (0 <= appData.budgetDay && appData.budgetDay < 600){
            console.log("Ваш уровень дохода ниже среднего");
        } else if (appData.budgetDay < 0){
            console.log("Что то пошло не так");
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log("Расходы за месяц", appData.expensesMonth);
console.log("Цель будет достигнута", appData.getTargetMonth(), "месяцев");
console.log("Уровень дохода", appData.budget);

console.log("Наша программа включает в себя данные:");
for(let key in appData){
    console.log(key, appData[key])
};
