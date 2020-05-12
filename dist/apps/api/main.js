(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/controllers/dashboard.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/controllers/dashboard.controller.ts ***!
  \**************************************************************/
/*! exports provided: DataController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataController", function() { return DataController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data.service */ "./apps/api/src/app/service/data.service.ts");


class DataController {
    static getItem(req, res) { }
    static createItem(req, res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].saveItem(req.body);
                res.status(204).send();
            }
            catch (err) {
                res.status(500).send();
                throw err;
            }
        });
    }
}


/***/ }),

/***/ "./apps/api/src/app/db/db.connect.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/app/db/db.connect.ts ***!
  \*******************************************/
/*! exports provided: connectDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectDb", function() { return connectDb; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectDb = () => {
    mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"](process.env.DB_CONNECTION_STR, { useNewUrlParser: true }, err => {
        if (err) {
            process.exit(1);
        }
        console.log('-------------------Mongo DB Connected-------------------');
    });
};


/***/ }),

/***/ "./apps/api/src/app/db/item.model.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/app/db/item.model.ts ***!
  \*******************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _myapp_shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @myapp/shared-models */ "./libs/shared-models/src/index.ts");
/* harmony import */ var _myapp_shared_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @myapp/shared-lib */ "./libs/shared-lib/src/index.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



const itemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    topic: { type: String, enum: [...Object(_myapp_shared_lib__WEBPACK_IMPORTED_MODULE_1__["EnumToArray"])(_myapp_shared_models__WEBPACK_IMPORTED_MODULE_0__["Topic"])], default: null },
    subTopic: { type: String, required: true },
    tags: [{ type: String }]
}, { timestamps: true });
itemSchema.pre('save', function (next) {
    const obj = this;
    obj.tags = [...new Set(obj.tags || [])];
    next();
});
const Item = mongoose__WEBPACK_IMPORTED_MODULE_2__["model"]('Item', itemSchema);


/***/ }),

/***/ "./apps/api/src/app/middlewares/validators/item.validator.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/middlewares/validators/item.validator.ts ***!
  \*******************************************************************/
/*! exports provided: itemPostValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemPostValidator", function() { return itemPostValidator; });
const itemPostValidator = (req, res, next) => {
    // implement the middleware for request here
    next();
};


/***/ }),

/***/ "./apps/api/src/app/routes/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/routes/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.router */ "./apps/api/src/app/routes/item.router.ts");


const router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get('/test', (req, res) => res.json({ status: 'ok' }).status(200));
router.use('/item', _item_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/app/routes/item.router.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/routes/item.router.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_dashboard_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/dashboard.controller */ "./apps/api/src/app/controllers/dashboard.controller.ts");
/* harmony import */ var _middlewares_validators_item_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/validators/item.validator */ "./apps/api/src/app/middlewares/validators/item.validator.ts");



const router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get('/', _controllers_dashboard_controller__WEBPACK_IMPORTED_MODULE_1__["DataController"].getItem);
router.post('/', _middlewares_validators_item_validator__WEBPACK_IMPORTED_MODULE_2__["itemPostValidator"], _controllers_dashboard_controller__WEBPACK_IMPORTED_MODULE_1__["DataController"].createItem);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/app/service/data.service.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/service/data.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/item.model */ "./apps/api/src/app/db/item.model.ts");


class DataService {
    static saveItem(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newItem = new _db_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](data);
                yield newItem.save();
            }
            catch (err) {
                throw err;
            }
        });
    }
}


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/routes */ "./apps/api/src/app/routes/index.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_db_db_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/db/db.connect */ "./apps/api/src/app/db/db.connect.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




const app = express__WEBPACK_IMPORTED_MODULE_0__();
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'dotenv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).config();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2__["json"]());
app.use('/api', _app_routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
const port = process.env.PORT;
const server = app.listen(port, () => {
    Object(_app_db_db_connect__WEBPACK_IMPORTED_MODULE_3__["connectDb"])();
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/shared-lib/src/index.ts":
/*!**************************************!*\
  !*** ./libs/shared-lib/src/index.ts ***!
  \**************************************/
/*! exports provided: EnumToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-lib */ "./libs/shared-lib/src/lib/shared-lib.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumToArray", function() { return _lib_shared_lib__WEBPACK_IMPORTED_MODULE_0__["EnumToArray"]; });




/***/ }),

/***/ "./libs/shared-lib/src/lib/shared-lib.ts":
/*!***********************************************!*\
  !*** ./libs/shared-lib/src/lib/shared-lib.ts ***!
  \***********************************************/
/*! exports provided: EnumToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArray", function() { return EnumToArray; });
const StringIsNumber = value => isNaN(Number(value)) === false;
function EnumToArray(enumm) {
    return Object.keys(enumm)
        .filter(StringIsNumber)
        .map(key => enumm[key]);
}


/***/ }),

/***/ "./libs/shared-models/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/shared-models/src/index.ts ***!
  \*****************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_topic_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/topic.enum */ "./libs/shared-models/src/lib/topic.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return _lib_topic_enum__WEBPACK_IMPORTED_MODULE_0__["Topic"]; });




/***/ }),

/***/ "./libs/shared-models/src/lib/topic.enum.ts":
/*!**************************************************!*\
  !*** ./libs/shared-models/src/lib/topic.enum.ts ***!
  \**************************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic;
(function (Topic) {
    Topic[Topic["Array"] = 0] = "Array";
    Topic[Topic["Closures"] = 1] = "Closures";
    Topic[Topic["Objects"] = 2] = "Objects";
    Topic[Topic["Scoping"] = 3] = "Scoping";
})(Topic || (Topic = {}));


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kunaltandon/Projects/Nx-Express-Angular/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map