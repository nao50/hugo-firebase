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
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/example/static/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./themes/example/static/js/bulma.ts":
/*!*******************************************!*\
  !*** ./themes/example/static/js/bulma.ts ***!
  \*******************************************/
/*! exports provided: Bulma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bulma\", function() { return Bulma; });\nvar Bulma = /** @class */ (function () {\n    function Bulma() {\n    }\n    Bulma.prototype.openNavbarMenu = function () {\n        document.addEventListener('DOMContentLoaded', function () {\n            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);\n            if ($navbarBurgers.length > 0) {\n                $navbarBurgers.forEach(function (el) {\n                    el.addEventListener('click', function () {\n                        var target = el.dataset.target;\n                        var $target = document.getElementById(target);\n                        el.classList.toggle('is-active');\n                        $target.classList.toggle('is-active');\n                    });\n                });\n            }\n        });\n    };\n    return Bulma;\n}());\n\n\n\n//# sourceURL=webpack:///./themes/example/static/js/bulma.ts?");

/***/ }),

/***/ "./themes/example/static/js/index.ts":
/*!*******************************************!*\
  !*** ./themes/example/static/js/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./themes/example/static/js/router.ts\");\n/* harmony import */ var _bulma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulma */ \"./themes/example/static/js/bulma.ts\");\n\n\n/*\n** Router\n*/\nvar router = new _router__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.init();\nrouter.get('/', function (req) {\n    console.log('req.path: ', req.path);\n});\nrouter.get('/login/', function (req) {\n    console.log('req.path: ', req.path);\n});\n/*\n** Bulma\n*/\nvar bulma = new _bulma__WEBPACK_IMPORTED_MODULE_1__[\"Bulma\"]();\nbulma.openNavbarMenu();\n\n\n//# sourceURL=webpack:///./themes/example/static/js/index.ts?");

/***/ }),

/***/ "./themes/example/static/js/router.ts":
/*!********************************************!*\
  !*** ./themes/example/static/js/router.ts ***!
  \********************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\n// https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18\nvar Router = /** @class */ (function () {\n    function Router() {\n        this.routes = [];\n    }\n    Router.prototype.get = function (uri, callback) {\n        // get(r: Route) {\n        if (!uri || !callback)\n            throw new Error('uri or callback must be given');\n        if (typeof uri !== \"string\")\n            throw new TypeError('typeof uri must be a string');\n        if (typeof callback !== \"function\")\n            throw new TypeError('typeof callback must be a function');\n        this.routes.forEach(function (route) {\n            if (route.uri === uri)\n                throw new Error(\"the uri \" + route.uri + \" already exists\");\n        });\n        this.routes.push({ uri: uri, callback: callback });\n    };\n    //\n    Router.prototype.init = function () {\n        var _this = this;\n        this.routes.some(function (route) {\n            var regEx = new RegExp(\"^\" + route.uri + \"$\");\n            var path = window.location.pathname;\n            if (path.match(regEx)) {\n                var req = { path: path };\n                return route.callback.call(_this, req);\n            }\n        });\n    };\n    return Router;\n}());\n\n\n\n//# sourceURL=webpack:///./themes/example/static/js/router.ts?");

/***/ })

/******/ });