document.addEventListener('DOMContentLoaded', function(){

let button = document.getElementById('button');
button.addEventListener('click', function(e){
	e.preventDefault();
	let newButton = button.cloneNode(true);
	button.parentNode.insertBefore(newButton, button);
});

let table = document.getElementsByTagName('table')[0];
function setClass(element, className) {
	element.classList.add(className);
}
function removeClass(element, className) {
	element.classList.remove(className)
}
let classNumber=0;
table.addEventListener('click', function(e){
	let classes = ['bordered', 'striped', 'highlight'];
	setClass(this, classes[classNumber%classes.length]);
	if (classNumber==classes.length) {
		removeClass(this, classes[classes.length-1]);
		classNumber=0;
	} else {
		removeClass(this, classes[classNumber%classes.length-1])
	 	classNumber++;
	}
})

document.getElementsByName('styles')[0].addEventListener('change', function(e) {
	if (this.checked) {
		setClass(table, 'bordered');
		removeClass(table, 'striped');
		removeClass(table, 'highlight');
	} 
})
document.getElementsByName('styles')[1].addEventListener('change', function() {
	if (this.checked) {
		setClass(table, 'striped');
		removeClass(table, 'bordered');
		removeClass(table, 'highlight');
	} 
})
document.getElementsByName('styles')[2].addEventListener('change', function() {
	if (this.checked) {
		setClass(table, 'highlight');
		removeClass(table, 'striped');
		removeClass(table, 'bordered');
	} 
})

document.getElementById('alertButton').addEventListener('click', function(e){
	e.preventDefault();
	alert(this.textContent);
})
document.getElementById('blockAlertButton').addEventListener('click', function(e){
	e.preventDefault();
	if (document.getElementById('alertButton').disabled) {
		document.getElementById('alertButton').disabled = false;
		this.textContent = 'block Alert';
	} else {
		document.getElementById('alertButton').disabled = true;
		this.textContent = 'unblock Alert';
	}
})

// document.addEventListener('click', function(e){
// 	alert('Вы нажали на ' + e.target.localName);
// });

let image = document.getElementsByTagName('img')[0];

image.addEventListener('mouseover', function(){
	image.src = './second.jpg';
});

image.addEventListener('mouseout', function(){
	image.src = './first.jpg';
});

document.getElementsByClassName('wrapper')[0].hidden = true;
image.addEventListener('click', function(){
	document.getElementsByClassName('wrapper')[0].hidden = false;
});
document.getElementsByClassName('wrapper')[0].addEventListener('click', function(){
	document.getElementsByClassName('wrapper')[0].hidden = true;
})


});