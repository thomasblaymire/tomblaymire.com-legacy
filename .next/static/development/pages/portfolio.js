((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/portfolio.js"],{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio")
  

/***/ }),

/***/ 7:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/portfolio', function() {
module.exports = __webpack_require__(/*! ./pages/portfolio.js */"./pages/portfolio.js");

return { page: module.exports.default }});

/***/ })

},[[7,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=portfolio.js.map