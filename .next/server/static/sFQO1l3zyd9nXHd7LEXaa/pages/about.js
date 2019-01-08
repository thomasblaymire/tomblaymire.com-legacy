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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


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
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, null, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro"
  }, pageName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, description))));
};

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_facebook_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__);





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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterRow, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterCopyright, null, "Copyright \xA9 Tom Blaymire All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterSocial, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/thomas_blaymire"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Twitter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/tblaymire1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Facebook"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://linkedin.com/tblaymire1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "LinkedIn"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-hero-6467717d262a2674f7031b37438f9f79.jpg";

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
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
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laptop-portfolio-f40253864b330749fe69fba0ca90951a.png";

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _components_FullWidthCta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);









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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHero__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    image: _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    pageName: "About",
    description: "Learn more about my expertise."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutIntro, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading"
  }, "A little about me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutInfo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I have been working within the web industry for over 6 years now, helping clients of all sizes transform their digital presence online."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently I\u2019m working for the UK's leading online bookmaker", ' ' + ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://m.skybet.com/",
    target: "_blank"
  }, "Sky Betting & Gaming"), ' ', "developing their primary website along with various in house enhancements."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In the past I have worked for Hermes to implement various different digital transformation projects including e-commerce, dashboards and recruitment apps."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "What makes me stand out from the rest is that I have a real passion for helping businesses grow. By using the latest front end tools and technologies I ensure that my clients websites are not only faster than their competitors but are also memorable and easy to use.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutImage, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_laptop_portfolio_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Laptop With Portfolio"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    text: "Work with me on your next exiting project."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);