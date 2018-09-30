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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/authorizationBtn */ \"./src/assets/scripts/modules/authorizationBtn.js\");\n\n__webpack_require__(/*! ./modules/auth */ \"./src/assets/scripts/modules/auth.js\");\n\nconsole.log(\"авторизация\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBRUFBLFFBQVFDLEdBQVIsQ0FBWSxhQUFaIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvYXV0aG9yaXphdGlvbkJ0blwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5cclxuY29uc29sZS5sb2coXCLQsNCy0YLQvtGA0LjQt9Cw0YbQuNGPXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/auth.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/auth.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getUrl = function () {\n    // const arr = [];\n    var hash = window.location.href.slice(window.location.href.indexOf('?') + 1).split();\n    console.log(hash);\n\n    for (var i = 0; i < hash.length; i++) {\n        if (hash[i] === 'auth') {\n            var card = document.querySelector('.user--front');\n            card.classList.add('js-toggle');\n            var cardBack = document.querySelector('.user--back');\n            cardBack.classList.remove('js-toggle');\n        }\n        console.log(card, cardBack);\n\n        // arr.push(hash[i]);\n    }\n\n    // if (arr.length > 0) {\n\n    // }\n}();\n\nmodule.exports = getUrl;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoLmpzP2UzMTQiXSwibmFtZXMiOlsiZ2V0VXJsIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNsaWNlIiwiaW5kZXhPZiIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJjYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FyZEJhY2siLCJyZW1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFNQSxTQUFVLFlBQVU7QUFDdEI7QUFDQSxRQUFNQyxPQUFPQyxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJILE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCRSxPQUFyQixDQUE2QixHQUE3QixJQUFrQyxDQUE3RCxFQUFnRUMsS0FBaEUsRUFBYjtBQUNBQyxZQUFRQyxHQUFSLENBQVlSLElBQVo7O0FBRUEsU0FBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUVULEtBQUtVLE1BQXZCLEVBQStCRCxHQUEvQixFQUFvQztBQUM1QixZQUFJVCxLQUFNUyxDQUFOLE1BQWEsTUFBakIsRUFBeUI7QUFDN0IsZ0JBQUlFLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBWDtBQUNRRixpQkFBS0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ1IsZ0JBQUlDLFdBQVdKLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZjtBQUNRRyxxQkFBU0YsU0FBVCxDQUFtQkcsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSDtBQUNiVixnQkFBUUMsR0FBUixDQUFZRyxJQUFaLEVBQWtCSyxRQUFsQjs7QUFHUTtBQUNIOztBQUVEOztBQUVBO0FBRUgsQ0F0QmMsRUFBZjs7QUF3QkFFLE9BQU9DLE9BQVAsR0FBaUJwQixNQUFqQiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBnZXRVcmwgPSAoZnVuY3Rpb24oKXtcclxuICAgIC8vIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSsxKS5zcGxpdCgpO1xyXG4gICAgY29uc29sZS5sb2coaGFzaCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8aGFzaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaGFzaCBbaV0gPT09ICdhdXRoJykge1xyXG4gICAgICAgIHZhciBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItLWZyb250Jyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2pzLXRvZ2dsZScpO1xyXG4gICAgICAgIHZhciBjYXJkQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLS1iYWNrJyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkQmFjay5jbGFzc0xpc3QucmVtb3ZlKCdqcy10b2dnbGUnKTtcclxuICAgICAgICAgICAgfVxyXG5jb25zb2xlLmxvZyhjYXJkLCBjYXJkQmFjaylcclxuXHJcblxyXG4gICAgICAgIC8vIGFyci5wdXNoKGhhc2hbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbn0pKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldFVybDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/authorizationBtn.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/modules/authorizationBtn.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar authBtns = document.querySelectorAll('.js-toggleBtn'),\n    cards = document.querySelectorAll('.user');\n\nauthBtns.forEach(function (authBtn) {\n    authBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n        cards.forEach(function (card) {\n            if (!card.classList.contains('js-toggle')) {\n                card.classList.add('js-toggle');\n            } else {\n                card.classList.remove('js-toggle');\n            }\n        });\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRob3JpemF0aW9uQnRuLmpzPzEyZTciXSwibmFtZXMiOlsiYXV0aEJ0bnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkcyIsImZvckVhY2giLCJhdXRoQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixlQUExQixDQUFqQjtBQUFBLElBQ0lDLFFBQVFGLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBRFo7O0FBR0FGLFNBQVNJLE9BQVQsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNoQ0EsWUFBUUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVUMsQ0FBVixFQUFhO0FBQzNDQSxVQUFFQyxjQUFGO0FBQ0FMLGNBQU1DLE9BQU4sQ0FBYyxVQUFVSyxJQUFWLEVBQWdCO0FBQzFCLGdCQUFJLENBQUNBLEtBQUtDLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixXQUF4QixDQUFMLEVBQTJDO0FBQ3ZDRixxQkFBS0MsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFdBQW5CO0FBQ0gsYUFGRCxNQUVPO0FBQ0hILHFCQUFLQyxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSDtBQUNKLFNBTkQ7QUFPSCxLQVREO0FBVUgsQ0FYRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2F1dGhvcml6YXRpb25CdG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10b2dnbGVCdG4nKSxcclxuICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXInKTtcclxuXHJcbmF1dGhCdG5zLmZvckVhY2goZnVuY3Rpb24gKGF1dGhCdG4pIHtcclxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXRvZ2dsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2pzLXRvZ2dsZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdqcy10b2dnbGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/authorizationBtn.js\n");

/***/ })

/******/ });