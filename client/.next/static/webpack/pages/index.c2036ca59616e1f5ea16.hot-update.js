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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _Msginput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Msginput */ \"./components/Msginput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    //역순 정렬\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n}); //fill로 array를 채워야지 map을 돌릴 수 있다\n//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨\n// [ 반복되는 작업을 다시 구현\n//     {\n//         id:1,\n//         userId: getRandomUserId(),\n//         timestamp: 1234567890123,\n//         text:'1 mock text'\n//     }\n// ]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n    doneEdi;\n  };\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Msginput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId == x.id\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGkiLCJkb25lRWRpdCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFPLEtBQVAsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsQ0FBZixFQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVztBQUNsREMsTUFBRSxFQUFFLEtBQUtELENBRHlDO0FBQ3RDO0FBQ1pFLFVBQU0sRUFBRVgsZUFBZSxFQUYyQjtBQUdsRFksYUFBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUtILENBQU4sSUFBVyxJQUFYLEdBQWtCLEVBSEs7QUFJbERJLFFBQUksWUFBSyxLQUFLSixDQUFWO0FBSjhDLEdBQVg7QUFBQSxDQUF0QixDQUFyQixDLENBTUk7QUFDSjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNFQywrQ0FBUSxDQUFDWCxZQUFELENBRFY7QUFBQSxNQUNmWSxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFFWUYsK0NBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUEsTUFFZkcsU0FGZTtBQUFBLE1BRUpDLFlBRkk7O0FBSXJCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFQLElBQUksRUFBSTtBQUN0QixRQUFNUSxNQUFNLEdBQUc7QUFDWFgsUUFBRSxFQUFHTSxJQUFJLENBQUNNLE1BREM7QUFFWFgsWUFBTSxFQUFFWCxlQUFlLEVBRlo7QUFHWFksZUFBUyxFQUFFVyxJQUFJLENBQUNDLEdBQUwsRUFIQTtBQUlYWCxVQUFJLFlBQUtHLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQW5CLGNBQXdCVCxJQUF4QjtBQUpPLEtBQWY7QUFNQUksV0FBTyxDQUFDLFVBQUFELElBQUk7QUFBQSxjQUFNSyxNQUFOLHFKQUFpQkwsSUFBakI7QUFBQSxLQUFMLENBQVA7QUFDRixHQVJEOztBQVVELE1BQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNaLElBQUQsRUFBT0gsRUFBUCxFQUFjO0FBQzNCTyxXQUFPLENBQUMsVUFBQUQsSUFBSSxFQUFJO0FBQ1osVUFBTVUsV0FBVyxHQUFHVixJQUFJLENBQUNXLFNBQUwsQ0FBZSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDbEIsRUFBSixJQUFVQSxFQUFkO0FBQUEsT0FBbEIsQ0FBcEI7QUFDQSxVQUFJZ0IsV0FBVyxHQUFHLENBQWxCLEVBQXFCLE9BQU9WLElBQVA7O0FBQ3JCLFVBQU1hLE9BQU8sR0FBRyw0SUFBSWIsSUFBUCxDQUFiOztBQUNBYSxhQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QixrQ0FDT1YsSUFBSSxDQUFDVSxXQUFELENBRFg7QUFFSWIsWUFBSSxFQUFKQTtBQUZKO0FBSUEsYUFBT2dCLE9BQVA7QUFDSCxLQVRNLENBQVA7QUFVQUUsV0FBTztBQUNWLEdBWkQ7O0FBY0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNYixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLEdBQWpCOztBQUdBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVRO0FBQUksZUFBUyxFQUFHLFVBQWhCO0FBQUEsZ0JBQ0ZKLElBQUksQ0FBQ1QsR0FBTCxDQUFTLFVBQUEwQixDQUFDO0FBQUEsNEJBQ1IsOERBQUMsNkNBQUQsa0NBRUlBLENBRko7QUFHQSxrQkFBUSxFQUFFUixRQUhWO0FBSUEsbUJBQVMsRUFBRTtBQUFBLG1CQUFNTixZQUFZLENBQUNjLENBQUMsQ0FBQ3ZCLEVBQUgsQ0FBbEI7QUFBQSxXQUpYO0FBS0EsbUJBQVMsRUFBRVEsU0FBUyxJQUFJZSxDQUFDLENBQUN2QjtBQUwxQixZQUNLdUIsQ0FBQyxDQUFDdkIsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVjtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUjtBQUFBLGtCQURKO0FBZ0JDLENBL0NEOztHQUFNSSxPOztLQUFBQSxPO0FBZ0ROLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nc2dMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ2lucHV0J1xuXG5jb25zdCBVc2VySWRzID0gWydyb3knLCdqYXknXVxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxuXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSwgLy/sl63siJwg7KCV66CsXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGBcblxufSkpIC8vZmlsbOuhnCBhcnJheeulvCDssYTsm4zslbzsp4AgbWFw7J2EIOuPjOumtCDsiJgg7J6I64ukXG4vLy5yZXZlcnNlKCkg7J206rGwIOuMgOyLoCA1MCAtIGnrpbwg7ZW07KSM7Jy866Gc7IScIOyXreyInCDsoJXroKwg65CoXG5cblxuLy8gWyDrsJjrs7XrkJjripQg7J6R7JeF7J2EIOuLpOyLnCDqtaztmIRcbi8vICAgICB7XG4vLyAgICAgICAgIGlkOjEsXG4vLyAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4vLyAgICAgICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyxcbi8vICAgICAgICAgdGV4dDonMSBtb2NrIHRleHQnXG4vLyAgICAgfVxuLy8gXVxuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxuY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgICAgaWQgOiBtc2dzLmxlbmd0aCxcbiAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxuICAgIH1cbiAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcbiB9XG5cbmNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHsgIFxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT0gaWQpXG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4gICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICAgIGRvbmVFZGlcbn1cblxuY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcblxuXG5yZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfS8+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0gXCJtZXNzYWdlc1wiPlxuICAgICAgICB7IG1zZ3MubWFwKHggPT4gKFxuICAgICAgICAgICAgPE1zZ0l0ZW0gXG4gICAgICAgICAgICBrZXk9e3guaWR9IFxuICAgICAgICAgICAgey4uLnh9IFxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfSBcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09IHguaWR9IFxuICAgICAgICAgICAgLz4pXG4gICAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});