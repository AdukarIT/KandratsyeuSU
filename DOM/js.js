addEventListener('DOMContentLoaded', function(){

let element = document.getElementById('www');
if (element.classList.value.includes('www')) {
	element.classList.remove('www');
} else {
	element.classList.add('www');
}

function recursiveSearchTags(doc, tagName) {
	let result = [];
	function searhChid(parent) {
		if (parent.children.length>0) {
			for(let i = 0; i < parent.children.length; i++) {
				if (parent.children[i].localName==tagName) {
					result.push(parent.children[i]);
				}
				searhChid(parent.children[i]);
			}
		}
	}
	searhChid(doc);
	return result;
}
console.log(recursiveSearchTags(document, 'main'));



let arr = ['first js added', 'second js added', 'third js added', 'fourth js added'];

let ul = document.getElementsByTagName('ul')[0];

for (var i = 0; i < arr.length; i++) {
	let li = document.createElement('li');
	li.textContent = arr[i];
	ul.appendChild(li);
}

for (var i = 1; i < ul.children.length; i+=2) {
	ul.children[i].setAttribute('style', 'background-color:red');
}


let elem = document.getElementById('elem');
let parent = elem.parentNode;
for (var i = 0; i < parent.children.length; i++) {
	if (parent.children[i]==elem && i>0) {
		parent.children[i-1].textContent += '!';
	}
}



function wrapInParagraph(tag) {
	let elements = document.getElementsByTagName(tag);
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].childNodes)
		for (var j = 0; j < elements[i].childNodes.length; j++) {
			if (elements[i].childNodes[j].nodeType==3) {
				console.log(elements[i].childNodes[j]);
				let p = document.createElement('p');
				p.textContent = elements[i].childNodes[j].textContent;
				elements[i].replaceChild(p, elements[i].childNodes[j]);
			}
		}
	}
}
wrapInParagraph('div');

function normalizeClassNames() {
	function normalizeChid(parent) {
		if (parent.children.length>0) {
			for(let i = 0; i < parent.children.length; i++) {
				for (var j = 0; j < parent.children[i].classList.length; j++) {
					if (parent.children[i].classList[j].match(/-\w/g)){
						let oldClassName = parent.children[i].classList[j];
						let symbol = oldClassName[parent.children[i].classList[j].match(/-\w/).index+1].toUpperCase();
						let newClassName = oldClassName.replace(/-\w/, symbol);
						parent.children[i].classList.remove(oldClassName);
						parent.children[i].classList.add(newClassName);

					}
				}
				normalizeChid(parent.children[i]);
			}
		}
	}
	normalizeChid(document);
}
normalizeClassNames();

})