// ==UserScript==
// @name               Exhentai Enhancer
// @name:en            Exhentai Enhancer
// @name:zh-TW         Exhentai Enhancer
// @name:zh-CN         Exhentai Enhancer
// @namespace          https://github.com/sk2589822/Exhentai-Enhancer
// @version            1.20.1
// @author             sk2589822
// @description        improve UX of Gallery Page, Multi-Page Viewer and Front Page
// @description:en     improve UX of Gallery Page, Multi-Page Viewer and Front Page
// @description:zh-TW  改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗
// @description:zh-CN  改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗
// @license            MIT
// @icon               https://vitejs.dev/logo.svg
// @supportURL         https://github.com/sk2589822/Exhentai-Enhancer/issues
// @match              https://exhentai.org/*
// @match              https://e-hentai.org/*
// @require            https://cdn.jsdelivr.net/npm/vue@3.5.34/dist/vue.global.prod.js
// @grant              GM.getValue
// @grant              GM.registerMenuCommand
// @grant              GM.setValue
// @grant              GM_addStyle
// @grant              GM_addValueChangeListener
// @grant              GM_getValue
// @grant              GM_setClipboard
// @grant              GM_setValue
// @grant              GM_xmlhttpRequest
// @grant              unsafeWindow
// ==/UserScript==

(function(vue) {
  'use strict';
	var __create = Object.create;
	var __defProp$2 = Object.defineProperty;
	var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames$1 = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
	var __copyProps$1 = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$2.call(to, key) && key !== except) __defProp$2(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule ? __defProp$2(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	vue = __toESM(vue);
	var s = new Set();
	var _css = async (t) => {
		if (s.has(t)) return;
		s.add(t);
		((c) => {
			if (typeof GM_addStyle === "function") GM_addStyle(c);
			else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
		})(t);
	};
	_css(" @keyframes spin{0%{rotate:0}to{rotate:360deg}}.searchnav{overflow-anchor:none}.itg.gld.is-fetching:after{content:\"⌛\";grid-column:1/-1;justify-content:center;align-items:center;width:30px;height:30px;margin:auto;line-height:30px;animation:1s ease-in-out infinite spin;display:flex}.gldown{display:flex}.archive-button{cursor:pointer;background-color:#5fa9cf;border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;width:14px;height:14px;display:flex;position:relative;box-shadow:0 3px 5px #0000003d}.hide-button{cursor:pointer;opacity:.25;-webkit-user-select:none;user-select:none;flex-shrink:0;justify-content:center;align-items:center;height:12px;font-size:14px;transition:opacity .15s ease-in-out;display:flex;position:relative}.hide-button:hover{opacity:.6}.hide-button.is-hidden{opacity:1}.popup{text-align:center;background-color:var(--bg-color);z-index:100;border:3px solid #fff;border-radius:20px;padding:20px;transition:opacity .3s;position:absolute!important}.popup a{text-decoration:underline}div#gd5{float:unset;width:auto}#gd5 .is-ready:after{content:\" ✔️\"}.enhancer-container .is-fetching{pointer-events:none;font-size:0;text-decoration:none}.enhancer-container .is-fetching:after{content:\"⌛\";font-size:8px;line-height:8px;animation:1s ease-in-out infinite spin;display:inline-block}.enhancer-container input[name=dltype]+.is-fetching{position:relative}.enhancer-container input[name=dltype]+.is-fetching:after{font-size:12px;line-height:27px;position:absolute;top:0;left:50%}.enhancer-container input[name=dltype]+.is-fetching input{color:#0000}.enhancer-container .is-finished{pointer-events:none;font-size:0;text-decoration:none}.enhancer-container .is-finished:after{content:\"✔️\";font-size:8px;line-height:8px;display:inline-block}.page-elevator[data-v-b87e2f8f]{opacity:1;flex-direction:column;gap:10px;width:40px;display:flex}.page-elevator__input[data-v-b87e2f8f]{text-align:center;box-sizing:border-box;border:1px solid #777;width:100%;height:30px;margin:0;padding:0;display:flex}.page-elevator__slash[data-v-b87e2f8f]{line-height:100%}:fullscreen .page-elevator[data-v-b87e2f8f]{opacity:0}:fullscreen .page-elevator[data-v-b87e2f8f]:hover{opacity:1}#pane_images .mimg{min-width:unset;width:min-content!important;max-height:calc(var(--image-size) + 24px)!important}#pane_images .mimg>a{-webkit-user-select:none;user-select:none}#pane_images .mimg>a>img{max-height:var(--image-size);pointer-events:none;width:auto!important}.image-resizer[data-v-fb83c8f5]{flex-direction:column;gap:16px;width:40px;display:flex}.image-resizer__button[data-v-fb83c8f5]{text-align:center;box-sizing:border-box;cursor:pointer;background-color:#0000;border:1px solid #777;border-radius:5px;width:100%;height:30px;padding:0}.image-resizer__button[data-v-fb83c8f5]:hover{background-color:#ffa50033}.image-resizer__button--active[data-v-fb83c8f5],.image-resizer__button--active[data-v-fb83c8f5]:hover{background-color:orange}.magnifier-overlay[data-v-ba829bde]{z-index:999;cursor:none;background:0 0;position:fixed;inset:0}.magnifier[data-v-ba829bde]{z-index:1000}.magnifier-background[data-v-ba829bde]{background-color:#00000080;position:absolute;inset:0}.magnifier-image[data-v-ba829bde]{cursor:none;position:absolute}.enhancer-features{z-index:100;box-sizing:border-box;flex-direction:row-reverse;align-items:center;gap:16px;padding-right:5px;display:flex;position:absolute;top:0;bottom:0;right:0}.enhancer-features__feature{opacity:0;box-sizing:border-box;background:#7777;border-radius:10px;padding:10px 5px;transition:opacity .3s}.enhancer-features__feature:hover{opacity:1}.switch[data-v-7bec1a82]{width:50px;height:24px;display:inline-block;position:relative}.switch__input[data-v-7bec1a82]{opacity:0;width:0;height:0}.switch__slider[data-v-7bec1a82]{cursor:pointer;background-color:#ccc;border-radius:9999px;transition:all .4s;position:absolute;inset:0}.switch__slider[data-v-7bec1a82]:before{aspect-ratio:1;content:\"\";background-color:#fff;border-radius:50%;height:calc(100% - 4px);transition:all .4s;position:absolute;top:2px;left:2px}.switch__input:checked+.switch__slider[data-v-7bec1a82]{background-color:#34353b}.switch__input:checked+.switch__slider[data-v-7bec1a82]:before{transform:translate(26px)}.settings-panel-wrap{justify-content:center;align-items:center;display:flex}.settings-panel{box-sizing:border-box;color:#f1f1f1;background-color:#34353b;border-radius:4px;flex-direction:column;row-gap:16px;max-width:1000px;max-height:calc(100vh - 64px);margin:32px;padding:32px;display:flex;position:relative}.settings-panel__inner{height:100%;padding-right:16px;overflow-y:auto}.settings-panel__section{background-color:#4f535b;border-radius:4px}.settings-panel__section-name{text-align:left;margin:16px 32px;padding-top:16px;font-size:20px;line-height:100%}.settings-panel__close-button{cursor:pointer;padding:8px;position:absolute;top:4px;right:4px}.settings-panel__close-button svg{width:16px;height:16px}.settings-panel__separator{background:#f1f1f1}.settings{flex-wrap:wrap;justify-content:start;align-items:center;column-gap:8px;padding:8px 16px;display:flex}.settings__name{font-size:16px}.settings__notice{font-size:12px}.settings__intro{text-align:left;width:100%;margin-left:60px;font-size:14px}.settings__magnifier-config{flex-direction:column;gap:.75rem;margin-top:.5rem;display:flex}.settings__label{flex-direction:row;align-items:center;gap:.25rem;font-size:.9rem;display:flex}.settings__input{color:#f1f1f1;background-color:#34353b;border:1px solid #ccc;border-radius:4px;outline:none;width:120px;padding:.25rem}.settings__link{color:#ddd}.settings__select{color:#f1f1f1;background-color:#34353b;border:#8d8d8d;outline:none}.settings__select:enabled:hover,.settings__select:enabled:focus{background-color:#43464e!important;border-color:#aeaeae!important}.settings__option{color:#f1f1f1;background-color:#34353b;outline:none}.actions{justify-content:flex-end;align-items:center;display:flex}.actions__button{color:#fff;cursor:pointer;background-color:#4f535b;border:none;border-radius:4px;padding:8px 16px}\n/*$vite$:1*/ ");
	var __defProp$1 = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$1(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
	function tryOnScopeDispose$1(fn, failSilently) {
		if ((0, vue.getCurrentScope)()) {
			(0, vue.onScopeDispose)(fn, failSilently);
			return true;
		}
		return false;
	}
	var isClient$1 = typeof window !== "undefined" && typeof document !== "undefined";
	typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
	var notNullish = (val) => val != null;
	var toString = Object.prototype.toString;
	var isObject$1 = (val) => toString.call(val) === "[object Object]";
	var noop = () => {};
	function toRef$2(...args) {
		if (args.length !== 1) return (0, vue.toRef)(...args);
		const r = args[0];
		return typeof r === "function" ? (0, vue.readonly)((0, vue.customRef)(() => ({
			get: r,
			set: noop
		}))) : (0, vue.ref)(r);
	}
	function createFilterWrapper(filter, fn) {
		function wrapper(...args) {
			return new Promise((resolve, reject) => {
				Promise.resolve(filter(() => fn.apply(this, args), {
					fn,
					thisArg: this,
					args
				})).then(resolve).catch(reject);
			});
		}
		return wrapper;
	}
	var bypassFilter = (invoke) => {
		return invoke();
	};
	function pausableFilter(extendFilter = bypassFilter, options = {}) {
		const { initialState = "active" } = options;
		const isActive = toRef$2(initialState === "active");
		function pause() {
			isActive.value = false;
		}
		function resume() {
			isActive.value = true;
		}
		const eventFilter = (...args) => {
			if (isActive.value) extendFilter(...args);
		};
		return {
			isActive: (0, vue.shallowReadonly)(isActive),
			pause,
			resume,
			eventFilter
		};
	}
	function objectEntries(obj) {
		return Object.entries(obj);
	}
	function toArray(value) {
		return Array.isArray(value) ? value : [value];
	}
	function getLifeCycleTarget(target) {
		return target || (0, vue.getCurrentInstance)();
	}
	function createSharedComposable(composable) {
		if (!isClient$1) return composable;
		let subscribers = 0;
		let state;
		let scope;
		const dispose = () => {
			subscribers -= 1;
			if (scope && subscribers <= 0) {
				scope.stop();
				state = void 0;
				scope = void 0;
			}
		};
		return ((...args) => {
			subscribers += 1;
			if (!scope) {
				scope = (0, vue.effectScope)(true);
				state = scope.run(() => composable(...args));
			}
			tryOnScopeDispose$1(dispose);
			return state;
		});
	}
	function watchWithFilter(source, cb, options = {}) {
		const { eventFilter = bypassFilter, ...watchOptions } = options;
		return (0, vue.watch)(source, createFilterWrapper(eventFilter, cb), watchOptions);
	}
	function watchPausable(source, cb, options = {}) {
		const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
		const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
		return {
			stop: watchWithFilter(source, cb, {
				...watchOptions,
				eventFilter
			}),
			pause,
			resume,
			isActive
		};
	}
	function tryOnMounted(fn, sync = true, target) {
		if (getLifeCycleTarget(target)) (0, vue.onMounted)(fn, target);
		else if (sync) fn();
		else (0, vue.nextTick)(fn);
	}
	function watchImmediate(source, cb, options) {
		return (0, vue.watch)(source, cb, {
			...options,
			immediate: true
		});
	}
	var defaultWindow = isClient$1 ? window : void 0;
	var defaultDocument$1 = isClient$1 ? window.document : void 0;
	isClient$1 && window.navigator;
	isClient$1 && window.location;
	function unrefElement$1(elRef) {
		var _$el;
		const plain = (0, vue.toValue)(elRef);
		return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
	}
	function useEventListener(...args) {
		const register = (el, event, listener, options) => {
			el.addEventListener(event, listener, options);
			return () => el.removeEventListener(event, listener, options);
		};
		const firstParamTargets = (0, vue.computed)(() => {
			const test = toArray((0, vue.toValue)(args[0])).filter((e) => e != null);
			return test.every((e) => typeof e !== "string") ? test : void 0;
		});
		return watchImmediate(() => {
			var _firstParamTargets$va, _firstParamTargets$va2;
			return [
				(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement$1(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
				toArray((0, vue.toValue)(firstParamTargets.value ? args[1] : args[0])),
				toArray((0, vue.unref)(firstParamTargets.value ? args[2] : args[1])),
				(0, vue.toValue)(firstParamTargets.value ? args[3] : args[2])
			];
		}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
			if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
			const optionsClone = isObject$1(raw_options) ? { ...raw_options } : raw_options;
			const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
			onCleanup(() => {
				cleanups.forEach((fn) => fn());
			});
		}, { flush: "post" });
	}
	function useMounted() {
		const isMounted = (0, vue.shallowRef)(false);
		const instance = (0, vue.getCurrentInstance)();
		if (instance) (0, vue.onMounted)(() => {
			isMounted.value = true;
		}, instance);
		return isMounted;
	}
	function useSupported(callback) {
		const isMounted = useMounted();
		return (0, vue.computed)(() => {
			isMounted.value;
			return Boolean(callback());
		});
	}
	function useMutationObserver(target, callback, options = {}) {
		const { window = defaultWindow, ...mutationOptions } = options;
		let observer;
		const isSupported = useSupported(() => window && "MutationObserver" in window);
		const cleanup = () => {
			if (observer) {
				observer.disconnect();
				observer = void 0;
			}
		};
		const stopWatch = (0, vue.watch)((0, vue.computed)(() => {
			const items = toArray((0, vue.toValue)(target)).map(unrefElement$1).filter(notNullish);
			return new Set(items);
		}), (newTargets) => {
			cleanup();
			if (isSupported.value && newTargets.size) {
				observer = new MutationObserver(callback);
				newTargets.forEach((el) => observer.observe(el, mutationOptions));
			}
		}, {
			immediate: true,
			flush: "post"
		});
		const takeRecords = () => {
			return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
		};
		const stop = () => {
			stopWatch();
			cleanup();
		};
		tryOnScopeDispose$1(stop);
		return {
			isSupported,
			stop,
			takeRecords
		};
	}
	var WRITABLE_PROPERTIES = [
		"hash",
		"host",
		"hostname",
		"href",
		"pathname",
		"port",
		"protocol",
		"search"
	];
	function useBrowserLocation(options = {}) {
		const { window = defaultWindow } = options;
		const refs = Object.fromEntries(WRITABLE_PROPERTIES.map((key) => [key, (0, vue.ref)()]));
		for (const [key, ref] of objectEntries(refs)) (0, vue.watch)(ref, (value) => {
			if (!(window === null || window === void 0 ? void 0 : window.location) || window.location[key] === value) return;
			window.location[key] = value;
		});
		const buildState = (trigger) => {
			var _window$location;
			const { state, length } = (window === null || window === void 0 ? void 0 : window.history) || {};
			const { origin } = (window === null || window === void 0 ? void 0 : window.location) || {};
			for (const key of WRITABLE_PROPERTIES) refs[key].value = window === null || window === void 0 || (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location[key];
			return (0, vue.reactive)({
				trigger,
				state,
				length,
				origin,
				...refs
			});
		};
		const state = (0, vue.ref)(buildState("load"));
		if (window) {
			const listenerOptions = { passive: true };
			useEventListener(window, "popstate", () => state.value = buildState("popstate"), listenerOptions);
			useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), listenerOptions);
		}
		return state;
	}
	var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
	var globalKey = "__vueuse_ssr_handlers__";
	var handlers = getHandlers();
	function getHandlers() {
		if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
		return _global[globalKey];
	}
	function getSSRHandler(key, fallback) {
		return handlers[key] || fallback;
	}
	function guessSerializerType(rawInit) {
		return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
	}
	var StorageSerializers = {
		boolean: {
			read: (v) => v === "true",
			write: (v) => String(v)
		},
		object: {
			read: (v) => JSON.parse(v),
			write: (v) => JSON.stringify(v)
		},
		number: {
			read: (v) => Number.parseFloat(v),
			write: (v) => String(v)
		},
		any: {
			read: (v) => v,
			write: (v) => String(v)
		},
		string: {
			read: (v) => v,
			write: (v) => String(v)
		},
		map: {
			read: (v) => new Map(JSON.parse(v)),
			write: (v) => JSON.stringify(Array.from(v.entries()))
		},
		set: {
			read: (v) => new Set(JSON.parse(v)),
			write: (v) => JSON.stringify(Array.from(v))
		},
		date: {
			read: (v) => new Date(v),
			write: (v) => v.toISOString()
		}
	};
	var customStorageEventName = "vueuse-storage";
	function useStorage(key, defaults, storage, options = {}) {
		var _options$serializer;
		const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window = defaultWindow, eventFilter, onError = (e) => {
			console.error(e);
		}, initOnMounted } = options;
		const data = (shallow ? vue.shallowRef : vue.ref)(typeof defaults === "function" ? defaults() : defaults);
		const keyComputed = (0, vue.computed)(() => (0, vue.toValue)(key));
		if (!storage) try {
			storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
		} catch (e) {
			onError(e);
		}
		if (!storage) return data;
		const rawInit = (0, vue.toValue)(defaults);
		const type = guessSerializerType(rawInit);
		const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
		const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
			flush,
			deep,
			eventFilter
		});
		(0, vue.watch)(keyComputed, () => update(), { flush });
		let firstMounted = false;
		const onStorageEvent = (ev) => {
			if (initOnMounted && !firstMounted) return;
			update(ev);
		};
		const onStorageCustomEvent = (ev) => {
			if (initOnMounted && !firstMounted) return;
			updateFromCustomEvent(ev);
		};
		if (window && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window, "storage", onStorageEvent, { passive: true });
		else useEventListener(window, customStorageEventName, onStorageCustomEvent);
		if (initOnMounted) tryOnMounted(() => {
			firstMounted = true;
			update();
		});
		else update();
		function dispatchWriteEvent(oldValue, newValue) {
			if (window) {
				const payload = {
					key: keyComputed.value,
					oldValue,
					newValue,
					storageArea: storage
				};
				window.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
			}
		}
		function write(v) {
			try {
				const oldValue = storage.getItem(keyComputed.value);
				if (v == null) {
					dispatchWriteEvent(oldValue, null);
					storage.removeItem(keyComputed.value);
				} else {
					const serialized = serializer.write(v);
					if (oldValue !== serialized) {
						storage.setItem(keyComputed.value, serialized);
						dispatchWriteEvent(oldValue, serialized);
					}
				}
			} catch (e) {
				onError(e);
			}
		}
		function read(event) {
			const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
			if (rawValue == null) {
				if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
				return rawInit;
			} else if (!event && mergeDefaults) {
				const value = serializer.read(rawValue);
				if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
				else if (type === "object" && !Array.isArray(value)) return {
					...rawInit,
					...value
				};
				return value;
			} else if (typeof rawValue !== "string") return rawValue;
			else return serializer.read(rawValue);
		}
		function update(event) {
			if (event && event.storageArea !== storage) return;
			if (event && event.key == null) {
				data.value = rawInit;
				return;
			}
			if (event && event.key !== keyComputed.value) return;
			pauseWatch();
			try {
				const serializedData = serializer.write(data.value);
				if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
			} catch (e) {
				onError(e);
			} finally {
				if (event) (0, vue.nextTick)(resumeWatch);
				else resumeWatch();
			}
		}
		function updateFromCustomEvent(event) {
			update(event.detail);
		}
		return data;
	}
	function useResizeObserver(target, callback, options = {}) {
		const { window = defaultWindow, ...observerOptions } = options;
		let observer;
		const isSupported = useSupported(() => window && "ResizeObserver" in window);
		const cleanup = () => {
			if (observer) {
				observer.disconnect();
				observer = void 0;
			}
		};
		const stopWatch = (0, vue.watch)((0, vue.computed)(() => {
			const _targets = (0, vue.toValue)(target);
			return Array.isArray(_targets) ? _targets.map((el) => unrefElement$1(el)) : [unrefElement$1(_targets)];
		}), (els) => {
			cleanup();
			if (isSupported.value && window) {
				observer = new ResizeObserver(callback);
				for (const _el of els) if (_el) observer.observe(_el, observerOptions);
			}
		}, {
			immediate: true,
			flush: "post"
		});
		const stop = () => {
			cleanup();
			stopWatch();
		};
		tryOnScopeDispose$1(stop);
		return {
			isSupported,
			stop
		};
	}
	function useElementBounding(target, options = {}) {
		const { reset = true, windowResize = true, windowScroll = true, immediate = true, updateTiming = "sync" } = options;
		const height = (0, vue.shallowRef)(0);
		const bottom = (0, vue.shallowRef)(0);
		const left = (0, vue.shallowRef)(0);
		const right = (0, vue.shallowRef)(0);
		const top = (0, vue.shallowRef)(0);
		const width = (0, vue.shallowRef)(0);
		const x = (0, vue.shallowRef)(0);
		const y = (0, vue.shallowRef)(0);
		function recalculate() {
			const el = unrefElement$1(target);
			if (!el) {
				if (reset) {
					height.value = 0;
					bottom.value = 0;
					left.value = 0;
					right.value = 0;
					top.value = 0;
					width.value = 0;
					x.value = 0;
					y.value = 0;
				}
				return;
			}
			const rect = el.getBoundingClientRect();
			height.value = rect.height;
			bottom.value = rect.bottom;
			left.value = rect.left;
			right.value = rect.right;
			top.value = rect.top;
			width.value = rect.width;
			x.value = rect.x;
			y.value = rect.y;
		}
		function update() {
			if (updateTiming === "sync") recalculate();
			else if (updateTiming === "next-frame") requestAnimationFrame(() => recalculate());
		}
		useResizeObserver(target, update);
		(0, vue.watch)(() => unrefElement$1(target), (ele) => !ele && update());
		useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
		if (windowScroll) useEventListener("scroll", update, {
			capture: true,
			passive: true
		});
		if (windowResize) useEventListener("resize", update, { passive: true });
		tryOnMounted(() => {
			if (immediate) update();
		});
		return {
			height,
			bottom,
			left,
			right,
			top,
			width,
			x,
			y,
			update
		};
	}
	var eventHandlers = [
		"fullscreenchange",
		"webkitfullscreenchange",
		"webkitendfullscreen",
		"mozfullscreenchange",
		"MSFullscreenChange"
	];
	function useFullscreen(target, options = {}) {
		const { document = defaultDocument$1, autoExit = false } = options;
		const targetRef = (0, vue.computed)(() => {
			var _unrefElement;
			return (_unrefElement = unrefElement$1(target)) !== null && _unrefElement !== void 0 ? _unrefElement : document === null || document === void 0 ? void 0 : document.documentElement;
		});
		const isFullscreen = (0, vue.shallowRef)(false);
		const requestMethod = (0, vue.computed)(() => {
			return [
				"requestFullscreen",
				"webkitRequestFullscreen",
				"webkitEnterFullscreen",
				"webkitEnterFullScreen",
				"webkitRequestFullScreen",
				"mozRequestFullScreen",
				"msRequestFullscreen"
			].find((m) => document && m in document || targetRef.value && m in targetRef.value);
		});
		const exitMethod = (0, vue.computed)(() => {
			return [
				"exitFullscreen",
				"webkitExitFullscreen",
				"webkitExitFullScreen",
				"webkitCancelFullScreen",
				"mozCancelFullScreen",
				"msExitFullscreen"
			].find((m) => document && m in document || targetRef.value && m in targetRef.value);
		});
		const fullscreenEnabled = (0, vue.computed)(() => {
			return [
				"fullScreen",
				"webkitIsFullScreen",
				"webkitDisplayingFullscreen",
				"mozFullScreen",
				"msFullscreenElement"
			].find((m) => document && m in document || targetRef.value && m in targetRef.value);
		});
		const fullscreenElementMethod = [
			"fullscreenElement",
			"webkitFullscreenElement",
			"mozFullScreenElement",
			"msFullscreenElement"
		].find((m) => document && m in document);
		const isSupported = useSupported(() => targetRef.value && document && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
		const isCurrentElementFullScreen = () => {
			if (fullscreenElementMethod) return (document === null || document === void 0 ? void 0 : document[fullscreenElementMethod]) === targetRef.value;
			return false;
		};
		const isElementFullScreen = () => {
			if (fullscreenEnabled.value) if (document && document[fullscreenEnabled.value] != null) return document[fullscreenEnabled.value];
			else {
				const target = targetRef.value;
				if ((target === null || target === void 0 ? void 0 : target[fullscreenEnabled.value]) != null) return Boolean(target[fullscreenEnabled.value]);
			}
			return false;
		};
		async function exit() {
			if (!isSupported.value || !isFullscreen.value) return;
			if (exitMethod.value) if ((document === null || document === void 0 ? void 0 : document[exitMethod.value]) != null) await document[exitMethod.value]();
			else {
				const target = targetRef.value;
				if ((target === null || target === void 0 ? void 0 : target[exitMethod.value]) != null) await target[exitMethod.value]();
			}
			isFullscreen.value = false;
		}
		async function enter() {
			if (!isSupported.value || isFullscreen.value) return;
			if (isElementFullScreen()) await exit();
			const target = targetRef.value;
			if (requestMethod.value && (target === null || target === void 0 ? void 0 : target[requestMethod.value]) != null) {
				await target[requestMethod.value]();
				isFullscreen.value = true;
			}
		}
		async function toggle() {
			await (isFullscreen.value ? exit() : enter());
		}
		const handlerCallback = () => {
			const isElementFullScreenValue = isElementFullScreen();
			if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
		};
		const listenerOptions = {
			capture: false,
			passive: true
		};
		useEventListener(document, eventHandlers, handlerCallback, listenerOptions);
		useEventListener(() => unrefElement$1(targetRef), eventHandlers, handlerCallback, listenerOptions);
		tryOnMounted(handlerCallback, false);
		if (autoExit) tryOnScopeDispose$1(exit);
		return {
			isSupported,
			isFullscreen,
			enter,
			exit,
			toggle
		};
	}
	Number.POSITIVE_INFINITY;
	var lib_exports = __exportAll({
		Vue: () => vue,
		Vue2: () => void 0,
		del: () => del,
		install: () => install,
		isVue2: () => false,
		isVue3: () => true,
		set: () => set
	});
	__reExport(lib_exports, vue);
	function install() {}
	function set(target, key, val) {
		if (Array.isArray(target)) {
			target.length = Math.max(target.length, key);
			target.splice(key, 1, val);
			return val;
		}
		target[key] = val;
		return val;
	}
	function del(target, key) {
		if (Array.isArray(target)) {
			target.splice(key, 1);
			return;
		}
		delete target[key];
	}
	function tryOnScopeDispose(fn) {
		if ((0, lib_exports.getCurrentScope)()) {
			(0, lib_exports.onScopeDispose)(fn);
			return true;
		}
		return false;
	}
	function toValue$1(r) {
		return typeof r === "function" ? r() : (0, lib_exports.unref)(r);
	}
	var isClient = typeof window !== "undefined" && typeof document !== "undefined";
	typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
	function unrefElement(elRef) {
		var _a;
		const plain = toValue$1(elRef);
		return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
	}
	isClient && window.document;
	isClient && window.navigator;
	isClient && window.location;
	Number.POSITIVE_INFINITY;
	var candidateSelectors = [
		"input:not([inert]):not([inert] *)",
		"select:not([inert]):not([inert] *)",
		"textarea:not([inert]):not([inert] *)",
		"a[href]:not([inert]):not([inert] *)",
		"button:not([inert]):not([inert] *)",
		"[tabindex]:not(slot):not([inert]):not([inert] *)",
		"audio[controls]:not([inert]):not([inert] *)",
		"video[controls]:not([inert]):not([inert] *)",
		"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
		"details>summary:first-of-type:not([inert]):not([inert] *)",
		"details:not([inert]):not([inert] *)"
	];
	var candidateSelector = candidateSelectors.join(",");
	var NoElement = typeof Element === "undefined";
	var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
		var _element$getRootNode;
		return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
	} : function(element) {
		return element === null || element === void 0 ? void 0 : element.ownerDocument;
	};
	var _isInert = function isInert(node, lookUp) {
		var _node$getAttribute;
		if (lookUp === void 0) lookUp = true;
		var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
		return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
	};
	var isContentEditable = function isContentEditable(node) {
		var _node$getAttribute2;
		var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
		return attValue === "" || attValue === "true";
	};
	var getCandidates = function getCandidates(el, includeContainer, filter) {
		if (_isInert(el)) return [];
		var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
		if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
		candidates = candidates.filter(filter);
		return candidates;
	};
	var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
		var candidates = [];
		var elementsToCheck = Array.from(elements);
		while (elementsToCheck.length) {
			var element = elementsToCheck.shift();
			if (_isInert(element, false)) continue;
			if (element.tagName === "SLOT") {
				var assigned = element.assignedElements();
				var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: nestedCandidates
				});
			} else {
				if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
				var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
				var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
				if (shadowRoot && validShadowRoot) {
					var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
					if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
					else candidates.push({
						scopeParent: element,
						candidates: _nestedCandidates
					});
				} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
			}
		}
		return candidates;
	};
	var hasTabIndex = function hasTabIndex(node) {
		return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
	};
	var getTabIndex = function getTabIndex(node) {
		if (!node) throw new Error("No node provided");
		if (node.tabIndex < 0) {
			if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
		}
		return node.tabIndex;
	};
	var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
		var tabIndex = getTabIndex(node);
		if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
		return tabIndex;
	};
	var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
		return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
	};
	var isInput = function isInput(node) {
		return node.tagName === "INPUT";
	};
	var isHiddenInput = function isHiddenInput(node) {
		return isInput(node) && node.type === "hidden";
	};
	var isDetailsWithSummary = function isDetailsWithSummary(node) {
		return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
			return child.tagName === "SUMMARY";
		});
	};
	var getCheckedRadio = function getCheckedRadio(nodes, form) {
		for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
	};
	var isTabbableRadio = function isTabbableRadio(node) {
		if (!node.name) return true;
		var radioScope = node.form || getRootNode(node);
		var queryRadios = function queryRadios(name) {
			return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
		};
		var radioSet;
		if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
		else try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
			return false;
		}
		var checked = getCheckedRadio(radioSet, node.form);
		return !checked || checked === node;
	};
	var isRadio = function isRadio(node) {
		return isInput(node) && node.type === "radio";
	};
	var isNonTabbableRadio = function isNonTabbableRadio(node) {
		return isRadio(node) && !isTabbableRadio(node);
	};
	var isNodeAttached = function isNodeAttached(node) {
		var _nodeRoot;
		var nodeRoot = node && getRootNode(node);
		var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
		var attached = false;
		if (nodeRoot && nodeRoot !== node) {
			var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
			attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
			while (!attached && nodeRootHost) {
				var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
				nodeRoot = getRootNode(nodeRootHost);
				nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
				attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
			}
		}
		return attached;
	};
	var isZeroArea = function isZeroArea(node) {
		var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
		return width === 0 && height === 0;
	};
	var isHidden = function isHidden(node, _ref) {
		var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
		if (displayCheck === "full-native") {
			if ("checkVisibility" in node) return !node.checkVisibility({
				checkOpacity: false,
				opacityProperty: false,
				contentVisibilityAuto: true,
				visibilityProperty: true,
				checkVisibilityCSS: true
			});
		}
		if (getComputedStyle(node).visibility === "hidden") return true;
		var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
		if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
		if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
			if (typeof getShadowRoot === "function") {
				var originalNode = node;
				while (node) {
					var parentElement = node.parentElement;
					var rootNode = getRootNode(node);
					if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
					else if (node.assignedSlot) node = node.assignedSlot;
					else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
					else node = parentElement;
				}
				node = originalNode;
			}
			if (isNodeAttached(node)) return !node.getClientRects().length;
			if (displayCheck !== "legacy-full") return true;
		} else if (displayCheck === "non-zero-area") return isZeroArea(node);
		return false;
	};
	var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
			var parentNode = node.parentElement;
			while (parentNode) {
				if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
					for (var i = 0; i < parentNode.children.length; i++) {
						var child = parentNode.children.item(i);
						if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
					}
					return true;
				}
				parentNode = parentNode.parentElement;
			}
		}
		return false;
	};
	var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
		if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
		return true;
	};
	var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
		if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
		return true;
	};
	var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
		var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
		if (isNaN(tabIndex) || tabIndex >= 0) return true;
		return false;
	};
	var _sortByOrder = function sortByOrder(candidates) {
		var regularTabbables = [];
		var orderedTabbables = [];
		candidates.forEach(function(item, i) {
			var isScope = !!item.scopeParent;
			var element = isScope ? item.scopeParent : item;
			var candidateTabindex = getSortOrderTabIndex(element, isScope);
			var elements = isScope ? _sortByOrder(item.candidates) : element;
			if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
			else orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements
			});
		});
		return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
			sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
			return acc;
		}, []).concat(regularTabbables);
	};
	var tabbable = function tabbable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isShadowRootTabbable
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
		return _sortByOrder(candidates);
	};
	var focusable = function focusable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorFocusable.bind(null, options),
			flatten: true,
			getShadowRoot: options.getShadowRoot
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
		return candidates;
	};
	var isTabbable = function isTabbable(node, options) {
		options = options || {};
		if (!node) throw new Error("No node provided");
		if (matches.call(node, candidateSelector) === false) return false;
		return isNodeMatchingSelectorTabbable(options, node);
	};
	var focusableCandidateSelector = candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
	var isFocusable = function isFocusable(node, options) {
		options = options || {};
		if (!node) throw new Error("No node provided");
		if (matches.call(node, focusableCandidateSelector) === false) return false;
		return isNodeMatchingSelectorFocusable(options, node);
	};
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(obj, key, value) {
		key = _toPropertyKey(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== void 0) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	var activeFocusTraps = {
		activateTrap: function activateTrap(trapStack, trap) {
			if (trapStack.length > 0) {
				var activeTrap = trapStack[trapStack.length - 1];
				if (activeTrap !== trap) activeTrap.pause();
			}
			var trapIndex = trapStack.indexOf(trap);
			if (trapIndex === -1) trapStack.push(trap);
			else {
				trapStack.splice(trapIndex, 1);
				trapStack.push(trap);
			}
		},
		deactivateTrap: function deactivateTrap(trapStack, trap) {
			var trapIndex = trapStack.indexOf(trap);
			if (trapIndex !== -1) trapStack.splice(trapIndex, 1);
			if (trapStack.length > 0) trapStack[trapStack.length - 1].unpause();
		}
	};
	var isSelectableInput = function isSelectableInput(node) {
		return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
	};
	var isEscapeEvent = function isEscapeEvent(e) {
		return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
	};
	var isTabEvent = function isTabEvent(e) {
		return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
	};
	var isKeyForward = function isKeyForward(e) {
		return isTabEvent(e) && !e.shiftKey;
	};
	var isKeyBackward = function isKeyBackward(e) {
		return isTabEvent(e) && e.shiftKey;
	};
	var delay$1 = function delay(fn) {
		return setTimeout(fn, 0);
	};
	var findIndex = function findIndex(arr, fn) {
		var idx = -1;
		arr.every(function(value, i) {
			if (fn(value)) {
				idx = i;
				return false;
			}
			return true;
		});
		return idx;
	};
	var valueOrHandler = function valueOrHandler(value) {
		for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
		return typeof value === "function" ? value.apply(void 0, params) : value;
	};
	var getActualTarget = function getActualTarget(event) {
		return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
	};
	var internalTrapStack = [];
	var createFocusTrap = function createFocusTrap(elements, userOptions) {
		var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
		var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
		var config = _objectSpread2({
			returnFocusOnDeactivate: true,
			escapeDeactivates: true,
			delayInitialFocus: true,
			isKeyForward,
			isKeyBackward
		}, userOptions);
		var state = {
			containers: [],
			containerGroups: [],
			tabbableGroups: [],
			nodeFocusedBeforeActivation: null,
			mostRecentlyFocusedNode: null,
			active: false,
			paused: false,
			delayInitialFocusTimer: void 0,
			recentNavEvent: void 0
		};
		var trap;
		var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
			return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
		};
		var findContainerIndex = function findContainerIndex(element, event) {
			var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
			return state.containerGroups.findIndex(function(_ref) {
				var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
				return container.contains(element) || (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
					return node === element;
				});
			});
		};
		var getNodeForOption = function getNodeForOption(optionName) {
			var optionValue = config[optionName];
			if (typeof optionValue === "function") {
				for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) params[_key2 - 1] = arguments[_key2];
				optionValue = optionValue.apply(void 0, params);
			}
			if (optionValue === true) optionValue = void 0;
			if (!optionValue) {
				if (optionValue === void 0 || optionValue === false) return optionValue;
				throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
			}
			var node = optionValue;
			if (typeof optionValue === "string") {
				node = doc.querySelector(optionValue);
				if (!node) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
			}
			return node;
		};
		var getInitialFocusNode = function getInitialFocusNode() {
			var node = getNodeForOption("initialFocus");
			if (node === false) return false;
			if (node === void 0 || !isFocusable(node, config.tabbableOptions)) if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
			else {
				var firstTabbableGroup = state.tabbableGroups[0];
				node = firstTabbableGroup && firstTabbableGroup.firstTabbableNode || getNodeForOption("fallbackFocus");
			}
			if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
			return node;
		};
		var updateTabbableNodes = function updateTabbableNodes() {
			state.containerGroups = state.containers.map(function(container) {
				var tabbableNodes = tabbable(container, config.tabbableOptions);
				var focusableNodes = focusable(container, config.tabbableOptions);
				var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
				var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
				var firstDomTabbableNode = focusableNodes.find(function(node) {
					return isTabbable(node);
				});
				var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
					return isTabbable(node);
				});
				return {
					container,
					tabbableNodes,
					focusableNodes,
					posTabIndexesFound: !!tabbableNodes.find(function(node) {
						return getTabIndex(node) > 0;
					}),
					firstTabbableNode,
					lastTabbableNode,
					firstDomTabbableNode,
					lastDomTabbableNode,
					nextTabbableNode: function nextTabbableNode(node) {
						var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
						var nodeIdx = tabbableNodes.indexOf(node);
						if (nodeIdx < 0) {
							if (forward) return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
								return isTabbable(el);
							});
							return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
								return isTabbable(el);
							});
						}
						return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
					}
				};
			});
			state.tabbableGroups = state.containerGroups.filter(function(group) {
				return group.tabbableNodes.length > 0;
			});
			if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
			if (state.containerGroups.find(function(g) {
				return g.posTabIndexesFound;
			}) && state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
		};
		var getActiveElement = function getActiveElement(el) {
			var activeElement = el.activeElement;
			if (!activeElement) return;
			if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) return getActiveElement(activeElement.shadowRoot);
			return activeElement;
		};
		var tryFocus = function tryFocus(node) {
			if (node === false) return;
			if (node === getActiveElement(document)) return;
			if (!node || !node.focus) {
				tryFocus(getInitialFocusNode());
				return;
			}
			node.focus({ preventScroll: !!config.preventScroll });
			state.mostRecentlyFocusedNode = node;
			if (isSelectableInput(node)) node.select();
		};
		var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
			var node = getNodeForOption("setReturnFocus", previousActiveElement);
			return node ? node : node === false ? false : previousActiveElement;
		};
		var findNextNavNode = function findNextNavNode(_ref2) {
			var target = _ref2.target, event = _ref2.event, _ref2$isBackward = _ref2.isBackward, isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
			target = target || getActualTarget(event);
			updateTabbableNodes();
			var destinationNode = null;
			if (state.tabbableGroups.length > 0) {
				var containerIndex = findContainerIndex(target, event);
				var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
				if (containerIndex < 0) if (isBackward) destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
				else destinationNode = state.tabbableGroups[0].firstTabbableNode;
				else if (isBackward) {
					var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
						var firstTabbableNode = _ref3.firstTabbableNode;
						return target === firstTabbableNode;
					});
					if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
					if (startOfGroupIndex >= 0) {
						var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
						var destinationGroup = state.tabbableGroups[destinationGroupIndex];
						destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
					} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target, false);
				} else {
					var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref4) {
						var lastTabbableNode = _ref4.lastTabbableNode;
						return target === lastTabbableNode;
					});
					if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
					if (lastOfGroupIndex >= 0) {
						var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
						var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
						destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
					} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target);
				}
			} else destinationNode = getNodeForOption("fallbackFocus");
			return destinationNode;
		};
		var checkPointerDown = function checkPointerDown(e) {
			if (findContainerIndex(getActualTarget(e), e) >= 0) return;
			if (valueOrHandler(config.clickOutsideDeactivates, e)) {
				trap.deactivate({ returnFocus: config.returnFocusOnDeactivate });
				return;
			}
			if (valueOrHandler(config.allowOutsideClick, e)) return;
			e.preventDefault();
		};
		var checkFocusIn = function checkFocusIn(event) {
			var target = getActualTarget(event);
			var targetContained = findContainerIndex(target, event) >= 0;
			if (targetContained || target instanceof Document) {
				if (targetContained) state.mostRecentlyFocusedNode = target;
			} else {
				event.stopImmediatePropagation();
				var nextNode;
				var navAcrossContainers = true;
				if (state.mostRecentlyFocusedNode) {
					if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
						var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
						var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
						if (tabbableNodes.length > 0) {
							var mruTabIdx = tabbableNodes.findIndex(function(node) {
								return node === state.mostRecentlyFocusedNode;
							});
							if (mruTabIdx >= 0) {
								if (config.isKeyForward(state.recentNavEvent)) {
									if (mruTabIdx + 1 < tabbableNodes.length) {
										nextNode = tabbableNodes[mruTabIdx + 1];
										navAcrossContainers = false;
									}
								} else if (mruTabIdx - 1 >= 0) {
									nextNode = tabbableNodes[mruTabIdx - 1];
									navAcrossContainers = false;
								}
							}
						}
					} else if (!state.containerGroups.some(function(g) {
						return g.tabbableNodes.some(function(n) {
							return getTabIndex(n) > 0;
						});
					})) navAcrossContainers = false;
				} else navAcrossContainers = false;
				if (navAcrossContainers) nextNode = findNextNavNode({
					target: state.mostRecentlyFocusedNode,
					isBackward: config.isKeyBackward(state.recentNavEvent)
				});
				if (nextNode) tryFocus(nextNode);
				else tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
			}
			state.recentNavEvent = void 0;
		};
		var checkKeyNav = function checkKeyNav(event) {
			var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			state.recentNavEvent = event;
			var destinationNode = findNextNavNode({
				event,
				isBackward
			});
			if (destinationNode) {
				if (isTabEvent(event)) event.preventDefault();
				tryFocus(destinationNode);
			}
		};
		var checkKey = function checkKey(event) {
			if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
				event.preventDefault();
				trap.deactivate();
				return;
			}
			if (config.isKeyForward(event) || config.isKeyBackward(event)) checkKeyNav(event, config.isKeyBackward(event));
		};
		var checkClick = function checkClick(e) {
			if (findContainerIndex(getActualTarget(e), e) >= 0) return;
			if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
			if (valueOrHandler(config.allowOutsideClick, e)) return;
			e.preventDefault();
			e.stopImmediatePropagation();
		};
		var addListeners = function addListeners() {
			if (!state.active) return;
			activeFocusTraps.activateTrap(trapStack, trap);
			state.delayInitialFocusTimer = config.delayInitialFocus ? delay$1(function() {
				tryFocus(getInitialFocusNode());
			}) : tryFocus(getInitialFocusNode());
			doc.addEventListener("focusin", checkFocusIn, true);
			doc.addEventListener("mousedown", checkPointerDown, {
				capture: true,
				passive: false
			});
			doc.addEventListener("touchstart", checkPointerDown, {
				capture: true,
				passive: false
			});
			doc.addEventListener("click", checkClick, {
				capture: true,
				passive: false
			});
			doc.addEventListener("keydown", checkKey, {
				capture: true,
				passive: false
			});
			return trap;
		};
		var removeListeners = function removeListeners() {
			if (!state.active) return;
			doc.removeEventListener("focusin", checkFocusIn, true);
			doc.removeEventListener("mousedown", checkPointerDown, true);
			doc.removeEventListener("touchstart", checkPointerDown, true);
			doc.removeEventListener("click", checkClick, true);
			doc.removeEventListener("keydown", checkKey, true);
			return trap;
		};
		var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(function checkDomRemoval(mutations) {
			if (mutations.some(function(mutation) {
				return Array.from(mutation.removedNodes).some(function(node) {
					return node === state.mostRecentlyFocusedNode;
				});
			})) tryFocus(getInitialFocusNode());
		}) : void 0;
		var updateObservedNodes = function updateObservedNodes() {
			if (!mutationObserver) return;
			mutationObserver.disconnect();
			if (state.active && !state.paused) state.containers.map(function(container) {
				mutationObserver.observe(container, {
					subtree: true,
					childList: true
				});
			});
		};
		trap = {
			get active() {
				return state.active;
			},
			get paused() {
				return state.paused;
			},
			activate: function activate(activateOptions) {
				if (state.active) return this;
				var onActivate = getOption(activateOptions, "onActivate");
				var onPostActivate = getOption(activateOptions, "onPostActivate");
				var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
				if (!checkCanFocusTrap) updateTabbableNodes();
				state.active = true;
				state.paused = false;
				state.nodeFocusedBeforeActivation = doc.activeElement;
				onActivate === null || onActivate === void 0 || onActivate();
				var finishActivation = function finishActivation() {
					if (checkCanFocusTrap) updateTabbableNodes();
					addListeners();
					updateObservedNodes();
					onPostActivate === null || onPostActivate === void 0 || onPostActivate();
				};
				if (checkCanFocusTrap) {
					checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
					return this;
				}
				finishActivation();
				return this;
			},
			deactivate: function deactivate(deactivateOptions) {
				if (!state.active) return this;
				var options = _objectSpread2({
					onDeactivate: config.onDeactivate,
					onPostDeactivate: config.onPostDeactivate,
					checkCanReturnFocus: config.checkCanReturnFocus
				}, deactivateOptions);
				clearTimeout(state.delayInitialFocusTimer);
				state.delayInitialFocusTimer = void 0;
				removeListeners();
				state.active = false;
				state.paused = false;
				updateObservedNodes();
				activeFocusTraps.deactivateTrap(trapStack, trap);
				var onDeactivate = getOption(options, "onDeactivate");
				var onPostDeactivate = getOption(options, "onPostDeactivate");
				var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
				var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
				onDeactivate === null || onDeactivate === void 0 || onDeactivate();
				var finishDeactivation = function finishDeactivation() {
					delay$1(function() {
						if (returnFocus) tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
						onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
					});
				};
				if (returnFocus && checkCanReturnFocus) {
					checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
					return this;
				}
				finishDeactivation();
				return this;
			},
			pause: function pause(pauseOptions) {
				if (state.paused || !state.active) return this;
				var onPause = getOption(pauseOptions, "onPause");
				var onPostPause = getOption(pauseOptions, "onPostPause");
				state.paused = true;
				onPause === null || onPause === void 0 || onPause();
				removeListeners();
				updateObservedNodes();
				onPostPause === null || onPostPause === void 0 || onPostPause();
				return this;
			},
			unpause: function unpause(unpauseOptions) {
				if (!state.paused || !state.active) return this;
				var onUnpause = getOption(unpauseOptions, "onUnpause");
				var onPostUnpause = getOption(unpauseOptions, "onPostUnpause");
				state.paused = false;
				onUnpause === null || onUnpause === void 0 || onUnpause();
				updateTabbableNodes();
				addListeners();
				updateObservedNodes();
				onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
				return this;
			},
			updateContainerElements: function updateContainerElements(containerElements) {
				state.containers = [].concat(containerElements).filter(Boolean).map(function(element) {
					return typeof element === "string" ? doc.querySelector(element) : element;
				});
				if (state.active) updateTabbableNodes();
				updateObservedNodes();
				return this;
			}
		};
		trap.updateContainerElements(elements);
		return trap;
	};
	function useFocusTrap(target, options = {}) {
		let trap;
		const { immediate, ...focusTrapOptions } = options;
		const hasFocus = (0, lib_exports.ref)(false);
		const isPaused = (0, lib_exports.ref)(false);
		const activate = (opts) => trap && trap.activate(opts);
		const deactivate = (opts) => trap && trap.deactivate(opts);
		const pause = () => {
			if (trap) {
				trap.pause();
				isPaused.value = true;
			}
		};
		const unpause = () => {
			if (trap) {
				trap.unpause();
				isPaused.value = false;
			}
		};
		(0, lib_exports.watch)(() => unrefElement(target), (el) => {
			if (!el) return;
			trap = createFocusTrap(el, {
				...focusTrapOptions,
				onActivate() {
					hasFocus.value = true;
					if (options.onActivate) options.onActivate();
				},
				onDeactivate() {
					hasFocus.value = false;
					if (options.onDeactivate) options.onDeactivate();
				}
			});
			if (immediate) activate();
		}, { flush: "post" });
		tryOnScopeDispose(() => deactivate());
		return {
			hasFocus,
			isPaused,
			activate,
			deactivate,
			pause,
			unpause
		};
	}
	var uo = (e) => (...o) => {
		e && (e?.(...o), e = null);
	}, q = () => {};
	function oe(e, o, l) {
		return e > l ? l : e < o ? o : e;
	}
	function fe(e, o) {
		var s;
		const l = ((s = $(e, o)) == null ? void 0 : s[0]) || o;
		e.push(l);
	}
	function $(e, o) {
		const l = e.indexOf(o);
		if (l !== -1) return e.splice(l, 1);
	}
	var co = {
		teleportTo: {
			type: [
				String,
				null,
				Boolean,
				Object
			],
			default: "body"
		},
		modalId: {
			type: [
				String,
				Number,
				Symbol
			],
			default: void 0
		},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		displayDirective: {
			type: String,
			default: "if",
			validator: (e) => [
				"if",
				"show",
				"visible"
			].includes(e)
		},
		hideOverlay: {
			type: Boolean,
			default: void 0
		},
		overlayBehavior: {
			type: String,
			default: "auto",
			validator: (e) => ["auto", "persist"].includes(e)
		},
		overlayTransition: {
			type: [String, Object],
			default: void 0
		},
		contentTransition: {
			type: [String, Object],
			default: void 0
		},
		overlayClass: {
			type: void 0,
			default: void 0
		},
		contentClass: {
			type: void 0,
			default: void 0
		},
		overlayStyle: {
			type: [
				String,
				Object,
				Array
			],
			default: void 0
		},
		contentStyle: {
			type: [
				String,
				Object,
				Array
			],
			default: void 0
		},
		clickToClose: {
			type: Boolean,
			default: !0
		},
		escToClose: {
			type: Boolean,
			default: !0
		},
		background: {
			type: String,
			default: "non-interactive",
			validator: (e) => ["interactive", "non-interactive"].includes(e)
		},
		focusTrap: {
			type: [Boolean, Object],
			default: () => ({ allowOutsideClick: !0 })
		},
		lockScroll: {
			type: Boolean,
			default: !0
		},
		reserveScrollBarGap: {
			type: Boolean,
			default: !0
		},
		zIndexFn: {
			type: Function,
			default: ({ index: e }) => 1e3 + 2 * e
		},
		swipeToClose: {
			type: String,
			default: "none",
			validator: (e) => [
				"none",
				"up",
				"right",
				"down",
				"left"
			].includes(e)
		},
		threshold: {
			type: Number,
			default: 0
		},
		showSwipeBanner: {
			type: Boolean,
			default: void 0
		},
		preventNavigationGestures: {
			type: Boolean,
			default: void 0
		}
	};
	function Oe(e = !1) {
		const o = (0, vue.ref)(e), l = (0, vue.ref)(o.value ? 0 : void 0);
		return [
			o,
			l,
			{
				beforeEnter() {
					l.value = 1;
				},
				afterEnter() {
					l.value = 0;
				},
				beforeLeave() {
					l.value = 3;
				},
				afterLeave() {
					l.value = 2;
				}
			}
		];
	}
	function fo(e, o) {
		const { modelValueLocal: l, onEntering: s, onEnter: u, onLeaving: c, onLeave: a } = o, n = (0, vue.ref)(l.value), [t, r, m] = Oe(n.value), [f, M, S] = Oe(n.value), V = (0, vue.computed)(() => typeof e.contentTransition == "string" ? {
			name: e.contentTransition,
			appear: !0
		} : {
			appear: !0,
			...e.contentTransition
		}), O = (0, vue.computed)(() => typeof e.overlayTransition == "string" ? {
			name: e.overlayTransition,
			appear: !0
		} : {
			appear: !0,
			...e.overlayTransition
		});
		(0, vue.watch)((0, vue.computed)(() => (e.hideOverlay || M.value === 2) && r.value === 2), (k) => {
			k && (n.value = !1);
		}), (0, vue.watch)(r, (k) => {
			if (k === 1) {
				if (!n.value) return;
				s?.();
			} else if (k === 0) {
				if (!n.value) return;
				u?.();
			} else k === 3 ? c?.() : k === 2 && a?.();
		});
		async function w() {
			n.value = !0, await (0, vue.nextTick)(), t.value = !0, f.value = !0;
		}
		function D() {
			t.value = !1, f.value = !1;
		}
		return {
			visible: n,
			contentVisible: t,
			contentListeners: m,
			contentTransition: V,
			overlayVisible: f,
			overlayListeners: S,
			overlayTransition: O,
			enterTransition: w,
			leaveTransition: D
		};
	}
	function vo(e, o, l) {
		const { vfmRootEl: s, vfmContentEl: u, visible: c, modelValueLocal: a } = l, n = (0, vue.ref)();
		function t() {
			c.value && e.escToClose && (a.value = !1);
		}
		function r(f) {
			n.value = f == null ? void 0 : f.target;
		}
		function m() {
			var f;
			n.value === s.value && (e.clickToClose ? a.value = !1 : ((f = u.value) == null || f.focus(), o("clickOutside")));
		}
		return {
			onEsc: t,
			onMouseupRoot: m,
			onMousedown: r
		};
	}
	function po(e, o, l) {
		let s = !1;
		const { open: u, close: c } = l, a = (0, vue.ref)(!1), n = {
			get value() {
				return a.value;
			},
			set value(r) {
				t(r);
			}
		};
		function t(r) {
			(r ? u() : c()) ? (a.value = r, r !== e.modelValue && o("update:modelValue", r)) : (s = !0, o("update:modelValue", !r), (0, vue.nextTick)(() => {
				s = !1;
			}));
		}
		return (0, vue.watch)(() => e.modelValue, (r) => {
			s || (n.value = !!r);
		}), { modelValueLocal: n };
	}
	function yo(e, o) {
		if (e.focusTrap === !1) return {
			focus() {},
			blur() {}
		};
		const { focusEl: l } = o, { hasFocus: s, activate: u, deactivate: c } = useFocusTrap(l, e.focusTrap);
		function a() {
			requestAnimationFrame(() => {
				u();
			});
		}
		function n() {
			s.value && c();
		}
		return {
			focus: a,
			blur: n
		};
	}
	var be = !1;
	if (typeof window < "u") {
		const e = { get passive() {
			be = !0;
		} };
		window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
	}
	var He = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
	var j = [], le = !1, ne = 0, je = -1, W, X;
	var ho = (e) => {
		if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
		const o = window.getComputedStyle(e);
		return ["auto", "scroll"].includes(o.overflowY) && e.scrollHeight > e.clientHeight;
	}, mo = (e, o) => !(e.scrollTop === 0 && o < 0 || e.scrollTop + e.clientHeight + o >= e.scrollHeight && o > 0), wo = (e) => {
		const o = [];
		for (; e;) {
			if (o.push(e), e.classList.contains("vfm")) return o;
			e = e.parentElement;
		}
		return o;
	}, bo = (e, o) => {
		let l = !1;
		return wo(e).forEach((u) => {
			ho(u) && mo(u, o) && (l = !0);
		}), l;
	}, Ne = (e) => j.some(() => bo(e, -ne)), se = (e) => {
		const o = e || window.event;
		return Ne(o.target) || o.touches.length > 1 ? !0 : (o.preventDefault && o.preventDefault(), !1);
	}, To = (e) => {
		if (X === void 0) {
			const o = !!e && e.reserveScrollBarGap === !0, l = window.innerWidth - document.documentElement.clientWidth;
			if (o && l > 0) {
				const s = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
				X = document.body.style.paddingRight, document.body.style.paddingRight = `${s + l}px`;
			}
		}
		W === void 0 && (W = document.body.style.overflow, document.body.style.overflow = "hidden");
	}, So = () => {
		X !== void 0 && (document.body.style.paddingRight = X, X = void 0), W !== void 0 && (document.body.style.overflow = W, W = void 0);
	}, Mo = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1, go = (e, o) => (ne = e.targetTouches[0].clientY - je, Ne(e.target) ? !1 : o && o.scrollTop === 0 && ne > 0 || Mo(o) && ne < 0 ? se(e) : (e.stopPropagation(), !0)), Co = (e, o) => {
		if (!e) {
			console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
			return;
		}
		if (j.some((s) => s.targetElement === e)) return;
		const l = {
			targetElement: e,
			options: o || {}
		};
		j = [...j, l], He ? (e.ontouchstart = (s) => {
			s.targetTouches.length === 1 && (je = s.targetTouches[0].clientY);
		}, e.ontouchmove = (s) => {
			s.targetTouches.length === 1 && go(s, e);
		}, le || (document.addEventListener("touchmove", se, be ? { passive: !1 } : void 0), le = !0)) : To(o);
	}, ko = (e) => {
		if (!e) {
			console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
			return;
		}
		j = j.filter((o) => o.targetElement !== e), He ? (e.ontouchstart = null, e.ontouchmove = null, le && j.length === 0 && (document.removeEventListener("touchmove", se, be ? { passive: !1 } : void 0), le = !1)) : j.length || So();
	};
	function Vo(e, o) {
		const { lockScrollEl: l, modelValueLocal: s } = o;
		let u;
		(0, vue.watch)(l, (n) => {
			n && (u = n);
		}, { immediate: !0 }), (0, vue.watch)(() => e.lockScroll, (n) => {
			n ? a() : c();
		}), (0, vue.onBeforeUnmount)(() => {
			c();
		});
		function c() {
			u && ko(u);
		}
		function a() {
			s.value && e.lockScroll && u && Co(u, {
				reserveScrollBarGap: e.reserveScrollBarGap,
				allowTouchMove: (n) => {
					for (; n && n !== document.body;) {
						if (n.getAttribute("vfm-scroll-lock-ignore") !== null) return !0;
						n = n.parentElement;
					}
					return !1;
				}
			});
		}
		return {
			enableBodyScroll: c,
			disableBodyScroll: a
		};
	}
	function Eo(e) {
		const o = (0, vue.ref)();
		function l(u) {
			var c;
			o.value = (c = e.zIndexFn) == null ? void 0 : c.call(e, { index: u <= -1 ? 0 : u });
		}
		function s() {
			o.value = void 0;
		}
		return {
			zIndex: o,
			refreshZIndex: l,
			resetZIndex: s
		};
	}
	var ve = {
		beforeMount(e, { value: o }, { transition: l }) {
			e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, l && o ? l.beforeEnter(e) : G(e, o);
		},
		mounted(e, { value: o }, { transition: l }) {
			l && o && l.enter(e);
		},
		updated(e, { value: o, oldValue: l }, { transition: s }) {
			!o != !l && (s ? o ? (s.beforeEnter(e), G(e, !0), s.enter(e)) : s.leave(e, () => {
				G(e, !1);
			}) : G(e, o));
		},
		beforeUnmount(e, { value: o }) {
			G(e, o);
		}
	};
	function G(e, o) {
		e.style.visibility = o ? e._vov : "hidden";
	}
	var De = (e) => {
		if (e instanceof MouseEvent) {
			const { clientX: o, clientY: l } = e;
			return {
				x: o,
				y: l
			};
		} else {
			const { clientX: o, clientY: l } = e.targetTouches[0];
			return {
				x: o,
				y: l
			};
		}
	};
	function Bo(e) {
		if (!e) return !1;
		let o = !1;
		return e.addEventListener("x", q, { get passive() {
			return o = !0, !1;
		} }), e.removeEventListener("x", q), o;
	}
	function Oo(e, { threshold: o = 0, onSwipeStart: l, onSwipe: s, onSwipeEnd: u, passive: c = !0 }) {
		const a = (0, vue.reactive)({
			x: 0,
			y: 0
		}), n = (0, vue.reactive)({
			x: 0,
			y: 0
		}), t = (0, vue.computed)(() => a.x - n.x), r = (0, vue.computed)(() => a.y - n.y), { max: m, abs: f } = Math, M = (0, vue.computed)(() => m(f(t.value), f(r.value)) >= o), S = (0, vue.ref)(!1), V = (0, vue.computed)(() => M.value ? f(t.value) > f(r.value) ? t.value > 0 ? "left" : "right" : r.value > 0 ? "up" : "down" : "none"), O = (p, h) => {
			a.x = p, a.y = h;
		}, E = (p, h) => {
			n.x = p, n.y = h;
		};
		let w, D;
		function k(p) {
			w.capture && !w.passive && p.preventDefault();
			const { x: h, y: R } = De(p);
			O(h, R), E(h, R), l?.(p), D = [
				useEventListener(e, "mousemove", P, w),
				useEventListener(e, "touchmove", P, w),
				useEventListener(e, "mouseup", i, w),
				useEventListener(e, "touchend", i, w),
				useEventListener(e, "touchcancel", i, w)
			];
		}
		function P(p) {
			const { x: h, y: R } = De(p);
			E(h, R), !S.value && M.value && (S.value = !0), S.value && s?.(p);
		}
		function i(p) {
			S.value && u?.(p, V.value), S.value = !1, D.forEach((h) => h());
		}
		let b = [];
		return (0, vue.onMounted)(() => {
			const p = Bo(window == null ? void 0 : window.document);
			c ? w = p ? { passive: !0 } : { capture: !1 } : w = p ? {
				passive: !1,
				capture: !0
			} : { capture: !0 }, b = [useEventListener(e, "mousedown", k, w), useEventListener(e, "touchstart", k, w)];
		}), {
			isSwiping: S,
			direction: V,
			coordsStart: a,
			coordsEnd: n,
			lengthX: t,
			lengthY: r,
			stop: () => {
				b.forEach((p) => p()), D.forEach((p) => p());
			}
		};
	}
	function Do(e, o) {
		const { vfmContentEl: l, modelValueLocal: s } = o, u = .1, c = 300, a = (0, vue.ref)(), n = (0, vue.computed)(() => {
			if (!(e.swipeToClose === void 0 || e.swipeToClose === "none")) return e.showSwipeBanner ? a.value : l.value;
		}), t = (0, vue.ref)(0), r = (0, vue.ref)(!0);
		let m = q, f = !0, M, S = !1;
		const { lengthX: V, lengthY: O, direction: E, isSwiping: w } = Oo(n, {
			threshold: e.threshold,
			onSwipeStart(i) {
				m = useEventListener(document, "selectionchange", () => {
					var b;
					r.value = (b = window.getSelection()) == null ? void 0 : b.isCollapsed;
				}), M = new Date().getTime(), S = P(i == null ? void 0 : i.target);
			},
			onSwipe() {
				var i, b, L, p;
				if (S && r.value && E.value === e.swipeToClose) {
					if (E.value === "up") t.value = oe(Math.abs(O.value || 0), 0, ((i = n.value) == null ? void 0 : i.offsetHeight) || 0) - (e.threshold || 0);
					else if (E.value === "down") t.value = -(oe(Math.abs(O.value || 0), 0, ((b = n.value) == null ? void 0 : b.offsetHeight) || 0) - (e.threshold || 0));
					else if (E.value === "right") t.value = -(oe(Math.abs(V.value || 0), 0, ((L = n.value) == null ? void 0 : L.offsetWidth) || 0) - (e.threshold || 0));
					else if (E.value === "left") t.value = oe(Math.abs(V.value || 0), 0, ((p = n.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
				}
			},
			onSwipeEnd(i, b) {
				if (m(), !r.value) {
					r.value = !0;
					return;
				}
				const L = new Date().getTime(), p = b === e.swipeToClose, h = (() => {
					var J, Q;
					if (b === "up" || b === "down") return Math.abs((O == null ? void 0 : O.value) || 0) > u * (((J = n.value) == null ? void 0 : J.offsetHeight) || 0);
					if (b === "left" || b === "right") return Math.abs((V == null ? void 0 : V.value) || 0) > u * (((Q = n.value) == null ? void 0 : Q.offsetWidth) || 0);
				})(), R = L - M <= c;
				if (f && S && p && (h || R)) {
					s.value = !1;
					return;
				}
				t.value = 0;
			}
		}), D = (0, vue.computed)(() => {
			if (e.swipeToClose === "none") return;
			const i = (() => {
				switch (e.swipeToClose) {
					case "up":
					case "down": return "translateY";
					case "left":
					case "right": return "translateX";
				}
			})();
			return {
				class: { "vfm-bounce-back": !w.value },
				style: { transform: `${i}(${-t.value}px)` }
			};
		});
		(0, vue.watch)(() => r.value, (i) => {
			i || (t.value = 0);
		}), (0, vue.watch)(() => s.value, (i) => {
			i && (t.value = 0);
		}), (0, vue.watch)(() => t.value, (i, b) => {
			switch (e.swipeToClose) {
				case "down":
				case "right":
					f = i < b;
					break;
				case "up":
				case "left":
					f = i > b;
					break;
			}
		});
		function k(i) {
			e.preventNavigationGestures && i.preventDefault();
		}
		function P(i) {
			const b = i == null ? void 0 : i.tagName;
			if (!b || ["INPUT", "TEXTAREA"].includes(b)) return !1;
			const L = (() => {
				switch (e.swipeToClose) {
					case "up": return (i == null ? void 0 : i.scrollTop) + (i == null ? void 0 : i.clientHeight) === (i == null ? void 0 : i.scrollHeight);
					case "left": return (i == null ? void 0 : i.scrollLeft) + (i == null ? void 0 : i.clientWidth) === (i == null ? void 0 : i.scrollWidth);
					case "down": return (i == null ? void 0 : i.scrollTop) === 0;
					case "right": return (i == null ? void 0 : i.scrollLeft) === 0;
					default: return !1;
				}
			})();
			return i === n.value ? L : L && P(i == null ? void 0 : i.parentElement);
		}
		return {
			vfmContentEl: l,
			swipeBannerEl: a,
			bindSwipe: D,
			onTouchStartSwipeBanner: k
		};
	}
	var Ye = Symbol("vfm");
	var H;
	var Lo = (e) => H = e, Po = {
		install: q,
		modals: [],
		openedModals: [],
		openedModalOverlays: [],
		dynamicModals: [],
		modalsContainers: (0, vue.ref)([]),
		get: () => {},
		toggle: () => {},
		open: () => {},
		close: () => {},
		closeAll: () => Promise.allSettled([])
	}, Ao = () => (0, vue.getCurrentInstance)() && (0, vue.inject)(Ye, Po) || H;
	function zo() {
		const e = (0, vue.shallowReactive)([]), o = (0, vue.shallowReactive)([]), c = (0, vue.markRaw)({
			install(a) {
				a.provide(Ye, c), a.config.globalProperties.$vfm = c;
			},
			modals: e,
			openedModals: o,
			openedModalOverlays: (0, vue.shallowReactive)([]),
			dynamicModals: (0, vue.shallowReactive)([]),
			modalsContainers: (0, vue.ref)([]),
			get(a) {
				return e.find((n) => {
					var t, r;
					return ((r = (t = Z(n)) == null ? void 0 : t.value.modalId) == null ? void 0 : r.value) === a;
				});
			},
			toggle(a, n) {
				var r;
				return (r = Z(c.get(a))) == null ? void 0 : r.value.toggle(n);
			},
			open(a) {
				return c.toggle(a, !0);
			},
			close(a) {
				return c.toggle(a, !1);
			},
			closeAll() {
				return Promise.allSettled(o.reduce((a, n) => {
					const t = Z(n), r = t == null ? void 0 : t.value.toggle(!1);
					return r && a.push(r), a;
				}, []));
			}
		});
		return Lo(c), c;
	}
	function Z(e) {
		var o;
		return (o = e == null ? void 0 : e.exposed) == null ? void 0 : o.modalExposed;
	}
	var Ro = (0, vue.defineComponent)({
		...(0, vue.defineComponent)({ inheritAttrs: !1 }),
		__name: "VueFinalModal",
		props: co,
		emits: [
			"update:modelValue",
			"beforeOpen",
			"opened",
			"beforeClose",
			"closed",
			"clickOutside"
		],
		setup(e, { expose: o, emit: l }) {
			const s = e, u = l, c = (0, vue.useAttrs)(), a = (0, vue.getCurrentInstance)(), { modals: n, openedModals: t, openedModalOverlays: r } = K(), m = (0, vue.ref)(), f = (0, vue.ref)(), { focus: M, blur: S } = yo(s, { focusEl: m }), { zIndex: V, refreshZIndex: O, resetZIndex: E } = Eo(s), { modelValueLocal: w } = po(s, u, {
				open: We,
				close: Xe
			}), { enableBodyScroll: D, disableBodyScroll: k } = Vo(s, {
				lockScrollEl: m,
				modelValueLocal: w
			});
			let P = q;
			const { visible: i, contentVisible: b, contentListeners: L, contentTransition: p, overlayVisible: h, overlayListeners: R, overlayTransition: J, enterTransition: Q, leaveTransition: xe } = fo(s, {
				modelValueLocal: w,
				onEntering() {
					(0, vue.nextTick)(() => {
						k(), M();
					});
				},
				onEnter() {
					u("opened"), P("opened");
				},
				onLeave() {
					$(t, a), E(), D(), u("closed"), P("closed");
				}
			}), { onEsc: ze, onMouseupRoot: Ge, onMousedown: Te } = vo(s, u, {
				vfmRootEl: m,
				vfmContentEl: f,
				visible: i,
				modelValueLocal: w
			}), { swipeBannerEl: $e, bindSwipe: Ue, onTouchStartSwipeBanner: Se } = Do(s, {
				vfmContentEl: f,
				modelValueLocal: w
			}), Me = (0, vue.computed)(() => a ? t.indexOf(a) : -1);
			(0, vue.watch)([() => s.zIndexFn, Me], () => {
				i.value && O(Me.value);
			}), (0, vue.onMounted)(() => {
				fe(n, a);
			}), s.modelValue && (w.value = !0);
			function We() {
				let d = !1;
				return u("beforeOpen", { stop: () => d = !0 }), d ? !1 : (fe(t, a), fe(r, a), ie(), Q(), !0);
			}
			function Xe() {
				let d = !1;
				return u("beforeClose", { stop: () => d = !0 }), d ? !1 : ($(r, a), ie(), S(), xe(), !0);
			}
			function Ze() {
				w.value = !1;
			}
			(0, vue.onBeforeUnmount)(() => {
				D(), $(n, a), $(t, a), S(), ie();
			});
			async function ie() {
				await (0, vue.nextTick)();
				const d = r.filter((y) => {
					var A;
					const T = Z(y);
					return (T == null ? void 0 : T.value.overlayBehavior.value) === "auto" && !((A = T == null ? void 0 : T.value.hideOverlay) != null && A.value);
				});
				d.forEach((y, T) => {
					const A = Z(y);
					A != null && A.value && (A.value.overlayVisible.value = T === d.length - 1);
				});
			}
			const Ke = (0, vue.toRef)(() => s.modalId), ge = (0, vue.toRef)(() => s.hideOverlay), qe = (0, vue.toRef)(() => s.overlayBehavior);
			return o({ modalExposed: (0, vue.computed)(() => ({
				modalId: Ke,
				hideOverlay: ge,
				overlayBehavior: qe,
				overlayVisible: h,
				toggle(d) {
					return new Promise((y) => {
						P = uo((A) => y(A));
						w.value = typeof d == "boolean" ? d : !w.value;
					});
				}
			})) }), (d, y) => ((0, vue.openBlock)(), (0, vue.createBlock)(vue.Teleport, {
				to: d.teleportTo ? d.teleportTo : void 0,
				disabled: !d.teleportTo
			}, [d.displayDirective !== "if" || (0, vue.unref)(i) ? (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("div", (0, vue.mergeProps)({ key: 0 }, (0, vue.unref)(c), {
				ref_key: "vfmRootEl",
				ref: m,
				class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": d.background === "interactive" }],
				style: { zIndex: (0, vue.unref)(V) },
				role: "dialog",
				"aria-modal": "true",
				onKeydown: y[7] || (y[7] = (0, vue.withKeys)(() => (0, vue.unref)(ze)(), ["esc"])),
				onMouseup: y[8] || (y[8] = (0, vue.withModifiers)(() => (0, vue.unref)(Ge)(), ["self"])),
				onMousedown: y[9] || (y[9] = (0, vue.withModifiers)((T) => (0, vue.unref)(Te)(T), ["self"]))
			}), [ge.value ? (0, vue.createCommentVNode)("", !0) : ((0, vue.openBlock)(), (0, vue.createBlock)(vue.Transition, (0, vue.mergeProps)({ key: 0 }, (0, vue.unref)(J), (0, vue.toHandlers)((0, vue.unref)(R))), {
				default: (0, vue.withCtx)(() => [d.displayDirective !== "if" || (0, vue.unref)(h) ? (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
					key: 0,
					class: (0, vue.normalizeClass)(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", d.overlayClass]),
					style: (0, vue.normalizeStyle)(d.overlayStyle),
					"aria-hidden": "true"
				}, null, 6)), [[vue.vShow, d.displayDirective !== "show" || (0, vue.unref)(h)], [(0, vue.unref)(ve), d.displayDirective !== "visible" || (0, vue.unref)(h)]]) : (0, vue.createCommentVNode)("", !0)]),
				_: 1
			}, 16)), (0, vue.createVNode)(vue.Transition, (0, vue.mergeProps)((0, vue.unref)(p), (0, vue.toHandlers)((0, vue.unref)(L))), {
				default: (0, vue.withCtx)(() => [d.displayDirective !== "if" || (0, vue.unref)(b) ? (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("div", (0, vue.mergeProps)({
					key: 0,
					ref_key: "vfmContentEl",
					ref: f,
					class: ["vfm__content vfm--outline-none", [d.contentClass, { "vfm--prevent-auto": d.background === "interactive" }]],
					style: d.contentStyle,
					tabindex: "0"
				}, (0, vue.unref)(Ue), { onMousedown: y[6] || (y[6] = () => (0, vue.unref)(Te)()) }), [(0, vue.renderSlot)(d.$slots, "default", (0, vue.normalizeProps)((0, vue.guardReactiveProps)({ close: Ze }))), d.showSwipeBanner ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
					key: 0,
					ref_key: "swipeBannerEl",
					ref: $e,
					class: "vfm-swipe-banner-container",
					onTouchstart: y[2] || (y[2] = (T) => (0, vue.unref)(Se)(T))
				}, [(0, vue.renderSlot)(d.$slots, "swipe-banner", {}, () => [(0, vue.createElementVNode)("div", {
					class: "vfm-swipe-banner-back",
					onTouchstart: y[0] || (y[0] = (T) => d.swipeToClose === "left" && T.preventDefault())
				}, null, 32), (0, vue.createElementVNode)("div", {
					class: "vfm-swipe-banner-forward",
					onTouchstart: y[1] || (y[1] = (T) => d.swipeToClose === "right" && T.preventDefault())
				}, null, 32)])], 544)) : !d.showSwipeBanner && d.preventNavigationGestures ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
					key: 1,
					class: "vfm-swipe-banner-container",
					onTouchstart: y[5] || (y[5] = (T) => (0, vue.unref)(Se)(T))
				}, [(0, vue.createElementVNode)("div", {
					class: "vfm-swipe-banner-back",
					onTouchstart: y[3] || (y[3] = (T) => d.swipeToClose === "left" && T.preventDefault())
				}, null, 32), (0, vue.createElementVNode)("div", {
					class: "vfm-swipe-banner-forward",
					onTouchstart: y[4] || (y[4] = (T) => d.swipeToClose === "right" && T.preventDefault())
				}, null, 32)], 32)) : (0, vue.createCommentVNode)("", !0)], 16)), [[vue.vShow, d.displayDirective !== "show" || (0, vue.unref)(b)], [(0, vue.unref)(ve), d.displayDirective !== "visible" || (0, vue.unref)(b)]]) : (0, vue.createCommentVNode)("", !0)]),
				_: 3
			}, 16)], 16)), [[vue.vShow, d.displayDirective !== "show" || (0, vue.unref)(i)], [(0, vue.unref)(ve), d.displayDirective !== "visible" || (0, vue.unref)(i)]]) : (0, vue.createCommentVNode)("", !0)], 8, ["to", "disabled"]));
		}
	});
	function K() {
		const e = Ao();
		if (!e) throw new Error(`[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`);
		return e;
	}
	var __defProp = Object.defineProperty;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __spreadValues = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) {
			for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	var isFunction = (value) => typeof value === "function";
	var isString = (value) => typeof value === "string";
	var isNonEmptyString = (value) => isString(value) && value.trim().length > 0;
	var isNumber = (value) => typeof value === "number";
	var isUndefined = (value) => typeof value === "undefined";
	var isObject = (value) => typeof value === "object" && value !== null;
	var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
	var isTouchEvent = (event) => window.TouchEvent && event instanceof TouchEvent;
	var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
	var isVueComponent = (c) => isFunction(c) || isObject(c);
	var isToastContent = (obj) => !isUndefined(obj) && (isString(obj) || isVueComponent(obj) || isToastComponent(obj));
	var isDOMRect = (obj) => isObject(obj) && [
		"height",
		"width",
		"right",
		"left",
		"top",
		"bottom"
	].every((p) => isNumber(obj[p]));
	var hasProp = (obj, propKey) => (isObject(obj) || isFunction(obj)) && propKey in obj;
	var getId = ((i) => () => i++)(0);
	function getX(event) {
		return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
	}
	function getY(event) {
		return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
	}
	var removeElement = (el) => {
		if (!isUndefined(el.remove)) el.remove();
		else if (el.parentNode) el.parentNode.removeChild(el);
	};
	var getVueComponentFromObj = (obj) => {
		if (isToastComponent(obj)) return getVueComponentFromObj(obj.component);
		if (isJSX(obj)) return (0, vue.defineComponent)({ render() {
			return obj;
		} });
		return typeof obj === "string" ? obj : (0, vue.toRaw)((0, vue.unref)(obj));
	};
	var normalizeToastComponent = (obj) => {
		if (typeof obj === "string") return obj;
		const props = hasProp(obj, "props") && isObject(obj.props) ? obj.props : {};
		const listeners = hasProp(obj, "listeners") && isObject(obj.listeners) ? obj.listeners : {};
		return {
			component: getVueComponentFromObj(obj),
			props,
			listeners
		};
	};
	var isBrowser = () => typeof window !== "undefined";
	var EventBus = class {
		constructor() {
			this.allHandlers = {};
		}
		getHandlers(eventType) {
			return this.allHandlers[eventType] || [];
		}
		on(eventType, handler) {
			const handlers = this.getHandlers(eventType);
			handlers.push(handler);
			this.allHandlers[eventType] = handlers;
		}
		off(eventType, handler) {
			const handlers = this.getHandlers(eventType);
			handlers.splice(handlers.indexOf(handler) >>> 0, 1);
		}
		emit(eventType, event) {
			this.getHandlers(eventType).forEach((handler) => handler(event));
		}
	};
	var isEventBusInterface = (e) => [
		"on",
		"off",
		"emit"
	].every((f) => hasProp(e, f) && isFunction(e[f]));
	var TYPE;
	(function(TYPE2) {
		TYPE2["SUCCESS"] = "success";
		TYPE2["ERROR"] = "error";
		TYPE2["WARNING"] = "warning";
		TYPE2["INFO"] = "info";
		TYPE2["DEFAULT"] = "default";
	})(TYPE || (TYPE = {}));
	var POSITION;
	(function(POSITION2) {
		POSITION2["TOP_LEFT"] = "top-left";
		POSITION2["TOP_CENTER"] = "top-center";
		POSITION2["TOP_RIGHT"] = "top-right";
		POSITION2["BOTTOM_LEFT"] = "bottom-left";
		POSITION2["BOTTOM_CENTER"] = "bottom-center";
		POSITION2["BOTTOM_RIGHT"] = "bottom-right";
	})(POSITION || (POSITION = {}));
	var EVENTS;
	(function(EVENTS2) {
		EVENTS2["ADD"] = "add";
		EVENTS2["DISMISS"] = "dismiss";
		EVENTS2["UPDATE"] = "update";
		EVENTS2["CLEAR"] = "clear";
		EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
	})(EVENTS || (EVENTS = {}));
	var VT_NAMESPACE = "Vue-Toastification";
	var COMMON = {
		type: {
			type: String,
			default: TYPE.DEFAULT
		},
		classNames: {
			type: [String, Array],
			default: () => []
		},
		trueBoolean: {
			type: Boolean,
			default: true
		}
	};
	var ICON = {
		type: COMMON.type,
		customIcon: {
			type: [
				String,
				Boolean,
				Object,
				Function
			],
			default: true
		}
	};
	var CLOSE_BUTTON = {
		component: {
			type: [
				String,
				Object,
				Function,
				Boolean
			],
			default: "button"
		},
		classNames: COMMON.classNames,
		showOnHover: {
			type: Boolean,
			default: false
		},
		ariaLabel: {
			type: String,
			default: "close"
		}
	};
	var PROGRESS_BAR = {
		timeout: {
			type: [Number, Boolean],
			default: 5e3
		},
		hideProgressBar: {
			type: Boolean,
			default: false
		},
		isRunning: {
			type: Boolean,
			default: false
		}
	};
	var TRANSITION = { transition: {
		type: [Object, String],
		default: `${VT_NAMESPACE}__bounce`
	} };
	var propValidators_default = {
		CORE_TOAST: {
			position: {
				type: String,
				default: POSITION.TOP_RIGHT
			},
			draggable: COMMON.trueBoolean,
			draggablePercent: {
				type: Number,
				default: .6
			},
			pauseOnFocusLoss: COMMON.trueBoolean,
			pauseOnHover: COMMON.trueBoolean,
			closeOnClick: COMMON.trueBoolean,
			timeout: PROGRESS_BAR.timeout,
			hideProgressBar: PROGRESS_BAR.hideProgressBar,
			toastClassName: COMMON.classNames,
			bodyClassName: COMMON.classNames,
			icon: ICON.customIcon,
			closeButton: CLOSE_BUTTON.component,
			closeButtonClassName: CLOSE_BUTTON.classNames,
			showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
			accessibility: {
				type: Object,
				default: () => ({
					toastRole: "alert",
					closeButtonLabel: "close"
				})
			},
			rtl: {
				type: Boolean,
				default: false
			},
			eventBus: {
				type: Object,
				required: false,
				default: () => new EventBus()
			}
		},
		TOAST: {
			id: {
				type: [String, Number],
				required: true,
				default: 0
			},
			type: COMMON.type,
			content: {
				type: [
					String,
					Object,
					Function
				],
				required: true,
				default: ""
			},
			onClick: {
				type: Function,
				default: void 0
			},
			onClose: {
				type: Function,
				default: void 0
			}
		},
		CONTAINER: {
			container: {
				type: [Object, Function],
				default: () => document.body
			},
			newestOnTop: COMMON.trueBoolean,
			maxToasts: {
				type: Number,
				default: 20
			},
			transition: TRANSITION.transition,
			toastDefaults: Object,
			filterBeforeCreate: {
				type: Function,
				default: (toast) => toast
			},
			filterToasts: {
				type: Function,
				default: (toasts) => toasts
			},
			containerClassName: COMMON.classNames,
			onMounted: Function,
			shareAppContext: [Boolean, Object]
		},
		PROGRESS_BAR,
		ICON,
		TRANSITION,
		CLOSE_BUTTON
	};
	var VtProgressBar_default = (0, vue.defineComponent)({
		name: "VtProgressBar",
		props: propValidators_default.PROGRESS_BAR,
		data() {
			return { hasClass: true };
		},
		computed: {
			style() {
				return {
					animationDuration: `${this.timeout}ms`,
					animationPlayState: this.isRunning ? "running" : "paused",
					opacity: this.hideProgressBar ? 0 : 1
				};
			},
			cpClass() {
				return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
			}
		},
		watch: { timeout() {
			this.hasClass = false;
			this.$nextTick(() => this.hasClass = true);
		} },
		mounted() {
			this.$el.addEventListener("animationend", this.animationEnded);
		},
		beforeUnmount() {
			this.$el.removeEventListener("animationend", this.animationEnded);
		},
		methods: { animationEnded() {
			this.$emit("close-toast");
		} }
	});
	function render(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
			style: (0, vue.normalizeStyle)(_ctx.style),
			class: (0, vue.normalizeClass)(_ctx.cpClass)
		}, null, 6);
	}
	VtProgressBar_default.render = render;
	var VtProgressBar_default2 = VtProgressBar_default;
	var VtCloseButton_default = (0, vue.defineComponent)({
		name: "VtCloseButton",
		props: propValidators_default.CLOSE_BUTTON,
		computed: {
			buttonComponent() {
				if (this.component !== false) return getVueComponentFromObj(this.component);
				return "button";
			},
			classes() {
				const classes = [`${VT_NAMESPACE}__close-button`];
				if (this.showOnHover) classes.push("show-on-hover");
				return classes.concat(this.classNames);
			}
		}
	});
	var _hoisted_1$8 = (0, vue.createTextVNode)(" × ");
	function render2(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(_ctx.buttonComponent), (0, vue.mergeProps)({
			"aria-label": _ctx.ariaLabel,
			class: _ctx.classes
		}, _ctx.$attrs), {
			default: (0, vue.withCtx)(() => [_hoisted_1$8]),
			_: 1
		}, 16, ["aria-label", "class"]);
	}
	VtCloseButton_default.render = render2;
	var VtCloseButton_default2 = VtCloseButton_default;
	var VtSuccessIcon_default = {};
	var _hoisted_12$1 = {
		"aria-hidden": "true",
		focusable: "false",
		"data-prefix": "fas",
		"data-icon": "check-circle",
		class: "svg-inline--fa fa-check-circle fa-w-16",
		role: "img",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512"
	};
	var _hoisted_3$3 = [(0, vue.createElementVNode)("path", {
		fill: "currentColor",
		d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
	}, null, -1)];
	function render3(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_12$1, _hoisted_3$3);
	}
	VtSuccessIcon_default.render = render3;
	var VtSuccessIcon_default2 = VtSuccessIcon_default;
	var VtInfoIcon_default = {};
	var _hoisted_13$1 = {
		"aria-hidden": "true",
		focusable: "false",
		"data-prefix": "fas",
		"data-icon": "info-circle",
		class: "svg-inline--fa fa-info-circle fa-w-16",
		role: "img",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512"
	};
	var _hoisted_32$1 = [(0, vue.createElementVNode)("path", {
		fill: "currentColor",
		d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
	}, null, -1)];
	function render4(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_13$1, _hoisted_32$1);
	}
	VtInfoIcon_default.render = render4;
	var VtInfoIcon_default2 = VtInfoIcon_default;
	var VtWarningIcon_default = {};
	var _hoisted_14$1 = {
		"aria-hidden": "true",
		focusable: "false",
		"data-prefix": "fas",
		"data-icon": "exclamation-circle",
		class: "svg-inline--fa fa-exclamation-circle fa-w-16",
		role: "img",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512"
	};
	var _hoisted_33$1 = [(0, vue.createElementVNode)("path", {
		fill: "currentColor",
		d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
	}, null, -1)];
	function render5(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_14$1, _hoisted_33$1);
	}
	VtWarningIcon_default.render = render5;
	var VtWarningIcon_default2 = VtWarningIcon_default;
	var VtErrorIcon_default = {};
	var _hoisted_15$1 = {
		"aria-hidden": "true",
		focusable: "false",
		"data-prefix": "fas",
		"data-icon": "exclamation-triangle",
		class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
		role: "img",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 576 512"
	};
	var _hoisted_34$1 = [(0, vue.createElementVNode)("path", {
		fill: "currentColor",
		d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
	}, null, -1)];
	function render6(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_15$1, _hoisted_34$1);
	}
	VtErrorIcon_default.render = render6;
	var VtErrorIcon_default2 = VtErrorIcon_default;
	var VtIcon_default = (0, vue.defineComponent)({
		name: "VtIcon",
		props: propValidators_default.ICON,
		computed: {
			customIconChildren() {
				return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
			},
			customIconClass() {
				if (isString(this.customIcon)) return this.trimValue(this.customIcon);
				else if (hasProp(this.customIcon, "iconClass")) return this.trimValue(this.customIcon.iconClass);
				return "";
			},
			customIconTag() {
				if (hasProp(this.customIcon, "iconTag")) return this.trimValue(this.customIcon.iconTag, "i");
				return "i";
			},
			hasCustomIcon() {
				return this.customIconClass.length > 0;
			},
			component() {
				if (this.hasCustomIcon) return this.customIconTag;
				if (isToastContent(this.customIcon)) return getVueComponentFromObj(this.customIcon);
				return this.iconTypeComponent;
			},
			iconTypeComponent() {
				return {
					[TYPE.DEFAULT]: VtInfoIcon_default2,
					[TYPE.INFO]: VtInfoIcon_default2,
					[TYPE.SUCCESS]: VtSuccessIcon_default2,
					[TYPE.ERROR]: VtErrorIcon_default2,
					[TYPE.WARNING]: VtWarningIcon_default2
				}[this.type];
			},
			iconClasses() {
				const classes = [`${VT_NAMESPACE}__icon`];
				if (this.hasCustomIcon) return classes.concat(this.customIconClass);
				return classes;
			}
		},
		methods: { trimValue(value, empty = "") {
			return isNonEmptyString(value) ? value.trim() : empty;
		} }
	});
	function render7(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(_ctx.component), { class: (0, vue.normalizeClass)(_ctx.iconClasses) }, {
			default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(_ctx.customIconChildren), 1)]),
			_: 1
		}, 8, ["class"]);
	}
	VtIcon_default.render = render7;
	var VtToast_default = (0, vue.defineComponent)({
		name: "VtToast",
		components: {
			ProgressBar: VtProgressBar_default2,
			CloseButton: VtCloseButton_default2,
			Icon: VtIcon_default
		},
		inheritAttrs: false,
		props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
		data() {
			return {
				isRunning: true,
				disableTransitions: false,
				beingDragged: false,
				dragStart: 0,
				dragPos: {
					x: 0,
					y: 0
				},
				dragRect: {}
			};
		},
		computed: {
			classes() {
				const classes = [
					`${VT_NAMESPACE}__toast`,
					`${VT_NAMESPACE}__toast--${this.type}`,
					`${this.position}`
				].concat(this.toastClassName);
				if (this.disableTransitions) classes.push("disable-transition");
				if (this.rtl) classes.push(`${VT_NAMESPACE}__toast--rtl`);
				return classes;
			},
			bodyClasses() {
				return [`${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`].concat(this.bodyClassName);
			},
			draggableStyle() {
				if (this.dragStart === this.dragPos.x) return {};
				else if (this.beingDragged) return {
					transform: `translateX(${this.dragDelta}px)`,
					opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
				};
				else return {
					transition: "transform 0.2s, opacity 0.2s",
					transform: "translateX(0)",
					opacity: 1
				};
			},
			dragDelta() {
				return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
			},
			removalDistance() {
				if (isDOMRect(this.dragRect)) return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
				return 0;
			}
		},
		mounted() {
			if (this.draggable) this.draggableSetup();
			if (this.pauseOnFocusLoss) this.focusSetup();
		},
		beforeUnmount() {
			if (this.draggable) this.draggableCleanup();
			if (this.pauseOnFocusLoss) this.focusCleanup();
		},
		methods: {
			hasProp,
			getVueComponentFromObj,
			closeToast() {
				this.eventBus.emit(EVENTS.DISMISS, this.id);
			},
			clickHandler() {
				if (this.onClick) this.onClick(this.closeToast);
				if (this.closeOnClick) {
					if (!this.beingDragged || this.dragStart === this.dragPos.x) this.closeToast();
				}
			},
			timeoutHandler() {
				this.closeToast();
			},
			hoverPause() {
				if (this.pauseOnHover) this.isRunning = false;
			},
			hoverPlay() {
				if (this.pauseOnHover) this.isRunning = true;
			},
			focusPause() {
				this.isRunning = false;
			},
			focusPlay() {
				this.isRunning = true;
			},
			focusSetup() {
				addEventListener("blur", this.focusPause);
				addEventListener("focus", this.focusPlay);
			},
			focusCleanup() {
				removeEventListener("blur", this.focusPause);
				removeEventListener("focus", this.focusPlay);
			},
			draggableSetup() {
				const element = this.$el;
				element.addEventListener("touchstart", this.onDragStart, { passive: true });
				element.addEventListener("mousedown", this.onDragStart);
				addEventListener("touchmove", this.onDragMove, { passive: false });
				addEventListener("mousemove", this.onDragMove);
				addEventListener("touchend", this.onDragEnd);
				addEventListener("mouseup", this.onDragEnd);
			},
			draggableCleanup() {
				const element = this.$el;
				element.removeEventListener("touchstart", this.onDragStart);
				element.removeEventListener("mousedown", this.onDragStart);
				removeEventListener("touchmove", this.onDragMove);
				removeEventListener("mousemove", this.onDragMove);
				removeEventListener("touchend", this.onDragEnd);
				removeEventListener("mouseup", this.onDragEnd);
			},
			onDragStart(event) {
				this.beingDragged = true;
				this.dragPos = {
					x: getX(event),
					y: getY(event)
				};
				this.dragStart = getX(event);
				this.dragRect = this.$el.getBoundingClientRect();
			},
			onDragMove(event) {
				if (this.beingDragged) {
					event.preventDefault();
					if (this.isRunning) this.isRunning = false;
					this.dragPos = {
						x: getX(event),
						y: getY(event)
					};
				}
			},
			onDragEnd() {
				if (this.beingDragged) if (Math.abs(this.dragDelta) >= this.removalDistance) {
					this.disableTransitions = true;
					this.$nextTick(() => this.closeToast());
				} else setTimeout(() => {
					this.beingDragged = false;
					if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) this.isRunning = false;
					else this.isRunning = true;
				});
			}
		}
	});
	var _hoisted_16$1 = ["role"];
	function render8(_ctx, _cache) {
		const _component_Icon = (0, vue.resolveComponent)("Icon");
		const _component_CloseButton = (0, vue.resolveComponent)("CloseButton");
		const _component_ProgressBar = (0, vue.resolveComponent)("ProgressBar");
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
			class: (0, vue.normalizeClass)(_ctx.classes),
			style: (0, vue.normalizeStyle)(_ctx.draggableStyle),
			onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
			onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
			onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
		}, [
			_ctx.icon ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_Icon, {
				key: 0,
				"custom-icon": _ctx.icon,
				type: _ctx.type
			}, null, 8, ["custom-icon", "type"])) : (0, vue.createCommentVNode)("v-if", true),
			(0, vue.createElementVNode)("div", {
				role: _ctx.accessibility.toastRole || "alert",
				class: (0, vue.normalizeClass)(_ctx.bodyClasses)
			}, [typeof _ctx.content === "string" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createTextVNode)((0, vue.toDisplayString)(_ctx.content), 1)], 2112)) : ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(_ctx.getVueComponentFromObj(_ctx.content)), (0, vue.mergeProps)({
				key: 1,
				"toast-id": _ctx.id
			}, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, (0, vue.toHandlers)(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))], 10, _hoisted_16$1),
			!!_ctx.closeButton ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_CloseButton, {
				key: 1,
				component: _ctx.closeButton,
				"class-names": _ctx.closeButtonClassName,
				"show-on-hover": _ctx.showCloseButtonOnHover,
				"aria-label": _ctx.accessibility.closeButtonLabel,
				onClick: (0, vue.withModifiers)(_ctx.closeToast, ["stop"])
			}, null, 8, [
				"component",
				"class-names",
				"show-on-hover",
				"aria-label",
				"onClick"
			])) : (0, vue.createCommentVNode)("v-if", true),
			_ctx.timeout ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_ProgressBar, {
				key: 2,
				"is-running": _ctx.isRunning,
				"hide-progress-bar": _ctx.hideProgressBar,
				timeout: _ctx.timeout,
				onCloseToast: _ctx.timeoutHandler
			}, null, 8, [
				"is-running",
				"hide-progress-bar",
				"timeout",
				"onCloseToast"
			])) : (0, vue.createCommentVNode)("v-if", true)
		], 38);
	}
	VtToast_default.render = render8;
	var VtToast_default2 = VtToast_default;
	var VtTransition_default = (0, vue.defineComponent)({
		name: "VtTransition",
		props: propValidators_default.TRANSITION,
		emits: ["leave"],
		methods: {
			hasProp,
			leave(el) {
				if (el instanceof HTMLElement) {
					el.style.left = el.offsetLeft + "px";
					el.style.top = el.offsetTop + "px";
					el.style.width = getComputedStyle(el).width;
					el.style.position = "absolute";
				}
			}
		}
	});
	function render9(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createBlock)(vue.TransitionGroup, {
			tag: "div",
			"enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
			"move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
			"leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
			onLeave: _ctx.leave
		}, {
			default: (0, vue.withCtx)(() => [(0, vue.renderSlot)(_ctx.$slots, "default")]),
			_: 3
		}, 8, [
			"enter-active-class",
			"move-class",
			"leave-active-class",
			"onLeave"
		]);
	}
	VtTransition_default.render = render9;
	var VtToastContainer_default = (0, vue.defineComponent)({
		name: "VueToastification",
		devtools: { hide: true },
		components: {
			Toast: VtToast_default2,
			VtTransition: VtTransition_default
		},
		props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
		data() {
			return {
				count: 0,
				positions: Object.values(POSITION),
				toasts: {},
				defaults: {}
			};
		},
		computed: {
			toastArray() {
				return Object.values(this.toasts);
			},
			filteredToasts() {
				return this.defaults.filterToasts(this.toastArray);
			}
		},
		beforeMount() {
			const events = this.eventBus;
			events.on(EVENTS.ADD, this.addToast);
			events.on(EVENTS.CLEAR, this.clearToasts);
			events.on(EVENTS.DISMISS, this.dismissToast);
			events.on(EVENTS.UPDATE, this.updateToast);
			events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
			this.defaults = this.$props;
		},
		mounted() {
			this.setup(this.container);
		},
		methods: {
			async setup(container) {
				if (isFunction(container)) container = await container();
				removeElement(this.$el);
				container.appendChild(this.$el);
			},
			setToast(props) {
				if (!isUndefined(props.id)) this.toasts[props.id] = props;
			},
			addToast(params) {
				params.content = normalizeToastComponent(params.content);
				const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
				const toast = this.defaults.filterBeforeCreate(props, this.toastArray);
				toast && this.setToast(toast);
			},
			dismissToast(id) {
				const toast = this.toasts[id];
				if (!isUndefined(toast) && !isUndefined(toast.onClose)) toast.onClose();
				delete this.toasts[id];
			},
			clearToasts() {
				Object.keys(this.toasts).forEach((id) => {
					this.dismissToast(id);
				});
			},
			getPositionToasts(position) {
				const toasts = this.filteredToasts.filter((toast) => toast.position === position).slice(0, this.defaults.maxToasts);
				return this.defaults.newestOnTop ? toasts.reverse() : toasts;
			},
			updateDefaults(update) {
				if (!isUndefined(update.container)) this.setup(update.container);
				this.defaults = Object.assign({}, this.defaults, update);
			},
			updateToast({ id, options, create }) {
				if (this.toasts[id]) {
					if (options.timeout && options.timeout === this.toasts[id].timeout) options.timeout++;
					this.setToast(Object.assign({}, this.toasts[id], options));
				} else if (create) this.addToast(Object.assign({}, { id }, options));
			},
			getClasses(position) {
				return [`${VT_NAMESPACE}__container`, position].concat(this.defaults.containerClassName);
			}
		}
	});
	function render10(_ctx, _cache) {
		const _component_Toast = (0, vue.resolveComponent)("Toast");
		const _component_VtTransition = (0, vue.resolveComponent)("VtTransition");
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(_ctx.positions, (pos) => {
			return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", { key: pos }, [(0, vue.createVNode)(_component_VtTransition, {
				transition: _ctx.defaults.transition,
				class: (0, vue.normalizeClass)(_ctx.getClasses(pos))
			}, {
				default: (0, vue.withCtx)(() => [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(_ctx.getPositionToasts(pos), (toast) => {
					return (0, vue.openBlock)(), (0, vue.createBlock)(_component_Toast, (0, vue.mergeProps)({ key: toast.id }, toast), null, 16);
				}), 128))]),
				_: 2
			}, 1032, ["transition", "class"])]);
		}), 128))]);
	}
	VtToastContainer_default.render = render10;
	var VtToastContainer_default2 = VtToastContainer_default;
	var buildInterface = (globalOptions = {}, mountContainer = true) => {
		const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();
		if (mountContainer) (0, vue.nextTick)(() => {
			const app = (0, vue.createApp)(VtToastContainer_default2, __spreadValues({}, globalOptions));
			const component = app.mount(document.createElement("div"));
			const onMounted = globalOptions.onMounted;
			if (!isUndefined(onMounted)) onMounted(component, app);
			if (globalOptions.shareAppContext) {
				const baseApp = globalOptions.shareAppContext;
				if (baseApp === true) console.warn(`[${VT_NAMESPACE}] App to share context with was not provided.`);
				else {
					app._context.components = baseApp._context.components;
					app._context.directives = baseApp._context.directives;
					app._context.mixins = baseApp._context.mixins;
					app._context.provides = baseApp._context.provides;
					app.config.globalProperties = baseApp.config.globalProperties;
				}
			}
		});
		const toast = (content, options) => {
			const props = Object.assign({}, {
				id: getId(),
				type: TYPE.DEFAULT
			}, options, { content });
			events.emit(EVENTS.ADD, props);
			return props.id;
		};
		toast.clear = () => events.emit(EVENTS.CLEAR, void 0);
		toast.updateDefaults = (update) => {
			events.emit(EVENTS.UPDATE_DEFAULTS, update);
		};
		toast.dismiss = (id) => {
			events.emit(EVENTS.DISMISS, id);
		};
		function updateToast(id, { content, options }, create = false) {
			const opt = Object.assign({}, options, { content });
			events.emit(EVENTS.UPDATE, {
				id,
				options: opt,
				create
			});
		}
		toast.update = updateToast;
		toast.success = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.SUCCESS }));
		toast.info = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.INFO }));
		toast.error = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.ERROR }));
		toast.warning = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.WARNING }));
		return toast;
	};
	var createMockToastInterface = () => {
		const toast = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
		return new Proxy(toast, { get() {
			return toast;
		} });
	};
	function createToastInterface(optionsOrEventBus) {
		if (!isBrowser()) return createMockToastInterface();
		if (isEventBusInterface(optionsOrEventBus)) return buildInterface({ eventBus: optionsOrEventBus }, false);
		return buildInterface(optionsOrEventBus, true);
	}
	var toastInjectionKey = Symbol("VueToastification");
	var globalEventBus = new EventBus();
	var VueToastificationPlugin = (App, options) => {
		if ((options == null ? void 0 : options.shareAppContext) === true) options.shareAppContext = App;
		const inter = createToastInterface(__spreadValues({ eventBus: globalEventBus }, options));
		App.provide(toastInjectionKey, inter);
	};
	var useToast = (eventBus) => {
		if (eventBus) return createToastInterface(eventBus);
		const toast = (0, vue.getCurrentInstance)() ? (0, vue.inject)(toastInjectionKey, void 0) : void 0;
		return toast ? toast : createToastInterface(globalEventBus);
	};
	var src_default = VueToastificationPlugin;
	_css(".Vue-Toastification__container{z-index:9999;box-sizing:border-box;color:#fff;pointer-events:none;flex-direction:column;width:600px;min-height:100%;padding:4px;display:flex;position:fixed}@media only screen and (width>=600px){.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:1em}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{flex-direction:column-reverse;bottom:1em}.Vue-Toastification__container.top-left,.Vue-Toastification__container.bottom-left{left:1em}.Vue-Toastification__container.top-left .Vue-Toastification__toast,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast{margin-right:auto}@supports not ((-moz-appearance:none)){.Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl{margin-right:unset;margin-left:auto}}.Vue-Toastification__container.top-right,.Vue-Toastification__container.bottom-right{right:1em}.Vue-Toastification__container.top-right .Vue-Toastification__toast,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast{margin-left:auto}@supports not ((-moz-appearance:none)){.Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl{margin-left:unset;margin-right:auto}}.Vue-Toastification__container.top-center,.Vue-Toastification__container.bottom-center{margin-left:-300px;left:50%}.Vue-Toastification__container.top-center .Vue-Toastification__toast,.Vue-Toastification__container.bottom-center .Vue-Toastification__toast{margin-left:auto;margin-right:auto}}@media only screen and (width<=600px){.Vue-Toastification__container{width:100vw;margin:0;padding:0;left:0}.Vue-Toastification__container .Vue-Toastification__toast{width:100%}.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:0}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{flex-direction:column-reverse;bottom:0}}.Vue-Toastification__toast{box-sizing:border-box;pointer-events:auto;direction:ltr;border-radius:8px;justify-content:space-between;min-width:326px;max-width:600px;min-height:64px;max-height:800px;margin-bottom:1rem;padding:22px 24px;font-family:Lato,Helvetica,Roboto,Arial,sans-serif;display:inline-flex;position:relative;overflow:hidden;transform:translateZ(0);box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d}.Vue-Toastification__toast--rtl{direction:rtl}.Vue-Toastification__toast--default{color:#fff;background-color:#1976d2}.Vue-Toastification__toast--info{color:#fff;background-color:#2196f3}.Vue-Toastification__toast--success{color:#fff;background-color:#4caf50}.Vue-Toastification__toast--error{color:#fff;background-color:#ff5252}.Vue-Toastification__toast--warning{color:#fff;background-color:#ffc107}@media only screen and (width<=600px){.Vue-Toastification__toast{border-radius:0;margin-bottom:.5rem}}.Vue-Toastification__toast-body{word-break:break-word;white-space:pre-wrap;flex:1;font-size:16px;line-height:24px}.Vue-Toastification__toast-component-body{flex:1}.Vue-Toastification__toast.disable-transition{animation:none!important}.Vue-Toastification__close-button{cursor:pointer;color:#fff;opacity:.3;background:0 0;border:none;outline:none;align-items:center;padding:0 0 0 10px;font-size:24px;font-weight:700;line-height:24px;transition:visibility,opacity .2s linear}.Vue-Toastification__close-button:hover,.Vue-Toastification__close-button:focus{opacity:1}.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover{opacity:0}.Vue-Toastification__toast--rtl .Vue-Toastification__close-button{padding-left:unset;padding-right:10px}@keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Vue-Toastification__progress-bar{z-index:10000;transform-origin:0;background-color:#ffffffb3;width:100%;height:5px;animation:linear forwards scale-x-frames;position:absolute;bottom:0;left:0}.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar{right:0;left:unset;transform-origin:100%}.Vue-Toastification__icon{background:0 0;border:none;outline:none;align-items:center;width:20px;height:100%;margin:auto 18px auto 0;padding:0;transition:all .3s}.Vue-Toastification__toast--rtl .Vue-Toastification__icon{margin:auto 0 auto 18px}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate(3000px)}60%{opacity:1;transform:translate(-25px)}75%{transform:translate(10px)}90%{transform:translate(-5px)}to{transform:none}}@keyframes bounceOutRight{40%{opacity:1;transform:translate(-20px)}to{opacity:0;transform:translate(1000px)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate(-3000px)}60%{opacity:1;transform:translate(25px)}75%{transform:translate(-10px)}90%{transform:translate(5px)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate(20px)}to{opacity:0;transform:translate(-2000px)}}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translateY(3000px)}60%{opacity:1;transform:translateY(-20px)}75%{transform:translateY(10px)}90%{transform:translateY(-5px)}to{transform:translate(0,0)}}@keyframes bounceOutUp{20%{transform:translateY(-10px)}40%,45%{opacity:1;transform:translateY(20px)}to{opacity:0;transform:translateY(-2000px)}}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translateY(-3000px)}60%{opacity:1;transform:translateY(25px)}75%{transform:translateY(-10px)}90%{transform:translateY(5px)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translateY(10px)}40%,45%{opacity:1;transform:translateY(-20px)}to{opacity:0;transform:translateY(2000px)}}.Vue-Toastification__bounce-enter-active.top-left,.Vue-Toastification__bounce-enter-active.bottom-left{animation-name:bounceInLeft}.Vue-Toastification__bounce-enter-active.top-right,.Vue-Toastification__bounce-enter-active.bottom-right{animation-name:bounceInRight}.Vue-Toastification__bounce-enter-active.top-center{animation-name:bounceInDown}.Vue-Toastification__bounce-enter-active.bottom-center{animation-name:bounceInUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left{animation-name:bounceOutLeft}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right{animation-name:bounceOutRight}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center{animation-name:bounceOutUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center{animation-name:bounceOutDown}.Vue-Toastification__bounce-leave-active,.Vue-Toastification__bounce-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__bounce-move{transition-property:all;transition-duration:.4s;transition-timing-function:ease-in-out}@keyframes fadeOutTop{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-50px)}}@keyframes fadeOutLeft{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-50px)}}@keyframes fadeOutBottom{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(50px)}}@keyframes fadeOutRight{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(50px)}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}@keyframes fadeInTop{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInBottom{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}.Vue-Toastification__fade-enter-active.top-left,.Vue-Toastification__fade-enter-active.bottom-left{animation-name:fadeInLeft}.Vue-Toastification__fade-enter-active.top-right,.Vue-Toastification__fade-enter-active.bottom-right{animation-name:fadeInRight}.Vue-Toastification__fade-enter-active.top-center{animation-name:fadeInTop}.Vue-Toastification__fade-enter-active.bottom-center{animation-name:fadeInBottom}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left{animation-name:fadeOutLeft}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right{animation-name:fadeOutRight}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center{animation-name:fadeOutTop}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center{animation-name:fadeOutBottom}.Vue-Toastification__fade-leave-active,.Vue-Toastification__fade-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__fade-move{transition-property:all;transition-duration:.4s;transition-timing-function:ease-in-out}@keyframes slideInBlurredLeft{0%{transform-origin:100%;filter:blur(40px);opacity:0;transform:translate(-1000px)scaleX(2.5)scaleY(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}}@keyframes slideInBlurredTop{0%{transform-origin:50% 0;filter:blur(240px);opacity:0;transform:translateY(-1000px)scaleY(2.5)scaleX(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}}@keyframes slideInBlurredRight{0%{transform-origin:0%;filter:blur(40px);opacity:0;transform:translate(1000px)scaleX(2.5)scaleY(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}}@keyframes slideInBlurredBottom{0%{transform-origin:50% 100%;filter:blur(240px);opacity:0;transform:translateY(1000px)scaleY(2.5)scaleX(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}}@keyframes slideOutBlurredTop{0%{transform-origin:50% 0;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}to{transform-origin:50% 0;filter:blur(240px);opacity:0;transform:translateY(-1000px)scaleY(2)scaleX(.2)}}@keyframes slideOutBlurredBottom{0%{transform-origin:50%;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}to{transform-origin:50% 100%;filter:blur(240px);opacity:0;transform:translateY(1000px)scaleY(2)scaleX(.2)}}@keyframes slideOutBlurredLeft{0%{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}to{transform-origin:100%;filter:blur(40px);opacity:0;transform:translate(-1000px)scaleX(2)scaleY(.2)}}@keyframes slideOutBlurredRight{0%{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}to{transform-origin:0%;filter:blur(40px);opacity:0;transform:translate(1000px)scaleX(2)scaleY(.2)}}.Vue-Toastification__slideBlurred-enter-active.top-left,.Vue-Toastification__slideBlurred-enter-active.bottom-left{animation-name:slideInBlurredLeft}.Vue-Toastification__slideBlurred-enter-active.top-right,.Vue-Toastification__slideBlurred-enter-active.bottom-right{animation-name:slideInBlurredRight}.Vue-Toastification__slideBlurred-enter-active.top-center{animation-name:slideInBlurredTop}.Vue-Toastification__slideBlurred-enter-active.bottom-center{animation-name:slideInBlurredBottom}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left{animation-name:slideOutBlurredLeft}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right{animation-name:slideOutBlurredRight}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center{animation-name:slideOutBlurredTop}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center{animation-name:slideOutBlurredBottom}.Vue-Toastification__slideBlurred-leave-active,.Vue-Toastification__slideBlurred-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__slideBlurred-move{transition-property:all;transition-duration:.4s;transition-timing-function:ease-in-out}");
	var _GM = typeof GM != "undefined" ? GM : void 0;
	var _GM_addStyle = typeof GM_addStyle != "undefined" ? GM_addStyle : void 0;
	var _GM_addValueChangeListener = typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0;
	var _GM_getValue = typeof GM_getValue != "undefined" ? GM_getValue : void 0;
	var _GM_setClipboard = typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0;
	var _GM_setValue = typeof GM_setValue != "undefined" ? GM_setValue : void 0;
	var _GM_xmlhttpRequest = typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0;
	var _unsafeWindow = typeof unsafeWindow != "undefined" ? unsafeWindow : void 0;
	var ArchiveDownloadMethod = function(ArchiveDownloadMethod) {
		ArchiveDownloadMethod["Manual"] = "Manual";
		ArchiveDownloadMethod["HaH_Original"] = "download Original Resolution with H@H";
		ArchiveDownloadMethod["HaH_2400"] = "download 2400x Resolution with H@H";
		ArchiveDownloadMethod["Direct_Origin"] = "download Original Resolution directly";
		ArchiveDownloadMethod["Direct_Resample"] = "download Resample Resolution directly";
		return ArchiveDownloadMethod;
	}({});
	var MouseButton = function(MouseButton) {
		MouseButton["Left"] = "left";
		MouseButton["Right"] = "right";
		return MouseButton;
	}({});
	var GMVariable = class {
		_key;
		_value;
		constructor(key, defaultValue) {
			this._key = key;
			this._value = defaultValue;
		}
		get value() {
			return this._value;
		}
		set value(value) {
			this._value = value;
			_GM.setValue(this._key, this._value);
		}
		async initialize() {
			this._value = await _GM.getValue(this._key, this._value);
		}
	};
	var infiniteScrollSwitch = (0, vue.reactive)(new GMVariable("InfiniteScroll", true));
	var archiveButtonSwitch = (0, vue.reactive)(new GMVariable("archiveButton", true));
	var highlightSwitch = (0, vue.reactive)(new GMVariable("Highlight", true));
	var showHiddenGalleriesSwitch = (0, vue.reactive)(new GMVariable("ShowHiddenGalleries", false));
	var scrollByRowSwitch = (0, vue.reactive)(new GMVariable("ScrollByRow", true));
	var betterPopupSwitch = (0, vue.reactive)(new GMVariable("BetterPopup", true));
	var quickArchiveDownloadMethod = (0, vue.reactive)(new GMVariable("QuickDownloadMethod", "Manual"));
	var quickTorrentDownloadSwitch = (0, vue.reactive)(new GMVariable("QuickTorrentDownload", false));
	var loadAllGalleryImagesSwitch = (0, vue.reactive)(new GMVariable("LoadAllGalleryImages", true));
	var multipageViewerEnhancerSwitch = (0, vue.reactive)(new GMVariable("MultipageViewerEnhancer", true));
	var autoRedirectSwitch = (0, vue.reactive)(new GMVariable("AutoRedirect", false));
	var preventImageRemovalSwitch = (0, vue.reactive)(new GMVariable("PreventImageRemoval", false));
	var changePageByWheelAnyWhereSwitch = (0, vue.reactive)(new GMVariable("ChangePageByWheelAnyWhere", false));
	var magnifierSwitch = (0, vue.reactive)(new GMVariable("Magnifier", true));
	var magnifierActivationButton = (0, vue.reactive)(new GMVariable("MagnifierActivationButton", "left"));
	var magnifierToggleMode = (0, vue.reactive)(new GMVariable("MagnifierToggleMode", true));
	var magnifierDefaultScale = (0, vue.reactive)(new GMVariable("MagnifierDefaultScale", 1.5));
	var magnifierScaleStep = (0, vue.reactive)(new GMVariable("MagnifierScaleStep", .1));
	var magnifierLongPressThreshold = (0, vue.reactive)(new GMVariable("MagnifierLongPressThreshold", 200));
	var magnifierSensitivityX = (0, vue.reactive)(new GMVariable("MagnifierSensitivityX", 2));
	var magnifierSensitivityY = (0, vue.reactive)(new GMVariable("MagnifierSensitivityY", 2));
	var showJapaneseTitle = (0, vue.reactive)(new GMVariable("ShowJapaneseTitle", true));
	async function initializeMonkeySwitches() {
		await Promise.all([
			infiniteScrollSwitch.initialize(),
			archiveButtonSwitch.initialize(),
			highlightSwitch.initialize(),
			showHiddenGalleriesSwitch.initialize(),
			scrollByRowSwitch.initialize(),
			betterPopupSwitch.initialize(),
			quickArchiveDownloadMethod.initialize(),
			quickTorrentDownloadSwitch.initialize(),
			loadAllGalleryImagesSwitch.initialize(),
			multipageViewerEnhancerSwitch.initialize(),
			autoRedirectSwitch.initialize(),
			preventImageRemovalSwitch.initialize(),
			changePageByWheelAnyWhereSwitch.initialize(),
			magnifierSwitch.initialize(),
			magnifierActivationButton.initialize(),
			magnifierToggleMode.initialize(),
			magnifierDefaultScale.initialize(),
			magnifierScaleStep.initialize(),
			magnifierLongPressThreshold.initialize(),
			magnifierSensitivityX.initialize(),
			magnifierSensitivityY.initialize(),
			showJapaneseTitle.initialize()
		]);
	}
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	function getElement(selector, root = document) {
		return root.querySelector(selector);
	}
	function getElements(selector, root = document) {
		return root.querySelectorAll(selector);
	}
	async function getDoc(url, options) {
		const html = await (await fetch(url, options)).text();
		return new DOMParser().parseFromString(html, "text/html");
	}
	function scrollElement(element, { offset, absolute }) {
		if (offset) {
			element.scrollTop += offset;
			return;
		}
		if (absolute) element.scrollTop = absolute;
	}
	function isExHentai() {
		return _unsafeWindow.location.origin === "https://exhentai.org";
	}
	function setWheelStep({ containerSelector, itemsSelector }) {
		const container = getElement(containerSelector);
		if (!container) {
			console.warn(`container not found. selector: ${containerSelector}`);
			return;
		}
		let firstItemOfRows = getFirstItemOfRows(itemsSelector, container);
		if (firstItemOfRows.length === 0) {
			console.warn(`item not found. selector: ${itemsSelector}`);
			return;
		}
		new MutationObserver(() => {
			firstItemOfRows = getFirstItemOfRows(itemsSelector, container);
		}).observe(container, {
			childList: true,
			characterData: true
		});
		setContainerWheelEvent();
		function setContainerWheelEvent() {
			if (!container) return;
			container.addEventListener("mousewheel", ((event) => {
				if (!firstItemOfRows) return;
				const firstVisibleItemIndex = firstItemOfRows.findIndex((item) => Math.floor(item.getBoundingClientRect().bottom) > 0);
				const firstVisibleItem = firstItemOfRows[firstVisibleItemIndex];
				const boundingTop = Math.floor(firstVisibleItem.getBoundingClientRect().top);
				let nextIndex = firstVisibleItemIndex;
				if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) nextIndex++;
				else if (Math.sign(event.deltaY) === -1 && boundingTop >= -1) nextIndex--;
				if (nextIndex >= 0 && nextIndex < firstItemOfRows.length) {
					event.preventDefault();
					event.stopPropagation();
					firstItemOfRows[nextIndex].scrollIntoView();
				}
			}));
		}
	}
	function getFirstItemOfRows(selector, parent) {
		const item = getElement(selector, parent);
		if (!item) return [];
		if (parent.clientWidth === 0 || parent.clientWidth === 0) {
			console.warn(`container width is 0, do nothing. container: ${parent}`);
			return [];
		}
		if (item.clientWidth === 0) {
			console.warn(`item width is 0, do nothing. item: ${item}`);
			return [];
		}
		const firstItemOfRows = getElements(`${selector}:nth-child(${Math.floor(parent.clientWidth / item.clientWidth)}n + 1)`, parent);
		if (!firstItemOfRows) return [];
		return [...firstItemOfRows];
	}
	var Logger = class {
		_feature;
		_featureStyle;
		_scope;
		_scopeStyle;
		constructor(feature, scope) {
			this._feature = feature;
			this._scope = scope;
			this._featureStyle = "background: #777; border-radius: 5px;";
			this._scopeStyle = "background: #555; border-radius: 5px;";
		}
		set scope(scope) {
			this._scope = scope;
		}
		get prefix() {
			let prefix = `%c ${this._feature} `;
			if (this._scope) prefix += `%c ${this._scope} `;
			return prefix;
		}
		get style() {
			const style = [this._featureStyle];
			if (this._scope) style.push(this._scopeStyle);
			return style;
		}
		log(message) {
			console.log(this.prefix, ...this.style, message);
		}
		error(message, error) {
			console.error(this.prefix, ...this.style, message, error);
		}
	};
	var LoggerScopeDecorator = class {
		_logger;
		constructor(baseLogger, scope) {
			this._logger = baseLogger;
			this._logger.scope = scope;
		}
		log(message) {
			this._logger.log(message);
		}
		error(message, error) {
			this._logger.error(message, error);
		}
	};
	function getInfoDiv() {
		return getElement(".gm");
	}
	function getArchiveLinkAnchor() {
		return getElement("#gd5 > p:nth-child(2) a");
	}
	function getTorrentLinkAnchor() {
		return getElement("#gd5 > p:nth-child(3) a");
	}
	function getFavoritesLinkAnchor() {
		return getElement("#favoritelink");
	}
	function usePopups() {
		const archiveLinkAnchor = getArchiveLinkAnchor();
		const torrentLinkAnchor = getTorrentLinkAnchor();
		const torrentInnerHtml = (0, vue.ref)("");
		const archiveInnerHtml = (0, vue.ref)("");
		const favoriteInnerHtml = (0, vue.ref)("");
		async function preloadLinks() {
			[archiveInnerHtml.value, torrentInnerHtml.value, favoriteInnerHtml.value] = await Promise.all([
				fetchArchive(),
				fetchTorrents(),
				fetchFavorites()
			]);
		}
		async function fetchTorrents() {
			const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Torrent");
			logger.log("Start");
			const link = getDownloadLink(torrentLinkAnchor);
			if (!link) {
				logger.error("link not found.");
				return "";
			}
			const popupContent = getPopupContent(await getDoc(link), "#torrentinfo");
			if (!popupContent) {
				logger.error("popup content not found.");
				return "";
			}
			const listContainer = popupContent.querySelector(":scope > div:first-child");
			if (listContainer) listContainer.style.height = "auto";
			const uploadSection = popupContent.querySelector(":scope > div:last-child");
			if (uploadSection) {
				uploadSection.style.margin = "0";
				uploadSection.style.borderTop = "none";
			}
			logger.log("End");
			return popupContent.innerHTML;
		}
		async function fetchArchive(url) {
			const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Archive");
			logger.log("Start");
			const link = url || getDownloadLink(archiveLinkAnchor);
			if (!link) {
				logger.error("link not found.");
				return "";
			}
			const popupContent = getPopupContent(await getDoc(link), "#db");
			if (!popupContent) {
				logger.error("popup content not found.");
				return "";
			}
			logger.log("End");
			return popupContent.innerHTML;
		}
		async function fetchFavorites() {
			const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Favorites");
			logger.log("Start");
			const link = getFavoritesLink();
			if (!link) {
				logger.error("link not found.");
				return "";
			}
			const popupContent = getPopupContent(await getDoc(link), ".stuffbox");
			if (!popupContent) {
				logger.error("popup content not found.");
				return "";
			}
			logger.log("End");
			return popupContent.innerHTML;
		}
		function getDownloadLink(linkElement) {
			const onClick = linkElement.getAttribute("onclick");
			if (!onClick) return null;
			return onClick.match(/(https:\/\/\S+)',\d+,\d+/)?.[1];
		}
		function getPopupContent(doc, selector) {
			const content = getElement(selector, doc);
			if (!content) return null;
			content.removeAttribute("style");
			content.classList.add("popup");
			return content;
		}
		function getFavoritesLink() {
			return `${location.origin}/gallerypopups.php?gid=${getGID()}&t=${getGalleryVersion()}&act=addfav`;
		}
		function getGID() {
			return location.pathname.split("/")[2];
		}
		function getGalleryVersion() {
			return location.pathname.split("/")[3];
		}
		return {
			torrentInnerHtml,
			archiveInnerHtml,
			favoriteInnerHtml,
			preloadLinks,
			fetchTorrents,
			fetchArchive,
			fetchFavorites,
			getDownloadLink,
			getPopupContent,
			getFavoritesLink,
			getGID,
			getGalleryVersion
		};
	}
	function getAipUrl() {
		return isExHentai() ? "https://exhentai.org/api.php" : "https://api.e-hentai.org/api.php";
	}
	function getGalleryMetadataBody(id, token) {
		return JSON.stringify({
			method: "gdata",
			gidlist: [[id, token]],
			namespace: 1
		});
	}
	function getGalleryIDandToken(pathname) {
		const groups = pathname.match(/(mpv|g)\/(?<id>\d+)\/(?<token>\w+)/)?.groups;
		if (!groups) return {
			id: null,
			token: null
		};
		return {
			id: Number(groups.id),
			token: groups.token
		};
	}
	async function fetchGalleryData({ id, token }) {
		const apiURL = getAipUrl();
		return fetch(apiURL, {
			method: "POST",
			body: getGalleryMetadataBody(id, token)
		}).then((response) => response.json());
	}
	async function changeTitleToJapanese() {
		const { id, token } = getGalleryIDandToken(_unsafeWindow.location.pathname);
		if (!id || !token) return;
		const galleryData = await fetchGalleryData({
			id,
			token
		});
		if (galleryData) {
			const japaneseTitle = galleryData.gmetadata[0].title_jpn;
			if (japaneseTitle) document.title = japaneseTitle;
		}
	}
	async function getArchiveLink(url) {
		const { id, token } = getGalleryIDandToken(url);
		if (!id || !token) return;
		const galleryData = await fetchGalleryData({
			id,
			token
		});
		return `${_unsafeWindow.location.origin}/archiver.php?gid=${id}&token=${token}&or=${galleryData.gmetadata[0].archiver_key}`;
	}
	var DOWNLOADED_GALLERIES_KEY = "downloaded-galleries-ids";
	function watchDownloadedGalleries() {
		_GM_addValueChangeListener(DOWNLOADED_GALLERIES_KEY, () => {
			highlightDownloadedGalleries();
		});
	}
	function highlightDownloadedGalleries() {
		const highlightColor = isExHentai() ? "black" : "#FFF9C4";
		const downloadedGalleriesIDs = new Set(_GM_getValue(DOWNLOADED_GALLERIES_KEY, []));
		const galleries = getElements(".gl1t");
		if (!galleries) return;
		[...galleries].map((gallery) => {
			try {
				const id = Number(gallery.querySelector("a")?.href.split("/")[4]);
				if (downloadedGalleriesIDs.has(id)) return gallery;
			} catch {
				return null;
			}
			return null;
		}).filter((gallery) => !!gallery).forEach((gallery) => {
			gallery.style.backgroundColor = highlightColor;
		});
	}
	function setAsDownloaded(galleryID) {
		if (!highlightSwitch.value) return;
		const downloadedGalleriesIDs = _GM_getValue(DOWNLOADED_GALLERIES_KEY) || [];
		downloadedGalleriesIDs.push(galleryID);
		_GM_setValue(DOWNLOADED_GALLERIES_KEY, [...new Set(downloadedGalleriesIDs)]);
	}
	function useArchive() {
		const toast = useToast();
		function setHentaiAtHomeEvent() {
			const logger = new Logger("Hentai At Home Event");
			const hentaiAtHomeLinks = getElements(".popup--archive table td a");
			if (!hentaiAtHomeLinks?.length) {
				logger.error("hentai@Home Links not found.");
				return;
			}
			const postUrl = getElement("#hathdl_form")?.getAttribute("action");
			if (!postUrl) {
				logger.error("postUrl not found.");
				return;
			}
			for (const link of hentaiAtHomeLinks) {
				const resolution = link.getAttribute("onclick")?.split("'")?.[1] || "org";
				link.removeAttribute("onclick");
				link.addEventListener("click", async (event) => {
					event.preventDefault();
					link.classList.add("is-fetching");
					const response = getElement("#db", await sendDownloadRequest(postUrl, resolution));
					logger.log(response);
					const parsedResponse = parseResponse(response, logger);
					if (parsedResponse) {
						link.classList.remove("is-fetching");
						if (/download has been queued/.test(parsedResponse)) {
							toast.success(parsedResponse);
							link.classList.add("is-finished");
						} else toast.error(parsedResponse);
					}
					setAsDownloaded(Number(new URL(postUrl).searchParams.get("gid")));
				});
			}
		}
		async function sendDownloadRequest(postUrl, resolution) {
			const formData = new FormData();
			formData.append("hathdl_xres", resolution);
			return await getDoc(postUrl, {
				method: "POST",
				body: formData
			});
		}
		function parseResponse(response, logger) {
			if (!response) {
				logger.error("Failed to get response.");
				return null;
			}
			if (!response.innerHTML) {
				logger.error("Failed to get response innerHTML.");
				return null;
			}
			const result = response.innerHTML.match(/(?<=<p>)(.*?)(?=<\/p>)/g);
			if (!result) {
				logger.error("Failed to parse response.");
				return null;
			}
			return result.join("\n").replace(/<strong>#\d+<\/strong>/, "");
		}
		function setDirectDownloadEvent() {
			const logger = new Logger("Archive Event");
			const downloadButtons = getElements("form input[name=\"dlcheck\"]");
			if (!downloadButtons) {
				logger.error("archive download buttons not found.");
				return;
			}
			for (const button of downloadButtons) button.addEventListener("click", async (event) => {
				event.preventDefault();
				const form = button?.parentElement?.parentElement;
				if (!form) {
					logger.error("form not found.");
					return;
				}
				const url = form.getAttribute("action");
				if (!url) {
					logger.error("url not found.");
					return;
				}
				const resolution = button.getAttribute("value");
				button.parentElement.classList.add("is-fetching");
				await sendDownloadRequest(url, resolution);
				button.parentElement.classList.remove("is-fetching");
				setAsDownloaded(Number(new URL(url).searchParams.get("gid")));
			});
			async function sendDownloadRequest(url, resolution) {
				const html = await (await fetch(url, {
					method: "POST",
					body: resolution === "Download Original Archive" ? "dlcheck=Download Original Archive&dltype=org" : "dlcheck=Download Resample Archive&dltype=res",
					headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
				})).text();
				if (!html.includes("Locating archive server and preparing file for download...")) {
					toast.error("something went wrong. Open your console to see the response");
					console.warn("Download failed, response HTML:", html);
					return;
				}
				const matches = html.match(/document\.location = "(.*)"/);
				if (!matches || matches?.length !== 2) {
					toast.error("something went wrong. Open your console to see the response");
					console.warn("Download failed, response HTML:", html);
					return;
				}
				const downloadLink = `${matches[1]}?start=1`;
				window.location.href = downloadLink;
			}
		}
		const { archiveInnerHtml } = usePopups();
		function setCancelArchiveEvent() {
			const logger = new Logger("Archive Event");
			const invalidateForm = getElement("#invalidate_form");
			if (!invalidateForm) {
				logger.log("no unlocked archive to invalidate.");
				return;
			}
			const cancelButton = invalidateForm?.nextElementSibling?.children?.[2];
			if (!cancelButton || cancelButton.innerHTML !== "cancel") {
				logger.log("no unlocked archive to invalidate.");
				return;
			}
			cancelButton.removeAttribute("onclick");
			cancelButton.addEventListener("click", (event) => {
				event.preventDefault();
				cancelButton.innerHTML = "canceling...";
				const url = invalidateForm.getAttribute("action");
				fetch(url, {
					method: "POST",
					body: "invalidate_sessions=1",
					headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
				}).then((res) => res.text()).then((text) => {
					archiveInnerHtml.value = getElement("#db", new DOMParser().parseFromString(text, "text/html"))?.innerHTML;
					setTimeout(() => {
						setDirectDownloadEvent();
					}, 0);
				});
			});
		}
		function quickDownload(popup) {
			function getHaHDownloadLinkElement(downloadMethod) {
				const index = {
					[ArchiveDownloadMethod.HaH_Original]: 6,
					[ArchiveDownloadMethod.HaH_2400]: 5
				}[downloadMethod];
				return getElement(`td:nth-child(${index}) > p > a`, popup.value);
			}
			switch (quickArchiveDownloadMethod.value) {
				case ArchiveDownloadMethod.HaH_Original:
				case ArchiveDownloadMethod.HaH_2400: {
					const downloadLinkElement = getHaHDownloadLinkElement(quickArchiveDownloadMethod.value);
					if (downloadLinkElement) downloadLinkElement.click();
					else {
						toast.warning(`Failed ${quickArchiveDownloadMethod.value}. The link might not exists.\n Open popup`);
						return false;
					}
					break;
				}
				case ArchiveDownloadMethod.Direct_Origin:
					getElement("input[value=\"Download Original Archive\"]", popup.value).click();
					break;
				case ArchiveDownloadMethod.Direct_Resample:
					getElement("input[value=\"Download Resample Archive\"]", popup.value).click();
					break;
			}
			return true;
		}
		return {
			setHentaiAtHomeEvent,
			setDirectDownloadEvent,
			setCancelArchiveEvent,
			quickDownload
		};
	}
	var HIDDEN_GALLERIES_KEY = "hidden-galleries-titles";
	var hiddenTitles = new Set(_GM_getValue(HIDDEN_GALLERIES_KEY, []));
	function getGalleryTitle(gallery) {
		return gallery.querySelector(".gl4t.glname")?.textContent?.trim() || null;
	}
	function isGalleryHidden(title) {
		return hiddenTitles.has(title);
	}
	function setGalleryHidden(title, hidden) {
		if (hidden) hiddenTitles.add(title);
		else hiddenTitles.delete(title);
		_GM_setValue(HIDDEN_GALLERIES_KEY, [...hiddenTitles]);
	}
	function removeHiddenGalleries() {
		if (showHiddenGalleriesSwitch.value) return;
		const galleries = getElements(".gl1t");
		if (!galleries) return;
		for (const gallery of [...galleries]) {
			const title = getGalleryTitle(gallery);
			if (title !== null && hiddenTitles.has(title)) gallery.remove();
		}
	}
	function watchHiddenGalleries(callback) {
		_GM_addValueChangeListener(HIDDEN_GALLERIES_KEY, (_, __, nextValue) => {
			hiddenTitles = new Set(nextValue);
			callback();
		});
	}
	var _hoisted_1$7 = ["innerHTML"];
	var GalleriesEnhancer_default = (0, vue.defineComponent)({
		__name: "GalleriesEnhancer",
		setup(__props) {
			if (scrollByRowSwitch.value) setWheelStep({
				containerSelector: ".itg.gld",
				itemsSelector: ".gl1t"
			});
			if (infiniteScrollSwitch.value) useInfiniteScroll();
			function useInfiniteScroll() {
				const galleryContainer = getElement(".itg.gld");
				const bottomPagination = getElements(".searchnav")?.[1];
				let nextPageUrl = getElement("#dnext")?.getAttribute("href");
				let isFetching = false;
				const intersectionObserver = new IntersectionObserver(async ([bottomPagination]) => {
					if (!bottomPagination.isIntersecting || isFetching) return;
					if (!nextPageUrl) return;
					isFetching = true;
					galleryContainer?.classList.add("is-fetching");
					const doc = await getDoc(nextPageUrl);
					const galleriesOfNextPage = getElements(".itg.gld > .gl1t", doc);
					if (!galleriesOfNextPage) return;
					galleryContainer?.append(...galleriesOfNextPage);
					isFetching = false;
					galleryContainer?.classList.remove("is-fetching");
					nextPageUrl = getElement("#dnext", doc)?.getAttribute("href");
					history.pushState(void 0, doc.title, nextPageUrl);
				});
				if (bottomPagination) intersectionObserver.observe(bottomPagination);
			}
			const { archiveInnerHtml, fetchArchive } = usePopups();
			const archivePopup = (0, vue.ref)();
			const activeButton = (0, vue.ref)();
			function setHideButtonState(button, isHidden) {
				button.classList.toggle("is-hidden", isHidden);
				button.title = isHidden ? "Unhide gallery" : "Hide gallery";
			}
			function appendHideButtons() {
				getElements(".gl1t")?.forEach((gallery) => {
					const title = getGalleryTitle(gallery);
					if (title === null) return;
					const existing = getElement(".hide-button", gallery);
					if (existing) {
						setHideButtonState(existing, isGalleryHidden(title));
						return;
					}
					const button = document.createElement("span");
					button.classList.add("hide-button");
					button.textContent = "🚫";
					setHideButtonState(button, isGalleryHidden(title));
					button.onclick = (e) => {
						e.preventDefault();
						e.stopPropagation();
						const nextHidden = !isGalleryHidden(title);
						setGalleryHidden(title, nextHidden);
						setHideButtonState(button, nextHidden);
					};
					const archiveBtn = getElement(".archive-button", gallery);
					const downloadDiv = getElement(".gldown", gallery);
					if (archiveBtn) archiveBtn.after(button);
					else downloadDiv?.appendChild(button);
				});
			}
			function syncGalleriesEnhancerFeatures() {
				removeHiddenGalleries();
				appendHideButtons();
				if (archiveButtonSwitch.value) appendArchiveButtons();
				if (highlightSwitch.value) highlightDownloadedGalleries();
			}
			async function appendArchiveButtons() {
				getElements(".gl1t")?.forEach((gallery) => {
					if (getElement(".archive-button", gallery)) return;
					const button = document.createElement("span");
					button.classList.add("archive-button");
					button.textContent = "A";
					button.title = "Show Archive";
					button.onclick = async () => {
						isArchivePopupShow.value = !isArchivePopupShow.value;
						archiveInnerHtml.value = "Fetching...";
						activeButton.value = button;
						archiveInnerHtml.value = await fetchArchive(await getArchiveLink(getElement("a", gallery).href));
						setTimeout(() => {
							setArchiveEvent();
						}, 0);
					};
					getElement(".gldown", gallery)?.appendChild(button);
				});
			}
			const borderRect = useElementBounding(getElement(".itg.gld"));
			const popupRect = useElementBounding(archivePopup);
			const targetRect = useElementBounding(activeButton);
			const archivePopupPosition = (0, vue.computed)(() => {
				const top = Math.min(targetRect.bottom.value + 5, borderRect.bottom.value - popupRect.height.value);
				let left = targetRect.left.value - popupRect.width.value / 2;
				const right = left + popupRect.width.value;
				if (left < borderRect.left.value) left = borderRect.left.value;
				else if (right > borderRect.right.value) left = borderRect.right.value - popupRect.width.value;
				return {
					top: `${top}px`,
					left: `${left}px`,
					marginRight: "-9999px"
				};
			});
			syncGalleriesEnhancerFeatures();
			const galleryContainer = getElement(".itg.gld");
			if (galleryContainer) new MutationObserver(() => {
				syncGalleriesEnhancerFeatures();
			}).observe(galleryContainer, { childList: true });
			watchHiddenGalleries(() => {
				syncGalleriesEnhancerFeatures();
			});
			const modalOptions = (0, vue.ref)({
				teleportTo: ".enhancer-container",
				displayDirective: "show",
				hideOverlay: true,
				contentTransition: "vfm-fade",
				lockScroll: false
			});
			const isArchivePopupShow = (0, vue.ref)(false);
			const { setHentaiAtHomeEvent, setDirectDownloadEvent, setCancelArchiveEvent, quickDownload } = useArchive();
			const isQuickDownload = (0, vue.computed)(() => quickArchiveDownloadMethod.value !== ArchiveDownloadMethod.Manual);
			function setArchiveEvent() {
				setHentaiAtHomeEvent();
				setDirectDownloadEvent();
				setCancelArchiveEvent();
				if (isQuickDownload.value) {
					if (!quickDownload(archivePopup)) isArchivePopupShow.value = true;
				}
			}
			if (highlightSwitch.value) watchDownloadedGalleries();
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(Ro), (0, vue.mergeProps)({
					modelValue: isArchivePopupShow.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isArchivePopupShow.value = $event)
				}, modalOptions.value), {
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", {
						ref_key: "archivePopup",
						ref: archivePopup,
						class: "popup popup--archive",
						style: (0, vue.normalizeStyle)(archivePopupPosition.value),
						innerHTML: (0, vue.unref)(archiveInnerHtml)
					}, null, 12, _hoisted_1$7)]),
					_: 1
				}, 16, ["modelValue"]);
			};
		}
	});
	var baseLogger = new Logger("Images");
	async function fetchAllImages({ delayInMs = 3e3 }) {
		const logger = new LoggerScopeDecorator(baseLogger, "Fetch All");
		if (!isFirstPage()) {
			logger.log("Not first page, do nothing");
			return;
		}
		logger.log("Start");
		const pageUrls = getPageUrls();
		if (!pageUrls) {
			logger.error("Page URLs not found.");
			return;
		}
		if (pageUrls.length === 0) {
			logger.log("Only one page, do nothing");
			return;
		}
		for (const url of pageUrls) try {
			await delay(delayInMs);
			logger.log(`fetching ${url}`);
			const imageElements = getImageElements(await getDoc(url));
			if (!imageElements) return;
			appendImages(imageElements);
		} catch (error) {
			if (error instanceof Error) logger.error(`fetch ${url} failed`, error);
		}
		logger.log("Done");
		function isFirstPage() {
			return getElement(".ptds")?.innerText === "1";
		}
		function getImageElements(doc) {
			return getElements("#gdt > a", doc);
		}
		function getPageUrls() {
			const lastPageElement = getElement(".ptt td:nth-last-child(2) a");
			if (!lastPageElement) {
				logger.error("Get last page element failed");
				return;
			}
			const pageCount = Number(lastPageElement.innerText);
			if (pageCount === 1) return [];
			const { href } = window.location;
			return Array(pageCount - 1).fill("").map((_, index) => `${href}?p=${index + 1}`);
		}
		function appendImages(elements) {
			getElement("#gdt")?.append(...elements);
		}
	}
	function useFavorite(favoriteInnerHtml) {
		const { fetchFavorites, getFavoritesLink } = usePopups();
		function setRequestEvents(target, popup, isPopupShow) {
			(popup.value?.querySelector("[type=submit]"))?.addEventListener("click", async (event) => {
				event.preventDefault();
				const favoriteCategory = getElement("[name=favcat]:checked")?.value;
				await setFavorite(favoriteCategory);
			});
			const categoryOptions = popup.value?.querySelectorAll("#galpop .nosel > div");
			if (categoryOptions?.length) for (const option of categoryOptions) option.addEventListener("dblclick", async (event) => {
				event.preventDefault();
				const category = option.querySelector("[name=favcat]")?.value;
				await setFavorite(category);
			});
			_unsafeWindow.clicked_fav = () => null;
			async function setFavorite(category) {
				const formData = new FormData();
				const favoriteNote = getElement("[name=favnote]")?.value;
				const apply = category === "favdel" ? "Apply Changes" : "Add to Favorites";
				formData.append("favcat", category);
				formData.append("favnote", favoriteNote);
				formData.append("apply", apply);
				formData.append("update", "1");
				const script = ((await (await fetch(getFavoritesLink(), {
					method: "POST",
					body: formData
				})).text()).match(/(if\(window\.opener\.document\.getElementById\("favoritelink"\)).*/)?.[0])?.replaceAll(".opener", "");
				Function(script)();
				isPopupShow.value = false;
				favoriteInnerHtml.value = await fetchFavorites();
				await (0, vue.nextTick)();
				setRequestEvents(target, popup, isPopupShow);
			}
		}
		return { setRequestEvents };
	}
	function useTorrent(torrentInnerHtml) {
		function downloadTorrent(popup) {
			getElement("a", popup.value)?.click();
		}
		function extractMagnetLink(href) {
			const match = href.match(/([0-9a-f]{40})/i);
			if (!match) return null;
			return `magnet:?xt=urn:btih:${match[1]}`;
		}
		function addMagnetCopyButtons(popup) {
			if (!popup.value) return;
			popup.value.querySelectorAll("form table").forEach((table) => {
				if (table.querySelector("[data-magnet-button]")) return;
				const link = table.querySelector("a");
				if (!link?.href) return;
				const magnet = extractMagnetLink(link.href);
				if (!magnet) return;
				const insertionPoint = table.querySelector("input[type=\"submit\"], button[type=\"submit\"]");
				if (!insertionPoint) return;
				const button = document.createElement("input");
				button.type = "button";
				button.value = "Copy Magnet";
				button.dataset.magnetButton = "true";
				button.style.marginBottom = "4px";
				button.onclick = async () => {
					_GM_setClipboard(magnet, "text");
					button.value = "✅ Copied";
					button.disabled = true;
					setTimeout(() => {
						button.disabled = false;
						button.value = "Copy Magnet";
					}, 1e3);
				};
				insertionPoint.parentNode?.insertBefore(button, insertionPoint);
			});
		}
		function setTorrentPopupEvents(popup, onContentChanged) {
			if (!popup.value) return;
			const logger = new Logger("Torrent Popup Events");
			let cachedHtml = "";
			bindListFormEvents();
			async function fetchAndUpdate(url, params) {
				const html = processInfoResponse(await getDoc(url, {
					method: "POST",
					body: params
				}));
				if (!html) {
					logger.error("content not found in response.");
					return false;
				}
				torrentInnerHtml.value = html;
				return true;
			}
			function buildParams(form, submitter) {
				const params = new URLSearchParams();
				new FormData(form).forEach((value, key) => {
					params.append(key, value);
				});
				if (submitter instanceof HTMLInputElement || submitter instanceof HTMLButtonElement) params.append(submitter.name, submitter.value);
				return params;
			}
			function processInfoResponse(doc) {
				const content = getElement("#torrentinfo", doc) || getElement(".stuffbox", doc);
				if (!content) return null;
				content.removeAttribute("style");
				const styles = doc.querySelectorAll("head style");
				let styleHtml = "";
				styles.forEach((style) => {
					styleHtml += style.outerHTML;
				});
				return styleHtml + content.innerHTML;
			}
			function bindListFormEvents() {
				if (!popup.value) return;
				popup.value.querySelectorAll("form").forEach((form) => {
					if (form.enctype === "multipart/form-data") {
						form.target = "_blank";
						return;
					}
					form.addEventListener("submit", async (event) => {
						event.preventDefault();
						const submitter = event.submitter;
						if (!submitter) return;
						const url = form.getAttribute("action");
						if (!url) {
							logger.error("form action not found.");
							return;
						}
						cachedHtml = torrentInnerHtml.value;
						try {
							if (await fetchAndUpdate(url, buildParams(form, submitter))) {
								await (0, vue.nextTick)();
								bindInfoPageEvents();
							} else cachedHtml = "";
						} catch (error) {
							if (error instanceof Error) logger.error("failed to fetch torrent info.", error);
							cachedHtml = "";
						}
					});
				});
			}
			function bindInfoPageEvents() {
				if (!popup.value) return;
				popup.value.querySelectorAll("form:not(#expungeform)").forEach((form) => {
					form.addEventListener("submit", async (event) => {
						event.preventDefault();
						const submitter = event.submitter;
						if (submitter instanceof HTMLInputElement && submitter.name === "list") {
							const html = cachedHtml;
							cachedHtml = "";
							torrentInnerHtml.value = html;
							await (0, vue.nextTick)();
							onContentChanged();
							bindListFormEvents();
							return;
						}
						const url = form.getAttribute("action");
						if (!url) return;
						if (await fetchAndUpdate(url, buildParams(form, submitter))) {
							await (0, vue.nextTick)();
							bindInfoPageEvents();
						}
					});
				});
				const expungeLink = popup.value.querySelector("[onclick*=\"expungeform\"]");
				if (expungeLink) {
					const message = expungeLink.textContent?.includes("Delete") ? "Are you sure you wish to delete this torrent? This action cannot be undone." : "Are you sure you wish to expunge this torrent? This action cannot be undone.";
					expungeLink.removeAttribute("onclick");
					expungeLink.addEventListener("click", async (event) => {
						event.preventDefault();
						if (!confirm(message)) return;
						const form = popup.value?.querySelector("#expungeform");
						const url = form?.getAttribute("action");
						if (!form || !url) return;
						if (await fetchAndUpdate(url, buildParams(form))) {
							await (0, vue.nextTick)();
							bindInfoPageEvents();
						}
					});
				}
			}
		}
		return {
			downloadTorrent,
			extractMagnetLink,
			addMagnetCopyButtons,
			setTorrentPopupEvents
		};
	}
	function usePositions() {
		const archiveLinkRect = useElementBounding(getArchiveLinkAnchor());
		const torrentLinkRect = useElementBounding(getTorrentLinkAnchor());
		const favoriteLinkRect = useElementBounding(getFavoritesLinkAnchor());
		function getDownloadPopupRight() {
			return (document.documentElement.clientWidth - getInfoDiv().clientWidth) / 2;
		}
		return {
			archive: (0, vue.computed)(() => ({
				top: `${archiveLinkRect.bottom.value + 5}px`,
				right: `${getDownloadPopupRight()}px`
			})),
			torrent: (0, vue.computed)(() => ({
				top: `${torrentLinkRect.bottom.value + 5}px`,
				right: `${getDownloadPopupRight()}px`
			})),
			favorite: (0, vue.computed)(() => ({
				top: `${favoriteLinkRect.bottom.value + 5}px`,
				right: `${favoriteLinkRect.left.value}px`
			}))
		};
	}
	var _hoisted_1$6 = ["innerHTML"];
	var _hoisted_2$3 = ["innerHTML"];
	var _hoisted_3$2 = ["innerHTML"];
	var GalleryEnhancer_default = (0, vue.defineComponent)({
		__name: "GalleryEnhancer",
		async setup(__props) {
			let __temp, __restore;
			if (loadAllGalleryImagesSwitch.value) fetchAllImages({ delayInMs: 1e3 });
			if (scrollByRowSwitch.value) setWheelStep({
				containerSelector: "#gdt",
				itemsSelector: "a"
			});
			const modalOptions = (0, vue.ref)({
				teleportTo: ".enhancer-container",
				displayDirective: "show",
				hideOverlay: true,
				contentTransition: "vfm-fade",
				lockScroll: false
			});
			const archiveLinkAnchor = getArchiveLinkAnchor();
			const torrentLinkAnchor = getTorrentLinkAnchor();
			const favoritesLinkAnchor = getFavoritesLinkAnchor();
			const archivePopup = (0, vue.ref)();
			const torrentPopup = (0, vue.ref)();
			const favoritePopup = (0, vue.ref)();
			const { archiveInnerHtml, torrentInnerHtml, favoriteInnerHtml, preloadLinks } = usePopups();
			const isArchivePopupShow = (0, vue.ref)(false);
			const isTorrentPopupShow = (0, vue.ref)(false);
			const isFavoritePopupShow = (0, vue.ref)(false);
			const { archive: archivePosition, torrent: torrentPosition, favorite: favoritePosition } = usePositions();
			const { setHentaiAtHomeEvent, setDirectDownloadEvent, setCancelArchiveEvent, quickDownload } = useArchive();
			const { downloadTorrent, addMagnetCopyButtons, setTorrentPopupEvents } = useTorrent(torrentInnerHtml);
			const { setRequestEvents } = useFavorite(favoriteInnerHtml);
			if (betterPopupSwitch.value) {
				[__temp, __restore] = (0, vue.withAsyncContext)(() => preloadLinks()), await __temp, __restore();
				setTimeout(() => {
					setArchiveClickEvent();
					setTorrentClickEvent();
					setFavoriteClickEvent();
				}, 0);
			}
			const isQuickDownload = (0, vue.computed)(() => quickArchiveDownloadMethod.value !== ArchiveDownloadMethod.Manual);
			function setArchiveClickEvent() {
				setHentaiAtHomeEvent();
				setDirectDownloadEvent();
				setCancelArchiveEvent();
				archiveLinkAnchor.addEventListener("click", (event) => {
					event.preventDefault();
					event.stopPropagation();
					if (isQuickDownload.value) {
						if (!quickDownload(archivePopup)) isArchivePopupShow.value = true;
					} else isArchivePopupShow.value = !isArchivePopupShow.value;
				});
				setReady(archiveLinkAnchor);
			}
			function setupTorrentPopupContent() {
				addMagnetCopyButtons(torrentPopup);
				const torrentDownloadLinks = getElements("a", torrentPopup.value);
				if (torrentDownloadLinks?.length) torrentDownloadLinks.forEach((link) => {
					link.addEventListener("click", () => {
						setAsDownloaded(_unsafeWindow.gid);
					});
				});
			}
			function setTorrentClickEvent() {
				setRequestEvents(archiveLinkAnchor, favoritePopup, isFavoritePopupShow);
				const isOnlyOneTorrent = torrentLinkAnchor.innerText.endsWith("(1)");
				setupTorrentPopupContent();
				setTorrentPopupEvents(torrentPopup, setupTorrentPopupContent);
				torrentLinkAnchor.addEventListener("click", (event) => {
					event.preventDefault();
					event.stopPropagation();
					if (quickTorrentDownloadSwitch.value && isOnlyOneTorrent) downloadTorrent(torrentPopup);
					else isTorrentPopupShow.value = !isTorrentPopupShow.value;
				});
				setReady(torrentLinkAnchor);
			}
			function setFavoriteClickEvent() {
				favoritesLinkAnchor.addEventListener("click", (event) => {
					event.preventDefault();
					event.stopPropagation();
					isFavoritePopupShow.value = !isFavoritePopupShow.value;
				});
				setReady(favoritesLinkAnchor);
			}
			function setReady(element) {
				element.removeAttribute("onclick");
				element.classList.add("is-ready");
			}
			(0, vue.onMounted)(() => {
				_unsafeWindow.pop_ren = Function("popUp(popbase + \"rename\", window.innerWidth * 2 / 3, window.innerHeight * 2 / 3);");
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, [
					(0, vue.createVNode)((0, vue.unref)(Ro), (0, vue.mergeProps)({
						modelValue: isArchivePopupShow.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isArchivePopupShow.value = $event)
					}, modalOptions.value), {
						default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", {
							ref_key: "archivePopup",
							ref: archivePopup,
							class: "popup popup--archive",
							style: (0, vue.normalizeStyle)((0, vue.unref)(archivePosition)),
							innerHTML: (0, vue.unref)(archiveInnerHtml)
						}, null, 12, _hoisted_1$6)]),
						_: 1
					}, 16, ["modelValue"]),
					(0, vue.createVNode)((0, vue.unref)(Ro), (0, vue.mergeProps)({
						modelValue: isTorrentPopupShow.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isTorrentPopupShow.value = $event)
					}, modalOptions.value), {
						default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", {
							ref_key: "torrentPopup",
							ref: torrentPopup,
							class: "popup popup--torrent",
							style: (0, vue.normalizeStyle)((0, vue.unref)(torrentPosition)),
							innerHTML: (0, vue.unref)(torrentInnerHtml)
						}, null, 12, _hoisted_2$3)]),
						_: 1
					}, 16, ["modelValue"]),
					(0, vue.createVNode)((0, vue.unref)(Ro), (0, vue.mergeProps)({
						modelValue: isFavoritePopupShow.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isFavoritePopupShow.value = $event)
					}, modalOptions.value), {
						default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", {
							ref_key: "favoritePopup",
							ref: favoritePopup,
							class: "popup",
							style: (0, vue.normalizeStyle)((0, vue.unref)(favoritePosition)),
							innerHTML: (0, vue.unref)(favoriteInnerHtml)
						}, null, 12, _hoisted_3$2)]),
						_: 1
					}, 16, ["modelValue"])
				], 64);
			};
		}
	});
	function getPaneOuterDiv() {
		return getElement("#pane_outer");
	}
	function getPaneImagesDiv() {
		return getElement("#pane_images");
	}
	function getPaneThumbsDiv() {
		return getElement("#pane_thumbs");
	}
	var usePages = createSharedComposable(_usePages);
	function _usePages() {
		const paneImagesDiv = getPaneImagesDiv();
		const location = useBrowserLocation();
		const currentPage = (0, vue.ref)(Number(location.value.hash?.replace("#page", "")) || 1);
		const pageCount = _unsafeWindow.pagecount;
		function appendPageIndex() {
			const imageContainers = getElements(".mimg");
			const pageCount = imageContainers.length;
			const mutationObserver = new MutationObserver(([mutation]) => {
				const target = mutation.target;
				const index = target.id.split("image_")[1];
				const captionElement = getElement(".mbar > *:nth-child(3)", target);
				const captionText = captionElement?.innerText;
				if (!captionText || captionText?.includes(" ／ ")) return;
				captionElement.innerText = `${captionText}　-　${index} ／ ${pageCount}`;
			});
			const config = { attributes: true };
			imageContainers.forEach((container) => {
				mutationObserver.observe(container, config);
			});
		}
		function goToNextPage() {
			goToPageByOffset(1);
		}
		function goToPrevPage() {
			goToPageByOffset(-1);
		}
		function goToCurrentPage() {
			goToPage(currentPage.value);
		}
		function goToPageByOffset(offset) {
			let index = currentPage.value + offset;
			index = Math.min(index, pageCount);
			index = Math.max(index, 1);
			goToPage(index);
		}
		function goToPage(index) {
			currentPage.value = index;
			getElement(`#image_${index}`).scrollIntoView();
		}
		function scrollToImageTop() {
			getCurrentImage().scrollIntoView();
		}
		function scrollToRelativePosition(relativeToViewport) {
			const currentImage = getCurrentImage();
			const { height: imageHeight } = currentImage.getBoundingClientRect();
			const top = currentImage.offsetTop + relativeToViewport * imageHeight - window.innerHeight / 2 - 1;
			paneImagesDiv.scrollTo({ top });
		}
		function getRelativeToViewport() {
			const currentImage = getCurrentImage();
			if (!currentImage) return null;
			const { top: imageTop, height: imageHeight } = currentImage.getBoundingClientRect();
			return 1 - (imageHeight - 1 + imageTop - window.innerHeight / 2) / imageHeight;
		}
		function scrollToProperPosition(relativeToViewport, currentSize) {
			const currentImage = getCurrentImage();
			if (currentSize === 100) scrollToImageTop();
			else scrollToRelativePosition(relativeToViewport);
			if (currentImage.getBoundingClientRect().top > 1) scrollToImageTop();
		}
		function changePageOnWheel(event) {
			if (event.deltaY < 0) goToPrevPage();
			else goToNextPage();
		}
		function setPreloadImagesEvent() {
			paneImagesDiv.onscroll = () => {
				_unsafeWindow.preload_scroll_images();
			};
		}
		function getCurrentImage() {
			return getElement(`img[id^=imgsrc_${currentPage.value}]`);
		}
		function syncCurrentImageOnScroll() {
			const imageContainers = getElements(".mimg");
			let firstIntersectingIndex = 1;
			const observer = new IntersectionObserver((entries) => {
				firstIntersectingIndex = Number(entries[0].target.id.replace("image_", ""));
			});
			imageContainers.forEach((container) => {
				observer.observe(container);
			});
			paneImagesDiv.addEventListener("scroll", () => {
				const visibleImageContainers = [];
				for (let index = Math.max(firstIntersectingIndex - 1, 1); index < imageContainers.length; index++) {
					const percentage = getVisiblePercentageInViewport(imageContainers[index - 1]);
					if (percentage > 0) visibleImageContainers.push({
						index,
						percentage,
						element: imageContainers[index]
					});
				}
				if (visibleImageContainers.length === 0) return;
				else if (visibleImageContainers.length === 1) currentPage.value = visibleImageContainers[0].index;
				else {
					visibleImageContainers.sort((elem1, elem2) => elem2.percentage - elem1.percentage);
					const [largest, secondLargest] = visibleImageContainers;
					if (largest.percentage / secondLargest.percentage >= 2) currentPage.value = largest.index;
				}
			});
		}
		function getVisiblePercentageInViewport(element) {
			const viewportHeight = window.innerHeight;
			const { top, bottom } = element.getBoundingClientRect();
			if (top > viewportHeight || bottom < 0) return 0;
			return (Math.min(viewportHeight, bottom) - Math.max(top, 0)) / viewportHeight;
		}
		return {
			appendPageIndex,
			pageCount,
			currentPage,
			getCurrentImage,
			goToNextPage,
			goToPrevPage,
			goToPageByOffset,
			goToPage,
			goToCurrentPage,
			scrollToImageTop,
			scrollToRelativePosition,
			getRelativeToViewport,
			scrollToProperPosition,
			changePageOnWheel,
			syncCurrentImageOnScroll,
			setPreloadImagesEvent
		};
	}
	function debounce(func, debounceMs, { signal, edges } = {}) {
		let pendingThis = void 0;
		let pendingArgs = null;
		const leading = edges != null && edges.includes("leading");
		const trailing = edges == null || edges.includes("trailing");
		const invoke = () => {
			if (pendingArgs !== null) {
				func.apply(pendingThis, pendingArgs);
				pendingThis = void 0;
				pendingArgs = null;
			}
		};
		const onTimerEnd = () => {
			if (trailing) invoke();
			cancel();
		};
		let timeoutId = null;
		const schedule = () => {
			if (timeoutId != null) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				timeoutId = null;
				onTimerEnd();
			}, debounceMs);
		};
		const cancelTimer = () => {
			if (timeoutId !== null) {
				clearTimeout(timeoutId);
				timeoutId = null;
			}
		};
		const cancel = () => {
			cancelTimer();
			pendingThis = void 0;
			pendingArgs = null;
		};
		const flush = () => {
			invoke();
		};
		const debounced = function(...args) {
			if (signal?.aborted) return;
			pendingThis = this;
			pendingArgs = args;
			const isFirstCall = timeoutId == null;
			schedule();
			if (leading && isFirstCall) invoke();
		};
		debounced.schedule = schedule;
		debounced.cancel = cancel;
		debounced.flush = flush;
		signal?.addEventListener("abort", cancel, { once: true });
		return debounced;
	}
	var useEvents = createSharedComposable(_useEvents);
	function _useEvents() {
		const { pageCount, currentPage, getCurrentImage, goToPage, goToPageByOffset, goToNextPage, goToPrevPage, getRelativeToViewport, scrollToProperPosition } = usePages();
		const paneImagesDiv = getPaneImagesDiv();
		const paneThumbsDiv = getPaneThumbsDiv();
		function setKeyBoardEvent() {
			document.onkeydown = null;
			window.addEventListener("keydown", async (event) => {
				if (event.ctrlKey) switch (event.code) {
					case "ArrowLeft":
						goToPageByOffset(-10);
						break;
					case "ArrowRight":
						goToPageByOffset(10);
						break;
				}
				else {
					const currentImage = getCurrentImage();
					switch (event.code) {
						case "Numpad8":
							if (currentImage) scrollElement(paneImagesDiv, { absolute: currentImage.offsetTop });
							break;
						case "Numpad5":
							if (currentImage) scrollElement(paneImagesDiv, { absolute: currentImage.offsetTop + (currentImage.offsetHeight - window.innerHeight) / 2 });
							break;
						case "Numpad2":
							if (currentImage) scrollElement(paneImagesDiv, { absolute: currentImage.offsetTop + currentImage.offsetHeight - window.innerHeight });
							break;
						case "ArrowUp":
							scrollElement(paneImagesDiv, { offset: -50 });
							break;
						case "ArrowDown":
							scrollElement(paneImagesDiv, { offset: 50 });
							break;
						case "ArrowLeft":
						case "Numpad1":
						case "Numpad4":
							goToPrevPage();
							break;
						case "Backspace":
							event.preventDefault();
							goToPrevPage();
							break;
						case "ArrowRight":
						case "Numpad3":
						case "Numpad6":
						case "Space":
							goToNextPage();
							break;
						case "PageUp":
							goToPageByOffset(-10);
							break;
						case "PageDown":
							goToPageByOffset(10);
							break;
						case "Home":
							goToPage(1);
							break;
						case "End":
							goToPage(pageCount);
							break;
						case "KeyF":
						case "Enter":
							toggleFullScreen();
							break;
						case "KeyR":
							_unsafeWindow.action_reload(currentPage.value);
							break;
						case "Numpad7":
							rotate(-90);
							break;
						case "Numpad9":
							rotate(90);
							break;
					}
				}
			});
		}
		function setClickEvent() {
			setChangePageClickEvent();
			setFullscreenToggleEvent();
			setThumbsClickEvent();
			function setChangePageClickEvent() {
				const config = {
					click: goToNextPage,
					contextmenu: goToPrevPage
				};
				for (const [event, action] of Object.entries(config)) paneImagesDiv.addEventListener(event, (event) => {
					if (event.target.closest(".mbar")) return;
					event.preventDefault();
					event.stopPropagation();
					action();
					hideCursor(event);
				});
			}
			function setFullscreenToggleEvent() {
				document.body.addEventListener("mousedown", (event) => {
					if (event.button !== 1) return;
					if (event.target.closest(".original-functions")) return;
					document.body.addEventListener("mouseup", () => {
						toggleFullScreen();
					}, { once: true });
				});
			}
			function setThumbsClickEvent() {
				paneThumbsDiv.addEventListener("click", (event) => {
					currentPage.value = Number(event.target.closest("div")?.id.replace("thumb_", ""));
				});
			}
		}
		function setShowCursorEvent() {
			document.body.addEventListener("mousemove", (event) => {
				if (!checkMouseDelta(event)) return;
				showCursor();
			});
		}
		function setHideCursorEvent() {
			document.body.addEventListener("mousewheel", (event) => {
				hideCursor(event);
			}, true);
			const debouncedHideCursor = debounce(hideCursor, 1e3);
			document.body.addEventListener("mousemove", (event) => {
				debouncedHideCursor(event);
			}, true);
		}
		const prevMousePoint = {
			x: 0,
			y: 0
		};
		function checkMouseDelta({ clientX, clientY }) {
			const threshold = 50;
			return Math.abs(clientX - prevMousePoint.x) >= threshold || Math.abs(clientY - prevMousePoint.y) >= threshold;
		}
		function showCursor() {
			document.body.classList.remove("hide-cursor");
		}
		function hideCursor({ clientX, clientY }) {
			prevMousePoint.x = clientX;
			prevMousePoint.y = clientY;
			document.body.classList.add("hide-cursor");
		}
		function setShowThumbsEvent() {
			document.addEventListener("mousemove", (event) => {
				const shouldShowThumbs = event.clientX < paneThumbsDiv.offsetWidth + 15;
				paneThumbsDiv.style.opacity = shouldShowThumbs ? "1" : "0";
			});
		}
		const { toggle } = useFullscreen(document.body);
		async function toggleFullScreen() {
			const relativeToViewport = getRelativeToViewport();
			const page = currentPage.value;
			document.body.addEventListener("reflow", () => {
				if (relativeToViewport) setTimeout(() => {
					goToPage(page);
					setTimeout(() => {
						scrollToProperPosition(relativeToViewport);
					}, 0);
				}, 100);
			}, { once: true });
			await toggle();
		}
		function setReflowTrigger() {
			new ResizeObserver((entries) => {
				for (const entry of entries) requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						entry.target?.dispatchEvent(new CustomEvent("reflow"));
					});
				});
			}).observe(document.body);
		}
		function rotate(degree) {
			const currentImage = getCurrentImage();
			const newDegree = (Number(currentImage.style.rotate.replace("deg", "")) + degree) % 360;
			currentImage.style.rotate = `${newDegree}deg`;
			if (newDegree % 180 === 0) currentImage.style.scale = "initial";
			else {
				const { width, height } = currentImage.getBoundingClientRect();
				currentImage.style.scale = (width / height).toString();
			}
		}
		return {
			setKeyBoardEvent,
			setClickEvent,
			setShowCursorEvent,
			setHideCursorEvent,
			setShowThumbsEvent,
			setReflowTrigger
		};
	}
	var _hoisted_1$5 = { class: "page-elevator" };
	var _hoisted_2$2 = ["value"];
	var _hoisted_3$1 = ["textContent"];
	var PageElevator_vue_vue_type_script_setup_true_lang_default = (0, vue.defineComponent)({
		__name: "PageElevator",
		setup(__props) {
			const { pageCount, currentPage, goToPage } = usePages();
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$5, [
					(0, vue.createElementVNode)("input", {
						type: "text",
						class: "page-elevator__input",
						value: (0, vue.unref)(currentPage),
						onKeydown: [_cache[0] || (_cache[0] = (0, vue.withModifiers)(() => {}, ["stop"])), _cache[1] || (_cache[1] = (0, vue.withKeys)(($event) => (0, vue.unref)(goToPage)(Number($event.target.value)), ["enter"]))]
					}, null, 40, _hoisted_2$2),
					_cache[2] || (_cache[2] = (0, vue.createElementVNode)("span", { class: "page-elevator__slash" }, "／", -1)),
					(0, vue.createElementVNode)("span", { textContent: (0, vue.toDisplayString)((0, vue.unref)(pageCount)) }, null, 8, _hoisted_3$1)
				]);
			};
		}
	});
	var _plugin_vue_export_helper_default = (sfc, props) => {
		const target = sfc.__vccOpts || sfc;
		for (const [key, val] of props) target[key] = val;
		return target;
	};
	var PageElevator_default = _plugin_vue_export_helper_default(PageElevator_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-b87e2f8f"]]);
	var _hoisted_1$4 = { class: "image-resizer" };
	var _hoisted_2$1 = ["onClick", "textContent"];
	var ImageResizer_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "ImageResizer",
		setup(__props) {
			const { goToCurrentPage, getRelativeToViewport, scrollToProperPosition } = usePages();
			const paneImagesDiv = getPaneImagesDiv();
			const { sizeList, currentIndex, setImageSize, onResizerClick, setResizeShortcuts } = useImageResizer();
			setResizeShortcuts();
			setTimeout(() => {
				setImageSize(currentIndex.value);
				goToCurrentPage();
			}, 0);
			function useImageResizer() {
				const sizeList = [
					100,
					125,
					150,
					175,
					200
				];
				const storedIndex = useStorage("image-resizer-index", 0);
				const currentIndex = (0, vue.ref)(storedIndex.value);
				(0, vue.watch)(currentIndex, (index) => {
					storedIndex.value = index;
				});
				const currentSize = (0, vue.computed)(() => {
					if (currentIndex.value < 0) return;
					return sizeList[currentIndex.value];
				});
				function onResizerClick(index) {
					const relativeToViewport = getRelativeToViewport();
					if (index === currentIndex.value) clearImageSize();
					else setImageSize(index);
					if (relativeToViewport) scrollToProperPosition(relativeToViewport);
				}
				function setImageSize(index) {
					currentIndex.value = index;
					paneImagesDiv.style.setProperty("--image-size", `${currentSize.value}vh`);
				}
				function clearImageSize() {
					currentIndex.value = -1;
					paneImagesDiv.style.removeProperty("--image-size");
				}
				function increaseImageSize() {
					setImageSize(Math.min(currentIndex.value + 1, sizeList.length - 1));
				}
				function decreaseImageSize() {
					setImageSize(currentIndex.value === -1 ? sizeList.length - 1 : Math.max(currentIndex.value - 1, 0));
				}
				function setResizeShortcuts() {
					window.addEventListener("keydown", (event) => {
						const relativeToViewport = getRelativeToViewport();
						if (event.ctrlKey) {
							const matchResult = event.code.match(/Numpad(?<index>[1-5])/);
							if (!matchResult) return;
							setImageSize(Number(matchResult.groups?.index) - 1);
						} else switch (event.code) {
							case "NumpadAdd":
								increaseImageSize();
								break;
							case "NumpadSubtract":
								decreaseImageSize();
								break;
							case "Numpad0":
								if (currentIndex.value === 0) clearImageSize();
								else setImageSize(0);
								break;
							case "NumpadDecimal": {
								const index = Math.floor(sizeList.length / 2);
								if (currentIndex.value === index) clearImageSize();
								else setImageSize(index);
								break;
							}
							case "NumpadEnter":
								clearImageSize();
								break;
							default: return;
						}
						if (relativeToViewport) scrollToProperPosition(relativeToViewport, currentSize.value);
					});
				}
				return {
					sizeList,
					currentIndex,
					currentSize,
					setImageSize,
					onResizerClick,
					setResizeShortcuts
				};
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$4, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(sizeList), (size, index) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
						key: size,
						class: (0, vue.normalizeClass)(["image-resizer__button", { "image-resizer__button--active": index === (0, vue.unref)(currentIndex) }]),
						onClick: ($event) => (0, vue.unref)(onResizerClick)(index),
						textContent: (0, vue.toDisplayString)(size)
					}, null, 10, _hoisted_2$1);
				}), 128))]);
			};
		}
	}), [["__scopeId", "data-v-fb83c8f5"]]);
	function useMagnifierGesture(config) {
		const isLeftPressed = (0, vue.ref)(false);
		const isRightPressed = (0, vue.ref)(false);
		const pressTimer = (0, vue.ref)();
		const isPrimaryButton = (0, vue.computed)(() => config.activationButton === "left" ? isLeftPressed.value : isRightPressed.value);
		const isSecondaryButton = (0, vue.computed)(() => config.activationButton === "left" ? isRightPressed.value : isLeftPressed.value);
		function updateButtonState(e) {
			if (e.button === 0) isLeftPressed.value = e.type === "mousedown";
			else if (e.button === 2) isRightPressed.value = e.type === "mousedown";
		}
		function isPrimaryButtonEvent(e) {
			return config.activationButton === "left" && e.button === 0 || config.activationButton === "right" && e.button === 2;
		}
		function isSecondaryButtonEvent(e) {
			return config.activationButton === "left" && e.button === 2 || config.activationButton === "right" && e.button === 0;
		}
		function startLongPressTimer(callback) {
			pressTimer.value = window.setTimeout(callback, config.longPressThreshold);
		}
		function clearTimer() {
			if (pressTimer.value) {
				clearTimeout(pressTimer.value);
				pressTimer.value = void 0;
			}
		}
		return {
			isLeftPressed,
			isRightPressed,
			isPrimaryButton,
			isSecondaryButton,
			updateButtonState,
			isPrimaryButtonEvent,
			isSecondaryButtonEvent,
			startLongPressTimer,
			clearTimer
		};
	}
	function useMagnifierImageLoader(state) {
		const paneImagesDiv = getPaneImagesDiv();
		const currentRequest = (0, vue.ref)(null);
		const currentObjectUrl = (0, vue.ref)(null);
		function cleanup() {
			if (currentRequest.value) {
				currentRequest.value.abort();
				currentRequest.value = null;
			}
			if (currentObjectUrl.value) {
				URL.revokeObjectURL(currentObjectUrl.value);
				currentObjectUrl.value = null;
			}
		}
		async function loadOriginal(img) {
			const mbar = img.closest(".mimg");
			const originalLink = mbar && getElement("a[href*=\"/fullimg/\"]", mbar);
			if (originalLink) {
				const originalUrl = originalLink.href;
				const newImage = new Image();
				state.isLoadingOriginal = true;
				state.loadingProgress = 0;
				try {
					await new Promise((resolve, reject) => {
						currentRequest.value = _GM_xmlhttpRequest({
							method: "GET",
							url: originalUrl,
							responseType: "blob",
							onprogress: (event) => {
								state.loadingProgress = event.loaded / event.total * 100;
							},
							onload: (response) => {
								const blob = response.response;
								const objectUrl = URL.createObjectURL(blob);
								currentObjectUrl.value = objectUrl;
								newImage.onload = () => {
									resolve();
								};
								newImage.onerror = () => {
									URL.revokeObjectURL(objectUrl);
									reject();
								};
								newImage.src = objectUrl;
							},
							onerror: reject
						});
					});
					img.src = newImage.src;
					state.isLoadingOriginal = false;
					currentRequest.value = null;
					return true;
				} catch (error) {
					console.error("原圖載入失敗:", error);
					state.isLoadingOriginal = false;
					currentRequest.value = null;
					return false;
				}
			}
			return false;
		}
		function findImageAtPosition(posY) {
			const mouseY = posY;
			const images = paneImagesDiv.querySelectorAll(".mimg > a > img");
			if (!images.length) return;
			if ((mouseY <= 0 || mouseY >= window.innerHeight) && state.currentImage) return;
			for (const img of images) {
				const rect = img.getBoundingClientRect();
				if (mouseY >= rect.top + window.scrollY && mouseY <= rect.bottom + window.scrollY) {
					state.currentImage = img;
					return;
				}
			}
			state.currentImage = null;
		}
		return {
			loadOriginal,
			findImageAtPosition,
			cleanup
		};
	}
	function useMagnifierEvents(state, config) {
		const paneImagesDiv = getPaneImagesDiv();
		const gesture = useMagnifierGesture(config);
		const imageLoader = useMagnifierImageLoader(state);
		const navigation = createNavigation(state, config);
		const isWaitingForToggleEnd = (0, vue.ref)(false);
		function handlePress(e) {
			e.preventDefault();
			e.stopPropagation();
			gesture.updateButtonState(e);
			if (!gesture.isPrimaryButton.value) return;
			gesture.startLongPressTimer(() => {
				imageLoader.findImageAtPosition(e.pageY);
				if (!state.currentImage) return;
				state.isOriginalMode = gesture.isPrimaryButton.value && gesture.isSecondaryButton.value;
				if (state.isOriginalMode) imageLoader.loadOriginal(state.currentImage);
				activateMagnifier(e);
			});
		}
		function handleRelease(e) {
			gesture.updateButtonState(e);
			gesture.clearTimer();
			if (!state.isActive) return;
			if (config.toggleMode) handleToggleModeRelease(e);
			else handleHoldModeRelease();
		}
		function handleToggleModeRelease(e) {
			if (!gesture.isPrimaryButtonEvent(e)) return;
			if (isWaitingForToggleEnd.value) {
				deactivateMagnifier();
				isWaitingForToggleEnd.value = false;
			} else isWaitingForToggleEnd.value = true;
		}
		function handleHoldModeRelease() {
			if (state.isOriginalMode) {
				if (!gesture.isPrimaryButton.value && !gesture.isSecondaryButton.value) deactivateMagnifier();
			} else if (!gesture.isPrimaryButton.value) deactivateMagnifier();
		}
		function activateMagnifier(e) {
			state.isActive = true;
			state.position = {
				x: e.pageX,
				y: e.pageY
			};
			state.lastPosition = {
				x: e.pageX,
				y: e.pageY
			};
			state.scale = config.scale.default;
			if (state.currentImage) {
				navigation.updatePosition(e);
				paneImagesDiv.dataset.magnifierActive = "true";
				document.body.classList.add("hide-cursor");
				const style = document.createElement("style");
				style.id = "magnifier-style";
				style.textContent = `
        #pane_thumbs {
          display: none !important;
          pointer-events: none !important;
          visibility: hidden !important;
        }
      `;
				document.head.appendChild(style);
			}
		}
		function deactivateMagnifier() {
			imageLoader.cleanup();
			delete paneImagesDiv.dataset.magnifierActive;
			state.currentImage = null;
			state.isOriginalMode = false;
			state.isLoadingOriginal = false;
			document.body.classList.remove("hide-cursor");
			getElement("#magnifier-style")?.remove();
			setTimeout(() => {
				state.isActive = false;
			}, 0);
		}
		function handleWheel(e) {
			if (!state.isActive) return;
			e.preventDefault();
			e.stopPropagation();
			navigation.updateScale(-Math.sign(e.deltaY) * config.scale.step);
		}
		function handleMouseDown(e) {
			if (!e.target.closest(".mbar")) handlePress(e);
		}
		function preventDefaultHandler(e) {
			if (state.isActive && !e.target.closest(".mbar")) {
				e.preventDefault();
				e.stopPropagation();
			}
		}
		function bindEvents() {
			paneImagesDiv.addEventListener("mousedown", handleMouseDown);
			window.addEventListener("mouseup", handleRelease);
			window.addEventListener("mousemove", navigation.updatePosition);
			[
				"mousedown",
				"click",
				"contextmenu"
			].forEach((eventName) => {
				paneImagesDiv.addEventListener(eventName, preventDefaultHandler, { capture: true });
			});
		}
		function unbindEvents() {
			imageLoader.cleanup();
			paneImagesDiv.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleRelease);
			window.removeEventListener("mousemove", navigation.updatePosition);
			[
				"mousedown",
				"click",
				"contextmenu"
			].forEach((eventName) => {
				paneImagesDiv.removeEventListener(eventName, preventDefaultHandler, { capture: true });
			});
		}
		return {
			bindEvents,
			unbindEvents,
			handleWheel
		};
	}
	function createNavigation(state, config) {
		function updatePosition(e) {
			if (!state.isActive) return;
			const movementX = e.pageX - state.lastPosition.x;
			const movementY = e.pageY - state.lastPosition.y;
			state.position = {
				x: state.position.x + movementX * config.sensitivity.x,
				y: state.position.y + movementY * config.sensitivity.y
			};
			state.position = {
				x: Math.max(0, Math.min(window.innerWidth, state.position.x)),
				y: Math.max(0, Math.min(window.innerHeight, state.position.y))
			};
			state.lastPosition = {
				x: e.pageX,
				y: e.pageY
			};
		}
		function updateScale(delta) {
			if (!state.isActive) return;
			state.scale = Math.min(Math.max(state.scale + delta, config.scale.min), config.scale.max);
		}
		return {
			updatePosition,
			updateScale
		};
	}
	function useMagnifierStyle(state, config) {
		const paneImagesDiv = getPaneImagesDiv();
		const contentStyle = (0, vue.computed)(() => {
			if (!state.currentImage) return {};
			const style = calculateTransformStyle(state.currentImage, state.position, state.scale);
			if (state.isLoadingOriginal) return {
				...style,
				maskImage: `linear-gradient(to bottom, black ${state.loadingProgress}%, transparent ${state.loadingProgress}%)`,
				WebkitMaskImage: `linear-gradient(to bottom, black ${state.loadingProgress}%, transparent ${state.loadingProgress}%)`
			};
			return style;
		});
		function calculateTransformStyle(img, position, scale) {
			const currentImageBounds = img.getBoundingClientRect();
			const currentImageScale = getImageSizeScale();
			const idealImageBounds = getNormalizedRect(currentImageBounds);
			const magnifierCenter = getCenterPoint(currentImageBounds);
			const mouseRelativePos = getRelativePosition(position, getMappingArea(currentImageBounds, idealImageBounds));
			const finalScale = currentImageScale * scale;
			const finalTranslate = {
				x: magnifierCenter.x - idealImageBounds.width * mouseRelativePos.x * finalScale + (position.x - magnifierCenter.x),
				y: magnifierCenter.y - idealImageBounds.height * mouseRelativePos.y * finalScale + (position.y - magnifierCenter.y)
			};
			return {
				position: "absolute",
				inset: 0,
				width: `${idealImageBounds.width * finalScale}px`,
				height: `${idealImageBounds.height * finalScale}px`,
				transform: `translate(${finalTranslate.x}px, ${finalTranslate.y}px)`,
				backgroundImage: `url(${img.src})`,
				backgroundSize: "100% 100%",
				backgroundRepeat: "no-repeat"
			};
		}
		function getImageSizeScale() {
			const imageSizeStyle = getComputedStyle(paneImagesDiv).getPropertyValue("--image-size");
			return imageSizeStyle ? parseInt(imageSizeStyle) / 100 : 1;
		}
		function getNormalizedRect(imgRect) {
			const width = window.innerHeight * (imgRect.width / imgRect.height);
			return {
				width,
				height: window.innerHeight,
				top: 0,
				bottom: window.innerHeight,
				left: (window.innerWidth - width) / 2,
				right: (window.innerWidth + width) / 2
			};
		}
		function getCenterPoint(imgRect) {
			return {
				x: imgRect.left + imgRect.width / 2,
				y: window.innerHeight / 2
			};
		}
		function getMappingArea(imgRect, normalizedRect) {
			return {
				top: normalizedRect.top + imgRect.height * config.mappingArea.vertical / 100,
				bottom: normalizedRect.bottom - imgRect.height * config.mappingArea.vertical / 100,
				left: imgRect.left + imgRect.width * config.mappingArea.horizontal / 100,
				right: imgRect.right - imgRect.width * config.mappingArea.horizontal / 100
			};
		}
		function getRelativePosition(position, mappingArea) {
			return {
				x: (position.x - mappingArea.left) / (mappingArea.right - mappingArea.left),
				y: (position.y - mappingArea.top) / (mappingArea.bottom - mappingArea.top)
			};
		}
		return { contentStyle };
	}
	var ImageMagnifier_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "ImageMagnifier",
		setup(__props) {
			const magnifierConfig = {
				toggleMode: magnifierToggleMode.value,
				activationButton: magnifierActivationButton.value,
				longPressThreshold: magnifierLongPressThreshold.value,
				scale: {
					default: magnifierDefaultScale.value,
					step: magnifierScaleStep.value,
					min: 1.1,
					max: 10
				},
				mappingArea: {
					horizontal: 0,
					vertical: 5
				},
				sensitivity: {
					x: magnifierSensitivityX.value,
					y: magnifierSensitivityY.value
				}
			};
			const state = (0, vue.reactive)({
				isActive: false,
				position: {
					x: 0,
					y: 0
				},
				lastPosition: {
					x: 0,
					y: 0
				},
				scale: magnifierConfig.scale.default,
				currentImage: null,
				isOriginalMode: false,
				isLoadingOriginal: false,
				loadingProgress: 0
			});
			const magnifierStyle = (0, vue.computed)(() => ({
				position: "fixed",
				inset: 0,
				margin: "auto",
				pointerEvents: "none",
				zIndex: 1e3
			}));
			const { contentStyle } = useMagnifierStyle(state, magnifierConfig);
			const { bindEvents, unbindEvents, handleWheel } = useMagnifierEvents(state, magnifierConfig);
			(0, vue.onMounted)(() => {
				bindEvents();
			});
			(0, vue.onUnmounted)(() => {
				unbindEvents();
			});
			const isShow = (0, vue.computed)(() => state.isActive);
			return (_ctx, _cache) => {
				return (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [(0, vue.createElementVNode)("div", {
					class: "magnifier-overlay",
					onWheel: _cache[0] || (_cache[0] = (...args) => (0, vue.unref)(handleWheel) && (0, vue.unref)(handleWheel)(...args)),
					onMousedown: _cache[1] || (_cache[1] = (0, vue.withModifiers)(() => {}, ["prevent", "stop"])),
					onClick: _cache[2] || (_cache[2] = (0, vue.withModifiers)(() => {}, ["prevent", "stop"])),
					onContextmenu: _cache[3] || (_cache[3] = (0, vue.withModifiers)(() => {}, ["prevent", "stop"]))
				}, null, 32), (0, vue.createElementVNode)("div", {
					class: "magnifier",
					style: (0, vue.normalizeStyle)(magnifierStyle.value)
				}, [_cache[4] || (_cache[4] = (0, vue.createElementVNode)("div", { class: "magnifier-background" }, null, -1)), (0, vue.createElementVNode)("div", {
					class: "magnifier-image",
					style: (0, vue.normalizeStyle)((0, vue.unref)(contentStyle))
				}, null, 4)], 4)], 512)), [[vue.vShow, isShow.value]]);
			};
		}
	}), [["__scopeId", "data-v-ba829bde"]]);
	var _hoisted_1$3 = ["innerHTML"];
	var MultiPageViewerEnhancer_default = (0, vue.defineComponent)({
		__name: "MultiPageViewerEnhancer",
		setup(__props) {
			const { currentPage, appendPageIndex, changePageOnWheel, setPreloadImagesEvent, syncCurrentImageOnScroll } = usePages();
			const { setKeyBoardEvent, setClickEvent, setShowCursorEvent, setHideCursorEvent, setShowThumbsEvent, setReflowTrigger } = useEvents();
			appendPageIndex();
			setPreloadImagesEvent();
			syncCurrentImageOnScroll();
			setKeyBoardEvent();
			setClickEvent();
			setShowCursorEvent();
			setHideCursorEvent();
			setShowThumbsEvent();
			setReflowTrigger();
			setWheelStep({
				containerSelector: "#pane_thumbs",
				itemsSelector: "[id^=thumb_]"
			});
			if (changePageByWheelAnyWhereSwitch.value) {
				const paneImagesDiv = getPaneImagesDiv();
				getPaneOuterDiv().addEventListener("mousewheel", changePageOnWheel);
				paneImagesDiv.addEventListener("mousewheel", changePageOnWheel);
			}
			const exhentaiButtons = (0, vue.ref)("");
			(0, vue.onMounted)(() => {
				exhentaiButtons.value = replaceOriginalFunctions();
			});
			function replaceOriginalFunctions() {
				const originalFunctions = getElement("#bar3");
				const closeButton = originalFunctions.querySelector("img:first-child");
				if (!closeButton) return "";
				const link = document.createElement("a");
				link.href = window.location.origin + window.location.pathname.replace("mpv", "g");
				closeButton.parentNode?.insertBefore(link, closeButton);
				link.append(closeButton);
				return originalFunctions.innerHTML;
			}
			(0, vue.onMounted)(() => {
				overrideGlobalCSS();
				(0, vue.watch)(() => preventImageRemovalSwitch.value, (value) => {
					if (!value) return;
					_unsafeWindow.preload_generic = Function("a", "b", "c", `
      var d = a.scrollTop;
      a = d + a.offsetHeight;
      for (var e = "image" == b, f = 1; f <= pagecount; f++) {
          var g = document.getElementById(b + "_" + f)
            , h = g.offsetTop
            , k = h + g.offsetHeight;
          if ("hidden" == g.style.visibility && k >= d && h <= a + c)
              e ? load_image(f) : load_thumb(f),
              g.style.visibility = "visible";
      }
    `);
				}, { immediate: true });
				(0, vue.watch)(currentPage, (index) => {
					getElement(`#thumb_${index}`)?.scrollIntoView({ block: "center" });
				});
			});
			function overrideGlobalCSS() {
				_GM_addStyle(`
html,
body {
  padding: 0;
  width: 100% !important;
  height: 100% !important;
}

div#bar3 {
  display: none;
}

.hide-cursor,
.hide-cursor * {
  cursor: none;
}

.original-functions {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 35px;
  height: 270px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  > img {
    cursor: pointer;
  }
}

#pane_images {
  inset: 0 !important;
  margin: auto;
}

#pane_thumbs {
  display: block;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s;
}
  `);
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
					class: "enhancer-features",
					onWheel: _cache[0] || (_cache[0] = (0, vue.withModifiers)((...args) => (0, vue.unref)(changePageOnWheel) && (0, vue.unref)(changePageOnWheel)(...args), ["stop"]))
				}, [
					(0, vue.createVNode)(PageElevator_default, { class: "enhancer-features__feature" }),
					(0, vue.createVNode)(ImageResizer_default, { class: "enhancer-features__feature" }),
					(0, vue.createElementVNode)("div", {
						class: "original-functions",
						innerHTML: exhentaiButtons.value
					}, null, 8, _hoisted_1$3),
					(0, vue.unref)(magnifierSwitch).value ? ((0, vue.openBlock)(), (0, vue.createBlock)(ImageMagnifier_default, { key: 0 })) : (0, vue.createCommentVNode)("", true)
				], 32);
			};
		}
	});
	var _sfc_main = {};
	var _hoisted_1$2 = {
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		fill: "#FFF",
		version: "1.1",
		width: "800px",
		height: "800px",
		viewBox: "0 0 94.926 94.926",
		"xml:space": "preserve"
	};
	function _sfc_render(_ctx, _cache) {
		return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("g", null, [(0, vue.createElementVNode)("path", { d: "M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0   c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096   c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476   c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62   s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" })], -1)])]);
	}
	var CrossButton_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
	var _hoisted_1$1 = { class: "switch" };
	var ToggleSwitch_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "ToggleSwitch",
		props: { modelValue: { type: Boolean } },
		emits: ["update:modelValue", "toggle"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const modelValueProxy = (0, vue.computed)({
				get: () => props.modelValue,
				set: (value) => {
					emit("update:modelValue", value);
					emit("toggle", value);
				}
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_1$1, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValueProxy.value = $event),
					type: "checkbox",
					class: "switch__input"
				}, null, 512), [[vue.vModelCheckbox, modelValueProxy.value]]), _cache[1] || (_cache[1] = (0, vue.createElementVNode)("span", { class: "switch__slider" }, null, -1))]);
			};
		}
	}), [["__scopeId", "data-v-7bec1a82"]]);
	var _hoisted_1 = { class: "settings-panel__inner" };
	var _hoisted_2 = { class: "settings-panel__section" };
	var _hoisted_3 = { class: "settings" };
	var _hoisted_4 = { class: "settings-panel__section" };
	var _hoisted_5 = { class: "settings" };
	var _hoisted_6 = { class: "settings" };
	var _hoisted_7 = { class: "settings__intro" };
	var _hoisted_8 = { class: "settings__option" };
	var _hoisted_9 = { class: "settings__option" };
	var _hoisted_10 = { class: "settings__option" };
	var _hoisted_11 = { class: "settings__option" };
	var _hoisted_12 = { class: "settings__option" };
	var _hoisted_13 = { class: "settings" };
	var _hoisted_14 = { class: "settings" };
	var _hoisted_15 = { class: "settings-panel__section" };
	var _hoisted_16 = { class: "settings" };
	var _hoisted_17 = { class: "settings" };
	var _hoisted_18 = { class: "settings" };
	var _hoisted_19 = { class: "settings" };
	var _hoisted_20 = { class: "settings" };
	var _hoisted_21 = { class: "settings__intro" };
	var _hoisted_22 = { class: "settings__magnifier-config" };
	var _hoisted_23 = { class: "settings__label" };
	var _hoisted_24 = ["value"];
	var _hoisted_25 = ["value"];
	var _hoisted_26 = { class: "settings__label" };
	var _hoisted_27 = { class: "settings__label" };
	var _hoisted_28 = { class: "settings__label" };
	var _hoisted_29 = { class: "settings__label" };
	var _hoisted_30 = { class: "settings__label" };
	var _hoisted_31 = { class: "settings__label" };
	var _hoisted_32 = { class: "settings-panel__section" };
	var _hoisted_33 = { class: "settings" };
	var _hoisted_34 = { class: "settings" };
	var _hoisted_35 = { class: "settings" };
	var _hoisted_36 = { class: "settings" };
	var _hoisted_37 = { class: "settings" };
	var SettingsPanel_default = (0, vue.defineComponent)({
		__name: "SettingsPanel",
		setup(__props) {
			const isShow = (0, vue.ref)(false);
			(0, vue.onMounted)(() => {
				_GM.registerMenuCommand("Open settings panel", () => isShow.value = !isShow.value);
			});
			function reload() {
				location.reload();
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(Ro), {
					modelValue: isShow.value,
					"onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => isShow.value = $event),
					"overlay-transition": "vfm-fade",
					class: "settings-panel-wrap",
					"content-class": "settings-panel"
				}, {
					default: (0, vue.withCtx)(() => [
						(0, vue.createElementVNode)("div", _hoisted_1, [
							(0, vue.createElementVNode)("section", _hoisted_2, [
								_cache[26] || (_cache[26] = (0, vue.createElementVNode)("h2", { class: "settings-panel__section-name" }, " Common ", -1)),
								_cache[27] || (_cache[27] = (0, vue.createElementVNode)("hr", { class: "settings-panel__separator" }, null, -1)),
								(0, vue.createElementVNode)("div", _hoisted_3, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(showJapaneseTitle).value,
									"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(showJapaneseTitle).value = $event)
								}, null, 8, ["modelValue"]), _cache[25] || (_cache[25] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Change Browser Tab Title to Japanese ", -1))])
							]),
							(0, vue.createElementVNode)("section", _hoisted_4, [
								_cache[35] || (_cache[35] = (0, vue.createElementVNode)("h2", { class: "settings-panel__section-name" }, " Gallery Enhancer ", -1)),
								_cache[36] || (_cache[36] = (0, vue.createElementVNode)("hr", { class: "settings-panel__separator" }, null, -1)),
								(0, vue.createElementVNode)("div", _hoisted_5, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(scrollByRowSwitch).value,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(scrollByRowSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[28] || (_cache[28] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Scroll by Row ", -1)),
									_cache[29] || (_cache[29] = (0, vue.createElementVNode)("span", { class: "settings__notice" }, " *Synced with \"Galleries Enhancer - Scroll by Row\" ", -1))
								]),
								(0, vue.createElementVNode)("div", _hoisted_6, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(betterPopupSwitch).value,
										"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(betterPopupSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[32] || (_cache[32] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Better Popup ", -1)),
									(0, vue.createElementVNode)("div", _hoisted_7, [
										_cache[30] || (_cache[30] = (0, vue.createElementVNode)("span", null, " Action when clicking \"Archive Download\": ", -1)),
										(0, vue.withDirectives)((0, vue.createElementVNode)("select", {
											"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (0, vue.unref)(quickArchiveDownloadMethod).value = $event),
											class: "settings__select"
										}, [
											(0, vue.createElementVNode)("option", _hoisted_8, (0, vue.toDisplayString)((0, vue.unref)(ArchiveDownloadMethod).Manual), 1),
											(0, vue.createElementVNode)("option", _hoisted_9, (0, vue.toDisplayString)((0, vue.unref)(ArchiveDownloadMethod).HaH_Original), 1),
											(0, vue.createElementVNode)("option", _hoisted_10, (0, vue.toDisplayString)((0, vue.unref)(ArchiveDownloadMethod).HaH_2400), 1),
											(0, vue.createElementVNode)("option", _hoisted_11, (0, vue.toDisplayString)((0, vue.unref)(ArchiveDownloadMethod).Direct_Origin), 1),
											(0, vue.createElementVNode)("option", _hoisted_12, (0, vue.toDisplayString)((0, vue.unref)(ArchiveDownloadMethod).Direct_Resample), 1)
										], 512), [[vue.vModelSelect, (0, vue.unref)(quickArchiveDownloadMethod).value]]),
										_cache[31] || (_cache[31] = (0, vue.createElementVNode)("p", null, [
											(0, vue.createTextVNode)(" *Note: If you have changed the Archiver Settings, you must revert it to \"Manual Select, Manual Start (Default)\" on the settings page: "),
											(0, vue.createElementVNode)("a", {
												class: "settings__link",
												target: "_blank",
												href: "https://e-hentai.org/uconfig.php",
												rel: "noreferrer noopener"
											}, " E-Hentai "),
											(0, vue.createTextVNode)(" , "),
											(0, vue.createElementVNode)("a", {
												class: "settings__link",
												target: "_blank",
												href: "https://exhentai.org/uconfig.php",
												rel: "noreferrer noopener"
											}, " ExHentai ")
										], -1))
									])
								]),
								(0, vue.createElementVNode)("div", _hoisted_13, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(quickTorrentDownloadSwitch).value,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0, vue.unref)(quickTorrentDownloadSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[33] || (_cache[33] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Download Directly if Only One Torrent Is Available ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_14, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(loadAllGalleryImagesSwitch).value,
									"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (0, vue.unref)(loadAllGalleryImagesSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[34] || (_cache[34] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Load All Gallery Images ", -1))])
							]),
							(0, vue.createElementVNode)("section", _hoisted_15, [
								_cache[50] || (_cache[50] = (0, vue.createElementVNode)("h2", { class: "settings-panel__section-name" }, " Multi-Page Viewer Enhancer ", -1)),
								_cache[51] || (_cache[51] = (0, vue.createElementVNode)("hr", { class: "settings-panel__separator" }, null, -1)),
								(0, vue.createElementVNode)("div", _hoisted_16, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(multipageViewerEnhancerSwitch).value,
									"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => (0, vue.unref)(multipageViewerEnhancerSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[37] || (_cache[37] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Multi-Page Viewer Enhancer ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_17, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(preventImageRemovalSwitch).value,
										"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => (0, vue.unref)(preventImageRemovalSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[38] || (_cache[38] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Prevent Image Removal ", -1)),
									_cache[39] || (_cache[39] = (0, vue.createElementVNode)("div", { class: "settings__intro" }, [(0, vue.createElementVNode)("p", null, " ExHentai's built-in script removes images that are far from your current scroll position. Scrolling back to a removed image may cause it to flash, since the browser must re-render it even if it's cached. ")], -1))
								]),
								(0, vue.createElementVNode)("div", _hoisted_18, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(changePageByWheelAnyWhereSwitch).value,
									"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => (0, vue.unref)(changePageByWheelAnyWhereSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[40] || (_cache[40] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Change Page by Scrolling the Mouse Wheel Anywhere ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_19, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(autoRedirectSwitch).value,
									"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => (0, vue.unref)(autoRedirectSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[41] || (_cache[41] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Auto-Redirect to Multi-Page Viewer ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_20, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(magnifierSwitch).value,
										"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => (0, vue.unref)(magnifierSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[49] || (_cache[49] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Image Magnifier ", -1)),
									(0, vue.createElementVNode)("div", _hoisted_21, [_cache[48] || (_cache[48] = (0, vue.createElementVNode)("p", null, " Long-press the activation button to enable the magnifier. Press both mouse buttons simultaneously to view the image at its original scale. ", -1)), (0, vue.createElementVNode)("div", _hoisted_22, [
										(0, vue.createElementVNode)("label", _hoisted_23, [_cache[42] || (_cache[42] = (0, vue.createTextVNode)(" Activation Button: ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("select", {
											"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => (0, vue.unref)(magnifierActivationButton).value = $event),
											class: "settings__select"
										}, [(0, vue.createElementVNode)("option", {
											class: "settings__option",
											value: (0, vue.unref)(MouseButton).Left
										}, "Left Mouse Button", 8, _hoisted_24), (0, vue.createElementVNode)("option", {
											class: "settings__option",
											value: (0, vue.unref)(MouseButton).Right
										}, "Right Mouse Button", 8, _hoisted_25)], 512), [[vue.vModelSelect, (0, vue.unref)(magnifierActivationButton).value]])]),
										(0, vue.createElementVNode)("label", _hoisted_26, [(0, vue.createVNode)(ToggleSwitch_default, {
											modelValue: (0, vue.unref)(magnifierToggleMode).value,
											"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => (0, vue.unref)(magnifierToggleMode).value = $event)
										}, null, 8, ["modelValue"]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)((0, vue.unref)(magnifierToggleMode).value ? "Toggle Mode (click once to enable, click again to disable)" : "Hold Mode (hold down to use)"), 1)]),
										(0, vue.createElementVNode)("label", _hoisted_27, [_cache[43] || (_cache[43] = (0, vue.createTextVNode)(" Default Scale: ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
											"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => (0, vue.unref)(magnifierDefaultScale).value = $event),
											type: "number",
											min: "1.1",
											max: "10",
											step: "0.1",
											class: "settings__input"
										}, null, 512), [[
											vue.vModelText,
											(0, vue.unref)(magnifierDefaultScale).value,
											void 0,
											{ number: true }
										]])]),
										(0, vue.createElementVNode)("label", _hoisted_28, [_cache[44] || (_cache[44] = (0, vue.createTextVNode)(" Scale Step (Mouse Wheel): ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
											"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => (0, vue.unref)(magnifierScaleStep).value = $event),
											type: "number",
											min: "0.05",
											max: "0.5",
											step: "0.05",
											class: "settings__input"
										}, null, 512), [[
											vue.vModelText,
											(0, vue.unref)(magnifierScaleStep).value,
											void 0,
											{ number: true }
										]])]),
										(0, vue.createElementVNode)("label", _hoisted_29, [_cache[45] || (_cache[45] = (0, vue.createTextVNode)(" Long-Press Threshold (ms): ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
											"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => (0, vue.unref)(magnifierLongPressThreshold).value = $event),
											type: "number",
											min: "50",
											max: "1000",
											step: "50",
											class: "settings__input"
										}, null, 512), [[
											vue.vModelText,
											(0, vue.unref)(magnifierLongPressThreshold).value,
											void 0,
											{ number: true }
										]])]),
										(0, vue.createElementVNode)("label", _hoisted_30, [_cache[46] || (_cache[46] = (0, vue.createTextVNode)(" Mouse Sensitivity X: ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
											"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => (0, vue.unref)(magnifierSensitivityX).value = $event),
											type: "number",
											min: "0.5",
											max: "5",
											step: "0.5",
											class: "settings__input"
										}, null, 512), [[
											vue.vModelText,
											(0, vue.unref)(magnifierSensitivityX).value,
											void 0,
											{ number: true }
										]])]),
										(0, vue.createElementVNode)("label", _hoisted_31, [_cache[47] || (_cache[47] = (0, vue.createTextVNode)(" Mouse Sensitivity Y: ", -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
											"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => (0, vue.unref)(magnifierSensitivityY).value = $event),
											type: "number",
											min: "0.5",
											max: "5",
											step: "0.5",
											class: "settings__input"
										}, null, 512), [[
											vue.vModelText,
											(0, vue.unref)(magnifierSensitivityY).value,
											void 0,
											{ number: true }
										]])])
									])])
								])
							]),
							(0, vue.createElementVNode)("section", _hoisted_32, [
								_cache[60] || (_cache[60] = (0, vue.createElementVNode)("h2", { class: "settings-panel__section-name" }, " Galleries Enhancer ", -1)),
								_cache[61] || (_cache[61] = (0, vue.createElementVNode)("hr", { class: "settings-panel__separator" }, null, -1)),
								(0, vue.createElementVNode)("div", _hoisted_33, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(infiniteScrollSwitch).value,
									"onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => (0, vue.unref)(infiniteScrollSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[52] || (_cache[52] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Infinite Scroll ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_34, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(scrollByRowSwitch).value,
										"onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => (0, vue.unref)(scrollByRowSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[53] || (_cache[53] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Scroll by Row ", -1)),
									_cache[54] || (_cache[54] = (0, vue.createElementVNode)("span", { class: "settings__notice" }, " *Synced with \"Gallery Enhancer - Scroll by Row\" ", -1))
								]),
								(0, vue.createElementVNode)("div", _hoisted_35, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(highlightSwitch).value,
										"onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => (0, vue.unref)(highlightSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[55] || (_cache[55] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Highlight Downloaded Galleries ", -1)),
									_cache[56] || (_cache[56] = (0, vue.createElementVNode)("div", { class: "settings__intro" }, " Sets the background of downloaded galleries to black (ExHentai) or light yellow (e-hentai). ", -1))
								]),
								(0, vue.createElementVNode)("div", _hoisted_36, [(0, vue.createVNode)(ToggleSwitch_default, {
									modelValue: (0, vue.unref)(archiveButtonSwitch).value,
									"onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => (0, vue.unref)(archiveButtonSwitch).value = $event)
								}, null, 8, ["modelValue"]), _cache[57] || (_cache[57] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Insert Archiver Buttons ", -1))]),
								(0, vue.createElementVNode)("div", _hoisted_37, [
									(0, vue.createVNode)(ToggleSwitch_default, {
										modelValue: (0, vue.unref)(showHiddenGalleriesSwitch).value,
										"onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => (0, vue.unref)(showHiddenGalleriesSwitch).value = $event)
									}, null, 8, ["modelValue"]),
									_cache[58] || (_cache[58] = (0, vue.createElementVNode)("h3", { class: "settings__name" }, " Show Hidden Galleries ", -1)),
									_cache[59] || (_cache[59] = (0, vue.createElementVNode)("div", { class: "settings__intro" }, " When enabled, galleries hidden via the 🚫 button remain visible (with the icon at full opacity) so you can unhide them. ", -1))
								])
							])
						]),
						(0, vue.createElementVNode)("span", {
							class: "settings-panel__close-button",
							onClick: _cache[23] || (_cache[23] = ($event) => isShow.value = false)
						}, [(0, vue.createVNode)(CrossButton_default)]),
						(0, vue.createElementVNode)("div", { class: "actions" }, [(0, vue.createElementVNode)("button", {
							class: "actions__button",
							onClick: reload
						}, " Apply and Reload ")])
					]),
					_: 1
				}, 8, ["modelValue"]);
			};
		}
	});
	var App_default = (0, vue.defineComponent)({
		__name: "App",
		setup(__props) {
			const { href } = window.location;
			const enhancer = getEnhancer();
			if (autoRedirectSwitch.value) redirectIfSinglePageViewer();
			if (showJapaneseTitle.value) changeTitleToJapanese();
			setCSS();
			function getEnhancer() {
				if (getElement(".itg.gld")) return GalleriesEnhancer_default;
				if (/https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)) return GalleryEnhancer_default;
				if (multipageViewerEnhancerSwitch.value && /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)) return MultiPageViewerEnhancer_default;
				return null;
			}
			function redirectIfSinglePageViewer() {
				if (/https:\/\/e[-x]hentai\.org\/s\/\w+\/\w+/.test(href)) (0, vue.onMounted)(() => {
					const page = location.pathname.split("-")[1];
					const url = getElement(".sb > a").href.replace("/g/", "/mpv/");
					location.href = `${url}#page${page}`;
				});
			}
			function setCSS() {
				document.documentElement.style.setProperty("--bg-color", isExHentai() ? "#34353b" : "#E3E0D1");
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, [((0, vue.openBlock)(), (0, vue.createBlock)(vue.Suspense, null, {
					default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)((0, vue.unref)(enhancer))))]),
					_: 1
				})), (0, vue.createVNode)(SettingsPanel_default)], 64);
			};
		}
	});
	_css(".vfm--fixed{position:fixed}.vfm--absolute{position:absolute}.vfm--inset{inset:0}.vfm--overlay{z-index:-1;background-color:#00000080}.vfm--prevent-none{pointer-events:none}.vfm--prevent-auto{pointer-events:auto}.vfm--outline-none:focus{outline:none}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.vfm-fade-enter-active{animation:.3s fade-in}.vfm-fade-leave-active{animation:.3s fade-out}.vfm-bounce-back{transition-property:transform;transition-duration:.3s}.vfm-slide-up-enter-active,.vfm-slide-up-leave-active,.vfm-slide-down-enter-active,.vfm-slide-down-leave-active{transition:transform .3s}.vfm-slide-down-enter-from,.vfm-slide-down-leave-to{transform:translateY(100vh)!important}.vfm-slide-up-enter-from,.vfm-slide-up-leave-to{transform:translateY(-100vh)!important}.vfm-slide-right-enter-active,.vfm-slide-right-leave-active,.vfm-slide-left-enter-active,.vfm-slide-left-leave-active{transition:transform .3s}.vfm-slide-right-enter-from,.vfm-slide-right-leave-to{transform:translate(100vw)!important}.vfm-slide-left-enter-from,.vfm-slide-left-leave-to{transform:translate(-100vw)!important}.vfm-swipe-banner-back,.vfm-swipe-banner-forward{z-index:10;width:27px;position:fixed;top:0;bottom:0}.vfm-swipe-banner-back{left:0}.vfm-swipe-banner-forward{right:0}");
	var app = (0, vue.createApp)(App_default);
	var vfm = zo();
	app.use(vfm);
	app.use(src_default, {
		transition: "Vue-Toastification__fade",
		maxToasts: 2,
		newestOnTop: true,
		pauseOnFocusLoss: true,
		hideProgressBar: true,
		closeButton: false
	});
	(async () => {
		await initializeMonkeySwitches();
		app.mount((() => {
			const app = document.createElement("div");
			app.classList.add("enhancer-container");
			document.body.append(app);
			return app;
		})());
	})();
})(Vue);
