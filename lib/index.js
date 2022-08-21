import * as __WEBPACK_EXTERNAL_MODULE__ztwx_utils_fa42b2e4__ from "@ztwx/utils";
/******/ var __webpack_modules__ = ({

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(684);
/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(547);
/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".voyo-checkbox-selected{background-image:svg-load(\"./select.svg\", fill=white)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 547:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 684:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 485:
/***/ (function(__unused_webpack_module, exports) {

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

/***/ 511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(198)/* ["default"] */ .Z)
var update = add("31de7a76", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ !function() {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ !function() {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ie": function() { return /* reexport */ GlobalHandle; },
  "pU": function() { return /* reexport */ Media; },
  "hm": function() { return /* reexport */ YoFormImpl; },
  "Np": function() { return /* reexport */ createForm; },
  "nl": function() { return /* reexport */ demonErrMessage; },
  "RY": function() { return /* reexport */ formGlobalHandle; },
  "W6": function() { return /* reexport */ getDateDay; },
  "gw": function() { return /* reexport */ getDays; },
  "$I": function() { return /* reexport */ getNextM; },
  "jF": function() { return /* reexport */ getPreM; },
  "rn": function() { return /* reexport */ handleValueChange; },
  "vy": function() { return /* binding */ installerAll; },
  "Vy": function() { return /* reexport */ isGreater; },
  "BC": function() { return /* reexport */ media; },
  "GF": function() { return /* reexport */ setting; },
  "Qh": function() { return /* reexport */ timeStampDay; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/setting.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/ioc/ioc.js

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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+tslib@1.14.1/node_modules/tslib/tslib.es6.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/ioc/inject.decorator.js

const inject_decorator_ioc = window[IOC_NAME];
const IOCAutowired = (param) => (target, key) => {
    target[key] = inject_decorator_ioc.getService(param.name);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/ioc/provider.decorator.js

const provider_decorator_ioc = window[IOC_NAME];
const IOCProvider = ({ name, cover, handler }) => (target) => {
    provider_decorator_ioc.provide(name || target.name, target, cover, handler);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/ioc/index.js




;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/core-setting.service.js



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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/registry.js



const registryVoyoCore = () => {
    ioc;
    CoreSetting;
};
const registryVoyoRouter = () => {
    RouterChangeService;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/router/index.js



;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/index.js





;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isFunction.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction_isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/config.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config_config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/hostReportError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Observer.js
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray_isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject_isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber));
//# sourceMappingURL=rxSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Subscriber.js
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction_isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable_observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/identity.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Observable.js
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/SubjectSubscription.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

//# sourceMappingURL=SubjectSubscription.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Subject.js
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));

var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/commonComponent.js

class VoyoComponent extends HTMLElement {
    constructor() {
        super(...arguments);
        this.voyoConnected = new Subject();
    }
}
class VoyoEventEmitter extends Subject {
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/BaseComponent.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/Output.decorator.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/utils/ClassManage.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/svg.js
const FRChQLY = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5ODc5Njg0MjgyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5NTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTM3LjI4MTU4MSA3OTkuMjU0NzY0IDkzNy4yODE1ODEgNzk5LjI1NDc2NCA5MzcuMjgxNTgxIDc5OS4yNTQ3NjQgOTM3LjI4MTU4MSA3OTkuMjU0NzY0ek0xMDAyLjMyMDM5NSA1MTAuOTE2MDJjMC0yNzAuOTk1MDYtMjIwLjQwOTMxNS00OTEuNDA0Mzc1LTQ5MS40MDQzNzUtNDkxLjQwNDM3NS0yNzAuOTk1MDYgMC00OTEuNDA0Mzc1IDIyMC40MDkzMTUtNDkxLjQwNDM3NSA0OTEuNDA0Mzc1IDAgMjcwLjk5NTA2IDIyMC40MDkzMTUgNDkxLjQwNDM3NSA0OTEuNDA0Mzc1IDQ5MS40MDQzNzVDNzgxLjkxMTA4IDEwMDIuMzIwMzk1IDEwMDIuMzIwMzk1IDc4MS45MTEwOCAxMDAyLjMyMDM5NSA1MTAuOTE2MDJNNTEwLjkxNjAyIDkzMS41MDAzNTNjLTIzMS45NzE3NzEgMC00MjEuMzA2OTg3LTE4OC42MTI1NjItNDIxLjMwNjk4Ny00MjEuMzA2OTg3IDAtMjMxLjk3MTc3MSAxODguNjEyNTYyLTQyMS4zMDY5ODcgNDIxLjMwNjk4Ny00MjEuMzA2OTg3IDIzMS45NzE3NzEgMCA0MjEuMzA2OTg3IDE4OC42MTI1NjIgNDIxLjMwNjk4NyA0MjEuMzA2OTg3QzkzMS41MDAzNTMgNzQyLjg4Nzc5MSA3NDIuODg3NzkxIDkzMS41MDAzNTMgNTEwLjkxNjAyIDkzMS41MDAzNTNNNzEyLjUzNjM0NCA2NjQuODQxMjE0bC0xNTEuNzU3MjM0LTE1Mi40Nzk4ODcgMTUxLjc1NzIzNC0xNTAuMzExOTI3YzEzLjczMDQxNi0xMy43MzA0MTYgMTMuNzMwNDE2LTM2LjEzMjY3NSAwLTQ5Ljg2MzA5MS0xMy43MzA0MTYtMTMuNzMwNDE2LTM2LjEzMjY3NS0xMy43MzA0MTYtNDkuODYzMDkxIDBMNTEwLjkxNjAyIDQ2Mi40OTgyMzYgMzYwLjYwNDA5MyAzMTIuMTg2MzA5Yy0xMy43MzA0MTYtMTMuNzMwNDE2LTM2LjEzMjY3NS0xMy43MzA0MTYtNDkuODYzMDkxIDAtMTMuNzMwNDE2IDEzLjczMDQxNi0xMy43MzA0MTYgMzYuMTMyNjc1IDAgNDkuODYzMDkxbDE0OS41ODkyNzMgMTUwLjMxMTkyN0wzMTAuMDE4MzQ5IDY2MS4yMjc5NDZjLTEzLjczMDQxNiAxMy43MzA0MTYtMTMuNzMwNDE2IDM2LjEzMjY3NSAwIDQ5Ljg2MzA5MSA3LjIyNjUzNSA3LjIyNjUzNSAxNS44OTgzNzcgMTAuMTE3MTQ5IDI0LjU3MDIxOSAxMC4xMTcxNDkgOC42NzE4NDIgMCAxOC4wNjYzMzctMy42MTMyNjcgMjQuNTcwMjE5LTEwLjExNzE0OWwxNTEuMDM0NTgtMTQ5LjU4OTI3MyAxNTIuNDc5ODg3IDE1Mi40Nzk4ODdjNi41MDM4ODEgNi41MDM4ODEgMTUuODk4Mzc3IDEwLjExNzE0OSAyNC41NzAyMTkgMTAuMTE3MTQ5IDguNjcxODQyIDAgMTguMDY2MzM3LTMuNjEzMjY3IDI0LjU3MDIxOS0xMC4xMTcxNDlDNzI1LjU0NDEwNyA3MDAuOTczODg4IDcyNS41NDQxMDcgNjc4LjU3MTYzIDcxMi41MzYzNDQgNjY0Ljg0MTIxNCIgcC1pZD0iMTk1NiI+PC9wYXRoPjwvc3ZnPg==";
const FRChQLYw = "data:image/svg+xml;base64,PHN2ZyB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMCIgeD0iMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij48ZyBjbGFzcz0ibGRsLXNjYWxlIiBzdHlsZT0idHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC44LCAwLjgpOyI+PGcgY2xhc3M9ImxkbC1hbmkiPjxnIGNsYXNzPSJsZGwtbGF5ZXIiPjxnIGNsYXNzPSJsZGwtYW5pIiBzdHlsZT0idHJhbnNmb3JtOiBzY2FsZSgwLjkxKTsgdHJhbnNmb3JtLW9yaWdpbjogNTBweCA1MHB4OyBhbmltYXRpb246IDEuMTExMTFzIGxpbmVhciAtMC44MzMzMzNzIGluZmluaXRlIG5vcm1hbCBmb3J3YXJkcyBydW5uaW5nIGJyZWF0aC04YjQ5OTUzOS05YTEzLTQyZWItYTdjMC04NTg1ZDg2YTYxZWM7Ij48Y2lyY2xlIGZpbGw9IiMzMzMiIHI9IjQwIiBjeT0iNTAiIGN4PSI1MCIgc3R5bGU9ImZpbGw6IHJnYigyMDEsIDAsIDQxKTsiPjwvY2lyY2xlPjwvZz48L2c+PGcgY2xhc3M9ImxkbC1sYXllciI+PGcgY2xhc3M9ImxkbC1hbmkiPjxnPjxnIGNsYXNzPSJsZGwtbGF5ZXIiPjxnIGNsYXNzPSJsZGwtYW5pIiBzdHlsZT0idHJhbnNmb3JtOiBzY2FsZSgwLjkxKTsgdHJhbnNmb3JtLW9yaWdpbjogNTBweCA1MHB4OyBhbmltYXRpb246IDEuMTExMTFzIGxpbmVhciAtMS4xMTExMXMgaW5maW5pdGUgbm9ybWFsIGZvcndhcmRzIHJ1bm5pbmcgYnJlYXRoLThiNDk5NTM5LTlhMTMtNDJlYi1hN2MwLTg1ODVkODZhNjFlYzsiPjxwYXRoIGZpbGw9IiNhYmJkODEiIGQ9Ik00Ny4zIDY2LjRMNzMuNyA0MGMxLjgtMS44IDEuOC00LjYgMC02LjQtMS44LTEuOC00LjYtMS44LTYuNCAwTDQ0LjEgNTYuOCAzMi43IDQ1LjRjLTEuOC0xLjgtNC42LTEuOC02LjQgMC0xLjggMS44LTEuOCA0LjYgMCA2LjRsMTQuNiAxNC42Yy45LjkgMiAxLjMgMy4yIDEuM3MyLjMtLjUgMy4yLTEuM3oiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNDcsIDI0OCk7Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48bWV0YWRhdGEgeG1sbnM6ZD0iaHR0cHM6Ly9sb2FkaW5nLmlvL3N0b2NrLyI+PGQ6bmFtZT5vazwvZDpuYW1lPjxkOnRhZ3M+b2ssY29uZmlybSxyZWFkeSxwb3NpdGl2ZSxjaGVjayxyaWdodCxjb3JyZWN0LGFmZmlybWF0aXZlLHN1Y2Nlc3M8L2Q6dGFncz48ZDpsaWNlbnNlPmJ5PC9kOmxpY2Vuc2U+PGQ6c2x1Zz44cDNieTI8L2Q6c2x1Zz48L21ldGFkYXRhPjwvZz48L2c+PC9zdmc+Cg==";
const FRChQLYe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg3MzE3NTUxNzgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcxMS44NDE0NzcgOTc2LjczODQ2Mmw4OC4zMDAzMDgtODYuMTcxNTY5TDQwNC4zOTMzNTQgNTEzLjk2OTIzMSA4MDAuMTQxNzg1IDEzNy4zNzE1NjkgNzExLjg0MTQ3NyA1MS4yIDIyNy43OTY2NzcgNTEzLjk2OTIzMSA3MTEuODQxNDc3IDk3Ni43Mzg0NjJ6IiBwLWlkPSIyMDcwNiI+PC9wYXRoPjwvc3ZnPg==";
const HRChQLY = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDp0cmFuc3BhcmVudDtkaXNwbGF5OmJsb2NrOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZGVmcz4KICA8ZmlsdGVyIGlkPSJsZGlvLWRxNHlxdnNjZ3N3LWZpbHRlciIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VHcmFwaGljIiBzdGREZXZpYXRpb249IjMiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICA8ZmVDb21wb25lbnRUcmFuc2ZlciByZXN1bHQ9ImN1dG9mZiI+CiAgICAgIDxmZUZ1bmNBIHR5cGU9ImxpbmVhciIgc2xvcGU9IjYwIiBpbnRlcmNlcHQ9Ii00MCI+PC9mZUZ1bmNBPgogICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDwvZmlsdGVyPgo8L2RlZnM+CjxnIGZpbHRlcj0idXJsKCNsZGlvLWRxNHlxdnNjZ3N3LWZpbHRlcikiIHRyYW5zZm9ybT0icm90YXRlKDYzLjYwMDQgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMy4wMzAzMDMwMzAzMDMwMzAzcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDk1LjMwNyA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMCIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjc2NjY2NjY2NjY2NjY2NjYgMCAwLjY2NjY2NjY2NjY2NjY2NjYgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEwNy4xMiA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjczMzMzMzMzMzMzMzMzMzMgMCAwLjYzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMC44ODkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC43IDAgMC42IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxMzYuNzU4IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIzIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNjY2NjY2NjY2NjY2NjY2NiAwIDAuNTY2NjY2NjY2NjY2NjY2NyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTU0LjYzMSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNCIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjYzMzMzMzMzMzMzMzMzMzMgMCAwLjUzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE3NC4wMiA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjYgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE5My45OTkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjYiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC41NjY2NjY2NjY2NjY2NjY3IDAgMC40NjY2NjY2NjY2NjY2NjY3IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMTMuNDI0IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNTMzMzMzMzMzMzMzMzMzMyAwIDAuNDMzMzMzMzMzMzMzMzMzMzUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIzMS4zMjMgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC41IDAgMC40IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDcuMTU4IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI5IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNDY2NjY2NjY2NjY2NjY2NyAwIDAuMzY2NjY2NjY2NjY2NjY2NjQgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI2MC44MTIgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNDMzMzMzMzMzMzMzMzMzMzUgMCAwLjMzMzMzMzMzMzMzMzMzMzMgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3Mi40MzQgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjExIiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuNCAwIDAuMyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjgyLjI4NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4zNjY2NjY2NjY2NjY2NjY3IDAgMC4yNjY2NjY2NjY2NjY2NjY2NiAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjkwLjY0IDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMyIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjMzMzMzMzMzMzMzMzMzMzM3IDAgMC4yMzMzMzMzMzMzMzMzMzMzNCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjk3Ljc1NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTQiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4zMDAwMDAwMDAwMDAwMDAwNCAwIDAuMiAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAzLjg0NSA1MCA1MCkiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PC9jaXJjbGU+CiAgPC9nPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY2FsY01vZGU9InNwbGluZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuMDEwMTAxMDEwMTAxMDEwMiIga2V5U3BsaW5lcz0iMC4yNjY2NjY2NjY2NjY2NjY2NiAwIDAuMTY2NjY2NjY2NjY2NjY2NjYgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMwOS4wODkgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjE2IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuMjMzMzMzMzMzMzMzMzMzMzQgMCAwLjEzMzMzMzMzMzMzMzMzMzMzIDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMTMuNjMyIDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxNyIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjEgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMxNy41OTEgNTAgNTApIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyMCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjE4IiBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InNjYWxlKDAuNSkiPjwvY2lyY2xlPgogIDwvZz4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJzcGxpbmUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjAxMDEwMTAxMDEwMTAxMDIiIGtleVNwbGluZXM9IjAuMTY2NjY2NjY2NjY2NjY2NjkgMCAwLjA2NjY2NjY2NjY2NjY2NjY3IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMjEuMDYxIDUwIDUwKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgMjApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxOSIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJzY2FsZSgwLjUpIj48L2NpcmNsZT4KICA8L2c+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMS4wMTAxMDEwMTAxMDEwMTAyIiBrZXlTcGxpbmVzPSIwLjEzMzMzMzMzMzMzMzMzMzMzIDAgMC4wMzMzMzMzMzMzMzMzMzMzMyAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2c+CjwvZz4KPC9zdmc+Cg==";
const CTChQLY = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIKICAgICB2aWV3Qm94PSIwIDAgMTcyIDE3MiIKICAgICBzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiAgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE0My4zMzMzMywxNDMuMzMzMzNoLTExNC42NjY2N2MtMi41NjkyNSwwIC00LjkzNDI1LC0xLjM3MjQyIC02LjIxMzUsLTMuNTk3NjdjLTEuMjc1NjcsLTIuMjI1MjUgLTEuMjY4NSwtNC45NjI5MiAwLjAyNTA4LC03LjE4MWw1Ny4zMzMzMywtMTAwLjMzMzMzYzEuMjgyODMsLTIuMjAwMTcgMy42NDA2NywtMy41NTQ2NyA2LjE4ODQyLC0zLjU1NDY3YzIuNTQ3NzUsMCA0LjkwNTU4LDEuMzU0NSA2LjE5MiwzLjU1NDY3bDU3LjMzMzMzLDEwMC4zMzMzM2MxLjI5MzU4LDIuMjE4MDggMS4zMDA3NSw0Ljk1NTc1IDAuMDI1MDgsNy4xODFjLTEuMjc1NjcsMi4yMjUyNSAtMy42NTE0MiwzLjU5NzY3IC02LjIxNzA4LDMuNTk3Njd6IiBmaWxsPSIjYzkwMDI5Ij48L3BhdGg+PHBhdGggZD0iTTc4LjgzMzMzLDEyMi4zNDIxN2MwLC0wLjk2MzkyIDAuMTY4NDIsLTEuODQ1NDIgMC41MTI0MiwtMi42NzMxN2MwLjMzNjgzLC0wLjgxNyAwLjgyMDU4LC0xLjUyNjUgMS40NDQwOCwtMi4xMjEzM2MwLjYxMjc1LC0wLjYwMiAxLjM2ODgzLC0xLjA3MTQyIDIuMjM2LC0xLjQwODI1YzAuODc0MzMsLTAuMzI5NjcgMS44NTYxNywtMC41MDUyNSAyLjk1MjY3LC0wLjUwNTI1YzEuMDk2NSwwIDIuMDg1NSwwLjE3NTU4IDIuOTY3LDAuNTA1MjVjMC44OTU4MywwLjMzNjgzIDEuNjUxOTIsMC44MDYyNSAyLjI2NDY3LDEuNDA4MjVjMC42MjcwOCwwLjU5NDgzIDEuMTEwODMsMS4zMDQzMyAxLjQ0NDA4LDIuMTIxMzNjMC4zNDQsMC44Mjc3NSAwLjUxMjQyLDEuNzA5MjUgMC41MTI0MiwyLjY3MzE3YzAsMC45Njc1IC0wLjE2ODQyLDEuODQ5IC0wLjUxMjQyLDIuNjUxNjdjLTAuMzM2ODMsMC44MDYyNSAtMC44MjA1OCwxLjUwMTQyIC0xLjQ0NDA4LDIuMTA3Yy0wLjYxMjc1LDAuNTk0ODMgLTEuMzY4ODMsMS4wNjA2NyAtMi4yNjQ2NywxLjQwNDY3Yy0wLjg4MTUsMC4zMjk2NyAtMS44NzA1LDAuNDk0NSAtMi45NjcsMC40OTQ1Yy0xLjEwMDA4LDAgLTIuMDc4MzMsLTAuMTY0ODMgLTIuOTUyNjcsLTAuNDk4MDhjLTAuODY3MTcsLTAuMzQ0IC0xLjYyMzI1LC0wLjgwOTgzIC0yLjIzNiwtMS40MDQ2N2MtMC42MjcwOCwtMC42MDU1OCAtMS4xMTA4MywtMS4zMDA3NSAtMS40NDQwOCwtMi4xMDdjLTAuMzQ0LC0wLjgwMjY3IC0wLjUxMjQyLC0xLjY4NDE3IC0wLjUxMjQyLC0yLjY0ODA4TTkxLjMwMzMzLDEwNy41aC0xMC42NTMyNWwtMS41MDg1OCwtNDNoMTMuNjY2ODN6IiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/utils/excuteAfterConnected.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber));
//# sourceMappingURL=map.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var fromEvent_toString = /*@__PURE__*/ (/* unused pure expression or super */ null && ((function () { return Object.prototype.toString; })()));
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray_isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/input/visual-input.js


class VisualInput {
    constructor() {
        this.passwordWord = "*";
        this.excuteAfterKeyboard = new ExcuteAfterConnected();
        this.insertInBody = false;
        this.onInput = new Subject();
        this.onFocus = new Subject();
        this.onBlur = new Subject();
        this.onKeypress = new Subject();
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
        this.bodyClickSub = fromEvent(document.body, "click").subscribe((e) => {
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/input/input.js

class InputInterface {
}
class Input {
    constructor() {
        this.inputEl = document.createElement("input");
        this.onInput = new Subject();
        this.onFocus = new Subject();
        this.onBlur = new Subject();
        this.onKeypress = new Subject();
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/input/tap-input.js
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

;// CONCATENATED MODULE: external "@ztwx/utils"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
var utils_namespaceObject = x({ ["fileCompress"]: () => __WEBPACK_EXTERNAL_MODULE__ztwx_utils_fa42b2e4__.fileCompress, ["isIOS"]: () => __WEBPACK_EXTERNAL_MODULE__ztwx_utils_fa42b2e4__.isIOS, ["isMobile"]: () => __WEBPACK_EXTERNAL_MODULE__ztwx_utils_fa42b2e4__.isMobile });
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/input/input.component.js











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
        }, utils_namespaceObject.isMobile ? 20 : 200);
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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/utils/DtCheck.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/AssemblyComponent.js


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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/registry/input.js


const registryInput = () => {
    assemblyComponent("voyoc-input", InputComponent);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function shared_esm_bundler_makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ shared_esm_bundler_makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ shared_esm_bundler_makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ shared_esm_bundler_makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`)));
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`)));
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`)));

function normalizeStyle(value) {
    if (shared_esm_bundler_isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = shared_esm_bundler_isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (shared_esm_bundler_isString(value)) {
        return value;
    }
    else if (shared_esm_bundler_isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || shared_esm_bundler_isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : shared_esm_bundler_hyphenate(key);
        if (shared_esm_bundler_isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (shared_esm_bundler_isString(value)) {
        res = value;
    }
    else if (shared_esm_bundler_isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (shared_esm_bundler_isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !shared_esm_bundler_isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = (/* unused pure expression or super */ null && ('html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot'));
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = (/* unused pure expression or super */ null && ('svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view'));
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const shared_esm_bundler_isHTMLTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(HTML_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const shared_esm_bundler_isSVGTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(SVG_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap(VOID_TAGS)));

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = shared_esm_bundler_looseEqual(a[i], b[i]);
    }
    return equal;
}
function shared_esm_bundler_looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = shared_esm_bundler_isArray(a);
    bValidType = shared_esm_bundler_isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = shared_esm_bundler_isObject(a);
    bValidType = shared_esm_bundler_isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !shared_esm_bundler_looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function shared_esm_bundler_looseIndexOf(arr, val) {
    return arr.findIndex(item => shared_esm_bundler_looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return shared_esm_bundler_isString(val)
        ? val
        : val == null
            ? ''
            : shared_esm_bundler_isArray(val) ||
                (shared_esm_bundler_isObject(val) &&
                    (val.toString === objectToString || !shared_esm_bundler_isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (shared_esm_bundler_isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (shared_esm_bundler_isObject(val) && !shared_esm_bundler_isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const shared_esm_bundler_EMPTY_OBJ = ( false)
    ? 0
    : {};
const shared_esm_bundler_EMPTY_ARR = ( false) ? 0 : [];
const shared_esm_bundler_NOOP = () => { };
/**
 * Always return false.
 */
const shared_esm_bundler_NO = () => false;
const onRE = /^on[^a-z]/;
const shared_esm_bundler_isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const shared_esm_bundler_extend = Object.assign;
const shared_esm_bundler_remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const shared_esm_bundler_hasOwnProperty = Object.prototype.hasOwnProperty;
const shared_esm_bundler_hasOwn = (val, key) => shared_esm_bundler_hasOwnProperty.call(val, key);
const shared_esm_bundler_isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const shared_esm_bundler_isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const shared_esm_bundler_isFunction = (val) => typeof val === 'function';
const shared_esm_bundler_isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const shared_esm_bundler_isObject = (val) => val !== null && typeof val === 'object';
const shared_esm_bundler_isPromise = (val) => {
    return shared_esm_bundler_isObject(val) && shared_esm_bundler_isFunction(val.then) && shared_esm_bundler_isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const shared_esm_bundler_toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => shared_esm_bundler_isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const shared_esm_bundler_isReservedProp = /*#__PURE__*/ shared_esm_bundler_makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const shared_esm_bundler_isBuiltInDirective = /*#__PURE__*/ (/* unused pure expression or super */ null && (shared_esm_bundler_makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo')));
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const shared_esm_bundler_camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const shared_esm_bundler_hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const shared_esm_bundler_capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const shared_esm_bundler_toHandlerKey = cacheStringFunction((str) => str ? `on${shared_esm_bundler_capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const shared_esm_bundler_hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const shared_esm_bundler_invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const shared_esm_bundler_toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const shared_esm_bundler_getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name)
        ? `__props.${name}`
        : `__props[${JSON.stringify(name)}]`;
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+reactivity@3.2.37/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js


function reactivity_esm_bundler_warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
    constructor(detached = false) {
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if ((false)) {}
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((false)) {}
}

const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit; // set was tracked
        }
    }
};
const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
            }
            else {
                deps[ptr++] = dep;
            }
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};

const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(( false) ? 0 : '');
const MAP_KEY_ITERATE_KEY = Symbol(( false) ? 0 : '');
class reactivity_esm_bundler_ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
            if (parent === this) {
                return;
            }
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
            }
            else {
                cleanupEffect(this);
            }
            return this.fn();
        }
        finally {
            if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) {
                this.stop();
            }
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) {
            this.deferStop = true;
        }
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) {
        fn = fn.effect.fn;
    }
    const _effect = new reactivity_esm_bundler_ReactiveEffect(fn);
    if (options) {
        extend(_effect, options);
        if (options.scope)
            recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
        _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function reactivity_esm_bundler_pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function reactivity_esm_bundler_resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = createDep()));
        }
        const eventInfo = ( false)
            ? 0
            : undefined;
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    }
    else {
        // Full cleanup mode.
        shouldTrack = !dep.has(activeEffect);
    }
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (false) {}
    }
}
function reactivity_esm_bundler_trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    let deps = [];
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        deps = [...depsMap.values()];
    }
    else if (key === 'length' && shared_esm_bundler_isArray(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                deps.push(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!shared_esm_bundler_isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (isIntegerKey(key)) {
                    // new index added to array -> length changes
                    deps.push(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!shared_esm_bundler_isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if (isMap(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const eventInfo = ( false)
        ? 0
        : undefined;
    if (deps.length === 1) {
        if (deps[0]) {
            if ((false)) {}
            else {
                triggerEffects(deps[0]);
            }
        }
    }
    else {
        const effects = [];
        for (const dep of deps) {
            if (dep) {
                effects.push(...dep);
            }
        }
        if ((false)) {}
        else {
            triggerEffects(createDep(effects));
        }
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = shared_esm_bundler_isArray(dep) ? dep : [...dep];
    for (const effect of effects) {
        if (effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
    for (const effect of effects) {
        if (!effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (false) {}
        if (effect.scheduler) {
            effect.scheduler();
        }
        else {
            effect.run();
        }
    }
}

const isNonTrackableKeys = /*#__PURE__*/ shared_esm_bundler_makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
/*#__PURE__*/
Object.getOwnPropertyNames(Symbol)
    // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
    // but accessing them on Symbol leads to TypeError because Symbol is a strict mode
    // function
    .filter(key => key !== 'arguments' && key !== 'caller')
    .map(key => Symbol[key])
    .filter(isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        instrumentations[key] = function (...args) {
            const arr = reactivity_esm_bundler_toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return arr[key](...args.map(reactivity_esm_bundler_toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        instrumentations[key] = function (...args) {
            reactivity_esm_bundler_pauseTracking();
            const res = reactivity_esm_bundler_toRaw(this)[key].apply(this, args);
            reactivity_esm_bundler_resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_isShallow" /* IS_SHALLOW */) {
            return shallow;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = shared_esm_bundler_isArray(target);
        if (!isReadonly && targetIsArray && shared_esm_bundler_hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (reactivity_esm_bundler_isRef(res)) {
            // ref unwrapping - skip unwrap for Array + integer key.
            return targetIsArray && isIntegerKey(key) ? res : res.value;
        }
        if (shared_esm_bundler_isObject(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (reactivity_esm_bundler_isReadonly(oldValue) && reactivity_esm_bundler_isRef(oldValue) && !reactivity_esm_bundler_isRef(value)) {
            return false;
        }
        if (!shallow && !reactivity_esm_bundler_isReadonly(value)) {
            if (!isShallow(value)) {
                value = reactivity_esm_bundler_toRaw(value);
                oldValue = reactivity_esm_bundler_toRaw(oldValue);
            }
            if (!shared_esm_bundler_isArray(target) && reactivity_esm_bundler_isRef(oldValue) && !reactivity_esm_bundler_isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = shared_esm_bundler_isArray(target) && isIntegerKey(key)
            ? Number(key) < target.length
            : shared_esm_bundler_hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === reactivity_esm_bundler_toRaw(receiver)) {
            if (!hadKey) {
                reactivity_esm_bundler_trigger(target, "add" /* ADD */, key, value);
            }
            else if (shared_esm_bundler_hasChanged(value, oldValue)) {
                reactivity_esm_bundler_trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = shared_esm_bundler_hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        reactivity_esm_bundler_trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, shared_esm_bundler_isArray(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((false)) {}
        return true;
    },
    deleteProperty(target, key) {
        if ((false)) {}
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ shared_esm_bundler_extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ shared_esm_bundler_extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = reactivity_esm_bundler_toRaw(target);
    const rawKey = reactivity_esm_bundler_toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "get" /* GET */, key);
        }
        track(rawTarget, "get" /* GET */, rawKey);
    }
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = reactivity_esm_bundler_toRaw(target);
    const rawKey = reactivity_esm_bundler_toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "has" /* HAS */, key);
        }
        track(rawTarget, "has" /* HAS */, rawKey);
    }
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(reactivity_esm_bundler_toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = reactivity_esm_bundler_toRaw(value);
    const target = reactivity_esm_bundler_toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        reactivity_esm_bundler_trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = reactivity_esm_bundler_toRaw(value);
    const target = reactivity_esm_bundler_toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = reactivity_esm_bundler_toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        reactivity_esm_bundler_trigger(target, "add" /* ADD */, key, value);
    }
    else if (shared_esm_bundler_hasChanged(value, oldValue)) {
        reactivity_esm_bundler_trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = reactivity_esm_bundler_toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = reactivity_esm_bundler_toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        reactivity_esm_bundler_trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = reactivity_esm_bundler_toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( false)
        ? 0
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        reactivity_esm_bundler_trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = reactivity_esm_bundler_toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = reactivity_esm_bundler_toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((false)) {}
        return type === "delete" /* DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get$1(this, key);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get$1(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(shared_esm_bundler_hasOwn(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = reactivity_esm_bundler_toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap(shared_esm_bundler_toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (reactivity_esm_bundler_isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!shared_esm_bundler_isObject(target)) {
        if ((false)) {}
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function reactivity_esm_bundler_isReactive(value) {
    if (reactivity_esm_bundler_isReadonly(value)) {
        return reactivity_esm_bundler_isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function reactivity_esm_bundler_isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */]);
}
function isProxy(value) {
    return reactivity_esm_bundler_isReactive(value) || reactivity_esm_bundler_isReadonly(value);
}
function reactivity_esm_bundler_toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */];
    return raw ? reactivity_esm_bundler_toRaw(raw) : observed;
}
function markRaw(value) {
    def(value, "__v_skip" /* SKIP */, true);
    return value;
}
const toReactive = (value) => shared_esm_bundler_isObject(value) ? reactive(value) : value;
const toReadonly = (value) => shared_esm_bundler_isObject(value) ? readonly(value) : value;

function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = reactivity_esm_bundler_toRaw(ref);
        if ((false)) {}
        else {
            trackEffects(ref.dep || (ref.dep = createDep()));
        }
    }
}
function triggerRefValue(ref, newVal) {
    ref = reactivity_esm_bundler_toRaw(ref);
    if (ref.dep) {
        if ((false)) {}
        else {
            triggerEffects(ref.dep);
        }
    }
}
function reactivity_esm_bundler_isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function reactivity_esm_bundler_ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (reactivity_esm_bundler_isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : reactivity_esm_bundler_toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : reactivity_esm_bundler_toRaw(newVal);
        if (shared_esm_bundler_hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, ( false) ? 0 : void 0);
}
function unref(ref) {
    return reactivity_esm_bundler_isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (reactivity_esm_bundler_isRef(oldValue) && !reactivity_esm_bundler_isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return reactivity_esm_bundler_isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.dep = undefined;
        this.__v_isRef = true;
        const { get, set } = factory(() => trackRefValue(this), () => triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (false) {}
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return reactivity_esm_bundler_isRef(val)
        ? val
        : new ObjectRefImpl(object, key, defaultValue);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR) {
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new reactivity_esm_bundler_ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = reactivity_esm_bundler_toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = shared_esm_bundler_isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ( false)
            ? 0
            : shared_esm_bundler_NOOP;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (false) {}
    return cRef;
}

var _a;
const tick = /*#__PURE__*/ (/* unused pure expression or super */ null && (Promise.resolve()));
const queue = (/* unused pure expression or super */ null && ([]));
let queued = false;
const scheduler = (fn) => {
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = () => {
    for (let i = 0; i < queue.length; i++) {
        queue[i]();
    }
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter) {
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new reactivity_esm_bundler_ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                }
                else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(() => {
                        if (this.effect.active && this._get() !== valueToCompare) {
                            triggerRefValue(this);
                        }
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep) {
                    if (e.computed instanceof DeferredComputedRefImpl) {
                        e.scheduler(true /* computedTrigger */);
                    }
                }
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return (this._value = this.effect.run());
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return reactivity_esm_bundler_toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function runtime_core_esm_bundler_warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    reactivity_esm_bundler_pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    reactivity_esm_bundler_resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if (shared_esm_bundler_isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (reactivity_esm_bundler_isRef(value)) {
        value = formatProp(key, reactivity_esm_bundler_toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (shared_esm_bundler_isFunction(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = reactivity_esm_bundler_toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (shared_esm_bundler_isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && shared_esm_bundler_isPromise(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( false) ? 0 : type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((false)) {}
    else {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const runtime_core_esm_bundler_queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function runtime_core_esm_bundler_nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = runtime_core_esm_bundler_queue.length;
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(runtime_core_esm_bundler_queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!runtime_core_esm_bundler_queue.length ||
        !runtime_core_esm_bundler_queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        if (job.id == null) {
            runtime_core_esm_bundler_queue.push(job);
        }
        else {
            runtime_core_esm_bundler_queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = runtime_core_esm_bundler_queue.indexOf(job);
    if (i > flushIndex) {
        runtime_core_esm_bundler_queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!shared_esm_bundler_isArray(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((false)) {}
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if (false) {}
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    // flush any pre cbs queued during the flush (e.g. pre watchers)
    flushPreFlushCbs();
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((false)) {}
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (false) {}
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((false)) {}
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    runtime_core_esm_bundler_queue.sort((a, b) => getId(a) - getId(b));
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = ( false)
        ? 0
        : shared_esm_bundler_NOOP;
    try {
        for (flushIndex = 0; flushIndex < runtime_core_esm_bundler_queue.length; flushIndex++) {
            const job = runtime_core_esm_bundler_queue[flushIndex];
            if (job && job.active !== false) {
                if (false) {}
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        runtime_core_esm_bundler_queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (runtime_core_esm_bundler_queue.length ||
            pendingPreFlushCbs.length ||
            pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            runtime_core_esm_bundler_warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
            return true;
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((false)) {}
const runtime_core_esm_bundler_map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = runtime_core_esm_bundler_map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = runtime_core_esm_bundler_map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    runtime_core_esm_bundler_map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (runtime_core_esm_bundler_map.has(id)) {
        return false;
    }
    runtime_core_esm_bundler_map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = runtime_core_esm_bundler_map.get(id);
    if (!record) {
        return;
    }
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [...record.instances].forEach(instance => {
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = runtime_core_esm_bundler_map.get(id);
    if (!record)
        return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [...record.instances];
    for (const instance of instances) {
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) {
                updateComponentDef(oldComp, newComp);
            }
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        }
        else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance.parent.type.__asyncLoader &&
                instance.parent.ceReload) {
                instance.parent.ceReload(newComp.styles);
            }
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(() => {
        for (const instance of instances) {
            hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
        }
    });
}
function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
        if (key !== '__file' && !(key in newComp)) {
            delete oldComp[key];
        }
    }
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
    if (devtools) {
        devtools.emit(event, ...args);
    }
    else if (!devtoolsNotInstalled) {
        buffer.push({ event, args });
    }
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
        buffer = [];
    }
    else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== 'undefined' &&
        // some envs mock window but not fully
        window.HTMLElement &&
        // also exclude jsdom
        !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
        replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(() => {
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    }
    else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit("app:init" /* APP_INIT */, app, version, {
        Fragment: runtime_core_esm_bundler_Fragment,
        Text,
        Comment,
        Static: runtime_core_esm_bundler_Static
    });
}
function devtoolsUnmountApp(app) {
    emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = 
/*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = 
/*#__PURE__*/ (/* unused pure expression or super */ null && (createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */)));
function createDevtoolsComponentHook(hook) {
    return (component) => {
        emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ (/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */)));
const devtoolsPerfEnd = /*#__PURE__*/ (/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */)));
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
        emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
        return;
    const props = instance.vnode.props || shared_esm_bundler_EMPTY_OBJ;
    if ((false)) {}
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || shared_esm_bundler_EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        if (number) {
            args = rawArgs.map(shared_esm_bundler_toNumber);
        }
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((false)) {}
    let handlerName;
    let handler = props[(handlerName = shared_esm_bundler_toHandlerKey(event))] ||
        // also try camelCase event handler (#2249)
        props[(handlerName = shared_esm_bundler_toHandlerKey(shared_esm_bundler_camelize(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handler = props[(handlerName = shared_esm_bundler_toHandlerKey(shared_esm_bundler_hyphenate(event)))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) {
        return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !shared_esm_bundler_isFunction(comp)) {
        const extendEmits = (raw) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                shared_esm_bundler_extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (shared_esm_bundler_isArray(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        shared_esm_bundler_extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !shared_esm_bundler_isOn(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (shared_esm_bundler_hasOwn(options, key[0].toLowerCase() + key.slice(1)) ||
        shared_esm_bundler_hasOwn(options, shared_esm_bundler_hyphenate(key)) ||
        shared_esm_bundler_hasOwn(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */
const withScopeId = (_id) => withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx)
        return fn;
    // already normalized
    if (fn._n) {
        return fn;
    }
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) {
            setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
            setBlockTracking(1);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentUpdated(ctx);
        }
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}

/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    if ((false)) {}
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (false) {}
            result = normalizeVNode(render.length > 1
                ? render(props, ( false)
                    ? 0
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
    }
    catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = runtime_core_esm_bundler_createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (false /* DEV_ROOT_FRAGMENT */) {}
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & (1 /* ELEMENT */ | 6 /* COMPONENT */)) {
                if (propsOptions && keys.some(isModelListener)) {
                    // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
            }
            else if (false) {}
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (false) {}
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (false) {}
        root.transition = vnode.transition;
    }
    if (false) {}
    else {
        result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || shared_esm_bundler_isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & (6 /* COMPONENT */ | 1 /* ELEMENT */) ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (false) {}
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = ((/* unused pure expression or super */ null && (SuspenseImpl)) );
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (shared_esm_bundler_isFunction(eventListener)) {
        eventListener();
    }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            triggerEvent(n2, 'onPending');
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if (false) {}
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = shared_esm_bundler_toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((false)) {}
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((false)) {}
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((false)) {}
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren
        ? normalizeSuspenseSlot(children.fallback)
        : runtime_core_esm_bundler_createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (shared_esm_bundler_isFunction(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (shared_esm_bundler_isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (false) {}
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
        s.dynamicChildren = block.filter(c => c !== s);
    }
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (shared_esm_bundler_isArray(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if ((false)) {}
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && shared_esm_bundler_isFunction(defaultValue)
                ? defaultValue.call(instance.proxy)
                : defaultValue;
        }
        else if ((false)) {}
    }
    else if ((false)) {}
}

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function runtime_core_esm_bundler_watchPostEffect(effect, options) {
    return doWatch(effect, null, (( false)
        ? 0 : { flush: 'post' }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (( false)
        ? 0 : { flush: 'sync' }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (false) {}
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared_esm_bundler_EMPTY_OBJ) {
    if (false) {}
    const warnInvalidSource = (s) => {
        runtime_core_esm_bundler_warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (reactivity_esm_bundler_isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
    }
    else if (reactivity_esm_bundler_isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (shared_esm_bundler_isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(s => reactivity_esm_bundler_isReactive(s) || isShallow(s));
        getter = () => source.map(s => {
            if (reactivity_esm_bundler_isRef(s)) {
                return s.value;
            }
            else if (reactivity_esm_bundler_isReactive(s)) {
                return traverse(s);
            }
            else if (shared_esm_bundler_isFunction(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( false) && 0;
            }
        });
    }
    else if (shared_esm_bundler_isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onCleanup]);
            };
        }
    }
    else {
        getter = shared_esm_bundler_NOOP;
        ( false) && 0;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
        cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = shared_esm_bundler_NOOP;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return shared_esm_bundler_NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!effect.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some((v, i) => shared_esm_bundler_hasChanged(v, oldValue[i]))
                    : shared_esm_bundler_hasChanged(newValue, oldValue)) ||
                (false  )) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            effect.run();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job; // the scheduler function gets called directly
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => queuePreFlushCb(job);
    }
    const effect = new reactivity_esm_bundler_ReactiveEffect(getter, scheduler);
    if ((false)) {}
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = effect.run();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    }
    else {
        effect.run();
    }
    return () => {
        effect.stop();
        if (instance && instance.scope) {
            shared_esm_bundler_remove(instance.scope.effects, effect);
        }
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = shared_esm_bundler_isString(source)
        ? source.includes('.')
            ? createPathGetter(publicThis, source)
            : () => publicThis[source]
        : source.bind(publicThis, publicThis);
    let cb;
    if (shared_esm_bundler_isFunction(value)) {
        cb = value;
    }
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
        setCurrentInstance(cur);
    }
    else {
        unsetCurrentInstance();
    }
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function traverse(value, seen) {
    if (!shared_esm_bundler_isObject(value) || value["__v_skip" /* SKIP */]) {
        return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (reactivity_esm_bundler_isRef(value)) {
        traverse(value.value, seen);
    }
    else if (shared_esm_bundler_isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (shared_esm_bundler_isSet(value) || isMap(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    runtime_core_esm_bundler_onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = runtime_core_esm_bundler_getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                // locate first non-comment child
                for (const c of children) {
                    if (c.type !== Comment) {
                        if (false) {}
                        child = c;
                        hasFound = true;
                        if (true)
                            break;
                    }
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = reactivity_esm_bundler_toRaw(props);
            const { mode } = rawProps;
            // check mode
            if (false) {}
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out' && innerChild.type !== Comment) {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook(hook, args);
        if (shared_esm_bundler_isArray(hook)) {
            if (hook.every(hook => hook.length <= 1))
                done();
        }
        else if (hook.length <= 1) {
            done();
        }
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                callAsyncHook(hook, [el, done]);
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                callAsyncHook(onLeave, [el, done]);
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null
            ? child.key
            : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === runtime_core_esm_bundler_Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

// implementation, close to no-op
function runtime_core_esm_bundler_defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(err => {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise((resolve, reject) => {
                            const userRetry = () => resolve(retry());
                            const userFail = () => reject(err);
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then((comp) => {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (false) {}
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (false) {}
                    resolvedComp = comp;
                    return comp;
                })));
    };
    return runtime_core_esm_bundler_defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved() {
            return resolvedComp;
        },
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if ((suspensible && instance.suspense) ||
                (isInSSRComponentSetup)) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? runtime_core_esm_bundler_createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = ref(false);
            const error = ref();
            const delayed = ref(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    // parent is keep-alive, force update so the loaded component's
                    // name is taken into account
                    queueJob(instance.parent.update);
                }
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return runtime_core_esm_bundler_createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return runtime_core_esm_bundler_createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children, shapeFlag }, parent }) {
    const vnode = runtime_core_esm_bundler_createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const instance = runtime_core_esm_bundler_getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) {
            return () => {
                const children = slots.default && slots.default();
                return children && children.length === 1 ? children[0] : children;
            };
        }
        const cache = new Map();
        const keys = new Set();
        let current = null;
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.__v_cache = cache;
        }
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    shared_esm_bundler_invokeArrayFns(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    shared_esm_bundler_invokeArrayFns(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        runtime_core_esm_bundler_onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((false)) {}
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode)
                ? vnode.type.__asyncResolved || {}
                : comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = (/* unused pure expression or super */ null && (KeepAliveImpl));
function matches(pattern, name) {
    if (shared_esm_bundler_isArray(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if (shared_esm_bundler_isString(pattern)) {
        return pattern.split(',').includes(name);
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            return hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    runtime_core_esm_bundler_onUnmounted(() => {
        shared_esm_bundler_remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                reactivity_esm_bundler_pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                unsetCurrentInstance();
                reactivity_esm_bundler_resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((false)) {}
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */) &&
    injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const runtime_core_esm_bundler_onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const runtime_core_esm_bundler_onUnmounted = createHook("um" /* UNMOUNTED */);
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
}

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        runtime_core_esm_bundler_warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( false) && 0;
        return vnode;
    }
    const instance = getExposeProxy(internalInstance) ||
        internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
        if (isFunction(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        if (dir.deep) {
            traverse(value);
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            resetTracking();
        }
    }
}

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if (isString(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false /* do not include inferred name to avoid breaking existing code */);
            if (selfName &&
                (selfName === name ||
                    selfName === shared_esm_bundler_camelize(name) ||
                    selfName === shared_esm_bundler_capitalize(shared_esm_bundler_camelize(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
            // fallback to implicit self-reference
            return Component;
        }
        if (false) {}
        return res;
    }
    else if ((false)) {}
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[shared_esm_bundler_camelize(name)] ||
            registry[shared_esm_bundler_capitalize(shared_esm_bundler_camelize(name))]));
}

/**
 * Actual implementation
 */
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = (cache && cache[index]);
    if (shared_esm_bundler_isArray(source) || shared_esm_bundler_isString(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
        }
    }
    else if (typeof source === 'number') {
        if (false) {}
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
        }
    }
    else if (shared_esm_bundler_isObject(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    }
    else {
        ret = [];
    }
    if (cache) {
        cache[index] = ret;
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (isArray(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE ||
        (currentRenderingInstance.parent &&
            isAsyncWrapper(currentRenderingInstance.parent) &&
            currentRenderingInstance.parent.isCE)) {
        return runtime_core_esm_bundler_createVNode('slot', name === 'default' ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (false) {}
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) {
        slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(runtime_core_esm_bundler_Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + '-s'];
    }
    if (slot && slot._c) {
        slot._d = true;
    }
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === runtime_core_esm_bundler_Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (false) {}
    for (const key in obj) {
        ret[toHandlerKey(key)] = obj[key];
    }
    return ret;
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = 
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ shared_esm_bundler_extend(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( false) ? 0 : i.props),
    $attrs: i => (( false) ? 0 : i.attrs),
    $slots: i => (( false) ? 0 : i.slots),
    $refs: i => (( false) ? 0 : i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: i => i.n || (i.n = runtime_core_esm_bundler_nextTick.bind(i.proxy)),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : shared_esm_bundler_NOOP)
});
const isReservedPrefix = (key) => key === '_' || key === '$';
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // for internal formatters to know that this is a Vue instance
        if (false) {}
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (false) {}
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 1 /* SETUP */:
                        return setupState[key];
                    case 2 /* DATA */:
                        return data[key];
                    case 4 /* CONTEXT */:
                        return ctx[key];
                    case 3 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(setupState, key)) {
                accessCache[key] = 1 /* SETUP */;
                return setupState[key];
            }
            else if (data !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                shared_esm_bundler_hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */;
                return props[key];
            }
            else if (ctx !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
                accessCache[key] = 0 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
                ( false) && 0;
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            shared_esm_bundler_hasOwn(globalProperties, key))) {
            {
                return globalProperties[key];
            }
        }
        else if (false) {}
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
        }
        else if (data !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(data, key)) {
            data[key] = value;
            return true;
        }
        else if (shared_esm_bundler_hasOwn(instance.props, key)) {
            ( false) &&
                0;
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( false) &&
                0;
            return false;
        }
        else {
            if (false) {}
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (!!accessCache[key] ||
            (data !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(data, key)) ||
            (setupState !== shared_esm_bundler_EMPTY_OBJ && shared_esm_bundler_hasOwn(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && shared_esm_bundler_hasOwn(normalizedProps, key)) ||
            shared_esm_bundler_hasOwn(ctx, key) ||
            shared_esm_bundler_hasOwn(publicPropertiesMap, key) ||
            shared_esm_bundler_hasOwn(appContext.config.globalProperties, key));
    },
    defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            // invalidate key cache of a getter based property #5417
            target._.accessCache[key] = 0;
        }
        else if (shared_esm_bundler_hasOwn(descriptor, 'value')) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ shared_esm_bundler_extend({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !isGloballyWhitelisted(key);
        if (false) {}
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: NOOP
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                runtime_core_esm_bundler_warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                    `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => setupState[key],
                set: NOOP
            });
        }
    });
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            runtime_core_esm_bundler_warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) {
        callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */);
    }
    const { 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
    // public API
    expose, inheritAttrs, 
    // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = ( false) ? 0 : null;
    if ((false)) {}
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (shared_esm_bundler_isFunction(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define
                // methods to the proxy target, and those are read-only but
                // reconfigurable, so it needs to be redefined here
                if ((false)) {}
                else {
                    ctx[key] = methodHandler.bind(publicThis);
                }
                if ((false)) {}
            }
            else if ((false)) {}
        }
    }
    if (dataOptions) {
        if (false) {}
        const data = dataOptions.call(publicThis, publicThis);
        if (false) {}
        if (!shared_esm_bundler_isObject(data)) {
            ( false) && 0;
        }
        else {
            instance.data = reactive(data);
            if ((false)) {}
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = shared_esm_bundler_isFunction(opt)
                ? opt.bind(publicThis, publicThis)
                : shared_esm_bundler_isFunction(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : shared_esm_bundler_NOOP;
            if (false) {}
            const set = !shared_esm_bundler_isFunction(opt) && shared_esm_bundler_isFunction(opt.set)
                ? opt.set.bind(publicThis)
                : ( false)
                    ? 0
                    : shared_esm_bundler_NOOP;
            const c = runtime_core_esm_bundler_computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((false)) {}
        }
    }
    if (watchOptions) {
        for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
        }
    }
    if (provideOptions) {
        const provides = shared_esm_bundler_isFunction(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        Reflect.ownKeys(provides).forEach(key => {
            provide(key, provides[key]);
        });
    }
    if (created) {
        callHook(created, instance, "c" /* CREATED */);
    }
    function registerLifecycleHook(register, hook) {
        if (shared_esm_bundler_isArray(hook)) {
            hook.forEach(_hook => register(_hook.bind(publicThis)));
        }
        else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(runtime_core_esm_bundler_onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(runtime_core_esm_bundler_onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (shared_esm_bundler_isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                    get: () => publicThis[key],
                    set: val => (publicThis[key] = val)
                });
            });
        }
        else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === shared_esm_bundler_NOOP) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    // asset options.
    if (components)
        instance.components = components;
    if (directives)
        instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = shared_esm_bundler_NOOP, unwrapRef = false) {
    if (shared_esm_bundler_isArray(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (shared_esm_bundler_isObject(opt)) {
            if ('default' in opt) {
                injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
            }
            else {
                injected = inject(opt.from || key);
            }
        }
        else {
            injected = inject(opt);
        }
        if (reactivity_esm_bundler_isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    get: () => injected.value,
                    set: v => (injected.value = v)
                });
            }
            else {
                if ((false)) {}
                ctx[key] = injected;
            }
        }
        else {
            ctx[key] = injected;
        }
        if ((false)) {}
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(shared_esm_bundler_isArray(hook)
        ? hook.map(h => h.bind(instance.proxy))
        : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (shared_esm_bundler_isString(raw)) {
        const handler = ctx[raw];
        if (shared_esm_bundler_isFunction(handler)) {
            watch(getter, handler);
        }
        else if ((false)) {}
    }
    else if (shared_esm_bundler_isFunction(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (shared_esm_bundler_isObject(raw)) {
        if (shared_esm_bundler_isArray(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = shared_esm_bundler_isFunction(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (shared_esm_bundler_isFunction(handler)) {
                watch(getter, handler, raw);
            }
            else if ((false)) {}
        }
    }
    else if ((false)) {}
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
        resolved = cached;
    }
    else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
            resolved = base;
        }
    }
    else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
        if (asMixin && key === 'expose') {
            ( false) &&
                0;
        }
        else {
            const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return (shared_esm_bundler_extend)(shared_esm_bundler_isFunction(to) ? to.call(this, this) : to, shared_esm_bundler_isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (shared_esm_bundler_isArray(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
        }
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
    return to ? shared_esm_bundler_extend(shared_esm_bundler_extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to)
        return from;
    if (!from)
        return to;
    const merged = shared_esm_bundler_extend(Object.create(null), to);
    for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
            props[key] = undefined;
        }
    }
    // validation
    if ((false)) {}
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
     true &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) {
                    continue;
                }
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    }
                    else {
                        const camelizedKey = camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                    }
                }
                else {
                    if (value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    }
    else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
        }
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!hasOwn(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps ||
                    (!hasOwn(rawProps, key) &&
                        (!false ))) {
                    delete attrs[key];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) {
        trigger(instance, "set" /* SET */, '$attrs');
    }
    if ((false)) {}
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
        for (let key in rawProps) {
            // key, ref are reserved and never passed down
            if (shared_esm_bundler_isReservedProp(key)) {
                continue;
            }
            const value = rawProps[key];
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && shared_esm_bundler_hasOwn(options, (camelKey = shared_esm_bundler_camelize(key)))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props[camelKey] = value;
                }
                else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = reactivity_esm_bundler_toRaw(props);
        const castValues = rawCastValues || shared_esm_bundler_EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !shared_esm_bundler_hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = shared_esm_bundler_hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && shared_esm_bundler_isFunction(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) {
                    value = propsDefaults[key];
                }
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (isAbsent && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === shared_esm_bundler_hyphenate(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !shared_esm_bundler_isFunction(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            shared_esm_bundler_extend(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, shared_esm_bundler_EMPTY_ARR);
        return shared_esm_bundler_EMPTY_ARR;
    }
    if (shared_esm_bundler_isArray(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (false) {}
            const normalizedKey = shared_esm_bundler_camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = shared_esm_bundler_EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        if (false) {}
        for (const key in raw) {
            const normalizedKey = shared_esm_bundler_camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    shared_esm_bundler_isArray(opt) || shared_esm_bundler_isFunction(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || shared_esm_bundler_hasOwn(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((false)) {}
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (shared_esm_bundler_isArray(expectedTypes)) {
        return expectedTypes.findIndex(t => isSameType(t, type));
    }
    else if (shared_esm_bundler_isFunction(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        runtime_core_esm_bundler_warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = isArray(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            runtime_core_esm_bundler_warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        runtime_core_esm_bundler_warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('String,Number,Boolean,Function,Symbol,BigInt')));
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else if (expectedType === 'null') {
        valid = value === null;
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => shared_esm_bundler_isArray(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
        // already normalized - #5353
        return rawSlot;
    }
    const normalized = withCtx((...args) => {
        if (false) {}
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (shared_esm_bundler_isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if (false) {}
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (false) {}
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = reactivity_esm_bundler_toRaw(children);
            // make compiler marker non-enumerable
            def(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (false) {}
            else if (optimized && type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */) {
                    delete slots._;
                }
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: shared_esm_bundler_NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!isFunction(rootComponent)) {
            rootComponent = Object.assign({}, rootComponent);
        }
        if (rootProps != null && !isObject(rootProps)) {
            ( false) && 0;
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((false)) {}
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( false) && 0;
                }
                else if (plugin && isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((false)) {}
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                    else if ((false)) {}
                }
                else if ((false)) {}
                return app;
            },
            component(name, component) {
                if ((false)) {}
                if (!component) {
                    return context.components[name];
                }
                if (false) {}
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((false)) {}
                if (!directive) {
                    return context.directives[name];
                }
                if (false) {}
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    // #5571
                    if (false) {}
                    const vnode = runtime_core_esm_bundler_createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((false)) {}
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer, isSVG);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = vnode.component;
                        devtoolsInitApp(app, version);
                    }
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
                else if ((false)) {}
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = null;
                        devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
                else if ((false)) {}
            },
            provide(key, value) {
                if (false) {}
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        // when mounting async components, nothing needs to be done,
        // because the template ref is forwarded to inner component
        return;
    }
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */
        ? getExposeProxy(vnode.component) || vnode.component.proxy
        : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (false) {}
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (isString(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (isFunction(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else {
        const _isString = isString(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
            const doSet = () => {
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) {
                        isArray(existing) && remove(existing, refValue);
                    }
                    else {
                        if (!isArray(existing)) {
                            if (_isString) {
                                refs[ref] = [refValue];
                                if (hasOwn(setupState, ref)) {
                                    setupState[ref] = refs[ref];
                                }
                            }
                            else {
                                ref.value = [refValue];
                                if (rawRef.k)
                                    refs[rawRef.k] = ref.value;
                            }
                        }
                        else if (!existing.includes(refValue)) {
                            existing.push(refValue);
                        }
                    }
                }
                else if (_isString) {
                    refs[ref] = value;
                    if (hasOwn(setupState, ref)) {
                        setupState[ref] = value;
                    }
                }
                else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k)
                        refs[rawRef.k] = value;
                }
                else if ((false)) {}
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            }
            else {
                doSet();
            }
        }
        else if ((false)) {}
    }
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (!container.hasChildNodes()) {
            ( false) &&
                0;
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2 /* BAIL */) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    // #5728 empty text node inside a slot can cause hydration failure
                    // because the server rendered HTML won't contain a text node
                    if (vnode.children === '') {
                        insert((vnode.el = createText('')), parentNode(node), node);
                        nextNode = node;
                    }
                    else {
                        nextNode = onMismatch();
                    }
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( false) &&
                            0;
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case runtime_core_esm_bundler_Static:
                if (domType !== 1 /* ELEMENT */ && domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children +=
                                nextNode.nodeType === 1 /* ELEMENT */
                                    ? nextNode.outerHTML
                                    : nextNode.data;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case runtime_core_esm_bundler_Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type.toLowerCase() !==
                            node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                    // #4293 teleport as component root
                    if (nextNode &&
                        isComment(nextNode) &&
                        nextNode.data === 'teleport end') {
                        nextNode = nextSibling(nextNode);
                    }
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = runtime_core_esm_bundler_createVNode(runtime_core_esm_bundler_Fragment);
                            subTree.anchor = nextNode
                                ? nextNode.previousSibling
                                : container.lastChild;
                        }
                        else {
                            subTree =
                                node.nodeType === 3 ? createTextVNode('') : runtime_core_esm_bundler_createVNode('div');
                        }
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                }
                else if ((false)) {}
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = (type === 'input' && dirs) || type === 'option';
        // skip props & children if this is hoisted static nodes
        // #5405 in dev, always hydrate children for HMR
        if (( false) || forcePatchValue || patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (forcePatchValue ||
                    !optimized ||
                    patchFlag & (16 /* FULL_PROPS */ | 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if ((forcePatchValue && key.endsWith('value')) ||
                            (isOn(key) && !isReservedProp(key))) {
                            patchProp(el, key, null, props[key], false, undefined, parentComponent);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (false) {}
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( false) &&
                        0;
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            else if (vnode.type === Text && !vnode.children) {
                continue;
            }
            else {
                hasMismatch = true;
                if (false) {}
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
        hasMismatch = true;
        ( false) &&
            0;
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

/* eslint-disable no-restricted-globals */
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        ( false) && 0;
        getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        ( false) && 0;
        getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {}
}

const queuePostRenderEffect = queueEffectWithSuspense
    ;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function runtime_core_esm_bundler_createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function runtime_core_esm_bundler_createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized =  false ? 0 : !!n2.dynamicChildren) => {
        if (n1 === n2) {
            return;
        }
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case runtime_core_esm_bundler_Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((false)) {}
                break;
            case runtime_core_esm_bundler_Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if ((false)) {}
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
        if ( true &&
            vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            // only do this in production since cloned trees cannot be HMR updated.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (key !== 'value' && !isReservedProp(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */
                if ('value' in props) {
                    hostPatchProp(el, 'value', null, props.value);
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
            }
        }
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (false /* DEV_ROOT_FRAGMENT */) {}
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        parentComponent && toggleRecurse(parentComponent, true);
        if (false) {}
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (false) {}
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el &&
                // - In the case of a Fragment, we need to provide the actual parent
                // of the Fragment itself so it can move its children.
                (oldVNode.type === runtime_core_esm_bundler_Fragment ||
                    // - In the case of different nodes, there is going to be a replacement
                    // which also requires the correct parent container
                    !isSameVNodeType(oldVNode, newVNode) ||
                    // - In the case of a component, it could contain anything.
                    oldVNode.shapeFlag & (6 /* COMPONENT */ | 64 /* TELEPORT */))
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (isReservedProp(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!isReservedProp(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if ('value' in newProps) {
                hostPatchProp(el, 'value', oldProps.value, newProps.value);
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (false) {}
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (false) {}
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (false) {}
        if ((false)) {}
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        {
            if ((false)) {}
            setupComponent(instance);
            if ((false)) {}
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = runtime_core_esm_bundler_createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((false)) {}
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((false)) {}
                updateComponentPreRender(instance, n2, optimized);
                if ((false)) {}
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) {
                    invokeArrayFns(bm);
                }
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = () => {
                        if ((false)) {}
                        instance.subTree = renderComponentRoot(instance);
                        if ((false)) {}
                        if ((false)) {}
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        if ((false)) {}
                    };
                    if (isAsyncWrapperVNode) {
                        initialVNode.type.__asyncLoader().then(
                        // note: we are moving the render call into an async callback,
                        // which means it won't track dependencies - but it's ok because
                        // a server-rendered async wrapper is already in resolved state
                        // and it will never need to change.
                        () => !instance.isUnmounted && hydrateSubTree());
                    }
                    else {
                        hydrateSubTree();
                    }
                }
                else {
                    if ((false)) {}
                    const subTree = (instance.subTree = renderComponentRoot(instance));
                    if ((false)) {}
                    if ((false)) {}
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((false)) {}
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ||
                    (parent &&
                        isAsyncWrapper(parent.vnode) &&
                        parent.vnode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */)) {
                    instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentAdded(instance);
                }
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((false)) {}
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    invokeArrayFns(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                toggleRecurse(instance, true);
                // render
                if ((false)) {}
                const nextTree = renderComponentRoot(instance);
                if ((false)) {}
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((false)) {}
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((false)) {}
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentUpdated(instance);
                }
                if ((false)) {}
            }
        };
        // create reactive effect for rendering
        const effect = (instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope // track it in component's effect scope
        ));
        const update = (instance.update = () => effect.run());
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        if ((false)) {}
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (false) {}
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === runtime_core_esm_bundler_Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === runtime_core_esm_bundler_Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (shapeFlag & 64 /* TELEPORT */) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            }
            else if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== runtime_core_esm_bundler_Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === runtime_core_esm_bundler_Fragment &&
                patchFlag &
                    (128 /* KEYED_FRAGMENT */ | 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
            shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === runtime_core_esm_bundler_Fragment) {
            if (false) {}
            else {
                removeFragment(el, anchor);
            }
            return;
        }
        if (type === runtime_core_esm_bundler_Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (false) {}
        const { bum, scope, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            invokeArrayFns(bum);
        }
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container, isSVG) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (shared_esm_bundler_isArray(ch1) && shared_esm_bundler_isArray(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (false) {}
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (shared_esm_bundler_isString(targetSelector)) {
        if (!select) {
            ( false) &&
                0;
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( false) &&
                    0;
            }
            return target;
        }
    }
    else {
        if (false) {}
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        // #3302
        // HMR updated, force full diff
        if (false) {}
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( false)
                ? 0
                : createText(''));
            const mainAnchor = (n2.anchor = ( false)
                ? 0
                : createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (false) {}
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((false)) {}
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) {
            hostRemove(targetAnchor);
        }
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                }
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                // lookahead until we find the target anchor
                // we cannot rely on return value of hydrateChildren() because there
                // could be nested teleports
                let targetAnchor = targetNode;
                while (targetAnchor) {
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor &&
                        targetAnchor.nodeType === 8 &&
                        targetAnchor.data === 'teleport anchor') {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa =
                            vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = (/* unused pure expression or super */ null && (TeleportImpl));

const runtime_core_esm_bundler_Fragment = Symbol(( false) ? 0 : undefined);
const Text = Symbol(( false) ? 0 : undefined);
const Comment = Symbol(( false) ? 0 : undefined);
const runtime_core_esm_bundler_Static = Symbol(( false) ? 0 : undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || shared_esm_bundler_EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(runtime_core_esm_bundler_createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (false) {}
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
    return (ref != null
        ? shared_esm_bundler_isString(ref) || reactivity_esm_bundler_isRef(ref) || shared_esm_bundler_isFunction(ref)
            ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for }
            : ref
        : null);
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === runtime_core_esm_bundler_Fragment ? 0 : 1 /* ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */) {
            type.normalize(vnode);
        }
    }
    else if (children) {
        // compiled element vnode - if children is passed, only possible types are
        // string or Array.
        vnode.shapeFlag |= shared_esm_bundler_isString(children)
            ? 8 /* TEXT_CHILDREN */
            : 16 /* ARRAY_CHILDREN */;
    }
    // validate key
    if (false) {}
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
const runtime_core_esm_bundler_createVNode = (( false) ? 0 : _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (false) {}
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* COMPONENT */) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
            }
            else {
                currentBlock.push(cloned);
            }
        }
        cloned.patchFlag |= -2 /* BAIL */;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !shared_esm_bundler_isString(klass)) {
            props.class = normalizeClass(klass);
        }
        if (shared_esm_bundler_isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !shared_esm_bundler_isArray(style)) {
                style = shared_esm_bundler_extend({}, style);
            }
            props.style = normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = shared_esm_bundler_isString(type)
        ? 1 /* ELEMENT */
        : isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : shared_esm_bundler_isObject(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : shared_esm_bundler_isFunction(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (false) {}
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props)
        return null;
    return isProxy(props) || InternalObjectKey in props
        ? shared_esm_bundler_extend({}, props)
        : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? shared_esm_bundler_isArray(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children:  false
            ? 0
            : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== runtime_core_esm_bundler_Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
        cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return runtime_core_esm_bundler_createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = runtime_core_esm_bundler_createVNode(runtime_core_esm_bundler_Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : runtime_core_esm_bundler_createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return runtime_core_esm_bundler_createVNode(Comment);
    }
    else if (shared_esm_bundler_isArray(child)) {
        // fragment
        return runtime_core_esm_bundler_createVNode(runtime_core_esm_bundler_Fragment, null, 
        // #3666, avoid reference pollution when reusing vnode
        child.slice());
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return cloneIfMounted(child);
    }
    else {
        // strings and numbers
        return runtime_core_esm_bundler_createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (shared_esm_bundler_isArray(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & (1 /* ELEMENT */ | 64 /* TELEPORT */)) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */) {
                    children._ = 1 /* STABLE */;
                }
                else {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
            }
        }
    }
    else if (shared_esm_bundler_isFunction(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = normalizeClass([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
            }
            else if (shared_esm_bundler_isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming &&
                    existing !== incoming &&
                    !(shared_esm_bundler_isArray(existing) && existing.includes(incoming))) {
                    ret[key] = existing
                        ? [].concat(existing, incoming)
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new EffectScope(true /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: shared_esm_bundler_EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: shared_esm_bundler_EMPTY_OBJ,
        data: shared_esm_bundler_EMPTY_OBJ,
        props: shared_esm_bundler_EMPTY_OBJ,
        attrs: shared_esm_bundler_EMPTY_OBJ,
        slots: shared_esm_bundler_EMPTY_OBJ,
        refs: shared_esm_bundler_EMPTY_OBJ,
        setupState: shared_esm_bundler_EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    if ((false)) {}
    else {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}
let currentInstance = null;
const runtime_core_esm_bundler_getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('slot,component')));
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        runtime_core_esm_bundler_warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if ((false)) {}
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if ((false)) {}
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        reactivity_esm_bundler_pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( false) ? 0 : instance.props, setupContext]);
        reactivity_esm_bundler_resetTracking();
        unsetCurrentInstance();
        if (shared_esm_bundler_isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult
                    .then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult, isSSR);
                })
                    .catch(e => {
                    handleError(e, instance, 0 /* SETUP_FUNCTION */);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
                if (false) {}
            }
        }
        else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    }
    else {
        finishComponentSetup(instance, isSSR);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (shared_esm_bundler_isFunction(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) {
            // when the function's name is `ssrRender` (compiled by SFC inline mode),
            // set it as ssrRender instead.
            instance.ssrRender = setupResult;
        }
        else {
            instance.render = setupResult;
        }
    }
    else if (shared_esm_bundler_isObject(setupResult)) {
        if (false) {}
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        if ((false)) {}
    }
    else if (false) {}
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = i => {
        if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    };
}
// dev only
const runtime_core_esm_bundler_isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
                if ((false)) {}
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = shared_esm_bundler_extend(shared_esm_bundler_extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                if ((false)) {}
            }
        }
        instance.render = (Component.render || shared_esm_bundler_NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) {
            installWithProxy(instance);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && !(false )) {
        setCurrentInstance(instance);
        reactivity_esm_bundler_pauseTracking();
        applyOptions(instance);
        reactivity_esm_bundler_resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (false) {}
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, ( false)
        ? 0
        : {
            get(target, key) {
                track(instance, "get" /* GET */, '$attrs');
                return target[key];
            }
        });
}
function createSetupContext(instance) {
    const expose = exposed => {
        if (false) {}
        instance.exposed = exposed || {};
    };
    let attrs;
    if ((false)) {}
    else {
        return {
            get attrs() {
                return attrs || (attrs = createAttrsProxy(instance));
            },
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
function getExposeProxy(instance) {
    if (instance.exposed) {
        return (instance.exposeProxy ||
            (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    else if (key in publicPropertiesMap) {
                        return publicPropertiesMap[key](instance);
                    }
                }
            })));
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component, includeInferred = true) {
    return shared_esm_bundler_isFunction(Component)
        ? Component.displayName || Component.name
        : Component.name || (includeInferred && Component.__name);
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return shared_esm_bundler_isFunction(value) && '__vccOpts' in value;
}

const runtime_core_esm_bundler_computed = ((getterOrOptions, debugOptions) => {
    // @ts-ignore
    return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
});

// dev only
const warnRuntimeUsage = (method) => runtime_core_esm_bundler_warn(`${method}() is a compiler-hint helper that is only usable inside ` +
    `<script setup> of a single file component. Its arguments should be ` +
    `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    if ((false)) {}
    return null;
}
// implementation
function defineEmits() {
    if ((false)) {}
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
function defineExpose(exposed) {
    if ((false)) {}
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */
function withDefaults(props, defaults) {
    if ((false)) {}
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = runtime_core_esm_bundler_getCurrentInstance();
    if (false) {}
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    const props = isArray(raw)
        ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
        : raw;
    for (const key in defaults) {
        const opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if ((false)) {}
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
        if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
                enumerable: true,
                get: () => props[key]
            });
        }
    }
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */
function withAsyncContext(getAwaitable) {
    const ctx = runtime_core_esm_bundler_getCurrentInstance();
    if (false) {}
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
        awaitable = awaitable.catch(e => {
            setCurrentInstance(ctx);
            throw e;
        });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (shared_esm_bundler_isObject(propsOrChildren) && !shared_esm_bundler_isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return runtime_core_esm_bundler_createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return runtime_core_esm_bundler_createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return runtime_core_esm_bundler_createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return runtime_core_esm_bundler_createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( false) ? 0 : ``);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            runtime_core_esm_bundler_warn(`Server rendering context not provided. Make sure to only call ` +
                `useSSRContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function runtime_core_esm_bundler_isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */]);
}

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if (true) {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!isObject(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if (isRef(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if (isReactive(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, runtime_core_esm_bundler_isShallow(obj) ? 'ShallowReactive' : 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${isReadonly(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if (isReadonly(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, runtime_core_esm_bundler_isShallow(obj) ? 'ShallowReadonly' : 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
        }
        if (instance.setupState !== EMPTY_OBJ) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== EMPTY_OBJ) {
            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = extend({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if (isObject(v)) {
            return ['object', { object: asRaw ? toRaw(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (isFunction(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((isArray(opts) && opts.includes(key)) ||
            (isObject(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (runtime_core_esm_bundler_isShallow(v)) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
        return cached;
    }
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return (cache[index] = ret);
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if (hasChanged(prev[i], memo[i])) {
            return false;
        }
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(cached);
    }
    return true;
}

// Core API ------------------------------------------------------------------
const version = "3.2.37";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */
const ssrUtils = ((/* unused pure expression or super */ null && (_ssrUtils)) );
/**
 * @internal only exposed in compat builds
 */
const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */
const compatUtils = (null);



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
    return h("voyoc-input", {
      value: this.$attrs.modelValue,
      onValuechange: e => {
        this.$emit("update:modelValue", e.detail);
      },
      ...filterObject(this.$attrs, ["modelValue", "onUpdate:modelValue"])
    }, [prefix ? h("div", {
      slot: "prefix"
    }, prefix) : null, suffix ? h("div", {
      slot: "suffix"
    }, suffix) : null]);
  },

  created() {}

};
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/utils/ripple.js

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
    if (utils_namespaceObject.isMobile) {
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/button-icon/button-icon.component.js









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
            utils_namespaceObject.isIOS ?
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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/registry/button-icon.js


const registryButtonIcon = () => {
    assemblyComponent("voyoc-btn-icon", ButtonIconComponent);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/button/button.component.js









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
            utils_namespaceObject.isIOS ? this.voyoTap.next(e) : setTimeout(() => this.voyoTap.next(e), this.coreSetting.tapTime);
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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/registry/button.js


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
    return h("voyoc-btn", {
      disabled: this.$props.loading ? 1 : 0,
      ...filterObject(this.$attrs, ["on:voyotap"]),
      onVoyotap: e => {
        this.$emit("tap", e);
      }
    }, [this.$slots.default && this.$slots.default(), this.$props.loading ? runtime_core_esm_bundler_createVNode("i", {
      "class": "za za-loading voyo-an-loading ml-2"
    }, null) : null]);
  }

};
const ButtonIcon = {
  render() {
    return h("voyoc-btn-icon", { ...filterObject(this.$attrs, ["on:voyotap"]),
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/ripple-radio/ripple-radio.vue?vue&type=template&id=0724764e&ts=true


const _hoisted_1 = /*#__PURE__*/createBaseVNode("div", {
  class: "voyo-ripple-radio-bg"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onTap: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.tap && _ctx.tap(...args)),
    onTouchstart: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    onTouchend: _cache[2] || (_cache[2] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    onTouchcancel: _cache[3] || (_cache[3] = //@ts-ignore
    (...args) => _ctx.touchend && _ctx.touchend(...args)),
    class: normalizeClass(["", [_ctx.active ? '__active' : '', _ctx.active && !_ctx.activeLeaving ? '__enter' : '', _ctx.activeLeaving ? '__leave' : '', 'voyo-ripple-radio', '__color-' + _ctx.color]])
  }, [_hoisted_1, (openBlock(true), createElementBlock(runtime_core_esm_bundler_Fragment, null, renderList(_ctx.list, i => {
    return openBlock(), createElementBlock("div", {
      class: "voyo-ripple-radio-bubbling",
      key: i.index
    });
  }), 128
  /* KEYED_FRAGMENT */
  )), renderSlot(_ctx.$slots, "default")], 34
  /* CLASS, HYDRATE_EVENTS */
  );
}
;// CONCATENATED MODULE: ./src/components/ripple-radio/ripple-radio.vue?vue&type=template&id=0724764e&ts=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-class-component@8.0.0-rc.1_vue@3.2.37/node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function vue_class_component_esm_bundler_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function vue_class_component_esm_bundler_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      vue_class_component_esm_bundler_ownKeys(Object(source), true).forEach(function (key) {
        vue_class_component_esm_bundler_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      vue_class_component_esm_bundler_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function defineGetter(obj, key, getter) {
  Object.defineProperty(obj, key, {
    get: getter,
    enumerable: false,
    configurable: true
  });
}

function defineProxy(proxy, key, target) {
  Object.defineProperty(proxy, key, {
    get: function get() {
      return target[key].value;
    },
    set: function set(value) {
      target[key].value = value;
    },
    enumerable: true,
    configurable: true
  });
}

function getSuper(Ctor) {
  var superProto = Object.getPrototypeOf(Ctor.prototype);

  if (!superProto) {
    return undefined;
  }

  return superProto.constructor;
}

function getOwn(value, key) {
  return value.hasOwnProperty(key) ? value[key] : undefined;
}

var VueImpl = /*#__PURE__*/function () {
  function VueImpl(props, ctx) {
    var _this = this;

    _classCallCheck(this, VueImpl);

    defineGetter(this, '$props', function () {
      return props;
    });
    defineGetter(this, '$attrs', function () {
      return ctx.attrs;
    });
    defineGetter(this, '$slots', function () {
      return ctx.slots;
    });
    defineGetter(this, '$emit', function () {
      return ctx.emit;
    });
    Object.keys(props).forEach(function (key) {
      Object.defineProperty(_this, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: props[key]
      });
    });
  }

  _createClass(VueImpl, null, [{
    key: "registerHooks",
    value: function registerHooks(keys) {
      var _this$__h;

      (_this$__h = this.__h).push.apply(_this$__h, _toConsumableArray(keys));
    }
  }, {
    key: "with",
    value: function _with(Props) {
      var propsMeta = new Props();
      var props = {};
      Object.keys(propsMeta).forEach(function (key) {
        var meta = propsMeta[key];
        props[key] = meta !== null && meta !== void 0 ? meta : null;
      });

      var PropsMixin = /*#__PURE__*/function (_this2) {
        _inherits(PropsMixin, _this2);

        var _super = _createSuper(PropsMixin);

        function PropsMixin() {
          _classCallCheck(this, PropsMixin);

          return _super.apply(this, arguments);
        }

        return PropsMixin;
      }(this);

      PropsMixin.__b = {
        props: props
      };
      return PropsMixin;
    }
  }, {
    key: "__vccOpts",
    get: function get() {
      // Early return if `this` is base class as it does not have any options
      if (this === Vue) {
        return {};
      }

      var Ctor = this;
      var cache = getOwn(Ctor, '__c');

      if (cache) {
        return cache;
      } // If the options are provided via decorator use it as a base


      var options = _objectSpread2({}, getOwn(Ctor, '__o'));

      Ctor.__c = options; // Handle super class options

      var Super = getSuper(Ctor);

      if (Super) {
        options["extends"] = Super.__vccOpts;
      } // Inject base options as a mixin


      var base = getOwn(Ctor, '__b');

      if (base) {
        options.mixins = options.mixins || [];
        options.mixins.unshift(base);
      }

      options.methods = _objectSpread2({}, options.methods);
      options.computed = _objectSpread2({}, options.computed);
      var proto = Ctor.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
          return;
        } // hooks


        if (Ctor.__h.indexOf(key) > -1) {
          options[key] = proto[key];
          return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(proto, key); // methods

        if (typeof descriptor.value === 'function') {
          options.methods[key] = descriptor.value;
          return;
        } // computed properties


        if (descriptor.get || descriptor.set) {
          options.computed[key] = {
            get: descriptor.get,
            set: descriptor.set
          };
          return;
        }
      });

      options.setup = function (props, ctx) {
        var _promise;

        var data = new Ctor(props, ctx);
        var dataKeys = Object.keys(data);
        var plainData = {};
        var promise = null; // Initialize reactive data and convert constructor `this` to a proxy

        dataKeys.forEach(function (key) {
          // Skip if the value is undefined not to make it reactive.
          // If the value has `__s`, it's a value from `setup` helper, proceed it later.
          if (data[key] === undefined || data[key] && data[key].__s) {
            return;
          }

          plainData[key] = reactivity_esm_bundler_ref(data[key]);
          defineProxy(data, key, plainData);
        }); // Invoke composition functions

        dataKeys.forEach(function (key) {
          if (data[key] && data[key].__s) {
            var setupState = data[key].__s();

            if (setupState instanceof Promise) {
              if (!promise) {
                promise = Promise.resolve(plainData);
              }

              promise = promise.then(function () {
                return setupState.then(function (value) {
                  plainData[key] = proxyRefs(value);
                  return plainData;
                });
              });
            } else {
              plainData[key] = proxyRefs(setupState);
            }
          }
        });
        return (_promise = promise) !== null && _promise !== void 0 ? _promise : plainData;
      };

      var decorators = getOwn(Ctor, '__d');

      if (decorators) {
        decorators.forEach(function (fn) {
          return fn(options);
        });
      } // from Vue Loader


      var injections = ['render', 'ssrRender', '__file', '__cssModules', '__scopeId', '__hmrId'];
      injections.forEach(function (key) {
        if (Ctor[key]) {
          options[key] = Ctor[key];
        }
      });
      return options;
    }
  }]);

  return VueImpl;
}();

VueImpl.__h = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUnmount', 'unmounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch'];
var Vue = VueImpl;

function Options(options) {
  return function (Component) {
    Component.__o = options;
    return Component;
  };
}
function vue_class_component_esm_bundler_createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__d) {
      Ctor.__d = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__d.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  var _a;

  return _a = /*#__PURE__*/function (_Vue) {
    _inherits(MixedVue, _Vue);

    var _super = _createSuper(MixedVue);

    function MixedVue() {
      var _this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _classCallCheck(this, MixedVue);

      _this = _super.call.apply(_super, [this].concat(args));
      Ctors.forEach(function (Ctor) {
        var data = _construct(Ctor, args);

        Object.keys(data).forEach(function (key) {
          _this[key] = data[key];
        });
      });
      return _this;
    }

    return MixedVue;
  }(Vue), _a.__b = {
    mixins: Ctors.map(function (Ctor) {
      return Ctor.__vccOpts;
    })
  }, _a;
}
function setup(setupFn) {
  // Hack to delay the invocation of setup function.
  // Will be called after dealing with class properties.
  return {
    __s: setupFn
  };
}

// Actual implementation
function prop(options) {
  return options;
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/Emit.js
var Emit_spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var Emit_hyphenateRE = /\B([A-Z])/g;
var Emit_hyphenate = function (str) { return str.replace(Emit_hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = Emit_hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, Emit_spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, Emit_spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (Emit_isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function Emit_isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/helpers/metadata.js
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function metadata_applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/Model.js


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/ModelSync.js


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/Prop.js


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        metadata_applyMetadata(options, target, key);
        vue_class_component_esm_bundler_createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/PropSync.js


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/decorators/Watch.js

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return vue_class_component_esm_bundler_createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-property-decorator@9.1.2_30208c97ed7cdc632a70def905012d4e/node_modules/vue-property-decorator/lib/index.js
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>
















;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/ripple-radio/ripple-radio.vue?vue&type=script&lang=ts




const bubblingLeaveDelay = 1000;
const activeLeaveDelay1 = 300;
const activeLeaveDelay2 = 150;
let default_1 = class default_1 extends Vue {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "disableTrigger", void 0);

    _defineProperty(this, "disabled", void 0);

    _defineProperty(this, "active", false);

    _defineProperty(this, "activeLeaving", false);

    _defineProperty(this, "list", []);

    _defineProperty(this, "count", void 0);

    _defineProperty(this, "timeout", void 0);

    _defineProperty(this, "activeTimeout", void 0);

    _defineProperty(this, "activeTimeout2", void 0);

    _defineProperty(this, "hasStarted", void 0);
  }

  rippleTap(e) {}

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

__decorate([Prop({
  default: "primary"
})], default_1.prototype, "color", void 0);

__decorate([Prop({
  default: false
})], default_1.prototype, "disableTrigger", void 0);

__decorate([Prop({})], default_1.prototype, "disabled", void 0);

__decorate([Emit("rippleTap")], default_1.prototype, "rippleTap", null);

default_1 = __decorate([Options({})], default_1);
/* harmony default export */ var ripple_radiovue_type_script_lang_ts = (default_1);
;// CONCATENATED MODULE: ./src/components/ripple-radio/ripple-radio.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(485);
;// CONCATENATED MODULE: ./src/components/ripple-radio/ripple-radio.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ripple_radiovue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var ripple_radio = (__exports__);
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/checkbox/checkbox.vue?vue&type=template&id=da7d4f8c&ts=true

const checkboxvue_type_template_id_da7d4f8c_ts_true_hoisted_1 = {
  key: 0,
  class: "voyo-checkbox-selected abs-full"
};
function checkboxvue_type_template_id_da7d4f8c_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_voyo_ripple_radio = resolveComponent("voyo-ripple-radio");

  return openBlock(), createElementBlock("div", {
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
  }, [createBaseVNode("div", {
    class: normalizeClass(["voyo-checkbox", [_ctx.value0 ? '__active' : '']])
  }, [createBaseVNode("div", {
    class: normalizeClass(["voyo-checkbox-frame abs-full", [_ctx.value0 ? 'voyo-bg-' + _ctx.color : '', _ctx.value0 ? 'voyo-color-' + _ctx.color : '']])
  }, [_ctx.value0 ? (openBlock(), createElementBlock("div", checkboxvue_type_template_id_da7d4f8c_ts_true_hoisted_1)) : createCommentVNode("v-if", true)], 2
  /* CLASS */
  ), runtime_core_esm_bundler_createVNode(_component_voyo_ripple_radio, {
    color: _ctx.color,
    ref: "ripple",
    "disable-trigger": true,
    disabled: _ctx.disabled
  }, null, 8
  /* PROPS */
  , ["color", "disabled"])], 2
  /* CLASS */
  ), renderSlot(_ctx.$slots, "default")], 32
  /* HYDRATE_EVENTS */
  );
}
;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=template&id=da7d4f8c&ts=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/checkbox/checkbox.vue?vue&type=script&lang=ts




let checkboxvue_type_script_lang_ts_default_1 = class default_1 extends Vue {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "disabled", void 0);

    _defineProperty(this, "modelValue", void 0);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "value0", false);
  }

  watchValue(v) {
    if (v !== this.value0) v ? this.show() : this.close();
  }

  input(v) {}

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

__decorate([Prop({})], checkboxvue_type_script_lang_ts_default_1.prototype, "disabled", void 0);

__decorate([Prop({
  default: false
})], checkboxvue_type_script_lang_ts_default_1.prototype, "modelValue", void 0);

__decorate([Prop({
  default: 'primary'
})], checkboxvue_type_script_lang_ts_default_1.prototype, "color", void 0);

__decorate([Watch("modelValue", {
  immediate: true
})], checkboxvue_type_script_lang_ts_default_1.prototype, "watchValue", null);

__decorate([Emit("update:modelValue")], checkboxvue_type_script_lang_ts_default_1.prototype, "input", null);

checkboxvue_type_script_lang_ts_default_1 = __decorate([Options({})], checkboxvue_type_script_lang_ts_default_1);
/* harmony default export */ var checkboxvue_type_script_lang_ts = (checkboxvue_type_script_lang_ts_default_1);
;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js??clonedRuleSet-7.use[0]!./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-7.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/registry.npmmirror.com+postcss-loader@7.0.1_webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+sass-loader@13.0.2_sass@1.54.5+webpack@5.74.0/node_modules/sass-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/checkbox/checkbox.vue?vue&type=style&index=0&id=da7d4f8c&lang=scss
var checkboxvue_type_style_index_0_id_da7d4f8c_lang_scss = __webpack_require__(511);
;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=style&index=0&id=da7d4f8c&lang=scss

;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue




;


const checkbox_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(checkboxvue_type_script_lang_ts, [['render',checkboxvue_type_template_id_da7d4f8c_ts_true_render]])

/* harmony default export */ var checkbox_checkbox = (checkbox_exports_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/cell/cell.vue?vue&type=template&id=2be9df27&ts=true

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
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["voyo-cell flex-v-between yo-hover", [_ctx.border ? '__border' : '']])
  }, [createBaseVNode("div", cellvue_type_template_id_2be9df27_ts_true_hoisted_1, [_ctx.img ? (openBlock(), createElementBlock("img", {
    key: 0,
    src: _ctx.img,
    class: "voyo-cell-img"
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : createCommentVNode("v-if", true), _ctx.iconClass ? (openBlock(), createElementBlock("span", {
    key: 1,
    class: normalizeClass([_ctx.iconClass, 'voyo-cell-icon'])
  }, null, 2
  /* CLASS */
  )) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "title"), _ctx.label ? (openBlock(), createElementBlock("div", _hoisted_3, [_ctx.title ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.title), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true), _ctx.label ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(_ctx.label), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true)])) : (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(_ctx.title), 1
  /* TEXT */
  ))]), createBaseVNode("div", _hoisted_7, [createBaseVNode("div", {
    class: normalizeClass(['_right-value', _ctx.valueWidth ? 'ellipsis' : '']),
    style: normalizeStyle([_ctx.valueWidth ? {
      width: _ctx.valueWidth
    } : {}])
  }, [createTextVNode(toDisplayString(_ctx.value) + " ", 1
  /* TEXT */
  ), renderSlot(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  ), _ctx.rightIcon ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(['_right-icon', _ctx.rightIcon])
  }, null, 2
  /* CLASS */
  )) : createCommentVNode("v-if", true)])], 2
  /* CLASS */
  );
}
;// CONCATENATED MODULE: ./src/components/cell/cell.vue?vue&type=template&id=2be9df27&ts=true

;// CONCATENATED MODULE: ./src/assets/cloud-upload.svg
var cloud_upload_namespaceObject = __webpack_require__.p + "13d03ead604cc4a7f446.svg";
;// CONCATENATED MODULE: ./src/assets/loading.svg
var loading_namespaceObject = __webpack_require__.p + "edcd89311f955a3028cd.svg";
;// CONCATENATED MODULE: ./src/assets/close.svg
var close_namespaceObject = __webpack_require__.p + "10a62ae19690b5b5f92f.svg";
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b8bce14f87162c3885dc6907ec4c380b/node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.3.1_typescript@4.7.4+webpack@5.74.0/node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/components/cell/cell.vue?vue&type=script&lang=ts





let Cell = class Cell extends Vue {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "rightIcon", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "to", void 0);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "ripple", void 0);

    _defineProperty(this, "border", void 0);

    _defineProperty(this, "valueWidth", void 0);

    _defineProperty(this, "img", void 0);

    _defineProperty(this, "iconClass", void 0);
  }

};

__decorate([Prop({})], Cell.prototype, "type", void 0);

__decorate([Prop({})], Cell.prototype, "to", void 0);

__decorate([Prop({
  default: ""
})], Cell.prototype, "title", void 0);

__decorate([Prop({
  default: ""
})], Cell.prototype, "label", void 0);

__decorate([Prop({
  default: ""
})], Cell.prototype, "value", void 0);

__decorate([Prop({
  default: true
})], Cell.prototype, "ripple", void 0);

__decorate([Prop({
  default: setting.cell.border
})], Cell.prototype, "border", void 0);

__decorate([Prop({
  default: ""
})], Cell.prototype, "valueWidth", void 0);

__decorate([Prop({})], Cell.prototype, "img", void 0);

__decorate([Prop({})], Cell.prototype, "iconClass", void 0);

Cell = __decorate([Options({
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
/* harmony default export */ var cellvue_type_script_lang_ts = (Cell);
;// CONCATENATED MODULE: ./src/components/cell/cell.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/cell/cell.vue




;
const cell_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(cellvue_type_script_lang_ts, [['render',cellvue_type_template_id_2be9df27_ts_true_render]])

/* harmony default export */ var cell = (cell_exports_);
;// CONCATENATED MODULE: ./src/components/card.tsx


const Card = (props, {
  slots
}) => {
  return runtime_core_esm_bundler_createVNode("div", {
    "class": "yo-card"
  }, [slots.header || props.title ? runtime_core_esm_bundler_createVNode("header", {
    "class": "yo-card-header flex-v-between"
  }, [props.title ? runtime_core_esm_bundler_createVNode("span", {
    "class": "_yo-card-header-title"
  }, [props.title]) : null, slots.header && slots.header()]) : null, runtime_core_esm_bundler_createVNode("article", {
    "class": "yo-card-content"
  }, [slots.default && slots.default()]), slots.footer ? runtime_core_esm_bundler_createVNode("footer", {
    "class": "yo-card-footer",
    "style": {
      textAlign: setting.card.footerMainAlign
    }
  }, [slots.footer()]) : null]);
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/utils/RelativeFixed.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/menu/menu.component.js







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


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@voyo+core@2.0.0/node_modules/@voyo/core/dest/components/registry/menu.js


const registryMenu = () => {
    assemblyComponent("voyoc-menu", MenuComponent);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+runtime-dom@3.2.37/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const templateContainer = doc && /*#__PURE__*/ doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) {
            // cached
            while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling))
                    break;
            }
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = shared_esm_bundler_isString(next);
    if (next && !isCssString) {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !shared_esm_bundler_isString(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
    else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                style.cssText = next;
            }
        }
        else if (prev) {
            el.removeAttribute('style');
        }
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) {
            style.display = currentDisplay;
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (shared_esm_bundler_isArray(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (val == null)
            val = '';
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(shared_esm_bundler_hyphenate(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = shared_esm_bundler_camelize(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = shared_esm_bundler_capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = isSpecialBooleanAttr(key);
        if (value == null || (isBoolean && !includeBooleanAttr(value))) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' &&
        el.tagName !== 'PROGRESS' &&
        // custom elements may use _value internally
        !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue ||
            // #4956: always set for OPTION elements because its value falls back to
            // textContent if no value attribute is present. And setting .value for
            // OPTION has no side effect
            el.tagName === 'OPTION') {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    let needRemove = false;
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            value = includeBooleanAttr(value);
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            value = '';
            needRemove = true;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            value = 0;
            needRemove = true;
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    }
    catch (e) {
        if ((false)) {}
    }
    needRemove && el.removeAttribute(key);
}

// Async edge case fix requires storing an event listener's attach timestamp.
const [_getNow, skipTimestampCheck] = /*#__PURE__*/ (() => {
    let _getNow = Date.now;
    let skipTimestampCheck = false;
    if (typeof window !== 'undefined') {
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        if (Date.now() > document.createEvent('Event').timeStamp) {
            // if the low-res timestamp which is bigger than the event timestamp
            // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
            // and we need to use the hi-res version for event listeners as well.
            _getNow = performance.now.bind(performance);
        }
        // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
        // and does not fire microtasks in between event propagation, so safe to exclude.
        const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
        skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
    }
    return [_getNow, skipTimestampCheck];
})();
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const runtime_dom_esm_bundler_reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(runtime_dom_esm_bundler_reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [shared_esm_bundler_hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (shared_esm_bundler_isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === 'class') {
        patchClass(el, nextValue, isSVG);
    }
    else if (key === 'style') {
        patchStyle(el, prevValue, nextValue);
    }
    else if (shared_esm_bundler_isOn(key)) {
        // ignore v-model listeners
        if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
    }
    else if (key[0] === '.'
        ? ((key = key.slice(1)), true)
        : key[0] === '^'
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    }
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
            el._trueValue = nextValue;
        }
        else if (key === 'false-value') {
            el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && shared_esm_bundler_isFunction(value)) {
            return true;
        }
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && shared_esm_bundler_isString(value)) {
        return false;
    }
    return key in el;
}

function defineCustomElement(options, hydrate) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps) {
            super(Comp, initialProps, hydrate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = ((options) => {
    // @ts-ignore
    return defineCustomElement(options, hydrate);
});
const BaseClass = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {
});
class VueElement extends (/* unused pure expression or super */ null && (BaseClass)) {
    constructor(_def, _props = {}, hydrate) {
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) {
            hydrate(this._createVNode(), this.shadowRoot);
        }
        else {
            if (false) {}
            this.attachShadow({ mode: 'open' });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        nextTick(() => {
            if (!this._connected) {
                runtime_dom_esm_bundler_render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
        if (this._resolved) {
            return;
        }
        this._resolved = true;
        // set initial attrs
        for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
        }
        // watch future attr changes
        new MutationObserver(mutations => {
            for (const m of mutations) {
                this._setAttr(m.attributeName);
            }
        }).observe(this, { attributes: true });
        const resolve = (def) => {
            const { props, styles } = def;
            const hasOptions = !isArray(props);
            const rawKeys = props ? (hasOptions ? Object.keys(props) : props) : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) {
                for (const key in this._props) {
                    const opt = props[key];
                    if (opt === Number || (opt && opt.type === Number)) {
                        this._props[key] = toNumber(this._props[key]);
                        (numberProps || (numberProps = Object.create(null)))[key] = true;
                    }
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key of Object.keys(this)) {
                if (key[0] !== '_') {
                    this._setProp(key, this[key], true, false);
                }
            }
            // defining getter/setters on prototype
            for (const key of rawKeys.map(camelize$1)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this._getProp(key);
                    },
                    set(val) {
                        this._setProp(key, val);
                    }
                });
            }
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
            asyncDef().then(resolve);
        }
        else {
            resolve(this._def);
        }
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) {
            value = toNumber(value);
        }
        this._setProp(camelize$1(key), value, false);
    }
    /**
     * @internal
     */
    _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
                this._update();
            }
            // reflect
            if (shouldReflect) {
                if (val === true) {
                    this.setAttribute(hyphenate(key), '');
                }
                else if (typeof val === 'string' || typeof val === 'number') {
                    this.setAttribute(hyphenate(key), val + '');
                }
                else if (!val) {
                    this.removeAttribute(hyphenate(key));
                }
            }
        }
    }
    _update() {
        runtime_dom_esm_bundler_render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = createVNode(this._def, extend({}, this._props));
        if (!this._instance) {
            vnode.ce = instance => {
                this._instance = instance;
                instance.isCE = true;
                // HMR
                if ((false)) {}
                // intercept emit
                instance.emit = (event, ...args) => {
                    this.dispatchEvent(new CustomEvent(event, {
                        detail: args
                    }));
                };
                // locate nearest Vue custom element parent for provide/inject
                let parent = this;
                while ((parent =
                    parent && (parent.parentNode || parent.host))) {
                    if (parent instanceof VueElement) {
                        instance.parent = parent._instance;
                        break;
                    }
                }
            };
        }
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) {
            styles.forEach(css => {
                const s = document.createElement('style');
                s.textContent = css;
                this.shadowRoot.appendChild(s);
                // record for HMR
                if ((false)) {}
            });
        }
    }
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = getCurrentInstance();
        if (!instance) {
            ( false) && 0;
            return EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( false) && 0;
            return EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ( false) &&
                0;
            return EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = getCurrentInstance();
    /* istanbul ignore next */
    if (!instance) {
        ( false) &&
            0;
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    watchPostEffect(setVars);
    onMounted(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, { childList: true });
        onUnmounted(() => ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        setVarsOnNode(vnode.el, vars);
    }
    else if (vnode.type === Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
    else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor)
                break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props =
    /*#__PURE__*/ shared_esm_bundler_extend({}, BaseTransition.props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const runtime_dom_esm_bundler_callHook = (hook, args = []) => {
    if (shared_esm_bundler_isArray(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? shared_esm_bundler_isArray(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            runtime_dom_esm_bundler_callHook(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return shared_esm_bundler_extend(baseProps, {
        onBeforeEnter(el) {
            runtime_dom_esm_bundler_callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            runtime_dom_esm_bundler_callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                if (!el._isLeaving) {
                    // cancelled
                    return;
                }
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            runtime_dom_esm_bundler_callHook(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            runtime_dom_esm_bundler_callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            runtime_dom_esm_bundler_callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            runtime_dom_esm_bundler_callHook(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (shared_esm_bundler_isObject(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = shared_esm_bundler_toNumber(val);
    if ((false))
        {}
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        warn(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        warn(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ shared_esm_bundler_extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = runtime_core_esm_bundler_getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = reactivity_esm_bundler_toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || runtime_core_esm_bundler_Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
                else if ((false)) {}
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return runtime_core_esm_bundler_createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = (/* unused pure expression or super */ null && (TransitionGroupImpl));
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1 ? root : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'] ||
        (false );
    return shared_esm_bundler_isArray(fn) ? value => shared_esm_bundler_invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event('input'));
    }
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || (vnode.props && vnode.props.type === 'number');
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            if (castToNumber) {
                domValue = shared_esm_bundler_toNumber(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el && el.type !== 'range') {
            if (lazy) {
                return;
            }
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && shared_esm_bundler_toNumber(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (shared_esm_bundler_isArray(modelValue)) {
                const index = shared_esm_bundler_looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (shared_esm_bundler_isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (shared_esm_bundler_isArray(value)) {
        el.checked = shared_esm_bundler_looseIndexOf(value, vnode.props.value) > -1;
    }
    else if (shared_esm_bundler_isSet(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = shared_esm_bundler_looseEqual(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = shared_esm_bundler_looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = shared_esm_bundler_looseEqual(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = shared_esm_bundler_isSet(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? shared_esm_bundler_toNumber(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !shared_esm_bundler_isArray(value) && !shared_esm_bundler_isSet(value)) {
        ( false) &&
            0;
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (shared_esm_bundler_isArray(value)) {
                option.selected = shared_esm_bundler_looseIndexOf(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (shared_esm_bundler_looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function resolveDynamicModel(tagName, type) {
    switch (tagName) {
        case 'SELECT':
            return vModelSelect;
        case 'TEXTAREA':
            return vModelText;
        default:
            switch (type) {
                case 'checkbox':
                    return vModelCheckbox;
                case 'radio':
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
        if (vnode.props && looseEqual(vnode.props.value, value)) {
            return { checked: true };
        }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
        if (isArray(value)) {
            if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
                return { checked: true };
            }
        }
        else if (isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
                return { checked: true };
            }
        }
        else if (value) {
            return { checked: true };
        }
    };
    vModelDynamic.getSSRProps = (binding, vnode) => {
        if (typeof vnode.type !== 'string') {
            return;
        }
        const modelToUse = resolveDynamicModel(
        // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
        }
    };
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = hyphenate(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
        if (!value) {
            return { style: { display: 'none' } };
        }
    };
}

const rendererOptions = /*#__PURE__*/ shared_esm_bundler_extend({ patchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return (renderer ||
        (renderer = createRenderer(rendererOptions)));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const runtime_dom_esm_bundler_render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                warn(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                warn(msg);
                return compilerOptions;
            },
            set() {
                warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (isString(container)) {
        const res = document.querySelector(container);
        if (false) {}
        return res;
    }
    if (false) {}
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */
const initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
            ssrDirectiveInitialized = true;
            initVModelForSSR();
            initVShowForSSR();
        }
    }
    ;



;// CONCATENATED MODULE: ./src/components/menu.tsx







registryMenu();
let Menu = class Menu extends Vue {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "modelValue", void 0);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "contentSpace", void 0);

    _defineProperty(this, "show", false);

    _defineProperty(this, "btnEl", void 0);

    _defineProperty(this, "wrapperEl", void 0);

    _defineProperty(this, "relativeFixed", void 0);
  }

  updateModelValue(val) {}

  watchModelValue(val) {
    this.show = val;
  }

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

__decorate([Prop({})], Menu.prototype, "modelValue", void 0);

__decorate([Prop({
  default: "bottom"
})], Menu.prototype, "position", void 0);

__decorate([Prop({
  default: 5
})], Menu.prototype, "contentSpace", void 0);

__decorate([Emit("update:modelValue")], Menu.prototype, "updateModelValue", null);

__decorate([Watch("modelValue", {
  immediate: true
})], Menu.prototype, "watchModelValue", null);

Menu = __decorate([Options({
  render() {
    return;
    [h("div", { ...this.$attrs,
      onClick: this.click,
      ref: this.captureBtn
    }, this.$slots.default && this.$slots.default()), h(Transition, {
      "enter-active-class": "__show",
      "leave-active-class": "__hide"
    }, () => this.show ? h("div", {
      class: "voyo-menu-wrapper __type-menu",
      onVnodeBeforeMount: this.wrapperMounted
    }, [h("div", {
      class: "_layout-bg",
      onClick: this.bgClick
    }), h("div", {
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
    entry.target.yoCssManager.replaceClass(GroupResizeCSSKey, `yo-group-${gridCount}`);
  }
}) : null;
const Group = (props, {
  slots
}) => {
  return h("section", {
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
  return h("div", {
    class: ["yo-group-cell", props.span ? "yo-group-cell-span-" + props.span : null]
  }, [h("dl", {}, [props.label ? h("dt", {}, [props.important ? h("span", {
    class: "_cell-important"
  }, "*") : null, props.label]) : null, h("dd", {}, [slots.default && slots.default()])]), h("aside", {
    class: "_cell-decorator"
  }, slots.decorator && slots.decorator())]);
};
;// CONCATENATED MODULE: ./src/components/form/form.tsx







let Form = class Form extends Vue {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "grid", void 0);

    _defineProperty(this, "dense", void 0);

    _defineProperty(this, "disabled", void 0);

    _defineProperty(this, "gap", void 0);

    _defineProperty(this, "errDynamicClear", void 0);

    _defineProperty(this, "errDynamicShow", void 0);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "subOrders", void 0);
  }

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

__decorate([Prop()], Form.prototype, "grid", void 0);

__decorate([Prop()], Form.prototype, "dense", void 0);

__decorate([Prop()], Form.prototype, "disabled", void 0);

__decorate([Prop()], Form.prototype, "gap", void 0);

__decorate([Prop({
  default: setting.form.errDynamicClear
})], Form.prototype, "errDynamicClear", void 0);

__decorate([Prop({
  default: setting.form.errDynamicShow
})], Form.prototype, "errDynamicShow", void 0);

__decorate([Prop()], Form.prototype, "form", void 0);

__decorate([Watch("form", {
  immediate: true
})], Form.prototype, "watchForm", null);

Form = __decorate([Options({
  render() {
    return h(Group, {
      grid: this.grid,
      dense: this.dense,
      gap: this.gap
    }, () => !this.form ? null : this.form.controllers.map(i => !i.shadow ? h(group_Cell, {
      span: i.span,
      key: i.id,
      label: i.label,
      important: i.required || i.star
    }, {
      default: () => [i.render ? i.render(i, this.form.dict) : null, i.tag ? h(resolveComponent(i.tag), {
        modelValue: i.value,
        "onUpdate:modelValue": v => {
          console.log(i);
          return i.value = v;
        },
        disabled: i.disabled || this.disabled,
        ...(i.props || {})
      }) : null],
      decorator: () => h(Transition, {
        name: "yo-fade"
      }, () => i.error ? h("div", {
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
    const fileLoading = reactivity_esm_bundler_ref(false);
    const compressedImg = reactivity_esm_bundler_ref("");
    watch(() => props.defaultImg, v => {
      if (v) compressedImg.value = v;
    }, {
      immediate: true
    });
    watch(() => props.modelValue, v => {
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
        const compressResult = await utils_namespaceObject.fileCompress.compress({ ...(props.compressOpts || {}),
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

    return () => props.type === "normal" ? h("div", {
      class: ["yo-upload-block", "flex-center", fileLoading.value ? "__load" : ""]
    }, [runtime_core_esm_bundler_createVNode("img", {
      "src": setting.icons.upload,
      "class": "_upload-img"
    }, null), runtime_core_esm_bundler_createVNode("img", {
      "src": setting.icons.load,
      "class": ["_load-img", "voyo-an-loading"]
    }, null), compressedImg.value ? runtime_core_esm_bundler_createVNode("img", {
      "src": compressedImg.value,
      "class": ["_show-img", "abs-full"]
    }, null) : null, compressedImg.value ? runtime_core_esm_bundler_createVNode("img", {
      "onClick": closeShow,
      "src": setting.icons.close,
      "class": "_close-img"
    }, null) : null, compressedImg.value ? null : h("input", {
      type: "file",
      class: ["abs-full", "_input"],
      accept: props.accept,
      disabled: fileLoading.value,
      onChange: fileChange
    })]) : h("div", {
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
    h("input", {
      type: "file",
      class: ["abs-full", "_input"],
      accept: props.accept,
      disabled: fileLoading.value,
      onChange: fileChange
    })]);
  }

};
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@ztwx+form@2.1.3/node_modules/@ztwx/form/lib/Subject.js
class Subject_Subject {
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@ztwx+form@2.1.3/node_modules/@ztwx/form/lib/validators/fn.validator.js
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

;// CONCATENATED MODULE: ./src/components/form/form-tool.ts



class GlobalHandle {
  constructor() {
    _defineProperty(this, "preSetValFnList", []);

    _defineProperty(this, "preCreateFnList", []);

    _defineProperty(this, "afterResultFnList", []);
  }

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
const handleValueChange = (valueChange, c, controllers, init) => {
  if (init) {
    if (typeof valueChange === "object" && valueChange != null) {
      valueChange.immediate && valueChange.handle && valueChange.handle(c.value, c, controllers);
    }
  } else {
    if (typeof valueChange === "function") {
      valueChange(c.value, c, controllers);
    } else if (typeof valueChange === "object" && valueChange != null) {
      valueChange.handle && valueChange.handle(c.value, c, controllers);
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
  constructor() {
    _defineProperty(this, "controllers", void 0);

    _defineProperty(this, "dict", void 0);
  }

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
const createForm = originControllers => {
  const yoForm = new YoFormImpl();
  const controllers = originControllers.map(c => {
    c._valueChangeSubject = new Subject_Subject();
    c.validators = c.validators || [];

    if (c.required) {
      c.validators.push(new FnValidator(val => val === 0 || !!val, () => (c.label || "") + setting.form.requireText));
    }

    formGlobalHandle.handlePreCreate(c);
    assemblyController(c);
    const proxyC = new Proxy(c, {
      set(c, key, val) {
        if (key === "value") {
          formGlobalHandle.handlePreSetVal(proxyC);
          c.valueChange && handleValueChange(c.valueChange, c, controllers, false);

          c._valueChangeSubject.next(val);
        }

        return Reflect.set(c, key, val);
      }

    });
    formGlobalHandle.handlePreSetVal(proxyC); // immediate valueChange.

    proxyC.valueChange && handleValueChange(proxyC.valueChange, proxyC, controllers, true);
    return proxyC;
  });
  yoForm.setControllers(controllers);
  return yoForm;
};
;// CONCATENATED MODULE: ./src/components/form/index.ts


;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/symbol/iterator.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = (/* unused pure expression or super */ null && (iterator_iterator));
//# sourceMappingURL=iterator.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[observable_observable] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isPromise.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise_isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isArrayLike.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[iterator_iterator] === 'function';
}
//# sourceMappingURL=isIterable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduled/scheduled.js
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        else if (isPromise_isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        else if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        else if (isIterable(input) || typeof input === 'string') {
            return scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/isScheduler.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/observable/fromArray.js
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/observable/of.js
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray(args);
    }
}
//# sourceMappingURL=of.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/Action.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction));

//# sourceMappingURL=QueueAction.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler));

//# sourceMappingURL=QueueScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/scheduler/queue.js
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queueScheduler = /*@__PURE__*/ new QueueScheduler(QueueAction);
var queue_queue = (/* unused pure expression or super */ null && (queueScheduler));
//# sourceMappingURL=queue.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[iterator_iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[observable_observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/util/subscribeTo.js
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[observable_observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise_isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        var value = isObject_isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/observable/from.js
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable) {
            return input;
        }
        return new Observable(subscribeTo(input));
    }
    else {
        return scheduled(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/innerSubscribe.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */




var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber));

var ComplexInnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(Subscriber));

var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber));

var ComplexOuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function (error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(Subscriber));

function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    var subscription;
    try {
        subscription = subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
//# sourceMappingURL=innerSubscribe.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/operators/mergeMap.js
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */




function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(SimpleOuterSubscriber));

var flatMap = (/* unused pure expression or super */ null && (mergeMap));
//# sourceMappingURL=mergeMap.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/operators/mergeAll.js
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+rxjs@6.6.7/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

;// CONCATENATED MODULE: ./src/utils/media.ts



class Media {
  constructor() {
    _defineProperty(this, "dict", {
      "4k": 4000,
      "2k": 2000,
      "1k": 1900,
      xxl: 1600,
      xl: 1300,
      l: 1020,
      m: 760,
      s: 480,
      i: 0
    });

    _defineProperty(this, "widthSub", new Subject());

    _defineProperty(this, "listenWidth", scheduled([of(0).pipe(map(() => this.screenWidth)), this.widthSub], queueScheduler).pipe(mergeAll()));

    _defineProperty(this, "mobileRule", "l");

    _defineProperty(this, "screenWidth", void 0);
  }

  ifMobile() {
    return scheduled([of(this.screenWidth).pipe(map(() => this.screenWidth)), this.widthSub], queueScheduler).pipe(mergeAll()).pipe(map(width => {
      return width < this.dict[this.mobileRule];
    }), distinctUntilChanged());
  }

  listen() {
    scheduled([of(0).pipe(map(() => window.innerWidth)), fromEvent(window, "resize").pipe(map(() => window.innerWidth))], queueScheduler).pipe(mergeAll()).subscribe(i => {
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
}();
var __webpack_exports__GlobalHandle = __webpack_exports__.Ie;
var __webpack_exports__Media = __webpack_exports__.pU;
var __webpack_exports__YoFormImpl = __webpack_exports__.hm;
var __webpack_exports__createForm = __webpack_exports__.Np;
var __webpack_exports__demonErrMessage = __webpack_exports__.nl;
var __webpack_exports__formGlobalHandle = __webpack_exports__.RY;
var __webpack_exports__getDateDay = __webpack_exports__.W6;
var __webpack_exports__getDays = __webpack_exports__.gw;
var __webpack_exports__getNextM = __webpack_exports__.$I;
var __webpack_exports__getPreM = __webpack_exports__.jF;
var __webpack_exports__handleValueChange = __webpack_exports__.rn;
var __webpack_exports__installerAll = __webpack_exports__.vy;
var __webpack_exports__isGreater = __webpack_exports__.Vy;
var __webpack_exports__media = __webpack_exports__.BC;
var __webpack_exports__setting = __webpack_exports__.GF;
var __webpack_exports__timeStampDay = __webpack_exports__.Qh;
export { __webpack_exports__GlobalHandle as GlobalHandle, __webpack_exports__Media as Media, __webpack_exports__YoFormImpl as YoFormImpl, __webpack_exports__createForm as createForm, __webpack_exports__demonErrMessage as demonErrMessage, __webpack_exports__formGlobalHandle as formGlobalHandle, __webpack_exports__getDateDay as getDateDay, __webpack_exports__getDays as getDays, __webpack_exports__getNextM as getNextM, __webpack_exports__getPreM as getPreM, __webpack_exports__handleValueChange as handleValueChange, __webpack_exports__installerAll as installerAll, __webpack_exports__isGreater as isGreater, __webpack_exports__media as media, __webpack_exports__setting as setting, __webpack_exports__timeStampDay as timeStampDay };
