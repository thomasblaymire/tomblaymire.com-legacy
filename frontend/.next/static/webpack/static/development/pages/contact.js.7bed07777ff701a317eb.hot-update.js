webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/es/index.js");
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/hamburger.svg */ "./static/hamburger.svg");
/* harmony import */ var _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/close.svg */ "./static/close.svg");
/* harmony import */ var _static_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/socialShare.svg */ "./static/socialShare.svg");
/* harmony import */ var _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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








var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Nav__NavStyles",
  componentId: "hwzlet-0"
})(["margin:0;padding:0;display:flex;justify-content:flex-end;font-size:2rem;.show{opacity:1;visibility:visible;transition:0.2s;position:fixed;left:0;top:0;background:#100e17f2;z-index:1;display:grid;width:100%;height:calc(100vh);height:100%;margin:0;> ul{flex-direction:column;opacity:none;visibility:visible;}}.close-button{border:none;background:0 0;display:none;cursor:pointer;position:relative;top:0;right:0;svg{width:50px;height:50px;}}.hamburger-button{display:block;border:none;cursor:pointer;outline:none;svg{width:50px;height:50px;}@media (min-width:950px){display:none;}}"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul.withConfig({
  displayName: "Nav__NavList",
  componentId: "hwzlet-1"
})(["display:flex;align-items:center;justify-content:center;a,button{display:flex;align-items:center;position:relative;text-transform:uppercase;font-size:1.7rem;background:none;font-family:", ";letter-spacing:0.05em;font-weight:500;border:0;cursor:pointer;color:", ";padding:25px 15px;&:hover{color:#3eaca8;}}.show{a{display:block;opacity:1;visibility:visible;}}"], function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});
var NavSocial = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Nav__NavSocial",
  componentId: "hwzlet-2"
})([".links-button{width:25px;position:relative;}.social-menu{background:black;position:absolute;top:105px;padding:5px 5px;margin-left:10px;transition:visibility 0s ease 0s,opacity 0.5s ease;-webkit-transition:visibility 0s ease 0s,opacity 0.5s ease;z-index:2;background-color:#242424;list-style-type:none;li{cursor:pointer;}}"]);

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
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavList, {
        className: this.state.mobileNav && "show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "https://medium.com/@thomas_blaymire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSocial, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onMouseOver: this.toggleSocialLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "links-button",
        src: _static_socialShare_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Open Scial Links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), this.state.socialMenu && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "social-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "T"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "L"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "G"))), !this.state.mobileNav && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "hamburger-button",
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: _static_hamburger_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Open Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }))), this.state.mobileNav && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "close-button",
        onClick: this.toggleNavigationHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: _static_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Close Navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=contact.js.7bed07777ff701a317eb.hot-update.js.map