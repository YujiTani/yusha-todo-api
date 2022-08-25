/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Controllers/tasks.ts":
/*!******************************!*\
  !*** ./Controllers/tasks.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const connect_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/connect'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const getAll = async (request, response) => {
    connect_1.default.query(`SELECT * FROM public."task" ORDER BY id ASC`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getAll = getAll;
const getById = (request, response) => {
    const id = parseInt(request.params.id);
    connect_1.default.query(`SELECT * FROM public."task" WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
};
exports.getById = getById;
const create = (request, response) => {
    const { name, description, create_at, due_date, end_at } = request.body;
    connect_1.default.query(`INSERT INTO public."task" ("name", "description", "create_at", "due_date", "end_at")
    VALUES ($1, $2, $3, $4, $5, $6)`, [name, description, create_at, due_date, end_at], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`新規タスクを登録しました`);
    });
};
exports.create = create;
const updateById = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, description } = request.body;
    connect_1.default.query(`UPDATE public."task" SET "name" = $1, "description" = $2 WHERE id = ${id}`, [name, description], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`タスクID${id}の情報を更新しました`);
    });
};
exports.updateById = updateById;
const deleteById = (request, response) => {
    const id = parseInt(request.params.id);
    connect_1.default.query(`DELETE FROM public."task" WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`タスクID${id}を削除しました`);
    });
};
exports.deleteById = deleteById;


/***/ }),

/***/ "./Controllers/users.ts":
/*!******************************!*\
  !*** ./Controllers/users.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const connect_1 = __importDefault(__webpack_require__(/*! ../DB/connect */ "./DB/connect.js"));
const getAll = async (request, response) => {
    connect_1.default.query(`SELECT * FROM public."user" ORDER BY id ASC`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getAll = getAll;
const getById = (request, response) => {
    const id = parseInt(request.params.id);
    connect_1.default.query(`SELECT * FROM public."user" WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
};
exports.getById = getById;
const create = (request, response) => {
    const { lastName, firstName, email, password } = request.body;
    connect_1.default.query(`INSERT INTO public."user" ("lastName", "firstName", "email", "password") VALUES ($1, $2, $3, $4)`, [lastName, firstName, email, password], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`新規ユーザーを登録しました`);
    });
};
exports.create = create;
const updateById = (request, response) => {
    const id = parseInt(request.params.id);
    const { lastName, firstName } = request.body;
    connect_1.default.query(`UPDATE public."user" SET "lastName" = $1, "firstName" = $2 WHERE id = ${id}`, [lastName, firstName], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`ユーザーID${id}の情報を更新しました`);
    });
};
exports.updateById = updateById;
const deleteById = (request, response) => {
    const id = parseInt(request.params.id);
    connect_1.default.query(`DELETE FROM public."user" WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`ユーザーID${id}を削除しました`);
    });
};
exports.deleteById = deleteById;


/***/ }),

/***/ "./Routes/users.ts":
/*!*************************!*\
  !*** ./Routes/users.ts ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const router = express_1.default.Router();
const users_1 = __webpack_require__(/*! ../Controllers/users */ "./Controllers/users.ts");
router.get('/', users_1.getAll);
router.get('/:id', users_1.getById);
router.post('/', users_1.create);
router.put('/:id', users_1.updateById);
router.delete('/:id', users_1.deleteById);
module.exports = router;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const connect_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/DB/connect'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const PORT = 5000;
const app = (0, express_1.default)();
const router = express_1.default.Router();
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'dotenv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const userRoute = __webpack_require__(/*! ./Routes/users */ "./Routes/users.ts");
const taskRoute = __webpack_require__(/*! ./Routes/tasks */ "./Routes/tasks.js");
app.use("/api/v0/users", userRoute);
app.use("/api/v1/tasks", taskRoute);
const start = async () => {
    try {
        connect_1.default.connect();
        app.listen(PORT, () => {
            console.log('start server');
            console.log('http://localhost:5000/');
        });
    }
    catch (error) {
        console.log('DBへの接続に失敗しました');
        console.warn(error);
    }
};
start();


/***/ }),

/***/ "./DB/connect.js":
/*!***********************!*\
  !*** ./DB/connect.js ***!
  \***********************/
/***/ ((module) => {

const Pool = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())

const connectDB = new Pool({
  user: "workuser",
  host: "127.0.0.1",
  database: "yushaTodo",
  password: "awwt2998",
  port: 5432,
})

module.exports = connectDB

/***/ }),

/***/ "./Routes/tasks.js":
/*!*************************!*\
  !*** ./Routes/tasks.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/tasks */ "./Controllers/tasks.ts");
/* harmony import */ var _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

const router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();



// タスク一覧取得
router.get("/", _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__.getAll);

// タスク取得
router.get("/:id", _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__.getById);

// 新規タスク作成
router.post("/", _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__.create);

// タスク更新
router.put("/:id", _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__.updateById);

// タスク削除
router.delete("/:id", _Controllers_tasks__WEBPACK_IMPORTED_MODULE_1__.deleteById);

module.exports = router;


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQiwwREFBVTs7QUFFN0I7QUFDQSxzQkFBc0IsMERBQVU7O0FBRWhDOzs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ29udHJvbGxlcnMvdGFza3MudHMiLCJ3ZWJwYWNrOi8vLy4vQ29udHJvbGxlcnMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUm91dGVzL3VzZXJzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL0RCL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vUm91dGVzL3Rhc2tzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnQC9jb25uZWN0JztcblxuZXhwb3J0IGNvbnN0IGdldEFsbCA9IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25uZWN0REIucXVlcnkoXG4gICAgYFNFTEVDVCAqIEZST00gcHVibGljLlwidGFza1wiIE9SREVSIEJZIGlkIEFTQ2AsXG4gICAgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMucm93cyk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJ5SWQgPSAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXF1ZXN0LnBhcmFtcy5pZCk7XG5cbiAgY29ubmVjdERCLnF1ZXJ5KFxuICAgIGBTRUxFQ1QgKiBGUk9NIHB1YmxpYy5cInRhc2tcIiBXSEVSRSBpZCA9ICR7aWR9YCxcbiAgICAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cy5yb3dzWzBdKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGNyZWF0ZV9hdCwgZHVlX2RhdGUsIGVuZF9hdCB9ID0gcmVxdWVzdC5ib2R5O1xuXG4gIGNvbm5lY3REQi5xdWVyeShcbiAgICBgSU5TRVJUIElOVE8gcHVibGljLlwidGFza1wiIChcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNyZWF0ZV9hdFwiLCBcImR1ZV9kYXRlXCIsIFwiZW5kX2F0XCIpXG4gICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2KWAsXG4gICAgW25hbWUsIGRlc2NyaXB0aW9uLCBjcmVhdGVfYXQsIGR1ZV9kYXRlLCBlbmRfYXRdLFxuICAgIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMSkuc2VuZChg5paw6KaP44K/44K544Kv44KS55m76Yyy44GX44G+44GX44GfYCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJ5SWQgPSAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXF1ZXN0LnBhcmFtcy5pZCk7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHJlcXVlc3QuYm9keTtcblxuICBjb25uZWN0REIucXVlcnkoXG4gICAgYFVQREFURSBwdWJsaWMuXCJ0YXNrXCIgU0VUIFwibmFtZVwiID0gJDEsIFwiZGVzY3JpcHRpb25cIiA9ICQyIFdIRVJFIGlkID0gJHtpZH1gLFxuICAgIFtuYW1lLCBkZXNjcmlwdGlvbl0sXG4gICAgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKGDjgr/jgrnjgq9JRCR7aWR944Gu5oOF5aCx44KS5pu05paw44GX44G+44GX44GfYCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ5SWQgPSAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXF1ZXN0LnBhcmFtcy5pZClcblxuICBjb25uZWN0REIucXVlcnkoYERFTEVURSBGUk9NIHB1YmxpYy5cInRhc2tcIiBXSEVSRSBpZCA9ICR7aWR9YCwgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKGDjgr/jgrnjgq9JRCR7aWR944KS5YmK6Zmk44GX44G+44GX44GfYClcbiAgfSlcbn1cbiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vREIvY29ubmVjdCc7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGwgPSBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgY29ubmVjdERCLnF1ZXJ5KFxuICAgIGBTRUxFQ1QgKiBGUk9NIHB1YmxpYy5cInVzZXJcIiBPUkRFUiBCWSBpZCBBU0NgLFxuICAgIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzLnJvd3MpO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCeUlkID0gKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocmVxdWVzdC5wYXJhbXMuaWQpO1xuXG4gIGNvbm5lY3REQi5xdWVyeShcbiAgICBgU0VMRUNUICogRlJPTSBwdWJsaWMuXCJ1c2VyXCIgV0hFUkUgaWQgPSAke2lkfWAsXG4gICAgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMucm93c1swXSk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGxhc3ROYW1lLCBmaXJzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxdWVzdC5ib2R5O1xuXG4gIGNvbm5lY3REQi5xdWVyeShcbiAgICBgSU5TRVJUIElOVE8gcHVibGljLlwidXNlclwiIChcImxhc3ROYW1lXCIsIFwiZmlyc3ROYW1lXCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiKSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KWAsXG4gICAgW2xhc3ROYW1lLCBmaXJzdE5hbWUsIGVtYWlsLCBwYXNzd29yZF0sXG4gICAgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5zZW5kKGDmlrDopo/jg6bjg7zjgrbjg7zjgpLnmbvpjLLjgZfjgb7jgZfjgZ9gKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQnlJZCA9IChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25zdCBpZCA9IHBhcnNlSW50KHJlcXVlc3QucGFyYW1zLmlkKTtcbiAgY29uc3QgeyBsYXN0TmFtZSwgZmlyc3ROYW1lIH0gPSByZXF1ZXN0LmJvZHk7XG5cbiAgY29ubmVjdERCLnF1ZXJ5KFxuICAgIGBVUERBVEUgcHVibGljLlwidXNlclwiIFNFVCBcImxhc3ROYW1lXCIgPSAkMSwgXCJmaXJzdE5hbWVcIiA9ICQyIFdIRVJFIGlkID0gJHtpZH1gLFxuICAgIFtsYXN0TmFtZSwgZmlyc3ROYW1lXSxcbiAgICAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLnNlbmQoYOODpuODvOOCtuODvElEJHtpZH3jga7mg4XloLHjgpLmm7TmlrDjgZfjgb7jgZfjgZ9gKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQnlJZCA9IChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25zdCBpZCA9IHBhcnNlSW50KHJlcXVlc3QucGFyYW1zLmlkKVxuXG4gIGNvbm5lY3REQi5xdWVyeShgREVMRVRFIEZST00gcHVibGljLlwidXNlclwiIFdIRVJFIGlkID0gJHtpZH1gLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLnNlbmQoYOODpuODvOOCtuODvElEJHtpZH3jgpLliYrpmaTjgZfjgb7jgZfjgZ9gKVxuICB9KVxufSIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuaW1wb3J0IHtcbiAgZ2V0QWxsLFxuICBnZXRCeUlkLFxuICBjcmVhdGUsXG4gIHVwZGF0ZUJ5SWQsXG4gIGRlbGV0ZUJ5SWQsXG59IGZyb20gJy4uL0NvbnRyb2xsZXJzL3VzZXJzJztcblxuLy8g44Om44O844K244O85LiA6Kan5Y+W5b6XXG5yb3V0ZXIuZ2V0KCcvJywgZ2V0QWxsKTtcblxuLy8gSUTjga7kuIDoh7TjgZnjgovjg6bjg7zjgrbjg7zlj5blvpdcbnJvdXRlci5nZXQoJy86aWQnLCBnZXRCeUlkKTtcblxuLy8g44Om44O844K244O855m76YyyXG5yb3V0ZXIucG9zdCgnLycsIGNyZWF0ZSk7XG5cbi8vIOODpuODvOOCtuODvOaDheWgseabtOaWsFxucm91dGVyLnB1dCgnLzppZCcsIHVwZGF0ZUJ5SWQpO1xuXG4vLyDjg6bjg7zjgrbjg7zliYrpmaRcbnJvdXRlci5kZWxldGUoJy86aWQnLCBkZWxldGVCeUlkKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIkAvREIvY29ubmVjdFwiXG5jb25zdCBQT1JUID0gNTAwMDtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxuLy8gTWlkZGxld2FyZVxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gUm91dGVcbmNvbnN0IHVzZXJSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGVzL3VzZXJzJyk7XG5jb25zdCB0YXNrUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlcy90YXNrcycpO1xuXG4vLyDjg6vjg7zjg4bjgqPjg7PjgrBcbmFwcC51c2UoXCIvYXBpL3YwL3VzZXJzXCIsIHVzZXJSb3V0ZSk7XG5hcHAudXNlKFwiL2FwaS92MS90YXNrc1wiLCB0YXNrUm91dGUpO1xuXG5jb25zdCBzdGFydCA9IGFzeW5jKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIERC44Gr5o6l57aaXG4gICAgICAgIGNvbm5lY3REQi5jb25uZWN0KCk7XG5cbiAgICAgICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgc2VydmVyJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycpO1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEQuOBuOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXG4gICAgfVxufVxuXG5zdGFydCgpIiwiY29uc3QgUG9vbCA9IHJlcXVpcmUoJ3BnJykuUG9vbFxuXG5jb25zdCBjb25uZWN0REIgPSBuZXcgUG9vbCh7XG4gIHVzZXI6IFwid29ya3VzZXJcIixcbiAgaG9zdDogXCIxMjcuMC4wLjFcIixcbiAgZGF0YWJhc2U6IFwieXVzaGFUb2RvXCIsXG4gIHBhc3N3b3JkOiBcImF3d3QyOTk4XCIsXG4gIHBvcnQ6IDU0MzIsXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3REQiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuaW1wb3J0IHtcbiAgZ2V0QWxsLFxuICBnZXRCeUlkLFxuICBjcmVhdGUsXG4gIHVwZGF0ZUJ5SWQsXG4gIGRlbGV0ZUJ5SWQsXG59IGZyb20gJy4uL0NvbnRyb2xsZXJzL3Rhc2tzJztcblxuLy8g44K/44K544Kv5LiA6Kan5Y+W5b6XXG5yb3V0ZXIuZ2V0KFwiL1wiLCBnZXRBbGwpO1xuXG4vLyDjgr/jgrnjgq/lj5blvpdcbnJvdXRlci5nZXQoXCIvOmlkXCIsIGdldEJ5SWQpO1xuXG4vLyDmlrDopo/jgr/jgrnjgq/kvZzmiJBcbnJvdXRlci5wb3N0KFwiL1wiLCBjcmVhdGUpO1xuXG4vLyDjgr/jgrnjgq/mm7TmlrBcbnJvdXRlci5wdXQoXCIvOmlkXCIsIHVwZGF0ZUJ5SWQpO1xuXG4vLyDjgr/jgrnjgq/liYrpmaRcbnJvdXRlci5kZWxldGUoXCIvOmlkXCIsIGRlbGV0ZUJ5SWQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9