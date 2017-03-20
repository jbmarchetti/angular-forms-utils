/**
 * angular-forms-utils - Angular2 Reactive forms utils
 * @version v0.0.4
 * @author Jean Baptiste Marchetti
 * @link https://github.com/jbmarchetti/angular-forms-utils#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/common"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "rxjs/Observable", "@angular/common", "rxjs/add/observable/of", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["angularFormsUtils"] = factory(require("@angular/core"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/common"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["angularFormsUtils"] = factory(root["ng"]["core"], root["ng"]["forms"], root["Rx"], root["ng"]["common"], root["Rx"], root["Rx"], root["Rx"], root["Rx"], root["Rx"], root["Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__translate_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__missing_translation_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateService; });













var USE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('USE_STORE');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     */
    function TranslateService(store, currentLoader, parser, missingTranslationHandler, isolate) {
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            pending = this.getTranslation(lang);
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            Object.assign(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_8__translate_store__["a" /* TranslateStore */], },
        { type: __WEBPACK_IMPORTED_MODULE_9__translate_loader__["a" /* TranslateLoader */], },
        { type: __WEBPACK_IMPORTED_MODULE_11__translate_parser__["a" /* TranslateParser */], },
        { type: __WEBPACK_IMPORTED_MODULE_10__missing_translation_handler__["a" /* MissingTranslationHandler */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
    ]; };
    return TranslateService;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/**
 * Static variables that you can override
 *   1. days.           default 1,2,....31
 *   2. daysOfWeek,     default Sunday, Monday, .....
 *   3. firstDayOfWeek, default 0 as in Sunday
 *   4. months,         default January, February
 *   5. formatDate(d)   default returns YYYY-MM-DD HH:MM
 *   6. parseDate(str)  default returns date from YYYY-MM-DD HH:MM
 */
var Ng2Datetime = (function () {
    function Ng2Datetime() {
    }
    Ng2Datetime.formatDate = function (d, format, dateOnly) {
        var ret;
        if (d && !format) {
            // return d.toLocaleString('en-us', hash); // IE11 does not understand this
            var pad0 = function (number) { return ("0" + number).slice(-2); };
            ret = d.getFullYear() + '-' + pad0(d.getMonth() + 1) + '-' + pad0(d.getDate());
            ret += dateOnly ? '' : ' ' + pad0(d.getHours()) + ':' + pad0(d.getMinutes());
            return ret;
        }
        else if (d && moment) {
            return moment(d).format(format);
        }
        else {
            return '';
        }
    };
    Ng2Datetime.parseDate = function (dateStr, parseFormat, dateFormat) {
        if (typeof moment === 'undefined') {
            dateStr = Ng2Datetime.removeTimezone(dateStr);
            dateStr = dateStr + Ng2Datetime.addDSTOffset(dateStr);
            return Ng2Datetime.parseFromDefaultFormat(dateStr);
        }
        else if (dateFormat || parseFormat) {
            // try parse using each format because changing format programmatically calls this twice,
            // once with string in parse format and once in date format
            var formats = [];
            if (parseFormat) {
                formats.push(parseFormat);
            }
            if (dateFormat) {
                formats.push(dateFormat);
            }
            var m = moment(dateStr, formats);
            var date = m.toDate();
            if (!m.isValid()) {
                date = moment(dateStr, moment.ISO_8601).toDate(); // parse as ISO format
            }
            return date;
        }
        else if (dateStr.length > 4) {
            var date = moment(dateStr, 'YYYY-MM-DD HH:mm').toDate();
            return date;
        }
        else {
            return new Date();
        }
    };
    //remove timezone
    Ng2Datetime.removeTimezone = function (dateStr) {
        // if no time is given, add 00:00:00 at the end
        var matches = dateStr.match(/[0-9]{2}:/);
        dateStr += matches ? '' : ' 00:00:00';
        return dateStr.replace(/([0-9]{2}-[0-9]{2})-([0-9]{4})/, '$2-$1') //mm-dd-yyyy to yyyy-mm-dd
            .replace(/([\/-][0-9]{2,4})\ ([0-9]{2}\:[0-9]{2}\:)/, '$1T$2') //reformat for FF
            .replace(/EDT|EST|CDT|CST|MDT|PDT|PST|UT|GMT/g, '') //remove timezone
            .replace(/\s*\(\)\s*/, '') //remove timezone
            .replace(/[\-\+][0-9]{2}:?[0-9]{2}$/, '') //remove timezone
            .replace(/000Z$/, '00'); //remove timezone
    };
    Ng2Datetime.addDSTOffset = function (dateStr) {
        var date = Ng2Datetime.parseFromDefaultFormat(dateStr);
        var jan = new Date(date.getFullYear(), 0, 1);
        var jul = new Date(date.getFullYear(), 6, 1);
        var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
        var isDST = date.getTimezoneOffset() < stdTimezoneOffset;
        var offset = isDST ? stdTimezoneOffset - 60 : stdTimezoneOffset;
        var diff = offset >= 0 ? '-' : '+';
        offset = Math.abs(offset);
        return diff +
            ('0' + (offset / 60)).slice(-2) + ':' +
            ('0' + (offset % 60)).slice(-2);
    };
    ;
    Ng2Datetime.parseFromDefaultFormat = function (dateStr) {
        var tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
        return new Date(parseInt(tmp[0], 10), parseInt(tmp[1], 10) - 1, parseInt(tmp[2], 10), parseInt(tmp[3] || '0', 10), parseInt(tmp[4] || '0', 10), parseInt(tmp[5] || '0', 10));
    };
    Ng2Datetime.prototype.getMonthData = function (year, month) {
        year = month > 11 ? year + 1 :
            month < 0 ? year - 1 : year;
        month = (month + 12) % 12;
        var firstDayOfMonth = new Date(year, month, 1);
        var lastDayOfMonth = new Date(year, month + 1, 0);
        var lastDayOfPreviousMonth = new Date(year, month, 0);
        var daysInMonth = lastDayOfMonth.getDate();
        var daysInLastMonth = lastDayOfPreviousMonth.getDate();
        var dayOfWeek = firstDayOfMonth.getDay();
        // Ensure there are always leading days to give context
        var leadingDays = (dayOfWeek - Ng2Datetime.firstDayOfWeek + 7) % 7 || 7;
        var trailingDays = Ng2Datetime.days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
        if (trailingDays.length > 7) {
            trailingDays = trailingDays.slice(0, trailingDays.length - 7);
        }
        var localizedDaysOfWeek = Ng2Datetime.daysOfWeek
            .concat(Ng2Datetime.daysOfWeek)
            .splice(Ng2Datetime.firstDayOfWeek, 7);
        var monthData = {
            year: year,
            month: month,
            weekends: Ng2Datetime.weekends,
            firstDayOfWeek: Ng2Datetime.firstDayOfWeek,
            fullName: Ng2Datetime.months[month].fullName,
            shortName: Ng2Datetime.months[month].shortName,
            localizedDaysOfWeek: localizedDaysOfWeek,
            days: Ng2Datetime.days.slice(0, daysInMonth),
            leadingDays: Ng2Datetime.days.slice(-leadingDays - (31 - daysInLastMonth), daysInLastMonth),
            trailingDays: trailingDays
        };
        return monthData;
    };
    Ng2Datetime.locale = {
        date: 'date',
        time: 'time',
        year: 'year',
        month: 'month',
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        currentTime: "current time"
    };
    Ng2Datetime.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    Ng2Datetime.weekends = [0, 6];
    Ng2Datetime.daysOfWeek = typeof moment === 'undefined' ? [
        { fullName: 'Sunday', shortName: 'Su' },
        { fullName: 'Monday', shortName: 'Mo' },
        { fullName: 'Tuesday', shortName: 'Tu' },
        { fullName: 'Wednesday', shortName: 'We' },
        { fullName: 'Thursday', shortName: 'Th' },
        { fullName: 'Friday', shortName: 'Fr' },
        { fullName: 'Saturday', shortName: 'Sa' }
    ] : moment.weekdays().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment.weekdaysShort()[index].substr(0, 2)
        };
    });
    Ng2Datetime.firstDayOfWeek = typeof moment === 'undefined' ? 0 : moment.localeData().firstDayOfWeek();
    Ng2Datetime.months = typeof moment === 'undefined' ? [
        { fullName: 'January', shortName: 'Jan' },
        { fullName: 'February', shortName: 'Feb' },
        { fullName: 'March', shortName: 'Mar' },
        { fullName: 'April', shortName: 'Apr' },
        { fullName: 'May', shortName: 'May' },
        { fullName: 'June', shortName: 'Jun' },
        { fullName: 'July', shortName: 'Jul' },
        { fullName: 'August', shortName: 'Aug' },
        { fullName: 'September', shortName: 'Sep' },
        { fullName: 'October', shortName: 'Oct' },
        { fullName: 'November', shortName: 'Nov' },
        { fullName: 'December', shortName: 'Dec' }
    ] : moment.months().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment['monthsShort']()[index]
        };
    });
    Ng2Datetime.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2Datetime.ctorParameters = [];
    return Ng2Datetime;
}());
exports.Ng2Datetime = Ng2Datetime;
//# sourceMappingURL=ng2-datetime.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FakeMissingTranslationHandler; });

var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    FakeMissingTranslationHandler.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    FakeMissingTranslationHandler.ctorParameters = function () { return []; };
    return FakeMissingTranslationHandler;
}());


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeLoader; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        _super.apply(this, arguments);
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    TranslateFakeLoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TranslateFakeLoader.ctorParameters = function () { return []; };
    return TranslateFakeLoader;
}(TranslateLoader));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateDefaultParser; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        _super.apply(this, arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(r) ? r : substring;
        });
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    TranslateDefaultParser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TranslateDefaultParser.ctorParameters = function () { return []; };
    return TranslateDefaultParser;
}(TranslateParser));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_datetime_1 = __webpack_require__(4);
//@TODO
// . display currently selected day
/**
 * show a selected date in monthly calendar
 */
var Ng2DatetimePickerComponent = (function () {
    function Ng2DatetimePickerComponent(elementRef, ng2Datetime, cdRef) {
        this.ng2Datetime = ng2Datetime;
        this.cdRef = cdRef;
        this.minuteStep = 1;
        this.selected$ = new core_1.EventEmitter();
        this.closing$ = new core_1.EventEmitter();
        this.locale = ng2_datetime_1.Ng2Datetime.locale;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "year", {
        get: function () {
            return this.selectedDate.getFullYear();
        },
        set: function (year) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "month", {
        get: function () {
            return this.selectedDate.getMonth();
        },
        set: function (month) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "day", {
        get: function () {
            return this.selectedDate.getDate();
        },
        set: function (day) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "monthData", {
        get: function () {
            return this._monthData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "today", {
        get: function () {
            var dt = new Date();
            dt.setHours(0);
            dt.setMinutes(0);
            dt.setSeconds(0);
            dt.setMilliseconds(0);
            return dt;
        },
        set: function (today) { },
        enumerable: true,
        configurable: true
    });
    Ng2DatetimePickerComponent.prototype.isWeekend = function (dayNum, month) {
        if (typeof month === 'undefined') {
            return ng2_datetime_1.Ng2Datetime.weekends.indexOf(dayNum % 7) !== -1; //weekday index
        }
        else {
            var weekday = this.toDate(dayNum, month).getDay();
            return ng2_datetime_1.Ng2Datetime.weekends.indexOf(weekday) !== -1;
        }
    };
    Ng2DatetimePickerComponent.prototype.ngOnInit = function () {
        if (!this.defaultValue || isNaN(this.defaultValue.getTime())) {
            this.defaultValue = new Date();
        }
        this.selectedDate = this.defaultValue;
        // set hour and minute using moment if available to avoid having Javascript change timezones
        if (typeof moment === 'undefined') {
            this.hour = this.selectedDate.getHours();
            this.minute = this.selectedDate.getMinutes();
        }
        else {
            var m = moment(this.selectedDate);
            this.hour = m.hours();
            this.minute = m.minute();
        }
        this._monthData = this.ng2Datetime.getMonthData(this.year, this.month);
    };
    Ng2DatetimePickerComponent.prototype.toDate = function (day, month) {
        return new Date(this._monthData.year, month || this._monthData.month, day);
    };
    Ng2DatetimePickerComponent.prototype.toDateOnly = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    };
    Ng2DatetimePickerComponent.prototype.selectCurrentTime = function () {
        this.hour = (new Date()).getHours();
        this.minute = (new Date()).getMinutes();
        this.selectDateTime();
    };
    /**
     * set the selected date and close it when closeOnSelect is true
     * @param date {Date}
     */
    Ng2DatetimePickerComponent.prototype.selectDateTime = function (date) {
        var _this = this;
        this.selectedDate = date || this.selectedDate;
        if (this.isDateDisabled(this.selectedDate)) {
            return false;
        }
        // editing hours and minutes via javascript date methods causes date to lose timezone info,
        // so edit using moment if available
        var hour = parseInt('' + this.hour || '0', 10);
        var minute = parseInt('' + this.minute || '0', 10);
        if (typeof moment !== 'undefined') {
            // here selected date has a time of 00:00 in local time,
            // so build moment by getting year/month/day separately
            // to avoid it saving as a day earlier
            var m = moment([this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate()]);
            m.hours(hour);
            m.minutes(minute);
            this.selectedDate = m.toDate();
        }
        else {
            this.selectedDate.setHours(hour);
            this.selectedDate.setMinutes(minute);
        }
        //console.log('this.selectedDate', this.selectedDate)
        this.selectedDate.toString = function () {
            return ng2_datetime_1.Ng2Datetime.formatDate(_this.selectedDate, _this.dateFormat, _this.dateOnly);
        };
        this.selected$.emit(this.selectedDate);
    };
    ;
    /**
     * show prev/next month calendar
     */
    Ng2DatetimePickerComponent.prototype.updateMonthData = function (num) {
        this._monthData = this.ng2Datetime.getMonthData(this._monthData.year, this._monthData.month + num);
    };
    Ng2DatetimePickerComponent.prototype.isDateDisabled = function (date) {
        var dateInTime = date.getTime();
        this.disabledDatesInTime =
            this.disabledDatesInTime || (this.disabledDates || []).map(function (d) { return d.getTime(); });
        if (this.minDate && (dateInTime < this.minDate.getTime())) {
            return true;
        }
        else if (this.maxDate && (dateInTime > this.maxDate.getTime())) {
            return true;
        }
        else if (this.disabledDatesInTime.indexOf(dateInTime) >= 0) {
            return true;
        }
        return false;
    };
    Ng2DatetimePickerComponent.prototype.close = function () {
        this.closing$.emit(true);
    };
    Ng2DatetimePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [ng2_datetime_1.Ng2Datetime],
                    selector: 'ng2-datetime-picker',
                    template: "\n<div class=\"closing-layer\" (click)=\"close()\" *ngIf=\"showCloseLayer\" ></div>\n<div class=\"ng2-datetime-picker\">\n  <div class=\"close-button\" *ngIf=\"showCloseButton\" (click)=\"close()\"></div>\n  \n  <!-- Month - Year  -->\n  <div class=\"month\" *ngIf=\"!timeOnly\">\n    <b class=\"prev_next prev year\" (click)=\"updateMonthData(-12)\">&laquo;</b>\n    <b class=\"prev_next prev month\" (click)=\"updateMonthData(-1)\">&lsaquo;</b>\n     <span title=\"{{monthData?.fullName}}\">\n           {{monthData?.shortName}}\n     </span>\n    {{monthData.year}}\n    <b class=\"prev_next next year\" (click)=\"updateMonthData(+12)\">&raquo;</b>\n    <b class=\"prev_next next month\" (click)=\"updateMonthData(+1)\">&rsaquo;</b>\n  </div>\n\n  <!-- Date -->\n  <div class=\"days\" *ngIf=\"!timeOnly\">\n\n    <!-- Su Mo Tu We Th Fr Sa -->\n    <div class=\"day-of-week\"\n         *ngFor=\"let dayOfWeek of monthData.localizedDaysOfWeek; let ndx=index\"\n         [class.weekend]=\"isWeekend(ndx + monthData.firstDayOfWeek)\"\n         title=\"{{dayOfWeek.fullName}}\">\n      {{dayOfWeek.shortName}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.leadingDays.length < 7\">\n      <div class=\"day\"\n          (click)=\"updateMonthData(-1)\"\n           *ngFor=\"let dayNum of monthData.leadingDays\">\n        {{dayNum}}\n      </div>\n    </div>\n\n    <div class=\"day\"\n         *ngFor=\"let dayNum of monthData.days\"\n         (click)=\"selectDateTime(toDate(dayNum))\"\n         title=\"{{monthData.year}}-{{monthData.month+1}}-{{dayNum}}\"\n         [ngClass]=\"{\n           selectable: !isDateDisabled(toDate(dayNum)),\n           selected: toDate(dayNum).getTime() === toDateOnly(selectedDate).getTime(),\n           today: toDate(dayNum).getTime() === today.getTime(),\n           weekend: isWeekend(dayNum, monthData.month)\n         }\">\n      {{dayNum}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.trailingDays.length < 7\">\n      <div class=\"day\"\n           (click)=\"updateMonthData(+1)\"\n           *ngFor=\"let dayNum of monthData.trailingDays\">\n        {{dayNum}}\n      </div>\n    </div>\n  </div>\n\n  <!-- Time -->\n  <div class=\"time\" id=\"time\" *ngIf=\"!dateOnly\">\n    <div class=\"select-current-time\" (click)=\"selectCurrentTime()\">{{locale.currentTime}}</div>\n    <label class=\"timeLabel\">{{locale.time}}</label>\n    <span class=\"timeValue\">\n      {{(\"0\"+hour).slice(-2)}} : {{(\"0\"+minute).slice(-2)}}\n    </span><br/>\n    <label class=\"hourLabel\">{{locale.hour}}:</label>\n    <input #hours class=\"hourInput\"\n           tabindex=\"90000\"\n           (change)=\"selectDateTime()\"\n           type=\"range\"\n           min=\"{{minHour || 0}}\"\n           max=\"{{maxHour || 23}}\"\n           [(ngModel)]=\"hour\" />\n    <label class=\"minutesLabel\">{{locale.minute}}:</label>\n    <input #minutes class=\"minutesInput\"\n           tabindex=\"90000\"\n           step=\"{{minuteStep}}\"\n           (change)=\"selectDateTime()\"\n           type=\"range\" min=\"0\" max=\"59\" range=\"10\" [(ngModel)]=\"minute\"/>\n  </div>\n</div>\n  ",
                    styles: [
                        "\n@keyframes slideDown {\n  0% {\n    transform:  translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.ng2-datetime-picker-wrapper {\n  position: relative;\n}\n\n.ng2-datetime-picker {\n  color: #333;\n  outline-width: 0;\n  font: normal 14px sans-serif;\n  border: 1px solid #ddd;\n  display: inline-block;\n  background: #fff;\n  animation: slideDown 0.1s ease-in-out;\n  animation-fill-mode: both;\n}\n.ng2-datetime-picker .close-button {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  right: 0;\n  z-index: 1;\n  padding: 0 5px;\n}\n.ng2-datetime-picker .close-button:before {\n  content: 'X';\n  cursor: pointer;\n  color: #ff0000;\n}\n.ng2-datetime-picker > .month {\n  text-align: center;\n  line-height: 22px;\n  padding: 10px;\n  background: #fcfcfc;\n  text-transform: uppercase;\n  font-weight: bold;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n}\n.ng2-datetime-picker > .month > .prev_next {\n  color: #555;\n  display: block;\n  font: normal 24px sans-serif;\n  outline: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  width: 25px;\n  text-align: center;\n}\n.ng2-datetime-picker > .month > .prev_next:hover {\n  background-color: #333;\n  color: #fff;\n}\n.ng2-datetime-picker > .month > .prev_next.prev {\n  float: left;\n}\n.ng2-datetime-picker > .month > .prev_next.next {\n  float: right;\n}\n.ng2-datetime-picker > .days {\n  width: 210px; /* 30 x 7 */\n  margin: 10px;\n  text-align: center;\n}\n.ng2-datetime-picker > .days .day-of-week,\n.ng2-datetime-picker > .days .day {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: 1px solid transparent;\n  width: 30px;\n  line-height: 28px;\n  float: left;\n}\n.ng2-datetime-picker > .days .day-of-week {\n  font-weight: bold;\n}\n.ng2-datetime-picker > .days .day-of-week.weekend {\n  color: #ccc;\n  background-color: inherit;\n}\n.ng2-datetime-picker > .days .day:not(.selectable) {\n  color: #ccc;\n  cursor: default;\n}\n.ng2-datetime-picker > .days .weekend {\n  color: #ccc;\n  background-color: #eee;\n}\n.ng2-datetime-picker > .days .day.selectable  {\n  cursor: pointer;\n}\n.ng2-datetime-picker > .days .day.selected {\n  background: gray;\n  color: #fff;\n}\n.ng2-datetime-picker > .days .day:not(.selected).selectable:hover {\n  background: #eee;\n}\n.ng2-datetime-picker > .days:after {\n  content: '';\n  display: block;\n  clear: left;\n  height: 0;\n}\n.ng2-datetime-picker .time {\n  position: relative;\n  padding: 10px;\n  text-transform: Capitalize;\n}\n.ng2-datetime-picker .select-current-time {\n  position: absolute;\n  top: 1em;\n  right: 5px;\n  z-index: 1;\n  cursor: pointer;\n  color: #0000ff;\n}\n.ng2-datetime-picker .hourLabel,\n.ng2-datetime-picker .minutesLabel {\n  display: inline-block;\n  width: 40px;\n  text-align: right;\n}\n.ng2-datetime-picker input[type=range] {\n  width: 200px;\n}\n\n.closing-layer {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0,0,0,0);\n}\n\n@media (max-width: 767px) {\n  .ng2-datetime-picker {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;    \n    animation: slideUp 0.1s ease-in-out;\n  }\n\n  .ng2-datetime-picker .days {\n    margin: 10px auto;\n  }\n\n  .closing-layer {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0,0,0,0.2);\n  }\n}\n  "
                    ],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: ng2_datetime_1.Ng2Datetime, },
        { type: core_1.ChangeDetectorRef, },
    ];
    Ng2DatetimePickerComponent.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'selectedDate': [{ type: core_1.Input, args: ['selected-date',] },],
        'hour': [{ type: core_1.Input, args: ['hour',] },],
        'minute': [{ type: core_1.Input, args: ['minute',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minuteStep',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseButton': [{ type: core_1.Input, args: ['show-close-button',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'selected$': [{ type: core_1.Output, args: ['selected$',] },],
        'closing$': [{ type: core_1.Output, args: ['closing$',] },],
        'hours': [{ type: core_1.ViewChild, args: ['hours',] },],
        'minutes': [{ type: core_1.ViewChild, args: ['minutes',] },],
    };
    return Ng2DatetimePickerComponent;
}());
exports.Ng2DatetimePickerComponent = Ng2DatetimePickerComponent;
//# sourceMappingURL=ng2-datetime-picker.component.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (this.currentParams !== params) {
                this.currentParams = params;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                }
                else {
                    var content = node.textContent.trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = node.textContent;
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = node.textContent;
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                node.textContent = _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue);
                _this._ref.markForCheck();
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[translate],[ngx-translate]'
                },] },
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["b" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    TranslateDirective.propDecorators = {
        'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TranslateDirective;
}());


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    TranslatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'translate',
                    pure: false // required to update the value when the promise is resolved
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["b" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return TranslatePipe;
}());


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });

var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TranslateStore;
}());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var ng2_datetime_picker_component_1 = __webpack_require__(8);
var ng2_datetime_1 = __webpack_require__(4);
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
}
;
function isNaN(value) {
    if (Number.isNaN) {
        return Number.isNaN(value);
    }
    return value !== value;
}
;
/**
 * If the given string is not a valid date, it defaults back to today
 */
var Ng2DatetimePickerDirective = (function () {
    function Ng2DatetimePickerDirective(resolver, viewContainerRef, parent) {
        var _this = this;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.parent = parent;
        this.closeOnSelect = true;
        this.ngModelChange = new core_1.EventEmitter();
        this.valueChanged$ = new core_1.EventEmitter();
        this.popupClosed$ = new core_1.EventEmitter();
        /* input element string value is changed */
        this.inputElValueChanged = function (date) {
            _this.setInputElDateValue(date);
            _this.el.value = date.toString();
            if (_this.ctrl) {
                _this.ctrl.patchValue(_this.el.value);
            }
            _this.ngModel = _this.el['dateValue'];
            if (_this.ngModel) {
                _this.ngModel.toString = function () { return _this.el.value; };
                _this.ngModelChange.emit(_this.ngModel);
            }
        };
        //show datetimePicker element below the current element
        this.showDatetimePicker = function (event) {
            if (_this.componentRef) {
                return;
            }
            var factory = _this.resolver.resolveComponentFactory(ng2_datetime_picker_component_1.Ng2DatetimePickerComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            _this.ng2DatetimePickerEl = _this.componentRef.location.nativeElement;
            _this.ng2DatetimePickerEl.setAttribute('tabindex', '32767');
            _this.ng2DatetimePickerEl.addEventListener('mousedown', function (event) {
                _this.clickedDatetimePicker = true;
            });
            _this.ng2DatetimePickerEl.addEventListener('mouseup', function (event) {
                _this.clickedDatetimePicker = false;
            });
            //This is for material design. MD has click event to make blur to happen
            _this.ng2DatetimePickerEl.addEventListener('click', function (event) {
                event.stopPropagation();
            });
            _this.ng2DatetimePickerEl.addEventListener('blur', function (event) {
                _this.hideDatetimePicker();
            });
            var component = _this.componentRef.instance;
            component.defaultValue = _this.defaultValue || _this.el['dateValue'];
            component.dateFormat = _this.dateFormat;
            component.dateOnly = _this.dateOnly;
            component.timeOnly = _this.timeOnly;
            component.minuteStep = _this.minuteStep;
            component.minDate = _this.minDate;
            component.maxDate = _this.maxDate;
            component.minHour = _this.minHour;
            component.maxHour = _this.maxHour;
            component.disabledDates = _this.disabledDates;
            component.showCloseButton = _this.closeOnSelect === false;
            component.showCloseLayer = _this.showCloseLayer;
            _this.styleDatetimePicker();
            component.selected$.subscribe(_this.dateSelected);
            component.closing$.subscribe(function () {
                _this.hideDatetimePicker();
            });
            //Hack not to fire tab keyup event
            // this.justShown = true;
            // setTimeout(() => this.justShown = false, 100);
        };
        this.dateSelected = function (date) {
            _this.el.tagName === 'INPUT' && _this.inputElValueChanged(date);
            _this.valueChanged$.emit(date);
            if (_this.closeOnSelect !== false) {
                _this.hideDatetimePicker();
            }
            else {
                _this.ng2DatetimePickerEl.focus();
            }
        };
        this.hideDatetimePicker = function (event) {
            if (_this.clickedDatetimePicker) {
                return false;
            }
            else {
                setTimeout(function () {
                    if (_this.componentRef) {
                        _this.componentRef.destroy();
                        _this.componentRef = undefined;
                    }
                    _this.popupClosed$.emit(true);
                });
            }
            event && event.stopPropagation();
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    /**
     * convert defaultValue, minDate, maxDate, minHour, and maxHour to proper types
     */
    Ng2DatetimePickerDirective.prototype.normalizeInput = function () {
        if (this.defaultValue && typeof this.defaultValue === 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.defaultValue);
            this.defaultValue = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minDate && typeof this.minDate == 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.minDate);
            this.minDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.maxDate && typeof this.maxDate == 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.minDate);
            this.maxDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minHour) {
            if (this.minHour instanceof Date) {
                this.minHour = this.minHour.getHours();
            }
            else {
                var hour = Number(this.minHour.toString());
                if (!isInteger(hour) || hour > 23 || hour < 0) {
                    this.minHour = undefined;
                }
            }
        }
        if (this.maxHour) {
            if (this.maxHour instanceof Date) {
                this.maxHour = this.maxHour.getHours();
            }
            else {
                var hour = Number(this.maxHour.toString());
                if (!isInteger(hour) || hour > 23 || hour < 0) {
                    this.maxHour = undefined;
                }
            }
        }
    };
    Ng2DatetimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.parent && this.formControlName) {
            if (this.parent["form"]) {
                this.ctrl = this.parent["form"].get(this.formControlName);
            }
            else if (this.parent["name"]) {
                var formDir = this.parent.formDirective;
                if (formDir instanceof forms_1.FormGroupDirective && formDir.form.get(this.parent["name"])) {
                    this.ctrl = formDir.form.get(this.parent["name"]).get(this.formControlName);
                }
            }
            if (this.ctrl) {
                this.sub = this.ctrl.valueChanges.subscribe(function (date) {
                    _this.setInputElDateValue(date);
                    _this.updateDatepicker();
                });
            }
        }
        this.normalizeInput();
        //wrap this element with a <div> tag, so that we can position dynamic element correctly
        var wrapper = document.createElement("div");
        wrapper.className = 'ng2-datetime-picker-wrapper';
        this.el.parentElement.insertBefore(wrapper, this.el.nextSibling);
        wrapper.appendChild(this.el);
        if (this.ngModel && this.ngModel.getTime) {
            this.ngModel.toString = function () { return ng2_datetime_1.Ng2Datetime.formatDate(_this.ngModel, _this.dateFormat, _this.dateOnly); };
        }
        setTimeout(function () {
            if (_this.el.tagName === 'INPUT') {
                _this.inputElValueChanged(_this.el.value); //set this.el.dateValue and reformat this.el.value
            }
            if (_this.ctrl) {
                _this.ctrl.markAsPristine();
            }
        });
    };
    Ng2DatetimePickerDirective.prototype.ngAfterViewInit = function () {
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        if (this.inputEl) {
            this.inputEl.addEventListener('focus', this.showDatetimePicker);
            this.inputEl.addEventListener('blur', this.hideDatetimePicker);
        }
    };
    Ng2DatetimePickerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var date;
        if (changes && changes['ngModel']) {
            date = changes['ngModel'].currentValue;
            if (date && typeof date !== 'string') {
                date.toString = function () { return ng2_datetime_1.Ng2Datetime.formatDate(date, _this.dateFormat, _this.dateOnly); };
            }
        }
        this.setInputElDateValue(date);
        this.updateDatepicker();
    };
    Ng2DatetimePickerDirective.prototype.updateDatepicker = function () {
        if (this.componentRef) {
            var component = this.componentRef.instance;
            component.defaultValue = this.el['dateValue'];
        }
    };
    Ng2DatetimePickerDirective.prototype.setInputElDateValue = function (date) {
        if (typeof date === 'string' && date) {
            this.el['dateValue'] = this.getDate(date);
        }
        else if (typeof date === 'object') {
            this.el['dateValue'] = date;
        }
        else if (typeof date === 'undefined') {
            this.el['dateValue'] = null;
        }
        if (this.ctrl) {
            this.ctrl.markAsDirty();
        }
    };
    Ng2DatetimePickerDirective.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    Ng2DatetimePickerDirective.prototype.elementIn = function (el, containerEl) {
        while (el = el.parentNode) {
            if (el === containerEl)
                return true;
        }
        return false;
    };
    Ng2DatetimePickerDirective.prototype.styleDatetimePicker = function () {
        var _this = this;
        // setting position, width, and height of auto complete dropdown
        var thisElBCR = this.el.getBoundingClientRect();
        this.ng2DatetimePickerEl.style.width = thisElBCR.width + 'px';
        this.ng2DatetimePickerEl.style.position = 'absolute';
        this.ng2DatetimePickerEl.style.zIndex = '1000';
        this.ng2DatetimePickerEl.style.left = '0';
        this.ng2DatetimePickerEl.style.transition = 'height 0.3s ease-in';
        this.ng2DatetimePickerEl.style.visibility = 'hidden';
        setTimeout(function () {
            var thisElBcr = _this.el.getBoundingClientRect();
            var ng2DatetimePickerElBcr = _this.ng2DatetimePickerEl.getBoundingClientRect();
            if (thisElBcr.bottom + ng2DatetimePickerElBcr.height > window.innerHeight) {
                _this.ng2DatetimePickerEl.style.bottom =
                    (thisElBcr.bottom - window.innerHeight + 15) + 'px';
            }
            else {
                // otherwise, show below
                _this.ng2DatetimePickerEl.style.top = thisElBcr.height + 'px';
            }
            _this.ng2DatetimePickerEl.style.visibility = 'visible';
        });
    };
    ;
    Ng2DatetimePickerDirective.prototype.getDate = function (arg) {
        var date = arg;
        if (typeof arg === 'string') {
            date = ng2_datetime_1.Ng2Datetime.parseDate(arg, this.parseFormat, this.dateFormat);
        }
        return date;
    };
    Ng2DatetimePickerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-datetime-picker]',
                    providers: [ng2_datetime_1.Ng2Datetime]
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerDirective.ctorParameters = [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
        { type: forms_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
    ];
    Ng2DatetimePickerDirective.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'parseFormat': [{ type: core_1.Input, args: ['parse-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'closeOnSelect': [{ type: core_1.Input, args: ['close-on-select',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minute-step',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'formControlName': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input, args: ['ngModel',] },],
        'ngModelChange': [{ type: core_1.Output, args: ['ngModelChange',] },],
        'valueChanged$': [{ type: core_1.Output, args: ['valueChanged',] },],
        'popupClosed$': [{ type: core_1.Output, args: ['popupClosed',] },],
    };
    return Ng2DatetimePickerDirective;
}());
exports.Ng2DatetimePickerDirective = Ng2DatetimePickerDirective;
//# sourceMappingURL=ng2-datetime-picker.directive.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(14);
var reactive_form_component_1 = __webpack_require__(21);
var forms_1 = __webpack_require__(1);
var core_2 = __webpack_require__(16);
var ng2_datetime_picker_1 = __webpack_require__(25);
var datetime_picker_component_1 = __webpack_require__(17);
var select_component_1 = __webpack_require__(22);
var enumselect_component_1 = __webpack_require__(18);
var input_text_component_1 = __webpack_require__(20);
var input_float_component_1 = __webpack_require__(19);
var time_picker_component_1 = __webpack_require__(24);
var switch_component_1 = __webpack_require__(23);
var decExp = [
    reactive_form_component_1.ReactiveFormComponent,
    datetime_picker_component_1.DatetimePickerComponent,
    select_component_1.SelectComponent,
    enumselect_component_1.EnumselectComponent,
    input_text_component_1.InputTextComponent,
    input_float_component_1.InputFloatComponent,
    time_picker_component_1.TimePickerComponent,
    switch_component_1.SwitchComponent
];
var AngularFormsUtilsModule = (function () {
    function AngularFormsUtilsModule() {
    }
    AngularFormsUtilsModule.forRoot = function () {
        return {
            ngModule: AngularFormsUtilsModule
        };
    };
    AngularFormsUtilsModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                core_2.TranslateModule,
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                forms_1.FormsModule
            ],
            declarations: decExp,
            exports: decExp
        }), 
        __metadata('design:paramtypes', [])
    ], AngularFormsUtilsModule);
    return AngularFormsUtilsModule;
}());
exports.AngularFormsUtilsModule = AngularFormsUtilsModule;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_store__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });















var TranslateModule = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__src_translate_store__["a" /* TranslateStore */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    TranslateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ]
                },] },
    ];
    /** @nocollapse */
    TranslateModule.ctorParameters = function () { return []; };
    return TranslateModule;
}());


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
// import * as moment  from 'moment'
var DatetimePickerComponent = (function () {
    function DatetimePickerComponent() {
    }
    DatetimePickerComponent.prototype.ngOnInit = function () {
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(forms_1.Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/));
        this.field.control.setValidators(validators);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            // this.request[this.field.id] = moment(value).format()
        });
    };
    DatetimePickerComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], DatetimePickerComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "request", void 0);
    DatetimePickerComponent = __decorate([
        core_1.Component({
            selector: 'tw-datetime-picker',
            templateUrl: './datetime-picker.component.html',
            styleUrls: ['./datetime-picker.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], DatetimePickerComponent);
    return DatetimePickerComponent;
}());
exports.DatetimePickerComponent = DatetimePickerComponent;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var EnumselectComponent = (function () {
    function EnumselectComponent() {
    }
    EnumselectComponent.prototype.enumToArray = function (enumObj) {
        return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], EnumselectComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EnumselectComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EnumselectComponent.prototype, "request", void 0);
    EnumselectComponent = __decorate([
        core_1.Component({
            selector: 'tw-enumselect',
            templateUrl: './enumselect.component.html',
            styleUrls: ['./enumselect.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], EnumselectComponent);
    return EnumselectComponent;
}());
exports.EnumselectComponent = EnumselectComponent;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var InputFloatComponent = (function () {
    function InputFloatComponent() {
    }
    InputFloatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(forms_1.Validators.pattern(/^[+-]?([0-9]*[.])?[0-9]+$/));
        this.field.control.setValidators(validators);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            _this.request[_this.field.id] = parseFloat(value);
        });
    };
    InputFloatComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], InputFloatComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputFloatComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputFloatComponent.prototype, "request", void 0);
    InputFloatComponent = __decorate([
        core_1.Component({
            selector: 'tw-input-float',
            templateUrl: './input-float.component.html',
            styleUrls: ['./input-float.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], InputFloatComponent);
    return InputFloatComponent;
}());
exports.InputFloatComponent = InputFloatComponent;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var InputTextComponent = (function () {
    function InputTextComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], InputTextComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputTextComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputTextComponent.prototype, "request", void 0);
    InputTextComponent = __decorate([
        core_1.Component({
            selector: 'tw-input-text',
            templateUrl: './input-text.component.html',
            styleUrls: ['./input-text.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], InputTextComponent);
    return InputTextComponent;
}());
exports.InputTextComponent = InputTextComponent;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var ReactiveFormComponent = (function () {
    function ReactiveFormComponent() {
        this.fields = [];
        this.events = []; // use later to display form changes
        this.afterInit = new core_1.EventEmitter(true);
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            var control = new forms_1.FormControl('');
            if (field.required)
                control.setValidators(forms_1.Validators.required);
            field.control = control;
            _this.form.addControl(field.id, control);
        });
        this.afterInit.next(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReactiveFormComponent.prototype, "fields", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], ReactiveFormComponent.prototype, "form", void 0);
    __decorate([
        // our model driven form
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveFormComponent.prototype, "request", void 0);
    __decorate([
        // our model driven form
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReactiveFormComponent.prototype, "afterInit", void 0);
    ReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'tw-reactive-form',
            templateUrl: './reactive-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var SelectComponent = (function () {
    function SelectComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], SelectComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "request", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'tw-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var SwitchComponent = (function () {
    function SwitchComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], SwitchComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchComponent.prototype, "request", void 0);
    SwitchComponent = __decorate([
        core_1.Component({
            selector: 'tw-switch',
            templateUrl: './switch.component.html',
            styleUrls: ['./switch.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], SwitchComponent);
    return SwitchComponent;
}());
exports.SwitchComponent = SwitchComponent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var TimePickerComponent = (function () {
    function TimePickerComponent() {
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(forms_1.Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/));
        this.field.control.setValidators(validators);
        this.field.control.setValue(this.request[this.field.id]);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            _this.request[_this.field.id] = value;
        });
    };
    TimePickerComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], TimePickerComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimePickerComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimePickerComponent.prototype, "request", void 0);
    TimePickerComponent = __decorate([
        core_1.Component({
            selector: 'tw-time-picker',
            templateUrl: './time-picker.component.html',
            styleUrls: ['./time-picker.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TimePickerComponent);
    return TimePickerComponent;
}());
exports.TimePickerComponent = TimePickerComponent;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_datetime_1 = __webpack_require__(4);
exports.Ng2Datetime = ng2_datetime_1.Ng2Datetime;
var ng2_datetime_picker_component_1 = __webpack_require__(8);
exports.Ng2DatetimePickerComponent = ng2_datetime_picker_component_1.Ng2DatetimePickerComponent;
var ng2_datetime_picker_directive_1 = __webpack_require__(12);
exports.Ng2DatetimePickerDirective = ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective;
var ng2_datetime_picker_module_1 = __webpack_require__(26);
exports.Ng2DatetimePickerModule = ng2_datetime_picker_module_1.Ng2DatetimePickerModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var common_1 = __webpack_require__(14);
var ng2_datetime_1 = __webpack_require__(4);
var ng2_datetime_picker_component_1 = __webpack_require__(8);
var ng2_datetime_picker_directive_1 = __webpack_require__(12);
var Ng2DatetimePickerModule = (function () {
    function Ng2DatetimePickerModule() {
    }
    Ng2DatetimePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
                    exports: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
                    entryComponents: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent],
                    providers: [ng2_datetime_1.Ng2Datetime]
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerModule.ctorParameters = [];
    return Ng2DatetimePickerModule;
}());
exports.Ng2DatetimePickerModule = Ng2DatetimePickerModule;
//# sourceMappingURL=ng2-datetime-picker.module.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(15));


/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-forms-utils.umd.js.map