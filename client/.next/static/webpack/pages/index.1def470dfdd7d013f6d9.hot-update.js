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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _Msginput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Msginput */ \"./components/Msginput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    //역순 정렬\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n}); //fill로 array를 채워야지 map을 돌릴 수 있다\n//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨\n// [ 반복되는 작업을 다시 구현\n//     {\n//         id:1,\n//         userId: getRandomUserId(),\n//         timestamp: 1234567890123,\n//         text:'1 mock text'\n//     }\n// ]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n    doneEdit();\n  };\n\n  var onDelete = function onDelete(id) {\n    setMsgs(m);\n  };\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Msginput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId == x.id\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJtIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQU8sS0FBUCxDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQ2xEQyxNQUFFLEVBQUUsS0FBS0QsQ0FEeUM7QUFDdEM7QUFDWkUsVUFBTSxFQUFFWCxlQUFlLEVBRjJCO0FBR2xEWSxhQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBS0gsQ0FBTixJQUFXLElBQVgsR0FBa0IsRUFISztBQUlsREksUUFBSSxZQUFLLEtBQUtKLENBQVY7QUFKOEMsR0FBWDtBQUFBLENBQXRCLENBQXJCLEMsQ0FNSTtBQUNKO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUNYLFlBQUQsQ0FEVjtBQUFBLE1BQ2ZZLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUFBLG1CQUVZRiwrQ0FBUSxDQUFDLElBQUQsQ0FGcEI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFSkMsWUFGSTs7QUFJckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQVAsSUFBSSxFQUFJO0FBQ3RCLFFBQU1RLE1BQU0sR0FBRztBQUNYWCxRQUFFLEVBQUdNLElBQUksQ0FBQ00sTUFEQztBQUVYWCxZQUFNLEVBQUVYLGVBQWUsRUFGWjtBQUdYWSxlQUFTLEVBQUVXLElBQUksQ0FBQ0MsR0FBTCxFQUhBO0FBSVhYLFVBQUksWUFBS0csSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBbkIsY0FBd0JULElBQXhCO0FBSk8sS0FBZjtBQU1BSSxXQUFPLENBQUMsVUFBQUQsSUFBSTtBQUFBLGNBQU1LLE1BQU4scUpBQWlCTCxJQUFqQjtBQUFBLEtBQUwsQ0FBUDtBQUNGLEdBUkQ7O0FBVUQsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1osSUFBRCxFQUFPSCxFQUFQLEVBQWM7QUFDM0JPLFdBQU8sQ0FBQyxVQUFBRCxJQUFJLEVBQUk7QUFDWixVQUFNVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBTCxDQUFlLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNsQixFQUFKLElBQVVBLEVBQWQ7QUFBQSxPQUFsQixDQUFwQjtBQUNBLFVBQUlnQixXQUFXLEdBQUcsQ0FBbEIsRUFBcUIsT0FBT1YsSUFBUDs7QUFDckIsVUFBTWEsT0FBTyxHQUFHLDRJQUFJYixJQUFQLENBQWI7O0FBQ0FhLGFBQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCLGtDQUNPVixJQUFJLENBQUNVLFdBQUQsQ0FEWDtBQUVJYixZQUFJLEVBQUpBO0FBRko7QUFJQSxhQUFPZ0IsT0FBUDtBQUNILEtBVE0sQ0FBUDtBQVVBRSxZQUFRO0FBQ1gsR0FaRDs7QUFjQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdEIsRUFBRCxFQUFRO0FBQ3JCTyxXQUFPLENBQUNnQixDQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1GLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTVosWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxHQUFqQjs7QUFHQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFUTtBQUFJLGVBQVMsRUFBRyxVQUFoQjtBQUFBLGdCQUNGSixJQUFJLENBQUNULEdBQUwsQ0FBUyxVQUFBMkIsQ0FBQztBQUFBLDRCQUNSLDhEQUFDLDZDQUFELGtDQUVJQSxDQUZKO0FBR0Esa0JBQVEsRUFBRVQsUUFIVjtBQUlBLG1CQUFTLEVBQUU7QUFBQSxtQkFBTU4sWUFBWSxDQUFDZSxDQUFDLENBQUN4QixFQUFILENBQWxCO0FBQUEsV0FKWDtBQUtBLG1CQUFTLEVBQUVRLFNBQVMsSUFBSWdCLENBQUMsQ0FBQ3hCO0FBTDFCLFlBQ0t3QixDQUFDLENBQUN4QixFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZSO0FBQUEsa0JBREo7QUFnQkMsQ0FuREQ7O0dBQU1JLE87O0tBQUFBLE87QUFvRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnaW5wdXQnXG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsJ2pheSddXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogNTAgLSBpLCAvL+yXreyInCDsoJXroKxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxuXG59KSkgLy9maWxs66GcIGFycmF566W8IOyxhOybjOyVvOyngCBtYXDsnYQg64+M66a0IOyImCDsnojri6Rcbi8vLnJldmVyc2UoKSDsnbTqsbAg64yA7IugIDUwIC0gaeulvCDtlbTspIzsnLzroZzshJwg7Jet7IicIOygleugrCDrkKhcblxuXG4vLyBbIOuwmOuzteuQmOuKlCDsnpHsl4XsnYQg64uk7IucIOq1rO2YhFxuLy8gICAgIHtcbi8vICAgICAgICAgaWQ6MSxcbi8vICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbi8vICAgICAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzLFxuLy8gICAgICAgICB0ZXh0OicxIG1vY2sgdGV4dCdcbi8vICAgICB9XG4vLyBdXG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG5jb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpXG5jb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcblxuIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0ge1xuICAgICAgICBpZCA6IG1zZ3MubGVuZ3RoLFxuICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXG4gICAgfVxuICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxuIH1cblxuY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICBzZXRNc2dzKG1zZ3MgPT4geyAgXG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PSBpZClcbiAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG4gICAgZG9uZUVkaXQoKVxufVxuXG5jb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4ge1xuICAgIHNldE1zZ3MobSlcbn1cblxuY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcblxuXG5yZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfS8+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0gXCJtZXNzYWdlc1wiPlxuICAgICAgICB7IG1zZ3MubWFwKHggPT4gKFxuICAgICAgICAgICAgPE1zZ0l0ZW0gXG4gICAgICAgICAgICBrZXk9e3guaWR9IFxuICAgICAgICAgICAgey4uLnh9IFxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfSBcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09IHguaWR9IFxuICAgICAgICAgICAgLz4pXG4gICAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});