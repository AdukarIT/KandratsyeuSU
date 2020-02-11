let recipe = {
	name: 'pasta',
	serving : 3,
	ingredients: {
		pasta: 200,
		chicken: 300,
		onion: 30,
		carrot: 50,
		species: 3,
		ketchup: 15,
		'sour creme': 50
	}
}
function isPropInObject(obj, prop) {
	for (i in obj) {
		if (i == prop) {
			return true;
		}
	}
	return false;
}
function ingredientsForOne(recipe) {
	for (ingredient in recipe.ingredients) {
		console.log(ingredient + ': ' + Math.round(recipe.ingredients[ingredient]/recipe.serving) + ' gram');
	}
}
let cylinder = {
	radius: 3,
	height: 8,
	getVolume: function() {
		return (Math.PI * (this.radius**2)/2)*this.height
	} 
}

let penguin = {
	chracter: 'Misha',
	origin: 'Death and the Penguin',
	author: 'Andrey Kurkov',
	canFly: false,
	sayHello: function() {
		console.log('Hello, I\'m '+this.chracter+'!');
	},
	fly: function() {
		if (this.canFly) {
			console.log('I can fly!');
		} else {
			console.log('I can\'t fly!');
		}
	}
}

console.log(isPropInObject(recipe, 'name'));
ingredientsForOne(recipe);

console.log(cylinder.getVolume());
penguin.sayHello();