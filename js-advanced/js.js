document.addEventListener('DOMContentLoaded', function() {

let arr = ['You', 'can', 'opt', 'of', 'hearing', 'from', 'us', 'at', 'any', 'time', 'using', 'the', 'unsubscribe', 'link', 'in', 'our', 'emails'];

function numberCharFromUnicode(charCode, arr){
	let character = String.fromCharCode(charCode);
	let num = 0;
	arr.forEach(function(element) {
		for (let i = 0; i < element.length; i++) {
			if (element[i]==character) {
				num++;
			}
		}
	})
	return num;
}

function letterCounter(charCode){
	let character = String.fromCharCode(charCode);
	return function (arr) {
			let num = 0;
			arr.forEach(function(element) {
				for (let i = 0; i < element.length; i++) {
					if (element[i]==character) {
						num++;
					}
				}
			})
			return num;
		}
}

function cityGrowthFilter(arr, city) {
	return arr.filter(function(element){
		if (element.state=='California') {
			return (parseFloat(element.growth_from_2000_to_2013)>0);
		}
	})
}

function getPopulationMln(arr, latitudeMin, latitudeMax) {
	let citiesBetweenLatitudes = arr.filter(function(city){
		return (latitudeMin<=city.latitude && city.latitude<=latitudeMax)
	});
	let result = citiesBetweenLatitudes.reduce(function(result, current){
		return result+(parseInt(current.population)/(10**4));
	}, 0)
	return 'Между ' + latitudeMin + ' и ' + latitudeMax + ' градусами широты в указанных городах проживает около ' + Math.round(result)/100 + ' млн человек.';
}

function getCitiesFor(arr, firstLetter) {
	let filteredCities = arr.filter(function(city){
		return city.city[0]==firstLetter;
	});
	return filteredCities.sort(function(a,b){
		if (a.city>b.city) {
			return 1;
		}
		if (a.city<b.city) {
			return -1;
		}
		return 0;
	});
}

function arrToObject(arr) {
	let states = {};
	arr.forEach(function(city){
		// let stateName 
		if (!states[city.state]) {
			states[city.state] = [];
		} 
			states[city.state].push({
				name: city.city,
				population: city.population,
				rank: city.rank
			})
	});
	return states;
}

let countOfM = letterCounter(109);
console.log(countOfM(arr));
console.log(numberCharFromUnicode(109, arr));
console.log(cityGrowthFilter(data, 'California'));
console.log(getPopulationMln(data, 25, 30));
console.log(getCitiesFor(data, 'D'));
console.log(arrToObject(data));

})