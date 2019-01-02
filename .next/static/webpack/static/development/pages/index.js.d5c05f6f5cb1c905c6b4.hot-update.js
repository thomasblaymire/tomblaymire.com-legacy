webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Button.js";


var PrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__PrimaryButton",
  componentId: "sc-1mbgncw-0"
})(["background-color:#05af43;font-size:1.6rem;padding:10px 30px;color:", ";border:solid 2px #05af43;border-radius:5px;font-family:", ";cursor:pointer;width:200px;&:hover{background-color:#05da53;border:solid 2px #05da53;}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.fontPrimary;
});
var SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__SecondaryButton",
  componentId: "sc-1mbgncw-1"
})(["background-color:transparent;font-size:1.6rem;padding:10px 30px;color:", ";border:solid 2px white;border-radius:5px;font-family:", ";cursor:pointer;width:200px;&:hover{color:red;background-color:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.fontPrimary;
}, function (props) {
  return props.theme.white;
});

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
  }, props.children) : props.type === 'tertiary' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondaryButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondaryButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.d5c05f6f5cb1c905c6b4.hot-update.js.map