(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/common"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "rxjs/Observable", "@angular/common", "rxjs/add/observable/of", "rxjs/add/operator/concat", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/switchMap", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["angularFormsUtils"] = factory(require("@angular/core"), require("@angular/forms"), require("rxjs/Observable"), require("@angular/common"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["angularFormsUtils"] = factory(root["@angular/core"], root["@angular/forms"], root["rxjs/Observable"], root["@angular/common"], root["rxjs/add/observable/of"], root["rxjs/add/operator/concat"], root["rxjs/add/operator/map"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/switchMap"], root["rxjs/add/operator/take"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_forms__);

var FormField = (function () {
    function FormField(values) {
        Object.assign(this, values);
        this.control = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]('');
    }
    FormField.prototype.required = function () {
        this.control.setValidators(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required);
        return this;
    };
    FormField.prototype.setValidators = function (v) {
        this.control.setValidators(v);
        return this;
    };
    FormField.prototype.setValue = function (v) {
        this.control.setValue(v);
        return this;
    };
    FormField.prototype.addValidator = function (v) {
        var validators = [];
        if (this.control.validator)
            validators.push(this.control.validator);
        validators.push(v);
        this.control.setValidators(validators);
        return this;
    };
    return FormField;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__translate_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util__ = __webpack_require__(4);















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
        this._translationRequests = {};
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
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
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
            this.translations[lang] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["c" /* mergeDeep */])(this.translations[lang], translations);
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
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
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
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param key
     * @param interpolateParams
     * @returns {any} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return this
            .get(key, interpolateParams)
            .concat(this.onLangChange.switchMap(function (event) {
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
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
        this._translationRequests[lang] = undefined;
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
    return TranslateService;
}());

TranslateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_10__translate_store__["a" /* TranslateStore */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__translate_loader__["a" /* TranslateLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_13__translate_parser__["a" /* TranslateParser */], },
    { type: __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__["a" /* MissingTranslationHandler */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
]; };


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeDeep;
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
/* tslint:disable */ function equals(o1, o2) {
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
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BusyService = (function () {
    function BusyService() {
        this.global = false;
    }
    BusyService.prototype.start = function () {
        this.global = true;
    };
    BusyService.prototype.stop = function () {
        this.global = false;
    };
    return BusyService;
}());
BusyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BusyService);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FakeMissingTranslationHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

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
    return FakeMissingTranslationHandler;
}());

FakeMissingTranslationHandler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));

TranslateFakeLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeLoader.ctorParameters = function () { return []; };


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateDefaultParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());

var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
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
    return TranslateDefaultParser;
}(TranslateParser));

TranslateDefaultParser.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () { return []; };


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(3);



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
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* equals */])(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
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
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
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
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
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
    TranslateDirective.prototype.getContent = function (node) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
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
    return TranslateDirective;
}());

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


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);



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
    return TranslatePipe;
}());

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


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFormsUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactive_form_reactive_form_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reactive_form_datetime_picker_datetime_picker_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reactive_form_date_picker_date_picker_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reactive_form_select_select_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reactive_form_enumselect_enumselect_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reactive_form_input_text_input_text_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reactive_form_input_float_input_float_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reactive_form_time_picker_time_picker_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reactive_form_switch_switch_component__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reactive_form_group_select_group_select_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reactive_form_multi_select_multi_select_component__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reactive_form_days_of_week_days_of_week_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reactive_form_textarea_textarea_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reactive_form_treeview_treeview_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reactive_form_treeview_txt_treeview_txt_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reactive_form_treeview_radio_treeview_radio_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reactive_form_treeview_radio_treeview_item_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__busy_button_busy_button_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__busy_button_busy_service__ = __webpack_require__(5);
throw new Error("Cannot find module \"ng2-dropdown-treeview\"");
throw new Error("Cannot find module \"@ngui/datetime-picker\"");
throw new Error("Cannot find module \"moment\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























__WEBPACK_IMPORTED_MODULE_24__ngui_datetime_picker__["NguiDatetime"].parseDate = function (str) {
    var m = __WEBPACK_IMPORTED_MODULE_25_moment__(str);
    if (!m.isValid()) {
        // let tmp = str.split(':');
        m = __WEBPACK_IMPORTED_MODULE_25_moment__();
        // m.set('hour', parseInt(tmp[0] || '0', 10))
        // m.set('minute', parseInt(tmp[1] || '0', 10))
        // m.set('second', parseInt(tmp[2] || '0', 10))
    }
    return m.toDate();
};
var decExp = [
    __WEBPACK_IMPORTED_MODULE_2__reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */],
    __WEBPACK_IMPORTED_MODULE_5__reactive_form_datetime_picker_datetime_picker_component__["a" /* DatetimePickerComponent */],
    __WEBPACK_IMPORTED_MODULE_7__reactive_form_select_select_component__["a" /* SelectComponent */],
    __WEBPACK_IMPORTED_MODULE_8__reactive_form_enumselect_enumselect_component__["a" /* EnumselectComponent */],
    __WEBPACK_IMPORTED_MODULE_9__reactive_form_input_text_input_text_component__["a" /* InputTextComponent */],
    __WEBPACK_IMPORTED_MODULE_10__reactive_form_input_float_input_float_component__["a" /* InputFloatComponent */],
    __WEBPACK_IMPORTED_MODULE_11__reactive_form_time_picker_time_picker_component__["a" /* TimePickerComponent */],
    __WEBPACK_IMPORTED_MODULE_12__reactive_form_switch_switch_component__["a" /* SwitchComponent */],
    __WEBPACK_IMPORTED_MODULE_13__reactive_form_group_select_group_select_component__["a" /* GroupSelectComponent */],
    __WEBPACK_IMPORTED_MODULE_6__reactive_form_date_picker_date_picker_component__["a" /* DatePickerComponent */],
    __WEBPACK_IMPORTED_MODULE_15__reactive_form_days_of_week_days_of_week_component__["a" /* DaysOfWeekComponent */],
    __WEBPACK_IMPORTED_MODULE_14__reactive_form_multi_select_multi_select_component__["a" /* MultiSelectComponent */],
    __WEBPACK_IMPORTED_MODULE_16__reactive_form_textarea_textarea_component__["a" /* TextAreaComponent */],
    __WEBPACK_IMPORTED_MODULE_21__busy_button_busy_button_component__["a" /* BusyButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_17__reactive_form_treeview_treeview_component__["a" /* TreeViewComponent */],
    __WEBPACK_IMPORTED_MODULE_18__reactive_form_treeview_txt_treeview_txt_component__["a" /* TreeViewTxtComponent */],
    __WEBPACK_IMPORTED_MODULE_19__reactive_form_treeview_radio_treeview_radio_component__["a" /* TreeViewRadioComponent */],
    __WEBPACK_IMPORTED_MODULE_20__reactive_form_treeview_radio_treeview_item_component__["a" /* TreeViewItemComponent */]
];
var AngularFormsUtilsModule = AngularFormsUtilsModule_1 = (function () {
    function AngularFormsUtilsModule() {
    }
    AngularFormsUtilsModule.forRoot = function () {
        return { ngModule: AngularFormsUtilsModule_1, providers: [__WEBPACK_IMPORTED_MODULE_22__busy_button_busy_service__["a" /* BusyService */]] };
    };
    return AngularFormsUtilsModule;
}());
AngularFormsUtilsModule = AngularFormsUtilsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_24__ngui_datetime_picker__["NguiDatetimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_23_ng2_dropdown_treeview__["DropdownTreeviewModule"]
        ],
        declarations: decExp,
        exports: decExp.slice()
    })
], AngularFormsUtilsModule);

var AngularFormsUtilsModule_1;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_store__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */















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
    return TranslateModule;
}());

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


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busy_service__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusyButtonComponent = (function () {
    function BusyButtonComponent(busy) {
        this.busy = busy;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
    }
    BusyButtonComponent.prototype.send = function () {
        this.onClick.next(true);
    };
    return BusyButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BusyButtonComponent.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BusyButtonComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BusyButtonComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], BusyButtonComponent.prototype, "onClick", void 0);
BusyButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-busy-button',
        template: '<button (click)=\'send()\' [class]="cssClass" [disabled]="disabled || busy.global"><span style=\'margin- right:5px\'  *ngIf=\'busy.global\'><img src="assets/img/ajax-loader.gif"/></span><i class=\'fa fa-{{icon }}\' style=\'margin- right:5px\'  *ngIf=\'icon && !busy.global\'></i><ng-content></ng-content></button>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__busy_service__["a" /* BusyService */]])
], BusyButtonComponent);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angularFormsUtils_module__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularFormsUtilsModule", function() { return __WEBPACK_IMPORTED_MODULE_0__angularFormsUtils_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reactive_form_form_field_model__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return __WEBPACK_IMPORTED_MODULE_1__reactive_form_form_field_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busy_button_busy_service__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return __WEBPACK_IMPORTED_MODULE_2__busy_button_busy_service__["a"]; });





/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Subscription } from 'rxjs'

var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.defaultValue = '';
        this.closeOnSelect = false;
    }
    // private sub: Subscription
    DatePickerComponent.prototype.ngOnInit = function () {
        if (!this.field.more)
            this.field.more = {};
        this.field.more.dateOnly = true;
        if (!this.field.more.dateFormat)
            this.field.more.dateFormat = 'YYYY-MM-DD';
    };
    DatePickerComponent.prototype.ngOnDestroy = function () {
        // if (this.sub)
        //   this.sub.unsubscribe()
    };
    return DatePickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], DatePickerComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], DatePickerComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatePickerComponent.prototype, "request", void 0);
DatePickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-date-picker',
        template: "<tw-datetime-picker [group]='group' [field]='field' [request]='request'></tw-datetime-picker>"
    })
], DatePickerComponent);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatetimePickerComponent = (function () {
    function DatetimePickerComponent() {
        this.minute = '';
    }
    DatetimePickerComponent.prototype.ngOnInit = function () {
        if (this.field.more) {
            if (this.field.more.defaultValue) {
                switch (this.field.more.defaultValue) {
                    case 'startOfDay':
                        var date = new Date();
                        date.setHours(0);
                        date.setMinutes(0);
                        this.defaultValue = date;
                        break;
                    case 'endOfDay':
                        var date2 = new Date();
                        date2.setHours(23);
                        date2.setMinutes(59);
                        this.defaultValue = date2;
                        break;
                    default:
                        this.defaultValue = this.field.more.defaultValue;
                        break;
                }
            }
        }
        else {
            this.field.more = {};
        }
        // if (this.field.more.dateOnly)
        // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
        // else
        // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))
    };
    DatetimePickerComponent.prototype.valueChanged = function (date) {
        if (this.field.more.dateOnly && date)
            this.request[this.field.id] = date.toString();
    };
    DatetimePickerComponent.prototype.clear = function () {
        this.request[this.field.id] = null;
    };
    return DatetimePickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], DatetimePickerComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], DatetimePickerComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatetimePickerComponent.prototype, "request", void 0);
DatetimePickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-datetime-picker',
        template: "\n  <div [formGroup]='group' class=\"input-group\">\n      <input [formControlName]='field.id' name='{{field.id}}' class='form-control' (valueChanged)='valueChanged($event)' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]=\"field.more.closeOnSelect || false\" [(ngModel)]=\"request[field.id]\" [date-only]=\"field.more.dateOnly ||false\" [date-format]='this.field.more.dateFormat || \"YYYY-MM-DD HH:mm\"' [parse-format]='this.field.more.dateFormat || \"YYYY-MM-DD HH:mm\"'  readonly/>\n      <span class=\"input-group-btn\">\n        <button class='btn btn-default' (click)='clear()'>&times;</button>\n      </span>\n</div>\n  "
    })
], DatetimePickerComponent);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaysOfWeekComponent; });
/* unused harmony export DaysOfWeekValues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaysOfWeekComponent = (function () {
    function DaysOfWeekComponent() {
    }
    DaysOfWeekComponent.prototype.ngOnInit = function () {
        this.field.options = DaysOfWeekValues;
    };
    return DaysOfWeekComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], DaysOfWeekComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], DaysOfWeekComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DaysOfWeekComponent.prototype, "request", void 0);
DaysOfWeekComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-dof',
        template: "<tw-enumselect [group]='group' [field]='field' [request]='request'></tw-enumselect>"
    })
], DaysOfWeekComponent);

var DaysOfWeekValues;
(function (DaysOfWeekValues) {
    DaysOfWeekValues[DaysOfWeekValues["Sunday"] = 0] = "Sunday";
    DaysOfWeekValues[DaysOfWeekValues["Monday"] = 1] = "Monday";
    DaysOfWeekValues[DaysOfWeekValues["Tuesday"] = 2] = "Tuesday";
    DaysOfWeekValues[DaysOfWeekValues["Wednesday"] = 3] = "Wednesday";
    DaysOfWeekValues[DaysOfWeekValues["Thursday"] = 4] = "Thursday";
    DaysOfWeekValues[DaysOfWeekValues["Friday"] = 5] = "Friday";
    DaysOfWeekValues[DaysOfWeekValues["Saturday"] = 6] = "Saturday";
})(DaysOfWeekValues || (DaysOfWeekValues = {}));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumselectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnumselectComponent = (function () {
    function EnumselectComponent() {
    }
    EnumselectComponent.prototype.enumToArray = function (enumObj) {
        return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2);
    };
    return EnumselectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], EnumselectComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], EnumselectComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EnumselectComponent.prototype, "request", void 0);
EnumselectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-enumselect',
        template: "\n  <div [formGroup]='group'>\n  <select [attr.multiple]='field.type === \"enumselect\"?null:true' [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"field.firstValue.value\" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n      <option [ngValue]=\"option\" *ngFor=\"let option of enumToArray(field.options)\">\n        {{option}}\n      </option>\n    </select>\n</div>\n  "
    })
], EnumselectComponent);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupSelectComponent = (function () {
    function GroupSelectComponent() {
    }
    return GroupSelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], GroupSelectComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], GroupSelectComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GroupSelectComponent.prototype, "request", void 0);
GroupSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-groupselect',
        template: "\n  <div [formGroup]='group'>\n  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\" >\n        <option [ngValue]=\"field.firstValue.value \" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n        <optgroup label=\"{{group.label}}\" *ngFor=\"let group of field.options\">\n        <option [ngValue]=\"option[field.optionValue]\" *ngFor=\"let option of group.values\">\n          {{option[field.optionText]}}\n        </option>\n      </optgroup>\n    </select>\n</div>\n  "
    })
], GroupSelectComponent);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFloatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputFloatComponent = (function () {
    function InputFloatComponent() {
    }
    InputFloatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.field.addValidator(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[+-]?([0-9]*[.])?[0-9]+$/));
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            _this.request[_this.field.id] = parseFloat(value);
        });
    };
    InputFloatComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    return InputFloatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], InputFloatComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], InputFloatComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFloatComponent.prototype, "request", void 0);
InputFloatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-input-float',
        template: "\n  <div [formGroup]='group'>\n    <input [formControlName]='field.id' name='{{field.id}}' type='text' class='form-control' [readonly]='field.more?.readonly'  />\n  </div>"
    })
], InputFloatComponent);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputTextComponent = (function () {
    function InputTextComponent() {
    }
    InputTextComponent.prototype.clear = function () {
        this.request[this.field.id] = null;
    };
    return InputTextComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], InputTextComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], InputTextComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "request", void 0);
InputTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-input-text',
        template: "\n   <div [formGroup]='group' [ngClass]='field.more?.nullable ? \"input-group\" :\"\"'>\n  <input [formControlName]='field.id' name='{{field.id}}' type='{{field.type}}' class='form-control' [(ngModel)]=\"request[field.id]\" \n    [readonly]='field.more?.readonly' />\n          <span class=\"input-group-btn\" *ngIf='field.more?.nullable && field.type!==\"hidden\"'>\n        <button class='btn btn-default' (click)='clear()'>&times;</button>\n      </span>\n</div>\n   "
    })
], InputTextComponent);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiSelectComponent = (function () {
    function MultiSelectComponent() {
    }
    MultiSelectComponent.prototype.ngOnInit = function () {
        if (!this.field.more)
            this.field.more = {};
    };
    Object.defineProperty(MultiSelectComponent.prototype, "allSelected", {
        get: function () {
            return this.testSelected();
        },
        enumerable: true,
        configurable: true
    });
    MultiSelectComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.testSelected())
            this.request[this.field.id] = [];
        else {
            this.request[this.field.id] = [];
            this.field.options.forEach(function (option) {
                _this.request[_this.field.id].push(option[_this.field.optionValue]);
            });
        }
    };
    MultiSelectComponent.prototype.testSelected = function () {
        if (!this.request[this.field.id] || !this.field.options)
            return false;
        if (this.request[this.field.id].length === this.field.options.length)
            return true;
        if (this.request[this.field.id].length === this.field.options.size)
            return true;
        return false;
    };
    return MultiSelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], MultiSelectComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], MultiSelectComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MultiSelectComponent.prototype, "request", void 0);
MultiSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-multiselect',
        template: "\n  <div [formGroup]='group'>\n   <button style='margin-top: -30px; margin-bottom: 5px;' [ngClass]=\"allSelected ? 'btn-primary' : 'btn-default'\" class='btn-sm btn pull-right' (click)='selectAll()' > {{field.more.allText || 'All'}}</button>\n   <select multiple [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"option[field.optionValue]\" *ngFor=\"let option of field.options\">\n        {{option[field.optionText]}}\n      </option>\n    </select>\n</div>\n  "
    })
], MultiSelectComponent);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormComponent = (function () {
    function ReactiveFormComponent() {
        this.fields = [];
        this.events = []; // use later to display form changes
        this.afterInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.afterViewInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            _this.form.addControl(field.id, field.control);
        });
        this.afterInit.next(true);
    };
    ReactiveFormComponent.prototype.ngAfterViewInit = function () {
        this.afterViewInit.next(true);
    };
    return ReactiveFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ReactiveFormComponent.prototype, "fields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], ReactiveFormComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReactiveFormComponent.prototype, "request", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ReactiveFormComponent.prototype, "afterInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ReactiveFormComponent.prototype, "afterViewInit", void 0);
ReactiveFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-reactive-form',
        template: "\n<form [formGroup]=\"form\">\n  <div class=\"row\">\n    <div class=\"form-group col-{{field.col || 'sm-6'}}\" [ngClass]=\"field.class\" *ngFor=\"let field of fields\">\n      <label for=\"{{field.id}}\">{{field.label | translate}} <small *ngIf='field.info'>{{field.info | translate}}</small></label>\n      <tw-input-text *ngIf='field.type===\"text\" || field.type===\"number\" || field.type===\"hidden\" || field.type===\"email\" || field.type===\"password\"' [group]='form' [field]='field' [request]='request'></tw-input-text>\n      <tw-input-float *ngIf='field.type===\"float\"' [group]='form' [field]='field' [request]='request'></tw-input-float>\n      <tw-select *ngIf='field.type===\"select\"' [group]='form' [field]='field' [request]='request'></tw-select>\n      <tw-enumselect *ngIf='field.type===\"enumselect\" || field.type===\"enummultiselect\"' [group]='form' [field]='field' [request]='request'></tw-enumselect>\n      <tw-datetime-picker *ngIf='field.type===\"datetime\"' [group]='form' [field]='field' [request]='request'></tw-datetime-picker>\n      <tw-time-picker *ngIf='field.type===\"time\"' [group]='form' [field]='field' [request]='request'></tw-time-picker>\n      <tw-switch *ngIf='field.type===\"boolean\"' [group]='form' [field]='field' [request]='request'></tw-switch>\n      <tw-groupselect *ngIf='field.type===\"groupselect\"' [group]='form' [field]='field' [request]='request'></tw-groupselect>\n      <tw-multiselect *ngIf='field.type===\"multiselect\"' [group]='form' [field]='field' [request]='request'></tw-multiselect>\n      <tw-textarea *ngIf='field.type===\"textarea\"' [group]='form' [field]='field' [request]='request'></tw-textarea>\n      <tw-date-picker *ngIf='field.type===\"date\"' [group]='form' [field]='field' [request]='request'></tw-date-picker>\n      <tw-dof *ngIf='field.type===\"daysOfWeek\"' [group]='form' [field]='field' [request]='request'></tw-dof>\n      <tw-treeview-txt *ngIf='field.type===\"treeview-txt\" || field.type===\"dropdown-treeview-txt\"' [group]='form' [field]='field' [request]='request'></tw-treeview-txt>\n      <tw-treeview-radio *ngIf='field.type===\"treeview-radio\" || field.type===\"dropdown-treeview-radio\"' [group]='form' [field]='field' [request]='request'></tw-treeview-radio>\n      <tw-treeview *ngIf='field.type===\"treeview\" || field.type===\"dropdown-treeview\"' [group]='form' [field]='field' [request]='request'></tw-treeview>\n    </div>\n  </div>\n</form>\n  "
    }),
    __metadata("design:paramtypes", [])
], ReactiveFormComponent);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = (function () {
    function SelectComponent() {
    }
    return SelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], SelectComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], SelectComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "request", void 0);
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-select',
        template: "\n  <div [formGroup]='group'>\n  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"field.firstValue.value \" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n      <option [ngValue]=\"option[field.optionValue] \" *ngFor=\"let option of field.options \">\n        {{option[field.optionText]}}\n      </option>\n    </select>\n</div>\n  "
    })
], SelectComponent);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwitchComponent = (function () {
    function SwitchComponent() {
    }
    return SwitchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], SwitchComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], SwitchComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "request", void 0);
SwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-switch',
        template: "\n  <div [formGroup]='group'>\n  <label class=\"switch switch-icon switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" [formControlName]='field.id' class=\"switch-input\"  [(ngModel)]=\"request[field.id]\" >\n        <span class=\"switch-label\" data-on=\"yes\" data-off=\"no\"></span>\n        <span class=\"switch-handle\"></span>\n    </label>\n</div>\n  "
    })
], SwitchComponent);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextAreaComponent = (function () {
    function TextAreaComponent() {
    }
    return TextAreaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], TextAreaComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], TextAreaComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TextAreaComponent.prototype, "request", void 0);
TextAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-textarea',
        template: "\n  <div [formGroup]='group'>\n   <textarea [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\"></textarea>\n</div>\n  "
    })
], TextAreaComponent);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimePickerComponent = (function () {
    function TimePickerComponent() {
        this.defaultValue = '';
        this.hours = [];
        for (var i = 0; i <= 23; i++) {
            if (i < 10)
                this.hours.push('0' + i.toString());
            else
                this.hours.push(i.toString());
        }
        this.minutes = [];
        for (var i = 0; i <= 59; i++) {
            if (i < 10)
                this.minutes.push('0' + i.toString());
            else
                this.minutes.push(i.toString());
        }
    }
    // get model(): string {
    //   return this.request[this.field.id]
    // }
    // set model(m: string) {
    //   console.log(this.hour)
    // }
    TimePickerComponent.prototype.onChange = function (hour) {
        if (hour && !this.minute)
            this.minute = '00';
        if (this.hour && this.minute)
            this.request[this.field.id] = this.hour + ':' + this.minute;
        else
            this.request[this.field.id] = null;
    };
    TimePickerComponent.prototype.ngOnChanges = function (value) {
        var newV = value['request'].currentValue[this.field.id];
        if (newV) {
            var split = newV.split(':');
            this.hour = split[0] ? split[0] : '';
            this.minute = split[1] ? split[1] : '';
        }
    };
    TimePickerComponent.prototype.ngOnInit = function () {
        if (this.field.more) {
            if (this.field.more.defaultValue) {
                // switch (this.field.more.defaultValue) {
                //   case 'startOfDay':
                //     this.defaultValue = '00:00'
                //     break
                //   case 'endOfDay':
                //     this.defaultValue = '23:59'
                //     break
                //   default:
                //     this.defaultValue = this.field.more.defaultValue
                //     break
                // }
            }
        }
        else {
            this.field.more = {};
        }
        // this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))
    };
    // valueChanged(date: Date): void {
    //   // console.log('time changed')
    //   if (date)
    //     this.request[this.field.id] = date.toString()
    // }
    TimePickerComponent.prototype.clear = function () {
        this.hour = '';
        this.minute = '';
        this.request[this.field.id] = null;
    };
    return TimePickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], TimePickerComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], TimePickerComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "request", void 0);
TimePickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-time-picker',
        template: "\n  <div [formGroup]='group' style='display:none'>\n  <input type='hidden'  [formControlName]='field.id' [(ngModel)]=\"this.request[this.field.id]\" />\n  </div>\n  <div class='clear' >\n   <select [(ngModel)]=\"hour\" (ngModelChange)='onChange(true)' class='form-control pull-left' style='width:100px;'>\n        <option [ngValue]=\"\"></option>\n        <option *ngFor=\"let h of hours\" [ngValue]=\"h\">{{h}}</option>\n    </select>\n    <span class='pull-left' style='margin:5px'>hh</span>\n     <select [(ngModel)]=\"minute\" (ngModelChange)='onChange()'  class='form-control pull-left' style='width:100px;'>\n        <option [ngValue]=\"\"></option>\n        <option *ngFor=\"let m of minutes\" [ngValue]=\"m\">{{m}}</option>\n    </select>\n    <span class='pull-left' style='margin:5px'>mm</span>\n      <button class='btn btn-default pull-left'  (click)='clear()'>&times;</button>\n  </div>\n    "
    })
    // <div [formGroup]='group' class="input-group">
    //   <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]="field.more.closeOnSelect || false"  (valueChanged)='valueChanged($event)'  [(ngModel)]="request[field.id]"  [time-only]="true" date-format='HH:mm' parse-format='HH:mm'  readonly/>
    //       <span class="input-group-btn">
    //       <button class='btn btn-default' (click)='clear()'>&times;</button>
    //     </span>
    // </div>
    ,
    __metadata("design:paramtypes", [])
], TimePickerComponent);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
throw new Error("Cannot find module \"ng2-dropdown-treeview\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TreeviewItemTemplateContext } from 'ng2-dropdown-treeview/src/treeview-item-template-context';
var TreeViewItemComponent = (function () {
    function TreeViewItemComponent() {
        var _this = this;
        this.toggleCollapseExpand = function () {
            _this.item.collapsed = !_this.item.collapsed;
        };
    }
    return TreeViewItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], TreeViewItemComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dropdown_treeview__["TreeviewItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dropdown_treeview__["TreeviewItem"]) === "function" && _a || Object)
], TreeViewItemComponent.prototype, "item", void 0);
TreeViewItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-treeview-item',
        template: "\n<div class=\"treeview-item\">\n    <template [ngTemplateOutlet]=\"template\"\n        [ngOutletContext]=\"{item: item, toggleCollapseExpand: toggleCollapseExpand}\">\n    </template>\n    <div *ngIf=\"!item.collapsed\">\n        <tw-treeview-item *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\">\n        </tw-treeview-item>\n    </div>\n</div>\n    ",
        styles: ["\n:host {\n    display: block;\n}\n:host /deep/ .fa {\n    margin-right: .2rem;\n    width: .5rem;\n    cursor: pointer;\n}\n.treeview-item {\n    white-space: nowrap;\n}\n.treeview-item .treeview-item {\n    margin-left: 2rem;\n}\n    "]
    })
], TreeViewItemComponent);

var _a;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeViewRadioComponent = (function () {
    function TreeViewRadioComponent() {
        this.selectConfig = {
            isShowAllCheckBox: true,
            isShowFilter: true,
            isShowCollapseExpand: true,
            maxHeight: 500
        };
    }
    TreeViewRadioComponent.prototype.toggleCollapseExpand = function () {
        var _this = this;
        this.allItem.collapsed = !this.allItem.collapsed;
        if (this.field.options.items) {
            this.field.options.items.forEach(function (item) { return item.setCollapsedRecursive(_this.allItem.collapsed); });
        }
    };
    TreeViewRadioComponent.prototype.updateModel = function (values) {
        if (values)
            this.field.setValue(values.join(','));
        else
            this.field.setValue('');
    };
    TreeViewRadioComponent.prototype.ngOnInit = function () {
        if (this.field.more && this.field.more.selectConfig)
            this.selectConfig = this.field.more.selectConfig;
    };
    return TreeViewRadioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], TreeViewRadioComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], TreeViewRadioComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeViewRadioComponent.prototype, "request", void 0);
TreeViewRadioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-treeview-radio',
        template: "\n<template #tpl let-item=\"item\"\n    let-toggleCollapseExpand=\"toggleCollapseExpand\"\n    let-onCheckedChange=\"onCheckedChange\">\n    <div class=\"form-check\" [formGroup]='group'>\n        <i *ngIf=\"item.children\" (click)=\"toggleCollapseExpand()\" aria-hidden=\"true\"\n            class=\"fa\" [class.fa-caret-right]=\"item.collapsed\" [class.fa-caret-down]=\"!item.collapsed\"></i>\n        <label class=\"form-check-label\">\n            <input type=\"radio\"  class=\"form-check-input\" [(ngModel)]=\"request[field.id]\" [formControlName]='field.id'  name='{{field.id}}' [value]='item.value' />\n            {{item.text}}\n        </label>\n    </div>\n</template>\n<div class=\"treeview-header\">\n  \n</div>\n<div class=\"treeview-container\" [style.max-height.px]=\"selectConfig.maxHeight\" >\n    <div *ngFor=\"let item of field.options\">\n        <tw-treeview-item [item]=\"item\" [template]=\"template || tpl\" >\n        </tw-treeview-item>\n    </div>\n</div>\n",
        styles: ["\n.row-margin {\n    margin-top: .3rem;\n}\n.label-item-all {\n}\n.label-collapse-expand {\n    margin: 0;\n    padding: 0 .3rem;\n    cursor: pointer;\n}\n.divider {\n    height: 1px;\n    margin: 0.5rem 0;\n    overflow: hidden;\n    background: #000;\n}\n.treeview-container {\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding-right: 18px;\n}\n.treeview-text {\n    padding: .3rem 0;\n    white-space: nowrap;\n}\n"]
    })
], TreeViewRadioComponent);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewTxtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeViewTxtComponent = (function () {
    function TreeViewTxtComponent() {
        this.selectConfig = {
            isShowAllCheckBox: true,
            isShowFilter: true,
            isShowCollapseExpand: true,
            maxHeight: 500
        };
    }
    TreeViewTxtComponent.prototype.updateModel = function (values) {
        if (values)
            this.field.setValue(values.join(','));
        else
            this.field.setValue('');
    };
    TreeViewTxtComponent.prototype.ngOnInit = function () {
        if (this.field.more && this.field.more.selectConfig)
            this.selectConfig = this.field.more.selectConfig;
    };
    return TreeViewTxtComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], TreeViewTxtComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], TreeViewTxtComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeViewTxtComponent.prototype, "request", void 0);
TreeViewTxtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-treeview-txt',
        template: "\n  <div [formGroup]='group'>\n   <leo-treeview *ngIf='field.type===\"treeview-txt\"' id=\"treeview_{{field.id}}\" [config]=\"selectConfig\" [items]=\"field.options\" (selectedChange)=\"updateModel($event)\"></leo-treeview>\n   <leo-dropdown-treeview *ngIf='field.type===\"dropdown-treeview-txt\"' id=\"treeview_{{field.id}}\" [config]=\"selectConfig\" [items]=\"field.options\" (selectedChange)=\"updateModel($event)\"></leo-dropdown-treeview>\n    <input [formControlName]='field.id' name='{{field.id}}' type='hidden' class='form-control' [(ngModel)]=\"request[field.id]\"/>\n</div>\n  "
    })
], TreeViewTxtComponent);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_model__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeViewComponent = (function () {
    function TreeViewComponent() {
        this.selectConfig = {
            isShowAllCheckBox: true,
            isShowFilter: true,
            isShowCollapseExpand: true,
            maxHeight: 500
        };
    }
    TreeViewComponent.prototype.updateModel = function (values) {
        if (values)
            this.field.setValue(values);
        else
            this.field.setValue([]);
    };
    TreeViewComponent.prototype.ngOnInit = function () {
        if (this.field.more && this.field.more.selectConfig)
            this.selectConfig = this.field.more.selectConfig;
    };
    return TreeViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], TreeViewComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_model__["a" /* FormField */])
], TreeViewComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "request", void 0);
TreeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tw-treeview',
        template: "\n  <div [formGroup]='group'>\n   <leo-treeview *ngIf='field.type===\"treeview\"' [config]=\"selectConfig\" [items]=\"field.options\" (selectedChange)=\"updateModel($event)\"></leo-treeview>\n   <leo-dropdown-treeview *ngIf='field.type===\"dropdown-treeview\"'  [config]=\"selectConfig\" [items]=\"field.options\" (selectedChange)=\"updateModel($event)\"></leo-dropdown-treeview>\n  <input [formControlName]='field.id' name='{{field.id}}' type='hidden' class='form-control' [(ngModel)]=\"request[field.id]\"/>\n</div>\n  "
    })
], TreeViewComponent);



/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiM2E2ZWFkYTVkZmUxYjA5NDE4ZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9mb3JtLWZpZWxkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9idXN5LWJ1dHRvbi9idXN5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUubG9hZGVyLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUucGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYW5ndWxhckZvcm1zVXRpbHMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVzeS1idXR0b24vYnVzeS1idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlLWZvcm0vZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlLWZvcm0vZGF5cy1vZi13ZWVrL2RheXMtb2Ytd2Vlay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlLWZvcm0vZW51bXNlbGVjdC9lbnVtc2VsZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9ncm91cC1zZWxlY3QvZ3JvdXAtc2VsZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9pbnB1dC1mbG9hdC9pbnB1dC1mbG9hdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlLWZvcm0vaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlLWZvcm0vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS1mb3JtL3RyZWV2aWV3LXJhZGlvL3RyZWV2aWV3LWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS1mb3JtL3RyZWV2aWV3LXJhZGlvL3RyZWV2aWV3LXJhZGlvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS90cmVldmlldy10eHQvdHJlZXZpZXctdHh0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUtZm9ybS90cmVldmlldy90cmVldmlldy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FB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SUFBSTtZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVk7SUFDcEQsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQztBQXRCVTtJQUFSLDJFQUFLLEVBQUU7OEJBQVEseURBQVM7Z0RBQUE7QUFDaEI7SUFBUiwyRUFBSyxFQUFFOzhCQUFRLG9FQUFTO2dEQUFBO0FBQ2hCO0lBQVIsMkVBQUssRUFBRTs7a0RBQWE7QUFKVixpQkFBaUI7SUFWN0IsK0VBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSwyZ0JBTVQ7S0FDRixDQUFDO0dBQ1csaUJBQWlCLENBd0I3QjtBQXhCNkI7Ozs7Ozs7QUNmOUIsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJhbmd1bGFyLWZvcm1zLXV0aWxzLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2Zvcm1zXCIsIFwicnhqcy9PYnNlcnZhYmxlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiLCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhbmd1bGFyRm9ybXNVdGlsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXJGb3Jtc1V0aWxzXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2Zvcm1zXCJdLCByb290W1wicnhqcy9PYnNlcnZhYmxlXCJdLCByb290W1wiQGFuZ3VsYXIvY29tbW9uXCJdLCByb290W1wicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80MF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjNhNmVhZGE1ZGZlMWIwOTQxOGQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZGVjbGFyZSB2YXIgT2JqZWN0OiBhbnlcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUZpZWxkIHtcbiAgICBpZDogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIGNvbDogc3RyaW5nXG5cbiAgICAvKkZvciBzZWxlY3RzKi9cbiAgICBvcHRpb25zOiBhbnlcbiAgICBvcHRpb25WYWx1ZTogc3RyaW5nXG4gICAgb3B0aW9uVGV4dDogc3RyaW5nXG4gICAgZmlyc3RWYWx1ZTogYW55XG5cbiAgICBtb3JlOiBhbnlcblxufVxuXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkIGltcGxlbWVudHMgSUZvcm1GaWVsZCB7XG5cbiAgICBpZDogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIG9wdGlvbnM6IGFueVxuICAgIG9wdGlvblZhbHVlOiBzdHJpbmdcbiAgICBvcHRpb25UZXh0OiBzdHJpbmdcbiAgICBjb2w6IHN0cmluZ1xuICAgIGZpcnN0VmFsdWU6IGFueVxuICAgIG1vcmU6IGFueVxuXG4gICAgY29udHJvbDogRm9ybUNvbnRyb2xcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogSUZvcm1GaWVsZCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJylcbiAgICB9XG5cbiAgICByZXF1aXJlZCgpOiBGb3JtRmllbGQge1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyg8YW55PlZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdG9ycyh2OiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10pOiBGb3JtRmllbGQge1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHNldFZhbHVlKHY6IGFueSk6IEZvcm1GaWVsZCB7XG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZFZhbGlkYXRvcih2OiBWYWxpZGF0b3JGbik6IEZvcm1GaWVsZCB7XG4gICAgICAgIGxldCB2YWxpZGF0b3JzOiBhbnlbXSA9IFtdXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudmFsaWRhdG9yKVxuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKHRoaXMuY29udHJvbC52YWxpZGF0b3IpXG5cbiAgICAgICAgdmFsaWRhdG9ycy5wdXNoKHYpXG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS9mb3JtLWZpZWxkLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9wYXF1ZVRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVN0b3JlIH0gZnJvbSBcIi4vdHJhbnNsYXRlLnN0b3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tIFwiLi90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4vbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVQYXJzZXIgfSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQgeyBtZXJnZURlZXAsIGlzRGVmaW5lZCB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCB2YXIgVVNFX1NUT1JFID0gbmV3IE9wYXF1ZVRva2VuKCdVU0VfU1RPUkUnKTtcbnZhciBUcmFuc2xhdGVTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3RvcmUgKHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdW5pcXVlKVxuICAgICAqIEBwYXJhbSBjdXJyZW50TG9hZGVyIEFuIGluc3RhbmNlIG9mIHRoZSBsb2FkZXIgY3VycmVudGx5IHVzZWRcbiAgICAgKiBAcGFyYW0gcGFyc2VyIEFuIGluc3RhbmNlIG9mIHRoZSBwYXJzZXIgY3VycmVudGx5IHVzZWRcbiAgICAgKiBAcGFyYW0gbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBBIGhhbmRsZXIgZm9yIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxuICAgICAqIEBwYXJhbSBpc29sYXRlIHdoZXRoZXIgdGhpcyBzZXJ2aWNlIHNob3VsZCB1c2UgdGhlIHN0b3JlIG9yIG5vdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVNlcnZpY2Uoc3RvcmUsIGN1cnJlbnRMb2FkZXIsIHBhcnNlciwgbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgaXNvbGF0ZSkge1xuICAgICAgICBpZiAoaXNvbGF0ZSA9PT0gdm9pZCAwKSB7IGlzb2xhdGUgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuY3VycmVudExvYWRlciA9IGN1cnJlbnRMb2FkZXI7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgICAgICB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyO1xuICAgICAgICB0aGlzLmlzb2xhdGUgPSBpc29sYXRlO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25UcmFuc2xhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fb25MYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9vbkRlZmF1bHRMYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9sYW5ncyA9IFtdO1xuICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0cyA9IHt9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUsIFwib25UcmFuc2xhdGlvbkNoYW5nZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25UcmFuc2xhdGlvbkNoYW5nZSA6IHRoaXMuc3RvcmUub25UcmFuc2xhdGlvbkNoYW5nZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcIm9uTGFuZ0NoYW5nZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vbkxhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uTGFuZ0NoYW5nZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcIm9uRGVmYXVsdExhbmdDaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vbkRlZmF1bHRMYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkRlZmF1bHRMYW5nQ2hhbmdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUsIFwiZGVmYXVsdExhbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgbGFuZyB0byBmYWxsYmFjayB3aGVuIHRyYW5zbGF0aW9ucyBhcmUgbWlzc2luZyBvbiB0aGUgY3VycmVudCBsYW5nXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9kZWZhdWx0TGFuZyA6IHRoaXMuc3RvcmUuZGVmYXVsdExhbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcImN1cnJlbnRMYW5nXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9jdXJyZW50TGFuZyA6IHRoaXMuc3RvcmUuY3VycmVudExhbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudExhbmcgPSBjdXJyZW50TGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuY3VycmVudExhbmcgPSBjdXJyZW50TGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcImxhbmdzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFuIGFycmF5IG9mIGxhbmdzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2xhbmdzIDogdGhpcy5zdG9yZS5sYW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGFuZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYW5ncyA9IGxhbmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5sYW5ncyA9IGxhbmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUsIFwidHJhbnNsYXRpb25zXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fdHJhbnNsYXRpb25zIDogdGhpcy5zdG9yZS50cmFuc2xhdGlvbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdG8gdXNlIGFzIGEgZmFsbGJhY2tcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnNldERlZmF1bHRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGxhbmcgPT09IHRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGVuZGluZyA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGVuZGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGRlZmF1bHRMYW5nIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRMYW5nID0gbGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlbmRpbmcudGFrZSgxKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzZWRcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXREZWZhdWx0TGFuZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwqPn1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGVuZGluZyA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGVuZGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGN1cnJlbnRMYW5nIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudExhbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlbmRpbmcudGFrZSgxKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8Kj59XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUucmV0cmlldmVUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgcGVuZGluZztcbiAgICAgICAgLy8gaWYgdGhpcyBsYW5ndWFnZSBpcyB1bmF2YWlsYWJsZSwgYXNrIGZvciBpdFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICAgICAgICAgICAgcGVuZGluZyA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBlbmRpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2Ugd2l0aCB0aGUgY3VycmVudCBsb2FkZXJcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldFRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zID0gdGhpcy5jdXJyZW50TG9hZGVyLmdldFRyYW5zbGF0aW9uKGxhbmcpLnNoYXJlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucy50YWtlKDEpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHJlcztcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYW51YWxseSBzZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gc2hvdWxkTWVyZ2VcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5zZXRUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChsYW5nLCB0cmFuc2xhdGlvbnMsIHNob3VsZE1lcmdlKSB7XG4gICAgICAgIGlmIChzaG91bGRNZXJnZSA9PT0gdm9pZCAwKSB7IHNob3VsZE1lcmdlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHNob3VsZE1lcmdlICYmIHRoaXMudHJhbnNsYXRpb25zW2xhbmddKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IG1lcmdlRGVlcCh0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwgdHJhbnNsYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRMYW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGFuZ3NcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuYWRkTGFuZ3MgPSBmdW5jdGlvbiAobGFuZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAobGFuZykge1xuICAgICAgICAgICAgaWYgKF90aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubGFuZ3MucHVzaChsYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUudXBkYXRlTGFuZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRkTGFuZ3MoT2JqZWN0LmtleXModGhpcy50cmFuc2xhdGlvbnMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhcnNlZCByZXN1bHQgb2YgdGhlIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXJzZWRSZXN1bHQgPSBmdW5jdGlvbiAodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9LCBvYnNlcnZhYmxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBrZXlfMSA9IGtleTsgX2kgPCBrZXlfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGtleV8xW19pXTtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGssIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlZE9icyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGtleV8yID0ga2V5OyBfYSA8IGtleV8yLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleV8yW19hXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9icyA9IHR5cGVvZiByZXN1bHRba10uc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHRba10gOiBPYnNlcnZhYmxlLm9mKHJlc3VsdFtrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkT2JzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRPYnMgPSBvYnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRPYnMgPSBtZXJnZWRPYnMubWVyZ2Uob2JzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VkT2JzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXlbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodHJhbnNsYXRpb25zLCBrZXkpLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5kZWZhdWx0TGFuZyAmJiB0aGlzLmRlZmF1bHRMYW5nICE9PSB0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmRlZmF1bHRMYW5nXSwga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0geyBrZXk6IGtleSwgdHJhbnNsYXRlU2VydmljZTogdGhpcyB9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyA9IHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5oYW5kbGUocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcyA6IGtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHthbnl9IHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwia2V5XFxcIiByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgbG9hZGluZyBhIG5ldyB0cmFuc2xhdGlvbiB0byB1c2VcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX3RoaXMuZ2V0UGFyc2VkUmVzdWx0KHJlcywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uQ29tcGxldGUsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgb25FcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHRyYW5zbGF0ZWQgdmFsdWVzIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKSB3aGljaCB1cGRhdGVzXG4gICAgICogd2hlbmV2ZXIgdGhlIGxhbmd1YWdlIGNoYW5nZXMuXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHthbnl9IEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnN0cmVhbSA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwia2V5XFxcIiByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLm9uTGFuZ0NoYW5nZS5zd2l0Y2hNYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gX3RoaXMuZ2V0UGFyc2VkUmVzdWx0KGV2ZW50LnRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICAgKiBBbGwgcnVsZXMgcmVnYXJkaW5nIHRoZSBjdXJyZW50IGxhbmd1YWdlLCB0aGUgcHJlZmVycmVkIGxhbmd1YWdlIG9mIGV2ZW4gZmFsbGJhY2sgbGFuZ3VhZ2VzIHdpbGwgYmUgdXNlZCBleGNlcHQgYW55IHByb21pc2UgaGFuZGxpbmcuXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuaW5zdGFudCA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwia2V5XFxcIiByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmpfMSA9IHt9O1xuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqXzFba2V5W2luZGV4XV0gPSBrZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5XG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGxhbmcpIHtcbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gdGhpcy5jdXJyZW50TGFuZzsgfVxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY3VycmVudCBsYW5nXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5jaGFuZ2VMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgICAgIHRoaXMub25MYW5nQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGxhbmcsIHVzZSB0aGUgb25lIHRoYXQgd2UganVzdCBzZXRcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBkZWZhdWx0IGxhbmdcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmNoYW5nZURlZmF1bHRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnJlbG9hZExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLnJlc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZXNldExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0QnJvd3NlckxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJMYW5nID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XG4gICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3NlckxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJy0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnXycpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm93c2VyTGFuZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRCcm93c2VyQ3VsdHVyZUxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJDdWx0dXJlTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZztcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfTtcblRyYW5zbGF0ZVNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBUcmFuc2xhdGVTdG9yZSwgfSxcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZUxvYWRlciwgfSxcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZVBhcnNlciwgfSxcbiAgICB7IHR5cGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW1VTRV9TVE9SRSxdIH0sXSB9LFxuXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbmFtZSBlcXVhbHNcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIERldGVybWluZXMgaWYgdHdvIG9iamVjdHMgb3IgdHdvIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBUd28gb2JqZWN0cyBvciB2YWx1ZXMgYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudCBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICpcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIGFsbCBvZiB0aGVpciBwcm9wZXJ0aWVzIGFyZSBlcXVhbCBieVxuICogICBjb21wYXJpbmcgdGhlbSB3aXRoIGBlcXVhbHNgLlxuICpcbiAqIEBwYXJhbSB7Kn0gbzEgT2JqZWN0IG9yIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG8yIE9iamVjdCBvciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cbiAqL1xuLyogdHNsaW50OmRpc2FibGUgKi8gZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvMSwgbzIpIHtcbiAgICBpZiAobzEgPT09IG8yKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAobzEgIT09IG8xICYmIG8yICE9PSBvMilcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIE5hTiA9PT0gTmFOXG4gICAgdmFyIHQxID0gdHlwZW9mIG8xLCB0MiA9IHR5cGVvZiBvMiwgbGVuZ3RoLCBrZXksIGtleVNldDtcbiAgICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzEpKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobzIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICgobGVuZ3RoID0gbzEubGVuZ3RoKSA9PSBvMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG8xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMikge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvMltrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB0YXJnZXQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRhcmdldCkpO1xuICAgIHNvdXJjZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG4gICAgdmFyIG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCAoX2EgPSB7fSwgX2Fba2V5XSA9IHNvdXJjZVtrZXldLCBfYSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgKF9iID0ge30sIF9iW2tleV0gPSBzb3VyY2Vba2V5XSwgX2IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnVzeVNlcnZpY2Uge1xuICAgIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB0cnVlXG4gICAgfVxuICAgIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gZmFsc2VcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYnVzeS1idXR0b24vYnVzeS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI7XG59KCkpO1xuZXhwb3J0IHsgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9O1xuLyoqXG4gKiBUaGlzIGhhbmRsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgbWlzc2luZyB0cmFuc2xhdGlvbiBoYW5kbGVyIGF0IGFsbFxuICovXG52YXIgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKCkge1xuICAgIH1cbiAgICBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmtleTtcbiAgICB9O1xuICAgIHJldHVybiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbn0oKSk7XG5leHBvcnQgeyBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9O1xuRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIFRyYW5zbGF0ZUxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlTG9hZGVyKCkge1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlTG9hZGVyO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9O1xuLyoqXG4gKiBUaGlzIGxvYWRlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBsb2FkZXIgYXQgYWxsXG4gKi9cbnZhciBUcmFuc2xhdGVGYWtlTG9hZGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNsYXRlRmFrZUxvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVGYWtlTG9hZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRyYW5zbGF0ZUZha2VMb2FkZXIucHJvdG90eXBlLmdldFRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2Yoe30pO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zbGF0ZUZha2VMb2FkZXI7XG59KFRyYW5zbGF0ZUxvYWRlcikpO1xuZXhwb3J0IHsgVHJhbnNsYXRlRmFrZUxvYWRlciB9O1xuVHJhbnNsYXRlRmFrZUxvYWRlci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJhbnNsYXRlRmFrZUxvYWRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gXCIuL3V0aWxcIjtcbnZhciBUcmFuc2xhdGVQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVBhcnNlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBhcnNlcjtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVQYXJzZXIgfTtcbnZhciBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNsYXRlRGVmYXVsdFBhcnNlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudGVtcGxhdGVNYXRjaGVyID0gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoZXhwciwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwciAhPT0gJ3N0cmluZycgfHwgIXBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHIucmVwbGFjZSh0aGlzLnRlbXBsYXRlTWF0Y2hlciwgZnVuY3Rpb24gKHN1YnN0cmluZywgYikge1xuICAgICAgICAgICAgdmFyIHIgPSBfdGhpcy5nZXRWYWx1ZShwYXJhbXMsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChyKSA/IHIgOiBzdWJzdHJpbmc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAga2V5ID0gJyc7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGtleSArPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHRhcmdldCkgJiYgaXNEZWZpbmVkKHRhcmdldFtrZXldKSAmJiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyB8fCAha2V5cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgICAga2V5ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gJy4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChrZXlzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRGVmYXVsdFBhcnNlcjtcbn0oVHJhbnNsYXRlUGFyc2VyKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIH07XG5UcmFuc2xhdGVEZWZhdWx0UGFyc2VyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVEZWZhdWx0UGFyc2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXF1YWxzLCBpc0RlZmluZWQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xudmFyIFRyYW5zbGF0ZURpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlRGlyZWN0aXZlKHRyYW5zbGF0ZVNlcnZpY2UsIGVsZW1lbnQsIF9yZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlID0gdHJhbnNsYXRlU2VydmljZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5fcmVmID0gX3JlZjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uVHJhbnNsYXRpb25DaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIHRyYW5zbGF0aW9ucyBvZiB0aGUgY3VycmVudCBsYW5nIGNoYW5nZVxuICAgICAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5sYW5nID09PSBfdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrTm9kZXModHJ1ZSwgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgIGlmICghdGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrTm9kZXModHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUsIFwidHJhbnNsYXRlUGFyYW1zXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIWVxdWFscyh0aGlzLmN1cnJlbnRQYXJhbXMsIHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja05vZGVzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3Q2hlY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGVja05vZGVzKCk7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrTm9kZXMgPSBmdW5jdGlvbiAoZm9yY2VVcGRhdGUsIHRyYW5zbGF0aW9ucykge1xuICAgICAgICBpZiAoZm9yY2VVcGRhdGUgPT09IHZvaWQgMCkgeyBmb3JjZVVwZGF0ZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5XG4gICAgICAgIGlmICghbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB3ZSBhZGQgdGhlIGtleSBhcyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMua2V5KTtcbiAgICAgICAgICAgIG5vZGVzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1c2UgdGhlIGNvbnRlbnQgYXMgYSBrZXksIG5vdCB0aGUgdHJhbnNsYXRpb24gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRlbnQgd2FzIGNoYW5nZWQgZnJvbSB0aGUgdXNlciwgd2UnbGwgdXNlIGl0IGFzIGEgcmVmZXJlbmNlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5vcmlnaW5hbENvbnRlbnQgJiYgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBub2RlLm9yaWdpbmFsQ29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShrZXksIG5vZGUsIHRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBub2RlLCB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gdGhpcy5jdXJyZW50UGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gdGhpcy5jdXJyZW50UGFyYW1zO1xuICAgICAgICAgICAgdmFyIG9uVHJhbnNsYXRpb24gPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLm9yaWdpbmFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IF90aGlzLmdldENvbnRlbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuY3VycmVudFZhbHVlID0gaXNEZWZpbmVkKHJlcykgPyByZXMgOiAobm9kZS5vcmlnaW5hbENvbnRlbnQgfHwga2V5KTtcbiAgICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIGluIHRoZSBvcmlnaW5hbCBjb250ZW50IHRvIHByZXNlcnZlIHNwYWNlcyB0aGF0IHdlIG1pZ2h0IGhhdmUgdHJpbW1lZFxuICAgICAgICAgICAgICAgIF90aGlzLnNldENvbnRlbnQobm9kZSwgX3RoaXMua2V5ID8gbm9kZS5jdXJyZW50VmFsdWUgOiBub2RlLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKGtleSwgbm9kZS5jdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCB0aGlzLmN1cnJlbnRQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvblRyYW5zbGF0aW9uKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChub2RlLCBjb250ZW50KSB7XG4gICAgICAgIGlmIChpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRGlyZWN0aXZlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZURpcmVjdGl2ZSB9O1xuVHJhbnNsYXRlRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbdHJhbnNsYXRlXSxbbmd4LXRyYW5zbGF0ZV0nXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZURpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIH0sXG5dOyB9O1xuVHJhbnNsYXRlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICd0cmFuc2xhdGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3RyYW5zbGF0ZVBhcmFtcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZXF1YWxzLCBpc0RlZmluZWQgfSBmcm9tICcuL3V0aWwnO1xudmFyIFRyYW5zbGF0ZVBpcGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVBpcGUodHJhbnNsYXRlLCBfcmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgICAgICB0aGlzLl9yZWYgPSBfcmVmO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIHRyYW5zbGF0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb25UcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnZhbHVlID0gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiBrZXk7XG4gICAgICAgICAgICBfdGhpcy5sYXN0S2V5ID0ga2V5O1xuICAgICAgICAgICAgX3RoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMudHJhbnNsYXRlLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgIH07XG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcXVlcnkgfHwgcXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UgYXNrIGFub3RoZXIgdGltZSBmb3IgdGhlIHNhbWUga2V5LCByZXR1cm4gdGhlIGxhc3QgdmFsdWVcbiAgICAgICAgaWYgKGVxdWFscyhxdWVyeSwgdGhpcy5sYXN0S2V5KSAmJiBlcXVhbHMoYXJncywgdGhpcy5sYXN0UGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGludGVycG9sYXRlUGFyYW1zO1xuICAgICAgICBpZiAoaXNEZWZpbmVkKGFyZ3NbMF0pICYmIGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmIGFyZ3NbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYWNjZXB0IG9iamVjdHMgd3JpdHRlbiBpbiB0aGUgdGVtcGxhdGUgc3VjaCBhcyB7bjoxfSwgeyduJzoxfSwge246J3YnfVxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHdoeSB3ZSBtaWdodCBuZWVkIHRvIGNoYW5nZSBpdCB0byByZWFsIEpTT04gb2JqZWN0cyBzdWNoIGFzIHtcIm5cIjoxfSBvciB7XCJuXCI6XCJ2XCJ9XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkQXJncyA9IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhcXCcpPyhbYS16QS1aMC05X10rKShcXCcpPyhcXHMpPzovZywgJ1wiJDJcIjonKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvOihcXHMpPyhcXCcpKC4qPykoXFwnKS9nLCAnOlwiJDNcIicpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRlUGFyYW1zID0gSlNPTi5wYXJzZSh2YWxpZEFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJXcm9uZyBwYXJhbWV0ZXIgaW4gVHJhbnNsYXRlUGlwZS4gRXhwZWN0ZWQgYSB2YWxpZCBPYmplY3QsIHJlY2VpdmVkOiBcIiArIGFyZ3NbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlUGFyYW1zID0gYXJnc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9yZSB0aGUgcXVlcnksIGluIGNhc2UgaXQgY2hhbmdlc1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBxdWVyeTtcbiAgICAgICAgLy8gc3RvcmUgdGhlIHBhcmFtcywgaW4gY2FzZSB0aGV5IGNoYW5nZVxuICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSBhcmdzO1xuICAgICAgICAvLyBzZXQgdGhlIHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzdWJzY3JpcHRpb24gdG8gb25MYW5nQ2hhbmdlLCBjbGVhbiBpdFxuICAgICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvblRyYW5zbGF0aW9uQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSB0cmFuc2xhdGlvbnMgY2hhbmdlXG4gICAgICAgIGlmICghdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdEtleSAmJiBldmVudC5sYW5nID09PSBfdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcywgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgIGlmICghdGhpcy5vbkxhbmdDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0S2V5ID0gbnVsbDsgLy8gd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCByZXR1cm4gdGhlIHNhbWUgdmFsdWUgdW50aWwgaXQncyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkRlZmF1bHRMYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0S2V5ID0gbnVsbDsgLy8gd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCByZXR1cm4gdGhlIHNhbWUgdmFsdWUgdW50aWwgaXQncyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUuX2Rpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uTGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBpcGU7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlUGlwZSB9O1xuVHJhbnNsYXRlUGlwZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIHsgdHlwZTogUGlwZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAndHJhbnNsYXRlJyxcbiAgICAgICAgICAgICAgICBwdXJlOiBmYWxzZSAvLyByZXF1aXJlZCB0byB1cGRhdGUgdGhlIHZhbHVlIHdoZW4gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWRcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJhbnNsYXRlUGlwZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiwgfSxcbl07IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnBpcGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgVHJhbnNsYXRlU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVN0b3JlKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSB0aGlzLmRlZmF1bHRMYW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogYSBsaXN0IG9mIHRyYW5zbGF0aW9ucyBwZXIgbGFuZ1xuICAgICAgICAgKiBAdHlwZSB7e319XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogYW4gYXJyYXkgb2YgbGFuZ3NcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYW5ncyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc2xhdGVTdG9yZTtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVTdG9yZSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5zdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL3JlYWN0aXZlLWZvcm0vcmVhY3RpdmUtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERhdGV0aW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL2RhdGV0aW1lLXBpY2tlci9kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3JlYWN0aXZlLWZvcm0vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbnVtc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL2VudW1zZWxlY3QvZW51bXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRGbG9hdENvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS9pbnB1dC1mbG9hdC9pbnB1dC1mbG9hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL2dyb3VwLXNlbGVjdC9ncm91cC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IERheXNPZldlZWtDb21wb25lbnQgfSBmcm9tICcuL3JlYWN0aXZlLWZvcm0vZGF5cy1vZi13ZWVrL2RheXMtb2Ytd2Vlay5jb21wb25lbnQnXG5pbXBvcnQgeyBUZXh0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnXG5pbXBvcnQgeyBUcmVlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS90cmVldmlldy90cmVldmlldy5jb21wb25lbnQnXG5pbXBvcnQgeyBUcmVlVmlld1R4dENvbXBvbmVudCB9IGZyb20gJy4vcmVhY3RpdmUtZm9ybS90cmVldmlldy10eHQvdHJlZXZpZXctdHh0LmNvbXBvbmVudCdcbmltcG9ydCB7IFRyZWVWaWV3UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3JlYWN0aXZlLWZvcm0vdHJlZXZpZXctcmFkaW8vdHJlZXZpZXctcmFkaW8uY29tcG9uZW50J1xuaW1wb3J0IHsgVHJlZVZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL3RyZWV2aWV3LXJhZGlvL3RyZWV2aWV3LWl0ZW0uY29tcG9uZW50J1xuXG5pbXBvcnQgeyBCdXN5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXN5LWJ1dHRvbi9idXN5LWJ1dHRvbi5jb21wb25lbnQnXG5pbXBvcnQgeyBCdXN5U2VydmljZSB9IGZyb20gJy4vYnVzeS1idXR0b24vYnVzeS5zZXJ2aWNlJ1xuXG5pbXBvcnQgeyBEcm9wZG93blRyZWV2aWV3TW9kdWxlIH0gZnJvbSAnbmcyLWRyb3Bkb3duLXRyZWV2aWV3JztcbmltcG9ydCB7IE5ndWlEYXRldGltZVBpY2tlck1vZHVsZSwgTmd1aURhdGV0aW1lIH0gZnJvbSAnQG5ndWkvZGF0ZXRpbWUtcGlja2VyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5cblxuTmd1aURhdGV0aW1lLnBhcnNlRGF0ZSA9IChzdHI6IGFueSk6IGFueSA9PiB7XG4gIGxldCBtOiBhbnkgPSBtb21lbnQoc3RyKVxuICBpZiAoIW0uaXNWYWxpZCgpKSB7IC8vVGltZVxuICAgIC8vIGxldCB0bXAgPSBzdHIuc3BsaXQoJzonKTtcbiAgICBtID0gbW9tZW50KClcbiAgICAvLyBtLnNldCgnaG91cicsIHBhcnNlSW50KHRtcFswXSB8fCAnMCcsIDEwKSlcbiAgICAvLyBtLnNldCgnbWludXRlJywgcGFyc2VJbnQodG1wWzFdIHx8ICcwJywgMTApKVxuICAgIC8vIG0uc2V0KCdzZWNvbmQnLCBwYXJzZUludCh0bXBbMl0gfHwgJzAnLCAxMCkpXG4gIH1cbiAgcmV0dXJuIG0udG9EYXRlKClcbn1cblxubGV0IGRlY0V4cDogYW55W10gPVxuICBbXG4gICAgUmVhY3RpdmVGb3JtQ29tcG9uZW50LFxuICAgIERhdGV0aW1lUGlja2VyQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBFbnVtc2VsZWN0Q29tcG9uZW50LFxuICAgIElucHV0VGV4dENvbXBvbmVudCxcbiAgICBJbnB1dEZsb2F0Q29tcG9uZW50LFxuICAgIFRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgU3dpdGNoQ29tcG9uZW50LFxuICAgIEdyb3VwU2VsZWN0Q29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF5c09mV2Vla0NvbXBvbmVudCxcbiAgICBNdWx0aVNlbGVjdENvbXBvbmVudCxcbiAgICBUZXh0QXJlYUNvbXBvbmVudCxcbiAgICBCdXN5QnV0dG9uQ29tcG9uZW50LFxuICAgIFRyZWVWaWV3Q29tcG9uZW50LFxuICAgIFRyZWVWaWV3VHh0Q29tcG9uZW50LFxuICAgIFRyZWVWaWV3UmFkaW9Db21wb25lbnQsXG4gICAgVHJlZVZpZXdJdGVtQ29tcG9uZW50XG5cbiAgXVxuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmd1aURhdGV0aW1lUGlja2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERyb3Bkb3duVHJlZXZpZXdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBkZWNFeHAsXG4gIGV4cG9ydHM6IFsuLi5kZWNFeHBdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGb3Jtc1V0aWxzTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFuZ3VsYXJGb3Jtc1V0aWxzTW9kdWxlLCBwcm92aWRlcnM6IFtCdXN5U2VydmljZV0gfTtcbiAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYW5ndWxhckZvcm1zVXRpbHMubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVGYWtlTG9hZGVyIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4vc3JjL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGFyc2VyLCBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTdG9yZSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc3RvcmVcIjtcbmltcG9ydCB7IFVTRV9TVE9SRSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnBpcGVcIjtcbnZhciBUcmFuc2xhdGVNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZU1vZHVsZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgcm9vdCBtb2R1bGUgdG8gcHJvdmlkZSB0aGUgVHJhbnNsYXRlU2VydmljZVxuICAgICAqIEBwYXJhbSB7VHJhbnNsYXRlTW9kdWxlQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcucGFyc2VyIHx8IHsgcHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlciB9LFxuICAgICAgICAgICAgICAgIGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHx8IHsgcHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0sXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU3RvcmUsXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZSB9LFxuICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIG90aGVyIChub24gcm9vdCkgbW9kdWxlcyB0byBpbXBvcnQgdGhlIGRpcmVjdGl2ZS9waXBlXG4gICAgICogQHBhcmFtIHtUcmFuc2xhdGVNb2R1bGVDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcucGFyc2VyIHx8IHsgcHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlciB9LFxuICAgICAgICAgICAgICAgIGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHx8IHsgcHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZSB9LFxuICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH07XG5UcmFuc2xhdGVNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGVQaXBlLFxuICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnVzeVNlcnZpY2UgfSBmcm9tICcuL2J1c3kuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHctYnVzeS1idXR0b24nLFxuICAgIHRlbXBsYXRlOiAnPGJ1dHRvbiAoY2xpY2spPVxcJ3NlbmQoKVxcJyBbY2xhc3NdPVwiY3NzQ2xhc3NcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgYnVzeS5nbG9iYWxcIj48c3BhbiBzdHlsZT1cXCdtYXJnaW4tIHJpZ2h0OjVweFxcJyAgKm5nSWY9XFwnYnVzeS5nbG9iYWxcXCc+PGltZyBzcmM9XCJhc3NldHMvaW1nL2FqYXgtbG9hZGVyLmdpZlwiLz48L3NwYW4+PGkgY2xhc3M9XFwnZmEgZmEte3tpY29uIH19XFwnIHN0eWxlPVxcJ21hcmdpbi0gcmlnaHQ6NXB4XFwnICAqbmdJZj1cXCdpY29uICYmICFidXN5Lmdsb2JhbFxcJz48L2k+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPidcbn0pXG5leHBvcnQgY2xhc3MgQnVzeUJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBjc3NDbGFzczogc3RyaW5nXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmdcbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYnVzeTogQnVzeVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKVxuICAgIH1cblxuICAgIHNlbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DbGljay5uZXh0KHRydWUpXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYnVzeS1idXR0b24vYnVzeS1idXR0b24uY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hbmd1bGFyRm9ybXNVdGlscy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFjdGl2ZS1mb3JtL2Zvcm0tZmllbGQubW9kZWwnXG5leHBvcnQgeyBCdXN5U2VydmljZSB9IGZyb20gJy4vYnVzeS1idXR0b24vYnVzeS5zZXJ2aWNlJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uL2Zvcm0tZmllbGQubW9kZWwnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8dHctZGF0ZXRpbWUtcGlja2VyIFtncm91cF09J2dyb3VwJyBbZmllbGRdPSdmaWVsZCcgW3JlcXVlc3RdPSdyZXF1ZXN0Jz48L3R3LWRhdGV0aW1lLXBpY2tlcj5gXG5cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gJydcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5maWVsZC5tb3JlKVxuICAgICAgdGhpcy5maWVsZC5tb3JlID0ge31cblxuICAgIHRoaXMuZmllbGQubW9yZS5kYXRlT25seSA9IHRydWVcbiAgICBpZiAoIXRoaXMuZmllbGQubW9yZS5kYXRlRm9ybWF0KVxuICAgICAgdGhpcy5maWVsZC5tb3JlLmRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCdcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLnN1YilcbiAgICAvLyAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3JlYWN0aXZlLWZvcm0vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dy1kYXRldGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IFtmb3JtR3JvdXBdPSdncm91cCcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPSdmaWVsZC5pZCcgbmFtZT0ne3tmaWVsZC5pZH19JyBjbGFzcz0nZm9ybS1jb250cm9sJyAodmFsdWVDaGFuZ2VkKT0ndmFsdWVDaGFuZ2VkKCRldmVudCknIG5ndWktZGF0ZXRpbWUtcGlja2VyIGRlZmF1bHQtdmFsdWU9J3t7ZGVmYXVsdFZhbHVlfX0nIFtjbG9zZS1vbi1zZWxlY3RdPVwiZmllbGQubW9yZS5jbG9zZU9uU2VsZWN0IHx8IGZhbHNlXCIgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiIFtkYXRlLW9ubHldPVwiZmllbGQubW9yZS5kYXRlT25seSB8fGZhbHNlXCIgW2RhdGUtZm9ybWF0XT0ndGhpcy5maWVsZC5tb3JlLmRhdGVGb3JtYXQgfHwgXCJZWVlZLU1NLUREIEhIOm1tXCInIFtwYXJzZS1mb3JtYXRdPSd0aGlzLmZpZWxkLm1vcmUuZGF0ZUZvcm1hdCB8fCBcIllZWVktTU0tREQgSEg6bW1cIicgIHJlYWRvbmx5Lz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tZGVmYXVsdCcgKGNsaWNrKT0nY2xlYXIoKSc+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyA8c21hbGwgY2xhc3M9J3RleHQtZGFuZ2VyJyAqbmdJZj0nZmllbGQuY29udHJvbC52YWx1ZSAmJiBmaWVsZC5jb250cm9sLmludmFsaWQnPkludmFsaWQgRm9ybWF0IDogWVlZWS1NTS1ERCBISDpNTTwvc21hbGw+XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXBcbiAgQElucHV0KCkgZmllbGQ6IEZvcm1GaWVsZFxuICBASW5wdXQoKSByZXF1ZXN0OiBhbnlcblxuICBkZWZhdWx0VmFsdWU6IERhdGVcbiAgbWludXRlOiBzdHJpbmcgPSAnJ1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmllbGQubW9yZSkge1xuICAgICAgaWYgKHRoaXMuZmllbGQubW9yZS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkLm1vcmUuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3RhcnRPZkRheSc6XG4gICAgICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMClcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcygwKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkYXRlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ2VuZE9mRGF5JzpcbiAgICAgICAgICAgIGxldCBkYXRlMjogRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGRhdGUyLnNldEhvdXJzKDIzKVxuICAgICAgICAgICAgZGF0ZTIuc2V0TWludXRlcyg1OSlcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZGF0ZTJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5maWVsZC5tb3JlLmRlZmF1bHRWYWx1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpZWxkLm1vcmUgPSB7fVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmZpZWxkLm1vcmUuZGF0ZU9ubHkpXG4gICAgLy8gdGhpcy5maWVsZC5hZGRWYWxpZGF0b3IoVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxkXFxkXFxkXFxkLSgwP1sxLTldfDFbMC0yXSktKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvKSlcbiAgICAvLyBlbHNlXG4gICAgLy8gdGhpcy5maWVsZC5hZGRWYWxpZGF0b3IoVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxkXFxkXFxkXFxkLSgwP1sxLTldfDFbMC0yXSktKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSAoMDB8MFswLTldfDFbMC05XXwyWzAtM10pOihbMC05XXxbMC01XVswLTldKSQvKSlcblxuXG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpZWxkLm1vcmUuZGF0ZU9ubHkgJiYgZGF0ZSlcbiAgICAgIHRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXSA9IGRhdGUudG9TdHJpbmcoKVxuICB9XG5cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVlc3RbdGhpcy5maWVsZC5pZF0gPSBudWxsXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3JlYWN0aXZlLWZvcm0vZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uL2Zvcm0tZmllbGQubW9kZWwnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LWRvZicsXG4gIHRlbXBsYXRlOiBgPHR3LWVudW1zZWxlY3QgW2dyb3VwXT0nZ3JvdXAnIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctZW51bXNlbGVjdD5gXG5cbn0pXG5leHBvcnQgY2xhc3MgRGF5c09mV2Vla0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXBcbiAgQElucHV0KCkgZmllbGQ6IEZvcm1GaWVsZFxuICBASW5wdXQoKSByZXF1ZXN0OiBhbnlcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSBEYXlzT2ZXZWVrVmFsdWVzXG4gIH1cblxufVxuXG5cblxuZXhwb3J0IGVudW0gRGF5c09mV2Vla1ZhbHVlcyB7XG4gICdTdW5kYXknLFxuICAnTW9uZGF5JyxcbiAgJ1R1ZXNkYXknLFxuICAnV2VkbmVzZGF5JyxcbiAgJ1RodXJzZGF5JyxcbiAgJ0ZyaWRheScsXG4gICdTYXR1cmRheSdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL2RheXMtb2Ytd2Vlay9kYXlzLW9mLXdlZWsuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vZm9ybS1maWVsZC5tb2RlbCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHctZW51bXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgPHNlbGVjdCBbYXR0ci5tdWx0aXBsZV09J2ZpZWxkLnR5cGUgPT09IFwiZW51bXNlbGVjdFwiP251bGw6dHJ1ZScgW2Zvcm1Db250cm9sTmFtZV09J2ZpZWxkLmlkJyBuYW1lPSd7e2ZpZWxkLmlkfX0nIGNsYXNzPSdmb3JtLWNvbnRyb2wnIFsobmdNb2RlbCldPVwicmVxdWVzdFtmaWVsZC5pZF1cIj5cbiAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwiZmllbGQuZmlyc3RWYWx1ZS52YWx1ZVwiICpuZ0lmPSdmaWVsZC5maXJzdFZhbHVlJyA+e3tmaWVsZC5maXJzdFZhbHVlLnRleHQgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJvcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGVudW1Ub0FycmF5KGZpZWxkLm9wdGlvbnMpXCI+XG4gICAgICAgIHt7b3B0aW9ufX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRW51bXNlbGVjdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cFxuICBASW5wdXQoKSBmaWVsZDogRm9ybUZpZWxkXG4gIEBJbnB1dCgpIHJlcXVlc3Q6IGFueVxuXG4gIHB1YmxpYyBlbnVtVG9BcnJheShlbnVtT2JqOiBhbnkpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudW1PYmopLnNsaWNlKE9iamVjdC5rZXlzKGVudW1PYmopLmxlbmd0aCAvIDIpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL2VudW1zZWxlY3QvZW51bXNlbGVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LWdyb3Vwc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbZm9ybUdyb3VwXT0nZ3JvdXAnPlxuICA8c2VsZWN0IFtmb3JtQ29udHJvbE5hbWVdPSdmaWVsZC5pZCcgbmFtZT0ne3tmaWVsZC5pZH19JyBjbGFzcz0nZm9ybS1jb250cm9sJyBbKG5nTW9kZWwpXT1cInJlcXVlc3RbZmllbGQuaWRdXCIgPlxuICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cImZpZWxkLmZpcnN0VmFsdWUudmFsdWUgXCIgKm5nSWY9J2ZpZWxkLmZpcnN0VmFsdWUnID57e2ZpZWxkLmZpcnN0VmFsdWUudGV4dCB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgIDxvcHRncm91cCBsYWJlbD1cInt7Z3JvdXAubGFiZWx9fVwiICpuZ0Zvcj1cImxldCBncm91cCBvZiBmaWVsZC5vcHRpb25zXCI+XG4gICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwib3B0aW9uW2ZpZWxkLm9wdGlvblZhbHVlXVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZ3JvdXAudmFsdWVzXCI+XG4gICAgICAgICAge3tvcHRpb25bZmllbGQub3B0aW9uVGV4dF19fVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXBcbiAgQElucHV0KCkgZmllbGQ6IEZvcm1GaWVsZFxuICBASW5wdXQoKSByZXF1ZXN0OiBhbnlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL2dyb3VwLXNlbGVjdC9ncm91cC1zZWxlY3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dy1pbnB1dC1mbG9hdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09J2ZpZWxkLmlkJyBuYW1lPSd7e2ZpZWxkLmlkfX0nIHR5cGU9J3RleHQnIGNsYXNzPSdmb3JtLWNvbnRyb2wnIFtyZWFkb25seV09J2ZpZWxkLm1vcmU/LnJlYWRvbmx5JyAgLz5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZsb2F0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkLmFkZFZhbGlkYXRvcihWYWxpZGF0b3JzLnBhdHRlcm4oL15bKy1dPyhbMC05XSpbLl0pP1swLTldKyQvKSlcbiAgICB0aGlzLnN1YiA9IHRoaXMuZmllbGQuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3RbdGhpcy5maWVsZC5pZF0gPSBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViKVxuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3JlYWN0aXZlLWZvcm0vaW5wdXQtZmxvYXQvaW5wdXQtZmxvYXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vZm9ybS1maWVsZC5tb2RlbCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHctaW5wdXQtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gICA8ZGl2IFtmb3JtR3JvdXBdPSdncm91cCcgW25nQ2xhc3NdPSdmaWVsZC5tb3JlPy5udWxsYWJsZSA/IFwiaW5wdXQtZ3JvdXBcIiA6XCJcIic+XG4gIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIG5hbWU9J3t7ZmllbGQuaWR9fScgdHlwZT0ne3tmaWVsZC50eXBlfX0nIGNsYXNzPSdmb3JtLWNvbnRyb2wnIFsobmdNb2RlbCldPVwicmVxdWVzdFtmaWVsZC5pZF1cIiBcbiAgICBbcmVhZG9ubHldPSdmaWVsZC5tb3JlPy5yZWFkb25seScgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiICpuZ0lmPSdmaWVsZC5tb3JlPy5udWxsYWJsZSAmJiBmaWVsZC50eXBlIT09XCJoaWRkZW5cIic+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tZGVmYXVsdCcgKGNsaWNrKT0nY2xlYXIoKSc+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuPC9kaXY+XG4gICBgXG5cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cFxuICBASW5wdXQoKSBmaWVsZDogRm9ybUZpZWxkXG4gIEBJbnB1dCgpIHJlcXVlc3Q6IGFueVxuXG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1ZXN0W3RoaXMuZmllbGQuaWRdID0gbnVsbFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS9pbnB1dC10ZXh0L2lucHV0LXRleHQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dy1tdWx0aXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgIDxidXR0b24gc3R5bGU9J21hcmdpbi10b3A6IC0zMHB4OyBtYXJnaW4tYm90dG9tOiA1cHg7JyBbbmdDbGFzc109XCJhbGxTZWxlY3RlZCA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQnXCIgY2xhc3M9J2J0bi1zbSBidG4gcHVsbC1yaWdodCcgKGNsaWNrKT0nc2VsZWN0QWxsKCknID4ge3tmaWVsZC5tb3JlLmFsbFRleHQgfHwgJ0FsbCd9fTwvYnV0dG9uPlxuICAgPHNlbGVjdCBtdWx0aXBsZSBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIG5hbWU9J3t7ZmllbGQuaWR9fScgY2xhc3M9J2Zvcm0tY29udHJvbCcgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiPlxuICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJvcHRpb25bZmllbGQub3B0aW9uVmFsdWVdXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWVsZC5vcHRpb25zXCI+XG4gICAgICAgIHt7b3B0aW9uW2ZpZWxkLm9wdGlvblRleHRdfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZpZWxkLm1vcmUpXG4gICAgICB0aGlzLmZpZWxkLm1vcmUgPSB7fVxuICB9XG5cblxuICBnZXQgYWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGVzdFNlbGVjdGVkKClcbiAgfVxuXG5cbiAgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRlc3RTZWxlY3RlZCgpKVxuICAgICAgdGhpcy5yZXF1ZXN0W3RoaXMuZmllbGQuaWRdID0gW11cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXSA9IFtdXG5cbiAgICAgIHRoaXMuZmllbGQub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlcXVlc3RbdGhpcy5maWVsZC5pZF0ucHVzaChvcHRpb25bdGhpcy5maWVsZC5vcHRpb25WYWx1ZV0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRlc3RTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXSB8fCAhdGhpcy5maWVsZC5vcHRpb25zKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0W3RoaXMuZmllbGQuaWRdLmxlbmd0aCA9PT0gdGhpcy5maWVsZC5vcHRpb25zLmxlbmd0aClcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0W3RoaXMuZmllbGQuaWRdLmxlbmd0aCA9PT0gdGhpcy5maWVsZC5vcHRpb25zLnNpemUpXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi9mb3JtLWZpZWxkLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHctcmVhY3RpdmUtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG48Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC17e2ZpZWxkLmNvbCB8fCAnc20tNid9fVwiIFtuZ0NsYXNzXT1cImZpZWxkLmNsYXNzXCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiPlxuICAgICAgPGxhYmVsIGZvcj1cInt7ZmllbGQuaWR9fVwiPnt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fSA8c21hbGwgKm5nSWY9J2ZpZWxkLmluZm8nPnt7ZmllbGQuaW5mbyB8IHRyYW5zbGF0ZX19PC9zbWFsbD48L2xhYmVsPlxuICAgICAgPHR3LWlucHV0LXRleHQgKm5nSWY9J2ZpZWxkLnR5cGU9PT1cInRleHRcIiB8fCBmaWVsZC50eXBlPT09XCJudW1iZXJcIiB8fCBmaWVsZC50eXBlPT09XCJoaWRkZW5cIiB8fCBmaWVsZC50eXBlPT09XCJlbWFpbFwiIHx8IGZpZWxkLnR5cGU9PT1cInBhc3N3b3JkXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctaW5wdXQtdGV4dD5cbiAgICAgIDx0dy1pbnB1dC1mbG9hdCAqbmdJZj0nZmllbGQudHlwZT09PVwiZmxvYXRcIicgW2dyb3VwXT0nZm9ybScgW2ZpZWxkXT0nZmllbGQnIFtyZXF1ZXN0XT0ncmVxdWVzdCc+PC90dy1pbnB1dC1mbG9hdD5cbiAgICAgIDx0dy1zZWxlY3QgKm5nSWY9J2ZpZWxkLnR5cGU9PT1cInNlbGVjdFwiJyBbZ3JvdXBdPSdmb3JtJyBbZmllbGRdPSdmaWVsZCcgW3JlcXVlc3RdPSdyZXF1ZXN0Jz48L3R3LXNlbGVjdD5cbiAgICAgIDx0dy1lbnVtc2VsZWN0ICpuZ0lmPSdmaWVsZC50eXBlPT09XCJlbnVtc2VsZWN0XCIgfHwgZmllbGQudHlwZT09PVwiZW51bW11bHRpc2VsZWN0XCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctZW51bXNlbGVjdD5cbiAgICAgIDx0dy1kYXRldGltZS1waWNrZXIgKm5nSWY9J2ZpZWxkLnR5cGU9PT1cImRhdGV0aW1lXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctZGF0ZXRpbWUtcGlja2VyPlxuICAgICAgPHR3LXRpbWUtcGlja2VyICpuZ0lmPSdmaWVsZC50eXBlPT09XCJ0aW1lXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctdGltZS1waWNrZXI+XG4gICAgICA8dHctc3dpdGNoICpuZ0lmPSdmaWVsZC50eXBlPT09XCJib29sZWFuXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctc3dpdGNoPlxuICAgICAgPHR3LWdyb3Vwc2VsZWN0ICpuZ0lmPSdmaWVsZC50eXBlPT09XCJncm91cHNlbGVjdFwiJyBbZ3JvdXBdPSdmb3JtJyBbZmllbGRdPSdmaWVsZCcgW3JlcXVlc3RdPSdyZXF1ZXN0Jz48L3R3LWdyb3Vwc2VsZWN0PlxuICAgICAgPHR3LW11bHRpc2VsZWN0ICpuZ0lmPSdmaWVsZC50eXBlPT09XCJtdWx0aXNlbGVjdFwiJyBbZ3JvdXBdPSdmb3JtJyBbZmllbGRdPSdmaWVsZCcgW3JlcXVlc3RdPSdyZXF1ZXN0Jz48L3R3LW11bHRpc2VsZWN0PlxuICAgICAgPHR3LXRleHRhcmVhICpuZ0lmPSdmaWVsZC50eXBlPT09XCJ0ZXh0YXJlYVwiJyBbZ3JvdXBdPSdmb3JtJyBbZmllbGRdPSdmaWVsZCcgW3JlcXVlc3RdPSdyZXF1ZXN0Jz48L3R3LXRleHRhcmVhPlxuICAgICAgPHR3LWRhdGUtcGlja2VyICpuZ0lmPSdmaWVsZC50eXBlPT09XCJkYXRlXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctZGF0ZS1waWNrZXI+XG4gICAgICA8dHctZG9mICpuZ0lmPSdmaWVsZC50eXBlPT09XCJkYXlzT2ZXZWVrXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctZG9mPlxuICAgICAgPHR3LXRyZWV2aWV3LXR4dCAqbmdJZj0nZmllbGQudHlwZT09PVwidHJlZXZpZXctdHh0XCIgfHwgZmllbGQudHlwZT09PVwiZHJvcGRvd24tdHJlZXZpZXctdHh0XCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctdHJlZXZpZXctdHh0PlxuICAgICAgPHR3LXRyZWV2aWV3LXJhZGlvICpuZ0lmPSdmaWVsZC50eXBlPT09XCJ0cmVldmlldy1yYWRpb1wiIHx8IGZpZWxkLnR5cGU9PT1cImRyb3Bkb3duLXRyZWV2aWV3LXJhZGlvXCInIFtncm91cF09J2Zvcm0nIFtmaWVsZF09J2ZpZWxkJyBbcmVxdWVzdF09J3JlcXVlc3QnPjwvdHctdHJlZXZpZXctcmFkaW8+XG4gICAgICA8dHctdHJlZXZpZXcgKm5nSWY9J2ZpZWxkLnR5cGU9PT1cInRyZWV2aWV3XCIgfHwgZmllbGQudHlwZT09PVwiZHJvcGRvd24tdHJlZXZpZXdcIicgW2dyb3VwXT0nZm9ybScgW2ZpZWxkXT0nZmllbGQnIFtyZXF1ZXN0XT0ncmVxdWVzdCc+PC90dy10cmVldmlldz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBmaWVsZHM6IGFueVtdID0gW11cbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwOyAvLyBvdXIgbW9kZWwgZHJpdmVuIGZvcm1cbiAgQElucHV0KCkgcmVxdWVzdDogYW55OyAvLyBvdXIgbW9kZWwgZHJpdmVuIGZvcm1cbiAgQE91dHB1dCgpIGFmdGVySW5pdDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG4gIEBPdXRwdXQoKSBhZnRlclZpZXdJbml0OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj5cblxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuOyAvLyBrZWVwIHRyYWNrIG9uIHdoZXRoZXIgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgcHVibGljIGV2ZW50czogYW55W10gPSBbXTsgLy8gdXNlIGxhdGVyIHRvIGRpc3BsYXkgZm9ybSBjaGFuZ2VzXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hZnRlckluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpXG4gICAgdGhpcy5hZnRlclZpZXdJbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKVxuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGZpZWxkOiBGb3JtRmllbGQpID0+IHtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKGZpZWxkLmlkLCBmaWVsZC5jb250cm9sKVxuICAgIH0pXG4gICAgdGhpcy5hZnRlckluaXQubmV4dCh0cnVlKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdC5uZXh0KHRydWUpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uL2Zvcm0tZmllbGQubW9kZWwnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgPHNlbGVjdCBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIG5hbWU9J3t7ZmllbGQuaWR9fScgY2xhc3M9J2Zvcm0tY29udHJvbCcgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiPlxuICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJmaWVsZC5maXJzdFZhbHVlLnZhbHVlIFwiICpuZ0lmPSdmaWVsZC5maXJzdFZhbHVlJyA+e3tmaWVsZC5maXJzdFZhbHVlLnRleHQgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJvcHRpb25bZmllbGQub3B0aW9uVmFsdWVdIFwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQub3B0aW9ucyBcIj5cbiAgICAgICAge3tvcHRpb25bZmllbGQub3B0aW9uVGV4dF19fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uL2Zvcm0tZmllbGQubW9kZWwnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LXN3aXRjaCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgPGxhYmVsIGNsYXNzPVwic3dpdGNoIHN3aXRjaC1pY29uIHN3aXRjaC1waWxsIHN3aXRjaC1wcmltYXJ5LW91dGxpbmUtYWx0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIGNsYXNzPVwic3dpdGNoLWlucHV0XCIgIFsobmdNb2RlbCldPVwicmVxdWVzdFtmaWVsZC5pZF1cIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dpdGNoLWxhYmVsXCIgZGF0YS1vbj1cInllc1wiIGRhdGEtb2ZmPVwibm9cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dpdGNoLWhhbmRsZVwiPjwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cFxuICBASW5wdXQoKSBmaWVsZDogRm9ybUZpZWxkXG4gIEBJbnB1dCgpIHJlcXVlc3Q6IGFueVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3JlYWN0aXZlLWZvcm0vc3dpdGNoL3N3aXRjaC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dy10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgIDx0ZXh0YXJlYSBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIG5hbWU9J3t7ZmllbGQuaWR9fScgY2xhc3M9J2Zvcm0tY29udHJvbCcgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiPjwvdGV4dGFyZWE+XG48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXBcbiAgQElucHV0KCkgZmllbGQ6IEZvcm1GaWVsZFxuICBASW5wdXQoKSByZXF1ZXN0OiBhbnlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE9uSW5pdCwgQ29tcG9uZW50LCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R3LXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbZm9ybUdyb3VwXT0nZ3JvdXAnIHN0eWxlPSdkaXNwbGF5Om5vbmUnPlxuICA8aW5wdXQgdHlwZT0naGlkZGVuJyAgW2Zvcm1Db250cm9sTmFtZV09J2ZpZWxkLmlkJyBbKG5nTW9kZWwpXT1cInRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSdjbGVhcicgPlxuICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cImhvdXJcIiAobmdNb2RlbENoYW5nZSk9J29uQ2hhbmdlKHRydWUpJyBjbGFzcz0nZm9ybS1jb250cm9sIHB1bGwtbGVmdCcgc3R5bGU9J3dpZHRoOjEwMHB4Oyc+XG4gICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwiXCI+PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGggb2YgaG91cnNcIiBbbmdWYWx1ZV09XCJoXCI+e3tofX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ncHVsbC1sZWZ0JyBzdHlsZT0nbWFyZ2luOjVweCc+aGg8L3NwYW4+XG4gICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJtaW51dGVcIiAobmdNb2RlbENoYW5nZSk9J29uQ2hhbmdlKCknICBjbGFzcz0nZm9ybS1jb250cm9sIHB1bGwtbGVmdCcgc3R5bGU9J3dpZHRoOjEwMHB4Oyc+XG4gICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwiXCI+PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG0gb2YgbWludXRlc1wiIFtuZ1ZhbHVlXT1cIm1cIj57e219fTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIDxzcGFuIGNsYXNzPSdwdWxsLWxlZnQnIHN0eWxlPSdtYXJnaW46NXB4Jz5tbTwvc3Bhbj5cbiAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tZGVmYXVsdCBwdWxsLWxlZnQnICAoY2xpY2spPSdjbGVhcigpJz4mdGltZXM7PC9idXR0b24+XG4gIDwvZGl2PlxuICAgIGBcbn0pXG5cbi8vIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4vLyAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT0nZmllbGQuaWQnIG5hbWU9J3t7ZmllbGQuaWR9fScgY2xhc3M9J2Zvcm0tY29udHJvbCcgbmd1aS1kYXRldGltZS1waWNrZXIgZGVmYXVsdC12YWx1ZT0ne3tkZWZhdWx0VmFsdWV9fScgW2Nsb3NlLW9uLXNlbGVjdF09XCJmaWVsZC5tb3JlLmNsb3NlT25TZWxlY3QgfHwgZmFsc2VcIiAgKHZhbHVlQ2hhbmdlZCk9J3ZhbHVlQ2hhbmdlZCgkZXZlbnQpJyAgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiICBbdGltZS1vbmx5XT1cInRydWVcIiBkYXRlLWZvcm1hdD0nSEg6bW0nIHBhcnNlLWZvcm1hdD0nSEg6bW0nICByZWFkb25seS8+XG4vLyAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxuLy8gICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0JyAoY2xpY2spPSdjbGVhcigpJz4mdGltZXM7PC9idXR0b24+XG4vLyAgICAgPC9zcGFuPlxuLy8gPC9kaXY+XG5leHBvcnQgY2xhc3MgVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gPHNtYWxsIGNsYXNzPSd0ZXh0LWRhbmdlcicgKm5nSWY9J2ZpZWxkLmNvbnRyb2wudmFsdWUgJiYgZmllbGQuY29udHJvbC5pbnZhbGlkJz5JbnZhbGlkIEZvcm1hdCA6IFlZWVktTU0tREQgSEg6TU08L3NtYWxsPlxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG5cbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSAnJ1xuXG4gIGhvdXJzOiBzdHJpbmdbXVxuICBtaW51dGVzOiBzdHJpbmdbXVxuXG4gIGhvdXI6IHN0cmluZ1xuICBtaW51dGU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaG91cnMgPSBbXVxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPD0gMjM7IGkrKykge1xuICAgICAgaWYgKGkgPCAxMClcbiAgICAgICAgdGhpcy5ob3Vycy5wdXNoKCcwJyArIGkudG9TdHJpbmcoKSlcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5ob3Vycy5wdXNoKGkudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICB0aGlzLm1pbnV0ZXMgPSBbXVxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPD0gNTk7IGkrKykge1xuICAgICAgaWYgKGkgPCAxMClcbiAgICAgICAgdGhpcy5taW51dGVzLnB1c2goJzAnICsgaS50b1N0cmluZygpKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLm1pbnV0ZXMucHVzaChpLnRvU3RyaW5nKCkpXG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IG1vZGVsKCk6IHN0cmluZyB7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXVxuXG4gIC8vIH1cblxuICAvLyBzZXQgbW9kZWwobTogc3RyaW5nKSB7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5ob3VyKVxuICAvLyB9XG5cbiAgb25DaGFuZ2UoaG91cj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaG91ciAmJiAhdGhpcy5taW51dGUpXG4gICAgICB0aGlzLm1pbnV0ZSA9ICcwMCdcblxuICAgIGlmICh0aGlzLmhvdXIgJiYgdGhpcy5taW51dGUpXG4gICAgICB0aGlzLnJlcXVlc3RbdGhpcy5maWVsZC5pZF0gPSB0aGlzLmhvdXIgKyAnOicgKyB0aGlzLm1pbnV0ZVxuICAgIGVsc2VcbiAgICAgIHRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXSA9IG51bGxcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXModmFsdWU6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBsZXQgbmV3Vjogc3RyaW5nID0gdmFsdWVbJ3JlcXVlc3QnXS5jdXJyZW50VmFsdWVbdGhpcy5maWVsZC5pZF1cbiAgICBpZiAobmV3Vikge1xuICAgICAgbGV0IHNwbGl0OiBzdHJpbmdbXSA9IG5ld1Yuc3BsaXQoJzonKVxuICAgICAgdGhpcy5ob3VyID0gc3BsaXRbMF0gPyBzcGxpdFswXSA6ICcnXG4gICAgICB0aGlzLm1pbnV0ZSA9IHNwbGl0WzFdID8gc3BsaXRbMV0gOiAnJ1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICBpZiAodGhpcy5maWVsZC5tb3JlKSB7XG4gICAgICBpZiAodGhpcy5maWVsZC5tb3JlLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMuZmllbGQubW9yZS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgLy8gICBjYXNlICdzdGFydE9mRGF5JzpcbiAgICAgICAgLy8gICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gJzAwOjAwJ1xuICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgLy8gICBjYXNlICdlbmRPZkRheSc6XG4gICAgICAgIC8vICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9ICcyMzo1OSdcbiAgICAgICAgLy8gICAgIGJyZWFrXG4gICAgICAgIC8vICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5maWVsZC5tb3JlLmRlZmF1bHRWYWx1ZVxuICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpZWxkLm1vcmUgPSB7fVxuICAgIH1cbiAgICAvLyB0aGlzLmZpZWxkLmFkZFZhbGlkYXRvcihWYWxpZGF0b3JzLnBhdHRlcm4oL14oMDB8MFswLTldfDFbMC05XXwyWzAtM10pOigwWzAtOV18WzAtNV1bMC05XSkoOihbMC05XXxbMC01XVswLTldKSk/JC8pKVxuXG4gIH1cblxuXG5cbiAgLy8gdmFsdWVDaGFuZ2VkKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgLy8gICAvLyBjb25zb2xlLmxvZygndGltZSBjaGFuZ2VkJylcbiAgLy8gICBpZiAoZGF0ZSlcbiAgLy8gICAgIHRoaXMucmVxdWVzdFt0aGlzLmZpZWxkLmlkXSA9IGRhdGUudG9TdHJpbmcoKVxuICAvLyB9XG5cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXIgPSAnJ1xuICAgIHRoaXMubWludXRlID0gJydcbiAgICB0aGlzLnJlcXVlc3RbdGhpcy5maWVsZC5pZF0gPSBudWxsXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3JlYWN0aXZlLWZvcm0vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJ25nMi1kcm9wZG93bi10cmVldmlldyc7XG4vLyBpbXBvcnQgeyBUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQgfSBmcm9tICduZzItZHJvcGRvd24tdHJlZXZpZXcvc3JjL3RyZWV2aWV3LWl0ZW0tdGVtcGxhdGUtY29udGV4dCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHctdHJlZXZpZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ0cmVldmlldy1pdGVtXCI+XG4gICAgPHRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCJcbiAgICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7aXRlbTogaXRlbSwgdG9nZ2xlQ29sbGFwc2VFeHBhbmQ6IHRvZ2dsZUNvbGxhcHNlRXhwYW5kfVwiPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPGRpdiAqbmdJZj1cIiFpdGVtLmNvbGxhcHNlZFwiPlxuICAgICAgICA8dHctdHJlZXZpZXctaXRlbSAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlblwiIFtpdGVtXT1cImNoaWxkXCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlXCI+XG4gICAgICAgIDwvdHctdHJlZXZpZXctaXRlbT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgL2RlZXAvIC5mYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbTtcbiAgICB3aWR0aDogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRyZWV2aWV3LWl0ZW0ge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udHJlZXZpZXctaXRlbSAudHJlZXZpZXctaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4gICAgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUcmVlVmlld0l0ZW1Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgaXRlbTogVHJlZXZpZXdJdGVtO1xuXG4gICAgdG9nZ2xlQ29sbGFwc2VFeHBhbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5pdGVtLmNvbGxhcHNlZDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS90cmVldmlldy1yYWRpby90cmVldmlldy1pdGVtLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICduZzItZHJvcGRvd24tdHJlZXZpZXcnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnbmcyLWRyb3Bkb3duLXRyZWV2aWV3JztcblxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vZm9ybS1maWVsZC5tb2RlbCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0dy10cmVldmlldy1yYWRpbycsXG4gICAgdGVtcGxhdGU6IGBcbjx0ZW1wbGF0ZSAjdHBsIGxldC1pdGVtPVwiaXRlbVwiXG4gICAgbGV0LXRvZ2dsZUNvbGxhcHNlRXhwYW5kPVwidG9nZ2xlQ29sbGFwc2VFeHBhbmRcIlxuICAgIGxldC1vbkNoZWNrZWRDaGFuZ2U9XCJvbkNoZWNrZWRDaGFuZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiIFtmb3JtR3JvdXBdPSdncm91cCc+XG4gICAgICAgIDxpICpuZ0lmPVwiaXRlbS5jaGlsZHJlblwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZUV4cGFuZCgpXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmFcIiBbY2xhc3MuZmEtY2FyZXQtcmlnaHRdPVwiaXRlbS5jb2xsYXBzZWRcIiBbY2xhc3MuZmEtY2FyZXQtZG93bl09XCIhaXRlbS5jb2xsYXBzZWRcIj48L2k+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiIFtmb3JtQ29udHJvbE5hbWVdPSdmaWVsZC5pZCcgIG5hbWU9J3t7ZmllbGQuaWR9fScgW3ZhbHVlXT0naXRlbS52YWx1ZScgLz5cbiAgICAgICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwidHJlZXZpZXctaGVhZGVyXCI+XG4gIFxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidHJlZXZpZXctY29udGFpbmVyXCIgW3N0eWxlLm1heC1oZWlnaHQucHhdPVwic2VsZWN0Q29uZmlnLm1heEhlaWdodFwiID5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIj5cbiAgICAgICAgPHR3LXRyZWV2aWV3LWl0ZW0gW2l0ZW1dPVwiaXRlbVwiIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZSB8fCB0cGxcIiA+XG4gICAgICAgIDwvdHctdHJlZXZpZXctaXRlbT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4ucm93LW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogLjNyZW07XG59XG4ubGFiZWwtaXRlbS1hbGwge1xufVxuLmxhYmVsLWNvbGxhcHNlLWV4cGFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRpdmlkZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnRyZWV2aWV3LWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbn1cbi50cmVldmlldy10ZXh0IHtcbiAgICBwYWRkaW5nOiAuM3JlbSAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVmlld1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXBcbiAgICBASW5wdXQoKSBmaWVsZDogRm9ybUZpZWxkXG4gICAgQElucHV0KCkgcmVxdWVzdDogYW55XG4gICAgYWxsSXRlbTogVHJlZXZpZXdJdGVtO1xuXG4gICAgcHVibGljIHNlbGVjdENvbmZpZzogVHJlZXZpZXdDb25maWcgPSB7XG4gICAgICAgIGlzU2hvd0FsbENoZWNrQm94OiB0cnVlLFxuICAgICAgICBpc1Nob3dGaWx0ZXI6IHRydWUsXG4gICAgICAgIGlzU2hvd0NvbGxhcHNlRXhwYW5kOiB0cnVlLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMFxuICAgIH1cblxuICAgIHRvZ2dsZUNvbGxhcHNlRXhwYW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsbEl0ZW0uY29sbGFwc2VkID0gIXRoaXMuYWxsSXRlbS5jb2xsYXBzZWQ7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLm9wdGlvbnMuaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQub3B0aW9ucy5pdGVtcy5mb3JFYWNoKChpdGVtOiBUcmVldmlld0l0ZW0pID0+IGl0ZW0uc2V0Q29sbGFwc2VkUmVjdXJzaXZlKHRoaXMuYWxsSXRlbS5jb2xsYXBzZWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgdXBkYXRlTW9kZWwodmFsdWVzPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlcylcbiAgICAgICAgICAgIHRoaXMuZmllbGQuc2V0VmFsdWUodmFsdWVzLmpvaW4oJywnKSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5maWVsZC5zZXRWYWx1ZSgnJylcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLm1vcmUgJiYgdGhpcy5maWVsZC5tb3JlLnNlbGVjdENvbmZpZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q29uZmlnID0gdGhpcy5maWVsZC5tb3JlLnNlbGVjdENvbmZpZ1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL3RyZWV2aWV3LXJhZGlvL3RyZWV2aWV3LXJhZGlvLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICduZzItZHJvcGRvd24tdHJlZXZpZXcnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vZm9ybS1maWVsZC5tb2RlbCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHctdHJlZXZpZXctdHh0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbZm9ybUdyb3VwXT0nZ3JvdXAnPlxuICAgPGxlby10cmVldmlldyAqbmdJZj0nZmllbGQudHlwZT09PVwidHJlZXZpZXctdHh0XCInIGlkPVwidHJlZXZpZXdfe3tmaWVsZC5pZH19XCIgW2NvbmZpZ109XCJzZWxlY3RDb25maWdcIiBbaXRlbXNdPVwiZmllbGQub3B0aW9uc1wiIChzZWxlY3RlZENoYW5nZSk9XCJ1cGRhdGVNb2RlbCgkZXZlbnQpXCI+PC9sZW8tdHJlZXZpZXc+XG4gICA8bGVvLWRyb3Bkb3duLXRyZWV2aWV3ICpuZ0lmPSdmaWVsZC50eXBlPT09XCJkcm9wZG93bi10cmVldmlldy10eHRcIicgaWQ9XCJ0cmVldmlld197e2ZpZWxkLmlkfX1cIiBbY29uZmlnXT1cInNlbGVjdENvbmZpZ1wiIFtpdGVtc109XCJmaWVsZC5vcHRpb25zXCIgKHNlbGVjdGVkQ2hhbmdlKT1cInVwZGF0ZU1vZGVsKCRldmVudClcIj48L2xlby1kcm9wZG93bi10cmVldmlldz5cbiAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09J2ZpZWxkLmlkJyBuYW1lPSd7e2ZpZWxkLmlkfX0nIHR5cGU9J2hpZGRlbicgY2xhc3M9J2Zvcm0tY29udHJvbCcgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiLz5cbjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3VHh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG5cbiAgcHVibGljIHNlbGVjdENvbmZpZzogVHJlZXZpZXdDb25maWcgPSB7XG4gICAgaXNTaG93QWxsQ2hlY2tCb3g6IHRydWUsXG4gICAgaXNTaG93RmlsdGVyOiB0cnVlLFxuICAgIGlzU2hvd0NvbGxhcHNlRXhwYW5kOiB0cnVlLFxuICAgIG1heEhlaWdodDogNTAwXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTW9kZWwodmFsdWVzPzogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWVzKVxuICAgICAgdGhpcy5maWVsZC5zZXRWYWx1ZSh2YWx1ZXMuam9pbignLCcpKVxuICAgIGVsc2VcbiAgICAgIHRoaXMuZmllbGQuc2V0VmFsdWUoJycpXG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmllbGQubW9yZSAmJiB0aGlzLmZpZWxkLm1vcmUuc2VsZWN0Q29uZmlnKVxuICAgICAgdGhpcy5zZWxlY3RDb25maWcgPSB0aGlzLmZpZWxkLm1vcmUuc2VsZWN0Q29uZmlnXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9yZWFjdGl2ZS1mb3JtL3RyZWV2aWV3LXR4dC90cmVldmlldy10eHQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmVldmlld0NvbmZpZyB9IGZyb20gJ25nMi1kcm9wZG93bi10cmVldmlldyc7XG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi9mb3JtLWZpZWxkLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dy10cmVldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2Zvcm1Hcm91cF09J2dyb3VwJz5cbiAgIDxsZW8tdHJlZXZpZXcgKm5nSWY9J2ZpZWxkLnR5cGU9PT1cInRyZWV2aWV3XCInIFtjb25maWddPVwic2VsZWN0Q29uZmlnXCIgW2l0ZW1zXT1cImZpZWxkLm9wdGlvbnNcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwidXBkYXRlTW9kZWwoJGV2ZW50KVwiPjwvbGVvLXRyZWV2aWV3PlxuICAgPGxlby1kcm9wZG93bi10cmVldmlldyAqbmdJZj0nZmllbGQudHlwZT09PVwiZHJvcGRvd24tdHJlZXZpZXdcIicgIFtjb25maWddPVwic2VsZWN0Q29uZmlnXCIgW2l0ZW1zXT1cImZpZWxkLm9wdGlvbnNcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwidXBkYXRlTW9kZWwoJGV2ZW50KVwiPjwvbGVvLWRyb3Bkb3duLXRyZWV2aWV3PlxuICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09J2ZpZWxkLmlkJyBuYW1lPSd7e2ZpZWxkLmlkfX0nIHR5cGU9J2hpZGRlbicgY2xhc3M9J2Zvcm0tY29udHJvbCcgWyhuZ01vZGVsKV09XCJyZXF1ZXN0W2ZpZWxkLmlkXVwiLz5cbjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwXG4gIEBJbnB1dCgpIGZpZWxkOiBGb3JtRmllbGRcbiAgQElucHV0KCkgcmVxdWVzdDogYW55XG5cbiAgcHVibGljIHNlbGVjdENvbmZpZzogVHJlZXZpZXdDb25maWcgPSB7XG4gICAgaXNTaG93QWxsQ2hlY2tCb3g6IHRydWUsXG4gICAgaXNTaG93RmlsdGVyOiB0cnVlLFxuICAgIGlzU2hvd0NvbGxhcHNlRXhwYW5kOiB0cnVlLFxuICAgIG1heEhlaWdodDogNTAwXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTW9kZWwodmFsdWVzPzogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWVzKVxuICAgICAgdGhpcy5maWVsZC5zZXRWYWx1ZSh2YWx1ZXMpXG4gICAgZWxzZVxuICAgICAgdGhpcy5maWVsZC5zZXRWYWx1ZShbXSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpZWxkLm1vcmUgJiYgdGhpcy5maWVsZC5tb3JlLnNlbGVjdENvbmZpZylcbiAgICAgIHRoaXMuc2VsZWN0Q29uZmlnID0gdGhpcy5maWVsZC5tb3JlLnNlbGVjdENvbmZpZ1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcmVhY3RpdmUtZm9ybS90cmVldmlldy90cmVldmlldy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIlxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM2X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM4X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80MF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80MV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==