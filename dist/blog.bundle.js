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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/fullscreenmenu */ \"./src/assets/scripts/modules/fullscreenmenu.js\");\n\n__webpack_require__(/*! ./modules/parralaxOnScroll */ \"./src/assets/scripts/modules/parralaxOnScroll.js\");\n\n__webpack_require__(/*! ./modules/blogmenu */ \"./src/assets/scripts/modules/blogmenu.js\");\n\nconsole.log(\"блог\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0FBLFFBQVFDLEdBQVIsQ0FBWSxNQUFaIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZnVsbHNjcmVlbm1lbnVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcnJhbGF4T25TY3JvbGxcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL2Jsb2dtZW51XCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCLQsdC70L7Qs1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blogmenu.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/blogmenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// const aside = document.querySelector ('.blog-menu');\nvar items = document.querySelectorAll('.blog-menu__item');\nvar btns = document.querySelectorAll('.blog-menu__btn');\nvar posts = document.querySelectorAll('.article');\n\n//сдвигаем aside влево на ширину блока\n\n// (function hideAside () {\n//   const asideWidth = aside.clientWidth;\n//   aside.style.position = 'absolute';\n//   aside.style.left = -asideWidth +'px';\n// }());\n\n//Находим все кнпоки меню\nfor (var i = 0; i < btns.length; i++) {\n  var button = btns[i];\n\n  button.onclick = function () {\n    //При клике на кнопку определяем data id и родительский элемент,\n    //Удаляем все активные элементы у списков и добавляем активный класс по клику\n\n    var data_id = this.dataset.id;\n    var parent = this.parentNode;\n\n    for (var _i = 0; _i < items.length; _i++) {\n      var item = items[_i];\n      item.classList.remove(\"blog-menu__item--active\");\n    }\n    parent.classList.add(\"blog-menu__item--active\");\n    //Находим все посты, если data id совпадает, то скролим до нужного поста\n    for (var _i2 = 0; _i2 < posts.length; _i2++) {\n      var post = posts[_i2];\n\n      if (post.dataset.id === data_id) {\n\n        window.scrollTo({\n          //определяем top поста и высоту поста и прокручиваем\n          top: post.offsetTop,\n          behavior: \"smooth\"\n        });\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nbWVudS5qcz9mZDU1Il0sIm5hbWVzIjpbIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsInBvc3RzIiwiaSIsImxlbmd0aCIsImJ1dHRvbiIsIm9uY2xpY2siLCJkYXRhX2lkIiwiZGF0YXNldCIsImlkIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwb3N0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJvZmZzZXRUb3AiLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixDQUFkO0FBQ0EsSUFBTUMsT0FBT0YsU0FBU0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWI7QUFDQSxJQUFNRSxRQUFRSCxTQUFTQyxnQkFBVCxDQUEwQixVQUExQixDQUFkOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLE1BQU1FLFNBQVNKLEtBQUtFLENBQUwsQ0FBZjs7QUFFQUUsU0FBT0MsT0FBUCxHQUFpQixZQUFZO0FBQzNCO0FBQ0E7O0FBRUEsUUFBSUMsVUFBVSxLQUFLQyxPQUFMLENBQWFDLEVBQTNCO0FBQ0EsUUFBSUMsU0FBUyxLQUFLQyxVQUFsQjs7QUFFQSxTQUFLLElBQUlSLEtBQUksQ0FBYixFQUFnQkEsS0FBSUwsTUFBTU0sTUFBMUIsRUFBa0NELElBQWxDLEVBQXVDO0FBQ3JDLFVBQU1TLE9BQU9kLE1BQU1LLEVBQU4sQ0FBYjtBQUNBUyxXQUFLQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IseUJBQXRCO0FBQ0Q7QUFDREosV0FBT0csU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIseUJBQXJCO0FBQ0E7QUFDQSxTQUFLLElBQUlaLE1BQUksQ0FBYixFQUFnQkEsTUFBSUQsTUFBTUUsTUFBMUIsRUFBa0NELEtBQWxDLEVBQXVDO0FBQ3JDLFVBQU1hLE9BQU9kLE1BQU1DLEdBQU4sQ0FBYjs7QUFFQSxVQUFJYSxLQUFLUixPQUFMLENBQWFDLEVBQWIsS0FBb0JGLE9BQXhCLEVBQWlDOztBQUUvQlUsZUFBT0MsUUFBUCxDQUFnQjtBQUNkO0FBQ0FDLGVBQUtILEtBQUtJLFNBRkk7QUFHZEMsb0JBQVU7QUFISSxTQUFoQjtBQUtEO0FBQ0Y7QUFDRixHQXpCRDtBQTBCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2dtZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmJsb2ctbWVudScpO1xyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2l0ZW0nKTtcclxuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2J0bicpO1xyXG5jb25zdCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlJyk7XHJcblxyXG4vL9GB0LTQstC40LPQsNC10LwgYXNpZGUg0LLQu9C10LLQviDQvdCwINGI0LjRgNC40L3RgyDQsdC70L7QutCwXHJcblxyXG4vLyAoZnVuY3Rpb24gaGlkZUFzaWRlICgpIHtcclxuLy8gICBjb25zdCBhc2lkZVdpZHRoID0gYXNpZGUuY2xpZW50V2lkdGg7XHJcbi8vICAgYXNpZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4vLyAgIGFzaWRlLnN0eWxlLmxlZnQgPSAtYXNpZGVXaWR0aCArJ3B4JztcclxuLy8gfSgpKTtcclxuXHJcbi8v0J3QsNGF0L7QtNC40Lwg0LLRgdC1INC60L3Qv9C+0LrQuCDQvNC10L3RjlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBidXR0b24gPSBidG5zW2ldO1xyXG5cclxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMg0L7Qv9GA0LXQtNC10LvRj9C10LwgZGF0YSBpZCDQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIsXHJcbiAgICAvL9Cj0LTQsNC70Y/QtdC8INCy0YHQtSDQsNC60YLQuNCy0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0YMg0YHQv9C40YHQutC+0LIg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDQv9C+INC60LvQuNC60YNcclxuXHJcbiAgICBsZXQgZGF0YV9pZCA9IHRoaXMuZGF0YXNldC5pZDtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1tZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAvL9Cd0LDRhdC+0LTQuNC8INCy0YHQtSDQv9C+0YHRgtGLLCDQtdGB0LvQuCBkYXRhIGlkINGB0L7QstC/0LDQtNCw0LXRgiwg0YLQviDRgdC60YDQvtC70LjQvCDQtNC+INC90YPQttC90L7Qs9C+INC/0L7RgdGC0LBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHBvc3RzW2ldO1xyXG5cclxuICAgICAgaWYgKHBvc3QuZGF0YXNldC5pZCA9PT0gZGF0YV9pZCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgLy/QvtC/0YDQtdC00LXQu9GP0LXQvCB0b3Ag0L/QvtGB0YLQsCDQuCDQstGL0YHQvtGC0YMg0L/QvtGB0YLQsCDQuCDQv9GA0L7QutGA0YPRh9C40LLQsNC10LxcclxuICAgICAgICAgIHRvcDogcG9zdC5vZmZzZXRUb3AsXHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blogmenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/fullscreenmenu.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/fullscreenmenu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//  открытие/закрытие полноэкранного меню \"по клику на гамбургер меню в адаптивах\"\nvar hamburger = document.querySelector(\".hamburger-menu\");\nvar fullScreenMenu = document.querySelector('.fullscreenmenu');\nvar closeMenu = document.querySelector(\".fullscreenmenu__btn\");\nvar closeMenu2 = document.querySelectorAll(\".fullscreenmenu__link\");\n\nhamburger.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"flex\";\n    document.body.classList.add('blocked-scroll');\n});\n\ncloseMenu.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"none\";\n    document.body.classList.remove('blocked-scroll');\n});\n\ncloseMenu2.forEach(function (item) {\n    item.addEventListener('click', function () {\n        fullScreenMenu.style.display = \"none\";\n        document.body.classList.remove('blocked-scroll');\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVubWVudS5qcz84ZmE1Il0sIm5hbWVzIjpbImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZ1bGxTY3JlZW5NZW51IiwiY2xvc2VNZW51IiwiY2xvc2VNZW51MiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZvckVhY2giLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsWUFBWUMsU0FBU0MsYUFBVCxDQUF3QixpQkFBeEIsQ0FBbEI7QUFDQSxJQUFNQyxpQkFBaUJGLFNBQVNDLGFBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBQ0EsSUFBTUUsWUFBWUgsU0FBU0MsYUFBVCxDQUF3QixzQkFBeEIsQ0FBbEI7QUFDQSxJQUFNRyxhQUFhSixTQUFTSyxnQkFBVCxDQUEyQix1QkFBM0IsQ0FBbkI7O0FBRUFOLFVBQVVPLGdCQUFWLENBQTRCLE9BQTVCLEVBQXFDLFlBQVc7QUFDNUNKLG1CQUFlSyxLQUFmLENBQXFCQyxPQUFyQixHQUErQixNQUEvQjtBQUNBUixhQUFTUyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUNDLENBSEw7O0FBS0FSLFVBQVVHLGdCQUFWLENBQTRCLE9BQTVCLEVBQXFDLFlBQVc7QUFDNUNKLG1CQUFlSyxLQUFmLENBQXFCQyxPQUFyQixHQUErQixNQUEvQjtBQUNBUixhQUFTUyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGdCQUEvQjtBQUNDLENBSEw7O0FBTUFSLFdBQVdTLE9BQVgsQ0FBbUIsVUFBU0MsSUFBVCxFQUFlO0FBQzlCQSxTQUFLUixnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDSix1QkFBZUssS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVIsaUJBQVNTLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsZ0JBQS9CO0FBQ0gsS0FIRDtBQUlILENBTEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVubWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICDQvtGC0LrRgNGL0YLQuNC1L9C30LDQutGA0YvRgtC40LUg0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LPQviDQvNC10L3RjiBcItC/0L4g0LrQu9C40LrRgyDQvdCwINCz0LDQvNCx0YPRgNCz0LXRgCDQvNC10L3RjiDQsiDQsNC00LDQv9GC0LjQstCw0YVcIlxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIChcIi5oYW1idXJnZXItbWVudVwiKTtcclxuY29uc3QgZnVsbFNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmZ1bGxzY3JlZW5tZW51Jyk7XHJcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKFwiLmZ1bGxzY3JlZW5tZW51X19idG5cIik7XHJcbmNvbnN0IGNsb3NlTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIChcIi5mdWxsc2NyZWVubWVudV9fbGlua1wiKTtcclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCBmdW5jdGlvbiAoKXtcclxuICAgIGZ1bGxTY3JlZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmxvY2tlZC1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG5cclxuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIGZ1bmN0aW9uICgpe1xyXG4gICAgZnVsbFNjcmVlbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja2VkLXNjcm9sbCcpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuY2xvc2VNZW51Mi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmdWxsU2NyZWVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja2VkLXNjcm9sbCcpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/fullscreenmenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parralaxOnScroll.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/modules/parralaxOnScroll.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parralax = function () {\n    var bg = document.querySelector('.header__background');\n\n    return {\n        move: function move(block, windowScroll, strafeAmount) {\n            var strafe = windowScroll / -strafeAmount + '%';\n            var style = block.style;\n            style.top = strafe;\n        },\n\n        init: function init(wScroll) {\n            this.move(bg, wScroll, 45);\n        }\n    };\n}();\n\nwindow.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parralax.init(wScroll);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJyYWxheE9uU2Nyb2xsLmpzPzUzMzQiXSwibmFtZXMiOlsicGFycmFsYXgiLCJiZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwidG9wIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVksWUFBWTtBQUMxQixRQUFNQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFYOztBQUVBLFdBQU87QUFDSEMsY0FBTSxjQUFVQyxLQUFWLEVBQWlCQyxZQUFqQixFQUErQkMsWUFBL0IsRUFBNkM7QUFDL0MsZ0JBQUlDLFNBQVNGLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0IsR0FBNUM7QUFDQSxnQkFBSUUsUUFBUUosTUFBTUksS0FBbEI7QUFDQUEsa0JBQU1DLEdBQU4sR0FBWUYsTUFBWjtBQUNILFNBTEU7O0FBT0hHLGNBQU0sY0FBVUMsT0FBVixFQUFtQjtBQUNyQixpQkFBS1IsSUFBTCxDQUFVSCxFQUFWLEVBQWNXLE9BQWQsRUFBdUIsRUFBdkI7QUFDSDtBQVRFLEtBQVA7QUFXSCxDQWRnQixFQUFqQjs7QUFnQkFDLE9BQU9DLFFBQVAsR0FBa0IsWUFBWTtBQUMxQixRQUFNRixVQUFVQyxPQUFPRSxXQUF2Qjs7QUFFQWYsYUFBU1csSUFBVCxDQUFjQyxPQUFkO0FBQ0gsQ0FKRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcnJhbGF4T25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJyYWxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JhY2tncm91bmQnKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuICAgICAgICAgICAgc3R5bGUudG9wID0gc3RyYWZlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNDUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgcGFycmFsYXguaW5pdCh3U2Nyb2xsKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parralaxOnScroll.js\n");

/***/ })

/******/ });