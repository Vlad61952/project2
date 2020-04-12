'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  };
};

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
}; 

for (let key in appData) {
  console.log(key);
  console.log(appData[key]);
};
 console.log('');

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        s = +prompt('Во сколько обойдется?', '');
    if (typeof(a)==='string' && typeof(a) != null && typeof(s) != null && a != '' && s != '' && a.length < 50) {
      console.log('Введены правильные данные');
      appData.expenses[a] = s;
    } else {
      console.log('Неправильно!!! Повторите ввод данных.');
      i--;
    }
  };
}

chooseExpenses();

function detectDayBudget() {
  // расчет дневного бюджета
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Бюджет на 1 день составляет:" + appData.moneyPerDay + "руб."); 
}

detectDayBudget();

function detectLevel() {
  // расчет уровня достатка
  if (appData.moneyPerDay < 1000) {
    console.log('Это минимальный уровень достатка!');
  } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log('Это средний уровень достатка!');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка!');
  } else {
    console.log('Произошла ошибка');
  }
}

detectLevel();

function checkSavings() {
  // расчет накоплений
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        alert('Дход с Вашего депозита в месяц:' + appData.monthIncome);    
  }
}

checkSavings();

function chooseOptExpenses() {
  // функция для определения необязательных расходов
  for (let i = 1; i <= 3; i++) {
    let questionOptExpenses = prompt('Статья необязательных расходов в этом месяце', '');
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
  }
}

chooseOptExpenses()

for (let key in appData) {
  console.log(key);
  console.log(appData[key]);
};