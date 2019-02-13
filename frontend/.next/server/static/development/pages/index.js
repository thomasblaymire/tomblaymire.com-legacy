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
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Button.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1mbgncw-0"
})(["color:", ";background-color:", ";border:2px solid ", ";border-radius:", ";font-family:", ";font-size:", ";padding:10px 30px;cursor:pointer;width:200px;&:hover{background-color:", ";color:", ";border:2px solid ", ";}"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.bgColor || '#eee';
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.borderRadius || '5px';
}, function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.btnFontSize || '1.7rem';
}, function (props) {
  return props.hoverBg;
}, function (props) {
  return props.hoverColor;
}, function (props) {
  return props.hoverBg;
});

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
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
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/ExpertiseCard.js";



var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ExpertiseCard__Block",
  componentId: "sc-1ipbg70-0"
})(["width:100%;.title{color:", ";}.description{line-height:30px;color:", ";font-family:", ";font-size:1.8rem;}.seperator{margin:27px 0px;}.divide{width:20%;height:2px;background-color:", ";display:block;content:'';}.icon{fill:#3eaca8;&:hover{transition:all 0.2s ease-in-out;fill:", ";}}"], function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.fontSecondary;
}, function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.black;
});

var ExpertiseCard = function ExpertiseCard(props) {
  var title = props.title,
      description = props.description,
      icon = props.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "icon",
    src: icon,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seperator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/FullWidthCta.js";



var BackgroudImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FullWidthCta__BackgroudImage",
  componentId: "sc-75f1a5-0"
})(["background-image:url(", ");background-repeat:repeat;background-size:cover;background-position:center center;background-attachment:scroll;padding:8% 0%;"], _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
var BackgroundText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "FullWidthCta__BackgroundText",
  componentId: "sc-75f1a5-1"
})(["color:", ";text-align:center;font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;margin:0;font-size:4.5rem;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.fontPrimary;
});

var FullWidthCta = function FullWidthCta(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroudImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroundText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Header.js";







next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1stxykk-0"
})(["max-width:1170px;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:2rem 0;"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
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
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Hero.js";





var HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroImage",
  componentId: "sc-1oj9b8p-0"
})(["background-image:url(", ");background-size:cover;min-height:70vh;height:auto;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;position:relative;background-position-x:-500px;@media (min-width:480px){min-height:100vh;background-position-x:center;}"], _static_me_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroContainer",
  componentId: "sc-1oj9b8p-1"
})(["max-width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroBlock",
  componentId: "sc-1oj9b8p-2"
})(["color:", ";width:100%;position:relative;top:10rem;@media (min-width:480px){width:60%;}.intro{font-size:7vmin;margin:0;}.description{font-size:1.6rem;line-height:2.6rem;font-weight:300;@media (min-width:480px){line-height:4.5rem;font-size:3.5vmin;font-weight:300;min-width:80%;}}"], function (props) {
  return props.theme.white;
});
var HeroButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroButtons",
  componentId: "sc-1oj9b8p-3"
})(["margin-top:8rem;display:flex;& > button{margin-right:1.8rem;}a{color:", ";text-decoration:none;font-weight:normal;&:hover{color:red;}}"], function (props) {
  return props.theme.white;
});

var Hero = function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Hello, I'm Tom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "I\u2019m a Freelance (UI/UX) Software Engineer based in Sydney. I help companies deliver innovative, end-to-end products that meet both user and business needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#fff",
    borderColor: '#05af43',
    bgColor: "#05af43",
    hoverBg: '#05da53',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "My Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#fff",
    bgColor: "transparent",
    borderColor: '#fff',
    hoverBg: '#fff',
    hoverColor: '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
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
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Logo.js";




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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/hamburger.svg */ "./static/hamburger.svg");
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/close.svg */ "./static/close.svg");
/* harmony import */ var _static_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/socialShare.svg */ "./static/socialShare.svg");
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Nav.js";

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








var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "Nav__NavStyles",
  componentId: "hwzlet-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;.show{opacity:1;visibility:visible;transition:0.2s;position:fixed;left:0;top:0;background:#100e17f2;z-index:1;display:grid;width:100%;height:calc(100vh);height:100%;margin:0;> ul{flex-direction:column;opacity:none;visibility:visible;justify-content:center;}}.close-button{border:none;background:0 0;display:none;cursor:pointer;position:relative;top:0;right:0;svg{width:50px;height:50px;}}.hamburger-button{display:block;border:none;cursor:pointer;outline:none;background:transparent;svg{width:50px;height:50px;}@media (min-width:950px){display:none;}}"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.ul.withConfig({
  displayName: "Nav__NavList",
  componentId: "hwzlet-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;visibility:hidden;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:25px 15px;&:hover{color:#3eaca8;}}@media (min-width:950px){visibility:visible;margin:0;}.show{a{display:block;opacity:1;visibility:visible;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "Nav__NavContainer",
  componentId: "hwzlet-2"
})(["display:flex;height:10vh;"]); // const NavSocial = styled.div`
//   .links-button {
//     width: 25px;
//     position: relative;
//   }
//   .social-menu {
//     background: black;
// 	position: absolute;
// 	top: 105px;
// 	padding: 5px 5px;
// 	margin-left: 15px;
//     transition: visibility 0s ease 0s, opacity 0.5s ease;
//     -webkit-transition: visibility 0s ease 0s, opacity 0.5s ease;
// 	z-index: 2;
// 	background-color: #242424;
// 	list-style-type: none;
// 	li {
// 		cursor: pointer;
// 		display: block;
//     	padding: 0px;
// 	}
//   }
// `;

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mobileNav: false,
      mobileOpen: false,
      socialMenu: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNavigationHandler", function () {
      _this.setState({
        mobileNav: !_this.state.mobileNav,
        mobileOpen: !_this.state.mobileOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSocialLinks", function () {
      _this.setState({
        socialMenu: !_this.state.socialMenu
      });
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavList, {
        className: this.state.mobileNav && "show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "https://medium.com/@thomas_blaymire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Contact"))), !this.state.mobileNav && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "hamburger-button",
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Open Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), this.state.mobileNav && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "close-button",
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: _static_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Close Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Portfolio/PortfolioItem.js";



var PortfolioBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})(["margin-top:4rem;a{text-decoration:none;font-weight:normal;}"]);
var PortfolioImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PortfolioItem__PortfolioImage",
  componentId: "sc-25rbs8-1"
})(["width:100%;box-shadow:0 0 15px rgba(0,0,0,0.08),0 0 4px rgba(0,0,0,0.05);position:relative;height:auto;@media (min-width:768px){height:350px;}@media (min-width:992px){height:", ";}&:hover{cursor:pointer;}"], function (props) {
  return props.customStyle ? "350px" : "450px";
});
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-2"
})([".portfolio-title{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:", ";cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;margin-top:0.5rem;}li{color:#474747;margin-right:1rem;background:", ";font-size:1.3rem;border-radius:5px;padding:0 1rem;margin-bottom:1rem;cursor:initial;}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.greyLight;
});

var PortfolioItem = function PortfolioItem(props) {
  var image = props.image,
      name = props.name,
      tags = props.tags,
      id = props.id,
      url = props.url,
      customStyle = props.customStyle;
  var tagList = tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, tag);
  });
  console.log(customStyle);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioImage, {
    src: image,
    alt: name,
    customStyle: customStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
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
/* harmony import */ var _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/port-innovation-main.png */ "./static/port-innovation-main.png");
/* harmony import */ var _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/hermes-main.jpg */ "./static/hermes-main.jpg");
/* harmony import */ var _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/port-location.jpg */ "./static/port-location.jpg");
/* harmony import */ var _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_port_location_jpg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/Portfolio/PortfolioList.js";

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
        image: _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        name: 'Hermes Innovation',
        tags: ['Angular JS', 'HTML5', 'CSS3', 'Jasmine'],
        url: '/portfolio-innovation'
      }, {
        id: 2,
        image: _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        name: 'Product Analysis Dashboard',
        tags: ['React', 'Redux', 'Styled Components', 'Jest'],
        url: '/portfolio-pad'
      }, {
        id: 3,
        image: _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        name: 'Hermes Careers',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
        url: '/portfolio-careers'
      }, {
        id: 4,
        image: _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        name: 'Hermes',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
        url: '/portfolio-hermes'
      }, {
        id: 5,
        image: _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        name: 'GP Web Solutions',
        tags: ['React', 'CSS3', 'Web Development', 'JavaScript'],
        url: '/portfolio-gpws'
      }, {
        id: 6,
        image: _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        name: 'Location Search',
        tags: ['React', 'Redux', 'ES6', 'JavaScript'],
        url: '/portfolio'
      }]
    });

    return _this;
  }

  _createClass(PortfolioList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var portfolioItems = this.state.portfolioItems.slice(0, this.props.amount).map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          customStyle: _this2.props.customStyle,
          key: item.id,
          image: item.image,
          url: item.url,
          id: item.id,
          name: item.name,
          tags: item.tags,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
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
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/facebook.svg */ "./static/facebook.svg");
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/twitter.svg */ "./static/twitter.svg");
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/linkedin.svg */ "./static/linkedin.svg");
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/components/SocialLinks.js";







var SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__SocialWrapper",
  componentId: "bmn958-0"
})(["display:flex;padding:0;margin:0;flex-direction:column;& > div{width:100%;height:200px;-webkit-flex-flow:wrap row;flex-flow:wrap row;display:flex;align-items:center;justify-content:center;flex-direction:column;@media(min-width:480px){height:350px;}}@media(min-width:480px){flex-direction:row;}.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:3.7rem;margin:0;padding-bottom:1rem;}"], function (props) {
  return props.theme.fontPrimary;
});
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
var Linkedin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__Linkedin",
  componentId: "bmn958-4"
})(["background-color:#2a363b;"]);
var SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__SocialIcon",
  componentId: "bmn958-5"
})(["text-align:center;svg{fill:#fff;width:27%;&:hover{cursor:pointer;fill:", ";}}"], function (props) {
  return props.theme.black;
});

var SocialLinks = function SocialLinks() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GetInTouch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    btnFontSize: '1.4rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Free Quote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Facebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/tblaymire1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Twitter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Linkedin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/thomasblaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

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
})(["height:auto;min-height:100vh;.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:", ";font-size:4.2rem;margin:0;}.sub-heading{font-family:", ";font-size:2rem;color:#474747;margin:0;line-height:3rem;}.container{max-width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;@media (min-width:568px){width:auto;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1170px;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.fontSecondary;
});
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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/man-phone.jpg */ "./static/man-phone.jpg");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/test_animated.svg */ "./static/test_animated.svg");
/* harmony import */ var _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/keyboard.svg */ "./static/keyboard.svg");
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/laptop.svg */ "./static/laptop.svg");
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_laptop_svg__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/admin/Development/React/tomblaymire.com/frontend/pages/index.js";














var Expertise = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Expertise",
  componentId: "sc-1lwpsg5-0"
})(["padding:10rem 0rem;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-2"
})(["min-height:80vh;height:auto;display:flex;align-items:center;background-color:", ";@media(min-width:480px){min-height:100vh;}"], function (props) {
  return props.theme.seaGreen;
});
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-3"
})(["width:100%;color:", ";.location-content{width:90%;margin:0 auto;text-align:left;@media(min-width:480px){width:60%;}}.location-heading{line-height:1.4em;margin-bottom:4rem;font-size:4.7rem;width:100%;@media(min-width:480px){width:80%;}}p{margin:0 0 20px;font-size:1.8rem;color:#474747;font-family:Source Sans Pro;}"], function (props) {
  return props.theme.grey;
});
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-4"
})(["width:100%;height:100vh;background-image:url(", ");background-attachment:fixed;background-size:cover;display:none;@media (min-width:480px){display:none;}@media (min-width:768px){height:110vh;display:block;}"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-5"
})(["min-height:100vh;padding:10rem 0rem;p{width:70%;}"]);
var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PortfolioWrapper",
  componentId: "sc-1lwpsg5-6"
})(["& > *{margin-top:5rem;display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}"]);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expertise, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "My expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpertiseRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, JavaScript, React and Redux to to ensure the end product is fast and easy to use.",
    icon: _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.",
    icon: _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.",
    icon: _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading location-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "I live and work in Leeds UK!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "I also post regular helpful articles around startups, web design and user experience."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    btnFontSize: '1.7rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Explore My Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Recent projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    amount: 3,
    customStyle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/close.svg":
/*!**************************!*\
  !*** ./static/close.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDkwIDEzMjJxMCA0MC0yOCA2OGwtMTM2IDEzNnEtMjggMjgtNjggMjh0LTY4LTI4bC0yOTQtMjk0LTI5NCAyOTRxLTI4IDI4LTY4IDI4dC02OC0yOGwtMTM2LTEzNnEtMjgtMjgtMjgtNjh0MjgtNjhsMjk0LTI5NC0yOTQtMjk0cS0yOC0yOC0yOC02OHQyOC02OGwxMzYtMTM2cTI4LTI4IDY4LTI4dDY4IDI4bDI5NCAyOTQgMjk0LTI5NHEyOC0yOCA2OC0yOHQ2OCAyOGwxMzYgMTM2cTI4IDI4IDI4IDY4dC0yOCA2OGwtMjk0IDI5NCAyOTQgMjk0cTI4IDI4IDI4IDY4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./static/ctaImage1.jpg":
/*!******************************!*\
  !*** ./static/ctaImage1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ctaImage1-fb4579535992ebf2f746a10bebf6f375.jpg";

/***/ }),

/***/ "./static/facebook.svg":
/*!*****************************!*\
  !*** ./static/facebook.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyAgdmlld0JveD0iMCAwIDE3OTIgMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTM0MyAxMnYyNjRoLTE1N3EtODYgMC0xMTYgMzZ0LTMwIDEwOHYxODloMjkzbC0zOSAyOTZoLTI1NHY3NTloLTMwNnYtNzU5aC0yNTV2LTI5NmgyNTV2LTIxOHEwLTE4NiAxMDQtMjg4LjV0Mjc3LTEwMi41cTE0NyAwIDIyOCAxMnoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/hamburger.svg":
/*!******************************!*\
  !*** ./static/hamburger.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzRweCIgaGVpZ2h0PSI3NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxMiIgeTE9IjIxIiB4Mj0iNTIiIHkyPSIyMSIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEyIiB5MT0iMzMiIHgyPSI1MiIgeTI9IjMzIi8+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTIiIHkxPSI0NSIgeDI9IjUyIiB5Mj0iNDUiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./static/hermes-main.jpg":
/*!********************************!*\
  !*** ./static/hermes-main.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hermes-main-47845c99c51b4718b1a7b870e8d38ca2.jpg";

/***/ }),

/***/ "./static/keyboard.svg":
/*!*****************************!*\
  !*** ./static/keyboard.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMSAyMmg2MnYzMEgxeiIgc3Ryb2tlLWRhc2hhcnJheT0iMTg0LDE4NiIgY2xhc3M9ImRoVkNWVFhoXzAiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyAyMnYtOGgxNFY3SDExVjQiIHN0cm9rZS1kYXNoYXJyYXk9IjQyLDQ0IiBjbGFzcz0iZGhWQ1ZUWGhfMSI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNlYWNhOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00IDI5aDRNMTAgMjloNE0xNiAyOWg0TTIyIDI5aDRNMjggMjloNE0zNCAyOWg0TTQwIDI5aDRNNDYgMjloNE01MiAyOWg0TTQgNDVoNE0xMCA0NWg0IiBzdHJva2UtZGFzaGFycmF5PSI0LDYiIGNsYXNzPSJkaFZDVlRYaF8yIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE2IDQ1aDI2IiBzdHJva2UtZGFzaGFycmF5PSIyNiwyOCIgY2xhc3M9ImRoVkNWVFhoXzMiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNTAgNDVoNE01NiA0NWg0TTQ0IDQ1aDRNOCAzN2g0TTE0IDM3aDRNMjAgMzdoNE0yNiAzN2g0TTMyIDM3aDRNMzggMzdoNE00NCAzN2g0TTUwIDM3aDRNNTYgMzdoNCIgc3Ryb2tlLWRhc2hhcnJheT0iNCw2IiBjbGFzcz0iZGhWQ1ZUWGhfNCI+PC9wYXRoPjxzdHlsZSBkYXRhLW1hZGUtd2l0aD0idml2dXMtaW5zdGFudCI+LmRoVkNWVFhoXzB7c3Ryb2tlLWRhc2hhcnJheToxODQgMTg2O3N0cm9rZS1kYXNob2Zmc2V0OjE4NTthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDBtcyBmb3J3YXJkczt9LmRoVkNWVFhoXzF7c3Ryb2tlLWRhc2hhcnJheTo0MiA0NDtzdHJva2UtZGFzaG9mZnNldDo0MzthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDI1MG1zIGZvcndhcmRzO30uZGhWQ1ZUWGhfMntzdHJva2UtZGFzaGFycmF5OjQ0IDQ2O3N0cm9rZS1kYXNob2Zmc2V0OjQ1O2FuaW1hdGlvbjpkaFZDVlRYaF9kcmF3IDIwMDBtcyBsaW5lYXIgNTAwbXMgZm9yd2FyZHM7fS5kaFZDVlRYaF8ze3N0cm9rZS1kYXNoYXJyYXk6MjYgMjg7c3Ryb2tlLWRhc2hvZmZzZXQ6Mjc7YW5pbWF0aW9uOmRoVkNWVFhoX2RyYXcgMjAwMG1zIGxpbmVhciA3NTBtcyBmb3J3YXJkczt9LmRoVkNWVFhoXzR7c3Ryb2tlLWRhc2hhcnJheTo0OCA1MDtzdHJva2UtZGFzaG9mZnNldDo0OTthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDEwMDBtcyBmb3J3YXJkczt9QGtleWZyYW1lcyBkaFZDVlRYaF9kcmF3ezEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDt9fUBrZXlmcmFtZXMgZGhWQ1ZUWGhfZmFkZXswJXtzdHJva2Utb3BhY2l0eToxO305NC40NDQ0NDQ0NDQ0NDQ0NCV7c3Ryb2tlLW9wYWNpdHk6MTt9MTAwJXtzdHJva2Utb3BhY2l0eTowO319PC9zdHlsZT48L3N2Zz4="

/***/ }),

/***/ "./static/laptop.svg":
/*!***************************!*\
  !*** ./static/laptop.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgc3R5bGU9IiI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTggMTJoNDh2MzRIOHoiIHN0cm9rZS1kYXNoYXJyYXk9IjE2NCwxNjYiIGNsYXNzPSJ0bndPUGprZ18wIj48L3BhdGg+PHBhdGggZD0iTTEgNDZoNjJ2NkgxeiIgc3Ryb2tlLWRhc2hhcnJheT0iMTM2LDEzOCIgY2xhc3M9InRud09QamtnXzEiPjwvcGF0aD48cGF0aCBkPSJNMzQgMTZoLTQiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNiIgY2xhc3M9InRud09QamtnXzIiPjwvcGF0aD48L2c+PHN0eWxlIGRhdGEtbWFkZS13aXRoPSJ2aXZ1cy1pbnN0YW50Ij4udG53T1Bqa2dfMHtzdHJva2UtZGFzaGFycmF5OjE2NCAxNjY7c3Ryb2tlLWRhc2hvZmZzZXQ6MTY1O2FuaW1hdGlvbjp0bndPUGprZ19kcmF3IDIwMDBtcyBsaW5lYXIgMG1zIGZvcndhcmRzO30udG53T1Bqa2dfMXtzdHJva2UtZGFzaGFycmF5OjEzNiAxMzg7c3Ryb2tlLWRhc2hvZmZzZXQ6MTM3O2FuaW1hdGlvbjp0bndPUGprZ19kcmF3IDIwMDBtcyBsaW5lYXIgNTAwbXMgZm9yd2FyZHM7fS50bndPUGprZ18ye3N0cm9rZS1kYXNoYXJyYXk6NCA2O3N0cm9rZS1kYXNob2Zmc2V0OjU7YW5pbWF0aW9uOnRud09QamtnX2RyYXcgMjAwMG1zIGxpbmVhciAxMDAwbXMgZm9yd2FyZHM7fUBrZXlmcmFtZXMgdG53T1Bqa2dfZHJhd3sxMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7fX1Aa2V5ZnJhbWVzIHRud09QamtnX2ZhZGV7MCV7c3Ryb2tlLW9wYWNpdHk6MTt9OTQuNDQ0NDQ0NDQ0NDQ0NDQle3N0cm9rZS1vcGFjaXR5OjE7fTEwMCV7c3Ryb2tlLW9wYWNpdHk6MDt9fTwvc3R5bGU+PC9zdmc+"

/***/ }),

/***/ "./static/linkedin.svg":
/*!*****************************!*\
  !*** ./static/linkedin.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NzcgNjI1djk5MWgtMzMwdi05OTFoMzMwem0yMS0zMDZxMSA3My01MC41IDEyMnQtMTM1LjUgNDloLTJxLTgyIDAtMTMyLTQ5dC01MC0xMjJxMC03NCA1MS41LTEyMi41dDEzNC41LTQ4LjUgMTMzIDQ4LjUgNTEgMTIyLjV6bTExNjYgNzI5djU2OGgtMzI5di01MzBxMC0xMDUtNDAuNS0xNjQuNXQtMTI2LjUtNTkuNXEtNjMgMC0xMDUuNSAzNC41dC02My41IDg1LjVxLTExIDMwLTExIDgxdjU1M2gtMzI5cTItMzk5IDItNjQ3dC0xLTI5NmwtMS00OGgzMjl2MTQ0aC0ycTIwLTMyIDQxLTU2dDU2LjUtNTIgODctNDMuNSAxMTQuNS0xNS41cTE3MSAwIDI3NSAxMTMuNXQxMDQgMzMyLjV6IiAvPjwvc3ZnPg=="

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

/***/ "./static/port-innovation-main.png":
/*!*****************************************!*\
  !*** ./static/port-innovation-main.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-innovation-main-b11a1569f149734b54be4ef7b18e0b9c.png";

/***/ }),

/***/ "./static/port-location.jpg":
/*!**********************************!*\
  !*** ./static/port-location.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-location-71f1d9478e32b2f089581f6b449cc8b6.jpg";

/***/ }),

/***/ "./static/port-pad.jpg":
/*!*****************************!*\
  !*** ./static/port-pad.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-pad-ac7ec497bf51a42dafef5afa98fe50fc.jpg";

/***/ }),

/***/ "./static/socialShare.svg":
/*!********************************!*\
  !*** ./static/socialShare.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA3NiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYzIDBDNTUuODMyMSAwIDUwIDUuODMyMSA1MCAxM0M1MCAxNS4wODA3IDUwLjUwMDYgMTcuMDM0MiA1MS4zNzUgMTguNzgxMkwyMy41OTM4IDM1LjQ2ODhDMjEuMjMxNyAzMi4xNTEyIDE3LjM2NzkgMzAgMTMgMzBDNS44MzIxNCAzMCAwIDM1LjgzMjEgMCA0M0MwIDUwLjE2NzggNS44MzIxNCA1NiAxMyA1NkMxNy4zNjc5IDU2IDIxLjIzMTcgNTMuODQ4OCAyMy41OTM4IDUwLjUzMTJMNTEuMzc1IDY3LjIxODhDNTAuNTAwNiA2OC45NjU4IDUwIDcwLjkxOTMgNTAgNzNDNTAgODAuMTY3OSA1NS44MzIxIDg2IDYzIDg2QzcwLjE2NzkgODYgNzYgODAuMTY3OSA3NiA3M0M3NiA2NS44MzIxIDcwLjE2NzkgNjAgNjMgNjBDNTguNjMyMSA2MCA1NC43NjgzIDYyLjE1MTIgNTIuNDA2MiA2NS40Njg4TDI0LjYyNSA0OC44MTI1QzI1LjUwNzIgNDcuMDU5MiAyNiA0NS4wOTA2IDI2IDQzQzI2IDQwLjkwOTQgMjUuNTA3MiAzOC45NDA4IDI0LjYyNSAzNy4xODc1TDUyLjQwNjIgMjAuNTMxMkM1NC43NjgzIDIzLjg0ODggNTguNjMyMSAyNiA2MyAyNkM3MC4xNjc5IDI2IDc2IDIwLjE2NzkgNzYgMTNDNzYgNS44MzIxIDcwLjE2NzkgMCA2MyAwWk02MyAyQzY5LjA4NyAyIDc0IDYuOTEzIDc0IDEzQzc0IDE5LjA4NyA2OS4wODcgMjQgNjMgMjRDNTYuOTEzIDI0IDUyIDE5LjA4NyA1MiAxM0M1MiA2LjkxMyA1Ni45MTMgMiA2MyAyWk0xMyAzMkMxOS4wODcgMzIgMjQgMzYuOTEzIDI0IDQzQzI0IDQ5LjA4NyAxOS4wODcgNTQgMTMgNTRDNi45MTMwMiA1NCAyIDQ5LjA4NyAyIDQzQzIgMzYuOTEzIDYuOTEzMDIgMzIgMTMgMzJaTTYzIDYyQzY5LjA4NyA2MiA3NCA2Ni45MTMgNzQgNzNDNzQgNzkuMDg3IDY5LjA4NyA4NCA2MyA4NEM1Ni45MTMgODQgNTIgNzkuMDg3IDUyIDczQzUyIDY2LjkxMyA1Ni45MTMgNjIgNjMgNjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/test_animated.svg":
/*!**********************************!*\
  !*** ./static/test_animated.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iIj4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjYiIGQ9Ik0yMyA1NyBMNDEgNTcgTDQxIDYzIEwyMyA2MyBaIiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfMCI+PC9wYXRoPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMjYiIGhlaWdodD0iMTAiIGQ9Ik0xOSA0NyBMNDUgNDcgTDQ1IDU3IEwxOSA1NyBaIiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfMSI+PC9wYXRoPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNDEsNDdMNDEsNDNMNDgsMzBMMzIsMUwxNiwzMEwyMyw0M0wyMyw0NyIgc3R5bGU9IiIgY2xhc3M9InBXbFBvYlpyXzIiPjwvcGF0aD4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI4LDI4Ljg3NUE0LDQgMCwxLDEgMzYsMjguODc1QTQsNCAwLDEsMSAyOCwyOC44NzUiIHN0eWxlPSIiIGNsYXNzPSJwV2xQb2Jacl8zIj48L3BhdGg+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNlYWNhOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zMiwxTDMyLDI1IiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfNCI+PC9wYXRoPgo8c3R5bGUgZGF0YS1tYWRlLXdpdGg9InZpdnVzLWluc3RhbnQiPi5wV2xQb2Jacl8we3N0cm9rZS1kYXNoYXJyYXk6NDggNTA7c3Ryb2tlLWRhc2hvZmZzZXQ6NDk7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAwbXMgZm9yd2FyZHM7fS5wV2xQb2Jacl8xe3N0cm9rZS1kYXNoYXJyYXk6NzIgNzQ7c3Ryb2tlLWRhc2hvZmZzZXQ6NzM7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAyNTBtcyBmb3J3YXJkczt9LnBXbFBvYlpyXzJ7c3Ryb2tlLWRhc2hhcnJheToxMDQgMTA2O3N0cm9rZS1kYXNob2Zmc2V0OjEwNTthbmltYXRpb246cFdsUG9iWnJfZHJhdyAxMDAwbXMgbGluZWFyIDUwMG1zIGZvcndhcmRzO30ucFdsUG9iWnJfM3tzdHJva2UtZGFzaGFycmF5OjI2IDI4O3N0cm9rZS1kYXNob2Zmc2V0OjI3O2FuaW1hdGlvbjpwV2xQb2Jacl9kcmF3IDEwMDBtcyBsaW5lYXIgNzUwbXMgZm9yd2FyZHM7fS5wV2xQb2Jacl80e3N0cm9rZS1kYXNoYXJyYXk6MjQgMjY7c3Ryb2tlLWRhc2hvZmZzZXQ6MjU7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAxMDAwbXMgZm9yd2FyZHM7fUBrZXlmcmFtZXMgcFdsUG9iWnJfZHJhd3sxMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7fX1Aa2V5ZnJhbWVzIHBXbFBvYlpyX2ZhZGV7MCV7c3Ryb2tlLW9wYWNpdHk6MTt9OTQuNDQ0NDQ0NDQ0NDQ0NDQle3N0cm9rZS1vcGFjaXR5OjE7fTEwMCV7c3Ryb2tlLW9wYWNpdHk6MDt9fTwvc3R5bGU+PC9zdmc+"

/***/ }),

/***/ "./static/twitter.svg":
/*!****************************!*\
  !*** ./static/twitter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjg0IDQwOHEtNjcgOTgtMTYyIDE2NyAxIDE0IDEgNDIgMCAxMzAtMzggMjU5LjV0LTExNS41IDI0OC41LTE4NC41IDIxMC41LTI1OCAxNDYtMzIzIDU0LjVxLTI3MSAwLTQ5Ni0xNDUgMzUgNCA3OCA0IDIyNSAwIDQwMS0xMzgtMTA1LTItMTg4LTY0LjV0LTExNC0xNTkuNXEzMyA1IDYxIDUgNDMgMCA4NS0xMS0xMTItMjMtMTg1LjUtMTExLjV0LTczLjUtMjA1LjV2LTRxNjggMzggMTQ2IDQxLTY2LTQ0LTEwNS0xMTV0LTM5LTE1NHEwLTg4IDQ0LTE2MyAxMjEgMTQ5IDI5NC41IDIzOC41dDM3MS41IDk5LjVxLTgtMzgtOC03NCAwLTEzNCA5NC41LTIyOC41dDIyOC41LTk0LjVxMTQwIDAgMjM2IDEwMiAxMDktMjEgMjA1LTc4LTM3IDExNS0xNDIgMTc4IDkzLTEwIDE4Ni01MHoiLz48L3N2Zz4="

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

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