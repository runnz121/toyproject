/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgItem.js\",\n    _this = undefined;\n\n\n\nvar MsgItem = function MsgItem(_ref) {\n  var id = _ref.id,\n      userId = _ref.userId,\n      timestamp = _ref.timestamp,\n      text = _ref.text,\n      onUpdate = _ref.onUpdate,\n      isEditing = _ref.isEditing,\n      startEd = _ref.startEd;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n    className: \"messages__item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n        children: new Date(timestamp).toLocaleString('ko-KR', {\n          year: 'numeric',\n          month: 'numeric',\n          day: 'numeric',\n          hour: '2-digit',\n          minute: '2-digit',\n          hour12: true\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {\n        mutate: onUpdate,\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"messages__buttons\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: startEdit,\n        children: \"\\uC218\\uC815\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzPzc2MDQiXSwibmFtZXMiOlsiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJzdGFydEVkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUNaQyxFQURZLFFBQ1pBLEVBRFk7QUFBQSxNQUVaQyxNQUZZLFFBRVpBLE1BRlk7QUFBQSxNQUdaQyxTQUhZLFFBR1pBLFNBSFk7QUFBQSxNQUlaQyxJQUpZLFFBSVpBLElBSlk7QUFBQSxNQUtaQyxRQUxZLFFBS1pBLFFBTFk7QUFBQSxNQU1aQyxTQU5ZLFFBTVpBLFNBTlk7QUFBQSxNQU9aQyxPQVBZLFFBT1pBLE9BUFk7QUFBQSxzQkFTWjtBQUFJLGFBQVMsRUFBRyxnQkFBaEI7QUFBQSw0QkFDSTtBQUFBLGlCQUNLTCxNQURMLEVBQ2EsR0FEYixlQUVJO0FBQUEsa0JBQ0ssSUFBSU0sSUFBSixDQUFTTCxTQUFULEVBQW9CTSxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUN6Q0MsY0FBSSxFQUFFLFNBRG1DO0FBRXpDQyxlQUFLLEVBQUUsU0FGa0M7QUFHekNDLGFBQUcsRUFBRSxTQUhvQztBQUl6Q0MsY0FBSSxFQUFFLFNBSm1DO0FBS3pDQyxnQkFBTSxFQUFFLFNBTGlDO0FBTXpDQyxnQkFBTSxFQUFFO0FBTmlDLFNBQTVDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBZUtULFNBQVMsZ0JBQ047QUFBQSw2QkFDQSw4REFBQyw4Q0FBRDtBQUFVLGNBQU0sRUFBRUQsUUFBbEI7QUFBNEIsVUFBRSxFQUFFSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEscUJBRE0sR0FLVkcsSUFwQkosZUF1Qkk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUFRLGVBQU8sRUFBSVksU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVRZO0FBQUEsQ0FBaEI7O0tBQU1oQixPO0FBc0NOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nc2dJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXG5cbmNvbnN0IE1zZ0l0ZW0gPSAoe1xuICAgIGlkLFxuICAgIHVzZXJJZCxcbiAgICB0aW1lc3RhbXAsXG4gICAgdGV4dCxcbiAgICBvblVwZGF0ZSxcbiAgICBpc0VkaXRpbmcsXG4gICAgc3RhcnRFZFxufSkgPT4gKFxuICAgIDxsaSBjbGFzc05hbWUgPSBcIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIHt1c2VySWR9eycgJ31cbiAgICAgICAgICAgIDxzdWI+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3ViPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IGlkPXtpZH0vPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgIHRleHRcbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ })

});