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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/facebook.svg */ "./static/facebook.svg");
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/twitter.svg */ "./static/twitter.svg");
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/linkedin.svg */ "./static/linkedin.svg");
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/Footer/index.js";






var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterCopyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Copyright \xA9 Tom Blaymire All Rights Reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/***/ "./components/PageHero.js":
/*!********************************!*\
  !*** ./components/PageHero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_PageStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/PageStyles */ "./components/styles/PageStyles.js");
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/components/PageHero.js";



var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PageHero__HeroBlock",
  componentId: "sc-13x60d9-0"
})(["color:", ";width:100%;position:absolute;bottom:10rem;@media (min-width:992px){width:54%;bottom:16rem;}.intro{font-size:5.5rem;margin:0;line-height:1.5em;}.description{font-size:2.5rem;line-height:38px;}"], function (props) {
  return props.theme.white;
});

var Hero = function Hero(props) {
  var image = props.image,
      pageName = props.pageName,
      description = props.description;
  var style = {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    height: "70vh",
    backgroundAttachment: "fixed",
    backgroundPositionY: "-20rem",
    position: "relative"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PageStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, pageName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, description)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHero */ "./components/PageHero.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/about-hero.jpg */ "./static/about-hero.jpg");
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/laptop-portfolio.png */ "./static/laptop-portfolio.png");
/* harmony import */ var _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/thomasblaymire/Development/personal-old/frontend/pages/about.js";









var AboutIntro = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "about__AboutIntro",
  componentId: "dw0nrf-0"
})(["background-color:#fbfbfb;padding-top:5%;padding-bottom:5%;"]);
var AboutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "about__AboutWrapper",
  componentId: "dw0nrf-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));align-items:center;margin-top:2rem;"]);
var AboutInfo = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "about__AboutInfo",
  componentId: "dw0nrf-2"
})(["padding-right:3rem;p{margin:0 0 20px;line-height:30px;color:", ";font-family:", ";font-size:1.8rem;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.fontSecondary;
});
var AboutImage = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "about__AboutImage",
  componentId: "dw0nrf-3"
})(["img{width:550px;box-sizing:border-box;padding-left:15px;padding-right:15px;width:100%;}"]);

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    pageName: "About",
    description: "Learn more about my expertise.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutIntro, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "A little about me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "I have been working within the web industry for over 6 years now, helping clients of all sizes transform their digital presence online."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Currently I\u2019m working for the UK's leading online bookmaker", " " + " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://m.skybet.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Sky Betting & Gaming"), " ", "developing their primary website along with various in house enhancements."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "In the past I have worked for Hermes to implement various different digital transformation projects including e-commerce, dashboards and recruitment apps."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "What makes me stand out from the rest is that I have a real passion for helping businesses grow. By using the latest front end tools and technologies I ensure that my clients websites are not only faster than their competitors but are also memorable and easy to use.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Laptop With Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CallToAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Work with me on your next exiting project.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./static/about-hero.jpg":
/*!*******************************!*\
  !*** ./static/about-hero.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-hero-ed553e9cbd469655c892ba60d6c3b182.jpg";

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

/***/ "./static/laptop-portfolio.png":
/*!*************************************!*\
  !*** ./static/laptop-portfolio.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laptop-portfolio-f40253864b330749fe69fba0ca90951a.png";

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

/***/ "./static/socialShare.svg":
/*!********************************!*\
  !*** ./static/socialShare.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA3NiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYzIDBDNTUuODMyMSAwIDUwIDUuODMyMSA1MCAxM0M1MCAxNS4wODA3IDUwLjUwMDYgMTcuMDM0MiA1MS4zNzUgMTguNzgxMkwyMy41OTM4IDM1LjQ2ODhDMjEuMjMxNyAzMi4xNTEyIDE3LjM2NzkgMzAgMTMgMzBDNS44MzIxNCAzMCAwIDM1LjgzMjEgMCA0M0MwIDUwLjE2NzggNS44MzIxNCA1NiAxMyA1NkMxNy4zNjc5IDU2IDIxLjIzMTcgNTMuODQ4OCAyMy41OTM4IDUwLjUzMTJMNTEuMzc1IDY3LjIxODhDNTAuNTAwNiA2OC45NjU4IDUwIDcwLjkxOTMgNTAgNzNDNTAgODAuMTY3OSA1NS44MzIxIDg2IDYzIDg2QzcwLjE2NzkgODYgNzYgODAuMTY3OSA3NiA3M0M3NiA2NS44MzIxIDcwLjE2NzkgNjAgNjMgNjBDNTguNjMyMSA2MCA1NC43NjgzIDYyLjE1MTIgNTIuNDA2MiA2NS40Njg4TDI0LjYyNSA0OC44MTI1QzI1LjUwNzIgNDcuMDU5MiAyNiA0NS4wOTA2IDI2IDQzQzI2IDQwLjkwOTQgMjUuNTA3MiAzOC45NDA4IDI0LjYyNSAzNy4xODc1TDUyLjQwNjIgMjAuNTMxMkM1NC43NjgzIDIzLjg0ODggNTguNjMyMSAyNiA2MyAyNkM3MC4xNjc5IDI2IDc2IDIwLjE2NzkgNzYgMTNDNzYgNS44MzIxIDcwLjE2NzkgMCA2MyAwWk02MyAyQzY5LjA4NyAyIDc0IDYuOTEzIDc0IDEzQzc0IDE5LjA4NyA2OS4wODcgMjQgNjMgMjRDNTYuOTEzIDI0IDUyIDE5LjA4NyA1MiAxM0M1MiA2LjkxMyA1Ni45MTMgMiA2MyAyWk0xMyAzMkMxOS4wODcgMzIgMjQgMzYuOTEzIDI0IDQzQzI0IDQ5LjA4NyAxOS4wODcgNTQgMTMgNTRDNi45MTMwMiA1NCAyIDQ5LjA4NyAyIDQzQzIgMzYuOTEzIDYuOTEzMDIgMzIgMTMgMzJaTTYzIDYyQzY5LjA4NyA2MiA3NCA2Ni45MTMgNzQgNzNDNzQgNzkuMDg3IDY5LjA4NyA4NCA2MyA4NEM1Ni45MTMgODQgNTIgNzkuMDg3IDUyIDczQzUyIDY2LjkxMyA1Ni45MTMgNjIgNjMgNjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/twitter.svg":
/*!****************************!*\
  !*** ./static/twitter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjg0IDQwOHEtNjcgOTgtMTYyIDE2NyAxIDE0IDEgNDIgMCAxMzAtMzggMjU5LjV0LTExNS41IDI0OC41LTE4NC41IDIxMC41LTI1OCAxNDYtMzIzIDU0LjVxLTI3MSAwLTQ5Ni0xNDUgMzUgNCA3OCA0IDIyNSAwIDQwMS0xMzgtMTA1LTItMTg4LTY0LjV0LTExNC0xNTkuNXEzMyA1IDYxIDUgNDMgMCA4NS0xMS0xMTItMjMtMTg1LjUtMTExLjV0LTczLjUtMjA1LjV2LTRxNjggMzggMTQ2IDQxLTY2LTQ0LTEwNS0xMTV0LTM5LTE1NHEwLTg4IDQ0LTE2MyAxMjEgMTQ5IDI5NC41IDIzOC41dDM3MS41IDk5LjVxLTgtMzgtOC03NCAwLTEzNCA5NC41LTIyOC41dDIyOC41LTk0LjVxMTQwIDAgMjM2IDEwMiAxMDktMjEgMjA1LTc4LTM3IDExNS0xNDIgMTc4IDkzLTEwIDE4Ni01MHoiLz48L3N2Zz4="

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map