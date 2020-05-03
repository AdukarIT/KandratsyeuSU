/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/start.js":
/*!**************************!*\
  !*** ./scripts/start.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function(){\r\n\tlet globalX = 1000;\r\n\tlet globalY = 1000;\r\n\tlet direction = 0;\r\n\tlet game = document.querySelector('#game').getContext('2d');\r\n\r\n\tlet player = new Image();\r\n\tplayer.src = 'img/player.png';\r\n\tplayer.onload = function() {\r\n\t\tgame.drawImage(player, 0, 0, 48, 48, 130, 50, 48, 48);\r\n\t};\r\n\tlet tiles = new Image();\r\n\ttiles.src = 'img/tiles.png';\r\n\ttiles.onload = function() {\r\n\t\tconsole.log('tiles loaded');\r\n\t\t\r\n\t\tlet three = function(positionX, positionY) {\r\n\t\t\treturn {\r\n\t\t\t\ttitle: 'three',\r\n\t\t\t\tpositionX: positionX,\r\n\t\t\t\tpositionY: positionY,\r\n\t\t\t\ttileX: 1765,\r\n\t\t\t\ttileY: 280,\r\n\t\t\t\ttileWidth: 30,\r\n\t\t\t\ttileHeight: 35,\r\n\t\t\t\thard: true\r\n\t\t\t}\r\n\t\t}\r\n\t\tlet homeTown = [];\r\n\t\thomeTown.push(three(0, 0));\r\n\t\thomeTown.push(three(0, 35));\r\n\t\thomeTown.push(three(0, 70));\r\n\t\thomeTown.push(three(0, 105));\r\n\t\thomeTown.push(three(0, 140));\r\n\t\thomeTown.push(three(210, 0));\r\n\t\thomeTown.push(three(210, 35));\r\n\t\thomeTown.push(three(210, 70));\r\n\t\thomeTown.push(three(210, 105));\r\n\t\thomeTown.push(three(210, 140));\r\n\t\thomeTown.push(three(30, 0));\r\n\t\thomeTown.push(three(60, 0));\r\n\t\thomeTown.push(three(90, 0));\r\n\t\thomeTown.push(three(120, 0));\r\n\t\thomeTown.push(three(150, 0));\r\n\t\thomeTown.push(three(180, 0));\r\n\t\thomeTown.push(three(30, 140));\r\n\t\thomeTown.push(three(60, 140));\r\n\t\thomeTown.push(three(90, 140));\r\n\t\thomeTown.push(three(120, 140));\r\n\t\thomeTown.push(three(150, 140));\r\n\t\thomeTown.push(three(180, 140));\r\n\r\n\t\tfunction drawElement(element) {\r\n\t\t\tgame.drawImage(tiles, element.tileX, element.tileY, element.tileWidth, element.tileHeight, element.positionX, element.positionY, element.tileWidth, element.tileHeight);\r\n\t\t}\r\n\t\tfunction drawPlayer() {\r\n\t\t\tif (direction%2 == 0) {\r\n\t\t\t\tgame.drawImage(player, direction*48, globalY%4*48, 48, 48, 130, 50, 48, 48);\r\n\t\t\t} else {\r\n\t\t\t\tgame.drawImage(player, direction*48, globalX%4*48, 48, 48, 130, 50, 48, 48);\r\n\t\t\t}\r\n\t\t\t\r\n\t\t};\r\n\r\n\t\tfunction drawScene(area) {\r\n\t\t\tgame.clearRect(0, 0, 640, 480);\r\n\t\t\tgame.fillStyle='lightgreen';\r\n\t\t\tgame.fillRect(0, 0, 640, 480);\r\n\t\t\tfor (i in area) {\r\n\t\t\t\tdrawElement(area[i]);\r\n\t\t\t}\r\n\t\t\tdrawPlayer();\r\n\t\t\tgame.fillStyle='grey';\r\n\t\t\tgame.fillRect(240, 130, 40, 10);\r\n\t\t\tgame.fillStyle='white';\r\n\t\t\tgame.font = '10px serif';\r\n\t\t\tgame.fillText('Menu', 250, 138);\r\n\t\t};\r\n\t\tdrawScene(homeTown);\r\n\r\n\t\tdocument.addEventListener('keydown', function(e) {\r\n\t\t\tif (e.key == 'ArrowRight') {\r\n\t\t\t\tlet items = homeTown.filter(function(e){\r\n\t\t\t\t\tif (e.positionX>155&&e.positionX<155+e.tileWidth/2&&e.positionY>74-e.tileHeight/2&&e.positionY<74+e.tileHeight/2) {\r\n\t\t\t\t\t\treturn e;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tif (items.length==0 || !items[0].hard) {\r\n\t\t\t\t\tglobalX+=3;\r\n\t\t\t\t\tdirection = 3;\r\n\t\t\t\t\tfor (i in homeTown) {\r\n\t\t\t\t\t\thomeTown[i].positionX-=3;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdrawScene(homeTown);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (e.key == 'ArrowLeft') {\r\n\t\t\t\tlet items = homeTown.filter(function(e){\r\n\t\t\t\t\tif (e.positionX<125&&e.positionX>125-e.tileWidth/2&&e.positionY>74-e.tileHeight/2&&e.positionY<74+e.tileHeight/2) {\r\n\t\t\t\t\t\treturn e;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tif (items.length==0 || !items[0].hard) {\r\n\t\t\t\t\tglobalX-=3;\r\n\t\t\t\t\tdirection = 1;\r\n\t\t\t\t\tfor (i in homeTown) {\r\n\t\t\t\t\t\thomeTown[i].positionX+=3;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdrawScene(homeTown);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (e.key == 'ArrowUp') {\r\n\t\t\t\tlet items = homeTown.filter(function(e){\r\n\t\t\t\t\tif (e.positionY<60&&e.positionY>60-e.tileHeight/2&&e.positionX>125-e.tileWidth/2&&e.positionX<125+e.tileWidth/2) {\r\n\t\t\t\t\t\treturn e;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tif (items.length==0 || !items[0].hard) {\r\n\t\t\t\t\tglobalY-=3;\r\n\t\t\t\t\tdirection = 2;\r\n\t\t\t\t\tfor (i in homeTown) {\r\n\t\t\t\t\t\thomeTown[i].positionY+=3;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdrawScene(homeTown);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (e.key == 'ArrowDown') {\r\n\t\t\t\tlet items = homeTown.filter(function(e){\r\n\t\t\t\t\tif (e.positionY>75&&e.positionY<75+e.tileHeight/2&&e.positionX>125-e.tileWidth/2&&e.positionX<125+e.tileWidth/2) {\r\n\t\t\t\t\t\treturn e;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tif (items.length==0 || !items[0].hard) {\r\n\t\t\t\t\tglobalY+=3;\r\n\t\t\t\t\tdirection = 0;\r\n\t\t\t\t\tfor (i in homeTown) {\r\n\t\t\t\t\t\thomeTown[i].positionY-=3;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdrawScene(homeTown);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlet menuClosed = true;\r\n\t\tlet dexClosed = true;\r\n\t\tlet pokeInfoClosed = true;\r\n\t\tlet pokelist = [];\r\n\t\tlet first = 1;\r\n\r\n\t\tfunction loadPokedexList(first) {\r\n\t\t\tlet list = [];\r\n\t\t\tfor (let i = first; i<= first+5; i++) {\r\n\t\t\t\tlet pokemon = new XMLHttpRequest();\r\n\t\t\t\tpokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+i, false);\r\n\t\t\t\tpokemon.send();\r\n\t\t\t\tlist.push(JSON.parse(pokemon.responseText));\r\n\t\t\t}\r\n\t\t\treturn list;\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\tdocument.querySelector('#game').addEventListener('click', function(e){\r\n\t\t\tconsole.log(e.clientX+', '+e.clientY);\r\n\t\t\tif (e.clientX>510&&e.clientX<595&&e.clientY>415&&e.clientY<445&&menuClosed) {\r\n\t\t\t\tgame.fillStyle = 'white';\r\n\t\t\t\tgame.fillRect(220, 30, 60, 90);\r\n\t\t\t\tmenuClosed = false;\r\n\t\t\t\tgame.fillStyle = 'black';\r\n\t\t\t\tgame.fillText('Pokedex', 225, 38);\r\n\t\t\t} else if (e.clientX>470&&e.clientX<595&&e.clientY>100&&e.clientY<125&&!menuClosed) {\r\n\t\t\t\tgame.fillStyle = 'white';\r\n\t\t\t\tgame.fillRect(30, 30, 150, 90);\r\n\t\t\t\tpokelist = loadPokedexList(first);\r\n\t\t\t\tgame.fillStyle='black';\r\n\t\t\t\tfor (let i = 0; i<pokelist.length; i++) {\r\n\t\t\t\t\tgame.fillText(pokelist[i].name, 35, 40+(i*15));\r\n\t\t\t\t}\r\n\t\t\t\tdexClosed = false;\r\n\t\t\t\tpokeInfoClosed = true;\r\n\t\t\t} else if (!dexClosed&&pokeInfoClosed&&e.clientX>65&&e.clientX<380) {\r\n\t\t\t\tgame.fillStyle = 'white';\r\n\t\t\t\tgame.fillRect(30, 30, 150, 90);\r\n\t\t\t\tlet pokemon = pokelist[Math.floor((e.clientY-100)/46)];\r\n\t\t\t\tgame.fillStyle = 'black';\r\n\t\t\t\tgame.fillText(pokemon.name, 35, 40);\r\n\t\t\t\tlet img = new Image();\r\n\t\t\t\timg.src = pokemon.sprites.front_default;\r\n\t\t\t\timg.onload = function() {game.drawImage(img, 95, 30, 60, 60);}\r\n\t\t\t\tconsole.log(pokemon);\r\n\t\t\t\tgame.fillStyle = 'black';\r\n\t\t\t\tgame.fillText('type: '+pokemon.types[0].type.name, 35, 100);\r\n\t\t\t\tif (pokemon.types.length>1) {\r\n\t\t\t\t\tgame.fillText(pokemon.types[1].type.name, 35, 120);\r\n\t\t\t\t}\r\n\t\t\t\tpokeInfoClosed = false;\r\n\t\t\t} else {\r\n\t\t\t\tdrawScene(homeTown);\r\n\t\t\t\tmenuClosed = true;\r\n\t\t\t\tdexClosed = true;\r\n\t\t\t\tpokeInfoClosed = true;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t});\r\n\t}\r\n})\n\n//# sourceURL=webpack:///./scripts/start.js?");

/***/ })

/******/ });