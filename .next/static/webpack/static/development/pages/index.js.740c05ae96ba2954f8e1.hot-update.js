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
var _this = undefined,
    _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Portfolio/PortfolioItem.js";



var PortfolioBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioItem__PortfolioBox",
  componentId: "sc-25rbs8-0"
})([""]);
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioItem__PortfolioMeta",
  componentId: "sc-25rbs8-1"
})([""]);

var PortfolioItem = function PortfolioItem(props) {
  var _this$props = _this.props,
      image = _this$props.image,
      name = _this$props.name,
      tags = _this$props.tags;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "portfolio-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Parcelshop Finder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Angular JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "React JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Web Design"))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PortfolioItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortfolioItem */ "./components/Portfolio/PortfolioItem.js");
/* harmony import */ var _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/port-pad.jpg */ "./static/port-pad.jpg");
/* harmony import */ var _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/port-gpws.jpg */ "./static/port-gpws.jpg");
/* harmony import */ var _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/port-careers.jpg */ "./static/port-careers.jpg");
/* harmony import */ var _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/components/Portfolio/PortfolioList.js";






var PortfolioItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioList__PortfolioItems",
  componentId: "sc-6df1tk-0"
})([""]);

var PortfolioList = function PortfolioList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: _static_port_pad_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Product Analysis Dashboard",
    tags: ['React', "Angular JS, 'Web Development"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: _static_port_gpws_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "GP Web Solutions",
    tags: ['React', "Angular JS, 'Web Development"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: _static_port_careers_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: "Hermes Careers",
    tags: ['React', "Angular JS, 'Web Development"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Portfolio/PortfolioList */ "./components/Portfolio/PortfolioList.js");
/* harmony import */ var _components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExpertiseCard */ "./components/ExpertiseCard.js");
/* harmony import */ var _components_FullWidthCta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FullWidthCta */ "./components/FullWidthCta.js");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/man-phone.jpg */ "./static/man-phone.jpg");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/pages/index.js";








var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PageContent",
  componentId: "sc-1lwpsg5-0"
})(["height:100vh;.heading{font-family:Poppins;letter-spacing:-0.02em;font-weight:700;font-style:normal;color:#2a363b;font-size:4.5rem;}.sub-heading{font-family:Poppins;font-size:2rem;color:#2a363b;}.container{width:1300px;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;}"]);
var Expertise = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Expertise",
  componentId: "sc-1lwpsg5-1"
})(["height:80vh;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-2"
})(["display:flex;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-3"
})(["height:100vh;background-color:#e5eec1;display:flex;"]);
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-4"
})(["width:50%;padding-top:35px;padding-right:6%;padding-bottom:35px;padding-left:6%;color:#494949;p{margin:0 0 20px;}"]);
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-5"
})(["width:50%;background-image:url(", ");background-position:0px 13.0102px;background-attachment:fixed;background-size:cover;height:100%;"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-6"
})(["height:80vh;p{width:70%;}"]);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expertise, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "My expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpertiseRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, CSS3, React and Angular JS to to ensure the end product is fast and easy to use.",
    icon: 'pen',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that not only looks the best, but also sets you apart from your competition.",
    icon: 'pen',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing a user with a memorable experience is what I strive to do every day.",
    icon: 'pen',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "I live and work in Leeds UK."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "I also post regular helpful articles around startups, web design and user experience.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Recent projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ })

})
//# sourceMappingURL=index.js.740c05ae96ba2954f8e1.hot-update.js.map