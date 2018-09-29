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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\n__webpack_require__(/*! ./modules/fullscreenmenu */ \"./src/assets/scripts/modules/fullscreenmenu.js\");\n\nconsole.log('абоут');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBQSxRQUFRQyxHQUFSLENBQWEsT0FBYiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9leGFtcGxlXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9mdWxsc2NyZWVubWVudVwiO1xyXG5cclxuY29uc29sZS5sb2cgKCfQsNCx0L7Rg9GCJykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/fullscreenmenu.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/fullscreenmenu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//  открытие/закрытие полноэкранного меню \"по клику на гамбургер меню в адаптивах\"\nvar hamburger = document.querySelector(\".hamburger-menu\");\nvar fullScreenMenu = document.querySelector('.fullscreenmenu');\nvar closeMenu = document.querySelector(\".fullscreenmenu__btn\");\nvar closeMenu2 = document.querySelectorAll(\".fullscreenmenu__link\");\n\nconsole.log(hamburger, fullScreenMenu, closeMenu, closeMenu2);\n\nhamburger.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"flex\";\n    document.body.classList.add('blocked-scroll');\n});\n\ncloseMenu.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"none\";\n    document.body.classList.remove('blocked-scroll');\n});\n\ncloseMenu2.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n        fullScreenMenu.style.display = \"none\";\n        document.body.classList.remove('blocked-scroll');\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVubWVudS5qcz84ZmE1Il0sIm5hbWVzIjpbImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZ1bGxTY3JlZW5NZW51IiwiY2xvc2VNZW51IiwiY2xvc2VNZW51MiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmb3JFYWNoIiwiaXRlbSIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxZQUFZQyxTQUFTQyxhQUFULENBQXdCLGlCQUF4QixDQUFsQjtBQUNBLElBQU1DLGlCQUFpQkYsU0FBU0MsYUFBVCxDQUF3QixpQkFBeEIsQ0FBdkI7QUFDQSxJQUFNRSxZQUFZSCxTQUFTQyxhQUFULENBQXdCLHNCQUF4QixDQUFsQjtBQUNBLElBQU1HLGFBQWFKLFNBQVNLLGdCQUFULENBQTJCLHVCQUEzQixDQUFuQjs7QUFFQUMsUUFBUUMsR0FBUixDQUFhUixTQUFiLEVBQXdCRyxjQUF4QixFQUF3Q0MsU0FBeEMsRUFBbURDLFVBQW5EOztBQUVBTCxVQUFVUyxnQkFBVixDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzVDTixtQkFBZU8sS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVYsYUFBU1csSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixnQkFBNUI7QUFDQyxDQUhMOztBQUtBVixVQUFVSyxnQkFBVixDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzVDTixtQkFBZU8sS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVYsYUFBU1csSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxNQUF4QixDQUErQixnQkFBL0I7QUFDQyxDQUhMOztBQU1BVixXQUFXVyxPQUFYLENBQW1CLFVBQVNDLElBQVQsRUFBZTtBQUM5QkEsU0FBS1IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU1MsQ0FBVCxFQUFZO0FBQ3ZDZix1QkFBZU8sS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVYsaUJBQVNXLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsZ0JBQS9CO0FBQ0gsS0FIRDtBQUlILENBTEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVubWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICDQvtGC0LrRgNGL0YLQuNC1L9C30LDQutGA0YvRgtC40LUg0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LPQviDQvNC10L3RjiBcItC/0L4g0LrQu9C40LrRgyDQvdCwINCz0LDQvNCx0YPRgNCz0LXRgCDQvNC10L3RjiDQsiDQsNC00LDQv9GC0LjQstCw0YVcIlxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIChcIi5oYW1idXJnZXItbWVudVwiKTtcclxuY29uc3QgZnVsbFNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmZ1bGxzY3JlZW5tZW51Jyk7XHJcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKFwiLmZ1bGxzY3JlZW5tZW51X19idG5cIik7XHJcbmNvbnN0IGNsb3NlTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIChcIi5mdWxsc2NyZWVubWVudV9fbGlua1wiKTtcclxuXHJcbmNvbnNvbGUubG9nIChoYW1idXJnZXIsIGZ1bGxTY3JlZW5NZW51LCBjbG9zZU1lbnUsIGNsb3NlTWVudTIpXHJcblxyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XHJcbiAgICBmdWxsU2NyZWVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrZWQtc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxuXHJcbmNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCBmdW5jdGlvbiAoKXtcclxuICAgIGZ1bGxTY3JlZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZC1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbmNsb3NlTWVudTIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGZ1bGxTY3JlZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQtc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/fullscreenmenu.js\n");

/***/ })

/******/ });