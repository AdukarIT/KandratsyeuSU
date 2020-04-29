let pokemon = new XMLHttpRequest();
pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/pichu/', false);
pokemon.send();
// let ditto = JSON.stringify();
console.log(JSON.parse(pokemon.responseText));