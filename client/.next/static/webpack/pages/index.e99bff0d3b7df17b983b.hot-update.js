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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _Msginput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Msginput */ \"./components/Msginput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    //역순 정렬\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n}); //fill로 array를 채워야지 map을 돌릴 수 있다\n//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨\n// [ 반복되는 작업을 다시 구현\n//     {\n//         id:1,\n//         userId: getRandomUserId(),\n//         timestamp: 1234567890123,\n//         text:'1 mock text'\n//     }\n// ]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n    doneEdit();\n  };\n\n  var onDelete = function onDelete(id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1);\n      return newMsgs;\n    });\n  };\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Msginput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: onD,\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId == x.id\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJ4Iiwib25EIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDbERDLE1BQUUsRUFBRSxLQUFLRCxDQUR5QztBQUN0QztBQUNaRSxVQUFNLEVBQUVYLGVBQWUsRUFGMkI7QUFHbERZLGFBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLSCxDQUFOLElBQVcsSUFBWCxHQUFrQixFQUhLO0FBSWxESSxRQUFJLFlBQUssS0FBS0osQ0FBVjtBQUo4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WUFDS3VCLENBQUMsQ0FBQ3ZCLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVY7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlI7QUFBQSxrQkFESjtBQWlCQyxDQTFERDs7R0FBTUksTzs7S0FBQUEsTztBQTJETiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTXNnTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dpbnB1dCdcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksIC8v7Jet7IicIOygleugrFxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgXG5cbn0pKSAvL2ZpbGzroZwgYXJyYXnrpbwg7LGE7JuM7JW87KeAIG1hcOydhCDrj4zrprQg7IiYIOyeiOuLpFxuLy8ucmV2ZXJzZSgpIOydtOqxsCDrjIDsi6AgNTAgLSBp66W8IO2VtOykjOycvOuhnOyEnCDsl63siJwg7KCV66CsIOuQqFxuXG5cbi8vIFsg67CY67O165CY64qUIOyekeyXheydhCDri6Tsi5wg6rWs7ZiEXG4vLyAgICAge1xuLy8gICAgICAgICBpZDoxLFxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXG4vLyAgICAgICAgIHRleHQ6JzEgbW9jayB0ZXh0J1xuLy8gICAgIH1cbi8vIF1cblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbmNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcbmNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICAgIGlkIDogbXNncy5sZW5ndGgsXG4gICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXG4gfVxuXG5jb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MobXNncyA9PiB7ICBcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09IGlkKVxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgfSlcbiAgICBkb25lRWRpdCgpXG59XG5cbmNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09IGlkKVxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgKVxuICAgICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG59XG5cbmNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG5cblxucmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IFwibWVzc2FnZXNcIj5cbiAgICAgICAgeyBtc2dzLm1hcCh4ID0+IChcbiAgICAgICAgICAgIDxNc2dJdGVtIFxuICAgICAgICAgICAga2V5PXt4LmlkfSBcbiAgICAgICAgICAgIHsuLi54fSBcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX0gXG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT0geC5pZH0gXG4gICAgICAgICAgICAvPilcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3RcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});