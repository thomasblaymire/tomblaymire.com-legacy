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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjY0IDEzNDR2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5aC0xNDA4cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1em0wLTUxMnYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTE0MDhxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtMTQwOHEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDE0MDhxMjYgMCA0NSAxOXQxOSA0NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDkwIDEzMjJxMCA0MC0yOCA2OGwtMTM2IDEzNnEtMjggMjgtNjggMjh0LTY4LTI4bC0yOTQtMjk0LTI5NCAyOTRxLTI4IDI4LTY4IDI4dC02OC0yOGwtMTM2LTEzNnEtMjgtMjgtMjgtNjh0MjgtNjhsMjk0LTI5NC0yOTQtMjk0cS0yOC0yOC0yOC02OHQyOC02OGwxMzYtMTM2cTI4LTI4IDY4LTI4dDY4IDI4bDI5NCAyOTQgMjk0LTI5NHEyOC0yOCA2OC0yOHQ2OCAyOGwxMzYgMTM2cTI4IDI4IDI4IDY4dC0yOCA2OGwtMjk0IDI5NCAyOTQgMjk0cTI4IDI4IDI4IDY4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-db385bfb85d6b3e1d78473cc8831d3ef.png";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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
/* harmony default export */ __webpack_exports__["a"] = (PageStyles);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyAgdmlld0JveD0iMCAwIDE3OTIgMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTM0MyAxMnYyNjRoLTE1N3EtODYgMC0xMTYgMzZ0LTMwIDEwOHYxODloMjkzbC0zOSAyOTZoLTI1NHY3NTloLTMwNnYtNzU5aC0yNTV2LTI5NmgyNTV2LTIxOHEwLTE4NiAxMDQtMjg4LjV0Mjc3LTEwMi41cTE0NyAwIDIyOCAxMnoiLz48L3N2Zz4="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjg0IDQwOHEtNjcgOTgtMTYyIDE2NyAxIDE0IDEgNDIgMCAxMzAtMzggMjU5LjV0LTExNS41IDI0OC41LTE4NC41IDIxMC41LTI1OCAxNDYtMzIzIDU0LjVxLTI3MSAwLTQ5Ni0xNDUgMzUgNCA3OCA0IDIyNSAwIDQwMS0xMzgtMTA1LTItMTg4LTY0LjV0LTExNC0xNTkuNXEzMyA1IDYxIDUgNDMgMCA4NS0xMS0xMTItMjMtMTg1LjUtMTExLjV0LTczLjUtMjA1LjV2LTRxNjggMzggMTQ2IDQxLTY2LTQ0LTEwNS0xMTV0LTM5LTE1NHEwLTg4IDQ0LTE2MyAxMjEgMTQ5IDI5NC41IDIzOC41dDM3MS41IDk5LjVxLTgtMzgtOC03NCAwLTEzNCA5NC41LTIyOC41dDIyOC41LTk0LjVxMTQwIDAgMjM2IDEwMiAxMDktMjEgMjA1LTc4LTM3IDExNS0xNDIgMTc4IDkzLTEwIDE4Ni01MHoiLz48L3N2Zz4="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NzcgNjI1djk5MWgtMzMwdi05OTFoMzMwem0yMS0zMDZxMSA3My01MC41IDEyMnQtMTM1LjUgNDloLTJxLTgyIDAtMTMyLTQ5dC01MC0xMjJxMC03NCA1MS41LTEyMi41dDEzNC41LTQ4LjUgMTMzIDQ4LjUgNTEgMTIyLjV6bTExNjYgNzI5djU2OGgtMzI5di01MzBxMC0xMDUtNDAuNS0xNjQuNXQtMTI2LjUtNTkuNXEtNjMgMC0xMDUuNSAzNC41dC02My41IDg1LjVxLTExIDMwLTExIDgxdjU1M2gtMzI5cTItMzk5IDItNjQ3dC0xLTI5NmwtMS00OGgzMjl2MTQ0aC0ycTIwLTMyIDQxLTU2dDU2LjUtNTIgODctNDMuNSAxMTQuNS0xNS41cTE3MSAwIDI3NSAxMTMuNXQxMDQgMzMyLjV6IiAvPjwvc3ZnPg=="

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-inlinesvg"
var external_react_inlinesvg_ = __webpack_require__(3);
var external_react_inlinesvg_default = /*#__PURE__*/__webpack_require__.n(external_react_inlinesvg_);

// EXTERNAL MODULE: ./static/hamburger.svg
var hamburger = __webpack_require__(4);
var hamburger_default = /*#__PURE__*/__webpack_require__.n(hamburger);

// EXTERNAL MODULE: ./static/close.svg
var static_close = __webpack_require__(5);
var close_default = /*#__PURE__*/__webpack_require__.n(static_close);

// CONCATENATED MODULE: ./components/Nav.js
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







var NavStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Nav__NavStyles",
  componentId: "hwzlet-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;.show{opacity:1;visibility:visible;transition:0.2s;position:fixed;left:0;top:0;background:#100e17f2;z-index:1;display:grid;width:100%;height:calc(100vh);height:100%;}.close-button{border:none;background:0 0;display:none;cursor:pointer;position:absolute;top:0;right:0;svg{width:50px;height:50px;}}"]);
var NavList = external_styled_components_default.a.ul.withConfig({
  displayName: "Nav__NavList",
  componentId: "hwzlet-1"
})(["display:flex;align-items:center;justify-content:center;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:25px 15px;&:hover{color:#3eaca8;}@media (max-width:950px){display:none;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
var HamburgerIcon = external_styled_components_default.a.button.withConfig({
  displayName: "Nav__HamburgerIcon",
  componentId: "hwzlet-2"
})(["border:none;background:0 0;display:none;cursor:pointer;outline:none;@media (max-width:950px){display:block;}svg{width:50px;height:50px;}"]);

var Nav_Nav =
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
      return external_react_default.a.createElement(NavStyles, null, external_react_default.a.createElement("div", {
        className: this.state.mobileNav ? 'show' : 'haha'
      }, external_react_default.a.createElement(NavList, null, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", null, "About")), external_react_default.a.createElement(link_default.a, {
        href: "https://medium.com/@thomas_blaymire"
      }, external_react_default.a.createElement("a", {
        target: "_blank"
      }, "Blog")), external_react_default.a.createElement(link_default.a, {
        href: "/portfolio"
      }, external_react_default.a.createElement("a", null, "Portfolio")), external_react_default.a.createElement(link_default.a, {
        href: "/contact"
      }, external_react_default.a.createElement("a", null, "Contact")), external_react_default.a.createElement(HamburgerIcon, {
        onClick: this.toggleNavigationHandler
      }, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
        src: hamburger_default.a,
        alt: "Open Navigation"
      }))), external_react_default.a.createElement("button", {
        className: "close-button"
      }, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
        src: close_default.a,
        alt: "Close Navigation"
      }))));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: ./static/logo.png
var logo = __webpack_require__(6);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./components/Logo.js




var LogoImg = external_styled_components_default.a.img.withConfig({
  displayName: "Logo__LogoImg",
  componentId: "mybl0u-0"
})(["width:5rem;cursor:pointer;"]);

var Logo_Logo = function Logo() {
  return external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement(LogoImg, {
    src: logo_default.a,
    alt: "Logo"
  }));
};

/* harmony default export */ var components_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./components/Header.js




var StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1stxykk-0"
})([".bar{width:1170px;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:2rem 0rem;}"]);

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(components_Logo, null), external_react_default.a.createElement(components_Nav, null)));
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, props);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-pad-ac7ec497bf51a42dafef5afa98fe50fc.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-gpws-27f6360f7e506604d2592da15514e46a.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-careers-4ef76766d14c0b0a705899f757ac22a7.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-innovation-main-b11a1569f149734b54be4ef7b18e0b9c.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hermes-main-47845c99c51b4718b1a7b870e8d38ca2.jpg";

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_ctaImage1_jpg__WEBPACK_IMPORTED_MODULE_2__);



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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroudImage, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroundText, null, props.text));
};

/* harmony default export */ __webpack_exports__["a"] = (FullWidthCta);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ctaImage1-fb4579535992ebf2f746a10bebf6f375.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-location-71f1d9478e32b2f089581f6b449cc8b6.jpg";

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Portfolio/PortfolioItem.js



var PortfolioBox = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})(["margin-top:4rem;.portfolio-image{width:100%;height:auto;position:relative;&:hover{cursor:pointer;}}a{text-decoration:none;font-weight:normal;}"]);
var PortfolioMeta = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([".portfolio-title{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:", ";cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;margin-top:0.5rem;}li{color:#474747;margin-right:1rem;background:", ";border-radius:5px;padding:0 10px;cursor:initial;}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.greyDark;
}, function (props) {
  return props.theme.greyLight;
});

var PortfolioItem_PortfolioItem = function PortfolioItem(props) {
  var image = props.image,
      name = props.name,
      tags = props.tags,
      id = props.id,
      url = props.url;
  var tagList = tags.map(function (tag) {
    return external_react_default.a.createElement("li", {
      key: tag
    }, tag);
  });
  return external_react_default.a.createElement(PortfolioBox, null, external_react_default.a.createElement(link_default.a, {
    href: url
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
    className: "portfolio-image",
    src: image,
    alt: name
  }), external_react_default.a.createElement(PortfolioMeta, null, external_react_default.a.createElement("h5", {
    className: "portfolio-title"
  }, name), external_react_default.a.createElement("ul", null, tagList)))));
};

/* harmony default export */ var Portfolio_PortfolioItem = (PortfolioItem_PortfolioItem);
// EXTERNAL MODULE: ./static/port-pad.jpg
var port_pad = __webpack_require__(17);
var port_pad_default = /*#__PURE__*/__webpack_require__.n(port_pad);

// EXTERNAL MODULE: ./static/port-gpws.jpg
var port_gpws = __webpack_require__(18);
var port_gpws_default = /*#__PURE__*/__webpack_require__.n(port_gpws);

// EXTERNAL MODULE: ./static/port-careers.jpg
var port_careers = __webpack_require__(19);
var port_careers_default = /*#__PURE__*/__webpack_require__.n(port_careers);

// EXTERNAL MODULE: ./static/port-innovation-main.png
var port_innovation_main = __webpack_require__(20);
var port_innovation_main_default = /*#__PURE__*/__webpack_require__.n(port_innovation_main);

// EXTERNAL MODULE: ./static/hermes-main.jpg
var hermes_main = __webpack_require__(21);
var hermes_main_default = /*#__PURE__*/__webpack_require__.n(hermes_main);

// EXTERNAL MODULE: ./static/port-location.jpg
var port_location = __webpack_require__(25);
var port_location_default = /*#__PURE__*/__webpack_require__.n(port_location);

// CONCATENATED MODULE: ./components/Portfolio/PortfolioList.js
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










var PortfolioItems = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioList__PortfolioItems",
  componentId: "sc-6df1tk-0"
})([""]);

var PortfolioList_PortfolioList =
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
        image: port_innovation_main_default.a,
        name: 'Hermes Innovation',
        tags: ['Angular JS', 'HTML5', 'CSS3', 'Jasmine'],
        url: '/portfolio-innovation'
      }, {
        id: 2,
        image: port_pad_default.a,
        name: 'Product Analysis Dashboard',
        tags: ['React', 'Redux', 'Styled Components', 'Jest'],
        url: '/portfolio-pad'
      }, {
        id: 3,
        image: port_careers_default.a,
        name: 'Hermes Careers',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
        url: '/portfolio-careers'
      }, {
        id: 4,
        image: hermes_main_default.a,
        name: 'Hermes',
        tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
        url: '/portfolio-hermes'
      }, {
        id: 5,
        image: port_gpws_default.a,
        name: 'GP Web Solutions',
        tags: ['React', 'CSS3', 'Web Development', 'JavaScript'],
        url: '/portfolio-gpws'
      }, {
        id: 6,
        image: port_location_default.a,
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
        return external_react_default.a.createElement(Portfolio_PortfolioItem, {
          key: item.id,
          image: item.image,
          url: item.url,
          id: item.id,
          name: item.name,
          tags: item.tags
        });
      });
      return external_react_default.a.createElement(PortfolioItems, null, portfolioItems);
    }
  }]);

  return PortfolioList;
}(external_react_["Component"]);

/* harmony default export */ var Portfolio_PortfolioList = __webpack_exports__["a"] = (PortfolioList_PortfolioList);

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/me-a3a0244f06c101041865fbf9af7b3fbf.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/man-phone-0017cd76f118e448715c49db3cf879c1.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iIj4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjYiIGQ9Ik0yMyA1NyBMNDEgNTcgTDQxIDYzIEwyMyA2MyBaIiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfMCI+PC9wYXRoPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMjYiIGhlaWdodD0iMTAiIGQ9Ik0xOSA0NyBMNDUgNDcgTDQ1IDU3IEwxOSA1NyBaIiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfMSI+PC9wYXRoPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNDEsNDdMNDEsNDNMNDgsMzBMMzIsMUwxNiwzMEwyMyw0M0wyMyw0NyIgc3R5bGU9IiIgY2xhc3M9InBXbFBvYlpyXzIiPjwvcGF0aD4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI4LDI4Ljg3NUE0LDQgMCwxLDEgMzYsMjguODc1QTQsNCAwLDEsMSAyOCwyOC44NzUiIHN0eWxlPSIiIGNsYXNzPSJwV2xQb2Jacl8zIj48L3BhdGg+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNlYWNhOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zMiwxTDMyLDI1IiBzdHlsZT0iIiBjbGFzcz0icFdsUG9iWnJfNCI+PC9wYXRoPgo8c3R5bGUgZGF0YS1tYWRlLXdpdGg9InZpdnVzLWluc3RhbnQiPi5wV2xQb2Jacl8we3N0cm9rZS1kYXNoYXJyYXk6NDggNTA7c3Ryb2tlLWRhc2hvZmZzZXQ6NDk7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAwbXMgZm9yd2FyZHM7fS5wV2xQb2Jacl8xe3N0cm9rZS1kYXNoYXJyYXk6NzIgNzQ7c3Ryb2tlLWRhc2hvZmZzZXQ6NzM7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAyNTBtcyBmb3J3YXJkczt9LnBXbFBvYlpyXzJ7c3Ryb2tlLWRhc2hhcnJheToxMDQgMTA2O3N0cm9rZS1kYXNob2Zmc2V0OjEwNTthbmltYXRpb246cFdsUG9iWnJfZHJhdyAxMDAwbXMgbGluZWFyIDUwMG1zIGZvcndhcmRzO30ucFdsUG9iWnJfM3tzdHJva2UtZGFzaGFycmF5OjI2IDI4O3N0cm9rZS1kYXNob2Zmc2V0OjI3O2FuaW1hdGlvbjpwV2xQb2Jacl9kcmF3IDEwMDBtcyBsaW5lYXIgNzUwbXMgZm9yd2FyZHM7fS5wV2xQb2Jacl80e3N0cm9rZS1kYXNoYXJyYXk6MjQgMjY7c3Ryb2tlLWRhc2hvZmZzZXQ6MjU7YW5pbWF0aW9uOnBXbFBvYlpyX2RyYXcgMTAwMG1zIGxpbmVhciAxMDAwbXMgZm9yd2FyZHM7fUBrZXlmcmFtZXMgcFdsUG9iWnJfZHJhd3sxMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7fX1Aa2V5ZnJhbWVzIHBXbFBvYlpyX2ZhZGV7MCV7c3Ryb2tlLW9wYWNpdHk6MTt9OTQuNDQ0NDQ0NDQ0NDQ0NDQle3N0cm9rZS1vcGFjaXR5OjE7fTEwMCV7c3Ryb2tlLW9wYWNpdHk6MDt9fTwvc3R5bGU+PC9zdmc+"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMSAyMmg2MnYzMEgxeiIgc3Ryb2tlLWRhc2hhcnJheT0iMTg0LDE4NiIgY2xhc3M9ImRoVkNWVFhoXzAiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyAyMnYtOGgxNFY3SDExVjQiIHN0cm9rZS1kYXNoYXJyYXk9IjQyLDQ0IiBjbGFzcz0iZGhWQ1ZUWGhfMSI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNlYWNhOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00IDI5aDRNMTAgMjloNE0xNiAyOWg0TTIyIDI5aDRNMjggMjloNE0zNCAyOWg0TTQwIDI5aDRNNDYgMjloNE01MiAyOWg0TTQgNDVoNE0xMCA0NWg0IiBzdHJva2UtZGFzaGFycmF5PSI0LDYiIGNsYXNzPSJkaFZDVlRYaF8yIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE2IDQ1aDI2IiBzdHJva2UtZGFzaGFycmF5PSIyNiwyOCIgY2xhc3M9ImRoVkNWVFhoXzMiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZWFjYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNTAgNDVoNE01NiA0NWg0TTQ0IDQ1aDRNOCAzN2g0TTE0IDM3aDRNMjAgMzdoNE0yNiAzN2g0TTMyIDM3aDRNMzggMzdoNE00NCAzN2g0TTUwIDM3aDRNNTYgMzdoNCIgc3Ryb2tlLWRhc2hhcnJheT0iNCw2IiBjbGFzcz0iZGhWQ1ZUWGhfNCI+PC9wYXRoPjxzdHlsZSBkYXRhLW1hZGUtd2l0aD0idml2dXMtaW5zdGFudCI+LmRoVkNWVFhoXzB7c3Ryb2tlLWRhc2hhcnJheToxODQgMTg2O3N0cm9rZS1kYXNob2Zmc2V0OjE4NTthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDBtcyBmb3J3YXJkczt9LmRoVkNWVFhoXzF7c3Ryb2tlLWRhc2hhcnJheTo0MiA0NDtzdHJva2UtZGFzaG9mZnNldDo0MzthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDI1MG1zIGZvcndhcmRzO30uZGhWQ1ZUWGhfMntzdHJva2UtZGFzaGFycmF5OjQ0IDQ2O3N0cm9rZS1kYXNob2Zmc2V0OjQ1O2FuaW1hdGlvbjpkaFZDVlRYaF9kcmF3IDIwMDBtcyBsaW5lYXIgNTAwbXMgZm9yd2FyZHM7fS5kaFZDVlRYaF8ze3N0cm9rZS1kYXNoYXJyYXk6MjYgMjg7c3Ryb2tlLWRhc2hvZmZzZXQ6Mjc7YW5pbWF0aW9uOmRoVkNWVFhoX2RyYXcgMjAwMG1zIGxpbmVhciA3NTBtcyBmb3J3YXJkczt9LmRoVkNWVFhoXzR7c3Ryb2tlLWRhc2hhcnJheTo0OCA1MDtzdHJva2UtZGFzaG9mZnNldDo0OTthbmltYXRpb246ZGhWQ1ZUWGhfZHJhdyAyMDAwbXMgbGluZWFyIDEwMDBtcyBmb3J3YXJkczt9QGtleWZyYW1lcyBkaFZDVlRYaF9kcmF3ezEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDt9fUBrZXlmcmFtZXMgZGhWQ1ZUWGhfZmFkZXswJXtzdHJva2Utb3BhY2l0eToxO305NC40NDQ0NDQ0NDQ0NDQ0NCV7c3Ryb2tlLW9wYWNpdHk6MTt9MTAwJXtzdHJva2Utb3BhY2l0eTowO319PC9zdHlsZT48L3N2Zz4="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgc3R5bGU9IiI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2VhY2E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTggMTJoNDh2MzRIOHoiIHN0cm9rZS1kYXNoYXJyYXk9IjE2NCwxNjYiIGNsYXNzPSJ0bndPUGprZ18wIj48L3BhdGg+PHBhdGggZD0iTTEgNDZoNjJ2NkgxeiIgc3Ryb2tlLWRhc2hhcnJheT0iMTM2LDEzOCIgY2xhc3M9InRud09QamtnXzEiPjwvcGF0aD48cGF0aCBkPSJNMzQgMTZoLTQiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNiIgY2xhc3M9InRud09QamtnXzIiPjwvcGF0aD48L2c+PHN0eWxlIGRhdGEtbWFkZS13aXRoPSJ2aXZ1cy1pbnN0YW50Ij4udG53T1Bqa2dfMHtzdHJva2UtZGFzaGFycmF5OjE2NCAxNjY7c3Ryb2tlLWRhc2hvZmZzZXQ6MTY1O2FuaW1hdGlvbjp0bndPUGprZ19kcmF3IDIwMDBtcyBsaW5lYXIgMG1zIGZvcndhcmRzO30udG53T1Bqa2dfMXtzdHJva2UtZGFzaGFycmF5OjEzNiAxMzg7c3Ryb2tlLWRhc2hvZmZzZXQ6MTM3O2FuaW1hdGlvbjp0bndPUGprZ19kcmF3IDIwMDBtcyBsaW5lYXIgNTAwbXMgZm9yd2FyZHM7fS50bndPUGprZ18ye3N0cm9rZS1kYXNoYXJyYXk6NCA2O3N0cm9rZS1kYXNob2Zmc2V0OjU7YW5pbWF0aW9uOnRud09QamtnX2RyYXcgMjAwMG1zIGxpbmVhciAxMDAwbXMgZm9yd2FyZHM7fUBrZXlmcmFtZXMgdG53T1Bqa2dfZHJhd3sxMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7fX1Aa2V5ZnJhbWVzIHRud09QamtnX2ZhZGV7MCV7c3Ryb2tlLW9wYWNpdHk6MTt9OTQuNDQ0NDQ0NDQ0NDQ0NDQle3N0cm9rZS1vcGFjaXR5OjE7fTEwMCV7c3Ryb2tlLW9wYWNpdHk6MDt9fTwvc3R5bGU+PC9zdmc+"

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./static/me.jpg
var me = __webpack_require__(31);
var me_default = /*#__PURE__*/__webpack_require__.n(me);

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(16);

// CONCATENATED MODULE: ./components/Hero.js





var HeroImage = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__HeroImage",
  componentId: "sc-1oj9b8p-0"
})(["background-image:url(", ");background-size:cover;min-height:100vh;"], me_default.a);
var HeroContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__HeroContainer",
  componentId: "sc-1oj9b8p-1"
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__HeroBlock",
  componentId: "sc-1oj9b8p-2"
})(["color:", ";margin-top:3.5rem;width:60%;.intro{font-size:7vmin;margin:0;}.description{font-size:3.5vmin;line-height:38px;font-weight:300;}"], function (props) {
  return props.theme.white;
});
var HeroButtons = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__HeroButtons",
  componentId: "sc-1oj9b8p-3"
})(["margin-top:8rem;display:flex;& > button{margin-right:1.8rem;}a{color:", ";text-decoration:none;font-weight:normal;&:hover{color:red;}}"], function (props) {
  return props.theme.white;
});

var Hero_Hero = function Hero(props) {
  return external_react_default.a.createElement(HeroImage, null, external_react_default.a.createElement(HeroContainer, null, props.children, external_react_default.a.createElement(HeroBlock, null, external_react_default.a.createElement("h2", {
    className: "intro"
  }, "Hello, I'm Tom"), external_react_default.a.createElement("div", {
    className: "description"
  }, "I\u2019m a Freelance (UI/UX) Software Engineer based in Leeds. I help companies deliver innovative, end-to-end products that meet both user and business needs."), external_react_default.a.createElement(HeroButtons, null, external_react_default.a.createElement(link_default.a, {
    href: "/portfolio"
  }, external_react_default.a.createElement(Button["a" /* default */], {
    primaryColor: "#fff",
    borderColor: '#05af43',
    bgColor: "#05af43",
    hoverBg: '#05da53'
  }, "My Work")), external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement(Button["a" /* default */], {
    primaryColor: "#fff",
    bgColor: "transparent",
    borderColor: '#fff',
    hoverBg: '#fff',
    hoverColor: '#000'
  }, "Let's Talk"))))));
};

/* harmony default export */ var components_Hero = (Hero_Hero);
// EXTERNAL MODULE: ./components/Header.js + 2 modules
var Header = __webpack_require__(11);

// EXTERNAL MODULE: ./components/styles/PageStyles.js
var PageStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Portfolio/PortfolioList.js + 1 modules
var PortfolioList = __webpack_require__(26);

// EXTERNAL MODULE: external "react-inlinesvg"
var external_react_inlinesvg_ = __webpack_require__(3);
var external_react_inlinesvg_default = /*#__PURE__*/__webpack_require__.n(external_react_inlinesvg_);

// CONCATENATED MODULE: ./components/ExpertiseCard.js



var Block = external_styled_components_default.a.div.withConfig({
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

var ExpertiseCard_ExpertiseCard = function ExpertiseCard(props) {
  var title = props.title,
      description = props.description,
      icon = props.icon;
  return external_react_default.a.createElement(Block, null, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
    className: "icon",
    src: icon,
    alt: title
  }), external_react_default.a.createElement("h2", {
    className: "title"
  }, title), external_react_default.a.createElement("div", {
    className: "seperator"
  }, external_react_default.a.createElement("span", {
    className: "divide"
  })), external_react_default.a.createElement("div", {
    className: "description"
  }, description));
};

/* harmony default export */ var components_ExpertiseCard = (ExpertiseCard_ExpertiseCard);
// EXTERNAL MODULE: ./static/facebook.svg
var facebook = __webpack_require__(8);
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook);

// EXTERNAL MODULE: ./static/twitter.svg
var twitter = __webpack_require__(9);
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter);

// EXTERNAL MODULE: ./static/linkedin.svg
var linkedin = __webpack_require__(10);
var linkedin_default = /*#__PURE__*/__webpack_require__.n(linkedin);

// CONCATENATED MODULE: ./components/SocialLinks.js







var SocialWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__SocialWrapper",
  componentId: "bmn958-0"
})(["display:flex;padding:0;margin:0;& > div{width:100%;height:350px;-webkit-flex-flow:wrap row;flex-flow:wrap row;display:flex;align-items:center;justify-content:center;flex-direction:column;}.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:3.7rem;margin:0;padding-bottom:1rem;}"], function (props) {
  return props.theme.fontPrimary;
});
var GetInTouch = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__GetInTouch",
  componentId: "bmn958-1"
})(["background-color:#e5eec1;"]);
var Facebook = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__Facebook",
  componentId: "bmn958-2"
})(["background-color:#a0d5aa;"]);
var Twitter = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__Twitter",
  componentId: "bmn958-3"
})(["background-color:#537a83;"]);
var Linkedin = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__Linkedin",
  componentId: "bmn958-4"
})(["background-color:#2a363b;"]);
var SocialIcon = external_styled_components_default.a.div.withConfig({
  displayName: "SocialLinks__SocialIcon",
  componentId: "bmn958-5"
})(["text-align:center;svg{fill:#fff;width:27%;&:hover{cursor:pointer;fill:", ";}}"], function (props) {
  return props.theme.black;
});

var SocialLinks_SocialLinks = function SocialLinks() {
  return external_react_default.a.createElement(SocialWrapper, null, external_react_default.a.createElement(GetInTouch, null, external_react_default.a.createElement("h4", {
    className: "heading"
  }, "Get in touch"), external_react_default.a.createElement(Button["a" /* default */], {
    btnFontSize: '1.4rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px'
  }, "Free Quote")), external_react_default.a.createElement(Facebook, null, external_react_default.a.createElement(SocialIcon, null, external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/tblaymire1"
  }, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
    src: facebook_default.a,
    alt: "Facebook"
  })))), external_react_default.a.createElement(Twitter, null, external_react_default.a.createElement(SocialIcon, null, external_react_default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire"
  }, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
    src: twitter_default.a,
    alt: "Twitter"
  })))), external_react_default.a.createElement(Linkedin, null, external_react_default.a.createElement(SocialIcon, null, external_react_default.a.createElement("a", {
    href: "https://www.linkedin.com/in/thomasblaymire"
  }, external_react_default.a.createElement(external_react_inlinesvg_default.a, {
    src: linkedin_default.a,
    alt: "Linkedin"
  })))));
};

/* harmony default export */ var components_SocialLinks = (SocialLinks_SocialLinks);
// EXTERNAL MODULE: ./components/FullWidthCta.js
var FullWidthCta = __webpack_require__(23);

// EXTERNAL MODULE: ./static/man-phone.jpg
var man_phone = __webpack_require__(32);
var man_phone_default = /*#__PURE__*/__webpack_require__.n(man_phone);

// EXTERNAL MODULE: ./static/test_animated.svg
var test_animated = __webpack_require__(33);
var test_animated_default = /*#__PURE__*/__webpack_require__.n(test_animated);

// EXTERNAL MODULE: ./static/keyboard.svg
var keyboard = __webpack_require__(34);
var keyboard_default = /*#__PURE__*/__webpack_require__.n(keyboard);

// EXTERNAL MODULE: ./static/laptop.svg
var laptop = __webpack_require__(35);
var laptop_default = /*#__PURE__*/__webpack_require__.n(laptop);

// CONCATENATED MODULE: ./pages/index.js














var Expertise = external_styled_components_default.a.div.withConfig({
  displayName: "pages__Expertise",
  componentId: "sc-1lwpsg5-0"
})(["padding:10rem 0rem;"]);
var ExpertiseRow = external_styled_components_default.a.div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = external_styled_components_default.a.div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-2"
})(["height:100vh;display:flex;align-items:center;background-color:", ";"], function (props) {
  return props.theme.seaGreen;
});
var LocationContent = external_styled_components_default.a.div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-3"
})(["width:100%;color:", ";.location-content{width:60%;margin:0 auto;text-align:left;}.location-heading{line-height:1.4em;margin-bottom:4rem;font-size:4.7rem;width:80%;}p{margin:0 0 20px;font-size:1.8rem;color:#474747;font-family:Source Sans Pro;}"], function (props) {
  return props.theme.grey;
});
var LocationImage = external_styled_components_default.a.div.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-4"
})(["width:100%;height:100%;background-image:url(", ");background-attachment:fixed;background-size:cover;"], man_phone_default.a);
var RecentProjects = external_styled_components_default.a.div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-5"
})(["min-height:100vh;padding:10rem 0rem;p{width:70%;}"]);
var PortfolioWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pages__PortfolioWrapper",
  componentId: "sc-1lwpsg5-6"
})(["& > *{margin-top:5rem;display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}"]);

var pages_Home = function Home() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Hero, null, external_react_default.a.createElement(Header["a" /* default */], null)), external_react_default.a.createElement(PageStyles["a" /* default */], null, external_react_default.a.createElement(Expertise, null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("h2", {
    className: "heading"
  }, "My expretise"), external_react_default.a.createElement(ExpertiseRow, null, external_react_default.a.createElement(components_ExpertiseCard, {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, JavaScript, React and Redux to to ensure the end product is fast and easy to use.",
    icon: keyboard_default.a
  }), external_react_default.a.createElement(components_ExpertiseCard, {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.",
    icon: test_animated_default.a
  }), external_react_default.a.createElement(components_ExpertiseCard, {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.",
    icon: laptop_default.a
  })))), external_react_default.a.createElement(Location, null, external_react_default.a.createElement(LocationContent, null, external_react_default.a.createElement("div", {
    className: "location-content"
  }, external_react_default.a.createElement("h2", {
    className: "heading location-heading"
  }, "I live and work in Leeds UK!"), external_react_default.a.createElement("p", null, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), external_react_default.a.createElement("p", null, "I also post regular helpful articles around startups, web design and user experience."), external_react_default.a.createElement(Button["a" /* default */], {
    btnFontSize: '1.7rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px'
  }, "Explore My Blog"))), external_react_default.a.createElement(LocationImage, null)), external_react_default.a.createElement(FullWidthCta["a" /* default */], {
    text: "Hire me for your next project"
  }), external_react_default.a.createElement(RecentProjects, null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("h2", {
    className: "heading"
  }, "Recent projects"), external_react_default.a.createElement("p", {
    className: "sub-heading"
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), external_react_default.a.createElement(PortfolioWrapper, null, external_react_default.a.createElement(PortfolioList["a" /* default */], {
    amount: 3
  })))), external_react_default.a.createElement(components_SocialLinks, null)));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);