/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _Msginput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Msginput */ \"./components/Msginput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nim;\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    //역순 정렬\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n}); //fill로 array를 채워야지 map을 돌릴 수 있다\n//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨\n// [ 반복되는 작업을 다시 구현\n//     {\n//         id:1,\n//         userId: getRandomUserId(),\n//         timestamp: 1234567890123,\n//         text:'1 mock text'\n//     }\n// ]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = useState(originalMsgs),\n      _useState2 = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),\n      msgs = _useState2[0],\n      setMsgs = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length, \" \").concat(text)\n    };\n    msgs.unshift(newMsg);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Msginput__WEBPACK_IMPORTED_MODULE_4__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, x), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiaW0iLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwidXNlU3RhdGUiLCJtc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsInVuc2hpZnQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRTtBQUNGO0FBQ0E7QUFFQSxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQU8sS0FBUCxDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQ2xEQyxNQUFFLEVBQUUsS0FBS0QsQ0FEeUM7QUFDdEM7QUFDWkUsVUFBTSxFQUFFWCxlQUFlLEVBRjJCO0FBR2xEWSxhQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBS0gsQ0FBTixJQUFXLElBQVgsR0FBa0IsRUFISztBQUlsREksUUFBSSxZQUFLLEtBQUtKLENBQVY7QUFKOEMsR0FBWDtBQUFBLENBQXRCLENBQXJCLEMsQ0FNSTtBQUNKO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLFFBQVEsQ0FBQ1gsWUFBRCxDQURWO0FBQUE7QUFBQSxNQUNmWSxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFFckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUwsSUFBSSxFQUFJO0FBQ3RCLFFBQU1NLE1BQU0sR0FBRztBQUNYVCxRQUFFLEVBQUdNLElBQUksQ0FBQ0ksTUFEQztBQUVYVCxZQUFNLEVBQUVYLGVBQWUsRUFGWjtBQUdYWSxlQUFTLEVBQUVTLElBQUksQ0FBQ0MsR0FBTCxFQUhBO0FBSVhULFVBQUksWUFBS0csSUFBSSxDQUFDSSxNQUFWLGNBQW9CUCxJQUFwQjtBQUpPLEtBQWY7QUFNQUcsUUFBSSxDQUFDTyxPQUFMLENBQWFKLE1BQWI7QUFDRixHQVJEOztBQVdELHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVRO0FBQUksZUFBUyxFQUFHLFVBQWhCO0FBQUEsZ0JBQ0ZGLElBQUksQ0FBQ1QsR0FBTCxDQUFTLFVBQUFpQixDQUFDO0FBQUEsNEJBQ1IsOERBQUMsNkNBQUQsb0JBQXdCQSxDQUF4QixHQUFjQSxDQUFDLENBQUNkLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZSO0FBQUEsa0JBREo7QUFVQyxDQXZCRDs7R0FBTUksTzs7S0FBQUEsTztBQXdCTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTXNnTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dpbnB1dCdcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksIC8v7Jet7IicIOygleugrFxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgXG5cbn0pKSAvL2ZpbGzroZwgYXJyYXnrpbwg7LGE7JuM7JW87KeAIG1hcOydhCDrj4zrprQg7IiYIOyeiOuLpFxuLy8ucmV2ZXJzZSgpIOydtOqxsCDrjIDsi6AgNTAgLSBp66W8IO2VtOykjOycvOuhnOyEnCDsl63siJwg7KCV66CsIOuQqFxuXG5cbi8vIFsg67CY67O165CY64qUIOyekeyXheydhCDri6Tsi5wg6rWs7ZiEXG4vLyAgICAge1xuLy8gICAgICAgICBpZDoxLFxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXG4vLyAgICAgICAgIHRleHQ6JzEgbW9jayB0ZXh0J1xuLy8gICAgIH1cbi8vIF1cblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbmNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcbiBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgICAgaWQgOiBtc2dzLmxlbmd0aCxcbiAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aH0gJHt0ZXh0fWBcbiAgICB9XG4gICAgbXNncy51bnNoaWZ0KG5ld01zZylcbiB9XG5cblxucmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IFwibWVzc2FnZXNcIj5cbiAgICAgICAgeyBtc2dzLm1hcCh4ID0+IChcbiAgICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IC8+KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});