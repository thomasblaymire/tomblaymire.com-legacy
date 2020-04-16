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

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/Button/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Button/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/styled.js":
/*!*************************************!*\
  !*** ./components/Button/styled.js ***!
  \*************************************/
/*! exports provided: StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1f8m1ce-0"
})(["color:", ";background-color:", ";border:2px solid ", ";border-radius:", ";font-family:", ";font-size:", ";padding:10px 30px;cursor:pointer;width:200px;outline:none;&:hover{background-color:", ";color:", ";border:2px solid ", ";}"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.bgColor || "#eee";
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.borderRadius || "5px";
}, function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.btnFontSize || "1.7rem";
}, function (props) {
  return props.hoverBg;
}, function (props) {
  return props.hoverColor;
}, function (props) {
  return props.hoverBg;
});

/***/ }),

/***/ "./components/CallToAction/index.js":
/*!******************************************!*\
  !*** ./components/CallToAction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/CallToAction/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/CallToAction/index.js";



var CallToAction = function CallToAction(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCallToAction"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/CallToAction/styled.js":
/*!*******************************************!*\
  !*** ./components/CallToAction/styled.js ***!
  \*******************************************/
/*! exports provided: StyledCallToAction, StyledText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCallToAction", function() { return StyledCallToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledText", function() { return StyledText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/ctaImage1.jpg */ "./static/ctaImage1.jpg");
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_1__);


var StyledCallToAction = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledCallToAction",
  componentId: "sc-1hjm8ql-0"
})(["background-image:url(", ");background-repeat:repeat;background-size:cover;background-position:center center;background-attachment:scroll;padding:8% 0%;"], _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
var StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styled__StyledText",
  componentId: "sc-1hjm8ql-1"
})(["color:", ";text-align:center;font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;margin:0;font-size:4.5rem;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.fontPrimary;
});

/***/ }),

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/Card/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Card/index.js";



var Card = function Card(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCardIcon"], {
    src: icon,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCardSeperator"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledCardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Card/styled.js":
/*!***********************************!*\
  !*** ./components/Card/styled.js ***!
  \***********************************/
/*! exports provided: StyledCard, StyledCardIcon, StyledCardTitle, StyledCardSeperator, StyledCardText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCard", function() { return StyledCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardIcon", function() { return StyledCardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardTitle", function() { return StyledCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardSeperator", function() { return StyledCardSeperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardText", function() { return StyledCardText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__);


var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledCard",
  componentId: "sc-17wiupn-0"
})(["width:100%;.seperator{margin:27px 0px;}"]);
var StyledCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "styled__StyledCardIcon",
  componentId: "sc-17wiupn-1"
})(["fill:#3eaca8;&:hover{transition:all 0.2s ease-in-out;fill:", ";}"], function (props) {
  return props.theme.black;
});
var StyledCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styled__StyledCardTitle",
  componentId: "sc-17wiupn-2"
})(["color:", ";"], function (props) {
  return props.theme.greyDark;
});
var StyledCardSeperator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledCardSeperator",
  componentId: "sc-17wiupn-3"
})(["width:20%;height:2px;background-color:", ";display:block;margin-bottom:27px;content:'';"], function (props) {
  return props.theme.greyDark;
});
var StyledCardText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styled__StyledCardText",
  componentId: "sc-17wiupn-4"
})(["line-height:30px;color:", ";font-family:", ";font-size:1.8rem;"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.fontSecondary;
});

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation */ "./components/Navigation/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/Header/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Header/index.js";







next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["StyledHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/styled.js":
/*!*************************************!*\
  !*** ./components/Header/styled.js ***!
  \*************************************/
/*! exports provided: StyledHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "styled__StyledHeader",
  componentId: "xi0iie-0"
})(["max-width:1170px;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:2rem 0;"]);

/***/ }),

/***/ "./components/Hero/index.js":
/*!**********************************!*\
  !*** ./components/Hero/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/Hero/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Hero/index.js";





var Hero = function Hero(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledHero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledHeroWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledHeroContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledHeroTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledHeroText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledButtonBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryColor: "#fff",
    borderColor: '#05af43',
    bgColor: "#05af43",
    hoverBg: '#05da53',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "My Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryColor: "#fff",
    bgColor: "transparent",
    borderColor: '#fff',
    hoverBg: '#fff',
    hoverColor: '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Let's Talk"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Hero/styled.js":
/*!***********************************!*\
  !*** ./components/Hero/styled.js ***!
  \***********************************/
/*! exports provided: StyledHero, StyledHeroWrapper, StyledHeroContent, StyledHeroTitle, StyledHeroText, StyledButtonBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHero", function() { return StyledHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroWrapper", function() { return StyledHeroWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroContent", function() { return StyledHeroContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroTitle", function() { return StyledHeroTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroText", function() { return StyledHeroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButtonBlock", function() { return StyledButtonBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/me.jpg */ "./static/me.jpg");
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_me_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_stock_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/stock.jpg */ "./static/stock.jpg");
/* harmony import */ var _static_stock_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_stock_jpg__WEBPACK_IMPORTED_MODULE_2__);



var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledHero",
  componentId: "s7dunm-0"
})(["background-image:url(", ");background-size:cover;min-height:30vh;height:auto;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;position:relative;background-position-x:-500px;@media (min-width:480px){min-height:80vh;background-position-x:center;}"], _static_stock_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
var StyledHeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledHeroWrapper",
  componentId: "s7dunm-1"
})(["max-width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var StyledHeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledHeroContent",
  componentId: "s7dunm-2"
})(["color:", ";width:100%;padding:21rem 0 25rem 0;line-height:20px;@media (min-width:480px){width:60%;}"], function (props) {
  return props.theme.white;
});
var StyledHeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styled__StyledHeroTitle",
  componentId: "s7dunm-3"
})(["font-size:6rem;"]);
var StyledHeroText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styled__StyledHeroText",
  componentId: "s7dunm-4"
})(["font-size:2.2rem;line-height:3.5em;font-weight:300;padding-bottom:5rem;@media (min-width:480px){line-height:1.5em;font-weight:300;min-width:80%;}"]);
var StyledButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledButtonBlock",
  componentId: "s7dunm-5"
})(["display:flex;& > button{margin-right:1.8rem;}a{color:", ";text-decoration:none;font-weight:normal;&:hover{color:red;}}"], function (props) {
  return props.theme.white;
});

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/logo.png */ "./static/logo.png");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/Logo/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Logo/index.js";





var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StyledLogo"], {
    src: _static_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/styled.js":
/*!***********************************!*\
  !*** ./components/Logo/styled.js ***!
  \***********************************/
/*! exports provided: StyledLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLogo", function() { return StyledLogo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styled__StyledLogo",
  componentId: "sc-10nrl95-0"
})(["width:5rem;cursor:pointer;"]);

/***/ }),

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
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
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/hamburger.svg */ "./static/hamburger.svg");
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/socialShare.svg */ "./static/socialShare.svg");
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_socialShare_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/Navigation/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Navigation/index.js";

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








var Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["NavStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["NavContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["NavList"], {
        className: this.state.mobileNav && 'show',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "https://medium.com/@thomas_blaymire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Contact"))), !this.state.mobileNav && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "hamburger-button",
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Open Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Navigation/styled.js":
/*!*****************************************!*\
  !*** ./components/Navigation/styled.js ***!
  \*****************************************/
/*! exports provided: NavStyles, NavList, NavContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavStyles", function() { return NavStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContainer", function() { return NavContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavStyles",
  componentId: "ey7zzx-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;.show{opacity:1;visibility:visible;transition:0.2s;position:fixed;left:0;top:0;background:#100e17f2;z-index:1;display:flex;flex-direction:column;align-items:center;width:100%;height:calc(100vh);height:100%;margin:0;padding:0;> ul{flex-direction:column;opacity:none;visibility:visible;justify-content:center;}}.close-button{border:none;background:0 0;display:none;cursor:pointer;position:relative;top:0;right:0;svg{width:50px;height:50px;}}.hamburger-button{display:block;border:none;cursor:pointer;outline:none;background:transparent;svg{width:50px;height:50px;}@media (min-width:950px){display:none;}}"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "styled__NavList",
  componentId: "ey7zzx-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;visibility:hidden;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:0px 15px;&:hover{color:#3eaca8;}}@media (min-width:950px){visibility:visible;margin:0;}.show{a{display:block;opacity:1;visibility:visible;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavContainer",
  componentId: "ey7zzx-2"
})(["display:flex;"]);

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
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Portfolio/PortfolioItem.js";



var PortfolioBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})(["margin-top:4rem;a{text-decoration:none;font-weight:normal;}"]);
var PortfolioImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PortfolioItem__PortfolioImage",
  componentId: "sc-25rbs8-1"
})(["width:100%;box-shadow:0 0 15px rgba(0,0,0,0.08),0 0 4px rgba(0,0,0,0.05);position:relative;height:auto;@media (min-width:768px){height:350px;}@media (min-width:992px){height:", ";}&:hover{cursor:pointer;}"], function (props) {
  return props.customStyle ? '350px' : '450px';
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioImage, {
    src: image,
    alt: name,
    customStyle: customStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
/* harmony import */ var _static_inplay_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/inplay.png */ "./static/inplay.png");
/* harmony import */ var _static_inplay_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_inplay_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/port-careers.jpg */ "./static/port-careers.jpg");
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/port-innovation-main.png */ "./static/port-innovation-main.png");
/* harmony import */ var _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/hermes-main.jpg */ "./static/hermes-main.jpg");
/* harmony import */ var _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/port-location.jpg */ "./static/port-location.jpg");
/* harmony import */ var _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_port_location_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Portfolio/PortfolioList.js";

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
        image: _static_inplay_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        name: 'Sky Betting & Gaming',
        tags: ['React', 'Mobx', 'Aphrodite', 'ES6'],
        url: '/portfolio-skybet'
      }, {
        id: 1,
        image: _static_port_innovation_main_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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
        image: _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        name: 'Hermes Careers',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
        url: '/portfolio-careers'
      }, {
        id: 4,
        image: _static_hermes_main_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
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
        image: _static_port_location_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
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
            lineNumber: 73
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, portfolioItems);
    }
  }]);

  return PortfolioList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioList);

/***/ }),

/***/ "./components/Social/index.js":
/*!************************************!*\
  !*** ./components/Social/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/facebook.svg */ "./static/facebook.svg");
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/twitter.svg */ "./static/twitter.svg");
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/linkedin.svg */ "./static/linkedin.svg");
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./components/Social/styled.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Social/index.js";









var Social = function Social() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["SocialWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["GetInTouch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    btnFontSize: '1.4rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Free Quote"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Facebook"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["SocialIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/tblaymire1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: _static_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Twitter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["SocialIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: _static_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Linkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["SocialIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/thomasblaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./components/Social/styled.js":
/*!*************************************!*\
  !*** ./components/Social/styled.js ***!
  \*************************************/
/*! exports provided: SocialWrapper, GetInTouch, Facebook, Twitter, Linkedin, SocialIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialWrapper", function() { return SocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouch", function() { return GetInTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return SocialIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SocialWrapper",
  componentId: "p0ko0e-0"
})(["display:flex;padding:0;margin:0;flex-direction:column;& > div{width:100%;height:200px;-webkit-flex-flow:wrap row;flex-flow:wrap row;display:flex;align-items:center;justify-content:center;flex-direction:column;@media (min-width:480px){height:350px;}}@media (min-width:480px){flex-direction:row;}.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:3.7rem;margin:0;padding-bottom:1rem;}"], function (props) {
  return props.theme.fontPrimary;
});
var GetInTouch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__GetInTouch",
  componentId: "p0ko0e-1"
})(["background-color:#e5eec1;"]);
var Facebook = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Facebook",
  componentId: "p0ko0e-2"
})(["background-color:#a0d5aa;"]);
var Twitter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Twitter",
  componentId: "p0ko0e-3"
})(["background-color:#537a83;"]);
var Linkedin = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Linkedin",
  componentId: "p0ko0e-4"
})(["background-color:#2a363b;"]);
var SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SocialIcon",
  componentId: "p0ko0e-5"
})(["text-align:center;svg{fill:#fff;width:27%;&:hover{cursor:pointer;fill:", ";}}"], function (props) {
  return props.theme.black;
});

/***/ }),

/***/ "./components/styles/PageStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/PageStyles.js ***!
  \*****************************************/
/*! exports provided: Container, Heading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
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
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PageStyles__Container",
  componentId: "sc-1dspmwg-1"
})(["max-width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;@media (min-width:568px){width:auto;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1170px;}"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "PageStyles__Heading",
  componentId: "sc-1dspmwg-2"
})(["font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:", ";font-size:4.2rem;margin:0;"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.greyDark;
});
/* harmony default export */ __webpack_exports__["default"] = (PageStyles);

/***/ }),

/***/ "./pages/index/data.js":
/*!*****************************!*\
  !*** ./pages/index/data.js ***!
  \*****************************/
/*! exports provided: expretiseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expretiseData", function() { return expretiseData; });
var expretiseData = [{
  title: 'Web Development',
  description: 'I work with various different front end technologies including HTML5, JavaScript, React and Redux to to ensure the end product is fast and easy to use.',
  icon: '../../static/keyboard.svg'
}, {
  title: 'Web Design',
  description: 'I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.',
  icon: '../../static/test_animated.svg'
}, {
  title: 'User Experience',
  description: 'I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.',
  icon: './../static/laptop.svg'
}];

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Hero */ "./components/Hero/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./components/Header/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Portfolio/PortfolioList */ "./components/Portfolio/PortfolioList.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Card */ "./components/Card/index.js");
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Social */ "./components/Social/index.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CallToAction */ "./components/CallToAction/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./pages/index/styled.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data */ "./pages/index/data.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/pages/index/index.js";













var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Hello, I'm Tom",
    description: "I\u2019m a Front End Developer based in Sydney. I help companies deliver innovative, end-to-end products that meet both user and business needs.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "My Expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["ExpertiseRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_10__["expretiseData"] && _data__WEBPACK_IMPORTED_MODULE_10__["expretiseData"].map(function (expertise) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: expertise.title,
      title: expertise.title,
      description: expertise.description,
      icon: expertise.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["Location"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["LocationContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading location-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Building Web Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "I enjoy building and developing applications using the latest Front End technologies and tools."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "In the past I have worked on various different websites such as", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.xcover.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Xcover"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://m.skybet.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Sky Bet"), ' ', "and", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.myhermes.co.uk/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "myHermes"), ' ', "helping companys develop products to make a users life easier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "I also maintain a course review website", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.learnstability.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Learnstability"), ' ', "that is currently in beta."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.learnstability.com/blog",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["StyledButton"], {
    btnFontSize: '1.5rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '5px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Explore My Blog")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["LocationImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CallToAction__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["RecentProjects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
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
  }, "Recent Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["PortfolioWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    amount: 3,
    customStyle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Social__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index/styled.js":
/*!*******************************!*\
  !*** ./pages/index/styled.js ***!
  \*******************************/
/*! exports provided: StyledSection, ExpertiseRow, Location, LocationContent, LocationImage, RecentProjects, PortfolioWrapper, StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSection", function() { return StyledSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseRow", function() { return ExpertiseRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationContent", function() { return LocationContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationImage", function() { return LocationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentProjects", function() { return RecentProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioWrapper", function() { return PortfolioWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/man-phone.jpg */ "./static/man-phone.jpg");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");



var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__StyledSection",
  componentId: "o5oybj-0"
})(["padding:10rem 0rem;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ExpertiseRow",
  componentId: "o5oybj-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Location",
  componentId: "o5oybj-2"
})(["min-height:80vh;height:auto;display:flex;align-items:center;background-color:#f7f7f7;@media (min-width:480px){min-height:100vh;}"]);
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LocationContent",
  componentId: "o5oybj-3"
})(["width:100%;color:", ";.location-content{width:90%;margin:0 auto;text-align:left;@media (min-width:480px){width:60%;}P{font-size:1.8rem;&:not(:last-child){padding-bottom:2rem;}}}.location-heading{line-height:1.4em;margin-bottom:4rem;font-size:4.7rem;width:100%;@media (min-width:480px){width:80%;}}"], function (props) {
  return props.theme.grey;
});
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LocationImage",
  componentId: "o5oybj-4"
})(["width:100%;height:100vh;background-image:url(", ");background-attachment:fixed;background-size:cover;display:none;@media (min-width:480px){display:none;}@media (min-width:768px){height:110vh;display:block;}"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RecentProjects",
  componentId: "o5oybj-5"
})(["min-height:100vh;padding:10rem 0rem;p{width:70%;}"]);
var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__PortfolioWrapper",
  componentId: "o5oybj-6"
})(["& > *{margin-top:5rem;display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "styled__StyledButton",
  componentId: "o5oybj-7"
})(["margin-top:1rem;"]);

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

/***/ "./static/inplay.png":
/*!***************************!*\
  !*** ./static/inplay.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/inplay-17c7c10278561f44de449ae35118f267.png";

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

module.exports = "/_next/static/images/man-phone-56ea42275eb4205bbe6de95de0b9449d.jpg";

/***/ }),

/***/ "./static/me.jpg":
/*!***********************!*\
  !*** ./static/me.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/me-17ae86b3e341413a8e63fc192b207046.jpg";

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

module.exports = "/_next/static/images/port-innovation-main-f33966629625a6778dada0ec2a4a4e6b.png";

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

/***/ "./static/stock.jpg":
/*!**************************!*\
  !*** ./static/stock.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stock-a5789499ee3e40a98e481aeaeacdfcb1.jpg";

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
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index/index.js */"./pages/index/index.js");


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