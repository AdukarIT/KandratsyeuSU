let randomArray = getRandomArray(10);
function getRandomArray(len) {
	arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(Math.random());
	}
	console.log(arr);
	return arr;
}
function middle(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	let middle = sum / arr.length;
	console.log(middle);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]>middle) {
			console.log(arr[i]);
		}
	}
}
function getTwoMinElements(arr) {
	let min = arr[0];
	let min2 = arr[0];
	let switcher = true;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i+1] < min || arr[i+1] < min2) {
			if (switcher) {
				min = arr[i+1];
				switcher = !switcher;
			} else {
				min2 = arr[i+1];
				switcher = !switcher;
			}
		}
	}
	console.log(min, min2);
}
function sumOfArr(arr, arr2) {
	let sumOfArrays = [];
	for (let i =0; i < arr.length; i++) {
		sumOfArrays[i] = arr[i] + arr2[(arr.length-i-1)];
	}
	console.log(sumOfArrays);
}

function bubbleSort(arr) {
	let flag = true;
	while (flag) {
		flag = false;
		for (let i = 0; i < arr.length; i++) {
			for (let j = i; j < arr.length; j++) {
				if (arr[j+1] < arr[j]) {
					let k = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = k;
					flag = true;
				}
			}
		}
	}
	console.log(arr);
}
middle(randomArray);
getTwoMinElements(randomArray);
sumOfArr(getRandomArray(4), getRandomArray(4));
bubbleSort(getRandomArray(8));