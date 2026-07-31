/**
 * @name 7DE
 * @description 7TV emotes in Discord
 * @version 1.2.1
 * @author axglee
 * @source https://github.com/axglee/7DE/blob/main/7DE.plugin.js
 */
var SevenDEPlugin = (function() {
	//#region \0rolldown/runtime.js
	var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	//#endregion
	//#region node_modules/esm-env/false.js
	var init_false = __esmMin((() => {}));
	//#endregion
	//#region node_modules/esm-env/index.js
	var init_esm_env = __esmMin((() => {
		init_false();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/shared/utils.js
	/** @param {Array<() => void>} arr */
	function run_all(arr) {
		for (var i = 0; i < arr.length; i++) arr[i]();
	}
	/**
	* TODO replace with Promise.withResolvers once supported widely enough
	* @template [T=void]
	*/
	function deferred() {
		/** @type {(value: T) => void} */
		var resolve;
		/** @type {(reason: any) => void} */
		var reject;
		return {
			promise: new Promise((res, rej) => {
				resolve = res;
				reject = rej;
			}),
			resolve,
			reject
		};
	}
	var is_array, index_of, includes, array_from, define_property, get_descriptor, get_descriptors, object_prototype, array_prototype, get_prototype_of, is_extensible, noop;
	var init_utils$3 = __esmMin((() => {
		is_array = Array.isArray;
		index_of = Array.prototype.indexOf;
		includes = Array.prototype.includes;
		array_from = Array.from;
		define_property = Object.defineProperty;
		get_descriptor = Object.getOwnPropertyDescriptor;
		get_descriptors = Object.getOwnPropertyDescriptors;
		object_prototype = Object.prototype;
		array_prototype = Array.prototype;
		get_prototype_of = Object.getPrototypeOf;
		is_extensible = Object.isExtensible;
		noop = () => {};
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	var init_typeof = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var init_toPrimitive = __esmMin((() => {
		init_typeof();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
	})), _globalThis$document, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, REACTION_RAN, DESTROYING, EFFECT_TRANSPARENT, EFFECT_PRESERVED, USER_EFFECT, EFFECT_OFFSCREEN, WAS_MARKED, REACTION_IS_UPDATING, ASYNC, ERROR_VALUE, STATE_SYMBOL, LEGACY_PROPS, LOADING_ATTR_SYMBOL, STALE_REACTION, IS_XHTML;
	var init_constants$1 = __esmMin((() => {
		init_defineProperty();
		CLEAN = 1024;
		DIRTY = 2048;
		MAYBE_DIRTY = 4096;
		INERT = 8192;
		DESTROYED = 16384;
		REACTION_RAN = 32768;
		DESTROYING = 1 << 25;
		EFFECT_TRANSPARENT = 65536;
		EFFECT_PRESERVED = 1 << 19;
		USER_EFFECT = 1 << 20;
		EFFECT_OFFSCREEN = 1 << 25;
		WAS_MARKED = 65536;
		REACTION_IS_UPDATING = 1 << 21;
		ASYNC = 1 << 22;
		ERROR_VALUE = 1 << 23;
		STATE_SYMBOL = Symbol("$state");
		LEGACY_PROPS = Symbol("legacy props");
		LOADING_ATTR_SYMBOL = Symbol("");
		STALE_REACTION = new class StaleReactionError extends Error {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "name", "StaleReactionError");
				_defineProperty(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
			}
		}();
		IS_XHTML = !!((_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
	}));
	var init_errors$1 = __esmMin((() => {
		init_esm_env();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/errors.js
	/**
	* Cannot create a `$derived(...)` with an `await` expression outside of an effect tree
	* @returns {never}
	*/
	function async_derived_orphan() {
		throw new Error(`https://svelte.dev/e/async_derived_orphan`);
	}
	/**
	* Keyed each block has duplicate key `%value%` at indexes %a% and %b%
	* @param {string} a
	* @param {string} b
	* @param {string | undefined | null} [value]
	* @returns {never}
	*/
	function each_key_duplicate(a, b, value) {
		throw new Error(`https://svelte.dev/e/each_key_duplicate`);
	}
	/**
	* `%rune%` cannot be used inside an effect cleanup function
	* @param {string} rune
	* @returns {never}
	*/
	function effect_in_teardown(rune) {
		throw new Error(`https://svelte.dev/e/effect_in_teardown`);
	}
	/**
	* Effect cannot be created inside a `$derived` value that was not itself created inside an effect
	* @returns {never}
	*/
	function effect_in_unowned_derived() {
		throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
	}
	/**
	* `%rune%` can only be used inside an effect (e.g. during component initialisation)
	* @param {string} rune
	* @returns {never}
	*/
	function effect_orphan(rune) {
		throw new Error(`https://svelte.dev/e/effect_orphan`);
	}
	/**
	* Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
	* @returns {never}
	*/
	function effect_update_depth_exceeded() {
		throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
	}
	/**
	* Cannot do `bind:%key%={undefined}` when `%key%` has a fallback value
	* @param {string} key
	* @returns {never}
	*/
	function props_invalid_value(key) {
		throw new Error(`https://svelte.dev/e/props_invalid_value`);
	}
	/**
	* Property descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.
	* @returns {never}
	*/
	function state_descriptors_fixed() {
		throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
	}
	/**
	* Cannot set prototype of `$state` object
	* @returns {never}
	*/
	function state_prototype_fixed() {
		throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
	}
	/**
	* Updating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`
	* @returns {never}
	*/
	function state_unsafe_mutation() {
		throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
	}
	/**
	* A `<svelte:boundary>` `reset` function cannot be called while an error is still being handled
	* @returns {never}
	*/
	function svelte_boundary_reset_onerror() {
		throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
	}
	var init_errors = __esmMin((() => {
		init_esm_env();
		init_errors$1();
	})), HYDRATION_ERROR, UNINITIALIZED, NAMESPACE_HTML;
	var init_constants = __esmMin((() => {
		HYDRATION_ERROR = {};
		UNINITIALIZED = Symbol();
		NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
	}));
	/**
	* Reading a derived belonging to a now-destroyed effect may result in stale values
	*/
	function derived_inert() {
		console.warn(`https://svelte.dev/e/derived_inert`);
	}
	/**
	* Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near %location%
	* @param {string | undefined | null} [location]
	*/
	function hydration_mismatch(location) {
		console.warn(`https://svelte.dev/e/hydration_mismatch`);
	}
	/**
	* A `<svelte:boundary>` `reset` function only resets the boundary the first time it is called
	*/
	function svelte_boundary_reset_noop() {
		console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
	}
	var init_warnings = __esmMin((() => {
		init_esm_env();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/hydration.js
	/** @param {boolean} value */
	function set_hydrating(value) {
		hydrating = value;
	}
	/** @param {TemplateNode | null} node */
	function set_hydrate_node(node) {
		if (node === null) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		return hydrate_node = node;
	}
	function hydrate_next() {
		return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
	}
	/** @param {TemplateNode} node */
	function reset(node) {
		if (!hydrating) return;
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		hydrate_node = node;
	}
	function next(count = 1) {
		if (hydrating) {
			var i = count;
			var node = hydrate_node;
			while (i--) node = /* @__PURE__ */ get_next_sibling(node);
			hydrate_node = node;
		}
	}
	/**
	* Skips or removes (depending on {@link remove}) all nodes starting at `hydrate_node` up until the next hydration end comment
	* @param {boolean} remove
	*/
	function skip_nodes(remove = true) {
		var depth = 0;
		var node = hydrate_node;
		while (true) {
			if (node.nodeType === 8) {
				var data = node.data;
				if (data === "]") {
					if (depth === 0) return node;
					depth -= 1;
				} else if (data === "[" || data === "[!" || data[0] === "[" && !isNaN(Number(data.slice(1)))) depth += 1;
			}
			var next = /* @__PURE__ */ get_next_sibling(node);
			if (remove) node.remove();
			node = next;
		}
	}
	/**
	*
	* @param {TemplateNode} node
	*/
	function read_hydration_instruction(node) {
		if (!node || node.nodeType !== 8) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		return node.data;
	}
	var hydrating, hydrate_node;
	var init_hydration = __esmMin((() => {
		init_constants$1();
		init_constants();
		init_warnings();
		init_operations$1();
		hydrating = false;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/equality.js
	/** @import { Equals } from '#client' */
	/** @type {Equals} */
	function equals(value) {
		return value === this.v;
	}
	/**
	* @param {unknown} a
	* @param {unknown} b
	* @returns {boolean}
	*/
	function safe_not_equal(a, b) {
		return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
	}
	/** @type {Equals} */
	function safe_equals(value) {
		return !safe_not_equal(value, this.v);
	}
	var init_equality$1 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/svelte/src/internal/flags/index.js
	function enable_legacy_mode_flag() {
		legacy_mode_flag = true;
	}
	var async_mode_flag, legacy_mode_flag;
	var init_flags = __esmMin((() => {
		async_mode_flag = false;
		legacy_mode_flag = false;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/shared/clone.js
	var init_clone = __esmMin((() => {
		init_utils$3();
	}));
	var init_tracing = __esmMin((() => {
		init_clone();
		init_constants$1();
		init_effects();
		init_runtime();
	}));
	var init_dev = __esmMin((() => {
		init_esm_env();
		init_utils$3();
		init_errors$1();
	}));
	var init_objectSpread2 = __esmMin((() => {
		init_defineProperty();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/context.js
	/** @param {ComponentContext | null} context */
	function set_component_context(context) {
		component_context = context;
	}
	/**
	* @param {Record<string, unknown>} props
	* @param {any} runes
	* @param {Function} [fn]
	* @returns {void}
	*/
	function push(props, runes = false, fn) {
		component_context = {
			p: component_context,
			i: false,
			c: null,
			e: null,
			s: props,
			x: null,
			r: active_effect,
			l: legacy_mode_flag && !runes ? {
				s: null,
				u: null,
				$: []
			} : null
		};
	}
	/**
	* @template {Record<string, any>} T
	* @param {T} [component]
	* @returns {T}
	*/
	function pop(component) {
		var context = component_context;
		var effects = context.e;
		if (effects !== null) {
			context.e = null;
			for (var fn of effects) create_user_effect(fn);
		}
		if (component !== void 0) context.x = component;
		context.i = true;
		component_context = context.p;
		return component !== null && component !== void 0 ? component : {};
	}
	/** @returns {boolean} */
	function is_runes() {
		return !legacy_mode_flag || component_context !== null && component_context.l === null;
	}
	var component_context;
	var init_context = __esmMin((() => {
		init_esm_env();
		init_errors();
		init_runtime();
		init_effects();
		init_flags();
		init_constants$1();
		component_context = null;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/task.js
	function run_micro_tasks() {
		var tasks = micro_tasks;
		micro_tasks = [];
		run_all(tasks);
	}
	/**
	* @param {() => void} fn
	*/
	function queue_micro_task(fn) {
		if (micro_tasks.length === 0 && !is_flushing_sync) {
			var tasks = micro_tasks;
			queueMicrotask(() => {
				if (tasks === micro_tasks) run_micro_tasks();
			});
		}
		micro_tasks.push(fn);
	}
	/**
	* Synchronously run any queued tasks.
	*/
	function flush_tasks() {
		while (micro_tasks.length > 0) run_micro_tasks();
	}
	var micro_tasks;
	var init_task = __esmMin((() => {
		init_utils$3();
		init_batch();
		micro_tasks = [];
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/error-handling.js
	/**
	* @param {unknown} error
	*/
	function handle_error(error) {
		var effect = active_effect;
		if (effect === null) {
			/** @type {Derived} */ active_reaction.f |= ERROR_VALUE;
			return error;
		}
		if ((effect.f & 32768) === 0 && (effect.f & 4) === 0) throw error;
		invoke_error_boundary(error, effect);
	}
	/**
	* @param {unknown} error
	* @param {Effect | null} effect
	*/
	function invoke_error_boundary(error, effect) {
		while (effect !== null) {
			if ((effect.f & 128) !== 0) {
				if ((effect.f & 32768) === 0) throw error;
				try {
					/** @type {Boundary} */ effect.b.error(error);
					return;
				} catch (e) {
					error = e;
				}
			}
			effect = effect.parent;
		}
		throw error;
	}
	var init_error_handling = __esmMin((() => {
		init_esm_env();
		init_constants();
		init_operations$1();
		init_constants$1();
		init_utils$3();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/status.js
	/**
	* @param {Signal} signal
	* @param {number} status
	*/
	function set_signal_status(signal, status) {
		signal.f = signal.f & STATUS_MASK | status;
	}
	/**
	* Set a derived's status to CLEAN or MAYBE_DIRTY based on its connection state.
	* @param {Derived} derived
	*/
	function update_derived_status(derived) {
		if ((derived.f & 512) !== 0 || derived.deps === null) set_signal_status(derived, CLEAN);
		else set_signal_status(derived, MAYBE_DIRTY);
	}
	var STATUS_MASK;
	var init_status = __esmMin((() => {
		init_constants$1();
		STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/utils.js
	/**
	* @param {Value[] | null} deps
	*/
	function clear_marked(deps) {
		if (deps === null) return;
		for (const dep of deps) {
			if ((dep.f & 2) === 0 || (dep.f & 65536) === 0) continue;
			dep.f ^= WAS_MARKED;
			clear_marked(
				/** @type {Derived} */
				dep.deps
			);
		}
	}
	/**
	* @param {Effect} effect
	* @param {Set<Effect>} dirty_effects
	* @param {Set<Effect>} maybe_dirty_effects
	*/
	function defer_effect(effect, dirty_effects, maybe_dirty_effects) {
		if ((effect.f & 2048) !== 0) dirty_effects.add(effect);
		else if ((effect.f & 4096) !== 0) maybe_dirty_effects.add(effect);
		clear_marked(effect.deps);
		set_signal_status(effect, CLEAN);
	}
	var init_utils$2 = __esmMin((() => {
		init_constants$1();
		init_status();
	}));
	//#endregion
	//#region node_modules/svelte/src/store/utils.js
	var init_utils$1 = __esmMin((() => {
		init_runtime();
		init_utils$3();
	}));
	//#endregion
	//#region node_modules/svelte/src/store/shared/index.js
	var init_shared$1 = __esmMin((() => {
		init_utils$3();
		init_utils$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/store.js
	/**
	* Returns a tuple that indicates whether `fn()` reads a prop that is a store binding.
	* Used to prevent `binding_property_non_reactive` validation false positives and
	* ensure that these props are treated as mutable even in runes mode
	* @template T
	* @param {() => T} fn
	* @returns {[T, boolean]}
	*/
	function capture_store_binding(fn) {
		var previous_is_store_binding = is_store_binding;
		try {
			is_store_binding = false;
			return [fn(), is_store_binding];
		} finally {
			is_store_binding = previous_is_store_binding;
		}
	}
	var legacy_is_updating_store, is_store_binding;
	var init_store = __esmMin((() => {
		init_utils$1();
		init_shared$1();
		init_utils$3();
		init_runtime();
		init_effects();
		init_sources();
		legacy_is_updating_store = false;
		is_store_binding = false;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/debug.js
	var init_debug = __esmMin((() => {
		init_constants$1();
		init_clone();
		init_runtime();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/checkPrivateRedeclaration.js
	function _checkPrivateRedeclaration(e, t) {
		if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
	}
	var init_checkPrivateRedeclaration = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/classPrivateMethodInitSpec.js
	function _classPrivateMethodInitSpec(e, a) {
		_checkPrivateRedeclaration(e, a), a.add(e);
	}
	var init_classPrivateMethodInitSpec = __esmMin((() => {
		init_checkPrivateRedeclaration();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/classPrivateFieldInitSpec.js
	function _classPrivateFieldInitSpec(e, t, a) {
		_checkPrivateRedeclaration(e, t), t.set(e, a);
	}
	var init_classPrivateFieldInitSpec = __esmMin((() => {
		init_checkPrivateRedeclaration();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/assertClassBrand.js
	function _assertClassBrand(e, t, n) {
		if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
		throw new TypeError("Private element is not present on this object");
	}
	var init_assertClassBrand = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/classPrivateFieldGet2.js
	function _classPrivateFieldGet2(s, a) {
		return s.get(_assertClassBrand(s, a));
	}
	var init_classPrivateFieldGet2 = __esmMin((() => {
		init_assertClassBrand();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/classPrivateFieldSet2.js
	function _classPrivateFieldSet2(s, a, r) {
		return s.set(_assertClassBrand(s, a), r), r;
	}
	var init_classPrivateFieldSet2 = __esmMin((() => {
		init_assertClassBrand();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/asyncToGenerator.js
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c), u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this, e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}
	var init_asyncToGenerator = __esmMin((() => {}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/batch.js
	function _is_deferred() {
		return this.is_fork || _classPrivateFieldGet2(_blocking_pending, this).size > 0;
	}
	function _is_blocked() {
		for (const batch of _classPrivateFieldGet2(_blockers, this)) for (const effect of _classPrivateFieldGet2(_blocking_pending, batch).keys()) {
			var skipped = false;
			var e = effect;
			while (e.parent !== null) {
				if (_classPrivateFieldGet2(_skipped_branches, this).has(e)) {
					skipped = true;
					break;
				}
				e = e.parent;
			}
			if (!skipped) return true;
		}
		return false;
	}
	function _process() {
		if (flush_count++ > 1e3) {
			batches.delete(this);
			infinite_loop_guard();
		}
		if (!_assertClassBrand(_Batch_brand, this, _is_deferred).call(this)) {
			for (const e of _classPrivateFieldGet2(_dirty_effects$1, this)) {
				_classPrivateFieldGet2(_maybe_dirty_effects$1, this).delete(e);
				set_signal_status(e, DIRTY);
				this.schedule(e);
			}
			for (const e of _classPrivateFieldGet2(_maybe_dirty_effects$1, this)) {
				set_signal_status(e, MAYBE_DIRTY);
				this.schedule(e);
			}
		}
		const roots = _classPrivateFieldGet2(_roots, this);
		_classPrivateFieldSet2(_roots, this, []);
		this.apply();
		/** @type {Effect[]} */
		var effects = collected_effects = [];
		/** @type {Effect[]} */
		var render_effects = [];
		/**
		* @type {Effect[]}
		* @deprecated when we get rid of legacy mode and stores, we can get rid of this
		*/
		var updates = legacy_updates = [];
		for (const root of roots) try {
			_assertClassBrand(_Batch_brand, this, _traverse).call(this, root, effects, render_effects);
		} catch (e) {
			reset_all(root);
			throw e;
		}
		current_batch = null;
		if (updates.length > 0) {
			var batch = _Batch.ensure();
			for (const e of updates) batch.schedule(e);
		}
		collected_effects = null;
		legacy_updates = null;
		if (_assertClassBrand(_Batch_brand, this, _is_deferred).call(this) || _assertClassBrand(_Batch_brand, this, _is_blocked).call(this)) {
			_assertClassBrand(_Batch_brand, this, _defer_effects).call(this, render_effects);
			_assertClassBrand(_Batch_brand, this, _defer_effects).call(this, effects);
			for (const [e, t] of _classPrivateFieldGet2(_skipped_branches, this)) reset_branch(e, t);
		} else {
			var _classPrivateFieldGet2$1;
			if (_classPrivateFieldGet2(_pending, this).size === 0) batches.delete(this);
			_classPrivateFieldGet2(_dirty_effects$1, this).clear();
			_classPrivateFieldGet2(_maybe_dirty_effects$1, this).clear();
			for (const fn of _classPrivateFieldGet2(_commit_callbacks, this)) fn(this);
			_classPrivateFieldGet2(_commit_callbacks, this).clear();
			previous_batch = this;
			flush_queued_effects(render_effects);
			flush_queued_effects(effects);
			previous_batch = null;
			(_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_deferred, this)) === null || _classPrivateFieldGet2$1 === void 0 || _classPrivateFieldGet2$1.resolve();
		}
		var next_batch = current_batch;
		if (_classPrivateFieldGet2(_roots, this).length > 0) {
			var _next_batch;
			const batch = (_next_batch = next_batch) !== null && _next_batch !== void 0 ? _next_batch : next_batch = this;
			_classPrivateFieldGet2(_roots, batch).push(..._classPrivateFieldGet2(_roots, this).filter((r) => !_classPrivateFieldGet2(_roots, batch).includes(r)));
		}
		if (next_batch !== null) {
			batches.add(next_batch);
			_assertClassBrand(_Batch_brand, next_batch, _process).call(next_batch);
		}
		if (async_mode_flag && !batches.has(this)) _assertClassBrand(_Batch_brand, this, _commit$1).call(this);
	}
	/**
	* Traverse the effect tree, executing effects or stashing
	* them for later execution as appropriate
	* @param {Effect} root
	* @param {Effect[]} effects
	* @param {Effect[]} render_effects
	*/
	function _traverse(root, effects, render_effects) {
		root.f ^= CLEAN;
		var effect = root.first;
		while (effect !== null) {
			var flags = effect.f;
			var is_branch = (flags & 96) !== 0;
			if (!(is_branch && (flags & 1024) !== 0 || (flags & 8192) !== 0 || _classPrivateFieldGet2(_skipped_branches, this).has(effect)) && effect.fn !== null) {
				if (is_branch) effect.f ^= CLEAN;
				else if ((flags & 4) !== 0) effects.push(effect);
				else if (async_mode_flag && (flags & 16777224) !== 0) render_effects.push(effect);
				else if (is_dirty(effect)) {
					if ((flags & 16) !== 0) _classPrivateFieldGet2(_maybe_dirty_effects$1, this).add(effect);
					update_effect(effect);
				}
				var child = effect.first;
				if (child !== null) {
					effect = child;
					continue;
				}
			}
			while (effect !== null) {
				var next = effect.next;
				if (next !== null) {
					effect = next;
					break;
				}
				effect = effect.parent;
			}
		}
	}
	/**
	* @param {Effect[]} effects
	*/
	function _defer_effects(effects) {
		for (var i = 0; i < effects.length; i += 1) defer_effect(effects[i], _classPrivateFieldGet2(_dirty_effects$1, this), _classPrivateFieldGet2(_maybe_dirty_effects$1, this));
	}
	function _commit$1() {
		for (const batch of batches) {
			var is_earlier = batch.id < this.id;
			/** @type {Source[]} */
			var sources = [];
			for (const [source, [value, is_derived]] of this.current) {
				if (batch.current.has(source)) {
					var batch_value = batch.current.get(source)[0];
					if (is_earlier && value !== batch_value) batch.current.set(source, [value, is_derived]);
					else continue;
				}
				sources.push(source);
			}
			var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
			if (others.length === 0) {
				if (is_earlier) batch.discard();
			} else if (sources.length > 0) {
				if (is_earlier) for (const unskipped of _classPrivateFieldGet2(_unskipped_branches, this)) batch.unskip_effect(unskipped, (e) => {
					if ((e.f & 4194320) !== 0) batch.schedule(e);
					else _assertClassBrand(_Batch_brand, batch, _defer_effects).call(batch, [e]);
				});
				batch.activate();
				/** @type {Set<Value>} */
				var marked = /* @__PURE__ */ new Set();
				/** @type {Map<Reaction, boolean>} */
				var checked = /* @__PURE__ */ new Map();
				for (var source of sources) mark_effects(source, others, marked, checked);
				checked = /* @__PURE__ */ new Map();
				var current_unequal = [...batch.current.keys()].filter((c) => this.current.has(c) ? this.current.get(c)[0] !== c : true);
				for (const effect of _classPrivateFieldGet2(_new_effects, this)) if ((effect.f & 155648) === 0 && depends_on(effect, current_unequal, checked)) if ((effect.f & 4194320) !== 0) {
					set_signal_status(effect, DIRTY);
					batch.schedule(effect);
				} else _classPrivateFieldGet2(_dirty_effects$1, batch).add(effect);
				if (_classPrivateFieldGet2(_roots, batch).length > 0) {
					batch.apply();
					for (var root of _classPrivateFieldGet2(_roots, batch)) _assertClassBrand(_Batch_brand, batch, _traverse).call(batch, root, [], []);
					_classPrivateFieldSet2(_roots, batch, []);
				}
				batch.deactivate();
			}
		}
		for (const batch of batches) if (_classPrivateFieldGet2(_blockers, batch).has(this)) {
			_classPrivateFieldGet2(_blockers, batch).delete(this);
			if (_classPrivateFieldGet2(_blockers, batch).size === 0 && !_assertClassBrand(_Batch_brand, batch, _is_deferred).call(batch)) {
				batch.activate();
				_assertClassBrand(_Batch_brand, batch, _process).call(batch);
			}
		}
	}
	/**
	* Synchronously flush any pending updates.
	* Returns void if no callback is provided, otherwise returns the result of calling the callback.
	* @template [T=void]
	* @param {(() => T) | undefined} [fn]
	* @returns {T}
	*/
	function flushSync(fn) {
		var was_flushing_sync = is_flushing_sync;
		is_flushing_sync = true;
		try {
			var result;
			if (fn) {
				if (current_batch !== null && !current_batch.is_fork) current_batch.flush();
				result = fn();
			}
			while (true) {
				flush_tasks();
				if (current_batch === null) return result;
				current_batch.flush();
			}
		} finally {
			is_flushing_sync = was_flushing_sync;
		}
	}
	function infinite_loop_guard() {
		try {
			effect_update_depth_exceeded();
		} catch (error) {
			invoke_error_boundary(error, last_scheduled_effect);
		}
	}
	/**
	* @param {Array<Effect>} effects
	* @returns {void}
	*/
	function flush_queued_effects(effects) {
		var length = effects.length;
		if (length === 0) return;
		var i = 0;
		while (i < length) {
			var effect = effects[i++];
			if ((effect.f & 24576) === 0 && is_dirty(effect)) {
				eager_block_effects = /* @__PURE__ */ new Set();
				update_effect(effect);
				if (effect.deps === null && effect.first === null && effect.nodes === null && effect.teardown === null && effect.ac === null) unlink_effect(effect);
				if ((eager_block_effects === null || eager_block_effects === void 0 ? void 0 : eager_block_effects.size) > 0) {
					old_values.clear();
					for (const e of eager_block_effects) {
						if ((e.f & 24576) !== 0) continue;
						/** @type {Effect[]} */
						const ordered_effects = [e];
						let ancestor = e.parent;
						while (ancestor !== null) {
							if (eager_block_effects.has(ancestor)) {
								eager_block_effects.delete(ancestor);
								ordered_effects.push(ancestor);
							}
							ancestor = ancestor.parent;
						}
						for (let j = ordered_effects.length - 1; j >= 0; j--) {
							const e = ordered_effects[j];
							if ((e.f & 24576) !== 0) continue;
							update_effect(e);
						}
					}
					eager_block_effects.clear();
				}
			}
		}
		eager_block_effects = null;
	}
	/**
	* This is similar to `mark_reactions`, but it only marks async/block effects
	* depending on `value` and at least one of the other `sources`, so that
	* these effects can re-run after another batch has been committed
	* @param {Value} value
	* @param {Source[]} sources
	* @param {Set<Value>} marked
	* @param {Map<Reaction, boolean>} checked
	*/
	function mark_effects(value, sources, marked, checked) {
		if (marked.has(value)) return;
		marked.add(value);
		if (value.reactions !== null) for (const reaction of value.reactions) {
			const flags = reaction.f;
			if ((flags & 2) !== 0) mark_effects(reaction, sources, marked, checked);
			else if ((flags & 4194320) !== 0 && (flags & 2048) === 0 && depends_on(reaction, sources, checked)) {
				set_signal_status(reaction, DIRTY);
				schedule_effect(reaction);
			}
		}
	}
	/**
	* @param {Reaction} reaction
	* @param {Source[]} sources
	* @param {Map<Reaction, boolean>} checked
	*/
	function depends_on(reaction, sources, checked) {
		const depends = checked.get(reaction);
		if (depends !== void 0) return depends;
		if (reaction.deps !== null) for (const dep of reaction.deps) {
			if (includes.call(sources, dep)) return true;
			if ((dep.f & 2) !== 0 && depends_on(dep, sources, checked)) {
				checked.set(dep, true);
				return true;
			}
		}
		checked.set(reaction, false);
		return false;
	}
	/**
	* @param {Effect} effect
	* @returns {void}
	*/
	function schedule_effect(effect) {
		/** @type {Batch} */ current_batch.schedule(effect);
	}
	/**
	* Mark all the effects inside a skipped branch CLEAN, so that
	* they can be correctly rescheduled later. Tracks dirty and maybe_dirty
	* effects so they can be rescheduled if the branch survives.
	* @param {Effect} effect
	* @param {{ d: Effect[], m: Effect[] }} tracked
	*/
	function reset_branch(effect, tracked) {
		if ((effect.f & 32) !== 0 && (effect.f & 1024) !== 0) return;
		if ((effect.f & 2048) !== 0) tracked.d.push(effect);
		else if ((effect.f & 4096) !== 0) tracked.m.push(effect);
		set_signal_status(effect, CLEAN);
		var e = effect.first;
		while (e !== null) {
			reset_branch(e, tracked);
			e = e.next;
		}
	}
	/**
	* Mark an entire effect tree clean following an error
	* @param {Effect} effect
	*/
	function reset_all(effect) {
		set_signal_status(effect, CLEAN);
		var e = effect.first;
		while (e !== null) {
			reset_all(e);
			e = e.next;
		}
	}
	var _Batch, batches, current_batch, previous_batch, batch_values, last_scheduled_effect, is_flushing_sync, is_processing, collected_effects, legacy_updates, flush_count, uid, _commit_callbacks, _discard_callbacks, _fork_commit_callbacks, _pending, _blocking_pending, _deferred, _roots, _new_effects, _dirty_effects$1, _maybe_dirty_effects$1, _skipped_branches, _unskipped_branches, _decrement_queued, _blockers, _Batch_brand, Batch, eager_block_effects;
	var init_batch = __esmMin((() => {
		init_constants$1();
		init_flags();
		init_utils$3();
		init_runtime();
		init_errors();
		init_task();
		init_esm_env();
		init_error_handling();
		init_sources();
		init_effects();
		init_utils$2();
		init_constants();
		init_status();
		init_store();
		init_dev();
		init_debug();
		init_classPrivateMethodInitSpec();
		init_defineProperty();
		init_classPrivateFieldInitSpec();
		init_classPrivateFieldGet2();
		init_assertClassBrand();
		init_classPrivateFieldSet2();
		batches = /* @__PURE__ */ new Set();
		current_batch = null;
		previous_batch = null;
		batch_values = null;
		last_scheduled_effect = null;
		is_flushing_sync = false;
		is_processing = false;
		collected_effects = null;
		legacy_updates = null;
		flush_count = 0;
		uid = 1;
		_commit_callbacks = /* @__PURE__ */ new WeakMap();
		_discard_callbacks = /* @__PURE__ */ new WeakMap();
		_fork_commit_callbacks = /* @__PURE__ */ new WeakMap();
		_pending = /* @__PURE__ */ new WeakMap();
		_blocking_pending = /* @__PURE__ */ new WeakMap();
		_deferred = /* @__PURE__ */ new WeakMap();
		_roots = /* @__PURE__ */ new WeakMap();
		_new_effects = /* @__PURE__ */ new WeakMap();
		_dirty_effects$1 = /* @__PURE__ */ new WeakMap();
		_maybe_dirty_effects$1 = /* @__PURE__ */ new WeakMap();
		_skipped_branches = /* @__PURE__ */ new WeakMap();
		_unskipped_branches = /* @__PURE__ */ new WeakMap();
		_decrement_queued = /* @__PURE__ */ new WeakMap();
		_blockers = /* @__PURE__ */ new WeakMap();
		_Batch_brand = /* @__PURE__ */ new WeakSet();
		Batch = class Batch {
			constructor() {
				_classPrivateMethodInitSpec(this, _Batch_brand);
				_defineProperty(this, "id", uid++);
				_defineProperty(
					this,
					/**
					* The current values of any signals that are updated in this batch.
					* Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
					* They keys of this map are identical to `this.#previous`
					* @type {Map<Value, [any, boolean]>}
					*/
					"current",
					/* @__PURE__ */ new Map()
				);
				_defineProperty(
					this,
					/**
					* The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
					* They keys of this map are identical to `this.#current`
					* @type {Map<Value, any>}
					*/
					"previous",
					/* @__PURE__ */ new Map()
				);
				_classPrivateFieldInitSpec(this, _commit_callbacks, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _discard_callbacks, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _fork_commit_callbacks, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _pending, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _blocking_pending, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _deferred, null);
				_classPrivateFieldInitSpec(this, _roots, []);
				_classPrivateFieldInitSpec(this, _new_effects, []);
				_classPrivateFieldInitSpec(this, _dirty_effects$1, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _maybe_dirty_effects$1, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _skipped_branches, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _unskipped_branches, /* @__PURE__ */ new Set());
				_defineProperty(this, "is_fork", false);
				_classPrivateFieldInitSpec(this, _decrement_queued, false);
				_classPrivateFieldInitSpec(this, _blockers, /* @__PURE__ */ new Set());
			}
			/**
			* Add an effect to the #skipped_branches map and reset its children
			* @param {Effect} effect
			*/
			skip_effect(effect) {
				if (!_classPrivateFieldGet2(_skipped_branches, this).has(effect)) _classPrivateFieldGet2(_skipped_branches, this).set(effect, {
					d: [],
					m: []
				});
				_classPrivateFieldGet2(_unskipped_branches, this).delete(effect);
			}
			/**
			* Remove an effect from the #skipped_branches map and reschedule
			* any tracked dirty/maybe_dirty child effects
			* @param {Effect} effect
			* @param {(e: Effect) => void} callback
			*/
			unskip_effect(effect, callback = (e) => this.schedule(e)) {
				var tracked = _classPrivateFieldGet2(_skipped_branches, this).get(effect);
				if (tracked) {
					_classPrivateFieldGet2(_skipped_branches, this).delete(effect);
					for (var e of tracked.d) {
						set_signal_status(e, DIRTY);
						callback(e);
					}
					for (e of tracked.m) {
						set_signal_status(e, MAYBE_DIRTY);
						callback(e);
					}
				}
				_classPrivateFieldGet2(_unskipped_branches, this).add(effect);
			}
			/**
			* Associate a change to a given source with the current
			* batch, noting its previous and current values
			* @param {Value} source
			* @param {any} value
			* @param {boolean} [is_derived]
			*/
			capture(source, value, is_derived = false) {
				if (source.v !== UNINITIALIZED && !this.previous.has(source)) this.previous.set(source, source.v);
				if ((source.f & 8388608) === 0) {
					this.current.set(source, [value, is_derived]);
					batch_values === null || batch_values === void 0 || batch_values.set(source, value);
				}
				if (!this.is_fork) source.v = value;
			}
			activate() {
				current_batch = this;
			}
			deactivate() {
				current_batch = null;
				batch_values = null;
			}
			flush() {
				try {
					is_processing = true;
					current_batch = this;
					_assertClassBrand(_Batch_brand, this, _process).call(this);
				} finally {
					flush_count = 0;
					last_scheduled_effect = null;
					collected_effects = null;
					legacy_updates = null;
					is_processing = false;
					current_batch = null;
					batch_values = null;
					old_values.clear();
				}
			}
			discard() {
				for (const fn of _classPrivateFieldGet2(_discard_callbacks, this)) fn(this);
				_classPrivateFieldGet2(_discard_callbacks, this).clear();
				_classPrivateFieldGet2(_fork_commit_callbacks, this).clear();
				batches.delete(this);
			}
			/**
			* @param {Effect} effect
			*/
			register_created_effect(effect) {
				_classPrivateFieldGet2(_new_effects, this).push(effect);
			}
			/**
			* @param {boolean} blocking
			* @param {Effect} effect
			*/
			increment(blocking, effect) {
				var _this$pending$get;
				let pending_count = (_this$pending$get = _classPrivateFieldGet2(_pending, this).get(effect)) !== null && _this$pending$get !== void 0 ? _this$pending$get : 0;
				_classPrivateFieldGet2(_pending, this).set(effect, pending_count + 1);
				if (blocking) {
					var _this$blocking_pendin;
					let blocking_pending_count = (_this$blocking_pendin = _classPrivateFieldGet2(_blocking_pending, this).get(effect)) !== null && _this$blocking_pendin !== void 0 ? _this$blocking_pendin : 0;
					_classPrivateFieldGet2(_blocking_pending, this).set(effect, blocking_pending_count + 1);
				}
			}
			/**
			* @param {boolean} blocking
			* @param {Effect} effect
			* @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
			*/
			decrement(blocking, effect, skip) {
				var _this$pending$get2;
				let pending_count = (_this$pending$get2 = _classPrivateFieldGet2(_pending, this).get(effect)) !== null && _this$pending$get2 !== void 0 ? _this$pending$get2 : 0;
				if (pending_count === 1) _classPrivateFieldGet2(_pending, this).delete(effect);
				else _classPrivateFieldGet2(_pending, this).set(effect, pending_count - 1);
				if (blocking) {
					var _this$blocking_pendin2;
					let blocking_pending_count = (_this$blocking_pendin2 = _classPrivateFieldGet2(_blocking_pending, this).get(effect)) !== null && _this$blocking_pendin2 !== void 0 ? _this$blocking_pendin2 : 0;
					if (blocking_pending_count === 1) _classPrivateFieldGet2(_blocking_pending, this).delete(effect);
					else _classPrivateFieldGet2(_blocking_pending, this).set(effect, blocking_pending_count - 1);
				}
				if (_classPrivateFieldGet2(_decrement_queued, this) || skip) return;
				_classPrivateFieldSet2(_decrement_queued, this, true);
				queue_micro_task(() => {
					_classPrivateFieldSet2(_decrement_queued, this, false);
					this.flush();
				});
			}
			/**
			* @param {Set<Effect>} dirty_effects
			* @param {Set<Effect>} maybe_dirty_effects
			*/
			transfer_effects(dirty_effects, maybe_dirty_effects) {
				for (const e of dirty_effects) _classPrivateFieldGet2(_dirty_effects$1, this).add(e);
				for (const e of maybe_dirty_effects) _classPrivateFieldGet2(_maybe_dirty_effects$1, this).add(e);
				dirty_effects.clear();
				maybe_dirty_effects.clear();
			}
			/** @param {(batch: Batch) => void} fn */
			oncommit(fn) {
				_classPrivateFieldGet2(_commit_callbacks, this).add(fn);
			}
			/** @param {(batch: Batch) => void} fn */
			ondiscard(fn) {
				_classPrivateFieldGet2(_discard_callbacks, this).add(fn);
			}
			/** @param {(batch: Batch) => void} fn */
			on_fork_commit(fn) {
				_classPrivateFieldGet2(_fork_commit_callbacks, this).add(fn);
			}
			run_fork_commit_callbacks() {
				for (const fn of _classPrivateFieldGet2(_fork_commit_callbacks, this)) fn(this);
				_classPrivateFieldGet2(_fork_commit_callbacks, this).clear();
			}
			settled() {
				var _classPrivateFieldGet3;
				return ((_classPrivateFieldGet3 = _classPrivateFieldGet2(_deferred, this)) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : _classPrivateFieldSet2(_deferred, this, deferred())).promise;
			}
			static ensure() {
				if (current_batch === null) {
					const batch = current_batch = new Batch();
					if (!is_processing) {
						batches.add(current_batch);
						if (!is_flushing_sync) queue_micro_task(() => {
							if (current_batch !== batch) return;
							batch.flush();
						});
					}
				}
				return current_batch;
			}
			apply() {
				if (!async_mode_flag || !this.is_fork && batches.size === 1) {
					batch_values = null;
					return;
				}
				batch_values = /* @__PURE__ */ new Map();
				for (const [source, [value]] of this.current) batch_values.set(source, value);
				for (const batch of batches) {
					if (batch === this || batch.is_fork) continue;
					var intersects = false;
					var differs = false;
					if (batch.id < this.id) for (const [source, [, is_derived]] of batch.current) {
						if (is_derived) continue;
						intersects || (intersects = this.current.has(source));
						differs || (differs = !this.current.has(source));
					}
					if (intersects && differs) _classPrivateFieldGet2(_blockers, this).add(batch);
					else for (const [source, previous] of batch.previous) if (!batch_values.has(source)) batch_values.set(source, previous);
				}
			}
			/**
			*
			* @param {Effect} effect
			*/
			schedule(effect) {
				var _effect$b;
				last_scheduled_effect = effect;
				if (((_effect$b = effect.b) === null || _effect$b === void 0 ? void 0 : _effect$b.is_pending) && (effect.f & 16777228) !== 0 && (effect.f & 32768) === 0) {
					effect.b.defer_effect(effect);
					return;
				}
				var e = effect;
				while (e.parent !== null) {
					e = e.parent;
					var flags = e.f;
					if (collected_effects !== null && e === active_effect) {
						if (async_mode_flag) return;
						if ((active_reaction === null || (active_reaction.f & 2) === 0) && !legacy_is_updating_store) return;
					}
					if ((flags & 96) !== 0) {
						if ((flags & 1024) === 0) return;
						e.f ^= CLEAN;
					}
				}
				_classPrivateFieldGet2(_roots, this).push(e);
			}
		};
		_Batch = Batch;
		eager_block_effects = null;
	}));
	//#endregion
	//#region node_modules/svelte/src/reactivity/create-subscriber.js
	/**
	* Returns a `subscribe` function that integrates external event-based systems with Svelte's reactivity.
	* It's particularly useful for integrating with web APIs like `MediaQuery`, `IntersectionObserver`, or `WebSocket`.
	*
	* If `subscribe` is called inside an effect (including indirectly, for example inside a getter),
	* the `start` callback will be called with an `update` function. Whenever `update` is called, the effect re-runs.
	*
	* If `start` returns a cleanup function, it will be called when the effect is destroyed.
	*
	* If `subscribe` is called in multiple effects, `start` will only be called once as long as the effects
	* are active, and the returned teardown function will only be called when all effects are destroyed.
	*
	* It's best understood with an example. Here's an implementation of [`MediaQuery`](https://svelte.dev/docs/svelte/svelte-reactivity#MediaQuery):
	*
	* ```js
	* import { createSubscriber } from 'svelte/reactivity';
	* import { on } from 'svelte/events';
	*
	* export class MediaQuery {
	* 	#query;
	* 	#subscribe;
	*
	* 	constructor(query) {
	* 		this.#query = window.matchMedia(`(${query})`);
	*
	* 		this.#subscribe = createSubscriber((update) => {
	* 			// when the `change` event occurs, re-run any effects that read `this.current`
	* 			const off = on(this.#query, 'change', update);
	*
	* 			// stop listening when all the effects are destroyed
	* 			return () => off();
	* 		});
	* 	}
	*
	* 	get current() {
	* 		// This makes the getter reactive, if read in an effect
	* 		this.#subscribe();
	*
	* 		// Return the current state of the query, whether or not we're in an effect
	* 		return this.#query.matches;
	* 	}
	* }
	* ```
	* @param {(update: () => void) => (() => void) | void} start
	* @since 5.7.0
	*/
	function createSubscriber(start) {
		let subscribers = 0;
		let version = source(0);
		/** @type {(() => void) | void} */
		let stop;
		return () => {
			if (effect_tracking()) {
				get(version);
				render_effect(() => {
					if (subscribers === 0) stop = untrack(() => start(() => increment(version)));
					subscribers += 1;
					return () => {
						queue_micro_task(() => {
							subscribers -= 1;
							if (subscribers === 0) {
								stop === null || stop === void 0 || stop();
								stop = void 0;
								increment(version);
							}
						});
					};
				});
			}
		};
	}
	var init_create_subscriber = __esmMin((() => {
		init_runtime();
		init_effects();
		init_sources();
		init_tracing();
		init_esm_env();
		init_task();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
	/**
	* @param {TemplateNode} node
	* @param {BoundaryProps} props
	* @param {((anchor: Node) => void)} children
	* @param {((error: unknown) => unknown) | undefined} [transform_error]
	* @returns {void}
	*/
	function boundary(node, props, children, transform_error) {
		new Boundary(node, props, children, transform_error);
	}
	function _hydrate_resolved_content() {
		try {
			_classPrivateFieldSet2(_main_effect, this, branch(() => _classPrivateFieldGet2(_children, this).call(this, _classPrivateFieldGet2(_anchor, this))));
		} catch (error) {
			this.error(error);
		}
	}
	/**
	* @param {unknown} error The deserialized error from the server's hydration comment
	*/
	function _hydrate_failed_content(error) {
		const failed = _classPrivateFieldGet2(_props, this).failed;
		if (!failed) return;
		_classPrivateFieldSet2(_failed_effect, this, branch(() => {
			failed(_classPrivateFieldGet2(_anchor, this), () => error, () => () => {});
		}));
	}
	function _hydrate_pending_content() {
		const pending = _classPrivateFieldGet2(_props, this).pending;
		if (!pending) return;
		this.is_pending = true;
		_classPrivateFieldSet2(_pending_effect, this, branch(() => pending(_classPrivateFieldGet2(_anchor, this))));
		queue_micro_task(() => {
			var fragment = _classPrivateFieldSet2(_offscreen_fragment, this, document.createDocumentFragment());
			var anchor = create_text();
			fragment.append(anchor);
			_classPrivateFieldSet2(_main_effect, this, _assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
				return branch(() => _classPrivateFieldGet2(_children, this).call(this, anchor));
			}));
			if (_classPrivateFieldGet2(_pending_count, this) === 0) {
				_classPrivateFieldGet2(_anchor, this).before(fragment);
				_classPrivateFieldSet2(_offscreen_fragment, this, null);
				pause_effect(_classPrivateFieldGet2(_pending_effect, this), () => {
					_classPrivateFieldSet2(_pending_effect, this, null);
				});
				_assertClassBrand(_Boundary_brand, this, _resolve).call(this, current_batch);
			}
		});
	}
	function _render() {
		try {
			this.is_pending = this.has_pending_snippet();
			_classPrivateFieldSet2(_pending_count, this, 0);
			_classPrivateFieldSet2(_local_pending_count, this, 0);
			_classPrivateFieldSet2(_main_effect, this, branch(() => {
				_classPrivateFieldGet2(_children, this).call(this, _classPrivateFieldGet2(_anchor, this));
			}));
			if (_classPrivateFieldGet2(_pending_count, this) > 0) {
				var fragment = _classPrivateFieldSet2(_offscreen_fragment, this, document.createDocumentFragment());
				move_effect(_classPrivateFieldGet2(_main_effect, this), fragment);
				const pending = _classPrivateFieldGet2(_props, this).pending;
				_classPrivateFieldSet2(_pending_effect, this, branch(() => pending(_classPrivateFieldGet2(_anchor, this))));
			} else _assertClassBrand(_Boundary_brand, this, _resolve).call(this, current_batch);
		} catch (error) {
			this.error(error);
		}
	}
	/**
	* @param {Batch} batch
	*/
	function _resolve(batch) {
		this.is_pending = false;
		batch.transfer_effects(_classPrivateFieldGet2(_dirty_effects, this), _classPrivateFieldGet2(_maybe_dirty_effects, this));
	}
	/**
	* @template T
	* @param {() => T} fn
	*/
	function _run(fn) {
		var previous_effect = active_effect;
		var previous_reaction = active_reaction;
		var previous_ctx = component_context;
		set_active_effect(_classPrivateFieldGet2(_effect, this));
		set_active_reaction(_classPrivateFieldGet2(_effect, this));
		set_component_context(_classPrivateFieldGet2(_effect, this).ctx);
		try {
			Batch.ensure();
			return fn();
		} catch (e) {
			handle_error(e);
			return null;
		} finally {
			set_active_effect(previous_effect);
			set_active_reaction(previous_reaction);
			set_component_context(previous_ctx);
		}
	}
	/**
	* Updates the pending count associated with the currently visible pending snippet,
	* if any, such that we can replace the snippet with content once work is done
	* @param {1 | -1} d
	* @param {Batch} batch
	*/
	function _update_pending_count(d, batch) {
		if (!this.has_pending_snippet()) {
			if (this.parent) {
				var _this$parent2;
				_assertClassBrand(_Boundary_brand, _this$parent2 = this.parent, _update_pending_count).call(_this$parent2, d, batch);
			}
			return;
		}
		_classPrivateFieldSet2(_pending_count, this, _classPrivateFieldGet2(_pending_count, this) + d);
		if (_classPrivateFieldGet2(_pending_count, this) === 0) {
			_assertClassBrand(_Boundary_brand, this, _resolve).call(this, batch);
			if (_classPrivateFieldGet2(_pending_effect, this)) pause_effect(_classPrivateFieldGet2(_pending_effect, this), () => {
				_classPrivateFieldSet2(_pending_effect, this, null);
			});
			if (_classPrivateFieldGet2(_offscreen_fragment, this)) {
				_classPrivateFieldGet2(_anchor, this).before(_classPrivateFieldGet2(_offscreen_fragment, this));
				_classPrivateFieldSet2(_offscreen_fragment, this, null);
			}
		}
	}
	/**
	* @param {unknown} error
	*/
	function _handle_error(error) {
		if (_classPrivateFieldGet2(_main_effect, this)) {
			destroy_effect(_classPrivateFieldGet2(_main_effect, this));
			_classPrivateFieldSet2(_main_effect, this, null);
		}
		if (_classPrivateFieldGet2(_pending_effect, this)) {
			destroy_effect(_classPrivateFieldGet2(_pending_effect, this));
			_classPrivateFieldSet2(_pending_effect, this, null);
		}
		if (_classPrivateFieldGet2(_failed_effect, this)) {
			destroy_effect(_classPrivateFieldGet2(_failed_effect, this));
			_classPrivateFieldSet2(_failed_effect, this, null);
		}
		if (hydrating) {
			set_hydrate_node(_classPrivateFieldGet2(_hydrate_open, this));
			next();
			set_hydrate_node(skip_nodes());
		}
		var onerror = _classPrivateFieldGet2(_props, this).onerror;
		let failed = _classPrivateFieldGet2(_props, this).failed;
		var did_reset = false;
		var calling_on_error = false;
		const reset = () => {
			if (did_reset) {
				svelte_boundary_reset_noop();
				return;
			}
			did_reset = true;
			if (calling_on_error) svelte_boundary_reset_onerror();
			if (_classPrivateFieldGet2(_failed_effect, this) !== null) pause_effect(_classPrivateFieldGet2(_failed_effect, this), () => {
				_classPrivateFieldSet2(_failed_effect, this, null);
			});
			_assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
				_assertClassBrand(_Boundary_brand, this, _render).call(this);
			});
		};
		/** @param {unknown} transformed_error */
		const handle_error_result = (transformed_error) => {
			try {
				calling_on_error = true;
				onerror === null || onerror === void 0 || onerror(transformed_error, reset);
				calling_on_error = false;
			} catch (error) {
				invoke_error_boundary(error, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent);
			}
			if (failed) _classPrivateFieldSet2(_failed_effect, this, _assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
				try {
					return branch(() => {
						var effect = active_effect;
						effect.b = this;
						effect.f |= 128;
						failed(_classPrivateFieldGet2(_anchor, this), () => transformed_error, () => reset);
					});
				} catch (error) {
					invoke_error_boundary(error, _classPrivateFieldGet2(_effect, this).parent);
					return null;
				}
			}));
		};
		queue_micro_task(() => {
			/** @type {unknown} */
			var result;
			try {
				result = this.transform_error(error);
			} catch (e) {
				invoke_error_boundary(e, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent);
				return;
			}
			if (result !== null && typeof result === "object" && typeof result.then === "function")
 /** @type {any} */ result.then(
				handle_error_result,
				/** @param {unknown} e */
				(e) => invoke_error_boundary(e, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent)
			);
			else handle_error_result(result);
		});
	}
	var flags, _anchor, _hydrate_open, _props, _children, _effect, _main_effect, _pending_effect, _failed_effect, _offscreen_fragment, _local_pending_count, _pending_count, _pending_count_update_queued, _dirty_effects, _maybe_dirty_effects, _effect_pending, _effect_pending_subscriber, _Boundary_brand, Boundary;
	var init_boundary = __esmMin((() => {
		init_constants$1();
		init_constants();
		init_context();
		init_error_handling();
		init_effects();
		init_runtime();
		init_hydration();
		init_task();
		init_errors();
		init_warnings();
		init_esm_env();
		init_batch();
		init_sources();
		init_tracing();
		init_create_subscriber();
		init_operations$1();
		init_utils$2();
		init_status();
		init_classPrivateMethodInitSpec();
		init_defineProperty();
		init_classPrivateFieldInitSpec();
		init_classPrivateFieldSet2();
		init_classPrivateFieldGet2();
		init_assertClassBrand();
		flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
		_anchor = /* @__PURE__ */ new WeakMap();
		_hydrate_open = /* @__PURE__ */ new WeakMap();
		_props = /* @__PURE__ */ new WeakMap();
		_children = /* @__PURE__ */ new WeakMap();
		_effect = /* @__PURE__ */ new WeakMap();
		_main_effect = /* @__PURE__ */ new WeakMap();
		_pending_effect = /* @__PURE__ */ new WeakMap();
		_failed_effect = /* @__PURE__ */ new WeakMap();
		_offscreen_fragment = /* @__PURE__ */ new WeakMap();
		_local_pending_count = /* @__PURE__ */ new WeakMap();
		_pending_count = /* @__PURE__ */ new WeakMap();
		_pending_count_update_queued = /* @__PURE__ */ new WeakMap();
		_dirty_effects = /* @__PURE__ */ new WeakMap();
		_maybe_dirty_effects = /* @__PURE__ */ new WeakMap();
		_effect_pending = /* @__PURE__ */ new WeakMap();
		_effect_pending_subscriber = /* @__PURE__ */ new WeakMap();
		_Boundary_brand = /* @__PURE__ */ new WeakSet();
		Boundary = class {
			/**
			* @param {TemplateNode} node
			* @param {BoundaryProps} props
			* @param {((anchor: Node) => void)} children
			* @param {((error: unknown) => unknown) | undefined} [transform_error]
			*/
			constructor(node, props, children, transform_error) {
				var _ref, _this$parent;
				_classPrivateMethodInitSpec(this, _Boundary_brand);
				_defineProperty(
					this,
					/** @type {Boundary | null} */
					"parent",
					void 0
				);
				_defineProperty(this, "is_pending", false);
				_defineProperty(
					this,
					/**
					* API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
					* Inherited from parent boundary, or defaults to identity.
					* @type {(error: unknown) => unknown}
					*/
					"transform_error",
					void 0
				);
				_classPrivateFieldInitSpec(this, _anchor, void 0);
				_classPrivateFieldInitSpec(this, _hydrate_open, hydrating ? hydrate_node : null);
				_classPrivateFieldInitSpec(this, _props, void 0);
				_classPrivateFieldInitSpec(this, _children, void 0);
				_classPrivateFieldInitSpec(this, _effect, void 0);
				_classPrivateFieldInitSpec(this, _main_effect, null);
				_classPrivateFieldInitSpec(this, _pending_effect, null);
				_classPrivateFieldInitSpec(this, _failed_effect, null);
				_classPrivateFieldInitSpec(this, _offscreen_fragment, null);
				_classPrivateFieldInitSpec(this, _local_pending_count, 0);
				_classPrivateFieldInitSpec(this, _pending_count, 0);
				_classPrivateFieldInitSpec(this, _pending_count_update_queued, false);
				_classPrivateFieldInitSpec(this, _dirty_effects, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _maybe_dirty_effects, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _effect_pending, null);
				_classPrivateFieldInitSpec(this, _effect_pending_subscriber, createSubscriber(() => {
					_classPrivateFieldSet2(_effect_pending, this, source(_classPrivateFieldGet2(_local_pending_count, this)));
					return () => {
						_classPrivateFieldSet2(_effect_pending, this, null);
					};
				}));
				_classPrivateFieldSet2(_anchor, this, node);
				_classPrivateFieldSet2(_props, this, props);
				_classPrivateFieldSet2(_children, this, (anchor) => {
					var effect = active_effect;
					effect.b = this;
					effect.f |= 128;
					children(anchor);
				});
				this.parent = active_effect.b;
				this.transform_error = (_ref = transform_error !== null && transform_error !== void 0 ? transform_error : (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.transform_error) !== null && _ref !== void 0 ? _ref : ((e) => e);
				_classPrivateFieldSet2(_effect, this, block(() => {
					if (hydrating) {
						const comment = _classPrivateFieldGet2(_hydrate_open, this);
						hydrate_next();
						const server_rendered_pending = comment.data === "[!";
						if (comment.data.startsWith("[?")) {
							const serialized_error = JSON.parse(comment.data.slice(2));
							_assertClassBrand(_Boundary_brand, this, _hydrate_failed_content).call(this, serialized_error);
						} else if (server_rendered_pending) _assertClassBrand(_Boundary_brand, this, _hydrate_pending_content).call(this);
						else _assertClassBrand(_Boundary_brand, this, _hydrate_resolved_content).call(this);
					} else _assertClassBrand(_Boundary_brand, this, _render).call(this);
				}, flags));
				if (hydrating) _classPrivateFieldSet2(_anchor, this, hydrate_node);
			}
			/**
			* Defer an effect inside a pending boundary until the boundary resolves
			* @param {Effect} effect
			*/
			defer_effect(effect) {
				defer_effect(effect, _classPrivateFieldGet2(_dirty_effects, this), _classPrivateFieldGet2(_maybe_dirty_effects, this));
			}
			/**
			* Returns `false` if the effect exists inside a boundary whose pending snippet is shown
			* @returns {boolean}
			*/
			is_rendered() {
				return !this.is_pending && (!this.parent || this.parent.is_rendered());
			}
			has_pending_snippet() {
				return !!_classPrivateFieldGet2(_props, this).pending;
			}
			/**
			* Update the source that powers `$effect.pending()` inside this boundary,
			* and controls when the current `pending` snippet (if any) is removed.
			* Do not call from inside the class
			* @param {1 | -1} d
			* @param {Batch} batch
			*/
			update_pending_count(d, batch) {
				_assertClassBrand(_Boundary_brand, this, _update_pending_count).call(this, d, batch);
				_classPrivateFieldSet2(_local_pending_count, this, _classPrivateFieldGet2(_local_pending_count, this) + d);
				if (!_classPrivateFieldGet2(_effect_pending, this) || _classPrivateFieldGet2(_pending_count_update_queued, this)) return;
				_classPrivateFieldSet2(_pending_count_update_queued, this, true);
				queue_micro_task(() => {
					_classPrivateFieldSet2(_pending_count_update_queued, this, false);
					if (_classPrivateFieldGet2(_effect_pending, this)) internal_set(_classPrivateFieldGet2(_effect_pending, this), _classPrivateFieldGet2(_local_pending_count, this));
				});
			}
			get_effect_pending() {
				_classPrivateFieldGet2(_effect_pending_subscriber, this).call(this);
				return get(_classPrivateFieldGet2(_effect_pending, this));
			}
			/** @param {unknown} error */
			error(error) {
				if (!_classPrivateFieldGet2(_props, this).onerror && !_classPrivateFieldGet2(_props, this).failed) throw error;
				if (current_batch === null || current_batch === void 0 ? void 0 : current_batch.is_fork) {
					if (_classPrivateFieldGet2(_main_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_main_effect, this));
					if (_classPrivateFieldGet2(_pending_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_pending_effect, this));
					if (_classPrivateFieldGet2(_failed_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_failed_effect, this));
					current_batch.on_fork_commit(() => {
						_assertClassBrand(_Boundary_brand, this, _handle_error).call(this, error);
					});
				} else _assertClassBrand(_Boundary_brand, this, _handle_error).call(this, error);
			}
		};
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/OverloadYield.js
	function _OverloadYield(e, d) {
		this.v = e, this.k = d;
	}
	var init_OverloadYield = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.127.0/helpers/wrapAsyncGenerator.js
	function AsyncGenerator(e) {
		var r, t;
		function resume(r, t) {
			try {
				var n = e[r](t), o = n.value, u = o instanceof _OverloadYield;
				Promise.resolve(u ? o.v : o).then(function(t) {
					if (u) {
						var i = "return" === r ? "return" : "next";
						if (!o.k || t.done) return resume(i, t);
						t = e[i](t).value;
					}
					settle(n.done ? "return" : "normal", t);
				}, function(e) {
					resume("throw", e);
				});
			} catch (e) {
				settle("throw", e);
			}
		}
		function settle(e, n) {
			switch (e) {
				case "return":
					r.resolve({
						value: n,
						done: !0
					});
					break;
				case "throw":
					r.reject(n);
					break;
				default: r.resolve({
					value: n,
					done: !1
				});
			}
			(r = r.next) ? resume(r.key, r.arg) : t = null;
		}
		this._invoke = function(e, n) {
			return new Promise(function(o, u) {
				var i = {
					key: e,
					arg: n,
					resolve: o,
					reject: u,
					next: null
				};
				t ? t = t.next = i : (r = t = i, resume(e, n));
			});
		}, "function" != typeof e["return"] && (this["return"] = void 0);
	}
	var init_wrapAsyncGenerator = __esmMin((() => {
		init_OverloadYield();
		AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
			return this;
		}, AsyncGenerator.prototype.next = function(e) {
			return this._invoke("next", e);
		}, AsyncGenerator.prototype["throw"] = function(e) {
			return this._invoke("throw", e);
		}, AsyncGenerator.prototype["return"] = function(e) {
			return this._invoke("return", e);
		};
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/async.js
	/**
	* @param {Blocker[]} blockers
	* @param {Array<() => any>} sync
	* @param {Array<() => Promise<any>>} async
	* @param {(values: Value[]) => any} fn
	*/
	function flatten(blockers, sync, async, fn) {
		const d = is_runes() ? derived : derived_safe_equal;
		var pending = blockers.filter((b) => !b.settled);
		if (async.length === 0 && pending.length === 0) {
			fn(sync.map(d));
			return;
		}
		var parent = active_effect;
		var restore = capture();
		var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
		/** @param {Value[]} values */
		function finish(values) {
			restore();
			try {
				fn(values);
			} catch (error) {
				if ((parent.f & 16384) === 0) invoke_error_boundary(error, parent);
			}
			unset_context();
		}
		if (async.length === 0) {
			/** @type {Promise<any>} */ blocker_promise.then(() => finish(sync.map(d)));
			return;
		}
		var decrement_pending = increment_pending();
		function run() {
			Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
		}
		if (blocker_promise) blocker_promise.then(() => {
			restore();
			run();
			unset_context();
		});
		else run();
	}
	/**
	* Captures the current effect context so that we can restore it after
	* some asynchronous work has happened (so that e.g. `await a + b`
	* causes `b` to be registered as a dependency).
	*/
	function capture() {
		var previous_effect = active_effect;
		var previous_reaction = active_reaction;
		var previous_component_context = component_context;
		var previous_batch = current_batch;
		return function restore(activate_batch = true) {
			set_active_effect(previous_effect);
			set_active_reaction(previous_reaction);
			set_component_context(previous_component_context);
			if (activate_batch && (previous_effect.f & 16384) === 0) {
				previous_batch === null || previous_batch === void 0 || previous_batch.activate();
				previous_batch === null || previous_batch === void 0 || previous_batch.apply();
			}
		};
	}
	function unset_context(deactivate_batch = true) {
		set_active_effect(null);
		set_active_reaction(null);
		set_component_context(null);
		if (deactivate_batch) current_batch === null || current_batch === void 0 || current_batch.deactivate();
	}
	/**
	* @returns {(skip?: boolean) => void}
	*/
	function increment_pending() {
		var effect = active_effect;
		var boundary = effect.b;
		var batch = current_batch;
		var blocking = boundary.is_rendered();
		boundary.update_pending_count(1, batch);
		batch.increment(blocking, effect);
		return (skip = false) => {
			boundary.update_pending_count(-1, batch);
			batch.decrement(blocking, effect, skip);
		};
	}
	var init_async$1 = __esmMin((() => {
		init_constants$1();
		init_esm_env();
		init_context();
		init_boundary();
		init_error_handling();
		init_runtime();
		init_batch();
		init_deriveds();
		init_effects();
		init_wrapAsyncGenerator();
	}));
	/**
	* @template V
	* @param {() => V} fn
	* @returns {Derived<V>}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function derived(fn) {
		var flags = 2 | DIRTY;
		if (active_effect !== null) active_effect.f |= EFFECT_PRESERVED;
		return {
			ctx: component_context,
			deps: null,
			effects: null,
			equals,
			f: flags,
			fn,
			reactions: null,
			rv: 0,
			v: UNINITIALIZED,
			wv: 0,
			parent: active_effect,
			ac: null
		};
	}
	/**
	* @template V
	* @param {() => V | Promise<V>} fn
	* @param {string} [label]
	* @param {string} [location] If provided, print a warning if the value is not read immediately after update
	* @returns {Promise<Source<V>>}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function async_derived(fn, label, location) {
		let parent = active_effect;
		if (parent === null) async_derived_orphan();
		var promise = void 0;
		var signal = source(UNINITIALIZED);
		var should_suspend = !active_reaction;
		/** @type {Map<Batch, ReturnType<typeof deferred<V>>>} */
		var deferreds = /* @__PURE__ */ new Map();
		async_effect(() => {
			var effect = active_effect;
			/** @type {ReturnType<typeof deferred<V>>} */
			var d = deferred();
			promise = d.promise;
			try {
				Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
			} catch (error) {
				d.reject(error);
				unset_context();
			}
			var batch = current_batch;
			if (should_suspend) {
				if ((effect.f & 32768) !== 0) var decrement_pending = increment_pending();
				if (parent.b.is_rendered()) {
					var _deferreds$get;
					(_deferreds$get = deferreds.get(batch)) === null || _deferreds$get === void 0 || _deferreds$get.reject(STALE_REACTION);
					deferreds.delete(batch);
				} else {
					for (const d of deferreds.values()) d.reject(STALE_REACTION);
					deferreds.clear();
				}
				deferreds.set(batch, d);
			}
			/**
			* @param {any} value
			* @param {unknown} error
			*/
			const handler = (value, error = void 0) => {
				if (decrement_pending) decrement_pending(error === STALE_REACTION);
				if (error === STALE_REACTION || (effect.f & 16384) !== 0) return;
				batch.activate();
				if (error) {
					signal.f |= ERROR_VALUE;
					internal_set(signal, error);
				} else {
					if ((signal.f & 8388608) !== 0) signal.f ^= ERROR_VALUE;
					internal_set(signal, value);
					for (const [b, d] of deferreds) {
						deferreds.delete(b);
						if (b === batch) break;
						d.reject(STALE_REACTION);
					}
				}
				batch.deactivate();
			};
			d.promise.then(handler, (e) => handler(null, e || "unknown"));
		});
		teardown(() => {
			for (const d of deferreds.values()) d.reject(STALE_REACTION);
		});
		return new Promise((fulfil) => {
			/** @param {Promise<V>} p */
			function next(p) {
				function go() {
					if (p === promise) fulfil(signal);
					else next(promise);
				}
				p.then(go, go);
			}
			next(promise);
		});
	}
	/**
	* @template V
	* @param {() => V} fn
	* @returns {Derived<V>}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function user_derived(fn) {
		const d = /* @__PURE__ */ derived(fn);
		if (!async_mode_flag) push_reaction_value(d);
		return d;
	}
	/**
	* @template V
	* @param {() => V} fn
	* @returns {Derived<V>}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function derived_safe_equal(fn) {
		const signal = /* @__PURE__ */ derived(fn);
		signal.equals = safe_equals;
		return signal;
	}
	/**
	* @param {Derived} derived
	* @returns {void}
	*/
	function destroy_derived_effects(derived) {
		var effects = derived.effects;
		if (effects !== null) {
			derived.effects = null;
			for (var i = 0; i < effects.length; i += 1) destroy_effect(effects[i]);
		}
	}
	/**
	* @template T
	* @param {Derived} derived
	* @returns {T}
	*/
	function execute_derived(derived) {
		var value;
		var prev_active_effect = active_effect;
		var parent = derived.parent;
		if (!is_destroying_effect && parent !== null && (parent.f & 24576) !== 0) {
			derived_inert();
			return derived.v;
		}
		set_active_effect(parent);
		try {
			derived.f &= ~WAS_MARKED;
			destroy_derived_effects(derived);
			value = update_reaction(derived);
		} finally {
			set_active_effect(prev_active_effect);
		}
		return value;
	}
	/**
	* @param {Derived} derived
	* @returns {void}
	*/
	function update_derived(derived) {
		var value = execute_derived(derived);
		if (!derived.equals(value)) {
			derived.wv = increment_write_version();
			if (!(current_batch === null || current_batch === void 0 ? void 0 : current_batch.is_fork) || derived.deps === null) {
				if (current_batch !== null) current_batch.capture(derived, value, true);
				else derived.v = value;
				if (derived.deps === null) {
					set_signal_status(derived, CLEAN);
					return;
				}
			}
		}
		if (is_destroying_effect) return;
		if (batch_values !== null) {
			if (effect_tracking() || (current_batch === null || current_batch === void 0 ? void 0 : current_batch.is_fork)) batch_values.set(derived, value);
		} else update_derived_status(derived);
	}
	/**
	* @param {Derived} derived
	*/
	function freeze_derived_effects(derived) {
		if (derived.effects === null) return;
		for (const e of derived.effects) if (e.teardown || e.ac) {
			var _e$teardown, _e$ac;
			(_e$teardown = e.teardown) === null || _e$teardown === void 0 || _e$teardown.call(e);
			(_e$ac = e.ac) === null || _e$ac === void 0 || _e$ac.abort(STALE_REACTION);
			e.teardown = noop;
			e.ac = null;
			remove_reactions(e, 0);
			destroy_effect_children(e);
		}
	}
	/**
	* @param {Derived} derived
	*/
	function unfreeze_derived_effects(derived) {
		if (derived.effects === null) return;
		for (const e of derived.effects) if (e.teardown) update_effect(e);
	}
	var init_deriveds = __esmMin((() => {
		init_esm_env();
		init_constants$1();
		init_runtime();
		init_equality$1();
		init_errors();
		init_warnings();
		init_effects();
		init_sources();
		init_dev();
		init_flags();
		init_context();
		init_constants();
		init_batch();
		init_async$1();
		init_utils$3();
		init_status();
	}));
	/**
	* @template V
	* @param {V} v
	* @param {Error | null} [stack]
	* @returns {Source<V>}
	*/
	function source(v, stack) {
		return {
			f: 0,
			v,
			reactions: null,
			equals,
			rv: 0,
			wv: 0
		};
	}
	/**
	* @template V
	* @param {V} v
	* @param {Error | null} [stack]
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function state(v, stack) {
		const s = source(v, stack);
		push_reaction_value(s);
		return s;
	}
	/**
	* @template V
	* @param {V} initial_value
	* @param {boolean} [immutable]
	* @returns {Source<V>}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function mutable_source(initial_value, immutable = false, trackable = true) {
		const s = source(initial_value);
		if (!immutable) s.equals = safe_equals;
		if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
			var _component_context$l, _component_context$l$;
			((_component_context$l$ = (_component_context$l = component_context.l).s) !== null && _component_context$l$ !== void 0 ? _component_context$l$ : _component_context$l.s = []).push(s);
		}
		return s;
	}
	/**
	* @template V
	* @param {Source<V>} source
	* @param {V} value
	* @param {boolean} [should_proxy]
	* @returns {V}
	*/
	function set(source, value, should_proxy = false) {
		if (active_reaction !== null && (!untracking || (active_reaction.f & 131072) !== 0) && is_runes() && (active_reaction.f & 4325394) !== 0 && (current_sources === null || !includes.call(current_sources, source))) state_unsafe_mutation();
		return internal_set(source, should_proxy ? proxy(value) : value, legacy_updates);
	}
	/**
	* @template V
	* @param {Source<V>} source
	* @param {V} value
	* @param {Effect[] | null} [updated_during_traversal]
	* @returns {V}
	*/
	function internal_set(source, value, updated_during_traversal = null) {
		if (!source.equals(value)) {
			old_values.set(source, is_destroying_effect ? value : source.v);
			var batch = Batch.ensure();
			batch.capture(source, value);
			if ((source.f & 2) !== 0) {
				const derived = source;
				if ((source.f & 2048) !== 0) execute_derived(derived);
				if (batch_values === null) update_derived_status(derived);
			}
			source.wv = increment_write_version();
			mark_reactions(source, DIRTY, updated_during_traversal);
			if (is_runes() && active_effect !== null && (active_effect.f & 1024) !== 0 && (active_effect.f & 96) === 0) if (untracked_writes === null) set_untracked_writes([source]);
			else untracked_writes.push(source);
			if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) flush_eager_effects();
		}
		return value;
	}
	function flush_eager_effects() {
		eager_effects_deferred = false;
		for (const effect of eager_effects) {
			if ((effect.f & 1024) !== 0) set_signal_status(effect, MAYBE_DIRTY);
			if (is_dirty(effect)) update_effect(effect);
		}
		eager_effects.clear();
	}
	/**
	* Silently (without using `get`) increment a source
	* @param {Source<number>} source
	*/
	function increment(source) {
		set(source, source.v + 1);
	}
	/**
	* @param {Value} signal
	* @param {number} status should be DIRTY or MAYBE_DIRTY
	* @param {Effect[] | null} updated_during_traversal
	* @returns {void}
	*/
	function mark_reactions(signal, status, updated_during_traversal) {
		var reactions = signal.reactions;
		if (reactions === null) return;
		var runes = is_runes();
		var length = reactions.length;
		for (var i = 0; i < length; i++) {
			var reaction = reactions[i];
			var flags = reaction.f;
			if (!runes && reaction === active_effect) continue;
			var not_dirty = (flags & DIRTY) === 0;
			if (not_dirty) set_signal_status(reaction, status);
			if ((flags & 2) !== 0) {
				var derived = reaction;
				batch_values === null || batch_values === void 0 || batch_values.delete(derived);
				if ((flags & 65536) === 0) {
					if (flags & 512) reaction.f |= WAS_MARKED;
					mark_reactions(derived, MAYBE_DIRTY, updated_during_traversal);
				}
			} else if (not_dirty) {
				var effect = reaction;
				if ((flags & 16) !== 0 && eager_block_effects !== null) eager_block_effects.add(effect);
				if (updated_during_traversal !== null) updated_during_traversal.push(effect);
				else schedule_effect(effect);
			}
		}
	}
	var eager_effects, old_values, eager_effects_deferred;
	var init_sources = __esmMin((() => {
		init_esm_env();
		init_runtime();
		init_equality$1();
		init_constants$1();
		init_errors();
		init_flags();
		init_utils$3();
		init_tracing();
		init_dev();
		init_context();
		init_batch();
		init_proxy();
		init_deriveds();
		init_status();
		eager_effects = /* @__PURE__ */ new Set();
		old_values = /* @__PURE__ */ new Map();
		eager_effects_deferred = false;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/proxy.js
	/**
	* @template T
	* @param {T} value
	* @returns {T}
	*/
	function proxy(value) {
		if (typeof value !== "object" || value === null || STATE_SYMBOL in value) return value;
		const prototype = get_prototype_of(value);
		if (prototype !== object_prototype && prototype !== array_prototype) return value;
		/** @type {Map<any, Source<any>>} */
		var sources = /* @__PURE__ */ new Map();
		var is_proxied_array = is_array(value);
		var version = /* @__PURE__ */ state(0);
		var stack = null;
		var parent_version = update_version;
		/**
		* Executes the proxy in the context of the reaction it was originally created in, if any
		* @template T
		* @param {() => T} fn
		*/
		var with_parent = (fn) => {
			if (update_version === parent_version) return fn();
			var reaction = active_reaction;
			var version = update_version;
			set_active_reaction(null);
			set_update_version(parent_version);
			var result = fn();
			set_active_reaction(reaction);
			set_update_version(version);
			return result;
		};
		if (is_proxied_array) sources.set("length", /* @__PURE__ */ state(
			/** @type {any[]} */
			value.length,
			stack
		));
		return new Proxy(value, {
			defineProperty(_, prop, descriptor) {
				if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) state_descriptors_fixed();
				var s = sources.get(prop);
				if (s === void 0) with_parent(() => {
					var s = /* @__PURE__ */ state(descriptor.value, stack);
					sources.set(prop, s);
					return s;
				});
				else set(s, descriptor.value, true);
				return true;
			},
			deleteProperty(target, prop) {
				var s = sources.get(prop);
				if (s === void 0) {
					if (prop in target) {
						const s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED, stack));
						sources.set(prop, s);
						increment(version);
					}
				} else {
					set(s, UNINITIALIZED);
					increment(version);
				}
				return true;
			},
			get(target, prop, receiver) {
				var _get_descriptor;
				if (prop === STATE_SYMBOL) return value;
				var s = sources.get(prop);
				var exists = prop in target;
				if (s === void 0 && (!exists || ((_get_descriptor = get_descriptor(target, prop)) === null || _get_descriptor === void 0 ? void 0 : _get_descriptor.writable))) {
					s = with_parent(() => {
						return /* @__PURE__ */ state(proxy(exists ? target[prop] : UNINITIALIZED), stack);
					});
					sources.set(prop, s);
				}
				if (s !== void 0) {
					var v = get(s);
					return v === UNINITIALIZED ? void 0 : v;
				}
				return Reflect.get(target, prop, receiver);
			},
			getOwnPropertyDescriptor(target, prop) {
				var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
				if (descriptor && "value" in descriptor) {
					var s = sources.get(prop);
					if (s) descriptor.value = get(s);
				} else if (descriptor === void 0) {
					var source = sources.get(prop);
					var value = source === null || source === void 0 ? void 0 : source.v;
					if (source !== void 0 && value !== UNINITIALIZED) return {
						enumerable: true,
						configurable: true,
						value,
						writable: true
					};
				}
				return descriptor;
			},
			has(target, prop) {
				var _get_descriptor2;
				if (prop === STATE_SYMBOL) return true;
				var s = sources.get(prop);
				var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop);
				if (s !== void 0 || active_effect !== null && (!has || ((_get_descriptor2 = get_descriptor(target, prop)) === null || _get_descriptor2 === void 0 ? void 0 : _get_descriptor2.writable))) {
					if (s === void 0) {
						s = with_parent(() => {
							return /* @__PURE__ */ state(has ? proxy(target[prop]) : UNINITIALIZED, stack);
						});
						sources.set(prop, s);
					}
					if (get(s) === UNINITIALIZED) return false;
				}
				return has;
			},
			set(target, prop, value, receiver) {
				var s = sources.get(prop);
				var has = prop in target;
				if (is_proxied_array && prop === "length") for (var i = value; i < s.v; i += 1) {
					var other_s = sources.get(i + "");
					if (other_s !== void 0) set(other_s, UNINITIALIZED);
					else if (i in target) {
						other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED, stack));
						sources.set(i + "", other_s);
					}
				}
				if (s === void 0) {
					var _get_descriptor3;
					if (!has || ((_get_descriptor3 = get_descriptor(target, prop)) === null || _get_descriptor3 === void 0 ? void 0 : _get_descriptor3.writable)) {
						s = with_parent(() => /* @__PURE__ */ state(void 0, stack));
						set(s, proxy(value));
						sources.set(prop, s);
					}
				} else {
					has = s.v !== UNINITIALIZED;
					var p = with_parent(() => proxy(value));
					set(s, p);
				}
				var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
				if (descriptor === null || descriptor === void 0 ? void 0 : descriptor.set) descriptor.set.call(receiver, value);
				if (!has) {
					if (is_proxied_array && typeof prop === "string") {
						var ls = sources.get("length");
						var n = Number(prop);
						if (Number.isInteger(n) && n >= ls.v) set(ls, n + 1);
					}
					increment(version);
				}
				return true;
			},
			ownKeys(target) {
				get(version);
				var own_keys = Reflect.ownKeys(target).filter((key) => {
					var source = sources.get(key);
					return source === void 0 || source.v !== UNINITIALIZED;
				});
				for (var [key, source] of sources) if (source.v !== UNINITIALIZED && !(key in target)) own_keys.push(key);
				return own_keys;
			},
			setPrototypeOf() {
				state_prototype_fixed();
			}
		});
	}
	var init_proxy = __esmMin((() => {
		init_esm_env();
		init_runtime();
		init_utils$3();
		init_sources();
		init_constants$1();
		init_constants();
		init_errors();
		init_tracing();
		init_dev();
		init_flags();
		new Set([
			"copyWithin",
			"fill",
			"pop",
			"push",
			"reverse",
			"shift",
			"sort",
			"splice",
			"unshift"
		]);
	}));
	var init_equality = __esmMin((() => {
		init_warnings();
		init_proxy();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/operations.js
	/**
	* Initialize these lazily to avoid issues when using the runtime in a server context
	* where these globals are not available while avoiding a separate server entry point
	*/
	function init_operations() {
		if ($window !== void 0) return;
		$window = window;
		$document = document;
		is_firefox = /Firefox/.test(navigator.userAgent);
		var element_prototype = Element.prototype;
		var node_prototype = Node.prototype;
		var text_prototype = Text.prototype;
		first_child_getter = get_descriptor(node_prototype, "firstChild").get;
		next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
		if (is_extensible(element_prototype)) {
			element_prototype.__click = void 0;
			element_prototype.__className = void 0;
			element_prototype.__attributes = null;
			element_prototype.__style = void 0;
			element_prototype.__e = void 0;
		}
		if (is_extensible(text_prototype)) text_prototype.__t = void 0;
	}
	/**
	* @param {string} value
	* @returns {Text}
	*/
	function create_text(value = "") {
		return document.createTextNode(value);
	}
	/**
	* @template {Node} N
	* @param {N} node
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function get_first_child(node) {
		return first_child_getter.call(node);
	}
	/**
	* @template {Node} N
	* @param {N} node
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function get_next_sibling(node) {
		return next_sibling_getter.call(node);
	}
	/**
	* Don't mark this as side-effect-free, hydration needs to walk all nodes
	* @template {Node} N
	* @param {N} node
	* @param {boolean} is_text
	* @returns {TemplateNode | null}
	*/
	function child(node, is_text) {
		if (!hydrating) return /* @__PURE__ */ get_first_child(node);
		var child = /* @__PURE__ */ get_first_child(hydrate_node);
		if (child === null) child = hydrate_node.appendChild(create_text());
		else if (is_text && child.nodeType !== 3) {
			var text = create_text();
			child === null || child === void 0 || child.before(text);
			set_hydrate_node(text);
			return text;
		}
		if (is_text) merge_text_nodes(child);
		set_hydrate_node(child);
		return child;
	}
	/**
	* Don't mark this as side-effect-free, hydration needs to walk all nodes
	* @param {TemplateNode} node
	* @param {boolean} [is_text]
	* @returns {TemplateNode | null}
	*/
	function first_child(node, is_text = false) {
		if (!hydrating) {
			var first = /* @__PURE__ */ get_first_child(node);
			if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
			return first;
		}
		if (is_text) {
			if ((hydrate_node === null || hydrate_node === void 0 ? void 0 : hydrate_node.nodeType) !== 3) {
				var text = create_text();
				hydrate_node === null || hydrate_node === void 0 || hydrate_node.before(text);
				set_hydrate_node(text);
				return text;
			}
			merge_text_nodes(hydrate_node);
		}
		return hydrate_node;
	}
	/**
	* Don't mark this as side-effect-free, hydration needs to walk all nodes
	* @param {TemplateNode} node
	* @param {number} count
	* @param {boolean} is_text
	* @returns {TemplateNode | null}
	*/
	function sibling(node, count = 1, is_text = false) {
		let next_sibling = hydrating ? hydrate_node : node;
		var last_sibling;
		while (count--) {
			last_sibling = next_sibling;
			next_sibling = /* @__PURE__ */ get_next_sibling(next_sibling);
		}
		if (!hydrating) return next_sibling;
		if (is_text) {
			if ((next_sibling === null || next_sibling === void 0 ? void 0 : next_sibling.nodeType) !== 3) {
				var text = create_text();
				if (next_sibling === null) last_sibling === null || last_sibling === void 0 || last_sibling.after(text);
				else next_sibling.before(text);
				set_hydrate_node(text);
				return text;
			}
			merge_text_nodes(next_sibling);
		}
		set_hydrate_node(next_sibling);
		return next_sibling;
	}
	/**
	* @template {Node} N
	* @param {N} node
	* @returns {void}
	*/
	function clear_text_content(node) {
		node.textContent = "";
	}
	/**
	* Returns `true` if we're updating the current block, for example `condition` in
	* an `{#if condition}` block just changed. In this case, the branch should be
	* appended (or removed) at the same time as other updates within the
	* current `<svelte:boundary>`
	*/
	function should_defer_append() {
		if (!async_mode_flag) return false;
		if (eager_block_effects !== null) return false;
		return (active_effect.f & REACTION_RAN) !== 0;
	}
	/**
	* @template {keyof HTMLElementTagNameMap | string} T
	* @param {T} tag
	* @param {string} [namespace]
	* @param {string} [is]
	* @returns {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element}
	*/
	function create_element(tag, namespace, is) {
		let options = is ? { is } : void 0;
		return document.createElementNS(namespace !== null && namespace !== void 0 ? namespace : NAMESPACE_HTML, tag, options);
	}
	/**
	* Browsers split text nodes larger than 65536 bytes when parsing.
	* For hydration to succeed, we need to stitch them back together
	* @param {Text} text
	*/
	function merge_text_nodes(text) {
		if (text.nodeValue.length < 65536) return;
		let next = text.nextSibling;
		while (next !== null && next.nodeType === 3) {
			next.remove();
			/** @type {string} */ text.nodeValue += next.nodeValue;
			next = text.nextSibling;
		}
	}
	var $window, $document, is_firefox, first_child_getter, next_sibling_getter;
	var init_operations$1 = __esmMin((() => {
		init_hydration();
		init_esm_env();
		init_equality();
		init_utils$3();
		init_runtime();
		init_flags();
		init_constants$1();
		init_batch();
		init_constants();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
	function add_form_reset_listener() {
		if (!listening_to_form_reset) {
			listening_to_form_reset = true;
			document.addEventListener("reset", (evt) => {
				Promise.resolve().then(() => {
					if (!evt.defaultPrevented) for (const e of evt.target.elements) {
						var _e$__on_r;
						(_e$__on_r = e.__on_r) === null || _e$__on_r === void 0 || _e$__on_r.call(e);
					}
				});
			}, { capture: true });
		}
	}
	var listening_to_form_reset;
	var init_misc$1 = __esmMin((() => {
		init_hydration();
		init_operations$1();
		init_task();
		listening_to_form_reset = false;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
	/**
	* @template T
	* @param {() => T} fn
	*/
	function without_reactive_context(fn) {
		var previous_reaction = active_reaction;
		var previous_effect = active_effect;
		set_active_reaction(null);
		set_active_effect(null);
		try {
			return fn();
		} finally {
			set_active_reaction(previous_reaction);
			set_active_effect(previous_effect);
		}
	}
	/**
	* Listen to the given event, and then instantiate a global form reset listener if not already done,
	* to notify all bindings when the form is reset
	* @param {HTMLElement} element
	* @param {string} event
	* @param {(is_reset?: true) => void} handler
	* @param {(is_reset?: true) => void} [on_reset]
	*/
	function listen_to_event_and_reset_event(element, event, handler, on_reset = handler) {
		element.addEventListener(event, () => without_reactive_context(handler));
		const prev = element.__on_r;
		if (prev) element.__on_r = () => {
			prev();
			on_reset(true);
		};
		else element.__on_r = () => on_reset(true);
		add_form_reset_listener();
	}
	var init_shared = __esmMin((() => {
		init_effects();
		init_runtime();
		init_misc$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/effects.js
	/**
	* @param {'$effect' | '$effect.pre' | '$inspect'} rune
	*/
	function validate_effect(rune) {
		if (active_effect === null) {
			if (active_reaction === null) effect_orphan(rune);
			effect_in_unowned_derived();
		}
		if (is_destroying_effect) effect_in_teardown(rune);
	}
	/**
	* @param {Effect} effect
	* @param {Effect} parent_effect
	*/
	function push_effect(effect, parent_effect) {
		var parent_last = parent_effect.last;
		if (parent_last === null) parent_effect.last = parent_effect.first = effect;
		else {
			parent_last.next = effect;
			effect.prev = parent_last;
			parent_effect.last = effect;
		}
	}
	/**
	* @param {number} type
	* @param {null | (() => void | (() => void))} fn
	* @returns {Effect}
	*/
	function create_effect(type, fn) {
		var parent = active_effect;
		if (parent !== null && (parent.f & 8192) !== 0) type |= INERT;
		/** @type {Effect} */
		var effect = {
			ctx: component_context,
			deps: null,
			nodes: null,
			f: type | DIRTY | 512,
			first: null,
			fn,
			last: null,
			next: null,
			parent,
			b: parent && parent.b,
			prev: null,
			teardown: null,
			wv: 0,
			ac: null
		};
		current_batch === null || current_batch === void 0 || current_batch.register_created_effect(effect);
		/** @type {Effect | null} */
		var e = effect;
		if ((type & 4) !== 0) if (collected_effects !== null) collected_effects.push(effect);
		else Batch.ensure().schedule(effect);
		else if (fn !== null) {
			try {
				update_effect(effect);
			} catch (e) {
				destroy_effect(effect);
				throw e;
			}
			if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && (e.f & 524288) === 0) {
				e = e.first;
				if ((type & 16) !== 0 && (type & 65536) !== 0 && e !== null) e.f |= EFFECT_TRANSPARENT;
			}
		}
		if (e !== null) {
			e.parent = parent;
			if (parent !== null) push_effect(e, parent);
			if (active_reaction !== null && (active_reaction.f & 2) !== 0 && (type & 64) === 0) {
				var _derived$effects;
				var derived = active_reaction;
				((_derived$effects = derived.effects) !== null && _derived$effects !== void 0 ? _derived$effects : derived.effects = []).push(e);
			}
		}
		return effect;
	}
	/**
	* Internal representation of `$effect.tracking()`
	* @returns {boolean}
	*/
	function effect_tracking() {
		return active_reaction !== null && !untracking;
	}
	/**
	* @param {() => void} fn
	*/
	function teardown(fn) {
		const effect = create_effect(8, null);
		set_signal_status(effect, CLEAN);
		effect.teardown = fn;
		return effect;
	}
	/**
	* Internal representation of `$effect(...)`
	* @param {() => void | (() => void)} fn
	*/
	function user_effect(fn) {
		validate_effect("$effect");
		var flags = active_effect.f;
		if (!active_reaction && (flags & 32) !== 0 && (flags & 32768) === 0) {
			var _context$e;
			var context = component_context;
			((_context$e = context.e) !== null && _context$e !== void 0 ? _context$e : context.e = []).push(fn);
		} else return create_user_effect(fn);
	}
	/**
	* @param {() => void | (() => void)} fn
	*/
	function create_user_effect(fn) {
		return create_effect(4 | USER_EFFECT, fn);
	}
	/**
	* An effect root whose children can transition out
	* @param {() => void} fn
	* @returns {(options?: { outro?: boolean }) => Promise<void>}
	*/
	function component_root(fn) {
		Batch.ensure();
		const effect = create_effect(64 | EFFECT_PRESERVED, fn);
		return (options = {}) => {
			return new Promise((fulfil) => {
				if (options.outro) pause_effect(effect, () => {
					destroy_effect(effect);
					fulfil(void 0);
				});
				else {
					destroy_effect(effect);
					fulfil(void 0);
				}
			});
		};
	}
	/**
	* @param {() => void | (() => void)} fn
	* @returns {Effect}
	*/
	function effect(fn) {
		return create_effect(4, fn);
	}
	/**
	* @param {() => void | (() => void)} fn
	* @returns {Effect}
	*/
	function async_effect(fn) {
		return create_effect(ASYNC | EFFECT_PRESERVED, fn);
	}
	/**
	* @param {() => void | (() => void)} fn
	* @returns {Effect}
	*/
	function render_effect(fn, flags = 0) {
		return create_effect(8 | flags, fn);
	}
	/**
	* @param {(...expressions: any) => void | (() => void)} fn
	* @param {Array<() => any>} sync
	* @param {Array<() => Promise<any>>} async
	* @param {Blocker[]} blockers
	*/
	function template_effect(fn, sync = [], async = [], blockers = []) {
		flatten(blockers, sync, async, (values) => {
			create_effect(8, () => fn(...values.map(get)));
		});
	}
	/**
	* @param {(() => void)} fn
	* @param {number} flags
	*/
	function block(fn, flags = 0) {
		return create_effect(16 | flags, fn);
	}
	/**
	* @param {(() => void)} fn
	*/
	function branch(fn) {
		return create_effect(32 | EFFECT_PRESERVED, fn);
	}
	/**
	* @param {Effect} effect
	*/
	function execute_effect_teardown(effect) {
		var teardown = effect.teardown;
		if (teardown !== null) {
			const previously_destroying_effect = is_destroying_effect;
			const previous_reaction = active_reaction;
			set_is_destroying_effect(true);
			set_active_reaction(null);
			try {
				teardown.call(null);
			} finally {
				set_is_destroying_effect(previously_destroying_effect);
				set_active_reaction(previous_reaction);
			}
		}
	}
	/**
	* @param {Effect} signal
	* @param {boolean} remove_dom
	* @returns {void}
	*/
	function destroy_effect_children(signal, remove_dom = false) {
		var effect = signal.first;
		signal.first = signal.last = null;
		while (effect !== null) {
			const controller = effect.ac;
			if (controller !== null) without_reactive_context(() => {
				controller.abort(STALE_REACTION);
			});
			var next = effect.next;
			if ((effect.f & 64) !== 0) effect.parent = null;
			else destroy_effect(effect, remove_dom);
			effect = next;
		}
	}
	/**
	* @param {Effect} signal
	* @returns {void}
	*/
	function destroy_block_effect_children(signal) {
		var effect = signal.first;
		while (effect !== null) {
			var next = effect.next;
			if ((effect.f & 32) === 0) destroy_effect(effect);
			effect = next;
		}
	}
	/**
	* @param {Effect} effect
	* @param {boolean} [remove_dom]
	* @returns {void}
	*/
	function destroy_effect(effect, remove_dom = true) {
		var removed = false;
		if ((remove_dom || (effect.f & 262144) !== 0) && effect.nodes !== null && effect.nodes.end !== null) {
			remove_effect_dom(effect.nodes.start, effect.nodes.end);
			removed = true;
		}
		set_signal_status(effect, DESTROYING);
		destroy_effect_children(effect, remove_dom && !removed);
		remove_reactions(effect, 0);
		var transitions = effect.nodes && effect.nodes.t;
		if (transitions !== null) for (const transition of transitions) transition.stop();
		execute_effect_teardown(effect);
		effect.f ^= DESTROYING;
		effect.f |= DESTROYED;
		var parent = effect.parent;
		if (parent !== null && parent.first !== null) unlink_effect(effect);
		effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes = effect.ac = effect.b = null;
	}
	/**
	*
	* @param {TemplateNode | null} node
	* @param {TemplateNode} end
	*/
	function remove_effect_dom(node, end) {
		while (node !== null) {
			/** @type {TemplateNode | null} */
			var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
			node.remove();
			node = next;
		}
	}
	/**
	* Detach an effect from the effect tree, freeing up memory and
	* reducing the amount of work that happens on subsequent traversals
	* @param {Effect} effect
	*/
	function unlink_effect(effect) {
		var parent = effect.parent;
		var prev = effect.prev;
		var next = effect.next;
		if (prev !== null) prev.next = next;
		if (next !== null) next.prev = prev;
		if (parent !== null) {
			if (parent.first === effect) parent.first = next;
			if (parent.last === effect) parent.last = prev;
		}
	}
	/**
	* When a block effect is removed, we don't immediately destroy it or yank it
	* out of the DOM, because it might have transitions. Instead, we 'pause' it.
	* It stays around (in memory, and in the DOM) until outro transitions have
	* completed, and if the state change is reversed then we _resume_ it.
	* A paused effect does not update, and the DOM subtree becomes inert.
	* @param {Effect} effect
	* @param {() => void} [callback]
	* @param {boolean} [destroy]
	*/
	function pause_effect(effect, callback, destroy = true) {
		/** @type {TransitionManager[]} */
		var transitions = [];
		pause_children(effect, transitions, true);
		var fn = () => {
			if (destroy) destroy_effect(effect);
			if (callback) callback();
		};
		var remaining = transitions.length;
		if (remaining > 0) {
			var check = () => --remaining || fn();
			for (var transition of transitions) transition.out(check);
		} else fn();
	}
	/**
	* @param {Effect} effect
	* @param {TransitionManager[]} transitions
	* @param {boolean} local
	*/
	function pause_children(effect, transitions, local) {
		if ((effect.f & 8192) !== 0) return;
		effect.f ^= INERT;
		var t = effect.nodes && effect.nodes.t;
		if (t !== null) {
			for (const transition of t) if (transition.is_global || local) transitions.push(transition);
		}
		var child = effect.first;
		while (child !== null) {
			var sibling = child.next;
			if ((child.f & 64) === 0) {
				var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0 && (effect.f & 16) !== 0;
				pause_children(child, transitions, transparent ? local : false);
			}
			child = sibling;
		}
	}
	/**
	* The opposite of `pause_effect`. We call this if (for example)
	* `x` becomes falsy then truthy: `{#if x}...{/if}`
	* @param {Effect} effect
	*/
	function resume_effect(effect) {
		resume_children(effect, true);
	}
	/**
	* @param {Effect} effect
	* @param {boolean} local
	*/
	function resume_children(effect, local) {
		if ((effect.f & 8192) === 0) return;
		effect.f ^= INERT;
		if ((effect.f & 1024) === 0) {
			set_signal_status(effect, DIRTY);
			Batch.ensure().schedule(effect);
		}
		var child = effect.first;
		while (child !== null) {
			var sibling = child.next;
			var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0;
			resume_children(child, transparent ? local : false);
			child = sibling;
		}
		var t = effect.nodes && effect.nodes.t;
		if (t !== null) {
			for (const transition of t) if (transition.is_global || local) transition.in();
		}
	}
	/**
	* @param {Effect} effect
	* @param {DocumentFragment} fragment
	*/
	function move_effect(effect, fragment) {
		if (!effect.nodes) return;
		/** @type {TemplateNode | null} */
		var node = effect.nodes.start;
		var end = effect.nodes.end;
		while (node !== null) {
			/** @type {TemplateNode | null} */
			var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
			fragment.append(node);
			node = next;
		}
	}
	var init_effects = __esmMin((() => {
		init_runtime();
		init_constants$1();
		init_errors();
		init_esm_env();
		init_utils$3();
		init_operations$1();
		init_context();
		init_batch();
		init_async$1();
		init_shared();
		init_status();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/legacy.js
	var captured_signals;
	var init_legacy$2 = __esmMin((() => {
		init_sources();
		init_runtime();
		captured_signals = null;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/runtime.js
	/** @param {boolean} value */
	function set_is_destroying_effect(value) {
		is_destroying_effect = value;
	}
	/** @param {null | Reaction} reaction */
	function set_active_reaction(reaction) {
		active_reaction = reaction;
	}
	/** @param {null | Effect} effect */
	function set_active_effect(effect) {
		active_effect = effect;
	}
	/** @param {Value} value */
	function push_reaction_value(value) {
		if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & 2) !== 0)) if (current_sources === null) current_sources = [value];
		else current_sources.push(value);
	}
	/** @param {null | Source[]} value */
	function set_untracked_writes(value) {
		untracked_writes = value;
	}
	/** @param {number} value */
	function set_update_version(value) {
		update_version = value;
	}
	function increment_write_version() {
		return ++write_version;
	}
	/**
	* Determines whether a derived or effect is dirty.
	* If it is MAYBE_DIRTY, will set the status to CLEAN
	* @param {Reaction} reaction
	* @returns {boolean}
	*/
	function is_dirty(reaction) {
		var flags = reaction.f;
		if ((flags & 2048) !== 0) return true;
		if (flags & 2) reaction.f &= ~WAS_MARKED;
		if ((flags & 4096) !== 0) {
			var dependencies = reaction.deps;
			var length = dependencies.length;
			for (var i = 0; i < length; i++) {
				var dependency = dependencies[i];
				if (is_dirty(dependency)) update_derived(dependency);
				if (dependency.wv > reaction.wv) return true;
			}
			if ((flags & 512) !== 0 && batch_values === null) set_signal_status(reaction, CLEAN);
		}
		return false;
	}
	/**
	* @param {Value} signal
	* @param {Effect} effect
	* @param {boolean} [root]
	*/
	function schedule_possible_effect_self_invalidation(signal, effect, root = true) {
		var reactions = signal.reactions;
		if (reactions === null) return;
		if (!async_mode_flag && current_sources !== null && includes.call(current_sources, signal)) return;
		for (var i = 0; i < reactions.length; i++) {
			var reaction = reactions[i];
			if ((reaction.f & 2) !== 0) schedule_possible_effect_self_invalidation(reaction, effect, false);
			else if (effect === reaction) {
				if (root) set_signal_status(reaction, DIRTY);
				else if ((reaction.f & 1024) !== 0) set_signal_status(reaction, MAYBE_DIRTY);
				schedule_effect(reaction);
			}
		}
	}
	/** @param {Reaction} reaction */
	function update_reaction(reaction) {
		var previous_deps = new_deps;
		var previous_skipped_deps = skipped_deps;
		var previous_untracked_writes = untracked_writes;
		var previous_reaction = active_reaction;
		var previous_sources = current_sources;
		var previous_component_context = component_context;
		var previous_untracking = untracking;
		var previous_update_version = update_version;
		var flags = reaction.f;
		new_deps = null;
		skipped_deps = 0;
		untracked_writes = null;
		active_reaction = (flags & 96) === 0 ? reaction : null;
		current_sources = null;
		set_component_context(reaction.ctx);
		untracking = false;
		update_version = ++read_version;
		if (reaction.ac !== null) {
			without_reactive_context(() => {
				/** @type {AbortController} */ reaction.ac.abort(STALE_REACTION);
			});
			reaction.ac = null;
		}
		try {
			reaction.f |= REACTION_IS_UPDATING;
			var fn = reaction.fn;
			var result = fn();
			reaction.f |= REACTION_RAN;
			var deps = reaction.deps;
			var is_fork = current_batch === null || current_batch === void 0 ? void 0 : current_batch.is_fork;
			if (new_deps !== null) {
				var i;
				if (!is_fork) remove_reactions(reaction, skipped_deps);
				if (deps !== null && skipped_deps > 0) {
					deps.length = skipped_deps + new_deps.length;
					for (i = 0; i < new_deps.length; i++) deps[skipped_deps + i] = new_deps[i];
				} else reaction.deps = deps = new_deps;
				if (effect_tracking() && (reaction.f & 512) !== 0) for (i = skipped_deps; i < deps.length; i++) {
					var _deps$i, _deps$i$reactions;
					((_deps$i$reactions = (_deps$i = deps[i]).reactions) !== null && _deps$i$reactions !== void 0 ? _deps$i$reactions : _deps$i.reactions = []).push(reaction);
				}
			} else if (!is_fork && deps !== null && skipped_deps < deps.length) {
				remove_reactions(reaction, skipped_deps);
				deps.length = skipped_deps;
			}
			if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & 6146) === 0) for (i = 0; i < untracked_writes.length; i++) schedule_possible_effect_self_invalidation(untracked_writes[i], reaction);
			if (previous_reaction !== null && previous_reaction !== reaction) {
				read_version++;
				if (previous_reaction.deps !== null) for (let i = 0; i < previous_skipped_deps; i += 1) previous_reaction.deps[i].rv = read_version;
				if (previous_deps !== null) for (const dep of previous_deps) dep.rv = read_version;
				if (untracked_writes !== null) if (previous_untracked_writes === null) previous_untracked_writes = untracked_writes;
				else previous_untracked_writes.push(...untracked_writes);
			}
			if ((reaction.f & 8388608) !== 0) reaction.f ^= ERROR_VALUE;
			return result;
		} catch (error) {
			return handle_error(error);
		} finally {
			reaction.f ^= REACTION_IS_UPDATING;
			new_deps = previous_deps;
			skipped_deps = previous_skipped_deps;
			untracked_writes = previous_untracked_writes;
			active_reaction = previous_reaction;
			current_sources = previous_sources;
			set_component_context(previous_component_context);
			untracking = previous_untracking;
			update_version = previous_update_version;
		}
	}
	/**
	* @template V
	* @param {Reaction} signal
	* @param {Value<V>} dependency
	* @returns {void}
	*/
	function remove_reaction(signal, dependency) {
		let reactions = dependency.reactions;
		if (reactions !== null) {
			var index = index_of.call(reactions, signal);
			if (index !== -1) {
				var new_length = reactions.length - 1;
				if (new_length === 0) reactions = dependency.reactions = null;
				else {
					reactions[index] = reactions[new_length];
					reactions.pop();
				}
			}
		}
		if (reactions === null && (dependency.f & 2) !== 0 && (new_deps === null || !includes.call(new_deps, dependency))) {
			var derived = dependency;
			if ((derived.f & 512) !== 0) {
				derived.f ^= 512;
				derived.f &= ~WAS_MARKED;
			}
			if (derived.v !== UNINITIALIZED) update_derived_status(derived);
			freeze_derived_effects(derived);
			remove_reactions(derived, 0);
		}
	}
	/**
	* @param {Reaction} signal
	* @param {number} start_index
	* @returns {void}
	*/
	function remove_reactions(signal, start_index) {
		var dependencies = signal.deps;
		if (dependencies === null) return;
		for (var i = start_index; i < dependencies.length; i++) remove_reaction(signal, dependencies[i]);
	}
	/**
	* @param {Effect} effect
	* @returns {void}
	*/
	function update_effect(effect) {
		var flags = effect.f;
		if ((flags & 16384) !== 0) return;
		set_signal_status(effect, CLEAN);
		var previous_effect = active_effect;
		var was_updating_effect = is_updating_effect;
		active_effect = effect;
		is_updating_effect = true;
		try {
			if ((flags & 16777232) !== 0) destroy_block_effect_children(effect);
			else destroy_effect_children(effect);
			execute_effect_teardown(effect);
			var teardown = update_reaction(effect);
			effect.teardown = typeof teardown === "function" ? teardown : null;
			effect.wv = write_version;
		} finally {
			is_updating_effect = was_updating_effect;
			active_effect = previous_effect;
		}
	}
	/**
	* Returns a promise that resolves once any pending state changes have been applied.
	* @returns {Promise<void>}
	*/
	function tick() {
		return _tick.apply(this, arguments);
	}
	function _tick() {
		_tick = _asyncToGenerator(function* () {
			if (async_mode_flag) return new Promise((f) => {
				requestAnimationFrame(() => f());
				setTimeout(() => f());
			});
			yield Promise.resolve();
			flushSync();
		});
		return _tick.apply(this, arguments);
	}
	/**
	* @template V
	* @param {Value<V>} signal
	* @returns {V}
	*/
	function get(signal) {
		var is_derived = (signal.f & 2) !== 0;
		captured_signals === null || captured_signals === void 0 || captured_signals.add(signal);
		if (active_reaction !== null && !untracking) {
			if (!(active_effect !== null && (active_effect.f & 16384) !== 0) && (current_sources === null || !includes.call(current_sources, signal))) {
				var deps = active_reaction.deps;
				if ((active_reaction.f & 2097152) !== 0) {
					if (signal.rv < read_version) {
						signal.rv = read_version;
						if (new_deps === null && deps !== null && deps[skipped_deps] === signal) skipped_deps++;
						else if (new_deps === null) new_deps = [signal];
						else new_deps.push(signal);
					}
				} else {
					var _active_reaction, _active_reaction$deps;
					((_active_reaction$deps = (_active_reaction = active_reaction).deps) !== null && _active_reaction$deps !== void 0 ? _active_reaction$deps : _active_reaction.deps = []).push(signal);
					var reactions = signal.reactions;
					if (reactions === null) signal.reactions = [active_reaction];
					else if (!includes.call(reactions, active_reaction)) reactions.push(active_reaction);
				}
			}
		}
		if (is_destroying_effect && old_values.has(signal)) return old_values.get(signal);
		if (is_derived) {
			var derived = signal;
			if (is_destroying_effect) {
				var value = derived.v;
				if ((derived.f & 1024) === 0 && derived.reactions !== null || depends_on_old_values(derived)) value = execute_derived(derived);
				old_values.set(derived, value);
				return value;
			}
			var should_connect = (derived.f & 512) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) !== 0);
			var is_new = (derived.f & REACTION_RAN) === 0;
			if (is_dirty(derived)) {
				if (should_connect) derived.f |= 512;
				update_derived(derived);
			}
			if (should_connect && !is_new) {
				unfreeze_derived_effects(derived);
				reconnect(derived);
			}
		}
		if (batch_values === null || batch_values === void 0 ? void 0 : batch_values.has(signal)) return batch_values.get(signal);
		if ((signal.f & 8388608) !== 0) throw signal.v;
		return signal.v;
	}
	/**
	* (Re)connect a disconnected derived, so that it is notified
	* of changes in `mark_reactions`
	* @param {Derived} derived
	*/
	function reconnect(derived) {
		derived.f |= 512;
		if (derived.deps === null) return;
		for (const dep of derived.deps) {
			var _dep$reactions;
			((_dep$reactions = dep.reactions) !== null && _dep$reactions !== void 0 ? _dep$reactions : dep.reactions = []).push(derived);
			if ((dep.f & 2) !== 0 && (dep.f & 512) === 0) {
				unfreeze_derived_effects(dep);
				reconnect(dep);
			}
		}
	}
	/** @param {Derived} derived */
	function depends_on_old_values(derived) {
		if (derived.v === UNINITIALIZED) return true;
		if (derived.deps === null) return false;
		for (const dep of derived.deps) {
			if (old_values.has(dep)) return true;
			if ((dep.f & 2) !== 0 && depends_on_old_values(dep)) return true;
		}
		return false;
	}
	/**
	* When used inside a [`$derived`](https://svelte.dev/docs/svelte/$derived) or [`$effect`](https://svelte.dev/docs/svelte/$effect),
	* any state read inside `fn` will not be treated as a dependency.
	*
	* ```ts
	* $effect(() => {
	*   // this will run when `data` changes, but not when `time` changes
	*   save(data, {
	*     timestamp: untrack(() => time)
	*   });
	* });
	* ```
	* @template T
	* @param {() => T} fn
	* @returns {T}
	*/
	function untrack(fn) {
		var previous_untracking = untracking;
		try {
			untracking = true;
			return fn();
		} finally {
			untracking = previous_untracking;
		}
	}
	/**
	* Possibly traverse an object and read all its properties so that they're all reactive in case this is `$state`.
	* Does only check first level of an object for performance reasons (heuristic should be good for 99% of all cases).
	* @param {any} value
	* @returns {void}
	*/
	function deep_read_state(value) {
		if (typeof value !== "object" || !value || value instanceof EventTarget) return;
		if (STATE_SYMBOL in value) deep_read(value);
		else if (!Array.isArray(value)) for (let key in value) {
			const prop = value[key];
			if (typeof prop === "object" && prop && STATE_SYMBOL in prop) deep_read(prop);
		}
	}
	/**
	* Deeply traverse an object and read all its properties
	* so that they're all reactive in case this is `$state`
	* @param {any} value
	* @param {Set<any>} visited
	* @returns {void}
	*/
	function deep_read(value, visited = /* @__PURE__ */ new Set()) {
		if (typeof value === "object" && value !== null && !(value instanceof EventTarget) && !visited.has(value)) {
			visited.add(value);
			if (value instanceof Date) value.getTime();
			for (let key in value) try {
				deep_read(value[key], visited);
			} catch (e) {}
			const proto = get_prototype_of(value);
			if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
				const descriptors = get_descriptors(proto);
				for (let key in descriptors) {
					const get = descriptors[key].get;
					if (get) try {
						get.call(value);
					} catch (e) {}
				}
			}
		}
	}
	var is_updating_effect, is_destroying_effect, active_reaction, untracking, active_effect, current_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, update_version;
	var init_runtime = __esmMin((() => {
		init_esm_env();
		init_utils$3();
		init_effects();
		init_constants$1();
		init_sources();
		init_deriveds();
		init_flags();
		init_tracing();
		init_dev();
		init_context();
		init_batch();
		init_error_handling();
		init_constants();
		init_legacy$2();
		init_shared();
		init_status();
		init_warnings();
		init_asyncToGenerator();
		is_updating_effect = false;
		is_destroying_effect = false;
		active_reaction = null;
		untracking = false;
		active_effect = null;
		current_sources = null;
		new_deps = null;
		skipped_deps = 0;
		untracked_writes = null;
		write_version = 1;
		read_version = 0;
		update_version = read_version;
	}));
	//#endregion
	//#region node_modules/svelte/src/attachments/index.js
	var init_attachments$1 = __esmMin((() => {
		init_client();
		init_index_client();
		init_effects();
	}));
	//#endregion
	//#region node_modules/svelte/src/utils.js
	/**
	* Returns `true` if `name` is a passive event
	* @param {string} name
	*/
	function is_passive_event(name) {
		return PASSIVE_EVENTS.includes(name);
	}
	var DOM_BOOLEAN_ATTRIBUTES, PASSIVE_EVENTS, STATE_CREATION_RUNES;
	var init_utils = __esmMin((() => {
		DOM_BOOLEAN_ATTRIBUTES = [
			"allowfullscreen",
			"async",
			"autofocus",
			"autoplay",
			"checked",
			"controls",
			"default",
			"disabled",
			"formnovalidate",
			"indeterminate",
			"inert",
			"ismap",
			"loop",
			"multiple",
			"muted",
			"nomodule",
			"novalidate",
			"open",
			"playsinline",
			"readonly",
			"required",
			"reversed",
			"seamless",
			"selected",
			"webkitdirectory",
			"defer",
			"disablepictureinpicture",
			"disableremoteplayback"
		];
		[...DOM_BOOLEAN_ATTRIBUTES];
		PASSIVE_EVENTS = ["touchstart", "touchmove"];
		STATE_CREATION_RUNES = [
			"$state",
			"$state.raw",
			"$derived",
			"$derived.by"
		];
		[...STATE_CREATION_RUNES];
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/assign.js
	var init_assign = __esmMin((() => {
		init_constants$1();
		init_utils();
		init_runtime();
	}));
	var init_css$1 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/elements.js
	var init_elements = __esmMin((() => {
		init_constants$1();
		init_hydration();
		init_context();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/events.js
	/**
	* @param {string} event_name
	* @param {EventTarget} dom
	* @param {EventListener} [handler]
	* @param {AddEventListenerOptions} [options]
	*/
	function create_event(event_name, dom, handler, options = {}) {
		/**
		* @this {EventTarget}
		*/
		function target_handler(event) {
			if (!options.capture) handle_event_propagation.call(dom, event);
			if (!event.cancelBubble) return without_reactive_context(() => {
				return handler === null || handler === void 0 ? void 0 : handler.call(this, event);
			});
		}
		if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") queue_micro_task(() => {
			dom.addEventListener(event_name, target_handler, options);
		});
		else dom.addEventListener(event_name, target_handler, options);
		return target_handler;
	}
	/**
	* @param {string} event_name
	* @param {Element} dom
	* @param {EventListener} [handler]
	* @param {boolean} [capture]
	* @param {boolean} [passive]
	* @returns {void}
	*/
	function event(event_name, dom, handler, capture, passive) {
		var options = {
			capture,
			passive
		};
		var target_handler = create_event(event_name, dom, handler, options);
		if (dom === document.body || dom === window || dom === document || dom instanceof HTMLMediaElement) teardown(() => {
			dom.removeEventListener(event_name, target_handler, options);
		});
	}
	/**
	* @param {string} event_name
	* @param {Element} element
	* @param {EventListener} [handler]
	* @returns {void}
	*/
	function delegated(event_name, element, handler) {
		var _element$event_symbol;
		((_element$event_symbol = element[event_symbol]) !== null && _element$event_symbol !== void 0 ? _element$event_symbol : element[event_symbol] = {})[event_name] = handler;
	}
	/**
	* @param {Array<string>} events
	* @returns {void}
	*/
	function delegate(events) {
		for (var i = 0; i < events.length; i++) all_registered_events.add(events[i]);
		for (var fn of root_event_handles) fn(events);
	}
	/**
	* @this {EventTarget}
	* @param {Event} event
	* @returns {void}
	*/
	function handle_event_propagation(event) {
		var _event$composedPath;
		var handler_element = this;
		var owner_document = handler_element.ownerDocument;
		var event_name = event.type;
		var path = ((_event$composedPath = event.composedPath) === null || _event$composedPath === void 0 ? void 0 : _event$composedPath.call(event)) || [];
		var current_target = path[0] || event.target;
		last_propagated_event = event;
		var path_idx = 0;
		var handled_at = last_propagated_event === event && event[event_symbol];
		if (handled_at) {
			var at_idx = path.indexOf(handled_at);
			if (at_idx !== -1 && (handler_element === document || handler_element === window)) {
				event[event_symbol] = handler_element;
				return;
			}
			var handler_idx = path.indexOf(handler_element);
			if (handler_idx === -1) return;
			if (at_idx <= handler_idx) path_idx = at_idx;
		}
		current_target = path[path_idx] || event.target;
		if (current_target === handler_element) return;
		define_property(event, "currentTarget", {
			configurable: true,
			get() {
				return current_target || owner_document;
			}
		});
		var previous_reaction = active_reaction;
		var previous_effect = active_effect;
		set_active_reaction(null);
		set_active_effect(null);
		try {
			/**
			* @type {unknown}
			*/
			var throw_error;
			/**
			* @type {unknown[]}
			*/
			var other_errors = [];
			while (current_target !== null) {
				/** @type {null | Element} */
				var parent_element = current_target.assignedSlot || current_target.parentNode || current_target.host || null;
				try {
					var _current_target$event;
					var delegated = (_current_target$event = current_target[event_symbol]) === null || _current_target$event === void 0 ? void 0 : _current_target$event[event_name];
					if (delegated != null && (!current_target.disabled || event.target === current_target)) delegated.call(current_target, event);
				} catch (error) {
					if (throw_error) other_errors.push(error);
					else throw_error = error;
				}
				if (event.cancelBubble || parent_element === handler_element || parent_element === null) break;
				current_target = parent_element;
			}
			if (throw_error) {
				for (let error of other_errors) queueMicrotask(() => {
					throw error;
				});
				throw throw_error;
			}
		} finally {
			event[event_symbol] = handler_element;
			delete event.currentTarget;
			set_active_reaction(previous_reaction);
			set_active_effect(previous_effect);
		}
	}
	var event_symbol, all_registered_events, root_event_handles, last_propagated_event;
	var init_events = __esmMin((() => {
		init_effects();
		init_utils$3();
		init_hydration();
		init_task();
		init_runtime();
		init_shared();
		event_symbol = Symbol("events");
		all_registered_events = /* @__PURE__ */ new Set();
		root_event_handles = /* @__PURE__ */ new Set();
		last_propagated_event = null;
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/reconciler.js
	/** @param {string} html */
	function create_trusted_html(html) {
		var _policy$createHTML;
		return (_policy$createHTML = policy === null || policy === void 0 ? void 0 : policy.createHTML(html)) !== null && _policy$createHTML !== void 0 ? _policy$createHTML : html;
	}
	/**
	* @param {string} html
	*/
	function create_fragment_from_html(html) {
		var elem = create_element("template");
		elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->"));
		return elem.content;
	}
	var _globalThis, policy;
	var init_reconciler = __esmMin((() => {
		init_operations$1();
		policy = ((_globalThis = globalThis) === null || _globalThis === void 0 || (_globalThis = _globalThis.window) === null || _globalThis === void 0 ? void 0 : _globalThis.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { 
		/** @param {string} html */
createHTML: (html) => {
			return html;
		} });
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/template.js
	/**
	* @param {TemplateNode} start
	* @param {TemplateNode | null} end
	*/
	function assign_nodes(start, end) {
		var effect = active_effect;
		if (effect.nodes === null) effect.nodes = {
			start,
			end,
			a: null,
			t: null
		};
	}
	/**
	* @param {string} content
	* @param {number} flags
	* @returns {() => Node | Node[]}
	*/
	/* @__NO_SIDE_EFFECTS__ */
	function from_html(content, flags) {
		var is_fragment = (flags & 1) !== 0;
		var use_import_node = (flags & 2) !== 0;
		/** @type {Node} */
		var node;
		/**
		* Whether or not the first item is a text/element node. If not, we need to
		* create an additional comment node to act as `effect.nodes.start`
		*/
		var has_start = !content.startsWith("<!>");
		return () => {
			if (hydrating) {
				assign_nodes(hydrate_node, null);
				return hydrate_node;
			}
			if (node === void 0) {
				node = create_fragment_from_html(has_start ? content : "<!>" + content);
				if (!is_fragment) node = /* @__PURE__ */ get_first_child(node);
			}
			var clone = use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true);
			if (is_fragment) {
				var start = /* @__PURE__ */ get_first_child(clone);
				var end = clone.lastChild;
				assign_nodes(start, end);
			} else assign_nodes(clone, clone);
			return clone;
		};
	}
	/**
	* @returns {TemplateNode | DocumentFragment}
	*/
	function comment() {
		if (hydrating) {
			assign_nodes(hydrate_node, null);
			return hydrate_node;
		}
		var frag = document.createDocumentFragment();
		var start = document.createComment("");
		var anchor = create_text();
		frag.append(start, anchor);
		assign_nodes(start, anchor);
		return frag;
	}
	/**
	* Assign the created (or in hydration mode, traversed) dom elements to the current block
	* and insert the elements into the dom (in client mode).
	* @param {Text | Comment | Element} anchor
	* @param {DocumentFragment | Element} dom
	*/
	function append(anchor, dom) {
		if (hydrating) {
			var effect = active_effect;
			if ((effect.f & 32768) === 0 || effect.nodes.end === null) effect.nodes.end = hydrate_node;
			hydrate_next();
			return;
		}
		if (anchor === null) return;
		anchor.before(dom);
	}
	var init_template = __esmMin((() => {
		init_hydration();
		init_operations$1();
		init_reconciler();
		init_runtime();
		init_constants();
		init_constants$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/render.js
	/**
	* @param {Element} text
	* @param {string} value
	* @returns {void}
	*/
	function set_text(text, value) {
		var _text$__t;
		var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
		if (str !== ((_text$__t = text.__t) !== null && _text$__t !== void 0 ? _text$__t : text.__t = text.nodeValue)) {
			text.__t = str;
			text.nodeValue = `${str}`;
		}
	}
	/**
	* Mounts a component to the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component.
	* Transitions will play during the initial render unless the `intro` option is set to `false`.
	*
	* @template {Record<string, any>} Props
	* @template {Record<string, any>} Exports
	* @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
	* @param {MountOptions<Props>} options
	* @returns {Exports}
	*/
	function mount(component, options) {
		return _mount(component, options);
	}
	/**
	* @template {Record<string, any>} Exports
	* @param {ComponentType<SvelteComponent<any>> | Component<any>} Component
	* @param {MountOptions} options
	* @returns {Exports}
	*/
	function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
		init_operations();
		/** @type {Exports} */
		var component = void 0;
		var unmount = component_root(() => {
			var anchor_node = anchor !== null && anchor !== void 0 ? anchor : target.appendChild(create_text());
			boundary(anchor_node, { pending: () => {} }, (anchor_node) => {
				push({});
				var ctx = component_context;
				if (context) ctx.c = context;
				if (events)
 /** @type {any} */ props.$$events = events;
				if (hydrating) assign_nodes(anchor_node, null);
				should_intro = intro;
				component = Component(anchor_node, props) || {};
				should_intro = true;
				if (hydrating) {
					/** @type {Effect & { nodes: EffectNodes }} */ active_effect.nodes.end = hydrate_node;
					if (hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]") {
						hydration_mismatch();
						throw HYDRATION_ERROR;
					}
				}
				pop();
			}, transformError);
			/** @type {Set<string>} */
			var registered_events = /* @__PURE__ */ new Set();
			/** @param {Array<string>} events */
			var event_handle = (events) => {
				for (var i = 0; i < events.length; i++) {
					var event_name = events[i];
					if (registered_events.has(event_name)) continue;
					registered_events.add(event_name);
					var passive = is_passive_event(event_name);
					for (const node of [target, document]) {
						var counts = listeners.get(node);
						if (counts === void 0) {
							counts = /* @__PURE__ */ new Map();
							listeners.set(node, counts);
						}
						var count = counts.get(event_name);
						if (count === void 0) {
							node.addEventListener(event_name, handle_event_propagation, { passive });
							counts.set(event_name, 1);
						} else counts.set(event_name, count + 1);
					}
				}
			};
			event_handle(array_from(all_registered_events));
			root_event_handles.add(event_handle);
			return () => {
				for (var event_name of registered_events) for (const node of [target, document]) {
					var counts = listeners.get(node);
					var count = counts.get(event_name);
					if (--count == 0) {
						node.removeEventListener(event_name, handle_event_propagation);
						counts.delete(event_name);
						if (counts.size === 0) listeners.delete(node);
					} else counts.set(event_name, count);
				}
				root_event_handles.delete(event_handle);
				if (anchor_node !== anchor) {
					var _anchor_node$parentNo;
					(_anchor_node$parentNo = anchor_node.parentNode) === null || _anchor_node$parentNo === void 0 || _anchor_node$parentNo.removeChild(anchor_node);
				}
			};
		});
		mounted_components.set(component, unmount);
		return component;
	}
	var should_intro, listeners, mounted_components;
	var init_render = __esmMin((() => {
		init_esm_env();
		init_operations$1();
		init_constants();
		init_runtime();
		init_context();
		init_effects();
		init_hydration();
		init_utils$3();
		init_events();
		init_warnings();
		init_errors();
		init_template();
		init_utils();
		init_constants$1();
		init_boundary();
		init_objectSpread2();
		listeners = /* @__PURE__ */ new Map();
		mounted_components = /* @__PURE__ */ new WeakMap();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/hmr.js
	var init_hmr = __esmMin((() => {
		init_constants$1();
		init_hydration();
		init_effects();
		init_sources();
		init_render();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/ownership.js
	var init_ownership = __esmMin((() => {
		init_utils$3();
		init_constants$1();
		init_context();
		init_utils();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/legacy.js
	var init_legacy$1 = __esmMin((() => {
		init_errors();
		init_context();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/inspect.js
	var init_inspect = __esmMin((() => {
		init_clone();
		init_effects();
		init_runtime();
		init_dev();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/async.js
	var init_async = __esmMin((() => {
		init_async$1();
		init_runtime();
		init_hydration();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/validation.js
	var init_validation = __esmMin((() => {
		init_errors();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
	var _batches, _onscreen, _offscreen, _outroing, _transition, _commit, _discard, BranchManager;
	var init_branches = __esmMin((() => {
		init_batch();
		init_effects();
		init_constants$1();
		init_hydration();
		init_operations$1();
		init_esm_env();
		init_defineProperty();
		init_classPrivateFieldInitSpec();
		init_classPrivateFieldGet2();
		init_classPrivateFieldSet2();
		_batches = /* @__PURE__ */ new WeakMap();
		_onscreen = /* @__PURE__ */ new WeakMap();
		_offscreen = /* @__PURE__ */ new WeakMap();
		_outroing = /* @__PURE__ */ new WeakMap();
		_transition = /* @__PURE__ */ new WeakMap();
		_commit = /* @__PURE__ */ new WeakMap();
		_discard = /* @__PURE__ */ new WeakMap();
		BranchManager = class {
			/**
			* @param {TemplateNode} anchor
			* @param {boolean} transition
			*/
			constructor(anchor, transition = true) {
				_defineProperty(
					this,
					/** @type {TemplateNode} */
					"anchor",
					void 0
				);
				_classPrivateFieldInitSpec(this, _batches, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _onscreen, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _offscreen, /* @__PURE__ */ new Map());
				_classPrivateFieldInitSpec(this, _outroing, /* @__PURE__ */ new Set());
				_classPrivateFieldInitSpec(this, _transition, true);
				_classPrivateFieldInitSpec(this, _commit, (batch) => {
					if (!_classPrivateFieldGet2(_batches, this).has(batch)) return;
					var key = _classPrivateFieldGet2(_batches, this).get(batch);
					var onscreen = _classPrivateFieldGet2(_onscreen, this).get(key);
					if (onscreen) {
						resume_effect(onscreen);
						_classPrivateFieldGet2(_outroing, this).delete(key);
					} else {
						var offscreen = _classPrivateFieldGet2(_offscreen, this).get(key);
						if (offscreen) {
							_classPrivateFieldGet2(_onscreen, this).set(key, offscreen.effect);
							_classPrivateFieldGet2(_offscreen, this).delete(key);
							/** @type {TemplateNode} */ offscreen.fragment.lastChild.remove();
							this.anchor.before(offscreen.fragment);
							onscreen = offscreen.effect;
						}
					}
					for (const [b, k] of _classPrivateFieldGet2(_batches, this)) {
						_classPrivateFieldGet2(_batches, this).delete(b);
						if (b === batch) break;
						const offscreen = _classPrivateFieldGet2(_offscreen, this).get(k);
						if (offscreen) {
							destroy_effect(offscreen.effect);
							_classPrivateFieldGet2(_offscreen, this).delete(k);
						}
					}
					for (const [k, effect] of _classPrivateFieldGet2(_onscreen, this)) {
						if (k === key || _classPrivateFieldGet2(_outroing, this).has(k)) continue;
						const on_destroy = () => {
							if (Array.from(_classPrivateFieldGet2(_batches, this).values()).includes(k)) {
								var fragment = document.createDocumentFragment();
								move_effect(effect, fragment);
								fragment.append(create_text());
								_classPrivateFieldGet2(_offscreen, this).set(k, {
									effect,
									fragment
								});
							} else destroy_effect(effect);
							_classPrivateFieldGet2(_outroing, this).delete(k);
							_classPrivateFieldGet2(_onscreen, this).delete(k);
						};
						if (_classPrivateFieldGet2(_transition, this) || !onscreen) {
							_classPrivateFieldGet2(_outroing, this).add(k);
							pause_effect(effect, on_destroy, false);
						} else on_destroy();
					}
				});
				_classPrivateFieldInitSpec(this, _discard, (batch) => {
					_classPrivateFieldGet2(_batches, this).delete(batch);
					const keys = Array.from(_classPrivateFieldGet2(_batches, this).values());
					for (const [k, branch] of _classPrivateFieldGet2(_offscreen, this)) if (!keys.includes(k)) {
						destroy_effect(branch.effect);
						_classPrivateFieldGet2(_offscreen, this).delete(k);
					}
				});
				this.anchor = anchor;
				_classPrivateFieldSet2(_transition, this, transition);
			}
			/**
			*
			* @param {any} key
			* @param {null | ((target: TemplateNode) => void)} fn
			*/
			ensure(key, fn) {
				var batch = current_batch;
				var defer = should_defer_append();
				if (fn && !_classPrivateFieldGet2(_onscreen, this).has(key) && !_classPrivateFieldGet2(_offscreen, this).has(key)) if (defer) {
					var fragment = document.createDocumentFragment();
					var target = create_text();
					fragment.append(target);
					_classPrivateFieldGet2(_offscreen, this).set(key, {
						effect: branch(() => fn(target)),
						fragment
					});
				} else _classPrivateFieldGet2(_onscreen, this).set(key, branch(() => fn(this.anchor)));
				_classPrivateFieldGet2(_batches, this).set(batch, key);
				if (defer) {
					for (const [k, effect] of _classPrivateFieldGet2(_onscreen, this)) if (k === key) batch.unskip_effect(effect);
					else batch.skip_effect(effect);
					for (const [k, branch] of _classPrivateFieldGet2(_offscreen, this)) if (k === key) batch.unskip_effect(branch.effect);
					else batch.skip_effect(branch.effect);
					batch.oncommit(_classPrivateFieldGet2(_commit, this));
					batch.ondiscard(_classPrivateFieldGet2(_discard, this));
				} else {
					if (hydrating) this.anchor = hydrate_node;
					_classPrivateFieldGet2(_commit, this).call(this, batch);
				}
			}
		};
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/await.js
	var init_await = __esmMin((() => {
		init_utils$3();
		init_effects();
		init_sources();
		init_hydration();
		init_task();
		init_context();
		init_batch();
		init_branches();
		init_async$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
	/**
	* @param {TemplateNode} node
	* @param {(branch: (fn: (anchor: Node) => void, key?: number | false) => void) => void} fn
	* @param {boolean} [elseif] True if this is an `{:else if ...}` block rather than an `{#if ...}`, as that affects which transitions are considered 'local'
	* @returns {void}
	*/
	function if_block(node, fn, elseif = false) {
		/** @type {TemplateNode | undefined} */
		var marker;
		if (hydrating) {
			marker = hydrate_node;
			hydrate_next();
		}
		var branches = new BranchManager(node);
		var flags = elseif ? EFFECT_TRANSPARENT : 0;
		/**
		* @param {number | false} key
		* @param {null | ((anchor: Node) => void)} fn
		*/
		function update_branch(key, fn) {
			if (hydrating) {
				var data = read_hydration_instruction(marker);
				if (key !== parseInt(data.substring(1))) {
					var anchor = skip_nodes();
					set_hydrate_node(anchor);
					branches.anchor = anchor;
					set_hydrating(false);
					branches.ensure(key, fn);
					set_hydrating(true);
					return;
				}
			}
			branches.ensure(key, fn);
		}
		block(() => {
			var has_branch = false;
			fn((fn, key = 0) => {
				has_branch = true;
				update_branch(key, fn);
			});
			if (!has_branch) update_branch(-1, null);
		}, flags);
	}
	var init_if = __esmMin((() => {
		init_constants$1();
		init_hydration();
		init_effects();
		init_branches();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
	var init_key = __esmMin((() => {
		init_context();
		init_effects();
		init_hydration();
		init_branches();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/css-props.js
	var init_css_props = __esmMin((() => {
		init_effects();
		init_hydration();
		init_operations$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
	/**
	* @param {any} _
	* @param {number} i
	*/
	function index(_, i) {
		return i;
	}
	/**
	* Pause multiple effects simultaneously, and coordinate their
	* subsequent destruction. Used in each blocks
	* @param {EachState} state
	* @param {Effect[]} to_destroy
	* @param {null | Node} controlled_anchor
	*/
	function pause_effects(state, to_destroy, controlled_anchor) {
		/** @type {TransitionManager[]} */
		var transitions = [];
		var length = to_destroy.length;
		/** @type {EachOutroGroup} */
		var group;
		var remaining = to_destroy.length;
		for (var i = 0; i < length; i++) {
			let effect = to_destroy[i];
			pause_effect(effect, () => {
				if (group) {
					group.pending.delete(effect);
					group.done.add(effect);
					if (group.pending.size === 0) {
						var groups = state.outrogroups;
						destroy_effects(state, array_from(group.done));
						groups.delete(group);
						if (groups.size === 0) state.outrogroups = null;
					}
				} else remaining -= 1;
			}, false);
		}
		if (remaining === 0) {
			var fast_path = transitions.length === 0 && controlled_anchor !== null;
			if (fast_path) {
				var anchor = controlled_anchor;
				var parent_node = anchor.parentNode;
				clear_text_content(parent_node);
				parent_node.append(anchor);
				state.items.clear();
			}
			destroy_effects(state, to_destroy, !fast_path);
		} else {
			var _state$outrogroups;
			group = {
				pending: new Set(to_destroy),
				done: /* @__PURE__ */ new Set()
			};
			((_state$outrogroups = state.outrogroups) !== null && _state$outrogroups !== void 0 ? _state$outrogroups : state.outrogroups = /* @__PURE__ */ new Set()).add(group);
		}
	}
	/**
	* @param {EachState} state
	* @param {Effect[]} to_destroy
	* @param {boolean} remove_dom
	*/
	function destroy_effects(state, to_destroy, remove_dom = true) {
		/** @type {Set<Effect> | undefined} */
		var preserved_effects;
		if (state.pending.size > 0) {
			preserved_effects = /* @__PURE__ */ new Set();
			for (const keys of state.pending.values()) for (const key of keys) preserved_effects.add(
				/** @type {EachItem} */
				state.items.get(key).e
			);
		}
		for (var i = 0; i < to_destroy.length; i++) {
			var e = to_destroy[i];
			if (preserved_effects === null || preserved_effects === void 0 ? void 0 : preserved_effects.has(e)) {
				e.f |= EFFECT_OFFSCREEN;
				move_effect(e, document.createDocumentFragment());
			} else destroy_effect(to_destroy[i], remove_dom);
		}
	}
	/**
	* @template V
	* @param {Element | Comment} node The next sibling node, or the parent node if this is a 'controlled' block
	* @param {number} flags
	* @param {() => V[]} get_collection
	* @param {(value: V, index: number) => any} get_key
	* @param {(anchor: Node, item: MaybeSource<V>, index: MaybeSource<number>) => void} render_fn
	* @param {null | ((anchor: Node) => void)} fallback_fn
	* @returns {void}
	*/
	function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
		var anchor = node;
		/** @type {Map<any, EachItem>} */
		var items = /* @__PURE__ */ new Map();
		if ((flags & 4) !== 0) {
			var parent_node = node;
			anchor = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(parent_node)) : parent_node.appendChild(create_text());
		}
		if (hydrating) hydrate_next();
		/** @type {Effect | null} */
		var fallback = null;
		var each_array = /* @__PURE__ */ derived_safe_equal(() => {
			var collection = get_collection();
			return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
		});
		/** @type {V[]} */
		var array;
		/** @type {Map<Batch, Set<any>>} */
		var pending = /* @__PURE__ */ new Map();
		var first_run = true;
		/**
		* @param {Batch} batch
		*/
		function commit(batch) {
			if ((state.effect.f & 16384) !== 0) return;
			state.pending.delete(batch);
			state.fallback = fallback;
			reconcile(state, array, anchor, flags, get_key);
			if (fallback !== null) if (array.length === 0) if ((fallback.f & 33554432) === 0) resume_effect(fallback);
			else {
				fallback.f ^= EFFECT_OFFSCREEN;
				move(fallback, null, anchor);
			}
			else pause_effect(fallback, () => {
				fallback = null;
			});
		}
		/**
		* @param {Batch} batch
		*/
		function discard(batch) {
			state.pending.delete(batch);
		}
		/** @type {EachState} */
		var state = {
			effect: block(() => {
				array = get(each_array);
				var length = array.length;
				/** `true` if there was a hydration mismatch. Needs to be a `let` or else it isn't treeshaken out */
				let mismatch = false;
				if (hydrating) {
					if (read_hydration_instruction(anchor) === "[!" !== (length === 0)) {
						anchor = skip_nodes();
						set_hydrate_node(anchor);
						set_hydrating(false);
						mismatch = true;
					}
				}
				var keys = /* @__PURE__ */ new Set();
				var batch = current_batch;
				var defer = should_defer_append();
				for (var index = 0; index < length; index += 1) {
					if (hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]") {
						anchor = hydrate_node;
						mismatch = true;
						set_hydrating(false);
					}
					var value = array[index];
					var key = get_key(value, index);
					var item = first_run ? null : items.get(key);
					if (item) {
						if (item.v) internal_set(item.v, value);
						if (item.i) internal_set(item.i, index);
						if (defer) batch.unskip_effect(item.e);
					} else {
						var _offscreen_anchor;
						item = create_item(items, first_run ? anchor : (_offscreen_anchor = offscreen_anchor) !== null && _offscreen_anchor !== void 0 ? _offscreen_anchor : offscreen_anchor = create_text(), value, key, index, render_fn, flags, get_collection);
						if (!first_run) item.e.f |= EFFECT_OFFSCREEN;
						items.set(key, item);
					}
					keys.add(key);
				}
				if (length === 0 && fallback_fn && !fallback) if (first_run) fallback = branch(() => fallback_fn(anchor));
				else {
					fallback = branch(() => {
						var _offscreen_anchor2;
						return fallback_fn((_offscreen_anchor2 = offscreen_anchor) !== null && _offscreen_anchor2 !== void 0 ? _offscreen_anchor2 : offscreen_anchor = create_text());
					});
					fallback.f |= EFFECT_OFFSCREEN;
				}
				if (length > keys.size) each_key_duplicate("", "", "");
				if (hydrating && length > 0) set_hydrate_node(skip_nodes());
				if (!first_run) {
					pending.set(batch, keys);
					if (defer) {
						for (const [key, item] of items) if (!keys.has(key)) batch.skip_effect(item.e);
						batch.oncommit(commit);
						batch.ondiscard(discard);
					} else commit(batch);
				}
				if (mismatch) set_hydrating(true);
				get(each_array);
			}),
			flags,
			items,
			pending,
			outrogroups: null,
			fallback
		};
		first_run = false;
		if (hydrating) anchor = hydrate_node;
	}
	/**
	* Skip past any non-branch effects (which could be created with `createSubscriber`, for example) to find the next branch effect
	* @param {Effect | null} effect
	* @returns {Effect | null}
	*/
	function skip_to_branch(effect) {
		while (effect !== null && (effect.f & 32) === 0) effect = effect.next;
		return effect;
	}
	/**
	* Add, remove, or reorder items output by an each block as its input changes
	* @template V
	* @param {EachState} state
	* @param {Array<V>} array
	* @param {Element | Comment | Text} anchor
	* @param {number} flags
	* @param {(value: V, index: number) => any} get_key
	* @returns {void}
	*/
	function reconcile(state, array, anchor, flags, get_key) {
		var is_animated = (flags & 8) !== 0;
		var length = array.length;
		var items = state.items;
		var current = skip_to_branch(state.effect.first);
		/** @type {undefined | Set<Effect>} */
		var seen;
		/** @type {Effect | null} */
		var prev = null;
		/** @type {undefined | Set<Effect>} */
		var to_animate;
		/** @type {Effect[]} */
		var matched = [];
		/** @type {Effect[]} */
		var stashed = [];
		/** @type {V} */
		var value;
		/** @type {any} */
		var key;
		/** @type {Effect | undefined} */
		var effect;
		/** @type {number} */
		var i;
		if (is_animated) for (i = 0; i < length; i += 1) {
			value = array[i];
			key = get_key(value, i);
			effect = items.get(key).e;
			if ((effect.f & 33554432) === 0) {
				var _effect$nodes, _to_animate;
				(_effect$nodes = effect.nodes) === null || _effect$nodes === void 0 || (_effect$nodes = _effect$nodes.a) === null || _effect$nodes === void 0 || _effect$nodes.measure();
				((_to_animate = to_animate) !== null && _to_animate !== void 0 ? _to_animate : to_animate = /* @__PURE__ */ new Set()).add(effect);
			}
		}
		for (i = 0; i < length; i += 1) {
			value = array[i];
			key = get_key(value, i);
			effect = items.get(key).e;
			if (state.outrogroups !== null) for (const group of state.outrogroups) {
				group.pending.delete(effect);
				group.done.delete(effect);
			}
			if ((effect.f & 8192) !== 0) {
				resume_effect(effect);
				if (is_animated) {
					var _effect$nodes2, _to_animate2;
					(_effect$nodes2 = effect.nodes) === null || _effect$nodes2 === void 0 || (_effect$nodes2 = _effect$nodes2.a) === null || _effect$nodes2 === void 0 || _effect$nodes2.unfix();
					((_to_animate2 = to_animate) !== null && _to_animate2 !== void 0 ? _to_animate2 : to_animate = /* @__PURE__ */ new Set()).delete(effect);
				}
			}
			if ((effect.f & 33554432) !== 0) {
				effect.f ^= EFFECT_OFFSCREEN;
				if (effect === current) move(effect, null, anchor);
				else {
					var next = prev ? prev.next : current;
					if (effect === state.effect.last) state.effect.last = effect.prev;
					if (effect.prev) effect.prev.next = effect.next;
					if (effect.next) effect.next.prev = effect.prev;
					link(state, prev, effect);
					link(state, effect, next);
					move(effect, next, anchor);
					prev = effect;
					matched = [];
					stashed = [];
					current = skip_to_branch(prev.next);
					continue;
				}
			}
			if (effect !== current) {
				if (seen !== void 0 && seen.has(effect)) {
					if (matched.length < stashed.length) {
						var start = stashed[0];
						var j;
						prev = start.prev;
						var a = matched[0];
						var b = matched[matched.length - 1];
						for (j = 0; j < matched.length; j += 1) move(matched[j], start, anchor);
						for (j = 0; j < stashed.length; j += 1) seen.delete(stashed[j]);
						link(state, a.prev, b.next);
						link(state, prev, a);
						link(state, b, start);
						current = start;
						prev = b;
						i -= 1;
						matched = [];
						stashed = [];
					} else {
						seen.delete(effect);
						move(effect, current, anchor);
						link(state, effect.prev, effect.next);
						link(state, effect, prev === null ? state.effect.first : prev.next);
						link(state, prev, effect);
						prev = effect;
					}
					continue;
				}
				matched = [];
				stashed = [];
				while (current !== null && current !== effect) {
					var _seen;
					((_seen = seen) !== null && _seen !== void 0 ? _seen : seen = /* @__PURE__ */ new Set()).add(current);
					stashed.push(current);
					current = skip_to_branch(current.next);
				}
				if (current === null) continue;
			}
			if ((effect.f & 33554432) === 0) matched.push(effect);
			prev = effect;
			current = skip_to_branch(effect.next);
		}
		if (state.outrogroups !== null) {
			for (const group of state.outrogroups) if (group.pending.size === 0) {
				var _state$outrogroups2;
				destroy_effects(state, array_from(group.done));
				(_state$outrogroups2 = state.outrogroups) === null || _state$outrogroups2 === void 0 || _state$outrogroups2.delete(group);
			}
			if (state.outrogroups.size === 0) state.outrogroups = null;
		}
		if (current !== null || seen !== void 0) {
			/** @type {Effect[]} */
			var to_destroy = [];
			if (seen !== void 0) {
				for (effect of seen) if ((effect.f & 8192) === 0) to_destroy.push(effect);
			}
			while (current !== null) {
				if ((current.f & 8192) === 0 && current !== state.fallback) to_destroy.push(current);
				current = skip_to_branch(current.next);
			}
			var destroy_length = to_destroy.length;
			if (destroy_length > 0) {
				var controlled_anchor = (flags & 4) !== 0 && length === 0 ? anchor : null;
				if (is_animated) {
					for (i = 0; i < destroy_length; i += 1) {
						var _to_destroy$i$nodes;
						(_to_destroy$i$nodes = to_destroy[i].nodes) === null || _to_destroy$i$nodes === void 0 || (_to_destroy$i$nodes = _to_destroy$i$nodes.a) === null || _to_destroy$i$nodes === void 0 || _to_destroy$i$nodes.measure();
					}
					for (i = 0; i < destroy_length; i += 1) {
						var _to_destroy$i$nodes2;
						(_to_destroy$i$nodes2 = to_destroy[i].nodes) === null || _to_destroy$i$nodes2 === void 0 || (_to_destroy$i$nodes2 = _to_destroy$i$nodes2.a) === null || _to_destroy$i$nodes2 === void 0 || _to_destroy$i$nodes2.fix();
					}
				}
				pause_effects(state, to_destroy, controlled_anchor);
			}
		}
		if (is_animated) queue_micro_task(() => {
			if (to_animate === void 0) return;
			for (effect of to_animate) {
				var _effect$nodes3;
				(_effect$nodes3 = effect.nodes) === null || _effect$nodes3 === void 0 || (_effect$nodes3 = _effect$nodes3.a) === null || _effect$nodes3 === void 0 || _effect$nodes3.apply();
			}
		});
	}
	/**
	* @template V
	* @param {Map<any, EachItem>} items
	* @param {Node} anchor
	* @param {V} value
	* @param {unknown} key
	* @param {number} index
	* @param {(anchor: Node, item: V | Source<V>, index: number | Value<number>, collection: () => V[]) => void} render_fn
	* @param {number} flags
	* @param {() => V[]} get_collection
	* @returns {EachItem}
	*/
	function create_item(items, anchor, value, key, index, render_fn, flags, get_collection) {
		var v = (flags & 1) !== 0 ? (flags & 16) === 0 ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : null;
		var i = (flags & 2) !== 0 ? source(index) : null;
		return {
			v,
			i,
			e: branch(() => {
				render_fn(anchor, v !== null && v !== void 0 ? v : value, i !== null && i !== void 0 ? i : index, get_collection);
				return () => {
					items.delete(key);
				};
			})
		};
	}
	/**
	* @param {Effect} effect
	* @param {Effect | null} next
	* @param {Text | Element | Comment} anchor
	*/
	function move(effect, next, anchor) {
		if (!effect.nodes) return;
		var node = effect.nodes.start;
		var end = effect.nodes.end;
		var dest = next && (next.f & 33554432) === 0 ? next.nodes.start : anchor;
		while (node !== null) {
			var next_node = /* @__PURE__ */ get_next_sibling(node);
			dest.before(node);
			if (node === end) return;
			node = next_node;
		}
	}
	/**
	* @param {EachState} state
	* @param {Effect | null} prev
	* @param {Effect | null} next
	*/
	function link(state, prev, next) {
		if (prev === null) state.effect.first = next;
		else prev.next = next;
		if (next === null) state.effect.last = prev;
		else next.prev = prev;
	}
	var offscreen_anchor;
	var init_each = __esmMin((() => {
		init_constants();
		init_hydration();
		init_operations$1();
		init_effects();
		init_sources();
		init_utils$3();
		init_constants$1();
		init_task();
		init_runtime();
		init_esm_env();
		init_deriveds();
		init_batch();
		init_errors();
		init_tracing();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/html.js
	var init_html = __esmMin((() => {
		init_effects();
		init_hydration();
		init_template();
		init_utils();
		init_context();
		init_operations$1();
		init_runtime();
		init_constants$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/slot.js
	var init_slot = __esmMin((() => {
		init_hydration();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/shared/validate.js
	var init_validate$1 = __esmMin((() => {
		init_utils();
		init_errors$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
	var init_snippet = __esmMin((() => {
		init_constants$1();
		init_effects();
		init_context();
		init_hydration();
		init_reconciler();
		init_template();
		init_errors();
		init_operations$1();
		init_validate$1();
		init_branches();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
	var init_svelte_component = __esmMin((() => {
		init_constants$1();
		init_effects();
		init_hydration();
		init_branches();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/timing.js
	var init_timing = __esmMin((() => {
		init_utils$3();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/loop.js
	var init_loop = __esmMin((() => {
		init_timing();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
	var init_transitions = __esmMin((() => {
		init_utils$3();
		init_effects();
		init_runtime();
		init_loop();
		init_render();
		init_constants$1();
		init_task();
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js
	var init_svelte_element = __esmMin((() => {
		init_hydration();
		init_operations$1();
		init_effects();
		init_render();
		init_runtime();
		init_context();
		init_constants$1();
		init_template();
		init_utils();
		init_branches();
		init_transitions();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
	var init_svelte_head = __esmMin((() => {
		init_hydration();
		init_operations$1();
		init_effects();
		init_constants$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/css.js
	/**
	* @param {Node} anchor
	* @param {{ hash: string, code: string }} css
	*/
	function append_styles$1(anchor, css) {
		effect(() => {
			var _root$head;
			var root = anchor.getRootNode();
			var target = root.host ? root : 			/** @type {Document} */ (_root$head = root.head) !== null && _root$head !== void 0 ? _root$head : 			/** @type {Document} */ root.ownerDocument.head;
			if (!target.querySelector("#" + css.hash)) {
				const style = create_element("style");
				style.id = css.hash;
				style.textContent = css.code;
				target.appendChild(style);
			}
		});
	}
	var init_css = __esmMin((() => {
		init_esm_env();
		init_css$1();
		init_effects();
		init_operations$1();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
	/**
	* @template P
	* @param {Element} dom
	* @param {(dom: Element, value?: P) => ActionPayload<P>} action
	* @param {() => P} [get_value]
	* @returns {void}
	*/
	function action(dom, action, get_value) {
		effect(() => {
			var payload = untrack(() => action(dom, get_value === null || get_value === void 0 ? void 0 : get_value()) || {});
			if (get_value && (payload === null || payload === void 0 ? void 0 : payload.update)) {
				var inited = false;
				/** @type {P} */
				var prev = {};
				render_effect(() => {
					var value = get_value();
					deep_read_state(value);
					if (inited && safe_not_equal(prev, value)) {
						prev = value;
						/** @type {Function} */ payload.update(value);
					}
				});
				inited = true;
			}
			if (payload === null || payload === void 0 ? void 0 : payload.destroy) return () => payload.destroy();
		});
	}
	var init_actions = __esmMin((() => {
		init_effects();
		init_equality$1();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
	var init_attachments = __esmMin((() => {
		init_effects();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/shared/attributes.js
	/**
	* @param {any} value
	* @param {string | null} [hash]
	* @param {Record<string, boolean>} [directives]
	* @returns {string | null}
	*/
	function to_class(value, hash, directives) {
		var classname = value == null ? "" : "" + value;
		if (hash) classname = classname ? classname + " " + hash : hash;
		if (directives) {
			for (var key of Object.keys(directives)) if (directives[key]) classname = classname ? classname + " " + key : key;
			else if (classname.length) {
				var len = key.length;
				var a = 0;
				while ((a = classname.indexOf(key, a)) >= 0) {
					var b = a + len;
					if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
					else a = b;
				}
			}
		}
		return classname === "" ? null : classname;
	}
	/**
	*
	* @param {Record<string,any>} styles
	* @param {boolean} important
	*/
	function append_styles(styles, important = false) {
		var separator = important ? " !important;" : ";";
		var css = "";
		for (var key of Object.keys(styles)) {
			var value = styles[key];
			if (value != null && value !== "") css += " " + key + ": " + value + separator;
		}
		return css;
	}
	/**
	* @param {string} name
	* @returns {string}
	*/
	function to_css_name(name) {
		if (name[0] !== "-" || name[1] !== "-") return name.toLowerCase();
		return name;
	}
	/**
	* @param {any} value
	* @param {Record<string, any> | [Record<string, any>, Record<string, any>]} [styles]
	* @returns {string | null}
	*/
	function to_style(value, styles) {
		if (styles) {
			var new_style = "";
			/** @type {Record<string,any> | undefined} */
			var normal_styles;
			/** @type {Record<string,any> | undefined} */
			var important_styles;
			if (Array.isArray(styles)) {
				normal_styles = styles[0];
				important_styles = styles[1];
			} else normal_styles = styles;
			if (value) {
				value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
				/** @type {boolean | '"' | "'"} */
				var in_str = false;
				var in_apo = 0;
				var in_comment = false;
				var reserved_names = [];
				if (normal_styles) reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
				if (important_styles) reserved_names.push(...Object.keys(important_styles).map(to_css_name));
				var start_index = 0;
				var name_index = -1;
				const len = value.length;
				for (var i = 0; i < len; i++) {
					var c = value[i];
					if (in_comment) {
						if (c === "/" && value[i - 1] === "*") in_comment = false;
					} else if (in_str) {
						if (in_str === c) in_str = false;
					} else if (c === "/" && value[i + 1] === "*") in_comment = true;
					else if (c === "\"" || c === "'") in_str = c;
					else if (c === "(") in_apo++;
					else if (c === ")") in_apo--;
					if (!in_comment && in_str === false && in_apo === 0) {
						if (c === ":" && name_index === -1) name_index = i;
						else if (c === ";" || i === len - 1) {
							if (name_index !== -1) {
								var name = to_css_name(value.substring(start_index, name_index).trim());
								if (!reserved_names.includes(name)) {
									if (c !== ";") i++;
									var property = value.substring(start_index, i).trim();
									new_style += " " + property + ";";
								}
							}
							start_index = i + 1;
							name_index = -1;
						}
					}
				}
			}
			if (normal_styles) new_style += append_styles(normal_styles);
			if (important_styles) new_style += append_styles(important_styles, true);
			new_style = new_style.trim();
			return new_style === "" ? null : new_style;
		}
		return value == null ? null : String(value);
	}
	var whitespace;
	var init_attributes$1 = __esmMin((() => {
		init_utils$3();
		whitespace = [..." 	\n\r\f\xA0\v﻿"];
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/class.js
	/**
	* @param {Element} dom
	* @param {boolean | number} is_html
	* @param {string | null} value
	* @param {string} [hash]
	* @param {Record<string, any>} [prev_classes]
	* @param {Record<string, any>} [next_classes]
	* @returns {Record<string, boolean> | undefined}
	*/
	function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
		var prev = dom.__className;
		if (hydrating || prev !== value || prev === void 0) {
			var next_class_name = to_class(value, hash, next_classes);
			if (!hydrating || next_class_name !== dom.getAttribute("class")) if (next_class_name == null) dom.removeAttribute("class");
			else if (is_html) dom.className = next_class_name;
			else dom.setAttribute("class", next_class_name);
			dom.__className = value;
		} else if (next_classes && prev_classes !== next_classes) for (var key in next_classes) {
			var is_present = !!next_classes[key];
			if (prev_classes == null || is_present !== !!prev_classes[key]) dom.classList.toggle(key, is_present);
		}
		return next_classes;
	}
	var init_class = __esmMin((() => {
		init_attributes$1();
		init_hydration();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/style.js
	/**
	* @param {Element & ElementCSSInlineStyle} dom
	* @param {Record<string, any>} prev
	* @param {Record<string, any>} next
	* @param {string} [priority]
	*/
	function update_styles(dom, prev = {}, next, priority) {
		for (var key in next) {
			var value = next[key];
			if (prev[key] !== value) if (next[key] == null) dom.style.removeProperty(key);
			else dom.style.setProperty(key, value, priority);
		}
	}
	/**
	* @param {Element & ElementCSSInlineStyle} dom
	* @param {string | null} value
	* @param {Record<string, any> | [Record<string, any>, Record<string, any>]} [prev_styles]
	* @param {Record<string, any> | [Record<string, any>, Record<string, any>]} [next_styles]
	*/
	function set_style(dom, value, prev_styles, next_styles) {
		var prev = dom.__style;
		if (hydrating || prev !== value) {
			var next_style_attr = to_style(value, next_styles);
			if (!hydrating || next_style_attr !== dom.getAttribute("style")) if (next_style_attr == null) dom.removeAttribute("style");
			else dom.style.cssText = next_style_attr;
			dom.__style = value;
		} else if (next_styles) if (Array.isArray(next_styles)) {
			update_styles(dom, prev_styles === null || prev_styles === void 0 ? void 0 : prev_styles[0], next_styles[0]);
			update_styles(dom, prev_styles === null || prev_styles === void 0 ? void 0 : prev_styles[1], next_styles[1], "important");
		} else update_styles(dom, prev_styles, next_styles);
		return next_styles;
	}
	var init_style = __esmMin((() => {
		init_attributes$1();
		init_hydration();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
	var init_select = __esmMin((() => {
		init_effects();
		init_shared();
		init_proxy();
		init_utils$3();
		init_batch();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
	/**
	* The value/checked attribute in the template actually corresponds to the defaultValue property, so we need
	* to remove it upon hydration to avoid a bug when someone resets the form value.
	* @param {HTMLInputElement} input
	* @returns {void}
	*/
	function remove_input_defaults(input) {
		if (!hydrating) return;
		var already_removed = false;
		var remove_defaults = () => {
			if (already_removed) return;
			already_removed = true;
			if (input.hasAttribute("value")) {
				var value = input.value;
				set_attribute(input, "value", null);
				input.value = value;
			}
			if (input.hasAttribute("checked")) {
				var checked = input.checked;
				set_attribute(input, "checked", null);
				input.checked = checked;
			}
		};
		input.__on_r = remove_defaults;
		queue_micro_task(remove_defaults);
		add_form_reset_listener();
	}
	/**
	* @param {Element} element
	* @param {string} attribute
	* @param {string | null} value
	* @param {boolean} [skip_warning]
	*/
	function set_attribute(element, attribute, value, skip_warning) {
		var attributes = get_attributes(element);
		if (hydrating) {
			attributes[attribute] = element.getAttribute(attribute);
			if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === LINK_TAG) {
				if (!skip_warning) check_src_in_dev_hydration(element, attribute, value !== null && value !== void 0 ? value : "");
				return;
			}
		}
		if (attributes[attribute] === (attributes[attribute] = value)) return;
		if (attribute === "loading") element[LOADING_ATTR_SYMBOL] = value;
		if (value == null) element.removeAttribute(attribute);
		else if (typeof value !== "string" && get_setters(element).includes(attribute)) element[attribute] = value;
		else element.setAttribute(attribute, value);
	}
	/**
	*
	* @param {Element} element
	*/
	function get_attributes(element) {
		var _element$__attributes;
		return (_element$__attributes = element.__attributes) !== null && _element$__attributes !== void 0 ? _element$__attributes : element.__attributes = {
			[IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
			[IS_HTML]: element.namespaceURI === NAMESPACE_HTML
		};
	}
	/** @param {Element} element */
	function get_setters(element) {
		var cache_key = element.getAttribute("is") || element.nodeName;
		var setters = setters_cache.get(cache_key);
		if (setters) return setters;
		setters_cache.set(cache_key, setters = []);
		var descriptors;
		var proto = element;
		var element_proto = Element.prototype;
		while (element_proto !== proto) {
			descriptors = get_descriptors(proto);
			for (var key in descriptors) if (descriptors[key].set) setters.push(key);
			proto = get_prototype_of(proto);
		}
		return setters;
	}
	/**
	* @param {any} element
	* @param {string} attribute
	* @param {string} value
	*/
	function check_src_in_dev_hydration(element, attribute, value) {}
	var IS_CUSTOM_ELEMENT, IS_HTML, LINK_TAG, setters_cache;
	var init_attributes = __esmMin((() => {
		init_esm_env();
		init_hydration();
		init_utils$3();
		init_events();
		init_misc$1();
		init_warnings();
		init_constants$1();
		init_task();
		init_utils();
		init_runtime();
		init_attachments();
		init_attributes$1();
		init_class();
		init_style();
		init_constants();
		init_effects();
		init_select();
		init_async$1();
		IS_CUSTOM_ELEMENT = Symbol("is custom element");
		IS_HTML = Symbol("is html");
		LINK_TAG = IS_XHTML ? "link" : "LINK";
		setters_cache = /* @__PURE__ */ new Map();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/customizable-select.js
	var init_customizable_select = __esmMin((() => {
		init_hydration();
		init_operations$1();
		init_reconciler();
		init_attachments();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/document.js
	var init_document = __esmMin((() => {
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
	/**
	* @param {HTMLInputElement} input
	* @param {() => unknown} get
	* @param {(value: unknown) => void} set
	* @returns {void}
	*/
	function bind_value(input, get, set = get) {
		var batches = /* @__PURE__ */ new WeakSet();
		listen_to_event_and_reset_event(input, "input", function() {
			var _ref = _asyncToGenerator(function* (is_reset) {
				/** @type {any} */
				var value = is_reset ? input.defaultValue : input.value;
				value = is_numberlike_input(input) ? to_number(value) : value;
				set(value);
				if (current_batch !== null) batches.add(current_batch);
				yield tick();
				if (value !== (value = get())) {
					var __value2;
					var start = input.selectionStart;
					var end = input.selectionEnd;
					var length = input.value.length;
					input.value = (__value2 = value) !== null && __value2 !== void 0 ? __value2 : "";
					if (end !== null) {
						var new_length = input.value.length;
						if (start === end && end === length && new_length > length) {
							input.selectionStart = new_length;
							input.selectionEnd = new_length;
						} else {
							input.selectionStart = start;
							input.selectionEnd = Math.min(end, new_length);
						}
					}
				}
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}());
		if (hydrating && input.defaultValue !== input.value || untrack(get) == null && input.value) {
			set(is_numberlike_input(input) ? to_number(input.value) : input.value);
			if (current_batch !== null) batches.add(current_batch);
		}
		render_effect(() => {
			var value = get();
			if (input === document.activeElement) {
				var batch = async_mode_flag ? previous_batch : current_batch;
				if (batches.has(batch)) return;
			}
			if (is_numberlike_input(input) && value === to_number(input.value)) return;
			if (input.type === "date" && !value && !input.value) return;
			if (value !== input.value) input.value = value !== null && value !== void 0 ? value : "";
		});
	}
	/**
	* @param {HTMLInputElement} input
	*/
	function is_numberlike_input(input) {
		var type = input.type;
		return type === "number" || type === "range";
	}
	/**
	* @param {string} value
	*/
	function to_number(value) {
		return value === "" ? null : +value;
	}
	var init_input = __esmMin((() => {
		init_esm_env();
		init_effects();
		init_shared();
		init_errors();
		init_proxy();
		init_task();
		init_hydration();
		init_runtime();
		init_context();
		init_batch();
		init_flags();
		init_asyncToGenerator();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/media.js
	var init_media = __esmMin((() => {
		init_effects();
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js
	var init_navigator = __esmMin((() => {
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/props.js
	var init_props$1 = __esmMin((() => {
		init_effects();
		init_utils$3();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
	function _getObserver() {
		var _this$observer;
		return (_this$observer = _classPrivateFieldGet2(_observer, this)) !== null && _this$observer !== void 0 ? _this$observer : _classPrivateFieldSet2(_observer, this, new ResizeObserver(
			/** @param {any} entries */
			(entries) => {
				for (var entry of entries) {
					_ResizeObserverSingleton.entries.set(entry.target, entry);
					for (var listener of _classPrivateFieldGet2(_listeners, this).get(entry.target) || []) listener(entry);
				}
			}
		));
	}
	var _ResizeObserverSingleton, _listeners, _observer, _options, _ResizeObserverSingleton_brand, ResizeObserverSingleton;
	var init_size = __esmMin((() => {
		init_effects();
		init_runtime();
		init_classPrivateMethodInitSpec();
		init_classPrivateFieldInitSpec();
		init_classPrivateFieldSet2();
		init_classPrivateFieldGet2();
		init_assertClassBrand();
		init_defineProperty();
		_listeners = /* @__PURE__ */ new WeakMap();
		_observer = /* @__PURE__ */ new WeakMap();
		_options = /* @__PURE__ */ new WeakMap();
		_ResizeObserverSingleton_brand = /* @__PURE__ */ new WeakSet();
		ResizeObserverSingleton = class {
			/** @param {ResizeObserverOptions} options */
			constructor(options) {
				_classPrivateMethodInitSpec(this, _ResizeObserverSingleton_brand);
				_classPrivateFieldInitSpec(this, _listeners, /* @__PURE__ */ new WeakMap());
				_classPrivateFieldInitSpec(this, _observer, void 0);
				_classPrivateFieldInitSpec(this, _options, void 0);
				_classPrivateFieldSet2(_options, this, options);
			}
			/**
			* @param {Element} element
			* @param {(entry: ResizeObserverEntry) => any} listener
			*/
			observe(element, listener) {
				var listeners = _classPrivateFieldGet2(_listeners, this).get(element) || /* @__PURE__ */ new Set();
				listeners.add(listener);
				_classPrivateFieldGet2(_listeners, this).set(element, listeners);
				_assertClassBrand(_ResizeObserverSingleton_brand, this, _getObserver).call(this).observe(element, _classPrivateFieldGet2(_options, this));
				return () => {
					var listeners = _classPrivateFieldGet2(_listeners, this).get(element);
					listeners.delete(listener);
					if (listeners.size === 0) {
						_classPrivateFieldGet2(_listeners, this).delete(element);
						/** @type {ResizeObserver} */ _classPrivateFieldGet2(_observer, this).unobserve(element);
					}
				};
			}
		};
		_ResizeObserverSingleton = ResizeObserverSingleton;
		_defineProperty(ResizeObserverSingleton, "entries", /* @__PURE__ */ new WeakMap());
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
	/**
	* @param {any} bound_value
	* @param {Element} element_or_component
	* @returns {boolean}
	*/
	function is_bound_this(bound_value, element_or_component) {
		return bound_value === element_or_component || (bound_value === null || bound_value === void 0 ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
	}
	/**
	* @param {any} element_or_component
	* @param {(value: unknown, ...parts: unknown[]) => void} update
	* @param {(...parts: unknown[]) => unknown} get_value
	* @param {() => unknown[]} [get_parts] Set if the this binding is used inside an each block,
	* 										returns all the parts of the each block context that are used in the expression
	* @returns {void}
	*/
	function bind_this(element_or_component = {}, update, get_value, get_parts) {
		var component_effect = component_context.r;
		var parent = active_effect;
		effect(() => {
			/** @type {unknown[]} */
			var old_parts;
			/** @type {unknown[]} */
			var parts;
			render_effect(() => {
				old_parts = parts;
				parts = (get_parts === null || get_parts === void 0 ? void 0 : get_parts()) || [];
				untrack(() => {
					if (element_or_component !== get_value(...parts)) {
						update(element_or_component, ...parts);
						if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) update(null, ...old_parts);
					}
				});
			});
			return () => {
				let p = parent;
				while (p !== component_effect && p.parent !== null && p.parent.f & 33554432) p = p.parent;
				const teardown = () => {
					if (parts && is_bound_this(get_value(...parts), element_or_component)) update(null, ...parts);
				};
				const original_teardown = p.teardown;
				p.teardown = () => {
					teardown();
					original_teardown === null || original_teardown === void 0 || original_teardown();
				};
			};
		});
		return element_or_component;
	}
	var init_this = __esmMin((() => {
		init_constants$1();
		init_context();
		init_effects();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js
	var init_universal = __esmMin((() => {
		init_effects();
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/elements/bindings/window.js
	var init_window = __esmMin((() => {
		init_effects();
		init_shared();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
	var init_event_modifiers = __esmMin((() => {
		init_utils$3();
		init_effects();
		init_events();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
	var init_lifecycle = __esmMin((() => {
		init_utils$3();
		init_context();
		init_deriveds();
		init_effects();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dom/legacy/misc.js
	var init_misc = __esmMin((() => {
		init_sources();
		init_runtime();
		init_utils$3();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/reactivity/props.js
	/**
	* This function is responsible for synchronizing a possibly bound prop with the inner component state.
	* It is used whenever the compiler sees that the component writes to the prop, or when it has a default prop_value.
	* @template V
	* @param {Record<string, unknown>} props
	* @param {string} key
	* @param {number} flags
	* @param {V | (() => V)} [fallback]
	* @returns {(() => V | ((arg: V) => V) | ((arg: V, mutation: boolean) => V))}
	*/
	function prop(props, key, flags, fallback) {
		var runes = !legacy_mode_flag || (flags & 2) !== 0;
		var bindable = (flags & 8) !== 0;
		var lazy = (flags & 16) !== 0;
		var fallback_value = fallback;
		var fallback_dirty = true;
		var get_fallback = () => {
			if (fallback_dirty) {
				fallback_dirty = false;
				fallback_value = lazy ? untrack(fallback) : fallback;
			}
			return fallback_value;
		};
		/** @type {((v: V) => void) | undefined} */
		let setter;
		if (bindable) {
			var _get_descriptor$set, _get_descriptor;
			var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
			setter = (_get_descriptor$set = (_get_descriptor = get_descriptor(props, key)) === null || _get_descriptor === void 0 ? void 0 : _get_descriptor.set) !== null && _get_descriptor$set !== void 0 ? _get_descriptor$set : is_entry_props && key in props ? (v) => props[key] = v : void 0;
		}
		/** @type {V} */
		var initial_value;
		var is_store_sub = false;
		if (bindable) [initial_value, is_store_sub] = capture_store_binding(() => props[key]);
		else initial_value = props[key];
		if (initial_value === void 0 && fallback !== void 0) {
			initial_value = get_fallback();
			if (setter) {
				if (runes) props_invalid_value(key);
				setter(initial_value);
			}
		}
		/** @type {() => V} */
		var getter;
		if (runes) getter = () => {
			var value = props[key];
			if (value === void 0) return get_fallback();
			fallback_dirty = true;
			return value;
		};
		else getter = () => {
			var value = props[key];
			if (value !== void 0) fallback_value = void 0;
			return value === void 0 ? fallback_value : value;
		};
		if (runes && (flags & 4) === 0) return getter;
		if (setter) {
			var legacy_parent = props.$$legacy;
			return (function(value, mutation) {
				if (arguments.length > 0) {
					if (!runes || !mutation || legacy_parent || is_store_sub)
 /** @type {Function} */ setter(mutation ? getter() : value);
					return value;
				}
				return getter();
			});
		}
		var overridden = false;
		var d = ((flags & 1) !== 0 ? derived : derived_safe_equal)(() => {
			overridden = false;
			return getter();
		});
		if (bindable) get(d);
		var parent_effect = active_effect;
		return (function(value, mutation) {
			if (arguments.length > 0) {
				const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
				set(d, new_value);
				overridden = true;
				if (fallback_value !== void 0) fallback_value = new_value;
				return value;
			}
			if (is_destroying_effect && overridden || (parent_effect.f & 16384) !== 0) return d.v;
			return get(d);
		});
	}
	var init_props = __esmMin((() => {
		init_esm_env();
		init_constants();
		init_utils$3();
		init_sources();
		init_deriveds();
		init_runtime();
		init_errors();
		init_constants$1();
		init_proxy();
		init_store();
		init_flags();
		init_effects();
	})), init_validate = __esmMin((() => {
		init_context();
		init_effects();
		init_store();
		init_async$1();
	}));
	var init_legacy_client = __esmMin((() => {
		init_constants$1();
		init_effects();
		init_sources();
		init_render();
		init_runtime();
		init_batch();
		init_utils$3();
		init_errors();
		init_context();
		init_flags();
		init_status();
		init_objectSpread2();
		init_classPrivateFieldInitSpec();
		init_classPrivateFieldSet2();
		init_classPrivateFieldGet2();
		init_event_modifiers();
	}));
	var init_custom_element = __esmMin((() => {
		init_legacy_client();
		init_effects();
		init_template();
		init_utils$3();
		init_operations$1();
		init_defineProperty();
		init_objectSpread2();
		init_asyncToGenerator();
		if (typeof HTMLElement === "function");
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/dev/console-log.js
	var init_console_log = __esmMin((() => {
		init_constants$1();
		init_clone();
		init_runtime();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/index.js
	var init_client = __esmMin((() => {
		init_attachments$1();
		init_constants();
		init_context();
		init_assign();
		init_css$1();
		init_elements();
		init_hmr();
		init_ownership();
		init_legacy$1();
		init_tracing();
		init_inspect();
		init_async();
		init_validation();
		init_await();
		init_if();
		init_key();
		init_css_props();
		init_each();
		init_html();
		init_slot();
		init_snippet();
		init_svelte_component();
		init_svelte_element();
		init_svelte_head();
		init_css();
		init_actions();
		init_attachments();
		init_attributes();
		init_class();
		init_events();
		init_misc$1();
		init_customizable_select();
		init_style();
		init_transitions();
		init_document();
		init_input();
		init_media();
		init_navigator();
		init_props$1();
		init_select();
		init_size();
		init_this();
		init_universal();
		init_window();
		init_hydration();
		init_event_modifiers();
		init_lifecycle();
		init_misc();
		init_template();
		init_async$1();
		init_batch();
		init_deriveds();
		init_effects();
		init_sources();
		init_props();
		init_store();
		init_boundary();
		init_legacy$2();
		init_render();
		init_runtime();
		init_validate();
		init_timing();
		init_proxy();
		init_custom_element();
		init_operations$1();
		init_attributes$1();
		init_clone();
		init_utils$3();
		init_validate$1();
		init_equality();
		init_console_log();
		init_error_handling();
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/client/hydratable.js
	var init_hydratable = __esmMin((() => {
		init_hydration();
		init_errors();
	}));
	//#endregion
	//#region node_modules/svelte/src/index-client.js
	var init_index_client = __esmMin((() => {
		init_runtime();
		init_utils$3();
		init_client();
		init_errors();
		init_context();
		init_esm_env();
		init_batch();
		init_hydratable();
		init_render();
		init_snippet();
	}));
	//#endregion
	//#region node_modules/svelte/src/version.js
	var init_version = __esmMin((() => {}));
	//#endregion
	//#region node_modules/svelte/src/internal/disclose-version.js
	var _window$__svelte, _window$__svelte$v, _window, _window$__svelte2;
	var init_disclose_version = __esmMin((() => {
		init_version();
		if (typeof window !== "undefined") ((_window$__svelte$v = (_window$__svelte = (_window$__svelte2 = (_window = window).__svelte) !== null && _window$__svelte2 !== void 0 ? _window$__svelte2 : _window.__svelte = {}).v) !== null && _window$__svelte$v !== void 0 ? _window$__svelte$v : _window$__svelte.v = /* @__PURE__ */ new Set()).add("5");
	}));
	//#endregion
	//#region src/lib/portal.ts
	function portal(node) {
		document.body.appendChild(node);
		return { destroy() {
			if (node.parentNode) node.parentNode.removeChild(node);
		} };
	}
	var init_portal = __esmMin((() => {}));
	//#endregion
	//#region src/lib/emotes.ts
	function getEmotesFromCache(nickname) {
		try {
			const mem = memoryCache.get(nickname);
			if (mem && Date.now() - mem.timestamp < CACHE_TTL) return mem.emotes;
			if (!hasLocalStorage) return [];
			const cached = localStorage.getItem(CACHE_KEY(nickname));
			if (!cached) return [];
			const parsed = JSON.parse(cached);
			if (Array.isArray(parsed)) return [];
			if (parsed.nickname !== nickname) return [];
			if (Date.now() - parsed.timestamp > CACHE_TTL) return [];
			return parsed.emotes;
		} catch (_unused2) {
			return [];
		}
	}
	function refreshEmotes(_x) {
		return _refreshEmotes.apply(this, arguments);
	}
	function _refreshEmotes() {
		_refreshEmotes = _asyncToGenerator(function* (nickname) {
			try {
				var _ivrData$, _stvData$emote_set;
				const twitchId = (_ivrData$ = (yield (yield fetch(`https://api.ivr.fi/v2/twitch/user?login=${nickname}`)).json())[0]) === null || _ivrData$ === void 0 ? void 0 : _ivrData$.id;
				if (!twitchId) return [];
				const rawEmotes = ((_stvData$emote_set = (yield (yield fetch(`https://7tv.io/v3/users/twitch/${twitchId}`)).json()).emote_set) === null || _stvData$emote_set === void 0 ? void 0 : _stvData$emote_set.emotes) || [];
				const seen = /* @__PURE__ */ new Set();
				const compactEmotes = rawEmotes.filter((e) => {
					if (seen.has(e.id)) return false;
					seen.add(e.id);
					return true;
				}).map((e) => ({
					id: e.id,
					name: e.name,
					url: `https:${e.data.host.url}/1x.avif`
				}));
				memoryCache.set(nickname, {
					emotes: compactEmotes,
					timestamp: Date.now()
				});
				if (hasLocalStorage) localStorage.setItem(CACHE_KEY(nickname), JSON.stringify({
					timestamp: Date.now(),
					nickname,
					emotes: compactEmotes
				}));
				return compactEmotes;
			} catch (error) {
				console.error("Failed to fetch emotes:", error);
				return [];
			}
		});
		return _refreshEmotes.apply(this, arguments);
	}
	var CACHE_KEY, CACHE_TTL, memoryCache, hasLocalStorage;
	var init_emotes = __esmMin((() => {
		init_asyncToGenerator();
		CACHE_KEY = (nickname) => `7de_emotes_cache_${nickname}`;
		CACHE_TTL = 1440 * 60 * 1e3;
		memoryCache = /* @__PURE__ */ new Map();
		hasLocalStorage = (() => {
			try {
				return typeof localStorage !== "undefined";
			} catch (_unused) {
				return false;
			}
		})();
	}));
	//#endregion
	//#region src/lib/state.svelte.ts
	var emoteState;
	var init_state_svelte = __esmMin((() => {
		init_client();
		init_emotes();
		emoteState = proxy({
			list: [],
			isLoading: false
		});
	}));
	//#endregion
	//#region src/lib/blobCache.ts
	function getBlobUrl(_x) {
		return _getBlobUrl.apply(this, arguments);
	}
	function _getBlobUrl() {
		_getBlobUrl = _asyncToGenerator(function* (url) {
			if (cache.has(url)) return cache.get(url);
			if (isBD$1) {
				cache.set(url, url);
				return url;
			}
			const blob = yield (yield fetch(url)).blob();
			const blobUrl = URL.createObjectURL(blob);
			cache.set(url, blobUrl);
			return blobUrl;
		});
		return _getBlobUrl.apply(this, arguments);
	}
	function getCachedUrl(url) {
		var _cache$get;
		return (_cache$get = cache.get(url)) !== null && _cache$get !== void 0 ? _cache$get : null;
	}
	var cache, isBD$1;
	var init_blobCache = __esmMin((() => {
		init_asyncToGenerator();
		cache = /* @__PURE__ */ new Map();
		isBD$1 = typeof globalThis.BdApi !== "undefined";
	}));
	//#endregion
	//#region src/lib/EmoteImage.svelte
	function EmoteImage($$anchor, $$props) {
		push($$props, true);
		append_styles$1($$anchor, $$css$2);
		const isBD = typeof globalThis.BdApi !== "undefined";
		let lazy = prop($$props, "lazy", 3, true);
		let blobUrl = /* @__PURE__ */ user_derived(() => {
			var _getCachedUrl;
			return (_getCachedUrl = getCachedUrl($$props.url)) !== null && _getCachedUrl !== void 0 ? _getCachedUrl : "";
		});
		let el = /* @__PURE__ */ state(void 0);
		user_effect(() => {
			if (get(blobUrl)) return;
			if (isBD || !lazy()) {
				getBlobUrl($$props.url).then((u) => set(blobUrl, u));
				return;
			}
			if (!get(el)) return;
			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					observer.disconnect();
					getBlobUrl($$props.url).then((u) => set(blobUrl, u));
				}
			}, { rootMargin: "100px" });
			observer.observe(get(el));
			return () => observer.disconnect();
		});
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var img = root_1$1();
			template_effect(() => {
				set_attribute(img, "src", get(blobUrl));
				set_attribute(img, "alt", $$props.alt);
			});
			append($$anchor, img);
		};
		var alternate = ($$anchor) => {
			var div = root_2$1();
			bind_this(div, ($$value) => set(el, $$value), () => get(el));
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (get(blobUrl)) $$render(consequent);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment);
		pop();
	}
	var root_1$1, root_2$1, $$css$2;
	var init_EmoteImage = __esmMin((() => {
		init_disclose_version();
		init_client();
		init_blobCache();
		root_1$1 = /* @__PURE__ */ from_html(`<img class="svelte-4lveey"/>`);
		root_2$1 = /* @__PURE__ */ from_html(`<div class="placeholder svelte-4lveey"></div>`);
		$$css$2 = {
			hash: "svelte-4lveey",
			code: "img.svelte-4lveey {height:32px;width:auto;object-fit:contain;}.placeholder.svelte-4lveey {width:32px;height:32px;background:rgba(255,255,255,0.05);}"
		};
	}));
	//#endregion
	//#region src/lib/globalEmotes.ts
	function searchGlobalEmotes() {
		return _searchGlobalEmotes.apply(this, arguments);
	}
	function _searchGlobalEmotes() {
		_searchGlobalEmotes = _asyncToGenerator(function* (query = "", page = 1) {
			var _data$data;
			const data = yield (yield fetch("https://api.7tv.app/v4/gql", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `query GetTopV4($query: String!, $page: Int!) {
        emotes {
          search(query: $query, page: $page, perPage: 50, sort: { sortBy: "TOP_ALL_TIME", order: DESCENDING }) {
            items {
              id
              defaultName
              images { url scale }
            }
          }
        }
      }`,
					variables: {
						query,
						page
					}
				})
			})).json();
			return ((data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 || (_data$data = _data$data.emotes) === null || _data$data === void 0 || (_data$data = _data$data.search) === null || _data$data === void 0 ? void 0 : _data$data.items) || []).map((e) => {
				var _e$images$find$url, _e$images$find, _e$images$;
				return {
					id: e.id,
					name: e.defaultName,
					url: (_e$images$find$url = (_e$images$find = e.images.find((img) => img.url.includes("1x.avif"))) === null || _e$images$find === void 0 ? void 0 : _e$images$find.url) !== null && _e$images$find$url !== void 0 ? _e$images$find$url : (_e$images$ = e.images[0]) === null || _e$images$ === void 0 ? void 0 : _e$images$.url
				};
			});
		});
		return _searchGlobalEmotes.apply(this, arguments);
	}
	var init_globalEmotes = __esmMin((() => {
		init_emotes();
		init_asyncToGenerator();
	}));
	//#endregion
	//#region src/lib/storage.ts
	var isBD, storage;
	var init_storage = __esmMin((() => {
		isBD = typeof BdApi !== "undefined";
		storage = {
			get: (key, cb) => {
				if (isBD) cb(BdApi.Data.load("7DE", key));
				else chrome.storage.sync.get(key, (r) => cb(r[key]));
			},
			set: (key, value) => {
				if (isBD) BdApi.Data.save("7DE", key, value);
				else chrome.storage.sync.set({ [key]: value });
			},
			onChange: (cb) => {
				if (isBD) return;
				chrome.storage.onChanged.addListener((changes, area) => {
					if (area === "sync") Object.entries(changes).forEach(([key, val]) => cb(key, val.newValue));
				});
			}
		};
	}));
	//#endregion
	//#region src/lib/Popout.svelte
	function Popout($$anchor, $$props) {
		push($$props, true);
		append_styles$1($$anchor, $$css$1);
		const top = /* @__PURE__ */ user_derived(() => $$props.anchorRect.top - 480);
		const left = /* @__PURE__ */ user_derived(() => $$props.anchorRect.left - 520 + $$props.anchorRect.width);
		user_effect(() => {
			const handleKeyDown = (e) => {
				if (e.key === "Escape") $$props.close();
			};
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		});
		let activeTab = /* @__PURE__ */ state("local");
		let searchQuery = /* @__PURE__ */ state("");
		let filteredEmotes = /* @__PURE__ */ user_derived(() => emoteState.list.filter((e) => e.name.toLowerCase().includes(get(searchQuery).toLowerCase())));
		function send7deEmote(text) {
			const input = document.querySelector("div[role=\"textbox\"][data-slate-editor=\"true\"]");
			if (!input) return;
			input.focus();
			input.dispatchEvent(new InputEvent("beforeinput", {
				inputType: "insertText",
				data: text,
				bubbles: true,
				cancelable: true
			}));
			setTimeout(() => {
				input.dispatchEvent(new KeyboardEvent("keydown", {
					key: "Enter",
					code: "Enter",
					keyCode: 13,
					which: 13,
					bubbles: true,
					cancelable: true
				}));
			}, 100);
		}
		function onEmoteClick(emote) {
			const url = emote.url.replace("/1x.", `/${get(selectedSize)}x.`);
			send7deEmote(`[${emote.name}](${url})`);
			$$props.close();
		}
		let selectedSize = /* @__PURE__ */ state(1);
		const sizes = [
			1,
			2,
			3,
			4
		];
		storage.get("size", (result) => {
			if (result) set(selectedSize, result, true);
		});
		let globalEmotes = /* @__PURE__ */ state(proxy([]));
		let globalLoading = /* @__PURE__ */ state(false);
		function switchTab(tab) {
			set(activeTab, tab, true);
			set(searchQuery, "");
			if (tab === "global" && get(globalEmotes).length === 0) loadGlobalEmotes();
		}
		function searchGlobal() {
			return _searchGlobal.apply(this, arguments);
		}
		function _searchGlobal() {
			_searchGlobal = _asyncToGenerator(function* () {
				set(globalLoading, true);
				set(globalEmotes, yield searchGlobalEmotes(get(searchQuery)), true);
				set(globalLoading, false);
			});
			return _searchGlobal.apply(this, arguments);
		}
		let globalPage = /* @__PURE__ */ state(1);
		let globalHasMore = /* @__PURE__ */ state(true);
		let globalLoadingMore = /* @__PURE__ */ state(false);
		let sentinelEl = /* @__PURE__ */ state(void 0);
		function loadGlobalEmotes() {
			return _loadGlobalEmotes.apply(this, arguments);
		}
		function _loadGlobalEmotes() {
			_loadGlobalEmotes = _asyncToGenerator(function* () {
				set(globalLoading, true);
				set(globalPage, 1);
				set(globalEmotes, yield searchGlobalEmotes(get(searchQuery), 1), true);
				set(globalHasMore, get(globalEmotes).length === 50);
				set(globalLoading, false);
			});
			return _loadGlobalEmotes.apply(this, arguments);
		}
		function loadMore() {
			return _loadMore.apply(this, arguments);
		}
		function _loadMore() {
			_loadMore = _asyncToGenerator(function* () {
				if (get(globalLoadingMore) || !get(globalHasMore)) return;
				set(globalLoadingMore, true);
				const next = yield searchGlobalEmotes(get(searchQuery), get(globalPage) + 1);
				set(globalEmotes, [...get(globalEmotes), ...next], true);
				set(globalPage, get(globalPage) + 1);
				set(globalHasMore, next.length === 50);
				set(globalLoadingMore, false);
			});
			return _loadMore.apply(this, arguments);
		}
		user_effect(() => {
			if (!get(sentinelEl)) return;
			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) loadMore();
			}, { rootMargin: "100px" });
			observer.observe(get(sentinelEl));
			return () => observer.disconnect();
		});
		var div = root$1();
		var div_1 = child(div);
		var div_2 = sibling(div_1, 2);
		var div_3 = child(div_2);
		var div_4 = child(div_3);
		var button = child(div_4);
		let classes;
		var button_1 = sibling(button, 2);
		let classes_1;
		reset(div_4);
		var div_5 = sibling(div_4, 2);
		var input_1 = child(div_5);
		remove_input_defaults(input_1);
		var node = sibling(input_1, 2);
		var consequent = ($$anchor) => {
			var div_6 = root_1();
			var button_2 = child(div_6);
			reset(div_6);
			delegated("mousedown", button_2, (e) => {
				e.preventDefault();
				searchGlobal();
			});
			append($$anchor, div_6);
		};
		if_block(node, ($$render) => {
			if (get(activeTab) === "global") $$render(consequent);
		});
		var div_7 = sibling(node, 2);
		var div_8 = child(div_7);
		var div_9 = child(div_8);
		each(sibling(div_9, 2), 17, () => sizes, index, ($$anchor, size) => {
			var button_3 = root_2();
			let classes_2;
			var text_1 = child(button_3);
			reset(button_3);
			template_effect(() => {
				var _$$get;
				classes_2 = set_class(button_3, 1, "sde-size-option svelte-he76u6", null, classes_2, { active: get(selectedSize) === get(size) });
				set_text(text_1, `${(_$$get = get(size)) !== null && _$$get !== void 0 ? _$$get : ""}x`);
			});
			delegated("mousedown", button_3, (e) => {
				e.preventDefault();
				set(selectedSize, get(size), true);
				storage.set("size", get(size));
			});
			append($$anchor, button_3);
		});
		reset(div_8);
		reset(div_7);
		reset(div_5);
		reset(div_3);
		var div_10 = sibling(div_3, 2);
		var node_2 = child(div_10);
		var consequent_1 = ($$anchor) => {
			append($$anchor, root_3());
		};
		var alternate_1 = ($$anchor) => {
			var div_12 = root_4();
			var node_3 = child(div_12);
			var consequent_2 = ($$anchor) => {
				var fragment = comment();
				each(first_child(fragment), 17, () => get(filteredEmotes), (emote) => emote.id, ($$anchor, emote) => {
					var button_4 = root_6();
					var node_5 = child(button_4);
					{
						let $0 = /* @__PURE__ */ user_derived(() => get(searchQuery) === "");
						EmoteImage(node_5, {
							get url() {
								return get(emote).url;
							},
							get alt() {
								return get(emote).name;
							},
							get lazy() {
								return get($0);
							}
						});
					}
					reset(button_4);
					template_effect(() => set_attribute(button_4, "title", get(emote).name));
					delegated("mousedown", button_4, (e) => {
						e.preventDefault();
						onEmoteClick(get(emote));
					});
					append($$anchor, button_4);
				}, ($$anchor) => {
					append($$anchor, root_7());
				});
				append($$anchor, fragment);
			};
			var consequent_3 = ($$anchor) => {
				append($$anchor, root_8());
			};
			var alternate = ($$anchor) => {
				var fragment_1 = root_9();
				var node_6 = first_child(fragment_1);
				each(node_6, 17, () => get(globalEmotes), (emote) => emote.id, ($$anchor, emote) => {
					var button_5 = root_10();
					EmoteImage(child(button_5), {
						get url() {
							return get(emote).url;
						},
						get alt() {
							return get(emote).name;
						},
						lazy: false
					});
					reset(button_5);
					template_effect(() => set_attribute(button_5, "title", get(emote).name));
					delegated("mousedown", button_5, (e) => {
						e.preventDefault();
						onEmoteClick(get(emote));
					});
					append($$anchor, button_5);
				}, ($$anchor) => {
					append($$anchor, root_11());
				});
				var node_8 = sibling(node_6, 2);
				var consequent_4 = ($$anchor) => {
					var div_16 = root_12();
					bind_this(div_16, ($$value) => set(sentinelEl, $$value), () => get(sentinelEl));
					append($$anchor, div_16);
				};
				if_block(node_8, ($$render) => {
					if (get(globalHasMore)) $$render(consequent_4);
				});
				var node_9 = sibling(node_8, 2);
				var consequent_5 = ($$anchor) => {
					append($$anchor, root_13());
				};
				if_block(node_9, ($$render) => {
					if (get(globalLoadingMore)) $$render(consequent_5);
				});
				append($$anchor, fragment_1);
			};
			if_block(node_3, ($$render) => {
				if (get(activeTab) === "local") $$render(consequent_2);
				else if (get(globalLoading)) $$render(consequent_3, 1);
				else $$render(alternate, -1);
			});
			reset(div_12);
			append($$anchor, div_12);
		};
		if_block(node_2, ($$render) => {
			if (emoteState.isLoading && emoteState.list.length === 0) $$render(consequent_1);
			else $$render(alternate_1, -1);
		});
		reset(div_10);
		reset(div_2);
		reset(div);
		action(div, ($$node) => portal === null || portal === void 0 ? void 0 : portal($$node));
		template_effect(() => {
			var _$$get2, _$$get3;
			set_style(div_2, `top: ${(_$$get2 = get(top)) !== null && _$$get2 !== void 0 ? _$$get2 : ""}px; left: ${(_$$get3 = get(left)) !== null && _$$get3 !== void 0 ? _$$get3 : ""}px;`);
			classes = set_class(button, 1, "svelte-he76u6", null, classes, { active: get(activeTab) === "local" });
			classes_1 = set_class(button_1, 1, "svelte-he76u6", null, classes_1, { active: get(activeTab) === "global" });
			set_attribute(input_1, "placeholder", get(activeTab) === "global" ? "Search 7TV..." : "Search emotes...");
			set_style(div_9, `left: ${(get(selectedSize) - 1) * 25}%`);
		});
		delegated("click", div_1, function(...$$args) {
			var _$$props$close;
			(_$$props$close = $$props.close) === null || _$$props$close === void 0 || _$$props$close.apply(this, $$args);
		});
		delegated("mousedown", button, (e) => {
			e.preventDefault();
			switchTab("local");
		});
		delegated("mousedown", button_1, (e) => {
			e.preventDefault();
			switchTab("global");
		});
		delegated("keydown", input_1, (e) => e.key === "Enter" && get(activeTab) === "global" && searchGlobal());
		bind_value(input_1, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
		append($$anchor, div);
		pop();
	}
	var root_1, root_2, root_3, root_6, root_7, root_8, root_10, root_11, root_12, root_13, root_9, root_4, root$1, $$css$1;
	var init_Popout = __esmMin((() => {
		init_disclose_version();
		init_client();
		init_portal();
		init_state_svelte();
		init_EmoteImage();
		init_globalEmotes();
		init_storage();
		init_asyncToGenerator();
		root_1 = /* @__PURE__ */ from_html(`<div class="sde-search-btn-wrapper svelte-he76u6"><button class="sde-search-btn svelte-he76u6">Search</button></div>`);
		root_2 = /* @__PURE__ */ from_html(`<button> </button>`);
		root_3 = /* @__PURE__ */ from_html(`<div style="text-align: center; padding: 16px; color: var(--text-muted);">Loading emotes...</div>`);
		root_6 = /* @__PURE__ */ from_html(`<button class="sde-emote-item svelte-he76u6"><!></button>`);
		root_7 = /* @__PURE__ */ from_html(`<div style="text-align: center; padding: 16px; color: var(--text-muted);">No emotes found :(</div>`);
		root_8 = /* @__PURE__ */ from_html(`<div style="text-align: center; padding: 16px; color: var(--text-muted);">Loading...</div>`);
		root_10 = /* @__PURE__ */ from_html(`<button class="sde-emote-item svelte-he76u6"><!></button>`);
		root_11 = /* @__PURE__ */ from_html(`<div style="text-align: center; padding: 16px; color: var(--text-muted);">No emotes found :(</div>`);
		root_12 = /* @__PURE__ */ from_html(`<div style="width: 100%; height: 1px;"></div>`);
		root_13 = /* @__PURE__ */ from_html(`<div style="text-align: center; padding: 8px; color: var(--text-muted); width: 100%;">Loading...</div>`);
		root_9 = /* @__PURE__ */ from_html(`<!> <!> <!>`, 1);
		root_4 = /* @__PURE__ */ from_html(`<div class="sde-emotes-grid svelte-he76u6"><!></div>`);
		root$1 = /* @__PURE__ */ from_html(`<div><div class="sde-backdrop svelte-he76u6"></div> <div class="sde-popout svelte-he76u6"><div class="sde-header"><div class="sde-tabs svelte-he76u6"><button>Local</button> <button>Global</button></div> <div class="sde-search-container svelte-he76u6"><input type="text" id="sde-search" name="sde-search" autocomplete="off" class="svelte-he76u6"/> <!> <div class="sde-size-wrapper svelte-he76u6"><div class="sde-size-switcher svelte-he76u6"><div class="sde-size-indicator svelte-he76u6"></div> <!></div></div></div></div> <div class="sde-content svelte-he76u6"><!></div></div></div>`);
		$$css$1 = {
			hash: "svelte-he76u6",
			code: ".sde-backdrop.svelte-he76u6 {position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9998;background:transparent;cursor:default;}.sde-popout.svelte-he76u6 {position:fixed;width:520px;height:450px;background:var(--background-surface-high);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);z-index:9999;box-shadow:0 8px 16px var(--shadow-high);display:flex;flex-direction:column;}.sde-search-container.svelte-he76u6 {display:flex;align-items:stretch;gap:8px;width:100%;box-sizing:border-box;padding:8px;border-bottom:1px solid var(--border-subtle);height:48px;}#sde-search.svelte-he76u6 {width:100%;height:32px;padding:8px;background-color:var(--input-background-default, #1e1f22);color:var(--text-normal, #dbdee1);border:1px solid var(--input-border-default, transparent);border-radius:var(--radius-xs, 4px);font-family:inherit;font-size:14px;line-height:32px;outline:none;box-sizing:border-box;transition:border-color 0.1s ease;}#sde-search.svelte-he76u6:hover {border-color:var(--input-border-hover, #000);}#sde-search.svelte-he76u6:focus {border-color:var(--blue-345, #00a8fc);}#sde-search.svelte-he76u6::placeholder {color:var(--text-muted, #80848e);font-size:14px;}.sde-content.svelte-he76u6 {overflow-y:auto;flex:1;padding:4px;scrollbar-width:thin;scrollbar-color:var(--scrollbar-thin-thumb) var(--scrollbar-thin-track);}.sde-content.svelte-he76u6::-webkit-scrollbar {width:8px;}.sde-content.svelte-he76u6::-webkit-scrollbar-track {background-color:var(--scrollbar-thin-track);}.sde-content.svelte-he76u6::-webkit-scrollbar-thumb {background-color:var(--scrollbar-thin-thumb);}.sde-emotes-grid.svelte-he76u6 {display:flex;flex-wrap:wrap;gap:2px;justify-content:center;}.sde-emote-item.svelte-he76u6 {height:44px;min-width:44px;width:auto;display:flex;align-items:center;justify-content:center;background:none;border:none;border-radius:4px;cursor:pointer;padding:2px;transition:background 0.1s ease;}.sde-emote-item.svelte-he76u6:hover {background-color:var(--interactive-background-selected);}.sde-size-switcher.svelte-he76u6 {position:relative;display:flex;background:var(--background-secondary);border-radius:6px;padding:2px;flex-shrink:0;}.sde-size-indicator.svelte-he76u6 {position:absolute;top:2px;bottom:2px;width:25%;background:var(--control-primary-background-default);border-radius:4px;transition:left 0.2s cubic-bezier(0.4, 0, 0.2, 1);}.sde-size-option.svelte-he76u6 {position:relative;z-index:1;width:36px;padding:4px 0;background:none;border:none;border-radius:4px;color:var(--text-muted);font-size:12px;font-weight:600;cursor:pointer;transition:color 0.2s;}.sde-size-option.active.svelte-he76u6 {color:var(--text-strong);}.sde-tabs.svelte-he76u6 {display:flex;gap:18px;padding:6px;border-bottom:1px solid var(--border-subtle);justify-content:center;}.sde-tabs.svelte-he76u6 button:where(.svelte-he76u6) {background:none;border:none;color:var(--text-muted);font-size:14px;cursor:pointer;padding:6px 0;position:relative;transition:color 0.1s ease;font-weight:bold;}.sde-tabs.svelte-he76u6 button:where(.svelte-he76u6):hover {color:var(--text-strong);}.sde-tabs.svelte-he76u6 button.active:where(.svelte-he76u6) {color:var(--text-strong);cursor:default;}.sde-tabs.svelte-he76u6 button:where(.svelte-he76u6)::after {content:\"\";position:absolute;bottom:0;left:0;width:100%;height:1px;background:var(--text-strong);transform:scaleX(0);transform-origin:center;transition:transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);}.sde-tabs.svelte-he76u6 button.active:where(.svelte-he76u6)::after {transform:scaleX(1);}.sde-search-btn-wrapper.svelte-he76u6 {display:flex;align-items:stretch;padding-right:8px;flex-shrink:0;}.sde-search-btn.svelte-he76u6 {padding:0 10px;background:var(--control-primary-background-default);border:none;border-radius:4px;color:var(--text-strong);font-size:12px;font-weight:600;cursor:pointer;transition:filter 0.1s ease;}.sde-search-btn.svelte-he76u6:hover {background-color:var(--control-primary-background-hover);}.sde-search-btn.svelte-he76u6:active {background-color:var(--control-primary-background-active);}.sde-size-wrapper.svelte-he76u6 {display:flex;align-items:center;flex-shrink:0;}"
		};
		delegate([
			"click",
			"mousedown",
			"keydown"
		]);
	}));
	//#endregion
	//#region node_modules/svelte/src/internal/flags/legacy.js
	var init_legacy = __esmMin((() => {
		init_flags();
		enable_legacy_mode_flag();
	}));
	//#endregion
	//#region src/lib/Button.svelte
	function Button($$anchor) {
		append_styles$1($$anchor, $$css);
		let isOpen = /* @__PURE__ */ mutable_source(false);
		let buttonElement = /* @__PURE__ */ mutable_source();
		let rect = /* @__PURE__ */ mutable_source();
		function toggleMenu() {
			set(rect, get(buttonElement).getBoundingClientRect());
			set(isOpen, !get(isOpen));
		}
		var fragment = root();
		var button = first_child(fragment);
		bind_this(button, ($$value) => set(buttonElement, $$value), () => get(buttonElement));
		var node = sibling(button, 2);
		var consequent = ($$anchor) => {
			Popout($$anchor, {
				get anchorRect() {
					return get(rect);
				},
				close: () => set(isOpen, false)
			});
		};
		if_block(node, ($$render) => {
			if (get(isOpen) && get(rect)) $$render(consequent);
		});
		event("click", button, toggleMenu);
		append($$anchor, fragment);
	}
	var root, $$css;
	var init_Button = __esmMin((() => {
		init_disclose_version();
		init_legacy();
		init_client();
		init_Popout();
		root = /* @__PURE__ */ from_html(`<button class="sde-button svelte-118lylz" aria-label="7DE Menu"><div class="sde-inner svelte-118lylz"><svg class="sde-icon svelte-118lylz" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg"><defs><mask id="sde-mask"><rect width="100%" height="100%" fill="black"></rect><g fill="white" transform="translate(0,0.529)"><path d="M 66.367708,14.54349 C 45.536488,14.62896 24.707358,14.953993 3.8774739,15.184115 1.8974991,22.954245 1.2468155,31.015081 0.24466141,38.967318 19.916235,39.219323 26.072629,39.353404 45.742744,39.638157 c 25.104979,1.261644 28.032707,6.354206 29.671751,1.062616 3.35274,-12.046376 7.505927,-26.227961 -9.046787,-26.157283 z"></path><path d="m 84.988904,38.757363 c -1.80932,1.799185 -2.562683,4.909807 -3.366866,7.238885 29.794522,26.491436 21.108702,59.903902 -10.92777,78.558072 19.148162,0.37344 37.507002,-0.18437 56.657412,-0.11952 5.17833,0.18247 6.56444,-22.17001 -1.15458,-22.22819 l -21.7086,0.006 c 0.52146,-3.836591 1.04555,-7.672828 1.56446,-11.509764 7.5052,-0.02392 13.95208,-0.04539 21.45729,-0.06836 5.09497,0.06219 5.77705,-21.675664 -0.58464,-21.786865 -6.5604,0.02066 -13.12082,0.02769 -19.68125,0.02515 0.38781,-2.744545 0.77367,-5.48937 1.15821,-8.234375 8.17902,-0.06103 14.48718,0.06749 22.66622,0.0074 5.53976,-0.152243 5.62454,-21.926996 -0.93667,-21.952714 0,0 -29.8803,0.02612 -45.143216,0.06428 z"></path><path d="m 43.761819,46.381083 c -1.661682,-0.883155 -6.083138,9.228349 -8.698831,14.811638 -1.75977,4.599488 13.127766,4.103259 23.96153,4.482047 22.459405,-0.190588 26.687419,32.220179 -6.680388,38.821172 -8.547152,0.4082 6.043606,-28.824595 -19.918964,20.23463 75.531004,8.31398 85.543024,-86.352224 11.336653,-78.349487 z"></path><path d="M 30.910808,70.455987 C 19.209092,90.224909 12.905362,100.38069 1.5236979,120.33333 c -0.82563313,1.71425 0.4612206,4.14272 2.4570132,4.07934 2.5241785,0.22944 5.0625586,0.028 7.5925969,0.11626 5.137123,0.007 10.274226,-0.005 15.411328,-0.0179 3.110813,-4.11131 5.349676,-8.79949 8.056625,-13.13543 C 43.89124,96.212369 47.285213,90.629144 56.018229,75.401272 56.935658,73.470339 55.420971,70.928681 53.282904,70.822136 45.857715,70.208014 38.362772,70.460971 30.910808,70.455987 Z"></path></g></mask></defs><rect width="100%" height="100%" fill="currentColor" mask="url(#sde-mask)"></rect></svg></div></button> <!>`, 1);
		$$css = {
			hash: "svelte-118lylz",
			code: ".sde-button.svelte-118lylz {width:22px;height:22px;border:none;padding:0;margin:0 4px;cursor:pointer;background:none;transition:transform 0.15s ease;display:flex;align-items:center;justify-content:center;}.sde-button.svelte-118lylz:hover {transform:scale(1.1);}.sde-inner.svelte-118lylz {width:100%;height:100%;color:var(--interactive-text-default);transition:color 0.15s ease;}.sde-button.svelte-118lylz:hover .sde-inner:where(.svelte-118lylz) {color:var(--interactive-text-hover);}.sde-icon.svelte-118lylz {width:100%;height:100%;display:block;}"
		};
	}));
	//#endregion
	return (/* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_index_client();
		init_Popout();
		init_Button();
		init_state_svelte();
		init_emotes();
		init_blobCache();
		init_storage();
		init_asyncToGenerator();
		function loadEmotes() {
			storage.get("nickname", (nickname) => {
				if (!nickname) return;
				const cached = getEmotesFromCache(nickname);
				if (cached.length) {
					emoteState.list = cached;
					warmupImages(cached);
				} else refreshEmotes(nickname).then((data) => {
					emoteState.list = data;
					warmupImages(data);
				});
			});
		}
		var warmupTimers = [];
		function warmupImages(emotes) {
			if (typeof BdApi === "undefined") return;
			warmupTimers.forEach((t) => clearTimeout(t));
			warmupTimers.length = 0;
			emotes.forEach((e, i) => {
				const t = setTimeout(() => {
					const img = new Image();
					img.src = e.url;
				}, i * 50);
				warmupTimers.push(t);
			});
		}
		function injectButton(container) {
			if (container.querySelector(".seven-de-wrapper")) return;
			const target = document.createElement("div");
			target.classList.add("seven-de-wrapper");
			container.prepend(target);
			mount(Button, { target });
		}
		var observer = new MutationObserver(() => {
			const chatArea = document.querySelector("[class^=\"channelTextArea_\"]");
			if (chatArea) {
				const buttonsContainer = chatArea.querySelector("[class^=\"buttons_\"]");
				if (buttonsContainer) injectButton(buttonsContainer);
			}
		});
		var SevenDEPlugin = class {
			start() {
				loadEmotes();
				observer.observe(document.body, {
					childList: true,
					subtree: true
				});
			}
			stop() {
				observer.disconnect();
				document.querySelectorAll(".seven-de-wrapper").forEach((el) => el.remove());
				emoteState.list = [];
				warmupTimers.forEach((t) => clearTimeout(t));
				warmupTimers.length = 0;
			}
			getSettingsPanel() {
				const panel = document.createElement("div");
				panel.style.cssText = "padding: 24px; display: flex; flex-direction: column; gap: 16px;";
				const title = document.createElement("h2");
				title.textContent = "7DE";
				title.style.cssText = "margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2px; background: linear-gradient(to right, #ff8a00, #ffc107, #ffffff, #ffc107, #ff8a00); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-align: center;";
				const current = document.createElement("p");
				current.style.cssText = "margin: 0; font-size: 12px; color: #927b6c; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;";
				const error = document.createElement("p");
				error.style.cssText = "margin: 0; padding: 8px; background: rgba(220,38,38,0.1); border-left: 3px solid #dc2626; color: #fca5a5; font-size: 12px; display: none;";
				const row = document.createElement("div");
				row.style.cssText = "display: flex; gap: 8px; align-items: center;";
				const input = document.createElement("input");
				input.placeholder = "Twitch nickname";
				input.style.cssText = "padding: 10px 14px; background: #050402; border: 1px solid #453015; border-radius: 4px; color: #ffedd5; font-size: 14px; outline: none; flex: 1;";
				const updateCurrent = (nick) => {
					current.innerHTML = "Current nickname: <span style=\"color: #fbbf24; font-weight: bold;\">" + (nick || "-") + "</span>";
				};
				storage.get("nickname", (val) => {
					if (val) {
						input.value = val;
						updateCurrent(val);
					} else updateCurrent("");
				});
				const btn = document.createElement("button");
				btn.textContent = "Save";
				btn.style.cssText = "padding: 10px 20px; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; border-radius: 4px; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;";
				btn.onclick = _asyncToGenerator(function* () {
					const nick = input.value.trim();
					if (!nick) return;
					const data = yield (yield fetch("https://api.ivr.fi/v2/twitch/user?login=" + nick)).json();
					if (!Array.isArray(data) || data.length === 0) {
						error.textContent = "Twitch user not found";
						error.style.display = "block";
						return;
					}
					error.style.display = "none";
					storage.set("nickname", nick);
					updateCurrent(nick);
					refreshEmotes(nick).then((d) => {
						emoteState.list = d;
						warmupImages(d);
					});
				});
				row.append(input, btn);
				panel.append(title, current, row, error);
				return panel;
			}
		};
		module.exports = SevenDEPlugin;
	})))();
})();

module.exports = SevenDEPlugin;