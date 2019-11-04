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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card-maker.js":
/*!***************************!*\
  !*** ./src/card-maker.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lit_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-element.js */ \"./src/lit-element.js\");\n/* harmony import */ var _lovelace_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lovelace-element.js */ \"./src/lovelace-element.js\");\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass.js */ \"./src/hass.js\");\n\n\n\n\nclass ThingMaker extends _lit_element_js__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n  static get properties() {\n    return {\n      'hass': {},\n      'config': {},\n      'noHass': {type: Boolean },\n    };\n  }\n  setConfig(config) {\n    this._config = config;\n    if(!this.el)\n      this.el = this.create(config);\n    else\n      this.el.setConfig(config);\n    if(this._hass) this.el.hass = this._hass;\n    if(this.noHass) Object(_hass_js__WEBPACK_IMPORTED_MODULE_2__[\"provideHass\"])(this);\n  }\n  set config(config) {\n    this.setConfig(config);\n  }\n  set hass(hass) {\n    this._hass = hass;\n    if(this.el) this.el.hass = hass;\n  }\n\n  createRenderRoot() {\n    return this;\n  }\n  render() {\n    return _lit_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`${this.el}`;\n  }\n}\n\nif(!customElements.get(\"card-maker\")) {\n  class CardMaker extends ThingMaker {\n    create(config) {\n      return Object(_lovelace_element_js__WEBPACK_IMPORTED_MODULE_1__[\"createCard\"])(config);\n    }\n  }\n  customElements.define(\"card-maker\", CardMaker);\n}\n\nif(!customElements.get(\"element-maker\")) {\n  class ElementMaker extends ThingMaker {\n    create(config) {\n      return Object(_lovelace_element_js__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(config);\n    }\n  }\n  customElements.define(\"element-maker\", ElementMaker);\n}\n\nif(!customElements.get(\"entity-row-maker\")) {\n  class EntityRowMaker extends ThingMaker {\n    create(config) {\n      return Object(_lovelace_element_js__WEBPACK_IMPORTED_MODULE_1__[\"createEntityRow\"])(config);\n    }\n  }\n  customElements.define(\"entity-row-maker\", EntityRowMaker);\n}\n\n\n//# sourceURL=webpack:///./src/card-maker.js?");

/***/ }),

/***/ "./src/deviceID.js":
/*!*************************!*\
  !*** ./src/deviceID.js ***!
  \*************************/
/*! exports provided: deviceID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deviceID\", function() { return deviceID; });\nfunction _deviceID() {\n  const ID_STORAGE_KEY = 'lovelace-player-device-id';\n  if(window['fully'] && typeof fully.getDeviceId === \"function\")\n    return fully.getDeviceId();\n  if(!localStorage[ID_STORAGE_KEY])\n  {\n    const s4 = () => {\n      return Math.floor((1+Math.random())*100000).toString(16).substring(1);\n    }\n    localStorage[ID_STORAGE_KEY] = `${s4()}${s4()}-${s4()}${s4()}`;\n  }\n  return localStorage[ID_STORAGE_KEY];\n};\n\nlet deviceID = _deviceID();\n\n\n//# sourceURL=webpack:///./src/deviceID.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: fireEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireEvent\", function() { return fireEvent; });\nfunction fireEvent(ev, detail, entity=null) {\n  ev = new Event(ev, {\n    bubbles: true,\n    cancelable: false,\n    composed: true,\n  });\n  ev.detail = detail || {};\n  if(entity) {\n    entity.dispatchEvent(ev);\n  } else {\n    var root = document.querySelector(\"home-assistant\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"home-assistant-main\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n    root = root && root.shadowRoot || root;\n    root = root && root.querySelector(\"ha-panel-lovelace\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hui-root\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"ha-app-layout #view\");\n    root = root && root.firstElementChild;\n    if (root) root.dispatchEvent(ev);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/event.js?");

/***/ }),

/***/ "./src/hass.js":
/*!*********************!*\
  !*** ./src/hass.js ***!
  \*********************/
/*! exports provided: hass, provideHass, lovelace, lovelace_view, load_lovelace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hass\", function() { return hass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provideHass\", function() { return provideHass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace\", function() { return lovelace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace_view\", function() { return lovelace_view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load_lovelace\", function() { return load_lovelace; });\nfunction hass() {\n  return document.querySelector('home-assistant').hass\n};\n\nfunction provideHass(element) {\n  return document.querySelector(\"home-assistant\").provideHass(element);\n}\n\nfunction lovelace() {\n  var root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\")\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\")\n  if (root) {\n    var ll =  root.lovelace\n    ll.current_view = root.___curView;\n    return ll;\n  }\n  return null;\n}\n\nfunction lovelace_view() {\n  var root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"ha-app-layout #view\");\n  root = root && root.firstElementChild;\n  return root;\n}\n\nfunction load_lovelace() {\n  if(customElements.get(\"hui-view\")) return true;\n\n  const res = document.createElement(\"partial-panel-resolver\");\n  res.hass = hass();\n  res.route = {path: \"/lovelace/\"};\n  // res._updateRoutes();\n  try {\n    document.querySelector(\"home-assistant\").appendChild(res).catch((error) => {});\n  } catch (error) {\n    document.querySelector(\"home-assistant\").removeChild(res);\n  }\n  if(customElements.get(\"hui-view\")) return true;\n  return false;\n\n}\n\n\n//# sourceURL=webpack:///./src/hass.js?");

/***/ }),

/***/ "./src/lit-element.js":
/*!****************************!*\
  !*** ./src/lit-element.js ***!
  \****************************/
/*! exports provided: LitElement, html, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LitElement\", function() { return LitElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\nconst LitElement = customElements.get('home-assistant-main') ? Object.getPrototypeOf(customElements.get('home-assistant-main')) : Object.getPrototypeOf(customElements.get('hui-view'));\n\nconst html = LitElement.prototype.html;\n\nconst css = LitElement.prototype.css;\n\n\n//# sourceURL=webpack:///./src/lit-element.js?");

/***/ }),

/***/ "./src/long-press.js":
/*!***************************!*\
  !*** ./src/long-press.js ***!
  \***************************/
/*! exports provided: longpress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"longpress\", function() { return longpress; });\nfunction longpress(element) {\n  customElements.whenDefined(\"long-press\").then(() => {\n    const longpress = document.body.querySelector(\"long-press\");\n    longpress.bind(element);\n  });\n  customElements.whenDefined(\"action-handler\").then(() => {\n    const actionHandler = document.body.querySelector(\"action-handler\");\n    actionHandler.bind(element);\n  });\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/long-press.js?");

/***/ }),

/***/ "./src/lovelace-element.js":
/*!*********************************!*\
  !*** ./src/lovelace-element.js ***!
  \*********************************/
/*! exports provided: CUSTOM_TYPE_PREFIX, DOMAINS_HIDE_MORE_INFO, createCard, createElement, createEntityRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOM_TYPE_PREFIX\", function() { return CUSTOM_TYPE_PREFIX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMAINS_HIDE_MORE_INFO\", function() { return DOMAINS_HIDE_MORE_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEntityRow\", function() { return createEntityRow; });\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n\n\nconst CUSTOM_TYPE_PREFIX = \"custom:\";\n\nconst DOMAINS_HIDE_MORE_INFO = [\n  \"input_number\",\n  \"input_select\",\n  \"input_text\",\n  \"scene\",\n  \"weblink\",\n];\n\nfunction errorElement(error, config) {\n  const el = document.createElement(\"hui-error-card\");\n  el.setConfig({\n    type: \"error\",\n    error,\n    config,\n  });\n  return el;\n}\n\nfunction _createElement(tag, config) {\n  const el = document.createElement(tag);\n  try {\n    el.setConfig(config);\n  } catch (err) {\n    return errorElement(err, config);\n  }\n  return el;\n}\n\nfunction createLovelaceElement(thing, config) {\n  if(!config || typeof config !== \"object\" || !config.type)\n    return errorElement(`No ${thing} type configured`, config);\n\n  let tag = config.type;\n  if(tag.startsWith(CUSTOM_TYPE_PREFIX))\n    tag = tag.substr(CUSTOM_TYPE_PREFIX.length);\n  else\n    tag = `hui-${tag}-${thing}`;\n\n  if(customElements.get(tag))\n    return _createElement(tag, config);\n\n  const el = errorElement(`Custom element doesn't exist: ${tag}.`, config);\n  el.style.display = \"None\";\n\n  const timer = setTimeout(() => {\n    el.style.display = \"\";\n  }, 2000);\n\n  customElements.whenDefined(tag).then(() => {\n    clearTimeout(timer);\n    Object(_event_js__WEBPACK_IMPORTED_MODULE_0__[\"fireEvent\"])(\"ll-rebuild\", {}, el);\n  });\n\n  return el;\n}\n\nfunction createCard(config) {\n  return createLovelaceElement('card', config);\n}\nfunction createElement(config) {\n  return createLovelaceElement('element', config);\n}\nfunction createEntityRow(config) {\n  const SPECIAL_TYPES = new Set([\n    \"call-service\",\n    \"divider\",\n    \"section\",\n    \"weblink\",\n  ]);\n  const DEFAULT_ROWS = {\n    alert: \"toggle\",\n    automation: \"toggle\",\n    climate: \"climate\",\n    cover: \"cover\",\n    fan: \"toggle\",\n    group: \"group\",\n    input_boolean: \"toggle\",\n    input_number: \"input-number\",\n    input_select: \"input-select\",\n    input_text: \"input-text\",\n    light: \"toggle\",\n    lock: \"lock\",\n    media_player: \"media-player\",\n    remote: \"toggle\",\n    scene: \"scene\",\n    script: \"script\",\n    sensor: \"sensor\",\n    timer: \"timer\",\n    switch: \"toggle\",\n    vacuum: \"toggle\",\n    water_heater: \"climate\",\n    input_datetime: \"input-datetime\",\n  };\n\n  if(!config)\n    return errorElement(\"Invalid configuration given.\", config);\n  if(typeof config === \"string\")\n    config = {entity: config};\n  if(typeof config !== \"object\" || (!config.entity && !config.type))\n    return errorElement(\"Invalid configuration given.\", config);\n\n  const type = config.type || \"default\";\n  if(SPECIAL_TYPES.has(type) || type.startsWith(CUSTOM_TYPE_PREFIX))\n    return createLovelaceElement('row', config);\n\n  const domain = config.entity.split(\".\", 1)[0];\n  Object.assign(config, {type: DEFAULT_ROWS[domain] || \"text\"});\n\n  return createLovelaceElement('entity-row', config);\n}\n\n\n//# sourceURL=webpack:///./src/lovelace-element.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_maker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-maker.js */ \"./src/card-maker.js\");\n/* harmony import */ var _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceID.js */ \"./src/deviceID.js\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass.js */ \"./src/hass.js\");\n/* harmony import */ var _lit_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lit-element.js */ \"./src/lit-element.js\");\n/* harmony import */ var _long_press_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-press.js */ \"./src/long-press.js\");\n/* harmony import */ var _lovelace_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lovelace-element.js */ \"./src/lovelace-element.js\");\n/* harmony import */ var _more_info_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info.js */ \"./src/more-info.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates.js */ \"./src/templates.js\");\n/* harmony import */ var _old_templates_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./old-templates.js */ \"./src/old-templates.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardTools {\n\n  static checkVersion(v) {\n  }\n\n  static get deviceID() { return _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"]; }\n\n  static get fireEvent() { return _event_js__WEBPACK_IMPORTED_MODULE_2__[\"fireEvent\"]; }\n\n  static get hass() {\n    return Object(_hass_js__WEBPACK_IMPORTED_MODULE_3__[\"hass\"])();\n  }\n  static get lovelace() {\n    return Object(_hass_js__WEBPACK_IMPORTED_MODULE_3__[\"lovelace\"])();\n  }\n  static get lovelace_view() {\n    return Object(_hass_js__WEBPACK_IMPORTED_MODULE_3__[\"lovelace_view\"])();\n  }\n  static get provideHass() { return _hass_js__WEBPACK_IMPORTED_MODULE_3__[\"provideHass\"]; }\n  static get load_lovelace() { return _hass_js__WEBPACK_IMPORTED_MODULE_3__[\"load_lovelace\"]; }\n\n  static get LitElement() { return _lit_element_js__WEBPACK_IMPORTED_MODULE_4__[\"LitElement\"]; }\n  static get LitHtml() { return _lit_element_js__WEBPACK_IMPORTED_MODULE_4__[\"html\"]; }\n  static get LitCSS() { return _lit_element_js__WEBPACK_IMPORTED_MODULE_4__[\"css\"]; }\n\n  static get longpress() { return _long_press_js__WEBPACK_IMPORTED_MODULE_5__[\"longpress\"]; }\n\n  static get createCard() { return _lovelace_element_js__WEBPACK_IMPORTED_MODULE_6__[\"createCard\"]; }\n  static get createElement() { return _lovelace_element_js__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"]; }\n  static get createEntityRow() { return _lovelace_element_js__WEBPACK_IMPORTED_MODULE_6__[\"createEntityRow\"]; }\n\n  static get moreInfo() { return _more_info_js__WEBPACK_IMPORTED_MODULE_7__[\"moreInfo\"]; }\n\n  static get popUp() { return _popup_js__WEBPACK_IMPORTED_MODULE_8__[\"popUp\"]; }\n  static get closePopUp() { return _popup_js__WEBPACK_IMPORTED_MODULE_8__[\"closePopUp\"]; }\n\n  static get hasTemplate() { return _old_templates_js__WEBPACK_IMPORTED_MODULE_10__[\"hasOldTemplate\"]; }\n  static parseTemplate(hass, str, specialData = {}) {\n    if (typeof(hass) === \"string\")\n      return Object(_old_templates_js__WEBPACK_IMPORTED_MODULE_10__[\"parseOldTemplate\"])(hass, str);\n    return Object(_templates_js__WEBPACK_IMPORTED_MODULE_9__[\"parseTemplate\"])(hass, str, specialData);\n  }\n  static get subscribeRenderTemplate() { return _templates_js__WEBPACK_IMPORTED_MODULE_9__[\"subscribeRenderTemplate\"]; }\n\n}\n\ncustomElements.define(\"card-tools\", CardTools);\n\nwindow.cardTools = customElements.get('card-tools');\nconsole.info(`%cCARD-TOOLS 2 IS INSTALLED\n%cDeviceID: ${customElements.get('card-tools').deviceID}`,\n\"color: green; font-weight: bold\",\n\"\");\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/more-info.js":
/*!**************************!*\
  !*** ./src/more-info.js ***!
  \**************************/
/*! exports provided: moreInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moreInfo\", function() { return moreInfo; });\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n\n\nfunction moreInfo(entity, large=false) {\n  Object(_event_js__WEBPACK_IMPORTED_MODULE_0__[\"fireEvent\"])(\"hass-more-info\", {entityId: entity}, document.querySelector(\"home-assistant\"));\n  const el = document.querySelector(\"home-assistant\")._moreInfoEl;\n  el.large = large;\n  return el;\n}\n\n\n//# sourceURL=webpack:///./src/more-info.js?");

/***/ }),

/***/ "./src/old-templates.js":
/*!******************************!*\
  !*** ./src/old-templates.js ***!
  \******************************/
/*! exports provided: hasOldTemplate, parseOldTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOldTemplate\", function() { return hasOldTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOldTemplate\", function() { return parseOldTemplate; });\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass.js */ \"./src/hass.js\");\n/* harmony import */ var _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceID.js */ \"./src/deviceID.js\");\n\n\n\nfunction hasOldTemplate(text) {\n  return /\\[\\[\\s+.*\\s+\\]\\]/.test(text);\n}\n\nfunction parseTemplateString(str, specialData = {}) {\n  if(typeof(str) !== \"string\") return text;\n  const FUNCTION = /^[a-zA-Z0-9_]+\\(.*\\)$/;\n  const EXPR = /([^=<>!]+)\\s*(==|!=|<|>|<=|>=)\\s*([^=<>!]+)/;\n  const SPECIAL = /^\\{.+\\}$/;\n  const STRING = /^\"[^\"]*\"|'[^']*'$/;\n\n  if(typeof(specialData) === \"string\") specialData = {};\n  specialData = Object.assign({\n    user: Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().user.name,\n    browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"],\n    hash: location.hash.substr(1) || ' ',\n  }, specialData);\n\n  const _parse_function = (str) => {\n    let args = [str.substr(0, str.indexOf('(')).trim()]\n    str = str.substr(str.indexOf('(')+1);\n    while(str) {\n      let index = 0;\n      let parens = 0;\n      let quote = false;\n      while(str[index]) {\n        let c = str[index++];\n\n        if(c === quote && index > 1 && str[index-2] !== \"\\\\\")\n            quote = false;\n        else if(`\"'`.includes(c))\n          quote = c;\n        if(quote) continue;\n\n        if(c === '(')\n          parens = parens + 1;\n        else if(c === ')') {\n          parens = parens - 1;\n          continue\n        }\n        if(parens > 0) continue;\n\n        if(\",)\".includes(c)) break;\n      }\n      args.push(str.substr(0, index-1).trim());\n      str = str.substr(index);\n    }\n    return args;\n  };\n\n  const _parse_special = (str) => {\n    str = str.substr(1, str.length - 2);\n    return specialData[str] || `{${str}}`;\n  };\n\n  const _parse_entity = (str) => {\n    str = str.split(\".\");\n    let v;\n    if(str[0].match(SPECIAL)) {\n      v = _parse_special(str.shift());\n      v = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().states[v] || v;\n    } else {\n      v = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().states[`${str.shift()}.${str.shift()}`];\n      if(!str.length) return v['state'];\n    }\n    str.forEach(item => v=v[item]);\n    return v;\n  }\n\n  const _eval_expr = (str) => {\n    str = EXPR.exec(str);\n    if(str === null) return false;\n    const lhs = parseTemplateString(str[1]);\n    const rhs = parseTemplateString(str[3]);\n    var expr = ''\n    if(parseFloat(lhs) != lhs)\n      expr = `\"${lhs}\" ${str[2]} \"${rhs}\"`;\n    else\n      expr = `${parseFloat(lhs)} ${str[2]} ${parseFloat(rhs)}`\n    return eval(expr);\n  }\n\n  const _eval_function = (args) => {\n    if(args[0] === \"if\") {\n      if(_eval_expr(args[1]))\n        return parseTemplateString(args[2]);\n      return parseTemplateString(args[3]);\n    }\n  }\n\n  try {\n    str = str.trim();\n    if(str.match(STRING))\n      return str.substr(1, str.length - 2);\n    if(str.match(SPECIAL))\n      return _parse_special(str);\n    if(str.match(FUNCTION))\n      return _eval_function(_parse_function(str));\n    if(str.includes(\".\"))\n      return _parse_entity(str);\n    return str;\n  } catch (err) {\n    return `[[ Template matching failed: ${str} ]]`;\n  }\n}\n\nfunction parseOldTemplate(text, data = {}) {\n  if(typeof(text) !== \"string\") return text;\n  // Note: .*? is javascript regex syntax for NON-greedy matching\n  var RE_template = /\\[\\[\\s(.*?)\\s\\]\\]/g;\n  text = text.replace(RE_template, (str, p1, offset, s) => parseTemplateString(p1, data));\n  return text;\n}\n\n\n//# sourceURL=webpack:///./src/old-templates.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! exports provided: closePopUp, popUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closePopUp\", function() { return closePopUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popUp\", function() { return popUp; });\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass.js */ \"./src/hass.js\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n/* harmony import */ var _lovelace_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lovelace-element.js */ \"./src/lovelace-element.js\");\n/* harmony import */ var _more_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-info.js */ \"./src/more-info.js\");\n/* harmony import */ var _card_maker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-maker.js */ \"./src/card-maker.js\");\n\n\n\n\n\n\nfunction closePopUp() {\n  const moreInfoEl = document.querySelector(\"home-assistant\")._moreInfoEl;\n  if(moreInfoEl)\n    moreInfoEl.close();\n}\n\nfunction popUp(title, card, large=false, style=null, fullscreen=false) {\n\n  // Force _moreInfoEl to be loaded\n  Object(_event_js__WEBPACK_IMPORTED_MODULE_1__[\"fireEvent\"])(\"hass-more-info\", {entityId: null});\n  const moreInfoEl = document.querySelector(\"home-assistant\")._moreInfoEl;\n  // Close and reopen to clear any previous styling\n  // Necessary for popups from popups\n  moreInfoEl.close();\n  moreInfoEl.open();\n\n  const wrapper = document.createElement(\"div\");\n  wrapper.innerHTML = `\n  <style>\n    app-toolbar {\n      color: var(--more-info-header-color);\n      background-color: var(--more-info-header-background);\n    }\n    .scrollable {\n      overflow: auto;\n      max-width: 100% !important;\n    }\n  </style>\n  ${fullscreen\n    ? ``\n    : `\n      <app-toolbar>\n        <paper-icon-button\n          icon=\"hass:close\"\n          dialog-dismiss=\"\"\n        ></paper-icon-button>\n        <div class=\"main-title\" main-title=\"\">\n          ${title}\n        </div>\n      </app-toolbar>\n      `\n    }\n    <div class=\"scrollable\">\n      <card-maker nohass>\n      </card-maker>\n    </div>\n  `;\n\n  const scroll = wrapper.querySelector(\".scrollable\");\n  const content = scroll.querySelector(\"card-maker\");\n  content.config = card;\n\n  moreInfoEl.sizingTarget = scroll;\n  moreInfoEl.large = large;\n  moreInfoEl._page = \"none\"; // Display nothing by default\n  moreInfoEl.shadowRoot.appendChild(wrapper);\n\n  let oldStyle = {};\n  if(style) {\n    moreInfoEl.resetFit(); // Reset positioning to enable setting it via css\n    for (var k in style) {\n      oldStyle[k] = moreInfoEl.style[k];\n      moreInfoEl.style.setProperty(k, style[k]);\n    }\n  }\n\n  moreInfoEl._dialogOpenChanged = function(newVal) {\n    if (!newVal) {\n      if(this.stateObj)\n        this.fire(\"hass-more-info\", {entityId: null});\n\n      if (this.shadowRoot == wrapper.parentNode) {\n        this._page = null;\n        this.shadowRoot.removeChild(wrapper);\n        if(style) {\n          moreInfoEl.resetFit();\n          for (var k in oldStyle)\n            if (oldStyle[k])\n              moreInfoEl.style.setProperty(k, oldStyle[k]);\n            else\n              moreInfoEl.style.removeProperty(k);\n        }\n      }\n    }\n  }\n\n  return moreInfoEl;\n}\n\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/*! exports provided: parseTemplate, subscribeRenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTemplate\", function() { return parseTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribeRenderTemplate\", function() { return subscribeRenderTemplate; });\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass.js */ \"./src/hass.js\");\n/* harmony import */ var _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceID.js */ \"./src/deviceID.js\");\n\n\n\nasync function parseTemplate(hass, str, specialData = {}) {\n  if (!hass) hass = hass();\n  if (typeof(specialData === \"string\")) specialData = {};\n    specialData = Object.assign({\n      user: hass.user.name,\n      browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"],\n      hash: location.hash.substr(1) || ' ',\n    },\n    specialData);\n\n    for (var k in specialData) {\n      var re = new RegExp(`\\\\{${k}\\\\}`, \"g\");\n      str = str.replace(re, specialData[k]);\n    }\n\n    return hass.callApi(\"POST\", \"template\", {template: str});\n};\n\nfunction subscribeRenderTemplate(conn, onChange, params) {\n  // params = {template, entity_ids, variables}\n  if(!conn)\n    conn = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().connection;\n  let variables = {\n    user: Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().user.name,\n    browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"],\n    hash: location.hash.substr(1) || ' ',\n    ...params.variables,\n  };\n  let template = params.template;\n  let entity_ids = params.entity_ids;\n\n  return conn.subscribeMessage(\n    (msg) => onChange(msg.result),\n    { type: \"render_template\",\n      template,\n      variables,\n      entity_ids,\n    }\n  );\n};\n\n\n//# sourceURL=webpack:///./src/templates.js?");

/***/ })

/******/ });