function first() {
	while (confirm('Хотите узнать в каком подъезде находится квартира?')) {
		let flatNumber = +prompt('Введите номер квартиры! (от 1 до 100)');

		if (isNaN(flatNumber) || flatNumber < 1 || flatNumber > 100) {
			alert('Вы ввели недопустимое значение');
		} else {
			let entrance = Math.ceil(5/100*flatNumber);
			alert('Ваша квартира в ' + entrance + ' подъезде.');
		}
	}
}
function second() {
	let auto = prompt('Введите марку авто.');
	let country;
	switch (auto) {
		case 'audi':
		case 'bmw':
			country = 'germany';
			break;
		case 'renault':
		case 'citroen':
		case 'peugeot':
			country = 'france';
			break;
		case 'ford':
		case 'dmc':
		case 'chevrolet':
			country = 'The USA';
			break;
		case 'jaguar':
		case 'mini':
			country = 'The UK';
			break;
		case 'honda':
		case 'hundai':
			country = 'japan'
			break;
		default:
			country = 'Я таких значений не знаю';
	}
	alert(country);
}
function third() {
	let year = +prompt('Введите год');
	let isLeapYear = false;
	if (year%4==0) {
		isLeapYear = true;
	} 
	if (year%100==0) {
		isLeapYear = false;
	}
	if (year%400==0) {
		isLeapYear = true;
	}
	if (isLeapYear) {
		year = 'високосный';
	} else {
		year = 'не високосный'
	}
	alert('введенный год ' + year);
}
function fourth() {
	let numberForMultiply = +prompt('Введите число от 1 до 20.');
	if (numberForMultiply < 1 || numberForMultiply > 20 || isNaN(numberForMultiply)) {
		alert('Неверный ввод!');
	} else {
		let multiplyOfNumber = '';
		for (let i = 1; i <= 10; i++) {
			multiplyOfNumber += numberForMultiply + 'x' + i + '=' + numberForMultiply*i + '\n';
		}
		alert(multiplyOfNumber);
	}
}
function fifth() {
	let sum = 0;
	for (let i = 1; i<50; i++) {
		if (i%2!=0) {
			continue;
		}
		sum+=i;
	}
	alert(sum);
}
function sixth() {
	let previous = 0
	let current = 1;
	let next = 1;
	for (let i = 1; i <= 15; i++) {
		next = previous + current;
		console.log(next);
		previous = current;
		current = next;
	}
}
function seventh() {
	let board = '';
	let symbol = true;
	for (let i = 0; i < 64; i++) {
		if (symbol) {
			board+=' ';
		} else {
			board+='#';
		}
		symbol = !symbol;
		if (i%8==0) {
			board+='\n';
			symbol = !symbol;
		}

	}
	console.log(board);
}