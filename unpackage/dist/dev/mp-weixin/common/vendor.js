(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"uni-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 1)))

/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"uni-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"uni-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"uni-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"uni-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 1)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 1)))

/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/pages.json ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/*!**********************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/ald-stat/ald-stat.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, n) { true ? module.exports = n() : undefined;}(this, function () {function t() {this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;var t = this;this.push = function (n) {this.tasks.push(new Promise(function (e, o) {var a = function a() {t.activeCount++, n().then(function (t) {e(t);}).then(function () {t.next();});};t.activeCount < t.concurrency ? a() : t.queue.push(a);}));}, this.all = function () {return Promise.all(this.tasks);}, this.next = function () {t.activeCount--, t.queue.length > 0 && t.queue.shift()();};}function n() {this.request = [], this.updata = !1, this.push = function (t) {if (this.request.length >= 8 && !this.updata && (this.updata = !0, e()), this.request.length >= 10) {var _n = this.request.shift();_n().then(function (t) {}).catch(function (t) {}), this.request.push(t);} else this.request.push(t);}, this.concat = function () {this.request.map(function (t) {wx.Queue.push(t);}), this.request = [];};}function e() {"function" == typeof _t && "" === K && _t().then(function (t) {28 === t.length && (K = t, wx.setStorageSync("aldstat_op", t));});}function o(t) {this.app = t;}function a(t) {B = m(), V = t, ft = t.scene, this.aldstat = new o(this);}function r(t) {e();var n;if (n = t.scene != ft, ft = t.scene, z = 0, V = t, F = t.query.ald_share_src, X = t.query.aldsrc || "", Y = t.query.ald_share_src, ut || ht || vt || (W = !1), ut = !1, (0 !== Q && Date.now() - Q > 3e4 || n) && (ht || (T = m(), N = Date.now(), wt = 0)), 0 !== Q && Date.now() - Q < 3e4 && (at = !0), t.query.ald_share_src && "1044" == t.scene && t.shareTicket ? wx.getShareInfo({ shareTicket: t.shareTicket, success: function success(t) {tt = t, I("event", "ald_share_click", JSON.stringify(t));} }) : t.query.ald_share_src && I("event", "ald_share_click", 1), "" === nt && wx.getSetting({ withCredentials: !0, success: function success(t) {if (t.authSetting["scope.userInfo"]) {dt && (dt = !1, wx.getUserInfo({ withCredentials: !0, success: function success(t) {var n = v();nt = t, n.ufo = y(t), G = _(t.userInfo.avatarUrl.split("/")), g(n);} }));}} }), D("app", "show"), "" === K) {var _t2 = wx.getAccountInfoSync().miniProgram.appId;wx.login({ success: function success(n) {wx.request({ url: "https://log.aldwx.com/authorize/mini_program_openid", data: { ai: _t2, uuid: $, jc: n.code, reqid: "1" }, success: function success(t) {t.data.code || (K = t.data.data.openid, wx.setStorageSync("aldstat_op", t.data.data.openid));} });}, fail: function fail(t) {} });}}function s() {e(), Q = Date.now(), "" === nt && wx.getSetting({ success: function success(t) {t.authSetting["scope.userInfo"] && dt && (dt = !1, wx.getUserInfo({ withCredentials: !0, success: function success(t) {nt = t, G = _(t.userInfo.avatarUrl.split("/"));var n = v();n.ufo = y(t), g(n);} }));} }), D("app", "hide");}function i(t) {Z++, I("event", "ald_error_message", t);}function c(t) {it = t;}function u() {pt = Date.now(), rt = j ? this.$mp.page.route : this.route, "" === nt && wx.getSetting({ success: function success(t) {t.authSetting["scope.userInfo"] && dt && (dt = !1, wx.getUserInfo({ withCredentials: !0, success: function success(t) {nt = t, G = _(t.userInfo.avatarUrl.split("/"));var n = v();n.ufo = y(t), g(n);} }));} }), q("page", "show"), at = !1;}function h() {st = rt, wt = Date.now() - pt;}function f() {st = rt, wt = Date.now() - pt;}function l() {I("event", "ald_pulldownrefresh", 1);}function d() {I("event", "ald_reachbottom", 1);}function p(t) {ht = !0;var n = S(t.path),e = {};for (var o in V.query) {"ald_share_src" !== o && "ald_share_op" !== o || (e[o] = V.query[o]);}var a = "";if (a = t.path.indexOf("?") == -1 ? t.path + "?" : t.path.substr(0, t.path.indexOf("?")) + "?", "" !== n) for (var o in n) {e[o] = n[o];}e.ald_share_src ? e.ald_share_src.indexOf($) == -1 && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + $) : e.ald_share_src = $, C.useOpen && (e.ald_share_op ? e.ald_share_op.indexOf(K) == -1 && e.ald_share_op.length < 200 && (e.ald_share_op = e.ald_share_op + "," + K) : e.ald_share_op = K);for (var r in e) {r.indexOf("ald") == -1 && (a += r + "=" + e[r] + "&");}return t.path = a + (C.useOpen ? "ald_share_op=" + e.ald_share_op + "&" : "") + "ald_share_src=" + e.ald_share_src, I("event", "ald_share_status", t), t;}function w() {function t() {return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);}return t() + t() + t() + t() + t() + t() + t() + t();}function g(t) {function n() {return new Promise(function (n, e) {var o = { AldStat: "MiniApp-Stat", se: J || "", op: K || "", img: G };"" === E || (o.ai = E), wx.request({ url: "https://" + H + ".aldwx.com/d.html", data: t, header: o, method: "GET", success: function success(t) {n(200 == t.statusCode ? "" : "status error");}, fail: function fail() {n("fail");} });});}z++, t.at = T, t.uu = $, t.v = U, t.ak = C.app_key.replace(/(\t)|(\s)/g, ""), t.wsr = V, t.ifo = W, t.rq_c = z, t.ls = B, t.te = b, t.et = Date.now(), t.st = Date.now(), C.useOpen ? "" === K ? lt.push(n) : (wx.Queue.push(n), lt.concat()) : wx.Queue.push(n);}function v() {var t = {};for (var n in et) {t[n] = et[n];}return t;}function _(t) {for (var n = "", e = 0; e < t.length; e++) {t[e].length > n.length && (n = t[e]);}return n;}function m() {return "" + Date.now() + Math.floor(1e7 * Math.random());}function y(t) {var n = {};for (var e in t) {"rawData" != e && "errMsg" != e && (n[e] = t[e]);}return n;}function S(t) {if (t.indexOf("?") == -1) return "";var n = {};return t.split("?")[1].split("&").forEach(function (t) {var e = t.split("=")[1];n[t.split("=")[0]] = e;}), n;}function x(t) {for (var n in t) {if ("object" == typeof t[n] && null !== t[n]) return !0;}return !1;}function D(t, n) {var e = v();e.ev = t, e.life = n, e.ec = Z, e.dr = Date.now() - N, "show" == n && (e.uo = C.useOpen), X && (e.qr = X, e.sr = X), F && (e.usr = F), g(e);}function q(t, n) {var e = v();e.ev = t, e.life = n, e.pp = rt, e.pc = st, e.dr = Date.now() - N, (ht || vt) && (e.so = 1), vt = !1, ht = !1, it && "{}" != JSON.stringify(it) && (e.ag = it), X && (e.qr = X, e.sr = X), F && (e.usr = F), at && (e.ps = 1), ot ? e.pdr = wt : (ct = rt, ot = !0, e.ifp = ot, e.fp = rt, e.pdr = 0), g(e);}function I(t, n, e) {var o = v();o.ev = t, o.tp = n, o.dr = Date.now() - N, e && (o.ct = e), g(o);}function A(t, n, e) {if (t[n]) {var o = t[n];t[n] = function (t) {e.call(this, t, n), o.call(this, t);};} else t[n] = function (t) {e.call(this, t, n);};}function O(t) {var n = {};for (var e in t) {"onLaunch" !== e && "onShow" !== e && "onHide" !== e && "onError" !== e && (n[e] = t[e]);}return n.onLaunch = function (n) {a.call(this, n), "function" == typeof t.onLaunch && t.onLaunch.call(this, n);}, n.onShow = function (n) {r.call(this, n), t.onShow && "function" == typeof t.onShow && t.onShow.call(this, n);}, n.onHide = function () {s.call(this), t.onHide && "function" == typeof t.onHide && t.onHide.call(this);}, n.onError = function (n) {i.call(this, n), t.onError && "function" == typeof t.onError && t.onError.call(this, n);}, n;}function M(t) {var n = {};for (var e in t) {"onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (n[e] = t[e]);}return n.onLoad = function (n) {c.call(this, n), "function" == typeof t.onLoad && t.onLoad.call(this, n);}, n.onShow = function (n) {u.call(this), "function" == typeof t.onShow && t.onShow.call(this, n);}, n.onHide = function (n) {h.call(this), "function" == typeof t.onHide && t.onHide.call(this, n);}, n.onUnload = function (n) {f.call(this), "function" == typeof t.onUnload && t.onUnload.call(this, n);}, n.onReachBottom = function (n) {d(), t.onReachBottom && "function" == typeof t.onReachBottom && t.onReachBottom.call(this, n);}, n.onPullDownRefresh = function (n) {l(), t.onPullDownRefresh && "function" == typeof t.onPullDownRefresh && t.onPullDownRefresh.call(this, n);}, t.onShareAppMessage && "function" == typeof t.onShareAppMessage && (n.onShareAppMessage = function (n) {var e = t.onShareAppMessage.call(this, n);return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), p.call(this, e);}), n;}function P(t) {return App(O(t));}function k(t) {return Page(M(t));}function L(t) {return j = !0, O(t);}function R(t) {return M(t);}var C = __webpack_require__(/*! ./ald-stat-conf */ 7);void 0 === wx.Queue && (wx.Queue = new t(), wx.Queue.all()), "" === C.app_key && console.error("请在ald-stat-conf.js文件中填写小程序统计/广告监测平台创建小程序后生成的app_key，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南！"), C.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户OpendID则不会上报数据，上传方式：http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南-上传OpenID！");var U = "7.3.8",H = "log",b = "wx",E = function () {return void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function (t) {return t.charCodeAt(0) + 9;}).join("-");}(),j = !1,T = m(),B = "",N = Date.now(),Q = 0,J = "",K = function () {var t = "";try {t = wx.getStorageSync("aldstat_op");} catch (t) {}return t;}(),G = "",z = 0,V = "",W = "",$ = function () {var t = "";try {t = wx.getStorageSync("aldstat_uuid");} catch (n) {t = "uuid_getstoragesync";}if (t) W = !1;else {t = w();try {wx.setStorageSync("aldstat_uuid", t), W = !0;} catch (t) {wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");}}return t;}(),F = "",X = "",Y = "",Z = 0,tt = "",nt = "",et = {},ot = !1,at = !1,rt = "",st = "",it = "",ct = "",ut = !0,ht = !1,ft = "",lt = new n(),dt = !0,pt = 0,wt = 0,gt = [{ name: "scanCode" }, { name: "chooseAddress" }, { name: "chooseImage" }, { name: "previewImage" }, { name: "chooseInvoiceTitle" }, { name: "chooseInvoice" }],vt = !1;!function () {gt.forEach(function (t) {t.fn = wx[t.name];var n = t.name;try {Object.defineProperty(wx, n, { get: function get() {return vt = !0, t.fn;} });} catch (t) {}});}();var _t = "";!function () {wx.request({ url: "https://" + H + ".aldwx.com/config/app.json", header: { AldStat: "MiniApp-Stat" }, method: "GET", success: function success(t) {200 === t.statusCode && (U < t.data.version && console.warn("您的SDK不是最新版本，部分功能不可用，请尽快前往 http://tj.aldwx.com/downSDK 升级"), t.data.warn && console.warn(t.data.warn), t.data.error && console.error(t.data.error));} });}(), wx.aldstat = new o("");try {var mt = wx.getSystemInfoSync();et.br = mt.brand, et.pm = mt.model, et.pr = mt.pixelRatio, et.ww = mt.windowWidth, et.wh = mt.windowHeight, et.lang = mt.language, et.wv = mt.version, et.wvv = mt.platform, et.wsdk = mt.SDKVersion, et.sv = mt.system;} catch (t) {}wx.getNetworkType({ success: function success(t) {et.nt = t.networkType;} }), wx.getSetting({ success: function success(t) {t.authSetting["scope.userLocation"] ? wx.getLocation({ type: "wgs84", success: function success(t) {et.lat = t.latitude, et.lng = t.longitude, et.spd = t.speed;} }) : C.getLocation && wx.getLocation({ type: "wgs84", success: function success(t) {et.lat = t.latitude, et.lng = t.longitude, et.spd = t.speed;} });} }), o.prototype.sendEvent = function (t, n) {if ("" !== t && "string" == typeof t && t.length <= 255) {if ("string" == typeof n && n.length <= 255) I("event", t, n);else if ("object" == typeof n) {if (JSON.stringify(n).length >= 255) return void console.error("自定义事件参数不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");if (x(n)) return void console.error("事件参数内部只支持Number、String等类型，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");I("event", t, JSON.stringify(n));} else void 0 === n ? I("event", t, !1) : console.error("事件参数必须为String、Object类型，且参数长度不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");} else console.error("事件名称必须为String类型且不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");}, o.prototype.sendSession = function (t) {if ("" === t || !t) return void console.error("请传入从后台获取的session_key");J = t;var n = v();n.tp = "session", n.ct = "session", n.ev = "event", "" === nt ? wx.getSetting({ success: function success(t) {t.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function success(t) {n.ufo = y(t), G = _(t.userInfo.avatarUrl.split("/")), "" !== tt && (n.gid = tt), g(n);} }) : "" !== tt && (n.gid = tt, g(n));} }) : (n.ufo = nt, "" !== tt && (n.gid = tt), g(n));}, o.prototype.sendOpenid = function (t) {if ("" === t || !t || 28 !== t.length) return void console.error("OpenID不符合规则，请参考接入文档 http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南！");K = t, wx.setStorageSync("aldstat_op", t);var n = v();n.tp = "openid", n.ev = "event", n.ct = "openid", g(n);}, o.prototype.setOpenid = function (t) {"function" == typeof t && (_t = t, e());};return C.plugin ? { App: P, Page: k, MpvueApp: L, MpvuePage: R } : function (t) {!function () {var t = App,n = Page,e = Component;App = function App(n) {A(n, "onLaunch", a), A(n, "onShow", r), A(n, "onHide", s), A(n, "onError", i), t(n);}, Page = function Page(t) {var e = t.onShareAppMessage;A(t, "onLoad", c), A(t, "onUnload", f), A(t, "onShow", u), A(t, "onHide", h), A(t, "onReachBottom", d), A(t, "onPullDownRefresh", l), void 0 !== e && null !== e && (t.onShareAppMessage = function (t) {if (void 0 !== e) {var n = e.call(this, t);return void 0 === n ? (n = {}, n.path = rt) : void 0 === n.path && (n.path = rt), p(n);}}), n(t);}, Component = function Component(t) {try {var n = t.methods.onShareAppMessage;A(t.methods, "onLoad", c), A(t.methods, "onUnload", f), A(t.methods, "onShow", u), A(t.methods, "onHide", h), A(t.methods, "onReachBottom", d), A(t.methods, "onPullDownRefresh", l), void 0 !== n && null !== n && (t.methods.onShareAppMessage = function (t) {if (void 0 !== n) {var e = n.call(this, t);return void 0 === e ? (e = {}, e.path = rt) : void 0 === e.path && (e.path = rt), p(e);}}), e(t);} catch (n) {e(t);}};}();}();});

/***/ }),
/* 7 */
/*!***************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/ald-stat/ald-stat-conf.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 当前为微信小程序SDK，版本号V7.3.8
// 具体配置项填写方式可参考doc.aldwx.com-小程序统计平台或广告监测平台-快速接入指南
exports.app_key = "079a88f0a364f055335c2e588472671c"; // 在此处填写小程序统计/广告监测平台创建小程序后生成的app_key。必填项
exports.plugin = false; // 您的小程序中是否使用了插件。根据是否启用插件会有不同的接入方式，请参考文档。默认不更改
exports.useOpen = false; // 开启OpenID上报选项，需要额外进行配置，具体参考文档。默认不更改

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 13);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

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
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
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

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
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
        var i = -1, next = function next() {
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
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
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
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
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
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 14 */
/*!****************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/uuid-js/lib/uuid.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * UUID-js: A js library to generate and parse UUIDs, TimeUUIDs and generate
 * TimeUUID based on dates for range selections.
 * @see http://www.ietf.org/rfc/rfc4122.txt
 **/

function UUIDjs() {
};

UUIDjs.maxFromBits = function (bits) {
  return Math.pow(2, bits);
};

UUIDjs.limitUI04 = UUIDjs.maxFromBits(4);
UUIDjs.limitUI06 = UUIDjs.maxFromBits(6);
UUIDjs.limitUI08 = UUIDjs.maxFromBits(8);
UUIDjs.limitUI12 = UUIDjs.maxFromBits(12);
UUIDjs.limitUI14 = UUIDjs.maxFromBits(14);
UUIDjs.limitUI16 = UUIDjs.maxFromBits(16);
UUIDjs.limitUI32 = UUIDjs.maxFromBits(32);
UUIDjs.limitUI40 = UUIDjs.maxFromBits(40);
UUIDjs.limitUI48 = UUIDjs.maxFromBits(48);

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
// @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

UUIDjs.randomUI04 = function () {
  return getRandomInt(0, UUIDjs.limitUI04 - 1);
};
UUIDjs.randomUI06 = function () {
  return getRandomInt(0, UUIDjs.limitUI06 - 1);
};
UUIDjs.randomUI08 = function () {
  return getRandomInt(0, UUIDjs.limitUI08 - 1);
};
UUIDjs.randomUI12 = function () {
  return getRandomInt(0, UUIDjs.limitUI12 - 1);
};
UUIDjs.randomUI14 = function () {
  return getRandomInt(0, UUIDjs.limitUI14 - 1);
};
UUIDjs.randomUI16 = function () {
  return getRandomInt(0, UUIDjs.limitUI16 - 1);
};
UUIDjs.randomUI32 = function () {
  return getRandomInt(0, UUIDjs.limitUI32 - 1);
};
UUIDjs.randomUI40 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 40 - 30)) * (1 << 30);
};
UUIDjs.randomUI48 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);
};

UUIDjs.paddedString = function (string, length, z) {
  string = String(string);
  z = !z ? '0' : z;
  var i = length - string.length;
  for (; i > 0; i >>>= 1, z += z) {
    if (i & 1) {
      string = z + string;
    }
  }
  return string;
};

UUIDjs.prototype.fromParts = function (timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {
  this.version = timeHiAndVersion >> 12 & 0xF;
  this.hex = UUIDjs.paddedString(timeLow.toString(16), 8) +
  '-' +
  UUIDjs.paddedString(timeMid.toString(16), 4) +
  '-' +
  UUIDjs.paddedString(timeHiAndVersion.toString(16), 4) +
  '-' +
  UUIDjs.paddedString(clockSeqHiAndReserved.toString(16), 2) +
  UUIDjs.paddedString(clockSeqLow.toString(16), 2) +
  '-' +
  UUIDjs.paddedString(node.toString(16), 12);
  return this;
};

UUIDjs.prototype.toString = function () {
  return this.hex;
};
UUIDjs.prototype.toURN = function () {
  return 'urn:uuid:' + this.hex;
};

UUIDjs.prototype.toBytes = function () {
  var parts = this.hex.split('-');
  var ints = [];
  var intPos = 0;
  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i].length; j += 2) {
      ints[intPos++] = parseInt(parts[i].substr(j, 2), 16);
    }
  }
  return ints;
};

UUIDjs.prototype.equals = function (uuid) {
  if (!(uuid instanceof UUID)) {
    return false;
  }
  if (this.hex !== uuid.hex) {
    return false;
  }
  return true;
};

UUIDjs.getTimeFieldValues = function (time) {
  var ts = time - Date.UTC(1582, 9, 15);
  var hm = ts / 0x100000000 * 10000 & 0xFFFFFFF;
  return { low: (ts & 0xFFFFFFF) * 10000 % 0x100000000,
    mid: hm & 0xFFFF, hi: hm >>> 16, timestamp: ts };
};

UUIDjs._create4 = function () {
  return new UUIDjs().fromParts(
  UUIDjs.randomUI32(),
  UUIDjs.randomUI16(),
  0x4000 | UUIDjs.randomUI12(),
  0x80 | UUIDjs.randomUI06(),
  UUIDjs.randomUI08(),
  UUIDjs.randomUI48());

};

UUIDjs._create1 = function () {
  var now = new Date().getTime();
  var sequence = UUIDjs.randomUI14();
  var node = (UUIDjs.randomUI08() | 1) * 0x10000000000 + UUIDjs.randomUI40();
  var tick = UUIDjs.randomUI04();
  var timestamp = 0;
  var timestampRatio = 1 / 4;

  if (now != timestamp) {
    if (now < timestamp) {
      sequence++;
    }
    timestamp = now;
    tick = UUIDjs.randomUI04();
  } else if (Math.random() < timestampRatio && tick < 9984) {
    tick += 1 + UUIDjs.randomUI04();
  } else {
    sequence++;
  }

  var tf = UUIDjs.getTimeFieldValues(timestamp);
  var tl = tf.low + tick;
  var thav = tf.hi & 0xFFF | 0x1000;

  sequence &= 0x3FFF;
  var cshar = sequence >>> 8 | 0x80;
  var csl = sequence & 0xFF;

  return new UUIDjs().fromParts(tl, tf.mid, thav, cshar, csl, node);
};

UUIDjs.create = function (version) {
  version = version || 4;
  return this['_create' + version]();
};

UUIDjs.fromTime = function (time, last) {
  last = !last ? false : last;
  var tf = UUIDjs.getTimeFieldValues(time);
  var tl = tf.low;
  var thav = tf.hi & 0xFFF | 0x1000; // set version '0001'
  if (last === false) {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0, 0, 0);
  } else {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0x80 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1);
  }
};

UUIDjs.firstFromTime = function (time) {
  return UUIDjs.fromTime(time, false);
};
UUIDjs.lastFromTime = function (time) {
  return UUIDjs.fromTime(time, true);
};

UUIDjs.fromURN = function (strId) {
  var r,p = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i;
  if (r = p.exec(strId)) {
    return new UUIDjs().fromParts(parseInt(r[1], 16), parseInt(r[2], 16),
    parseInt(r[3], 16), parseInt(r[4], 16),
    parseInt(r[5], 16), parseInt(r[6], 16));
  }
  return null;
};

UUIDjs.fromBytes = function (ints) {
  if (ints.length < 5) {
    return null;
  }
  var str = '';
  var pos = 0;
  var parts = [4, 2, 2, 2, 6];
  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i]; j++) {
      var octet = ints[pos++].toString(16);
      if (octet.length == 1) {
        octet = '0' + octet;
      }
      str += octet;
    }
    if (parts[i] !== 6) {
      str += '-';
    }
  }
  return UUIDjs.fromURN(str);
};

UUIDjs.fromBinary = function (binary) {
  var ints = [];
  for (var i = 0; i < binary.length; i++) {
    ints[i] = binary.charCodeAt(i);
    if (ints[i] > 255 || ints[i] < 0) {
      throw new Error('Unexpected byte in binary data.');
    }
  }
  return UUIDjs.fromBytes(ints);
};

// Aliases to support legacy code. Do not use these when writing new code as
// they may be removed in future versions!
UUIDjs.new = function () {
  return this.create(4);
};
UUIDjs.newTS = function () {
  return this.create(1);
};

module.exports = UUIDjs;

/***/ }),
/* 15 */
/*!*******************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/wx.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                     * wx
                                                                                                     */
function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

var wxSdk = {
  init: function init() {var _this = this;
    var request = wx.request;
    Object.keys(wx).forEach(function (key) {
      var tempFunc = wx[key];
      _this[key] = tempFunc;
      if (isFunction(tempFunc) && !/Sync$/.test(key) && !/create/.test(key)) {
        Object.defineProperty(_this, key, {
          value: function value(config) {
            if (isFunction(config)) {
              tempFunc(config);
              return false;
            }
            config = config || {};
            return new Promise(function (resolve) {
              var success = config.success,fail = config.fail;
              config.success = function (result) {
                console.log(result);
                resolve(result);
                success && success(result);
              };
              config.fail = function (result) {
                console.log(result);
                resolve(result);
                fail && fail(result);
              };
              tempFunc(config);
            });
          },
          writable: true });

      }
    });
    Object.defineProperty(this, 'request', {
      value: function value(config) {
        config = config || {};
        return new Promise(function (resolve) {
          console.info(config.data);
          var success = config.success,fail = config.fail;
          config.success = function (result) {
            success && success(result);
            resolve(result);
          };
          config.fail = function (result) {
            fail && fail(result);
            resolve(result);
          };
          request(config);
        });
      },
      writable: true });

    var showLoading = wx.showLoading;
    Object.defineProperty(this, 'showLoading', {
      value: function value(config) {
        if (isObject(config)) {
          showLoading(config);
        } else {
          showLoading({
            title: config || '加载中...' });

        }
      } });

    var showToast = wx.showToast;
    Object.defineProperty(this, 'showToast', {
      value: function value(config) {
        if (isObject(config)) {
          config.duration = config.duration || 3000,
          showToast(config);
        } else {
          showToast({
            title: config,
            icon: 'none',
            duration: 13000 });

        }
      } });

    var showModal = wx.showModal;
    Object.defineProperty(this, 'showModal', {
      value: function value(config) {
        config.confirmColor = '#111111';
        config.cancelColor = '#777777';
        return new Promise(function (resolve) {
          var success = config.success,fail = config.fail;
          config.success = function (result) {
            success && success(result);
            resolve(result);
          };
          config.fail = function (result) {
            fail && fail(result);
            resolve(result);
          };
          showModal(config);
        });
      } });

  } };var _default =

wxSdk;exports.default = _default;

/***/ }),
/* 16 */
/*!***********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/config/axios.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 17));
var _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 44));
var _env = _interopRequireDefault(__webpack_require__(/*! @/config/env */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_axios.default.defaults.baseURL = _env.default.API;

_axios.default.interceptors.request.use(function (request) {
  var headers = {
    "content-type": "application/json;charset=utf-8" };

  request.headers = Object.assign(headers, request.headers);
  return request;
});
_axios.default.interceptors.response.use(function (response) {
  // if(response.data.result.errorCode == 999){
  //   //XIU.goLogin();
  // }
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
// 用Axios的适配器把通讯转换为底层的微信request api
_axios.default.defaults.adapter = function (config) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: config.url,
      data: Object.assign({
        deviceNumber: wx.getStorageSync('deviceNumber'),
        sessionId: _index.default.state.login.sessionId
        // sessionId: '06e35f57-ca34-4fc2-9a4e-e89877e862a0',
      }, config.data ? JSON.parse(config.data) : config.params),
      header: config.headers,
      method: config.method,
      success: function success(res) {
        console.log(res.data);
        resolve({
          config: config,
          headers: res.header,
          status: res.statusCode,
          data: res.data,
          cookies: res.cookies });

      },
      fail: function fail(error) {
        reject(error);
      } });

  });
};var _default =

_axios.default;exports.default = _default;

/***/ }),
/* 17 */
/*!***********************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 18);

/***/ }),
/* 18 */
/*!***************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/axios.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 19);
var bind = __webpack_require__(/*! ./helpers/bind */ 20);
var Axios = __webpack_require__(/*! ./core/Axios */ 22);
var defaults = __webpack_require__(/*! ./defaults */ 23);

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 41);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 42);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 38);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 43);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 19 */
/*!***************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/utils.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 20);
var isBuffer = __webpack_require__(/*! is-buffer */ 21);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim };

/***/ }),
/* 20 */
/*!**********************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/bind.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 21 */
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 22 */
/*!********************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/Axios.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ 23);
var utils = __webpack_require__(/*! ./../utils */ 19);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 35);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 36);

/**
                                                     * Create a new instance of Axios
                                                     *
                                                     * @param {Object} instanceConfig The default config for the instance
                                                     */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0] },
    arguments[1]);
  }

  config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),
/* 23 */
/*!******************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/defaults.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 19);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 27);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 27);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };


defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*' } };



utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 24)))

/***/ }),
/* 24 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 25);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 25 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 24)))

/***/ }),
/* 26 */
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 19);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 27 */
/*!**********************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/adapters/xhr.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);
var settle = __webpack_require__(/*! ./../core/settle */ 28);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 31);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 32);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 33);
var createError = __webpack_require__(/*! ../core/createError */ 29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 34);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 28 */
/*!*********************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/settle.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 29);

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),
/* 29 */
/*!**************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/createError.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 30);

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 30 */
/*!***************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/enhanceError.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 31 */
/*!**************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/buildURL.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 32 */
/*!******************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 33 */
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 34 */
/*!*************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/cookies.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),
/* 35 */
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/InterceptorManager.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 36 */
/*!******************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/dispatchRequest.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);
var transformData = __webpack_require__(/*! ./transformData */ 37);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 38);
var defaults = __webpack_require__(/*! ../defaults */ 23);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 39);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 40);

/**
                                                        * Throws a `Cancel` if cancellation has been requested.
                                                        */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers || {});


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 37 */
/*!****************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/core/transformData.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 19);

/**
                                    * Transform the data for a request or a response
                                    *
                                    * @param {Object|String} data The data to be transformed
                                    * @param {Array} headers The headers for the request or response
                                    * @param {Array|Function} fns A single function or Array of functions
                                    * @returns {*} The resulting transformed data
                                    */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 38 */
/*!*************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/cancel/isCancel.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 39 */
/*!*******************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),
/* 40 */
/*!*****************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/combineURLs.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),
/* 41 */
/*!***********************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/cancel/Cancel.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 42 */
/*!****************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/cancel/CancelToken.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 41);

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),
/* 43 */
/*!************************************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/node_modules/axios/lib/helpers/spread.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 44 */
/*!**********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/store/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 45));
var _login = _interopRequireDefault(__webpack_require__(/*! ./modules/login */ 46));
var _user = _interopRequireDefault(__webpack_require__(/*! ./modules/user */ 48));
var _checkout = _interopRequireDefault(__webpack_require__(/*! ./modules/checkout */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);var _default =
new _vuex.default.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login: _login.default,
    user: _user.default,
    checkout: _checkout.default },

  strict: false });exports.default = _default;

/***/ }),
/* 45 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 1)))

/***/ }),
/* 46 */
/*!******************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/store/modules/login.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));


var _wx = _interopRequireDefault(__webpack_require__(/*! utils/wx */ 15));
var _mutationTypes = _interopRequireDefault(__webpack_require__(/*! @/store/mutation-types.js */ 47));
var _axios = _interopRequireDefault(__webpack_require__(/*! @/config/axios.js */ 16));var _mutations;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  state: {
    sessionId: "",
    session_key: '',
    openid: '',
    unionid: '' },

  getters: {
    isLogin: function isLogin(state) {
      return !!state.sessionId;
    } },

  mutations: (_mutations = {}, _defineProperty(_mutations,
  _mutationTypes.default.LOGIN.SET_WX_AUTH_ID, function (state, payload) {
    payload = payload || {};
    if (payload.openId) {
      state.openid = payload.openId;
      _wx.default.setStorageSync('openid', state.openId);
    }

    if (payload.unionId) {
      state.unionid = payload.unionId;
      _wx.default.setStorageSync('unionid', state.unionId);
    }

    if (payload.wxSessionKey) {
      state.session_key = payload.wxSessionKey;
      _wx.default.setStorageSync('session_key', state.wxSessionKey);
    }
    if (payload.sessionId) {
      state.sessionId = payload.sessionId;
      _wx.default.setStorageSync('sessionId', state.sessionId);
    }
  }), _defineProperty(_mutations,
  _mutationTypes.default.LOGIN.SET_SESSION_ID, function (state, payload) {
    state.sessionId = payload;
  }), _mutations),

  actions: {
    login: function login(ctx) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$wx$login, code, authData;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _wx.default.login());case 2:_yield$wx$login = _context.sent;code = _yield$wx$login.code;_context.next = 6;return (
                  _axios.default.get("/user/wxcode.login", {
                    params: {
                      jscode: code } }));case 6:authData = _context.sent;


                ctx.commit(_mutationTypes.default.LOGIN.SET_WX_AUTH_ID, authData.data);
                App.updateCartNum();case 9:case "end":return _context.stop();}}}, _callee);}))();
    } } };exports.default = _default;

/***/ }),
/* 47 */
/*!*******************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/store/mutation-types.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  LOGIN: {
    SET_SESSION_ID: "LOGIN.SET_SESSION_ID",
    SET_WX_AUTH_ID: 'LOGIN.SET_WX_AUTH_ID' },

  USER: {
    SET_USER_INFO: "USER.SET_USER_INFO",
    SET_WX_USER_INFO: "USER.SET_WX_USER_INFO" },

  CHECKOUT: {
    SET_SETTLEMENT: "CHECKOUT.SET_SETTLEMENT",
    SET_ADDRESS: "CHECKOUT.SET_ADDRESS",
    SET_TYPE: "CHECKOUT.SET_TYPE",
    SET_INVOICE: "CHECKOUT.SET_INVOICE",
    SET_COUPON: "CHECKOUT.SET_COUPON",
    SET_COUPON_DATA: "CHECKOUT.SET_COUPON_DATA",
    SET_REMARK: "CHECKOUT.SET_REMARK",
    CHANGE_REMARK: "CHECKOUT.CHANGE_REMARK",
    RESET_STATE: "CHECKOUT.RESET_STATE",
    SET_DIRECT_DATA: "CHECKOUT.SET_DIRECT_DATA",
    SET_BALANCE: 'CHECKOUT.SET_BALANCE',
    SET_BALANCE_STATE: 'CHECKOUT.SET_BALANCE_STATE' } };

/***/ }),
/* 48 */
/*!*****************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/store/modules/user.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _mutationTypes = _interopRequireDefault(__webpack_require__(/*! @/store/mutation-types */ 47));var _mutations;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  state: {
    userInfo: null, //  平台用户数据
    wxUserInfo: null //微信用户信息
  },
  getters: {},
  mutations: (_mutations = {}, _defineProperty(_mutations,
  _mutationTypes.default.USER.SET_USER_INFO, function (state, userInfo) {
    userInfo.age = userInfo.age || '';
    userInfo.gender = userInfo.gender || '';
    state.userInfo = userInfo;
  }), _defineProperty(_mutations,
  _mutationTypes.default.USER.SET_WX_USER_INFO, function (state, payload) {
    state.wxUserInfo = payload;
  }), _defineProperty(_mutations,
  _mutationTypes.default.USER.SET_MODE, function (state, mode) {
    state.mode = mode;
  }), _mutations),

  actions: {
    getUserData: function getUserData(ctx) {

    } } };exports.default = _default;

/***/ }),
/* 49 */
/*!*********************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/store/modules/checkout.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));


var _wx = _interopRequireDefault(__webpack_require__(/*! utils/wx */ 15));
var _lodash = _interopRequireDefault(__webpack_require__(/*! @/utils/lodash */ 50));
var _mutationTypes = _interopRequireDefault(__webpack_require__(/*! @/store/mutation-types.js */ 47));
var _axios = _interopRequireDefault(__webpack_require__(/*! @/config/axios.js */ 16));var _mutations;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var initState = {
  type: 1,
  addressId: null,
  invoice: null,
  couponId: null,
  coupon: null,
  remarkList: [],
  couponData: null,
  settlement: null,
  num: 0,
  skuId: null,
  useBalanceState: false };


function invoiceType(type) {
  switch (type) {
    case 0:
      return '电子普通发票';
    case 1:
      return '增值专用发票';}

}

function invoiceTitle(type) {
  switch (type) {
    case 0:
      return '个人';
    case 1:
      return '单位';}

}

function invoiceContent(type) {
  switch (type) {
    case 1:
      return '服装、鞋帽';
    case 2:
      return '箱包';
    case 3:
      return '礼品、办公用品';
    case 4:
      return '订单商品明细';}

}var _default =

{
  state: _lodash.default.cloneDeep(initState),
  getters: {},
  mutations: (_mutations = {}, _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_SETTLEMENT, function (state, settlement) {
    state.settlement = settlement;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_DIRECT_DATA, function (state, _ref) {var num = _ref.num,skuId = _ref.skuId;
    state.num = num;
    state.skuId = skuId;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_ADDRESS, function (state, addressId) {
    if (addressId != state.addressId) {
      state.addressId = addressId;
      Store.dispatch('getCheckoutData');
    }
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_TYPE, function (state, type) {
    state.type = type;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_INVOICE, function (state, invoice) {
    invoice.showContent = invoiceTitle(invoice.applicantType) + '-' + invoiceContent(invoice.invoiceContent);
    state.invoice = invoice;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_COUPON, function (state, coupon) {
    if (!state.coupon || coupon.id != state.coupon.id) {
      state.coupon = coupon;
      state.couponId = coupon.id;
      Store.dispatch('getCheckoutData');
    }
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_COUPON_DATA, function (state, couponData) {
    state.couponData = couponData;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_REMARK, function (state, remarkList) {
    state.remarkList = remarkList;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.CHANGE_REMARK, function (state, _ref2) {var index = _ref2.index,remark = _ref2.remark;
    state.remarkList[index].remark = remark;
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.SET_BALANCE, function (state, useBalanceState) {
    state.useBalanceState = useBalanceState;
    Store.dispatch('getCheckoutData');
  }), _defineProperty(_mutations,
  _mutationTypes.default.CHECKOUT.RESET_STATE, function (state) {
    state = _lodash.default.cloneDeep(initState);
  }), _mutations),

  actions: {
    toPay: function toPay(_ref3) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var state, params, storeItem, result, payResult;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:state = _ref3.state;if (
                state.addressId) {_context.next = 4;break;}
                _wx.default.showToast('请选择收货地址...');return _context.abrupt("return",
                false);case 4:

                params = {
                  appId: 0,
                  isUseBalanceState: state.useBalanceState,
                  addressId: state.addressId };

                console.info(params);
                if (state.coupon && state.coupon.id) {
                  params.couponId = state.couponId;
                }
                storeItem = [];
                state.settlement.settleStoreList.forEach(function (store, index) {
                  storeItem.push({
                    storeId: store.storeId,
                    receiveRemark: state.remarkList[index].remark,
                    couponId: store.couponId || 'null' });

                });
                params.storeItem = storeItem;
                //params.usePoint = this.usePoint;
                if (state.invoice) {
                  params.invoice = state.invoice;
                }
                if (state.type === 2) {
                  params.num = state.num;
                  params.skuId = state.skuId;
                }
                _wx.default.showLoading('订单正在提交...');_context.next = 15;return (
                  _axios.default.post(state.type === 1 ? '/order/create' : '/order/create.direct', params));case 15:result = _context.sent;if (!(
                result.code == 200)) {_context.next = 24;break;}_context.next = 19;return (
                  _axios.default.post('/payment/sign', {
                    orderId: result.data,
                    paymentMethodCode: 'wechatxcx',
                    code: State.login.openid }));case 19:payResult = _context.sent;

                _wx.default.hideLoading();
                if (payResult.code == 200) {
                  _wx.default.requestPayment({
                    timeStamp: payResult.data.timeStamp,
                    nonceStr: payResult.data.nonceStr,
                    package: payResult.data.package,
                    signType: 'MD5',
                    paySign: payResult.data.paySign,
                    success: function success() {
                      _wx.default.redirectTo({
                        url: "/sub-pages/me/order-list/main?status=0" });

                    },
                    fail: function fail() {
                      _wx.default.redirectTo({
                        url: "/sub-pages/me/order-list/main?status=0" });

                    } });

                } else if (result.data.returncode == -99900) {
                  _wx.default.redirectTo({
                    url: "/sub-pages/me/order-list/main?status=0" });

                } else {
                  _wx.default.showToast({
                    title: payResult.msg || '获取失败',
                    icon: 'none' });

                }_context.next = 26;break;case 24:

                _wx.default.hideLoading();
                _wx.default.showToast(result.msg || '创建订单失败');case 26:case "end":return _context.stop();}}}, _callee);}))();

    },
    getGlobalCoupon: function getGlobalCoupon(_ref4) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var state, commit, couponSettlementItemList, params, couponResult;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:state = _ref4.state, commit = _ref4.commit;
                couponSettlementItemList = [];
                state.settlement.settleStoreList.forEach(function (store) {

                  store.settlementItems.forEach(function (cart) {
                    var item = {};
                    item.productId = cart.productId;
                    item.skuId = cart.skuId;
                    item.quantity = cart.quantity;
                    couponSettlementItemList.push(item);
                  });
                });
                params = { settlementItems: couponSettlementItemList };_context2.next = 6;return (
                  _axios.default.post('/coupon/settlement/list', params));case 6:couponResult = _context2.sent;
                if (couponResult.code == 200 && couponResult.data) {
                  commit(_mutationTypes.default.CHECKOUT.SET_COUPON_DATA, couponResult.data);
                }case 8:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    getCheckoutData: function getCheckoutData(_ref5) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var state, dispatch, commit, params, result, remarkList;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:state = _ref5.state, dispatch = _ref5.dispatch, commit = _ref5.commit;
                params = {};
                if (state.addressId) {
                  params.addressId = state.addressId;
                }
                //console.info('useBalanceState:', state.useBalanceState)
                if (state.couponId) {
                  params.couponId = state.couponId;
                }
                if (state.type === 2) {
                  params.num = state.num;
                  params.skuId = state.skuId;
                }
                params.useBalanceState = state.useBalanceState;
                _wx.default.showLoading();_context3.next = 9;return (
                  _axios.default.post(state.type === 1 ? '/order/settlement' : '/order/settlement.direct', params));case 9:result = _context3.sent;
                _wx.default.hideLoading();
                if (result.code == 200) {
                  remarkList = [];
                  result.data.settleStoreList && result.data.settleStoreList.forEach(function (store) {
                    remarkList.push({
                      storeId: store.storeId,
                      remark: '' });

                  });
                  commit(_mutationTypes.default.CHECKOUT.SET_REMARK, remarkList);
                  //commit(VUEX.CHECKOUT.SET_ADDRESS, result.data.addressId)
                  state.addressId = result.data.addressId;
                  commit(_mutationTypes.default.CHECKOUT.SET_SETTLEMENT, result.data);
                } else {
                  _wx.default.showToast(result.result.message);
                }
                dispatch('getGlobalCoupon');case 13:case "end":return _context3.stop();}}}, _callee3);}))();
    } } };exports.default = _default;

/***/ }),
/* 50 */
/*!***********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/lodash.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
// prettier-ignore
;(function () {var undefined;var VERSION = "4.17.11";var LARGE_ARRAY_SIZE = 200;var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",FUNC_ERROR_TEXT = "Expected a function";var HASH_UNDEFINED = "__lodash_hash_undefined__";var MAX_MEMOIZE_SIZE = 500;var PLACEHOLDER = "__lodash_placeholder__";var CLONE_DEEP_FLAG = 1,CLONE_FLAT_FLAG = 2,CLONE_SYMBOLS_FLAG = 4;var COMPARE_PARTIAL_FLAG = 1,COMPARE_UNORDERED_FLAG = 2;var WRAP_BIND_FLAG = 1,WRAP_BIND_KEY_FLAG = 2,WRAP_CURRY_BOUND_FLAG = 4,WRAP_CURRY_FLAG = 8,WRAP_CURRY_RIGHT_FLAG = 16,WRAP_PARTIAL_FLAG = 32,WRAP_PARTIAL_RIGHT_FLAG = 64,WRAP_ARY_FLAG = 128,WRAP_REARG_FLAG = 256,WRAP_FLIP_FLAG = 512;var DEFAULT_TRUNC_LENGTH = 30,DEFAULT_TRUNC_OMISSION = "...";var HOT_COUNT = 800,HOT_SPAN = 16;var LAZY_FILTER_FLAG = 1,LAZY_MAP_FLAG = 2,LAZY_WHILE_FLAG = 3;var INFINITY = 1 / 0,MAX_SAFE_INTEGER = 9007199254740991,MAX_INTEGER = 17976931348623157e292,NAN = 0 / 0;var MAX_ARRAY_LENGTH = 4294967295,MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;var wrapFlags = [["ary", WRAP_ARY_FLAG], ["bind", WRAP_BIND_FLAG], ["bindKey", WRAP_BIND_KEY_FLAG], ["curry", WRAP_CURRY_FLAG], ["curryRight", WRAP_CURRY_RIGHT_FLAG], ["flip", WRAP_FLIP_FLAG], ["partial", WRAP_PARTIAL_FLAG], ["partialRight", WRAP_PARTIAL_RIGHT_FLAG], ["rearg", WRAP_REARG_FLAG]];var argsTag = "[object Arguments]",arrayTag = "[object Array]",asyncTag = "[object AsyncFunction]",boolTag = "[object Boolean]",dateTag = "[object Date]",domExcTag = "[object DOMException]",errorTag = "[object Error]",funcTag = "[object Function]",genTag = "[object GeneratorFunction]",mapTag = "[object Map]",numberTag = "[object Number]",nullTag = "[object Null]",objectTag = "[object Object]",promiseTag = "[object Promise]",proxyTag = "[object Proxy]",regexpTag = "[object RegExp]",setTag = "[object Set]",stringTag = "[object String]",symbolTag = "[object Symbol]",undefinedTag = "[object Undefined]",weakMapTag = "[object WeakMap]",weakSetTag = "[object WeakSet]";var arrayBufferTag = "[object ArrayBuffer]",dataViewTag = "[object DataView]",float32Tag = "[object Float32Array]",float64Tag = "[object Float64Array]",int8Tag = "[object Int8Array]",int16Tag = "[object Int16Array]",int32Tag = "[object Int32Array]",uint8Tag = "[object Uint8Array]",uint8ClampedTag = "[object Uint8ClampedArray]",uint16Tag = "[object Uint16Array]",uint32Tag = "[object Uint32Array]";var reEmptyStringLeading = /\b__p \+= '';/g,reEmptyStringMiddle = /\b(__p \+=) '' \+/g,reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml = /[&<>"']/g,reHasEscapedHtml = RegExp(reEscapedHtml.source),reHasUnescapedHtml = RegExp(reUnescapedHtml.source);var reEscape = /<%-([\s\S]+?)%>/g,reEvaluate = /<%([\s\S]+?)%>/g,reInterpolate = /<%=([\s\S]+?)%>/g;var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp = /^\w*$/,rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,reHasRegExpChar = RegExp(reRegExpChar.source);var reTrim = /^\s+|\s+$/g,reTrimStart = /^\s+/,reTrimEnd = /\s+$/;var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails = /,? & /;var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var reEscapeChar = /\\(\\)?/g;var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags = /\w*$/;var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;var reIsBinary = /^0b[01]+$/i;var reIsHostCtor = /^\[object .+?Constructor\]$/;var reIsOctal = /^0o[0-7]+$/i;var reIsUint = /^(?:0|[1-9]\d*)$/;var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;var reNoMatch = /($^)/;var reUnescapedString = /['\n\r\u2028\u2029\\]/g;var rsAstralRange = "\\ud800-\\udfff",rsComboMarksRange = "\\u0300-\\u036f",reComboHalfMarksRange = "\\ufe20-\\ufe2f",rsComboSymbolsRange = "\\u20d0-\\u20ff",rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,rsDingbatRange = "\\u2700-\\u27bf",rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange = "\\u2000-\\u206f",rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange = "\\ufe0e\\ufe0f",rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;var rsApos = "['’]",rsAstral = "[" + rsAstralRange + "]",rsBreak = "[" + rsBreakRange + "]",rsCombo = "[" + rsComboRange + "]",rsDigits = "\\d+",rsDingbat = "[" + rsDingbatRange + "]",rsLower = "[" + rsLowerRange + "]",rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]",rsFitz = "\\ud83c[\\udffb-\\udfff]",rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",rsNonAstral = "[^" + rsAstralRange + "]",rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper = "[" + rsUpperRange + "]",rsZWJ = "\\u200d";var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")",rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")",rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",reOptMod = rsModifier + "?",rsOptVar = "[" + rsVarRange + "]?",rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*",rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq = rsOptVar + reOptMod + rsOptJoin,rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";var reApos = RegExp(rsApos, "g");var reComboMark = RegExp(rsCombo, "g");var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var contextProps = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"];var templateCounter = -1;var typedArrayTags = {};typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;var cloneableTags = {};cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;var deburredLetters = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" };var htmlEscapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };var htmlUnescapes = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" };var stringEscapes = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" };var freeParseFloat = parseFloat,freeParseInt = parseInt;var freeGlobal = typeof global == "object" && global && global.Object === Object && global;var freeSelf = typeof self == "object" && self && self.Object === Object && self;var root = freeGlobal || freeSelf || false;if (!root) {console.warn(":: 加载修改后的loash");root = { Array: Array, Buffer: Buffer, DataView: DataView, Date: Date, Error: Error, Float32Array: Float32Array, Float64Array: Float64Array, Function: Function, Int8Array: Int8Array, Int16Array: Int16Array, Int32Array: Int32Array, Map: Map, Math: Math, Object: Object, Promise: Promise, RegExp: RegExp, Set: Set, String: String, Symbol: Symbol, TypeError: TypeError, Uint8Array: Uint8Array, Uint8ClampedArray: Uint8ClampedArray, Uint16Array: Uint16Array, Uint32Array: Uint32Array, WeakMap: WeakMap, _: _, clearTimeout: clearTimeout, isFinite: isFinite, parseInt: parseInt, setTimeout: setTimeout };}var freeExports =  true && exports && !exports.nodeType && exports;var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;var moduleExports = freeModule && freeModule.exports === freeExports;var freeProcess = moduleExports && freeGlobal.process;var nodeUtil = function () {try {var types = freeModule && freeModule.require && freeModule.require("util").types;if (types) {return types;}return freeProcess && freeProcess.binding && freeProcess.binding("util");} catch (e) {}}();var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,nodeIsDate = nodeUtil && nodeUtil.isDate,nodeIsMap = nodeUtil && nodeUtil.isMap,nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,nodeIsSet = nodeUtil && nodeUtil.isSet,nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;function apply(func, thisArg, args) {switch (args.length) {case 0:return func.call(thisArg);case 1:return func.call(thisArg, args[0]);case 2:return func.call(thisArg, args[0], args[1]);case 3:return func.call(thisArg, args[0], args[1], args[2]);}return func.apply(thisArg, args);}function arrayAggregator(array, setter, iteratee, accumulator) {var index = -1,length = array == null ? 0 : array.length;while (++index < length) {var value = array[index];setter(accumulator, value, iteratee(value), array);}return accumulator;}function arrayEach(array, iteratee) {var index = -1,length = array == null ? 0 : array.length;while (++index < length) {if (iteratee(array[index], index, array) === false) {break;}}return array;}function arrayEachRight(array, iteratee) {var length = array == null ? 0 : array.length;while (length--) {if (iteratee(array[length], length, array) === false) {break;}}return array;}function arrayEvery(array, predicate) {var index = -1,length = array == null ? 0 : array.length;while (++index < length) {if (!predicate(array[index], index, array)) {return false;}}return true;}function arrayFilter(array, predicate) {var index = -1,length = array == null ? 0 : array.length,resIndex = 0,result = [];while (++index < length) {var value = array[index];if (predicate(value, index, array)) {result[resIndex++] = value;}}return result;}function arrayIncludes(array, value) {var length = array == null ? 0 : array.length;return !!length && baseIndexOf(array, value, 0) > -1;}function arrayIncludesWith(array, value, comparator) {var index = -1,length = array == null ? 0 : array.length;while (++index < length) {if (comparator(value, array[index])) {return true;}}return false;}function arrayMap(array, iteratee) {var index = -1,length = array == null ? 0 : array.length,result = Array(length);while (++index < length) {result[index] = iteratee(array[index], index, array);}return result;}function arrayPush(array, values) {var index = -1,length = values.length,offset = array.length;while (++index < length) {array[offset + index] = values[index];}return array;}function arrayReduce(array, iteratee, accumulator, initAccum) {var index = -1,length = array == null ? 0 : array.length;if (initAccum && length) {accumulator = array[++index];}while (++index < length) {accumulator = iteratee(accumulator, array[index], index, array);}return accumulator;}function arrayReduceRight(array, iteratee, accumulator, initAccum) {var length = array == null ? 0 : array.length;if (initAccum && length) {accumulator = array[--length];}while (length--) {accumulator = iteratee(accumulator, array[length], length, array);}return accumulator;}function arraySome(array, predicate) {var index = -1,length = array == null ? 0 : array.length;while (++index < length) {if (predicate(array[index], index, array)) {return true;}}return false;}var asciiSize = baseProperty("length");function asciiToArray(string) {return string.split("");}function asciiWords(string) {return string.match(reAsciiWord) || [];}function baseFindKey(collection, predicate, eachFunc) {var result;eachFunc(collection, function (value, key, collection) {if (predicate(value, key, collection)) {result = key;return false;}});return result;}function baseFindIndex(array, predicate, fromIndex, fromRight) {var length = array.length,index = fromIndex + (fromRight ? 1 : -1);while (fromRight ? index-- : ++index < length) {if (predicate(array[index], index, array)) {return index;}}return -1;}function baseIndexOf(array, value, fromIndex) {return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);}function baseIndexOfWith(array, value, fromIndex, comparator) {var index = fromIndex - 1,length = array.length;while (++index < length) {if (comparator(array[index], value)) {return index;}}return -1;}function baseIsNaN(value) {return value !== value;}function baseMean(array, iteratee) {var length = array == null ? 0 : array.length;return length ? baseSum(array, iteratee) / length : NAN;}function baseProperty(key) {return function (object) {return object == null ? undefined : object[key];};}function basePropertyOf(object) {return function (key) {return object == null ? undefined : object[key];};}function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {eachFunc(collection, function (value, index, collection) {accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);});return accumulator;}function baseSortBy(array, comparer) {var length = array.length;array.sort(comparer);while (length--) {array[length] = array[length].value;}return array;}function baseSum(array, iteratee) {var result,index = -1,length = array.length;while (++index < length) {var current = iteratee(array[index]);if (current !== undefined) {result = result === undefined ? current : result + current;}}return result;}function baseTimes(n, iteratee) {var index = -1,result = Array(n);while (++index < n) {result[index] = iteratee(index);}return result;}function baseToPairs(object, props) {return arrayMap(props, function (key) {return [key, object[key]];});}function baseUnary(func) {return function (value) {return func(value);};}function baseValues(object, props) {return arrayMap(props, function (key) {return object[key];});}function cacheHas(cache, key) {return cache.has(key);}function charsStartIndex(strSymbols, chrSymbols) {var index = -1,length = strSymbols.length;while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}return index;}function charsEndIndex(strSymbols, chrSymbols) {var index = strSymbols.length;while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}return index;}function countHolders(array, placeholder) {var length = array.length,result = 0;while (length--) {if (array[length] === placeholder) {++result;}}return result;}var deburrLetter = basePropertyOf(deburredLetters);var escapeHtmlChar = basePropertyOf(htmlEscapes);function escapeStringChar(chr) {return "\\" + stringEscapes[chr];}function getValue(object, key) {return object == null ? undefined : object[key];}function hasUnicode(string) {return reHasUnicode.test(string);}function hasUnicodeWord(string) {return reHasUnicodeWord.test(string);}function iteratorToArray(iterator) {var data,result = [];while (!(data = iterator.next()).done) {result.push(data.value);}return result;}function mapToArray(map) {var index = -1,result = Array(map.size);map.forEach(function (value, key) {result[++index] = [key, value];});return result;}function overArg(func, transform) {return function (arg) {return func(transform(arg));};}function replaceHolders(array, placeholder) {var index = -1,length = array.length,resIndex = 0,result = [];while (++index < length) {var value = array[index];if (value === placeholder || value === PLACEHOLDER) {array[index] = PLACEHOLDER;result[resIndex++] = index;}}return result;}function setToArray(set) {var index = -1,result = Array(set.size);set.forEach(function (value) {result[++index] = value;});return result;}function setToPairs(set) {var index = -1,result = Array(set.size);set.forEach(function (value) {result[++index] = [value, value];});return result;}function strictIndexOf(array, value, fromIndex) {var index = fromIndex - 1,length = array.length;while (++index < length) {if (array[index] === value) {return index;}}return -1;}function strictLastIndexOf(array, value, fromIndex) {var index = fromIndex + 1;while (index--) {if (array[index] === value) {return index;}}return index;}function stringSize(string) {return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);}function stringToArray(string) {return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);}var unescapeHtmlChar = basePropertyOf(htmlUnescapes);function unicodeSize(string) {var result = reUnicode.lastIndex = 0;while (reUnicode.test(string)) {++result;}return result;}function unicodeToArray(string) {return string.match(reUnicode) || [];}function unicodeWords(string) {return string.match(reUnicodeWord) || [];}var runInContext = function runInContext(context) {context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));var Array = context.Array,Date = context.Date,Error = context.Error,Function = context.Function,Math = context.Math,Object = context.Object,RegExp = context.RegExp,String = context.String,TypeError = context.TypeError;var arrayProto = Array.prototype,funcProto = Function.prototype,objectProto = Object.prototype;var coreJsData = context["__core-js_shared__"];var funcToString = funcProto.toString;var hasOwnProperty = objectProto.hasOwnProperty;var idCounter = 0;var maskSrcKey = function () {var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");return uid ? "Symbol(src)_1." + uid : "";}();var nativeObjectToString = objectProto.toString;var objectCtorString = funcToString.call(Object);var oldDash = root._;var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");var Buffer = moduleExports ? context.Buffer : undefined,Symbol = context.Symbol,Uint8Array = context.Uint8Array,allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,getPrototype = overArg(Object.getPrototypeOf, Object),objectCreate = Object.create,propertyIsEnumerable = objectProto.propertyIsEnumerable,splice = arrayProto.splice,spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,symIterator = Symbol ? Symbol.iterator : undefined,symToStringTag = Symbol ? Symbol.toStringTag : undefined;var defineProperty = function () {try {var func = getNative(Object, "defineProperty");func({}, "", {});return func;} catch (e) {}}();var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,ctxNow = Date && Date.now !== root.Date.now && Date.now,ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;var nativeCeil = Math.ceil,nativeFloor = Math.floor,nativeGetSymbols = Object.getOwnPropertySymbols,nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,nativeIsFinite = context.isFinite,nativeJoin = arrayProto.join,nativeKeys = overArg(Object.keys, Object),nativeMax = Math.max,nativeMin = Math.min,nativeNow = Date.now,nativeParseInt = context.parseInt,nativeRandom = Math.random,nativeReverse = arrayProto.reverse;var DataView = getNative(context, "DataView"),Map = getNative(context, "Map"),Promise = getNative(context, "Promise"),Set = getNative(context, "Set"),WeakMap = getNative(context, "WeakMap"),nativeCreate = getNative(Object, "create");var metaMap = WeakMap && new WeakMap();var realNames = {};var dataViewCtorString = toSource(DataView),mapCtorString = toSource(Map),promiseCtorString = toSource(Promise),setCtorString = toSource(Set),weakMapCtorString = toSource(WeakMap);var symbolProto = Symbol ? Symbol.prototype : undefined,symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,symbolToString = symbolProto ? symbolProto.toString : undefined;function lodash(value) {if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {if (value instanceof LodashWrapper) {return value;}if (hasOwnProperty.call(value, "__wrapped__")) {return wrapperClone(value);}}return new LodashWrapper(value);}var baseCreate = function () {function object() {}return function (proto) {if (!isObject(proto)) {return {};}if (objectCreate) {return objectCreate(proto);}object.prototype = proto;var result = new object();object.prototype = undefined;return result;};}();function baseLodash() {}function LodashWrapper(value, chainAll) {this.__wrapped__ = value;this.__actions__ = [];this.__chain__ = !!chainAll;this.__index__ = 0;this.__values__ = undefined;}lodash.templateSettings = { escape: reEscape, evaluate: reEvaluate, interpolate: reInterpolate, variable: "", imports: { _: lodash } };lodash.prototype = baseLodash.prototype;lodash.prototype.constructor = lodash;LodashWrapper.prototype = baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor = LodashWrapper;function LazyWrapper(value) {this.__wrapped__ = value;this.__actions__ = [];this.__dir__ = 1;this.__filtered__ = false;this.__iteratees__ = [];this.__takeCount__ = MAX_ARRAY_LENGTH;this.__views__ = [];}function lazyClone() {var result = new LazyWrapper(this.__wrapped__);result.__actions__ = copyArray(this.__actions__);result.__dir__ = this.__dir__;result.__filtered__ = this.__filtered__;result.__iteratees__ = copyArray(this.__iteratees__);result.__takeCount__ = this.__takeCount__;result.__views__ = copyArray(this.__views__);return result;}function lazyReverse() {if (this.__filtered__) {var result = new LazyWrapper(this);result.__dir__ = -1;result.__filtered__ = true;} else {result = this.clone();result.__dir__ *= -1;}return result;}function lazyValue() {var array = this.__wrapped__.value(),dir = this.__dir__,isArr = isArray(array),isRight = dir < 0,arrLength = isArr ? array.length : 0,view = getView(0, arrLength, this.__views__),start = view.start,end = view.end,length = end - start,index = isRight ? end : start - 1,iteratees = this.__iteratees__,iterLength = iteratees.length,resIndex = 0,takeCount = nativeMin(length, this.__takeCount__);if (!isArr || !isRight && arrLength == length && takeCount == length) {return baseWrapperValue(array, this.__actions__);}var result = [];outer: while (length-- && resIndex < takeCount) {index += dir;var iterIndex = -1,value = array[index];while (++iterIndex < iterLength) {var data = iteratees[iterIndex],iteratee = data.iteratee,type = data.type,computed = iteratee(value);if (type == LAZY_MAP_FLAG) {value = computed;} else if (!computed) {if (type == LAZY_FILTER_FLAG) {continue outer;} else {break outer;}}}result[resIndex++] = value;}return result;}LazyWrapper.prototype = baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor = LazyWrapper;function Hash(entries) {var index = -1,length = entries == null ? 0 : entries.length;this.clear();while (++index < length) {var entry = entries[index];this.set(entry[0], entry[1]);}}function hashClear() {this.__data__ = nativeCreate ? nativeCreate(null) : {};this.size = 0;}function hashDelete(key) {var result = this.has(key) && delete this.__data__[key];this.size -= result ? 1 : 0;return result;}function hashGet(key) {var data = this.__data__;if (nativeCreate) {var result = data[key];return result === HASH_UNDEFINED ? undefined : result;}return hasOwnProperty.call(data, key) ? data[key] : undefined;}function hashHas(key) {var data = this.__data__;return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);}function hashSet(key, value) {var data = this.__data__;this.size += this.has(key) ? 0 : 1;data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;return this;}Hash.prototype.clear = hashClear;Hash.prototype["delete"] = hashDelete;Hash.prototype.get = hashGet;Hash.prototype.has = hashHas;Hash.prototype.set = hashSet;function ListCache(entries) {var index = -1,length = entries == null ? 0 : entries.length;this.clear();while (++index < length) {var entry = entries[index];this.set(entry[0], entry[1]);}}function listCacheClear() {this.__data__ = [];this.size = 0;}function listCacheDelete(key) {var data = this.__data__,index = assocIndexOf(data, key);if (index < 0) {return false;}var lastIndex = data.length - 1;if (index == lastIndex) {data.pop();} else {splice.call(data, index, 1);}--this.size;return true;}function listCacheGet(key) {var data = this.__data__,index = assocIndexOf(data, key);return index < 0 ? undefined : data[index][1];}function listCacheHas(key) {return assocIndexOf(this.__data__, key) > -1;}function listCacheSet(key, value) {var data = this.__data__,index = assocIndexOf(data, key);if (index < 0) {++this.size;data.push([key, value]);} else {data[index][1] = value;}return this;}ListCache.prototype.clear = listCacheClear;ListCache.prototype["delete"] = listCacheDelete;ListCache.prototype.get = listCacheGet;ListCache.prototype.has = listCacheHas;ListCache.prototype.set = listCacheSet;function MapCache(entries) {var index = -1,length = entries == null ? 0 : entries.length;this.clear();while (++index < length) {var entry = entries[index];this.set(entry[0], entry[1]);}}function mapCacheClear() {this.size = 0;this.__data__ = { hash: new Hash(), map: new (Map || ListCache)(), string: new Hash() };}function mapCacheDelete(key) {var result = getMapData(this, key)["delete"](key);this.size -= result ? 1 : 0;return result;}function mapCacheGet(key) {return getMapData(this, key).get(key);}function mapCacheHas(key) {return getMapData(this, key).has(key);}function mapCacheSet(key, value) {var data = getMapData(this, key),size = data.size;data.set(key, value);this.size += data.size == size ? 0 : 1;return this;}MapCache.prototype.clear = mapCacheClear;MapCache.prototype["delete"] = mapCacheDelete;MapCache.prototype.get = mapCacheGet;MapCache.prototype.has = mapCacheHas;MapCache.prototype.set = mapCacheSet;function SetCache(values) {var index = -1,length = values == null ? 0 : values.length;this.__data__ = new MapCache();while (++index < length) {this.add(values[index]);}}function setCacheAdd(value) {this.__data__.set(value, HASH_UNDEFINED);return this;}function setCacheHas(value) {return this.__data__.has(value);}SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;SetCache.prototype.has = setCacheHas;function Stack(entries) {var data = this.__data__ = new ListCache(entries);this.size = data.size;}function stackClear() {this.__data__ = new ListCache();this.size = 0;}function stackDelete(key) {var data = this.__data__,result = data["delete"](key);this.size = data.size;return result;}function stackGet(key) {return this.__data__.get(key);}function stackHas(key) {return this.__data__.has(key);}function stackSet(key, value) {var data = this.__data__;if (data instanceof ListCache) {var pairs = data.__data__;if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {pairs.push([key, value]);this.size = ++data.size;return this;}data = this.__data__ = new MapCache(pairs);}data.set(key, value);this.size = data.size;return this;}Stack.prototype.clear = stackClear;Stack.prototype["delete"] = stackDelete;Stack.prototype.get = stackGet;Stack.prototype.has = stackHas;Stack.prototype.set = stackSet;function arrayLikeKeys(value, inherited) {var isArr = isArray(value),isArg = !isArr && isArguments(value),isBuff = !isArr && !isArg && isBuffer(value),isType = !isArr && !isArg && !isBuff && isTypedArray(value),skipIndexes = isArr || isArg || isBuff || isType,result = skipIndexes ? baseTimes(value.length, String) : [],length = result.length;for (var key in value) {if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {result.push(key);}}return result;}function arraySample(array) {var length = array.length;return length ? array[baseRandom(0, length - 1)] : undefined;}function arraySampleSize(array, n) {return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));}function arrayShuffle(array) {return shuffleSelf(copyArray(array));}function assignMergeValue(object, key, value) {if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {baseAssignValue(object, key, value);}}function assignValue(object, key, value) {var objValue = object[key];if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {baseAssignValue(object, key, value);}}function assocIndexOf(array, key) {var length = array.length;while (length--) {if (eq(array[length][0], key)) {return length;}}return -1;}function baseAggregator(collection, setter, iteratee, accumulator) {baseEach(collection, function (value, key, collection) {setter(accumulator, value, iteratee(value), collection);});return accumulator;}function baseAssign(object, source) {return object && copyObject(source, keys(source), object);}function baseAssignIn(object, source) {return object && copyObject(source, keysIn(source), object);}function baseAssignValue(object, key, value) {if (key == "__proto__" && defineProperty) {defineProperty(object, key, { configurable: true, enumerable: true, value: value, writable: true });} else {object[key] = value;}}function baseAt(object, paths) {var index = -1,length = paths.length,result = Array(length),skip = object == null;while (++index < length) {result[index] = skip ? undefined : get(object, paths[index]);}return result;}function baseClamp(number, lower, upper) {if (number === number) {if (upper !== undefined) {number = number <= upper ? number : upper;}if (lower !== undefined) {number = number >= lower ? number : lower;}}return number;}function baseClone(value, bitmask, customizer, key, object, stack) {var result,isDeep = bitmask & CLONE_DEEP_FLAG,isFlat = bitmask & CLONE_FLAT_FLAG,isFull = bitmask & CLONE_SYMBOLS_FLAG;if (customizer) {result = object ? customizer(value, key, object, stack) : customizer(value);}if (result !== undefined) {return result;}if (!isObject(value)) {return value;}var isArr = isArray(value);if (isArr) {result = initCloneArray(value);if (!isDeep) {return copyArray(value, result);}} else {var tag = getTag(value),isFunc = tag == funcTag || tag == genTag;if (isBuffer(value)) {return cloneBuffer(value, isDeep);}if (tag == objectTag || tag == argsTag || isFunc && !object) {result = isFlat || isFunc ? {} : initCloneObject(value);if (!isDeep) {return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));}} else {if (!cloneableTags[tag]) {return object ? value : {};}result = initCloneByTag(value, tag, isDeep);}}stack || (stack = new Stack());var stacked = stack.get(value);if (stacked) {return stacked;}stack.set(value, result);if (isSet(value)) {value.forEach(function (subValue) {result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));});return result;}if (isMap(value)) {value.forEach(function (subValue, key) {result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));});return result;}var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;var props = isArr ? undefined : keysFunc(value);arrayEach(props || value, function (subValue, key) {if (props) {key = subValue;subValue = value[key];}assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));});return result;}function baseConforms(source) {var props = keys(source);return function (object) {return baseConformsTo(object, source, props);};}function baseConformsTo(object, source, props) {var length = props.length;if (object == null) {return !length;}object = Object(object);while (length--) {var key = props[length],predicate = source[key],value = object[key];if (value === undefined && !(key in object) || !predicate(value)) {return false;}}return true;}function baseDelay(func, wait, args) {if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function () {func.apply(undefined, args);}, wait);}function baseDifference(array, values, iteratee, comparator) {var index = -1,includes = arrayIncludes,isCommon = true,length = array.length,result = [],valuesLength = values.length;if (!length) {return result;}if (iteratee) {values = arrayMap(values, baseUnary(iteratee));}if (comparator) {includes = arrayIncludesWith;isCommon = false;} else if (values.length >= LARGE_ARRAY_SIZE) {includes = cacheHas;isCommon = false;values = new SetCache(values);}outer: while (++index < length) {var value = array[index],computed = iteratee == null ? value : iteratee(value);value = comparator || value !== 0 ? value : 0;if (isCommon && computed === computed) {var valuesIndex = valuesLength;while (valuesIndex--) {if (values[valuesIndex] === computed) {continue outer;}}result.push(value);} else if (!includes(values, computed, comparator)) {result.push(value);}}return result;}var baseEach = createBaseEach(baseForOwn);var baseEachRight = createBaseEach(baseForOwnRight, true);function baseEvery(collection, predicate) {var result = true;baseEach(collection, function (value, index, collection) {result = !!predicate(value, index, collection);return result;});return result;}function baseExtremum(array, iteratee, comparator) {var index = -1,length = array.length;while (++index < length) {var value = array[index],current = iteratee(value);if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {var computed = current,result = value;}}return result;}function baseFill(array, value, start, end) {var length = array.length;start = toInteger(start);if (start < 0) {start = -start > length ? 0 : length + start;}end = end === undefined || end > length ? length : toInteger(end);if (end < 0) {end += length;}end = start > end ? 0 : toLength(end);while (start < end) {array[start++] = value;}return array;}function baseFilter(collection, predicate) {var result = [];baseEach(collection, function (value, index, collection) {if (predicate(value, index, collection)) {result.push(value);}});return result;}function baseFlatten(array, depth, predicate, isStrict, result) {var index = -1,length = array.length;predicate || (predicate = isFlattenable);result || (result = []);while (++index < length) {var value = array[index];if (depth > 0 && predicate(value)) {if (depth > 1) {baseFlatten(value, depth - 1, predicate, isStrict, result);} else {arrayPush(result, value);}} else if (!isStrict) {result[result.length] = value;}}return result;}var baseFor = createBaseFor();var baseForRight = createBaseFor(true);function baseForOwn(object, iteratee) {return object && baseFor(object, iteratee, keys);}function baseForOwnRight(object, iteratee) {return object && baseForRight(object, iteratee, keys);}function baseFunctions(object, props) {return arrayFilter(props, function (key) {return isFunction(object[key]);});}function baseGet(object, path) {path = castPath(path, object);var index = 0,length = path.length;while (object != null && index < length) {object = object[toKey(path[index++])];}return index && index == length ? object : undefined;}function baseGetAllKeys(object, keysFunc, symbolsFunc) {var result = keysFunc(object);return isArray(object) ? result : arrayPush(result, symbolsFunc(object));}function baseGetTag(value) {if (value == null) {return value === undefined ? undefinedTag : nullTag;}return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);}function baseGt(value, other) {return value > other;}function baseHas(object, key) {return object != null && hasOwnProperty.call(object, key);}function baseHasIn(object, key) {return object != null && key in Object(object);}function baseInRange(number, start, end) {return number >= nativeMin(start, end) && number < nativeMax(start, end);}function baseIntersection(arrays, iteratee, comparator) {var includes = comparator ? arrayIncludesWith : arrayIncludes,length = arrays[0].length,othLength = arrays.length,othIndex = othLength,caches = Array(othLength),maxLength = Infinity,result = [];while (othIndex--) {var array = arrays[othIndex];if (othIndex && iteratee) {array = arrayMap(array, baseUnary(iteratee));}maxLength = nativeMin(array.length, maxLength);caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;}array = arrays[0];var index = -1,seen = caches[0];outer: while (++index < length && result.length < maxLength) {var value = array[index],computed = iteratee ? iteratee(value) : value;value = comparator || value !== 0 ? value : 0;if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {othIndex = othLength;while (--othIndex) {var cache = caches[othIndex];if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {continue outer;}}if (seen) {seen.push(computed);}result.push(value);}}return result;}function baseInverter(object, setter, iteratee, accumulator) {baseForOwn(object, function (value, key, object) {setter(accumulator, iteratee(value), key, object);});return accumulator;}function baseInvoke(object, path, args) {path = castPath(path, object);object = parent(object, path);var func = object == null ? object : object[toKey(last(path))];return func == null ? undefined : apply(func, object, args);}function baseIsArguments(value) {return isObjectLike(value) && baseGetTag(value) == argsTag;}function baseIsArrayBuffer(value) {return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;}function baseIsDate(value) {return isObjectLike(value) && baseGetTag(value) == dateTag;}function baseIsEqual(value, other, bitmask, customizer, stack) {if (value === other) {return true;}if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {return value !== value && other !== other;}return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);}function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {var objIsArr = isArray(object),othIsArr = isArray(other),objTag = objIsArr ? arrayTag : getTag(object),othTag = othIsArr ? arrayTag : getTag(other);objTag = objTag == argsTag ? objectTag : objTag;othTag = othTag == argsTag ? objectTag : othTag;var objIsObj = objTag == objectTag,othIsObj = othTag == objectTag,isSameTag = objTag == othTag;if (isSameTag && isBuffer(object)) {if (!isBuffer(other)) {return false;}objIsArr = true;objIsObj = false;}if (isSameTag && !objIsObj) {stack || (stack = new Stack());return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);}if (!(bitmask & COMPARE_PARTIAL_FLAG)) {var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"),othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");if (objIsWrapped || othIsWrapped) {var objUnwrapped = objIsWrapped ? object.value() : object,othUnwrapped = othIsWrapped ? other.value() : other;stack || (stack = new Stack());return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);}}if (!isSameTag) {return false;}stack || (stack = new Stack());return equalObjects(object, other, bitmask, customizer, equalFunc, stack);}function baseIsMap(value) {return isObjectLike(value) && getTag(value) == mapTag;}function baseIsMatch(object, source, matchData, customizer) {var index = matchData.length,length = index,noCustomizer = !customizer;if (object == null) {return !length;}object = Object(object);while (index--) {var data = matchData[index];if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {return false;}}while (++index < length) {data = matchData[index];var key = data[0],objValue = object[key],srcValue = data[1];if (noCustomizer && data[2]) {if (objValue === undefined && !(key in object)) {return false;}} else {var stack = new Stack();if (customizer) {var result = customizer(objValue, srcValue, key, object, source, stack);}if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {return false;}}}return true;}function baseIsNative(value) {if (!isObject(value) || isMasked(value)) {return false;}var pattern = isFunction(value) ? reIsNative : reIsHostCtor;return pattern.test(toSource(value));}function baseIsRegExp(value) {return isObjectLike(value) && baseGetTag(value) == regexpTag;}function baseIsSet(value) {return isObjectLike(value) && getTag(value) == setTag;}function baseIsTypedArray(value) {return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];}function baseIteratee(value) {if (typeof value == "function") {return value;}if (value == null) {return identity;}if (typeof value == "object") {return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);}return property(value);}function baseKeys(object) {if (!isPrototype(object)) {return nativeKeys(object);}var result = [];for (var key in Object(object)) {if (hasOwnProperty.call(object, key) && key != "constructor") {result.push(key);}}return result;}function baseKeysIn(object) {if (!isObject(object)) {return nativeKeysIn(object);}var isProto = isPrototype(object),result = [];for (var key in object) {if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {result.push(key);}}return result;}function baseLt(value, other) {return value < other;}function baseMap(collection, iteratee) {var index = -1,result = isArrayLike(collection) ? Array(collection.length) : [];baseEach(collection, function (value, key, collection) {result[++index] = iteratee(value, key, collection);});return result;}function baseMatches(source) {var matchData = getMatchData(source);if (matchData.length == 1 && matchData[0][2]) {return matchesStrictComparable(matchData[0][0], matchData[0][1]);}return function (object) {return object === source || baseIsMatch(object, source, matchData);};}function baseMatchesProperty(path, srcValue) {if (isKey(path) && isStrictComparable(srcValue)) {return matchesStrictComparable(toKey(path), srcValue);}return function (object) {var objValue = get(object, path);return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);};}function baseMerge(object, source, srcIndex, customizer, stack) {if (object === source) {return;}baseFor(source, function (srcValue, key) {if (isObject(srcValue)) {stack || (stack = new Stack());baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);} else {var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;if (newValue === undefined) {newValue = srcValue;}assignMergeValue(object, key, newValue);}}, keysIn);}function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {var objValue = safeGet(object, key),srcValue = safeGet(source, key),stacked = stack.get(srcValue);if (stacked) {assignMergeValue(object, key, stacked);return;}var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;var isCommon = newValue === undefined;if (isCommon) {var isArr = isArray(srcValue),isBuff = !isArr && isBuffer(srcValue),isTyped = !isArr && !isBuff && isTypedArray(srcValue);newValue = srcValue;if (isArr || isBuff || isTyped) {if (isArray(objValue)) {newValue = objValue;} else if (isArrayLikeObject(objValue)) {newValue = copyArray(objValue);} else if (isBuff) {isCommon = false;newValue = cloneBuffer(srcValue, true);} else if (isTyped) {isCommon = false;newValue = cloneTypedArray(srcValue, true);} else {newValue = [];}} else if (isPlainObject(srcValue) || isArguments(srcValue)) {newValue = objValue;if (isArguments(objValue)) {newValue = toPlainObject(objValue);} else if (!isObject(objValue) || isFunction(objValue)) {newValue = initCloneObject(srcValue);}} else {isCommon = false;}}if (isCommon) {stack.set(srcValue, newValue);mergeFunc(newValue, srcValue, srcIndex, customizer, stack);stack["delete"](srcValue);}assignMergeValue(object, key, newValue);}function baseNth(array, n) {var length = array.length;if (!length) {return;}n += n < 0 ? length : 0;return isIndex(n, length) ? array[n] : undefined;}function baseOrderBy(collection, iteratees, orders) {var index = -1;iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));var result = baseMap(collection, function (value, key, collection) {var criteria = arrayMap(iteratees, function (iteratee) {return iteratee(value);});return { criteria: criteria, index: ++index, value: value };});return baseSortBy(result, function (object, other) {return compareMultiple(object, other, orders);});}function basePick(object, paths) {return basePickBy(object, paths, function (value, path) {return hasIn(object, path);});}function basePickBy(object, paths, predicate) {var index = -1,length = paths.length,result = {};while (++index < length) {var path = paths[index],value = baseGet(object, path);if (predicate(value, path)) {baseSet(result, castPath(path, object), value);}}return result;}function basePropertyDeep(path) {return function (object) {return baseGet(object, path);};}function basePullAll(array, values, iteratee, comparator) {var indexOf = comparator ? baseIndexOfWith : baseIndexOf,index = -1,length = values.length,seen = array;if (array === values) {values = copyArray(values);}if (iteratee) {seen = arrayMap(array, baseUnary(iteratee));}while (++index < length) {var fromIndex = 0,value = values[index],computed = iteratee ? iteratee(value) : value;while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {if (seen !== array) {splice.call(seen, fromIndex, 1);}splice.call(array, fromIndex, 1);}}return array;}function basePullAt(array, indexes) {var length = array ? indexes.length : 0,lastIndex = length - 1;while (length--) {var index = indexes[length];if (length == lastIndex || index !== previous) {var previous = index;if (isIndex(index)) {splice.call(array, index, 1);} else {baseUnset(array, index);}}}return array;}function baseRandom(lower, upper) {return lower + nativeFloor(nativeRandom() * (upper - lower + 1));}function baseRange(start, end, step, fromRight) {var index = -1,length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),result = Array(length);while (length--) {result[fromRight ? length : ++index] = start;start += step;}return result;}function baseRepeat(string, n) {var result = "";if (!string || n < 1 || n > MAX_SAFE_INTEGER) {return result;}do {if (n % 2) {result += string;}n = nativeFloor(n / 2);if (n) {string += string;}} while (n);return result;}function baseRest(func, start) {return setToString(overRest(func, start, identity), func + "");}function baseSample(collection) {return arraySample(values(collection));}function baseSampleSize(collection, n) {var array = values(collection);return shuffleSelf(array, baseClamp(n, 0, array.length));}function baseSet(object, path, value, customizer) {if (!isObject(object)) {return object;}path = castPath(path, object);var index = -1,length = path.length,lastIndex = length - 1,nested = object;while (nested != null && ++index < length) {var key = toKey(path[index]),newValue = value;if (index != lastIndex) {var objValue = nested[key];newValue = customizer ? customizer(objValue, key, nested) : undefined;if (newValue === undefined) {newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};}}assignValue(nested, key, newValue);nested = nested[key];}return object;}var baseSetData = !metaMap ? identity : function (func, data) {metaMap.set(func, data);return func;};var baseSetToString = !defineProperty ? identity : function (func, string) {return defineProperty(func, "toString", { configurable: true, enumerable: false, value: constant(string), writable: true });};function baseShuffle(collection) {return shuffleSelf(values(collection));}function baseSlice(array, start, end) {var index = -1,length = array.length;if (start < 0) {start = -start > length ? 0 : length + start;}end = end > length ? length : end;if (end < 0) {end += length;}length = start > end ? 0 : end - start >>> 0;start >>>= 0;var result = Array(length);while (++index < length) {result[index] = array[index + start];}return result;}function baseSome(collection, predicate) {var result;baseEach(collection, function (value, index, collection) {result = predicate(value, index, collection);return !result;});return !!result;}function baseSortedIndex(array, value, retHighest) {var low = 0,high = array == null ? low : array.length;if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {while (low < high) {var mid = low + high >>> 1,computed = array[mid];if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {low = mid + 1;} else {high = mid;}}return high;}return baseSortedIndexBy(array, value, identity, retHighest);}function baseSortedIndexBy(array, value, iteratee, retHighest) {value = iteratee(value);var low = 0,high = array == null ? 0 : array.length,valIsNaN = value !== value,valIsNull = value === null,valIsSymbol = isSymbol(value),valIsUndefined = value === undefined;while (low < high) {var mid = nativeFloor((low + high) / 2),computed = iteratee(array[mid]),othIsDefined = computed !== undefined,othIsNull = computed === null,othIsReflexive = computed === computed,othIsSymbol = isSymbol(computed);if (valIsNaN) {var setLow = retHighest || othIsReflexive;} else if (valIsUndefined) {setLow = othIsReflexive && (retHighest || othIsDefined);} else if (valIsNull) {setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);} else if (valIsSymbol) {setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);} else if (othIsNull || othIsSymbol) {setLow = false;} else {setLow = retHighest ? computed <= value : computed < value;}if (setLow) {low = mid + 1;} else {high = mid;}}return nativeMin(high, MAX_ARRAY_INDEX);}function baseSortedUniq(array, iteratee) {var index = -1,length = array.length,resIndex = 0,result = [];while (++index < length) {var value = array[index],computed = iteratee ? iteratee(value) : value;if (!index || !eq(computed, seen)) {var seen = computed;result[resIndex++] = value === 0 ? 0 : value;}}return result;}function baseToNumber(value) {if (typeof value == "number") {return value;}if (isSymbol(value)) {return NAN;}return +value;}function baseToString(value) {if (typeof value == "string") {return value;}if (isArray(value)) {return arrayMap(value, baseToString) + "";}if (isSymbol(value)) {return symbolToString ? symbolToString.call(value) : "";}var result = value + "";return result == "0" && 1 / value == -INFINITY ? "-0" : result;}function baseUniq(array, iteratee, comparator) {var index = -1,includes = arrayIncludes,length = array.length,isCommon = true,result = [],seen = result;if (comparator) {isCommon = false;includes = arrayIncludesWith;} else if (length >= LARGE_ARRAY_SIZE) {var set = iteratee ? null : createSet(array);if (set) {return setToArray(set);}isCommon = false;includes = cacheHas;seen = new SetCache();} else {seen = iteratee ? [] : result;}outer: while (++index < length) {var value = array[index],computed = iteratee ? iteratee(value) : value;value = comparator || value !== 0 ? value : 0;if (isCommon && computed === computed) {var seenIndex = seen.length;while (seenIndex--) {if (seen[seenIndex] === computed) {continue outer;}}if (iteratee) {seen.push(computed);}result.push(value);} else if (!includes(seen, computed, comparator)) {if (seen !== result) {seen.push(computed);}result.push(value);}}return result;}function baseUnset(object, path) {path = castPath(path, object);object = parent(object, path);return object == null || delete object[toKey(last(path))];}function baseUpdate(object, path, updater, customizer) {return baseSet(object, path, updater(baseGet(object, path)), customizer);}function baseWhile(array, predicate, isDrop, fromRight) {var length = array.length,index = fromRight ? length : -1;while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);}function baseWrapperValue(value, actions) {var result = value;if (result instanceof LazyWrapper) {result = result.value();}return arrayReduce(actions, function (result, action) {return action.func.apply(action.thisArg, arrayPush([result], action.args));}, result);}function baseXor(arrays, iteratee, comparator) {var length = arrays.length;if (length < 2) {return length ? baseUniq(arrays[0]) : [];}var index = -1,result = Array(length);while (++index < length) {var array = arrays[index],othIndex = -1;while (++othIndex < length) {if (othIndex != index) {result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);}}}return baseUniq(baseFlatten(result, 1), iteratee, comparator);}function baseZipObject(props, values, assignFunc) {var index = -1,length = props.length,valsLength = values.length,result = {};while (++index < length) {var value = index < valsLength ? values[index] : undefined;assignFunc(result, props[index], value);}return result;}function castArrayLikeObject(value) {return isArrayLikeObject(value) ? value : [];}function castFunction(value) {return typeof value == "function" ? value : identity;}function castPath(value, object) {if (isArray(value)) {return value;}return isKey(value, object) ? [value] : stringToPath(toString(value));}var castRest = baseRest;function castSlice(array, start, end) {var length = array.length;end = end === undefined ? length : end;return !start && end >= length ? array : baseSlice(array, start, end);}var clearTimeout = ctxClearTimeout || function (id) {return root.clearTimeout(id);};function cloneBuffer(buffer, isDeep) {if (isDeep) {return buffer.slice();}var length = buffer.length,result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);buffer.copy(result);return result;}function cloneArrayBuffer(arrayBuffer) {var result = new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}function cloneDataView(dataView, isDeep) {var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);}function cloneRegExp(regexp) {var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));result.lastIndex = regexp.lastIndex;return result;}function cloneSymbol(symbol) {return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};}function cloneTypedArray(typedArray, isDeep) {var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);}function compareAscending(value, other) {if (value !== other) {var valIsDefined = value !== undefined,valIsNull = value === null,valIsReflexive = value === value,valIsSymbol = isSymbol(value);var othIsDefined = other !== undefined,othIsNull = other === null,othIsReflexive = other === other,othIsSymbol = isSymbol(other);if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {return 1;}if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {return -1;}}return 0;}function compareMultiple(object, other, orders) {var index = -1,objCriteria = object.criteria,othCriteria = other.criteria,length = objCriteria.length,ordersLength = orders.length;while (++index < length) {var result = compareAscending(objCriteria[index], othCriteria[index]);if (result) {if (index >= ordersLength) {return result;}var order = orders[index];return result * (order == "desc" ? -1 : 1);}}return object.index - other.index;}function composeArgs(args, partials, holders, isCurried) {var argsIndex = -1,argsLength = args.length,holdersLength = holders.length,leftIndex = -1,leftLength = partials.length,rangeLength = nativeMax(argsLength - holdersLength, 0),result = Array(leftLength + rangeLength),isUncurried = !isCurried;while (++leftIndex < leftLength) {result[leftIndex] = partials[leftIndex];}while (++argsIndex < holdersLength) {if (isUncurried || argsIndex < argsLength) {result[holders[argsIndex]] = args[argsIndex];}}while (rangeLength--) {result[leftIndex++] = args[argsIndex++];}return result;}function composeArgsRight(args, partials, holders, isCurried) {var argsIndex = -1,argsLength = args.length,holdersIndex = -1,holdersLength = holders.length,rightIndex = -1,rightLength = partials.length,rangeLength = nativeMax(argsLength - holdersLength, 0),result = Array(rangeLength + rightLength),isUncurried = !isCurried;while (++argsIndex < rangeLength) {result[argsIndex] = args[argsIndex];}var offset = argsIndex;while (++rightIndex < rightLength) {result[offset + rightIndex] = partials[rightIndex];}while (++holdersIndex < holdersLength) {if (isUncurried || argsIndex < argsLength) {result[offset + holders[holdersIndex]] = args[argsIndex++];}}return result;}function copyArray(source, array) {var index = -1,length = source.length;array || (array = Array(length));while (++index < length) {array[index] = source[index];}return array;}function copyObject(source, props, object, customizer) {var isNew = !object;object || (object = {});var index = -1,length = props.length;while (++index < length) {var key = props[index];var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;if (newValue === undefined) {newValue = source[key];}if (isNew) {baseAssignValue(object, key, newValue);} else {assignValue(object, key, newValue);}}return object;}function copySymbols(source, object) {return copyObject(source, getSymbols(source), object);}function copySymbolsIn(source, object) {return copyObject(source, getSymbolsIn(source), object);}function createAggregator(setter, initializer) {return function (collection, iteratee) {var func = isArray(collection) ? arrayAggregator : baseAggregator,accumulator = initializer ? initializer() : {};return func(collection, setter, getIteratee(iteratee, 2), accumulator);};}function createAssigner(assigner) {return baseRest(function (object, sources) {var index = -1,length = sources.length,customizer = length > 1 ? sources[length - 1] : undefined,guard = length > 2 ? sources[2] : undefined;customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;if (guard && isIterateeCall(sources[0], sources[1], guard)) {customizer = length < 3 ? undefined : customizer;length = 1;}object = Object(object);while (++index < length) {var source = sources[index];if (source) {assigner(object, source, index, customizer);}}return object;});}function createBaseEach(eachFunc, fromRight) {return function (collection, iteratee) {if (collection == null) {return collection;}if (!isArrayLike(collection)) {return eachFunc(collection, iteratee);}var length = collection.length,index = fromRight ? length : -1,iterable = Object(collection);while (fromRight ? index-- : ++index < length) {if (iteratee(iterable[index], index, iterable) === false) {break;}}return collection;};}function createBaseFor(fromRight) {return function (object, iteratee, keysFunc) {var index = -1,iterable = Object(object),props = keysFunc(object),length = props.length;while (length--) {var key = props[fromRight ? length : ++index];if (iteratee(iterable[key], key, iterable) === false) {break;}}return object;};}function createBind(func, bitmask, thisArg) {var isBind = bitmask & WRAP_BIND_FLAG,Ctor = createCtor(func);function wrapper() {var fn = this && this !== root && this instanceof wrapper ? Ctor : func;return fn.apply(isBind ? thisArg : this, arguments);}return wrapper;}function createCaseFirst(methodName) {return function (string) {string = toString(string);var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;var chr = strSymbols ? strSymbols[0] : string.charAt(0);var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);return chr[methodName]() + trailing;};}function createCompounder(callback) {return function (string) {return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");};}function createCtor(Ctor) {return function () {var args = arguments;switch (args.length) {case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0], args[1]);case 3:return new Ctor(args[0], args[1], args[2]);case 4:return new Ctor(args[0], args[1], args[2], args[3]);case 5:return new Ctor(args[0], args[1], args[2], args[3], args[4]);case 6:return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);case 7:return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);}var thisBinding = baseCreate(Ctor.prototype),result = Ctor.apply(thisBinding, args);return isObject(result) ? result : thisBinding;};}function createCurry(func, bitmask, arity) {var Ctor = createCtor(func);function wrapper() {var length = arguments.length,args = Array(length),index = length,placeholder = getHolder(wrapper);while (index--) {args[index] = arguments[index];}var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);length -= holders.length;if (length < arity) {return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);}var fn = this && this !== root && this instanceof wrapper ? Ctor : func;return apply(fn, this, args);}return wrapper;}function createFind(findIndexFunc) {return function (collection, predicate, fromIndex) {var iterable = Object(collection);if (!isArrayLike(collection)) {var iteratee = getIteratee(predicate, 3);collection = keys(collection);predicate = function predicate(key) {return iteratee(iterable[key], key, iterable);};}var index = findIndexFunc(collection, predicate, fromIndex);return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;};}function createFlow(fromRight) {return flatRest(function (funcs) {var length = funcs.length,index = length,prereq = LodashWrapper.prototype.thru;if (fromRight) {funcs.reverse();}while (index--) {var func = funcs[index];if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}if (prereq && !wrapper && getFuncName(func) == "wrapper") {var wrapper = new LodashWrapper([], true);}}index = wrapper ? index : length;while (++index < length) {func = funcs[index];var funcName = getFuncName(func),data = funcName == "wrapper" ? getData(func) : undefined;if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);} else {wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);}}return function () {var args = arguments,value = args[0];if (wrapper && args.length == 1 && isArray(value)) {return wrapper.plant(value).value();}var index = 0,result = length ? funcs[index].apply(this, args) : value;while (++index < length) {result = funcs[index].call(this, result);}return result;};});}function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {var isAry = bitmask & WRAP_ARY_FLAG,isBind = bitmask & WRAP_BIND_FLAG,isBindKey = bitmask & WRAP_BIND_KEY_FLAG,isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),isFlip = bitmask & WRAP_FLIP_FLAG,Ctor = isBindKey ? undefined : createCtor(func);function wrapper() {var length = arguments.length,args = Array(length),index = length;while (index--) {args[index] = arguments[index];}if (isCurried) {var placeholder = getHolder(wrapper),holdersCount = countHolders(args, placeholder);}if (partials) {args = composeArgs(args, partials, holders, isCurried);}if (partialsRight) {args = composeArgsRight(args, partialsRight, holdersRight, isCurried);}length -= holdersCount;if (isCurried && length < arity) {var newHolders = replaceHolders(args, placeholder);return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);}var thisBinding = isBind ? thisArg : this,fn = isBindKey ? thisBinding[func] : func;length = args.length;if (argPos) {args = reorder(args, argPos);} else if (isFlip && length > 1) {args.reverse();}if (isAry && ary < length) {args.length = ary;}if (this && this !== root && this instanceof wrapper) {fn = Ctor || createCtor(fn);}return fn.apply(thisBinding, args);}return wrapper;}function createInverter(setter, toIteratee) {return function (object, iteratee) {return baseInverter(object, setter, toIteratee(iteratee), {});};}function createMathOperation(operator, defaultValue) {return function (value, other) {var result;if (value === undefined && other === undefined) {return defaultValue;}if (value !== undefined) {result = value;}if (other !== undefined) {if (result === undefined) {return other;}if (typeof value == "string" || typeof other == "string") {value = baseToString(value);other = baseToString(other);} else {value = baseToNumber(value);other = baseToNumber(other);}result = operator(value, other);}return result;};}function createOver(arrayFunc) {return flatRest(function (iteratees) {iteratees = arrayMap(iteratees, baseUnary(getIteratee()));return baseRest(function (args) {var thisArg = this;return arrayFunc(iteratees, function (iteratee) {return apply(iteratee, thisArg, args);});});});}function createPadding(length, chars) {chars = chars === undefined ? " " : baseToString(chars);var charsLength = chars.length;if (charsLength < 2) {return charsLength ? baseRepeat(chars, length) : chars;}var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);}function createPartial(func, bitmask, thisArg, partials) {var isBind = bitmask & WRAP_BIND_FLAG,Ctor = createCtor(func);function wrapper() {var argsIndex = -1,argsLength = arguments.length,leftIndex = -1,leftLength = partials.length,args = Array(leftLength + argsLength),fn = this && this !== root && this instanceof wrapper ? Ctor : func;while (++leftIndex < leftLength) {args[leftIndex] = partials[leftIndex];}while (argsLength--) {args[leftIndex++] = arguments[++argsIndex];}return apply(fn, isBind ? thisArg : this, args);}return wrapper;}function createRange(fromRight) {return function (start, end, step) {if (step && typeof step != "number" && isIterateeCall(start, end, step)) {end = step = undefined;}start = toFinite(start);if (end === undefined) {end = start;start = 0;} else {end = toFinite(end);}step = step === undefined ? start < end ? 1 : -1 : toFinite(step);return baseRange(start, end, step, fromRight);};}function createRelationalOperation(operator) {return function (value, other) {if (!(typeof value == "string" && typeof other == "string")) {value = toNumber(value);other = toNumber(other);}return operator(value, other);};}function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {var isCurry = bitmask & WRAP_CURRY_FLAG,newHolders = isCurry ? holders : undefined,newHoldersRight = isCurry ? undefined : holders,newPartials = isCurry ? partials : undefined,newPartialsRight = isCurry ? undefined : partials;bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);}var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];var result = wrapFunc.apply(undefined, newData);if (isLaziable(func)) {setData(result, newData);}result.placeholder = placeholder;return setWrapToString(result, func, bitmask);}function createRound(methodName) {var func = Math[methodName];return function (number, precision) {number = toNumber(number);precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);if (precision) {var pair = (toString(number) + "e").split("e"),value = func(pair[0] + "e" + (+pair[1] + precision));pair = (toString(value) + "e").split("e");return +(pair[0] + "e" + (+pair[1] - precision));}return func(number);};}var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {return new Set(values);};function createToPairs(keysFunc) {return function (object) {var tag = getTag(object);if (tag == mapTag) {return mapToArray(object);}if (tag == setTag) {return setToPairs(object);}return baseToPairs(object, keysFunc(object));};}function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;if (!isBindKey && typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}var length = partials ? partials.length : 0;if (!length) {bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);partials = holders = undefined;}ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);arity = arity === undefined ? arity : toInteger(arity);length -= holders ? holders.length : 0;if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {var partialsRight = partials,holdersRight = holders;partials = holders = undefined;}var data = isBindKey ? undefined : getData(func);var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];if (data) {mergeData(newData, data);}func = newData[0];bitmask = newData[1];thisArg = newData[2];partials = newData[3];holders = newData[4];arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);}if (!bitmask || bitmask == WRAP_BIND_FLAG) {var result = createBind(func, bitmask, thisArg);} else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {result = createCurry(func, bitmask, arity);} else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {result = createPartial(func, bitmask, thisArg, partials);} else {result = createHybrid.apply(undefined, newData);}var setter = data ? baseSetData : setData;return setWrapToString(setter(result, newData), func, bitmask);}function customDefaultsAssignIn(objValue, srcValue, key, object) {if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {return srcValue;}return objValue;}function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {if (isObject(objValue) && isObject(srcValue)) {stack.set(srcValue, objValue);baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);stack["delete"](srcValue);}return objValue;}function customOmitClone(value) {return isPlainObject(value) ? undefined : value;}function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {var isPartial = bitmask & COMPARE_PARTIAL_FLAG,arrLength = array.length,othLength = other.length;if (arrLength != othLength && !(isPartial && othLength > arrLength)) {return false;}var stacked = stack.get(array);if (stacked && stack.get(other)) {return stacked == other;}var index = -1,result = true,seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;stack.set(array, other);stack.set(other, array);while (++index < arrLength) {var arrValue = array[index],othValue = other[index];if (customizer) {var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);}if (compared !== undefined) {if (compared) {continue;}result = false;break;}if (seen) {if (!arraySome(other, function (othValue, othIndex) {if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {return seen.push(othIndex);}})) {result = false;break;}} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {result = false;break;}}stack["delete"](array);stack["delete"](other);return result;}function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {switch (tag) {case dataViewTag:if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {return false;}object = object.buffer;other = other.buffer;case arrayBufferTag:if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {return false;}return true;case boolTag:case dateTag:case numberTag:return eq(+object, +other);case errorTag:return object.name == other.name && object.message == other.message;case regexpTag:case stringTag:return object == other + "";case mapTag:var convert = mapToArray;case setTag:var isPartial = bitmask & COMPARE_PARTIAL_FLAG;convert || (convert = setToArray);if (object.size != other.size && !isPartial) {return false;}var stacked = stack.get(object);if (stacked) {return stacked == other;}bitmask |= COMPARE_UNORDERED_FLAG;stack.set(object, other);var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);stack["delete"](object);return result;case symbolTag:if (symbolValueOf) {return symbolValueOf.call(object) == symbolValueOf.call(other);}}return false;}function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {var isPartial = bitmask & COMPARE_PARTIAL_FLAG,objProps = getAllKeys(object),objLength = objProps.length,othProps = getAllKeys(other),othLength = othProps.length;if (objLength != othLength && !isPartial) {return false;}var index = objLength;while (index--) {var key = objProps[index];if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {return false;}}var stacked = stack.get(object);if (stacked && stack.get(other)) {return stacked == other;}var result = true;stack.set(object, other);stack.set(other, object);var skipCtor = isPartial;while (++index < objLength) {key = objProps[index];var objValue = object[key],othValue = other[key];if (customizer) {var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);}if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {result = false;break;}skipCtor || (skipCtor = key == "constructor");}if (result && !skipCtor) {var objCtor = object.constructor,othCtor = other.constructor;if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {result = false;}}stack["delete"](object);stack["delete"](other);return result;}function flatRest(func) {return setToString(overRest(func, undefined, flatten), func + "");}function getAllKeys(object) {return baseGetAllKeys(object, keys, getSymbols);}function getAllKeysIn(object) {return baseGetAllKeys(object, keysIn, getSymbolsIn);}var getData = !metaMap ? noop : function (func) {return metaMap.get(func);};function getFuncName(func) {var result = func.name + "",array = realNames[result],length = hasOwnProperty.call(realNames, result) ? array.length : 0;while (length--) {var data = array[length],otherFunc = data.func;if (otherFunc == null || otherFunc == func) {return data.name;}}return result;}function getHolder(func) {var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;return object.placeholder;}function getIteratee() {var result = lodash.iteratee || iteratee;result = result === iteratee ? baseIteratee : result;return arguments.length ? result(arguments[0], arguments[1]) : result;}function getMapData(map, key) {var data = map.__data__;return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;}function getMatchData(object) {var result = keys(object),length = result.length;while (length--) {var key = result[length],value = object[key];result[length] = [key, value, isStrictComparable(value)];}return result;}function getNative(object, key) {var value = getValue(object, key);return baseIsNative(value) ? value : undefined;}function getRawTag(value) {var isOwn = hasOwnProperty.call(value, symToStringTag),tag = value[symToStringTag];try {value[symToStringTag] = undefined;var unmasked = true;} catch (e) {}var result = nativeObjectToString.call(value);if (unmasked) {if (isOwn) {value[symToStringTag] = tag;} else {delete value[symToStringTag];}}return result;}var getSymbols = !nativeGetSymbols ? stubArray : function (object) {if (object == null) {return [];}object = Object(object);return arrayFilter(nativeGetSymbols(object), function (symbol) {return propertyIsEnumerable.call(object, symbol);});};var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {var result = [];while (object) {arrayPush(result, getSymbols(object));object = getPrototype(object);}return result;};var getTag = baseGetTag;if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {getTag = function getTag(value) {var result = baseGetTag(value),Ctor = result == objectTag ? value.constructor : undefined,ctorString = Ctor ? toSource(Ctor) : "";if (ctorString) {switch (ctorString) {case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}function getView(start, end, transforms) {var index = -1,length = transforms.length;while (++index < length) {var data = transforms[index],size = data.size;switch (data.type) {case "drop":start += size;break;case "dropRight":end -= size;break;case "take":end = nativeMin(end, start + size);break;case "takeRight":start = nativeMax(start, end - size);break;}}return { start: start, end: end };}function getWrapDetails(source) {var match = source.match(reWrapDetails);return match ? match[1].split(reSplitDetails) : [];}function hasPath(object, path, hasFunc) {path = castPath(path, object);var index = -1,length = path.length,result = false;while (++index < length) {var key = toKey(path[index]);if (!(result = object != null && hasFunc(object, key))) {break;}object = object[key];}if (result || ++index != length) {return result;}length = object == null ? 0 : object.length;return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));}function initCloneArray(array) {var length = array.length,result = new array.constructor(length);if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {result.index = array.index;result.input = array.input;}return result;}function initCloneObject(object) {return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};}function initCloneByTag(object, tag, isDeep) {var Ctor = object.constructor;switch (tag) {case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object, isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object, isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}function insertWrapDetails(source, details) {var length = details.length;if (!length) {return source;}var lastIndex = length - 1;details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];details = details.join(length > 2 ? ", " : " ");return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");}function isFlattenable(value) {return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);}function isIndex(value, length) {var type = typeof value;length = length == null ? MAX_SAFE_INTEGER : length;return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;}function isIterateeCall(value, index, object) {if (!isObject(object)) {return false;}var type = typeof index;if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {return eq(object[index], value);}return false;}function isKey(value, object) {if (isArray(value)) {return false;}var type = typeof value;if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {return true;}return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);}function isKeyable(value) {var type = typeof value;return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;}function isLaziable(func) {var funcName = getFuncName(func),other = lodash[funcName];if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {return false;}if (func === other) {return true;}var data = getData(other);return !!data && func === data[0];}function isMasked(func) {return !!maskSrcKey && maskSrcKey in func;}var isMaskable = coreJsData ? isFunction : stubFalse;function isPrototype(value) {var Ctor = value && value.constructor,proto = typeof Ctor == "function" && Ctor.prototype || objectProto;return value === proto;}function isStrictComparable(value) {return value === value && !isObject(value);}function matchesStrictComparable(key, srcValue) {return function (object) {if (object == null) {return false;}return object[key] === srcValue && (srcValue !== undefined || key in Object(object));};}function memoizeCapped(func) {var result = memoize(func, function (key) {if (cache.size === MAX_MEMOIZE_SIZE) {cache.clear();}return key;});var cache = result.cache;return result;}function mergeData(data, source) {var bitmask = data[1],srcBitmask = source[1],newBitmask = bitmask | srcBitmask,isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;if (!(isCommon || isCombo)) {return data;}if (srcBitmask & WRAP_BIND_FLAG) {data[2] = source[2];newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;}var value = source[3];if (value) {var partials = data[3];data[3] = partials ? composeArgs(partials, value, source[4]) : value;data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];}value = source[5];if (value) {partials = data[5];data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];}value = source[7];if (value) {data[7] = value;}if (srcBitmask & WRAP_ARY_FLAG) {data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);}if (data[9] == null) {data[9] = source[9];}data[0] = source[0];data[1] = newBitmask;return data;}function nativeKeysIn(object) {var result = [];if (object != null) {for (var key in Object(object)) {result.push(key);}}return result;}function objectToString(value) {return nativeObjectToString.call(value);}function overRest(func, start, transform) {start = nativeMax(start === undefined ? func.length - 1 : start, 0);return function () {var args = arguments,index = -1,length = nativeMax(args.length - start, 0),array = Array(length);while (++index < length) {array[index] = args[start + index];}index = -1;var otherArgs = Array(start + 1);while (++index < start) {otherArgs[index] = args[index];}otherArgs[start] = transform(array);return apply(func, this, otherArgs);};}function parent(object, path) {return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));}function reorder(array, indexes) {var arrLength = array.length,length = nativeMin(indexes.length, arrLength),oldArray = copyArray(array);while (length--) {var index = indexes[length];array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;}return array;}function safeGet(object, key) {if (key == "__proto__") {return;}return object[key];}var setData = shortOut(baseSetData);var setTimeout = ctxSetTimeout || function (func, wait) {return root.setTimeout(func, wait);};var setToString = shortOut(baseSetToString);function setWrapToString(wrapper, reference, bitmask) {var source = reference + "";return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));}function shortOut(func) {var count = 0,lastCalled = 0;return function () {var stamp = nativeNow(),remaining = HOT_SPAN - (stamp - lastCalled);lastCalled = stamp;if (remaining > 0) {if (++count >= HOT_COUNT) {return arguments[0];}} else {count = 0;}return func.apply(undefined, arguments);};}function shuffleSelf(array, size) {var index = -1,length = array.length,lastIndex = length - 1;size = size === undefined ? length : size;while (++index < size) {var rand = baseRandom(index, lastIndex),value = array[rand];array[rand] = array[index];array[index] = value;}array.length = size;return array;}var stringToPath = memoizeCapped(function (string) {var result = [];if (string.charCodeAt(0) === 46) {result.push("");}string.replace(rePropName, function (match, number, quote, subString) {result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);});return result;});function toKey(value) {if (typeof value == "string" || isSymbol(value)) {return value;}var result = value + "";return result == "0" && 1 / value == -INFINITY ? "-0" : result;}function toSource(func) {if (func != null) {try {return funcToString.call(func);} catch (e) {}try {return func + "";} catch (e) {}}return "";}function updateWrapDetails(details, bitmask) {arrayEach(wrapFlags, function (pair) {var value = "_." + pair[0];if (bitmask & pair[1] && !arrayIncludes(details, value)) {details.push(value);}});return details.sort();}function wrapperClone(wrapper) {if (wrapper instanceof LazyWrapper) {return wrapper.clone();}var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);result.__actions__ = copyArray(wrapper.__actions__);result.__index__ = wrapper.__index__;result.__values__ = wrapper.__values__;return result;}function chunk(array, size, guard) {if (guard ? isIterateeCall(array, size, guard) : size === undefined) {size = 1;} else {size = nativeMax(toInteger(size), 0);}var length = array == null ? 0 : array.length;if (!length || size < 1) {return [];}var index = 0,resIndex = 0,result = Array(nativeCeil(length / size));while (index < length) {result[resIndex++] = baseSlice(array, index, index += size);}return result;}function compact(array) {var index = -1,length = array == null ? 0 : array.length,resIndex = 0,result = [];while (++index < length) {var value = array[index];if (value) {result[resIndex++] = value;}}return result;}function concat() {var length = arguments.length;if (!length) {return [];}var args = Array(length - 1),array = arguments[0],index = length;while (index--) {args[index - 1] = arguments[index];}return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));}var difference = baseRest(function (array, values) {return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];});var differenceBy = baseRest(function (array, values) {var iteratee = last(values);if (isArrayLikeObject(iteratee)) {iteratee = undefined;}return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];});var differenceWith = baseRest(function (array, values) {var comparator = last(values);if (isArrayLikeObject(comparator)) {comparator = undefined;}return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];});function drop(array, n, guard) {var length = array == null ? 0 : array.length;if (!length) {return [];}n = guard || n === undefined ? 1 : toInteger(n);return baseSlice(array, n < 0 ? 0 : n, length);}function dropRight(array, n, guard) {var length = array == null ? 0 : array.length;if (!length) {return [];}n = guard || n === undefined ? 1 : toInteger(n);n = length - n;return baseSlice(array, 0, n < 0 ? 0 : n);}function dropRightWhile(array, predicate) {return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];}function dropWhile(array, predicate) {return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];}function fill(array, value, start, end) {var length = array == null ? 0 : array.length;if (!length) {return [];}if (start && typeof start != "number" && isIterateeCall(array, value, start)) {start = 0;end = length;}return baseFill(array, value, start, end);}function findIndex(array, predicate, fromIndex) {var length = array == null ? 0 : array.length;if (!length) {return -1;}var index = fromIndex == null ? 0 : toInteger(fromIndex);if (index < 0) {index = nativeMax(length + index, 0);}return baseFindIndex(array, getIteratee(predicate, 3), index);}function findLastIndex(array, predicate, fromIndex) {var length = array == null ? 0 : array.length;if (!length) {return -1;}var index = length - 1;if (fromIndex !== undefined) {index = toInteger(fromIndex);index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);}return baseFindIndex(array, getIteratee(predicate, 3), index, true);}function flatten(array) {var length = array == null ? 0 : array.length;return length ? baseFlatten(array, 1) : [];}function flattenDeep(array) {var length = array == null ? 0 : array.length;return length ? baseFlatten(array, INFINITY) : [];}function flattenDepth(array, depth) {var length = array == null ? 0 : array.length;if (!length) {return [];}depth = depth === undefined ? 1 : toInteger(depth);return baseFlatten(array, depth);}function fromPairs(pairs) {var index = -1,length = pairs == null ? 0 : pairs.length,result = {};while (++index < length) {var pair = pairs[index];result[pair[0]] = pair[1];}return result;}function head(array) {return array && array.length ? array[0] : undefined;}function indexOf(array, value, fromIndex) {var length = array == null ? 0 : array.length;if (!length) {return -1;}var index = fromIndex == null ? 0 : toInteger(fromIndex);if (index < 0) {index = nativeMax(length + index, 0);}return baseIndexOf(array, value, index);}function initial(array) {var length = array == null ? 0 : array.length;return length ? baseSlice(array, 0, -1) : [];}var intersection = baseRest(function (arrays) {var mapped = arrayMap(arrays, castArrayLikeObject);return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];});var intersectionBy = baseRest(function (arrays) {var iteratee = last(arrays),mapped = arrayMap(arrays, castArrayLikeObject);if (iteratee === last(mapped)) {iteratee = undefined;} else {mapped.pop();}return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];});var intersectionWith = baseRest(function (arrays) {var comparator = last(arrays),mapped = arrayMap(arrays, castArrayLikeObject);comparator = typeof comparator == "function" ? comparator : undefined;if (comparator) {mapped.pop();}return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];});function join(array, separator) {return array == null ? "" : nativeJoin.call(array, separator);}function last(array) {var length = array == null ? 0 : array.length;return length ? array[length - 1] : undefined;}function lastIndexOf(array, value, fromIndex) {var length = array == null ? 0 : array.length;if (!length) {return -1;}var index = length;if (fromIndex !== undefined) {index = toInteger(fromIndex);index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);}return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);}function nth(array, n) {return array && array.length ? baseNth(array, toInteger(n)) : undefined;}var pull = baseRest(pullAll);function pullAll(array, values) {return array && array.length && values && values.length ? basePullAll(array, values) : array;}function pullAllBy(array, values, iteratee) {return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;}function pullAllWith(array, values, comparator) {return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;}var pullAt = flatRest(function (array, indexes) {var length = array == null ? 0 : array.length,result = baseAt(array, indexes);basePullAt(array, arrayMap(indexes, function (index) {return isIndex(index, length) ? +index : index;}).sort(compareAscending));return result;});function remove(array, predicate) {var result = [];if (!(array && array.length)) {return result;}var index = -1,indexes = [],length = array.length;predicate = getIteratee(predicate, 3);while (++index < length) {var value = array[index];if (predicate(value, index, array)) {result.push(value);indexes.push(index);}}basePullAt(array, indexes);return result;}function reverse(array) {return array == null ? array : nativeReverse.call(array);}function slice(array, start, end) {var length = array == null ? 0 : array.length;if (!length) {return [];}if (end && typeof end != "number" && isIterateeCall(array, start, end)) {start = 0;end = length;} else {start = start == null ? 0 : toInteger(start);end = end === undefined ? length : toInteger(end);}return baseSlice(array, start, end);}function sortedIndex(array, value) {return baseSortedIndex(array, value);}function sortedIndexBy(array, value, iteratee) {return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));}function sortedIndexOf(array, value) {var length = array == null ? 0 : array.length;if (length) {var index = baseSortedIndex(array, value);if (index < length && eq(array[index], value)) {return index;}}return -1;}function sortedLastIndex(array, value) {return baseSortedIndex(array, value, true);}function sortedLastIndexBy(array, value, iteratee) {return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);}function sortedLastIndexOf(array, value) {var length = array == null ? 0 : array.length;if (length) {var index = baseSortedIndex(array, value, true) - 1;if (eq(array[index], value)) {return index;}}return -1;}function sortedUniq(array) {return array && array.length ? baseSortedUniq(array) : [];}function sortedUniqBy(array, iteratee) {return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];}function tail(array) {var length = array == null ? 0 : array.length;return length ? baseSlice(array, 1, length) : [];}function take(array, n, guard) {if (!(array && array.length)) {return [];}n = guard || n === undefined ? 1 : toInteger(n);return baseSlice(array, 0, n < 0 ? 0 : n);}function takeRight(array, n, guard) {var length = array == null ? 0 : array.length;if (!length) {return [];}n = guard || n === undefined ? 1 : toInteger(n);n = length - n;return baseSlice(array, n < 0 ? 0 : n, length);}function takeRightWhile(array, predicate) {return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];}function takeWhile(array, predicate) {return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];}var union = baseRest(function (arrays) {return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));});var unionBy = baseRest(function (arrays) {var iteratee = last(arrays);if (isArrayLikeObject(iteratee)) {iteratee = undefined;}return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));});var unionWith = baseRest(function (arrays) {var comparator = last(arrays);comparator = typeof comparator == "function" ? comparator : undefined;return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);});function uniq(array) {return array && array.length ? baseUniq(array) : [];}function uniqBy(array, iteratee) {return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];}function uniqWith(array, comparator) {comparator = typeof comparator == "function" ? comparator : undefined;return array && array.length ? baseUniq(array, undefined, comparator) : [];}function unzip(array) {if (!(array && array.length)) {return [];}var length = 0;array = arrayFilter(array, function (group) {if (isArrayLikeObject(group)) {length = nativeMax(group.length, length);return true;}});return baseTimes(length, function (index) {return arrayMap(array, baseProperty(index));});}function unzipWith(array, iteratee) {if (!(array && array.length)) {return [];}var result = unzip(array);if (iteratee == null) {return result;}return arrayMap(result, function (group) {return apply(iteratee, undefined, group);});}var without = baseRest(function (array, values) {return isArrayLikeObject(array) ? baseDifference(array, values) : [];});var xor = baseRest(function (arrays) {return baseXor(arrayFilter(arrays, isArrayLikeObject));});var xorBy = baseRest(function (arrays) {var iteratee = last(arrays);if (isArrayLikeObject(iteratee)) {iteratee = undefined;}return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));});var xorWith = baseRest(function (arrays) {var comparator = last(arrays);comparator = typeof comparator == "function" ? comparator : undefined;return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);});var zip = baseRest(unzip);function zipObject(props, values) {return baseZipObject(props || [], values || [], assignValue);}function zipObjectDeep(props, values) {return baseZipObject(props || [], values || [], baseSet);}var zipWith = baseRest(function (arrays) {var length = arrays.length,iteratee = length > 1 ? arrays[length - 1] : undefined;iteratee = typeof iteratee == "function" ? (arrays.pop(), iteratee) : undefined;return unzipWith(arrays, iteratee);});function chain(value) {var result = lodash(value);result.__chain__ = true;return result;}function tap(value, interceptor) {interceptor(value);return value;}function thru(value, interceptor) {return interceptor(value);}var wrapperAt = flatRest(function (paths) {var length = paths.length,start = length ? paths[0] : 0,value = this.__wrapped__,interceptor = function interceptor(object) {return baseAt(object, paths);};if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {return this.thru(interceptor);}value = value.slice(start, +start + (length ? 1 : 0));value.__actions__.push({ func: thru, args: [interceptor], thisArg: undefined });return new LodashWrapper(value, this.__chain__).thru(function (array) {if (length && !array.length) {array.push(undefined);}return array;});});function wrapperChain() {return chain(this);}function wrapperCommit() {return new LodashWrapper(this.value(), this.__chain__);}function wrapperNext() {if (this.__values__ === undefined) {this.__values__ = toArray(this.value());}var done = this.__index__ >= this.__values__.length,value = done ? undefined : this.__values__[this.__index__++];return { done: done, value: value };}function wrapperToIterator() {return this;}function wrapperPlant(value) {var result,parent = this;while (parent instanceof baseLodash) {var clone = wrapperClone(parent);clone.__index__ = 0;clone.__values__ = undefined;if (result) {previous.__wrapped__ = clone;} else {result = clone;}var previous = clone;parent = parent.__wrapped__;}previous.__wrapped__ = value;return result;}function wrapperReverse() {var value = this.__wrapped__;if (value instanceof LazyWrapper) {var wrapped = value;if (this.__actions__.length) {wrapped = new LazyWrapper(this);}wrapped = wrapped.reverse();wrapped.__actions__.push({ func: thru, args: [reverse], thisArg: undefined });return new LodashWrapper(wrapped, this.__chain__);}return this.thru(reverse);}function wrapperValue() {return baseWrapperValue(this.__wrapped__, this.__actions__);}var countBy = createAggregator(function (result, value, key) {if (hasOwnProperty.call(result, key)) {++result[key];} else {baseAssignValue(result, key, 1);}});function every(collection, predicate, guard) {var func = isArray(collection) ? arrayEvery : baseEvery;if (guard && isIterateeCall(collection, predicate, guard)) {predicate = undefined;}return func(collection, getIteratee(predicate, 3));}function filter(collection, predicate) {var func = isArray(collection) ? arrayFilter : baseFilter;return func(collection, getIteratee(predicate, 3));}var find = createFind(findIndex);var findLast = createFind(findLastIndex);function flatMap(collection, iteratee) {return baseFlatten(map(collection, iteratee), 1);}function flatMapDeep(collection, iteratee) {return baseFlatten(map(collection, iteratee), INFINITY);}function flatMapDepth(collection, iteratee, depth) {depth = depth === undefined ? 1 : toInteger(depth);return baseFlatten(map(collection, iteratee), depth);}function forEach(collection, iteratee) {var func = isArray(collection) ? arrayEach : baseEach;return func(collection, getIteratee(iteratee, 3));}function forEachRight(collection, iteratee) {var func = isArray(collection) ? arrayEachRight : baseEachRight;return func(collection, getIteratee(iteratee, 3));}var groupBy = createAggregator(function (result, value, key) {if (hasOwnProperty.call(result, key)) {result[key].push(value);} else {baseAssignValue(result, key, [value]);}});function includes(collection, value, fromIndex, guard) {collection = isArrayLike(collection) ? collection : values(collection);fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;var length = collection.length;if (fromIndex < 0) {fromIndex = nativeMax(length + fromIndex, 0);}return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;}var invokeMap = baseRest(function (collection, path, args) {var index = -1,isFunc = typeof path == "function",result = isArrayLike(collection) ? Array(collection.length) : [];baseEach(collection, function (value) {result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);});return result;});var keyBy = createAggregator(function (result, value, key) {baseAssignValue(result, key, value);});function map(collection, iteratee) {var func = isArray(collection) ? arrayMap : baseMap;return func(collection, getIteratee(iteratee, 3));}function orderBy(collection, iteratees, orders, guard) {if (collection == null) {return [];}if (!isArray(iteratees)) {iteratees = iteratees == null ? [] : [iteratees];}orders = guard ? undefined : orders;if (!isArray(orders)) {orders = orders == null ? [] : [orders];}return baseOrderBy(collection, iteratees, orders);}var partition = createAggregator(function (result, value, key) {result[key ? 0 : 1].push(value);}, function () {return [[], []];});function reduce(collection, iteratee, accumulator) {var func = isArray(collection) ? arrayReduce : baseReduce,initAccum = arguments.length < 3;return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);}function reduceRight(collection, iteratee, accumulator) {var func = isArray(collection) ? arrayReduceRight : baseReduce,initAccum = arguments.length < 3;return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);}function reject(collection, predicate) {var func = isArray(collection) ? arrayFilter : baseFilter;return func(collection, negate(getIteratee(predicate, 3)));}function sample(collection) {var func = isArray(collection) ? arraySample : baseSample;return func(collection);}function sampleSize(collection, n, guard) {if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {n = 1;} else {n = toInteger(n);}var func = isArray(collection) ? arraySampleSize : baseSampleSize;return func(collection, n);}function shuffle(collection) {var func = isArray(collection) ? arrayShuffle : baseShuffle;return func(collection);}function size(collection) {if (collection == null) {return 0;}if (isArrayLike(collection)) {return isString(collection) ? stringSize(collection) : collection.length;}var tag = getTag(collection);if (tag == mapTag || tag == setTag) {return collection.size;}return baseKeys(collection).length;}function some(collection, predicate, guard) {var func = isArray(collection) ? arraySome : baseSome;if (guard && isIterateeCall(collection, predicate, guard)) {predicate = undefined;}return func(collection, getIteratee(predicate, 3));}var sortBy = baseRest(function (collection, iteratees) {if (collection == null) {return [];}var length = iteratees.length;if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {iteratees = [];} else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {iteratees = [iteratees[0]];}return baseOrderBy(collection, baseFlatten(iteratees, 1), []);});var now = ctxNow || function () {return root.Date.now();};function after(n, func) {if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}n = toInteger(n);return function () {if (--n < 1) {return func.apply(this, arguments);}};}function ary(func, n, guard) {n = guard ? undefined : n;n = func && n == null ? func.length : n;return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);}function before(n, func) {var result;if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}n = toInteger(n);return function () {if (--n > 0) {result = func.apply(this, arguments);}if (n <= 1) {func = undefined;}return result;};}var bind = baseRest(function (func, thisArg, partials) {var bitmask = WRAP_BIND_FLAG;if (partials.length) {var holders = replaceHolders(partials, getHolder(bind));bitmask |= WRAP_PARTIAL_FLAG;}return createWrap(func, bitmask, thisArg, partials, holders);});var bindKey = baseRest(function (object, key, partials) {var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;if (partials.length) {var holders = replaceHolders(partials, getHolder(bindKey));bitmask |= WRAP_PARTIAL_FLAG;}return createWrap(key, bitmask, object, partials, holders);});function curry(func, arity, guard) {arity = guard ? undefined : arity;var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);result.placeholder = curry.placeholder;return result;}function curryRight(func, arity, guard) {arity = guard ? undefined : arity;var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);result.placeholder = curryRight.placeholder;return result;}function debounce(func, wait, options) {var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime = 0,leading = false,maxing = false,trailing = true;if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}wait = toNumber(wait) || 0;if (isObject(options)) {leading = !!options.leading;maxing = "maxWait" in options;maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;trailing = "trailing" in options ? !!options.trailing : trailing;}function invokeFunc(time) {var args = lastArgs,thisArg = lastThis;lastArgs = lastThis = undefined;lastInvokeTime = time;result = func.apply(thisArg, args);return result;}function leadingEdge(time) {lastInvokeTime = time;timerId = setTimeout(timerExpired, wait);return leading ? invokeFunc(time) : result;}function remainingWait(time) {var timeSinceLastCall = time - lastCallTime,timeSinceLastInvoke = time - lastInvokeTime,timeWaiting = wait - timeSinceLastCall;return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;}function shouldInvoke(time) {var timeSinceLastCall = time - lastCallTime,timeSinceLastInvoke = time - lastInvokeTime;return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;}function timerExpired() {var time = now();if (shouldInvoke(time)) {return trailingEdge(time);}timerId = setTimeout(timerExpired, remainingWait(time));}function trailingEdge(time) {timerId = undefined;if (trailing && lastArgs) {return invokeFunc(time);}lastArgs = lastThis = undefined;return result;}function cancel() {if (timerId !== undefined) {clearTimeout(timerId);}lastInvokeTime = 0;lastArgs = lastCallTime = lastThis = timerId = undefined;}function flush() {return timerId === undefined ? result : trailingEdge(now());}function debounced() {var time = now(),isInvoking = shouldInvoke(time);lastArgs = arguments;lastThis = this;lastCallTime = time;if (isInvoking) {if (timerId === undefined) {return leadingEdge(lastCallTime);}if (maxing) {timerId = setTimeout(timerExpired, wait);return invokeFunc(lastCallTime);}}if (timerId === undefined) {timerId = setTimeout(timerExpired, wait);}return result;}debounced.cancel = cancel;debounced.flush = flush;return debounced;}var defer = baseRest(function (func, args) {return baseDelay(func, 1, args);});var delay = baseRest(function (func, wait, args) {return baseDelay(func, toNumber(wait) || 0, args);});function flip(func) {return createWrap(func, WRAP_FLIP_FLAG);}function memoize(func, resolver) {if (typeof func != "function" || resolver != null && typeof resolver != "function") {throw new TypeError(FUNC_ERROR_TEXT);}var memoized = function memoized() {var args = arguments,key = resolver ? resolver.apply(this, args) : args[0],cache = memoized.cache;if (cache.has(key)) {return cache.get(key);}var result = func.apply(this, args);memoized.cache = cache.set(key, result) || cache;return result;};memoized.cache = new (memoize.Cache || MapCache)();return memoized;}memoize.Cache = MapCache;function negate(predicate) {if (typeof predicate != "function") {throw new TypeError(FUNC_ERROR_TEXT);}return function () {var args = arguments;switch (args.length) {case 0:return !predicate.call(this);case 1:return !predicate.call(this, args[0]);case 2:return !predicate.call(this, args[0], args[1]);case 3:return !predicate.call(this, args[0], args[1], args[2]);}return !predicate.apply(this, args);};}function once(func) {return before(2, func);}var overArgs = castRest(function (func, transforms) {transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));var funcsLength = transforms.length;return baseRest(function (args) {var index = -1,length = nativeMin(args.length, funcsLength);while (++index < length) {args[index] = transforms[index].call(this, args[index]);}return apply(func, this, args);});});var partial = baseRest(function (func, partials) {var holders = replaceHolders(partials, getHolder(partial));return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);});var partialRight = baseRest(function (func, partials) {var holders = replaceHolders(partials, getHolder(partialRight));return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);});var rearg = flatRest(function (func, indexes) {return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);});function rest(func, start) {if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}start = start === undefined ? start : toInteger(start);return baseRest(func, start);}function spread(func, start) {if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}start = start == null ? 0 : nativeMax(toInteger(start), 0);return baseRest(function (args) {var array = args[start],otherArgs = castSlice(args, 0, start);if (array) {arrayPush(otherArgs, array);}return apply(func, this, otherArgs);});}function throttle(func, wait, options) {var leading = true,trailing = true;if (typeof func != "function") {throw new TypeError(FUNC_ERROR_TEXT);}if (isObject(options)) {leading = "leading" in options ? !!options.leading : leading;trailing = "trailing" in options ? !!options.trailing : trailing;}return debounce(func, wait, { leading: leading, maxWait: wait, trailing: trailing });}function unary(func) {return ary(func, 1);}function wrap(value, wrapper) {return partial(castFunction(wrapper), value);}function castArray() {if (!arguments.length) {return [];}var value = arguments[0];return isArray(value) ? value : [value];}function clone(value) {return baseClone(value, CLONE_SYMBOLS_FLAG);}function cloneWith(value, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);}function cloneDeep(value) {return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);}function cloneDeepWith(value, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);}function conformsTo(object, source) {return source == null || baseConformsTo(object, source, keys(source));}function eq(value, other) {return value === other || value !== value && other !== other;}var gt = createRelationalOperation(baseGt);var gte = createRelationalOperation(function (value, other) {return value >= other;});var isArguments = baseIsArguments(function () {return arguments;}()) ? baseIsArguments : function (value) {return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");};var isArray = Array.isArray;var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;function isArrayLike(value) {return value != null && isLength(value.length) && !isFunction(value);}function isArrayLikeObject(value) {return isObjectLike(value) && isArrayLike(value);}function isBoolean(value) {return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;}var isBuffer = nativeIsBuffer || stubFalse;var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;function isElement(value) {return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);}function isEmpty(value) {if (value == null) {return true;}if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {return !value.length;}var tag = getTag(value);if (tag == mapTag || tag == setTag) {return !value.size;}if (isPrototype(value)) {return !baseKeys(value).length;}for (var key in value) {if (hasOwnProperty.call(value, key)) {return false;}}return true;}function isEqual(value, other) {return baseIsEqual(value, other);}function isEqualWith(value, other, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;var result = customizer ? customizer(value, other) : undefined;return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;}function isError(value) {if (!isObjectLike(value)) {return false;}var tag = baseGetTag(value);return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);}function isFinite(value) {return typeof value == "number" && nativeIsFinite(value);}function isFunction(value) {if (!isObject(value)) {return false;}var tag = baseGetTag(value);return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;}function isInteger(value) {return typeof value == "number" && value == toInteger(value);}function isLength(value) {return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;}function isObject(value) {var type = typeof value;return value != null && (type == "object" || type == "function");}function isObjectLike(value) {return value != null && typeof value == "object";}var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;function isMatch(object, source) {return object === source || baseIsMatch(object, source, getMatchData(source));}function isMatchWith(object, source, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;return baseIsMatch(object, source, getMatchData(source), customizer);}function isNaN(value) {return isNumber(value) && value != +value;}function isNative(value) {if (isMaskable(value)) {throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}function isNull(value) {return value === null;}function isNil(value) {return value == null;}function isNumber(value) {return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;}function isPlainObject(value) {if (!isObjectLike(value) || baseGetTag(value) != objectTag) {return false;}var proto = getPrototype(value);if (proto === null) {return true;}var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;}var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;function isSafeInteger(value) {return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;}var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;function isString(value) {return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;}function isSymbol(value) {return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;}var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;function isUndefined(value) {return value === undefined;}function isWeakMap(value) {return isObjectLike(value) && getTag(value) == weakMapTag;}function isWeakSet(value) {return isObjectLike(value) && baseGetTag(value) == weakSetTag;}var lt = createRelationalOperation(baseLt);var lte = createRelationalOperation(function (value, other) {return value <= other;});function toArray(value) {if (!value) {return [];}if (isArrayLike(value)) {return isString(value) ? stringToArray(value) : copyArray(value);}if (symIterator && value[symIterator]) {return iteratorToArray(value[symIterator]());}var tag = getTag(value),func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;return func(value);}function toFinite(value) {if (!value) {return value === 0 ? value : 0;}value = toNumber(value);if (value === INFINITY || value === -INFINITY) {var sign = value < 0 ? -1 : 1;return sign * MAX_INTEGER;}return value === value ? value : 0;}function toInteger(value) {var result = toFinite(value),remainder = result % 1;return result === result ? remainder ? result - remainder : result : 0;}function toLength(value) {return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;}function toNumber(value) {if (typeof value == "number") {return value;}if (isSymbol(value)) {return NAN;}if (isObject(value)) {var other = typeof value.valueOf == "function" ? value.valueOf() : value;value = isObject(other) ? other + "" : other;}if (typeof value != "string") {return value === 0 ? value : +value;}value = value.replace(reTrim, "");var isBinary = reIsBinary.test(value);return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;}function toPlainObject(value) {return copyObject(value, keysIn(value));}function toSafeInteger(value) {return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;}function toString(value) {return value == null ? "" : baseToString(value);}var assign = createAssigner(function (object, source) {if (isPrototype(source) || isArrayLike(source)) {copyObject(source, keys(source), object);return;}for (var key in source) {if (hasOwnProperty.call(source, key)) {assignValue(object, key, source[key]);}}});var assignIn = createAssigner(function (object, source) {copyObject(source, keysIn(source), object);});var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {copyObject(source, keysIn(source), object, customizer);});var assignWith = createAssigner(function (object, source, srcIndex, customizer) {copyObject(source, keys(source), object, customizer);});var at = flatRest(baseAt);function create(prototype, properties) {var result = baseCreate(prototype);return properties == null ? result : baseAssign(result, properties);}var defaults = baseRest(function (object, sources) {object = Object(object);var index = -1;var length = sources.length;var guard = length > 2 ? sources[2] : undefined;if (guard && isIterateeCall(sources[0], sources[1], guard)) {length = 1;}while (++index < length) {var source = sources[index];var props = keysIn(source);var propsIndex = -1;var propsLength = props.length;while (++propsIndex < propsLength) {var key = props[propsIndex];var value = object[key];if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {object[key] = source[key];}}}return object;});var defaultsDeep = baseRest(function (args) {args.push(undefined, customDefaultsMerge);return apply(mergeWith, undefined, args);});function findKey(object, predicate) {return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);}function findLastKey(object, predicate) {return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);}function forIn(object, iteratee) {return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);}function forInRight(object, iteratee) {return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);}function forOwn(object, iteratee) {return object && baseForOwn(object, getIteratee(iteratee, 3));}function forOwnRight(object, iteratee) {return object && baseForOwnRight(object, getIteratee(iteratee, 3));}function functions(object) {return object == null ? [] : baseFunctions(object, keys(object));}function functionsIn(object) {return object == null ? [] : baseFunctions(object, keysIn(object));}function get(object, path, defaultValue) {var result = object == null ? undefined : baseGet(object, path);return result === undefined ? defaultValue : result;}function has(object, path) {return object != null && hasPath(object, path, baseHas);}function hasIn(object, path) {return object != null && hasPath(object, path, baseHasIn);}var invert = createInverter(function (result, value, key) {if (value != null && typeof value.toString != "function") {value = nativeObjectToString.call(value);}result[value] = key;}, constant(identity));var invertBy = createInverter(function (result, value, key) {if (value != null && typeof value.toString != "function") {value = nativeObjectToString.call(value);}if (hasOwnProperty.call(result, value)) {result[value].push(key);} else {result[value] = [key];}}, getIteratee);var invoke = baseRest(baseInvoke);function keys(object) {return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);}function keysIn(object) {return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);}function mapKeys(object, iteratee) {var result = {};iteratee = getIteratee(iteratee, 3);baseForOwn(object, function (value, key, object) {baseAssignValue(result, iteratee(value, key, object), value);});return result;}function mapValues(object, iteratee) {var result = {};iteratee = getIteratee(iteratee, 3);baseForOwn(object, function (value, key, object) {baseAssignValue(result, key, iteratee(value, key, object));});return result;}var merge = createAssigner(function (object, source, srcIndex) {baseMerge(object, source, srcIndex);});var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {baseMerge(object, source, srcIndex, customizer);});var omit = flatRest(function (object, paths) {var result = {};if (object == null) {return result;}var isDeep = false;paths = arrayMap(paths, function (path) {path = castPath(path, object);isDeep || (isDeep = path.length > 1);return path;});copyObject(object, getAllKeysIn(object), result);if (isDeep) {result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);}var length = paths.length;while (length--) {baseUnset(result, paths[length]);}return result;});function omitBy(object, predicate) {return pickBy(object, negate(getIteratee(predicate)));}var pick = flatRest(function (object, paths) {return object == null ? {} : basePick(object, paths);});function pickBy(object, predicate) {if (object == null) {return {};}var props = arrayMap(getAllKeysIn(object), function (prop) {return [prop];});predicate = getIteratee(predicate);return basePickBy(object, props, function (value, path) {return predicate(value, path[0]);});}function result(object, path, defaultValue) {path = castPath(path, object);var index = -1,length = path.length;if (!length) {length = 1;object = undefined;}while (++index < length) {var value = object == null ? undefined : object[toKey(path[index])];if (value === undefined) {index = length;value = defaultValue;}object = isFunction(value) ? value.call(object) : value;}return object;}function set(object, path, value) {return object == null ? object : baseSet(object, path, value);}function setWith(object, path, value, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;return object == null ? object : baseSet(object, path, value, customizer);}var toPairs = createToPairs(keys);var toPairsIn = createToPairs(keysIn);function transform(object, iteratee, accumulator) {var isArr = isArray(object),isArrLike = isArr || isBuffer(object) || isTypedArray(object);iteratee = getIteratee(iteratee, 4);if (accumulator == null) {var Ctor = object && object.constructor;if (isArrLike) {accumulator = isArr ? new Ctor() : [];} else if (isObject(object)) {accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};} else {accumulator = {};}}(isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {return iteratee(accumulator, value, index, object);});return accumulator;}function unset(object, path) {return object == null ? true : baseUnset(object, path);}function update(object, path, updater) {return object == null ? object : baseUpdate(object, path, castFunction(updater));}function updateWith(object, path, updater, customizer) {customizer = typeof customizer == "function" ? customizer : undefined;return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);}function values(object) {return object == null ? [] : baseValues(object, keys(object));}function valuesIn(object) {return object == null ? [] : baseValues(object, keysIn(object));}function clamp(number, lower, upper) {if (upper === undefined) {upper = lower;lower = undefined;}if (upper !== undefined) {upper = toNumber(upper);upper = upper === upper ? upper : 0;}if (lower !== undefined) {lower = toNumber(lower);lower = lower === lower ? lower : 0;}return baseClamp(toNumber(number), lower, upper);}function inRange(number, start, end) {start = toFinite(start);if (end === undefined) {end = start;start = 0;} else {end = toFinite(end);}number = toNumber(number);return baseInRange(number, start, end);}function random(lower, upper, floating) {if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {upper = floating = undefined;}if (floating === undefined) {if (typeof upper == "boolean") {floating = upper;upper = undefined;} else if (typeof lower == "boolean") {floating = lower;lower = undefined;}}if (lower === undefined && upper === undefined) {lower = 0;upper = 1;} else {lower = toFinite(lower);if (upper === undefined) {upper = lower;lower = 0;} else {upper = toFinite(upper);}}if (lower > upper) {var temp = lower;lower = upper;upper = temp;}if (floating || lower % 1 || upper % 1) {var rand = nativeRandom();return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);}return baseRandom(lower, upper);}var camelCase = createCompounder(function (result, word, index) {word = word.toLowerCase();return result + (index ? capitalize(word) : word);});function capitalize(string) {return upperFirst(toString(string).toLowerCase());}function deburr(string) {string = toString(string);return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");}function endsWith(string, target, position) {string = toString(string);target = baseToString(target);var length = string.length;position = position === undefined ? length : baseClamp(toInteger(position), 0, length);var end = position;position -= target.length;return position >= 0 && string.slice(position, end) == target;}function escape(string) {string = toString(string);return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;}function escapeRegExp(string) {string = toString(string);return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;}var kebabCase = createCompounder(function (result, word, index) {return result + (index ? "-" : "") + word.toLowerCase();});var lowerCase = createCompounder(function (result, word, index) {return result + (index ? " " : "") + word.toLowerCase();});var lowerFirst = createCaseFirst("toLowerCase");function pad(string, length, chars) {string = toString(string);length = toInteger(length);var strLength = length ? stringSize(string) : 0;if (!length || strLength >= length) {return string;}var mid = (length - strLength) / 2;return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);}function padEnd(string, length, chars) {string = toString(string);length = toInteger(length);var strLength = length ? stringSize(string) : 0;return length && strLength < length ? string + createPadding(length - strLength, chars) : string;}function padStart(string, length, chars) {string = toString(string);length = toInteger(length);var strLength = length ? stringSize(string) : 0;return length && strLength < length ? createPadding(length - strLength, chars) + string : string;}function parseInt(string, radix, guard) {if (guard || radix == null) {radix = 0;} else if (radix) {radix = +radix;}return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);}function repeat(string, n, guard) {if (guard ? isIterateeCall(string, n, guard) : n === undefined) {n = 1;} else {n = toInteger(n);}return baseRepeat(toString(string), n);}function replace() {var args = arguments,string = toString(args[0]);return args.length < 3 ? string : string.replace(args[1], args[2]);}var snakeCase = createCompounder(function (result, word, index) {return result + (index ? "_" : "") + word.toLowerCase();});function split(string, separator, limit) {if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {separator = limit = undefined;}limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;if (!limit) {return [];}string = toString(string);if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {separator = baseToString(separator);if (!separator && hasUnicode(string)) {return castSlice(stringToArray(string), 0, limit);}}return string.split(separator, limit);}var startCase = createCompounder(function (result, word, index) {return result + (index ? " " : "") + upperFirst(word);});function startsWith(string, target, position) {string = toString(string);position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);target = baseToString(target);return string.slice(position, position + target.length) == target;}function template(string, options, guard) {var settings = lodash.templateSettings;if (guard && isIterateeCall(string, options, guard)) {options = undefined;}string = toString(string);options = assignInWith({}, options, settings, customDefaultsAssignIn);var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),importsKeys = keys(imports),importsValues = baseValues(imports, importsKeys);var isEscaping,isEvaluating,index = 0,interpolate = options.interpolate || reNoMatch,source = "__p += '";var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");var sourceURL = "//# sourceURL=" + ("sourceURL" in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {interpolateValue || (interpolateValue = esTemplateValue);source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);if (escapeValue) {isEscaping = true;source += "' +\n__e(" + escapeValue + ") +\n'";}if (evaluateValue) {isEvaluating = true;source += "';\n" + evaluateValue + ";\n__p += '";}if (interpolateValue) {source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";}index = offset + match.length;return match;});source += "';\n";var variable = options.variable;if (!variable) {source = "with (obj) {\n" + source + "\n}\n";}source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";var result = attempt(function () {return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);});result.source = source;if (isError(result)) {throw result;}return result;}function toLower(value) {return toString(value).toLowerCase();}function toUpper(value) {return toString(value).toUpperCase();}function trim(string, chars, guard) {string = toString(string);if (string && (guard || chars === undefined)) {return string.replace(reTrim, "");}if (!string || !(chars = baseToString(chars))) {return string;}var strSymbols = stringToArray(string),chrSymbols = stringToArray(chars),start = charsStartIndex(strSymbols, chrSymbols),end = charsEndIndex(strSymbols, chrSymbols) + 1;return castSlice(strSymbols, start, end).join("");}function trimEnd(string, chars, guard) {string = toString(string);if (string && (guard || chars === undefined)) {return string.replace(reTrimEnd, "");}if (!string || !(chars = baseToString(chars))) {return string;}var strSymbols = stringToArray(string),end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;return castSlice(strSymbols, 0, end).join("");}function trimStart(string, chars, guard) {string = toString(string);if (string && (guard || chars === undefined)) {return string.replace(reTrimStart, "");}if (!string || !(chars = baseToString(chars))) {return string;}var strSymbols = stringToArray(string),start = charsStartIndex(strSymbols, stringToArray(chars));return castSlice(strSymbols, start).join("");}function truncate(string, options) {var length = DEFAULT_TRUNC_LENGTH,omission = DEFAULT_TRUNC_OMISSION;if (isObject(options)) {var separator = "separator" in options ? options.separator : separator;length = "length" in options ? toInteger(options.length) : length;omission = "omission" in options ? baseToString(options.omission) : omission;}string = toString(string);var strLength = string.length;if (hasUnicode(string)) {var strSymbols = stringToArray(string);strLength = strSymbols.length;}if (length >= strLength) {return string;}var end = length - stringSize(omission);if (end < 1) {return omission;}var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);if (separator === undefined) {return result + omission;}if (strSymbols) {end += result.length - end;}if (isRegExp(separator)) {if (string.slice(end).search(separator)) {var match,substring = result;if (!separator.global) {separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g");}separator.lastIndex = 0;while (match = separator.exec(substring)) {var newEnd = match.index;}result = result.slice(0, newEnd === undefined ? end : newEnd);}} else if (string.indexOf(baseToString(separator), end) != end) {var index = result.lastIndexOf(separator);if (index > -1) {result = result.slice(0, index);}}return result + omission;}function unescape(string) {string = toString(string);return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;}var upperCase = createCompounder(function (result, word, index) {return result + (index ? " " : "") + word.toUpperCase();});var upperFirst = createCaseFirst("toUpperCase");function words(string, pattern, guard) {string = toString(string);pattern = guard ? undefined : pattern;if (pattern === undefined) {return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);}return string.match(pattern) || [];}var attempt = baseRest(function (func, args) {try {return apply(func, undefined, args);} catch (e) {return isError(e) ? e : new Error(e);}});var bindAll = flatRest(function (object, methodNames) {arrayEach(methodNames, function (key) {key = toKey(key);baseAssignValue(object, key, bind(object[key], object));});return object;});function cond(pairs) {var length = pairs == null ? 0 : pairs.length,toIteratee = getIteratee();pairs = !length ? [] : arrayMap(pairs, function (pair) {if (typeof pair[1] != "function") {throw new TypeError(FUNC_ERROR_TEXT);}return [toIteratee(pair[0]), pair[1]];});return baseRest(function (args) {var index = -1;while (++index < length) {var pair = pairs[index];if (apply(pair[0], this, args)) {return apply(pair[1], this, args);}}});}function conforms(source) {return baseConforms(baseClone(source, CLONE_DEEP_FLAG));}function constant(value) {return function () {return value;};}function defaultTo(value, defaultValue) {return value == null || value !== value ? defaultValue : value;}var flow = createFlow();var flowRight = createFlow(true);function identity(value) {return value;}function iteratee(func) {return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));}function matches(source) {return baseMatches(baseClone(source, CLONE_DEEP_FLAG));}function matchesProperty(path, srcValue) {return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));}var method = baseRest(function (path, args) {return function (object) {return baseInvoke(object, path, args);};});var methodOf = baseRest(function (object, args) {return function (path) {return baseInvoke(object, path, args);};});function mixin(object, source, options) {var props = keys(source),methodNames = baseFunctions(source, props);if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {options = source;source = object;object = this;methodNames = baseFunctions(source, keys(source));}var chain = !(isObject(options) && "chain" in options) || !!options.chain,isFunc = isFunction(object);arrayEach(methodNames, function (methodName) {var func = source[methodName];object[methodName] = func;if (isFunc) {object.prototype[methodName] = function () {var chainAll = this.__chain__;if (chain || chainAll) {var result = object(this.__wrapped__),actions = result.__actions__ = copyArray(this.__actions__);actions.push({ func: func, args: arguments, thisArg: object });result.__chain__ = chainAll;return result;}return func.apply(object, arrayPush([this.value()], arguments));};}});return object;}function noConflict() {if (root._ === this) {root._ = oldDash;}return this;}function noop() {}function nthArg(n) {n = toInteger(n);return baseRest(function (args) {return baseNth(args, n);});}var over = createOver(arrayMap);var overEvery = createOver(arrayEvery);var overSome = createOver(arraySome);function property(path) {return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);}function propertyOf(object) {return function (path) {return object == null ? undefined : baseGet(object, path);};}var range = createRange();var rangeRight = createRange(true);function stubArray() {return [];}function stubFalse() {return false;}function stubObject() {return {};}function stubString() {return "";}function stubTrue() {return true;}function times(n, iteratee) {n = toInteger(n);if (n < 1 || n > MAX_SAFE_INTEGER) {return [];}var index = MAX_ARRAY_LENGTH,length = nativeMin(n, MAX_ARRAY_LENGTH);iteratee = getIteratee(iteratee);n -= MAX_ARRAY_LENGTH;var result = baseTimes(length, iteratee);while (++index < n) {iteratee(index);}return result;}function toPath(value) {if (isArray(value)) {return arrayMap(value, toKey);}return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));}function uniqueId(prefix) {var id = ++idCounter;return toString(prefix) + id;}var add = createMathOperation(function (augend, addend) {return augend + addend;}, 0);var ceil = createRound("ceil");var divide = createMathOperation(function (dividend, divisor) {return dividend / divisor;}, 1);var floor = createRound("floor");function max(array) {return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;}function maxBy(array, iteratee) {return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;}function mean(array) {return baseMean(array, identity);}function meanBy(array, iteratee) {return baseMean(array, getIteratee(iteratee, 2));}function min(array) {return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;}function minBy(array, iteratee) {return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;}var multiply = createMathOperation(function (multiplier, multiplicand) {return multiplier * multiplicand;}, 1);var round = createRound("round");var subtract = createMathOperation(function (minuend, subtrahend) {return minuend - subtrahend;}, 0);function sum(array) {return array && array.length ? baseSum(array, identity) : 0;}function sumBy(array, iteratee) {return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;}lodash.after = after;lodash.ary = ary;lodash.assign = assign;lodash.assignIn = assignIn;lodash.assignInWith = assignInWith;lodash.assignWith = assignWith;lodash.at = at;lodash.before = before;lodash.bind = bind;lodash.bindAll = bindAll;lodash.bindKey = bindKey;lodash.castArray = castArray;lodash.chain = chain;lodash.chunk = chunk;lodash.compact = compact;lodash.concat = concat;lodash.cond = cond;lodash.conforms = conforms;lodash.constant = constant;lodash.countBy = countBy;lodash.create = create;lodash.curry = curry;lodash.curryRight = curryRight;lodash.debounce = debounce;lodash.defaults = defaults;lodash.defaultsDeep = defaultsDeep;lodash.defer = defer;lodash.delay = delay;lodash.difference = difference;lodash.differenceBy = differenceBy;lodash.differenceWith = differenceWith;lodash.drop = drop;lodash.dropRight = dropRight;lodash.dropRightWhile = dropRightWhile;lodash.dropWhile = dropWhile;lodash.fill = fill;lodash.filter = filter;lodash.flatMap = flatMap;lodash.flatMapDeep = flatMapDeep;lodash.flatMapDepth = flatMapDepth;lodash.flatten = flatten;lodash.flattenDeep = flattenDeep;lodash.flattenDepth = flattenDepth;lodash.flip = flip;lodash.flow = flow;lodash.flowRight = flowRight;lodash.fromPairs = fromPairs;lodash.functions = functions;lodash.functionsIn = functionsIn;lodash.groupBy = groupBy;lodash.initial = initial;lodash.intersection = intersection;lodash.intersectionBy = intersectionBy;lodash.intersectionWith = intersectionWith;lodash.invert = invert;lodash.invertBy = invertBy;lodash.invokeMap = invokeMap;lodash.iteratee = iteratee;lodash.keyBy = keyBy;lodash.keys = keys;lodash.keysIn = keysIn;lodash.map = map;lodash.mapKeys = mapKeys;lodash.mapValues = mapValues;lodash.matches = matches;lodash.matchesProperty = matchesProperty;lodash.memoize = memoize;lodash.merge = merge;lodash.mergeWith = mergeWith;lodash.method = method;lodash.methodOf = methodOf;lodash.mixin = mixin;lodash.negate = negate;lodash.nthArg = nthArg;lodash.omit = omit;lodash.omitBy = omitBy;lodash.once = once;lodash.orderBy = orderBy;lodash.over = over;lodash.overArgs = overArgs;lodash.overEvery = overEvery;lodash.overSome = overSome;lodash.partial = partial;lodash.partialRight = partialRight;lodash.partition = partition;lodash.pick = pick;lodash.pickBy = pickBy;lodash.property = property;lodash.propertyOf = propertyOf;lodash.pull = pull;lodash.pullAll = pullAll;lodash.pullAllBy = pullAllBy;lodash.pullAllWith = pullAllWith;lodash.pullAt = pullAt;lodash.range = range;lodash.rangeRight = rangeRight;lodash.rearg = rearg;lodash.reject = reject;lodash.remove = remove;lodash.rest = rest;lodash.reverse = reverse;lodash.sampleSize = sampleSize;lodash.set = set;lodash.setWith = setWith;lodash.shuffle = shuffle;lodash.slice = slice;lodash.sortBy = sortBy;lodash.sortedUniq = sortedUniq;lodash.sortedUniqBy = sortedUniqBy;lodash.split = split;lodash.spread = spread;lodash.tail = tail;lodash.take = take;lodash.takeRight = takeRight;lodash.takeRightWhile = takeRightWhile;lodash.takeWhile = takeWhile;lodash.tap = tap;lodash.throttle = throttle;lodash.thru = thru;lodash.toArray = toArray;lodash.toPairs = toPairs;lodash.toPairsIn = toPairsIn;lodash.toPath = toPath;lodash.toPlainObject = toPlainObject;lodash.transform = transform;lodash.unary = unary;lodash.union = union;lodash.unionBy = unionBy;lodash.unionWith = unionWith;lodash.uniq = uniq;lodash.uniqBy = uniqBy;lodash.uniqWith = uniqWith;lodash.unset = unset;lodash.unzip = unzip;lodash.unzipWith = unzipWith;lodash.update = update;lodash.updateWith = updateWith;lodash.values = values;lodash.valuesIn = valuesIn;lodash.without = without;lodash.words = words;lodash.wrap = wrap;lodash.xor = xor;lodash.xorBy = xorBy;lodash.xorWith = xorWith;lodash.zip = zip;lodash.zipObject = zipObject;lodash.zipObjectDeep = zipObjectDeep;lodash.zipWith = zipWith;lodash.entries = toPairs;lodash.entriesIn = toPairsIn;lodash.extend = assignIn;lodash.extendWith = assignInWith;mixin(lodash, lodash);lodash.add = add;lodash.attempt = attempt;lodash.camelCase = camelCase;lodash.capitalize = capitalize;lodash.ceil = ceil;lodash.clamp = clamp;lodash.clone = clone;lodash.cloneDeep = cloneDeep;lodash.cloneDeepWith = cloneDeepWith;lodash.cloneWith = cloneWith;lodash.conformsTo = conformsTo;lodash.deburr = deburr;lodash.defaultTo = defaultTo;lodash.divide = divide;lodash.endsWith = endsWith;lodash.eq = eq;lodash.escape = escape;lodash.escapeRegExp = escapeRegExp;lodash.every = every;lodash.find = find;lodash.findIndex = findIndex;lodash.findKey = findKey;lodash.findLast = findLast;lodash.findLastIndex = findLastIndex;lodash.findLastKey = findLastKey;lodash.floor = floor;lodash.forEach = forEach;lodash.forEachRight = forEachRight;lodash.forIn = forIn;lodash.forInRight = forInRight;lodash.forOwn = forOwn;lodash.forOwnRight = forOwnRight;lodash.get = get;lodash.gt = gt;lodash.gte = gte;lodash.has = has;lodash.hasIn = hasIn;lodash.head = head;lodash.identity = identity;lodash.includes = includes;lodash.indexOf = indexOf;lodash.inRange = inRange;lodash.invoke = invoke;lodash.isArguments = isArguments;lodash.isArray = isArray;lodash.isArrayBuffer = isArrayBuffer;lodash.isArrayLike = isArrayLike;lodash.isArrayLikeObject = isArrayLikeObject;lodash.isBoolean = isBoolean;lodash.isBuffer = isBuffer;lodash.isDate = isDate;lodash.isElement = isElement;lodash.isEmpty = isEmpty;lodash.isEqual = isEqual;lodash.isEqualWith = isEqualWith;lodash.isError = isError;lodash.isFinite = isFinite;lodash.isFunction = isFunction;lodash.isInteger = isInteger;lodash.isLength = isLength;lodash.isMap = isMap;lodash.isMatch = isMatch;lodash.isMatchWith = isMatchWith;lodash.isNaN = isNaN;lodash.isNative = isNative;lodash.isNil = isNil;lodash.isNull = isNull;lodash.isNumber = isNumber;lodash.isObject = isObject;lodash.isObjectLike = isObjectLike;lodash.isPlainObject = isPlainObject;lodash.isRegExp = isRegExp;lodash.isSafeInteger = isSafeInteger;lodash.isSet = isSet;lodash.isString = isString;lodash.isSymbol = isSymbol;lodash.isTypedArray = isTypedArray;lodash.isUndefined = isUndefined;lodash.isWeakMap = isWeakMap;lodash.isWeakSet = isWeakSet;lodash.join = join;lodash.kebabCase = kebabCase;lodash.last = last;lodash.lastIndexOf = lastIndexOf;lodash.lowerCase = lowerCase;lodash.lowerFirst = lowerFirst;lodash.lt = lt;lodash.lte = lte;lodash.max = max;lodash.maxBy = maxBy;lodash.mean = mean;lodash.meanBy = meanBy;lodash.min = min;lodash.minBy = minBy;lodash.stubArray = stubArray;lodash.stubFalse = stubFalse;lodash.stubObject = stubObject;lodash.stubString = stubString;lodash.stubTrue = stubTrue;lodash.multiply = multiply;lodash.nth = nth;lodash.noConflict = noConflict;lodash.noop = noop;lodash.now = now;lodash.pad = pad;lodash.padEnd = padEnd;lodash.padStart = padStart;lodash.parseInt = parseInt;lodash.random = random;lodash.reduce = reduce;lodash.reduceRight = reduceRight;lodash.repeat = repeat;lodash.replace = replace;lodash.result = result;lodash.round = round;lodash.runInContext = runInContext;lodash.sample = sample;lodash.size = size;lodash.snakeCase = snakeCase;lodash.some = some;lodash.sortedIndex = sortedIndex;lodash.sortedIndexBy = sortedIndexBy;lodash.sortedIndexOf = sortedIndexOf;lodash.sortedLastIndex = sortedLastIndex;lodash.sortedLastIndexBy = sortedLastIndexBy;lodash.sortedLastIndexOf = sortedLastIndexOf;lodash.startCase = startCase;lodash.startsWith = startsWith;lodash.subtract = subtract;lodash.sum = sum;lodash.sumBy = sumBy;lodash.template = template;lodash.times = times;lodash.toFinite = toFinite;lodash.toInteger = toInteger;lodash.toLength = toLength;lodash.toLower = toLower;lodash.toNumber = toNumber;lodash.toSafeInteger = toSafeInteger;lodash.toString = toString;lodash.toUpper = toUpper;lodash.trim = trim;lodash.trimEnd = trimEnd;lodash.trimStart = trimStart;lodash.truncate = truncate;lodash.unescape = unescape;lodash.uniqueId = uniqueId;lodash.upperCase = upperCase;lodash.upperFirst = upperFirst;lodash.each = forEach;lodash.eachRight = forEachRight;lodash.first = head;mixin(lodash, function () {var source = {};baseForOwn(lodash, function (func, methodName) {if (!hasOwnProperty.call(lodash.prototype, methodName)) {source[methodName] = func;}});return source;}(), { chain: false });lodash.VERSION = VERSION;arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (methodName) {lodash[methodName].placeholder = lodash;});arrayEach(["drop", "take"], function (methodName, index) {LazyWrapper.prototype[methodName] = function (n) {n = n === undefined ? 1 : nativeMax(toInteger(n), 0);var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();if (result.__filtered__) {result.__takeCount__ = nativeMin(n, result.__takeCount__);} else {result.__views__.push({ size: nativeMin(n, MAX_ARRAY_LENGTH), type: methodName + (result.__dir__ < 0 ? "Right" : "") });}return result;};LazyWrapper.prototype[methodName + "Right"] = function (n) {return this.reverse()[methodName](n).reverse();};});arrayEach(["filter", "map", "takeWhile"], function (methodName, index) {var type = index + 1,isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName] = function (iteratee) {var result = this.clone();result.__iteratees__.push({ iteratee: getIteratee(iteratee, 3), type: type });result.__filtered__ = result.__filtered__ || isFilter;return result;};});arrayEach(["head", "last"], function (methodName, index) {var takeName = "take" + (index ? "Right" : "");LazyWrapper.prototype[methodName] = function () {return this[takeName](1).value()[0];};});arrayEach(["initial", "tail"], function (methodName, index) {var dropName = "drop" + (index ? "" : "Right");LazyWrapper.prototype[methodName] = function () {return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);};});LazyWrapper.prototype.compact = function () {return this.filter(identity);};LazyWrapper.prototype.find = function (predicate) {return this.filter(predicate).head();};LazyWrapper.prototype.findLast = function (predicate) {return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {if (typeof path == "function") {return new LazyWrapper(this);}return this.map(function (value) {return baseInvoke(value, path, args);});});LazyWrapper.prototype.reject = function (predicate) {return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice = function (start, end) {start = toInteger(start);var result = this;if (result.__filtered__ && (start > 0 || end < 0)) {return new LazyWrapper(result);}if (start < 0) {result = result.takeRight(-start);} else if (start) {result = result.drop(start);}if (end !== undefined) {end = toInteger(end);result = end < 0 ? result.dropRight(-end) : result.take(end - start);}return result;};LazyWrapper.prototype.takeRightWhile = function (predicate) {return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray = function () {return this.take(MAX_ARRAY_LENGTH);};baseForOwn(LazyWrapper.prototype, function (func, methodName) {var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),isTaker = /^(?:head|last)$/.test(methodName),lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName],retUnwrapped = isTaker || /^find/.test(methodName);if (!lodashFunc) {return;}lodash.prototype[methodName] = function () {var value = this.__wrapped__,args = isTaker ? [1] : arguments,isLazy = value instanceof LazyWrapper,iteratee = args[0],useLazy = isLazy || isArray(value);var interceptor = function interceptor(value) {var result = lodashFunc.apply(lodash, arrayPush([value], args));return isTaker && chainAll ? result[0] : result;};if (useLazy && checkIteratee && typeof iteratee == "function" && iteratee.length != 1) {isLazy = useLazy = false;}var chainAll = this.__chain__,isHybrid = !!this.__actions__.length,isUnwrapped = retUnwrapped && !chainAll,onlyLazy = isLazy && !isHybrid;if (!retUnwrapped && useLazy) {value = onlyLazy ? value : new LazyWrapper(this);var result = func.apply(value, args);result.__actions__.push({ func: thru, args: [interceptor], thisArg: undefined });return new LodashWrapper(result, chainAll);}if (isUnwrapped && onlyLazy) {return func.apply(this, args);}result = this.thru(interceptor);return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;};});arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function (methodName) {var func = arrayProto[methodName],chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru",retUnwrapped = /^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName] = function () {var args = arguments;if (retUnwrapped && !this.__chain__) {var value = this.value();return func.apply(isArray(value) ? value : [], args);}return this[chainName](function (value) {return func.apply(isArray(value) ? value : [], args);});};});baseForOwn(LazyWrapper.prototype, function (func, methodName) {var lodashFunc = lodash[methodName];if (lodashFunc) {var key = lodashFunc.name + "",names = realNames[key] || (realNames[key] = []);names.push({ name: methodName, func: lodashFunc });}});realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{ name: "wrapper", func: undefined }];LazyWrapper.prototype.clone = lazyClone;LazyWrapper.prototype.reverse = lazyReverse;LazyWrapper.prototype.value = lazyValue;lodash.prototype.at = wrapperAt;lodash.prototype.chain = wrapperChain;lodash.prototype.commit = wrapperCommit;lodash.prototype.next = wrapperNext;lodash.prototype.plant = wrapperPlant;lodash.prototype.reverse = wrapperReverse;lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;lodash.prototype.first = lodash.prototype.head;if (symIterator) {lodash.prototype[symIterator] = wrapperToIterator;}return lodash;};var _ = runInContext();if (true) {root._ = _;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return _;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else {}}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 1), __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 51).Buffer, __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 55)(module)))

/***/ }),
/* 51 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 52)
var ieee754 = __webpack_require__(/*! ieee754 */ 53)
var isArray = __webpack_require__(/*! isarray */ 54)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 1)))

/***/ }),
/* 52 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 53 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 54 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 55 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 56 */
/*!*********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/config/env.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  // 环境常量
  NODE_ENV: "development",
  NODE_ENV_DEVELOPMENT: "development" === 'development',
  NODE_ENV_PRODUCTION: "development" === 'production',
  //(运营位)
  CMS: {
    development: 'https://cms.iot101.com',
    test: 'https://cms.iot101.com',
    production: 'https://cms.iot101.com' }[
  "development"],
  // WAP
  H5: {
    development: 'http://39.101.162.232/h5',
    test: 'http://39.101.162.232/h5',
    production: '//39.101.162.232/h5' }[
  "development"],
  // WAP
  PC: {
    development: 'http://39.101.162.232/pc',
    test: 'http://39.101.162.232/pc',
    production: '//39.101.162.232/pc' }[
  "development"],
  //静态域
  ASSETS: {
    development: 'http://39.101.162.232/',
    test: 'http://39.101.162.232/',
    production: '//39.101.162.232/' }[
  "development"],
  SEARCH_BASE: {
    development: 'http://192.168.1.187:18888',
    test: 'http://192.168.1.187:18888',
    production: 'http://192.168.1.187:18888' }[
  "development"],
  SEARCH: {
    development: 'http://192.168.1.187:18888/search/productList',
    test: 'http://192.168.1.187:18888/search/productList',
    production: 'http://192.168.1.187:18888/search/productList' }[
  "development"],
  SEARCH_PLAN: {
    development: 'http://192.168.1.187:18888/search/productList',
    test: 'http://192.168.1.187:18888/plan/search/productList',
    production: 'http://192.168.1.187:18888/search/productList' }[
  "development"],
  API: {
    // development: 'https://test.iot101.com/portal',
    development: 'http://192.168.1.187:18888/',
    test: 'https://test.iot101.com/portal',
    production: 'https://test.iot101.com/portal' }[
  "development"],
  IMG_SQUARE: 'https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1555719775998.jpg',
  IMG_RECT: 'https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1548324684777.jpg' };exports.default = _default;

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/*!**********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _login = _interopRequireDefault(__webpack_require__(/*! ./login */ 67));
var _genLink = _interopRequireDefault(__webpack_require__(/*! ./gen-link */ 68));
var _imgFormat = _interopRequireDefault(__webpack_require__(/*! ./img-format */ 70));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./time-format */ 71));
var _Bridge = _interopRequireDefault(__webpack_require__(/*! ./Bridge */ 69));
var _bus = _interopRequireDefault(__webpack_require__(/*! ./bus */ 72));
var _o2s = _interopRequireDefault(__webpack_require__(/*! ./o2s */ 73));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                   * 工具类
                                                                                                                                                   */function toYuan(val) {if (val == undefined) {
    return '';
  }
  val = val + '';
  if (val === '') {
    return '';
  }
  val = val.length < 2 ? ('00' + val).slice(-2) : val;
  val = val.replace(/\d{2}$/, '.$&').replace(/\.0+$/, '');
  return val - 0 + '';
}

function fenToYuan(val) {
  if (!parseInt(val) || isNaN(parseInt(val))) {
    return '';
  }
  val = val + '';
  val = val.length < 2 ? ('00' + val).slice(-2) : val;
  val = val.replace(/\d{2}$/, '.$&').replace(/\.0+$/, '');
  return val - 0 + '';
}

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getQuery(opt) {
  var name = '',
  url = '',
  isHash = false;
  if (typeof opt === 'string') {
    name = opt;
  } else if (typeof opt === 'object') {
    name = opt.name;
    url = opt.url;
    isHash = opt.isHash;
  }
  var reg = new RegExp('(^|&|\\?)' + name + '=([^&#]*)(&|#|$)'),
  r = null;
  if (url) {
    if (isHash) {
      url = url.substring(url.indexOf('#') + 1);
      r = url.match(reg);
    } else {
      url = url.substring(url.indexOf('?') + 1);
      r = url.match(reg);
    }
  } else {
    if (isHash) {
      r = window.location.hash.substr(1).match(reg);
    } else {
      r = window.location.search.substr(1).match(reg);
    }
  }
  if (r) {
    return decodeURIComponent(r[2]);
  }
  return '';
}var _default =

{
  login: _login.default,
  toYuan: toYuan,
  fenToYuan: fenToYuan,
  getQuery: getQuery,
  cloneDeep: cloneDeep,
  genLink: _genLink.default,
  getImgFormat: _imgFormat.default,
  timeFormat: _timeFormat.default,
  Bus: _bus.default,
  o2s: _o2s.default,
  bridge: _Bridge.default };exports.default = _default;

/***/ }),
/* 67 */
/*!**********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/login.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));
var _env = _interopRequireDefault(__webpack_require__(/*! @/config/env */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Login = /*#__PURE__*/function () {
  function Login() {_classCallCheck(this, Login);
    this.userInfo = null;
  }_createClass(Login, [{ key: "getAuth", value: function () {var _getAuth = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$wx$login, code, user;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (



                  wx.login());case 2:_yield$wx$login = _context.sent;code = _yield$wx$login.code;_context.next = 6;return (

                  wx.request({
                    url: "".concat(_env.default.CMS, "/wxapp/jscode2session"),
                    data: { code: code } }));case 6:user = _context.sent;if (!


                user.errcode) {_context.next = 9;break;}return _context.abrupt("return",
                { code: 500, data: user });case 9:return _context.abrupt("return",

                { code: 200, data: user });case 10:case "end":return _context.stop();}}}, _callee);}));function getAuth() {return _getAuth.apply(this, arguments);}return getAuth;}() }, { key: "wxappDecryptData", value: function () {var _wxappDecryptData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(


      userInfo, session_key) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  wx.request({
                    url: "".concat(_env.default.CMS, "/wxapp/wxappDecryptData"),
                    data: Object.assign(userInfo, { session_key: session_key }),
                    method: 'POST',
                    header: {
                      'content-type': 'application/json' } }));case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2);}));function wxappDecryptData(_x, _x2) {return _wxappDecryptData.apply(this, arguments);}return wxappDecryptData;}() }]);return Login;}();var _default =





new Login();exports.default = _default;

/***/ }),
/* 68 */
/*!*************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/gen-link.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));var _Bridge = _interopRequireDefault(__webpack_require__(/*! ./Bridge */ 69));
var _axios = _interopRequireDefault(__webpack_require__(/*! @/config/axios.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _default(_x) {return _ref.apply(this, arguments);}function _ref() {_ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(
  function _callee(link) {var result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            console.info(link);_context.t0 =
            link.type;_context.next = _context.t0 ===
            'item' ? 4 : _context.t0 ===


            'couponCenter' ? 6 : _context.t0 ===


            'coupon' ? 8 : _context.t0 ===

















            'brand' ? 16 : _context.t0 ===


            'topic' ? 18 : _context.t0 ===


            'group' ? 20 : _context.t0 ===


            'home' ? 22 : _context.t0 ===


            'category' ? 24 : _context.t0 ===


            'cart' ? 26 : _context.t0 ===


            'userCenter' ? 28 : _context.t0 ===


            'url' ? 30 : 32;break;case 4:_Bridge.default.goItem(link.id);return _context.abrupt("break", 32);case 6:_Bridge.default.goCouponCenter();return _context.abrupt("break", 32);case 8:wx.showLoading({ title: '正在领取...' });_context.next = 11;return _axios.default.post('/coupon/receive', { couponId: link.codes });case 11:result = _context.sent;wx.hideLoading();console.info(result);if (result.code == 200) {wx.showToast({ icon: 'none', title: result.msg });} else {wx.showToast(result.msg);}return _context.abrupt("break", 32);case 16:_Bridge.default.goBrand(link.id);return _context.abrupt("break", 32);case 18:_Bridge.default.goTopic(link.id);return _context.abrupt("break", 32);case 20:_Bridge.default.goGroup(link.id);return _context.abrupt("break", 32);case 22:_Bridge.default.goHome();return _context.abrupt("break", 32);case 24:_Bridge.default.goCategory(link.id);return _context.abrupt("break", 32);case 26:_Bridge.default.goCart();return _context.abrupt("break", 32);case 28:_Bridge.default.goUserCenter();return _context.abrupt("break", 32);case 30:
            _Bridge.default.goURL(link.url);return _context.abrupt("break", 32);case 32:case "end":return _context.stop();}}}, _callee);}));return _ref.apply(this, arguments);}

/***/ }),
/* 69 */
/*!***********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/Bridge.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _env = _interopRequireDefault(__webpack_require__(/*! @/config/env */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
function callApp(method, params) {
  if (_env.default.IS_IOS) {
    window.webkit.messageHandlers[method].postMessage(params);
  } else {
    window.native[method](params);
  }
}

var Bridge = {
  //跳转url
  goURL: function goURL(url) {
    wx.navigateTo({
      url: '/pages/webview/main?link=' + encodeURIComponent(link) });

  },
  goTopic: function goTopic(id) {
    wx.navigateTo({
      url: '/pages/topic/main?id=' + id });

  },
  goItem: function goItem(id) {
    wx.navigateTo({
      url: '/pages/item/main?id=' + id });

  },
  goCouponCenter: function goCouponCenter(id) {
    wx.navigateTo({
      url: '/pages/coupon-center/main' });

  },
  goCategory: function goCategory(id) {
    wx.navigateTo({
      url: '/pages/item-list/main?dispId=' + id });

  },
  goBrand: function goBrand(id) {
    wx.navigateTo({
      url: '/pages/brand/main?id=' + id });

  },
  goGroup: function goGroup(id) {
    wx.navigateTo({
      url: '/pages/item-list/main?planId=' + id });

  },
  goCart: function goCart() {
    wx.switchTab({
      url: '/pages/cart/main' });

  },
  goUserCenter: function goUserCenter() {
    wx.switchTab({
      url: '/pages/me/main' });

  },
  goHome: function goHome() {
    wx.switchTab({
      url: '/pages/index/main' });

  },
  goLogin: function goLogin() {
    wx.navigateTo({
      url: '/pages/login/main' });

  } };var _default =

Bridge;exports.default = _default;

/***/ }),
/* 70 */
/*!***************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/img-format.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default; // 判断是否支持webp格式的图片
var isSupportWebp = false;
//
// const image = new Image()
// image.onload = image.onerror = () => { isSupportWebp = image.width === 1 }
// image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='

/**
 * 封装对阿里云图片的操作(默认会压缩质量到80以及使用webp格式)
 *
 * 直接使用
 * XIU.getImgFormat('https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1553675971514.jpg')
 *
 * 假如想用点参数
 * XIU.getImgFormat('https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1553675971514.jpg?x-image-process=image/resize,w_750', '/quality,q_80/format,webp')
 *
 * 更多params参数请参考百度云官方文档
 * https://support.huaweicloud.com/fg-obs/obs_01_0224.html
 */
function _default(url) {var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!url) return '';
  if (!/quality/.test(params)) {
    //没有设置质量, 那么默认给80, 但gif图片不设置, 不然就不动了
    params += '/quality,q_80';
  }
  if (!/format/i.test(params) && isSupportWebp) {
    //如果没有设置格式,同时支持webp格式, 那么用webp
    params += '/format,webp';
  }
  if (!/interlace/.test(params)) {
    params += '/interlace,1';
  }
  params = 'x-image-process=image' + params;
  return url.replace(/^http(s?)/i, 'https') + '?' + params;
}

/***/ }),
/* 71 */
/*!****************************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/time-format.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 时间格式化组件
 * create by jianbing.wang
 * create time 2017-03-03
 */
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  /**
   * 时间格式化
   * @param {Number} unixTime 当前时间，精确到毫秒
   * @param {Object} format 时间格式；例如：{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}
   *  年:YYYY或YY,例如：2016或16
   *  月:MM或M,例如：03或3
   *  日:DD或D,例如：06或6
   *  时:hh或h(12小时制)HH或H(24小时制),
   *  分:mm或m,
   *  秒:ss或s,
   *  星期：W，
   */
  fetch: function fetch(unixTime, format) {
    if (!unixTime || isNaN(unixTime)) {
      return '';
    }
    var time = new Date(unixTime);
    var year = time.getFullYear(); //年
    var month = time.getMonth() + 1; //月
    var day = time.getDate(); //日
    var week = time.getDay(); //星期
    var hour = time.getHours(); //时
    var minute = time.getMinutes(); //分
    var second = time.getSeconds(); //秒
    var weekEnum = {
      '0': '日',
      '1': '一',
      '2': '二',
      '3': '三',
      '4': '四',
      '5': '五',
      '6': '六' };

    var result = format;
    result = result.replace(/\{YYYY\}/g, year);
    result = result.replace(/\{YY\}/g, year.toString().substr(2, 2));
    result = result.replace(/\{MM\}/g, month > 9 ? month : '0' + month);
    result = result.replace(/\{M\}/g, month);
    result = result.replace(/\{DD\}/g, day > 9 ? day : '0' + day);
    result = result.replace(/\{D\}/g, day);
    result = result.replace(/\{HH\}/g, hour > 9 ? hour : '0' + hour);
    result = result.replace(/\{H\}/g, hour);
    if (hour > 12) {
      hour = hour - 12;
    }
    result = result.replace(/\{hh\}/g, hour > 9 ? hour : '0' + hour);
    result = result.replace(/\{h\}/g, hour);
    result = result.replace(/\{mm\}/g, minute > 9 ? minute : '0' + minute);
    result = result.replace(/\{m\}/g, minute);
    result = result.replace(/\{ss\}/g, second > 9 ? second : '0' + second);
    result = result.replace(/\{s\}/g, second);
    result = result.replace(/\{W\}/g, weekEnum[week]);
    return result;
  },
  //时间戳转日期格式
  getDate: function getDate(timestamp, hasTime) {
    timestamp = Number(timestamp);
    var d = new Date(timestamp); //根据时间戳生成的时间对象
    var date = d.getFullYear() + "-" + (
    d.getMonth() + 1) + "-" +
    d.getDate();
    if (hasTime) {
      date += " " +
      d.getHours() + ":" +
      d.getMinutes() + ":" +
      d.getSeconds();
    }
    return date;
  },
  //获取时间对象
  getDateObject: function getDateObject(timestamp) {
    timestamp = Number(timestamp);
    var d = new Date(timestamp); //根据时间戳生成的时间对象
    var timeOject = {};
    timeOject.year = d.getFullYear();
    timeOject.month = d.getMonth() + 1; // 外国系统月份从0开始
    timeOject.day = d.getDate();
    timeOject.hour = d.getHours();
    timeOject.minute = d.getMinutes();
    timeOject.second = d.getSeconds();
    return timeOject;
  },
  //时间戳转化为时间
  timeStampToTime: function timeStampToTime(timestamp) {
    timestamp = Math.abs(parseInt(timestamp));
    var time = {};
    time.hours = parseInt(timestamp / (60 * 60));
    time.minutes = parseInt((timestamp - time.hours * 3600) / 60);
    time.seconds = timestamp - time.hours * 3600 - time.minutes * 60;
    return time;
  },
  //时间戳转化为时间
  timeStampToTimeStr: function timeStampToTimeStr(timestamp) {
    timestamp = Math.abs(parseInt(timestamp));
    var time = {};
    time.hours = parseInt(timestamp / (60 * 60));
    if (time.hours < 10) {
      time.hours = '0' + time.hours;
    }
    time.minutes = parseInt((timestamp - time.hours * 3600) / 60);
    if (time.minutes < 10) {
      time.minutes = '0' + time.minutes;
    }
    time.seconds = timestamp - time.hours * 3600 - time.minutes * 60;
    if (time.seconds < 10) {
      time.seconds = '0' + time.seconds;
    }
    return time;
  } };exports.default = _default;

/***/ }),
/* 72 */
/*!********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/bus.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // eventbus 组件传递
var _default = new _vue.default();exports.default = _default;

/***/ }),
/* 73 */
/*!********************************************************************************!*\
  !*** /Users/tongjiangfei/Downloads/workspace/learn/pop-admin-uni/utils/o2s.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * style对象转style字符串
                                                                                                      * 比如
                                                                                                      *  {
                                                                                                      *      fontSize: '30rpx',
                                                                                                      *      color   : '#ccc'
                                                                                                      *  }
                                                                                                      * 
                                                                                                      * 转成
                                                                                                      * "font-size:30rpx;color:#ccc;"
                                                                                                      */var _default =

function _default(style) {return (
    _.transform(style, function (result, value, key) {
      result.push(_.kebabCase(key) + ':' + value + ';');
    }, []).
    join(''));};exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map