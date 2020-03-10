function searchMin(a, b, c){
	let min = a;
	if (a<=b) {
		if (a<=c) {
			return a;
		} 
	} else if (b<=c) {
		return b;
	} 
	return c;
}

function getMiliseconds(days, hours, minutes) {
	return (minutes+hours*60+days*24*60)*60*1000;
}

function factorial(x) {
	if (x>1) {
		return x*factorial(x-1);
	}
	return 1;
}
function reverse(x) {
	let str = '';
	if (x>0) {
		return str+x%10+reverse(Math.floor(x/10));
	}
	return str;
}

function quadratic(a, b, c) {
	let d = b*b - 4*a*c;
	if (d<0) {
		return 'd<0';
	}
	let x1,x2;
	x1 = (-b+Math.sqrt(d))/(2*a);
	x2 = (-b-Math.sqrt(d))/(2*a);
	if (x1==x2) {
		return x1;
	}
	return x1 + ' ' + x2;
}

console.log(searchMin(1, 2, 0));
console.log(getMiliseconds(2, 5, 23));
console.log(factorial(5));
console.log(reverse(1234));
console.log(quadratic(3, -14, -5));