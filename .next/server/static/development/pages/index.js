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


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1mbgncw-0"
})(["color:", ";background-color:", ";border:2px solid ", ";border-radius:5px;font-family:", ";font-size:", ";padding:10px 30px;cursor:pointer;width:200px;&:hover{background-color:", ";color:", ";border:2px solid ", ";}"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.bgColor || '#eee';
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.btnFontSize || 50;
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
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/ExpertiseCard.js";



var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ExpertiseCard__Block",
  componentId: "sc-1ipbg70-0"
})(["width:100%;.title{color:", ";}.description{line-height:30px;color:", ";font-family:", ";font-size:1.8rem;}.seperator{margin:27px 0px;}.divide{width:20%;height:2px;background-color:", ";display:block;content:'';}.icon{fill:#3eaca8;&:hover{transition:all .2s ease-in-out;fill:", ";}}"], function (props) {
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
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/FullWidthCta.js";



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
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroBlock",
  componentId: "sc-1oj9b8p-2"
})(["color:", ";margin-top:11rem;width:60%;.intro{font-size:5.5rem;margin:0;}.description{font-size:2.5rem;line-height:38px;font-weight:300;}"], function (props) {
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
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Hello, I'm Tom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "I\u2019m a Freelance (UI/UX) Software Engineer based in Leeds. I help companies deliver innovative, end-to-end products that meet both user and business needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#05af43",
    bgColor: "#05af43",
    btnFontSize: "1.7rem",
    hoverBg: '#05da53',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "My Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#05af43",
    bgColor: "transparent",
    borderColor: '#fff',
    btnFontSize: "1.7rem",
    hoverBg: '#fff',
    hoverColor: '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
})([".portfolio-image{width:380px;height:300px;margin-right:30px;position:relative;&:hover{cursor:pointer;}}a{text-decoration:none;font-weight:normal;}"]);
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([".portfolio-title{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:#2a363b;cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;}li{color:#474747;margin-right:1rem;background:#dadada;border-radius:5px;padding:0 10px;cursor:initial;}"], function (props) {
  return props.theme.fontPrimary;
});

var PortfolioItem = function PortfolioItem(props) {
  var image = props.image,
      name = props.name,
      tags = props.tags,
      id = props.id;
  var tagList = tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, tag);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/portfolio-full',
      query: {
        id: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "portfolio-image",
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
          id: item.id,
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
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/facebook.svg */ "./static/facebook.svg");
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/twitter.svg */ "./static/twitter.svg");
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/linkedin.svg */ "./static/linkedin.svg");
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/SocialLinks.js";







var SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialLinks__SocialWrapper",
  componentId: "bmn958-0"
})(["display:flex;padding:0;margin:0;& > div{width:100%;height:350px;-webkit-flex-flow:wrap row;flex-flow:wrap row;display:flex;align-items:center;justify-content:center;flex-direction:column;}.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:3.7rem;margin:0;}"], function (props) {
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
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GetInTouch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primaryColor: "#05af43",
    bgColor: "transparent",
    borderColor: '#fff',
    btnFontSize: "1.7rem",
    hoverBg: '#fff',
    hoverColor: '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Free Quote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Facebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/tblaymire1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Twitter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Linkedin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/thomasblaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))));
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
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:25px 15px;&:hover{color:#3eaca8;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
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
})(["height:auto;min-height:100vh;.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:4.2rem;margin:0;}.sub-heading{font-family:", ";font-size:2rem;color:#474747;margin:0;line-height:3rem;}.container{max-width:1170px;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;}"], function (props) {
  return props.theme.fontPrimary;
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
})(["padding:10rem 0rem;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-2"
})(["height:100vh;display:flex;background-color:", ";"], function (props) {
  return props.theme.seaGreen;
});
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-3"
})(["width:50%;padding-top:35px;padding-right:6%;padding-bottom:35px;padding-left:6%;color:", ";p{margin:0 0 20px;}"], function (props) {
  return props.theme.grey;
});
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-4"
})(["width:50%;background-image:url(", ");background-attachment:fixed;background-size:cover;height:100%;"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-5"
})(["min-height:100vh;padding:10rem 0rem;p{width:70%;}"]);
var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PortfolioWrapper",
  componentId: "sc-1lwpsg5-6"
})(["& > *{display:flex;align-items:center;justify-content:space-between;margin-top:5rem;}"]);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expertise, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "My expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpertiseRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, CSS3, React and Redux to to ensure the end product is fast and easy to use.",
    icon: _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.",
    icon: _static_rocket_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.",
    icon: _static_laptop_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "I live and work in Leeds UK."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "I also post regular helpful articles around startups, web design and user experience.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Recent projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    amount: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
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

/***/ "./static/facebook.svg":
/*!*****************************!*\
  !*** ./static/facebook.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyAgdmlld0JveD0iMCAwIDE3OTIgMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTM0MyAxMnYyNjRoLTE1N3EtODYgMC0xMTYgMzZ0LTMwIDEwOHYxODloMjkzbC0zOSAyOTZoLTI1NHY3NTloLTMwNnYtNzU5aC0yNTV2LTI5NmgyNTV2LTIxOHEwLTE4NiAxMDQtMjg4LjV0Mjc3LTEwMi41cTE0NyAwIDIyOCAxMnoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/keyboard.svg":
/*!*****************************!*\
  !*** ./static/keyboard.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZD0iTTE3LjUgMTZoLTE2Yy0wLjgyNyAwLTEuNS0wLjY3My0xLjUtMS41di04YzAtMC44MjcgMC42NzMtMS41IDEuNS0xLjVoMTZjMC44MjcgMCAxLjUgMC42NzMgMS41IDEuNXY4YzAgMC44MjctMC42NzMgMS41LTEuNSAxLjV6TTEuNSA2Yy0wLjI3NiAwLTAuNSAwLjIyNC0wLjUgMC41djhjMCAwLjI3NiAwLjIyNCAwLjUgMC41IDAuNWgxNmMwLjI3NiAwIDAuNS0wLjIyNCAwLjUtMC41di04YzAtMC4yNzYtMC4yMjQtMC41LTAuNS0wLjVoLTE2eiI+PC9wYXRoPgo8cGF0aCBkPSJNMy41IDhoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTE2LjUgOGgtMWMtMC4yNzYgMC0wLjUtMC4yMjQtMC41LTAuNXMwLjIyNC0wLjUgMC41LTAuNWgxYzAuMjc2IDAgMC41IDAuMjI0IDAuNSAwLjVzLTAuMjI0IDAuNS0wLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBkPSJNNC41IDEwaC0yYy0wLjI3NiAwLTAuNS0wLjIyNC0wLjUtMC41czAuMjI0LTAuNSAwLjUtMC41aDJjMC4yNzYgMCAwLjUgMC4yMjQgMC41IDAuNXMtMC4yMjQgMC41LTAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik0zLjUgMTRoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTExLjUgMTRoLTZjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoNmMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTE0LjUgMTRoLTFjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMWMwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTE2LjUgMTJoLTNjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoMi41di0xLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXYyYzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik01LjUgMTJoLTNjLTAuMjc2IDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41IDAuNS0wLjVoM2MwLjI3NiAwIDAuNSAwLjIyNCAwLjUgMC41cy0wLjIyNCAwLjUtMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTYgNy41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik04IDcuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBkPSJNMTAgNy41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMiA3LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTE0IDcuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBkPSJNNyA5LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTkgOS41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMSA5LjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTEzIDkuNWMwIDAuMjc2LTAuMjI0IDAuNS0wLjUgMC41cy0wLjUtMC4yMjQtMC41LTAuNWMwLTAuMjc2IDAuMjI0LTAuNSAwLjUtMC41czAuNSAwLjIyNCAwLjUgMC41eiI+PC9wYXRoPgo8cGF0aCBkPSJNMTUgOS41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVzLTAuNS0wLjIyNC0wLjUtMC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVzMC41IDAuMjI0IDAuNSAwLjV6Ij48L3BhdGg+CjxwYXRoIGQ9Ik04IDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTEwIDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPHBhdGggZD0iTTEyIDExLjVjMCAwLjI3Ni0wLjIyNCAwLjUtMC41IDAuNXMtMC41LTAuMjI0LTAuNS0wLjVjMC0wLjI3NiAwLjIyNC0wLjUgMC41LTAuNXMwLjUgMC4yMjQgMC41IDAuNXoiPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/laptop.svg":
/*!***************************!*\
  !*** ./static/laptop.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggIGQ9Ik0zLjUgMTRoMTNjMC44MjcgMCAxLjUtMC42NzMgMS41LTEuNXYtOGMwLTAuODI3LTAuNjczLTEuNS0xLjUtMS41aC0xM2MtMC44MjcgMC0xLjUgMC42NzMtMS41IDEuNXY4YzAgMC44MjcgMC42NzMgMS41IDEuNSAxLjV6TTMgNC41YzAtMC4yNzYgMC4yMjQtMC41IDAuNS0wLjVoMTNjMC4yNzYgMCAwLjUgMC4yMjQgMC41IDAuNXY4YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjVoLTEzYy0wLjI3NiAwLTAuNS0wLjIyNC0wLjUtMC41di04eiI+PC9wYXRoPgo8cGF0aCAgZD0iTTE5LjUgMTVoLTE5Yy0wLjI3NiAwLTAuNSAwLjIyNC0wLjUgMC41djFjMCAwLjgyNyAwLjY3MyAxLjUgMS41IDEuNWgxN2MwLjgyNyAwIDEuNS0wLjY3MyAxLjUtMS41di0xYzAtMC4yNzYtMC4yMjQtMC41LTAuNS0wLjV6TTE4LjUgMTdoLTE3Yy0wLjI3NiAwLTAuNS0wLjIyNC0wLjUtMC41di0wLjVoMTh2MC41YzAgMC4yNzYtMC4yMjQgMC41LTAuNSAwLjV6Ij48L3BhdGg+Cjwvc3ZnPgo="

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

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZD0iTTEzLjUgOWMtMS4zNzggMC0yLjUtMS4xMjItMi41LTIuNXMxLjEyMi0yLjUgMi41LTIuNSAyLjUgMS4xMjIgMi41IDIuNS0xLjEyMiAyLjUtMi41IDIuNXpNMTMuNSA1Yy0wLjgyNyAwLTEuNSAwLjY3My0xLjUgMS41czAuNjczIDEuNSAxLjUgMS41IDEuNS0wLjY3MyAxLjUtMS41LTAuNjczLTEuNS0xLjUtMS41eiI+PC9wYXRoPgo8cGF0aCBkPSJNMC41IDIwYy0wLjEzIDAtMC4yNTgtMC4wNTEtMC4zNTQtMC4xNDYtMC4xMzctMC4xMzctMC4xODMtMC4zNDItMC4xMTYtMC41MjQgMS41MzktNC4yMzEgMy4xNTctNi4zNzcgNC44MDgtNi4zNzcgMC41NDUgMCAxLjA1NCAwLjIzNCAxLjUxNSAwLjY5NCAwLjcyOCAwLjcyOCAwLjc1NCAxLjQ1MyAwLjY0OCAxLjkzMy0wLjMzNCAxLjUwOC0yLjQ2NCAyLjk4NS02LjMzIDQuMzkxLTAuMDU2IDAuMDIwLTAuMTE0IDAuMDMwLTAuMTcxIDAuMDMwek00LjgzOSAxMy45NTJjLTAuNDk1IDAtMS4wNzggMC40MzQtMS42ODUgMS4yNTUtMC41OTcgMC44MDctMS4xOTcgMS45NTctMS43ODggMy40MjcgMS4zMzUtMC41MzcgMi40MDgtMS4wODIgMy4xOTktMS42MjUgMS4wNjctMC43MzMgMS4zODMtMS4zIDEuNDYtMS42NDZzLTAuMDQ3LTAuNjc3LTAuMzc5LTEuMDA5Yy0wLjI3LTAuMjctMC41MzQtMC40MDEtMC44MDgtMC40MDF6Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xOS41IDBjLTIuNTk1IDAtNC45MDcgMC40NC02Ljg3NCAxLjMwOC0xLjYyMSAwLjcxNi0zLjAwOSAxLjcyLTQuMTI2IDIuOTg2LTAuMjA4IDAuMjM2LTAuNDAxIDAuNDc1LTAuNTggMC43MTUtMC44NjIgMC4wNTctMS43NDQgMC40LTIuNjI0IDEuMDIwLTAuNzQ1IDAuNTI0LTEuNDkzIDEuMjUtMi4yMjUgMi4xNTctMS4yMyAxLjUyNC0xLjk4NiAzLjAyNy0yLjAxOCAzLjA5MC0wLjEwOSAwLjIxOS0wLjA0NCAwLjQ4NSAwLjE1NCAwLjYyOCAwLjA4OCAwLjA2NCAwLjE5MSAwLjA5NSAwLjI5MyAwLjA5NSAwLjEyOCAwIDAuMjU2LTAuMDQ5IDAuMzUzLTAuMTQ1IDAuMDA1LTAuMDA1IDAuNDgzLTAuNDc1IDEuMjk4LTAuOTM2IDAuNjcyLTAuMzggMS43MDgtMC44MjcgMi45NjEtMC45MDYgMC4zMTcgMC44MTEgMS4yMjQgMS43ODEgMS42NTkgMi4yMTZzMS40MDUgMS4zNDIgMi4yMTYgMS42NTljLTAuMDc5IDEuMjUzLTAuNTI2IDIuMjg5LTAuOTA2IDIuOTYxLTAuNDYyIDAuODE2LTAuOTMxIDEuMjkzLTAuOTM1IDEuMjk3LTAuMTczIDAuMTczLTAuMTk1IDAuNDQ3LTAuMDUyIDAuNjQ2IDAuMDk3IDAuMTM0IDAuMjQ5IDAuMjA4IDAuNDA2IDAuMjA4IDAuMDc2IDAgMC4xNTItMC4wMTcgMC4yMjMtMC4wNTMgMC4wNjMtMC4wMzIgMS41NjYtMC43ODggMy4wOTAtMi4wMTggMC45MDctMC43MzIgMS42MzMtMS40OCAyLjE1Ny0yLjIyNSAwLjYyLTAuODgxIDAuOTYyLTEuNzYyIDEuMDIwLTIuNjI0IDAuMjM5LTAuMTc4IDAuNDc4LTAuMzcxIDAuNzE1LTAuNTggMS4yNjYtMS4xMTcgMi4yNy0yLjUwNSAyLjk4Ni00LjEyNiAwLjg2OC0xLjk2NiAxLjMwOC00LjI3OSAxLjMwOC02Ljg3NHYtMC41aC0wLjV6TTMuMTA3IDkuODA4YzAuOTUzLTEuMzgzIDIuNDEtMy4wOTggNC4wNTItMy42MzctMC42NDkgMS4xMzctMC45ODUgMi4xODEtMS4xMDYgMi44NDMtMS4xNTkgMC4wNzEtMi4xNTggMC40MDgtMi45NDYgMC43OTR6TTEwLjE5MyAxNi44OWMwLjM4Ni0wLjc4OCAwLjcyMy0xLjc4NiAwLjc5My0yLjk0NCAwLjY2MS0wLjEyMSAxLjcwNi0wLjQ1NyAyLjg0Mi0xLjEwNS0wLjU0IDEuNjM5LTIuMjU0IDMuMDk2LTMuNjM2IDQuMDQ5ek0xNS4wNDQgMTAuNzVjLTIuMDgwIDEuODM1LTQuMjM0IDIuMjUtNC41NDQgMi4yNS0wLjAwMiAwLTAuMjA3LTAuMDA0LTAuNzU5LTAuMzkzLTAuMzg1LTAuMjcxLTAuODM0LTAuNjU3LTEuMjYyLTEuMDg1cy0wLjgxNC0wLjg3Ny0xLjA4NS0xLjI2MmMtMC4zODktMC41NTItMC4zOTMtMC43NTctMC4zOTMtMC43NTkgMC0wLjMxIDAuNDE1LTIuNDY0IDIuMjUtNC41NDQgMi4xOTYtMi40ODggNS41NTctMy44NDkgOS43NDQtMy45NS0wLjEwMSA0LjE4Ny0xLjQ2MSA3LjU0OC0zLjk1IDkuNzQ0eiI+PC9wYXRoPgo8L3N2Zz4K"

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