webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _routers = __webpack_require__(4);
	
	var _routers2 = _interopRequireDefault(_routers);
	
	var _App = __webpack_require__(118);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _vueResource = __webpack_require__(135);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default); //转载插件
	_vue2.default.use(_vueResource2.default); //转载插件
	
	_vue2.default.config.silent = false;
	_vue2.default.config.devtools = true;
	
	var route = new _vueRouter2.default({
	    routes: _routers2.default,
	    base: __dirname,
	    mode: 'history'
	});
	
	new _vue2.default({
	    router: route,
	    render: function render(h) {
	        return h(_App2.default);
	    }
	}).$mount('#app');
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhu on 2016/10/20.
	 *
	 */
	var routers = [{
	    path: '/', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(1, function () {
	            resolve(__webpack_require__(5)); //打包切割
	        });
	    }
	}, {
	    path: '/address', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(2, function () {
	            resolve(__webpack_require__(39));
	        });
	    }
	}, {
	    path: '/login', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(3, function () {
	            resolve(__webpack_require__(46));
	        });
	    }
	}, {
	    path: '/register', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(4, function () {
	            resolve(__webpack_require__(52));
	        });
	    }
	}, {
	    path: '/appointment', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(5, function () {
	            resolve(__webpack_require__(61));
	        });
	    }
	}, {
	    path: '/activityRegistration', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(6, function () {
	            resolve(__webpack_require__(64));
	        });
	    }
	}, {
	    path: '/brand', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(7, function () {
	            resolve(__webpack_require__(69));
	        });
	    }
	}, {
	    path: '/activityPage', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(8, function () {
	            resolve(__webpack_require__(78));
	        });
	    }
	}, {
	    path: '/courseIntroduction', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(9, function () {
	            resolve(__webpack_require__(81));
	        });
	    }
	}, {
	    path: '/parentsMBA', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(10, function () {
	            resolve(__webpack_require__(90));
	        });
	    }
	}, {
	    path: '/newsCenter', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(11, function () {
	            resolve(__webpack_require__(101));
	        });
	    }
	}, {
	    path: '/latestActivity', component: function component(resolve) {
	        __webpack_require__.e/* nsure */(12, function () {
	            resolve(__webpack_require__(107));
	        });
	    }
	}];
	exports.default = routers;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 38:
/***/ function(module, exports) {

	var Vue // late bind
	var map = window.__VUE_HOT_MAP__ = Object.create(null)
	var installed = false
	var isBrowserify = false
	var initHookName = 'beforeCreate'
	
	exports.install = function (vue, browserify) {
	  if (installed) return
	  installed = true
	
	  Vue = vue
	  isBrowserify = browserify
	
	  // compat with < 2.0.0-alpha.7
	  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
	    initHookName = 'init'
	  }
	
	  exports.compatible = Number(Vue.version.split('.')[0]) >= 2
	  if (!exports.compatible) {
	    console.warn(
	      '[HMR] You are using a version of vue-hot-reload-api that is ' +
	      'only compatible with Vue.js core ^2.0.0.'
	    )
	    return
	  }
	}
	
	/**
	 * Create a record for a hot module, which keeps track of its constructor
	 * and instances
	 *
	 * @param {String} id
	 * @param {Object} options
	 */
	
	exports.createRecord = function (id, options) {
	  var Ctor = null
	  if (typeof options === 'function') {
	    Ctor = options
	    options = Ctor.options
	  }
	  makeOptionsHot(id, options)
	  map[id] = {
	    Ctor: Vue.extend(options),
	    instances: []
	  }
	}
	
	/**
	 * Make a Component options object hot.
	 *
	 * @param {String} id
	 * @param {Object} options
	 */
	
	function makeOptionsHot (id, options) {
	  injectHook(options, initHookName, function () {
	    map[id].instances.push(this)
	  })
	  injectHook(options, 'beforeDestroy', function () {
	    var instances = map[id].instances
	    instances.splice(instances.indexOf(this), 1)
	  })
	}
	
	/**
	 * Inject a hook to a hot reloadable component so that
	 * we can keep track of it.
	 *
	 * @param {Object} options
	 * @param {String} name
	 * @param {Function} hook
	 */
	
	function injectHook (options, name, hook) {
	  var existing = options[name]
	  options[name] = existing
	    ? Array.isArray(existing)
	      ? existing.concat(hook)
	      : [existing, hook]
	    : [hook]
	}
	
	function tryWrap (fn) {
	  return function (id, arg) {
	    try { fn(id, arg) } catch (e) {
	      console.error(e)
	      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
	    }
	  }
	}
	
	exports.rerender = tryWrap(function (id, fns) {
	  var record = map[id]
	  record.Ctor.options.render = fns.render
	  record.Ctor.options.staticRenderFns = fns.staticRenderFns
	  record.instances.slice().forEach(function (instance) {
	    instance.$options.render = fns.render
	    instance.$options.staticRenderFns = fns.staticRenderFns
	    instance._staticTrees = [] // reset static trees
	    instance.$forceUpdate()
	  })
	})
	
	exports.reload = tryWrap(function (id, options) {
	  makeOptionsHot(id, options)
	  var record = map[id]
	  record.Ctor.extendOptions = options
	  var newCtor = Vue.extend(options)
	  record.Ctor.options = newCtor.options
	  record.Ctor.cid = newCtor.cid
	  if (newCtor.release) {
	    // temporary global mixin strategy used in < 2.0.0-alpha.6
	    newCtor.release()
	  }
	  record.instances.slice().forEach(function (instance) {
	    if (instance.$parent) {
	      instance.$parent.$forceUpdate()
	    } else {
	      console.warn('Root or manually mounted instance modified. Full reload required.')
	    }
	  })
	})


/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NEMzQ0UzQzJFM0YyRTIxMUI5MkNDQTA2OThFQjkwRjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTI3NTQxMDhBRUNGMTFFNjlGMkNCRDY1RkI3QkYxOEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTI3NTQxMDdBRUNGMTFFNjlGMkNCRDY1RkI3QkYxOEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0JBRTQyQzFEMkY5RTIxMTlFNUVERDZDRkY0Mjk1MzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEMzQ0UzQzJFM0YyRTIxMUI5MkNDQTA2OThFQjkwRjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAB4AAIDAREAAhEBAxEB/8QAZgAAAgMBAAAAAAAAAAAAAAAAAAMCBAcIAQEBAQAAAAAAAAAAAAAAAAAABQYQAQABAQkBAAAAAAAAAAAAAAASEQFhAtMUBVWVBxcRAQAABgMAAAAAAAAAAAAAAACxAlKiUwQUBRX/2gAMAwEAAhEDEQA/AOqKgVICZgRMCZAXIEaWgvaS4GTfTfVOHw9VuGYt8LVrulZb1OwwRaSiNSAAAAAB/9k="

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(119)
	
	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/djw/Downloads/前端项目的架构/project/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(38)
	  hotAPI.install(__webpack_require__(1), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4a41a8a2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4a41a8a2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nav = __webpack_require__(120);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _foot = __webpack_require__(127);
	
	var _foot2 = _interopRequireDefault(_foot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  components: {
	    navRR: _nav2.default,
	    footRR: _foot2.default
	  }
	};

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(121)
	
	/* script */
	__vue_exports__ = __webpack_require__(125)
	
	/* template */
	var __vue_template__ = __webpack_require__(126)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/djw/Downloads/前端项目的架构/project/src/components/common/nav.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(38)
	  hotAPI.install(__webpack_require__(1), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-af498b0e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-af498b0e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] nav.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(122, function() {
				var newContent = __webpack_require__(122);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  font-size: '625%';\n}\nbody {\n  max-width: 640px;\n  min-width: 320px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  background: #fff;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #fff;\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:after {\n  content: \".\";\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n.nav {\n  width: 100%;\n  height: 0.84rem;\n  background: url(" + __webpack_require__(123) + ") no-repeat;\n  background-size: 6.4rem 0.84rem ;\n  position: relative;\n  z-index: 99;\n}\n.nav .nav-one {\n  float: left;\n  width: 0.97rem;\n  height: 100%;\n}\n.nav .nav-third {\n  float: right;\n  width: 0.9rem;\n  height: 100%;\n}\n.nav .side-nav {\n  width: 2.84rem;\n  height: 100% ;\n  position: fixed;\n  left: -2.84rem;\n  top: 0;\n  background: #3c3535;\n  transition: left 0.5s;\n  padding-top: 0.84rem;\n  z-index: 3;\n}\n.nav .side-nav span {\n  position: absolute ;\n  left: 0.32rem;\n  top: 0.42rem;\n  font-size: 0.3rem;\n  color: #fff;\n}\n.nav .side-nav span:nth-child(2) {\n  left: 1.6rem;\n}\n.nav .side-nav ul {\n  width: 1.87rem;\n  background: url(" + __webpack_require__(124) + ") no-repeat;\n  background-size: 2.84rem 7rem;\n}\n.nav .side-nav ul li {\n  width: 2.27rem;\n  height: 1rem;\n  font-size: 0.3rem;\n  color: #fff;\n  text-align: right;\n  line-height: 1rem;\n}\n.shadow {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n}\n", "", {"version":3,"sources":["/./src/components/common/nav.vue"],"names":[],"mappings":";AAAA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oCAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,YAAY;CACb;AACD;GAEE,QADS;CACV;AACD;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,oDAAgD;EAChD,iCAAiC;EACjC,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;EACf,aAAa;CACd;AACD;EACE,aAAa;EACb,cAAc;EACd,aAAa;CACd;AACD;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,OAAO;EACP,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;EACf,oDAAkD;EAClD,8BAA8B;CAC/B;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;CACd","file":"nav.vue","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  font-size: '625%';\n}\nbody {\n  max-width: 640px;\n  min-width: 320px;\n  font-family: \"微软雅黑\";\n  background: #fff;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #fff;\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:after {\n  content: \".\";\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n.nav {\n  width: 100%;\n  height: 0.84rem;\n  background: url(../../img/nav_01.jpg) no-repeat;\n  background-size: 6.4rem 0.84rem ;\n  position: relative;\n  z-index: 99;\n}\n.nav .nav-one {\n  float: left;\n  width: 0.97rem;\n  height: 100%;\n}\n.nav .nav-third {\n  float: right;\n  width: 0.9rem;\n  height: 100%;\n}\n.nav .side-nav {\n  width: 2.84rem;\n  height: 100% ;\n  position: fixed;\n  left: -2.84rem;\n  top: 0;\n  background: #3c3535;\n  transition: left 0.5s;\n  padding-top: 0.84rem;\n  z-index: 3;\n}\n.nav .side-nav span {\n  position: absolute ;\n  left: 0.32rem;\n  top: 0.42rem;\n  font-size: 0.3rem;\n  color: #fff;\n}\n.nav .side-nav span:nth-child(2) {\n  left: 1.6rem;\n}\n.nav .side-nav ul {\n  width: 1.87rem;\n  background: url(../../img/side-nav.jpg) no-repeat;\n  background-size: 2.84rem 7rem;\n}\n.nav .side-nav ul li {\n  width: 2.27rem;\n  height: 1rem;\n  font-size: 0.3rem;\n  color: #fff;\n  text-align: right;\n  line-height: 1rem;\n}\n.shadow {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a631420e3873eaaa0daf182b44e26a39.jpg";

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0dea562cafdf3f3b91f48671c6e26b7d.jpg";

/***/ },

/***/ 125:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data: function data() {
	        return {
	            navBool: false,
	            loginUrl: '/login',
	            registerUrl: '/register',
	            items: [{
	                text: '瑞德品牌',
	                url: '/brand'
	            }, {
	                text: '课程介绍',
	                url: '/courseIntroduction'
	            }, {
	                text: '活动资讯',
	                url: '/activityPage'
	            }, {
	                text: '父母MBA',
	                url: '/parentsMBA'
	            }, {
	                text: '新闻中心',
	                url: '/newsCenter'
	            }, {
	                text: '预约试听',
	                url: '/appointment'
	            }]
	        };
	    },
	
	    methods: {
	        sideNav: function sideNav() {
	            var target = event.target;
	            //console.log(target.className)
	            if (!this.navBool) {
	                //显示侧边导航栏
	                document.querySelector('.side-nav').style.left = 0;
	                this.navBool = true;
	            } else {
	                //隐藏侧边导航栏
	                document.querySelector('.side-nav').style.left = '-2.84rem';
	                this.navBool = false;
	            }
	        },
	        shadow: function shadow(event) {
	            var target = event.target;
	            if (target.className == 'shadow') {
	                document.querySelector('.side-nav').style.left = '-2.84rem';
	                this.navBool = false;
	            }
	        }
	    }
	};

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "nav"
	  }, [_h('div', {
	    staticClass: "nav-one",
	    on: {
	      "click": _vm.sideNav
	    }
	  }), " ", _h('router-link', {
	    staticClass: "nav-third",
	    attrs: {
	      "to": "/"
	    }
	  }), " ", _h('div', {
	    staticClass: "side-nav"
	  }, [_h('span', [_h('router-link', {
	    attrs: {
	      "to": _vm.loginUrl
	    }
	  }, ["登录"])]), " ", _h('span', [_h('router-link', {
	    attrs: {
	      "to": _vm.registerUrl
	    }
	  }, ["注册"])]), " ", _h('ul', [_vm._l((_vm.items), function(item) {
	    return _h('li', [_h('router-link', {
	      attrs: {
	        "to": item.url
	      }
	    }, [_vm._s(item.text)])])
	  })])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.navBool),
	      expression: "navBool"
	    }],
	    staticClass: "shadow",
	    on: {
	      "click": function($event) {
	        _vm.shadow($event)
	      }
	    }
	  })])])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(38).rerender("data-v-af498b0e", module.exports)
	  }
	}

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(128)
	
	/* script */
	__vue_exports__ = __webpack_require__(132)
	
	/* template */
	var __vue_template__ = __webpack_require__(133)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/djw/Downloads/前端项目的架构/project/src/components/common/foot.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(38)
	  hotAPI.install(__webpack_require__(1), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0061b788", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0061b788", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] foot.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(129, function() {
				var newContent = __webpack_require__(129);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.footer {\n  width: 100%;\n  height: 1.53rem;\n  padding-top: 0.13rem;\n}\n.footer .footer-top {\n  width: 100%;\n  height: 1.2rem;\n  background: url(" + __webpack_require__(42) + ") repeat-x;\n  text-align: center;\n  background-size: 0.02rem 1.2rem ;\n  line-height: 0;\n}\n.footer .footer-top .tel,\n.footer .footer-top .address {\n  float: left;\n  height: 0.42rem;\n  margin-left: 0.55rem;\n  padding-left: 0.56rem ;\n  background: url(" + __webpack_require__(130) + ") no-repeat;\n  background-size: 0.56rem 0.42rem ;\n  line-height: 0.22rem;\n  text-align: left;\n}\n.footer .footer-top .tel h1,\n.footer .footer-top .address h1 {\n  font-weight: 100;\n  font-size: 0.18rem;\n  color: #3a3a3a;\n}\n.footer .footer-top .tel p,\n.footer .footer-top .address p {\n  font-size: 0.14rem;\n  color: #909090;\n}\n.footer .footer-top .address {\n  float: right;\n  margin-right: 0.45rem;\n  background: url(" + __webpack_require__(131) + ") no-repeat;\n  background-size: 0.56rem 0.42rem;\n}\n.footer .footer-top span {\n  display: inline-block;\n  font-size: 0.18rem;\n  color: #747474;\n  margin-top: 0.5rem;\n}\n.footer .footer-top p {\n  margin-top: 0.05rem;\n}\n.footer-bottom {\n  width: 100%;\n  height: 0.46rem;\n  text-align: center;\n  line-height: 0;\n}\n.footer-bottom span {\n  font-size: 0.18rem;\n  color: #858585;\n}\n", "", {"version":3,"sources":["/./src/components/common/foot.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,mDAAgD;EAChD,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;CAChB;AACD;;EAEE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,uBAAuB;EACvB,oDAAuD;EACvD,kCAAkC;EAClC,qBAAqB;EACrB,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AACD;;EAEE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,oDAAmD;EACnD,iCAAiC;CAClC;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB","file":"foot.vue","sourcesContent":[".footer {\n  width: 100%;\n  height: 1.53rem;\n  padding-top: 0.13rem;\n}\n.footer .footer-top {\n  width: 100%;\n  height: 1.2rem;\n  background: url(../../img/foot-bg.jpg) repeat-x;\n  text-align: center;\n  background-size: 0.02rem 1.2rem ;\n  line-height: 0;\n}\n.footer .footer-top .tel,\n.footer .footer-top .address {\n  float: left;\n  height: 0.42rem;\n  margin-left: 0.55rem;\n  padding-left: 0.56rem ;\n  background: url(../../img/footer-top_75.png) no-repeat;\n  background-size: 0.56rem 0.42rem ;\n  line-height: 0.22rem;\n  text-align: left;\n}\n.footer .footer-top .tel h1,\n.footer .footer-top .address h1 {\n  font-weight: 100;\n  font-size: 0.18rem;\n  color: #3a3a3a;\n}\n.footer .footer-top .tel p,\n.footer .footer-top .address p {\n  font-size: 0.14rem;\n  color: #909090;\n}\n.footer .footer-top .address {\n  float: right;\n  margin-right: 0.45rem;\n  background: url(../../img/foot-top2.png) no-repeat;\n  background-size: 0.56rem 0.42rem;\n}\n.footer .footer-top span {\n  display: inline-block;\n  font-size: 0.18rem;\n  color: #747474;\n  margin-top: 0.5rem;\n}\n.footer .footer-top p {\n  margin-top: 0.05rem;\n}\n.footer-bottom {\n  width: 100%;\n  height: 0.46rem;\n  text-align: center;\n  line-height: 0;\n}\n.footer-bottom span {\n  font-size: 0.18rem;\n  color: #858585;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 130:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqCAIAAABp+g/ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNDRTNDMkUzRjJFMjExQjkyQ0NBMDY5OEVCOTBGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRTY1RkVFNUFFRTgxMUU2OUYyQ0JENjVGQjdCRjE4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRTY1RkVFNEFFRTgxMUU2OUYyQ0JENjVGQjdCRjE4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQkFFNDJDMUQyRjlFMjExOUU1RURENkNGRjQyOTUzNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNDRTNDMkUzRjJFMjExQjkyQ0NBMDY5OEVCOTBGNiIvPiA8L3JkZjpEZXNjcmlwdGlv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"

/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqCAIAAABp+g/ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNDRTNDMkUzRjJFMjExQjkyQ0NBMDY5OEVCOTBGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRTY1RkVFOUFFRTgxMUU2OUYyQ0JENjVGQjdCRjE4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRTY1RkVFOEFFRTgxMUU2OUYyQ0JENjVGQjdCRjE4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQkFFNDJDMUQyRjlFMjExOUU1RURENkNGRjQyOTUzNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNDRTNDMkUzRjJFMjExQjkyQ0NBMDY5OEVCOTBGNiIvPiA8L3JkZjpEZXNjcmlwdGlv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"

/***/ },

/***/ 132:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data: function data() {
	        return {
	            telH1: '免费咨询热线',
	            telP: 'Consultation ',
	            addressH1: '查看瑞德中心的位置',
	            addressP: 'OUR ADDress',
	            bottomSpan: '瑞德启蒙教育© 2013 版权所有',
	            url: '/address'
	        };
	    }
	};

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "footer"
	  }, [_h('div', {
	    staticClass: "footer-top clearfix"
	  }, [_h('div', {
	    staticClass: "tel"
	  }, [_h('h1', [_vm._s(_vm.telH1)]), " ", _h('p', [_vm._s(_vm.telP)])]), " ", _h('div', {
	    staticClass: "address"
	  }, [_h('router-link', {
	    attrs: {
	      "to": _vm.url
	    }
	  }, [_h('h1', [_vm._s(_vm.addressH1)]), " ", _h('p', [_vm._s(_vm.addressP)])])]), " ", _h('span', ["移动版    标准版"])]), " ", _h('div', {
	    staticClass: "footer-bottom"
	  }, [_h('span', [_vm._s(_vm.bottomSpan)])])])])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(38).rerender("data-v-0061b788", module.exports)
	  }
	}

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('navRR'), " ", _h('router-view'), " ", _h('footRR')])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(38).rerender("data-v-4a41a8a2", module.exports)
	  }
	}

/***/ },

/***/ 135:
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;
	
	function Promise$1(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};
	
	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};
	
	var p$1 = Promise$1.prototype;
	
	p$1.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p$1.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p$1.notify = function notify() {
	    var promise = this;
	
	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	/**
	 * Promise adapter.
	 */
	
	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}
	
	function PromiseObj(executor, context) {
	
	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }
	
	    this.context = context;
	}
	
	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};
	
	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};
	
	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};
	
	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};
	
	var p = PromiseObj.prototype;
	
	p.bind = function (context) {
	    this.context = context;
	    return this;
	};
	
	p.then = function (fulfilled, rejected) {
	
	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};
	
	p.catch = function (rejected) {
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};
	
	p.finally = function (callback) {
	
	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return Promise.reject(reason);
	    });
	};
	
	/**
	 * Utility functions.
	 */
	
	var debug = false;var util = {};var slice = [].slice;
	
	
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}
	
	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}
	
	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}
	
	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}
	
	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}
	
	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}
	
	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}
	
	var isArray = Array.isArray;
	
	function isString(val) {
	    return typeof val === 'string';
	}
	
	function isBoolean(val) {
	    return val === true || val === false;
	}
	
	function isFunction(val) {
	    return typeof val === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}
	
	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}
	
	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}
	
	function when(value, fulfilled, rejected) {
	
	    var promise = PromiseObj.resolve(value);
	
	    if (arguments.length < 2) {
	        return promise;
	    }
	
	    return promise.then(fulfilled, rejected);
	}
	
	function options(fn, obj, opts) {
	
	    opts = opts || {};
	
	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }
	
	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }
	
	    return obj;
	}
	
	var assign = Object.assign || _assign;
	
	function merge(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });
	
	    return target;
	}
	
	function defaults(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	
	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });
	
	    return target;
	}
	
	function _assign(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source);
	    });
	
	    return target;
	}
	
	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}
	
	/**
	 * Root Prefix Transform.
	 */
	
	function root (options, next) {
	
	    var url = next(options);
	
	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }
	
	    return url;
	}
	
	/**
	 * Query Parameter Transform.
	 */
	
	function query (options, next) {
	
	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);
	
	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	}
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];
	
	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null,
	                        values = [];
	
	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }
	
	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });
	
	                    if (operator && operator !== '+') {
	
	                        var separator = ',';
	
	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }
	
	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}
	
	function getValues(context, operator, key, modifier) {
	
	    var value = context[key],
	        result = [];
	
	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();
	
	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }
	
	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];
	
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }
	
	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }
	
	    return result;
	}
	
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	
	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}
	
	function encodeValue(operator, value, key) {
	
	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}
	
	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}
	
	/**
	 * URL Template (RFC 6570) Transform.
	 */
	
	function template (options) {
	
	    var variables = [],
	        url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	function Url(url, params) {
	
	    var self = this || {},
	        options = url,
	        transform;
	
	    if (isString(url)) {
	        options = { url: url, params: params };
	    }
	
	    options = merge({}, Url.options, self.$options, options);
	
	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });
	
	    return transform(options);
	}
	
	/**
	 * Url options.
	 */
	
	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};
	
	/**
	 * Url transforms.
	 */
	
	Url.transforms = [template, query, root];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [],
	        escape = encodeURIComponent;
	
	    params.add = function (key, value) {
	
	        if (isFunction(value)) {
	            value = value();
	        }
	
	        if (value === null) {
	            value = '';
	        }
	
	        this.push(escape(key) + '=' + escape(value));
	    };
	
	    serialize(params, obj);
	
	    return params.join('&').replace(/%20/g, '+');
	};
	
	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */
	
	Url.parse = function (url) {
	
	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }
	
	    el.href = url;
	
	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};
	
	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;
	
	    each(obj, function (value, key) {
	
	        hash = isObject(value) || isArray(value);
	
	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }
	
	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}
	
	/**
	 * XDomain client (Internet Explorer).
	 */
	
	function xdrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xdr = new XDomainRequest(),
	            handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };
	
	        request.abort = function () {
	            return xdr.abort();
	        };
	
	        xdr.open(request.method, request.getUrl());
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}
	
	/**
	 * CORS Interceptor.
	 */
	
	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();
	
	function cors (request, next) {
	
	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }
	
	    if (request.crossOrigin) {
	
	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }
	
	        delete request.emulateHTTP;
	    }
	
	    next();
	}
	
	function crossOrigin(request) {
	
	    var requestUrl = Url.parse(Url(request));
	
	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}
	
	/**
	 * Body Interceptor.
	 */
	
	function body (request, next) {
	
	    if (isFormData(request.body)) {
	
	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {
	
	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }
	
	    next(function (response) {
	
	        Object.defineProperty(response, 'data', {
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });
	
	        return response.bodyText ? when(response.text(), function (text) {
	
	            var type = response.headers.get('Content-Type');
	
	            if (isString(type) && type.indexOf('application/json') === 0) {
	
	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }
	
	            return response;
	        }) : response;
	    });
	}
	
	/**
	 * JSONP client.
	 */
	
	function jsonpClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;
	
	        handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(body, { status: status }));
	
	            delete window[callback];
	            document.body.removeChild(script);
	        };
	
	        request.params[name] = callback;
	
	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };
	
	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	}
	
	/**
	 * JSONP Interceptor.
	 */
	
	function jsonp (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next(function (response) {
	
	        if (request.method == 'JSONP') {
	
	            return when(response.json(), function (json) {
	
	                response.body = json;
	
	                return response;
	            });
	        }
	    });
	}
	
	/**
	 * Before Interceptor.
	 */
	
	function before (request, next) {
	
	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }
	
	    next();
	}
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	function method (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }
	
	    next();
	}
	
	/**
	 * Header Interceptor.
	 */
	
	function header (request, next) {
	
	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);
	
	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });
	
	    next();
	}
	
	/**
	 * Timeout Interceptor.
	 */
	
	function timeout (request, next) {
	
	    var timeout;
	
	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }
	
	    next(function (response) {
	
	        clearTimeout(timeout);
	    });
	}
	
	/**
	 * XMLHttp client.
	 */
	
	function xhrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {
	
	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });
	
	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });
	
	            resolve(response);
	        };
	
	        request.abort = function () {
	            return xhr.abort();
	        };
	
	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }
	
	        xhr.open(request.method, request.getUrl(), true);
	
	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }
	
	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }
	
	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });
	
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}
	
	/**
	 * Base client.
	 */
	
	function Client (context) {
	
	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;
	
	    if (!isObject(context)) {
	        context = null;
	    }
	
	    function Client(request) {
	        return new PromiseObj(function (resolve) {
	
	            function exec() {
	
	                handler = reqHandlers.pop();
	
	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }
	
	            function next(response) {
	
	                if (isFunction(response)) {
	
	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {
	
	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });
	
	                    when(response, resolve);
	
	                    return;
	                }
	
	                exec();
	            }
	
	            exec();
	        }, context);
	    }
	
	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };
	
	    return Client;
	}
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || xhrClient;
	
	    resolve(client(request));
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	/**
	 * HTTP Headers.
	 */
	
	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;
	
	        classCallCheck(this, Headers);
	
	
	        this.map = {};
	
	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }
	
	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };
	
	    Headers.prototype.get = function get(name) {
	
	        var list = this.map[getName(this.map, name)];
	
	        return list ? list[0] : null;
	    };
	
	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };
	
	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };
	
	    Headers.prototype.append = function append(name, value) {
	
	        var list = this.getAll(name);
	
	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };
	
	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(this.map, name)];
	    };
	
	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;
	
	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };
	
	    return Headers;
	}();
	
	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}
	
	function normalizeName(name) {
	
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }
	
	    return trim(name);
	}
	
	/**
	 * HTTP Response.
	 */
	
	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);
	
	
	        this.url = url;
	        this.ok = status >= 200 && status < 300;
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.headers = new Headers(headers);
	        this.body = body;
	
	        if (isString(body)) {
	
	            this.bodyText = body;
	        } else if (isBlob(body)) {
	
	            this.bodyBlob = body;
	
	            if (isBlobText(body)) {
	                this.bodyText = blobText(body);
	            }
	        }
	    }
	
	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };
	
	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };
	
	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };
	
	    return Response;
	}();
	
	function blobText(body) {
	    return new PromiseObj(function (resolve) {
	
	        var reader = new FileReader();
	
	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}
	
	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}
	
	/**
	 * HTTP Request.
	 */
	
	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);
	
	
	        this.body = null;
	        this.params = {};
	
	        assign(this, options, {
	            method: toUpper(options.method || 'GET')
	        });
	
	        if (!(this.headers instanceof Headers)) {
	            this.headers = new Headers(this.headers);
	        }
	    }
	
	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };
	
	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };
	
	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };
	
	    return Request;
	}();
	
	/**
	 * Service for sending network requests.
	 */
	
	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };
	
	function Http(options) {
	
	    var self = this || {},
	        client = Client(self.$vm);
	
	    defaults(options || {}, self.$options, Http.options);
	
	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });
	
	    return client(new Request(options)).then(function (response) {
	
	        return response.ok ? response : PromiseObj.reject(response);
	    }, function (response) {
	
	        if (response instanceof Error) {
	            error(response);
	        }
	
	        return PromiseObj.reject(response);
	    });
	}
	
	Http.options = {};
	
	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};
	
	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];
	
	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {
	
	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});
	
	['post', 'put', 'patch'].forEach(function (method) {
	
	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});
	
	/**
	 * Service for interacting with RESTful services.
	 */
	
	function Resource(url, params, actions, options) {
	
	    var self = this || {},
	        resource = {};
	
	    actions = assign({}, Resource.actions, actions);
	
	    each(actions, function (action, name) {
	
	        action = merge({ url: url, params: assign({}, params) }, options, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options = assign({}, action),
	        params = {},
	        body;
	
	    switch (args.length) {
	
	        case 2:
	
	            params = args[0];
	            body = args[1];
	
	            break;
	
	        case 1:
	
	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }
	
	    options.body = body;
	    options.params = assign({}, options.params, params);
	
	    return options;
	}
	
	Resource.actions = {
	
	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }
	
	};
	
	/**
	 * Install plugin.
	 */
	
	function plugin(Vue) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    Util(Vue);
	
	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function () {
	                var _this = this;
	
	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;

/***/ }

});
//# sourceMappingURL=main.js.map