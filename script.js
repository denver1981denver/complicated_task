'use strict';

//  Создайте функцию, которая принимает 1 аргумент (название произвольное)

// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя

// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и 
// вместо них появляются три точки (...)

function argument (value) {
	if (value !== String(value)) {
		alert('Передана не строка');
	}

	value = value.trim();

	if (value.length > 30) {
		let data = value.substr(0,31) + '...';
		return data;
	}
	return value;
}

console.log(argument('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'));




