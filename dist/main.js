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

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _contact_icons_white_phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/icons/white_phone.png */ \"./src/contact/icons/white_phone.png\");\n/* harmony import */ var _contact_icons_white_email_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact/icons/white_email.png */ \"./src/contact/icons/white_email.png\");\n/* harmony import */ var _contact_icons_white_restaurant_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/icons/white_restaurant.png */ \"./src/contact/icons/white_restaurant.png\");\n/* harmony import */ var _contact_imgs_map_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/imgs/map.png */ \"./src/contact/imgs/map.png\");\n\n\n\n\n\nfunction loadContact() {\n    const content = document.getElementById('content');\n    // Contact\n    const contact = document.createElement('div');\n    const contactInfo = document.createElement('div');\n    const contactTxt = document.createElement('h2');\n    const infoWrapper = document.createElement('div');\n    \n    const phone = document.createElement('div');\n    const phoneIcon = new Image();\n    const phoneTxt = document.createElement('span');\n\n    const email = document.createElement('div');\n    const emailIcon = new Image();\n    const emailTxt = document.createElement('span');\n\n    const address = document.createElement('div');\n    const addressIcon = new Image();\n    const addressTxt = document.createElement('span');\n\n    const map = new Image();\n\n    phoneIcon.src = _contact_icons_white_phone_png__WEBPACK_IMPORTED_MODULE_0__;\n    emailIcon.src = _contact_icons_white_email_png__WEBPACK_IMPORTED_MODULE_1__;\n    addressIcon.src = _contact_icons_white_restaurant_png__WEBPACK_IMPORTED_MODULE_2__;\n    map.src = _contact_imgs_map_png__WEBPACK_IMPORTED_MODULE_3__;\n\n    contact.setAttribute('id', 'contact');\n    contactInfo.setAttribute('id', 'contact-info');\n    infoWrapper.setAttribute('id', 'info-wrapper');\n    phone.setAttribute('id', 'phone');\n    email.setAttribute('id', 'email');\n    map.setAttribute('id', 'map');\n\n    contactTxt.innerHTML = 'Contact Us';\n    phoneTxt.innerHTML = '123-456-789';\n    emailTxt.innerHTML = 'eat@pizzeria.com';\n    addressTxt.innerHTML = '13/58 Head St, Braitling NT 0870';\n\n    phone.appendChild(phoneIcon);\n    phone.appendChild(phoneTxt);\n\n    email.appendChild(emailIcon);\n    email.appendChild(emailTxt);\n\n    address.appendChild(addressIcon);\n    address.appendChild(addressTxt);\n\n    infoWrapper.appendChild(phone);\n    infoWrapper.appendChild(email);\n    infoWrapper.appendChild(address);\n    \n    contactInfo.appendChild(infoWrapper);\n    contactInfo.appendChild(map);\n    contact.appendChild(contactTxt);\n    contact.appendChild(contactInfo);\n    content.appendChild(contact);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact/contact.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _src_home_imgs_Giacomo_400px_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/home/imgs/Giacomo-400px.jpg */ \"./src/home/imgs/Giacomo-400px.jpg\");\n\n\nfunction loadHome() {\n    const content = document.getElementById('content');\n\n    // Menu\n    const container = document.createElement('div');\n    const textContainer = document.createElement('div');\n    \n    const para1 = document.createElement('p');\n    const para2 = document.createElement('p');\n    const para3 = document.createElement('p');\n    const para4 = document.createElement('p');\n    const para5 = document.createElement('p');\n\n    const picture = new Image();\n    picture.src = _src_home_imgs_Giacomo_400px_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    para1.innerHTML = 'Welcome to our pizzeria!';\n    para2.innerHTML = 'We are a family-owned and operated restaurant located in the heart of downtown. Our passion for pizza started at a young age, and we have been perfecting our craft for over 20 years.';\n    para3.innerHTML = 'At our pizzeria, we use only the freshest ingredients to create our hand-tossed, wood-fired pizzas. From our classic margherita to our creative specialty pies, there is something for everyone on our menu. In addition to pizza, we also offer a variety of salads, sandwiches, and appetizers';\n    para4.innerHTML = 'Our restaurant has a warm and inviting atmosphere, perfect for a casual dinner with friends or a special occasion.';\n    para5.innerHTML = 'Thank you for choosing our pizzeria. We look forward to serving you and your loved ones delicious pizza and other dishes made with love.';\n\n    container.setAttribute('id', 'home');\n    textContainer.setAttribute('id', 'text');\n    \n    textContainer.appendChild(para1);\n    textContainer.appendChild(para2);\n    textContainer.appendChild(para3);\n    textContainer.appendChild(para4);\n    textContainer.appendChild(para5);\n\n    container.appendChild(textContainer);\n    container.appendChild(picture);\n    content.appendChild(container);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact */ \"./src/contact/contact.js\");\n\n\n\nconst content = document.getElementById('content');\n\n// displayContact();\nfunction clearDisplay() {\n    while(content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\nfunction displayHeader(active) {\n    const header = document.createElement('header');\n    const logo = document.createElement('h1');\n    const nav = document.createElement('nav');\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n\n    logo.innerHTML = 'Pizzeria';\n    homeBtn.innerHTML = 'Home';\n    menuBtn.innerHTML = 'Menu';\n    contactBtn.innerHTML = 'Contact';\n\n    if(active === 'home') {\n        homeBtn.classList.add('active');\n    } else if(active === 'menu') {\n        menuBtn.classList.add('active');\n    } else if(active === 'contact') {\n        contactBtn.classList.add('active');\n    }\n\n    homeBtn.setAttribute('id', 'home-btn');\n    menuBtn.setAttribute('id', 'menu-btn');\n    contactBtn.setAttribute('id', 'contact-btn');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    header.appendChild(logo);\n    header.appendChild(nav);\n\n    content.appendChild(header);\n\n    homeBtn.addEventListener('click', () =>{\n        clearDisplay();\n        displayHome();\n    })\n    \n    contactBtn.addEventListener('click', () =>{\n        clearDisplay();\n        displayContact();\n    })\n}\n\nfunction displayFooter() {\n    const footer = document.createElement('footer');\n    const footerLogo = document.createElement('h2');\n    \n    footerLogo.innerHTML = 'Pizzeria';\n\n    footer.appendChild(footerLogo);\n    content.appendChild(footer);\n}\n\nfunction displayHome() {\n    displayHeader('home');\n    (0,_home_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    displayFooter();\n}\n\nfunction displayContact() {\n    displayHeader('contact');\n    (0,_contact_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    displayFooter();\n}\n\n\ndisplayHome();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/contact/icons/white_email.png":
/*!*******************************************!*\
  !*** ./src/contact/icons/white_email.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c512b294c279d4a98a1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact/icons/white_email.png?");

/***/ }),

/***/ "./src/contact/icons/white_phone.png":
/*!*******************************************!*\
  !*** ./src/contact/icons/white_phone.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9233f1f13a8e6dafd9d1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact/icons/white_phone.png?");

/***/ }),

/***/ "./src/contact/icons/white_restaurant.png":
/*!************************************************!*\
  !*** ./src/contact/icons/white_restaurant.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9f213eb94d383cd6379.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact/icons/white_restaurant.png?");

/***/ }),

/***/ "./src/contact/imgs/map.png":
/*!**********************************!*\
  !*** ./src/contact/imgs/map.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec5271f6c60cd82151ec.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact/imgs/map.png?");

/***/ }),

/***/ "./src/home/imgs/Giacomo-400px.jpg":
/*!*****************************************!*\
  !*** ./src/home/imgs/Giacomo-400px.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4442cec774f0afaeea3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home/imgs/Giacomo-400px.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;