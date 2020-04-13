document.addEventListener('DOMContentLoaded', function(){
	class User {
		constructor(name, surname) {
			this.name = name;
			this.surname = surname;
		}
		getFullName() {
			return this.name + ' ' + this.surname
		}
	}

	class Student extends User {
		constructor(name, surname, year) {
			super(name, surname);
			this.year = year;
		}
		getCourse() {
			let now = new Date();
			if (now.getMonth()>=8) {
				return now.getFullYear()-this.year-1;
			} else {
				return now.getFullYear()-this.year;
			}
			
		}
	}

	let student1 = new Student('Siarhei', 'Kandratsyeu', 2018);
	console.log(student1)
	console.log(student1.getCourse());
	console.log(student1.getFullName());

	
})