webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/me.jpg */ "./static/me.jpg");
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_me_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/tbl02/Development/Workspaces/React/tomblaymire.com/components/Hero.js";





var HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroImage",
  componentId: "sc-1oj9b8p-0"
})(["background-image:url(", ");background-size:cover;min-height:100vh;"], _static_me_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroContainer",
  componentId: "sc-1oj9b8p-1"
})(["width:1170px;margin-right:auto;margin-left:auto;padding:0px 15px;"]);
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroBlock",
  componentId: "sc-1oj9b8p-2"
})(["color:", ";margin-top:3.5rem;width:60%;.intro{font-size:7vmin;margin:0;}.description{font-size:3.5vmin;line-height:38px;font-weight:300;}"], function (props) {
  return props.theme.white;
});
var HeroButtons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroButtons",
  componentId: "sc-1oj9b8p-3"
})(["margin-top:8rem;display:flex;& > button{margin-right:1.8rem;}a{color:", ";text-decoration:none;font-weight:normal;&:hover{color:red;}}"], function (props) {
  return props.theme.white;
});

var Hero = function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Hello, I'm Tom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "I\u2019m a Freelance (UI/UX) Software Engineer based in Leeds. I help companies deliver innovative, end-to-end products that meet both user and business needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#fff",
    borderColor: '#05af43',
    bgColor: "#05af43",
    hoverBg: '#05da53',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "My Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primaryColor: "#fff",
    bgColor: "transparent",
    borderColor: '#fff',
    hoverBg: '#fff',
    hoverColor: '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Let's Talk"))))));
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
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portfolio/PortfolioList */ "./components/Portfolio/PortfolioList.js");
/* harmony import */ var _components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExpertiseCard */ "./components/ExpertiseCard.js");
/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialLinks */ "./components/SocialLinks.js");
/* harmony import */ var _components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FullWidthCta */ "./components/FullWidthCta.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/man-phone.jpg */ "./static/man-phone.jpg");
/* harmony import */ var _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/test_animated.svg */ "./static/test_animated.svg");
/* harmony import */ var _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/keyboard.svg */ "./static/keyboard.svg");
/* harmony import */ var _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/laptop.svg */ "./static/laptop.svg");
/* harmony import */ var _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_laptop_svg__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/tbl02/Development/Workspaces/React/tomblaymire.com/pages/index.js";














var Expertise = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Expertise",
  componentId: "sc-1lwpsg5-0"
})(["padding:10rem 0rem;"]);
var ExpertiseRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ExpertiseRow",
  componentId: "sc-1lwpsg5-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:6rem;align-items:start;margin-top:6rem;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Location",
  componentId: "sc-1lwpsg5-2"
})(["height:100vh;display:flex;align-items:center;background-color:", ";"], function (props) {
  return props.theme.seaGreen;
});
var LocationContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__LocationContent",
  componentId: "sc-1lwpsg5-3"
})(["width:100%;color:", ";.location-content{width:60%;margin:0 auto;text-align:left;}.location-heading{line-height:1.4em;margin-bottom:4rem;font-size:4.7rem;width:80%;}p{margin:0 0 20px;font-size:1.8rem;color:#474747;font-family:Source Sans Pro;}"], function (props) {
  return props.theme.grey;
});
var LocationImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__LocationImage",
  componentId: "sc-1lwpsg5-4"
})(["width:100%;height:100%;background-image:url(", ");background-attachment:fixed;background-size:cover;"], _static_man_phone_jpg__WEBPACK_IMPORTED_MODULE_10___default.a);
var RecentProjects = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__RecentProjects",
  componentId: "sc-1lwpsg5-5"
})(["min-height:100vh;padding:10rem 0rem;p{width:70%;}"]);
var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PortfolioWrapper",
  componentId: "sc-1lwpsg5-6"
})(["& > *{margin-top:5rem;display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}"]);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expertise, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "My expretise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpertiseRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Development",
    description: "I work with various different front end technologies including HTML5, JavaScript, React and Redux to to ensure the end product is fast and easy to use.",
    icon: _static_keyboard_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Web Design",
    description: "I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition.",
    icon: _static_test_animated_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpertiseCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "User Experience",
    description: "I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project.",
    icon: _static_laptop_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading location-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "I live and work in Leeds UK!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "I specialize in helping small businesses succeed online. With over 6 years experience working for some of the largest companies in the UK I have a breadth of knowledge around Web Design & Development."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "I also post regular helpful articles around startups, web design and user experience."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    btnFontSize: '1.7rem',
    borderColor: '#05af43',
    primaryColor: "#fff",
    bgColor: "#05af43",
    hoverBg: '#05da53',
    borderRadius: '35px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Explore My Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullWidthCta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: "Hire me for your next project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Recent projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "I have worked across various exiting projects each with different requirements and deadlines. Some of my highlights are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_PortfolioList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    amount: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })));
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

/***/ })

})
//# sourceMappingURL=index.js.60bbdad594ff709225a6.hot-update.js.map