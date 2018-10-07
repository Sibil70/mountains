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
eval("\n\nvar items = document.querySelectorAll('.blog-menu__item');\nvar btns = document.querySelectorAll('.blog-menu__btn');\nvar posts = document.querySelectorAll('.article');\n\n//Находим все кнпоки меню\nfor (var i = 0; i < btns.length; i++) {\n  var button = btns[i];\n\n  button.onclick = function () {\n    //При клике на кнопку определяем data id и родительский элемент,\n    //Удаляем все активные элементы у списков и добавляем активный класс по клику\n    var data_id = this.dataset.id;\n    var parent = this.parentNode;\n    for (var _i = 0; _i < items.length; _i++) {\n      var item = items[_i];\n      item.classList.remove(\"blog-menu__item--active\");\n    }\n    parent.classList.add(\"blog-menu__item--active\");\n    //Находим все посты, если data id совпадает, то скролим до нужного поста\n    for (var _i2 = 0; _i2 < posts.length; _i2++) {\n      var post = posts[_i2];\n\n      var postHeight = post.clientHeight;\n      if (post.dataset.id === data_id) {\n        // console.log(post.offsetTop + \" Позиция поста\");\n        // window.onscroll = function () {\n        //   console.log(postPosition);\n\n        // }\n        window.scrollTo({\n          //определяем top поста и высоту поста\n          //Складываем и прокручиваем\n          top: post.offsetTop + postHeight,\n          behavior: \"smooth\"\n        });\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nbWVudS5qcz9mZDU1Il0sIm5hbWVzIjpbIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsInBvc3RzIiwiaSIsImxlbmd0aCIsImJ1dHRvbiIsIm9uY2xpY2siLCJkYXRhX2lkIiwiZGF0YXNldCIsImlkIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwb3N0IiwicG9zdEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWQ7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBYjtBQUNBLElBQU1FLFFBQVFILFNBQVNDLGdCQUFULENBQTBCLFVBQTFCLENBQWQ7O0FBRUE7QUFDQSxLQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLE1BQU1FLFNBQVNKLEtBQUtFLENBQUwsQ0FBZjs7QUFFQUUsU0FBT0MsT0FBUCxHQUFpQixZQUFZO0FBQzNCO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYUMsRUFBM0I7QUFDQSxRQUFJQyxTQUFTLEtBQUtDLFVBQWxCO0FBQ0EsU0FBSyxJQUFJUixLQUFJLENBQWIsRUFBZ0JBLEtBQUlMLE1BQU1NLE1BQTFCLEVBQWtDRCxJQUFsQyxFQUF1QztBQUNyQyxVQUFNUyxPQUFPZCxNQUFNSyxFQUFOLENBQWI7QUFDQVMsV0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLHlCQUF0QjtBQUNEO0FBQ0RKLFdBQU9HLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLHlCQUFyQjtBQUNBO0FBQ0EsU0FBSyxJQUFJWixNQUFJLENBQWIsRUFBZ0JBLE1BQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxLQUFsQyxFQUF1QztBQUNyQyxVQUFNYSxPQUFPZCxNQUFNQyxHQUFOLENBQWI7O0FBRUEsVUFBSWMsYUFBYUQsS0FBS0UsWUFBdEI7QUFDQSxVQUFJRixLQUFLUixPQUFMLENBQWFDLEVBQWIsS0FBb0JGLE9BQXhCLEVBQWlDO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBWSxlQUFPQyxRQUFQLENBQWdCO0FBQ2Q7QUFDQTtBQUNBQyxlQUFLTCxLQUFLTSxTQUFMLEdBQWlCTCxVQUhSO0FBSWRNLG9CQUFVO0FBSkksU0FBaEI7QUFNRDtBQUNGO0FBQ0YsR0E3QkQ7QUE4QkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctbWVudV9faXRlbScpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctbWVudV9fYnRuJyk7XHJcbmNvbnN0IHBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUnKTtcclxuXHJcbi8v0J3QsNGF0L7QtNC40Lwg0LLRgdC1INC60L3Qv9C+0LrQuCDQvNC10L3RjlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBidXR0b24gPSBidG5zW2ldO1xyXG5cclxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMg0L7Qv9GA0LXQtNC10LvRj9C10LwgZGF0YSBpZCDQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIsXHJcbiAgICAvL9Cj0LTQsNC70Y/QtdC8INCy0YHQtSDQsNC60YLQuNCy0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0YMg0YHQv9C40YHQutC+0LIg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDQv9C+INC60LvQuNC60YNcclxuICAgIGxldCBkYXRhX2lkID0gdGhpcy5kYXRhc2V0LmlkO1xyXG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1tZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAvL9Cd0LDRhdC+0LTQuNC8INCy0YHQtSDQv9C+0YHRgtGLLCDQtdGB0LvQuCBkYXRhIGlkINGB0L7QstC/0LDQtNCw0LXRgiwg0YLQviDRgdC60YDQvtC70LjQvCDQtNC+INC90YPQttC90L7Qs9C+INC/0L7RgdGC0LBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHBvc3RzW2ldO1xyXG5cclxuICAgICAgbGV0IHBvc3RIZWlnaHQgPSBwb3N0LmNsaWVudEhlaWdodDtcclxuICAgICAgaWYgKHBvc3QuZGF0YXNldC5pZCA9PT0gZGF0YV9pZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc3Qub2Zmc2V0VG9wICsgXCIg0J/QvtC30LjRhtC40Y8g0L/QvtGB0YLQsFwiKTtcclxuICAgICAgICAvLyB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhwb3N0UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgIC8v0L7Qv9GA0LXQtNC10LvRj9C10LwgdG9wINC/0L7RgdGC0LAg0Lgg0LLRi9GB0L7RgtGDINC/0L7RgdGC0LBcclxuICAgICAgICAgIC8v0KHQutC70LDQtNGL0LLQsNC10Lwg0Lgg0L/RgNC+0LrRgNGD0YfQuNCy0LDQtdC8XHJcbiAgICAgICAgICB0b3A6IHBvc3Qub2Zmc2V0VG9wICsgcG9zdEhlaWdodCxcclxuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blogmenu.js\n");

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