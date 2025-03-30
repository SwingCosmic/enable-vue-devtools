// ==UserScript==
// @name              Force Enable Vue Devtools
// @version           0.2.3
// @author            Huang-Huang Bao <eh5@sokka.cn> (https://github.com/EHfive)
// @description       Force enable Vue Devtools for any Vue2 or Vue3 production build.
// @homepage          https://github.com/EHfive/userscripts/tree/master/userscripts/enbale-vue-devtools
// @supportURL        https://github.com/EHfive/userscripts/issues
// @namespace         https://eh5.me
// @name:zh-CN        强制开启Vue Devtools
// @name:zh-TW        強制開啓Vue Devtools
// @description:zh-CN 为生产构建的Vue2或Vue3应用强制开启Vue Devtools
// @description:zh-TW 爲生產構建的Vue2或Vue3應用強制開啓Vue Devtools
// @license           MIT
// @updateURL         https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.meta.js
// @downloadURL       https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.user.js
// @run-at            document-start
// @noframes          
// @include           /^.*$/
// @grant             unsafeWindow
// @grant             GM_info
// @grant             GM.info
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 0);
  /******/
}
/************************************************************************/
/******/)([(/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */
  var _vendor_gm4_polyfill_gm4_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */
  var _vendor_gm4_polyfill_gm4_polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_gm4_polyfill_gm4_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
  /* harmony import */
  var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
  (function () {
    if (typeof unsafeWindow === 'object' && unsafeWindow) {
      unsafeWindow.GM = this.GM;
    }
  }).call(window);

  /***/
}), (/* 1 */
/***/function (module, exports) {
  /*
  This helper script bridges compatibility between the Greasemonkey 4 APIs and
  existing/legacy APIs.  Say for example your user script includes
  
      // @grant GM_getValue
  
  And you'd like to be compatible with both Greasemonkey 3 and Greasemonkey 4
  (and for that matter all versions of Violentmonkey, Tampermonkey, and any other
  user script engine).  Add:
  
      // @grant GM.getValue
      // @require https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
  
  And switch to the new (GM-dot) APIs, which return promises.  If your script
  is running in an engine that does not provide the new asynchronous APIs, this
  helper will add them, based on the old APIs.
  
  If you use `await` at the top level, you'll need to wrap your script in an
  `async` function to be compatible with any user script engine besides
  Greasemonkey 4.
  
      (async () => {
      let x = await GM.getValue('x');
      })();
  */

  if (typeof GM == 'undefined') {
    this.GM = {};
  }
  if (typeof GM_addStyle == 'undefined') {
    this.GM_addStyle = aCss => {
      'use strict';

      let head = document.getElementsByTagName('head')[0];
      if (head) {
        let style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
        return style;
      }
      return null;
    };
  }
  if (typeof GM_registerMenuCommand == 'undefined') {
    this.GM_registerMenuCommand = (caption, commandFunc, accessKey) => {
      if (!document.body) {
        if (document.readyState === 'loading' && document.documentElement && document.documentElement.localName === 'html') {
          new MutationObserver((mutations, observer) => {
            if (document.body) {
              observer.disconnect();
              GM_registerMenuCommand(caption, commandFunc, accessKey);
            }
          }).observe(document.documentElement, {
            childList: true
          });
        } else {
          console.error('GM_registerMenuCommand got no body.');
        }
        return;
      }
      let contextMenu = document.body.getAttribute('contextmenu');
      let menu = contextMenu ? document.querySelector('menu#' + contextMenu) : null;
      if (!menu) {
        menu = document.createElement('menu');
        menu.setAttribute('id', 'gm-registered-menu');
        menu.setAttribute('type', 'context');
        document.body.appendChild(menu);
        document.body.setAttribute('contextmenu', 'gm-registered-menu');
      }
      let menuItem = document.createElement('menuitem');
      menuItem.textContent = caption;
      menuItem.addEventListener('click', commandFunc, true);
      menu.appendChild(menuItem);
    };
  }
  if (typeof GM_getResourceText == 'undefined') {
    this.GM_getResourceText = aRes => {
      'use strict';

      return GM.getResourceUrl(aRes).then(url => fetch(url)).then(resp => resp.text()).catch(function (error) {
        GM.log('Request failed', error);
        return null;
      });
    };
  }
  Object.entries({
    'log': console.log.bind(console),
    // Pale Moon compatibility.  See #13.
    'info': GM_info
  }).forEach(([newKey, old]) => {
    if (old && typeof GM[newKey] == 'undefined') {
      GM[newKey] = old;
    }
  });
  Object.entries({
    'GM_addStyle': 'addStyle',
    'GM_deleteValue': 'deleteValue',
    'GM_getResourceURL': 'getResourceUrl',
    'GM_getValue': 'getValue',
    'GM_listValues': 'listValues',
    'GM_notification': 'notification',
    'GM_openInTab': 'openInTab',
    'GM_registerMenuCommand': 'registerMenuCommand',
    'GM_setClipboard': 'setClipboard',
    'GM_setValue': 'setValue',
    'GM_xmlhttpRequest': 'xmlHttpRequest',
    'GM_getResourceText': 'getResourceText'
  }).forEach(([oldKey, newKey]) => {
    let old = this[oldKey];
    if (old && typeof GM[newKey] == 'undefined') {
      GM[newKey] = function (...args) {
        return new Promise((resolve, reject) => {
          try {
            resolve(old.apply(this, args));
          } catch (e) {
            reject(e);
          }
        });
      };
    }
  });

  /***/
}), (/* 2 */
/***/function (module, exports, __webpack_require__) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = function (exports) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      });
      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      defineProperty(this, "_invoke", {
        value: enqueue
      });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method;
      var method = delegate.iterator[methodName];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method, or a missing .next mehtod, always terminate the
        // yield* loop.
        context.delegate = null;

        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (methodName === "throw" && delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }
        if (methodName !== "return") {
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function () {
      return this;
    });
    define(Gp, "toString", function () {
      return "[object Generator]";
    });
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function (val) {
      var object = Object(val);
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }
              next.value = undefined;
              next.done = true;
              return next;
            };
          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return {
        next: doneResult
      };
    }
    exports.values = values;
    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }
    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }
        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
  }(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  true ? module.exports : undefined);
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  /***/
}
/******/)]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: E:/dev/js/enable-vue-devtools/packages/polyfills/dist/index.js
var dist = __webpack_require__(0);

// CONCATENATED MODULE: E:/dev/js/enable-vue-devtools/node_modules/consola/src/logLevels.js
const LogLevel = {};
LogLevel[LogLevel.Fatal = 0] = 'Fatal';
LogLevel[LogLevel.Error = 0] = 'Error';
LogLevel[LogLevel.Warn = 1] = 'Warn';
LogLevel[LogLevel.Log = 2] = 'Log';
LogLevel[LogLevel.Info = 3] = 'Info';
LogLevel[LogLevel.Success = 3] = 'Success';
LogLevel[LogLevel.Debug = 4] = 'Debug';
LogLevel[LogLevel.Trace = 5] = 'Trace';
LogLevel[LogLevel.Silent = -Infinity] = 'Silent';
LogLevel[LogLevel.Verbose = Infinity] = 'Verbose';
// CONCATENATED MODULE: E:/dev/js/enable-vue-devtools/node_modules/consola/src/types.js

/* harmony default export */ var src_types = ({
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: LogLevel.Fatal
  },
  error: {
    level: LogLevel.Error
  },
  // Level 1
  warn: {
    level: LogLevel.Warn
  },
  // Level 2
  log: {
    level: LogLevel.Log
  },
  // Level 3
  info: {
    level: LogLevel.Info
  },
  success: {
    level: LogLevel.Success
  },
  // Level 4
  debug: {
    level: LogLevel.Debug
  },
  // Level 5
  trace: {
    level: LogLevel.Trace
  },
  // Verbose
  verbose: {
    level: LogLevel.Trace
  },
  // Legacy
  ready: {
    level: LogLevel.Info
  },
  start: {
    level: LogLevel.Info
  }
});
// CONCATENATED MODULE: E:/dev/js/enable-vue-devtools/node_modules/consola/src/utils/index.js
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// TODO: remove for consola@3
function isLogObj(arg) {
  // Should be plain object
  if (!isPlainObject(arg)) {
    return false;
  }

  // Should contains either 'message' or 'args' field
  if (!arg.message && !arg.args) {
    return false;
  }

  // Handle non-standard error objects
  if (arg.stack) {
    return false;
  }
  return true;
}
// CONCATENATED MODULE: E:/dev/js/enable-vue-devtools/node_modules/consola/src/consola.js


let paused = false;
const queue = [];
class consola_Consola {
  constructor(options = {}) {
    this._reporters = options.reporters || [];
    this._types = options.types || src_types;
    this.level = options.level !== undefined ? options.level : 3;
    this._defaults = options.defaults || {};
    this._async = options.async !== undefined ? options.async : undefined;
    this._stdout = options.stdout;
    this._stderr = options.stderr;
    this._mockFn = options.mockFn;
    this._throttle = options.throttle || 1000;
    this._throttleMin = options.throttleMin || 5;

    // Create logger functions for current instance
    for (const type in this._types) {
      const defaults = {
        type,
        ...this._types[type],
        ...this._defaults
      };
      this[type] = this._wrapLogFn(defaults);
      this[type].raw = this._wrapLogFn(defaults, true);
    }

    // Use _mockFn if is set
    if (this._mockFn) {
      this.mockTypes();
    }

    // Keep serialized version of last log
    this._lastLogSerialized = undefined;
    this._lastLog = undefined;
    this._lastLogTime = undefined;
    this._lastLogCount = 0;
    this._throttleTimeout = undefined;
  }
  get stdout() {
    return this._stdout || console._stdout; // eslint-disable-line no-console
  }
  get stderr() {
    return this._stderr || console._stderr; // eslint-disable-line no-console
  }
  create(options) {
    return new consola_Consola(Object.assign({
      reporters: this._reporters,
      level: this.level,
      types: this._types,
      defaults: this._defaults,
      stdout: this._stdout,
      stderr: this._stderr,
      mockFn: this._mockFn
    }, options));
  }
  withDefaults(defaults) {
    return this.create({
      defaults: Object.assign({}, this._defaults, defaults)
    });
  }
  withTag(tag) {
    return this.withDefaults({
      tag: this._defaults.tag ? this._defaults.tag + ':' + tag : tag
    });
  }
  addReporter(reporter) {
    this._reporters.push(reporter);
    return this;
  }
  removeReporter(reporter) {
    if (reporter) {
      const i = this._reporters.indexOf(reporter);
      if (i >= 0) {
        return this._reporters.splice(i, 1);
      }
    } else {
      this._reporters.splice(0);
    }
    return this;
  }
  setReporters(reporters) {
    this._reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }
  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }
  wrapConsole() {
    for (const type in this._types) {
      // Backup original value
      if (!console['__' + type]) {
        // eslint-disable-line no-console
        console['__' + type] = console[type]; // eslint-disable-line no-console
      }
      // Override
      console[type] = this[type].raw; // eslint-disable-line no-console
    }
  }
  restoreConsole() {
    for (const type in this._types) {
      // Restore if backup is available
      if (console['__' + type]) {
        // eslint-disable-line no-console
        console[type] = console['__' + type]; // eslint-disable-line no-console
        delete console['__' + type]; // eslint-disable-line no-console
      }
    }
  }
  wrapStd() {
    this._wrapStream(this.stdout, 'log');
    this._wrapStream(this.stderr, 'log');
  }
  _wrapStream(stream, type) {
    if (!stream) {
      return;
    }

    // Backup original value
    if (!stream.__write) {
      stream.__write = stream.write;
    }

    // Override
    stream.write = data => {
      this[type].raw(String(data).trim());
    };
  }
  restoreStd() {
    this._restoreStream(this.stdout);
    this._restoreStream(this.stderr);
  }
  _restoreStream(stream) {
    if (!stream) {
      return;
    }
    if (stream.__write) {
      stream.write = stream.__write;
      delete stream.__write;
    }
  }
  pauseLogs() {
    paused = true;
  }
  resumeLogs() {
    paused = false;

    // Process queue
    const _queue = queue.splice(0);
    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }
  mockTypes(mockFn) {
    this._mockFn = mockFn || this._mockFn;
    if (typeof this._mockFn !== 'function') {
      return;
    }
    for (const type in this._types) {
      this[type] = this._mockFn(type, this._types[type]) || this[type];
      this[type].raw = this[type];
    }
  }
  _wrapLogFn(defaults, isRaw) {
    return (...args) => {
      if (paused) {
        queue.push([this, defaults, args, isRaw]);
        return;
      }
      return this._logFn(defaults, args, isRaw);
    };
  }
  _logFn(defaults, args, isRaw) {
    if (defaults.level > this.level) {
      return this._async ? Promise.resolve(false) : false;
    }

    // Construct a new log object
    const logObj = Object.assign({
      date: new Date(),
      args: []
    }, defaults);

    // Consume arguments
    if (!isRaw && args.length === 1 && isLogObj(args[0])) {
      Object.assign(logObj, args[0]);
    } else {
      logObj.args = Array.from(args);
    }

    // Aliases
    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }
    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split('\n');
      }
      logObj.args.push('\n' + logObj.additional.join('\n'));
      delete logObj.additional;
    }

    // Normalize type and tag to lowercase
    logObj.type = typeof logObj.type === 'string' ? logObj.type.toLowerCase() : '';
    logObj.tag = typeof logObj.tag === 'string' ? logObj.tag.toLowerCase() : '';

    // Resolve log
    /**
     * @param newLog false if the throttle expired and
     *  we don't want to log a duplicate
     */
    const resolveLog = (newLog = false) => {
      const repeated = this._lastLogCount - this._throttleMin;
      if (this._lastLog && repeated > 0) {
        const args = [...this._lastLog.args];
        if (repeated > 1) {
          args.push(`(repeated ${repeated} times)`);
        }
        this._log({
          ...this._lastLog,
          args
        });
        this._lastLogCount = 1;
      }

      // Log
      if (newLog) {
        this._lastLog = logObj;
        if (this._async) {
          return this._logAsync(logObj);
        } else {
          this._log(logObj);
        }
      }
    };

    // Throttle
    clearTimeout(this._throttleTimeout);
    const diffTime = this._lastLogTime ? logObj.date - this._lastLogTime : 0;
    this._lastLogTime = logObj.date;
    if (diffTime < this._throttle) {
      try {
        const serializedLog = JSON.stringify([logObj.type, logObj.tag, logObj.args]);
        const isSameLog = this._lastLogSerialized === serializedLog;
        this._lastLogSerialized = serializedLog;
        if (isSameLog) {
          this._lastLogCount++;
          if (this._lastLogCount > this._throttleMin) {
            // Auto-resolve when throttle is timed out
            this._throttleTimeout = setTimeout(resolveLog, this._throttle);
            return; // SPAM!
          }
        }
      } catch (_) {
        // Circular References
      }
    }
    resolveLog(true);
  }
  _log(logObj) {
    for (const reporter of this._reporters) {
      reporter.log(logObj, {
        async: false,
        stdout: this.stdout,
        stderr: this.stderr
      });
    }
  }
  _logAsync(logObj) {
    return Promise.all(this._reporters.map(reporter => reporter.log(logObj, {
      async: true,
      stdout: this.stdout,
      stderr: this.stderr
    })));
  }
}

// Legacy support
consola_Consola.prototype.add = consola_Consola.prototype.addReporter;
consola_Consola.prototype.remove = consola_Consola.prototype.removeReporter;
consola_Consola.prototype.clear = consola_Consola.prototype.removeReporter;
consola_Consola.prototype.withScope = consola_Consola.prototype.withTag;
consola_Consola.prototype.mock = consola_Consola.prototype.mockTypes;
consola_Consola.prototype.pause = consola_Consola.prototype.pauseLogs;
consola_Consola.prototype.resume = consola_Consola.prototype.resumeLogs;

// Export class
/* harmony default export */ var consola = (consola_Consola);
// CONCATENATED MODULE: E:/dev/js/enable-vue-devtools/node_modules/consola/src/reporters/browser.js
class BrowserReporter {
  constructor(options) {
    this.options = Object.assign({}, options);
    this.defaultColor = '#7f8c8d'; // Gray
    this.levelColorMap = {
      0: '#c0392b',
      // Red
      1: '#f39c12',
      // Yellow
      3: '#00BCD4' // Cyan
    };
    this.typeColorMap = {
      success: '#2ecc71' // Green
    };
  }
  log(logObj) {
    const consoleLogFn = logObj.level < 1
    // eslint-disable-next-line no-console
    ? console.__error || console.error
    // eslint-disable-next-line no-console
    : logObj.level === 1 && console.warn ? console.__warn || console.warn : console.__log || console.log;

    // Type
    const type = logObj.type !== 'log' ? logObj.type : '';

    // Tag
    const tag = logObj.tag ? logObj.tag : '';

    // Styles
    const color = this.typeColorMap[logObj.type] || this.levelColorMap[logObj.level] || this.defaultColor;
    const style = `
      background: ${color};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `;
    const badge = `%c${[tag, type].filter(Boolean).join(':')}`;

    // Log to the console
    if (typeof logObj.args[0] === 'string') {
      consoleLogFn(`${badge}%c ${logObj.args[0]}`, style,
      // Empty string as style resets to default console style
      '', ...logObj.args.slice(1));
    } else {
      consoleLogFn(badge, style, ...logObj.args);
    }
  }
}
// CONCATENATED MODULE: ./src/logger.js


const pkgName = "enable-vue-devtools";
const logger = new consola({
  reporters: [new BrowserReporter()],
  defaults: {
    tag: pkgName
  }
});
/* harmony default export */ var src_logger = (logger);
// CONCATENATED MODULE: ./src/main.js
/* harmony default export */ var main = (main_main);

const _global = typeof unsafeWindow === 'object' && unsafeWindow || globalThis;

// devtool hook should be ready when <body> exists
let _devtoolHook = _global.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function checkDevtool() {
  _devtoolHook = _global.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  if (!_devtoolHook) {
    // logger.warn('No Vue Devtools hook found', _global.location);
    return false;
  }
  observeVueRoot(function (app, disconnect) {
    emitDevtoolVue2Hooks(app);
  }, function (app, disconnect) {
    emitDevtoolVue3Hooks(app);
  });
  return true;
}
function delay(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
async function main_main(times = 5) {
  for (let i = 0; i < times; i++) {
    if (checkDevtool()) {
      return;
    }
    await delay(5000);
  }
  if (!_devtoolHook) {
    src_logger.warn('No Vue Devtools hook found', _global.location);
  }
}
function emitDevtoolVue2Hooks(app) {
  let Vue = app.constructor;
  const store = app.$store;
  while (Vue.super) {
    // find base Vue
    Vue = Vue.super;
  }
  Vue.config.devtools = true;
  src_logger.info('enabling devtools for Vue instance', app);
  // must re-emit 'init' if this Vue is different with other Vue(s)
  // otherwise this `Vue`'s root instance would not be added to Devtools store
  // https://github.com/vuejs/vue-devtools/blob/933063fd06860464be4bfd8c83ba09d7fc2c753e/packages/app-backend/src/index.js#L218-L225
  _devtoolHook.emit('init', Vue);
  // TODO validate Vuex instance
  if (store) {
    src_logger.info('enabling devtools for Vuex instance', store);
    devtoolStorePlugin(store, _devtoolHook);
  }
}
function emitDevtoolVue3Hooks(app) {
  if (!Array.isArray(_devtoolHook.apps)) return;
  if (_devtoolHook.apps.includes(app)) return;
  let version = app.version;
  if (!version) {
    src_logger.warn('no Vue version detected, fallback to "3.0.0"');
    version = '3.0.0';
  }
  src_logger.info('enabling devtools for Vue 3 instance', app);

  // FIXME: impossible to get those Symbols,
  // https://github.com/vuejs/vue-next/blob/410e7abbbb78e83989ad2e5a1793c290129dfdc7/packages/runtime-core/src/devtools.ts#L38
  const types = {
    Fragment: undefined,
    Text: undefined,
    Comment: undefined,
    Static: undefined
  };
  _devtoolHook.emit('app:init', app, version, types);
  const unmount = app.unmount.bind(app);
  app.unmount = function () {
    _devtoolHook.emit('app:unmount', app);
    unmount();
  };
}
function checkVue2Instance(target) {
  const vue = target && target.__vue__;
  return !!(vue && typeof vue === 'object' && vue._isVue && typeof vue.constructor === 'function');
}
function checkVue3Instance(target) {
  const app = target && target.__vue_app__;
  return !!app;
}
function noop() {}
function observeVueRoot(callbackVue2, callbackVue3) {
  if (typeof callbackVue2 !== 'function') {
    callbackVue2 = noop;
  }
  if (typeof callbackVue3 !== 'function') {
    callbackVue3 = noop;
  }
  const vue2RootSet = new WeakSet();
  const vue3RootSet = new WeakSet();
  const observer = new MutationObserver((mutations, observer) => {
    const disconnect = observer.disconnect.bind(observer);
    for (const {
      target
    } of mutations) {
      if (!target) {
        return;
      } else if (checkVue2Instance(target)) {
        const inst = target.__vue__;
        const root = inst.$parent ? inst.$root : inst;
        if (vue2RootSet.has(root)) {
          // already callback, continue loop
          continue;
        }
        vue2RootSet.add(root);
        callbackVue2(root, disconnect);
      } else if (checkVue3Instance(target)) {
        const app = target.__vue_app__;
        if (vue3RootSet.has(app)) {
          // already callback, continue loop
          continue;
        }
        vue3RootSet.add(app);
        callbackVue3(app, disconnect);
      }
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    subtree: true,
    childList: true
  });
  return observer;
}
function devtoolStorePlugin(store, devtoolHook) {
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', targetState => {
    store.replaceState(targetState);
  });
  store.subscribe((mutation, state) => {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}
// CONCATENATED MODULE: ./src/index.js



try {
  main();
  if (false) {}
} catch (e) {
  src_logger.error(e);
}

/***/ })
/******/ ]);