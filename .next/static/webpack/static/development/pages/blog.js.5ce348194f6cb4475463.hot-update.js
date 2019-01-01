webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHero */ "./components/PageHero.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/about-hero.jpg */ "./static/about-hero.jpg");
/* harmony import */ var _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/posts */ "./api/posts/index.js");
/* harmony import */ var _components_Post_PostItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Post/PostItem */ "./components/Post/PostItem.js");
var _jsxFileName = "/Users/Admin/Documents/Development/React/tomblaymire.com/pages/blog.js";







var BlogWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "blog__BlogWrapper",
  componentId: "sc-11cgiy1-0"
})([""]);

var Blog = function Blog(_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _static_about_hero_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    pageName: "Blog",
    description: "Learn more about my expertise.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ha"));
}; // Blog.getInitialProps = async ({ req }) => {
// const res = await getPosts();
// const json = await res.json();
// return { posts: json };
// };


/* harmony default export */ __webpack_exports__["default"] = (Blog);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blog.js.5ce348194f6cb4475463.hot-update.js.map