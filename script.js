'use strict';

// Переменная lang может принимать 2 значения: 'ru' 'en'.

// Написать условия при котором в зависимости от значения
// lang будут выводится дни недели на русском или английском языке. 
//Решите задачу

// a.через if, 

// b.через switch-case 

// c.через многомерный массив без ифов и switch.

const lang = prompt('Введите язык: ru или en','ru');

// if (lang.toLowerCase() === 'ru') {
//   alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
// } else if(lang.toLowerCase() === 'en') {
//   alert('Monday, Tuesday, Wedhesday, Thursday, Friday, Saturday, Sunday');
// } else {
//   alert('Неверный формат языка');
// }

switch(lang.toLocaleLowerCase()) {
  case 'ru':
  	alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
   	break;
  case 'en':
    alert('Monday, Tuesday, Wedhesday, Thursday, Friday, Saturday, Sunday');
   	break;
	default:	 
		alert('Неверный формат языка');
}

// У нас есть переменная namePerson. Если значение этой переменной 
// “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, 
// с любым другим значением вывести в консоль “студент”

// 	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

const userData = prompt('Введите логин');

const namePerson = (userData.toLocaleLowerCase() === 'артём') ? 'директор' :

(userData.toLocaleLowerCase() === 'максим') ? 'преподаватель' : 'студент';

console.log(namePerson);



