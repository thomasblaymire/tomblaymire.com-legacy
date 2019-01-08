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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/facebook.svg */ "./static/facebook.svg");
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/twitter.svg */ "./static/twitter.svg");
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/linkedin.svg */ "./static/linkedin.svg");
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Footer.js";





var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1f1jeuc-0"
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;display:flex;"]);
var FooterRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterRow",
  componentId: "sc-1f1jeuc-1"
})(["background:#2a2a2a;height:72px;display:flex;padding:15px 0;"]);
var FooterCopyright = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterCopyright",
  componentId: "sc-1f1jeuc-2"
})(["font-size:80%;color:#999;padding:10px 0;justify-content:flex-start;"]);
var FooterSocial = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterSocial",
  componentId: "sc-1f1jeuc-3"
})(["display:flex;padding-right:5px;img{width:10px;}"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterCopyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Copyright \xA9 Tom Blaymire All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterSocial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/tblaymire1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://linkedin.com/tblaymire1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Nav.js";

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







var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Nav__NavStyles",
  componentId: "hwzlet-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;.show{opacity:1;visibility:visible;transition:0.2s;position:fixed;left:0;top:0;background:#100e17f2;z-index:1;display:grid;width:100%;height:calc(100vh);height:100%;}.close-button{border:none;background:0 0;display:none;cursor:pointer;position:absolute;top:0;right:0;svg{width:50px;height:50px;}}"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul.withConfig({
  displayName: "Nav__NavList",
  componentId: "hwzlet-1"
})(["display:flex;align-items:center;justify-content:center;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:25px 15px;&:hover{color:#3eaca8;}@media (max-width:950px){display:none;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
var HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button.withConfig({
  displayName: "Nav__HamburgerIcon",
  componentId: "hwzlet-2"
})(["border:none;background:0 0;display:none;cursor:pointer;outline:none;@media (max-width:950px){display:block;}svg{width:50px;height:50px;}"]);

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
      mobileNav: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNavigationHandler", function () {
      _this.setState({
        mobileNav: !_this.state.mobileNav
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
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.state.mobileNav ? 'show' : 'haha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "https://medium.com/@thomas_blaymire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HamburgerIcon, {
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Open Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "close-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: _static_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Close Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/PageHero.js";


var HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PageHero__HeroContainer",
  componentId: "sc-13x60d9-0"
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PageHero__HeroBlock",
  componentId: "sc-13x60d9-1"
})(["color:", ";margin-top:4rem;width:54%;.intro{font-size:5.5rem;margin:0;line-height:1.5em;}.description{font-size:2.5rem;line-height:38px;}"], function (props) {
  return props.theme.white;
});

var Hero = function Hero(props) {
  var image = props.image,
      pageName = props.pageName,
      description = props.description;
  var style = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: 'cover',
    height: '70vh',
    backgroundAttachment: 'fixed',
    backgroundPositionY: '-20rem'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, pageName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

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
})(["margin-top:4rem;.portfolio-image{width:100%;height:auto;position:relative;&:hover{cursor:pointer;}}a{text-decoration:none;font-weight:normal;}"]);
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([".portfolio-title{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:", ";cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;margin-top:0.5rem;}li{color:#474747;margin-right:1rem;background:", ";border-radius:5px;padding:0 10px;cursor:initial;}"], function (props) {
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
      url = props.url;
  var tagList = tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, tag);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "portfolio-image",
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
        tags: ['React', 'Redux', 'ES6', 'JavaScript']
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
          url: item.url,
          id: item.id,
          name: item.name,
          tags: item.tags,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, portfolioItems);
    }
  }]);

  return PortfolioList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioList);

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
})(["height:auto;min-height:100vh;.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:", ";font-size:4.2rem;margin:0;}.sub-heading{font-family:", ";font-size:2rem;color:#474747;margin:0;line-height:3rem;}.container{max-width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.fontSecondary;
});
/* harmony default export */ __webpack_exports__["default"] = (PageStyles);

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHero */ "./components/PageHero.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _static_portfolio_hero_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/portfolio-hero.jpg */ "./static/portfolio-hero.jpg");
/* harmony import */ var _static_portfolio_hero_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_portfolio_hero_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Portfolio/PortfolioList */ "./components/Portfolio/PortfolioList.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/pages/portfolio.js";








var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "portfolio__PortfolioWrapper",
  componentId: "sc-1jmilhs-0"
})(["margin:7rem 0rem;& > *{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-gap:5rem;justify-content:center;}"]);

var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _static_portfolio_hero_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    pageName: "Portfolio",
    description: "View my past projects and recent work.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    amount: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./static/close.svg":
/*!**************************!*\
  !*** ./static/close.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDkwIDEzMjJxMCA0MC0yOCA2OGwtMTM2IDEzNnEtMjggMjgtNjggMjh0LTY4LTI4bC0yOTQtMjk0LTI5NCAyOTRxLTI4IDI4LTY4IDI4dC02OC0yOGwtMTM2LTEzNnEtMjgtMjgtMjgtNjh0MjgtNjhsMjk0LTI5NC0yOTQtMjk0cS0yOC0yOC0yOC02OHQyOC02OGwxMzYtMTM2cTI4LTI4IDY4LTI4dDY4IDI4bDI5NCAyOTQgMjk0LTI5NHEyOC0yOCA2OC0yOHQ2OCAyOGwxMzYgMTM2cTI4IDI4IDI4IDY4dC0yOCA2OGwtMjk0IDI5NCAyOTQgMjk0cTI4IDI4IDI4IDY4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

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

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjY0IDEzNDR2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5aC0xNDA4cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1em0wLTUxMnYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTE0MDhxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtMTQwOHEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDE0MDhxMjYgMCA0NSAxOXQxOSA0NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

/***/ }),

/***/ "./static/hermes-main.jpg":
/*!********************************!*\
  !*** ./static/hermes-main.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hermes-main-47845c99c51b4718b1a7b870e8d38ca2.jpg";

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

/***/ "./static/portfolio-hero.jpg":
/*!***********************************!*\
  !*** ./static/portfolio-hero.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/portfolio-hero-f8cc6880f91437bfad5627ef56982dda.jpg";

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
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/portfolio.js */"./pages/portfolio.js");


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
//# sourceMappingURL=portfolio.js.map