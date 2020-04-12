'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}; 

for (let key in appData) {
  console.log(key);
  console.log(appData[key]);
};
 console.log('');


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

/*
// используем цикл WHILE
let i = 0;
while (i < 2) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      s = +prompt('Во сколько обойдется?', '');
  if (typeof(a)==='string' && typeof(a) != null && typeof(s) != null && a != '' && s != '' && a.length < 50) {
    console.log('Введены правильные данные');
    appData.expenses[a] = s;
  } else {
        console.log('Неправильно!!! Повторите ввод данных.');
        i--;
  }
  i++
};
*/

/*
// используем цикл DO...WHILE
let i = 0;
do{
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      s = +prompt('Во сколько обойдется?', '');
  if (typeof(a)==='string' && typeof(a) != null && typeof(s) != null && a != '' && s != '' && a.length < 50) {
    console.log('Введены правильные данные');
    appData.expenses[a] = s;
  } else {
        console.log('Неправильно!!! Повторите ввод данных.');
        i--;
  }
  i++
}
while(i < 2);
*/

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на 1 день составляет:" + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 1000) {
  console.log('Это минимальный уровень достатка!');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
  console.log('Это средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
  console.log('Это высокий уровень достатка!');
} else {
  console.log('Произошла ошибка');
};

for (let key in appData) {
  console.log(key);
  console.log(appData[key]);
};

