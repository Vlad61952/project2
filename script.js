'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 1; i <= 2; i++) {
      let a = prompt('Введите ' + i + ' обязательную статью расходов в этом месяце', ''),
          s = +prompt('Введите сумму ' + i + ' статьи расходов', '');
      if (typeof(a)==='string' && typeof(a) != null && typeof(s) != null && a != '' && s != '' && a.length < 50) {
        console.log('Введены правильные данные');
        appData.expenses[a] = s;
      } else {
        console.log('Неправильно!!! Повторите ввод данных.');
        i--;
      }
    }
  },
  detectDayBudget: function() {
    // расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Бюджет на 1 день составляет:  ' + appData.moneyPerDay + ' руб.'); 
  },
  detectLevel: function() {
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
  },
  checkSavings: function() {
    // расчет накоплений
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
          percent = +prompt('Под какой процент?', '');
          appData.monthIncome = (save/100/12*percent).toFixed(2);
          alert('Доход с Вашего депозита в месяц:  ' + appData.monthIncome + ' руб.');    
    }
  },
  chooseOptExpenses: function() {
    // функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt(i + ' статья необязательных расходов в этом месяце', '');
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function() {
    let items = prompt('Что принесет доп. доход?(перечислить через запятую)', '');
    appData.income = items.split(', ');
  }
}; 

// данные по объекту
//for (let key in appData) {
//  console.log(key);
//  console.log(appData[key]);
//}