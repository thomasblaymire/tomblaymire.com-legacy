((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/services.js"],{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/services.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/services', function() {
module.exports = __webpack_require__(/*! ./pages/services.js */"./pages/services.js");

return { page: module.exports.default }});

/***/ })

},[[6,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=services.js.map