document.addEventListener('DOMContentLoaded', function(){
	let globalX = 1000;
	let globalY = 1000;
	let direction = 0;
	let game = document.querySelector('#game').getContext('2d');

	let player = new Image();
	player.src = 'img/player.png';
	player.onload = function() {
		game.drawImage(player, 0, 0, 48, 48, 130, 50, 48, 48);
	};
	let tiles = new Image();
	tiles.src = 'img/tiles.png';
	tiles.onload = function() {
		console.log('tiles loaded');
		
		let three = function(positionX, positionY) {
			return {
				title: 'three',
				positionX: positionX,
				positionY: positionY,
				tileX: 1765,
				tileY: 280,
				tileWidth: 30,
				tileHeight: 35,
				hard: true
			}
		}
		let homeTown = [];
		homeTown.push(three(0, 0));
		homeTown.push(three(0, 35));
		homeTown.push(three(0, 70));
		homeTown.push(three(0, 105));
		homeTown.push(three(0, 140));
		homeTown.push(three(210, 0));
		homeTown.push(three(210, 35));
		homeTown.push(three(210, 70));
		homeTown.push(three(210, 105));
		homeTown.push(three(210, 140));
		homeTown.push(three(30, 0));
		homeTown.push(three(60, 0));
		homeTown.push(three(90, 0));
		homeTown.push(three(120, 0));
		homeTown.push(three(150, 0));
		homeTown.push(three(180, 0));
		homeTown.push(three(30, 140));
		homeTown.push(three(60, 140));
		homeTown.push(three(90, 140));
		homeTown.push(three(120, 140));
		homeTown.push(three(150, 140));
		homeTown.push(three(180, 140));

		function drawElement(element) {
			game.drawImage(tiles, element.tileX, element.tileY, element.tileWidth, element.tileHeight, element.positionX, element.positionY, element.tileWidth, element.tileHeight);
		}
		function drawPlayer() {
			if (direction%2 == 0) {
				game.drawImage(player, direction*48, globalY%4*48, 48, 48, 130, 50, 48, 48);
			} else {
				game.drawImage(player, direction*48, globalX%4*48, 48, 48, 130, 50, 48, 48);
			}
			
		};

		function drawScene(area) {
			game.clearRect(0, 0, 640, 480);
			game.fillStyle='lightgreen';
			game.fillRect(0, 0, 640, 480);
			for (i in area) {
				drawElement(area[i]);
			}
			drawPlayer();
			game.fillStyle='grey';
			game.fillRect(240, 130, 40, 10);
			game.fillStyle='white';
			game.font = '10px serif';
			game.fillText('Menu', 250, 138);
		};
		drawScene(homeTown);

		document.addEventListener('keydown', function(e) {
			if (e.key == 'ArrowRight') {
				let items = homeTown.filter(function(e){
					if (e.positionX>155&&e.positionX<155+e.tileWidth/2&&e.positionY>74-e.tileHeight/2&&e.positionY<74+e.tileHeight/2) {
						return e;
					}
				});
				if (items.length==0 || !items[0].hard) {
					globalX+=3;
					direction = 3;
					for (i in homeTown) {
						homeTown[i].positionX-=3;
					}
					drawScene(homeTown);
				}
			}
			if (e.key == 'ArrowLeft') {
				let items = homeTown.filter(function(e){
					if (e.positionX<125&&e.positionX>125-e.tileWidth/2&&e.positionY>74-e.tileHeight/2&&e.positionY<74+e.tileHeight/2) {
						return e;
					}
				});
				if (items.length==0 || !items[0].hard) {
					globalX-=3;
					direction = 1;
					for (i in homeTown) {
						homeTown[i].positionX+=3;
					}
					drawScene(homeTown);
				}
			}
			if (e.key == 'ArrowUp') {
				let items = homeTown.filter(function(e){
					if (e.positionY<60&&e.positionY>60-e.tileHeight/2&&e.positionX>125-e.tileWidth/2&&e.positionX<125+e.tileWidth/2) {
						return e;
					}
				});
				if (items.length==0 || !items[0].hard) {
					globalY-=3;
					direction = 2;
					for (i in homeTown) {
						homeTown[i].positionY+=3;
					}
					drawScene(homeTown);
				}
			}
			if (e.key == 'ArrowDown') {
				let items = homeTown.filter(function(e){
					if (e.positionY>75&&e.positionY<75+e.tileHeight/2&&e.positionX>125-e.tileWidth/2&&e.positionX<125+e.tileWidth/2) {
						return e;
					}
				});
				if (items.length==0 || !items[0].hard) {
					globalY+=3;
					direction = 0;
					for (i in homeTown) {
						homeTown[i].positionY-=3;
					}
					drawScene(homeTown);
				}
			}
		});

		let menuClosed = true;
		let dexClosed = true;
		let pokeInfoClosed = true;
		let pokelist = [];
		let first = 1;

		function loadPokedexList(first) {
			let list = [];
			for (let i = first; i<= first+5; i++) {
				let pokemon = new XMLHttpRequest();
				pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+i, false);
				pokemon.send();
				list.push(JSON.parse(pokemon.responseText));
			}
			return list;
			
		}

		document.querySelector('#game').addEventListener('click', function(e){
			console.log(e.clientX+', '+e.clientY);
			if (e.clientX>510&&e.clientX<595&&e.clientY>415&&e.clientY<445&&menuClosed) {
				game.fillStyle = 'white';
				game.fillRect(220, 30, 60, 90);
				menuClosed = false;
				game.fillStyle = 'black';
				game.fillText('Pokedex', 225, 38);
			} else if (e.clientX>470&&e.clientX<595&&e.clientY>100&&e.clientY<125&&!menuClosed) {
				game.fillStyle = 'white';
				game.fillRect(30, 30, 150, 90);
				pokelist = loadPokedexList(first);
				game.fillStyle='black';
				for (let i = 0; i<pokelist.length; i++) {
					game.fillText(pokelist[i].name, 35, 40+(i*15));
				}
				dexClosed = false;
				pokeInfoClosed = true;
			} else if (!dexClosed&&pokeInfoClosed&&e.clientX>65&&e.clientX<380) {
				game.fillStyle = 'white';
				game.fillRect(30, 30, 150, 90);
				let pokemon = pokelist[Math.floor((e.clientY-100)/46)];
				game.fillStyle = 'black';
				game.fillText(pokemon.name, 35, 40);
				let img = new Image();
				img.src = pokemon.sprites.front_default;
				img.onload = function() {game.drawImage(img, 95, 30, 60, 60);}
				console.log(pokemon);
				game.fillStyle = 'black';
				game.fillText('type: '+pokemon.types[0].type.name, 35, 100);
				if (pokemon.types.length>1) {
					game.fillText(pokemon.types[1].type.name, 35, 120);
				}
				pokeInfoClosed = false;
			} else {
				drawScene(homeTown);
				menuClosed = true;
				dexClosed = true;
				pokeInfoClosed = true;
			}
			
		});
	}
})