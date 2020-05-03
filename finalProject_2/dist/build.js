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

eval("// let pokemon = new XMLHttpRequest();\r\n// pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/pichu/', false);\r\n// pokemon.send();\r\n// // let ditto = JSON.stringify();\r\n// console.log(JSON.parse(pokemon.responseText));\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n\tlet globalX = 0;\r\n\tlet globalY = 0;\r\n\tlet direction = 0;\r\n\tlet game = document.querySelector('#game').getContext('2d');\r\n\r\n\tlet player = new Image();\r\n\tplayer.src = 'img/player.png';\r\n\tplayer.onload = function() {\r\n\t\tgame.drawImage(player, 0, 0, 48, 48, 130, 50, 48, 48);\r\n\t};\r\n\tlet three = {\r\n\t\ttileX: 1765,\r\n\t\ttileY: 280,\r\n\t\ttileWidth: 30,\r\n\t\ttileHeight: 35,\r\n\t\thard: true\r\n\t}\r\n\r\n\tfunction drawScene() {\r\n\t\tlet tiles = new Image();\r\n\t\ttiles.src = 'img/tiles.png';\r\n\t\ttiles.onload = function() {\r\n\t\t\tgame.drawImage(tiles, globalX, globalY, 640, 480, 0, 0, 640, 480);\r\n\t\t\tgame.drawImage(tiles, three.tileX, three.tileY, three.tileWidth, three.tileHeight, 20, 30, three.tileWidth, three.tileHeight);\r\n\t\t\tdrawPlayer();\r\n\t\t};\r\n\t};\r\n\tfunction drawPlayer() {\r\n\t\tif (direction%2 == 0) {\r\n\t\t\tgame.drawImage(player, direction*48, globalY%4*48, 48, 48, 130, 50, 48, 48);\r\n\t\t} else {\r\n\t\t\tgame.drawImage(player, direction*48, globalX%4*48, 48, 48, 130, 50, 48, 48);\r\n\t\t}\r\n\t\t\r\n\t};\r\n\tdocument.addEventListener('keydown', function(e) {\r\n\t\tif (e.key == 'ArrowRight' && globalX>=0) {\r\n\t\t\tglobalX+=3;\r\n\t\t\tdirection = 3;\r\n\t\t\tdrawScene();\r\n\t\t}\r\n\t\tif (e.key == 'ArrowLeft' && globalX>0) {\r\n\t\t\tglobalX-=3;\r\n\t\t\tdirection = 1;\r\n\t\t\tdrawScene();\r\n\t\t}\r\n\t\tif (e.key == 'ArrowUp' && globalY>0) {\r\n\t\t\tglobalY-=3;\r\n\t\t\tdirection = 2;\r\n\t\t\tdrawScene();\r\n\t\t}\r\n\t\tif (e.key == 'ArrowDown' && globalY>=0) {\r\n\t\t\tglobalY+=3;\r\n\t\t\tdirection = 0;\r\n\t\t\tdrawScene();\r\n\t\t}\r\n\t});\r\n\tfunction drawArea(area) {\r\n\r\n\t};\r\n\r\n})\n\n//# sourceURL=webpack:///./scripts/start.js?");

/***/ })

/******/ });