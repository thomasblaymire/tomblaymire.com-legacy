webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./api/posts/index.js":
/*!****************************!*\
  !*** ./api/posts/index.js ***!
  \****************************/
/*! exports provided: getPosts, getPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

function getPosts() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()('./posts.json');
}
function getPost(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://jsonplaceholder.typicode.com/posts?title=".concat(slug));
}

/***/ })

})
//# sourceMappingURL=blog.js.357be6d741e56584b2a4.hot-update.js.map