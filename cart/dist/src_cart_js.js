"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcart"] = self["webpackChunkcart"] || []).push([["src_cart_js"],{

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mount\": () => (/* binding */ mount)\n/* harmony export */ });\nconst products = 3;\n\nconst mount = (element) => {\n  const card = `\n  <article>\n    <h1>Voce tem ${products} produtos </h1>\n  </article>\n`;\n  element.innerHTML += card;\n};\n\nif (true) {\n  const element = document.getElementById(\"root\");\n  if (element) {\n    mount(element);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://cart/./src/cart.js?");

/***/ })

}]);