webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Portfolio/PortfolioItem.js":
/*!***********************************************!*\
  !*** ./components/Portfolio/PortfolioItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Portfolio/PortfolioItem.js";


var PortfolioBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})([".portfolio-image{width:380px;height:300px;margin-right:30px;position:relative;&:hover{cursor:pointer;}}"]);
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([".portfolio-title{font-family:Poppins;letter-spacing:-0.02em;font-weight:700;font-style:normal;font-size:2rem;margin:0;color:#2a363b;cursor:pointer;}ul{list-style-type:none;padding:0;display:flex;align-items:flex-start;justify-content:space-between;}li{color:#474747;}"]);

var PortfolioItem = function PortfolioItem(props) {
  var image = props.image,
      name = props.name,
      tags = props.tags;

  var portfolioClickHandler = function portfolioClickHandler() {
    console.log('Clicked');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: portfolioClickHandler,
    className: "portfolio-image",
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    onClick: portfolioClickHandler,
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Angular JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "React JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Web Design"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ })

})
//# sourceMappingURL=index.js.76fdf2b34873fa591729.hot-update.js.map