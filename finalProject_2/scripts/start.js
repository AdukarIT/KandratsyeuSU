// let pokemon = new XMLHttpRequest();
// pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/pichu/', false);
// pokemon.send();
// // let ditto = JSON.stringify();
// console.log(JSON.parse(pokemon.responseText));
document.addEventListener('DOMContentLoaded', function(){
	let globalX = 0;
	let globalY = 0;
	let direction = 0;
	let game = document.querySelector('#game').getContext('2d');

	let player = new Image();
	player.src = 'img/player.png';
	player.onload = function() {
		game.drawImage(player, 0, 0, 48, 48, 130, 50, 48, 48);
	};
	let three = {
		tileX: 1765,
		tileY: 280,
		tileWidth: 30,
		tileHeight: 35,
		hard: true
	}

	function drawScene() {
		let tiles = new Image();
		tiles.src = 'img/tiles.png';
		tiles.onload = function() {
			game.drawImage(tiles, globalX, globalY, 640, 480, 0, 0, 640, 480);
			game.drawImage(tiles, three.tileX, three.tileY, three.tileWidth, three.tileHeight, 20, 30, three.tileWidth, three.tileHeight);
			drawPlayer();
		};
	};
	function drawPlayer() {
		if (direction%2 == 0) {
			game.drawImage(player, direction*48, globalY%4*48, 48, 48, 130, 50, 48, 48);
		} else {
			game.drawImage(player, direction*48, globalX%4*48, 48, 48, 130, 50, 48, 48);
		}
		
	};
	document.addEventListener('keydown', function(e) {
		if (e.key == 'ArrowRight' && globalX>=0) {
			globalX+=3;
			direction = 3;
			drawScene();
		}
		if (e.key == 'ArrowLeft' && globalX>0) {
			globalX-=3;
			direction = 1;
			drawScene();
		}
		if (e.key == 'ArrowUp' && globalY>0) {
			globalY-=3;
			direction = 2;
			drawScene();
		}
		if (e.key == 'ArrowDown' && globalY>=0) {
			globalY+=3;
			direction = 0;
			drawScene();
		}
	});
	function drawArea(area) {

	};

})