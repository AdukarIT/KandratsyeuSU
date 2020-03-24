document.addEventListener('DOMContentLoaded', function() {
let form = document.forms[0];
let nameForm = form.elements.name;
let minutesForm = form.elements.minutes;

nameForm.addEventListener('blur', function(){
	if (nameForm.value == '') {
		alert('Поле "Имя" не заполнено!');
	}
});
minutesForm.addEventListener('blur', function(){
	if (isNaN(minutesForm.value)) {
		alert('Поле "Минут" заполнено не верно!');
	}
});

form.addEventListener('submit', function(e){
	e.preventDefault();
	for (var i = 0; i < form.elements.length; i++) {
		form.elements[i].style.borderColor = '';
	};
					
	if(checkFields(form)) {
		alert('form is submit');
	}
})

let mailForm = document.forms[1];
mailForm.elements.sendMail.addEventListener('click', function(e){
	e.preventDefault();
	if (checkFields(mailForm)){
		window.open("mailto:" + mailForm.elements.email.value + "?subject=mail&body=" + mailForm.mail.value);
	};
})

console.log(mailForm.elements);
mailForm.elements.clearMail.addEventListener('click', function(e){
	e.preventDefault();
	mailForm.mail.value = '';
});

function checkFields(form){
		for (var i = 0; i < form.elements.length; i++) {
			if (form.elements[i].type=='email') {
				if (!(form.elements[i].value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i))) {
					alert('wrong email!');
					form.elements[i].style.borderColor = 'red';
					return false;
				} 
			};
			if (form.elements[i].type=='textarea' || form.elements[i].type=='text') {
				if (form.elements[i].value=='') {
					alert('please, input '+ form.elements[i].id);
					form.elements[i].style.borderColor = 'red';
					return false;
				} 
			};
			if (form.elements[i].type=='password') {
				if (form.elements[i].value=='') {
					alert('please, input password!');
					form.elements[i].style.borderColor = 'red';
					return false;
				} 
				if (form.elements[i].value.length < 8) {
					alert('password can\'t be less than 8 characters');
					form.elements[i].style.borderColor = 'red';
					return false;
				}
			};
		};
		return true;
};

let text = 'Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.';

function changeText(text) {
	return text.replace(/функция/g, 'функция');
}
console.log(changeText(text));

function checkTime(time){
	let regexp = /^(\d{1}|1[0-2])\.[0-5]\d [ap]m$/;
	return regexp.test(time);
}

console.log(checkTime('9.59 am'));
console.log(checkTime('10.59 pm'));
console.log(checkTime('13.59 pm'));
console.log(checkTime('0.29 pm'));

function deleteDouble(str){
	return str.replace(/(\b\w+\b\s)(?=.*?\1)/si, '');
}

console.log(deleteDouble('dsf xxx xxx sd'));

});
