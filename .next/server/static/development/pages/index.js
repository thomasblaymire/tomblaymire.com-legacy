module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Button.js";


var PrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__PrimaryButton",
  componentId: "sc-1mbgncw-0"
})(["background-color:#05af43;font-size:1.6rem;padding:10px 30px;color:#fff;border:solid 2px #05af43;border-radius:5px;font-family:'Poppins',sans-serif;cursor:pointer;width:200px;&:hover{background-color:#05da53;border:solid 2px #05da53;}"]);
var SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__SecondaryButton",
  componentId: "sc-1mbgncw-1"
})(["background-color:transparent;font-size:1.6rem;padding:10px 30px;color:#fff;border:solid 2px white;border-radius:5px;font-family:'Poppins',sans-serif;cursor:pointer;width:200px;&:hover{color:red;background-color:#fff;}"]);

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.type === 'primary' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrimaryButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, props.children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondaryButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ExpertiseCard.js":
/*!*************************************!*\
  !*** ./components/ExpertiseCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/ExpertiseCard.js";


var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ExpertiseCard__Block",
  componentId: "sc-1ipbg70-0"
})(["width:100%;.title{color:#2a363b;}.description{line-height:30px;color:#494949;font-family:'Source Sans Pro',sans-serif;font-size:1.8rem;}.seperator{margin-top:27px;margin-bottom:27px;}.divide{width:20%;height:2px;background-color:#2a363b;display:block;content:'';}.icon{width:5rem;fill:#3eaca8;}"]);

var ExpertiseCard = function ExpertiseCard(props) {
  var title = props.title,
      description = props.description,
      icon = props.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon",
    src: icon,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seperator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (ExpertiseCard);

/***/ }),

/***/ "./components/FullWidthCta.js":
/*!************************************!*\
  !*** ./components/FullWidthCta.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/ctaImage1.jpg */ "./static/ctaImage1.jpg");
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/FullWidthCta.js";



var BackgroudImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FullWidthCta__BackgroudImage",
  componentId: "sc-75f1a5-0"
})(["background-image:url(", ");background-repeat:repeat;background-size:cover;background-position:center center;background-attachment:scroll;padding-top:8%;padding-bottom:8%;"], _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
var BackgroundText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "FullWidthCta__BackgroundText",
  componentId: "sc-75f1a5-1"
})(["color:#fff;text-align:center;font-family:Poppins;letter-spacing:-0.02em;font-weight:700;font-style:normal;margin:0;font-size:4.5rem;"]);

var FullWidthCta = function FullWidthCta(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroudImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroundText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (FullWidthCta);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Header.js";




var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1stxykk-0"
})([".bar{width:1170px;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:2rem 0rem;}"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/me.jpg */ "./static/me.jpg");
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_me_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Hero.js";





var HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroImage",
  componentId: "sc-1oj9b8p-0"
})(["background-image:url(", ");background-size:cover;min-height:100vh;"], _static_me_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroContainer",
  componentId: "sc-1oj9b8p-1"
})(["width:1170px;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroBlock",
  componentId: "sc-1oj9b8p-2"
})(["color:#fff;margin-top:11rem;width:60%;.intro{font-size:5.5rem;margin:0;}.description{font-size:2.5rem;line-height:38px;font-weight:300;}"]);
var HeroButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroButtons",
  componentId: "sc-1oj9b8p-3"
})(["margin-top:8rem;display:flex;& > *{padding-right:2rem;}a{color:#ffffff;text-decoration:none;font-weight:normal;}"]);

var Hero = function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Hello, I'm Tom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "I\u2019m a Freelance (UI/UX) Software Engineer based in Leeds. I help companies deliver innovative, end-to-end products that meet both user and business needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "My Work"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Let's Talk"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/logo.png */ "./static/logo.png");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Logo.js";




var LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Logo__LogoImg",
  componentId: "mybl0u-0"
})(["width:5rem;cursor:pointer;"]);

var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImg, {
    src: _static_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Nav.js";




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Portfolio/PortfolioItem.js":
/*!***********************************************!*\
  !*** ./components/Portfolio/PortfolioItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Portfolio/PortfolioItem.js";



var PortfolioBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})([".portfolio-image{width:380px;height:300px;margin-right:30px;position:relative;&:hover{cursor:pointer;}}"]);
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([".portfolio-title{font-family:Poppins;letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:#2a363b;cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;}li{color:#474747;margin-right:1rem;background:#dadada;border-radius:5px;padding:0 10px;}"]);

var PortfolioItem = function PortfolioItem(props) {
  var image = props.image,
      name = props.name,
      tags = props.tags;
  var tagList = tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, tag);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/portfolio',
      query: {
        id: name
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "portfolio-image",
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, tagList)))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ }),

/***/ "./components/Portfolio/PortfolioList.js":
/*!***********************************************!*\
  !*** ./components/Portfolio/PortfolioList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PortfolioItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortfolioItem */ "./components/Portfolio/PortfolioItem.js");
/* harmony import */ var _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/port-pad.jpg */ "./static/port-pad.jpg");
/* harmony import */ var _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/port-gpws.jpg */ "./static/port-gpws.jpg");
/* harmony import */ var _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/port-careers.jpg */ "./static/port-careers.jpg");
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Portfolio/PortfolioList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PortfolioItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioList__PortfolioItems",
  componentId: "sc-6df1tk-0"
})([""]);

var PortfolioList =
/*#__PURE__*/
function (_Component) {
  _inherits(PortfolioList, _Component);

  function PortfolioList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PortfolioList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PortfolioList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      portfolioItems: [{
        id: 1,
        image: _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        name: 'GP Web Solutions',
        tags: ['Angular JS', 'HTML5', 'CSS3', 'Jasmine']
      }, {
        id: 2,
        image: _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        name: 'Product Analysis Dashboard',
        tags: ['React', 'Redux', 'Styled Components', 'Jest']
      }, {
        id: 3,
        image: _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        name: 'Hermes Careers',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development']
      }, {
        id: 4,
        image: _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        name: 'Hermes Careers',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development']
      }]
    });

    return _this;
  }

  _createClass(PortfolioList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.amount);
    }
  }, {
    key: "render",
    value: function render() {
      var portfolioItems = this.state.portfolioItems.slice(0, this.props.amount).map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: item.id,
          image: item.image,
          name: item.name,
          tags: item.tags,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, portfolioItems);
    }
  }]);

  return PortfolioList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioList);

/***/ }),

/***/ "./components/SocialLinks.js":
/*!***********************************!*\
  !*** ./components/SocialLinks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/SocialLinks.js";


var SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__SocialWrapper",
  componentId: "bmn958-0"
})(["display:flex;& > div{width:100%;height:350px;display:flex;align-items:center;justify-content:center;}"]);
var GetInTouch = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__GetInTouch",
  componentId: "bmn958-1"
})(["background-color:#e5eec1;"]);
var Facebook = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__Facebook",
  componentId: "bmn958-2"
})(["background-color:#a0d5aa;"]);
var Twitter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__Twitter",
  componentId: "bmn958-3"
})(["background-color:#537a83;"]);
var Instagram = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__Instagram",
  componentId: "bmn958-4"
})(["background-color:#2a363b;"]);

var SocialLinks = function SocialLinks() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GetInTouch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Free Quote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Facebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Twitter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "T"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Instagram, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "I"));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "bpb6y7-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:'Poppins';letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:#ffffff;padding:25px 15px;&:hover{color:#3eaca8;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/PageStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/PageStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PageStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PageStyles",
  componentId: "sc-1dspmwg-0"
})(["height:auto;min-height:100vh;.heading{font-family:Poppins;letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:4.5rem;margin:0;}.sub-heading{font-family:Poppins;font-size:2rem;color:#2a363b;margin:0;}.container{max-width:1170px;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PageStyles);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portfolio/PortfolioList */ "./components/Portfolio/PortfolioList.js");
/* harmony import */ var _components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExpertiseCard */ "./components/ExpertiseCard.js");
/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialLinks */ "./components/SocialLinks.js");
/* harmony import */ var _components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FullWidthCta */ "./components/FullWidthCta.js");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/man-phone.jpg */ "./static/man-phone.jpg");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_rocket_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/rocket.svg */ "./static/rocket.svg");
/* harmony import */ var _static_rocket_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_rocket_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/keyboard.svg */ "./static/keyboard.svg");
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_keyboard_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/laptop.svg */ "./static/laptop.svg");
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_laptop_svg__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/pages/index.js";













var Expertise = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Expertise",
  componentId: "sc-1lwpsg5-0"
})(["padding-top:10rem;padding-bottom:10rem;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-2"
})(["height:100vh;background-color:#e5eec1;display:flex;"]);
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-3"
})(["width:50%;padding-top:35px;padding-right:6%;padding-bottom:35px;padding-left:6%;color:#494949;p{margin:0 0 20px;}"]);
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-4"
})(["width:50%;background-image:url(", ");background-position:0px 13.0102px;background-attachment:fixed;background-size:cover;height:100%;"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-5"
})(["height:100vh;p{width:70%;}"]);
var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PortfolioWrapper",
  componentId: "sc-1lwpsg5-6"
})(["& > *{display:flex;align-items:center;justify-content:space-between;margin-top:5rem;}"]);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expertise, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "My expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpertiseRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, CSS3, React and Redux to to ensure the end product is fast and easy to use.",
    icon: _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.",
    icon: _static_rocket_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.",
    icon: _static_laptop_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "I live and work in Leeds UK."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "I also post regular helpful articles around startups, web design and user experience.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Recent projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    amount: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/ctaImage1.jpg":
/*!******************************!*\
  !*** ./static/ctaImage1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ctaImage1-fb4579535992ebf2f746a10bebf6f375.jpg";

/***/ }),

/***/ "./static/keyboard.svg":
/*!*****************************!*\
  !*** ./static/keyboard.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3LjUgMTZoLTE2Yy0wLjgyNyAwLTEuNS0wLjY3My0xLjUtMS41di04YzAtMC44MjcgMC42NzMtMS41IDEuNS0xLjVoMTZjMC44MjcgMCAxLjUgMC42NzMgMS41IDEuNXY4YzAgMC44MjctMC42NzMgMS41LTEuNSAxLjV6TTEuNSA2Yy0wLjI3NiAwLTAuNSAwLjIyNC0wLjUgMC41djhjMCAwLjI3NiAwLjIyNCAwLjUgMC41IDAuNWgxNmMwLjI3NiAwIDAuNS0wLjIyNCAwLjUtMC41di04YzAtMC4yNzYtMC4yMjQtMC41LTAuNS0wLjVoLTE2eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMy41IDhoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE2LjUgOGgtMWMtMC4yNzYgMC0wLjUtMC4yMjQtMC41LTAuNXMwLjIyNC0wLjUgMC41LTAuNWgxYzAuMjc2IDAgMC41IDAuMjI0IDAuNSAwLjVzLTAuMjI0IDAuNS0wLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNC41IDEwaC0yYy0wLjI3NiAwLTAuNS0wLjIyNC0wLjUtMC41czAuMjI0LTAuNSAwLjUtMC41aDJjMC4yNzYgMCAwLjUgMC4yMjQgMC41IDAuNXMtMC4yMjQgMC41LTAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0zLjUgMTRoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTExLjUgMTRoLTZjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoNmMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE0LjUgMTRoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE2LjUgMTJoLTNjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMi41di0xLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXYyYzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik01LjUgMTJoLTNjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoM2MwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTYgNy41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik04IDcuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTAgNy41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMiA3LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE0IDcuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNyA5LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTkgOS41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMSA5LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEzIDkuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTUgOS41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik04IDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEwIDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEyIDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/laptop.svg":
/*!***************************!*\
  !*** ./static/laptop.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTMuNSAxNGgxM2MwLjgyNyAwIDEuNS0wLjY3MyAxLjUtMS41di04YzAtMC44MjctMC42NzMtMS41LTEuNS0xLjVoLTEzYy0wLjgyNyAwLTEuNSAwLjY3My0xLjUgMS41djhjMCAwLjgyNyAwLjY3MyAxLjUgMS41IDEuNXpNMyA0LjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNWgxM2MwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41djhjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNWgtMTNjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjV2LTh6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xOS41IDE1aC0xOWMtMC4yNzYgMC0wLjUgMC4yMjQtMC41IDAuNXYxYzAgMC44MjcgMC42NzMgMS41IDEuNSAxLjVoMTdjMC44MjcgMCAxLjUtMC42NzMgMS41LTEuNXYtMWMwLTAuMjc2LTAuMjI0LTAuNS0wLjUtMC41ek0xOC41IDE3aC0xN2MtMC4yNzYgMC0wLjUtMC4yMjQtMC41LTAuNXYtMC41aDE4djAuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41eiI+PC9wYXRoPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/logo.png":
/*!*************************!*\
  !*** ./static/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-db385bfb85d6b3e1d78473cc8831d3ef.png";

/***/ }),

/***/ "./static/man-phone.jpg":
/*!******************************!*\
  !*** ./static/man-phone.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/man-phone-0017cd76f118e448715c49db3cf879c1.jpg";

/***/ }),

/***/ "./static/me.jpg":
/*!***********************!*\
  !*** ./static/me.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/me-a3a0244f06c101041865fbf9af7b3fbf.jpg";

/***/ }),

/***/ "./static/port-careers.jpg":
/*!*********************************!*\
  !*** ./static/port-careers.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-careers-4ef76766d14c0b0a705899f757ac22a7.jpg";

/***/ }),

/***/ "./static/port-gpws.jpg":
/*!******************************!*\
  !*** ./static/port-gpws.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-gpws-27f6360f7e506604d2592da15514e46a.jpg";

/***/ }),

/***/ "./static/port-pad.jpg":
/*!*****************************!*\
  !*** ./static/port-pad.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-pad-ac7ec497bf51a42dafef5afa98fe50fc.jpg";

/***/ }),

/***/ "./static/rocket.svg":
/*!***************************!*\
  !*** ./static/rocket.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEzLjUgOWMtMS4zNzggMC0yLjUtMS4xMjItMi41LTIuNXMxLjEyMi0yLjUgMi41LTIuNSAyLjUgMS4xMjIgMi41IDIuNS0xLjEyMiAyLjUtMi41IDIuNXpNMTMuNSA1Yy0wLjgyNyAwLTEuNSAwLjY3My0xLjUgMS41czAuNjczIDEuNSAxLjUgMS41IDEuNS0wLjY3MyAxLjUtMS41LTAuNjczLTEuNS0xLjUtMS41eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMC41IDIwYy0wLjEzIDAtMC4yNTgtMC4wNTEtMC4zNTQtMC4xNDYtMC4xMzctMC4xMzctMC4xODMtMC4zNDItMC4xMTYtMC41MjQgMS41MzktNC4yMzEgMy4xNTctNi4zNzcgNC44MDgtNi4zNzcgMC41NDUgMCAxLjA1NCAwLjIzNCAxLjUxNSAwLjY5NCAwLjcyOCAwLjcyOCAwLjc1NCAxLjQ1MyAwLjY0OCAxLjkzMy0wLjMzNCAxLjUwOC0yLjQ2NCAyLjk4NS02LjMzIDQuMzkxLTAuMDU2IDAuMDIwLTAuMTE0IDAuMDMwLTAuMTcxIDAuMDMwek00LjgzOSAxMy45NTJjLTAuNDk1IDAtMS4wNzggMC40MzQtMS42ODUgMS4yNTUtMC41OTcgMC44MDctMS4xOTcgMS45NTctMS43ODggMy40MjcgMS4zMzUtMC41MzcgMi40MDgtMS4wODIgMy4xOTktMS42MjUgMS4wNjctMC43MzMgMS4zODMtMS4zIDEuNDYtMS42NDZzLTAuMDQ3LTAuNjc3LTAuMzc5LTEuMDA5Yy0wLjI3LTAuMjctMC41MzQtMC40MDEtMC44MDgtMC40MDF6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xOS41IDBjLTIuNTk1IDAtNC45MDcgMC40NC02Ljg3NCAxLjMwOC0xLjYyMSAwLjcxNi0zLjAwOSAxLjcyLTQuMTI2IDIuOTg2LTAuMjA4IDAuMjM2LTAuNDAxIDAuNDc1LTAuNTggMC43MTUtMC44NjIgMC4wNTctMS43NDQgMC40LTIuNjI0IDEuMDIwLTAuNzQ1IDAuNTI0LTEuNDkzIDEuMjUtMi4yMjUgMi4xNTctMS4yMyAxLjUyNC0xLjk4NiAzLjAyNy0yLjAxOCAzLjA5MC0wLjEwOSAwLjIxOS0wLjA0NCAwLjQ4NSAwLjE1NCAwLjYyOCAwLjA4OCAwLjA2NCAwLjE5MSAwLjA5NSAwLjI5MyAwLjA5NSAwLjEyOCAwIDAuMjU2LTAuMDQ5IDAuMzUzLTAuMTQ1IDAuMDA1LTAuMDA1IDAuNDgzLTAuNDc1IDEuMjk4LTAuOTM2IDAuNjcyLTAuMzggMS43MDgtMC44MjcgMi45NjEtMC45MDYgMC4zMTcgMC44MTEgMS4yMjQgMS43ODEgMS42NTkgMi4yMTZzMS40MDUgMS4zNDIgMi4yMTYgMS42NTljLTAuMDc5IDEuMjUzLTAuNTI2IDIuMjg5LTAuOTA2IDIuOTYxLTAuNDYyIDAuODE2LTAuOTMxIDEuMjkzLTAuOTM1IDEuMjk3LTAuMTczIDAuMTczLTAuMTk1IDAuNDQ3LTAuMDUyIDAuNjQ2IDAuMDk3IDAuMTM0IDAuMjQ5IDAuMjA4IDAuNDA2IDAuMjA4IDAuMDc2IDAgMC4xNTItMC4wMTcgMC4yMjMtMC4wNTMgMC4wNjMtMC4wMzIgMS41NjYtMC43ODggMy4wOTAtMi4wMTggMC45MDctMC43MzIgMS42MzMtMS40OCAyLjE1Ny0yLjIyNSAwLjYyLTAuODgxIDAuOTYyLTEuNzYyIDEuMDIwLTIuNjI0IDAuMjM5LTAuMTc4IDAuNDc4LTAuMzcxIDAuNzE1LTAuNTggMS4yNjYtMS4xMTcgMi4yNy0yLjUwNSAyLjk4Ni00LjEyNiAwLjg2OC0xLjk2NiAxLjMwOC00LjI3OSAxLjMwOC02Ljg3NHYtMC41aC0wLjV6TTMuMTA3IDkuODA4YzAuOTUzLTEuMzgzIDIuNDEtMy4wOTggNC4wNTItMy42MzctMC42NDkgMS4xMzctMC45ODUgMi4xODEtMS4xMDYgMi44NDMtMS4xNTkgMC4wNzEtMi4xNTggMC40MDgtMi45NDYgMC43OTR6TTEwLjE5MyAxNi44OWMwLjM4Ni0wLjc4OCAwLjcyMy0xLjc4NiAwLjc5My0yLjk0NCAwLjY2MS0wLjEyMSAxLjcwNi0wLjQ1NyAyLjg0Mi0xLjEwNS0wLjU0IDEuNjM5LTIuMjU0IDMuMDk2LTMuNjM2IDQuMDQ5ek0xNS4wNDQgMTAuNzVjLTIuMDgwIDEuODM1LTQuMjM0IDIuMjUtNC41NDQgMi4yNS0wLjAwMiAwLTAuMjA3LTAuMDA0LTAuNzU5LTAuMzkzLTAuMzg1LTAuMjcxLTAuODM0LTAuNjU3LTEuMjYyLTEuMDg1cy0wLjgxNC0wLjg3Ny0xLjA4NS0xLjI2MmMtMC4zODktMC41NTItMC4zOTMtMC43NTctMC4zOTMtMC43NTkgMC0wLjMxIDAuNDE1LTIuNDY0IDIuMjUtNC41NDQgMi4xOTYtMi40ODggNS41NTctMy44NDkgOS43NDQtMy45NS0wLjEwMSA0LjE4Ny0xLjQ2MSA3LjU0OC0zLjk1IDkuNzQ0eiI+PC9wYXRoPgo8L3N2Zz4K"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map