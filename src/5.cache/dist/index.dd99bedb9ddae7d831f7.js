"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_start"] = self["webpackChunkwebpack_start"] || []).push([["index"],{

/***/ "./src/5.cache/index.js":
/*!******************************!*\
  !*** ./src/5.cache/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ \"./src/5.cache/print.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction component() { \r\n  const element = document.createElement('div');\r\n  \r\n  // lodash 现在使用 import 引入\r\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_1___default().join(['Hello', 'webpack'], ' ');\r\n  element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(null, 'Hello webpack!');\r\n  return element;\r\n  \r\n}\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://webpack-start/./src/5.cache/index.js?");

/***/ }),

/***/ "./src/5.cache/print.js":
/*!******************************!*\
  !*** ./src/5.cache/print.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ print)\n/* harmony export */ });\nfunction print(text) {\r\n  console.log(text);\r\n};\n\n//# sourceURL=webpack://webpack-start/./src/5.cache/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/5.cache/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);