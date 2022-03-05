/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJvamVjdC1mcm9udC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const sentence = 'Nextjs 홈페이지입니다.';\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const typing = setInterval(()=>{\n            setText(text + sentence[count]);\n            setCount(count + 1);\n        }, 150);\n        if (sentence.length === count) {\n            clearInterval(typing);\n        }\n        return ()=>{\n            clearInterval(typing);\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\win7\\\\Desktop\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    width: '950px',\n                    margin: '0 auto'\n                },\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\win7\\\\Desktop\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\win7\\\\Desktop\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSDtBQUNEO0FBQ0E7QUFFL0IsUUFBUSxDQUFDSyxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLENBQUM7SUFDcEMsS0FBSyxNQUFFTSxJQUFJLE1BQUVDLE9BQU8sTUFBSVAsK0NBQVEsQ0FBQyxDQUFFO0lBQ25DLEtBQUssQ0FBQ1EsUUFBUSxHQUFHLENBQWlCO0lBQ3BCVCxnREFBTCxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNVLE1BQU0sR0FBR0MsV0FBVyxLQUFPLENBQUM7WUFDaENILE9BQU8sQ0FBQ0QsSUFBSSxHQUFHRSxRQUFRLENBQUNKLEtBQUs7WUFDN0JDLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUc7UUFDTixFQUFFLEVBQUVJLFFBQVEsQ0FBQ0csTUFBTSxLQUFLUCxLQUFLLEVBQUUsQ0FBQztZQUM5QlEsYUFBYSxDQUFDSCxNQUFNO1FBQ3RCLENBQUM7UUFDRCxNQUFNLEtBQU8sQ0FBQztZQUNaRyxhQUFhLENBQUNILE1BQU07UUFDdEIsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLDZFQUNISSxDQUFHO1FBQUNDLFNBQVMsRUFBRVosMEVBQWdCOzt3RkFDN0JELDBEQUFjOzs7Ozt3RkFDZGUsQ0FBRTtnQkFBQ0MsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFPO29CQUFFQyxNQUFNLEVBQUUsQ0FBUTtnQkFBQyxDQUFDOzBCQUFJYixJQUFJOzs7Ozs7Ozs7Ozs7QUFNN0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJvamVjdC1mcm9udC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHNlbnRlbmNlID0gJ05leHRqcyDtmYjtjpjsnbTsp4DsnoXri4jri6QuJztcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0eXBpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUZXh0KHRleHQgKyBzZW50ZW5jZVtjb3VudF0pO1xuICAgICAgc2V0Q291bnQoY291bnQgKyAxKTtcbiAgICB9LCAxNTApO1xuICAgIGlmIChzZW50ZW5jZS5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICBjbGVhckludGVydmFsKHR5cGluZyk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHR5cGluZyk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICA8aDIgc3R5bGU9e3sgd2lkdGg6ICc5NTBweCcsIG1hcmdpbjogJzAgYXV0bycgfX0+eyB0ZXh0IH08L2gyPlxuICAgICAgey8qIDxoNCBzdHlsZT17eyB3aWR0aDogJzk1MHB4JywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgIOyCrOyaqeq4sOyIoCA6IFJlYWN0LCBuZXh0LCByZWR1eCwgc2FnYSwgZXhwcmVzcywgbW9uZ29vc2UsIGFudGQsIHN0eWxlZC1jb21wb25lbnQsIG1vbmdvREIg65Ox7J2EIOyCrOyaqe2VmOyXrFxuICAgICAg7ZqM7JuQ6rCA7J6FLCDsnKDtmqjshLHqsoDsgqwsIOuhnOq3uOyduCBBUEnquLDriqXsnYQg7LaU6rCA7ZWY6rOgLCBjb3Jz7JeQ65+s66W8IO2VtOqysO2VmOupsCBhaXJibmIg66y467KV7Jy866GcIOy9lOuTnOulvCDsnpHshLHtlZjsmIDsirXri4jri6QuPC9oND4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwic3R5bGVzIiwiSG9tZSIsImNvdW50Iiwic2V0Q291bnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbnRlbmNlIiwidHlwaW5nIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();