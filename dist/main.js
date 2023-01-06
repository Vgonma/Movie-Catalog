/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: Roboto, sans-serif;\\n}\\n\\n.nav-bar {\\n  width: 100%;\\n  height: 60px;\\n  display: flex;\\n  margin-bottom: 20px;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);\\n}\\n\\n.nav-logo-container {\\n  padding: 5px;\\n  margin-left: 5%;\\n}\\n\\n.nav-logo {\\n  max-width: 100%;\\n  max-height: 100%;\\n}\\n\\n.nav-menu-ul {\\n  list-style: none;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.nav-menu {\\n  padding: 10px;\\n}\\n\\n.footer-container {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  padding: 5px 20px;\\n  border-top: 1px solid gray;\\n  height: 50px;\\n}\\n\\n.items-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 20px;\\n  justify-content: center;\\n  list-style: none;\\n}\\n\\n.card {\\n  width: 270px;\\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\\n  padding: 20px;\\n}\\n\\n.card-img {\\n  width: 100%;\\n}\\n\\n.card-info-container {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n}\\n\\n.card-title {\\n  font-size: 20px;\\n}\\n\\n.card-likes-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.card-heart {\\n  width: 25px;\\n  cursor: pointer;\\n}\\n\\n.card-likes-text {\\n  font-size: 12px;\\n}\\n\\n.card-buttons-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.card-button {\\n  width: 100%;\\n  height: 30px;\\n  margin: auto;\\n  border-radius: 5px;\\n  border: 0;\\n  background-color: #d5cea3;\\n  color: white;\\n  margin-bottom: 10px;\\n  cursor: pointer;\\n}\\n\\n.pop-up-container {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: #333333a0;\\n  backdrop-filter: blur(2px);\\n  display: flex;\\n}\\n\\n.info-container {\\n  background-color: #fff;\\n  display: flex;\\n  height: 90%;\\n  width: 85%;\\n  max-width: 900px;\\n  margin: auto;\\n  padding: 16px;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 16px;\\n  box-shadow: 10px 20px 15px #222;\\n  border-radius: 20px;\\n}\\n\\n.cross {\\n  align-self: flex-end;\\n  max-width: 30px;\\n  cursor: pointer;\\n}\\n\\n.movie-preview {\\n  width: 100%;\\n  max-width: 340px;\\n}\\n\\n.list-ingredients {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  width: 100%;\\n  max-width: 600px;\\n  text-align: center;\\n  list-style: none;\\n}\\n\\n.list-comments {\\n  width: 100%;\\n  max-width: 600px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n}\\n\\n.comment-title {\\n  align-self: center;\\n}\\n\\n.comments-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.comment {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  row-gap: 5px;\\n  width: 80%;\\n  text-align: left;\\n  border: solid 1px black;\\n}\\n\\n.comment-user {\\n  background-color: #eee;\\n  padding: 5px;\\n}\\n\\n.comment-date {\\n  text-align: right;\\n  background-color: #eee;\\n  padding: 5px;\\n}\\n\\n.comment-text {\\n  grid-column: 1/3;\\n  padding: 5px;\\n}\\n\\n.add-comment-form {\\n  width: 100%;\\n  max-width: 600px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 12px;\\n}\\n\\n.add-comment-title {\\n  text-align: center;\\n}\\n\\n.input-name {\\n  height: 25px;\\n  width: 200px;\\n}\\n\\n.input-name::placeholder {\\n  padding-left: 6px;\\n}\\n\\n.comment-area {\\n  height: 80px;\\n}\\n\\n.comment-area::placeholder {\\n  padding-left: 6px;\\n}\\n\\n.submit-comment {\\n  max-width: 100px;\\n  height: 30px;\\n}\\n\\n.scroll {\\n  overflow-y: scroll;\\n}\\n\\n.no-scroll {\\n  overflow: hidden;\\n}\\n\\n.heart-beat {\\n  animation-name: beat;\\n  animation-duration: 0.5s;\\n  animation-iteration-count: infinite;\\n  animation-direction: alternate;\\n}\\n\\n@keyframes beat {\\n  0% {\\n    transform: scale(0.8);\\n  }\\n\\n  100% {\\n    transform: scale(1.2);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gallery/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gallery/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gallery/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/clapperboard.png */ \"./src/img/clapperboard.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/img/clapperboard.png */ \"./src/img/clapperboard.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Movies Catalog</title>\\n    <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\">\\n  </head>\\n  <body>\\n    <header class=\\\"nav-bar\\\">\\n      <div class=\\\"nav-logo-container\\\">\\n        <img class=\\\"nav-logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\">\\n      </div>\\n      <ul class=\\\"nav-menu-ul\\\">\\n        <li class=\\\"nav-menu\\\">Movies <span class=\\\"movies\\\"></span></li>\\n      </ul>\\n    </header>\\n    <main>\\n      <section>\\n        <ul id=\\\"items-list\\\" class=\\\"items-container\\\"></ul>\\n      </section>\\n    </main>\\n    <footer class=\\\"footer-container\\\">\\n      <p>Created by Microverse under CC license</p>\\n    </footer>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://gallery/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://gallery/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gallery/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gallery/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/CreateCommentDOM.js":
/*!*********************************!*\
  !*** ./src/CreateCommentDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCommentsDOM)\n/* harmony export */ });\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\nfunction createCommentsDOM(comments) {\n  const commentSection = document.createElement('div');\n  commentSection.classList.add('list-comments');\n  if (comments.length > 0) {\n    commentSection.innerHTML = `\n        <h3 class=\"comment-title\">Comments(Counting...)</h3>\n        <div class=\"comments-container\"></div>`;\n    comments.forEach((comment) => {\n      const com = document.createElement('p');\n      com.classList.add('comment');\n      com.innerHTML = `<span class=\"comment-user\">${comment.username}</span><span class=\"comment-date\">${comment.creation_date}</span>\n          <span class=\"comment-text\">${comment.comment}</span>`;\n      commentSection.children[1].appendChild(com);\n    });\n    commentSection.children[0].textContent = `Comments(${(0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      commentSection.children[1],\n    )})`;\n  } else {\n    commentSection.innerHTML = `\n        <h3 class=\"comment-title\">Comments(0)</h3>\n        <div class=\"comments-container\"></div>`;\n  }\n  return commentSection;\n}\n\n\n//# sourceURL=webpack://gallery/./src/CreateCommentDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _img_filled_heart_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/filled_heart_icon.png */ \"./src/img/filled_heart_icon.png\");\n/* harmony import */ var _modules_TvmazeConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/TvmazeConnection.js */ \"./src/modules/TvmazeConnection.js\");\n/* harmony import */ var _modules_Render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Render.js */ \"./src/modules/Render.js\");\n/* harmony import */ var _modules_InvolvmentAPI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/InvolvmentAPI.js */ \"./src/modules/InvolvmentAPI.js\");\n/* harmony import */ var _CreateCommentDOM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateCommentDOM.js */ \"./src/CreateCommentDOM.js\");\n/* harmony import */ var _modules_CardsCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/CardsCounter.js */ \"./src/modules/CardsCounter.js\");\n\n\n\n\n\n\n\n\n\nconst listElement = document.getElementById('items-list');\nconst itemsContainer = document.querySelector('.items-container');\nconst tvMazeConnection = new _modules_TvmazeConnection_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst involvementConnection = new _modules_InvolvmentAPI_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nconst render = new _modules_Render_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](listElement);\nconst cardsCounter = new _modules_CardsCounter_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n\nwindow.addEventListener('load', async () => {\n  const itemsToRender = await tvMazeConnection.getMoviesByTopic('planet');\n  const likes = await involvementConnection.getLikes();\n  render.show(itemsToRender, likes);\n  const cardsCount = cardsCounter.getCount(document);\n  document.querySelector('.movies').textContent = `(${cardsCount})`;\n\n  const commentButtons = document.querySelectorAll('.card-button');\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', async () => {\n      const popUp = document.createElement('article');\n      popUp.classList.add('pop-up-container');\n      const movieData = await tvMazeConnection.getSingleMovie(\n        button.parentElement.parentElement.id,\n      );\n      let comments = await involvementConnection.getComments(\n        button.parentElement.parentElement.id,\n      );\n      let commentSection = (0,_CreateCommentDOM_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(comments);\n      popUp.innerHTML = `\n      <section class=\"info-container scroll\">\n            <img class=\"cross\" src=\"https://cdn-icons-png.flaticon.com/512/1828/1828774.png\" alt=\"\">\n            <img class=\"movie-preview\" src=\"${movieData.image.original}\" alt=\"\">\n            <h2 class=\"movie-name\">${movieData.name}</h2>\n            <ul class=\"list-ingredients\">\n                <li class=\"ingredient\">Language: ${movieData.language}</li>\n                <li class=\"ingredient\">Status: ${movieData.status}</li>\n                <li class=\"ingredient\">Release: ${movieData.premiered}</li>\n                <li class=\"ingredient\"><a href=\"${movieData.officialSite}\" target=\"blank\">Official Site</a></li>\n            </ul>\n            <form class=\"add-comment-form\">\n                <h3 class=\"add-comment-title\" >Add a comment</h3>\n                <input class=\"input-name\" type=\"text\" placeholder=\"Name\" required>\n                <textarea class=\"comment-area\" placeholder=\"Leave a comment\" required></textarea>\n                <button class=\"submit-comment\">Comment</button>\n            </form>\n        </section>`;\n      popUp.children[0].insertBefore(commentSection, popUp.children[0].children[4]);\n      const body = document.querySelector('body');\n      body.appendChild(popUp);\n      const closeCross = document.querySelector('.cross');\n      closeCross.addEventListener('click', () => {\n        body.removeChild(popUp);\n        body.classList.remove('no-scroll');\n      });\n      body.classList.add('no-scroll');\n\n      const submitComment = document.querySelector('.add-comment-form');\n      submitComment.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        const movieId = button.parentElement.parentElement.id;\n        const name = document.querySelector('.input-name');\n        const comment = document.querySelector('.comment-area');\n        await involvementConnection.postComment(movieId, name.value, comment.value);\n        name.value = '';\n        comment.value = '';\n\n        comments = await involvementConnection.getComments(\n          button.parentElement.parentElement.id,\n        );\n        commentSection = (0,_CreateCommentDOM_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(comments);\n        const oldComments = document.querySelector('.list-comments');\n        oldComments.replaceWith(commentSection);\n      });\n    });\n  });\n});\n\nitemsContainer.addEventListener('click', async (e) => {\n  const { target } = e;\n  const classList = [...target.classList];\n  if (classList.includes('card-heart')) {\n    const { id } = target.dataset;\n    target.classList.add('heart-beat');\n    const resStatus = await involvementConnection.postLike(id);\n    if (resStatus === 201) {\n      target.src = _img_filled_heart_icon_png__WEBPACK_IMPORTED_MODULE_2__;\n      const likesCounter = target.nextElementSibling.firstElementChild;\n      const newCount = parseInt(likesCounter.textContent, 10) + 1;\n      likesCounter.textContent = newCount;\n    }\n    target.classList.remove('heart-beat');\n  }\n});\n\n\n//# sourceURL=webpack://gallery/./src/index.js?");

/***/ }),

/***/ "./src/modules/CardsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/CardsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardsCounter)\n/* harmony export */ });\nclass CardsCounter {\n  getCount = (html) => {\n    if (!html) return 0;\n    if (!html.querySelectorAll) return 0;\n    const nodes = html.querySelectorAll('.card');\n    if (!nodes) return 0;\n    const nodesArray = [...nodes];\n    return nodesArray.length;\n  };\n}\n\n\n//# sourceURL=webpack://gallery/./src/modules/CardsCounter.js?");

/***/ }),

/***/ "./src/modules/InvolvmentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/InvolvmentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementAPI)\n/* harmony export */ });\nclass InvolvementAPI {\n  constructor() {\n    this.baseURL = 'http://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n    this.key = 'sbAXco2RU8G9aeKC1vW3';\n  }\n\n  getComments = async (itemId) => {\n    try {\n      const res = await fetch(\n        `${this.baseURL}/apps/${this.key}/comments?item_id=${itemId}`,\n      );\n      const data = await res.json();\n      return data;\n    } catch (err) {\n      return err;\n    }\n  };\n\n  postComment = async (id, name, text) => {\n    try {\n      const res = await fetch(`${this.baseURL}/apps/${this.key}/comments`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: id,\n          username: name,\n          comment: text,\n        }),\n      });\n      const data = await res.json();\n      return data;\n    } catch (err) {\n      return err;\n    }\n  };\n\n  getLikes = async () => {\n    const res = await fetch(`${this.baseURL}/apps/${this.key}/likes`);\n    const data = await res.json();\n    return data;\n  };\n\n  postLike = async (id) => {\n    const res = await fetch(`${this.baseURL}/apps/${this.key}/likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: id }),\n    });\n    return res.status;\n  }\n}\n\n\n//# sourceURL=webpack://gallery/./src/modules/InvolvmentAPI.js?");

/***/ }),

/***/ "./src/modules/Render.js":
/*!*******************************!*\
  !*** ./src/modules/Render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _img_empty_heart_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/empty_heart_icon.png */ \"./src/img/empty_heart_icon.png\");\n\n\nclass Render {\n  constructor(parentElement) {\n    this.parentElement = parentElement;\n  }\n\n  findLikes = (id, likes) => {\n    const item = likes.find((movie) => parseInt(movie.item_id, 10) === id);\n    if (item) return item.likes;\n    return 0;\n  };\n\n  show = (list, likes) => {\n    let listItems = '';\n    list.forEach((item) => {\n      listItems += `\\\n      <li id=\"${item.show.externals.thetvdb}\" class=\"card\">\\\n        <img class=\"card-img\" src=${item.show.image.medium}>\n        <div class=\"card-info-container\">\n          <p class=\"card-title\">${item.show.name}</p>\n          <div class=\"card-likes-container\">\n            <img class=\"card-heart\" src=${_img_empty_heart_icon_png__WEBPACK_IMPORTED_MODULE_0__} data-id=${item.show.externals.thetvdb}>\n            <p class=\"card-likes-text\">\\\n              <span>${this.findLikes(item.show.externals.thetvdb, likes)}</span>\\\n              likes\\\n            </p>\n          </div>\n        </div>\n        <div class=\"card-buttons-container\">\n          <button type=\"button\" class=\"card-button\">Comments</button>\n          <button type=\"button\" class=\"card-button\">Reservation</button>\n        </div>    \n      </li>`;\n    });\n    this.parentElement.innerHTML = listItems;\n  };\n}\n\n\n//# sourceURL=webpack://gallery/./src/modules/Render.js?");

/***/ }),

/***/ "./src/modules/TvmazeConnection.js":
/*!*****************************************!*\
  !*** ./src/modules/TvmazeConnection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TvmazeConnection)\n/* harmony export */ });\nclass TvmazeConnection {\n  constructor() {\n    this.apiURL = 'http://api.tvmaze.com/search/shows?q=';\n    this.specificMovieURL = 'http://api.tvmaze.com/lookup/shows?thetvdb=';\n  }\n\n  getMoviesByTopic = async (topic) => {\n    const res = await fetch(`${this.apiURL}${topic}`);\n    const data = await res.json();\n    return data;\n  };\n\n  getSingleMovie = async (id) => {\n    const res = await fetch(`${this.specificMovieURL}${id}`);\n    const data = await res.json();\n    return data;\n  }\n}\n\n\n//# sourceURL=webpack://gallery/./src/modules/TvmazeConnection.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentCounter)\n/* harmony export */ });\nfunction commentCounter(DOMContainer) {\n  if ((!DOMContainer) || (!DOMContainer.children)) return 0;\n  let count = 0;\n  for (let i = 0; i < DOMContainer.children.length; i += 1) {\n    if (DOMContainer.children[i].classList.contains('comment')) count += 1;\n  }\n  return count;\n}\n\n\n//# sourceURL=webpack://gallery/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/img/clapperboard.png":
/*!**********************************!*\
  !*** ./src/img/clapperboard.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7cdc591c030fe3ac7933.png\";\n\n//# sourceURL=webpack://gallery/./src/img/clapperboard.png?");

/***/ }),

/***/ "./src/img/empty_heart_icon.png":
/*!**************************************!*\
  !*** ./src/img/empty_heart_icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b2af4ae45bc6d7911e2.png\";\n\n//# sourceURL=webpack://gallery/./src/img/empty_heart_icon.png?");

/***/ }),

/***/ "./src/img/filled_heart_icon.png":
/*!***************************************!*\
  !*** ./src/img/filled_heart_icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc81525b0431124ece37.png\";\n\n//# sourceURL=webpack://gallery/./src/img/filled_heart_icon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;