"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_store_index_js"],{

/***/ "./src/hooks/useLocalStorage.js":
/*!**************************************!*\
  !*** ./src/hooks/useLocalStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useLocalStorage(key, initialValue) {\n  // State to store our value\n  // Pass initial state function to useState so logic is only executed once\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {\n      if (typeof window === \"undefined\") {\n        return initialValue;\n      }\n      try {\n        // Get from local storage by key\n        var item = window.localStorage.getItem(key);\n        // Parse stored json or if none return initialValue\n        return item ? JSON.parse(item) : initialValue;\n      } catch (error) {\n        // If error also return initialValue\n        console.log(error);\n        return initialValue;\n      }\n    }),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    storedValue = _useState2[0],\n    setStoredValue = _useState2[1];\n  // Return a wrapped version of useState's setter function that ...\n  // ... persists the new value to localStorage.\n  var setValue = function setValue(value) {\n    try {\n      // Allow value to be a function so we have same API as useState\n      var valueToStore = value instanceof Function ? value(storedValue) : value;\n      // Save state\n      setStoredValue(valueToStore);\n      // Save to local storage\n      if (typeof window !== \"undefined\") {\n        window.localStorage.setItem(key, JSON.stringify(valueToStore));\n      }\n    } catch (error) {\n      // A more advanced implementation would handle the error case\n      console.log(error);\n    }\n  };\n  return [storedValue, setValue];\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);\n\n//# sourceURL=webpack://host/./src/hooks/useLocalStorage.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppContextProvider\": () => (/* binding */ AppContextProvider),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"./src/hooks/useLocalStorage.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\nvar AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nvar API_KEY = \"304090ed092c4b3cbf0141340230105\";\nvar AppContextProvider = function AppContextProvider(_ref) {\n  var children = _ref.children;\n  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"theme\", \"light\"),\n    _useLocalStorage2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalStorage, 2),\n    theme = _useLocalStorage2[0],\n    setTheme = _useLocalStorage2[1];\n  var _useLocalStorage3 = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"cities\", [\"Riga\"]),\n    _useLocalStorage4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalStorage3, 2),\n    cities = _useLocalStorage4[0],\n    setCities = _useLocalStorage4[1];\n  var _useLocalStorage5 = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"selected\", \"Riga\"),\n    _useLocalStorage6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalStorage5, 2),\n    selectedCity = _useLocalStorage6[0],\n    setSelectedCity = _useLocalStorage6[1];\n  var toggleTheme = function toggleTheme() {\n    return setTheme(function (prev) {\n      return prev === \"dark\" ? \"light\" : \"dark\";\n    });\n  };\n  var addCity = function addCity(city) {\n    setCities(function (prev) {\n      var prevCities = prev.map(function (city) {\n        return city.toLowerCase();\n      });\n      var updated = new Set([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevCities), [city.toLowerCase()]));\n      return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(updated);\n    });\n  };\n  var removeCity = function removeCity(city) {\n    if (selectedCity && city.toLowerCase() === selectedCity.toLowerCase()) setSelectedCity(null);\n    setCities(function (prev) {\n      return prev.filter(function (prevCity) {\n        return prevCity.toLowerCase() !== city.toLowerCase();\n      });\n    });\n  };\n  var fetchWeatherData = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(cityName) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"http://api.weatherapi.com/v1/forecast.json?key=\".concat(API_KEY, \"&q=\").concat(cityName, \"&days=5&aqi=no&alerts=no\"));\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n          case 5:\n            return _context.abrupt(\"return\", _context.sent);\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function fetchWeatherData(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  var value = {\n    theme: theme,\n    cities: cities,\n    selectedCity: selectedCity,\n    toggleTheme: toggleTheme,\n    addCity: addCity,\n    removeCity: removeCity,\n    setSelectedCity: setSelectedCity,\n    fetchWeatherData: fetchWeatherData\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AppContext.Provider, {\n    value: value,\n    children: children\n  });\n};\nvar useAppContext = function useAppContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(AppContext);\n};\n\n//# sourceURL=webpack://host/./src/store/index.js?");

/***/ })

}]);