'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}; 
/*
console.log("Свойства объекта appData");
console.log(appData.budget);
console.log(typeof(appData.budget));
console.log(appData.timeData);
console.log(typeof(appData.timeData));
console.log(appData.expenses);
console.log(typeof(appData.expenses));
console.log(appData.optionalExpenses);
console.log(typeof(appData.optionalExpenses));
console.log(appData.income);
console.log(typeof(appData.income));
console.log(appData.savings);
console.log(typeof(appData.savings));
*/

let a1 = prompt('Введите обязательную статью расходов №1 в этом месяце', '');
let s1 = prompt('Во сколько обойдется?', '');
let a2 = prompt('Введите обязательную статью расходов №2 в этом месяце', '');
let s2 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = s1;
appData.expenses.a2 = s2;

//console.log(appData.expenses.a1);
//console.log(typeof(appData.expenses.a1));
//console.log(appData.expenses.a2);
//console.log(typeof(appData.expenses.a2));

alert((appData.budget - s1 -s2) / 30);

//console.log(appData.budget / 30);
//console.log(typeof(appData.budget / 30));


