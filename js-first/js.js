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