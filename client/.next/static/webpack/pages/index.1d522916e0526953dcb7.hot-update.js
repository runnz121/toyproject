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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _Msginput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Msginput */ \"./components/Msginput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pupu/Desktop/study/toyproject_prac/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    //역순 정렬\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n});\nconsole.log(orgi); //fill로 array를 채워야지 map을 돌릴 수 있다\n//.reverse() 이거 대신 50 - i를 해줌으로서 역순 정렬 됨\n// [ 반복되는 작업을 다시 구현\n//     {\n//         id:1,\n//         userId: getRandomUserId(),\n//         timestamp: 1234567890123,\n//         text:'1 mock text'\n//     }\n// ]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n    doneEdit();\n  };\n\n  var _onDelete = function onDelete(id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id == id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_pupu_Desktop_study_toyproject_prac_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1);\n      return newMsgs;\n    });\n  };\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Msginput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: function onDelete() {\n            return _onDelete(x.id);\n          },\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId == x.id\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsIm9yZ2kiLCJNc2dMaXN0IiwidXNlU3RhdGUiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFPLEtBQVAsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsQ0FBZixFQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVztBQUNsREMsTUFBRSxFQUFFLEtBQUtELENBRHlDO0FBQ3RDO0FBQ1pFLFVBQU0sRUFBRVgsZUFBZSxFQUYyQjtBQUdsRFksYUFBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUtILENBQU4sSUFBVyxJQUFYLEdBQWtCLEVBSEs7QUFJbERJLFFBQUksWUFB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QUEsbUJBQU1ZLFlBQVksQ0FBQ2MsQ0FBQyxDQUFDMUIsRUFBSCxDQUFsQjtBQUFBLFdBTFg7QUFNQSxtQkFBUyxFQUFFVyxTQUFTLElBQUllLENBQUMsQ0FBQzFCO0FBTjFCLFlBQ0swQixDQUFDLENBQUMxQixFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZSO0FBQUEsa0JBREo7QUFpQkMsQ0ExREQ7O0dBQU1PLE87O0tBQUFBLE87QUEyRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnaW5wdXQnXG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsJ2pheSddXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogNTAgLSBpLCAvL+yXreyInCDsoJXroKxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxuXG59KSkgXG5cbmNvbnNvbGUubG9nKG9yZ2kpXG5cblxuXG4vL2ZpbGzroZwgYXJyYXnrpbwg7LGE7JuM7JW87KeAIG1hcOydhCDrj4zrprQg7IiYIOyeiOuLpFxuLy8ucmV2ZXJzZSgpIOydtOqxsCDrjIDsi6AgNTAgLSBp66W8IO2VtOykjOycvOuhnOyEnCDsl63siJwg7KCV66CsIOuQqFxuXG5cbi8vIFsg67CY67O165CY64qUIOyekeyXheydhCDri6Tsi5wg6rWs7ZiEXG4vLyAgICAge1xuLy8gICAgICAgICBpZDoxLFxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXG4vLyAgICAgICAgIHRleHQ6JzEgbW9jayB0ZXh0J1xuLy8gICAgIH1cbi8vIF1cblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbmNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcbmNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICAgIGlkIDogbXNncy5sZW5ndGgsXG4gICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXG4gfVxuXG5jb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MobXNncyA9PiB7ICBcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09IGlkKVxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgfSlcbiAgICBkb25lRWRpdCgpXG59XG5cbmNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09IGlkKVxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgKVxuICAgICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG59XG5cbmNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG5cblxucmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IFwibWVzc2FnZXNcIj5cbiAgICAgICAgeyBtc2dzLm1hcCh4ID0+IChcbiAgICAgICAgICAgIDxNc2dJdGVtIFxuICAgICAgICAgICAga2V5PXt4LmlkfSBcbiAgICAgICAgICAgIHsuLi54fSBcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX0gXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PSB4LmlkfSBcbiAgICAgICAgICAgIC8+KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});