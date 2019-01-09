webpackHotUpdate("static/development/pages/portfolio-pad.js",{

/***/ "./components/PageHero.js":
/*!********************************!*\
  !*** ./components/PageHero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/tbl02/Development/Workspaces/React/tomblaymire.com/components/PageHero.js";


var HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PageHero__HeroContainer",
  componentId: "sc-13x60d9-0"
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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

/***/ "./components/styles/PageStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/PageStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PageStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
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

/***/ "./components/styles/PortfolioStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/PortfolioStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PortfolioStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PortfolioStyles",
  componentId: "lvwmgs-0"
})(["margin:0;padding:5rem 0rem;font-size:2rem;.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));grid-gap:20px;margin-bottom:8rem;align-items:center;}.screenshot{max-width:100%;}.heading{font-family:", ";letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:3.2rem;padding-bottom:1rem;}.content{padding:0;@media (min-width:950px){padding:0rem 0rem 0rem 5rem;}.description{color:black;font-size:2rem;font-size:1.7rem;line-height:1.5em;margin:0;padding-bottom:2rem;}ul{color:black;font-size:2rem;font-size:1.7rem;line-height:1.5em;}}"], function (props) {
  return props.theme.fontPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (PortfolioStyles);

/***/ })

})
//# sourceMappingURL=portfolio-pad.js.60bbdad594ff709225a6.hot-update.js.map