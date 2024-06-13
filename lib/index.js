(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("rxjs/operators"), require("vue"), require("@ztwx/utils"), require("vue-class-component"), require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "rxjs/operators", "vue", "@ztwx/utils", "vue-class-component", "vue-property-decorator"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("rxjs"), require("rxjs/operators"), require("vue"), require("@ztwx/utils"), require("vue-class-component"), require("vue-property-decorator")) : factory(root["rxjs"], root["rxjs/operators"], root["vue"], root["@ztwx/utils"], root["vue-class-component"], root["vue-property-decorator"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__832__, __WEBPACK_EXTERNAL_MODULE__597__, __WEBPACK_EXTERNAL_MODULE__748__, __WEBPACK_EXTERNAL_MODULE__495__, __WEBPACK_EXTERNAL_MODULE__64__, __WEBPACK_EXTERNAL_MODULE__630__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 495:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__495__;

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__832__;

/***/ }),

/***/ 597:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__597__;

/***/ }),

/***/ 748:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__748__;

/***/ }),

/***/ 64:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__64__;

/***/ }),

/***/ 630:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__630__;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalHandle": () => (/* reexport */ GlobalHandle),
  "Media": () => (/* reexport */ Media),
  "YoFormImpl": () => (/* reexport */ YoFormImpl),
  "appendValidator": () => (/* reexport */ appendValidator),
  "createForm": () => (/* reexport */ createForm),
  "demonErrMessage": () => (/* reexport */ demonErrMessage),
  "formGlobalHandle": () => (/* reexport */ formGlobalHandle),
  "getDateDay": () => (/* reexport */ getDateDay),
  "getDays": () => (/* reexport */ getDays),
  "getNextM": () => (/* reexport */ getNextM),
  "getPreM": () => (/* reexport */ getPreM),
  "handleValueChange": () => (/* reexport */ handleValueChange),
  "installerAll": () => (/* binding */ installerAll),
  "isGreater": () => (/* reexport */ isGreater),
  "media": () => (/* reexport */ media),
  "setting": () => (/* reexport */ setting),
  "timeStampDay": () => (/* reexport */ timeStampDay)
});

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/setting.js
const IOC_NAME = "_voyo-ioc-service";
const IOC_DICT_NAME = "_voyo-ioc-service-dict";
const SETTING_IOC_NAME = "_voyo_core_setting";
const ROUTER_IOC_NAME = "_voyo_core_main_router";
const ROUTER_MODULE_NAME = "_voyo_router_module_name";
const ROUTER_CHANGE_IOC_NAME = "_voyo_core_router_change";
const ASSEMBLY_STORE_NAME = "_voyo_core_components_assembly_store";
const PAGE_DATA_LOAD_KEY = "voyo-page-data-loader-key";
const _config = {
    lazyComponentCss: true,
};
const config = (/* unused pure expression or super */ null && (_config));

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/ioc/ioc.js

class IOC {
    constructor() {
        this.iocStore = {};
        this.iocStore = window[IOC_DICT_NAME] =
            window[IOC_DICT_NAME] || {};
    }
    provide(iocServiceId, IocService, cover = false, handler) {
        //no rewrite if exists and not cover
        if (this.iocStore[iocServiceId] && !cover)
            return;
        this.iocStore[iocServiceId] = handler
            ? handler(IocService)
            : new IocService();
    }
    getService(iocServiceId) {
        return this.iocStore[iocServiceId];
    }
}
const ioc = new IOC();
window[IOC_NAME] = ioc;


;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/ioc/inject.decorator.js

const inject_decorator_ioc = window[IOC_NAME];
const IOCAutowired = (param) => (target, key) => {
    target[key] = inject_decorator_ioc.getService(param.name);
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/ioc/provider.decorator.js

const provider_decorator_ioc = window[IOC_NAME];
const IOCProvider = ({ name, cover, handler }) => (target) => {
    provider_decorator_ioc.provide(name || target.name, target, cover, handler);
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/ioc/index.js




;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/core-setting.service.js



let CoreSetting = class CoreSetting {
    constructor() {
        this.tapTime = 100;
        this.toastStrongDurationTime = 1500;
        this.toastStrongTypeDefault = "load";
        this.loadImg = "";
        this.pageDataLoadImg = "";
    }
};
CoreSetting = __decorate([
    IOCProvider({ name: SETTING_IOC_NAME })
], CoreSetting);


;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/registry.js



const registryVoyoCore = () => {
    ioc;
    CoreSetting;
};
const registryVoyoRouter = () => {
    RouterChangeService;
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/router/index.js



;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/index.js





// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(832);
;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/commonComponent.js

class VoyoComponent extends HTMLElement {
    constructor() {
        super(...arguments);
        this.voyoConnected = new external_rxjs_.Subject();
    }
}
class VoyoEventEmitter extends external_rxjs_.Subject {
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/BaseComponent.js
const VoyoDor = (params) => (target) => {
    target.prototype._componentName = params.name;
    target.prototype._voyoData = params;
};
/**
 * trigger afterCreate
 * @param params
 * @constructor
 */
const VoyoTemplate = function (params) {
    if (params.renderCache === undefined)
        params.renderCache = true;
    return function (target, key) {
        target.handlers.push((self) => {
            let templateRef;
            const createEl = function (ref) {
                ref.el = document.createElement(params.tag);
                if (params.className)
                    ref.el.className = params.className;
                const change = (e) => {
                    if (e.currentTarget !== ref.el)
                        return;
                    if (ref.inserting) {
                        ref.inserting = false;
                        ref.inserted = true;
                        ref.insertClassName && ref.el.classList.remove(ref.insertClassName);
                    }
                    else if (ref.leaving) {
                        ref.leaving = false;
                        ref.inserted = false;
                        if (ref.el && ref.el.parentElement) {
                            ref.leaveClassName && ref.el.classList.remove(ref.leaveClassName);
                            ref.el.parentElement.removeChild(ref.el);
                            ref.inTree = false;
                        }
                    }
                };
                ref.el.addEventListener("animationend", change);
                return ref.el;
            };
            const checkRunning = (ref, next) => {
                if (ref.leaving) {
                    ref.leaving = false;
                    //@ts-ignore
                    ref.el.classList.remove(ref.leaveClassName);
                    next();
                    // setTimeout(()=>next(),1);
                }
                else if (ref.inserting) {
                    ref.inserting = false;
                    //@ts-ignore
                    ref.el.classList.remove(ref.insertClassName);
                    next();
                    // setTimeout(()=>next(),1);
                }
                else {
                    next();
                }
            };
            templateRef = {
                insert(container, anClassName) {
                    // if(templateRef.inserted||!templateRef.leaving)return false;
                    //just for typescript
                    if (templateRef.inserting ||
                        (templateRef.inserted && !templateRef.leaving))
                        return false;
                    if (!templateRef.el)
                        createEl(templateRef);
                    checkRunning(templateRef, () => {
                        if (!templateRef.renderCached) {
                            if (typeof params.render === "function") {
                                //@ts-ignore
                                templateRef.el.innerHTML = params.render.call(self);
                            }
                            else {
                                //@ts-ignore
                                templateRef.el.innerHTML = params.render;
                            }
                            params.renderCallback &&
                                params.renderCallback.call(self, templateRef.el);
                            if (params.renderCache)
                                templateRef.renderCached = true;
                        }
                        templateRef.container = container;
                        if (anClassName) {
                            templateRef.inserting = true;
                            //@ts-ignore
                            templateRef.el.classList.add((templateRef.insertClassName = anClassName));
                        }
                        else {
                            templateRef.inserted = true;
                        }
                        if (!templateRef.inTree) {
                            //@ts-ignore
                            container.appendChild(templateRef.el);
                            //@ts-ignore
                            params.insertedCallback &&
                                params.insertedCallback.call(self, templateRef.el);
                            templateRef.inTree = true;
                        }
                    });
                    return true;
                },
                remove(anClassName) {
                    if (templateRef.leaving ||
                        (!templateRef.inserted && !templateRef.inserting))
                        return false;
                    // if(!templateRef.inserted||!templateRef.inserting)return false;
                    checkRunning(templateRef, () => {
                        if (anClassName) {
                            if (templateRef.el) {
                                templateRef.leaving = true;
                                templateRef.el.classList.add((templateRef.leaveClassName = anClassName));
                            }
                        }
                        else {
                            //@ts-ignore
                            templateRef.el.parentElement &&
                                templateRef.el.parentElement.removeChild(templateRef.el);
                            templateRef.inTree = false;
                            templateRef.inserted = false;
                        }
                    });
                    return true;
                },
            };
            //templateRef end
            self[key] = templateRef;
        });
    };
};
/**
 * Usage
 * Same as angular decorator @Input
 * But the method of set will be triggered immediately..
 * @param name
 * @constructor
 * 已知问题：
 * 1. 不要传递 true false.请使用 1 0代替。 false 不能被setAttribute
 */
const VoyoInput = function ({ name, defaultValue, connectedTrigger, }) {
    return (target, key) => {
        const attrName = name || key;
        let connectedTriggerRun = () => { };
        let isConnected;
        if (connectedTrigger) {
            if (target.connectedCallback) {
                const old = target.connectedCallback;
                target.connectedCallback = function () {
                    isConnected = true;
                    connectedTriggerRun();
                    old.call(this);
                };
            }
            else {
                target.connectedCallback = function () {
                    isConnected = true;
                    connectedTriggerRun();
                };
            }
        }
        (target.handlers || (target.handlers = [])).push((currentTarget) => {
            const setAttribute = currentTarget.setAttribute;
            const setValue = (k, v) => {
                if (connectedTrigger && !isConnected) {
                    connectedTriggerRun = () => {
                        currentTarget[key] = v;
                    };
                }
                else {
                    currentTarget[key] = v;
                }
            };
            currentTarget.setAttribute = (k, v) => {
                if (k === attrName && currentTarget._dirtyCheck.isNew(k, v)) {
                    setValue(k, v);
                }
                setAttribute.call(currentTarget, k, v);
                currentTarget.updated && currentTarget.updated();
            };
            if (defaultValue !== undefined) {
                setValue(key, defaultValue);
                currentTarget._dirtyCheck.isNew(key, defaultValue);
            }
        });
    };
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/Output.decorator.js
const VoyoOutput = function ({ event: eventName, }) {
    return (target, key) => {
        (target.handlers || (target.handlers = [])).push((currentTarget) => {
            const emitter = currentTarget[key];
            emitter.subscribe((eventValue) => {
                currentTarget.dispatchEvent(new CustomEvent(eventName.toLowerCase(), { detail: eventValue }));
            });
        });
    };
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/utils/ClassManage.js
class ClassManage {
    constructor(el) {
        this.store = {};
        this.hisStore = {};
        this.el = el;
    }
    replaceClass(key, value) {
        if (this.store[key])
            this.el.classList.remove(this.store[key]);
        if (value)
            this.el.classList.add((this.store[key] = value));
    }
    replaceHis(key, value) {
        this.hisStore[key] = this.store[key];
        this.replaceClass(key, value);
    }
    replaceHisBack(key) {
        const hisVal = this.hisStore[key];
        if (hisVal !== undefined) {
            this.replaceClass(key, hisVal);
            this.hisStore[key] = undefined;
        }
    }
    toggleClass(key, show) {
        if (show && !this.store[key]) {
            this.el.classList.add(key);
            this.store[key] = "true";
        }
        else if (!show && this.store[key]) {
            this.el.classList.remove(key);
            delete this.store[key];
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/svg.js
const FRChQLY = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5ODc5Njg0MjgyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5NTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTM3LjI4MTU4MSA3OTkuMjU0NzY0IDkzNy4yODE1ODEgNzk5LjI1NDc2NCA5MzcuMjgxNTgxIDc5OS4yNTQ3NjQgOTM3LjI4MTU4MSA3OTkuMjU0NzY0ek0xMDAyLjMyMDM5NSA1MTAuOTE2MDJjMC0yNzAuOTk1MDYtMjIwLjQwOTMxNS00OTEuNDA0Mzc1LTQ5MS40MDQzNzUtNDkxLjQwNDM3NS0yNzAuOTk1MDYgMC00OTEuNDA0Mzc1IDIyMC40MDkzMTUtNDkxLjQwNDM3NSA0OTEuNDA0Mzc1IDAgMjcwLjk5NTA2IDIyMC40MDkzMTUgNDkxLjQwNDM3NSA0OTEuNDA0Mzc1IDQ5MS40MDQzNzVDNzgxLjkxMTA4IDEwMDIuMzIwMzk1IDEwMDIuMzIwMzk1IDc4MS45MTEwOCAxMDAyLjMyMDM5NSA1MTAuOTE2MDJNNTEwLjkxNjAyIDkzMS41MDAzNTNjLTIzMS45NzE3NzEgMC00MjEuMzA2OTg3LTE4OC42MTI1NjItNDIxLjMwNjk4Ny00MjEuMzA2OTg3IDAtMjMxLjk3MTc3MSAxODguNjEyNTYyLTQyMS4zMDY5ODcgNDIxLjMwNjk4Ny00MjEuMzA2OTg3IDIzMS45NzE3NzEgMCA0MjEuMzA2OTg3IDE4OC42MTI1NjIgNDIxLjMwNjk4NyA0MjEuMzA2OTg3QzkzMS41MDAzNTMgNzQyLjg4Nzc5MSA3NDIuODg3NzkxIDkzMS41MDAzNTMgNTEwLjkxNjAyIDkzMS41MDAzNTNNNzEyLjUzNjM0NCA2NjQuODQxMjE0bC0xNTEuNzU3MjM0LTE1Mi40Nzk4ODcgMTUxLjc1NzIzNC0xNTAuMzExOTI3YzEzLjczMDQxNi0xMy43MzA0MTYgMTMuNzMwNDE2LTM2LjEzMjY3NSAwLTQ5Ljg2MzA5MS0xMy43MzA0MTYtMTMuNzMwNDE2LTM2LjEzMjY3NS0xMy43MzA0MTYtNDkuODYzMDkxIDBMNTEwLjkxNjAyIDQ2Mi40OTgyMzYgMzYwLjYwNDA5MyAzMTIuMTg2MzA5Yy0xMy43MzA0MTYtMTMuNzMwNDE2LTM2LjEzMjY3NS0xMy43MzA0MTYtNDkuODYzMDkxIDAtMTMuNzMwNDE2IDEzLjczMDQxNi0xMy43MzA0MTYgMzYuMTMyNjc1IDAgNDkuODYzMDkxbDE0OS41ODkyNzMgMTUwLjMxMTkyN0wzMTAuMDE4MzQ5IDY2MS4yMjc5NDZjLTEzLjczMDQxNiAxMy43MzA0MTYtMTMuNzMwNDE2IDM2LjEzMjY3NSAwIDQ5Ljg2MzA5MSA3LjIyNjUzNSA3LjIyNjUzNSAxNS44OTgzNzcgMTAuMTE3MTQ5IDI0LjU3MDIxOSAxMC4xMTcxNDkgOC42NzE4NDIgMCAxOC4wNjYzMzctMy42MTMyNjcgMjQuNTcwMjE5LTEwLjExNzE0OWwxNTEuMDM0NTgtMTQ5LjU4OTI3MyAxNTIuNDc5ODg3IDE1Mi40Nzk4ODdjNi41MDM4ODEgNi41MDM4ODEgMTUuODk4Mzc3IDEwLjExNzE0OSAyNC41NzAyMTkgMTAuMTE3MTQ5IDguNjcxODQyIDAgMTguMDY2MzM3LTMuNjEzMjY3IDI0LjU3MDIxOS0xMC4xMTcxNDlDNzI1LjU0NDEwNyA3MDAuOTczODg4IDcyNS41NDQxMDcgNjc4LjU3MTYzIDcxMi41MzYzNDQgNjY0Ljg0MTIxNCIgcC1pZD0iMTk1NiI+PC9wYXRoPjwvc3ZnPg==";
const FRChQLYw = "data:image/svg+xml;base64,PHN2ZyB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMCIgeD0iMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij48ZyBjbGFzcz0ibGRsLXNjYWxlIiBzdHlsZT0idHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC44LCAwLjgpOyI+PGcgY2xhc3M9ImxkbC1hbmkiPjxnIGNsYXNzPSJsZGwtbGF5ZXIiPjxnIGNsYXNzPSJsZGwtYW5pIiBzdHlsZT0idHJhbnNmb3JtOiBzY2FsZSgwLjkxKTsgdHJhbnNmb3JtLW9yaWdpbjogNTBweCA1MHB4OyBhbmltYXRpb246IDEuMTExMTFzIGxpbmVhciAtMC44MzMzMzNzIGluZmluaXRlIG5vcm1hbCBmb3J3YXJkcyBydW5uaW5nIGJyZWF0aC04YjQ5OTUzOS05YTEzLTQyZWItYTdjMC04NTg1ZDg2YTYxZWM7Ij48Y2lyY2xlIGZpbGw9IiMzMzMiIHI9IjQwIiBjeT0iNTAiIGN4PSI1MCIgc3R5bGU9ImZpbGw6IHJnYigyMDEsIDAsIDQxKTsiPjwvY2lyY2xlPjwvZz48L2c+PGcgY2xhc3M9ImxkbC1sYXllciI+PGcgY2xhc3M9ImxkbC1hbmkiPjxnPjxnIGNsYXNzPSJsZGwtbGF5ZXIiPjxnIGNsYXNzPSJsZGwtYW5pIiBzdHlsZT0idHJhbnNmb3JtOiBzY2FsZSgwLjkxKTsgdHJhbnNmb3JtLW9yaWdpbjogNTBweCA1MHB4OyBhbmltYXRpb246IDEuMTExMTFzIGxpbmVhciAtMS4xMTExMXMgaW5maW5pdGUgbm9ybWFsIGZvcndhcmRzIHJ1bm5pbmcgYnJlYXRoLThiNDk5NTM5LTlhMTMtNDJlYi1hN2MwLTg1ODVkODZhNjFlYzsiPjxwYXRoIGZpbGw9IiNhYmJkODEiIGQ9Ik00Ny4zIDY2LjRMNzMuNyA0MGMxLjgtMS44IDEuOC00LjYgMC02LjQtMS44LTEuOC00LjYtMS44LTYuNCAwTDQ0LjEgNTYuOCAzMi43IDQ1LjRjLTEuOC0xLjgtNC42LTEuOC02LjQgMC0xLjggMS44LTEuOCA0LjYgMCA2LjRsMTQuNiAxNC42Yy45LjkgMiAxLjMgMy4yIDEuM3MyLjMtLjUgMy4yLTEuM3oiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNDcsIDI0OCk7Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48bWV0YWRhdGEgeG1sbnM6ZD0iaHR0cHM6Ly9sb2FkaW5nLmlvL3N0b2NrLyI+PGQ6bmFtZT5vazwvZDpuYW1lPjxkOnRhZ3M+b2ssY29uZmlybSxyZWFkeSxwb3NpdGl2ZSxjaGVjayxyaWdodCxjb3JyZWN0LGFmZmlybWF0aXZlLHN1Y2Nlc3M8L2Q6dGFncz48ZDpsaWNlbnNlPmJ5PC9kOmxpY2Vuc2U+PGQ6c2x1Zz44cDNieTI8L2Q6c2x1Zz48L21ldGFkYXRhPjwvZz48L2c+PC9zdmc+Cg==";
const FRChQLYe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg3MzE3NTUxNzgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcxMS44NDE0NzcgOTc2LjczODQ2Mmw4OC4zMDAzMDgtODYuMTcxNTY5TDQwNC4zOTMzNTQgNTEzLjk2OTIzMSA4MDAuMTQxNzg1IDEzNy4zNzE1NjkgNzExLjg0MTQ3NyA1MS4yIDIyNy43OTY2NzcgNTEzLjk2OTIzMSA3MTEuODQxNDc3IDk3Ni43Mzg0NjJ6IiBwLWlkPSIyMDcwNiI+PC9wYXRoPjwvc3ZnPg==";
const HRChQLY = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDp0cmFuc3BhcmVudDtkaXNwbGF5OmJsb2NrOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZGVmcz4KICA8ZmlsdGVyIGlkPSJsZGlvLWRxNHlxdnNjZ3N3LWZpbHRlciIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VHcmFwaGljIiBzdGREZXZpYXRpb249IjMiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICA8ZmVDb21wb25lbnRUcmFuc2ZlciByZXN1bHQ9ImN1dG9mZiI+CiAgICAgIDxmZUZ1bmNBIHR5cGU9ImxpbmVhciIgc2xvcGU9IjYwIiBpbnRlcmNlcHQ9Ii00MCI+PC9mZUZ1bmNBPgogICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDwvZmlsdGVyPgo8L2RlZnM+CjxnIGZpbHRlcj0idXJsKCNsZGlvLWRxNHlxdnNjZ3N3LWZpbHRlcikiIHRyYW5zZm9ybT0icm90YXRlKDYzLjYwMDQgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMy4wMzAzMDMwMzAzMDMwMzAzcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDk1LjMwNyA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMCIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjc2NjY2NjY2NjY2NjY2NjYgMCAwLjY2NjY2NjY2NjY2NjY2NjYgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEwNy4xMiA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjczMzMzMzMzMzMzMzMzMzMgMCAwLjYzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMC44ODkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC43IDAgMC42IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxMzYuNzU4IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIzIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNjY2NjY2NjY2NjY2NjY2NiAwIDAuNTY2NjY2NjY2NjY2NjY2NyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTU0LjYzMSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNCIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjYzMzMzMzMzMzMzMzMzMzMgMCAwLjUzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE3NC4wMiA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjYgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE5My45OTkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjYiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC41NjY2NjY2NjY2NjY2NjY3IDAgMC40NjY2NjY2NjY2NjY2NjY3IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMTMuNDI0IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNTMzMzMzMzMzMzMzMzMzMyAwIDAuNDMzMzMzMzMzMzMzMzMzMzUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIzMS4zMjMgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC41IDAgMC40IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDcuMTU4IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI5IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNDY2NjY2NjY2NjY2NjY2NyAwIDAuMzY2NjY2NjY2NjY2NjY2NjQgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI2MC44MTIgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNDMzMzMzMzMzMzMzMzMzMzUgMCAwLjMzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3Mi40MzQgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjExIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNCAwIDAuMyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjgyLjI4NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4zNjY2NjY2NjY2NjY2NjY3IDAgMC4yNjY2NjY2NjY2NjY2NjY2NiAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjkwLjY0IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMyIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjMzMzMzMzMzMzMzMzMzMzM3IDAgMC4yMzMzMzMzMzMzMzMzMzMzNCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjk3Ljc1NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTQiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4zMDAwMDAwMDAwMDAwMDAwNCAwIDAuMiAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAzLjg0NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4yNjY2NjY2NjY2NjY2NjY2NiAwIDAuMTY2NjY2NjY2NjY2NjY2NjYgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMwOS4wODkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjE2IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuMjMzMzMzMzMzMzMzMzMzMzQgMCAwLjEzMzMzMzMzMzMzMzMzMzMzIDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMTMuNjMyIDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxNyIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjEgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMxNy41OTEgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjE4IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuMTY2NjY2NjY2NjY2NjY2NjkgMCAwLjA2NjY2NjY2NjY2NjY2NjY3IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMjEuMDYxIDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxOSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjEzMzMzMzMzMzMzMzMzMzMzIDAgMC4wMzMzMzMzMzMzMzMzMzMzMyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+CjwvZz4KPC9zdmc+Cg==";
const CTChQLY = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIKICAgICB2aWV3Qm94PSIwIDAgMTcyIDE3MiIKICAgICBzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiAgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE0My4zMzMzMywxNDMuMzMzMzNoLTExNC42NjY2N2MtMi41NjkyNSwwIC00LjkzNDI1LC0xLjM3MjQyIC02LjIxMzUsLTMuNTk3NjdjLTEuMjc1NjcsLTIuMjI1MjUgLTEuMjY4NSwtNC45NjI5MiAwLjAyNTA4LC03LjE4MWw1Ny4zMzMzMywtMTAwLjMzMzMzYzEuMjgyODMsLTIuMjAwMTcgMy42NDA2NywtMy41NTQ2NyA2LjE4ODQyLC0zLjU1NDY3YzIuNTQ3NzUsMCA0LjkwNTU4LDEuMzU0NSA2LjE5MiwzLjU1NDY3bDU3LjMzMzMzLDEwMC4zMzMzM2MxLjI5MzU4LDIuMjE4MDggMS4zMDA3NSw0Ljk1NTc1IDAuMDI1MDgsNy4xODFjLTEuMjc1NjcsMi4yMjUyNSAtMy42NTE0MiwzLjU5NzY3IC02LjIxNzA4LDMuNTk3Njd6IiBmaWxsPSIjYzkwMDI5Ij48L3BhdGg+PHBhdGggZD0iTTc4LjgzMzMzLDEyMi4zNDIxN2MwLC0wLjk2MzkyIDAuMTY4NDIsLTEuODQ1NDIgMC41MTI0MiwtMi42NzMxN2MwLjMzNjgzLC0wLjgxNyAwLjgyMDU4LC0xLjUyNjUgMS40NDQwOCwtMi4xMjEzM2MwLjYxMjc1LC0wLjYwMiAxLjM2ODgzLC0xLjA3MTQyIDIuMjM2LC0xLjQwODI1YzAuODc0MzMsLTAuMzI5NjcgMS44NTYxNywtMC41MDUyNSAyLjk1MjY3LC0wLjUwNTI1YzEuMDk2NSwwIDIuMDg1NSwwLjE3NTU4IDIuOTY3LDAuNTA1MjVjMC44OTU4MywwLjMzNjgzIDEuNjUxOTIsMC44MDYyNSAyLjI2NDY3LDEuNDA4MjVjMC42MjcwOCwwLjU5NDgzIDEuMTEwODMsMS4zMDQzMyAxLjQ0NDA4LDIuMTIxMzNjMC4zNDQsMC44Mjc3NSAwLjUxMjQyLDEuNzA5MjUgMC41MTI0MiwyLjY3MzE3YzAsMC45Njc1IC0wLjE2ODQyLDEuODQ5IC0wLjUxMjQyLDIuNjUxNjdjLTAuMzM2ODMsMC44MDYyNSAtMC44MjA1OCwxLjUwMTQyIC0xLjQ0NDA4LDIuMTA3Yy0wLjYxMjc1LDAuNTk0ODMgLTEuMzY4ODMsMS4wNjA2NyAtMi4yNjQ2NywxLjQwNDY3Yy0wLjg4MTUsMC4zMjk2NyAtMS44NzA1LDAuNDk0NSAtMi45NjcsMC40OTQ1Yy0xLjEwMDA4LDAgLTIuMDc4MzMsLTAuMTY0ODMgLTIuOTUyNjcsLTAuNDk4MDhjLTAuODY3MTcsLTAuMzQ0IC0xLjYyMzI1LC0wLjgwOTgzIC0yLjIzNiwtMS40MDQ2N2MtMC42MjcwOCwtMC42MDU1OCAtMS4xMTA4MywtMS4zMDA3NSAtMS40NDQwOCwtMi4xMDdjLTAuMzQ0LC0wLjgwMjY3IC0wLjUxMjQyLC0xLjY4NDE3IC0wLjUxMjQyLC0yLjY0ODA4TTkxLjMwMzMzLDEwNy41aC0xMC42NTMyNWwtMS41MDg1OCwtNDNoMTMuNjY2ODN6IiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";
;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/utils/excuteAfterConnected.js
class ExcuteAfterConnected {
    constructor() {
        this.waitQueue = [];
    }
    connect() {
        this.waitQueue.forEach(i => {
            if (typeof i === "function") {
                i();
            }
            else {
                i.run();
            }
        });
        this.isConnected = true;
        this.waitQueue = [];
    }
    execute(cb, uniqueKey) {
        if (this.isConnected) {
            cb();
        }
        else {
            if (uniqueKey) {
                let index = 0;
                for (let i of this.waitQueue) {
                    if (typeof i !== "function" && i.uniqueKey === uniqueKey) {
                        this.waitQueue.splice(index, 1);
                        break;
                    }
                    index++;
                }
                this.waitQueue.push({
                    uniqueKey,
                    run: cb,
                });
            }
            else {
                this.waitQueue.push(cb);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/input/visual-input.js


class VisualInput {
    constructor() {
        this.passwordWord = "*";
        this.excuteAfterKeyboard = new ExcuteAfterConnected();
        this.insertInBody = false;
        this.onInput = new external_rxjs_.Subject();
        this.onFocus = new external_rxjs_.Subject();
        this.onBlur = new external_rxjs_.Subject();
        this.onKeypress = new external_rxjs_.Subject();
        this.el = document.createElement("div");
        this.el.className = "__visual-input";
        this.el.appendChild((this.textEl = document.createElement("div")));
        this.el.appendChild((this.cursor = document.createElement("span")));
        this.textEl.className = "_visual-input-text";
        this.cursor.className = "_visual-input-cursor";
        this.el.addEventListener("click", (e) => {
            if (this._disabled)
                return;
            e.voyoVisualInput = true;
            this.focus();
        });
    }
    watchFocus() {
        if (this.isFocus) {
            this.cursor.classList.add("_show");
        }
        else {
            this.cursor.classList.remove("_show");
        }
    }
    set disabled(v) {
        if (v == this._disabled)
            return;
        this._disabled = v;
    }
    showValue(v) {
        this.textEl.innerText = v;
    }
    writeValue(v) {
        if (v === this.value)
            return;
        this.value = v;
        if (v === "") {
            this.showValue(v);
            this.onInput.next(v);
            return;
        }
        const str = v.toString();
        this.showValue(this.type === "password" ? str.replace(/.*/g, this.passwordWord) : str);
        this.onInput.next(v);
    }
    setValue(v) {
        this.writeValue(v);
        this.excuteAfterKeyboard.execute(() => (this.keyboard.value = v));
    }
    clearBodySub() {
        if (this.bodyClickSub) {
            this.bodyClickSub.unsubscribe();
            this.bodyClickSub = null;
        }
    }
    focus() {
        if (this.isFocus)
            return;
        this.isFocus = true;
        this.watchFocus();
        this.clearBodySub();
        this.bodyClickSub = (0,external_rxjs_.fromEvent)(document.body, "click").subscribe((e) => {
            if (e.voyoKeyboardClick || e.voyoVisualInput)
                return;
            this.blur();
        });
        if (!this.keyboard) {
            this.keyboard = document.createElement("voyoc-keyboard");
            this.keyboard.valueChange.subscribe(e => {
                this.writeValue(e);
            });
            this.keyboard.keyPress.subscribe((e) => {
                this.onKeypress.next(e);
            });
            this.excuteAfterKeyboard.connect();
        }
        if (!this.insertInBody) {
            document.body.appendChild(this.keyboard);
            this.insertInBody = true;
        }
        this.keyboard.show();
        this.onFocus.next();
    }
    blur() {
        if (!this.isFocus)
            return;
        this.isFocus = false;
        this.watchFocus();
        this.keyboard.hide();
        this.onBlur.next();
    }
    destroy() {
        this.keyboard && this.keyboard.disconnectedCallback();
    }
    toFocus() {
        this.focus();
    }
    toBlur() {
        this.blur();
    }
    setType(type) {
        this.type = type;
    }
    getInputEl() {
        return this.el;
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/input/input.js

class InputInterface {
}
class Input {
    constructor() {
        this.inputEl = document.createElement("input");
        this.onInput = new external_rxjs_.Subject();
        this.onFocus = new external_rxjs_.Subject();
        this.onBlur = new external_rxjs_.Subject();
        this.onKeypress = new external_rxjs_.Subject();
        this.inputEl.addEventListener("input", (e) => {
            this.onInput.next(e.target.value);
        });
        this.inputEl.addEventListener("focus", () => {
            this.onFocus.next();
        });
        this.inputEl.addEventListener("keypress", e => {
            this.onKeypress.next(e.keyCode);
        });
        this.inputEl.addEventListener("blur", () => {
            this.onBlur.next();
        });
    }
    set disabled(v) {
        this.inputEl.disabled = this._disabled = v;
    }
    toFocus() {
        this.inputEl.focus();
    }
    toBlur() {
        this.inputEl.blur();
    }
    setValue(v) {
        this.inputEl.value = v;
    }
    setType(type) {
        this.inputEl.type = type;
    }
    getInputEl() {
        return this.inputEl;
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/input/tap-input.js
class TapInput {
    constructor() {
        this.el = document.createElement("div");
        this.el.className = "_input __visual-input";
    }
    getInputEl() {
        return this.el;
    }
    setValue(v) {
        this.el.innerText = v;
    }
}

// EXTERNAL MODULE: external "@ztwx/utils"
var utils_ = __webpack_require__(495);
;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/input/input.component.js











let InputComponent = class InputComponent extends VoyoComponent {
    constructor() {
        super(...arguments);
        this.excuteAfterConnected = new ExcuteAfterConnected();
        this.valueEvent = new VoyoEventEmitter();
        this.focusEvent = new VoyoEventEmitter();
        this.blurEvent = new VoyoEventEmitter();
        this.tapEvent = new VoyoEventEmitter();
        this.enterEvent = new VoyoEventEmitter();
        this.clearEvent = new VoyoEventEmitter();
        this.prefixExists0 = false;
        this.suffixExists0 = false;
        this.footerExists0 = false;
        this.placeholderShow = undefined;
        this.isClearable = false;
        this.isFocus0 = false;
    }
    set disabled(v) {
        this._disabled = v;
        this.excuteAfterConnected.execute(() => {
            if (this.input)
                this.input.disabled = v;
        });
    }
    set size(v) {
        this.classManage.replaceClass("size", `__size-${v}`);
    }
    set color(v) {
        this.classManage.replaceClass("color", `__color-${v}`);
    }
    set type(v) {
        this.inputType = v;
        this.classManage.replaceClass("type", `__type-${v}`);
    }
    set placeholder(v) {
        this.placeholderEl.innerText = v;
    }
    // input type
    set contentType(v) {
        this.excuteAfterConnected.execute(() => {
            this.input && this.input.setType(v);
        });
    }
    set value(v) {
        this.setValue(v);
    }
    set prefixExists(v) {
        if (v === this.prefixExists0)
            return;
        this.prefixExists0 = v;
        this.classManage.toggleClass("__prefix", v);
    }
    set suffixExists(v) {
        if (v === this.suffixExists0)
            return;
        this.suffixExists0 = v;
        this.classManage.toggleClass("__suffix", v);
    }
    set footerExists(v) {
        if (v === this.footerExists0)
            return;
        this.footerExists0 = v;
        this.classManage.toggleClass("__footer", v);
    }
    getPrefixWidth() {
        return this.prefixEl.offsetWidth;
    }
    showPlaceholderRun(v) {
        this.classManage.toggleClass("__show-placeholder", v);
    }
    showPlaceHolder(v) {
        if (v === this.placeholderShow)
            return;
        this.placeholderShow = v;
        if (!this.excuteAfterConnected.isConnected) {
            this.showPlaceholderRun(v);
        }
        else {
            this.excuteAfterConnected.execute(() => {
                this.showPlaceholderRun(v);
            });
        }
    }
    watchPlaceholderShow() {
        if (!this.isFocus && !this.value0) {
            this.showPlaceHolder(true);
        }
        else {
            this.showPlaceHolder(false);
        }
    }
    watchClearable() {
        const isClearable = !!this.value0 && this.isFocus0;
        if (isClearable === this.isClearable)
            return;
        setTimeout(() => {
            this.classManage.toggleClass("__clearable", this.clearable ? isClearable : false);
        }, utils_.isMobile ? 20 : 200);
        this.isClearable = isClearable;
    }
    set isFocus(v) {
        this.isFocus0 = v;
        this.watchPlaceholderShow();
        this.watchClearable();
    }
    get isFocus() {
        return this.isFocus0;
    }
    focus() {
        if (this.isFocus)
            return;
        this.isFocus = true;
        this.input.toFocus();
        this.classManage.toggleClass("__focus", true);
    }
    blur() {
        if (!this.isFocus)
            return;
        this.isFocus = false;
        this.input.toBlur();
        this.classManage.toggleClass("__focus", false);
    }
    toFocus() {
        this.excuteAfterConnected.execute(() => {
            this.input.toFocus();
        });
    }
    enter() {
        this.blur();
        this.enterEvent.next(true);
    }
    setValue(v, fromInput = false) {
        this.excuteAfterConnected.execute(() => {
            if (v === this.value0)
                return;
            this.value0 = v;
            if (!fromInput) {
                this.input && this.input.setValue(v);
                this.tapInput && this.tapInput.setValue(v);
            }
            else {
                this.valueEvent.next(v.toString());
            }
            this.watchPlaceholderShow();
            this.watchClearable();
        });
    }
    clearValue() {
        this.setValue("");
        this.valueEvent.next("");
        this.clearEvent.next(true);
    }
    created() {
        this.wrapper = this.shadowRoot.querySelector(".voyo-input-wrapper");
        this.inputContainer = this.shadowRoot.querySelector("._input-container");
        this.placeholderEl = this.shadowRoot.querySelector("._placeholder");
        this.prefixEl = this.shadowRoot.querySelector("._prefix");
        this.clearEl = this.shadowRoot.querySelector("._clear");
        this.classManage = new ClassManage(this.wrapper);
        this.listenSlotChange();
    }
    mounted() {
        if (this.onlyTap) {
            this.tapInput = new TapInput();
            this.inputContainer.addEventListener("click", () => {
                if (!this._disabled)
                    this.tapEvent.next();
            });
            this.inputContainer.appendChild(this.tapInput.getInputEl());
        }
        else {
            this.input = !this.visual ? new Input() : new VisualInput();
            const inputElement = this.input.getInputEl();
            inputElement.classList.add("_input");
            this.inputContainer.appendChild(inputElement);
            this.input.onFocus.subscribe(() => {
                this.focus();
            });
            this.input.onBlur.subscribe(() => {
                this.blur();
            });
            this.input.onKeypress.subscribe(e => {
                if (e === 13) {
                    this.enter();
                }
            });
            this.input.onInput.subscribe(v => {
                this.setValue(v, true);
            });
        }
        this.clearEl.addEventListener("click", () => {
            this.clearValue();
        });
        this.watchPlaceholderShow();
        this.handleFooterSlot();
        this.excuteAfterConnected.connect();
    }
    disconnectedCallback() {
        this.input && this.input.destroy && this.input.destroy();
    }
    listenSlotChange() {
        const prefixSlot = this.shadowRoot.querySelector("slot[name='prefix']");
        const suffixSlot = this.shadowRoot.querySelector("slot[name='suffix']");
        const footerSlot = this.shadowRoot.querySelector("slot[name='footer']");
        prefixSlot.addEventListener("slotchange", () => {
            this.prefixExists = (prefixSlot.assignedNodes() || []).length > 0;
        });
        suffixSlot.addEventListener("slotchange", () => {
            this.suffixExists = (suffixSlot.assignedNodes() || []).length > 0;
        });
        footerSlot.addEventListener("slotchange", () => {
            this.footerExists = (footerSlot.assignedNodes() || []).length > 0;
        });
    }
    handleFooterSlot() { }
};
__decorate([
    VoyoInput({ name: "onlyTap" })
], InputComponent.prototype, "onlyTap", void 0);
__decorate([
    VoyoInput({ name: "clearable", defaultValue: true })
], InputComponent.prototype, "clearable", void 0);
__decorate([
    VoyoInput({ name: "disabled" })
], InputComponent.prototype, "disabled", null);
__decorate([
    VoyoInput({ name: "size", defaultValue: "now" })
], InputComponent.prototype, "size", null);
__decorate([
    VoyoInput({ name: "color", defaultValue: "primary" })
], InputComponent.prototype, "color", null);
__decorate([
    VoyoInput({ name: "type", defaultValue: "flat" })
], InputComponent.prototype, "type", null);
__decorate([
    VoyoInput({ name: "placeholder" })
], InputComponent.prototype, "placeholder", null);
__decorate([
    VoyoInput({ name: "contentType" })
], InputComponent.prototype, "contentType", null);
__decorate([
    VoyoInput({ name: "visual" })
], InputComponent.prototype, "visual", void 0);
__decorate([
    VoyoInput({ name: "value" })
], InputComponent.prototype, "value", null);
__decorate([
    VoyoOutput({ event: "valueChange" })
], InputComponent.prototype, "valueEvent", void 0);
__decorate([
    VoyoOutput({ event: "focus" })
], InputComponent.prototype, "focusEvent", void 0);
__decorate([
    VoyoOutput({ event: "blur" })
], InputComponent.prototype, "blurEvent", void 0);
__decorate([
    VoyoOutput({ event: "tap" })
], InputComponent.prototype, "tapEvent", void 0);
__decorate([
    VoyoOutput({ event: "enter" })
], InputComponent.prototype, "enterEvent", void 0);
__decorate([
    VoyoOutput({ event: "clear" })
], InputComponent.prototype, "clearEvent", void 0);
InputComponent = __decorate([
    VoyoDor({
        template: `
<main class="voyo-input-wrapper">
    <header class="_header"></header>
    <article class="_container">
        <span class="_prefix">
            <span class="_adapter-container">
                <slot name="prefix"></slot>
            </span>
            <div class="_placeholder"></div>
        </span>
        <span class="_input-container">
            
        </span>
        <span class="_clear">
           <img class="_close" src="${FRChQLY}">
        </span>
        <span class="_suffix">
            <slot name="suffix"></slot>
        </span>
        <span class="_container-line"></span>
    </article>
    <footer class="_footer">
        <slot name="footer"></slot>
    </footer>
</main>
  `,
        styles: '.voyo-input-wrapper{margin:.2em 0}.voyo-input-wrapper ._clear,.voyo-input-wrapper ._prefix,.voyo-input-wrapper ._suffix{z-index:1;position:relative;height:100%;min-width:1px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box}.voyo-input-wrapper ._container{position:relative;display:flex;align-items:center;padding:0 .5em}.voyo-input-wrapper ._input-container{position:relative;z-index:1;height:100%}.voyo-input-wrapper ._container-line{opacity:0;height:2px;width:100%;position:absolute;left:50%;bottom:0;background:var(--color-bg-deep3);transform:translate(-50%) scaleX(.1);transition:all .2s ease}.voyo-input-wrapper ._placeholder{position:absolute;top:0;left:0;padding-top:.5em;padding-left:.5em;z-index:-1;line-height:1;transition:all .3s ease-out;white-space:nowrap;width:100%;box-sizing:border-box;font-size:inherit;color:var(--color-font-assist)}.voyo-input-wrapper ._input-container{flex-grow:1;flex-shrink:1;flex-basis:0}.voyo-input-wrapper ._input{outline:none;border:none;-webkit-appearance:none;background:transparent;box-sizing:border-box;font-family:var(--font-family);height:100%;width:100%;font-size:inherit;padding:.5em}.voyo-input-wrapper ._input.__only-tap,.voyo-input-wrapper ._input.__visual-input{display:flex;align-items:center}.voyo-input-wrapper ._clear{display:none;padding:.2em .5em}.voyo-input-wrapper ._input-clear-icon{font-size:1em}.voyo-input-wrapper.__clearable ._clear{display:inline-flex}.voyo-input-wrapper.__prefix ._prefix{min-width:50px;padding:.2em .5em}.voyo-input-wrapper.__suffix ._suffix{padding:.2em .5em}.voyo-input-wrapper.__footer ._footer{min-height:1.2em;line-height:1;padding:.2em .2em 0}.voyo-input-wrapper ._close{width:1em}.voyo-input-wrapper.__type-flat:not(.__no-border) ._container:after{content:"";position:absolute;height:1px;bottom:0;width:100%;left:0;transform:scaleY(.4);background:var(--color-after-border)}.voyo-input-wrapper.__type-flat ._placeholder{opacity:0;transform:translate3d(100%,.5em,0)}.voyo-input-wrapper.__type-flat.__show-placeholder ._placeholder{opacity:1}.voyo-input-wrapper.__type-candy ._placeholder{opacity:0;transform:translate3d(100%,.5em,0)}.voyo-input-wrapper.__type-candy.__show-placeholder ._placeholder{opacity:1}.voyo-input-wrapper.__type-md ._container:after{content:"";position:absolute;height:1px;bottom:0;width:100%;left:0;transform:scaleY(.4);background:var(--color-after-border)}.voyo-input-wrapper.__type-md ._input{color:var(--color-font-content)}.voyo-input-wrapper.__type-md.__focus ._container-line{opacity:1;transform:translate(-50%) scaleX(1)}.voyo-input-wrapper.__type-md ._placeholder{transform:translate3d(100%,0,0);opacity:0}.voyo-input-wrapper.__type-md.__show-placeholder ._placeholder{opacity:1;color:var(--color-font-assist);transform:translate3d(100%,.5em,0)}.voyo-input-wrapper.__type-md.__color-error ._container:after{content:"";position:absolute;height:1px;bottom:0;width:100%;left:0;transform:scaleY(.4);background:var(--color-error)}.voyo-input-wrapper.__type-md.__color-error ._container-line{background:var(--color-error)}.voyo-input-wrapper.__type-candy ._container{border-radius:2em;background:var(--color-bg3)}.voyo-input-wrapper.__size-mini{font-size:var(--size-mini)}.voyo-input-wrapper.__size-mini.__type-md ._header{height:calc(var(--size-mini)*0.2)}.voyo-input-wrapper.__size-mini.__type-candy ._container,.voyo-input-wrapper.__size-mini.__type-flat ._container,.voyo-input-wrapper.__size-mini.__type-md ._container{height:calc(var(--size-mini)*3)}.voyo-input-wrapper.__size-small{font-size:var(--size-small)}.voyo-input-wrapper.__size-small.__type-md ._header{height:calc(var(--size-small)*0.2)}.voyo-input-wrapper.__size-small.__type-candy ._container,.voyo-input-wrapper.__size-small.__type-flat ._container,.voyo-input-wrapper.__size-small.__type-md ._container{height:calc(var(--size-small)*3)}.voyo-input-wrapper.__size-now{font-size:var(--size-now)}.voyo-input-wrapper.__size-now.__type-md ._header{height:calc(var(--size-now)*0.2)}.voyo-input-wrapper.__size-now.__type-candy ._container,.voyo-input-wrapper.__size-now.__type-flat ._container,.voyo-input-wrapper.__size-now.__type-md ._container{height:calc(var(--size-now)*3)}.voyo-input-wrapper.__size-medium{font-size:var(--size-medium)}.voyo-input-wrapper.__size-medium.__type-md ._header{height:calc(var(--size-medium)*0.2)}.voyo-input-wrapper.__size-medium.__type-candy ._container,.voyo-input-wrapper.__size-medium.__type-flat ._container,.voyo-input-wrapper.__size-medium.__type-md ._container{height:calc(var(--size-medium)*3)}.voyo-input-wrapper.__size-strong{font-size:var(--size-strong)}.voyo-input-wrapper.__size-strong.__type-md ._header{height:calc(var(--size-strong)*0.2)}.voyo-input-wrapper.__size-strong.__type-candy ._container,.voyo-input-wrapper.__size-strong.__type-flat ._container,.voyo-input-wrapper.__size-strong.__type-md ._container{height:calc(var(--size-strong)*3)}.voyo-input-wrapper.__size-large{font-size:var(--size-large)}.voyo-input-wrapper.__size-large.__type-md ._header{height:calc(var(--size-large)*0.2)}.voyo-input-wrapper.__size-large.__type-candy ._container,.voyo-input-wrapper.__size-large.__type-flat ._container,.voyo-input-wrapper.__size-large.__type-md ._container{height:calc(var(--size-large)*3)}@-webkit-keyframes Ficker{0%{opacity:0}to{opacity:1}}@keyframes Ficker{0%{opacity:0}to{opacity:1}}._visual-input-cursor._show{display:block;height:70%;width:2px;background:var(--color-font-base);-webkit-animation:Ficker .5s ease infinite;animation:Ficker .5s ease infinite;-webkit-animation-direction:alternate;animation-direction:alternate;margin-left:.2em}._adapter-container{height:100%;display:flex;justify-content:center;align-items:center}',
    })
], InputComponent);


;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/utils/DtCheck.js
class DirtyCheck {
    constructor() {
        this.dirtyStore = {};
    }
    isNew(key, v) {
        if (this.dirtyStore[key] !== v) {
            this.dirtyStore[key] = v;
            return true;
        }
        else {
            return false;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/AssemblyComponent.js


const assembly_store = window[ASSEMBLY_STORE_NAME] ||
    (window[ASSEMBLY_STORE_NAME] = {});
const assemblyComponent = (componentTag, Component) => {
    if (assembly_store[componentTag])
        return;
    assembly_store[componentTag] = true;
    // let i=0;
    class webComponent extends Component {
        // connectedCallback(){
        //   console.log(componentTag);
        //   super.connectedCallback&&super.connectedCallback();
        // }
        constructor() {
            super();
            this._dirtyCheck = new DirtyCheck();
            this.connectedOnce = false;
            let { template, styles, styleUrl } = Component.prototype._voyoData;
            this.attachShadow({ mode: "open" });
            if (styles) {
                if (styles instanceof Function) {
                    styles().then((res) => {
                        const styleEl = document.createElement("style");
                        styleEl.innerText = res.default;
                        this.shadowRoot.appendChild(styleEl);
                    });
                }
                else if (typeof styles === "object") {
                    template = `<style>${styles.default}</style>` + template;
                }
                else {
                    template = `<style>${styles}</style>` + template;
                }
            }
            else if (styleUrl) {
                template = `<style>${styleUrl}</style>` + template;
            }
            this.shadowRoot.innerHTML = template;
            //hook
            /**
             * can not modify this class when created.
             * change it after connected
             */
            this.created && this.created();
            this.handlers && this.handlers.forEach((handler) => handler(this));
            this.afterCreate && this.afterCreate();
        }
        //@ts-ignore
        connectedCallback() {
            super.connectedCallback && super.connectedCallback();
            if (!this.connectedOnce) {
                this.connectedOnce = true;
                this.mounted && this.mounted();
                this.voyoConnected.next(true);
                this.voyoConnected.complete();
                this.voyoConnectCompleted = true;
            }
        }
    }
    window.customElements.define(componentTag, webComponent);
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/registry/input.js


const registryInput = () => {
    assemblyComponent("voyoc-input", InputComponent);
};

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(748);
;// CONCATENATED MODULE: ./src/utils.ts
//shallow filter
const filterObject = (obj, remove) => {
  const newObj = {};
  Reflect.ownKeys(obj).forEach(key => {
    if (!remove.includes(key)) newObj[key] = obj[key];
  });
  return newObj;
};
;// CONCATENATED MODULE: ./src/components/input.tsx



registryInput();
const input_Input = {
  render() {
    const prefix = this.$slots.prefix && this.$slots.prefix();
    const suffix = this.$slots.suffix && this.$slots.suffix();
    return (0,external_vue_.h)("voyoc-input", {
      value: this.$attrs.modelValue,
      onValuechange: e => {
        this.$emit("update:modelValue", e.detail);
      },
      ...filterObject(this.$attrs, ["modelValue", "onUpdate:modelValue"])
    }, [prefix ? (0,external_vue_.h)("div", {
      slot: "prefix"
    }, prefix) : null, suffix ? (0,external_vue_.h)("div", {
      slot: "suffix"
    }, suffix) : null]);
  },

  created() {}

};
;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/utils/ripple.js

const baseSize = 12;
const removeTime = 400;
const removeEndTime = 400;
const body = document.body;
const autoSizeByWidth = (el, defaultSize = 30) => {
    return el.offsetWidth ? el.offsetWidth / 6 : defaultSize;
};
const switchClassName = (opts) => {
    return opts.css
        ? opts.css
        : opts.deep
            ? "ripple-wrapper-deep"
            : "ripple-wrapper-light";
};
const handleRipple = (el, opts) => {
    let one, rect, x, y, halfSize = baseSize / 2, 
    //已插入的ripple
    rippleQueue = [], 
    //删除Bubbling
    removeQueueTimeout, 
    //删除touchend class:
    removeEndTimeout, clearRemoveQueue = () => {
        clearTimeout(removeQueueTimeout);
        removeQueueTimeout = null;
    }, clearTouchEnd = () => {
        clearTimeout(removeEndTimeout);
        removeEndTimeout = null;
    };
    const wrapper = document.createElement("span");
    const className = switchClassName(opts);
    wrapper.classList.add("ripple-wrapper", className);
    el.appendChild(wrapper);
    const listenTouch = (e) => {
        if (opts.disabled)
            return;
        el.classList.add("ripple-callback");
        rect = el.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
        one = document.createElement("span");
        let fontSize;
        if (opts.size) {
            fontSize = opts.size;
        }
        else if (opts.autoSize) {
            fontSize = autoSizeByWidth(el);
        }
        if (fontSize) {
            one.style.fontSize = fontSize + "px";
            halfSize = fontSize / 2;
        }
        one.className = "ripple-bubbling";
        one.style.left = x - halfSize + "px";
        one.style.top = y - halfSize + "px";
        rippleQueue.push(one);
        wrapper.appendChild(one);
        if (removeQueueTimeout)
            clearRemoveQueue();
        if (removeEndTime)
            clearTouchEnd();
        removeQueueTimeout = setTimeout(() => {
            rippleQueue.forEach((child) => {
                wrapper.removeChild(child);
            });
            rippleQueue = [];
        }, removeTime);
        wrapper.classList.add("ripple-active");
    };
    const touchEnd = () => {
        el.classList.remove("ripple-callback");
        setTimeout(() => wrapper.classList.remove("ripple-active"), removeEndTime);
    };
    if (utils_.isMobile) {
        el.addEventListener("touchstart", (e) => {
            listenTouch(e.touches[0]);
        }, { passive: true });
        el.addEventListener("touchend", touchEnd, { passive: true });
    }
    else {
        el.addEventListener("mousedown", e => {
            listenTouch(e);
            body.addEventListener("mouseup", function mouseUp() {
                touchEnd();
                body.removeEventListener("mouseup", mouseUp);
            });
        });
    }
    // el.addEventListener('contextmenu',e=>e.preventDefault());
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/button-icon/button-icon.component.js









let ButtonIconComponent = class ButtonIconComponent extends VoyoComponent {
    constructor() {
        super(...arguments);
        this.rippleOpts = {
            autoSize: true,
            css: "ripple-btn",
            disabled: false,
        };
        this.voyoTap = new VoyoEventEmitter();
        this.awaitQueue = [];
        this.connected = false;
    }
    set disabled(v) {
        this.rippleOpts.disabled = v || v === "";
    }
    set color(v) {
        if (this.connected) {
            this.setColor(v);
        }
        else {
            this.awaitQueue.push(() => this.setColor(v));
        }
    }
    set size(v) {
        if (this.connected) {
            this.setSize(v);
        }
        else {
            this.awaitQueue.push(() => this.setSize(v));
        }
    }
    set type(v) {
        if (this.connected) {
            this.setType(v);
        }
        else {
            this.awaitQueue.push(() => this.setType(v));
        }
    }
    setColor(v) {
        this.classManage.replaceClass("color", `__${v}`);
    }
    setSize(v) {
        this.classManage.replaceClass("size", `voyo-btn-icon-size-${v}`);
    }
    setType(v) {
        this.classManage.replaceClass("type", `voyo-btn-${v}`);
    }
    created() {
        this.classManage = new ClassManage(this);
    }
    mounted() {
        this.connected = true;
        this.classList.add("btn", "voyo-btn-icon");
        handleRipple(this, this.rippleOpts);
        this.awaitQueue.forEach(run => run());
        this.addEventListener("click", (e) => {
            utils_.isIOS ?
                this.voyoTap.next(e) :
                setTimeout(() => {
                    this.voyoTap.next(e);
                }, this.coreSetting.tapTime);
        });
    }
};
__decorate([
    IOCAutowired({ name: SETTING_IOC_NAME })
], ButtonIconComponent.prototype, "coreSetting", void 0);
__decorate([
    VoyoInput({})
], ButtonIconComponent.prototype, "disabled", null);
__decorate([
    VoyoInput({ defaultValue: "primary" })
], ButtonIconComponent.prototype, "color", null);
__decorate([
    VoyoInput({ defaultValue: "now" })
], ButtonIconComponent.prototype, "size", null);
__decorate([
    VoyoInput({ defaultValue: "appear" })
], ButtonIconComponent.prototype, "type", null);
__decorate([
    VoyoOutput({ event: "voyoTap" })
], ButtonIconComponent.prototype, "voyoTap", void 0);
ButtonIconComponent = __decorate([
    VoyoDor({
        template: `
<slot></slot>
  `,
    })
], ButtonIconComponent);


;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/registry/button-icon.js


const registryButtonIcon = () => {
    assemblyComponent("voyoc-btn-icon", ButtonIconComponent);
};

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/button/button.component.js









let ButtonComponent = class ButtonComponent extends VoyoComponent {
    constructor() {
        super(...arguments);
        this.rippleOpts = {
            autoSize: true,
            css: "ripple-btn",
            disabled: false,
        };
        this.voyoTap = new VoyoEventEmitter();
        this.data = "data";
        this.awaitQueue = [];
        this.connected = false;
    }
    set block(v) {
        if (this.connected) {
            this.setBlock(v);
        }
        else {
            this.awaitQueue.push(() => this.setBlock(v));
        }
    }
    set color(v) {
        if (this.connected) {
            this.setColor(v);
        }
        else {
            this.awaitQueue.push(() => this.setColor(v));
        }
    }
    set size(v) {
        if (this.connected) {
            this.setSize(v);
        }
        else {
            this.awaitQueue.push(() => this.setSize(v));
        }
    }
    set type(v) {
        if (this.connected) {
            this.setType(v);
        }
        else {
            this.awaitQueue.push(() => this.setType(v));
        }
    }
    set round(v) {
        if (this.connected) {
            this.setRound(v);
        }
        else {
            this.awaitQueue.push(() => this.setRound(v));
        }
    }
    set noRadius(v) {
        if (this.connected) {
            this.setNoRadius(v);
        }
        else {
            this.awaitQueue.push(() => this.setNoRadius(v));
        }
    }
    set active(v) {
        if (this.connected) {
            this.setActive(v);
        }
        else {
            this.awaitQueue.push(() => this.setActive(v));
        }
    }
    setColor(v) {
        this.classManage.replaceClass("color", `__${v}`);
    }
    setSize(v) {
        this.classManage.replaceClass("size", `voyo-btn-size-${v}`);
    }
    setType(v) {
        this.classManage.replaceClass("type", `voyo-btn-${v}`);
    }
    setBlock(v) {
        this.classManage.toggleClass("voyo-btn-block", v === "" || v);
    }
    setRound(v) {
        this.classManage.toggleClass("voyo-btn-round", v === "" || v);
    }
    setNoRadius(v) {
        this.classManage.toggleClass("no-radius", v === "" || v);
    }
    setActive(v) {
        this.classManage.toggleClass("__active", v === "" || v);
    }
    created() {
        this.classManage = new ClassManage(this);
    }
    mounted() {
        this.connected = true;
        this.classList.add("btn", "voyo-btn");
        if (!this.noRipple)
            handleRipple(this, this.rippleOpts);
        this.awaitQueue.forEach(run => run());
        // @ts-ignore
        delete this.awaitQueue;
        this.addEventListener("click", (e) => {
            if (this.disabled)
                return;
            utils_.isIOS ? this.voyoTap.next(e) : setTimeout(() => this.voyoTap.next(e), this.coreSetting.tapTime);
        });
    }
};
__decorate([
    IOCAutowired({ name: SETTING_IOC_NAME })
], ButtonComponent.prototype, "coreSetting", void 0);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "block", null);
__decorate([
    VoyoInput({ defaultValue: "primary" })
], ButtonComponent.prototype, "color", null);
__decorate([
    VoyoInput({ defaultValue: "now" })
], ButtonComponent.prototype, "size", null);
__decorate([
    VoyoInput({ defaultValue: "appear" })
], ButtonComponent.prototype, "type", null);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "round", null);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "noRadius", null);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "active", null);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "disabled", void 0);
__decorate([
    VoyoInput({})
], ButtonComponent.prototype, "noRipple", void 0);
__decorate([
    VoyoOutput({ event: "voyoTap" })
], ButtonComponent.prototype, "voyoTap", void 0);
ButtonComponent = __decorate([
    VoyoDor({
        template: `
<slot></slot>
  `,
    })
], ButtonComponent);


;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/registry/button.js


const registryButton = () => {
    assemblyComponent("voyoc-btn", ButtonComponent);
};

;// CONCATENATED MODULE: ./src/components/button.tsx




registryButtonIcon();
registryButton();
const Button = {
  props: {
    loading: {}
  },

  render() {
    return (0,external_vue_.h)("voyoc-btn", {
      disabled: this.$props.loading ? 1 : 0,
      ...filterObject(this.$attrs, ["on:voyotap"]),
      onVoyotap: e => {
        this.$emit("tap", e);
      }
    }, [this.$slots.default && this.$slots.default(), this.$props.loading ? (0,external_vue_.createVNode)("i", {
      "class": "za za-loading voyo-an-loading ml-2"
    }, null) : null]);
  }

};
const ButtonIcon = {
  render() {
    return (0,external_vue_.h)("voyoc-btn-icon", { ...filterObject(this.$attrs, ["on:voyotap"]),
      onVoyotap: e => this.$emit("tap", e)
    }, this.$slots.default && this.$slots.default());
  }

};
;// CONCATENATED MODULE: ./src/directives/ripple.directive.ts

const RippleDirective = {
  mounted(el, binding) {
    const opts = binding.value || {};
    opts.autoSize = opts.autoSize ?? true;
    handleRipple(el, opts);
  }

};
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/ripple-radio/ripple-radio.vue?vue&type=template&id=0724764e&ts=true


const _hoisted_1 = /*#__PURE__*/(0,external_vue_.createElementVNode)("div", {
  class: "voyo-ripple-radio-bg"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", {
    onTap: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.tap && _ctx.tap(...args)),
    onTouchstart: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    onTouchend: _cache[2] || (_cache[2] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    onTouchcancel: _cache[3] || (_cache[3] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    class: (0,external_vue_.normalizeClass)(["", [_ctx.active ? '__active' : '', _ctx.active && !_ctx.activeLeaving ? '__enter' : '', _ctx.activeLeaving ? '__leave' : '', 'voyo-ripple-radio', '__color-' + _ctx.color]])
  }, [_hoisted_1, ((0,external_vue_.openBlock)(true), (0,external_vue_.createElementBlock)(external_vue_.Fragment, null, (0,external_vue_.renderList)(_ctx.list, i => {
    return (0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", {
      class: "voyo-ripple-radio-bubbling",
      key: i.index
    });
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,external_vue_.renderSlot)(_ctx.$slots, "default")], 34
  /* CLASS, HYDRATE_EVENTS */
  );
}
// EXTERNAL MODULE: external "vue-class-component"
var external_vue_class_component_ = __webpack_require__(64);
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(630);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/ripple-radio/ripple-radio.vue?vue&type=script&lang=ts



const bubblingLeaveDelay = 1000;
const activeLeaveDelay1 = 300;
const activeLeaveDelay2 = 150;
let default_1 = class default_1 extends external_vue_class_component_.Vue {
  color;
  disableTrigger;
  disabled;

  rippleTap(e) {}

  active = false;
  activeLeaving = false;
  list = [];
  count;
  timeout;
  activeTimeout;
  activeTimeout2;
  hasStarted;

  beforeCreate() {
    this.count = 0;
  }

  touchstart(e, control) {
    if (this.disableTrigger && !control) return;
    if (this.disabled) return;
    this.hasStarted = true;
    this.activeStart();
  }

  tap(e, control) {
    if (this.disableTrigger && !control) return;
    this.rippleStart();
    this.touchend(e, control);
    !this.disabled && this.rippleTap(e);
  }

  touchend(e, control) {
    if (this.disableTrigger && !control) return;
    if (!this.hasStarted) return;
    this.hasStarted = false;
    this.activeClose();
  }

  rippleStart() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    const i = {
      index: this.count++,
      timeout: setTimeout(() => {
        i.timeout = null;
        const itemIndex = this.list.indexOf(i);
        if (itemIndex >= 0) this.list.splice(itemIndex, 1);
      }, bubblingLeaveDelay)
    };
    this.list.push(i);
  }

  activeStart() {
    this.activeLeaving = false;
    if (this.activeTimeout) clearTimeout(this.activeTimeout);
    if (this.activeTimeout2) clearTimeout(this.activeTimeout2);
    this.active = true;
  }

  activeClose() {
    if (this.activeTimeout2) clearTimeout(this.activeTimeout2);
    this.activeTimeout = setTimeout(() => {
      this.activeLeaving = true;
      this.activeTimeout = null;
      this.activeTimeout2 = setTimeout(() => {
        this.activeLeaving = false;
        this.active = false;
        this.activeTimeout2 = null;
      }, activeLeaveDelay2);
    }, activeLeaveDelay1);
  }

};

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: "primary"
})], default_1.prototype, "color", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: false
})], default_1.prototype, "disableTrigger", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({})], default_1.prototype, "disabled", void 0);

__decorate([(0,external_vue_property_decorator_.Emit)("rippleTap")], default_1.prototype, "rippleTap", null);

default_1 = __decorate([(0,external_vue_class_component_.Options)({})], default_1);
/* harmony default export */ const ripple_radiovue_type_script_lang_ts = (default_1);
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/ripple-radio/ripple-radio.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ripple_radiovue_type_script_lang_ts, [['render',render]])

/* harmony default export */ const ripple_radio = (__exports__);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/checkbox/checkbox.vue?vue&type=template&id=da7d4f8c&ts=true

const checkboxvue_type_template_id_da7d4f8c_ts_true_hoisted_1 = {
  key: 0,
  class: "voyo-checkbox-selected abs-full"
};
function checkboxvue_type_template_id_da7d4f8c_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_voyo_ripple_radio = (0,external_vue_.resolveComponent)("voyo-ripple-radio");

  return (0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", {
    class: "flex-v-mid",
    onMousedown: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    onMouseup: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    onTouchstart: _cache[2] || (_cache[2] = //@ts-ignore
    (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    onTouchend: _cache[3] || (_cache[3] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    onClick: _cache[4] || (_cache[4] = //@ts-ignore
    (...args) => _ctx.tap && _ctx.tap(...args))
  }, [(0,external_vue_.createElementVNode)("div", {
    class: (0,external_vue_.normalizeClass)(["voyo-checkbox", [_ctx.value0 ? '__active' : '']])
  }, [(0,external_vue_.createElementVNode)("div", {
    class: (0,external_vue_.normalizeClass)(["voyo-checkbox-frame abs-full", [_ctx.value0 ? 'voyo-bg-' + _ctx.color : '', _ctx.value0 ? 'voyo-color-' + _ctx.color : '']])
  }, [_ctx.value0 ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", checkboxvue_type_template_id_da7d4f8c_ts_true_hoisted_1)) : (0,external_vue_.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,external_vue_.createVNode)(_component_voyo_ripple_radio, {
    color: _ctx.color,
    ref: "ripple",
    "disable-trigger": true,
    disabled: _ctx.disabled
  }, null, 8
  /* PROPS */
  , ["color", "disabled"])], 2
  /* CLASS */
  ), (0,external_vue_.renderSlot)(_ctx.$slots, "default")], 32
  /* HYDRATE_EVENTS */
  );
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/checkbox/checkbox.vue?vue&type=script&lang=ts



let checkboxvue_type_script_lang_ts_default_1 = class default_1 extends external_vue_class_component_.Vue {
  disabled;
  modelValue;
  color;

  watchValue(v) {
    if (v !== this.value0) v ? this.show() : this.close();
  }

  input(v) {}

  value0 = false;

  toggle() {
    this.value0 ? this.close() : this.show();
  }

  show() {
    this.input(this.value0 = true);
  }

  close() {
    this.input(this.value0 = false);
  }

  touchstart(e, control) {
    this.$refs.ripple.touchstart(e, true);
  }

  touchend(e, control) {
    this.$refs.ripple.touchend(e, true);
  }

  tap(e, control) {
    this.$refs.ripple.tap(e, true);
    this.toggle();
  }

};

__decorate([(0,external_vue_property_decorator_.Prop)({})], checkboxvue_type_script_lang_ts_default_1.prototype, "disabled", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: false
})], checkboxvue_type_script_lang_ts_default_1.prototype, "modelValue", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: 'primary'
})], checkboxvue_type_script_lang_ts_default_1.prototype, "color", void 0);

__decorate([(0,external_vue_property_decorator_.Watch)("modelValue", {
  immediate: true
})], checkboxvue_type_script_lang_ts_default_1.prototype, "watchValue", null);

__decorate([(0,external_vue_property_decorator_.Emit)("update:modelValue")], checkboxvue_type_script_lang_ts_default_1.prototype, "input", null);

checkboxvue_type_script_lang_ts_default_1 = __decorate([(0,external_vue_class_component_.Options)({})], checkboxvue_type_script_lang_ts_default_1);
/* harmony default export */ const checkboxvue_type_script_lang_ts = (checkboxvue_type_script_lang_ts_default_1);
;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue




;


const checkbox_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(checkboxvue_type_script_lang_ts, [['render',checkboxvue_type_template_id_da7d4f8c_ts_true_render]])

/* harmony default export */ const checkbox_checkbox = (checkbox_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/cell/cell.vue?vue&type=template&id=2be9df27&ts=true

const cellvue_type_template_id_2be9df27_ts_true_hoisted_1 = {
  class: "_left flex-v-mid"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 2
};
const _hoisted_4 = {
  key: 0,
  class: "voyo-cell-left-title"
};
const _hoisted_5 = {
  key: 1,
  class: "voyo-cell-left-label"
};
const _hoisted_6 = {
  key: 3,
  class: "voyo-cell-left-title"
};
const _hoisted_7 = {
  class: "_right flex-1"
};
function cellvue_type_template_id_2be9df27_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", {
    class: (0,external_vue_.normalizeClass)(["voyo-cell flex-v-between yo-hover", [_ctx.border ? '__border' : '']])
  }, [(0,external_vue_.createElementVNode)("div", cellvue_type_template_id_2be9df27_ts_true_hoisted_1, [_ctx.img ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("img", {
    key: 0,
    src: _ctx.img,
    class: "voyo-cell-img"
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : (0,external_vue_.createCommentVNode)("v-if", true), _ctx.iconClass ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("span", {
    key: 1,
    class: (0,external_vue_.normalizeClass)([_ctx.iconClass, 'voyo-cell-icon'])
  }, null, 2
  /* CLASS */
  )) : (0,external_vue_.createCommentVNode)("v-if", true), (0,external_vue_.renderSlot)(_ctx.$slots, "title"), _ctx.label ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", _hoisted_3, [_ctx.title ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", _hoisted_4, (0,external_vue_.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )) : (0,external_vue_.createCommentVNode)("v-if", true), _ctx.label ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", _hoisted_5, (0,external_vue_.toDisplayString)(_ctx.label), 1
  /* TEXT */
  )) : (0,external_vue_.createCommentVNode)("v-if", true)])) : ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", _hoisted_6, (0,external_vue_.toDisplayString)(_ctx.title), 1
  /* TEXT */
  ))]), (0,external_vue_.createElementVNode)("div", _hoisted_7, [(0,external_vue_.createElementVNode)("div", {
    class: (0,external_vue_.normalizeClass)(['_right-value', _ctx.valueWidth ? 'ellipsis' : '']),
    style: (0,external_vue_.normalizeStyle)([_ctx.valueWidth ? {
      width: _ctx.valueWidth
    } : {}])
  }, [(0,external_vue_.createTextVNode)((0,external_vue_.toDisplayString)(_ctx.value) + " ", 1
  /* TEXT */
  ), (0,external_vue_.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  ), _ctx.rightIcon ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("span", {
    key: 0,
    class: (0,external_vue_.normalizeClass)(['_right-icon', _ctx.rightIcon])
  }, null, 2
  /* CLASS */
  )) : (0,external_vue_.createCommentVNode)("v-if", true)])], 2
  /* CLASS */
  );
}
;// CONCATENATED MODULE: ./src/assets/cloud-upload.svg
const cloud_upload_namespaceObject = __webpack_require__.p + "13d03ead604cc4a7f446.svg";
;// CONCATENATED MODULE: ./src/assets/loading.svg
const loading_namespaceObject = __webpack_require__.p + "edcd89311f955a3028cd.svg";
;// CONCATENATED MODULE: ./src/assets/close.svg
const close_namespaceObject = __webpack_require__.p + "10a62ae19690b5b5f92f.svg";
;// CONCATENATED MODULE: ./src/setting.ts



const setting = {
  cell: {
    border: true,
    linkIcon: "za za-right"
  },
  card: {
    footerMainAlign: "right"
  },
  group: {
    count: 3,

    dynamicGrid(width) {
      if (width > 900) {
        return 4;
      } else if (width > 750) {
        return 3;
      } else if (width > 500) {
        return 2;
      } else {
        return 1;
      }
    }

  },
  form: {
    requireText: "不能为空",
    notBlankText: "不能为空",
    minLengthText: "长度不可少于%s",
    maxLengthText: "长度不可超过%s",
    minNumText: "不可大于%s",
    maxNumText: "不可小于%s",
    notEmptyListText: "集合不可为空",
    errDynamicClear: true,
    errDynamicShow: false
  },
  icons: {
    upload: cloud_upload_namespaceObject,
    load: loading_namespaceObject,
    close: close_namespaceObject
  },
  uploadReq: file => Promise.resolve()
};
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/cell/cell.vue?vue&type=script&lang=ts




let Cell = class Cell extends external_vue_class_component_.Vue {
  rightIcon;
  type;
  to;
  title;
  label;
  value;
  ripple;
  border;
  valueWidth; //100px or 50vw

  img;
  iconClass;
};

__decorate([(0,external_vue_property_decorator_.Prop)({})], Cell.prototype, "type", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({})], Cell.prototype, "to", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: ""
})], Cell.prototype, "title", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: ""
})], Cell.prototype, "label", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: ""
})], Cell.prototype, "value", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: true
})], Cell.prototype, "ripple", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: setting.cell.border
})], Cell.prototype, "border", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: ""
})], Cell.prototype, "valueWidth", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({})], Cell.prototype, "img", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({})], Cell.prototype, "iconClass", void 0);

Cell = __decorate([(0,external_vue_class_component_.Options)({
  computed: {
    rightIcon() {
      switch (this.type) {
        case "select":
          return setting.cell.selectIcon;

        case "link":
          return setting.cell.linkIcon;
      }

      return "";
    }

  }
})], Cell);
/* harmony default export */ const cellvue_type_script_lang_ts = (Cell);
;// CONCATENATED MODULE: ./src/components/cell/cell.vue




;
const cell_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(cellvue_type_script_lang_ts, [['render',cellvue_type_template_id_2be9df27_ts_true_render]])

/* harmony default export */ const cell = (cell_exports_);
;// CONCATENATED MODULE: ./src/components/card.tsx


const Card = (props, {
  slots
}) => {
  return (0,external_vue_.createVNode)("div", {
    "class": "yo-card"
  }, [slots.header || props.title ? (0,external_vue_.createVNode)("header", {
    "class": "yo-card-header flex-v-between"
  }, [props.title ? (0,external_vue_.createVNode)("span", {
    "class": "_yo-card-header-title"
  }, [props.title]) : null, slots.header && slots.header()]) : null, (0,external_vue_.createVNode)("article", {
    "class": "yo-card-content"
  }, [slots.default && slots.default()]), slots.footer ? (0,external_vue_.createVNode)("footer", {
    "class": "yo-card-footer",
    "style": {
      textAlign: setting.card.footerMainAlign
    }
  }, [slots.footer()]) : null]);
};
;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/utils/RelativeFixed.js
class RelativeFixed {
    /**
     *
     * @param space dropdown 离按钮的间距
     * @param dis 浏览器边的间距
     */
    constructor(space = 0, dis = 10) {
        this.space = space;
        this.dis = dis;
    }
    relativePosition(targetEl, relativeEl, position = "bottom") {
        const rect = relativeEl.getBoundingClientRect();
        const obj = {
            rect,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
            winH: window.innerHeight,
            winW: document.body.offsetWidth,
            target: targetEl
        };
        return this.switchPosition(position, obj);
    }
    /**
     *
     * @param {"top"|"left"|"right"|"bottom"} position
     * @param obj
     * @param adjust
     */
    switchPosition(position, obj, adjust = false) {
        let top, left;
        const targetH = obj.target.offsetHeight;
        const targetW = obj.target.offsetWidth;
        // const minW=this.dis;
        const minH = this.dis;
        const maxW = obj.winW - this.dis;
        const maxH = obj.winH - this.dis;
        const getTop = (pos) => {
            if (pos == "top")
                return obj.rect.top - this.space - targetH;
            if (pos == "left")
                return obj.centerY - targetH / 2;
            if (pos == "right")
                return obj.centerY - targetH / 2;
            return obj.rect.bottom + this.space;
        };
        const getLeft = (pos) => {
            if (pos == "top")
                return obj.centerX - targetW / 2;
            if (pos == "left")
                return obj.rect.left - this.space - targetW;
            if (pos == "right")
                return obj.rect.right + this.space;
            return obj.centerX - targetW / 2;
        };
        top = getTop(position);
        left = getLeft(position);
        if (top !== undefined && top < minH) {
            if (position == "top") {
                top = getTop(position = "bottom");
            }
            else {
                top = minH;
            }
        }
        if (left !== undefined && left < minH) {
            if (position == "left") {
                left = getLeft(position = "right");
            }
            else {
                left = minH;
            }
        }
        if (left !== undefined && left + this.space + targetW > maxW) {
            if (position == "right") {
                left = getLeft(position = "left");
            }
            else {
                left = maxW - targetW - this.space;
            }
        }
        if (top !== undefined && top + this.space + targetH > maxH) {
            if (position == "bottom") {
                top = getLeft(position = "top");
            }
            else {
                top = maxH - targetH - this.space;
            }
        }
        return {
            top, left
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/menu/menu.component.js







class ForElement extends HTMLElement {
}
let MenuComponent = class MenuComponent extends VoyoComponent {
    constructor() {
        super(...arguments);
        this.relativeFixed = new RelativeFixed(5, 10);
        this.executeAfterConnected = new ExcuteAfterConnected();
        this.changeEvent = new VoyoEventEmitter();
    }
    set position(v) {
        this._position = v;
        this.executeAfterConnected.execute(() => {
            this.wrapperClassManage.replaceClass("position", "__position-" + v);
        });
    }
    get position() {
        return this._position;
    }
    set type(v) {
        this.executeAfterConnected.execute(() => {
            this.wrapperClassManage.replaceClass("type", "__type-" + v);
        });
    }
    set forEl(el) {
        if (el instanceof HTMLElement) {
            this._forEl = el;
            if (el.voyocMenuForElListenerName)
                return;
            if (this.clickTrigger) {
                el.voyocMenuForElListenerName = (e) => {
                    this.open(e);
                };
                el.addEventListener("click", el.voyocMenuForElListenerName);
            }
        }
    }
    created() {
        this.ancestorEl = this.shadowRoot.querySelector("#voyo-menu-ancestor");
        this.wrapperEl = this.shadowRoot.querySelector(".voyo-menu-wrapper");
        this.contentEl = this.shadowRoot.querySelector(".voyo-menu-content");
        this.contentSlot = this.shadowRoot.querySelector("slot[name='menu']");
        this.contentBodyEl = this.shadowRoot.querySelector(".voyo-menu-content-body");
        this.bgEl = this.shadowRoot.querySelector("._layout-bg");
        this.wrapperClassManage = new ClassManage(this.wrapperEl);
        this.insertFragment = document.createDocumentFragment();
        this.listenBgEl();
        this.listenContentAnimate();
        this.executeAfterConnected.connect();
    }
    open(e) {
        if (!this._forEl)
            throw new Error("ForEl must be specified!");
        // document.body.appendChild(this.wrapperEl);
        this.changeEvent.next(true);
        const assignedNodes = [...this.contentSlot.assignedNodes()];
        document.body.appendChild(this.wrapperEl);
        if (assignedNodes && assignedNodes.length) {
            assignedNodes.forEach((el) => this.insertFragment.appendChild(el));
        }
        this.contentBodyEl.appendChild(this.insertFragment);
        this.wrapperShow(true);
        const { top, left } = this.relativeFixed.relativePosition(this.contentEl, this._forEl, this.position);
        this.setTargetPosition(top, left);
    }
    setTargetPosition(top, left) {
        this.contentEl.style.top = Math.round(top) + "px";
        this.contentEl.style.left = Math.round(left) + "px";
    }
    closeStart() {
        // this.closeEnd();
        this.changeEvent.next(false);
        this.wrapperShow(false);
    }
    wrapperShow(show) {
        this.wrapperClassManage.replaceClass("display", show ? "__show" : "__hide");
        this.animationState = show ? "show" : "hide";
    }
    closeEnd() {
        this.wrapperShow(false);
        this.contentSlot.appendChild(this.insertFragment);
        this.ancestorEl.appendChild(this.wrapperEl);
    }
    listenBgEl() {
        this.bgEl.addEventListener("click", () => {
            this.closeStart();
        });
    }
    listenContentAnimate() {
        this.contentEl.addEventListener("animationend", (e) => {
            if (e.target !== this.contentEl)
                return;
            this.wrapperEl.classList.remove("__show", "__hide");
            if (this.animationState === "hide") {
                this.closeEnd();
            }
        });
    }
};
__decorate([
    VoyoOutput({ event: "change" })
], MenuComponent.prototype, "changeEvent", void 0);
__decorate([
    VoyoInput({ name: "position", defaultValue: "bottom" })
], MenuComponent.prototype, "position", null);
__decorate([
    VoyoInput({ name: "clickTrigger", defaultValue: true })
], MenuComponent.prototype, "clickTrigger", void 0);
__decorate([
    VoyoInput({ name: "type", defaultValue: "menu" })
], MenuComponent.prototype, "type", null);
__decorate([
    VoyoInput({ name: "forEl" })
], MenuComponent.prototype, "forEl", null);
MenuComponent = __decorate([
    VoyoDor({
        template: `
<span id="voyo-menu-ancestor">
  <div class="voyo-menu-wrapper">
    <div class="_layout-bg"></div>
    <article class="voyo-menu-content">
      <slot name="menu"></slot>
      <span class="voyo-menu-content-body"></span>
    </article>
  </div>
</span>
  `,
        styles: `
.voyo-menu-wrapper{display:none}
  `
    })
], MenuComponent);


;// CONCATENATED MODULE: ./node_modules/@voyo/core/dest/components/registry/menu.js


const registryMenu = () => {
    assemblyComponent("voyoc-menu", MenuComponent);
};

;// CONCATENATED MODULE: ./src/components/menu.tsx






registryMenu();
let Menu = class Menu extends external_vue_class_component_.Vue {
  modelValue;
  position;
  contentSpace;

  updateModelValue(val) {}

  watchModelValue(val) {
    this.show = val;
  }

  show = false;
  btnEl;
  wrapperEl;
  relativeFixed;

  created() {
    this.relativeFixed = new RelativeFixed(this.contentSpace, 5);
  }

  click() {
    this.updateModelValue(this.show = !this.show);
  }

  bgClick() {
    this.updateModelValue(this.show = false);
  }

  captureBtn(el) {
    this.btnEl = el;
  }

  wrapperMounted(vNode) {
    this.wrapperEl = vNode.el;
  }

  contentMounted(vNode) {
    const {
      top,
      left
    } = this.relativeFixed.relativePosition(vNode.el, this.btnEl, this.position);
    const el = vNode.el;
    el.style.top = top + "px";
    el.style.left = left + "px";
    this.insertWrapperEl();
  }

  insertWrapperEl() {
    if (this.show && this.wrapperEl) document.documentElement.appendChild(this.wrapperEl);
  }

  removeWrapperEl() {
    if (this.show && this.wrapperEl) {
      const parent = this.wrapperEl.parentElement;
      parent && parent.removeChild(this.wrapperEl);
    }
  }

  activated() {
    this.insertWrapperEl();
  }

  deactivated() {
    this.removeWrapperEl();
  }

  unmounted() {
    this.removeWrapperEl();
  }

};

__decorate([(0,external_vue_property_decorator_.Prop)({})], Menu.prototype, "modelValue", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: "bottom"
})], Menu.prototype, "position", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: 5
})], Menu.prototype, "contentSpace", void 0);

__decorate([(0,external_vue_property_decorator_.Emit)("update:modelValue")], Menu.prototype, "updateModelValue", null);

__decorate([(0,external_vue_property_decorator_.Watch)("modelValue", {
  immediate: true
})], Menu.prototype, "watchModelValue", null);

Menu = __decorate([(0,external_vue_class_component_.Options)({
  render() {
    return;
    [(0,external_vue_.h)("div", { ...this.$attrs,
      onClick: this.click,
      ref: this.captureBtn
    }, this.$slots.default && this.$slots.default()), (0,external_vue_.h)(external_vue_.Transition, {
      "enter-active-class": "__show",
      "leave-active-class": "__hide"
    }, () => this.show ? (0,external_vue_.h)("div", {
      class: "voyo-menu-wrapper __type-menu",
      onVnodeBeforeMount: this.wrapperMounted
    }, [(0,external_vue_.h)("div", {
      class: "_layout-bg",
      onClick: this.bgClick
    }), (0,external_vue_.h)("div", {
      class: ["voyo-menu-content"],
      onVnodeMounted: this.contentMounted
    }, [this.$slots.content && this.$slots.content()])]) : null)];
  }

})], Menu);

;// CONCATENATED MODULE: ./src/components/group.tsx



const GroupResizeCSSKey = "group-resize-css-key";
const resizeObserver = window.ResizeObserver ? new window.ResizeObserver(entries => {
  for (const entry of entries) {
    const gridCount = setting.group.dynamicGrid(entry.contentRect.width);
    const gridCss = `yo-group-${gridCount}`;

    if (gridCss != entry.target.yoCssGrid) {
      entry.target.yoCssManager.replaceClass(GroupResizeCSSKey, entry.target.yoCssGrid = gridCss);
    }
  }
}) : null;
const Group = (props, {
  slots
}) => {
  return (0,external_vue_.h)("section", {
    onVnodeMounted(node) {
      const el = node.el;
      el.yoCssManager = new ClassManage(el);

      if (resizeObserver && !props.grid) {
        resizeObserver.observe(el);
      } else {
        el.yoCssManager.replaceClass(GroupResizeCSSKey, `yo-group-${props.grid || setting.group.count}`);
      }
    },

    onVnodeUnmounted(node) {
      if (resizeObserver) resizeObserver.unobserve(node.el);
    },

    class: ["yo-group", props.dense ? '__dense' : '']
  }, slots.default && slots.default());
};
const group_Cell = (props, {
  slots
}) => {
  return (0,external_vue_.h)("div", {
    class: ["yo-group-cell", props.span ? "yo-group-cell-span-" + props.span : null]
  }, [(0,external_vue_.h)("dl", {}, [props.label ? (0,external_vue_.h)("dt", {}, [props.important ? (0,external_vue_.h)("span", {
    class: "_cell-important"
  }, "*") : null, props.label]) : null, (0,external_vue_.h)("dd", {}, [slots.default && slots.default()])]), (0,external_vue_.h)("aside", {
    class: "_cell-decorator"
  }, slots.decorator && slots.decorator())]);
};
;// CONCATENATED MODULE: ./src/components/form/form.tsx






let Form = class Form extends external_vue_class_component_.Vue {
  grid;
  dense;
  disabled;
  gap; //动态清除表单错误

  errDynamicClear; //动态展示表单错误

  errDynamicShow;
  form;
  subOrders;

  watchForm(v) {
    if (!v) return;
    this.clearSubOrders();
    v.controllers.forEach(i => {
      this.subOrders.push(i._valueChangeSubject.subscribe(val => {
        // console.log("--", i);
        if (this.errDynamicShow) {
          i._checkValid(val);
        } else if (this.errDynamicClear) {
          i._clearErr();
        }
      }));
    });
  }

  clearSubOrders() {
    this.subOrders && this.subOrders.forEach(i => i.unsubscribe);
    this.subOrders = [];
  }

  unmounted() {
    this.clearSubOrders();
  }

};

__decorate([(0,external_vue_property_decorator_.Prop)()], Form.prototype, "grid", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)()], Form.prototype, "dense", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)()], Form.prototype, "disabled", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)()], Form.prototype, "gap", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: setting.form.errDynamicClear
})], Form.prototype, "errDynamicClear", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)({
  default: setting.form.errDynamicShow
})], Form.prototype, "errDynamicShow", void 0);

__decorate([(0,external_vue_property_decorator_.Prop)()], Form.prototype, "form", void 0);

__decorate([(0,external_vue_property_decorator_.Watch)("form", {
  immediate: true
})], Form.prototype, "watchForm", null);

Form = __decorate([(0,external_vue_class_component_.Options)({
  render() {
    return (0,external_vue_.h)(Group, {
      grid: this.grid,
      dense: this.dense,
      gap: this.gap
    }, () => !this.form ? null : this.form.controllers.map(i => !i.shadow ? (0,external_vue_.h)(group_Cell, {
      span: i.span,
      key: i.id,
      label: i.label,
      important: i.required || i.star || i.notBlank || i.notEmptyList
    }, {
      default: () => [i.render ? i.render(i, this.form.dict) : null, i.tag ? (0,external_vue_.h)((0,external_vue_.resolveComponent)(i.tag), {
        modelValue: i.value,
        "onUpdate:modelValue": v => {
          return i.value = v;
        },
        disabled: i.disabled || this.disabled,
        ...(i.props || {})
      }) : null],
      decorator: () => (0,external_vue_.h)(external_vue_.Transition, {
        name: "yo-fade"
      }, () => i.error ? (0,external_vue_.h)("div", {
        class: "yo-group-cell-error"
      }, i.error) : null)
    }) : null));
  }

})], Form);

;// CONCATENATED MODULE: ./src/components/upload/upload.tsx




const Upload = {
  props: {
    compressOpts: {
      type: Object
    },
    accept: {
      type: String
    },
    defaultImg: {
      type: String
    },
    modelValue: {
      type: String
    },
    type: {
      type: String,
      default: "normal"
    }
  },

  setup(props, {
    emit
  }) {
    const fileLoading = (0,external_vue_.ref)(false);
    const compressedImg = (0,external_vue_.ref)("");
    (0,external_vue_.watch)(() => props.defaultImg, v => {
      if (v) compressedImg.value = v;
    }, {
      immediate: true
    });
    (0,external_vue_.watch)(() => props.modelValue, v => {
      if (v) compressedImg.value = v;
    }, {
      immediate: true
    });

    const fileChange = async e => {
      const target = e.target;
      const file = target.files[0];
      if (!file) return;
      fileLoading.value = true;

      try {
        const compressResult = await utils_.fileCompress.compress({ ...(props.compressOpts || {}),
          file,
          resultType: "blob"
        });
        emit("fileCb", {
          ok: true,
          file: compressResult.result,
          md5: compressResult.fileMd5,
          postfix: compressResult.postfix,
          uploadEnd: success => {
            if (success) compressedImg.value = URL.createObjectURL(compressResult.result);
            fileLoading.value = false;
            target.value = "";
          }
        });
        await setting.uploadReq(file).then(({
          result
        }) => {
          compressedImg.value = URL.createObjectURL(compressResult.result);
          fileLoading.value = false;
          target.value = "";
          emit("update:modelValue", result);
        }).catch(() => {
          fileLoading.value = false;
          target.value = "";
        });
      } catch (e) {
        emit("file", {
          ok: false,
          file
        });
      }
    };

    const closeShow = () => {
      compressedImg.value = "";
      emit("clear");
      emit("update:modelValue", "");
    };

    return () => props.type === "normal" ? (0,external_vue_.h)("div", {
      class: ["yo-upload-block", "flex-center", fileLoading.value ? "__load" : ""]
    }, [(0,external_vue_.createVNode)("img", {
      "src": setting.icons.upload,
      "class": "_upload-img"
    }, null), (0,external_vue_.createVNode)("img", {
      "src": setting.icons.load,
      "class": ["_load-img", "voyo-an-loading"]
    }, null), compressedImg.value ? (0,external_vue_.createVNode)("img", {
      "src": compressedImg.value,
      "class": ["_show-img", "abs-full"]
    }, null) : null, compressedImg.value ? (0,external_vue_.createVNode)("img", {
      "onClick": closeShow,
      "src": setting.icons.close,
      "class": "_close-img"
    }, null) : null, compressedImg.value ? null : (0,external_vue_.h)("input", {
      type: "file",
      class: ["abs-full", "_input"],
      accept: props.accept,
      disabled: fileLoading.value,
      onChange: fileChange
    })]) : (0,external_vue_.h)("div", {
      class: ["yo-upload-block", "flex-center", fileLoading.value ? "__load" : ""]
    }, [// <img src={setting.icons.upload} class="_upload-img" />,
    // <img
    //   src={setting.icons.load}
    //   class={["_load-img", "voyo-an-loading"]}
    // />,
    // compressedImg.value ? (
    //   <img src={compressedImg.value} class={["_show-img", "abs-full"]} />
    // ) : null,
    // compressedImg.value ? (
    //   <img
    //     onClick={closeShow}
    //     src={setting.icons.close}
    //     class="_close-img"
    //   />
    // ) : null,
    (0,external_vue_.h)("input", {
      type: "file",
      class: ["abs-full", "_input"],
      accept: props.accept,
      disabled: fileLoading.value,
      onChange: fileChange
    })]);
  }

};
;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/validators/fn.validator.js
class FnValidator {
    constructor(validateCb, errMessage) {
        this.name = "fn";
        this.cb = validateCb;
        this.errMessage = errMessage;
    }
    apply(value, formVal) {
        return this.cb(value, formVal);
    }
}

;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/validators/notBlank.validator.js
/* harmony default export */ const notBlank_validator = (class {
    constructor(errMessage) {
        this.name = "notBlank";
        this.errMessage = errMessage;
    }
    apply(value) {
        if (typeof value == "string")
            return !!value.trim();
        return value === 0 || !!value;
    }
});

;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/validators/minLength.validator.js
/* harmony default export */ const minLength_validator = (class {
    constructor(errMessage, length) {
        this.name = "minLength";
        this.errMessage = errMessage;
        this.length = length;
    }
    apply(value) {
        return !value || (typeof (value) == "string" && value.length >= this.length);
    }
});

;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/validators/maxLength.validator.js
/* harmony default export */ const maxLength_validator = (class {
    constructor(errMessage, length) {
        this.name = "maxLength";
        this.errMessage = errMessage;
        this.length = length;
    }
    apply(value) {
        return !value || (typeof (value) == "string" && value.length <= this.length);
    }
});

;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/validators/notEmptyList.validator.js
/* harmony default export */ const notEmptyList_validator = (class {
    constructor(errMessage, length) {
        this.name = "notEmptyList";
        this.errMessage = errMessage;
        this.length = length;
    }
    apply(value) {
        return !!value && Array.isArray(value) && value.length > 0;
    }
});

;// CONCATENATED MODULE: ./node_modules/@ztwx/form/lib/Subject.js
class Subject {
    constructor() {
        this.id = 0;
        this.orderList = [];
    }
    next(v) {
        this.orderList.forEach((i) => {
            i.cb(v);
        });
    }
    subscribe(cb) {
        const id = ++this.id;
        const order = {
            id,
            cb,
            unsubscribe: () => this.unsubscribe(id)
        };
        this.orderList.push(order);
        return order;
    }
    unsubscribe(itemId) {
        const itemIndex = this.orderList.findIndex((i) => i.id === itemId);
        if (itemIndex >= 0)
            this.orderList.splice(itemIndex, 1);
    }
}

;// CONCATENATED MODULE: ./src/components/form/form-tool.ts


class GlobalHandle {
  preSetValFnList = [];
  preCreateFnList = [];
  afterResultFnList = [];

  handlePreCreate(controller) {
    if (controller.disableGlobalControllerHandle) return;

    for (let i of this.preCreateFnList) {
      i(controller);
    }
  }

  handlePreSetVal(controller) {
    if (controller.disableGlobalControllerHandle) return;

    for (let i of this.preSetValFnList) {
      controller.value = i(controller);
    }
  }

  handleAfterResult(controllers, result) {
    let result2 = result;

    for (let i of this.afterResultFnList) {
      result2 = i(controllers, result);
    }

    return result2;
  }

}
const formGlobalHandle = new GlobalHandle();
const handleValueChange = (valueChange, c, init) => {
  if (init) {
    if (typeof valueChange === "object" && valueChange != null) {
      valueChange.immediate && valueChange.handle && valueChange.handle(c.value, c);
    }
  } else {
    if (typeof valueChange === "function") {
      valueChange(c.value, c);
    } else if (typeof valueChange === "object" && valueChange != null) {
      valueChange.handle && valueChange.handle(c.value, c);
    }
  }
};
const demonErrMessage = (valid, val) => {
  if (typeof valid.errMessage == "string") {
    return valid.errMessage;
  }

  if (typeof valid.errMessage == "function") {
    return valid.errMessage(val);
  }

  return "";
};

const assemblyController = c => {
  c._originVal = c.value;
  c.error ??= "";

  c._setOrigin = function (val, skipModifyCurrentValue = false) {
    this._originVal = val;
    if (!skipModifyCurrentValue) this.value = val;
  };

  c._checkValid = async function (val) {
    this.error = "";
    if (!this.validators) return true;
    const value = val ?? this.value;

    for (let valid of this.validators) {
      const pass = valid.apply(value);
      if (typeof pass === "boolean" && !pass) return this.error = demonErrMessage(valid, value);
      if (!(await pass)) return this.error = demonErrMessage(valid, value);
    }

    return true;
  };

  c._clean = function () {
    this.value = undefined;
    this.error = "";
  };

  c._reset = function () {
    this.value = this._originVal;
    this.error = "";
  };

  c._clearErr = function () {
    this.error = "";
  };
};

class YoFormImpl {
  controllers;
  dict;

  setControllers(controllers) {
    this.controllers = controllers;
    const dict = {};

    for (let i of this.controllers) {
      dict[i.id] = i;
    }

    this.dict = dict;
  }

  getValue() {
    const dict = {};
    this.controllers.forEach(i => {
      dict[i.id] = i.value;
    });
    return dict;
  } //手动校验表单


  async validForm() {
    const errList = [];

    for (let i of this.controllers) {
      const controllerPass = await i._checkValid();

      if (typeof controllerPass === "string") {
        errList.push(controllerPass);
      }
    }

    return errList.length > 0 ? errList : true;
  } //设置初始值


  setOriginValue(dict, skipModifyCurrentValue = false) {
    Object.keys(dict).forEach(key => {
      const controller = this.controllers.find(i => i.id === key);
      controller && controller._setOrigin(dict[key], skipModifyCurrentValue);
    });
  }

  getOriginValue() {
    const dict = {};
    this.controllers.forEach(i => {
      dict[i.id] = i._originVal;
    });
    return formGlobalHandle.handleAfterResult(this.controllers, dict);
  } //获得更新值


  getUpdateValue() {
    const formVal = this.getValue();
    const originVal = this.getOriginValue();
    let curVal;
    let orgVal;
    const updateVal = {};
    Object.keys(formVal).forEach(key => {
      curVal = formVal[key];
      orgVal = originVal[key];
      if (curVal !== orgVal) updateVal[key] = curVal;
    });
    return formGlobalHandle.handleAfterResult(this.controllers, updateVal);
  }

  clean() {
    this.controllers.forEach(i => i._clean());
  }

  reset() {
    this.controllers.forEach(i => i._reset());
  }

}

const replaceErrText = (txt, v) => txt.replace(/%s/g, v + "");

const appendValidator = c => {
  if (c.required) {
    c.validators?.push(new FnValidator(val => val === 0 || !!val, () => (c.label || "") + setting.form.requireText));
  }

  if (c.notBlank) {
    c.validators?.push(new notBlank_validator((c.label || "") + setting.form.notBlankText));
  }

  if (c.minLength != null) {
    c.validators?.push(new minLength_validator((c.label || "") + replaceErrText(setting.form.minLengthText, c.minLength), c.minLength));
  }

  if (c.maxLength) {
    console.log("maxLength");
    c.validators?.push(new maxLength_validator((c.label || '') + replaceErrText(setting.form.maxLengthText, c.maxLength), c.maxLength));
  }

  if (c.minNum != null) {
    c.validators?.push(new maxLength_validator((c.label || '') + replaceErrText(setting.form.minNumText, c.minNum), c.minNum));
  }

  if (c.maxNum != null) {
    c.validators?.push(new maxLength_validator((c.label || '') + replaceErrText(setting.form.maxNumText, c.maxNum), c.maxNum));
  }

  if (c.notEmptyList) {
    c.validators?.push(new notEmptyList_validator((c.label || '') + setting.form.notEmptyListText, 0));
  }
};
const createForm = originControllers => {
  const yoForm = new YoFormImpl();
  const controllers = originControllers.map(c => {
    c._valueChangeSubject = new Subject();
    c.validators = c.validators || [];
    appendValidator(c);
    formGlobalHandle.handlePreCreate(c);
    assemblyController(c);
    const proxyC = new Proxy(c, {
      set(c, key, val) {
        if (key === "value") {
          formGlobalHandle.handlePreSetVal(proxyC);
          Reflect.set(c, key, val);
          c.valueChange && handleValueChange(c.valueChange, proxyC, false);

          c._valueChangeSubject.next(val);
        } else {
          Reflect.set(c, key, val);
        }

        return true;
      }

    });
    formGlobalHandle.handlePreSetVal(proxyC); // immediate valueChange.

    proxyC.valueChange && handleValueChange(proxyC.valueChange, proxyC, true);
    return proxyC;
  });
  yoForm.setControllers(controllers);
  return yoForm;
};
;// CONCATENATED MODULE: ./src/components/form/index.ts


// EXTERNAL MODULE: external "rxjs/operators"
var operators_ = __webpack_require__(597);
;// CONCATENATED MODULE: ./src/utils/media.ts


class Media {
  dict = {
    "4k": 4000,
    "2k": 2000,
    "1k": 1900,
    xxl: 1600,
    xl: 1300,
    l: 1020,
    m: 760,
    s: 480,
    i: 0
  };
  widthSub = new external_rxjs_.Subject();
  listenWidth = (0,external_rxjs_.scheduled)([(0,external_rxjs_.of)(0).pipe((0,operators_.map)(() => this.screenWidth)), this.widthSub], external_rxjs_.queueScheduler).pipe((0,operators_.mergeAll)());
  mobileRule = "l";
  screenWidth;

  ifMobile() {
    return (0,external_rxjs_.scheduled)([(0,external_rxjs_.of)(this.screenWidth).pipe((0,operators_.map)(() => this.screenWidth)), this.widthSub], external_rxjs_.queueScheduler).pipe((0,operators_.mergeAll)()).pipe((0,operators_.map)(width => {
      return width < this.dict[this.mobileRule];
    }), (0,operators_.distinctUntilChanged)());
  }

  listen() {
    (0,external_rxjs_.scheduled)([(0,external_rxjs_.of)(0).pipe((0,operators_.map)(() => window.innerWidth)), (0,external_rxjs_.fromEvent)(window, "resize").pipe((0,operators_.map)(() => window.innerWidth))], external_rxjs_.queueScheduler).pipe((0,operators_.mergeAll)()).subscribe(i => {
      this.widthSub.next(this.screenWidth = i);
    });
  }

}
const media = new Media();
;// CONCATENATED MODULE: ./src/utils/date.ts
const getPreM = (y, m) => m > 0 ? {
  y,
  m: m - 1
} : {
  y: y - 1,
  m: 11
};
const getNextM = (y, m) => m < 11 ? {
  y,
  m: m + 1
} : {
  y: y + 1,
  m: 1
};
const getDays = ({
  m,
  y,
  d
}) => {
  const days = new Date(y, m, 0).getDate();
  const firstWeekDay = new Date(y, m - 1, 1).getDay();
  const lastWeekDay = new Date(y, m - 1, days).getDay();
  const preMonDays = new Date(y, m - 1, 0).getDate(); // m > 0 ? new Date(y, m-1, 0).getDate() : new Date(y - 1, 11, 0).getDate();

  const dayList = new Array(days).fill(1).map((i, index) => ({
    d: index + 1,
    current: d != null && d === index + 1,
    shadowDay: false,
    y,
    m
  })); // , nextList: Day[];

  let preCount = 0;
  const preList = new Array(firstWeekDay === 0 ? 6 : firstWeekDay - 1).fill(1).map((i, index) => ({
    d: preMonDays - preCount++,
    shadowDay: true
  }));
  preList.reverse();
  const nextList = new Array(lastWeekDay === 0 ? 0 : 7 - lastWeekDay).fill(1).map((i, index) => ({
    d: index + 1,
    shadowDay: true
  }));
  return preList.concat(dayList).concat(nextList);
};
const getDateDay = date => {
  return {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate()
  };
};
const timeStampDay = day => {
  return new Date(day.y || 0, (day.m || 1) - 1, day.d).getTime();
};
const isGreater = (day, compareDay) => timeStampDay(day) - timeStampDay(compareDay) > 0;
;// CONCATENATED MODULE: ./src/index.ts

registryVoyoCore();















const installerAll = {
  install(app) {
    app.component("voyo-input", input_Input);
    app.component("voyo-btn", Button);
    app.component("voyo-btn-icon", ButtonIcon);
    app.directive("voyo-ripple", RippleDirective);
    app.component("voyo-ripple-radio", ripple_radio);
    app.component("voyo-checkbox", checkbox_checkbox);
    app.component("voyo-cell", cell);
    app.component("voyo-menu", Menu);
    app.component("voyo-upload", Upload); //pc组件

    app.component("yo-card", Card);
    app.component("yo-group", Group);
    app.component("yo-cell", group_Cell);
    app.component("yo-form", Form);
  }

};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});