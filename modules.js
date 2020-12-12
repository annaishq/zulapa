(this["webpackChunkkeoda"] = this["webpackChunkkeoda"] || []).push([[54],{

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 310:
/***/ ((module) => {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": () => /* binding */ Provider,
/* harmony export */   "createStateHook": () => /* binding */ createStateHook,
/* harmony export */   "createActionsHook": () => /* binding */ createActionsHook,
/* harmony export */   "createEffectsHook": () => /* binding */ createEffectsHook,
/* harmony export */   "createReactionHook": () => /* binding */ createReactionHook,
/* harmony export */   "createHook": () => /* binding */ createHook,
/* harmony export */   "createConnect": () => /* binding */ createConnect
/* harmony export */ });
/* harmony import */ var overmind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);
/* harmony import */ var proxy_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(980);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(294);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(840);




const IS_PRODUCTION = "production" === 'production';
const IS_TEST = "production" === 'test';
const isNode = !IS_TEST && {"env":{"NODE_ENV":"development"}} && {"env":{"NODE_ENV":"development"}}.title && {"env":{"NODE_ENV":"development"}}.title.includes('node');
function getFiberType(component) {
    if (component.type) {
        // React.memo
        return getFiberType(component.type);
    }
    // React.forwardRef
    return component.render || component;
}
// Inspired from https://github.com/facebook/react/blob/master/packages/react-devtools-shared/src/backend/renderer.js
function getDisplayName(component) {
    const type = getFiberType(component);
    return (type.displayName ||
        type.name ||
        'Anonymous');
}
function throwMissingContextError() {
    throw new Error('The Overmind hook could not find an Overmind instance on the context of React. Please make sure you use the Provider component at the top of your application and expose the Overmind instance there. Please read more in the React guide on the website');
}
const context = react__WEBPACK_IMPORTED_MODULE_2__.createContext({});
let nextComponentId = 0;
const Provider = context.Provider;
function useForceRerender() {
    const [{ flushId }, setTick] = react__WEBPACK_IMPORTED_MODULE_2__.useState({ tick: 0, flushId: 0 });
    const forceRerender = react__WEBPACK_IMPORTED_MODULE_2__.useCallback((flushId) => {
        setTick(current => (Object.assign(Object.assign({}, current), { tick: current.tick + 1, flushId: flushId || current.flushId })));
    }, []);
    return {
        flushId,
        forceRerender
    };
}
let currentComponentInstanceId = 0;
const { ReactCurrentOwner, } = react__WEBPACK_IMPORTED_MODULE_2__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
const useCurrentComponent = () => {
    return ReactCurrentOwner &&
        ReactCurrentOwner.current &&
        ReactCurrentOwner.current.elementType
        ? ReactCurrentOwner.current.elementType
        : {};
};
const useState = () => {
    const overmind = react__WEBPACK_IMPORTED_MODULE_2__.useContext(context);
    if (!overmind.mode) {
        throwMissingContextError();
    }
    if (isNode || overmind.mode.mode === overmind__WEBPACK_IMPORTED_MODULE_0__.MODE_SSR) {
        return overmind.state;
    }
    const trackingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
    const { flushId, forceRerender } = useForceRerender();
    if (!trackingRef.current) {
        trackingRef.current = {
            tree: overmind.proxyStateTree.getTrackStateTree(),
            hasUpdatedBeforeCommit: false,
            stopTrackingTask: (0,scheduler__WEBPACK_IMPORTED_MODULE_3__.unstable_scheduleCallback)((0,scheduler__WEBPACK_IMPORTED_MODULE_3__.unstable_getCurrentPriorityLevel)(), () => {
                trackingRef.current.tree.stopTracking();
            })
        };
    }
    if (IS_PRODUCTION) {
        react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(() => {
            trackingRef.current.mounted = true;
            if (trackingRef.current.hasUpdatedBeforeCommit) {
                forceRerender();
            }
            return () => {
                ;
                overmind.proxyStateTree.disposeTree(trackingRef.current.tree);
            };
        }, []);
        react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(() => {
            if (trackingRef.current.stopTrackingTask) {
                (0,scheduler__WEBPACK_IMPORTED_MODULE_3__.unstable_cancelCallback)(trackingRef.current.stopTrackingTask);
                trackingRef.current.stopTrackingTask = null;
            }
            trackingRef.current.tree.stopTracking();
        });
        trackingRef.current.tree.track(() => {
            if (trackingRef.current.mounted) {
                forceRerender();
            }
            else {
                trackingRef.current.hasUpdatedBeforeCommit = true;
            }
        });
    }
    else {
        const component = useCurrentComponent();
        const name = getDisplayName(component);
        component.__componentId =
            typeof component.__componentId === 'undefined'
                ? nextComponentId++
                : component.__componentId;
        const { current: componentInstanceId } = react__WEBPACK_IMPORTED_MODULE_2__.useRef(currentComponentInstanceId++);
        react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(() => {
            trackingRef.current.mounted = true;
            overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_ADD, {
                componentId: component.__componentId,
                componentInstanceId,
                name,
                paths: Array.from(trackingRef.current.tree.pathDependencies),
            });
            if (trackingRef.current.hasUpdatedBeforeCommit) {
                forceRerender();
            }
            return () => {
                ;
                overmind.proxyStateTree.disposeTree(trackingRef.current.tree);
                overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_REMOVE, {
                    componentId: component.__componentId,
                    componentInstanceId,
                    name,
                });
            };
        }, []);
        react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(() => {
            if (trackingRef.current.stopTrackingTask) {
                (0,scheduler__WEBPACK_IMPORTED_MODULE_3__.unstable_cancelCallback)(trackingRef.current.stopTrackingTask);
                trackingRef.current.stopTrackingTask = null;
            }
            trackingRef.current.tree.stopTracking();
            overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_UPDATE, {
                componentId: component.__componentId,
                componentInstanceId,
                name,
                flushId,
                paths: Array.from(trackingRef.current.tree.pathDependencies),
            });
        });
        trackingRef.current.tree.track(() => {
            if (trackingRef.current.mounted) {
                forceRerender();
            }
            else {
                trackingRef.current.hasUpdatedBeforeCommit = true;
            }
        });
    }
    return trackingRef.current.tree.state;
};
const useActions = () => {
    const overmind = react__WEBPACK_IMPORTED_MODULE_2__.useContext(context);
    if (!overmind.mode) {
        throwMissingContextError();
    }
    return overmind.actions;
};
const useEffects = () => {
    const overmind = react__WEBPACK_IMPORTED_MODULE_2__.useContext(context);
    if (!overmind.mode) {
        throwMissingContextError();
    }
    return overmind.effects;
};
const useReaction = () => {
    const overmind = react__WEBPACK_IMPORTED_MODULE_2__.useContext(context);
    if (!overmind.mode) {
        throwMissingContextError();
    }
    return overmind.reaction;
};
const createStateHook = () => {
    return useState;
};
const createActionsHook = () => {
    return useActions;
};
const createEffectsHook = () => {
    return useEffects;
};
const createReactionHook = () => {
    return useReaction;
};
const createHook = () => {
    return () => {
        const state = useState();
        const actions = useActions();
        const effects = useEffects();
        const overmind = react__WEBPACK_IMPORTED_MODULE_2__.useContext(context);
        return {
            state,
            actions,
            effects,
            reaction: overmind.reaction,
            addMutationListener: overmind.addMutationListener
        };
    };
};
const createConnect = () => {
    return (component) => {
        let componentInstanceId = 0;
        const name = component.displayName || component.name || 'Anonymous';
        const populatedComponent = component;
        populatedComponent.__componentId =
            typeof populatedComponent.__componentId === 'undefined'
                ? nextComponentId++
                : populatedComponent.__componentId;
        const isClassComponent = component.prototype && typeof component.prototype.render === 'function';
        if (isClassComponent) {
            const originalRender = component.prototype.render;
            component.prototype.render = function () {
                if (this.props.overmind) {
                    return this.props.overmind.tree.trackScope(() => originalRender.call(this), this.props.overmind.onUpdate);
                }
                return originalRender.call(this);
            };
        }
        if (IS_PRODUCTION) {
            class HOC extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
                constructor(props, context) {
                    super(props);
                    this.onUpdate = () => {
                        this.setState({
                            overmind: {
                                state: this.tree.state,
                                effects: this.overmind.effects,
                                actions: this.overmind.actions,
                                addMutationListener: this.overmind.addMutationListener,
                                onUpdate: this.onUpdate,
                                tree: this.tree,
                                reaction: this.overmind.reaction,
                            },
                        });
                    };
                    if (!context) {
                        throwMissingContextError();
                    }
                    this.overmind = context;
                    this.tree = this.overmind.proxyStateTree.getTrackStateTree();
                    this.state = {
                        overmind: {
                            state: this.tree.state,
                            effects: this.overmind.effects,
                            actions: this.overmind.actions,
                            addMutationListener: this.overmind.addMutationListener,
                            onUpdate: this.onUpdate,
                            tree: this.tree,
                            reaction: this.overmind.reaction,
                        },
                    };
                    this.wrappedComponent = (...args) => this.tree.trackScope(() => component(...args), this.onUpdate);
                }
                componentWillUnmount() {
                    this.overmind.proxyStateTree.disposeTree(this.tree);
                }
                render() {
                    if (isClassComponent) {
                        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(component, Object.assign(Object.assign({}, this.props), { overmind: this.state.overmind }));
                    }
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(this.wrappedComponent, Object.assign(Object.assign({}, this.props), { overmind: this.state.overmind }));
                }
            }
            HOC.contextType = context;
            return HOC;
        }
        else {
            class HOC extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
                constructor(props, context) {
                    super(props);
                    this.componentInstanceId = componentInstanceId++;
                    this.currentFlushId = 0;
                    this.onUpdate = (mutatons, paths, flushId) => {
                        this.currentFlushId = flushId;
                        this.isUpdating = true;
                        this.setState({
                            overmind: {
                                state: this.tree.state,
                                effects: this.overmind.effects,
                                actions: this.overmind.actions,
                                addMutationListener: this.overmind.addMutationListener,
                                onUpdate: this.onUpdate,
                                tree: this.tree,
                                reaction: this.overmind.reaction,
                            },
                        });
                    };
                    if (!context) {
                        throwMissingContextError();
                    }
                    this.overmind = context;
                    this.tree = this.overmind.proxyStateTree.getTrackStateTree();
                    this.state = {
                        overmind: {
                            state: this.tree.state,
                            effects: this.overmind.effects,
                            actions: this.overmind.actions,
                            addMutationListener: this.overmind.addMutationListener,
                            onUpdate: this.onUpdate,
                            tree: this.tree,
                            reaction: this.overmind.reaction,
                        },
                    };
                    this.wrappedComponent = (...args) => this.tree.trackScope(() => component(...args), this.onUpdate);
                }
                componentDidMount() {
                    this.overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_ADD, {
                        componentId: populatedComponent.__componentId,
                        componentInstanceId: this.componentInstanceId,
                        name,
                        paths: Array.from(this.tree.pathDependencies),
                    });
                }
                componentDidUpdate() {
                    if (this.isUpdating) {
                        this.overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_UPDATE, {
                            componentId: populatedComponent.__componentId,
                            componentInstanceId: this.componentInstanceId,
                            name,
                            flushId: this.currentFlushId,
                            paths: Array.from(this.tree.pathDependencies),
                        });
                        this.isUpdating = false;
                    }
                }
                componentWillUnmount() {
                    this.overmind.proxyStateTree.disposeTree(this.tree);
                    this.overmind.eventHub.emitAsync(overmind__WEBPACK_IMPORTED_MODULE_0__.EventType.COMPONENT_REMOVE, {
                        componentId: populatedComponent.__componentId,
                        componentInstanceId: this.componentInstanceId,
                        name,
                    });
                }
                render() {
                    if (isClassComponent) {
                        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(component, Object.assign(Object.assign({}, this.props), { overmind: this.state.overmind }));
                    }
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(this.wrappedComponent, Object.assign(Object.assign({}, this.props), { overmind: this.state.overmind }));
                }
            }
            HOC.contextType = context;
            Object.defineProperties(HOC, {
                name: {
                    value: 'Connect' + name,
                },
            });
            return HOC;
        }
    };
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EventType": () => /* reexport */ EventType,
  "MODE_DEFAULT": () => /* reexport */ MODE_DEFAULT,
  "MODE_SSR": () => /* reexport */ MODE_SSR,
  "MODE_TEST": () => /* reexport */ MODE_TEST,
  "Overmind": () => /* binding */ Overmind,
  "SERIALIZE": () => /* reexport */ SERIALIZE,
  "action": () => /* binding */ action,
  "catchError": () => /* binding */ catchError,
  "createMutationOperator": () => /* reexport */ createMutationOperator,
  "createOperator": () => /* reexport */ createOperator,
  "createOvermind": () => /* binding */ createOvermind,
  "createOvermindMock": () => /* binding */ createOvermindMock,
  "createOvermindSSR": () => /* binding */ createOvermindSSR,
  "debounce": () => /* binding */ debounce,
  "derived": () => /* binding */ derived,
  "filter": () => /* binding */ filter,
  "forEach": () => /* binding */ forEach,
  "fork": () => /* binding */ fork,
  "json": () => /* reexport */ json,
  "map": () => /* binding */ map,
  "mutate": () => /* binding */ mutate,
  "noop": () => /* binding */ noop,
  "parallel": () => /* binding */ parallel,
  "pipe": () => /* binding */ pipe,
  "rehydrate": () => /* reexport */ rehydrate,
  "run": () => /* binding */ run,
  "statemachine": () => /* reexport */ statemachine,
  "throttle": () => /* binding */ throttle,
  "tryCatch": () => /* binding */ tryCatch,
  "wait": () => /* binding */ wait,
  "waitUntil": () => /* binding */ waitUntil,
  "when": () => /* binding */ when
});

;// CONCATENATED MODULE: ./node_modules/betsy/es/index.js
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = new Map();
    }
    EventEmitter.prototype.emit = function (event, msg) {
        var listeners = this.events.get(event) || [];
        for (var i = listeners.length - 1; i >= 0; i--) {
            var listener = listeners[i];
            listener.cb(msg);
            if (listener.once) {
                listeners.splice(i, 1);
            }
        }
    };
    EventEmitter.prototype.emitAsync = function (event, msg) {
        var listeners = this.events.get(event) || [];
        setTimeout(function () {
            for (var i = listeners.length - 1; i >= 0; i--) {
                var listener = listeners[i];
                listener.cb(msg);
                if (listener.once) {
                    listeners.splice(i, 1);
                }
            }
        });
    };
    EventEmitter.prototype.on = function (event, cb) {
        this.addListener(event, cb, false);
    };
    EventEmitter.prototype.once = function (event, cb) {
        this.addListener(event, cb, true);
    };
    EventEmitter.prototype.addListener = function (event, cb, once) {
        var listeners = this.events.get(event) || [];
        listeners.push({
            once: once,
            cb: cb,
        });
        this.events.set(event, listeners);
    };
    return EventEmitter;
}());

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/is-plain-obj/index.js
var is_plain_obj = __webpack_require__(310);
var is_plain_obj_default = /*#__PURE__*/__webpack_require__.n(is_plain_obj);
// EXTERNAL MODULE: ./node_modules/proxy-state-tree/es/index.js + 3 modules
var es = __webpack_require__(980);
;// CONCATENATED MODULE: ./node_modules/overmind/es/internalTypes.js
var EventType;
(function (EventType) {
    EventType["ACTION_START"] = "action:start";
    EventType["ACTION_END"] = "action:end";
    EventType["OPERATOR_START"] = "operator:start";
    EventType["OPERATOR_END"] = "operator:end";
    EventType["OPERATOR_ASYNC"] = "operator:async";
    EventType["MUTATIONS"] = "mutations";
    EventType["EFFECT"] = "effect";
    EventType["DERIVED"] = "derived";
    EventType["DERIVED_DIRTY"] = "derived:dirty";
    EventType["COMPONENT_ADD"] = "component:add";
    EventType["COMPONENT_UPDATE"] = "component:update";
    EventType["COMPONENT_REMOVE"] = "component:remove";
    EventType["GETTER"] = "getter";
})(EventType || (EventType = {}));
//# sourceMappingURL=internalTypes.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/derived.js


const IS_DERIVED = Symbol('IS_DERIVED');
const IS_DERIVED_CONSTRUCTOR = Symbol('IS_DERIVED_CONSTRUCTOR');
class Derived {
    constructor(cb) {
        this.cb = cb;
        this.isDirty = true;
        this.updateCount = 0;
        const boundEvaluate = this.evaluate.bind(this);
        if (false) {}
        boundEvaluate[IS_DERIVED] = true;
        return boundEvaluate;
    }
    runScope(tree, path) {
        const parent = path.slice(0, path.length - 1).reduce((curr, key) => curr[key], tree.state);
        return this.cb(parent, tree.state);
    }
    evaluate(eventHub, tree, proxyStateTree, path) {
        if (!this.disposeOnMutation) {
            this.disposeOnMutation = proxyStateTree.onMutation((_, paths, flushId) => {
                if (typeof path.reduce((aggr, key) => aggr && aggr[key], proxyStateTree.sourceState) !== 'function') {
                    this.disposeOnMutation();
                    return;
                }
                if (this.isDirty) {
                    return;
                }
                for (let mutationPath of paths) {
                    if (this.paths.has(mutationPath)) {
                        this.isDirty = true;
                        eventHub.emitAsync(EventType.DERIVED_DIRTY, {
                            derivedPath: path,
                            path: mutationPath,
                            flushId,
                        });
                        return;
                    }
                }
            });
        }
        // During development we need to move the ownership of whatever state is returned from
        // the derived to track it correctly. In production we only have one proxifier, so no worries
        if (this.isDirty || this.previousProxifier !== tree.proxifier) {
            const getPaths = tree.trackPaths();
            this.value = this.runScope(tree, path);
            this.isDirty = false;
            this.paths = getPaths();
            if (false) {}
        }
        if (tree instanceof es/* TrackStateTree */.z6) {
            // If we access a cached value we have to make sure that we move
            // the tracked paths into the tree looking at it, where
            // addTrackingPath is for initial tree and "trackPathListeners"
            // is for nested derived
            for (let path of this.paths) {
                tree.addTrackingPath(path);
                tree.trackPathListeners.forEach((cb) => cb(path));
            }
        }
        this.previousProxifier = tree.proxifier;
        // This value might be a proxy, we need to rescope
        // it to the current tree looking
        if (this.value && this.value[es/* IS_PROXY */.ev]) {
            return proxyStateTree.rescope(this.value, tree);
        }
        return this.value;
    }
}
//# sourceMappingURL=derived.js.map
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

;// CONCATENATED MODULE: ./node_modules/overmind/es/rehydrate.js
function rehydrateState(target, source, classes = {}) {
    if (!target || !source) {
        throw new Error(`You have to pass a "target" and "source" object to rehydrate`);
    }
    Object.keys(source).forEach((key) => {
        const value = source[key];
        const classInstance = classes[key];
        if (typeof classInstance === 'function' && Array.isArray(target[key])) {
            target[key] = source[key].map(value => classInstance(value));
        }
        else if (typeof classInstance === 'function' && typeof target[key] === 'object' && target[key] !== null && target[key].constructor.name === 'Object') {
            target[key] = Object.keys(source[key]).reduce((aggr, subKey) => {
                aggr[subKey] = classInstance(source[key][subKey]);
                return aggr;
            }, {});
        }
        else if (typeof classInstance === 'function') {
            target[key] = classInstance(source[key]);
        }
        else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            if (!target[key])
                target[key] = {};
            rehydrateState(target[key], source[key], classes[key]);
        }
        else {
            target[key] = source[key];
        }
    });
}
const SERIALIZE = Symbol('SERIALIZE');
const rehydrate = (state, source, classes = {}) => {
    if (Array.isArray(source)) {
        const mutations = source;
        mutations.forEach((mutation) => {
            const pathArray = mutation.path.split(mutation.delimiter);
            const key = pathArray.pop();
            const target = pathArray.reduce((aggr, key) => aggr[key], state);
            const classInstance = pathArray.reduce((aggr, key) => aggr && aggr[key], classes);
            if (mutation.method === 'set') {
                if (typeof classInstance === 'function' && Array.isArray(mutation.args[0])) {
                    target[key] = mutation.args[0].map((arg) => classInstance(arg));
                }
                else if (typeof classInstance === 'function') {
                    target[key] = classInstance(mutation.args[0]);
                }
                else {
                    target[key] = mutation.args[0];
                }
            }
            else if (mutation.method === 'unset') {
                delete target[key];
            }
            else {
                target[key][mutation.method].apply(target[key], typeof classInstance === 'function' ? mutation.args.map((arg) => {
                    return typeof arg === 'object' && arg !== null ? classInstance(arg) : arg;
                }) : mutation.args);
            }
        });
    }
    else {
        rehydrateState(state, source, classes);
    }
};
//# sourceMappingURL=rehydrate.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/Devtools.js


class Devtools {
    constructor(name) {
        this.safeClassNames = new Set();
        this.unsafeClassNames = new Set();
        this.circularReferenceCache = [];
        this.buffer = [];
        this.serializer = Promise.resolve();
        this.isConnected = false;
        this.doReconnect = false;
        this.hasWarnedReconnect = false;
        this.reconnectInterval = 10000;
        this.connect = (host, onMessage) => {
            host = host || 'localhost:3031';
            this.ws = new WebSocket(`ws://${host}?name=${this.name}`);
            this.ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.appName !== this.name) {
                    return;
                }
                onMessage(data);
            };
            this.ws.onopen = () => {
                this.isConnected = true;
                this.flushBuffer();
            };
            this.ws.onerror = () => {
                console.error(`OVERMIND DEVTOOLS: Not able to connect. You are trying to connect to "${host}", but there was no devtool there. Try the following:
        
          - Make sure you are running the latest version of the devtools, using "npx overmind-devtools@latest" or install latest extension for VSCode
          - Close the current tab and open a new one
          - Make sure the correct port is configured in the devtools
        `);
            };
            this.ws.onclose = () => {
                this.isConnected = false;
                if (this.doReconnect && !this.hasWarnedReconnect) {
                    console.warn('Debugger application is not running on selected port... will reconnect automatically behind the scenes');
                    this.hasWarnedReconnect = true;
                }
                if (this.doReconnect) {
                    this.reconnect(host, onMessage);
                }
            };
        };
        this.sendMessage = (payload) => {
            if (!this.isConnected) {
                this.buffer.push(payload);
                return;
            }
            this.ws.send(`{"appName":"${this.name}","message":${payload}}`);
        };
        this.flushBuffer = () => __awaiter(this, void 0, void 0, function* () {
            this.buffer.forEach((payload) => {
                this.sendMessage(payload);
            });
            this.buffer.length = 0;
        });
        this.name = typeof location !== 'undefined' && location.search.includes('OVERMIND_DEVTOOL') ? name + ' (Overmind Devtool)' : name;
    }
    reconnect(host, onMessage) {
        setTimeout(() => this.connect(host, onMessage), this.reconnectInterval);
    }
    send(message) {
        const safeClassNames = this.safeClassNames;
        const unsafeClassNames = this.unsafeClassNames;
        const circularReferenceCache = this.circularReferenceCache;
        this.sendMessage(JSON.stringify(message, function (_, value) {
            if (typeof value === 'function') {
                return '[Function]';
            }
            if (this.__CLASS__) {
                return value;
            }
            if (value && value[SERIALIZE]) {
                return {
                    __CLASS__: true,
                    name: value.constructor.name,
                    value
                };
            }
            if (typeof value === 'object' &&
                value !== null &&
                !Array.isArray(value) &&
                value.constructor &&
                value.constructor.name !== 'Object') {
                if (circularReferenceCache.includes(value)) {
                    return `[CIRCULAR REFERENCE: ${value.constructor.name}]`;
                }
                circularReferenceCache.push(value);
                if (!safeClassNames.has(value.constructor.name) && !unsafeClassNames.has(value.constructor.name)) {
                    try {
                        JSON.stringify(value);
                        safeClassNames.add(value.constructor.name);
                    }
                    catch (_a) {
                        unsafeClassNames.add(value.constructor.name);
                    }
                }
                if (safeClassNames.has(value.constructor.name)) {
                    return {
                        __CLASS__: true,
                        name: value.constructor.name,
                        value
                    };
                }
                else {
                    return `[${value.constructor.name || 'NOT SERIALIZABLE'}]`;
                }
            }
            return value;
        }));
        circularReferenceCache.length = 0;
    }
}
//# sourceMappingURL=Devtools.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/statemachine.js
var _a;


const INITIAL_STATE = Symbol('INITIAL_STATE');
const TRANSITIONS = Symbol('TRANSITIONS');
const STATE = Symbol('STATE');
const IS_DISPOSED = Symbol('IS_DISPOSED');
const CURRENT_KEYS = Symbol('CURRENT_KEYS');
const BASE_STATE = Symbol('BASE_STATE');
class StateMachine {
    constructor(transitions, state, baseState) {
        this[_a] = false;
        this[STATE] = state;
        this[BASE_STATE] = baseState;
        this[INITIAL_STATE] = state.current;
        this[BASE_STATE] = baseState;
        this[TRANSITIONS] = transitions;
        this[CURRENT_KEYS] = Object.keys(state);
        Object.assign(this, state, baseState);
    }
    clone() {
        return new StateMachine(this[TRANSITIONS], deepCopy(this[STATE]), deepCopy(this[BASE_STATE]));
    }
    dispose() {
        Object.keys(this[es/* VALUE */.o9]).forEach((key) => {
            if (this[es/* VALUE */.o9][key] instanceof StateMachine) {
                this[key].dispose();
            }
        });
        this[es/* VALUE */.o9][IS_DISPOSED] = true;
    }
    send(type, data) {
        if (this[es/* VALUE */.o9][IS_DISPOSED]) {
            if (false) {}
            return this;
        }
        const tree = (this[es/* PROXY_TREE */.J6].master.mutationTree || this[es/* PROXY_TREE */.J6]);
        const transition = this[es/* VALUE */.o9][TRANSITIONS][type];
        tree.enableMutations();
        const result = transition(this, data);
        if (result) {
            this[es/* VALUE */.o9][CURRENT_KEYS].forEach((key) => {
                if (key !== 'current') {
                    delete this[key];
                }
            });
            this[es/* VALUE */.o9][CURRENT_KEYS] = Object.keys(result);
            Object.assign(this, result);
        }
        tree.blockMutations();
        return this;
    }
    matches(state) {
        if (this.current === state) {
            return this;
        }
    }
}
_a = IS_DISPOSED;
function statemachine(transitions) {
    return {
        create(state, baseState) {
            return new StateMachine(transitions, state, baseState);
        }
    };
}
//# sourceMappingURL=statemachine.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/utils.js



const IS_TEST = "production" === 'test';
const IS_OPERATOR = Symbol('operator');
const ORIGINAL_ACTIONS = Symbol('origina_actions');
const EXECUTION = Symbol('execution');
const MODE_DEFAULT = Symbol('MODE_DEFAULT');
const MODE_TEST = Symbol('MODE_TEST');
const MODE_SSR = Symbol('MODE_SSR');
class MockedEventEmitter {
    emit() { }
    emitAsync() { }
    on() { }
    once() { }
    addListener() { }
}
const json = (obj) => {
    return deepCopy(obj && obj[es/* IS_PROXY */.ev] ? obj[es/* VALUE */.o9] : obj);
};
function isPromise(maybePromise) {
    return (maybePromise instanceof Promise ||
        (maybePromise &&
            typeof maybePromise.then === 'function' &&
            typeof maybePromise.catch === 'function'));
}
function processState(state) {
    return Object.keys(state).reduce((aggr, key) => {
        if (key === '__esModule') {
            return aggr;
        }
        const originalDescriptor = Object.getOwnPropertyDescriptor(state, key);
        if (originalDescriptor && 'get' in originalDescriptor) {
            Object.defineProperty(aggr, key, originalDescriptor);
            return aggr;
        }
        const value = state[key];
        if (is_plain_obj_default()(value)) {
            aggr[key] = processState(value);
        }
        else {
            Object.defineProperty(aggr, key, originalDescriptor);
        }
        return aggr;
    }, is_plain_obj_default()(state) ? {} : state);
}
function getFunctionName(func) {
    return func.name || func.displayName || '';
}
function deepCopy(obj) {
    if (obj instanceof StateMachine) {
        return obj.clone();
    }
    else if (is_plain_obj_default()(obj)) {
        return Object.keys(obj).reduce((aggr, key) => {
            if (key === '__esModule') {
                return aggr;
            }
            const originalDescriptor = Object.getOwnPropertyDescriptor(obj, key);
            const isAGetter = originalDescriptor && 'get' in originalDescriptor;
            const value = obj[key];
            if (isAGetter) {
                Object.defineProperty(aggr, key, originalDescriptor);
            }
            else {
                aggr[key] = deepCopy(value);
            }
            return aggr;
        }, {});
    }
    else if (Array.isArray(obj)) {
        return obj.map((item) => deepCopy(item));
    }
    return obj;
}
const getChangeMutationsDelimiter = '.';
function getChangeMutations(stateA, stateB, path = [], mutations = []) {
    const stateAKeys = Object.keys(stateA);
    const stateBKeys = Object.keys(stateB);
    stateAKeys.forEach((key) => {
        if (!stateBKeys.includes(key)) {
            mutations.push({
                delimiter: getChangeMutationsDelimiter,
                args: [],
                path: path.concat(key).join('.'),
                hasChangedValue: false,
                method: 'unset',
            });
        }
    });
    stateBKeys.forEach((key) => {
        if (is_plain_obj_default()(stateA[key]) && is_plain_obj_default()(stateB[key])) {
            getChangeMutations(stateA[key], stateB[key], path.concat(key), mutations);
        }
        else if (stateA[key] !== stateB[key]) {
            mutations.push({
                delimiter: getChangeMutationsDelimiter,
                args: [stateB[key]],
                path: path.concat(key).join('.'),
                hasChangedValue: false,
                method: 'set'
            });
        }
    });
    return mutations;
}
function getActionPaths(actions = {}, currentPath = []) {
    return Object.keys(actions).reduce((aggr, key) => {
        if (typeof actions[key] === 'function') {
            return aggr.concat(currentPath.concat(key).join('.'));
        }
        return aggr.concat(getActionPaths(actions[key], currentPath.concat(key)));
    }, []);
}
function createActionsProxy(actions, cb) {
    return new Proxy(actions, {
        get(target, prop) {
            if (prop === ORIGINAL_ACTIONS) {
                return actions;
            }
            if (typeof target[prop] === 'function') {
                return cb(target[prop]);
            }
            if (!target[prop]) {
                return undefined;
            }
            return createActionsProxy(target[prop], cb);
        },
    });
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/operator.js


function operatorStarted(type, arg, context) {
    if (true) {
        return;
    }
    const name = typeof arg === 'function' ? arg.displayName || arg.name : String(arg);
    context.execution.isRunning = true;
    context.execution.emit(EventType.OPERATOR_START, Object.assign(Object.assign({}, context.execution), { name,
        type }));
}
function operatorStopped(context, value, details = {}) {
    if (true) {
        if (value instanceof Promise) {
            context.execution.emit(EventType.OPERATOR_ASYNC, Object.assign(Object.assign({}, context.execution), { isAsync: true }));
        }
        return;
    }
    const evaluatedDetails = {
        error: details.error ? details.error.message : undefined,
        isIntercepted: Boolean(details.isIntercepted),
        isSkipped: Boolean(details.isSkipped),
    };
    if (value instanceof Promise) {
        value
            .then((promiseValue) => {
            context.execution.isRunning = false;
            context.execution.emit(EventType.OPERATOR_END, Object.assign(Object.assign(Object.assign({}, context.execution), { result: promiseValue, isAsync: true }), evaluatedDetails));
        })
            .catch(() => {
            // Make sure an error does not cause uncaught
        });
    }
    else {
        context.execution.isRunning = false;
        context.execution.emit(EventType.OPERATOR_END, Object.assign(Object.assign(Object.assign({}, context.execution), { result: value, isAsync: false }), evaluatedDetails));
    }
}
function createContext(context, value, path) {
    if (true) {
        return Object.assign(Object.assign({}, context), { value });
    }
    const newExecution = Object.assign(Object.assign({}, context.execution), { operatorId: context.execution.getNextOperatorId(), path: path || context.execution.path });
    const mutationTrees = [];
    return Object.assign(Object.assign({}, context), { actions: createActionsProxy(context.actions[ORIGINAL_ACTIONS] || context.actions, (action) => {
            return (value) => action(value, newExecution.isRunning ? newExecution : null);
        }), value, execution: newExecution, effects: context.execution.trackEffects(newExecution), flush: context.parentExecution
            ? context.parentExecution.flush
            : (isAsync) => {
                return this.proxyStateTree.flush(mutationTrees, isAsync);
            }, getMutationTree: context.parentExecution
            ? context.parentExecution.getMutationTree
            : () => {
                const mutationTree = this.proxyStateTree.getMutationTree();
                mutationTrees.push(mutationTree);
                if (this.mode.mode === MODE_TEST) {
                    mutationTree.onMutation((mutation) => {
                        this.addExecutionMutation(mutation);
                    });
                }
                return mutationTree;
            } });
}
function createNextPath(next) {
    if (true) {
        return next;
    }
    return (err, context) => {
        const newContext = Object.assign(Object.assign({}, context), { execution: Object.assign(Object.assign({}, context.execution), { path: context.execution.path.slice(0, context.execution.path.length - 1) }) });
        if (err)
            next(err, newContext);
        else
            next(null, newContext);
    };
}
function createOperator(type, name, cb) {
    const operator = (err, context, next, final) => {
        operatorStarted(type, name, context);
        let nextIsCalled = false;
        try {
            cb(err, {
                state: context.state,
                effects: context.effects,
                actions: context.actions,
                execution: context.execution,
                revertable: context.revertable,
            }, context.value, (err, value, options = {}) => {
                function run(err, value) {
                    if (options.path) {
                        const newContext = createContext(context, value, context.execution.path &&
                            context.execution.path.concat(options.path.name));
                        const nextWithPath = createNextPath(next);
                        options.path.operator(err, newContext, (...args) => {
                            operatorStopped(context, args[1].value);
                            nextWithPath(...args);
                        });
                    }
                    else {
                        operatorStopped(context, err || value, {
                            isSkipped: err ? true : options.isSkipped,
                        });
                        next(err, createContext(context, value));
                    }
                }
                if (value && value instanceof Promise) {
                    value
                        .then((promiseValue) => run(err, promiseValue))
                        .catch((promiseError) => run(promiseError, promiseError));
                }
                else {
                    nextIsCalled = true;
                    run(err, value);
                }
            }, (err, value) => {
                nextIsCalled = true;
                operatorStopped(context, err || value, {
                    isSkipped: Boolean(err),
                    isIntercepted: !err,
                });
                final(err, createContext(context, value));
            });
        }
        catch (error) {
            nextIsCalled = true;
            operatorStopped(context, context.value, {
                error,
            });
            next(error, createContext(context, context.value));
        }
        if (!nextIsCalled) {
            context.execution.emit(EventType.OPERATOR_ASYNC, Object.assign(Object.assign({}, context.execution), { isAsync: true }));
        }
    };
    operator[IS_OPERATOR] = true;
    return operator;
}
function createMutationOperator(type, name, cb) {
    const operator = (err, context, next, final) => {
        operatorStarted(type, name, context);
        const mutationTree = context.execution.getMutationTree();
        if (false) {}
        let nextIsCalled = false;
        try {
            cb(err, {
                state: mutationTree.state,
                effects: context.effects,
                actions: context.actions,
                execution: context.execution,
                revertable: context.revertable,
            },  true
                ? context.value
                : 0, (err, value, options = {}) => {
                function run(err, value) {
                    operatorStopped(context, err || value, {
                        isSkipped: err ? true : options.isSkipped,
                    });
                    mutationTree.dispose();
                    next(err, createContext(context, value));
                }
                if (value && value instanceof Promise) {
                    value
                        .then((promiseValue) => run(err, promiseValue))
                        .catch((promiseError) => run(promiseError, promiseError));
                }
                else {
                    nextIsCalled = true;
                    run(err, value);
                }
            }, (err, value) => {
                nextIsCalled = true;
                operatorStopped(context, err || value, {
                    isSkipped: Boolean(err),
                    isIntercepted: !err,
                });
                final(err, createContext(context, value));
            });
            if (false) {}
        }
        catch (error) {
            nextIsCalled = true;
            operatorStopped(context, context.value, {
                error,
            });
            next(error, createContext(context, context.value));
        }
        if (!nextIsCalled) {
            context.execution.emit(EventType.OPERATOR_ASYNC, Object.assign(Object.assign({}, context.execution), { isAsync: true }));
        }
    };
    operator[IS_OPERATOR] = true;
    return operator;
}
//# sourceMappingURL=operator.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/proxyfyEffects.js
const doNotProxy = Symbol('doNotProxy');
function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
}
let hasWarnedConstructor = false;
let currentEffectId = 0;
const ORIGIN_TARGET = Symbol('ORIGIN_TARGET');
function proxifyEffects(effects, cb, path = '') {
    if (!isObject(effects) && !(typeof effects === 'function')) {
        return effects;
    }
    return new Proxy(effects, {
        apply(target, thisArg, agumentsList) {
            const effectId = currentEffectId++;
            const name = path.split('.');
            const method = name.pop();
            return cb({
                func: target.bind(thisArg ? thisArg[ORIGIN_TARGET] : undefined),
                effectId,
                name: name.join('.'),
                method,
                args: agumentsList,
            });
        },
        construct(Target, args) {
            if (!hasWarnedConstructor) {
                console.warn(`EFFECTS - It is highly recommended to create a custom effect, exposing a method that deals with the instantiation of "${path}". It improves readability and debugability of your app`);
                hasWarnedConstructor = true;
            }
            return new Target(...args);
        },
        get(target, prop) {
            if (prop === ORIGIN_TARGET) {
                return target;
            }
            return proxifyEffects(target[prop], cb, path ? path + '.' + prop.toString() : prop.toString());
        }
    });
}
//# sourceMappingURL=proxyfyEffects.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/types.js

/** ===== PUBLIC API
 */

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/overmind/es/index.js















const derived = (cb) => {
    cb[IS_DERIVED_CONSTRUCTOR] = true;
    return cb;
};

function createOvermindSSR(config) {
    const ssr = new Overmind(config, {
        devtools: false,
    }, {
        mode: MODE_SSR,
    });
    const mutationTree = ssr.proxyStateTree.getMutationTree();
    ssr.state = mutationTree.state;
    ssr.hydrate = () => {
        return mutationTree.flush().mutations;
    };
    return ssr;
}
function createOvermindMock(config, mockedEffects) {
    const mock = new Overmind(Object.assign({}, config, {
        state: deepCopy(config.state),
    }), {
        devtools: false,
    }, {
        mode: MODE_TEST,
        options: {
            effectsCallback: (effect) => {
                const mockedEffect = (effect.name
                    ? effect.name.split('.')
                    : []).reduce((aggr, key) => (aggr ? aggr[key] : aggr), mockedEffects);
                if (!mockedEffect || (mockedEffect && !mockedEffect[effect.method])) {
                    throw new Error(`The effect "${effect.name}" with method ${effect.method} has not been mocked`);
                }
                return mockedEffect[effect.method](...effect.args);
            },
        },
    });
    const action = mock.createAction('onInitialize', config.onInitialize);
    mock.onInitialize = () => action(mock);
    mock.mutations = [];
    return mock;
}
function createOvermind(config, options) {
    return new Overmind(config, options, { mode: MODE_DEFAULT });
}
const hotReloadingCache = {};
// We do not use IConfig<Config> directly to type the class in order to avoid
// the 'import(...)' function to be used in exported types.
class Overmind {
    constructor(configuration, options = {}, mode = {
        mode: MODE_DEFAULT,
    }) {
        this.actionReferences = {};
        this.nextExecutionId = 0;
        this.reydrateMutationsForHotReloading = [];
        this.isStrict = false;
        this.reaction = (stateCallback, updateCallback, options = {}) => {
            let disposer;
            if (options.nested) {
                const value = stateCallback(this.state);
                if (!value || !value[es/* IS_PROXY */.ev]) {
                    throw new Error('You have to return an object or array from the Overmind state when using a "nested" reaction');
                }
                const path = value[es/* PATH */.mD];
                disposer = this.addFlushListener((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.path.startsWith(path)) {
                            updateCallback(path ? path.split(this.delimiter).reduce((aggr, key) => aggr[key], this.state) : this.state);
                        }
                    });
                });
            }
            else {
                const tree = this.proxyStateTree.getTrackStateTree();
                let returnValue;
                const updateReaction = () => {
                    tree.trackScope(() => (returnValue = stateCallback(tree.state)), () => {
                        updateReaction();
                        updateCallback(returnValue);
                    });
                };
                updateReaction();
                disposer = () => {
                    tree.dispose();
                };
            }
            if (options.immediate) {
                updateCallback(stateCallback(this.state));
            }
            return disposer;
        };
        this.addMutationListener = (cb) => {
            return this.proxyStateTree.onMutation(cb);
        };
        this.addFlushListener = (cb) => {
            return this.proxyStateTree.onFlush(cb);
        };
        const name = options.name || 'OvermindApp';
        const devEnv = options.devEnv || 'development';
        this.delimiter = options.delimiter || '.';
        this.isStrict = Boolean(options.strict);
        if (( false || "production" === devEnv) &&
            mode.mode === MODE_DEFAULT &&
            options.hotReloading !== false &&
            !({"env":{"NODE_ENV":"development"}} && {"env":{"NODE_ENV":"development"}}.title && {"env":{"NODE_ENV":"development"}}.title.includes('node'))) {
            if (hotReloadingCache[name]) {
                return hotReloadingCache[name].reconfigure(configuration);
            }
            else {
                hotReloadingCache[name] = this;
            }
        }
        /*
          Set up an eventHub to trigger information from derived, computed and reactions
        */
        const eventHub = mode.mode === MODE_SSR
            ? new MockedEventEmitter()
            : new EventEmitter();
        /*
          Create the proxy state tree instance with the state and a wrapper to expose
          the eventHub
        */
        const proxyStateTree = this.createProxyStateTree(configuration, eventHub, mode.mode === MODE_TEST || "production" === devEnv);
        this.originalConfiguration = configuration;
        this.state = proxyStateTree.state;
        this.effects = configuration.effects || {};
        this.proxyStateTree = proxyStateTree;
        this.eventHub = eventHub;
        this.mode = mode;
        /*
          Expose the created actions
        */
        this.actions = this.getActions(configuration.actions);
        if (mode.mode === MODE_SSR) {
            return;
        }
        if ("production" === devEnv &&
            mode.mode === MODE_DEFAULT &&
            typeof window !== 'undefined') {
            let warning = 'OVERMIND: You are running in DEVELOPMENT mode.';
            if (options.logProxies !== true) {
                const originalConsoleLog = console.log;
                console.log = (...args) => originalConsoleLog.apply(console, args.map((arg) => (arg && arg[es/* IS_PROXY */.ev] ? arg[es/* VALUE */.o9] : arg)));
                warning +=
                    '\n\n - To improve debugging experience "console.log" will NOT log proxies from Overmind, but the actual value. Please see docs to turn off this behaviour';
            }
            if (options.devtools ||
                (typeof location !== 'undefined' &&
                    location.hostname === 'localhost' &&
                    options.devtools !== false)) {
                const host = options.devtools === true ? 'localhost:3031' : options.devtools;
                const name = options.name
                    ? options.name
                    : typeof document === 'undefined'
                        ? 'NoName'
                        : document.title || 'NoName';
                this.initializeDevtools(host, name, eventHub, proxyStateTree.sourceState, configuration.actions);
            }
            else if (options.devtools !== false) {
                warning +=
                    '\n\n - You are not running on localhost. You will have to manually define the devtools option to connect';
            }
            if (!IS_TEST) {
                console.warn(warning);
            }
        }
        if ( true && mode.mode === MODE_DEFAULT) {
            eventHub.on(EventType.OPERATOR_ASYNC, (execution) => {
                if (!execution.parentExecution ||
                    !execution.parentExecution.isRunning) {
                    proxyStateTree.getMutationTree().flush(true);
                }
            });
            eventHub.on(EventType.ACTION_END, (execution) => {
                if (!execution.parentExecution || !execution.parentExecution.isRunning)
                    proxyStateTree.getMutationTree().flush();
            });
            let nextTick;
            const flushTree = () => {
                proxyStateTree.getMutationTree().flush(true);
            };
            this.proxyStateTree.onMutation(() => {
                nextTick && clearTimeout(nextTick);
                nextTick = setTimeout(flushTree, 0);
            });
        }
        else if (mode.mode === MODE_DEFAULT || mode.mode === MODE_TEST) {
            if ( false || (this.devtools && options.hotReloading !== false)) {
                eventHub.on(EventType.MUTATIONS, (execution) => {
                    this.reydrateMutationsForHotReloading = this.reydrateMutationsForHotReloading.concat(execution.mutations);
                });
            }
            eventHub.on(EventType.OPERATOR_ASYNC, (execution) => {
                if (!execution.parentExecution ||
                    !execution.parentExecution.isRunning) {
                    const flushData = execution.flush(true);
                    if (this.devtools && flushData.mutations.length) {
                        this.devtools.send({
                            type: 'flush',
                            data: Object.assign(Object.assign({}, execution), flushData),
                        });
                    }
                }
            });
            eventHub.on(EventType.ACTION_END, (execution) => {
                if (!execution.parentExecution ||
                    !execution.parentExecution.isRunning) {
                    const flushData = execution.flush();
                    if (this.devtools && flushData.mutations.length) {
                        this.devtools.send({
                            type: 'flush',
                            data: Object.assign(Object.assign({}, execution), flushData),
                        });
                    }
                }
            });
        }
        if (mode.mode === MODE_DEFAULT && configuration.onInitialize) {
            const onInitialize = this.createAction('onInitialize', configuration.onInitialize);
            this.initialized = Promise.resolve(onInitialize(this));
        }
        else {
            this.initialized = Promise.resolve(null);
        }
    }
    createProxyStateTree(configuration, eventHub, devmode) {
        const proxyStateTree = new es/* ProxyStateTree */.$7(this.getState(configuration), {
            devmode,
            delimiter: this.delimiter,
            onSetFunction: (tree, path, target, prop, func) => {
                if (func[IS_DERIVED_CONSTRUCTOR]) {
                    return new Derived(func);
                }
                return func;
            },
            onGetFunction: (tree, path, target, prop) => {
                let func = target[prop];
                if (func[IS_DERIVED]) {
                    return func(eventHub, tree, proxyStateTree, path.split(this.delimiter));
                }
                if (func[IS_DERIVED_CONSTRUCTOR]) {
                    const derived = new Derived(func);
                    target[prop] = derived;
                    return derived(eventHub, tree, proxyStateTree, path.split(this.delimiter));
                }
                return func;
            },
            onGetter: devmode
                ? (path, value) => {
                    this.eventHub.emitAsync(EventType.GETTER, {
                        path,
                        value
                    });
                }
                : undefined,
        });
        return proxyStateTree;
    }
    createExecution(name, action, parentExecution) {
        const namespacePath = name.split('.');
        namespacePath.pop();
        if (true) {
            return {
                [EXECUTION]: true,
                parentExecution,
                namespacePath,
                actionName: name,
                getMutationTree: () => {
                    return this.proxyStateTree.getMutationTree();
                },
                getTrackStateTree: () => {
                    return this.proxyStateTree.getTrackStateTree();
                },
                emit: this.eventHub.emit.bind(this.eventHub),
            };
        }
        const mutationTrees = [];
        const execution = {
            [EXECUTION]: true,
            namespacePath,
            actionId: name,
            executionId: this.nextExecutionId++,
            actionName: name,
            operatorId: 0,
            isRunning: true,
            parentExecution,
            path: [],
            emit: this.eventHub.emit.bind(this.eventHub),
            send: this.devtools ? this.devtools.send.bind(this.devtools) : () => { },
            trackEffects: this.trackEffects.bind(this, this.effects),
            getNextOperatorId: (() => {
                let currentOperatorId = 0;
                return () => ++currentOperatorId;
            })(),
            flush: parentExecution
                ? parentExecution.flush
                : (isAsync) => {
                    return this.proxyStateTree.flush(mutationTrees, isAsync);
                },
            getMutationTree: parentExecution
                ? parentExecution.getMutationTree
                : () => {
                    const mutationTree = this.proxyStateTree.getMutationTree();
                    mutationTrees.push(mutationTree);
                    if (this.mode.mode === MODE_TEST) {
                        mutationTree.onMutation((mutation) => {
                            this.addExecutionMutation(mutation);
                        });
                    }
                    return mutationTree;
                },
            getTrackStateTree: () => {
                return this.proxyStateTree.getTrackStateTree();
            },
            onFlush: (cb) => {
                return this.proxyStateTree.onFlush(cb);
            },
            scopeValue: (value, tree) => {
                return this.scopeValue(value, tree);
            },
        };
        return execution;
    }
    createContext(execution, tree) {
        return {
            state: tree.state,
            actions: createActionsProxy(this.actions, (action) => {
                return (value) => action(value, execution.isRunning ? execution : null);
            }),
            execution,
            proxyStateTree: this.proxyStateTree,
            effects: this.trackEffects(this.effects, execution),
        };
    }
    scopeValue(value, tree) {
        if (!value) {
            return value;
        }
        if (value[es/* IS_PROXY */.ev]) {
            return this.proxyStateTree.rescope(value, tree);
        }
        else if (is_plain_obj_default()(value)) {
            return Object.assign({}, ...Object.keys(value).map((key) => ({
                [key]: this.proxyStateTree.rescope(value[key], tree),
            })));
        }
        else {
            return value;
        }
    }
    addExecutionMutation(mutation) {
        ;
        this.mutations.push(mutation);
    }
    createAction(name, originalAction) {
        this.actionReferences[name] = originalAction;
        const actionFunc = (value, boundExecution) => {
            const action = this.actionReferences[name];
            // Developer might unintentionally pass more arguments, so have to ensure
            // that it is an actual execution
            boundExecution =
                boundExecution && boundExecution[EXECUTION] ? boundExecution : undefined;
            if (true) {
                const execution = this.createExecution(name, action, boundExecution);
                this.eventHub.emit(EventType.ACTION_START, Object.assign(Object.assign({}, execution), { value }));
                if (action[IS_OPERATOR]) {
                    return new Promise((resolve, reject) => {
                        action(null, Object.assign(Object.assign({}, this.createContext(execution, this.proxyStateTree)), { value }), (err, finalContext) => {
                            execution.isRunning = false;
                            finalContext &&
                                this.eventHub.emit(EventType.ACTION_END, Object.assign(Object.assign({}, finalContext.execution), { operatorId: finalContext.execution.operatorId - 1 }));
                            if (err)
                                reject(err);
                            else {
                                resolve(this.mode.mode === MODE_TEST
                                    ? finalContext.execution
                                    : undefined);
                            }
                        });
                    });
                }
                else {
                    const mutationTree = execution.getMutationTree();
                    if (this.isStrict) {
                        mutationTree.blockMutations();
                    }
                    const returnValue = action(this.createContext(execution, mutationTree), value);
                    this.eventHub.emit(EventType.ACTION_END, execution);
                    return returnValue;
                }
            }
            else {}
        };
        return actionFunc;
    }
    trackEffects(effects = {}, execution) {
        if (true) {
            return effects;
        }
        return proxifyEffects(this.effects, (effect) => {
            let result;
            try {
                if (this.mode.mode === MODE_TEST) {
                    const mode = this.mode;
                    result = mode.options.effectsCallback(effect);
                }
                else {
                    this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, isPending: true, error: false }));
                    result = effect.func.apply(this, effect.args);
                }
            }
            catch (error) {
                // eslint-disable-next-line standard/no-callback-literal
                this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, isPending: false, error: error.message }));
                throw error;
            }
            if (isPromise(result)) {
                // eslint-disable-next-line standard/no-callback-literal
                this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, isPending: true, error: false }));
                return result
                    .then((promisedResult) => {
                    // eslint-disable-next-line standard/no-callback-literal
                    this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, result: promisedResult, isPending: false, error: false }));
                    return promisedResult;
                })
                    .catch((error) => {
                    this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, isPending: false, error: error && error.message }));
                    throw error;
                });
            }
            // eslint-disable-next-line standard/no-callback-literal
            this.eventHub.emit(EventType.EFFECT, Object.assign(Object.assign(Object.assign({}, execution), effect), { args: effect.args, result: result, isPending: false, error: false }));
            return result;
        });
    }
    initializeDevtools(host, name, eventHub, initialState, actions) {
        if (true)
            return;
        const devtools = new Devtools(name);
        devtools.connect(host, (message) => {
            switch (message.type) {
                case 'refresh':
                    location.reload(true);
                    break;
                case 'executeAction':
                    const action = message.data.name
                        .split('.')
                        .reduce((aggr, key) => aggr[key], this.actions);
                    message.data.payload
                        ? action(JSON.parse(message.data.payload))
                        : action();
                    break;
                case 'mutation':
                    const tree = this.proxyStateTree.getMutationTree();
                    const path = message.data.path.slice();
                    const value = JSON.parse(`{ "value": ${message.data.value} }`).value;
                    const key = path.pop();
                    const state = path.reduce((aggr, key) => aggr[key], tree.state);
                    state[key] = value;
                    tree.flush(true);
                    tree.dispose();
                    this.devtools.send({
                        type: 'state',
                        data: {
                            path: message.data.path,
                            value,
                        },
                    });
            }
        });
        for (let type in EventType) {
            eventHub.on(EventType[type], ((eventType) => (data) => {
                devtools.send({
                    type: EventType[type],
                    data,
                });
                if (eventType === EventType.MUTATIONS) {
                    // We want to trigger property access when setting objects and arrays, as any derived set would
                    // then trigger and update the devtools
                    data.mutations.forEach((mutation) => {
                        const value = mutation.path.split(this.delimiter).reduce((aggr, key) => aggr[key], this.proxyStateTree.state);
                        if (is_plain_obj_default()(value)) {
                            Object.keys(value).forEach((key) => value[key]);
                        }
                        else if (Array.isArray(value)) {
                            value.forEach((item) => {
                                if (is_plain_obj_default()(item)) {
                                    Object.keys(item).forEach((key) => item[key]);
                                }
                            });
                        }
                    });
                }
                // Access the derived which will trigger calculation and devtools
                if (eventType === EventType.DERIVED_DIRTY) {
                    data.derivedPath
                        .reduce((aggr, key) => aggr[key], this.proxyStateTree.state);
                }
            })(EventType[type]));
        }
        devtools.send({
            type: 'init',
            data: {
                state: this.proxyStateTree.state,
                actions: getActionPaths(actions),
                delimiter: this.delimiter
            },
        });
        this.devtools = devtools;
    }
    getState(configuration) {
        let state = {};
        if (configuration.state) {
            state = processState(configuration.state);
        }
        return state;
    }
    getActions(actions = {}, path = []) {
        return Object.keys(actions).reduce((aggr, name) => {
            if (typeof actions[name] === 'function') {
                const action = this.createAction(path.concat(name).join('.'), actions[name]);
                action.displayName = path.concat(name).join('.');
                return Object.assign(aggr, {
                    [name]: action,
                });
            }
            return Object.assign(aggr, {
                [name]: this.getActions(actions[name], path.concat(name)),
            });
        }, {});
    }
    /*
      Related to hot reloading we update the existing action references and add any new
      actions.
    */
    updateActions(actions = {}, path = []) {
        Object.keys(actions).forEach((name) => {
            if (typeof actions[name] === 'function') {
                const actionName = path.concat(name).join('.');
                if (this.actionReferences[actionName]) {
                    this.actionReferences[actionName] = actions[name];
                }
                else {
                    const target = path.reduce((aggr, key) => {
                        if (!aggr[key]) {
                            aggr[key] = {};
                        }
                        return aggr[key];
                    }, this.actions);
                    target[name] = this.createAction(actionName, actions[name]);
                    target[name].displayName = path.concat(name).join('.');
                }
            }
            else {
                this.updateActions(actions[name], path.concat(name));
            }
        }, {});
    }
    getTrackStateTree() {
        return this.proxyStateTree.getTrackStateTree();
    }
    getMutationTree() {
        return this.proxyStateTree.getMutationTree();
    }
    reconfigure(configuration) {
        const changeMutations = getChangeMutations(this.originalConfiguration.state, configuration.state || {});
        this.updateActions(configuration.actions);
        this.effects = configuration.effects || {};
        const mutationTree = this.proxyStateTree.getMutationTree();
        // We change the state to match the new structure
        rehydrate(mutationTree.state, changeMutations);
        // We run any mutations ran during the session, it might fail though
        // as the state structure might have changed, but no worries we just
        // ignore that
        this.reydrateMutationsForHotReloading.forEach((mutation) => {
            try {
                rehydrate(mutationTree.state, [mutation]);
            }
            catch (error) {
                // No worries, structure changed and we do not want to mutate anyways
            }
        });
        mutationTree.flush();
        mutationTree.dispose();
        if (this.devtools) {
            this.devtools.send({
                type: 're_init',
                data: {
                    state: this.state,
                    actions: getActionPaths(configuration.actions),
                },
            });
        }
        return this;
    }
}
function pipe(...operators) {
    const instance = (err, context, next, final = next) => {
        if (err)
            next(err, context);
        else {
            let operatorIndex = 0;
            const run = (operatorErr, operatorContext) => {
                const operator = operators[operatorIndex++];
                try {
                    ;
                    (operator || next)(operatorErr, operatorContext, run, final);
                }
                catch (operatorError) {
                    ;
                    (operator || next)(operatorError, operatorContext, run, final);
                }
            };
            run(null, context);
        }
    };
    instance[IS_OPERATOR] = true;
    return instance;
}
/*
  OPERATORS
*/
function forEach(forEachItemOperator) {
    const instance = (err, context, next) => {
        if (err)
            next(err, context);
        else {
            let array = context.value;
            let evaluatingCount = array.length;
            let lastContext;
            let hasErrored = false;
            const evaluate = (err) => {
                if (hasErrored) {
                    return;
                }
                if (err) {
                    hasErrored = true;
                    return next(err);
                }
                evaluatingCount--;
                if (!evaluatingCount) {
                    operatorStopped(context, context.value);
                    next(null, createContext(lastContext, context.value, lastContext.execution.path &&
                        lastContext.execution.path.slice(0, lastContext.execution.path.length - 1)));
                }
            };
            operatorStarted('forEach', '', context);
            if (array.length) {
                array.forEach((value, index) => {
                    lastContext = createContext(lastContext || context, value, context.execution.path &&
                        context.execution.path.concat(String(index)));
                    const nextWithPath = createNextPath(evaluate);
                    // @ts-ignore
                    forEachItemOperator(null, lastContext, nextWithPath);
                });
            }
            else {
                operatorStopped(context, context.value);
                next(null, createContext(context, context.value));
            }
        }
    };
    instance[IS_OPERATOR] = true;
    return instance;
}
function parallel(...operators) {
    const instance = (err, context, next) => {
        if (err)
            next(err, context);
        else {
            let evaluatingCount = operators.length;
            let lastContext;
            let hasErrored = false;
            const evaluate = (err) => {
                if (hasErrored) {
                    return;
                }
                if (err) {
                    hasErrored = true;
                    return next(err, lastContext);
                }
                evaluatingCount--;
                if (!evaluatingCount) {
                    operatorStopped(context, context.value);
                    next(null, createContext(lastContext, context.value, lastContext.execution.path &&
                        lastContext.execution.path.slice(0, lastContext.execution.path.length - 1)));
                }
            };
            operatorStarted('parallel', '', context);
            operators.forEach((operator, index) => {
                lastContext = createContext(lastContext || context, context.value, context.execution.path && context.execution.path.concat(String(index)));
                const nextWithPath = createNextPath(evaluate);
                // @ts-ignore
                operator(null, lastContext, nextWithPath);
            });
        }
    };
    instance[IS_OPERATOR] = true;
    return instance;
}
function map(operation) {
    return createOperator('map', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else
            next(null, operation(context, value));
    });
}
function noop() {
    return createOperator('noop', '', (err, context, value, next) => {
        if (err)
            next(err, value);
        else
            next(null, value);
    });
}
function filter(operation) {
    return createOperator('filter', getFunctionName(operation), (err, context, value, next, final) => {
        if (err)
            next(err, value);
        else if (operation(context, value))
            next(null, value);
        else
            final(null, value);
    });
}
let hasShownActionDeprecation = false;
function action(operation) {
    if (!hasShownActionDeprecation) {
        console.warn(`DEPRECATION - The action operator is deprecated in favor of "mutate". The reason is to avoid confusion between actions and operators. Check out action "${getFunctionName(operation)}"`);
        hasShownActionDeprecation = true;
    }
    return createMutationOperator('action', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else {
            const result = operation(context, value);
            if (isPromise(result)) {
                next(null, result.then(() => value));
            }
            else {
                next(null, value);
            }
        }
    });
}
function mutate(operation) {
    return createMutationOperator('mutate', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else {
            const result = operation(context, value);
            if (isPromise(result)) {
                next(null, result.then(() => value));
            }
            else {
                next(null, value);
            }
        }
    });
}
function run(operation) {
    return createOperator('run', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else {
            const result = operation(context, value);
            if (isPromise(result)) {
                next(null, result.then(() => value));
            }
            else {
                next(null, value);
            }
        }
    });
}
function catchError(operation) {
    return createMutationOperator('catchError', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(null, operation(context, err));
        else
            next(null, value, {
                isSkipped: true,
            });
    });
}
function tryCatch(paths) {
    const instance = (err, context, next) => {
        if (err)
            next(err, context);
        else {
            const evaluateCatch = (err, catchContext) => {
                operatorStopped(context, context.value);
                next(err, createContext(catchContext, context.value));
            };
            const evaluateTry = (err, tryContext) => {
                if (err) {
                    const newContext = createContext(tryContext, err, context.execution.path && context.execution.path.concat('catch'));
                    const nextWithPath = createNextPath(evaluateCatch);
                    // @ts-ignore
                    paths.catch(null, newContext, nextWithPath);
                }
                else {
                    operatorStopped(context, context.value);
                    next(null, createContext(tryContext, context.value));
                }
            };
            operatorStarted('tryCatch', '', context);
            const newContext = createContext(context, context.value, context.execution.path && context.execution.path.concat('try'));
            const nextWithPath = createNextPath(evaluateTry);
            // @ts-ignore
            paths.try(null, newContext, nextWithPath);
        }
    };
    instance[IS_OPERATOR] = true;
    return instance;
}
function fork(operation, paths) {
    return createOperator('fork', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else {
            const path = operation(context, value);
            next(null, value, {
                path: {
                    name: String(path),
                    operator: paths[path],
                },
            });
        }
    });
}
function when(operation, paths) {
    return createOperator('when', getFunctionName(operation), (err, context, value, next) => {
        if (err)
            next(err, value);
        else if (operation(context, value))
            next(null, value, {
                path: {
                    name: 'true',
                    operator: paths.true,
                },
            });
        else
            next(null, value, {
                path: {
                    name: 'false',
                    operator: paths.false,
                },
            });
    });
}
function wait(ms) {
    return createOperator('wait', String(ms), (err, context, value, next) => {
        if (err)
            next(err, value);
        else
            setTimeout(() => next(null, value), ms);
    });
}
function debounce(ms) {
    let timeout;
    let previousFinal;
    return createOperator('debounce', String(ms), (err, context, value, next, final) => {
        if (err)
            next(err, value);
        else {
            if (timeout) {
                clearTimeout(timeout);
                previousFinal(null, value);
            }
            previousFinal = final;
            timeout = setTimeout(() => {
                timeout = null;
                next(null, value);
            }, ms);
        }
    });
}
function throttle(ms) {
    let timeout;
    let previousFinal;
    let currentNext;
    return createOperator('throttle', String(ms), (err, context, value, next, final) => {
        if (err)
            next(err, value);
        else {
            if (timeout) {
                previousFinal(null, value);
                currentNext = next;
            }
            else {
                timeout = setTimeout(() => {
                    timeout = null;
                    currentNext(null, value);
                }, ms);
            }
            previousFinal = final;
            currentNext = next;
        }
    });
}
function waitUntil(operation) {
    return createOperator('waitUntil', operation.name, (err, context, value, next) => {
        if (err)
            next(err, value);
        else {
            const tree = context.execution.getTrackStateTree();
            const test = () => {
                if (operation(tree.state)) {
                    tree.dispose();
                    next(null, value);
                }
            };
            tree.trackScope(test, test);
        }
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ev": () => /* reexport */ IS_PROXY,
  "mD": () => /* reexport */ PATH,
  "J6": () => /* reexport */ PROXY_TREE,
  "$7": () => /* binding */ ProxyStateTree,
  "z6": () => /* reexport */ TrackStateTree,
  "o9": () => /* reexport */ VALUE
});

// UNUSED EXPORTS: MutationTree

// EXTERNAL MODULE: ./node_modules/is-plain-obj/index.js
var is_plain_obj = __webpack_require__(310);
var is_plain_obj_default = /*#__PURE__*/__webpack_require__.n(is_plain_obj);
;// CONCATENATED MODULE: ./node_modules/proxy-state-tree/es/Proxyfier.js

const IS_PROXY = Symbol('IS_PROXY');
const PATH = Symbol('PATH');
const VALUE = Symbol('VALUE');
const PROXY_TREE = Symbol('PROXY_TREE');
const arrayMutations = new Set([
    'push',
    'shift',
    'pop',
    'unshift',
    'splice',
    'reverse',
    'sort',
    'copyWithin',
]);
const getValue = (proxyOrValue) => proxyOrValue && proxyOrValue[IS_PROXY] ? proxyOrValue[VALUE] : proxyOrValue;
const isClass = (value) => typeof value === 'object' && value !== null && !Array.isArray(value) && value.constructor.name !== 'Object' && Object.isExtensible(value);
class Proxifier {
    constructor(tree) {
        this.tree = tree;
        this.CACHED_PROXY = Symbol('CACHED_PROXY');
        this.delimiter = tree.master.options.delimiter;
    }
    concat(path, prop) {
        return path ? path + this.delimiter + prop : prop;
    }
    ensureMutationTrackingIsEnabled(path) {
        if (true)
            return;
        if (this.tree.master.options.devmode && !this.tree.canMutate()) {
            throw new Error(`proxy-state-tree - You are mutating the path "${path}", but it is not allowed. The following could have happened:
        
        - The mutation is explicitly being blocket
        - You are passing state to a 3rd party tool trying to manipulate the state
        - You are running asynchronous code and forgot to "await" its execution
        `);
        }
    }
    isDefaultProxifier() {
        return this.tree.proxifier === this.tree.master.proxifier;
    }
    ensureValueDosntExistInStateTreeElsewhere(value) {
        if (true)
            return;
        if (value && value[IS_PROXY] === true) {
            throw new Error(`proxy-state-tree - You are trying to insert a value that already exists in the state tree on path "${value[PATH]}"`);
        }
        return value;
    }
    trackPath(path) {
        if (!this.tree.canTrack()) {
            return;
        }
        if (this.isDefaultProxifier()) {
            const trackStateTree = this.tree.master.currentTree;
            if (!trackStateTree) {
                return;
            }
            trackStateTree.addTrackingPath(path);
        }
        else {
            ;
            this.tree.addTrackingPath(path);
        }
    }
    // With tracking trees we want to ensure that we are always
    // on the currently tracked tree. This ensures when we access
    // a tracking proxy that is not part of the current tracking tree (pass as prop)
    // we move the ownership to the current tracker
    getTrackingTree() {
        if (this.tree.master.currentTree && this.isDefaultProxifier()) {
            return this.tree.master.currentTree;
        }
        if (!this.tree.canTrack()) {
            return null;
        }
        if (this.tree.canTrack()) {
            return this.tree;
        }
        return null;
    }
    getMutationTree() {
        return this.tree.master.mutationTree || this.tree;
    }
    isProxyCached(value, path) {
        return (value[this.CACHED_PROXY] &&
            String(value[this.CACHED_PROXY][PATH]) === String(path));
    }
    createArrayProxy(value, path) {
        if (this.isProxyCached(value, path)) {
            return value[this.CACHED_PROXY];
        }
        const proxifier = this;
        const proxy = new Proxy(value, {
            get(target, prop) {
                if (prop === IS_PROXY)
                    return true;
                if (prop === PATH)
                    return path;
                if (prop === VALUE)
                    return value;
                if (prop === 'indexOf') {
                    return (searchTerm, offset) => value.indexOf(getValue(searchTerm), getValue(offset));
                }
                if (prop === 'length' ||
                    (typeof target[prop] === 'function' &&
                        !arrayMutations.has(String(prop))) ||
                    typeof prop === 'symbol' || target[prop] instanceof Date) {
                    return target[prop];
                }
                const trackingTree = proxifier.getTrackingTree();
                const nestedPath = proxifier.concat(path, prop);
                const currentTree = trackingTree || proxifier.tree;
                trackingTree && trackingTree.proxifier.trackPath(nestedPath);
                currentTree.trackPathListeners.forEach((cb) => cb(nestedPath));
                const method = String(prop);
                if (arrayMutations.has(method)) {
                    /* @__PURE__ */ proxifier.ensureMutationTrackingIsEnabled(nestedPath);
                    return (...args) => {
                        const mutationTree = proxifier.getMutationTree();
                        let result;
                        if (true) {
                            result = target[prop](...args);
                        }
                        else {}
                        mutationTree.addMutation({
                            method,
                            path: path,
                            delimiter: proxifier.delimiter,
                            args: args,
                            hasChangedValue: true,
                        });
                        return result;
                    };
                }
                if (target[prop] === undefined) {
                    return undefined;
                }
                return proxifier.proxify(target[prop], nestedPath);
            },
            set(target, prop, value) {
                const nestedPath = proxifier.concat(path, prop);
                /* @__PURE__ */ proxifier.ensureMutationTrackingIsEnabled(nestedPath);
                /* @__PURE__ */ proxifier.ensureValueDosntExistInStateTreeElsewhere(value);
                const mutationTree = proxifier.getMutationTree();
                const result = Reflect.set(target, prop, value);
                mutationTree.addMutation({
                    method: 'set',
                    path: nestedPath,
                    args: [value],
                    delimiter: proxifier.delimiter,
                    hasChangedValue: true,
                });
                return result;
            },
        });
        Object.defineProperty(value, this.CACHED_PROXY, {
            value: proxy,
            configurable: true,
        });
        return proxy;
    }
    createObjectProxy(object, path) {
        if (this.isProxyCached(object, path)) {
            return object[this.CACHED_PROXY];
        }
        const proxifier = this;
        const proxy = new Proxy(object, {
            get(target, prop) {
                if (prop === IS_PROXY)
                    return true;
                if (prop === PATH)
                    return path;
                if (prop === VALUE)
                    return object;
                if (prop === PROXY_TREE)
                    return proxifier.tree;
                if (typeof prop === 'symbol' || prop in Object.prototype || target[prop] instanceof Date)
                    return target[prop];
                const descriptor = Object.getOwnPropertyDescriptor(target, prop) || (Object.getPrototypeOf(target) && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(target), prop));
                if (descriptor && 'get' in descriptor) {
                    const value = descriptor.get.call(proxy);
                    if (proxifier.tree.master.options.devmode &&
                        proxifier.tree.master.options.onGetter) {
                        proxifier.tree.master.options.onGetter(proxifier.concat(path, prop), value);
                    }
                    return value;
                }
                const trackingTree = proxifier.getTrackingTree();
                const targetValue = target[prop];
                const nestedPath = proxifier.concat(path, prop);
                const currentTree = trackingTree || proxifier.tree;
                if (typeof targetValue === 'function') {
                    if (proxifier.tree.master.options.onGetFunction) {
                        return proxifier.tree.master.options.onGetFunction(trackingTree || proxifier.tree, nestedPath, target, prop);
                    }
                    return isClass(target) ? targetValue : targetValue.call(target, proxifier.tree, nestedPath);
                }
                else {
                    currentTree.trackPathListeners.forEach((cb) => cb(nestedPath));
                    trackingTree && trackingTree.proxifier.trackPath(nestedPath);
                }
                if (targetValue === undefined) {
                    return undefined;
                }
                return proxifier.proxify(targetValue, nestedPath);
            },
            set(target, prop, value) {
                const nestedPath = proxifier.concat(path, prop);
                /* @__PURE__ */ proxifier.ensureMutationTrackingIsEnabled(nestedPath);
                /* @__PURE__ */ proxifier.ensureValueDosntExistInStateTreeElsewhere(value);
                let objectChangePath;
                if (!(prop in target)) {
                    objectChangePath = path;
                }
                const mutationTree = proxifier.getMutationTree();
                const existingValue = target[prop];
                if (typeof value === 'function' && proxifier.tree.master.options.onSetFunction) {
                    value = proxifier.tree.master.options.onSetFunction(proxifier.getTrackingTree() || proxifier.tree, nestedPath, target, prop, value);
                }
                const hasChangedValue = existingValue !== value;
                const result = Reflect.set(target, prop, value);
                mutationTree.addMutation({
                    method: 'set',
                    path: nestedPath,
                    args: [value],
                    delimiter: proxifier.delimiter,
                    hasChangedValue
                }, objectChangePath);
                return result;
            },
            deleteProperty(target, prop) {
                const nestedPath = proxifier.concat(path, prop);
                /* @__PURE__ */ proxifier.ensureMutationTrackingIsEnabled(nestedPath);
                let objectChangePath;
                if (prop in target) {
                    objectChangePath = path;
                }
                const mutationTree = proxifier.getMutationTree();
                delete target[prop];
                mutationTree.addMutation({
                    method: 'unset',
                    path: nestedPath,
                    args: [],
                    delimiter: proxifier.delimiter,
                    hasChangedValue: true,
                }, objectChangePath);
                return true;
            },
        });
        Object.defineProperty(object, this.CACHED_PROXY, {
            value: proxy,
            configurable: true,
        });
        return proxy;
    }
    proxify(value, path) {
        if (value) {
            const isUnmatchingProxy = value[IS_PROXY] &&
                (String(value[PATH]) !== String(path) ||
                    value[VALUE][this.CACHED_PROXY] !== value);
            if (isUnmatchingProxy) {
                return this.proxify(value[VALUE], path);
            }
            else if (value[IS_PROXY]) {
                return value;
            }
            else if (Array.isArray(value)) {
                return this.createArrayProxy(value, path);
            }
            else if (is_plain_obj_default()(value) || isClass(value)) {
                return this.createObjectProxy(value, path);
            }
        }
        return value;
    }
}
//# sourceMappingURL=Proxyfier.js.map
;// CONCATENATED MODULE: ./node_modules/proxy-state-tree/es/MutationTree.js

class MutationTree {
    constructor(master, proxifier) {
        this.mutationCallbacks = [];
        this.mutations = [];
        this.objectChanges = new Set();
        this.isTracking = false;
        this.isBlocking = false;
        this.trackPathListeners = [];
        this.isTracking = true;
        this.master = master;
        this.proxifier = proxifier || new Proxifier(this);
        this.state = this.proxifier.proxify(master.sourceState, '');
    }
    trackPaths() {
        const paths = new Set();
        const listener = (path) => {
            paths.add(path);
        };
        this.trackPathListeners.push(listener);
        return () => {
            this.trackPathListeners.splice(this.trackPathListeners.indexOf(listener), 1);
            return paths;
        };
    }
    getMutations() {
        const mutations = this.mutations.slice();
        this.mutations.length = 0;
        return mutations;
    }
    getObjectChanges() {
        const objectChanges = new Set([...this.objectChanges]);
        this.objectChanges.clear();
        return objectChanges;
    }
    addMutation(mutation, objectChangePath) {
        const currentFlushId = this.master.currentFlushId;
        this.mutations.push(mutation);
        if (objectChangePath) {
            this.objectChanges.add(objectChangePath);
        }
        for (let cb of this.master.mutationCallbacks) {
            cb(mutation, new Set(objectChangePath ? [mutation.path, objectChangePath] : [mutation.path]), currentFlushId);
        }
        for (let callback of this.mutationCallbacks) {
            callback(mutation, new Set(objectChangePath ? [mutation.path, objectChangePath] : [mutation.path]), currentFlushId);
        }
    }
    flush(isAsync = false) {
        return this.master.flush(this, isAsync);
    }
    onMutation(callback) {
        this.mutationCallbacks.push(callback);
    }
    canMutate() {
        return this.isTracking && !this.isBlocking;
    }
    canTrack() {
        return false;
    }
    blockMutations() {
        this.isBlocking = true;
    }
    enableMutations() {
        this.isBlocking = false;
    }
    dispose() {
        this.isTracking = false;
        this.mutationCallbacks.length = 0;
        this.proxifier = this.master.proxifier;
        return this;
    }
}
//# sourceMappingURL=MutationTree.js.map
;// CONCATENATED MODULE: ./node_modules/proxy-state-tree/es/TrackStateTree.js
class TrackStateTree {
    constructor(master) {
        this.pathDependencies = new Set();
        this.shouldTrack = false;
        this.trackPathListeners = [];
        this.master = master;
        this.proxifier = master.proxifier;
        this.state = master.state;
    }
    trackPaths() {
        const paths = new Set();
        const listener = (path) => {
            paths.add(path);
        };
        this.trackPathListeners.push(listener);
        return () => {
            this.trackPathListeners.splice(this.trackPathListeners.indexOf(listener), 1);
            return paths;
        };
    }
    canMutate() {
        return false;
    }
    canTrack() {
        return true;
    }
    addTrackingPath(path) {
        if (!this.shouldTrack) {
            return;
        }
        this.pathDependencies.add(path);
        if (this.callback) {
            this.master.addPathDependency(path, this.callback);
        }
    }
    track(cb) {
        this.master.changeTrackStateTree(this);
        this.shouldTrack = true;
        this.clearTracking();
        if (cb) {
            this.callback = (...args) => {
                if (!this.callback) {
                    return;
                }
                cb(...args);
            };
        }
        return this;
    }
    clearTracking() {
        if (this.callback) {
            for (let path of this.pathDependencies) {
                this.master.removePathDependency(path, this.callback);
            }
        }
        this.pathDependencies.clear();
    }
    stopTracking() {
        this.shouldTrack = false;
    }
    trackScope(scope, cb) {
        const previousPreviousTree = this.master.previousTree;
        const previousCurrentTree = this.master.currentTree;
        this.master.currentTree = this;
        this.track(cb);
        const result = scope(this);
        this.master.currentTree = previousCurrentTree;
        this.master.previousTree = previousPreviousTree;
        this.stopTracking();
        return result;
    }
    dispose() {
        if (!this.callback) {
            this.pathDependencies.clear();
            return this;
        }
        this.clearTracking();
        this.callback = null;
        this.proxifier = this.master.proxifier;
        if (this.master.currentTree === this) {
            this.master.currentTree = null;
        }
        return this;
    }
}
//# sourceMappingURL=TrackStateTree.js.map
;// CONCATENATED MODULE: ./node_modules/proxy-state-tree/es/index.js





class ProxyStateTree {
    constructor(state, options = {}) {
        this.cache = {
            mutationTree: [],
            trackStateTree: [],
        };
        this.flushCallbacks = [];
        this.mutationCallbacks = [];
        this.currentFlushId = 0;
        this.pathDependencies = {};
        if (typeof options.devmode === 'undefined') {
            options.devmode = true;
        }
        if (!options.delimiter) {
            options.delimiter = '.';
        }
        this.master = this;
        this.sourceState = state;
        this.options = options;
        this.createTrackStateProxifier();
    }
    /*
      We create a base proxifier for tracking state. That means there is one
      proxifier for all track state trees. This works because the actual tracking
      refers to the current tree on "master"
    */
    createTrackStateProxifier() {
        const trackStateTree = new TrackStateTree(this);
        this.proxifier = trackStateTree.proxifier = new Proxifier(trackStateTree);
        this.state = trackStateTree.state = this.proxifier.proxify(this.sourceState, '');
    }
    getMutationTree() {
        if (!this.options.devmode) {
            return (this.mutationTree =
                this.mutationTree || new MutationTree(this, this.proxifier));
        }
        const tree = this.cache.mutationTree.pop() || new MutationTree(this);
        return tree;
    }
    getTrackStateTree() {
        return this.cache.trackStateTree.pop() || new TrackStateTree(this);
    }
    getTrackStateTreeWithProxifier() {
        const tree = this.getTrackStateTree();
        tree.proxifier = new Proxifier(tree);
        tree.state = tree.proxifier.proxify(this.sourceState, '');
        return tree;
    }
    changeTrackStateTree(tree) {
        this.previousTree = this.currentTree;
        this.currentTree = tree;
    }
    disposeTree(tree) {
        if (tree instanceof MutationTree) {
            this.cache.mutationTree.push(tree.dispose());
        }
        else if (tree instanceof TrackStateTree) {
            this.cache.trackStateTree.push(tree.dispose());
        }
    }
    onMutation(callback) {
        this.mutationCallbacks.push(callback);
        return () => {
            this.mutationCallbacks.splice(this.mutationCallbacks.indexOf(callback), 1);
        };
    }
    forceFlush() {
        const emptyMutations = [];
        const emptyPaths = [];
        for (let key in this.pathDependencies) {
            const callbacks = this.pathDependencies[key];
            callbacks.forEach((callback) => {
                callback(emptyMutations, emptyPaths, this.currentFlushId++, false);
            });
        }
    }
    flush(trees, isAsync = false) {
        let changes;
        if (Array.isArray(trees)) {
            changes = trees.reduce((aggr, tree) => ({
                mutations: aggr.mutations.concat(tree.getMutations()),
                objectChanges: new Set([
                    ...aggr.objectChanges,
                    ...tree.getObjectChanges(),
                ]),
            }), {
                mutations: [],
                objectChanges: new Set(),
            });
        }
        else {
            changes = {
                mutations: trees.getMutations(),
                objectChanges: trees.getObjectChanges(),
            };
        }
        if (!changes.mutations.length && !changes.objectChanges.size) {
            return {
                mutations: [],
                flushId: null,
            };
        }
        const paths = new Set();
        const pathCallbacksToCall = new Set();
        const flushId = this.currentFlushId++;
        for (let objectChange of changes.objectChanges) {
            if (this.pathDependencies[objectChange]) {
                paths.add(objectChange);
            }
        }
        for (let mutation of changes.mutations) {
            if (mutation.hasChangedValue) {
                paths.add(mutation.path);
            }
        }
        // Sort so that parent paths are called first
        const sortedPaths = Array.from(paths).sort();
        for (let path of sortedPaths) {
            if (this.pathDependencies[path]) {
                for (let callback of this.pathDependencies[path]) {
                    pathCallbacksToCall.add(callback);
                }
            }
        }
        for (let callback of pathCallbacksToCall) {
            callback(changes.mutations, sortedPaths, flushId, isAsync);
        }
        // We have to ensure that we iterate all callbacks. One flush might
        // lead to a change of the array (disposing), which means something
        // might be skipped. But we still want to allow removal of callbacks,
        // we just do not want to skip any, which is why we still check if it
        // exists in the original array
        const flushCallbacks = this.flushCallbacks.slice();
        for (let callback of flushCallbacks) {
            if (this.flushCallbacks.includes(callback)) {
                callback(changes.mutations, sortedPaths, flushId, isAsync);
            }
        }
        paths.clear();
        pathCallbacksToCall.clear();
        return {
            mutations: changes.mutations,
            flushId,
        };
    }
    onFlush(callback) {
        this.flushCallbacks.push(callback);
        return () => this.flushCallbacks.splice(this.flushCallbacks.indexOf(callback), 1);
    }
    rescope(value, tree) {
        return value && value[IS_PROXY]
            ? tree.proxifier.proxify(value[VALUE], value[PATH])
            : value;
    }
    addPathDependency(path, callback) {
        if (!this.pathDependencies[path]) {
            this.pathDependencies[path] = new Set();
        }
        this.pathDependencies[path].add(callback);
    }
    removePathDependency(path, callback) {
        this.pathDependencies[path].delete(callback);
        if (!this.pathDependencies[path].size) {
            delete this.pathDependencies[path];
        }
    }
    toJSON() {
        return this.sourceState;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),m=__webpack_require__(418),r=__webpack_require__(840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.1";


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(921);
} else {}


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 774:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ServerStyleSheet": () => /* binding */ Ue,
  "StyleSheetConsumer": () => /* binding */ le,
  "StyleSheetContext": () => /* binding */ ue,
  "StyleSheetManager": () => /* binding */ ye,
  "ThemeConsumer": () => /* binding */ Le,
  "ThemeContext": () => /* binding */ ze,
  "ThemeProvider": () => /* binding */ Ge,
  "__PRIVATE__": () => /* binding */ Ze,
  "createGlobalStyle": () => /* binding */ $e,
  "css": () => /* binding */ Ae,
  "default": () => /* binding */ styled_components_browser_esm,
  "isStyledComponent": () => /* binding */ N,
  "keyframes": () => /* binding */ We,
  "useTheme": () => /* binding */ Xe,
  "version": () => /* binding */ C,
  "withTheme": () => /* binding */ Je
});

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(864);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const stylis_browser_esm = (stylis_min);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const is_prop_valid_browser_esm = (index);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return false||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof {"env":{"NODE_ENV":"development"}}&&({"env":{"NODE_ENV":"development"}}.env.REACT_APP_SC_ATTR||{"env":{"NODE_ENV":"development"}}.env.SC_ATTR)||"data-styled",C="5.2.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof {"env":{"NODE_ENV":"development"}}&&void 0!=={"env":{"NODE_ENV":"development"}}.env.REACT_APP_SC_DISABLE_SPEEDY&&""!=={"env":{"NODE_ENV":"development"}}.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={"env":{"NODE_ENV":"development"}}.env.REACT_APP_SC_DISABLE_SPEEDY&&{"env":{"NODE_ENV":"development"}}.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof {"env":{"NODE_ENV":"development"}}&&void 0!=={"env":{"NODE_ENV":"development"}}.env.SC_DISABLE_SPEEDY&&""!=={"env":{"NODE_ENV":"development"}}.env.SC_DISABLE_SPEEDY?"false"!=={"env":{"NODE_ENV":"development"}}.env.SC_DISABLE_SPEEDY&&{"env":{"NODE_ENV":"development"}}.env.SC_DISABLE_SPEEDY:"production"!=="production"),O={},R= false?0:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):0}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return false&&0,k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.2.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.2.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.2.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(0);else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new stylis_browser_esm(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ae.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react.createContext(),le=ue.Consumer,de=react.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react.useContext)(ue)||he}function me(){return (0,react.useContext)(de)||pe}function ye(e){var t=(0,react.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react.useEffect)((function(){shallowequal_default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react.createElement(ue.Provider,{value:u},react.createElement(de.Provider,{value:l}, false?0:e.children))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return false&&0,Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(S(t[i])?s.push.apply(s,e(t[i],i)):b(t[i])?s.push(be(i)+":",t[i],";"):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitless_browser_esm?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(false){ var n; }},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( true||0)}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var ze=react.createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react.useContext)(ze),n=(0,react.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return true?n:0}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.2.1"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; false&&0;var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,(0,react.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return false&&0, false&&0,i}(i,r,y, false?0:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,is_prop_valid_browser_esm):!N||is_prop_valid_browser_esm(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), false&&(0),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics_cjs_default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=fe(),n=me(),o=(0,react.useContext)(ze),l=(0,react.useRef)(t.allocateGSInstance(a)).current;return false&&0, false&&0,(0,react.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return false&&0,react.memo(l)}function We(e){ false&&0;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ve(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react.forwardRef((function(t,n){var o=(0,react.useContext)(ze),i=e.defaultProps,a=Oe(t,o,i);return false&&0,react.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics_cjs_default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return (0,react.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; false&&0, false&&(0);/* harmony default export */ const styled_components_browser_esm = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL292ZXJtaW5kLXJlYWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL2JldHN5L2VzL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL292ZXJtaW5kL2VzL2ludGVybmFsVHlwZXMuanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvb3Zlcm1pbmQvZXMvZGVyaXZlZC5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvb3Zlcm1pbmQvZXMvcmVoeWRyYXRlLmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL292ZXJtaW5kL2VzL0RldnRvb2xzLmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL292ZXJtaW5kL2VzL3N0YXRlbWFjaGluZS5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vdmVybWluZC9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vdmVybWluZC9lcy9vcGVyYXRvci5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vdmVybWluZC9lcy9wcm94eWZ5RWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vdmVybWluZC9lcy90eXBlcy5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9vdmVybWluZC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9wcm94eS1zdGF0ZS10cmVlL2VzL1Byb3h5Zmllci5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9wcm94eS1zdGF0ZS10cmVlL2VzL011dGF0aW9uVHJlZS5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9wcm94eS1zdGF0ZS10cmVlL2VzL1RyYWNrU3RhdGVUcmVlLmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL3Byb3h5LXN0YXRlLXRyZWUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovL2tlb2RhLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8va2VvZGEvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9rZW9kYS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxrR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7O0FDbkRZOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxHQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDOztBQ3pFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOztBQ3JGOEM7QUFDNkI7QUFDekI7QUFDMEI7QUFDcEQ7QUFDakI7QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCx3REFBd0QsU0FBUztBQUNqRTtBQUNBO0FBQ0E7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QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFzQixzQ0FBc0MsS0FBSyxVQUFVLElBQUksNkJBQTZCLEVBQUUseUJBQXlCLE1BQU0sTUFBbUMsRUFBRSxDQUFLLENBQUMsVUFBTSxJQUFJLGVBQWUsTUFBcUcsRUFBRSxDQUErSCxDQUFDLHNEQUFzRCxJQUFJLHdCQUF3QixzREFBc0QsbUJBQW1CLGtCQUFrQixhQUFhLFdBQVcsOEJBQThCLGtDQUFrQywwSEFBMEgsOEJBQThCLHVDQUF1QyxpQ0FBaUMsTUFBTSx3QkFBd0IsWUFBWSxvRUFBb0UsNkJBQTZCLFVBQVUsdUJBQXVCLG1CQUFlLGFBQWEsSUFBSSxhQUFhLElBQUksc0JBQXNCLFlBQVksc0JBQXNCLFlBQVksaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG1CQUFlLEtBQUssb0JBQW9CLElBQUksd0NBQXdDLFlBQVksR0FBRyxrQkFBa0IsTUFBTSxnQkFBWSxnQkFBZ0IsTUFBTSxvQkFBQyxrQ0FBa0MsTUFBTSxNQUErQyxFQUFFLENBQStJLENBQUMsbUJBQWUsT0FBTyxJQUFJLGNBQWMsR0FBRyxHQUFHLE9BQU8scUNBQUMsNENBQTRDLGVBQWUsT0FBTyxvQkFBQyxLQUFLLEtBQUssNkJBQTZCLE1BQXFHLEVBQUUsQ0FBb08sQ0FBQyxNQUFrRSxHQUFHLENBQXVlLEVBQUUsb0VBQWUsRUFBRSxFQUEyUztBQUM5MnpCIiwiZmlsZSI6Im1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0dmFyIHByb3RvdHlwZTtcblx0cmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIChwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCksIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSkpO1xufTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJpbXBvcnQgeyBFdmVudFR5cGUsIE1PREVfU1NSIH0gZnJvbSAnb3Zlcm1pbmQnO1xuaW1wb3J0ICdwcm94eS1zdGF0ZS10cmVlJztcbmltcG9ydCAqIGFzIHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLCB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCwgdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayB9IGZyb20gJ3NjaGVkdWxlcic7XG5jb25zdCBJU19QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmNvbnN0IElTX1RFU1QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnO1xuY29uc3QgaXNOb2RlID0gIUlTX1RFU1QgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLnRpdGxlICYmIHByb2Nlc3MudGl0bGUuaW5jbHVkZXMoJ25vZGUnKTtcbmZ1bmN0aW9uIGdldEZpYmVyVHlwZShjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LnR5cGUpIHtcbiAgICAgICAgLy8gUmVhY3QubWVtb1xuICAgICAgICByZXR1cm4gZ2V0RmliZXJUeXBlKGNvbXBvbmVudC50eXBlKTtcbiAgICB9XG4gICAgLy8gUmVhY3QuZm9yd2FyZFJlZlxuICAgIHJldHVybiBjb21wb25lbnQucmVuZGVyIHx8IGNvbXBvbmVudDtcbn1cbi8vIEluc3BpcmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9yZW5kZXJlci5qc1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoY29tcG9uZW50KSB7XG4gICAgY29uc3QgdHlwZSA9IGdldEZpYmVyVHlwZShjb21wb25lbnQpO1xuICAgIHJldHVybiAodHlwZS5kaXNwbGF5TmFtZSB8fFxuICAgICAgICB0eXBlLm5hbWUgfHxcbiAgICAgICAgJ0Fub255bW91cycpO1xufVxuZnVuY3Rpb24gdGhyb3dNaXNzaW5nQ29udGV4dEVycm9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIE92ZXJtaW5kIGhvb2sgY291bGQgbm90IGZpbmQgYW4gT3Zlcm1pbmQgaW5zdGFuY2Ugb24gdGhlIGNvbnRleHQgb2YgUmVhY3QuIFBsZWFzZSBtYWtlIHN1cmUgeW91IHVzZSB0aGUgUHJvdmlkZXIgY29tcG9uZW50IGF0IHRoZSB0b3Agb2YgeW91ciBhcHBsaWNhdGlvbiBhbmQgZXhwb3NlIHRoZSBPdmVybWluZCBpbnN0YW5jZSB0aGVyZS4gUGxlYXNlIHJlYWQgbW9yZSBpbiB0aGUgUmVhY3QgZ3VpZGUgb24gdGhlIHdlYnNpdGUnKTtcbn1cbmNvbnN0IGNvbnRleHQgPSByZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbmxldCBuZXh0Q29tcG9uZW50SWQgPSAwO1xuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gY29udGV4dC5Qcm92aWRlcjtcbmZ1bmN0aW9uIHVzZUZvcmNlUmVyZW5kZXIoKSB7XG4gICAgY29uc3QgW3sgZmx1c2hJZCB9LCBzZXRUaWNrXSA9IHJlYWN0LnVzZVN0YXRlKHsgdGljazogMCwgZmx1c2hJZDogMCB9KTtcbiAgICBjb25zdCBmb3JjZVJlcmVuZGVyID0gcmVhY3QudXNlQ2FsbGJhY2soKGZsdXNoSWQpID0+IHtcbiAgICAgICAgc2V0VGljayhjdXJyZW50ID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnQpLCB7IHRpY2s6IGN1cnJlbnQudGljayArIDEsIGZsdXNoSWQ6IGZsdXNoSWQgfHwgY3VycmVudC5mbHVzaElkIH0pKSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZsdXNoSWQsXG4gICAgICAgIGZvcmNlUmVyZW5kZXJcbiAgICB9O1xufVxubGV0IGN1cnJlbnRDb21wb25lbnRJbnN0YW5jZUlkID0gMDtcbmNvbnN0IHsgUmVhY3RDdXJyZW50T3duZXIsIH0gPSByZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbmNvbnN0IHVzZUN1cnJlbnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0Q3VycmVudE93bmVyICYmXG4gICAgICAgIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiZcbiAgICAgICAgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5lbGVtZW50VHlwZVxuICAgICAgICA/IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZWxlbWVudFR5cGVcbiAgICAgICAgOiB7fTtcbn07XG5jb25zdCB1c2VTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBvdmVybWluZCA9IHJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgaWYgKCFvdmVybWluZC5tb2RlKSB7XG4gICAgICAgIHRocm93TWlzc2luZ0NvbnRleHRFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoaXNOb2RlIHx8IG92ZXJtaW5kLm1vZGUubW9kZSA9PT0gTU9ERV9TU1IpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJtaW5kLnN0YXRlO1xuICAgIH1cbiAgICBjb25zdCB0cmFja2luZ1JlZiA9IHJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IGZsdXNoSWQsIGZvcmNlUmVyZW5kZXIgfSA9IHVzZUZvcmNlUmVyZW5kZXIoKTtcbiAgICBpZiAoIXRyYWNraW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdHJhY2tpbmdSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIHRyZWU6IG92ZXJtaW5kLnByb3h5U3RhdGVUcmVlLmdldFRyYWNrU3RhdGVUcmVlKCksXG4gICAgICAgICAgICBoYXNVcGRhdGVkQmVmb3JlQ29tbWl0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0b3BUcmFja2luZ1Rhc2s6IHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2sodW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYWNraW5nUmVmLmN1cnJlbnQudHJlZS5zdG9wVHJhY2tpbmcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgIHJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRyYWNraW5nUmVmLmN1cnJlbnQuaGFzVXBkYXRlZEJlZm9yZUNvbW1pdCkge1xuICAgICAgICAgICAgICAgIGZvcmNlUmVyZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIG92ZXJtaW5kLnByb3h5U3RhdGVUcmVlLmRpc3Bvc2VUcmVlKHRyYWNraW5nUmVmLmN1cnJlbnQudHJlZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHJhY2tpbmdSZWYuY3VycmVudC5zdG9wVHJhY2tpbmdUYXNrKSB7XG4gICAgICAgICAgICAgICAgdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sodHJhY2tpbmdSZWYuY3VycmVudC5zdG9wVHJhY2tpbmdUYXNrKTtcbiAgICAgICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50LnN0b3BUcmFja2luZ1Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJhY2tpbmdSZWYuY3VycmVudC50cmVlLnN0b3BUcmFja2luZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhY2tpbmdSZWYuY3VycmVudC50cmVlLnRyYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVJlcmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50Lmhhc1VwZGF0ZWRCZWZvcmVDb21taXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHVzZUN1cnJlbnRDb21wb25lbnQoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGdldERpc3BsYXlOYW1lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5fX2NvbXBvbmVudElkID1cbiAgICAgICAgICAgIHR5cGVvZiBjb21wb25lbnQuX19jb21wb25lbnRJZCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IG5leHRDb21wb25lbnRJZCsrXG4gICAgICAgICAgICAgICAgOiBjb21wb25lbnQuX19jb21wb25lbnRJZDtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb21wb25lbnRJbnN0YW5jZUlkIH0gPSByZWFjdC51c2VSZWYoY3VycmVudENvbXBvbmVudEluc3RhbmNlSWQrKyk7XG4gICAgICAgIHJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgb3Zlcm1pbmQuZXZlbnRIdWIuZW1pdEFzeW5jKEV2ZW50VHlwZS5DT01QT05FTlRfQURELCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50SWQ6IGNvbXBvbmVudC5fX2NvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYXRoczogQXJyYXkuZnJvbSh0cmFja2luZ1JlZi5jdXJyZW50LnRyZWUucGF0aERlcGVuZGVuY2llcyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0cmFja2luZ1JlZi5jdXJyZW50Lmhhc1VwZGF0ZWRCZWZvcmVDb21taXQpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVJlcmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBvdmVybWluZC5wcm94eVN0YXRlVHJlZS5kaXNwb3NlVHJlZSh0cmFja2luZ1JlZi5jdXJyZW50LnRyZWUpO1xuICAgICAgICAgICAgICAgIG92ZXJtaW5kLmV2ZW50SHViLmVtaXRBc3luYyhFdmVudFR5cGUuQ09NUE9ORU5UX1JFTU9WRSwge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZDogY29tcG9uZW50Ll9fY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHJhY2tpbmdSZWYuY3VycmVudC5zdG9wVHJhY2tpbmdUYXNrKSB7XG4gICAgICAgICAgICAgICAgdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sodHJhY2tpbmdSZWYuY3VycmVudC5zdG9wVHJhY2tpbmdUYXNrKTtcbiAgICAgICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50LnN0b3BUcmFja2luZ1Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJhY2tpbmdSZWYuY3VycmVudC50cmVlLnN0b3BUcmFja2luZygpO1xuICAgICAgICAgICAgb3Zlcm1pbmQuZXZlbnRIdWIuZW1pdEFzeW5jKEV2ZW50VHlwZS5DT01QT05FTlRfVVBEQVRFLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50SWQ6IGNvbXBvbmVudC5fX2NvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBmbHVzaElkLFxuICAgICAgICAgICAgICAgIHBhdGhzOiBBcnJheS5mcm9tKHRyYWNraW5nUmVmLmN1cnJlbnQudHJlZS5wYXRoRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhY2tpbmdSZWYuY3VycmVudC50cmVlLnRyYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVJlcmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFja2luZ1JlZi5jdXJyZW50Lmhhc1VwZGF0ZWRCZWZvcmVDb21taXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5nUmVmLmN1cnJlbnQudHJlZS5zdGF0ZTtcbn07XG5jb25zdCB1c2VBY3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJtaW5kID0gcmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBpZiAoIW92ZXJtaW5kLm1vZGUpIHtcbiAgICAgICAgdGhyb3dNaXNzaW5nQ29udGV4dEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBvdmVybWluZC5hY3Rpb25zO1xufTtcbmNvbnN0IHVzZUVmZmVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Zlcm1pbmQgPSByZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmICghb3Zlcm1pbmQubW9kZSkge1xuICAgICAgICB0aHJvd01pc3NpbmdDb250ZXh0RXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIG92ZXJtaW5kLmVmZmVjdHM7XG59O1xuY29uc3QgdXNlUmVhY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Zlcm1pbmQgPSByZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmICghb3Zlcm1pbmQubW9kZSkge1xuICAgICAgICB0aHJvd01pc3NpbmdDb250ZXh0RXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIG92ZXJtaW5kLnJlYWN0aW9uO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVTdGF0ZUhvb2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZVN0YXRlO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVBY3Rpb25zSG9vayA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQWN0aW9ucztcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRWZmZWN0c0hvb2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUVmZmVjdHM7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlYWN0aW9uSG9vayA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlUmVhY3Rpb247XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhvb2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB1c2VTdGF0ZSgpO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xuICAgICAgICBjb25zdCBlZmZlY3RzID0gdXNlRWZmZWN0cygpO1xuICAgICAgICBjb25zdCBvdmVybWluZCA9IHJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3RzLFxuICAgICAgICAgICAgcmVhY3Rpb246IG92ZXJtaW5kLnJlYWN0aW9uLFxuICAgICAgICAgICAgYWRkTXV0YXRpb25MaXN0ZW5lcjogb3Zlcm1pbmQuYWRkTXV0YXRpb25MaXN0ZW5lclxuICAgICAgICB9O1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbm5lY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChjb21wb25lbnQpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudEluc3RhbmNlSWQgPSAwO1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5uYW1lIHx8ICdBbm9ueW1vdXMnO1xuICAgICAgICBjb25zdCBwb3B1bGF0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHBvcHVsYXRlZENvbXBvbmVudC5fX2NvbXBvbmVudElkID1cbiAgICAgICAgICAgIHR5cGVvZiBwb3B1bGF0ZWRDb21wb25lbnQuX19jb21wb25lbnRJZCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IG5leHRDb21wb25lbnRJZCsrXG4gICAgICAgICAgICAgICAgOiBwb3B1bGF0ZWRDb21wb25lbnQuX19jb21wb25lbnRJZDtcbiAgICAgICAgY29uc3QgaXNDbGFzc0NvbXBvbmVudCA9IGNvbXBvbmVudC5wcm90b3R5cGUgJiYgdHlwZW9mIGNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBpZiAoaXNDbGFzc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcjtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm92ZXJtaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLm92ZXJtaW5kLnRyZWUudHJhY2tTY29wZSgoKSA9PiBvcmlnaW5hbFJlbmRlci5jYWxsKHRoaXMpLCB0aGlzLnByb3BzLm92ZXJtaW5kLm9uVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgICAgICBjbGFzcyBIT0MgZXh0ZW5kcyByZWFjdC5Db21wb25lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJtaW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnRyZWUuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IHRoaXMub3Zlcm1pbmQuZWZmZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy5vdmVybWluZC5hY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRNdXRhdGlvbkxpc3RlbmVyOiB0aGlzLm92ZXJtaW5kLmFkZE11dGF0aW9uTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlOiB0aGlzLnRyZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uOiB0aGlzLm92ZXJtaW5kLnJlYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd01pc3NpbmdDb250ZXh0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJtaW5kID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlID0gdGhpcy5vdmVybWluZC5wcm94eVN0YXRlVHJlZS5nZXRUcmFja1N0YXRlVHJlZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1pbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy50cmVlLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IHRoaXMub3Zlcm1pbmQuZWZmZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLm92ZXJtaW5kLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTXV0YXRpb25MaXN0ZW5lcjogdGhpcy5vdmVybWluZC5hZGRNdXRhdGlvbkxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWU6IHRoaXMudHJlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbjogdGhpcy5vdmVybWluZC5yZWFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlZENvbXBvbmVudCA9ICguLi5hcmdzKSA9PiB0aGlzLnRyZWUudHJhY2tTY29wZSgoKSA9PiBjb21wb25lbnQoLi4uYXJncyksIHRoaXMub25VcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybWluZC5wcm94eVN0YXRlVHJlZS5kaXNwb3NlVHJlZSh0aGlzLnRyZWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIHsgb3Zlcm1pbmQ6IHRoaXMuc3RhdGUub3Zlcm1pbmQgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMud3JhcHBlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgeyBvdmVybWluZDogdGhpcy5zdGF0ZS5vdmVybWluZCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSE9DLmNvbnRleHRUeXBlID0gY29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiBIT0M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzcyBIT0MgZXh0ZW5kcyByZWFjdC5Db21wb25lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZUlkID0gY29tcG9uZW50SW5zdGFuY2VJZCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGbHVzaElkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSA9IChtdXRhdG9ucywgcGF0aHMsIGZsdXNoSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZsdXNoSWQgPSBmbHVzaElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJtaW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnRyZWUuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IHRoaXMub3Zlcm1pbmQuZWZmZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy5vdmVybWluZC5hY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRNdXRhdGlvbkxpc3RlbmVyOiB0aGlzLm92ZXJtaW5kLmFkZE11dGF0aW9uTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlOiB0aGlzLnRyZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uOiB0aGlzLm92ZXJtaW5kLnJlYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd01pc3NpbmdDb250ZXh0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJtaW5kID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlID0gdGhpcy5vdmVybWluZC5wcm94eVN0YXRlVHJlZS5nZXRUcmFja1N0YXRlVHJlZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1pbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy50cmVlLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IHRoaXMub3Zlcm1pbmQuZWZmZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLm92ZXJtaW5kLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTXV0YXRpb25MaXN0ZW5lcjogdGhpcy5vdmVybWluZC5hZGRNdXRhdGlvbkxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWU6IHRoaXMudHJlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbjogdGhpcy5vdmVybWluZC5yZWFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlZENvbXBvbmVudCA9ICguLi5hcmdzKSA9PiB0aGlzLnRyZWUudHJhY2tTY29wZSgoKSA9PiBjb21wb25lbnQoLi4uYXJncyksIHRoaXMub25VcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybWluZC5ldmVudEh1Yi5lbWl0QXN5bmMoRXZlbnRUeXBlLkNPTVBPTkVOVF9BREQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudElkOiBwb3B1bGF0ZWRDb21wb25lbnQuX19jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSWQ6IHRoaXMuY29tcG9uZW50SW5zdGFuY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoczogQXJyYXkuZnJvbSh0aGlzLnRyZWUucGF0aERlcGVuZGVuY2llcyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVXBkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Zlcm1pbmQuZXZlbnRIdWIuZW1pdEFzeW5jKEV2ZW50VHlwZS5DT01QT05FTlRfVVBEQVRFLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50SWQ6IHBvcHVsYXRlZENvbXBvbmVudC5fX2NvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSWQ6IHRoaXMuY29tcG9uZW50SW5zdGFuY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdXNoSWQ6IHRoaXMuY3VycmVudEZsdXNoSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHM6IEFycmF5LmZyb20odGhpcy50cmVlLnBhdGhEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybWluZC5wcm94eVN0YXRlVHJlZS5kaXNwb3NlVHJlZSh0aGlzLnRyZWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJtaW5kLmV2ZW50SHViLmVtaXRBc3luYyhFdmVudFR5cGUuQ09NUE9ORU5UX1JFTU9WRSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50SWQ6IHBvcHVsYXRlZENvbXBvbmVudC5fX2NvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50SW5zdGFuY2VJZDogdGhpcy5jb21wb25lbnRJbnN0YW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgeyBvdmVybWluZDogdGhpcy5zdGF0ZS5vdmVybWluZCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy53cmFwcGVkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCB7IG92ZXJtaW5kOiB0aGlzLnN0YXRlLm92ZXJtaW5kIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBIT0MuY29udGV4dFR5cGUgPSBjb250ZXh0O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSE9DLCB7XG4gICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0Nvbm5lY3QnICsgbmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSE9DO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldmVudCwgbXNnKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICAgICAgICBsaXN0ZW5lci5jYihtc2cpO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXRBc3luYyA9IGZ1bmN0aW9uIChldmVudCwgbXNnKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpIHx8IFtdO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2IobXNnKTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKGV2ZW50LCBjYiwgZmFsc2UpO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKGV2ZW50LCBjYiwgdHJ1ZSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBjYiwgb25jZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50KSB8fCBbXTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgb25jZTogb25jZSxcbiAgICAgICAgICAgIGNiOiBjYixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudCwgbGlzdGVuZXJzKTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIEV2ZW50VHlwZTtcbihmdW5jdGlvbiAoRXZlbnRUeXBlKSB7XG4gICAgRXZlbnRUeXBlW1wiQUNUSU9OX1NUQVJUXCJdID0gXCJhY3Rpb246c3RhcnRcIjtcbiAgICBFdmVudFR5cGVbXCJBQ1RJT05fRU5EXCJdID0gXCJhY3Rpb246ZW5kXCI7XG4gICAgRXZlbnRUeXBlW1wiT1BFUkFUT1JfU1RBUlRcIl0gPSBcIm9wZXJhdG9yOnN0YXJ0XCI7XG4gICAgRXZlbnRUeXBlW1wiT1BFUkFUT1JfRU5EXCJdID0gXCJvcGVyYXRvcjplbmRcIjtcbiAgICBFdmVudFR5cGVbXCJPUEVSQVRPUl9BU1lOQ1wiXSA9IFwib3BlcmF0b3I6YXN5bmNcIjtcbiAgICBFdmVudFR5cGVbXCJNVVRBVElPTlNcIl0gPSBcIm11dGF0aW9uc1wiO1xuICAgIEV2ZW50VHlwZVtcIkVGRkVDVFwiXSA9IFwiZWZmZWN0XCI7XG4gICAgRXZlbnRUeXBlW1wiREVSSVZFRFwiXSA9IFwiZGVyaXZlZFwiO1xuICAgIEV2ZW50VHlwZVtcIkRFUklWRURfRElSVFlcIl0gPSBcImRlcml2ZWQ6ZGlydHlcIjtcbiAgICBFdmVudFR5cGVbXCJDT01QT05FTlRfQUREXCJdID0gXCJjb21wb25lbnQ6YWRkXCI7XG4gICAgRXZlbnRUeXBlW1wiQ09NUE9ORU5UX1VQREFURVwiXSA9IFwiY29tcG9uZW50OnVwZGF0ZVwiO1xuICAgIEV2ZW50VHlwZVtcIkNPTVBPTkVOVF9SRU1PVkVcIl0gPSBcImNvbXBvbmVudDpyZW1vdmVcIjtcbiAgICBFdmVudFR5cGVbXCJHRVRURVJcIl0gPSBcImdldHRlclwiO1xufSkoRXZlbnRUeXBlIHx8IChFdmVudFR5cGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJuYWxUeXBlcy5qcy5tYXAiLCJpbXBvcnQgeyBJU19QUk9YWSwgVHJhY2tTdGF0ZVRyZWUsIH0gZnJvbSAncHJveHktc3RhdGUtdHJlZSc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuL2ludGVybmFsVHlwZXMnO1xuZXhwb3J0IGNvbnN0IElTX0RFUklWRUQgPSBTeW1ib2woJ0lTX0RFUklWRUQnKTtcbmV4cG9ydCBjb25zdCBJU19ERVJJVkVEX0NPTlNUUlVDVE9SID0gU3ltYm9sKCdJU19ERVJJVkVEX0NPTlNUUlVDVE9SJyk7XG5leHBvcnQgY2xhc3MgRGVyaXZlZCB7XG4gICAgY29uc3RydWN0b3IoY2IpIHtcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgYm91bmRFdmFsdWF0ZSA9IHRoaXMuZXZhbHVhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICBib3VuZEV2YWx1YXRlLmRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlT25NdXRhdGlvbigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBib3VuZEV2YWx1YXRlW0lTX0RFUklWRURdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGJvdW5kRXZhbHVhdGU7XG4gICAgfVxuICAgIHJ1blNjb3BlKHRyZWUsIHBhdGgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcGF0aC5zbGljZSgwLCBwYXRoLmxlbmd0aCAtIDEpLnJlZHVjZSgoY3Vyciwga2V5KSA9PiBjdXJyW2tleV0sIHRyZWUuc3RhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5jYihwYXJlbnQsIHRyZWUuc3RhdGUpO1xuICAgIH1cbiAgICBldmFsdWF0ZShldmVudEh1YiwgdHJlZSwgcHJveHlTdGF0ZVRyZWUsIHBhdGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc3Bvc2VPbk11dGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2VPbk11dGF0aW9uID0gcHJveHlTdGF0ZVRyZWUub25NdXRhdGlvbigoXywgcGF0aHMsIGZsdXNoSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhdGgucmVkdWNlKChhZ2dyLCBrZXkpID0+IGFnZ3IgJiYgYWdncltrZXldLCBwcm94eVN0YXRlVHJlZS5zb3VyY2VTdGF0ZSkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlT25NdXRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtdXRhdGlvblBhdGggb2YgcGF0aHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aHMuaGFzKG11dGF0aW9uUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEh1Yi5lbWl0QXN5bmMoRXZlbnRUeXBlLkRFUklWRURfRElSVFksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdmVkUGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBtdXRhdGlvblBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1c2hJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHVyaW5nIGRldmVsb3BtZW50IHdlIG5lZWQgdG8gbW92ZSB0aGUgb3duZXJzaGlwIG9mIHdoYXRldmVyIHN0YXRlIGlzIHJldHVybmVkIGZyb21cbiAgICAgICAgLy8gdGhlIGRlcml2ZWQgdG8gdHJhY2sgaXQgY29ycmVjdGx5LiBJbiBwcm9kdWN0aW9uIHdlIG9ubHkgaGF2ZSBvbmUgcHJveGlmaWVyLCBzbyBubyB3b3JyaWVzXG4gICAgICAgIGlmICh0aGlzLmlzRGlydHkgfHwgdGhpcy5wcmV2aW91c1Byb3hpZmllciAhPT0gdHJlZS5wcm94aWZpZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGdldFBhdGhzID0gdHJlZS50cmFja1BhdGhzKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5ydW5TY29wZSh0cmVlLCBwYXRoKTtcbiAgICAgICAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wYXRocyA9IGdldFBhdGhzKCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudEh1Yi5lbWl0QXN5bmMoRXZlbnRUeXBlLkRFUklWRUQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aHM6IEFycmF5LmZyb20odGhpcy5wYXRocyksXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50OiB0aGlzLnVwZGF0ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyZWUgaW5zdGFuY2VvZiBUcmFja1N0YXRlVHJlZSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYWNjZXNzIGEgY2FjaGVkIHZhbHVlIHdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgd2UgbW92ZVxuICAgICAgICAgICAgLy8gdGhlIHRyYWNrZWQgcGF0aHMgaW50byB0aGUgdHJlZSBsb29raW5nIGF0IGl0LCB3aGVyZVxuICAgICAgICAgICAgLy8gYWRkVHJhY2tpbmdQYXRoIGlzIGZvciBpbml0aWFsIHRyZWUgYW5kIFwidHJhY2tQYXRoTGlzdGVuZXJzXCJcbiAgICAgICAgICAgIC8vIGlzIGZvciBuZXN0ZWQgZGVyaXZlZFxuICAgICAgICAgICAgZm9yIChsZXQgcGF0aCBvZiB0aGlzLnBhdGhzKSB7XG4gICAgICAgICAgICAgICAgdHJlZS5hZGRUcmFja2luZ1BhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgdHJlZS50cmFja1BhdGhMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+IGNiKHBhdGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzUHJveGlmaWVyID0gdHJlZS5wcm94aWZpZXI7XG4gICAgICAgIC8vIFRoaXMgdmFsdWUgbWlnaHQgYmUgYSBwcm94eSwgd2UgbmVlZCB0byByZXNjb3BlXG4gICAgICAgIC8vIGl0IHRvIHRoZSBjdXJyZW50IHRyZWUgbG9va2luZ1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlW0lTX1BST1hZXSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5U3RhdGVUcmVlLnJlc2NvcGUodGhpcy52YWx1ZSwgdHJlZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVyaXZlZC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlU3RhdGUodGFyZ2V0LCBzb3VyY2UsIGNsYXNzZXMgPSB7fSkge1xuICAgIGlmICghdGFyZ2V0IHx8ICFzb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIGEgXCJ0YXJnZXRcIiBhbmQgXCJzb3VyY2VcIiBvYmplY3QgdG8gcmVoeWRyYXRlYCk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgIGNvbnN0IGNsYXNzSW5zdGFuY2UgPSBjbGFzc2VzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NJbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XS5tYXAodmFsdWUgPT4gY2xhc3NJbnN0YW5jZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjbGFzc0luc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwgJiYgdGFyZ2V0W2tleV0uY29uc3RydWN0b3IubmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gT2JqZWN0LmtleXMoc291cmNlW2tleV0pLnJlZHVjZSgoYWdnciwgc3ViS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgYWdncltzdWJLZXldID0gY2xhc3NJbnN0YW5jZShzb3VyY2Vba2V5XVtzdWJLZXldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWdncjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2xhc3NJbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBjbGFzc0luc3RhbmNlKHNvdXJjZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSlcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgICAgcmVoeWRyYXRlU3RhdGUodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBjbGFzc2VzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFNFUklBTElaRSA9IFN5bWJvbCgnU0VSSUFMSVpFJyk7XG5leHBvcnQgY29uc3QgcmVoeWRyYXRlID0gKHN0YXRlLCBzb3VyY2UsIGNsYXNzZXMgPSB7fSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgY29uc3QgbXV0YXRpb25zID0gc291cmNlO1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IG11dGF0aW9uLnBhdGguc3BsaXQobXV0YXRpb24uZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhdGhBcnJheS5wb3AoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHBhdGhBcnJheS5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4gYWdncltrZXldLCBzdGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0luc3RhbmNlID0gcGF0aEFycmF5LnJlZHVjZSgoYWdnciwga2V5KSA9PiBhZ2dyICYmIGFnZ3Jba2V5XSwgY2xhc3Nlcyk7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24ubWV0aG9kID09PSAnc2V0Jykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NJbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiBBcnJheS5pc0FycmF5KG11dGF0aW9uLmFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gbXV0YXRpb24uYXJnc1swXS5tYXAoKGFyZykgPT4gY2xhc3NJbnN0YW5jZShhcmcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNsYXNzSW5zdGFuY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBjbGFzc0luc3RhbmNlKG11dGF0aW9uLmFyZ3NbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBtdXRhdGlvbi5hcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG11dGF0aW9uLm1ldGhvZCA9PT0gJ3Vuc2V0Jykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldW211dGF0aW9uLm1ldGhvZF0uYXBwbHkodGFyZ2V0W2tleV0sIHR5cGVvZiBjbGFzc0luc3RhbmNlID09PSAnZnVuY3Rpb24nID8gbXV0YXRpb24uYXJncy5tYXAoKGFyZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsID8gY2xhc3NJbnN0YW5jZShhcmcpIDogYXJnO1xuICAgICAgICAgICAgICAgIH0pIDogbXV0YXRpb24uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVoeWRyYXRlU3RhdGUoc3RhdGUsIHNvdXJjZSwgY2xhc3Nlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlaHlkcmF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFNFUklBTElaRSB9IGZyb20gJy4vcmVoeWRyYXRlJztcbmV4cG9ydCBjbGFzcyBEZXZ0b29scyB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLnNhZmVDbGFzc05hbWVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnVuc2FmZUNsYXNzTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuY2lyY3VsYXJSZWZlcmVuY2VDYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXIgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzV2FybmVkUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVjb25uZWN0SW50ZXJ2YWwgPSAxMDAwMDtcbiAgICAgICAgdGhpcy5jb25uZWN0ID0gKGhvc3QsIG9uTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgaG9zdCA9IGhvc3QgfHwgJ2xvY2FsaG9zdDozMDMxJztcbiAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7aG9zdH0/bmFtZT0ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYXBwTmFtZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25NZXNzYWdlKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmx1c2hCdWZmZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgT1ZFUk1JTkQgREVWVE9PTFM6IE5vdCBhYmxlIHRvIGNvbm5lY3QuIFlvdSBhcmUgdHJ5aW5nIHRvIGNvbm5lY3QgdG8gXCIke2hvc3R9XCIsIGJ1dCB0aGVyZSB3YXMgbm8gZGV2dG9vbCB0aGVyZS4gVHJ5IHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIFxuICAgICAgICAgIC0gTWFrZSBzdXJlIHlvdSBhcmUgcnVubmluZyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRldnRvb2xzLCB1c2luZyBcIm5weCBvdmVybWluZC1kZXZ0b29sc0BsYXRlc3RcIiBvciBpbnN0YWxsIGxhdGVzdCBleHRlbnNpb24gZm9yIFZTQ29kZVxuICAgICAgICAgIC0gQ2xvc2UgdGhlIGN1cnJlbnQgdGFiIGFuZCBvcGVuIGEgbmV3IG9uZVxuICAgICAgICAgIC0gTWFrZSBzdXJlIHRoZSBjb3JyZWN0IHBvcnQgaXMgY29uZmlndXJlZCBpbiB0aGUgZGV2dG9vbHNcbiAgICAgICAgYCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb1JlY29ubmVjdCAmJiAhdGhpcy5oYXNXYXJuZWRSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZWJ1Z2dlciBhcHBsaWNhdGlvbiBpcyBub3QgcnVubmluZyBvbiBzZWxlY3RlZCBwb3J0Li4uIHdpbGwgcmVjb25uZWN0IGF1dG9tYXRpY2FsbHkgYmVoaW5kIHRoZSBzY2VuZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNXYXJuZWRSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb1JlY29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdChob3N0LCBvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYHtcImFwcE5hbWVcIjpcIiR7dGhpcy5uYW1lfVwiLFwibWVzc2FnZVwiOiR7cGF5bG9hZH19YCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmx1c2hCdWZmZXIgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5mb3JFYWNoKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5idWZmZXIubGVuZ3RoID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZSA9IHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdPVkVSTUlORF9ERVZUT09MJykgPyBuYW1lICsgJyAoT3Zlcm1pbmQgRGV2dG9vbCknIDogbmFtZTtcbiAgICB9XG4gICAgcmVjb25uZWN0KGhvc3QsIG9uTWVzc2FnZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29ubmVjdChob3N0LCBvbk1lc3NhZ2UpLCB0aGlzLnJlY29ubmVjdEludGVydmFsKTtcbiAgICB9XG4gICAgc2VuZChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IHNhZmVDbGFzc05hbWVzID0gdGhpcy5zYWZlQ2xhc3NOYW1lcztcbiAgICAgICAgY29uc3QgdW5zYWZlQ2xhc3NOYW1lcyA9IHRoaXMudW5zYWZlQ2xhc3NOYW1lcztcbiAgICAgICAgY29uc3QgY2lyY3VsYXJSZWZlcmVuY2VDYWNoZSA9IHRoaXMuY2lyY3VsYXJSZWZlcmVuY2VDYWNoZTtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlLCBmdW5jdGlvbiAoXywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbl0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19DTEFTU19fKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW1NFUklBTElaRV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX0NMQVNTX186IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNpcmN1bGFyUmVmZXJlbmNlQ2FjaGUuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgW0NJUkNVTEFSIFJFRkVSRU5DRTogJHt2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lfV1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaXJjdWxhclJlZmVyZW5jZUNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghc2FmZUNsYXNzTmFtZXMuaGFzKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpICYmICF1bnNhZmVDbGFzc05hbWVzLmhhcyh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZUNsYXNzTmFtZXMuYWRkKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlQ2xhc3NOYW1lcy5hZGQodmFsdWUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNhZmVDbGFzc05hbWVzLmhhcyh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19DTEFTU19fOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdmFsdWUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske3ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ05PVCBTRVJJQUxJWkFCTEUnfV1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjaXJjdWxhclJlZmVyZW5jZUNhY2hlLmxlbmd0aCA9IDA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGV2dG9vbHMuanMubWFwIiwidmFyIF9hO1xuaW1wb3J0IHsgUEFUSCwgUFJPWFlfVFJFRSwgVkFMVUUgfSBmcm9tICdwcm94eS1zdGF0ZS10cmVlJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnLi91dGlscyc7XG5jb25zdCBJTklUSUFMX1NUQVRFID0gU3ltYm9sKCdJTklUSUFMX1NUQVRFJyk7XG5jb25zdCBUUkFOU0lUSU9OUyA9IFN5bWJvbCgnVFJBTlNJVElPTlMnKTtcbmNvbnN0IFNUQVRFID0gU3ltYm9sKCdTVEFURScpO1xuY29uc3QgSVNfRElTUE9TRUQgPSBTeW1ib2woJ0lTX0RJU1BPU0VEJyk7XG5jb25zdCBDVVJSRU5UX0tFWVMgPSBTeW1ib2woJ0NVUlJFTlRfS0VZUycpO1xuY29uc3QgQkFTRV9TVEFURSA9IFN5bWJvbCgnQkFTRV9TVEFURScpO1xuZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZSB7XG4gICAgY29uc3RydWN0b3IodHJhbnNpdGlvbnMsIHN0YXRlLCBiYXNlU3RhdGUpIHtcbiAgICAgICAgdGhpc1tfYV0gPSBmYWxzZTtcbiAgICAgICAgdGhpc1tTVEFURV0gPSBzdGF0ZTtcbiAgICAgICAgdGhpc1tCQVNFX1NUQVRFXSA9IGJhc2VTdGF0ZTtcbiAgICAgICAgdGhpc1tJTklUSUFMX1NUQVRFXSA9IHN0YXRlLmN1cnJlbnQ7XG4gICAgICAgIHRoaXNbQkFTRV9TVEFURV0gPSBiYXNlU3RhdGU7XG4gICAgICAgIHRoaXNbVFJBTlNJVElPTlNdID0gdHJhbnNpdGlvbnM7XG4gICAgICAgIHRoaXNbQ1VSUkVOVF9LRVlTXSA9IE9iamVjdC5rZXlzKHN0YXRlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSwgYmFzZVN0YXRlKTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RhdGVNYWNoaW5lKHRoaXNbVFJBTlNJVElPTlNdLCBkZWVwQ29weSh0aGlzW1NUQVRFXSksIGRlZXBDb3B5KHRoaXNbQkFTRV9TVEFURV0pKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpc1tWQUxVRV0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXNbVkFMVUVdW2tleV0gaW5zdGFuY2VvZiBTdGF0ZU1hY2hpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpc1tWQUxVRV1bSVNfRElTUE9TRURdID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VuZCh0eXBlLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzW1ZBTFVFXVtJU19ESVNQT1NFRF0pIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgT3Zlcm1pbmQgLSBUaGUgc3RhdGVtYWNoaW5lIGF0IFwiJHt0aGlzW1BBVEhdfVwiIGhhcyBiZWVuIGRpc3Bvc2VkLCBidXQgeW91IHRyaWVkIHRvIHRyYW5zaXRpb24gb24gaXRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyZWUgPSAodGhpc1tQUk9YWV9UUkVFXS5tYXN0ZXIubXV0YXRpb25UcmVlIHx8IHRoaXNbUFJPWFlfVFJFRV0pO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpc1tWQUxVRV1bVFJBTlNJVElPTlNdW3R5cGVdO1xuICAgICAgICB0cmVlLmVuYWJsZU11dGF0aW9ucygpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cmFuc2l0aW9uKHRoaXMsIGRhdGEpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzW1ZBTFVFXVtDVVJSRU5UX0tFWVNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdjdXJyZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpc1tWQUxVRV1bQ1VSUkVOVF9LRVlTXSA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJlZS5ibG9ja011dGF0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbWF0Y2hlcyhzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5fYSA9IElTX0RJU1BPU0VEO1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWFjaGluZSh0cmFuc2l0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZShzdGF0ZSwgYmFzZVN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0YXRlTWFjaGluZSh0cmFuc2l0aW9ucywgc3RhdGUsIGJhc2VTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGVtYWNoaW5lLmpzLm1hcCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQgeyBJU19QUk9YWSwgVkFMVUUgfSBmcm9tICdwcm94eS1zdGF0ZS10cmVlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4vc3RhdGVtYWNoaW5lJztcbmV4cG9ydCBjb25zdCBJU19URVNUID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcbmV4cG9ydCBjb25zdCBJU19PUEVSQVRPUiA9IFN5bWJvbCgnb3BlcmF0b3InKTtcbmV4cG9ydCBjb25zdCBPUklHSU5BTF9BQ1RJT05TID0gU3ltYm9sKCdvcmlnaW5hX2FjdGlvbnMnKTtcbmV4cG9ydCBjb25zdCBFWEVDVVRJT04gPSBTeW1ib2woJ2V4ZWN1dGlvbicpO1xuZXhwb3J0IGNvbnN0IE1PREVfREVGQVVMVCA9IFN5bWJvbCgnTU9ERV9ERUZBVUxUJyk7XG5leHBvcnQgY29uc3QgTU9ERV9URVNUID0gU3ltYm9sKCdNT0RFX1RFU1QnKTtcbmV4cG9ydCBjb25zdCBNT0RFX1NTUiA9IFN5bWJvbCgnTU9ERV9TU1InKTtcbmV4cG9ydCBjbGFzcyBNb2NrZWRFdmVudEVtaXR0ZXIge1xuICAgIGVtaXQoKSB7IH1cbiAgICBlbWl0QXN5bmMoKSB7IH1cbiAgICBvbigpIHsgfVxuICAgIG9uY2UoKSB7IH1cbiAgICBhZGRMaXN0ZW5lcigpIHsgfVxufVxuZXhwb3J0IGNvbnN0IGpzb24gPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIGRlZXBDb3B5KG9iaiAmJiBvYmpbSVNfUFJPWFldID8gb2JqW1ZBTFVFXSA6IG9iaik7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZShtYXliZVByb21pc2UpIHtcbiAgICByZXR1cm4gKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgfHxcbiAgICAgICAgKG1heWJlUHJvbWlzZSAmJlxuICAgICAgICAgICAgdHlwZW9mIG1heWJlUHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICB0eXBlb2YgbWF5YmVQcm9taXNlLmNhdGNoID09PSAnZnVuY3Rpb24nKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgICAgICAgIHJldHVybiBhZ2dyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIGtleSk7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgJ2dldCcgaW4gb3JpZ2luYWxEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWdnciwga2V5LCBvcmlnaW5hbERlc2NyaXB0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIGFnZ3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGFnZ3Jba2V5XSA9IHByb2Nlc3NTdGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWdnciwga2V5LCBvcmlnaW5hbERlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZ2dyO1xuICAgIH0sIGlzUGxhaW5PYmplY3Qoc3RhdGUpID8ge30gOiBzdGF0ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lIHx8IGZ1bmMuZGlzcGxheU5hbWUgfHwgJyc7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFN0YXRlTWFjaGluZSkge1xuICAgICAgICByZXR1cm4gb2JqLmNsb25lKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFnZ3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQUdldHRlciA9IG9yaWdpbmFsRGVzY3JpcHRvciAmJiAnZ2V0JyBpbiBvcmlnaW5hbERlc2NyaXB0b3I7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKGlzQUdldHRlcikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhZ2dyLCBrZXksIG9yaWdpbmFsRGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZ2dyW2tleV0gPSBkZWVwQ29weSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWdncjtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IGRlZXBDb3B5KGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmNvbnN0IGdldENoYW5nZU11dGF0aW9uc0RlbGltaXRlciA9ICcuJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFuZ2VNdXRhdGlvbnMoc3RhdGVBLCBzdGF0ZUIsIHBhdGggPSBbXSwgbXV0YXRpb25zID0gW10pIHtcbiAgICBjb25zdCBzdGF0ZUFLZXlzID0gT2JqZWN0LmtleXMoc3RhdGVBKTtcbiAgICBjb25zdCBzdGF0ZUJLZXlzID0gT2JqZWN0LmtleXMoc3RhdGVCKTtcbiAgICBzdGF0ZUFLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlQktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgbXV0YXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGRlbGltaXRlcjogZ2V0Q2hhbmdlTXV0YXRpb25zRGVsaW1pdGVyLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGguY29uY2F0KGtleSkuam9pbignLicpLFxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWRWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAndW5zZXQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzdGF0ZUJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzdGF0ZUFba2V5XSkgJiYgaXNQbGFpbk9iamVjdChzdGF0ZUJba2V5XSkpIHtcbiAgICAgICAgICAgIGdldENoYW5nZU11dGF0aW9ucyhzdGF0ZUFba2V5XSwgc3RhdGVCW2tleV0sIHBhdGguY29uY2F0KGtleSksIG11dGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGVBW2tleV0gIT09IHN0YXRlQltrZXldKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBnZXRDaGFuZ2VNdXRhdGlvbnNEZWxpbWl0ZXIsXG4gICAgICAgICAgICAgICAgYXJnczogW3N0YXRlQltrZXldXSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLmNvbmNhdChrZXkpLmpvaW4oJy4nKSxcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3NldCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG11dGF0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25QYXRocyhhY3Rpb25zID0ge30sIGN1cnJlbnRQYXRoID0gW10pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWN0aW9ucykucmVkdWNlKChhZ2dyLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25zW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhZ2dyLmNvbmNhdChjdXJyZW50UGF0aC5jb25jYXQoa2V5KS5qb2luKCcuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZ2dyLmNvbmNhdChnZXRBY3Rpb25QYXRocyhhY3Rpb25zW2tleV0sIGN1cnJlbnRQYXRoLmNvbmNhdChrZXkpKSk7XG4gICAgfSwgW10pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNQcm94eShhY3Rpb25zLCBjYikge1xuICAgIHJldHVybiBuZXcgUHJveHkoYWN0aW9ucywge1xuICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gT1JJR0lOQUxfQUNUSU9OUykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IodGFyZ2V0W3Byb3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0W3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb25zUHJveHkodGFyZ2V0W3Byb3BdLCBjYik7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuL2ludGVybmFsVHlwZXMnO1xuaW1wb3J0IHsgSVNfT1BFUkFUT1IsIE1PREVfVEVTVCwgT1JJR0lOQUxfQUNUSU9OUywgY3JlYXRlQWN0aW9uc1Byb3h5LCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdG9yU3RhcnRlZCh0eXBlLCBhcmcsIGNvbnRleHQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnLmRpc3BsYXlOYW1lIHx8IGFyZy5uYW1lIDogU3RyaW5nKGFyZyk7XG4gICAgY29udGV4dC5leGVjdXRpb24uaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBjb250ZXh0LmV4ZWN1dGlvbi5lbWl0KEV2ZW50VHlwZS5PUEVSQVRPUl9TVEFSVCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIHsgbmFtZSxcbiAgICAgICAgdHlwZSB9KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0b3JTdG9wcGVkKGNvbnRleHQsIHZhbHVlLCBkZXRhaWxzID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmV4ZWN1dGlvbi5lbWl0KEV2ZW50VHlwZS5PUEVSQVRPUl9BU1lOQywgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIHsgaXNBc3luYzogdHJ1ZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBldmFsdWF0ZWREZXRhaWxzID0ge1xuICAgICAgICBlcnJvcjogZGV0YWlscy5lcnJvciA/IGRldGFpbHMuZXJyb3IubWVzc2FnZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNJbnRlcmNlcHRlZDogQm9vbGVhbihkZXRhaWxzLmlzSW50ZXJjZXB0ZWQpLFxuICAgICAgICBpc1NraXBwZWQ6IEJvb2xlYW4oZGV0YWlscy5pc1NraXBwZWQpLFxuICAgIH07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgLnRoZW4oKHByb21pc2VWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb24uaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb250ZXh0LmV4ZWN1dGlvbi5lbWl0KEV2ZW50VHlwZS5PUEVSQVRPUl9FTkQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIHsgcmVzdWx0OiBwcm9taXNlVmFsdWUsIGlzQXN5bmM6IHRydWUgfSksIGV2YWx1YXRlZERldGFpbHMpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgYW4gZXJyb3IgZG9lcyBub3QgY2F1c2UgdW5jYXVnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZXh0LmV4ZWN1dGlvbi5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgY29udGV4dC5leGVjdXRpb24uZW1pdChFdmVudFR5cGUuT1BFUkFUT1JfRU5ELCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5leGVjdXRpb24pLCB7IHJlc3VsdDogdmFsdWUsIGlzQXN5bmM6IGZhbHNlIH0pLCBldmFsdWF0ZWREZXRhaWxzKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY29udGV4dCwgdmFsdWUsIHBhdGgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0KSwgeyB2YWx1ZSB9KTtcbiAgICB9XG4gICAgY29uc3QgbmV3RXhlY3V0aW9uID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIHsgb3BlcmF0b3JJZDogY29udGV4dC5leGVjdXRpb24uZ2V0TmV4dE9wZXJhdG9ySWQoKSwgcGF0aDogcGF0aCB8fCBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoIH0pO1xuICAgIGNvbnN0IG11dGF0aW9uVHJlZXMgPSBbXTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0KSwgeyBhY3Rpb25zOiBjcmVhdGVBY3Rpb25zUHJveHkoY29udGV4dC5hY3Rpb25zW09SSUdJTkFMX0FDVElPTlNdIHx8IGNvbnRleHQuYWN0aW9ucywgKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gYWN0aW9uKHZhbHVlLCBuZXdFeGVjdXRpb24uaXNSdW5uaW5nID8gbmV3RXhlY3V0aW9uIDogbnVsbCk7XG4gICAgICAgIH0pLCB2YWx1ZSwgZXhlY3V0aW9uOiBuZXdFeGVjdXRpb24sIGVmZmVjdHM6IGNvbnRleHQuZXhlY3V0aW9uLnRyYWNrRWZmZWN0cyhuZXdFeGVjdXRpb24pLCBmbHVzaDogY29udGV4dC5wYXJlbnRFeGVjdXRpb25cbiAgICAgICAgICAgID8gY29udGV4dC5wYXJlbnRFeGVjdXRpb24uZmx1c2hcbiAgICAgICAgICAgIDogKGlzQXN5bmMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm94eVN0YXRlVHJlZS5mbHVzaChtdXRhdGlvblRyZWVzLCBpc0FzeW5jKTtcbiAgICAgICAgICAgIH0sIGdldE11dGF0aW9uVHJlZTogY29udGV4dC5wYXJlbnRFeGVjdXRpb25cbiAgICAgICAgICAgID8gY29udGV4dC5wYXJlbnRFeGVjdXRpb24uZ2V0TXV0YXRpb25UcmVlXG4gICAgICAgICAgICA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvblRyZWUgPSB0aGlzLnByb3h5U3RhdGVUcmVlLmdldE11dGF0aW9uVHJlZSgpO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uVHJlZXMucHVzaChtdXRhdGlvblRyZWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUubW9kZSA9PT0gTU9ERV9URVNUKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHJlZS5vbk11dGF0aW9uKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGVjdXRpb25NdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb25UcmVlO1xuICAgICAgICAgICAgfSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXh0UGF0aChuZXh0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICAgIHJldHVybiAoZXJyLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQpLCB7IGV4ZWN1dGlvbjogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIHsgcGF0aDogY29udGV4dC5leGVjdXRpb24ucGF0aC5zbGljZSgwLCBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoLmxlbmd0aCAtIDEpIH0pIH0pO1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIsIG5ld0NvbnRleHQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBuZXh0KG51bGwsIG5ld0NvbnRleHQpO1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3IodHlwZSwgbmFtZSwgY2IpIHtcbiAgICBjb25zdCBvcGVyYXRvciA9IChlcnIsIGNvbnRleHQsIG5leHQsIGZpbmFsKSA9PiB7XG4gICAgICAgIG9wZXJhdG9yU3RhcnRlZCh0eXBlLCBuYW1lLCBjb250ZXh0KTtcbiAgICAgICAgbGV0IG5leHRJc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2IoZXJyLCB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IGNvbnRleHQuc3RhdGUsXG4gICAgICAgICAgICAgICAgZWZmZWN0czogY29udGV4dC5lZmZlY3RzLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IGNvbnRleHQuYWN0aW9ucyxcbiAgICAgICAgICAgICAgICBleGVjdXRpb246IGNvbnRleHQuZXhlY3V0aW9uLFxuICAgICAgICAgICAgICAgIHJldmVydGFibGU6IGNvbnRleHQucmV2ZXJ0YWJsZSxcbiAgICAgICAgICAgIH0sIGNvbnRleHQudmFsdWUsIChlcnIsIHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBydW4oZXJyLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjb250ZXh0LCB2YWx1ZSwgY29udGV4dC5leGVjdXRpb24ucGF0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZXhlY3V0aW9uLnBhdGguY29uY2F0KG9wdGlvbnMucGF0aC5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0V2l0aFBhdGggPSBjcmVhdGVOZXh0UGF0aChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGF0aC5vcGVyYXRvcihlcnIsIG5ld0NvbnRleHQsICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JTdG9wcGVkKGNvbnRleHQsIGFyZ3NbMV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRXaXRoUGF0aCguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JTdG9wcGVkKGNvbnRleHQsIGVyciB8fCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2tpcHBlZDogZXJyID8gdHJ1ZSA6IG9wdGlvbnMuaXNTa2lwcGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KGVyciwgY3JlYXRlQ29udGV4dChjb250ZXh0LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChwcm9taXNlVmFsdWUpID0+IHJ1bihlcnIsIHByb21pc2VWYWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKHByb21pc2VFcnJvcikgPT4gcnVuKHByb21pc2VFcnJvciwgcHJvbWlzZUVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBydW4oZXJyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVyciwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0SXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yU3RvcHBlZChjb250ZXh0LCBlcnIgfHwgdmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTa2lwcGVkOiBCb29sZWFuKGVyciksXG4gICAgICAgICAgICAgICAgICAgIGlzSW50ZXJjZXB0ZWQ6ICFlcnIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZmluYWwoZXJyLCBjcmVhdGVDb250ZXh0KGNvbnRleHQsIHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5leHRJc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBvcGVyYXRvclN0b3BwZWQoY29udGV4dCwgY29udGV4dC52YWx1ZSwge1xuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0KGVycm9yLCBjcmVhdGVDb250ZXh0KGNvbnRleHQsIGNvbnRleHQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5leHRJc0NhbGxlZCkge1xuICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb24uZW1pdChFdmVudFR5cGUuT1BFUkFUT1JfQVNZTkMsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5leGVjdXRpb24pLCB7IGlzQXN5bmM6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBvcGVyYXRvcltJU19PUEVSQVRPUl0gPSB0cnVlO1xuICAgIHJldHVybiBvcGVyYXRvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdXRhdGlvbk9wZXJhdG9yKHR5cGUsIG5hbWUsIGNiKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSAoZXJyLCBjb250ZXh0LCBuZXh0LCBmaW5hbCkgPT4ge1xuICAgICAgICBvcGVyYXRvclN0YXJ0ZWQodHlwZSwgbmFtZSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uVHJlZSA9IGNvbnRleHQuZXhlY3V0aW9uLmdldE11dGF0aW9uVHJlZSgpO1xuICAgICAgICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgICAgICAgICAgbXV0YXRpb25UcmVlLm9uTXV0YXRpb24oKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb24uZW1pdChFdmVudFR5cGUuTVVUQVRJT05TLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQuZXhlY3V0aW9uKSwgeyBtdXRhdGlvbnM6IFttdXRhdGlvbl0gfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2IoZXJyLCB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IG11dGF0aW9uVHJlZS5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlZmZlY3RzOiBjb250ZXh0LmVmZmVjdHMsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogY29udGV4dC5hY3Rpb25zLFxuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbjogY29udGV4dC5leGVjdXRpb24sXG4gICAgICAgICAgICAgICAgcmV2ZXJ0YWJsZTogY29udGV4dC5yZXZlcnRhYmxlLFxuICAgICAgICAgICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgID8gY29udGV4dC52YWx1ZVxuICAgICAgICAgICAgICAgIDogY29udGV4dC5leGVjdXRpb24uc2NvcGVWYWx1ZShjb250ZXh0LnZhbHVlLCBtdXRhdGlvblRyZWUpLCAoZXJyLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcnVuKGVyciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JTdG9wcGVkKGNvbnRleHQsIGVyciB8fCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNTa2lwcGVkOiBlcnIgPyB0cnVlIDogb3B0aW9ucy5pc1NraXBwZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0KGVyciwgY3JlYXRlQ29udGV4dChjb250ZXh0LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvbWlzZVZhbHVlKSA9PiBydW4oZXJyLCBwcm9taXNlVmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChwcm9taXNlRXJyb3IpID0+IHJ1bihwcm9taXNlRXJyb3IsIHByb21pc2VFcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcnVuKGVyciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dElzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcGVyYXRvclN0b3BwZWQoY29udGV4dCwgZXJyIHx8IHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2tpcHBlZDogQm9vbGVhbihlcnIpLFxuICAgICAgICAgICAgICAgICAgICBpc0ludGVyY2VwdGVkOiAhZXJyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZpbmFsKGVyciwgY3JlYXRlQ29udGV4dChjb250ZXh0LCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nRmx1c2g7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25UcmVlLm9uTXV0YXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZ0ZsdXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocGVuZGluZ0ZsdXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmx1c2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsdXNoRGF0YSA9IGNvbnRleHQuZXhlY3V0aW9uLmZsdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsdXNoRGF0YS5tdXRhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb24uc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbHVzaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmV4ZWN1dGlvbiksIGZsdXNoRGF0YSksIHsgbXV0YXRpb25zOiBmbHVzaERhdGEubXV0YXRpb25zIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5leHRJc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBvcGVyYXRvclN0b3BwZWQoY29udGV4dCwgY29udGV4dC52YWx1ZSwge1xuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0KGVycm9yLCBjcmVhdGVDb250ZXh0KGNvbnRleHQsIGNvbnRleHQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5leHRJc0NhbGxlZCkge1xuICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb24uZW1pdChFdmVudFR5cGUuT1BFUkFUT1JfQVNZTkMsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5leGVjdXRpb24pLCB7IGlzQXN5bmM6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBvcGVyYXRvcltJU19PUEVSQVRPUl0gPSB0cnVlO1xuICAgIHJldHVybiBvcGVyYXRvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdG9yLmpzLm1hcCIsImV4cG9ydCBjb25zdCBkb05vdFByb3h5ID0gU3ltYm9sKCdkb05vdFByb3h5Jyk7XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmxldCBoYXNXYXJuZWRDb25zdHJ1Y3RvciA9IGZhbHNlO1xubGV0IGN1cnJlbnRFZmZlY3RJZCA9IDA7XG5jb25zdCBPUklHSU5fVEFSR0VUID0gU3ltYm9sKCdPUklHSU5fVEFSR0VUJyk7XG5leHBvcnQgZnVuY3Rpb24gcHJveGlmeUVmZmVjdHMoZWZmZWN0cywgY2IsIHBhdGggPSAnJykge1xuICAgIGlmICghaXNPYmplY3QoZWZmZWN0cykgJiYgISh0eXBlb2YgZWZmZWN0cyA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoZWZmZWN0cywge1xuICAgICAgICBhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFndW1lbnRzTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgZWZmZWN0SWQgPSBjdXJyZW50RWZmZWN0SWQrKztcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBuYW1lLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNiKHtcbiAgICAgICAgICAgICAgICBmdW5jOiB0YXJnZXQuYmluZCh0aGlzQXJnID8gdGhpc0FyZ1tPUklHSU5fVEFSR0VUXSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZWZmZWN0SWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZS5qb2luKCcuJyksXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIGFyZ3M6IGFndW1lbnRzTGlzdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1dhcm5lZENvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFRkZFQ1RTIC0gSXQgaXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIGNyZWF0ZSBhIGN1c3RvbSBlZmZlY3QsIGV4cG9zaW5nIGEgbWV0aG9kIHRoYXQgZGVhbHMgd2l0aCB0aGUgaW5zdGFudGlhdGlvbiBvZiBcIiR7cGF0aH1cIi4gSXQgaW1wcm92ZXMgcmVhZGFiaWxpdHkgYW5kIGRlYnVnYWJpbGl0eSBvZiB5b3VyIGFwcGApO1xuICAgICAgICAgICAgICAgIGhhc1dhcm5lZENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gT1JJR0lOX1RBUkdFVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJveGlmeUVmZmVjdHModGFyZ2V0W3Byb3BdLCBjYiwgcGF0aCA/IHBhdGggKyAnLicgKyBwcm9wLnRvU3RyaW5nKCkgOiBwcm9wLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94eWZ5RWZmZWN0cy5qcy5tYXAiLCJpbXBvcnQgeyBJU19PUEVSQVRPUiB9IGZyb20gJy4vdXRpbHMnO1xuLyoqID09PT09IFBVQkxJQyBBUElcbiAqL1xuZXhwb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi9pbnRlcm5hbFR5cGVzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2JldHN5JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQgeyBJU19QUk9YWSwgUEFUSCwgUHJveHlTdGF0ZVRyZWUsIFZBTFVFLCB9IGZyb20gJ3Byb3h5LXN0YXRlLXRyZWUnO1xuaW1wb3J0IHsgRGVyaXZlZCwgSVNfREVSSVZFRCwgSVNfREVSSVZFRF9DT05TVFJVQ1RPUiB9IGZyb20gJy4vZGVyaXZlZCc7XG5pbXBvcnQgeyBEZXZ0b29scyB9IGZyb20gJy4vRGV2dG9vbHMnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi9pbnRlcm5hbFR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGNyZWF0ZU11dGF0aW9uT3BlcmF0b3IsIGNyZWF0ZU5leHRQYXRoLCBjcmVhdGVPcGVyYXRvciwgb3BlcmF0b3JTdGFydGVkLCBvcGVyYXRvclN0b3BwZWQsIH0gZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgeyBwcm94aWZ5RWZmZWN0cyB9IGZyb20gJy4vcHJveHlmeUVmZmVjdHMnO1xuaW1wb3J0IHsgcmVoeWRyYXRlIH0gZnJvbSAnLi9yZWh5ZHJhdGUnO1xuaW1wb3J0IHsgRVhFQ1VUSU9OLCBJU19PUEVSQVRPUiwgSVNfVEVTVCwgTU9ERV9ERUZBVUxULCBNT0RFX1NTUiwgTU9ERV9URVNULCBNb2NrZWRFdmVudEVtaXR0ZXIsIGNyZWF0ZUFjdGlvbnNQcm94eSwgZGVlcENvcHksIGdldEFjdGlvblBhdGhzLCBnZXRDaGFuZ2VNdXRhdGlvbnMsIGdldEZ1bmN0aW9uTmFtZSwgaXNQcm9taXNlLCBwcm9jZXNzU3RhdGUgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHsgY3JlYXRlT3BlcmF0b3IsIGNyZWF0ZU11dGF0aW9uT3BlcmF0b3IgfTtcbmV4cG9ydCB7IE1PREVfREVGQVVMVCwgTU9ERV9URVNULCBNT0RFX1NTUiB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgU0VSSUFMSVpFLCByZWh5ZHJhdGUgfSBmcm9tICcuL3JlaHlkcmF0ZSc7XG5leHBvcnQgeyBzdGF0ZW1hY2hpbmUgfSBmcm9tICcuL3N0YXRlbWFjaGluZSc7XG5leHBvcnQgY29uc3QgZGVyaXZlZCA9IChjYikgPT4ge1xuICAgIGNiW0lTX0RFUklWRURfQ09OU1RSVUNUT1JdID0gdHJ1ZTtcbiAgICByZXR1cm4gY2I7XG59O1xuZXhwb3J0IHsganNvbiB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU92ZXJtaW5kU1NSKGNvbmZpZykge1xuICAgIGNvbnN0IHNzciA9IG5ldyBPdmVybWluZChjb25maWcsIHtcbiAgICAgICAgZGV2dG9vbHM6IGZhbHNlLFxuICAgIH0sIHtcbiAgICAgICAgbW9kZTogTU9ERV9TU1IsXG4gICAgfSk7XG4gICAgY29uc3QgbXV0YXRpb25UcmVlID0gc3NyLnByb3h5U3RhdGVUcmVlLmdldE11dGF0aW9uVHJlZSgpO1xuICAgIHNzci5zdGF0ZSA9IG11dGF0aW9uVHJlZS5zdGF0ZTtcbiAgICBzc3IuaHlkcmF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uVHJlZS5mbHVzaCgpLm11dGF0aW9ucztcbiAgICB9O1xuICAgIHJldHVybiBzc3I7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3Zlcm1pbmRNb2NrKGNvbmZpZywgbW9ja2VkRWZmZWN0cykge1xuICAgIGNvbnN0IG1vY2sgPSBuZXcgT3Zlcm1pbmQoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XG4gICAgICAgIHN0YXRlOiBkZWVwQ29weShjb25maWcuc3RhdGUpLFxuICAgIH0pLCB7XG4gICAgICAgIGRldnRvb2xzOiBmYWxzZSxcbiAgICB9LCB7XG4gICAgICAgIG1vZGU6IE1PREVfVEVTVCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWZmZWN0c0NhbGxiYWNrOiAoZWZmZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9ja2VkRWZmZWN0ID0gKGVmZmVjdC5uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gZWZmZWN0Lm5hbWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAgICAgICA6IFtdKS5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4gKGFnZ3IgPyBhZ2dyW2tleV0gOiBhZ2dyKSwgbW9ja2VkRWZmZWN0cyk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2NrZWRFZmZlY3QgfHwgKG1vY2tlZEVmZmVjdCAmJiAhbW9ja2VkRWZmZWN0W2VmZmVjdC5tZXRob2RdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlZmZlY3QgXCIke2VmZmVjdC5uYW1lfVwiIHdpdGggbWV0aG9kICR7ZWZmZWN0Lm1ldGhvZH0gaGFzIG5vdCBiZWVuIG1vY2tlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9ja2VkRWZmZWN0W2VmZmVjdC5tZXRob2RdKC4uLmVmZmVjdC5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgYWN0aW9uID0gbW9jay5jcmVhdGVBY3Rpb24oJ29uSW5pdGlhbGl6ZScsIGNvbmZpZy5vbkluaXRpYWxpemUpO1xuICAgIG1vY2sub25Jbml0aWFsaXplID0gKCkgPT4gYWN0aW9uKG1vY2spO1xuICAgIG1vY2subXV0YXRpb25zID0gW107XG4gICAgcmV0dXJuIG1vY2s7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3Zlcm1pbmQoY29uZmlnLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBPdmVybWluZChjb25maWcsIG9wdGlvbnMsIHsgbW9kZTogTU9ERV9ERUZBVUxUIH0pO1xufVxuY29uc3QgaG90UmVsb2FkaW5nQ2FjaGUgPSB7fTtcbi8vIFdlIGRvIG5vdCB1c2UgSUNvbmZpZzxDb25maWc+IGRpcmVjdGx5IHRvIHR5cGUgdGhlIGNsYXNzIGluIG9yZGVyIHRvIGF2b2lkXG4vLyB0aGUgJ2ltcG9ydCguLi4pJyBmdW5jdGlvbiB0byBiZSB1c2VkIGluIGV4cG9ydGVkIHR5cGVzLlxuZXhwb3J0IGNsYXNzIE92ZXJtaW5kIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBvcHRpb25zID0ge30sIG1vZGUgPSB7XG4gICAgICAgIG1vZGU6IE1PREVfREVGQVVMVCxcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuYWN0aW9uUmVmZXJlbmNlcyA9IHt9O1xuICAgICAgICB0aGlzLm5leHRFeGVjdXRpb25JZCA9IDA7XG4gICAgICAgIHRoaXMucmV5ZHJhdGVNdXRhdGlvbnNGb3JIb3RSZWxvYWRpbmcgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0cmljdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWN0aW9uID0gKHN0YXRlQ2FsbGJhY2ssIHVwZGF0ZUNhbGxiYWNrLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGxldCBkaXNwb3NlcjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVDYWxsYmFjayh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZVtJU19QUk9YWV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byByZXR1cm4gYW4gb2JqZWN0IG9yIGFycmF5IGZyb20gdGhlIE92ZXJtaW5kIHN0YXRlIHdoZW4gdXNpbmcgYSBcIm5lc3RlZFwiIHJlYWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSB2YWx1ZVtQQVRIXTtcbiAgICAgICAgICAgICAgICBkaXNwb3NlciA9IHRoaXMuYWRkRmx1c2hMaXN0ZW5lcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnBhdGguc3RhcnRzV2l0aChwYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhbGxiYWNrKHBhdGggPyBwYXRoLnNwbGl0KHRoaXMuZGVsaW1pdGVyKS5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4gYWdncltrZXldLCB0aGlzLnN0YXRlKSA6IHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyZWUgPSB0aGlzLnByb3h5U3RhdGVUcmVlLmdldFRyYWNrU3RhdGVUcmVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJlYWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cmVlLnRyYWNrU2NvcGUoKCkgPT4gKHJldHVyblZhbHVlID0gc3RhdGVDYWxsYmFjayh0cmVlLnN0YXRlKSksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYWxsYmFjayhyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdXBkYXRlUmVhY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBkaXNwb3NlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNhbGxiYWNrKHN0YXRlQ2FsbGJhY2sodGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3Bvc2VyO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZE11dGF0aW9uTGlzdGVuZXIgPSAoY2IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3h5U3RhdGVUcmVlLm9uTXV0YXRpb24oY2IpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZEZsdXNoTGlzdGVuZXIgPSAoY2IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3h5U3RhdGVUcmVlLm9uRmx1c2goY2IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lIHx8ICdPdmVybWluZEFwcCc7XG4gICAgICAgIGNvbnN0IGRldkVudiA9IG9wdGlvbnMuZGV2RW52IHx8ICdkZXZlbG9wbWVudCc7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy4nO1xuICAgICAgICB0aGlzLmlzU3RyaWN0ID0gQm9vbGVhbihvcHRpb25zLnN0cmljdCk7XG4gICAgICAgIGlmICgoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBkZXZFbnYpICYmXG4gICAgICAgICAgICBtb2RlLm1vZGUgPT09IE1PREVfREVGQVVMVCAmJlxuICAgICAgICAgICAgb3B0aW9ucy5ob3RSZWxvYWRpbmcgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAhKHByb2Nlc3MgJiYgcHJvY2Vzcy50aXRsZSAmJiBwcm9jZXNzLnRpdGxlLmluY2x1ZGVzKCdub2RlJykpKSB7XG4gICAgICAgICAgICBpZiAoaG90UmVsb2FkaW5nQ2FjaGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaG90UmVsb2FkaW5nQ2FjaGVbbmFtZV0ucmVjb25maWd1cmUoY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3RSZWxvYWRpbmdDYWNoZVtuYW1lXSA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICBTZXQgdXAgYW4gZXZlbnRIdWIgdG8gdHJpZ2dlciBpbmZvcm1hdGlvbiBmcm9tIGRlcml2ZWQsIGNvbXB1dGVkIGFuZCByZWFjdGlvbnNcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZXZlbnRIdWIgPSBtb2RlLm1vZGUgPT09IE1PREVfU1NSXG4gICAgICAgICAgICA/IG5ldyBNb2NrZWRFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgOiBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qXG4gICAgICAgICAgQ3JlYXRlIHRoZSBwcm94eSBzdGF0ZSB0cmVlIGluc3RhbmNlIHdpdGggdGhlIHN0YXRlIGFuZCBhIHdyYXBwZXIgdG8gZXhwb3NlXG4gICAgICAgICAgdGhlIGV2ZW50SHViXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHByb3h5U3RhdGVUcmVlID0gdGhpcy5jcmVhdGVQcm94eVN0YXRlVHJlZShjb25maWd1cmF0aW9uLCBldmVudEh1YiwgbW9kZS5tb2RlID09PSBNT0RFX1RFU1QgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IGRldkVudik7XG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3h5U3RhdGVUcmVlLnN0YXRlO1xuICAgICAgICB0aGlzLmVmZmVjdHMgPSBjb25maWd1cmF0aW9uLmVmZmVjdHMgfHwge307XG4gICAgICAgIHRoaXMucHJveHlTdGF0ZVRyZWUgPSBwcm94eVN0YXRlVHJlZTtcbiAgICAgICAgdGhpcy5ldmVudEh1YiA9IGV2ZW50SHViO1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICAvKlxuICAgICAgICAgIEV4cG9zZSB0aGUgY3JlYXRlZCBhY3Rpb25zXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9ucyhjb25maWd1cmF0aW9uLmFjdGlvbnMpO1xuICAgICAgICBpZiAobW9kZS5tb2RlID09PSBNT0RFX1NTUikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gZGV2RW52ICYmXG4gICAgICAgICAgICBtb2RlLm1vZGUgPT09IE1PREVfREVGQVVMVCAmJlxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCB3YXJuaW5nID0gJ09WRVJNSU5EOiBZb3UgYXJlIHJ1bm5pbmcgaW4gREVWRUxPUE1FTlQgbW9kZS4nO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9nUHJveGllcyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IG9yaWdpbmFsQ29uc29sZUxvZy5hcHBseShjb25zb2xlLCBhcmdzLm1hcCgoYXJnKSA9PiAoYXJnICYmIGFyZ1tJU19QUk9YWV0gPyBhcmdbVkFMVUVdIDogYXJnKSkpO1xuICAgICAgICAgICAgICAgIHdhcm5pbmcgKz1cbiAgICAgICAgICAgICAgICAgICAgJ1xcblxcbiAtIFRvIGltcHJvdmUgZGVidWdnaW5nIGV4cGVyaWVuY2UgXCJjb25zb2xlLmxvZ1wiIHdpbGwgTk9UIGxvZyBwcm94aWVzIGZyb20gT3Zlcm1pbmQsIGJ1dCB0aGUgYWN0dWFsIHZhbHVlLiBQbGVhc2Ugc2VlIGRvY3MgdG8gdHVybiBvZmYgdGhpcyBiZWhhdmlvdXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGV2dG9vbHMgfHxcbiAgICAgICAgICAgICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kZXZ0b29scyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdCA9IG9wdGlvbnMuZGV2dG9vbHMgPT09IHRydWUgPyAnbG9jYWxob3N0OjMwMzEnIDogb3B0aW9ucy5kZXZ0b29scztcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnTm9OYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC50aXRsZSB8fCAnTm9OYW1lJztcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVEZXZ0b29scyhob3N0LCBuYW1lLCBldmVudEh1YiwgcHJveHlTdGF0ZVRyZWUuc291cmNlU3RhdGUsIGNvbmZpZ3VyYXRpb24uYWN0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmRldnRvb2xzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcgKz1cbiAgICAgICAgICAgICAgICAgICAgJ1xcblxcbiAtIFlvdSBhcmUgbm90IHJ1bm5pbmcgb24gbG9jYWxob3N0LiBZb3Ugd2lsbCBoYXZlIHRvIG1hbnVhbGx5IGRlZmluZSB0aGUgZGV2dG9vbHMgb3B0aW9uIHRvIGNvbm5lY3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFJU19URVNUKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIG1vZGUubW9kZSA9PT0gTU9ERV9ERUZBVUxUKSB7XG4gICAgICAgICAgICBldmVudEh1Yi5vbihFdmVudFR5cGUuT1BFUkFUT1JfQVNZTkMsIChleGVjdXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWN1dGlvbi5wYXJlbnRFeGVjdXRpb24gfHxcbiAgICAgICAgICAgICAgICAgICAgIWV4ZWN1dGlvbi5wYXJlbnRFeGVjdXRpb24uaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5U3RhdGVUcmVlLmdldE11dGF0aW9uVHJlZSgpLmZsdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRIdWIub24oRXZlbnRUeXBlLkFDVElPTl9FTkQsIChleGVjdXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWN1dGlvbi5wYXJlbnRFeGVjdXRpb24gfHwgIWV4ZWN1dGlvbi5wYXJlbnRFeGVjdXRpb24uaXNSdW5uaW5nKVxuICAgICAgICAgICAgICAgICAgICBwcm94eVN0YXRlVHJlZS5nZXRNdXRhdGlvblRyZWUoKS5mbHVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgbmV4dFRpY2s7XG4gICAgICAgICAgICBjb25zdCBmbHVzaFRyZWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJveHlTdGF0ZVRyZWUuZ2V0TXV0YXRpb25UcmVlKCkuZmx1c2godHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5wcm94eVN0YXRlVHJlZS5vbk11dGF0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0VGljayAmJiBjbGVhclRpbWVvdXQobmV4dFRpY2spO1xuICAgICAgICAgICAgICAgIG5leHRUaWNrID0gc2V0VGltZW91dChmbHVzaFRyZWUsIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZS5tb2RlID09PSBNT0RFX0RFRkFVTFQgfHwgbW9kZS5tb2RlID09PSBNT0RFX1RFU1QpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnIHx8ICh0aGlzLmRldnRvb2xzICYmIG9wdGlvbnMuaG90UmVsb2FkaW5nICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudEh1Yi5vbihFdmVudFR5cGUuTVVUQVRJT05TLCAoZXhlY3V0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV5ZHJhdGVNdXRhdGlvbnNGb3JIb3RSZWxvYWRpbmcgPSB0aGlzLnJleWRyYXRlTXV0YXRpb25zRm9ySG90UmVsb2FkaW5nLmNvbmNhdChleGVjdXRpb24ubXV0YXRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50SHViLm9uKEV2ZW50VHlwZS5PUEVSQVRPUl9BU1lOQywgKGV4ZWN1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXhlY3V0aW9uLnBhcmVudEV4ZWN1dGlvbiB8fFxuICAgICAgICAgICAgICAgICAgICAhZXhlY3V0aW9uLnBhcmVudEV4ZWN1dGlvbi5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmx1c2hEYXRhID0gZXhlY3V0aW9uLmZsdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXZ0b29scyAmJiBmbHVzaERhdGEubXV0YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZ0b29scy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmx1c2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhlY3V0aW9uKSwgZmx1c2hEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudEh1Yi5vbihFdmVudFR5cGUuQUNUSU9OX0VORCwgKGV4ZWN1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXhlY3V0aW9uLnBhcmVudEV4ZWN1dGlvbiB8fFxuICAgICAgICAgICAgICAgICAgICAhZXhlY3V0aW9uLnBhcmVudEV4ZWN1dGlvbi5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmx1c2hEYXRhID0gZXhlY3V0aW9uLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldnRvb2xzICYmIGZsdXNoRGF0YS5tdXRhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldnRvb2xzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbHVzaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCBmbHVzaERhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZS5tb2RlID09PSBNT0RFX0RFRkFVTFQgJiYgY29uZmlndXJhdGlvbi5vbkluaXRpYWxpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9uSW5pdGlhbGl6ZSA9IHRoaXMuY3JlYXRlQWN0aW9uKCdvbkluaXRpYWxpemUnLCBjb25maWd1cmF0aW9uLm9uSW5pdGlhbGl6ZSk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gUHJvbWlzZS5yZXNvbHZlKG9uSW5pdGlhbGl6ZSh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVByb3h5U3RhdGVUcmVlKGNvbmZpZ3VyYXRpb24sIGV2ZW50SHViLCBkZXZtb2RlKSB7XG4gICAgICAgIGNvbnN0IHByb3h5U3RhdGVUcmVlID0gbmV3IFByb3h5U3RhdGVUcmVlKHRoaXMuZ2V0U3RhdGUoY29uZmlndXJhdGlvbiksIHtcbiAgICAgICAgICAgIGRldm1vZGUsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6IHRoaXMuZGVsaW1pdGVyLFxuICAgICAgICAgICAgb25TZXRGdW5jdGlvbjogKHRyZWUsIHBhdGgsIHRhcmdldCwgcHJvcCwgZnVuYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jW0lTX0RFUklWRURfQ09OU1RSVUNUT1JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGVyaXZlZChmdW5jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25HZXRGdW5jdGlvbjogKHRyZWUsIHBhdGgsIHRhcmdldCwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmdW5jID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIGlmIChmdW5jW0lTX0RFUklWRURdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKGV2ZW50SHViLCB0cmVlLCBwcm94eVN0YXRlVHJlZSwgcGF0aC5zcGxpdCh0aGlzLmRlbGltaXRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnVuY1tJU19ERVJJVkVEX0NPTlNUUlVDVE9SXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXJpdmVkID0gbmV3IERlcml2ZWQoZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IGRlcml2ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXJpdmVkKGV2ZW50SHViLCB0cmVlLCBwcm94eVN0YXRlVHJlZSwgcGF0aC5zcGxpdCh0aGlzLmRlbGltaXRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkdldHRlcjogZGV2bW9kZVxuICAgICAgICAgICAgICAgID8gKHBhdGgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdEFzeW5jKEV2ZW50VHlwZS5HRVRURVIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHlTdGF0ZVRyZWU7XG4gICAgfVxuICAgIGNyZWF0ZUV4ZWN1dGlvbihuYW1lLCBhY3Rpb24sIHBhcmVudEV4ZWN1dGlvbikge1xuICAgICAgICBjb25zdCBuYW1lc3BhY2VQYXRoID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBuYW1lc3BhY2VQYXRoLnBvcCgpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbRVhFQ1VUSU9OXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRFeGVjdXRpb24sXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlUGF0aCxcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGdldE11dGF0aW9uVHJlZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm94eVN0YXRlVHJlZS5nZXRNdXRhdGlvblRyZWUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRyYWNrU3RhdGVUcmVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3h5U3RhdGVUcmVlLmdldFRyYWNrU3RhdGVUcmVlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbWl0OiB0aGlzLmV2ZW50SHViLmVtaXQuYmluZCh0aGlzLmV2ZW50SHViKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXV0YXRpb25UcmVlcyA9IFtdO1xuICAgICAgICBjb25zdCBleGVjdXRpb24gPSB7XG4gICAgICAgICAgICBbRVhFQ1VUSU9OXTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZVBhdGgsXG4gICAgICAgICAgICBhY3Rpb25JZDogbmFtZSxcbiAgICAgICAgICAgIGV4ZWN1dGlvbklkOiB0aGlzLm5leHRFeGVjdXRpb25JZCsrLFxuICAgICAgICAgICAgYWN0aW9uTmFtZTogbmFtZSxcbiAgICAgICAgICAgIG9wZXJhdG9ySWQ6IDAsXG4gICAgICAgICAgICBpc1J1bm5pbmc6IHRydWUsXG4gICAgICAgICAgICBwYXJlbnRFeGVjdXRpb24sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIGVtaXQ6IHRoaXMuZXZlbnRIdWIuZW1pdC5iaW5kKHRoaXMuZXZlbnRIdWIpLFxuICAgICAgICAgICAgc2VuZDogdGhpcy5kZXZ0b29scyA/IHRoaXMuZGV2dG9vbHMuc2VuZC5iaW5kKHRoaXMuZGV2dG9vbHMpIDogKCkgPT4geyB9LFxuICAgICAgICAgICAgdHJhY2tFZmZlY3RzOiB0aGlzLnRyYWNrRWZmZWN0cy5iaW5kKHRoaXMsIHRoaXMuZWZmZWN0cyksXG4gICAgICAgICAgICBnZXROZXh0T3BlcmF0b3JJZDogKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE9wZXJhdG9ySWQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiArK2N1cnJlbnRPcGVyYXRvcklkO1xuICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgIGZsdXNoOiBwYXJlbnRFeGVjdXRpb25cbiAgICAgICAgICAgICAgICA/IHBhcmVudEV4ZWN1dGlvbi5mbHVzaFxuICAgICAgICAgICAgICAgIDogKGlzQXN5bmMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJveHlTdGF0ZVRyZWUuZmx1c2gobXV0YXRpb25UcmVlcywgaXNBc3luYyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE11dGF0aW9uVHJlZTogcGFyZW50RXhlY3V0aW9uXG4gICAgICAgICAgICAgICAgPyBwYXJlbnRFeGVjdXRpb24uZ2V0TXV0YXRpb25UcmVlXG4gICAgICAgICAgICAgICAgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uVHJlZSA9IHRoaXMucHJveHlTdGF0ZVRyZWUuZ2V0TXV0YXRpb25UcmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHJlZXMucHVzaChtdXRhdGlvblRyZWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlLm1vZGUgPT09IE1PREVfVEVTVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25UcmVlLm9uTXV0YXRpb24oKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGVjdXRpb25NdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb25UcmVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUcmFja1N0YXRlVHJlZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3h5U3RhdGVUcmVlLmdldFRyYWNrU3RhdGVUcmVlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GbHVzaDogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJveHlTdGF0ZVRyZWUub25GbHVzaChjYik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVWYWx1ZTogKHZhbHVlLCB0cmVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVWYWx1ZSh2YWx1ZSwgdHJlZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXhlY3V0aW9uO1xuICAgIH1cbiAgICBjcmVhdGVDb250ZXh0KGV4ZWN1dGlvbiwgdHJlZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdGU6IHRyZWUuc3RhdGUsXG4gICAgICAgICAgICBhY3Rpb25zOiBjcmVhdGVBY3Rpb25zUHJveHkodGhpcy5hY3Rpb25zLCAoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gYWN0aW9uKHZhbHVlLCBleGVjdXRpb24uaXNSdW5uaW5nID8gZXhlY3V0aW9uIDogbnVsbCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGV4ZWN1dGlvbixcbiAgICAgICAgICAgIHByb3h5U3RhdGVUcmVlOiB0aGlzLnByb3h5U3RhdGVUcmVlLFxuICAgICAgICAgICAgZWZmZWN0czogdGhpcy50cmFja0VmZmVjdHModGhpcy5lZmZlY3RzLCBleGVjdXRpb24pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzY29wZVZhbHVlKHZhbHVlLCB0cmVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVbSVNfUFJPWFldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm94eVN0YXRlVHJlZS5yZXNjb3BlKHZhbHVlLCB0cmVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIC4uLk9iamVjdC5rZXlzKHZhbHVlKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgICBba2V5XTogdGhpcy5wcm94eVN0YXRlVHJlZS5yZXNjb3BlKHZhbHVlW2tleV0sIHRyZWUpLFxuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFeGVjdXRpb25NdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICA7XG4gICAgICAgIHRoaXMubXV0YXRpb25zLnB1c2gobXV0YXRpb24pO1xuICAgIH1cbiAgICBjcmVhdGVBY3Rpb24obmFtZSwgb3JpZ2luYWxBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3Rpb25SZWZlcmVuY2VzW25hbWVdID0gb3JpZ2luYWxBY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGlvbkZ1bmMgPSAodmFsdWUsIGJvdW5kRXhlY3V0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvblJlZmVyZW5jZXNbbmFtZV07XG4gICAgICAgICAgICAvLyBEZXZlbG9wZXIgbWlnaHQgdW5pbnRlbnRpb25hbGx5IHBhc3MgbW9yZSBhcmd1bWVudHMsIHNvIGhhdmUgdG8gZW5zdXJlXG4gICAgICAgICAgICAvLyB0aGF0IGl0IGlzIGFuIGFjdHVhbCBleGVjdXRpb25cbiAgICAgICAgICAgIGJvdW5kRXhlY3V0aW9uID1cbiAgICAgICAgICAgICAgICBib3VuZEV4ZWN1dGlvbiAmJiBib3VuZEV4ZWN1dGlvbltFWEVDVVRJT05dID8gYm91bmRFeGVjdXRpb24gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBhY3Rpb25bSVNfT1BFUkFUT1JdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhlY3V0aW9uID0gdGhpcy5jcmVhdGVFeGVjdXRpb24obmFtZSwgYWN0aW9uLCBib3VuZEV4ZWN1dGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEh1Yi5lbWl0KEV2ZW50VHlwZS5BQ1RJT05fU1RBUlQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhlY3V0aW9uKSwgeyB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbltJU19PUEVSQVRPUl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbihudWxsLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3JlYXRlQ29udGV4dChleGVjdXRpb24sIHRoaXMucHJveHlTdGF0ZVRyZWUpKSwgeyB2YWx1ZSB9KSwgKGVyciwgZmluYWxDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGV4dCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkFDVElPTl9FTkQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmluYWxDb250ZXh0LmV4ZWN1dGlvbiksIHsgb3BlcmF0b3JJZDogZmluYWxDb250ZXh0LmV4ZWN1dGlvbi5vcGVyYXRvcklkIC0gMSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5tb2RlLm1vZGUgPT09IE1PREVfVEVTVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaW5hbENvbnRleHQuZXhlY3V0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25UcmVlID0gZXhlY3V0aW9uLmdldE11dGF0aW9uVHJlZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25UcmVlLmJsb2NrTXV0YXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBhY3Rpb24odGhpcy5jcmVhdGVDb250ZXh0KGV4ZWN1dGlvbiwgbXV0YXRpb25UcmVlKSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkFDVElPTl9FTkQsIGV4ZWN1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGVjdXRpb24gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3JlYXRlRXhlY3V0aW9uKG5hbWUsIGFjdGlvbiwgYm91bmRFeGVjdXRpb24pKSwgeyBvcGVyYXRvcklkOiAwLCB0eXBlOiAnYWN0aW9uJyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkFDVElPTl9TVEFSVCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCB7IHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLk9QRVJBVE9SX1NUQVJULCBleGVjdXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uVHJlZSA9IGV4ZWN1dGlvbi5nZXRNdXRhdGlvblRyZWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuYmxvY2tNdXRhdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXV0YXRpb25UcmVlLm9uTXV0YXRpb24oKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdChFdmVudFR5cGUuTVVUQVRJT05TLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4ZWN1dGlvbiksIHsgbXV0YXRpb25zOiBbbXV0YXRpb25dIH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZWRWYWx1ZSA9IHRoaXMuc2NvcGVWYWx1ZSh2YWx1ZSwgbXV0YXRpb25UcmVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jcmVhdGVDb250ZXh0KGV4ZWN1dGlvbiwgbXV0YXRpb25UcmVlKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYWN0aW9uKGNvbnRleHQsIHNjb3BlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLk9QRVJBVE9SX0FTWU5DLCBleGVjdXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHByb21pc2VSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRpb24uaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib3VuZEV4ZWN1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLk9QRVJBVE9SX0VORCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCB7IGlzQXN5bmM6IHRydWUsIHJlc3VsdDogdW5kZWZpbmVkIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkFDVElPTl9FTkQsIGV4ZWN1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRpb24uaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib3VuZEV4ZWN1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLk9QRVJBVE9SX0VORCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCB7IGlzQXN5bmM6IHRydWUsIHJlc3VsdDogdW5kZWZpbmVkLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEh1Yi5lbWl0KEV2ZW50VHlwZS5BQ1RJT05fRU5ELCBleGVjdXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRpb24uaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJvdW5kRXhlY3V0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25UcmVlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdChFdmVudFR5cGUuT1BFUkFUT1JfRU5ELCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4ZWN1dGlvbiksIHsgaXNBc3luYzogZmFsc2UsIHJlc3VsdDogdW5kZWZpbmVkIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdChFdmVudFR5cGUuQUNUSU9OX0VORCwgZXhlY3V0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVuZGluZ0ZsdXNoO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUub25NdXRhdGlvbigobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nRmx1c2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocGVuZGluZ0ZsdXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUubW9kZSA9PT0gTU9ERV9URVNUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGVjdXRpb25NdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmx1c2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmx1c2ggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsdXNoRGF0YSA9IGV4ZWN1dGlvbi5mbHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXZ0b29scyAmJiBmbHVzaERhdGEubXV0YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldnRvb2xzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZsdXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCBmbHVzaERhdGEpLCB7IG11dGF0aW9uczogZmx1c2hEYXRhLm11dGF0aW9ucyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdChFdmVudFR5cGUuT1BFUkFUT1JfRU5ELCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4ZWN1dGlvbiksIHsgaXNBc3luYzogZmFsc2UsIHJlc3VsdDogdW5kZWZpbmVkLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkFDVElPTl9FTkQsIGV4ZWN1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhY3Rpb25GdW5jO1xuICAgIH1cbiAgICB0cmFja0VmZmVjdHMoZWZmZWN0cyA9IHt9LCBleGVjdXRpb24pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBlZmZlY3RzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm94aWZ5RWZmZWN0cyh0aGlzLmVmZmVjdHMsIChlZmZlY3QpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUubW9kZSA9PT0gTU9ERV9URVNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLm1vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1vZGUub3B0aW9ucy5lZmZlY3RzQ2FsbGJhY2soZWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIdWIuZW1pdChFdmVudFR5cGUuRUZGRUNULCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhlY3V0aW9uKSwgZWZmZWN0KSwgeyBhcmdzOiBlZmZlY3QuYXJncywgaXNQZW5kaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlZmZlY3QuZnVuYy5hcHBseSh0aGlzLCBlZmZlY3QuYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0YW5kYXJkL25vLWNhbGxiYWNrLWxpdGVyYWxcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkVGRkVDVCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4ZWN1dGlvbiksIGVmZmVjdCksIHsgYXJnczogZWZmZWN0LmFyZ3MsIGlzUGVuZGluZzogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdGFuZGFyZC9uby1jYWxsYmFjay1saXRlcmFsXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEh1Yi5lbWl0KEV2ZW50VHlwZS5FRkZFQ1QsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCBlZmZlY3QpLCB7IGFyZ3M6IGVmZmVjdC5hcmdzLCBpc1BlbmRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvbWlzZWRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0YW5kYXJkL25vLWNhbGxiYWNrLWxpdGVyYWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEh1Yi5lbWl0KEV2ZW50VHlwZS5FRkZFQ1QsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCBlZmZlY3QpLCB7IGFyZ3M6IGVmZmVjdC5hcmdzLCByZXN1bHQ6IHByb21pc2VkUmVzdWx0LCBpc1BlbmRpbmc6IGZhbHNlLCBlcnJvcjogZmFsc2UgfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SHViLmVtaXQoRXZlbnRUeXBlLkVGRkVDVCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4ZWN1dGlvbiksIGVmZmVjdCksIHsgYXJnczogZWZmZWN0LmFyZ3MsIGlzUGVuZGluZzogZmFsc2UsIGVycm9yOiBlcnJvciAmJiBlcnJvci5tZXNzYWdlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RhbmRhcmQvbm8tY2FsbGJhY2stbGl0ZXJhbFxuICAgICAgICAgICAgdGhpcy5ldmVudEh1Yi5lbWl0KEV2ZW50VHlwZS5FRkZFQ1QsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGVjdXRpb24pLCBlZmZlY3QpLCB7IGFyZ3M6IGVmZmVjdC5hcmdzLCByZXN1bHQ6IHJlc3VsdCwgaXNQZW5kaW5nOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplRGV2dG9vbHMoaG9zdCwgbmFtZSwgZXZlbnRIdWIsIGluaXRpYWxTdGF0ZSwgYWN0aW9ucykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZGV2dG9vbHMgPSBuZXcgRGV2dG9vbHMobmFtZSk7XG4gICAgICAgIGRldnRvb2xzLmNvbm5lY3QoaG9zdCwgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVmcmVzaCc6XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZXhlY3V0ZUFjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1lc3NhZ2UuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYWdnciwga2V5KSA9PiBhZ2dyW2tleV0sIHRoaXMuYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGlvbihKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YS5wYXlsb2FkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJlZSA9IHRoaXMucHJveHlTdGF0ZVRyZWUuZ2V0TXV0YXRpb25UcmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBtZXNzYWdlLmRhdGEucGF0aC5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEpTT04ucGFyc2UoYHsgXCJ2YWx1ZVwiOiAke21lc3NhZ2UuZGF0YS52YWx1ZX0gfWApLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHBhdGgucmVkdWNlKChhZ2dyLCBrZXkpID0+IGFnZ3Jba2V5XSwgdHJlZS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJlZS5mbHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJlZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2dG9vbHMuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IG1lc3NhZ2UuZGF0YS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCB0eXBlIGluIEV2ZW50VHlwZSkge1xuICAgICAgICAgICAgZXZlbnRIdWIub24oRXZlbnRUeXBlW3R5cGVdLCAoKGV2ZW50VHlwZSkgPT4gKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkZXZ0b29scy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlW3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT09IEV2ZW50VHlwZS5NVVRBVElPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugd2FudCB0byB0cmlnZ2VyIHByb3BlcnR5IGFjY2VzcyB3aGVuIHNldHRpbmcgb2JqZWN0cyBhbmQgYXJyYXlzLCBhcyBhbnkgZGVyaXZlZCBzZXQgd291bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0cmlnZ2VyIGFuZCB1cGRhdGUgdGhlIGRldnRvb2xzXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG11dGF0aW9uLnBhdGguc3BsaXQodGhpcy5kZWxpbWl0ZXIpLnJlZHVjZSgoYWdnciwga2V5KSA9PiBhZ2dyW2tleV0sIHRoaXMucHJveHlTdGF0ZVRyZWUuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4gdmFsdWVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goKGtleSkgPT4gaXRlbVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSBkZXJpdmVkIHdoaWNoIHdpbGwgdHJpZ2dlciBjYWxjdWxhdGlvbiBhbmQgZGV2dG9vbHNcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09PSBFdmVudFR5cGUuREVSSVZFRF9ESVJUWSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmRlcml2ZWRQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhZ2dyLCBrZXkpID0+IGFnZ3Jba2V5XSwgdGhpcy5wcm94eVN0YXRlVHJlZS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoRXZlbnRUeXBlW3R5cGVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZGV2dG9vbHMuc2VuZCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5pdCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMucHJveHlTdGF0ZVRyZWUuc3RhdGUsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogZ2V0QWN0aW9uUGF0aHMoYWN0aW9ucyksXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyOiB0aGlzLmRlbGltaXRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGV2dG9vbHMgPSBkZXZ0b29scztcbiAgICB9XG4gICAgZ2V0U3RhdGUoY29uZmlndXJhdGlvbikge1xuICAgICAgICBsZXQgc3RhdGUgPSB7fTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gcHJvY2Vzc1N0YXRlKGNvbmZpZ3VyYXRpb24uc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZ2V0QWN0aW9ucyhhY3Rpb25zID0ge30sIHBhdGggPSBbXSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoYWN0aW9ucykucmVkdWNlKChhZ2dyLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmNyZWF0ZUFjdGlvbihwYXRoLmNvbmNhdChuYW1lKS5qb2luKCcuJyksIGFjdGlvbnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGFjdGlvbi5kaXNwbGF5TmFtZSA9IHBhdGguY29uY2F0KG5hbWUpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhZ2dyLCB7XG4gICAgICAgICAgICAgICAgICAgIFtuYW1lXTogYWN0aW9uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWdnciwge1xuICAgICAgICAgICAgICAgIFtuYW1lXTogdGhpcy5nZXRBY3Rpb25zKGFjdGlvbnNbbmFtZV0sIHBhdGguY29uY2F0KG5hbWUpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8qXG4gICAgICBSZWxhdGVkIHRvIGhvdCByZWxvYWRpbmcgd2UgdXBkYXRlIHRoZSBleGlzdGluZyBhY3Rpb24gcmVmZXJlbmNlcyBhbmQgYWRkIGFueSBuZXdcbiAgICAgIGFjdGlvbnMuXG4gICAgKi9cbiAgICB1cGRhdGVBY3Rpb25zKGFjdGlvbnMgPSB7fSwgcGF0aCA9IFtdKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBwYXRoLmNvbmNhdChuYW1lKS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uUmVmZXJlbmNlc1thY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblJlZmVyZW5jZXNbYWN0aW9uTmFtZV0gPSBhY3Rpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGF0aC5yZWR1Y2UoKGFnZ3IsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZ2dyW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2dyW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZ2dyW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHRoaXMuY3JlYXRlQWN0aW9uKGFjdGlvbk5hbWUsIGFjdGlvbnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0uZGlzcGxheU5hbWUgPSBwYXRoLmNvbmNhdChuYW1lKS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3Rpb25zKGFjdGlvbnNbbmFtZV0sIHBhdGguY29uY2F0KG5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBnZXRUcmFja1N0YXRlVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJveHlTdGF0ZVRyZWUuZ2V0VHJhY2tTdGF0ZVRyZWUoKTtcbiAgICB9XG4gICAgZ2V0TXV0YXRpb25UcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm94eVN0YXRlVHJlZS5nZXRNdXRhdGlvblRyZWUoKTtcbiAgICB9XG4gICAgcmVjb25maWd1cmUoY29uZmlndXJhdGlvbikge1xuICAgICAgICBjb25zdCBjaGFuZ2VNdXRhdGlvbnMgPSBnZXRDaGFuZ2VNdXRhdGlvbnModGhpcy5vcmlnaW5hbENvbmZpZ3VyYXRpb24uc3RhdGUsIGNvbmZpZ3VyYXRpb24uc3RhdGUgfHwge30pO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoY29uZmlndXJhdGlvbi5hY3Rpb25zKTtcbiAgICAgICAgdGhpcy5lZmZlY3RzID0gY29uZmlndXJhdGlvbi5lZmZlY3RzIHx8IHt9O1xuICAgICAgICBjb25zdCBtdXRhdGlvblRyZWUgPSB0aGlzLnByb3h5U3RhdGVUcmVlLmdldE11dGF0aW9uVHJlZSgpO1xuICAgICAgICAvLyBXZSBjaGFuZ2UgdGhlIHN0YXRlIHRvIG1hdGNoIHRoZSBuZXcgc3RydWN0dXJlXG4gICAgICAgIHJlaHlkcmF0ZShtdXRhdGlvblRyZWUuc3RhdGUsIGNoYW5nZU11dGF0aW9ucyk7XG4gICAgICAgIC8vIFdlIHJ1biBhbnkgbXV0YXRpb25zIHJhbiBkdXJpbmcgdGhlIHNlc3Npb24sIGl0IG1pZ2h0IGZhaWwgdGhvdWdoXG4gICAgICAgIC8vIGFzIHRoZSBzdGF0ZSBzdHJ1Y3R1cmUgbWlnaHQgaGF2ZSBjaGFuZ2VkLCBidXQgbm8gd29ycmllcyB3ZSBqdXN0XG4gICAgICAgIC8vIGlnbm9yZSB0aGF0XG4gICAgICAgIHRoaXMucmV5ZHJhdGVNdXRhdGlvbnNGb3JIb3RSZWxvYWRpbmcuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVoeWRyYXRlKG11dGF0aW9uVHJlZS5zdGF0ZSwgW211dGF0aW9uXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBObyB3b3JyaWVzLCBzdHJ1Y3R1cmUgY2hhbmdlZCBhbmQgd2UgZG8gbm90IHdhbnQgdG8gbXV0YXRlIGFueXdheXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uVHJlZS5mbHVzaCgpO1xuICAgICAgICBtdXRhdGlvblRyZWUuZGlzcG9zZSgpO1xuICAgICAgICBpZiAodGhpcy5kZXZ0b29scykge1xuICAgICAgICAgICAgdGhpcy5kZXZ0b29scy5zZW5kKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVfaW5pdCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogZ2V0QWN0aW9uUGF0aHMoY29uZmlndXJhdGlvbi5hY3Rpb25zKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoLi4ub3BlcmF0b3JzKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSAoZXJyLCBjb250ZXh0LCBuZXh0LCBmaW5hbCA9IG5leHQpID0+IHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyLCBjb250ZXh0KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3BlcmF0b3JJbmRleCA9IDA7XG4gICAgICAgICAgICBjb25zdCBydW4gPSAob3BlcmF0b3JFcnIsIG9wZXJhdG9yQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gb3BlcmF0b3JzW29wZXJhdG9ySW5kZXgrK107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAob3BlcmF0b3IgfHwgbmV4dCkob3BlcmF0b3JFcnIsIG9wZXJhdG9yQ29udGV4dCwgcnVuLCBmaW5hbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChvcGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgKG9wZXJhdG9yIHx8IG5leHQpKG9wZXJhdG9yRXJyb3IsIG9wZXJhdG9yQ29udGV4dCwgcnVuLCBmaW5hbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJ1bihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5zdGFuY2VbSVNfT1BFUkFUT1JdID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4vKlxuICBPUEVSQVRPUlNcbiovXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChmb3JFYWNoSXRlbU9wZXJhdG9yKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSAoZXJyLCBjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgY29udGV4dCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gY29udGV4dC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBldmFsdWF0aW5nQ291bnQgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgbGFzdENvbnRleHQ7XG4gICAgICAgICAgICBsZXQgaGFzRXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgZXZhbHVhdGUgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmFsdWF0aW5nQ291bnQtLTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2YWx1YXRpbmdDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvclN0b3BwZWQoY29udGV4dCwgY29udGV4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCwgY3JlYXRlQ29udGV4dChsYXN0Q29udGV4dCwgY29udGV4dC52YWx1ZSwgbGFzdENvbnRleHQuZXhlY3V0aW9uLnBhdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb250ZXh0LmV4ZWN1dGlvbi5wYXRoLnNsaWNlKDAsIGxhc3RDb250ZXh0LmV4ZWN1dGlvbi5wYXRoLmxlbmd0aCAtIDEpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9wZXJhdG9yU3RhcnRlZCgnZm9yRWFjaCcsICcnLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGxhc3RDb250ZXh0IHx8IGNvbnRleHQsIHZhbHVlLCBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoLmNvbmNhdChTdHJpbmcoaW5kZXgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRXaXRoUGF0aCA9IGNyZWF0ZU5leHRQYXRoKGV2YWx1YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBmb3JFYWNoSXRlbU9wZXJhdG9yKG51bGwsIGxhc3RDb250ZXh0LCBuZXh0V2l0aFBhdGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3JTdG9wcGVkKGNvbnRleHQsIGNvbnRleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIG5leHQobnVsbCwgY3JlYXRlQ29udGV4dChjb250ZXh0LCBjb250ZXh0LnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGluc3RhbmNlW0lTX09QRVJBVE9SXSA9IHRydWU7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFsbGVsKC4uLm9wZXJhdG9ycykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gKGVyciwgY29udGV4dCwgbmV4dCkgPT4ge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIsIGNvbnRleHQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmFsdWF0aW5nQ291bnQgPSBvcGVyYXRvcnMubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IGxhc3RDb250ZXh0O1xuICAgICAgICAgICAgbGV0IGhhc0Vycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGV2YWx1YXRlID0gKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNFcnJvcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBoYXNFcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyLCBsYXN0Q29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2YWx1YXRpbmdDb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmICghZXZhbHVhdGluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yU3RvcHBlZChjb250ZXh0LCBjb250ZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dChudWxsLCBjcmVhdGVDb250ZXh0KGxhc3RDb250ZXh0LCBjb250ZXh0LnZhbHVlLCBsYXN0Q29udGV4dC5leGVjdXRpb24ucGF0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENvbnRleHQuZXhlY3V0aW9uLnBhdGguc2xpY2UoMCwgbGFzdENvbnRleHQuZXhlY3V0aW9uLnBhdGgubGVuZ3RoIC0gMSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3BlcmF0b3JTdGFydGVkKCdwYXJhbGxlbCcsICcnLCBjb250ZXh0KTtcbiAgICAgICAgICAgIG9wZXJhdG9ycy5mb3JFYWNoKChvcGVyYXRvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsYXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobGFzdENvbnRleHQgfHwgY29udGV4dCwgY29udGV4dC52YWx1ZSwgY29udGV4dC5leGVjdXRpb24ucGF0aCAmJiBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoLmNvbmNhdChTdHJpbmcoaW5kZXgpKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFdpdGhQYXRoID0gY3JlYXRlTmV4dFBhdGgoZXZhbHVhdGUpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBvcGVyYXRvcihudWxsLCBsYXN0Q29udGV4dCwgbmV4dFdpdGhQYXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpbnN0YW5jZVtJU19PUEVSQVRPUl0gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXAob3BlcmF0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU9wZXJhdG9yKCdtYXAnLCBnZXRGdW5jdGlvbk5hbWUob3BlcmF0aW9uKSwgKGVyciwgY29udGV4dCwgdmFsdWUsIG5leHQpID0+IHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyLCB2YWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5leHQobnVsbCwgb3BlcmF0aW9uKGNvbnRleHQsIHZhbHVlKSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbiAgICByZXR1cm4gY3JlYXRlT3BlcmF0b3IoJ25vb3AnLCAnJywgKGVyciwgY29udGV4dCwgdmFsdWUsIG5leHQpID0+IHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyLCB2YWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5leHQobnVsbCwgdmFsdWUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlT3BlcmF0b3IoJ2ZpbHRlcicsIGdldEZ1bmN0aW9uTmFtZShvcGVyYXRpb24pLCAoZXJyLCBjb250ZXh0LCB2YWx1ZSwgbmV4dCwgZmluYWwpID0+IHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyLCB2YWx1ZSk7XG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbihjb250ZXh0LCB2YWx1ZSkpXG4gICAgICAgICAgICBuZXh0KG51bGwsIHZhbHVlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZmluYWwobnVsbCwgdmFsdWUpO1xuICAgIH0pO1xufVxubGV0IGhhc1Nob3duQWN0aW9uRGVwcmVjYXRpb24gPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgaWYgKCFoYXNTaG93bkFjdGlvbkRlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgREVQUkVDQVRJT04gLSBUaGUgYWN0aW9uIG9wZXJhdG9yIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgXCJtdXRhdGVcIi4gVGhlIHJlYXNvbiBpcyB0byBhdm9pZCBjb25mdXNpb24gYmV0d2VlbiBhY3Rpb25zIGFuZCBvcGVyYXRvcnMuIENoZWNrIG91dCBhY3Rpb24gXCIke2dldEZ1bmN0aW9uTmFtZShvcGVyYXRpb24pfVwiYCk7XG4gICAgICAgIGhhc1Nob3duQWN0aW9uRGVwcmVjYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTXV0YXRpb25PcGVyYXRvcignYWN0aW9uJywgZ2V0RnVuY3Rpb25OYW1lKG9wZXJhdGlvbiksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wZXJhdGlvbihjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHJlc3VsdC50aGVuKCgpID0+IHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZShvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlTXV0YXRpb25PcGVyYXRvcignbXV0YXRlJywgZ2V0RnVuY3Rpb25OYW1lKG9wZXJhdGlvbiksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wZXJhdGlvbihjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHJlc3VsdC50aGVuKCgpID0+IHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlT3BlcmF0b3IoJ3J1bicsIGdldEZ1bmN0aW9uTmFtZShvcGVyYXRpb24pLCAoZXJyLCBjb250ZXh0LCB2YWx1ZSwgbmV4dCkgPT4ge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIsIHZhbHVlKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcGVyYXRpb24oY29udGV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgbmV4dChudWxsLCByZXN1bHQudGhlbigoKSA9PiB2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dChudWxsLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXRjaEVycm9yKG9wZXJhdGlvbikge1xuICAgIHJldHVybiBjcmVhdGVNdXRhdGlvbk9wZXJhdG9yKCdjYXRjaEVycm9yJywgZ2V0RnVuY3Rpb25OYW1lKG9wZXJhdGlvbiksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KG51bGwsIG9wZXJhdGlvbihjb250ZXh0LCBlcnIpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV4dChudWxsLCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIGlzU2tpcHBlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyeUNhdGNoKHBhdGhzKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSAoZXJyLCBjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgY29udGV4dCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXZhbHVhdGVDYXRjaCA9IChlcnIsIGNhdGNoQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yU3RvcHBlZChjb250ZXh0LCBjb250ZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBuZXh0KGVyciwgY3JlYXRlQ29udGV4dChjYXRjaENvbnRleHQsIGNvbnRleHQudmFsdWUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBldmFsdWF0ZVRyeSA9IChlcnIsIHRyeUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHRyeUNvbnRleHQsIGVyciwgY29udGV4dC5leGVjdXRpb24ucGF0aCAmJiBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoLmNvbmNhdCgnY2F0Y2gnKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRXaXRoUGF0aCA9IGNyZWF0ZU5leHRQYXRoKGV2YWx1YXRlQ2F0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzLmNhdGNoKG51bGwsIG5ld0NvbnRleHQsIG5leHRXaXRoUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvclN0b3BwZWQoY29udGV4dCwgY29udGV4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCwgY3JlYXRlQ29udGV4dCh0cnlDb250ZXh0LCBjb250ZXh0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9wZXJhdG9yU3RhcnRlZCgndHJ5Q2F0Y2gnLCAnJywgY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCBuZXdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjb250ZXh0LCBjb250ZXh0LnZhbHVlLCBjb250ZXh0LmV4ZWN1dGlvbi5wYXRoICYmIGNvbnRleHQuZXhlY3V0aW9uLnBhdGguY29uY2F0KCd0cnknKSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0V2l0aFBhdGggPSBjcmVhdGVOZXh0UGF0aChldmFsdWF0ZVRyeSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwYXRocy50cnkobnVsbCwgbmV3Q29udGV4dCwgbmV4dFdpdGhQYXRoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5zdGFuY2VbSVNfT1BFUkFUT1JdID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9yayhvcGVyYXRpb24sIHBhdGhzKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU9wZXJhdG9yKCdmb3JrJywgZ2V0RnVuY3Rpb25OYW1lKG9wZXJhdGlvbiksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBvcGVyYXRpb24oY29udGV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgbmV4dChudWxsLCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogU3RyaW5nKHBhdGgpLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogcGF0aHNbcGF0aF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbihvcGVyYXRpb24sIHBhdGhzKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU9wZXJhdG9yKCd3aGVuJywgZ2V0RnVuY3Rpb25OYW1lKG9wZXJhdGlvbiksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24oY29udGV4dCwgdmFsdWUpKVxuICAgICAgICAgICAgbmV4dChudWxsLCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogcGF0aHMudHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5leHQobnVsbCwgdmFsdWUsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBwYXRocy5mYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdChtcykge1xuICAgIHJldHVybiBjcmVhdGVPcGVyYXRvcignd2FpdCcsIFN0cmluZyhtcyksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5leHQobnVsbCwgdmFsdWUpLCBtcyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UobXMpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICBsZXQgcHJldmlvdXNGaW5hbDtcbiAgICByZXR1cm4gY3JlYXRlT3BlcmF0b3IoJ2RlYm91bmNlJywgU3RyaW5nKG1zKSwgKGVyciwgY29udGV4dCwgdmFsdWUsIG5leHQsIGZpbmFsKSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBuZXh0KGVyciwgdmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzRmluYWwobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNGaW5hbCA9IGZpbmFsO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIG5leHQobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgfSwgbXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUobXMpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICBsZXQgcHJldmlvdXNGaW5hbDtcbiAgICBsZXQgY3VycmVudE5leHQ7XG4gICAgcmV0dXJuIGNyZWF0ZU9wZXJhdG9yKCd0aHJvdHRsZScsIFN0cmluZyhtcyksIChlcnIsIGNvbnRleHQsIHZhbHVlLCBuZXh0LCBmaW5hbCkgPT4ge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIsIHZhbHVlKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzRmluYWwobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROZXh0ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROZXh0KG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCBtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91c0ZpbmFsID0gZmluYWw7XG4gICAgICAgICAgICBjdXJyZW50TmV4dCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0VW50aWwob3BlcmF0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU9wZXJhdG9yKCd3YWl0VW50aWwnLCBvcGVyYXRpb24ubmFtZSwgKGVyciwgY29udGV4dCwgdmFsdWUsIG5leHQpID0+IHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyLCB2YWx1ZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHJlZSA9IGNvbnRleHQuZXhlY3V0aW9uLmdldFRyYWNrU3RhdGVUcmVlKCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24odHJlZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmVlLnRyYWNrU2NvcGUodGVzdCwgdGVzdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5leHBvcnQgY29uc3QgSVNfUFJPWFkgPSBTeW1ib2woJ0lTX1BST1hZJyk7XG5leHBvcnQgY29uc3QgUEFUSCA9IFN5bWJvbCgnUEFUSCcpO1xuZXhwb3J0IGNvbnN0IFZBTFVFID0gU3ltYm9sKCdWQUxVRScpO1xuZXhwb3J0IGNvbnN0IFBST1hZX1RSRUUgPSBTeW1ib2woJ1BST1hZX1RSRUUnKTtcbmNvbnN0IGFycmF5TXV0YXRpb25zID0gbmV3IFNldChbXG4gICAgJ3B1c2gnLFxuICAgICdzaGlmdCcsXG4gICAgJ3BvcCcsXG4gICAgJ3Vuc2hpZnQnLFxuICAgICdzcGxpY2UnLFxuICAgICdyZXZlcnNlJyxcbiAgICAnc29ydCcsXG4gICAgJ2NvcHlXaXRoaW4nLFxuXSk7XG5jb25zdCBnZXRWYWx1ZSA9IChwcm94eU9yVmFsdWUpID0+IHByb3h5T3JWYWx1ZSAmJiBwcm94eU9yVmFsdWVbSVNfUFJPWFldID8gcHJveHlPclZhbHVlW1ZBTFVFXSA6IHByb3h5T3JWYWx1ZTtcbmNvbnN0IGlzQ2xhc3MgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpO1xuZXhwb3J0IGNsYXNzIFByb3hpZmllciB7XG4gICAgY29uc3RydWN0b3IodHJlZSkge1xuICAgICAgICB0aGlzLnRyZWUgPSB0cmVlO1xuICAgICAgICB0aGlzLkNBQ0hFRF9QUk9YWSA9IFN5bWJvbCgnQ0FDSEVEX1BST1hZJyk7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVyID0gdHJlZS5tYXN0ZXIub3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgfVxuICAgIGNvbmNhdChwYXRoLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBwYXRoID8gcGF0aCArIHRoaXMuZGVsaW1pdGVyICsgcHJvcCA6IHByb3A7XG4gICAgfVxuICAgIGVuc3VyZU11dGF0aW9uVHJhY2tpbmdJc0VuYWJsZWQocGF0aCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMudHJlZS5tYXN0ZXIub3B0aW9ucy5kZXZtb2RlICYmICF0aGlzLnRyZWUuY2FuTXV0YXRlKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcHJveHktc3RhdGUtdHJlZSAtIFlvdSBhcmUgbXV0YXRpbmcgdGhlIHBhdGggXCIke3BhdGh9XCIsIGJ1dCBpdCBpcyBub3QgYWxsb3dlZC4gVGhlIGZvbGxvd2luZyBjb3VsZCBoYXZlIGhhcHBlbmVkOlxuICAgICAgICBcbiAgICAgICAgLSBUaGUgbXV0YXRpb24gaXMgZXhwbGljaXRseSBiZWluZyBibG9ja2V0XG4gICAgICAgIC0gWW91IGFyZSBwYXNzaW5nIHN0YXRlIHRvIGEgM3JkIHBhcnR5IHRvb2wgdHJ5aW5nIHRvIG1hbmlwdWxhdGUgdGhlIHN0YXRlXG4gICAgICAgIC0gWW91IGFyZSBydW5uaW5nIGFzeW5jaHJvbm91cyBjb2RlIGFuZCBmb3Jnb3QgdG8gXCJhd2FpdFwiIGl0cyBleGVjdXRpb25cbiAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNEZWZhdWx0UHJveGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLnByb3hpZmllciA9PT0gdGhpcy50cmVlLm1hc3Rlci5wcm94aWZpZXI7XG4gICAgfVxuICAgIGVuc3VyZVZhbHVlRG9zbnRFeGlzdEluU3RhdGVUcmVlRWxzZXdoZXJlKHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbSVNfUFJPWFldID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHByb3h5LXN0YXRlLXRyZWUgLSBZb3UgYXJlIHRyeWluZyB0byBpbnNlcnQgYSB2YWx1ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBzdGF0ZSB0cmVlIG9uIHBhdGggXCIke3ZhbHVlW1BBVEhdfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0cmFja1BhdGgocGF0aCkge1xuICAgICAgICBpZiAoIXRoaXMudHJlZS5jYW5UcmFjaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0UHJveGlmaWVyKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrU3RhdGVUcmVlID0gdGhpcy50cmVlLm1hc3Rlci5jdXJyZW50VHJlZTtcbiAgICAgICAgICAgIGlmICghdHJhY2tTdGF0ZVRyZWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFja1N0YXRlVHJlZS5hZGRUcmFja2luZ1BhdGgocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB0aGlzLnRyZWUuYWRkVHJhY2tpbmdQYXRoKHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdpdGggdHJhY2tpbmcgdHJlZXMgd2Ugd2FudCB0byBlbnN1cmUgdGhhdCB3ZSBhcmUgYWx3YXlzXG4gICAgLy8gb24gdGhlIGN1cnJlbnRseSB0cmFja2VkIHRyZWUuIFRoaXMgZW5zdXJlcyB3aGVuIHdlIGFjY2Vzc1xuICAgIC8vIGEgdHJhY2tpbmcgcHJveHkgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgY3VycmVudCB0cmFja2luZyB0cmVlIChwYXNzIGFzIHByb3ApXG4gICAgLy8gd2UgbW92ZSB0aGUgb3duZXJzaGlwIHRvIHRoZSBjdXJyZW50IHRyYWNrZXJcbiAgICBnZXRUcmFja2luZ1RyZWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyZWUubWFzdGVyLmN1cnJlbnRUcmVlICYmIHRoaXMuaXNEZWZhdWx0UHJveGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyZWUubWFzdGVyLmN1cnJlbnRUcmVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50cmVlLmNhblRyYWNrKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyZWUuY2FuVHJhY2soKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJlZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0TXV0YXRpb25UcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLm1hc3Rlci5tdXRhdGlvblRyZWUgfHwgdGhpcy50cmVlO1xuICAgIH1cbiAgICBpc1Byb3h5Q2FjaGVkKHZhbHVlLCBwYXRoKSB7XG4gICAgICAgIHJldHVybiAodmFsdWVbdGhpcy5DQUNIRURfUFJPWFldICYmXG4gICAgICAgICAgICBTdHJpbmcodmFsdWVbdGhpcy5DQUNIRURfUFJPWFldW1BBVEhdKSA9PT0gU3RyaW5nKHBhdGgpKTtcbiAgICB9XG4gICAgY3JlYXRlQXJyYXlQcm94eSh2YWx1ZSwgcGF0aCkge1xuICAgICAgICBpZiAodGhpcy5pc1Byb3h5Q2FjaGVkKHZhbHVlLCBwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RoaXMuQ0FDSEVEX1BST1hZXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm94aWZpZXIgPSB0aGlzO1xuICAgICAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh2YWx1ZSwge1xuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBJU19QUk9YWSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFBBVEgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBWQUxVRSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnaW5kZXhPZicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWFyY2hUZXJtLCBvZmZzZXQpID0+IHZhbHVlLmluZGV4T2YoZ2V0VmFsdWUoc2VhcmNoVGVybSksIGdldFZhbHVlKG9mZnNldCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiB0YXJnZXRbcHJvcF0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFhcnJheU11dGF0aW9ucy5oYXMoU3RyaW5nKHByb3ApKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzeW1ib2wnIHx8IHRhcmdldFtwcm9wXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2tpbmdUcmVlID0gcHJveGlmaWVyLmdldFRyYWNraW5nVHJlZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZFBhdGggPSBwcm94aWZpZXIuY29uY2F0KHBhdGgsIHByb3ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUcmVlID0gdHJhY2tpbmdUcmVlIHx8IHByb3hpZmllci50cmVlO1xuICAgICAgICAgICAgICAgIHRyYWNraW5nVHJlZSAmJiB0cmFja2luZ1RyZWUucHJveGlmaWVyLnRyYWNrUGF0aChuZXN0ZWRQYXRoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJlZS50cmFja1BhdGhMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+IGNiKG5lc3RlZFBhdGgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSBTdHJpbmcocHJvcCk7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5TXV0YXRpb25zLmhhcyhtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBwcm94aWZpZXIuZW5zdXJlTXV0YXRpb25UcmFja2luZ0lzRW5hYmxlZChuZXN0ZWRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvblRyZWUgPSBwcm94aWZpZXIuZ2V0TXV0YXRpb25UcmVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0YXJnZXRbcHJvcF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0YXJnZXRbcHJvcF0oLi4uYXJncy5tYXAoKGFyZykgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIHByb3hpZmllci5lbnN1cmVWYWx1ZURvc250RXhpc3RJblN0YXRlVHJlZUVsc2V3aGVyZShhcmcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuYWRkTXV0YXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogcHJveGlmaWVyLmRlbGltaXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFtwcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm94aWZpZXIucHJveGlmeSh0YXJnZXRbcHJvcF0sIG5lc3RlZFBhdGgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkUGF0aCA9IHByb3hpZmllci5jb25jYXQocGF0aCwgcHJvcCk7XG4gICAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIHByb3hpZmllci5lbnN1cmVNdXRhdGlvblRyYWNraW5nSXNFbmFibGVkKG5lc3RlZFBhdGgpO1xuICAgICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBwcm94aWZpZXIuZW5zdXJlVmFsdWVEb3NudEV4aXN0SW5TdGF0ZVRyZWVFbHNld2hlcmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uVHJlZSA9IHByb3hpZmllci5nZXRNdXRhdGlvblRyZWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3AsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuYWRkTXV0YXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdzZXQnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBuZXN0ZWRQYXRoLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBbdmFsdWVdLFxuICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IHByb3hpZmllci5kZWxpbWl0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgdGhpcy5DQUNIRURfUFJPWFksIHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm94eSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9XG4gICAgY3JlYXRlT2JqZWN0UHJveHkob2JqZWN0LCBwYXRoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUHJveHlDYWNoZWQob2JqZWN0LCBwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFt0aGlzLkNBQ0hFRF9QUk9YWV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJveGlmaWVyID0gdGhpcztcbiAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB7XG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IElTX1BST1hZKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gUEFUSClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFZBTFVFKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBQUk9YWV9UUkVFKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJveGlmaWVyLnRyZWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3ltYm9sJyB8fCBwcm9wIGluIE9iamVjdC5wcm90b3R5cGUgfHwgdGFyZ2V0W3Byb3BdIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApIHx8IChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpLCBwcm9wKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgJ2dldCcgaW4gZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRlc2NyaXB0b3IuZ2V0LmNhbGwocHJveHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJveGlmaWVyLnRyZWUubWFzdGVyLm9wdGlvbnMuZGV2bW9kZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveGlmaWVyLnRyZWUubWFzdGVyLm9wdGlvbnMub25HZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3hpZmllci50cmVlLm1hc3Rlci5vcHRpb25zLm9uR2V0dGVyKHByb3hpZmllci5jb25jYXQocGF0aCwgcHJvcCksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNraW5nVHJlZSA9IHByb3hpZmllci5nZXRUcmFja2luZ1RyZWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQYXRoID0gcHJveGlmaWVyLmNvbmNhdChwYXRoLCBwcm9wKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VHJlZSA9IHRyYWNraW5nVHJlZSB8fCBwcm94aWZpZXIudHJlZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm94aWZpZXIudHJlZS5tYXN0ZXIub3B0aW9ucy5vbkdldEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJveGlmaWVyLnRyZWUubWFzdGVyLm9wdGlvbnMub25HZXRGdW5jdGlvbih0cmFja2luZ1RyZWUgfHwgcHJveGlmaWVyLnRyZWUsIG5lc3RlZFBhdGgsIHRhcmdldCwgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQ2xhc3ModGFyZ2V0KSA/IHRhcmdldFZhbHVlIDogdGFyZ2V0VmFsdWUuY2FsbCh0YXJnZXQsIHByb3hpZmllci50cmVlLCBuZXN0ZWRQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmVlLnRyYWNrUGF0aExpc3RlbmVycy5mb3JFYWNoKChjYikgPT4gY2IobmVzdGVkUGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFja2luZ1RyZWUgJiYgdHJhY2tpbmdUcmVlLnByb3hpZmllci50cmFja1BhdGgobmVzdGVkUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm94aWZpZXIucHJveGlmeSh0YXJnZXRWYWx1ZSwgbmVzdGVkUGF0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQYXRoID0gcHJveGlmaWVyLmNvbmNhdChwYXRoLCBwcm9wKTtcbiAgICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gcHJveGlmaWVyLmVuc3VyZU11dGF0aW9uVHJhY2tpbmdJc0VuYWJsZWQobmVzdGVkUGF0aCk7XG4gICAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIHByb3hpZmllci5lbnN1cmVWYWx1ZURvc250RXhpc3RJblN0YXRlVHJlZUVsc2V3aGVyZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdENoYW5nZVBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdENoYW5nZVBhdGggPSBwYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvblRyZWUgPSBwcm94aWZpZXIuZ2V0TXV0YXRpb25UcmVlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHByb3hpZmllci50cmVlLm1hc3Rlci5vcHRpb25zLm9uU2V0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwcm94aWZpZXIudHJlZS5tYXN0ZXIub3B0aW9ucy5vblNldEZ1bmN0aW9uKHByb3hpZmllci5nZXRUcmFja2luZ1RyZWUoKSB8fCBwcm94aWZpZXIudHJlZSwgbmVzdGVkUGF0aCwgdGFyZ2V0LCBwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWRWYWx1ZSA9IGV4aXN0aW5nVmFsdWUgIT09IHZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uVHJlZS5hZGRNdXRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3NldCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IG5lc3RlZFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFt2YWx1ZV0sXG4gICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogcHJveGlmaWVyLmRlbGltaXRlcixcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZFZhbHVlXG4gICAgICAgICAgICAgICAgfSwgb2JqZWN0Q2hhbmdlUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQYXRoID0gcHJveGlmaWVyLmNvbmNhdChwYXRoLCBwcm9wKTtcbiAgICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gcHJveGlmaWVyLmVuc3VyZU11dGF0aW9uVHJhY2tpbmdJc0VuYWJsZWQobmVzdGVkUGF0aCk7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdENoYW5nZVBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdENoYW5nZVBhdGggPSBwYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvblRyZWUgPSBwcm94aWZpZXIuZ2V0TXV0YXRpb25UcmVlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvblRyZWUuYWRkTXV0YXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd1bnNldCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IG5lc3RlZFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IHByb3hpZmllci5kZWxpbWl0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LCBvYmplY3RDaGFuZ2VQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCB0aGlzLkNBQ0hFRF9QUk9YWSwge1xuICAgICAgICAgICAgdmFsdWU6IHByb3h5LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH1cbiAgICBwcm94aWZ5KHZhbHVlLCBwYXRoKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaXNVbm1hdGNoaW5nUHJveHkgPSB2YWx1ZVtJU19QUk9YWV0gJiZcbiAgICAgICAgICAgICAgICAoU3RyaW5nKHZhbHVlW1BBVEhdKSAhPT0gU3RyaW5nKHBhdGgpIHx8XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW1ZBTFVFXVt0aGlzLkNBQ0hFRF9QUk9YWV0gIT09IHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1VubWF0Y2hpbmdQcm94eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3hpZnkodmFsdWVbVkFMVUVdLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlW0lTX1BST1hZXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQXJyYXlQcm94eSh2YWx1ZSwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCBpc0NsYXNzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdFByb3h5KHZhbHVlLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJveHlmaWVyLmpzLm1hcCIsImltcG9ydCB7IFByb3hpZmllciB9IGZyb20gJy4vUHJveHlmaWVyJztcbmV4cG9ydCBjbGFzcyBNdXRhdGlvblRyZWUge1xuICAgIGNvbnN0cnVjdG9yKG1hc3RlciwgcHJveGlmaWVyKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25DYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vYmplY3RDaGFuZ2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmlzVHJhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jsb2NraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhY2tQYXRoTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuaXNUcmFja2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMubWFzdGVyID0gbWFzdGVyO1xuICAgICAgICB0aGlzLnByb3hpZmllciA9IHByb3hpZmllciB8fCBuZXcgUHJveGlmaWVyKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcm94aWZpZXIucHJveGlmeShtYXN0ZXIuc291cmNlU3RhdGUsICcnKTtcbiAgICB9XG4gICAgdHJhY2tQYXRocygpIHtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHBhdGhzLmFkZChwYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFja1BhdGhMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrUGF0aExpc3RlbmVycy5zcGxpY2UodGhpcy50cmFja1BhdGhMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRNdXRhdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25zLnNsaWNlKCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25zLmxlbmd0aCA9IDA7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbnM7XG4gICAgfVxuICAgIGdldE9iamVjdENoYW5nZXMoKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdENoYW5nZXMgPSBuZXcgU2V0KFsuLi50aGlzLm9iamVjdENoYW5nZXNdKTtcbiAgICAgICAgdGhpcy5vYmplY3RDaGFuZ2VzLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiBvYmplY3RDaGFuZ2VzO1xuICAgIH1cbiAgICBhZGRNdXRhdGlvbihtdXRhdGlvbiwgb2JqZWN0Q2hhbmdlUGF0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Rmx1c2hJZCA9IHRoaXMubWFzdGVyLmN1cnJlbnRGbHVzaElkO1xuICAgICAgICB0aGlzLm11dGF0aW9ucy5wdXNoKG11dGF0aW9uKTtcbiAgICAgICAgaWYgKG9iamVjdENoYW5nZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0Q2hhbmdlcy5hZGQob2JqZWN0Q2hhbmdlUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgY2Igb2YgdGhpcy5tYXN0ZXIubXV0YXRpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNiKG11dGF0aW9uLCBuZXcgU2V0KG9iamVjdENoYW5nZVBhdGggPyBbbXV0YXRpb24ucGF0aCwgb2JqZWN0Q2hhbmdlUGF0aF0gOiBbbXV0YXRpb24ucGF0aF0pLCBjdXJyZW50Rmx1c2hJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgY2FsbGJhY2sgb2YgdGhpcy5tdXRhdGlvbkNhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2sobXV0YXRpb24sIG5ldyBTZXQob2JqZWN0Q2hhbmdlUGF0aCA/IFttdXRhdGlvbi5wYXRoLCBvYmplY3RDaGFuZ2VQYXRoXSA6IFttdXRhdGlvbi5wYXRoXSksIGN1cnJlbnRGbHVzaElkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbHVzaChpc0FzeW5jID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFzdGVyLmZsdXNoKHRoaXMsIGlzQXN5bmMpO1xuICAgIH1cbiAgICBvbk11dGF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIGNhbk11dGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUcmFja2luZyAmJiAhdGhpcy5pc0Jsb2NraW5nO1xuICAgIH1cbiAgICBjYW5UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBibG9ja011dGF0aW9ucygpIHtcbiAgICAgICAgdGhpcy5pc0Jsb2NraW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZW5hYmxlTXV0YXRpb25zKCkge1xuICAgICAgICB0aGlzLmlzQmxvY2tpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc1RyYWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXV0YXRpb25DYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5wcm94aWZpZXIgPSB0aGlzLm1hc3Rlci5wcm94aWZpZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11dGF0aW9uVHJlZS5qcy5tYXAiLCJleHBvcnQgY2xhc3MgVHJhY2tTdGF0ZVRyZWUge1xuICAgIGNvbnN0cnVjdG9yKG1hc3Rlcikge1xuICAgICAgICB0aGlzLnBhdGhEZXBlbmRlbmNpZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFja1BhdGhMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXN0ZXIgPSBtYXN0ZXI7XG4gICAgICAgIHRoaXMucHJveGlmaWVyID0gbWFzdGVyLnByb3hpZmllcjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG1hc3Rlci5zdGF0ZTtcbiAgICB9XG4gICAgdHJhY2tQYXRocygpIHtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHBhdGhzLmFkZChwYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFja1BhdGhMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrUGF0aExpc3RlbmVycy5zcGxpY2UodGhpcy50cmFja1BhdGhMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjYW5NdXRhdGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2FuVHJhY2soKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhZGRUcmFja2luZ1BhdGgocGF0aCkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2spIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGhEZXBlbmRlbmNpZXMuYWRkKHBhdGgpO1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5tYXN0ZXIuYWRkUGF0aERlcGVuZGVuY3kocGF0aCwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJhY2soY2IpIHtcbiAgICAgICAgdGhpcy5tYXN0ZXIuY2hhbmdlVHJhY2tTdGF0ZVRyZWUodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyVHJhY2tpbmcoKTtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYiguLi5hcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNsZWFyVHJhY2tpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXRoIG9mIHRoaXMucGF0aERlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyLnJlbW92ZVBhdGhEZXBlbmRlbmN5KHBhdGgsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0aERlcGVuZGVuY2llcy5jbGVhcigpO1xuICAgIH1cbiAgICBzdG9wVHJhY2tpbmcoKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgdHJhY2tTY29wZShzY29wZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQcmV2aW91c1RyZWUgPSB0aGlzLm1hc3Rlci5wcmV2aW91c1RyZWU7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ3VycmVudFRyZWUgPSB0aGlzLm1hc3Rlci5jdXJyZW50VHJlZTtcbiAgICAgICAgdGhpcy5tYXN0ZXIuY3VycmVudFRyZWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyYWNrKGNiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc2NvcGUodGhpcyk7XG4gICAgICAgIHRoaXMubWFzdGVyLmN1cnJlbnRUcmVlID0gcHJldmlvdXNDdXJyZW50VHJlZTtcbiAgICAgICAgdGhpcy5tYXN0ZXIucHJldmlvdXNUcmVlID0gcHJldmlvdXNQcmV2aW91c1RyZWU7XG4gICAgICAgIHRoaXMuc3RvcFRyYWNraW5nKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5wYXRoRGVwZW5kZW5jaWVzLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyVHJhY2tpbmcoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMucHJveGlmaWVyID0gdGhpcy5tYXN0ZXIucHJveGlmaWVyO1xuICAgICAgICBpZiAodGhpcy5tYXN0ZXIuY3VycmVudFRyZWUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMubWFzdGVyLmN1cnJlbnRUcmVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmFja1N0YXRlVHJlZS5qcy5tYXAiLCJpbXBvcnQgeyBNdXRhdGlvblRyZWUgfSBmcm9tICcuL011dGF0aW9uVHJlZSc7XG5pbXBvcnQgeyBJU19QUk9YWSwgUEFUSCwgUFJPWFlfVFJFRSwgUHJveGlmaWVyLCBWQUxVRSB9IGZyb20gJy4vUHJveHlmaWVyJztcbmltcG9ydCB7IFRyYWNrU3RhdGVUcmVlIH0gZnJvbSAnLi9UcmFja1N0YXRlVHJlZSc7XG5leHBvcnQgeyBJU19QUk9YWSwgUFJPWFlfVFJFRSwgVkFMVUUsIFBBVEgsIFRyYWNrU3RhdGVUcmVlLCBNdXRhdGlvblRyZWUsIH07XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjbGFzcyBQcm94eVN0YXRlVHJlZSB7XG4gICAgY29uc3RydWN0b3Ioc3RhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLmNhY2hlID0ge1xuICAgICAgICAgICAgbXV0YXRpb25UcmVlOiBbXSxcbiAgICAgICAgICAgIHRyYWNrU3RhdGVUcmVlOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5mbHVzaENhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLm11dGF0aW9uQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEZsdXNoSWQgPSAwO1xuICAgICAgICB0aGlzLnBhdGhEZXBlbmRlbmNpZXMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmRldm1vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRldm1vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5kZWxpbWl0ZXIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gJy4nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFzdGVyID0gdGhpcztcbiAgICAgICAgdGhpcy5zb3VyY2VTdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrU3RhdGVQcm94aWZpZXIoKTtcbiAgICB9XG4gICAgLypcbiAgICAgIFdlIGNyZWF0ZSBhIGJhc2UgcHJveGlmaWVyIGZvciB0cmFja2luZyBzdGF0ZS4gVGhhdCBtZWFucyB0aGVyZSBpcyBvbmVcbiAgICAgIHByb3hpZmllciBmb3IgYWxsIHRyYWNrIHN0YXRlIHRyZWVzLiBUaGlzIHdvcmtzIGJlY2F1c2UgdGhlIGFjdHVhbCB0cmFja2luZ1xuICAgICAgcmVmZXJzIHRvIHRoZSBjdXJyZW50IHRyZWUgb24gXCJtYXN0ZXJcIlxuICAgICovXG4gICAgY3JlYXRlVHJhY2tTdGF0ZVByb3hpZmllcigpIHtcbiAgICAgICAgY29uc3QgdHJhY2tTdGF0ZVRyZWUgPSBuZXcgVHJhY2tTdGF0ZVRyZWUodGhpcyk7XG4gICAgICAgIHRoaXMucHJveGlmaWVyID0gdHJhY2tTdGF0ZVRyZWUucHJveGlmaWVyID0gbmV3IFByb3hpZmllcih0cmFja1N0YXRlVHJlZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0cmFja1N0YXRlVHJlZS5zdGF0ZSA9IHRoaXMucHJveGlmaWVyLnByb3hpZnkodGhpcy5zb3VyY2VTdGF0ZSwgJycpO1xuICAgIH1cbiAgICBnZXRNdXRhdGlvblRyZWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRldm1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tdXRhdGlvblRyZWUgPVxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25UcmVlIHx8IG5ldyBNdXRhdGlvblRyZWUodGhpcywgdGhpcy5wcm94aWZpZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmVlID0gdGhpcy5jYWNoZS5tdXRhdGlvblRyZWUucG9wKCkgfHwgbmV3IE11dGF0aW9uVHJlZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfVxuICAgIGdldFRyYWNrU3RhdGVUcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS50cmFja1N0YXRlVHJlZS5wb3AoKSB8fCBuZXcgVHJhY2tTdGF0ZVRyZWUodGhpcyk7XG4gICAgfVxuICAgIGdldFRyYWNrU3RhdGVUcmVlV2l0aFByb3hpZmllcigpIHtcbiAgICAgICAgY29uc3QgdHJlZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZVRyZWUoKTtcbiAgICAgICAgdHJlZS5wcm94aWZpZXIgPSBuZXcgUHJveGlmaWVyKHRyZWUpO1xuICAgICAgICB0cmVlLnN0YXRlID0gdHJlZS5wcm94aWZpZXIucHJveGlmeSh0aGlzLnNvdXJjZVN0YXRlLCAnJyk7XG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH1cbiAgICBjaGFuZ2VUcmFja1N0YXRlVHJlZSh0cmVlKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNUcmVlID0gdGhpcy5jdXJyZW50VHJlZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJlZSA9IHRyZWU7XG4gICAgfVxuICAgIGRpc3Bvc2VUcmVlKHRyZWUpIHtcbiAgICAgICAgaWYgKHRyZWUgaW5zdGFuY2VvZiBNdXRhdGlvblRyZWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUubXV0YXRpb25UcmVlLnB1c2godHJlZS5kaXNwb3NlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRyZWUgaW5zdGFuY2VvZiBUcmFja1N0YXRlVHJlZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS50cmFja1N0YXRlVHJlZS5wdXNoKHRyZWUuZGlzcG9zZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk11dGF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uQ2FsbGJhY2tzLnNwbGljZSh0aGlzLm11dGF0aW9uQ2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZm9yY2VGbHVzaCgpIHtcbiAgICAgICAgY29uc3QgZW1wdHlNdXRhdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgZW1wdHlQYXRocyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5wYXRoRGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnBhdGhEZXBlbmRlbmNpZXNba2V5XTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVtcHR5TXV0YXRpb25zLCBlbXB0eVBhdGhzLCB0aGlzLmN1cnJlbnRGbHVzaElkKyssIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZsdXNoKHRyZWVzLCBpc0FzeW5jID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGNoYW5nZXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRyZWVzKSkge1xuICAgICAgICAgICAgY2hhbmdlcyA9IHRyZWVzLnJlZHVjZSgoYWdnciwgdHJlZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IGFnZ3IubXV0YXRpb25zLmNvbmNhdCh0cmVlLmdldE11dGF0aW9ucygpKSxcbiAgICAgICAgICAgICAgICBvYmplY3RDaGFuZ2VzOiBuZXcgU2V0KFtcbiAgICAgICAgICAgICAgICAgICAgLi4uYWdnci5vYmplY3RDaGFuZ2VzLFxuICAgICAgICAgICAgICAgICAgICAuLi50cmVlLmdldE9iamVjdENoYW5nZXMoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBvYmplY3RDaGFuZ2VzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zOiB0cmVlcy5nZXRNdXRhdGlvbnMoKSxcbiAgICAgICAgICAgICAgICBvYmplY3RDaGFuZ2VzOiB0cmVlcy5nZXRPYmplY3RDaGFuZ2VzKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hhbmdlcy5tdXRhdGlvbnMubGVuZ3RoICYmICFjaGFuZ2VzLm9iamVjdENoYW5nZXMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGZsdXNoSWQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBwYXRoQ2FsbGJhY2tzVG9DYWxsID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBmbHVzaElkID0gdGhpcy5jdXJyZW50Rmx1c2hJZCsrO1xuICAgICAgICBmb3IgKGxldCBvYmplY3RDaGFuZ2Ugb2YgY2hhbmdlcy5vYmplY3RDaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXRoRGVwZW5kZW5jaWVzW29iamVjdENoYW5nZV0pIHtcbiAgICAgICAgICAgICAgICBwYXRocy5hZGQob2JqZWN0Q2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBjaGFuZ2VzLm11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmhhc0NoYW5nZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBhdGhzLmFkZChtdXRhdGlvbi5wYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0IHNvIHRoYXQgcGFyZW50IHBhdGhzIGFyZSBjYWxsZWQgZmlyc3RcbiAgICAgICAgY29uc3Qgc29ydGVkUGF0aHMgPSBBcnJheS5mcm9tKHBhdGhzKS5zb3J0KCk7XG4gICAgICAgIGZvciAobGV0IHBhdGggb2Ygc29ydGVkUGF0aHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdGhEZXBlbmRlbmNpZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjYWxsYmFjayBvZiB0aGlzLnBhdGhEZXBlbmRlbmNpZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aENhbGxiYWNrc1RvQ2FsbC5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBjYWxsYmFjayBvZiBwYXRoQ2FsbGJhY2tzVG9DYWxsKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjaGFuZ2VzLm11dGF0aW9ucywgc29ydGVkUGF0aHMsIGZsdXNoSWQsIGlzQXN5bmMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgdG8gZW5zdXJlIHRoYXQgd2UgaXRlcmF0ZSBhbGwgY2FsbGJhY2tzLiBPbmUgZmx1c2ggbWlnaHRcbiAgICAgICAgLy8gbGVhZCB0byBhIGNoYW5nZSBvZiB0aGUgYXJyYXkgKGRpc3Bvc2luZyksIHdoaWNoIG1lYW5zIHNvbWV0aGluZ1xuICAgICAgICAvLyBtaWdodCBiZSBza2lwcGVkLiBCdXQgd2Ugc3RpbGwgd2FudCB0byBhbGxvdyByZW1vdmFsIG9mIGNhbGxiYWNrcyxcbiAgICAgICAgLy8gd2UganVzdCBkbyBub3Qgd2FudCB0byBza2lwIGFueSwgd2hpY2ggaXMgd2h5IHdlIHN0aWxsIGNoZWNrIGlmIGl0XG4gICAgICAgIC8vIGV4aXN0cyBpbiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgICAgY29uc3QgZmx1c2hDYWxsYmFja3MgPSB0aGlzLmZsdXNoQ2FsbGJhY2tzLnNsaWNlKCk7XG4gICAgICAgIGZvciAobGV0IGNhbGxiYWNrIG9mIGZsdXNoQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mbHVzaENhbGxiYWNrcy5pbmNsdWRlcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjaGFuZ2VzLm11dGF0aW9ucywgc29ydGVkUGF0aHMsIGZsdXNoSWQsIGlzQXN5bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLmNsZWFyKCk7XG4gICAgICAgIHBhdGhDYWxsYmFja3NUb0NhbGwuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG11dGF0aW9uczogY2hhbmdlcy5tdXRhdGlvbnMsXG4gICAgICAgICAgICBmbHVzaElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkZsdXNoKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZmx1c2hDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLmZsdXNoQ2FsbGJhY2tzLnNwbGljZSh0aGlzLmZsdXNoQ2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICB9XG4gICAgcmVzY29wZSh2YWx1ZSwgdHJlZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWVbSVNfUFJPWFldXG4gICAgICAgICAgICA/IHRyZWUucHJveGlmaWVyLnByb3hpZnkodmFsdWVbVkFMVUVdLCB2YWx1ZVtQQVRIXSlcbiAgICAgICAgICAgIDogdmFsdWU7XG4gICAgfVxuICAgIGFkZFBhdGhEZXBlbmRlbmN5KHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoRGVwZW5kZW5jaWVzW3BhdGhdKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGhEZXBlbmRlbmNpZXNbcGF0aF0gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXRoRGVwZW5kZW5jaWVzW3BhdGhdLmFkZChjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlbW92ZVBhdGhEZXBlbmRlbmN5KHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucGF0aERlcGVuZGVuY2llc1twYXRoXS5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICBpZiAoIXRoaXMucGF0aERlcGVuZGVuY2llc1twYXRoXS5zaXplKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wYXRoRGVwZW5kZW5jaWVzW3BhdGhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlU3RhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHkoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9aWYoIWFhKXRocm93IEVycm9yKHkoMjI3KSk7dmFyIGJhPW5ldyBTZXQsY2E9e307ZnVuY3Rpb24gZGEoYSxiKXtlYShhLGIpO2VhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBlYShhLGIpe2NhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyliYS5hZGQoYlthXSl9XG52YXIgZmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGhhPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxpYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuamE9e30sa2E9e307ZnVuY3Rpb24gbGEoYSl7aWYoaWEuY2FsbChrYSxhKSlyZXR1cm4hMDtpZihpYS5jYWxsKGphLGEpKXJldHVybiExO2lmKGhhLnRlc3QoYSkpcmV0dXJuIGthW2FdPSEwO2phW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIG1hKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gbmEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIG9hPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EsXG5wYSk7RFtiXT1uZXcgQihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5ELnhsaW5rSHJlZj1uZXcgQihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiBxYShhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChuYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/bGEoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbnZhciByYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxzYT02MDEwMyx0YT02MDEwNix1YT02MDEwNyx3YT02MDEwOCx4YT02MDExNCx5YT02MDEwOSx6YT02MDExMCxBYT02MDExMixCYT02MDExMyxDYT02MDEyMCxEYT02MDExNSxFYT02MDExNixGYT02MDEyMSxHYT02MDEyOCxIYT02MDEyOSxJYT02MDEzMCxKYT02MDEzMTtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciBFPVN5bWJvbC5mb3I7c2E9RShcInJlYWN0LmVsZW1lbnRcIik7dGE9RShcInJlYWN0LnBvcnRhbFwiKTt1YT1FKFwicmVhY3QuZnJhZ21lbnRcIik7d2E9RShcInJlYWN0LnN0cmljdF9tb2RlXCIpO3hhPUUoXCJyZWFjdC5wcm9maWxlclwiKTt5YT1FKFwicmVhY3QucHJvdmlkZXJcIik7emE9RShcInJlYWN0LmNvbnRleHRcIik7QWE9RShcInJlYWN0LmZvcndhcmRfcmVmXCIpO0JhPUUoXCJyZWFjdC5zdXNwZW5zZVwiKTtDYT1FKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtEYT1FKFwicmVhY3QubWVtb1wiKTtFYT1FKFwicmVhY3QubGF6eVwiKTtGYT1FKFwicmVhY3QuYmxvY2tcIik7RShcInJlYWN0LnNjb3BlXCIpO0dhPUUoXCJyZWFjdC5vcGFxdWUuaWRcIik7SGE9RShcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7SWE9RShcInJlYWN0Lm9mZnNjcmVlblwiKTtKYT1FKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKX1cbnZhciBLYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gTGEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUthJiZhW0thXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBNYTtmdW5jdGlvbiBOYShhKXtpZih2b2lkIDA9PT1NYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtNYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTWErYX12YXIgT2E9ITE7XG5mdW5jdGlvbiBQYShhLGIpe2lmKCFhfHxPYSlyZXR1cm5cIlwiO09hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChrKXt2YXIgZD1rfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2goayl7ZD1rfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goayl7ZD1rfWEoKX19Y2F0Y2goayl7aWYoayYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBrLnN0YWNrKXtmb3IodmFyIGU9ay5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXJldHVyblwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e09hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TmEoYSk6XCJcIn1cbmZ1bmN0aW9uIFFhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBOYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE5hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBOYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE5hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1QYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1QYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMjI6cmV0dXJuIGE9UGEoYS50eXBlLl9yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPVBhKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUmEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB0YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgeGE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2Ugd2E6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBCYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBDYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB6YTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSB5YTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBBYTp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtcbnJldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgRGE6cmV0dXJuIFJhKGEudHlwZSk7Y2FzZSBGYTpyZXR1cm4gUmEoYS5fcmVuZGVyKTtjYXNlIEVhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBSYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gJGEoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZxYShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYWIoYSxiKXskYShhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2JiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmJiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGJiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfWZ1bmN0aW9uIGRiKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGViKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9ZGIoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfVxuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IoeSg5MSkpO3JldHVybiBtKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHkoOTIpKTtpZihBcnJheS5pc0FycmF5KGMpKXtpZighKDE+PWMubGVuZ3RoKSl0aHJvdyBFcnJvcih5KDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIga2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gbGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/bGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbmIsb2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09a2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bmI9bmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gcGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBxYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxyYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocWIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtxYltiXT1xYlthXX0pfSk7ZnVuY3Rpb24gc2IoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHFiLmhhc093blByb3BlcnR5KGEpJiZxYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiB0YihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1zYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB1Yj1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdmIoYSxiKXtpZihiKXtpZih1YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHkoNjApKTtpZighKFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHkoNjIpKTt9fVxuZnVuY3Rpb24gd2IoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IoeSgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtyZXR1cm4gYShiLGMsZCxlKX1mdW5jdGlvbiBJYigpe312YXIgSmI9R2IsS2I9ITEsTGI9ITE7ZnVuY3Rpb24gTWIoKXtpZihudWxsIT09emJ8fG51bGwhPT1BYilJYigpLEZiKCl9XG5mdW5jdGlvbiBOYihhLGIsYyl7aWYoTGIpcmV0dXJuIGEoYixjKTtMYj0hMDt0cnl7cmV0dXJuIEpiKGEsYixjKX1maW5hbGx5e0xiPSExLE1iKCl9fVxuZnVuY3Rpb24gT2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcih5KDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIFBiPSExO2lmKGZhKXRyeXt2YXIgUWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFFiLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtQYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpfWNhdGNoKGEpe1BiPSExfWZ1bmN0aW9uIFJiKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBTYj0hMSxUYj1udWxsLFViPSExLFZiPW51bGwsV2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7U2I9ITA7VGI9YX19O2Z1bmN0aW9uIFhiKGEsYixjLGQsZSxmLGcsaCxrKXtTYj0hMTtUYj1udWxsO1JiLmFwcGx5KFdiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBZYihhLGIsYyxkLGUsZixnLGgsayl7WGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKFNiKXtpZihTYil7dmFyIGw9VGI7U2I9ITE7VGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHkoMTk4KSk7VWJ8fChVYj0hMCxWYj1sKX19ZnVuY3Rpb24gWmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiAkYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGFjKGEpe2lmKFpiKGEpIT09YSl0aHJvdyBFcnJvcih5KDE4OCkpO31cbmZ1bmN0aW9uIGJjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVpiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGFjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGFjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IoeSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih5KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHkoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gY2MoYSl7YT1iYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRjKGEsYil7Zm9yKHZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1iOyl7aWYoYj09PWF8fGI9PT1jKXJldHVybiEwO2I9Yi5yZXR1cm59cmV0dXJuITF9dmFyIGVjLGZjLGdjLGhjLGljPSExLGpjPVtdLGtjPW51bGwsbGM9bnVsbCxtYz1udWxsLG5jPW5ldyBNYXAsb2M9bmV3IE1hcCxwYz1bXSxxYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiByYyhhLGIsYyxkLGUpe3JldHVybntibG9ja2VkT246YSxkb21FdmVudE5hbWU6YixldmVudFN5c3RlbUZsYWdzOmN8MTYsbmF0aXZlRXZlbnQ6ZSx0YXJnZXRDb250YWluZXJzOltkXX19ZnVuY3Rpb24gc2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjprYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6bGM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6bWM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOm5jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOm9jLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gdGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT1yYyhiLGMsZCxlLGYpLG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmZmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gdWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4ga2M9dGMoa2MsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIGxjPXRjKGxjLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBtYz10YyhtYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO25jLnNldChmLHRjKG5jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxvYy5zZXQoZix0YyhvYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiB2YyhhKXt2YXIgYj13YyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVpiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPSRiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO2hjKGEubGFuZVByaW9yaXR5LGZ1bmN0aW9uKCl7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoYS5wcmlvcml0eSxmdW5jdGlvbigpe2djKGMpfSl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmh5ZHJhdGUpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24geGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZmYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiB6YyhhLGIsYyl7eGMoYSkmJmMuZGVsZXRlKGIpfVxuZnVuY3Rpb24gQWMoKXtmb3IoaWM9ITE7MDxqYy5sZW5ndGg7KXt2YXIgYT1qY1swXTtpZihudWxsIT09YS5ibG9ja2VkT24pe2E9Q2IoYS5ibG9ja2VkT24pO251bGwhPT1hJiZlYyhhKTticmVha31mb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yyl7YS5ibG9ja2VkT249YzticmVha31iLnNoaWZ0KCl9bnVsbD09PWEuYmxvY2tlZE9uJiZqYy5zaGlmdCgpfW51bGwhPT1rYyYmeGMoa2MpJiYoa2M9bnVsbCk7bnVsbCE9PWxjJiZ4YyhsYykmJihsYz1udWxsKTtudWxsIT09bWMmJnhjKG1jKSYmKG1jPW51bGwpO25jLmZvckVhY2goemMpO29jLmZvckVhY2goemMpfVxuZnVuY3Rpb24gQmMoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLGljfHwoaWM9ITAsci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksQWMpKSl9XG5mdW5jdGlvbiBDYyhhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBCYyhiLGEpfWlmKDA8amMubGVuZ3RoKXtCYyhqY1swXSxhKTtmb3IodmFyIGM9MTtjPGpjLmxlbmd0aDtjKyspe3ZhciBkPWpjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09a2MmJkJjKGtjLGEpO251bGwhPT1sYyYmQmMobGMsYSk7bnVsbCE9PW1jJiZCYyhtYyxhKTtuYy5mb3JFYWNoKGIpO29jLmZvckVhY2goYik7Zm9yKGM9MDtjPHBjLmxlbmd0aDtjKyspZD1wY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8cGMubGVuZ3RoJiYoYz1wY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOyl2YyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJnBjLnNoaWZ0KCl9XG5mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBFYz17YW5pbWF0aW9uZW5kOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6RGMoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxGYz17fSxHYz17fTtcbmZhJiYoR2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgRWMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgRWMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBIYyhhKXtpZihGY1thXSlyZXR1cm4gRmNbYV07aWYoIUVjW2FdKXJldHVybiBhO3ZhciBiPUVjW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIEdjKXJldHVybiBGY1thXT1iW2NdO3JldHVybiBhfVxudmFyIEljPUhjKFwiYW5pbWF0aW9uZW5kXCIpLEpjPUhjKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLEtjPUhjKFwiYW5pbWF0aW9uc3RhcnRcIiksTGM9SGMoXCJ0cmFuc2l0aW9uZW5kXCIpLE1jPW5ldyBNYXAsTmM9bmV3IE1hcCxPYz1bXCJhYm9ydFwiLFwiYWJvcnRcIixJYyxcImFuaW1hdGlvbkVuZFwiLEpjLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCIsS2MsXCJhbmltYXRpb25TdGFydFwiLFwiY2FucGxheVwiLFwiY2FuUGxheVwiLFwiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCIsXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIixcImVtcHRpZWRcIixcImVtcHRpZWRcIixcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmRlZFwiLFwiZW5kZWRcIixcImVycm9yXCIsXCJlcnJvclwiLFwiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsXCJsb2FkXCIsXCJsb2FkXCIsXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIixcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsXG5cImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIixcInNlZWtpbmdcIixcInNlZWtpbmdcIixcInN0YWxsZWRcIixcInN0YWxsZWRcIixcInN1c3BlbmRcIixcInN1c3BlbmRcIixcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixMYyxcInRyYW5zaXRpb25FbmRcIixcIndhaXRpbmdcIixcIndhaXRpbmdcIl07ZnVuY3Rpb24gUGMoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrPTIpe3ZhciBkPWFbY10sZT1hW2MrMV07ZT1cIm9uXCIrKGVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpKTtOYy5zZXQoZCxiKTtNYy5zZXQoZCxlKTtkYShlLFtkXSl9fXZhciBRYz1yLnVuc3RhYmxlX25vdztRYygpO3ZhciBGPTg7XG5mdW5jdGlvbiBSYyhhKXtpZigwIT09KDEmYSkpcmV0dXJuIEY9MTUsMTtpZigwIT09KDImYSkpcmV0dXJuIEY9MTQsMjtpZigwIT09KDQmYSkpcmV0dXJuIEY9MTMsNDt2YXIgYj0yNCZhO2lmKDAhPT1iKXJldHVybiBGPTEyLGI7aWYoMCE9PShhJjMyKSlyZXR1cm4gRj0xMSwzMjtiPTE5MiZhO2lmKDAhPT1iKXJldHVybiBGPTEwLGI7aWYoMCE9PShhJjI1NikpcmV0dXJuIEY9OSwyNTY7Yj0zNTg0JmE7aWYoMCE9PWIpcmV0dXJuIEY9OCxiO2lmKDAhPT0oYSY0MDk2KSlyZXR1cm4gRj03LDQwOTY7Yj00MTg2MTEyJmE7aWYoMCE9PWIpcmV0dXJuIEY9NixiO2I9NjI5MTQ1NjAmYTtpZigwIT09YilyZXR1cm4gRj01LGI7aWYoYSY2NzEwODg2NClyZXR1cm4gRj00LDY3MTA4ODY0O2lmKDAhPT0oYSYxMzQyMTc3MjgpKXJldHVybiBGPTMsMTM0MjE3NzI4O2I9ODA1MzA2MzY4JmE7aWYoMCE9PWIpcmV0dXJuIEY9MixiO2lmKDAhPT0oMTA3Mzc0MTgyNCZhKSlyZXR1cm4gRj0xLDEwNzM3NDE4MjQ7XG5GPTg7cmV0dXJuIGF9ZnVuY3Rpb24gU2MoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIDE1O2Nhc2UgOTg6cmV0dXJuIDEwO2Nhc2UgOTc6Y2FzZSA5NjpyZXR1cm4gODtjYXNlIDk1OnJldHVybiAyO2RlZmF1bHQ6cmV0dXJuIDB9fWZ1bmN0aW9uIFRjKGEpe3N3aXRjaChhKXtjYXNlIDE1OmNhc2UgMTQ6cmV0dXJuIDk5O2Nhc2UgMTM6Y2FzZSAxMjpjYXNlIDExOmNhc2UgMTA6cmV0dXJuIDk4O2Nhc2UgOTpjYXNlIDg6Y2FzZSA3OmNhc2UgNjpjYXNlIDQ6Y2FzZSA1OnJldHVybiA5NztjYXNlIDM6Y2FzZSAyOmNhc2UgMTpyZXR1cm4gOTU7Y2FzZSAwOnJldHVybiA5MDtkZWZhdWx0OnRocm93IEVycm9yKHkoMzU4LGEpKTt9fVxuZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gRj0wO3ZhciBkPTAsZT0wLGY9YS5leHBpcmVkTGFuZXMsZz1hLnN1c3BlbmRlZExhbmVzLGg9YS5waW5nZWRMYW5lcztpZigwIT09ZilkPWYsZT1GPTE1O2Vsc2UgaWYoZj1jJjEzNDIxNzcyNywwIT09Zil7dmFyIGs9ZiZ+ZzswIT09az8oZD1SYyhrKSxlPUYpOihoJj1mLDAhPT1oJiYoZD1SYyhoKSxlPUYpKX1lbHNlIGY9YyZ+ZywwIT09Zj8oZD1SYyhmKSxlPUYpOjAhPT1oJiYoZD1SYyhoKSxlPUYpO2lmKDA9PT1kKXJldHVybiAwO2Q9MzEtVmMoZCk7ZD1jJigoMD5kPzA6MTw8ZCk8PDEpLTE7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZykpe1JjKGIpO2lmKGU8PUYpcmV0dXJuIGI7Rj1lfWI9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtVmMoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiBXYyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24gWGMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxNTpyZXR1cm4gMTtjYXNlIDE0OnJldHVybiAyO2Nhc2UgMTI6cmV0dXJuIGE9WWMoMjQmfmIpLDA9PT1hP1hjKDEwLGIpOmE7Y2FzZSAxMDpyZXR1cm4gYT1ZYygxOTImfmIpLDA9PT1hP1hjKDgsYik6YTtjYXNlIDg6cmV0dXJuIGE9WWMoMzU4NCZ+YiksMD09PWEmJihhPVljKDQxODYxMTImfmIpLDA9PT1hJiYoYT01MTIpKSxhO2Nhc2UgMjpyZXR1cm4gYj1ZYyg4MDUzMDYzNjgmfmIpLDA9PT1iJiYoYj0yNjg0MzU0NTYpLGJ9dGhyb3cgRXJyb3IoeSgzNTgsYSkpO31mdW5jdGlvbiBZYyhhKXtyZXR1cm4gYSYtYX1mdW5jdGlvbiBaYyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjt2YXIgZD1iLTE7YS5zdXNwZW5kZWRMYW5lcyY9ZDthLnBpbmdlZExhbmVzJj1kO2E9YS5ldmVudFRpbWVzO2I9MzEtVmMoYik7YVtiXT1jfXZhciBWYz1NYXRoLmNsejMyP01hdGguY2x6MzI6YWQsYmQ9TWF0aC5sb2csY2Q9TWF0aC5MTjI7ZnVuY3Rpb24gYWQoYSl7cmV0dXJuIDA9PT1hPzMyOjMxLShiZChhKS9jZHwwKXwwfXZhciBkZD1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGVkPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LGZkPSEwO2Z1bmN0aW9uIGdkKGEsYixjLGQpe0tifHxJYigpO3ZhciBlPWhkLGY9S2I7S2I9ITA7dHJ5e0hiKGUsYSxiLGMsZCl9ZmluYWxseXsoS2I9Zil8fE1iKCl9fWZ1bmN0aW9uIGlkKGEsYixjLGQpe2VkKGRkLGhkLmJpbmQobnVsbCxhLGIsYyxkKSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkKXtpZihmZCl7dmFyIGU7aWYoKGU9MD09PShiJjQpKSYmMDxqYy5sZW5ndGgmJi0xPHFjLmluZGV4T2YoYSkpYT1yYyhudWxsLGEsYixjLGQpLGpjLnB1c2goYSk7ZWxzZXt2YXIgZj15YyhhLGIsYyxkKTtpZihudWxsPT09ZillJiZzYyhhLGQpO2Vsc2V7aWYoZSl7aWYoLTE8cWMuaW5kZXhPZihhKSl7YT1yYyhmLGEsYixjLGQpO2pjLnB1c2goYSk7cmV0dXJufWlmKHVjKGYsYSxiLGMsZCkpcmV0dXJuO3NjKGEsZCl9amQoYSxiLGQsbnVsbCxjKX19fX1cbmZ1bmN0aW9uIHljKGEsYixjLGQpe3ZhciBlPXhiKGQpO2U9d2MoZSk7aWYobnVsbCE9PWUpe3ZhciBmPVpiKGUpO2lmKG51bGw9PT1mKWU9bnVsbDtlbHNle3ZhciBnPWYudGFnO2lmKDEzPT09Zyl7ZT0kYihmKTtpZihudWxsIT09ZSlyZXR1cm4gZTtlPW51bGx9ZWxzZSBpZigzPT09Zyl7aWYoZi5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWYudGFnP2Yuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtlPW51bGx9ZWxzZSBmIT09ZSYmKGU9bnVsbCl9fWpkKGEsYixkLGUsYyk7cmV0dXJuIG51bGx9dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO1xuZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9bShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9bSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPW0oe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPW0oe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPW0oe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1tKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9bSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1tKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9bSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1tKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1tKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9bSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9bSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9ZmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWZhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9ZmEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoZmEpe3ZhciB4ZTtpZihmYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO2E9cmU7aWYoS2IpYShiKTtlbHNle0tiPSEwO3RyeXtHYihhLGIpfWZpbmFsbHl7S2I9ITEsTWIoKX19fX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBKZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighSWUuY2FsbChiLGNbZF0pfHwhSGUoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBLZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZShhLGIpe3ZhciBjPUtlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtlKGMpfX1mdW5jdGlvbiBNZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01lKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgUGU9ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk9lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkplKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cblBjKFwiY2FuY2VsIGNhbmNlbCBjbGljayBjbGljayBjbG9zZSBjbG9zZSBjb250ZXh0bWVudSBjb250ZXh0TWVudSBjb3B5IGNvcHkgY3V0IGN1dCBhdXhjbGljayBhdXhDbGljayBkYmxjbGljayBkb3VibGVDbGljayBkcmFnZW5kIGRyYWdFbmQgZHJhZ3N0YXJ0IGRyYWdTdGFydCBkcm9wIGRyb3AgZm9jdXNpbiBmb2N1cyBmb2N1c291dCBibHVyIGlucHV0IGlucHV0IGludmFsaWQgaW52YWxpZCBrZXlkb3duIGtleURvd24ga2V5cHJlc3Mga2V5UHJlc3Mga2V5dXAga2V5VXAgbW91c2Vkb3duIG1vdXNlRG93biBtb3VzZXVwIG1vdXNlVXAgcGFzdGUgcGFzdGUgcGF1c2UgcGF1c2UgcGxheSBwbGF5IHBvaW50ZXJjYW5jZWwgcG9pbnRlckNhbmNlbCBwb2ludGVyZG93biBwb2ludGVyRG93biBwb2ludGVydXAgcG9pbnRlclVwIHJhdGVjaGFuZ2UgcmF0ZUNoYW5nZSByZXNldCByZXNldCBzZWVrZWQgc2Vla2VkIHN1Ym1pdCBzdWJtaXQgdG91Y2hjYW5jZWwgdG91Y2hDYW5jZWwgdG91Y2hlbmQgdG91Y2hFbmQgdG91Y2hzdGFydCB0b3VjaFN0YXJ0IHZvbHVtZWNoYW5nZSB2b2x1bWVDaGFuZ2VcIi5zcGxpdChcIiBcIiksXG4wKTtQYyhcImRyYWcgZHJhZyBkcmFnZW50ZXIgZHJhZ0VudGVyIGRyYWdleGl0IGRyYWdFeGl0IGRyYWdsZWF2ZSBkcmFnTGVhdmUgZHJhZ292ZXIgZHJhZ092ZXIgbW91c2Vtb3ZlIG1vdXNlTW92ZSBtb3VzZW91dCBtb3VzZU91dCBtb3VzZW92ZXIgbW91c2VPdmVyIHBvaW50ZXJtb3ZlIHBvaW50ZXJNb3ZlIHBvaW50ZXJvdXQgcG9pbnRlck91dCBwb2ludGVyb3ZlciBwb2ludGVyT3ZlciBzY3JvbGwgc2Nyb2xsIHRvZ2dsZSB0b2dnbGUgdG91Y2htb3ZlIHRvdWNoTW92ZSB3aGVlbCB3aGVlbFwiLnNwbGl0KFwiIFwiKSwxKTtQYyhPYywyKTtmb3IodmFyIFZlPVwiY2hhbmdlIHNlbGVjdGlvbmNoYW5nZSB0ZXh0SW5wdXQgY29tcG9zaXRpb25zdGFydCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnVwZGF0ZVwiLnNwbGl0KFwiIFwiKSxXZT0wO1dlPFZlLmxlbmd0aDtXZSsrKU5jLnNldChWZVtXZV0sMCk7ZWEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtcbmVhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtlYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2RhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZGEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5kYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIFhlPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxZZT1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChYZSkpO1xuZnVuY3Rpb24gWmUoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7WWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfX19aWYoVWIpdGhyb3cgYT1WYixVYj0hMSxWYj1udWxsLGE7fVxuZnVuY3Rpb24gRyhhLGIpe3ZhciBjPSRlKGIpLGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChhZihiLGEsMiwhMSksYy5hZGQoZCkpfXZhciBiZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIGNmKGEpe2FbYmZdfHwoYVtiZl09ITAsYmEuZm9yRWFjaChmdW5jdGlvbihiKXtZZS5oYXMoYil8fGRmKGIsITEsYSxudWxsKTtkZihiLCEwLGEsbnVsbCl9KSl9XG5mdW5jdGlvbiBkZihhLGIsYyxkKXt2YXIgZT00PGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxmPWM7XCJzZWxlY3Rpb25jaGFuZ2VcIj09PWEmJjkhPT1jLm5vZGVUeXBlJiYoZj1jLm93bmVyRG9jdW1lbnQpO2lmKG51bGwhPT1kJiYhYiYmWWUuaGFzKGEpKXtpZihcInNjcm9sbFwiIT09YSlyZXR1cm47ZXw9MjtmPWR9dmFyIGc9JGUoZiksaD1hK1wiX19cIisoYj9cImNhcHR1cmVcIjpcImJ1YmJsZVwiKTtnLmhhcyhoKXx8KGImJihlfD00KSxhZihmLGEsZSxiKSxnLmFkZChoKSl9XG5mdW5jdGlvbiBhZihhLGIsYyxkKXt2YXIgZT1OYy5nZXQoYik7c3dpdGNoKHZvaWQgMD09PWU/MjplKXtjYXNlIDA6ZT1nZDticmVhaztjYXNlIDE6ZT1pZDticmVhaztkZWZhdWx0OmU9aGR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IVBifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGpkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9d2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufU5iKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1NYy5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQseD1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjp4PVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOng9XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlIEljOmNhc2UgSmM6Y2FzZSBLYzprPUhkO2JyZWFrO2Nhc2UgTGM6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdz0wIT09KGImNCksej0hdyYmXCJzY3JvbGxcIj09PWEsdT13P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3c9W107Zm9yKHZhciB0PWQscTtudWxsIT09XG50Oyl7cT10O3ZhciB2PXEuc3RhdGVOb2RlOzU9PT1xLnRhZyYmbnVsbCE9PXYmJihxPXYsbnVsbCE9PXUmJih2PU9iKHQsdSksbnVsbCE9diYmdy5wdXNoKGVmKHQsdixxKSkpKTtpZih6KWJyZWFrO3Q9dC5yZXR1cm59MDx3Lmxlbmd0aCYmKGg9bmV3IGsoaCx4LG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnd9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiYwPT09KGImMTYpJiYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYod2MoeCl8fHhbZmZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCx4PXg/d2MoeCk6bnVsbCxudWxsIT09XG54JiYoej1aYih4KSx4IT09enx8NSE9PXgudGFnJiY2IT09eC50YWcpKXg9bnVsbH1lbHNlIGs9bnVsbCx4PWQ7aWYoayE9PXgpe3c9QmQ7dj1cIm9uTW91c2VMZWF2ZVwiO3U9XCJvbk1vdXNlRW50ZXJcIjt0PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdz1UZCx2PVwib25Qb2ludGVyTGVhdmVcIix1PVwib25Qb2ludGVyRW50ZXJcIix0PVwicG9pbnRlclwiO3o9bnVsbD09az9oOnVlKGspO3E9bnVsbD09eD9oOnVlKHgpO2g9bmV3IHcodix0K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9ejtoLnJlbGF0ZWRUYXJnZXQ9cTt2PW51bGw7d2MoZSk9PT1kJiYodz1uZXcgdyh1LHQrXCJlbnRlclwiLHgsYyxlKSx3LnRhcmdldD1xLHcucmVsYXRlZFRhcmdldD16LHY9dyk7ej12O2lmKGsmJngpYjp7dz1rO3U9eDt0PTA7Zm9yKHE9dztxO3E9Z2YocSkpdCsrO3E9MDtmb3Iodj11O3Y7dj1nZih2KSlxKys7Zm9yKDswPHQtcTspdz1nZih3KSx0LS07Zm9yKDswPHEtdDspdT1cbmdmKHUpLHEtLTtmb3IoO3QtLTspe2lmKHc9PT11fHxudWxsIT09dSYmdz09PXUuYWx0ZXJuYXRlKWJyZWFrIGI7dz1nZih3KTt1PWdmKHUpfXc9bnVsbH1lbHNlIHc9bnVsbDtudWxsIT09ayYmaGYoZyxoLGssdywhMSk7bnVsbCE9PXgmJm51bGwhPT16JiZoZihnLHoseCx3LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBKPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpSj1GZTtlbHNle0o9RGU7dmFyIEs9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihKPUVlKTtpZihKJiYoSj1KKGEsZCkpKXtuZShnLEosYyxlKTticmVhayBhfUsmJksoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJihLPWguX3dyYXBwZXJTdGF0ZSkmJlxuSy5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZiYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9Sz1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZShLKXx8XCJ0cnVlXCI9PT1LLmNvbnRlbnRFZGl0YWJsZSlRZT1LLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgUTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6TD1cIm9uQ29tcG9zaXRpb25FbmRcIjticmVhayBiO1xuY2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6TD1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifUw9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKEw9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtMJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1MP1wib25Db21wb3NpdGlvbkVuZFwiPT09TCYmaWUmJihRPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSksSz1vZShkLEwpLDA8Sy5sZW5ndGgmJihMPW5ldyBMZChMLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6TCxsaXN0ZW5lcnM6S30pLFE/TC5kYXRhPVE6KFE9aGUoYyksbnVsbCE9PVEmJihMLmRhdGE9USkpKSk7aWYoUT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSwwPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXG5cImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT1RKX1zZShnLGIpfSl9ZnVuY3Rpb24gZWYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPU9iKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KGVmKGEsZixlKSksZj1PYihhLGIpLG51bGwhPWYmJmQucHVzaChlZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIGdmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBoZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPU9iKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KGVmKGMsayxoKSkpOmV8fChrPU9iKGMsZiksbnVsbCE9ayYmZy5wdXNoKGVmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9ZnVuY3Rpb24gamYoKXt9dmFyIGtmPW51bGwsbGY9bnVsbDtmdW5jdGlvbiBtZihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9XG5mdW5jdGlvbiBuZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9dmFyIG9mPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHBmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMDtmdW5jdGlvbiBxZihhKXsxPT09YS5ub2RlVHlwZT9hLnRleHRDb250ZW50PVwiXCI6OT09PWEubm9kZVR5cGUmJihhPWEuYm9keSxudWxsIT1hJiYoYS50ZXh0Q29udGVudD1cIlwiKSl9XG5mdW5jdGlvbiByZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1mdW5jdGlvbiBzZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgdGY9MDtmdW5jdGlvbiB1ZihhKXtyZXR1cm57JCR0eXBlb2Y6R2EsdG9TdHJpbmc6YSx2YWx1ZU9mOmF9fXZhciB2Zj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx3Zj1cIl9fcmVhY3RGaWJlciRcIit2Zix4Zj1cIl9fcmVhY3RQcm9wcyRcIit2ZixmZj1cIl9fcmVhY3RDb250YWluZXIkXCIrdmYseWY9XCJfX3JlYWN0RXZlbnRzJFwiK3ZmO1xuZnVuY3Rpb24gd2MoYSl7dmFyIGI9YVt3Zl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbZmZdfHxjW3dmXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPXNmKGEpO251bGwhPT1hOyl7aWYoYz1hW3dmXSlyZXR1cm4gYzthPXNmKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbd2ZdfHxhW2ZmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHkoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbeGZdfHxudWxsfVxuZnVuY3Rpb24gJGUoYSl7dmFyIGI9YVt5Zl07dm9pZCAwPT09YiYmKGI9YVt5Zl09bmV3IFNldCk7cmV0dXJuIGJ9dmFyIHpmPVtdLEFmPS0xO2Z1bmN0aW9uIEJmKGEpe3JldHVybntjdXJyZW50OmF9fWZ1bmN0aW9uIEgoYSl7MD5BZnx8KGEuY3VycmVudD16ZltBZl0semZbQWZdPW51bGwsQWYtLSl9ZnVuY3Rpb24gSShhLGIpe0FmKys7emZbQWZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgQ2Y9e30sTT1CZihDZiksTj1CZighMSksRGY9Q2Y7XG5mdW5jdGlvbiBFZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIENmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEZmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gR2YoKXtIKE4pO0goTSl9ZnVuY3Rpb24gSGYoYSxiLGMpe2lmKE0uY3VycmVudCE9PUNmKXRocm93IEVycm9yKHkoMTY4KSk7SShNLGIpO0koTixjKX1cbmZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IoeSgxMDgsUmEoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIEpmKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxDZjtEZj1NLmN1cnJlbnQ7SShNLGEpO0koTixOLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIEtmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcih5KDE2OSkpO2M/KGE9SWYoYSxiLERmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsSChOKSxIKE0pLEkoTSxhKSk6SChOKTtJKE4sYyl9XG52YXIgTGY9bnVsbCxNZj1udWxsLE5mPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LE9mPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxQZj1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFFmPXIudW5zdGFibGVfc2hvdWxkWWllbGQsUmY9ci51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsU2Y9ci51bnN0YWJsZV9ub3csVGY9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxVZj1yLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFZmPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksV2Y9ci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxYZj1yLnVuc3RhYmxlX0xvd1ByaW9yaXR5LFlmPXIudW5zdGFibGVfSWRsZVByaW9yaXR5LFpmPXt9LCRmPXZvaWQgMCE9PVJmP1JmOmZ1bmN0aW9uKCl7fSxhZz1udWxsLGJnPW51bGwsY2c9ITEsZGc9U2YoKSxPPTFFND5kZz9TZjpmdW5jdGlvbigpe3JldHVybiBTZigpLWRnfTtcbmZ1bmN0aW9uIGVnKCl7c3dpdGNoKFRmKCkpe2Nhc2UgVWY6cmV0dXJuIDk5O2Nhc2UgVmY6cmV0dXJuIDk4O2Nhc2UgV2Y6cmV0dXJuIDk3O2Nhc2UgWGY6cmV0dXJuIDk2O2Nhc2UgWWY6cmV0dXJuIDk1O2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiBVZjtjYXNlIDk4OnJldHVybiBWZjtjYXNlIDk3OnJldHVybiBXZjtjYXNlIDk2OnJldHVybiBYZjtjYXNlIDk1OnJldHVybiBZZjtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBnZyhhLGIpe2E9ZmcoYSk7cmV0dXJuIE5mKGEsYil9ZnVuY3Rpb24gaGcoYSxiLGMpe2E9ZmcoYSk7cmV0dXJuIE9mKGEsYixjKX1mdW5jdGlvbiBpZygpe2lmKG51bGwhPT1iZyl7dmFyIGE9Ymc7Ymc9bnVsbDtQZihhKX1qZygpfVxuZnVuY3Rpb24gamcoKXtpZighY2cmJm51bGwhPT1hZyl7Y2c9ITA7dmFyIGE9MDt0cnl7dmFyIGI9YWc7Z2coOTksZnVuY3Rpb24oKXtmb3IoO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdO2RvIGM9YyghMCk7d2hpbGUobnVsbCE9PWMpfX0pO2FnPW51bGx9Y2F0Y2goYyl7dGhyb3cgbnVsbCE9PWFnJiYoYWc9YWcuc2xpY2UoYSsxKSksT2YoVWYsaWcpLGM7fWZpbmFsbHl7Y2c9ITF9fX12YXIga2c9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7ZnVuY3Rpb24gbGcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9dmFyIG1nPUJmKG51bGwpLG5nPW51bGwsb2c9bnVsbCxwZz1udWxsO2Z1bmN0aW9uIHFnKCl7cGc9b2c9bmc9bnVsbH1cbmZ1bmN0aW9uIHJnKGEpe3ZhciBiPW1nLmN1cnJlbnQ7SChtZyk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBzZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZigoYS5jaGlsZExhbmVzJmIpPT09YilpZihudWxsPT09Y3x8KGMuY2hpbGRMYW5lcyZiKT09PWIpYnJlYWs7ZWxzZSBjLmNoaWxkTGFuZXN8PWI7ZWxzZSBhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpO2E9YS5yZXR1cm59fWZ1bmN0aW9uIHRnKGEsYil7bmc9YTtwZz1vZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKHVnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1cbmZ1bmN0aW9uIHZnKGEsYil7aWYocGchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXBnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O2lmKG51bGw9PT1vZyl7aWYobnVsbD09PW5nKXRocm93IEVycm9yKHkoMzA4KSk7b2c9YjtuZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmIscmVzcG9uZGVyczpudWxsfX1lbHNlIG9nPW9nLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciB3Zz0hMTtmdW5jdGlvbiB4ZyhhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGx9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiB5ZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiB6ZyhhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1mdW5jdGlvbiBBZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YSl7YT1hLnNoYXJlZDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifX1cbmZ1bmN0aW9uIEJnKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBDZyhhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO3dnPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG49YS5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe249bi51cGRhdGVRdWV1ZTt2YXIgQT1uLmxhc3RCYXNlVXBkYXRlO0EhPT1nJiYobnVsbD09PUE/bi5maXJzdEJhc2VVcGRhdGU9bDpBLm5leHQ9bCxuLmxhc3RCYXNlVXBkYXRlPWspfX1pZihudWxsIT09Zil7QT1lLmJhc2VTdGF0ZTtnPTA7bj1sPWs9bnVsbDtkb3toPWYubGFuZTt2YXIgcD1mLmV2ZW50VGltZTtpZigoZCZoKT09PWgpe251bGwhPT1uJiYobj1uLm5leHQ9e2V2ZW50VGltZTpwLGxhbmU6MCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBDPWEseD1mO2g9YjtwPWM7c3dpdGNoKHgudGFnKXtjYXNlIDE6Qz14LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEMpe0E9Qy5jYWxsKHAsQSxoKTticmVhayBhfUE9QzticmVhayBhO2Nhc2UgMzpDLmZsYWdzPUMuZmxhZ3MmLTQwOTd8NjQ7Y2FzZSAwOkM9eC5wYXlsb2FkO2g9XCJmdW5jdGlvblwiPT09dHlwZW9mIEM/Qy5jYWxsKHAsQSxoKTpDO2lmKG51bGw9PT1ofHx2b2lkIDA9PT1oKWJyZWFrIGE7QT1tKHt9LEEsaCk7YnJlYWsgYTtjYXNlIDI6d2c9ITB9fW51bGwhPT1mLmNhbGxiYWNrJiYoYS5mbGFnc3w9MzIsaD1lLmVmZmVjdHMsbnVsbD09PWg/ZS5lZmZlY3RzPVtmXTpoLnB1c2goZikpfWVsc2UgcD17ZXZlbnRUaW1lOnAsbGFuZTpoLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW4/KGw9bj1wLGs9QSk6bj1uLm5leHQ9cCxnfD1oO2Y9Zi5uZXh0O2lmKG51bGw9PT1cbmYpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2UgZj1oLm5leHQsaC5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1oLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09biYmKGs9QSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bjtEZ3w9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPUF9fWZ1bmN0aW9uIEVnKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcih5KDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIEZnPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gR2coYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEtnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1piKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9SGcoKSxkPUlnKGEpLGU9emcoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1cbmIpO0FnKGEsZSk7SmcoYSxkLGMpfX07ZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSmUoYyxkKXx8IUplKGUsZik6ITB9XG5mdW5jdGlvbiBNZyhhLGIsYyl7dmFyIGQ9ITEsZT1DZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj12ZyhmKTooZT1GZihiKT9EZjpNLmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9FZihhLGUpOkNmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9S2c7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBOZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBPZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUZnO3hnKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9dmcoZik6KGY9RmYoYik/RGY6TS5jdXJyZW50LGUuY29udGV4dD1FZihhLGYpKTtDZyhhLGMsZSxkKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoR2coYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8XG4oYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksQ2coYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NCl9dmFyIFBnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBRZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHkoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IoeSgxNDcsYSkpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09RmcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IoeSgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IoeSgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIFJnKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IEVycm9yKHkoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7fVxuZnVuY3Rpb24gU2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5mbGFncz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1UZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFncz0yLFxuYyk6ZDtiLmZsYWdzPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1VZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1RZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9UWcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5XZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBBKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1VZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYz1WZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1RZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgdGE6cmV0dXJuIGI9V2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKFBnKGIpfHxMYShiKSlyZXR1cm4gYj1YZyhiLFxuYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO1JnKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PXVhP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSB0YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihQZyhjKXx8TGEoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO1JnKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxcbm51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT11YT9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSB0YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihQZyhkKXx8TGEoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO1JnKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCx0PW51bGwsdT1nLHo9Zz0wLHE9bnVsbDtudWxsIT09dSYmejxoLmxlbmd0aDt6Kyspe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIG49cChlLHUsaFt6XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT1cbm4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx6KTtudWxsPT09dD9sPW46dC5zaWJsaW5nPW47dD1uO3U9cX1pZih6PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoO3o8aC5sZW5ndGg7eisrKXU9QShlLGhbel0sayksbnVsbCE9PXUmJihnPWYodSxnLHopLG51bGw9PT10P2w9dTp0LnNpYmxpbmc9dSx0PXUpO3JldHVybiBsfWZvcih1PWQoZSx1KTt6PGgubGVuZ3RoO3orKylxPUModSxlLHosaFt6XSxrKSxudWxsIT09cSYmKGEmJm51bGwhPT1xLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXEua2V5P3o6cS5rZXkpLGc9ZihxLGcseiksbnVsbD09PXQ/bD1xOnQuc2libGluZz1xLHQ9cSk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiB3KGUsZyxoLGspe3ZhciBsPUxhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHkoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09XG5oKXRocm93IEVycm9yKHkoMTUxKSk7Zm9yKHZhciB0PWw9bnVsbCx1PWcsej1nPTAscT1udWxsLG49aC5uZXh0KCk7bnVsbCE9PXUmJiFuLmRvbmU7eisrLG49aC5uZXh0KCkpe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIHc9cChlLHUsbi52YWx1ZSxrKTtpZihudWxsPT09dyl7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHUpO2c9Zih3LGcseik7bnVsbD09PXQ/bD13OnQuc2libGluZz13O3Q9dzt1PXF9aWYobi5kb25lKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDshbi5kb25lO3orKyxuPWgubmV4dCgpKW49QShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO3JldHVybiBsfWZvcih1PWQoZSx1KTshbi5kb25lO3orKyxuPWgubmV4dCgpKW49Qyh1LGUseixuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZcbnUuZGVsZXRlKG51bGw9PT1uLmtleT96Om4ua2V5KSxnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXVhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHNhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bCl7c3dpdGNoKGsudGFnKXtjYXNlIDc6aWYoZi50eXBlPT09dWEpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YnJlYWs7ZGVmYXVsdDppZihrLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtcbmQ9ZShrLGYucHJvcHMpO2QucmVmPVFnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1jKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09dWE/KGQ9WGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVZnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVFnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB0YTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1cbldnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPVVnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKFBnKGYpKXJldHVybiB4KGEsZCxmLGgpO2lmKExhKGYpKXJldHVybiB3KGEsZCxmLGgpO2wmJlJnKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDIyOmNhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGhyb3cgRXJyb3IoeSgxNTIsUmEoYS50eXBlKXx8XCJDb21wb25lbnRcIikpO31yZXR1cm4gYyhhLGQpfX12YXIgWWc9U2coITApLFpnPVNnKCExKSwkZz17fSxhaD1CZigkZyksYmg9QmYoJGcpLGNoPUJmKCRnKTtcbmZ1bmN0aW9uIGRoKGEpe2lmKGE9PT0kZyl0aHJvdyBFcnJvcih5KDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIGVoKGEsYil7SShjaCxiKTtJKGJoLGEpO0koYWgsJGcpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bWIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPW1iKGIsYSl9SChhaCk7SShhaCxiKX1mdW5jdGlvbiBmaCgpe0goYWgpO0goYmgpO0goY2gpfWZ1bmN0aW9uIGdoKGEpe2RoKGNoLmN1cnJlbnQpO3ZhciBiPWRoKGFoLmN1cnJlbnQpO3ZhciBjPW1iKGIsYS50eXBlKTtiIT09YyYmKEkoYmgsYSksSShhaCxjKSl9ZnVuY3Rpb24gaGgoYSl7YmguY3VycmVudD09PWEmJihIKGFoKSxIKGJoKSl9dmFyIFA9QmYoMCk7XG5mdW5jdGlvbiBpaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBqaD1udWxsLGtoPW51bGwsbGg9ITE7XG5mdW5jdGlvbiBtaChhLGIpe3ZhciBjPW5oKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmZsYWdzPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBvaChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcGgoYSl7aWYobGgpe3ZhciBiPWtoO2lmKGIpe3ZhciBjPWI7aWYoIW9oKGEsYikpe2I9cmYoYy5uZXh0U2libGluZyk7aWYoIWJ8fCFvaChhLGIpKXthLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MjtsaD0hMTtqaD1hO3JldHVybn1taChqaCxjKX1qaD1hO2toPXJmKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MixsaD0hMSxqaD1hfX1mdW5jdGlvbiBxaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47amg9YX1cbmZ1bmN0aW9uIHJoKGEpe2lmKGEhPT1qaClyZXR1cm4hMTtpZighbGgpcmV0dXJuIHFoKGEpLGxoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhbmYoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWtoO2I7KW1oKGEsYiksYj1yZihiLm5leHRTaWJsaW5nKTtxaChhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHkoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe2toPXJmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9a2g9bnVsbH19ZWxzZSBraD1qaD9yZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1cbmZ1bmN0aW9uIHNoKCl7a2g9amg9bnVsbDtsaD0hMX12YXIgdGg9W107ZnVuY3Rpb24gdWgoKXtmb3IodmFyIGE9MDthPHRoLmxlbmd0aDthKyspdGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDt0aC5sZW5ndGg9MH12YXIgdmg9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcix3aD1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyx4aD0wLFI9bnVsbCxTPW51bGwsVD1udWxsLHloPSExLHpoPSExO2Z1bmN0aW9uIEFoKCl7dGhyb3cgRXJyb3IoeSgzMjEpKTt9ZnVuY3Rpb24gQmgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIENoKGEsYixjLGQsZSxmKXt4aD1mO1I9YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO3ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/RGg6RWg7YT1jKGQsZSk7aWYoemgpe2Y9MDtkb3t6aD0hMTtpZighKDI1PmYpKXRocm93IEVycm9yKHkoMzAxKSk7Zis9MTtUPVM9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7dmguY3VycmVudD1GaDthPWMoZCxlKX13aGlsZSh6aCl9dmguY3VycmVudD1HaDtiPW51bGwhPT1TJiZudWxsIT09Uy5uZXh0O3hoPTA7VD1TPVI9bnVsbDt5aD0hMTtpZihiKXRocm93IEVycm9yKHkoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWE7cmV0dXJuIFR9XG5mdW5jdGlvbiBJaCgpe2lmKG51bGw9PT1TKXt2YXIgYT1SLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1TLm5leHQ7dmFyIGI9bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlOlQubmV4dDtpZihudWxsIT09YilUPWIsUz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeSgzMTApKTtTPWE7YT17bWVtb2l6ZWRTdGF0ZTpTLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOlMuYmFzZVN0YXRlLGJhc2VRdWV1ZTpTLmJhc2VRdWV1ZSxxdWV1ZTpTLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hfXJldHVybiBUfWZ1bmN0aW9uIEpoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gS2goYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1TLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2U9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1mPW51bGwsaz1lO2Rve3ZhciBsPWsubGFuZTtpZigoeGgmbCk9PT1sKW51bGwhPT1oJiYoaD1oLm5leHQ9e2xhbmU6MCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLGVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGQsay5hY3Rpb24pO2Vsc2V7dmFyIG49e2xhbmU6bCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLFxuZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09aD8oZz1oPW4sZj1kKTpoPWgubmV4dD1uO1IubGFuZXN8PWw7RGd8PWx9az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1lKTtudWxsPT09aD9mPWQ6aC5uZXh0PWc7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWY7Yi5iYXNlUXVldWU9aDtjLmxhc3RSZW5kZXJlZFN0YXRlPWR9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIExoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfVxuZnVuY3Rpb24gTWgoYSxiLGMpe3ZhciBkPWIuX2dldFZlcnNpb247ZD1kKGIuX3NvdXJjZSk7dmFyIGU9Yi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeTtpZihudWxsIT09ZSlhPWU9PT1kO2Vsc2UgaWYoYT1hLm11dGFibGVSZWFkTGFuZXMsYT0oeGgmYSk9PT1hKWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9ZCx0aC5wdXNoKGIpO2lmKGEpcmV0dXJuIGMoYi5fc291cmNlKTt0aC5wdXNoKGIpO3Rocm93IEVycm9yKHkoMzUwKSk7fVxuZnVuY3Rpb24gTmgoYSxiLGMsZCl7dmFyIGU9VTtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih5KDM0OSkpO3ZhciBmPWIuX2dldFZlcnNpb24sZz1mKGIuX3NvdXJjZSksaD12aC5jdXJyZW50LGs9aC51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBNaChlLGIsYyl9KSxsPWtbMV0sbj1rWzBdO2s9VDt2YXIgQT1hLm1lbW9pemVkU3RhdGUscD1BLnJlZnMsQz1wLmdldFNuYXBzaG90LHg9QS5zb3VyY2U7QT1BLnN1YnNjcmliZTt2YXIgdz1SO2EubWVtb2l6ZWRTdGF0ZT17cmVmczpwLHNvdXJjZTpiLHN1YnNjcmliZTpkfTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3AuZ2V0U25hcHNob3Q9YztwLnNldFNuYXBzaG90PWw7dmFyIGE9ZihiLl9zb3VyY2UpO2lmKCFIZShnLGEpKXthPWMoYi5fc291cmNlKTtIZShuLGEpfHwobChhKSxhPUlnKHcpLGUubXV0YWJsZVJlYWRMYW5lc3w9YSZlLnBlbmRpbmdMYW5lcyk7YT1lLm11dGFibGVSZWFkTGFuZXM7ZS5lbnRhbmdsZWRMYW5lc3w9YTtmb3IodmFyIGQ9XG5lLmVudGFuZ2xlbWVudHMsaD1hOzA8aDspe3ZhciBrPTMxLVZjKGgpLHY9MTw8aztkW2tdfD1hO2gmPX52fX19LFtjLGIsZF0pO2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGQoYi5fc291cmNlLGZ1bmN0aW9uKCl7dmFyIGE9cC5nZXRTbmFwc2hvdCxjPXAuc2V0U25hcHNob3Q7dHJ5e2MoYShiLl9zb3VyY2UpKTt2YXIgZD1JZyh3KTtlLm11dGFibGVSZWFkTGFuZXN8PWQmZS5wZW5kaW5nTGFuZXN9Y2F0Y2gocSl7YyhmdW5jdGlvbigpe3Rocm93IHE7fSl9fSl9LFtiLGRdKTtIZShDLGMpJiZIZSh4LGIpJiZIZShBLGQpfHwoYT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTpufSxhLmRpc3BhdGNoPWw9T2guYmluZChudWxsLFIsYSksay5xdWV1ZT1hLGsuYmFzZVF1ZXVlPW51bGwsbj1NaChlLGIsYyksay5tZW1vaXplZFN0YXRlPWsuYmFzZVN0YXRlPW4pO3JldHVybiBufVxuZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPUloKCk7cmV0dXJuIE5oKGQsYSxiLGMpfWZ1bmN0aW9uIFFoKGEpe3ZhciBiPUhoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gUmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9Ui51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsfSxSLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKGEpe3ZhciBiPUhoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9ZnVuY3Rpb24gVGgoKXtyZXR1cm4gSWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIFVoKGEsYixjLGQpe3ZhciBlPUhoKCk7Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIFZoKGEsYixjLGQpe3ZhciBlPUloKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVMpe3ZhciBnPVMubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmQmgoZCxnLmRlcHMpKXtSaChiLGMsZixkKTtyZXR1cm59fVIuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLGYsZCl9ZnVuY3Rpb24gV2goYSxiKXtyZXR1cm4gVWgoNTE2LDQsYSxiKX1mdW5jdGlvbiBYaChhLGIpe3JldHVybiBWaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFZoKDQsMixhLGIpfWZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19XG5mdW5jdGlvbiAkaChhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFZoKDQsMixaaC5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiBhaSgpe31mdW5jdGlvbiBiaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiBjaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGRpKGEsYil7dmFyIGM9ZWcoKTtnZyg5OD5jPzk4OmMsZnVuY3Rpb24oKXthKCEwKX0pO2dnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBjPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXthKCExKSxiKCl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWN9fSl9XG5mdW5jdGlvbiBPaChhLGIsYyl7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9e2xhbmU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIucGVuZGluZztudWxsPT09Zz9mLm5leHQ9ZjooZi5uZXh0PWcubmV4dCxnLm5leHQ9Zik7Yi5wZW5kaW5nPWY7Zz1hLmFsdGVybmF0ZTtpZihhPT09Unx8bnVsbCE9PWcmJmc9PT1SKXpoPXloPSEwO2Vsc2V7aWYoMD09PWEubGFuZXMmJihudWxsPT09Z3x8MD09PWcubGFuZXMpJiYoZz1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWcpKXRyeXt2YXIgaD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZyhoLGMpO2YuZWFnZXJSZWR1Y2VyPWc7Zi5lYWdlclN0YXRlPWs7aWYoSGUoayxoKSlyZXR1cm59Y2F0Y2gobCl7fWZpbmFsbHl7fUpnKGEsZSxkKX19XG52YXIgR2g9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOkFoLHVzZUNvbnRleHQ6QWgsdXNlRWZmZWN0OkFoLHVzZUltcGVyYXRpdmVIYW5kbGU6QWgsdXNlTGF5b3V0RWZmZWN0OkFoLHVzZU1lbW86QWgsdXNlUmVkdWNlcjpBaCx1c2VSZWY6QWgsdXNlU3RhdGU6QWgsdXNlRGVidWdWYWx1ZTpBaCx1c2VEZWZlcnJlZFZhbHVlOkFoLHVzZVRyYW5zaXRpb246QWgsdXNlTXV0YWJsZVNvdXJjZTpBaCx1c2VPcGFxdWVJZGVudGlmaWVyOkFoLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRGg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7SGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6V2gsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFVoKDQsMixaaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWgoNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1IaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpTaCx1c2VTdGF0ZTpRaCx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9UWgoYSksYz1iWzBdLGQ9YlsxXTtXaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247XG53aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9UWgoITEpLGI9YVswXTthPWRpLmJpbmQobnVsbCxhWzFdKTtTaChhKTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtkLm1lbW9pemVkU3RhdGU9e3JlZnM6e2dldFNuYXBzaG90OmIsc2V0U25hcHNob3Q6bnVsbH0sc291cmNlOmEsc3Vic2NyaWJlOmN9O3JldHVybiBOaChkLGEsYixjKX0sdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe2lmKGxoKXt2YXIgYT0hMSxiPXVmKGZ1bmN0aW9uKCl7YXx8KGE9ITAsYyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSkpO3Rocm93IEVycm9yKHkoMzU1KSk7fSksYz1RaChiKVsxXTswPT09KFIubW9kZSYyKSYmKFIuZmxhZ3N8PTUxNixSaCg1LGZ1bmN0aW9uKCl7YyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSl9LFxudm9pZCAwLG51bGwpKTtyZXR1cm4gYn1iPVwicjpcIisodGYrKykudG9TdHJpbmcoMzYpO1FoKGIpO3JldHVybiBifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEVoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6S2gsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUtoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9S2goSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxGaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOkxoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBMaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1MaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUxoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBMaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sZWk9cmEuUmVhY3RDdXJyZW50T3duZXIsdWc9ITE7ZnVuY3Rpb24gZmkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9aZyhiLG51bGwsYyxkKTpZZyhiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBnaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dGcoYixlKTtkPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlpKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhamkoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsa2koYSxiLGcsZCxlLGYpO2E9VmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKDA9PT0oZSZmKSYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpKZSxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBoaShhLGIsZik7Yi5mbGFnc3w9MTthPVRnKGcsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24ga2koYSxiLGMsZCxlLGYpe2lmKG51bGwhPT1hJiZKZShhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYpaWYodWc9ITEsMCE9PShmJmUpKTAhPT0oYS5mbGFncyYxNjM4NCkmJih1Zz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLGhpKGEsYixmKTtyZXR1cm4gbGkoYSxiLGMsZCxmKX1cbmZ1bmN0aW9uIG1pKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlfHxcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixjKTtlbHNlIGlmKDAhPT0oYyYxMDczNzQxODI0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLG51bGwhPT1mP2YuYmFzZUxhbmVzOmMpO2Vsc2UgcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YX0sbmkoYixhKSxudWxsO2Vsc2UgbnVsbCE9PWY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLG5pKGIsZCk7ZmkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBvaShhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD0xMjh9ZnVuY3Rpb24gbGkoYSxiLGMsZCxlKXt2YXIgZj1GZihjKT9EZjpNLmN1cnJlbnQ7Zj1FZihiLGYpO3RnKGIsZSk7Yz1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUpe2lmKEZmKGMpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7dGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksTWcoYixjLGQpLE9nKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXZnKGwpOihsPUZmKGMpP0RmOk0uY3VycmVudCxsPUVmKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZOZyhiLGcsZCxsKTt3Zz0hMTt2YXIgcD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxwIT09a3x8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihHZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9d2d8fExnKGIsYyxoLGQscCxrLGwpKT8oQXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO3lnKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6bGcoYi50eXBlLGgpO2cucHJvcHM9bDtBPWIucGVuZGluZ1Byb3BzO3A9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9dmcoayk6KGs9RmYoYyk/RGY6TS5jdXJyZW50LGs9RWYoYixrKSk7dmFyIEM9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG49XCJmdW5jdGlvblwiPT09dHlwZW9mIEN8fFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1BfHxwIT09aykmJk5nKGIsZyxkLGspO3dnPSExO3A9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7aCE9PUF8fHAhPT14fHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyYmKEdnKGIsYyxDLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobD13Z3x8TGcoYixjLGwsZCxwLHgsaykpPyhufHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLFxueCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9eCksZy5wcm9wcz1kLGcuc3RhdGU9eCxnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fFxuaD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxkPSExKX1yZXR1cm4gcWkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gcWkoYSxiLGMsZCxlLGYpe29pKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJktmKGIsYywhMSksaGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7ZWkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1ZZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVlnKGIsbnVsbCxoLGYpKTpmaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZLZihiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/SGYoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmSGYoYSxiLmNvbnRleHQsITEpO2VoKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBzaT17ZGVoeWRyYXRlZDpudWxsLHJldHJ5TGFuZTowfTtcbmZ1bmN0aW9uIHRpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPVAuY3VycmVudCxmPSExLGc7KGc9MCE9PShiLmZsYWdzJjY0KSl8fChnPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7Zz8oZj0hMCxiLmZsYWdzJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1kLmZhbGxiYWNrfHwhMD09PWQudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChlfD0xKTtJKFAsZSYxKTtpZihudWxsPT09YSl7dm9pZCAwIT09ZC5mYWxsYmFjayYmcGgoYik7YT1kLmNoaWxkcmVuO2U9ZC5mYWxsYmFjaztpZihmKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LGIubWVtb2l6ZWRTdGF0ZT1zaSxhO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgZC51bnN0YWJsZV9leHBlY3RlZExvYWRUaW1lKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LFxuYi5tZW1vaXplZFN0YXRlPXNpLGIubGFuZXM9MzM1NTQ0MzIsYTtjPXZpKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmF9LGIubW9kZSxjLG51bGwpO2MucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9Y31pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXtpZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9OntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWlmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306XG57YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31mdW5jdGlvbiB1aShhLGIsYyxkKXt2YXIgZT1hLm1vZGUsZj1hLmNoaWxkO2I9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpifTswPT09KGUmMikmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1iKTpmPXZpKGIsZSwwLG51bGwpO2M9WGcoYyxlLGQsbnVsbCk7Zi5yZXR1cm49YTtjLnJldHVybj1hO2Yuc2libGluZz1jO2EuY2hpbGQ9ZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHhpKGEsYixjLGQpe3ZhciBlPWEuY2hpbGQ7YT1lLnNpYmxpbmc7Yz1UZyhlLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmN9KTswPT09KGIubW9kZSYyKSYmKGMubGFuZXM9ZCk7Yy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGEubmV4dEVmZmVjdD1udWxsLGEuZmxhZ3M9OCxiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1hKTtyZXR1cm4gYi5jaGlsZD1jfVxuZnVuY3Rpb24gd2koYSxiLGMsZCxlKXt2YXIgZj1iLm1vZGUsZz1hLmNoaWxkO2E9Zy5zaWJsaW5nO3ZhciBoPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Y307MD09PShmJjIpJiZiLmNoaWxkIT09Zz8oYz1iLmNoaWxkLGMuY2hpbGRMYW5lcz0wLGMucGVuZGluZ1Byb3BzPWgsZz1jLmxhc3RFZmZlY3QsbnVsbCE9PWc/KGIuZmlyc3RFZmZlY3Q9Yy5maXJzdEVmZmVjdCxiLmxhc3RFZmZlY3Q9ZyxnLm5leHRFZmZlY3Q9bnVsbCk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbCk6Yz1UZyhnLGgpO251bGwhPT1hP2Q9VGcoYSxkKTooZD1YZyhkLGYsZSxudWxsKSxkLmZsYWdzfD0yKTtkLnJldHVybj1iO2MucmV0dXJuPWI7Yy5zaWJsaW5nPWQ7Yi5jaGlsZD1jO3JldHVybiBkfWZ1bmN0aW9uIHlpKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO3NnKGEucmV0dXJuLGIpfVxuZnVuY3Rpb24gemkoYSxiLGMsZCxlLGYpe3ZhciBnPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zz9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcucmVuZGVyaW5nU3RhcnRUaW1lPTAsZy5sYXN0PWQsZy50YWlsPWMsZy50YWlsTW9kZT1lLGcubGFzdEVmZmVjdD1mKX1cbmZ1bmN0aW9uIEFpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7ZmkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnlpKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXlpKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoUCxkKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09aWgoYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt6aShiLCExLGUsYyxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1paChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9emkoYiwhMCxjLG51bGwsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOnppKGIsITEsbnVsbCxudWxsLHZvaWQgMCxiLmxhc3RFZmZlY3QpO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7RGd8PWIubGFuZXM7aWYoMCE9PShjJmIuY2hpbGRMYW5lcykpe2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcih5KDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1UZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9VGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1yZXR1cm4gbnVsbH12YXIgQmksQ2ksRGksRWk7XG5CaT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07Q2k9ZnVuY3Rpb24oKXt9O1xuRGk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO2RoKGFoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGUpO2Q9ZWIoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1qZil9dmIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1cbmwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiYoY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8XG4oYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkcoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTpcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09R2E/ay50b1N0cmluZygpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixcbmMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtFaT1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtmdW5jdGlvbiBGaShhLGIpe2lmKCFsaClzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIG51bGw7Y2FzZSAxOnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpcmgoYik/Yi5mbGFnc3w9NDpkLmh5ZHJhdGV8fChiLmZsYWdzfD0yNTYpO0NpKGIpO3JldHVybiBudWxsO2Nhc2UgNTpoaChiKTt2YXIgZT1kaChjaC5jdXJyZW50KTtjPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRGkoYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KTtlbHNle2lmKCFkKXtpZihudWxsPT09XG5iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO3JldHVybiBudWxsfWE9ZGgoYWguY3VycmVudCk7aWYocmgoYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2Rbd2ZdPWI7ZFt4Zl09Zjtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixkKTtHKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGE9MDthPFhlLmxlbmd0aDthKyspRyhYZVthXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZCk7RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxHKFwiaW52YWxpZFwiLGQpfXZiKGMsZik7YT1udWxsO2Zvcih2YXIgZyBpbiBmKWYuaGFzT3duUHJvcGVydHkoZykmJihlPWZbZ10sXCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGU/ZC50ZXh0Q29udGVudCE9PWUmJihhPVtcImNoaWxkcmVuXCIsZV0pOlwibnVtYmVyXCI9PT10eXBlb2YgZSYmZC50ZXh0Q29udGVudCE9PVwiXCIrZSYmKGE9W1wiY2hpbGRyZW5cIixcIlwiK2VdKTpjYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9ZSYmXCJvblNjcm9sbFwiPT09ZyYmRyhcInNjcm9sbFwiLGQpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7Y2IoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1cbmpmKX1kPWE7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O2E9PT1rYi5odG1sJiYoYT1sYihjKSk7YT09PWtiLmh0bWw/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW3dmXT1iO2FbeGZdPWQ7QmkoYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2c9d2IoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixhKTtHKFwiY2xvc2VcIixhKTtcbmU9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxYZS5sZW5ndGg7ZSsrKUcoWGVbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsYSk7RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1cbmdiKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH12YihjLGUpO3ZhciBoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/dGIoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm9iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1jfHxcIlwiIT09aykmJnBiKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZwYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGNhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkcoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZxYShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2NiKGEsZCwhMSk7XG5icmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1qZil9bWYoYyxkKSYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCl9cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUVpKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO1xuYz1kaChjaC5jdXJyZW50KTtkaChhaC5jdXJyZW50KTtyaChiKT8oZD1iLnN0YXRlTm9kZSxjPWIubWVtb2l6ZWRQcm9wcyxkW3dmXT1iLGQubm9kZVZhbHVlIT09YyYmKGIuZmxhZ3N8PTQpKTooZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbd2ZdPWIsYi5zdGF0ZU5vZGU9ZCl9cmV0dXJuIG51bGw7Y2FzZSAxMzpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7Yz0hMTtudWxsPT09YT92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJnJoKGIpOmM9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZihkJiYhYyYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWEmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KFAuY3VycmVudCYxKSkwPT09ViYmKFY9Myk7ZWxzZXtpZigwPT09Vnx8Mz09PVYpVj1cbjQ7bnVsbD09PVV8fDA9PT0oRGcmMTM0MjE3NzI3KSYmMD09PShIaSYxMzQyMTc3MjcpfHxJaShVLFcpfWlmKGR8fGMpYi5mbGFnc3w9NDtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksQ2koYiksbnVsbD09PWEmJmNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYiksbnVsbDtjYXNlIDE3OnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAxOTpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Y9MCE9PShiLmZsYWdzJjY0KTtnPWQucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGYpRmkoZCwhMSk7ZWxzZXtpZigwIT09Vnx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9aWgoYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTY0O0ZpKGQsITEpO2Y9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGIudXBkYXRlUXVldWU9ZixiLmZsYWdzfD00KTtcbm51bGw9PT1kLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3Q7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MixmLm5leHRFZmZlY3Q9bnVsbCxmLmZpcnN0RWZmZWN0PW51bGwsZi5sYXN0RWZmZWN0PW51bGwsZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLFxuZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztJKFAsUC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1hLnNpYmxpbmd9bnVsbCE9PWQudGFpbCYmTygpPkppJiYoYi5mbGFnc3w9NjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKX1lbHNle2lmKCFmKWlmKGE9aWgoZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTY0LGY9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEZpKGQsITApLG51bGw9PT1kLnRhaWwmJlwiaGlkZGVuXCI9PT1kLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFsaClyZXR1cm4gYj1iLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0LG51bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpLG51bGx9ZWxzZSAyKk8oKS1kLnJlbmRlcmluZ1N0YXJ0VGltZT5KaSYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD1cbjY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMik7ZC5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1kLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGQubGFzdD1nKX1yZXR1cm4gbnVsbCE9PWQudGFpbD8oYz1kLnRhaWwsZC5yZW5kZXJpbmc9YyxkLnRhaWw9Yy5zaWJsaW5nLGQubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QsZC5yZW5kZXJpbmdTdGFydFRpbWU9TygpLGMuc2libGluZz1udWxsLGI9UC5jdXJyZW50LEkoUCxmP2ImMXwyOmImMSksYyk6bnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT0obnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSkmJlwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIiE9PWQubW9kZSYmKGIuZmxhZ3N8PTQpLG51bGx9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBMaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpGZihhLnR5cGUpJiZHZigpO3ZhciBiPWEuZmxhZ3M7cmV0dXJuIGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7Yj1hLmZsYWdzO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IoeSgyODUpKTthLmZsYWdzPWImLTQwOTd8NjQ7cmV0dXJuIGE7Y2FzZSA1OnJldHVybiBoaChhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIEgoUCksYj1hLmZsYWdzLGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAxOTpyZXR1cm4gSChQKSxudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGEpLG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBNaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1RYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZX19ZnVuY3Rpb24gTmkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE9pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIFBpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe1FpfHwoUWk9ITAsUmk9ZCk7TmkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7TmkoYSxiKTtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVRpP1RpPW5ldyBTZXQoW3RoaXNdKTpUaS5hZGQodGhpcyksTmkoYSxiKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9dmFyIFVpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O1xuZnVuY3Rpb24gVmkoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7V2koYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfWZ1bmN0aW9uIFhpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6cmV0dXJuO2Nhc2UgMTppZihiLmZsYWdzJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6bGcoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1yZXR1cm47Y2FzZSAzOmIuZmxhZ3MmMjU2JiZxZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTtyZXR1cm47Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBZaShhLGIsYyl7c3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97aWYoMz09PShhLnRhZyYzKSl7dmFyIGQ9YS5jcmVhdGU7YS5kZXN0cm95PWQoKX1hPWEubmV4dH13aGlsZShhIT09Yil9Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97dmFyIGU9YTtkPWUubmV4dDtlPWUudGFnOzAhPT0oZSY0KSYmMCE9PShlJjEpJiYoWmkoYyxhKSwkaShjLGEpKTthPWR9d2hpbGUoYSE9PWIpfXJldHVybjtjYXNlIDE6YT1jLnN0YXRlTm9kZTtjLmZsYWdzJjQmJihudWxsPT09Yj9hLmNvbXBvbmVudERpZE1vdW50KCk6KGQ9Yy5lbGVtZW50VHlwZT09PWMudHlwZT9iLm1lbW9pemVkUHJvcHM6bGcoYy50eXBlLGIubWVtb2l6ZWRQcm9wcyksYS5jb21wb25lbnREaWRVcGRhdGUoZCxcbmIubWVtb2l6ZWRTdGF0ZSxhLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKSkpO2I9Yy51cGRhdGVRdWV1ZTtudWxsIT09YiYmRWcoYyxiLGEpO3JldHVybjtjYXNlIDM6Yj1jLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthPW51bGw7aWYobnVsbCE9PWMuY2hpbGQpc3dpdGNoKGMuY2hpbGQudGFnKXtjYXNlIDU6YT1jLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6YT1jLmNoaWxkLnN0YXRlTm9kZX1FZyhjLGIsYSl9cmV0dXJuO2Nhc2UgNTphPWMuc3RhdGVOb2RlO251bGw9PT1iJiZjLmZsYWdzJjQmJm1mKGMudHlwZSxjLm1lbW9pemVkUHJvcHMpJiZhLmZvY3VzKCk7cmV0dXJuO2Nhc2UgNjpyZXR1cm47Y2FzZSA0OnJldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGw9PT1jLm1lbW9pemVkU3RhdGUmJihjPWMuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYz1jLm1lbW9pemVkU3RhdGUsbnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsIT09YyYmQ2MoYykpKSk7XG5yZXR1cm47Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpjYXNlIDIzOmNhc2UgMjQ6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gYWooYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZD1kLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLnNldFByb3BlcnR5P2Quc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6ZC5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PXNiKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKCgyMyE9PWMudGFnJiYyNCE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHxjPT09YSkmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09XG5hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gYmooYSxiKXtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtNZi5vbkNvbW1pdEZpYmVyVW5tb3VudChMZixiKX1jYXRjaChmKXt9c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjphPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWEmJihhPWEubGFzdEVmZmVjdCxudWxsIT09YSkpe3ZhciBjPWE9YS5uZXh0O2Rve3ZhciBkPWMsZT1kLmRlc3Ryb3k7ZD1kLnRhZztpZih2b2lkIDAhPT1lKWlmKDAhPT0oZCY0KSlaaShiLGMpO2Vsc2V7ZD1iO3RyeXtlKCl9Y2F0Y2goZil7V2koZCxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWEpfWJyZWFrO2Nhc2UgMTpWaShiKTthPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXthLnByb3BzPWIubWVtb2l6ZWRQcm9wcyxhLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxhLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7V2koYixcbmYpfWJyZWFrO2Nhc2UgNTpWaShiKTticmVhaztjYXNlIDQ6Y2ooYSxiKX19ZnVuY3Rpb24gZGooYSl7YS5hbHRlcm5hdGU9bnVsbDthLmNoaWxkPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmZpcnN0RWZmZWN0PW51bGw7YS5sYXN0RWZmZWN0PW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnJldHVybj1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBlaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIGZqKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKGVqKGIpKWJyZWFrIGE7Yj1iLnJldHVybn10aHJvdyBFcnJvcih5KDE2MCkpO312YXIgYz1iO2I9Yy5zdGF0ZU5vZGU7c3dpdGNoKGMudGFnKXtjYXNlIDU6dmFyIGQ9ITE7YnJlYWs7Y2FzZSAzOmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDE2MSkpO31jLmZsYWdzJjE2JiYocGIoYixcIlwiKSxjLmZsYWdzJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8ZWooYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5mbGFncyYyKWNvbnRpbnVlIGI7aWYobnVsbD09PVxuYy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZmxhZ3MmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19ZD9naihhLGMsYik6aGooYSxjLGIpfVxuZnVuY3Rpb24gZ2ooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPWpmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspZ2ooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gaGooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihoaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWhqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGNqKGEsYil7Zm9yKHZhciBjPWIsZD0hMSxlLGY7Oyl7aWYoIWQpe2Q9Yy5yZXR1cm47YTpmb3IoOzspe2lmKG51bGw9PT1kKXRocm93IEVycm9yKHkoMTYwKSk7ZT1kLnN0YXRlTm9kZTtzd2l0Y2goZC50YWcpe2Nhc2UgNTpmPSExO2JyZWFrIGE7Y2FzZSAzOmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYTtjYXNlIDQ6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhfWQ9ZC5yZXR1cm59ZD0hMH1pZig1PT09Yy50YWd8fDY9PT1jLnRhZyl7YTpmb3IodmFyIGc9YSxoPWMsaz1oOzspaWYoYmooZyxrKSxudWxsIT09ay5jaGlsZCYmNCE9PWsudGFnKWsuY2hpbGQucmV0dXJuPWssaz1rLmNoaWxkO2Vsc2V7aWYoaz09PWgpYnJlYWsgYTtmb3IoO251bGw9PT1rLnNpYmxpbmc7KXtpZihudWxsPT09ay5yZXR1cm58fGsucmV0dXJuPT09aClicmVhayBhO2s9ay5yZXR1cm59ay5zaWJsaW5nLnJldHVybj1rLnJldHVybjtrPWsuc2libGluZ31mPyhnPWUsaD1jLnN0YXRlTm9kZSxcbjg9PT1nLm5vZGVUeXBlP2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKTpnLnJlbW92ZUNoaWxkKGgpKTplLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGJqKGEsYyksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gaWooYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOnZhciBjPWIudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG8gMz09PShkLnRhZyYzKSYmKGE9ZC5kZXN0cm95LGQuZGVzdHJveT12b2lkIDAsdm9pZCAwIT09YSYmYSgpKSxkPWQubmV4dDt3aGlsZShkIT09Yyl9cmV0dXJuO2Nhc2UgMTpyZXR1cm47Y2FzZSA1OmM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7ZD1iLm1lbW9pemVkUHJvcHM7dmFyIGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbeGZdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJiRhKGMsZCk7d2IoYSxlKTtiPXdiKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPVxuMil7dmFyIGc9ZltlXSxoPWZbZSsxXTtcInN0eWxlXCI9PT1nP3RiKGMsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9vYihjLGgpOlwiY2hpbGRyZW5cIj09PWc/cGIoYyxoKTpxYShjLGcsaCxiKX1zd2l0Y2goYSl7Y2FzZSBcImlucHV0XCI6YWIoYyxkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihjLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2ZiKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9mYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1yZXR1cm47Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1cbmIubWVtb2l6ZWRQcm9wcztyZXR1cm47Y2FzZSAzOmM9Yi5zdGF0ZU5vZGU7Yy5oeWRyYXRlJiYoYy5oeWRyYXRlPSExLENjKGMuY29udGFpbmVySW5mbykpO3JldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGwhPT1iLm1lbW9pemVkU3RhdGUmJihqaj1PKCksYWooYi5jaGlsZCwhMCkpO2tqKGIpO3JldHVybjtjYXNlIDE5OmtqKGIpO3JldHVybjtjYXNlIDE3OnJldHVybjtjYXNlIDIzOmNhc2UgMjQ6YWooYixudWxsIT09Yi5tZW1vaXplZFN0YXRlKTtyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgVWkpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1sai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIG1qKGEsYil7cmV0dXJuIG51bGwhPT1hJiYoYT1hLm1lbW9pemVkU3RhdGUsbnVsbD09PWF8fG51bGwhPT1hLmRlaHlkcmF0ZWQpPyhiPWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YiYmbnVsbD09PWIuZGVoeWRyYXRlZCk6ITF9dmFyIG5qPU1hdGguY2VpbCxvaj1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHBqPXJhLlJlYWN0Q3VycmVudE93bmVyLFg9MCxVPW51bGwsWT1udWxsLFc9MCxxaj0wLHJqPUJmKDApLFY9MCxzaj1udWxsLHRqPTAsRGc9MCxIaT0wLHVqPTAsdmo9bnVsbCxqaj0wLEppPUluZmluaXR5O2Z1bmN0aW9uIHdqKCl7Smk9TygpKzUwMH12YXIgWj1udWxsLFFpPSExLFJpPW51bGwsVGk9bnVsbCx4aj0hMSx5aj1udWxsLHpqPTkwLEFqPVtdLEJqPVtdLENqPW51bGwsRGo9MCxFaj1udWxsLEZqPS0xLEdqPTAsSGo9MCxJaj1udWxsLEpqPSExO2Z1bmN0aW9uIEhnKCl7cmV0dXJuIDAhPT0oWCY0OCk/TygpOi0xIT09Rmo/Rmo6Rmo9TygpfVxuZnVuY3Rpb24gSWcoYSl7YT1hLm1vZGU7aWYoMD09PShhJjIpKXJldHVybiAxO2lmKDA9PT0oYSY0KSlyZXR1cm4gOTk9PT1lZygpPzE6MjswPT09R2omJihHaj10aik7aWYoMCE9PWtnLnRyYW5zaXRpb24pezAhPT1IaiYmKEhqPW51bGwhPT12aj92ai5wZW5kaW5nTGFuZXM6MCk7YT1Hajt2YXIgYj00MTg2MTEyJn5IajtiJj0tYjswPT09YiYmKGE9NDE4NjExMiZ+YSxiPWEmLWEsMD09PWImJihiPTgxOTIpKTtyZXR1cm4gYn1hPWVnKCk7MCE9PShYJjQpJiY5OD09PWE/YT1YYygxMixHaik6KGE9U2MoYSksYT1YYyhhLEdqKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZyhhLGIsYyl7aWYoNTA8RGopdGhyb3cgRGo9MCxFaj1udWxsLEVycm9yKHkoMTg1KSk7YT1LaihhLGIpO2lmKG51bGw9PT1hKXJldHVybiBudWxsOyRjKGEsYixjKTthPT09VSYmKEhpfD1iLDQ9PT1WJiZJaShhLFcpKTt2YXIgZD1lZygpOzE9PT1iPzAhPT0oWCY4KSYmMD09PShYJjQ4KT9MaihhKTooTWooYSxjKSwwPT09WCYmKHdqKCksaWcoKSkpOigwPT09KFgmNCl8fDk4IT09ZCYmOTkhPT1kfHwobnVsbD09PUNqP0NqPW5ldyBTZXQoW2FdKTpDai5hZGQoYSkpLE1qKGEsYykpO3ZqPWF9ZnVuY3Rpb24gS2ooYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfVxuZnVuY3Rpb24gTWooYSxiKXtmb3IodmFyIGM9YS5jYWxsYmFja05vZGUsZD1hLnN1c3BlbmRlZExhbmVzLGU9YS5waW5nZWRMYW5lcyxmPWEuZXhwaXJhdGlvblRpbWVzLGc9YS5wZW5kaW5nTGFuZXM7MDxnOyl7dmFyIGg9MzEtVmMoZyksaz0xPDxoLGw9ZltoXTtpZigtMT09PWwpe2lmKDA9PT0oayZkKXx8MCE9PShrJmUpKXtsPWI7UmMoayk7dmFyIG49RjtmW2hdPTEwPD1uP2wrMjUwOjY8PW4/bCs1RTM6LTF9fWVsc2UgbDw9YiYmKGEuZXhwaXJlZExhbmVzfD1rKTtnJj1+a31kPVVjKGEsYT09PVU/VzowKTtiPUY7aWYoMD09PWQpbnVsbCE9PWMmJihjIT09WmYmJlBmKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTApO2Vsc2V7aWYobnVsbCE9PWMpe2lmKGEuY2FsbGJhY2tQcmlvcml0eT09PWIpcmV0dXJuO2MhPT1aZiYmUGYoYyl9MTU9PT1iPyhjPUxqLmJpbmQobnVsbCxhKSxudWxsPT09YWc/KGFnPVtjXSxiZz1PZihVZixqZykpOmFnLnB1c2goYyksXG5jPVpmKToxND09PWI/Yz1oZyg5OSxMai5iaW5kKG51bGwsYSkpOihjPVRjKGIpLGM9aGcoYyxOai5iaW5kKG51bGwsYSkpKTthLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIE5qKGEpe0ZqPS0xO0hqPUdqPTA7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBiPWEuY2FsbGJhY2tOb2RlO2lmKE9qKCkmJmEuY2FsbGJhY2tOb2RlIT09YilyZXR1cm4gbnVsbDt2YXIgYz1VYyhhLGE9PT1VP1c6MCk7aWYoMD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9Yzt2YXIgZT1YO1h8PTE2O3ZhciBmPVBqKCk7aWYoVSE9PWF8fFchPT1kKXdqKCksUWooYSxkKTtkbyB0cnl7UmooKTticmVha31jYXRjaChoKXtTaihhLGgpfXdoaWxlKDEpO3FnKCk7b2ouY3VycmVudD1mO1g9ZTtudWxsIT09WT9kPTA6KFU9bnVsbCxXPTAsZD1WKTtpZigwIT09KHRqJkhpKSlRaihhLDApO2Vsc2UgaWYoMCE9PWQpezI9PT1kJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGM9V2MoYSksMCE9PWMmJihkPVRqKGEsYykpKTtpZigxPT09ZCl0aHJvdyBiPXNqLFFqKGEsMCksSWkoYSxjKSxNaihhLE8oKSksYjthLmZpbmlzaGVkV29yaz1cbmEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWM7c3dpdGNoKGQpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IoeSgzNDUpKTtjYXNlIDI6VWooYSk7YnJlYWs7Y2FzZSAzOklpKGEsYyk7aWYoKGMmNjI5MTQ1NjApPT09YyYmKGQ9amorNTAwLU8oKSwxMDxkKSl7aWYoMCE9PVVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmMpIT09Yyl7SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxkKTticmVha31VaihhKTticmVhaztjYXNlIDQ6SWkoYSxjKTtpZigoYyY0MTg2MTEyKT09PWMpYnJlYWs7ZD1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxjOyl7dmFyIGc9MzEtVmMoYyk7Zj0xPDxnO2c9ZFtnXTtnPmUmJihlPWcpO2MmPX5mfWM9ZTtjPU8oKS1jO2M9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+XG5jPzQzMjA6MTk2MCpuaihjLzE5NjApKS1jO2lmKDEwPGMpe2EudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksYyk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA1OlVqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMjkpKTt9fU1qKGEsTygpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1iP05qLmJpbmQobnVsbCxhKTpudWxsfWZ1bmN0aW9uIElpKGEsYil7YiY9fnVqO2ImPX5IaTthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLVZjKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1cbmZ1bmN0aW9uIExqKGEpe2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTtPaigpO2lmKGE9PT1VJiYwIT09KGEuZXhwaXJlZExhbmVzJlcpKXt2YXIgYj1XO3ZhciBjPVRqKGEsYik7MCE9PSh0aiZIaSkmJihiPVVjKGEsYiksYz1UaihhLGIpKX1lbHNlIGI9VWMoYSwwKSxjPVRqKGEsYik7MCE9PWEudGFnJiYyPT09YyYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxiPVdjKGEpLDAhPT1iJiYoYz1UaihhLGIpKSk7aWYoMT09PWMpdGhyb3cgYz1zaixRaihhLDApLElpKGEsYiksTWooYSxPKCkpLGM7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtVaihhKTtNaihhLE8oKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaigpe2lmKG51bGwhPT1Dail7dmFyIGE9Q2o7Q2o9bnVsbDthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5leHBpcmVkTGFuZXN8PTI0JmEucGVuZGluZ0xhbmVzO01qKGEsTygpKX0pfWlnKCl9ZnVuY3Rpb24gV2ooYSxiKXt2YXIgYz1YO1h8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1YO1gmPS0yO1h8PTg7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gbmkoYSxiKXtJKHJqLHFqKTtxanw9Yjt0anw9Yn1mdW5jdGlvbiBLaSgpe3FqPXJqLmN1cnJlbnQ7SChyail9XG5mdW5jdGlvbiBRaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxwZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiZHZigpO2JyZWFrO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2JyZWFrO2Nhc2UgNTpoaChkKTticmVhaztjYXNlIDQ6ZmgoKTticmVhaztjYXNlIDEzOkgoUCk7YnJlYWs7Y2FzZSAxOTpIKFApO2JyZWFrO2Nhc2UgMTA6cmcoZCk7YnJlYWs7Y2FzZSAyMzpjYXNlIDI0OktpKCl9Yz1jLnJldHVybn1VPWE7WT1UZyhhLmN1cnJlbnQsbnVsbCk7Vz1xaj10aj1iO1Y9MDtzaj1udWxsO3VqPUhpPURnPTB9XG5mdW5jdGlvbiBTaihhLGIpe2Rve3ZhciBjPVk7dHJ5e3FnKCk7dmguY3VycmVudD1HaDtpZih5aCl7Zm9yKHZhciBkPVIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9eWg9ITF9eGg9MDtUPVM9Uj1udWxsO3poPSExO3BqLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtWPTE7c2o9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1XO2guZmxhZ3N8PTIwNDg7aC5maXJzdEVmZmVjdD1oLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rO2lmKDA9PT0oaC5tb2RlJjIpKXt2YXIgbj1oLmFsdGVybmF0ZTtuPyhoLnVwZGF0ZVF1ZXVlPW4udXBkYXRlUXVldWUsaC5tZW1vaXplZFN0YXRlPW4ubWVtb2l6ZWRTdGF0ZSxoLmxhbmVzPW4ubGFuZXMpOlxuKGgudXBkYXRlUXVldWU9bnVsbCxoLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIEE9MCE9PShQLmN1cnJlbnQmMSkscD1nO2Rve3ZhciBDO2lmKEM9MTM9PT1wLnRhZyl7dmFyIHg9cC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT14KUM9bnVsbCE9PXguZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciB3PXAubWVtb2l6ZWRQcm9wcztDPXZvaWQgMD09PXcuZmFsbGJhY2s/ITE6ITAhPT13LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOkE/ITE6ITB9fWlmKEMpe3ZhciB6PXAudXBkYXRlUXVldWU7aWYobnVsbD09PXope3ZhciB1PW5ldyBTZXQ7dS5hZGQobCk7cC51cGRhdGVRdWV1ZT11fWVsc2Ugei5hZGQobCk7aWYoMD09PShwLm1vZGUmMikpe3AuZmxhZ3N8PTY0O2guZmxhZ3N8PTE2Mzg0O2guZmxhZ3MmPS0yOTgxO2lmKDE9PT1oLnRhZylpZihudWxsPT09aC5hbHRlcm5hdGUpaC50YWc9MTc7ZWxzZXt2YXIgdD16ZygtMSwxKTt0LnRhZz0yO0FnKGgsdCl9aC5sYW5lc3w9MTticmVhayBhfWs9XG52b2lkIDA7aD1iO3ZhciBxPWYucGluZ0NhY2hlO251bGw9PT1xPyhxPWYucGluZ0NhY2hlPW5ldyBPaSxrPW5ldyBTZXQscS5zZXQobCxrKSk6KGs9cS5nZXQobCksdm9pZCAwPT09ayYmKGs9bmV3IFNldCxxLnNldChsLGspKSk7aWYoIWsuaGFzKGgpKXtrLmFkZChoKTt2YXIgdj1Zai5iaW5kKG51bGwsZixsLGgpO2wudGhlbih2LHYpfXAuZmxhZ3N8PTQwOTY7cC5sYW5lcz1iO2JyZWFrIGF9cD1wLnJldHVybn13aGlsZShudWxsIT09cCk7az1FcnJvcigoUmEoaC50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiKX01IT09ViYmKFY9Mik7az1NaShrLGgpO3A9XG5nO2Rve3N3aXRjaChwLnRhZyl7Y2FzZSAzOmY9aztwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEo9UGkocCxmLGIpO0JnKHAsSik7YnJlYWsgYTtjYXNlIDE6Zj1rO3ZhciBLPXAudHlwZSxRPXAuc3RhdGVOb2RlO2lmKDA9PT0ocC5mbGFncyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgSy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1RJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgUS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhRKSkpKXtwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEw9U2kocCxmLGIpO0JnKHAsTCk7YnJlYWsgYX19cD1wLnJldHVybn13aGlsZShudWxsIT09cCl9WmooYyl9Y2F0Y2godmEpe2I9dmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1cbmZ1bmN0aW9uIFBqKCl7dmFyIGE9b2ouY3VycmVudDtvai5jdXJyZW50PUdoO3JldHVybiBudWxsPT09YT9HaDphfWZ1bmN0aW9uIFRqKGEsYil7dmFyIGM9WDtYfD0xNjt2YXIgZD1QaigpO1U9PT1hJiZXPT09Ynx8UWooYSxiKTtkbyB0cnl7YWsoKTticmVha31jYXRjaChlKXtTaihhLGUpfXdoaWxlKDEpO3FnKCk7WD1jO29qLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcih5KDI2MSkpO1U9bnVsbDtXPTA7cmV0dXJuIFZ9ZnVuY3Rpb24gYWsoKXtmb3IoO251bGwhPT1ZOyliayhZKX1mdW5jdGlvbiBSaigpe2Zvcig7bnVsbCE9PVkmJiFRZigpOyliayhZKX1mdW5jdGlvbiBiayhhKXt2YXIgYj1jayhhLmFsdGVybmF0ZSxhLHFqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/WmooYSk6WT1iO3BqLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFpqKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMjA0OCkpe2M9R2koYyxiLHFqKTtpZihudWxsIT09Yyl7WT1jO3JldHVybn1jPWI7aWYoMjQhPT1jLnRhZyYmMjMhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8MCE9PShxaiYxMDczNzQxODI0KXx8MD09PShjLm1vZGUmNCkpe2Zvcih2YXIgZD0wLGU9Yy5jaGlsZDtudWxsIT09ZTspZHw9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZT1lLnNpYmxpbmc7Yy5jaGlsZExhbmVzPWR9bnVsbCE9PWEmJjA9PT0oYS5mbGFncyYyMDQ4KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxudWxsIT09Yi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QpLDE8Yi5mbGFncyYmKG51bGwhPT1cbmEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iOmEuZmlyc3RFZmZlY3Q9YixhLmxhc3RFZmZlY3Q9YikpfWVsc2V7Yz1MaShiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MjA0NztZPWM7cmV0dXJufW51bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmZsYWdzfD0yMDQ4KX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVYmJihWPTUpfWZ1bmN0aW9uIFVqKGEpe3ZhciBiPWVnKCk7Z2coOTksZGsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZGsoYSxiKXtkbyBPaigpO3doaWxlKG51bGwhPT15aik7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcih5KDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7dmFyIGQ9Yy5sYW5lc3xjLmNoaWxkTGFuZXMsZT1kLGY9YS5wZW5kaW5nTGFuZXMmfmU7YS5wZW5kaW5nTGFuZXM9ZTthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1lO2EubXV0YWJsZVJlYWRMYW5lcyY9ZTthLmVudGFuZ2xlZExhbmVzJj1lO2U9YS5lbnRhbmdsZW1lbnRzO2Zvcih2YXIgZz1hLmV2ZW50VGltZXMsaD1hLmV4cGlyYXRpb25UaW1lczswPGY7KXt2YXIgaz0zMS1WYyhmKSxsPTE8PGs7ZVtrXT0wO2dba109LTE7aFtrXT0tMTtmJj1+bH1udWxsIT09XG5DaiYmMD09PShkJjI0KSYmQ2ouaGFzKGEpJiZDai5kZWxldGUoYSk7YT09PVUmJihZPVU9bnVsbCxXPTApOzE8Yy5mbGFncz9udWxsIT09Yy5sYXN0RWZmZWN0PyhjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGQ9Yy5maXJzdEVmZmVjdCk6ZD1jOmQ9Yy5maXJzdEVmZmVjdDtpZihudWxsIT09ZCl7ZT1YO1h8PTMyO3BqLmN1cnJlbnQ9bnVsbDtrZj1mZDtnPU5lKCk7aWYoT2UoZykpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGcpaD17c3RhcnQ6Zy5zZWxlY3Rpb25TdGFydCxlbmQ6Zy5zZWxlY3Rpb25FbmR9O2Vsc2UgYTppZihoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdywobD1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKSkmJjAhPT1sLnJhbmdlQ291bnQpe2g9bC5hbmNob3JOb2RlO2Y9bC5hbmNob3JPZmZzZXQ7az1sLmZvY3VzTm9kZTtsPWwuZm9jdXNPZmZzZXQ7dHJ5e2gubm9kZVR5cGUsay5ub2RlVHlwZX1jYXRjaCh2YSl7aD1udWxsO1xuYnJlYWsgYX12YXIgbj0wLEE9LTEscD0tMSxDPTAseD0wLHc9Zyx6PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdTs7KXt3IT09aHx8MCE9PWYmJjMhPT13Lm5vZGVUeXBlfHwoQT1uK2YpO3chPT1rfHwwIT09bCYmMyE9PXcubm9kZVR5cGV8fChwPW4rbCk7Mz09PXcubm9kZVR5cGUmJihuKz13Lm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odT13LmZpcnN0Q2hpbGQpKWJyZWFrO3o9dzt3PXV9Zm9yKDs7KXtpZih3PT09ZylicmVhayBiO3o9PT1oJiYrK0M9PT1mJiYoQT1uKTt6PT09ayYmKyt4PT09bCYmKHA9bik7aWYobnVsbCE9PSh1PXcubmV4dFNpYmxpbmcpKWJyZWFrO3c9ejt6PXcucGFyZW50Tm9kZX13PXV9aD0tMT09PUF8fC0xPT09cD9udWxsOntzdGFydDpBLGVuZDpwfX1lbHNlIGg9bnVsbDtoPWh8fHtzdGFydDowLGVuZDowfX1lbHNlIGg9bnVsbDtsZj17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtmZD0hMTtJaj1udWxsO0pqPSExO1o9ZDtkbyB0cnl7ZWsoKX1jYXRjaCh2YSl7aWYobnVsbD09PVxuWil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtJaj1udWxsO1o9ZDtkbyB0cnl7Zm9yKGc9YTtudWxsIT09Wjspe3ZhciB0PVouZmxhZ3M7dCYxNiYmcGIoWi5zdGF0ZU5vZGUsXCJcIik7aWYodCYxMjgpe3ZhciBxPVouYWx0ZXJuYXRlO2lmKG51bGwhPT1xKXt2YXIgdj1xLnJlZjtudWxsIT09diYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YobnVsbCk6di5jdXJyZW50PW51bGwpfX1zd2l0Y2godCYxMDM4KXtjYXNlIDI6ZmooWik7Wi5mbGFncyY9LTM7YnJlYWs7Y2FzZSA2OmZqKFopO1ouZmxhZ3MmPS0zO2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgMTAyNDpaLmZsYWdzJj0tMTAyNTticmVhaztjYXNlIDEwMjg6Wi5mbGFncyY9LTEwMjU7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA0OmlqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgODpoPVo7Y2ooZyxoKTt2YXIgSj1oLmFsdGVybmF0ZTtkaihoKTtudWxsIT09XG5KJiZkaihKKX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO3Y9bGY7cT1OZSgpO3Q9di5mb2N1c2VkRWxlbTtnPXYuc2VsZWN0aW9uUmFuZ2U7aWYocSE9PXQmJnQmJnQub3duZXJEb2N1bWVudCYmTWUodC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0KSl7bnVsbCE9PWcmJk9lKHQpJiYocT1nLnN0YXJ0LHY9Zy5lbmQsdm9pZCAwPT09diYmKHY9cSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdD8odC5zZWxlY3Rpb25TdGFydD1xLHQuc2VsZWN0aW9uRW5kPU1hdGgubWluKHYsdC52YWx1ZS5sZW5ndGgpKToodj0ocT10Lm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcS5kZWZhdWx0Vmlld3x8d2luZG93LHYuZ2V0U2VsZWN0aW9uJiYodj12LmdldFNlbGVjdGlvbigpLGg9dC50ZXh0Q29udGVudC5sZW5ndGgsSj1NYXRoLm1pbihnLnN0YXJ0LGgpLGc9dm9pZCAwPT09XG5nLmVuZD9KOk1hdGgubWluKGcuZW5kLGgpLCF2LmV4dGVuZCYmSj5nJiYoaD1nLGc9SixKPWgpLGg9TGUodCxKKSxmPUxlKHQsZyksaCYmZiYmKDEhPT12LnJhbmdlQ291bnR8fHYuYW5jaG9yTm9kZSE9PWgubm9kZXx8di5hbmNob3JPZmZzZXQhPT1oLm9mZnNldHx8di5mb2N1c05vZGUhPT1mLm5vZGV8fHYuZm9jdXNPZmZzZXQhPT1mLm9mZnNldCkmJihxPXEuY3JlYXRlUmFuZ2UoKSxxLnNldFN0YXJ0KGgubm9kZSxoLm9mZnNldCksdi5yZW1vdmVBbGxSYW5nZXMoKSxKPmc/KHYuYWRkUmFuZ2UocSksdi5leHRlbmQoZi5ub2RlLGYub2Zmc2V0KSk6KHEuc2V0RW5kKGYubm9kZSxmLm9mZnNldCksdi5hZGRSYW5nZShxKSkpKSkpO3E9W107Zm9yKHY9dDt2PXYucGFyZW50Tm9kZTspMT09PXYubm9kZVR5cGUmJnEucHVzaCh7ZWxlbWVudDp2LGxlZnQ6di5zY3JvbGxMZWZ0LHRvcDp2LnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0LmZvY3VzJiZ0LmZvY3VzKCk7Zm9yKHQ9XG4wO3Q8cS5sZW5ndGg7dCsrKXY9cVt0XSx2LmVsZW1lbnQuc2Nyb2xsTGVmdD12LmxlZnQsdi5lbGVtZW50LnNjcm9sbFRvcD12LnRvcH1mZD0hIWtmO2xmPWtmPW51bGw7YS5jdXJyZW50PWM7Wj1kO2RvIHRyeXtmb3IodD1hO251bGwhPT1aOyl7dmFyIEs9Wi5mbGFncztLJjM2JiZZaSh0LFouYWx0ZXJuYXRlLFopO2lmKEsmMTI4KXtxPXZvaWQgMDt2YXIgUT1aLnJlZjtpZihudWxsIT09USl7dmFyIEw9Wi5zdGF0ZU5vZGU7c3dpdGNoKFoudGFnKXtjYXNlIDU6cT1MO2JyZWFrO2RlZmF1bHQ6cT1MfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBRP1EocSk6US5jdXJyZW50PXF9fVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7Wj1udWxsOyRmKCk7WD1lfWVsc2UgYS5jdXJyZW50PWM7aWYoeGopeGo9ITEseWo9YSx6aj1iO2Vsc2UgZm9yKFo9ZDtudWxsIT09WjspYj1cbloubmV4dEVmZmVjdCxaLm5leHRFZmZlY3Q9bnVsbCxaLmZsYWdzJjgmJihLPVosSy5zaWJsaW5nPW51bGwsSy5zdGF0ZU5vZGU9bnVsbCksWj1iO2Q9YS5wZW5kaW5nTGFuZXM7MD09PWQmJihUaT1udWxsKTsxPT09ZD9hPT09RWo/RGorKzooRGo9MCxFaj1hKTpEaj0wO2M9Yy5zdGF0ZU5vZGU7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7TWYub25Db21taXRGaWJlclJvb3QoTGYsYyx2b2lkIDAsNjQ9PT0oYy5jdXJyZW50LmZsYWdzJjY0KSl9Y2F0Y2godmEpe31NaihhLE8oKSk7aWYoUWkpdGhyb3cgUWk9ITEsYT1SaSxSaT1udWxsLGE7aWYoMCE9PShYJjgpKXJldHVybiBudWxsO2lnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBlaygpe2Zvcig7bnVsbCE9PVo7KXt2YXIgYT1aLmFsdGVybmF0ZTtKanx8bnVsbD09PUlqfHwoMCE9PShaLmZsYWdzJjgpP2RjKFosSWopJiYoSmo9ITApOjEzPT09Wi50YWcmJm1qKGEsWikmJmRjKFosSWopJiYoSmo9ITApKTt2YXIgYj1aLmZsYWdzOzAhPT0oYiYyNTYpJiZYaShhLFopOzA9PT0oYiY1MTIpfHx4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKTtaPVoubmV4dEVmZmVjdH19ZnVuY3Rpb24gT2ooKXtpZig5MCE9PXpqKXt2YXIgYT05Nzx6aj85Nzp6ajt6aj05MDtyZXR1cm4gZ2coYSxmayl9cmV0dXJuITF9ZnVuY3Rpb24gJGkoYSxiKXtBai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gWmkoYSxiKXtCai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9XG5mdW5jdGlvbiBmaygpe2lmKG51bGw9PT15ailyZXR1cm4hMTt2YXIgYT15ajt5aj1udWxsO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMzEpKTt2YXIgYj1YO1h8PTMyO3ZhciBjPUJqO0JqPVtdO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7dmFyIGU9Y1tkXSxmPWNbZCsxXSxnPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1jPUFqO0FqPVtdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKz0yKXtlPWNbZF07Zj1jW2QrMV07dHJ5e3ZhciBoPWUuY3JlYXRlO2UuZGVzdHJveT1oKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1mb3IoaD1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWg7KWE9aC5uZXh0RWZmZWN0LGgubmV4dEVmZmVjdD1udWxsLGguZmxhZ3MmOCYmKGguc2libGluZz1cbm51bGwsaC5zdGF0ZU5vZGU9bnVsbCksaD1hO1g9YjtpZygpO3JldHVybiEwfWZ1bmN0aW9uIGdrKGEsYixjKXtiPU1pKGMsYik7Yj1QaShhLGIsMSk7QWcoYSxiKTtiPUhnKCk7YT1LaihhLDEpO251bGwhPT1hJiYoJGMoYSwxLGIpLE1qKGEsYikpfVxuZnVuY3Rpb24gV2koYSxiKXtpZigzPT09YS50YWcpZ2soYSxhLGIpO2Vsc2UgZm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoMz09PWMudGFnKXtnayhjLGEsYik7YnJlYWt9ZWxzZSBpZigxPT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpe2E9TWkoYixhKTt2YXIgZT1TaShjLGEsMSk7QWcoYyxlKTtlPUhnKCk7Yz1LaihjLDEpO2lmKG51bGwhPT1jKSRjKGMsMSxlKSxNaihjLGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXRyeXtkLmNvbXBvbmVudERpZENhdGNoKGIsYSl9Y2F0Y2goZil7fWJyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIFlqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1IZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztVPT09YSYmKFcmYyk9PT1jJiYoND09PVZ8fDM9PT1WJiYoVyY2MjkxNDU2MCk9PT1XJiY1MDA+TygpLWpqP1FqKGEsMCk6dWp8PWMpO01qKGEsYil9ZnVuY3Rpb24gbGooYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj0wOzA9PT1iJiYoYj1hLm1vZGUsMD09PShiJjIpP2I9MTowPT09KGImNCk/Yj05OT09PWVnKCk/MToyOigwPT09R2omJihHaj10aiksYj1ZYyg2MjkxNDU2MCZ+R2opLDA9PT1iJiYoYj00MTk0MzA0KSkpO2M9SGcoKTthPUtqKGEsYik7bnVsbCE9PWEmJigkYyhhLGIsYyksTWooYSxjKSl9dmFyIGNrO1xuY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIubGFuZXM7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fE4uY3VycmVudCl1Zz0hMDtlbHNlIGlmKDAhPT0oYyZkKSl1Zz0wIT09KGEuZmxhZ3MmMTYzODQpPyEwOiExO2Vsc2V7dWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6cmkoYik7c2goKTticmVhaztjYXNlIDU6Z2goYik7YnJlYWs7Y2FzZSAxOkZmKGIudHlwZSkmJkpmKGIpO2JyZWFrO2Nhc2UgNDplaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6ZD1iLm1lbW9pemVkUHJvcHMudmFsdWU7dmFyIGU9Yi50eXBlLl9jb250ZXh0O0kobWcsZS5fY3VycmVudFZhbHVlKTtlLl9jdXJyZW50VmFsdWU9ZDticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiB0aShhLGIsYyk7SShQLFAuY3VycmVudCYxKTtiPWhpKGEsYixjKTtyZXR1cm4gbnVsbCE9PVxuYj9iLnNpYmxpbmc6bnVsbH1JKFAsUC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmNjQpKXtpZihkKXJldHVybiBBaShhLGIsYyk7Yi5mbGFnc3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtJKFAsUC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBiLmxhbmVzPTAsbWkoYSxiLGMpfXJldHVybiBoaShhLGIsYyl9ZWxzZSB1Zz0hMTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsTS5jdXJyZW50KTt0ZyhiLGMpO2U9Q2gobnVsbCxiLGQsYSxlLGMpO2IuZmxhZ3N8PTE7aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKEZmKGQpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt4ZyhiKTt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmR2coYixkLGcsYSk7ZS51cGRhdGVyPUtnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbHM9YjtPZyhiLGQsYSxjKTtiPXFpKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLGZpKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTthOntudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTtcbmE9Yi5wZW5kaW5nUHJvcHM7Zj1lLl9pbml0O2U9ZihlLl9wYXlsb2FkKTtiLnR5cGU9ZTtmPWIudGFnPWhrKGUpO2E9bGcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9bGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTpiPXBpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9Z2kobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1paShudWxsLGIsZSxsZyhlLnR5cGUsYSksZCxjKTticmVhayBhfXRocm93IEVycm9yKHkoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbGkoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSkscGkoYSxiLGQsZSxjKTtjYXNlIDM6cmkoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1hfHxudWxsPT09ZCl0aHJvdyBFcnJvcih5KDI4MikpO1xuZD1iLnBlbmRpbmdQcm9wcztlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lnKGEsYik7Q2coYixkLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlzaCgpLGI9aGkoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihmPWUuaHlkcmF0ZSlraD1yZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGpoPWIsZj1saD0hMDtpZihmKXthPWUubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YTtpZihudWxsIT1hKWZvcihlPTA7ZTxhLmxlbmd0aDtlKz0yKWY9YVtlXSxmLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWFbZSsxXSx0aC5wdXNoKGYpO2M9WmcoYixudWxsLGQsYyk7Zm9yKGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8MTAyNCxjPWMuc2libGluZ31lbHNlIGZpKGEsYixkLGMpLHNoKCk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gZ2goYiksbnVsbD09PWEmJlxucGgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixuZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmbmYoZCxmKSYmKGIuZmxhZ3N8PTE2KSxvaShhLGIpLGZpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmcGgoYiksbnVsbDtjYXNlIDEzOnJldHVybiB0aShhLGIsYyk7Y2FzZSA0OnJldHVybiBlaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1ZZyhiLG51bGwsZCxjKTpmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksZ2koYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO3ZhciBoPWIudHlwZS5fY29udGV4dDtJKG1nLGguX2N1cnJlbnRWYWx1ZSk7aC5fY3VycmVudFZhbHVlPWY7aWYobnVsbCE9PWcpaWYoaD1nLnZhbHVlLGY9SGUoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwLDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU4uY3VycmVudCl7Yj1oaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1cbmsuZmlyc3RDb250ZXh0O251bGwhPT1sOyl7aWYobC5jb250ZXh0PT09ZCYmMCE9PShsLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYobD16ZygtMSxjJi1jKSxsLnRhZz0yLEFnKGgsbCkpO2gubGFuZXN8PWM7bD1oLmFsdGVybmF0ZTtudWxsIT09bCYmKGwubGFuZXN8PWMpO3NnKGgucmV0dXJuLGMpO2subGFuZXN8PWM7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z31maShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix0ZyhiLGMpLGU9dmcoZSxcbmYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5mbGFnc3w9MSxmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bGcoZSxiLnBlbmRpbmdQcm9wcyksZj1sZyhlLnR5cGUsZiksaWkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIGtpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLGIudGFnPTEsRmYoZCk/KGE9ITAsSmYoYikpOmE9ITEsdGcoYixjKSxNZyhiLGQsZSksT2coYixkLGUsYykscWkobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBBaShhLGIsYyk7Y2FzZSAyMzpyZXR1cm4gbWkoYSxiLGMpO2Nhc2UgMjQ6cmV0dXJuIG1pKGEsYixjKX10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO1xufTtmdW5jdGlvbiBpayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZmxhZ3M9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gbmgoYSxiLGMsZCl7cmV0dXJuIG5ldyBpayhhLGIsYyxkKX1mdW5jdGlvbiBqaShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gaGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGppKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1BYSlyZXR1cm4gMTE7aWYoYT09PURhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9bmgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWppKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHVhOnJldHVybiBYZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIEhhOmc9ODtlfD0xNjticmVhaztjYXNlIHdhOmc9ODtlfD0xO2JyZWFrO2Nhc2UgeGE6cmV0dXJuIGE9bmgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT14YSxhLnR5cGU9eGEsYS5sYW5lcz1mLGE7Y2FzZSBCYTpyZXR1cm4gYT1uaCgxMyxjLGIsZSksYS50eXBlPUJhLGEuZWxlbWVudFR5cGU9QmEsYS5sYW5lcz1mLGE7Y2FzZSBDYTpyZXR1cm4gYT1uaCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1DYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiB2aShjLGUsZixiKTtjYXNlIEphOnJldHVybiBhPW5oKDI0LGMsYixlKSxhLmVsZW1lbnRUeXBlPUphLGEubGFuZXM9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHlhOmc9MTA7YnJlYWsgYTtjYXNlIHphOmc9OTticmVhayBhO2Nhc2UgQWE6Zz0xMTticmVhayBhO2Nhc2UgRGE6Zz0xNDticmVhayBhO2Nhc2UgRWE6Zz0xNjtkPW51bGw7YnJlYWsgYTtjYXNlIEZhOmc9MjI7YnJlYWsgYX10aHJvdyBFcnJvcih5KDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPW5oKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWGcoYSxiLGMsZCl7YT1uaCg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gdmkoYSxiLGMsZCl7YT1uaCgyMyxhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gVWcoYSxiLGMpe2E9bmgoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gV2coYSxiLGMpe2I9bmgoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBqayhhLGIsYyl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz1aYygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz1aYygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz1aYygwKTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9bnVsbH1cbmZ1bmN0aW9uIGtrKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6dGEsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBsayhhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1IZygpLGc9SWcoZSk7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxzO2I6e2lmKFpiKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHkoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoRmYoaC50eXBlKSl7aD1oLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKTt0aHJvdyBFcnJvcih5KDE3MSkpO31pZigxPT09Yy50YWcpe3ZhciBrPWMudHlwZTtpZihGZihrKSl7Yz1JZihjLGssaCk7YnJlYWsgYX19Yz1ofWVsc2UgYz1DZjtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPXpnKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PVxuZCYmKGIuY2FsbGJhY2s9ZCk7QWcoZSxiKTtKZyhlLGcsZik7cmV0dXJuIGd9ZnVuY3Rpb24gbWsoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBuayhhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gb2soYSxiKXtuayhhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmbmsoYSxiKX1mdW5jdGlvbiBwaygpe3JldHVybiBudWxsfVxuZnVuY3Rpb24gcWsoYSxiLGMpe3ZhciBkPW51bGwhPWMmJm51bGwhPWMuaHlkcmF0aW9uT3B0aW9ucyYmYy5oeWRyYXRpb25PcHRpb25zLm11dGFibGVTb3VyY2VzfHxudWxsO2M9bmV3IGprKGEsYixudWxsIT1jJiYhMD09PWMuaHlkcmF0ZSk7Yj1uaCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7Yy5jdXJyZW50PWI7Yi5zdGF0ZU5vZGU9Yzt4ZyhiKTthW2ZmXT1jLmN1cnJlbnQ7Y2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl7Yj1kW2FdO3ZhciBlPWIuX2dldFZlcnNpb247ZT1lKGIuX3NvdXJjZSk7bnVsbD09Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2MubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYixlXTpjLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChiLGUpfXRoaXMuX2ludGVybmFsUm9vdD1jfVxucWsucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtsayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLG51bGwpfTtxay5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdCxiPWEuY29udGFpbmVySW5mbztsayhudWxsLGEsbnVsbCxmdW5jdGlvbigpe2JbZmZdPW51bGx9KX07ZnVuY3Rpb24gcmsoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfVxuZnVuY3Rpb24gc2soYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBxayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHRrKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7aC5jYWxsKGEpfX1sayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXNrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2suY2FsbChhKX19WGooZnVuY3Rpb24oKXtsayhiLGcsYSxlKX0pfXJldHVybiBtayhnKX1lYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNCxiKTtvayhhLDQpfX07ZmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDY3MTA4ODY0LGIpO29rKGEsNjcxMDg4NjQpfX07XG5nYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpLGM9SWcoYSk7SmcoYSxjLGIpO29rKGEsYyl9fTtoYz1mdW5jdGlvbihhLGIpe3JldHVybiBiKCl9O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjphYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IoeSg5MCkpO1dhKGQpO2FiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1XajtcbkhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9WDtYfD00O3RyeXtyZXR1cm4gZ2coOTgsYS5iaW5kKG51bGwsYixjLGQsZSkpfWZpbmFsbHl7WD1mLDA9PT1YJiYod2ooKSxpZygpKX19O0liPWZ1bmN0aW9uKCl7MD09PShYJjQ5KSYmKFZqKCksT2ooKSl9O0piPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtYfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fTtmdW5jdGlvbiB1ayhhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiBrayhhLGIsbnVsbCxjKX12YXIgdms9e0V2ZW50czpbQ2IsdWUsRGIsRWIsRmIsT2ose2N1cnJlbnQ6ITF9XX0sd2s9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTcuMC4xXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB4az17YnVuZGxlVHlwZTp3ay5idW5kbGVUeXBlLHZlcnNpb246d2sudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOndrLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6d2sucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWNjKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3ay5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5wayxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHlrPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZigheWsuaXNEaXNhYmxlZCYmeWsuc3VwcG9ydHNGaWJlcil0cnl7TGY9eWsuaW5qZWN0KHhrKSxNZj15a31jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9dms7ZXhwb3J0cy5jcmVhdGVQb3J0YWw9dWs7XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHkoMTg4KSk7dGhyb3cgRXJyb3IoeSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1jYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtpZigwIT09KGMmNDgpKXJldHVybiBhKGIpO1h8PTE7dHJ5e2lmKGEpcmV0dXJuIGdnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1g9YyxpZygpfX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFyayhhKSl0aHJvdyBFcnJvcih5KDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oWGooZnVuY3Rpb24oKXt0ayhudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbZmZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1XajtleHBvcnRzLnVuc3RhYmxlX2NyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3JldHVybiB1ayhhLGIsMjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwpfTtcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXJrKGMpKXRocm93IEVycm9yKHkoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IoeSgzOCkpO3JldHVybiB0ayhhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4xXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1xuU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtcbmZ1bmN0aW9uIHooYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiBBKGEpe3JldHVybiB6KGEpPT09bX1leHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7XG5leHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9QTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09dH07XG5leHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXB9O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14fHxhLiQkdHlwZW9mPT09eXx8YS4kJHR5cGVvZj09PXYpfTtleHBvcnRzLnR5cGVPZj16O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjFcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjIwLjFcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGYsZyxoLGs7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyl7dmFyIGw9cGVyZm9ybWFuY2U7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gbC5ub3coKX19ZWxzZXt2YXIgcD1EYXRlLHE9cC5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBwLm5vdygpLXF9fVxuaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIHQ9bnVsbCx1PW51bGwsdz1mdW5jdGlvbigpe2lmKG51bGwhPT10KXRyeXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO3QoITAsYSk7dD1udWxsfWNhdGNoKGIpe3Rocm93IHNldFRpbWVvdXQodywwKSxiO319O2Y9ZnVuY3Rpb24oYSl7bnVsbCE9PXQ/c2V0VGltZW91dChmLDAsYSk6KHQ9YSxzZXRUaW1lb3V0KHcsMCkpfTtnPWZ1bmN0aW9uKGEsYil7dT1zZXRUaW1lb3V0KGEsYil9O2g9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSl9O2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4hMX07az1leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKCl7fX1lbHNle3ZhciB4PXdpbmRvdy5zZXRUaW1lb3V0LHk9d2luZG93LmNsZWFyVGltZW91dDtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe3ZhciB6PVxud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIik7XCJmdW5jdGlvblwiIT09dHlwZW9mIHomJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpfXZhciBBPSExLEI9bnVsbCxDPS0xLEQ9NSxFPTA7ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpPj1cbkV9O2s9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oYSl7MD5hfHwxMjU8YT9jb25zb2xlLmVycm9yKFwiZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsIGZvcmNpbmcgZnJhbWUgcmF0ZXMgaGlnaGVyIHRoYW4gMTI1IGZwcyBpcyBub3Qgc3VwcG9ydGVkXCIpOkQ9MDxhP01hdGguZmxvb3IoMUUzL2EpOjV9O3ZhciBGPW5ldyBNZXNzYWdlQ2hhbm5lbCxHPUYucG9ydDI7Ri5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZihudWxsIT09Qil7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtFPWErRDt0cnl7QighMCxhKT9HLnBvc3RNZXNzYWdlKG51bGwpOihBPSExLEI9bnVsbCl9Y2F0Y2goYil7dGhyb3cgRy5wb3N0TWVzc2FnZShudWxsKSxiO319ZWxzZSBBPSExfTtmPWZ1bmN0aW9uKGEpe0I9YTtBfHwoQT0hMCxHLnBvc3RNZXNzYWdlKG51bGwpKX07Zz1mdW5jdGlvbihhLGIpe0M9XG54KGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9O2g9ZnVuY3Rpb24oKXt5KEMpO0M9LTF9fWZ1bmN0aW9uIEgoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKHZvaWQgMCE9PWUmJjA8SShlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gSihhKXthPWFbMF07cmV0dXJuIHZvaWQgMD09PWE/bnVsbDphfVxuZnVuY3Rpb24gSyhhKXt2YXIgYj1hWzBdO2lmKHZvaWQgMCE9PWIpe3ZhciBjPWEucG9wKCk7aWYoYyE9PWIpe2FbMF09YzthOmZvcih2YXIgZD0wLGU9YS5sZW5ndGg7ZDxlOyl7dmFyIG09MiooZCsxKS0xLG49YVttXSx2PW0rMSxyPWFbdl07aWYodm9pZCAwIT09biYmMD5JKG4sYykpdm9pZCAwIT09ciYmMD5JKHIsbik/KGFbZF09cixhW3ZdPWMsZD12KTooYVtkXT1uLGFbbV09YyxkPW0pO2Vsc2UgaWYodm9pZCAwIT09ciYmMD5JKHIsYykpYVtkXT1yLGFbdl09YyxkPXY7ZWxzZSBicmVhayBhfX1yZXR1cm4gYn1yZXR1cm4gbnVsbH1mdW5jdGlvbiBJKGEsYil7dmFyIGM9YS5zb3J0SW5kZXgtYi5zb3J0SW5kZXg7cmV0dXJuIDAhPT1jP2M6YS5pZC1iLmlkfXZhciBMPVtdLE09W10sTj0xLE89bnVsbCxQPTMsUT0hMSxSPSExLFM9ITE7XG5mdW5jdGlvbiBUKGEpe2Zvcih2YXIgYj1KKE0pO251bGwhPT1iOyl7aWYobnVsbD09PWIuY2FsbGJhY2spSyhNKTtlbHNlIGlmKGIuc3RhcnRUaW1lPD1hKUsoTSksYi5zb3J0SW5kZXg9Yi5leHBpcmF0aW9uVGltZSxIKEwsYik7ZWxzZSBicmVhaztiPUooTSl9fWZ1bmN0aW9uIFUoYSl7Uz0hMTtUKGEpO2lmKCFSKWlmKG51bGwhPT1KKEwpKVI9ITAsZihWKTtlbHNle3ZhciBiPUooTSk7bnVsbCE9PWImJmcoVSxiLnN0YXJ0VGltZS1hKX19XG5mdW5jdGlvbiBWKGEsYil7Uj0hMTtTJiYoUz0hMSxoKCkpO1E9ITA7dmFyIGM9UDt0cnl7VChiKTtmb3IoTz1KKEwpO251bGwhPT1PJiYoIShPLmV4cGlyYXRpb25UaW1lPmIpfHxhJiYhZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZCgpKTspe3ZhciBkPU8uY2FsbGJhY2s7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe08uY2FsbGJhY2s9bnVsbDtQPU8ucHJpb3JpdHlMZXZlbDt2YXIgZT1kKE8uZXhwaXJhdGlvblRpbWU8PWIpO2I9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT9PLmNhbGxiYWNrPWU6Tz09PUooTCkmJksoTCk7VChiKX1lbHNlIEsoTCk7Tz1KKEwpfWlmKG51bGwhPT1PKXZhciBtPSEwO2Vsc2V7dmFyIG49SihNKTtudWxsIT09biYmZyhVLG4uc3RhcnRUaW1lLWIpO209ITF9cmV0dXJuIG19ZmluYWxseXtPPW51bGwsUD1jLFE9ITF9fXZhciBXPWs7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtcbmV4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7Unx8UXx8KFI9ITAsZihWKSl9O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gUH07ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBKKEwpfTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goUCl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9UH12YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e1A9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcmVxdWVzdFBhaW50PVc7ZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz1QO1A9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e1A9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWM/KGM9Yy5kZWxheSxjPVwibnVtYmVyXCI9PT10eXBlb2YgYyYmMDxjP2QrYzpkKTpjPWQ7c3dpdGNoKGEpe2Nhc2UgMTp2YXIgZT0tMTticmVhaztjYXNlIDI6ZT0yNTA7YnJlYWs7Y2FzZSA1OmU9MTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6ZT0xRTQ7YnJlYWs7ZGVmYXVsdDplPTVFM31lPWMrZTthPXtpZDpOKyssY2FsbGJhY2s6Yixwcmlvcml0eUxldmVsOmEsc3RhcnRUaW1lOmMsZXhwaXJhdGlvblRpbWU6ZSxzb3J0SW5kZXg6LTF9O2M+ZD8oYS5zb3J0SW5kZXg9YyxIKE0sYSksbnVsbD09PUooTCkmJmE9PT1KKE0pJiYoUz9oKCk6Uz0hMCxnKFUsYy1kKSkpOihhLnNvcnRJbmRleD1lLEgoTCxhKSxSfHxRfHwoUj0hMCxmKFYpKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9UDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7UD1jfX19O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydHt0eXBlT2YgYXMgZSxpc0VsZW1lbnQgYXMgdCxpc1ZhbGlkRWxlbWVudFR5cGUgYXMgbn1mcm9tXCJyZWFjdC1pc1wiO2ltcG9ydCByLHt1c2VTdGF0ZSBhcyBvLHVzZUNvbnRleHQgYXMgcyx1c2VNZW1vIGFzIGksdXNlRWZmZWN0IGFzIGEsdXNlUmVmIGFzIGMsY3JlYXRlRWxlbWVudCBhcyB1LHVzZURlYnVnVmFsdWUgYXMgbCx1c2VMYXlvdXRFZmZlY3QgYXMgZH1mcm9tXCJyZWFjdFwiO2ltcG9ydCBoIGZyb21cInNoYWxsb3dlcXVhbFwiO2ltcG9ydCBwIGZyb21cIkBlbW90aW9uL3N0eWxpc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL3VuaXRsZXNzXCI7aW1wb3J0IG0gZnJvbVwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO2ltcG9ydCB5IGZyb21cImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7ZnVuY3Rpb24gdigpe3JldHVybih2PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W2VbMF1dLHI9MCxvPXQubGVuZ3RoO3I8bztyKz0xKW4ucHVzaCh0W3JdLGVbcisxXSk7cmV0dXJuIG59LFM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PSh0LnRvU3RyaW5nP3QudG9TdHJpbmcoKTpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpJiYhZSh0KX0sdz1PYmplY3QuZnJlZXplKFtdKSxFPU9iamVjdC5mcmVlemUoe30pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBfKGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxlLmRpc3BsYXlOYW1lfHxlLm5hbWV8fFwiQ29tcG9uZW50XCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuc3R5bGVkQ29tcG9uZW50SWR9dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4yLjFcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWTpcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKSxPPXt9LFI9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIn06e307ZnVuY3Rpb24gRCgpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wP3ZvaWQgMDphcmd1bWVudHNbMF0sdD1bXSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKz0xKXQucHVzaChuPDB8fGFyZ3VtZW50cy5sZW5ndGg8PW4/dm9pZCAwOmFyZ3VtZW50c1tuXSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT1lLnJlcGxhY2UoLyVbYS16XS8sdCl9KSksZX1mdW5jdGlvbiBqKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt0aHJvd1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdC5pby9KVUlhRSNcIitlK1wiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKyhuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiK24uam9pbihcIiwgXCIpOlwiXCIpKTpuZXcgRXJyb3IoRC5hcHBseSh2b2lkIDAsW1JbZV1dLmNvbmNhdChuKSkudHJpbSgpKX12YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheSg1MTIpLHRoaXMubGVuZ3RoPTUxMix0aGlzLnRhZz1lfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0KXtpZihlPj10aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKXtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzLHI9bi5sZW5ndGgsbz1yO2U+PW87KShvPDw9MSk8MCYmaigxNixcIlwiK2UpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0wLGM9dC5sZW5ndGg7YTxjO2ErKyl0aGlzLnRhZy5pbnNlcnRSdWxlKGksdFthXSkmJih0aGlzLmdyb3VwU2l6ZXNbZV0rKyxpKyspfSx0LmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sdC5nZXRHcm91cD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2lmKGU+PXRoaXMubGVuZ3RofHwwPT09dGhpcy5ncm91cFNpemVzW2VdKXJldHVybiB0O2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXNbZV0scj10aGlzLmluZGV4T2ZHcm91cChlKSxvPXIrbixzPXI7czxvO3MrKyl0Kz10aGlzLnRhZy5nZXRSdWxlKHMpK1wiLyohc2MqL1xcblwiO3JldHVybiB0fSxlfSgpLGs9bmV3IE1hcCx4PW5ldyBNYXAsVj0xLEI9ZnVuY3Rpb24oZSl7aWYoay5oYXMoZSkpcmV0dXJuIGsuZ2V0KGUpO2Zvcig7eC5oYXMoVik7KVYrKzt2YXIgdD1WKys7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKCgwfHQpPDB8fHQ+MTw8MzApJiZqKDE2LFwiXCIrdCksay5zZXQoZSx0KSx4LnNldCh0LGUpLHR9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIHguZ2V0KGUpfSx6PWZ1bmN0aW9uKGUsdCl7ay5zZXQoZSx0KSx4LnNldCh0LGUpfSxMPVwic3R5bGVbXCIrQSsnXVtkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4yLjFcIl0nLEc9bmV3IFJlZ0V4cChcIl5cIitBKydcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XCIoW1xcXFx3XFxcXGQtXSspXCJcXFxcXS4qP1wiKFteXCJdKiknKSxGPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsbz1uLnNwbGl0KFwiLFwiKSxzPTAsaT1vLmxlbmd0aDtzPGk7cysrKShyPW9bc10pJiZlLnJlZ2lzdGVyTmFtZSh0LHIpfSxZPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXQuaW5uZXJIVE1MLnNwbGl0KFwiLyohc2MqL1xcblwiKSxyPVtdLG89MCxzPW4ubGVuZ3RoO288cztvKyspe3ZhciBpPW5bb10udHJpbSgpO2lmKGkpe3ZhciBhPWkubWF0Y2goRyk7aWYoYSl7dmFyIGM9MHxwYXJzZUludChhWzFdLDEwKSx1PWFbMl07MCE9PWMmJih6KHUsYyksRihlLHUsYVszXSksZS5nZXRUYWcoKS5pbnNlcnRSdWxlcyhjLHIpKSxyLmxlbmd0aD0wfWVsc2Ugci5wdXNoKGkpfX19LHE9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgX193ZWJwYWNrX25vbmNlX18/X193ZWJwYWNrX25vbmNlX186bnVsbH0sSD1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoQSkpcmV0dXJuIHJ9fShuKSxzPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKEEsXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjIuMVwiKTt2YXIgaT1xKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuc2hlZXQ9ZnVuY3Rpb24oZSl7aWYoZS5zaGVldClyZXR1cm4gZS5zaGVldDtmb3IodmFyIHQ9ZG9jdW1lbnQuc3R5bGVTaGVldHMsbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtpZihvLm93bmVyTm9kZT09PWUpcmV0dXJuIG99aigxNyl9KHQpLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHQsZSksdGhpcy5sZW5ndGgrKywhMH1jYXRjaChlKXtyZXR1cm4hMX19LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2hlZXQuY3NzUnVsZXNbZV07cmV0dXJuIHZvaWQgMCE9PXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dGhpcy5ub2Rlcz10LmNoaWxkTm9kZXMsdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7aWYoZTw9dGhpcy5sZW5ndGgmJmU+PTApe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpLHI9dGhpcy5ub2Rlc1tlXTtyZXR1cm4gdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShuLHJ8fG51bGwpLHRoaXMubGVuZ3RoKyssITB9cmV0dXJuITF9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tlXSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLnJ1bGVzPVtdLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPD10aGlzLmxlbmd0aCYmKHRoaXMucnVsZXMuc3BsaWNlKGUsMCx0KSx0aGlzLmxlbmd0aCsrLCEwKX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMucnVsZXNbZV06XCJcIn0sZX0oKSxKPUksWD17aXNTZXJ2ZXI6IUksdXNlQ1NTT01JbmplY3Rpb246IVB9LFo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKSx2b2lkIDA9PT10JiYodD17fSksdGhpcy5vcHRpb25zPXYoe30sWCx7fSxlKSx0aGlzLmdzPXQsdGhpcy5uYW1lcz1uZXcgTWFwKG4pLCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXImJkkmJkomJihKPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEwpLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07byYmXCJhY3RpdmVcIiE9PW8uZ2V0QXR0cmlidXRlKEEpJiYoWShlLG8pLG8ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pKX19KHRoaXMpKX1lLnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSl9O3ZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LnJlY29uc3RydWN0V2l0aE9wdGlvbnM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49ITApLG5ldyBlKHYoe30sdGhpcy5vcHRpb25zLHt9LHQpLHRoaXMuZ3MsbiYmdGhpcy5uYW1lc3x8dm9pZCAwKX0sdC5hbGxvY2F0ZUdTSW5zdGFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ3NbZV09KHRoaXMuZ3NbZV18fDApKzF9LHQuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KG49KHQ9dGhpcy5vcHRpb25zKS5pc1NlcnZlcixyPXQudXNlQ1NTT01JbmplY3Rpb24sbz10LnRhcmdldCxlPW4/bmV3IFUobyk6cj9uZXcgJChvKTpuZXcgVyhvKSxuZXcgVChlKSkpO3ZhciBlLHQsbixyLG99LHQuaGFzTmFtZUZvcklkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5oYXModCl9LHQucmVnaXN0ZXJOYW1lPWZ1bmN0aW9uKGUsdCl7aWYoQihlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnJlZ2lzdGVyTmFtZShlLHQpLHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoQihlKSxuKX0sdC5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LmNsZWFyUnVsZXM9ZnVuY3Rpb24oZSl7dGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKEIoZSkpLHRoaXMuY2xlYXJOYW1lcyhlKX0sdC5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5nZXRUYWcoKSxuPXQubGVuZ3RoLHI9XCJcIixvPTA7bzxuO28rKyl7dmFyIHM9TShvKTtpZih2b2lkIDAhPT1zKXt2YXIgaT1lLm5hbWVzLmdldChzKSxhPXQuZ2V0R3JvdXAobyk7aWYodm9pZCAwIT09aSYmMCE9PWEubGVuZ3RoKXt2YXIgYz1BK1wiLmdcIitvKydbaWQ9XCInK3MrJ1wiXScsdT1cIlwiO3ZvaWQgMCE9PWkmJmkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5sZW5ndGg+MCYmKHUrPWUrXCIsXCIpfSkpLHIrPVwiXCIrYStjKyd7Y29udGVudDpcIicrdSsnXCJ9Lyohc2MqL1xcbid9fX1yZXR1cm4gcn0odGhpcyl9LGV9KCksSz0vKGEpKGQpL2dpLFE9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBlZShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPVEodCU1MikrbjtyZXR1cm4oUSh0JTUyKStuKS5yZXBsYWNlKEssXCIkMS0kMlwiKX12YXIgdGU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxuZT1mdW5jdGlvbihlKXtyZXR1cm4gdGUoNTM4MSxlKX07ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKGIobikmJiFOKG4pKXJldHVybiExfXJldHVybiEwfXZhciBvZT1uZShcIjUuMi4xXCIpLHNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5ydWxlcz1lLHRoaXMuc3RhdGljUnVsZXNJZD1cIlwiLHRoaXMuaXNTdGF0aWM9XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHZvaWQgMD09PW58fG4uaXNTdGF0aWMpJiZyZShlKSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5iYXNlSGFzaD10ZShvZSx0KSx0aGlzLmJhc2VTdHlsZT1uLFoucmVnaXN0ZXJJZCh0KX1yZXR1cm4gZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuY29tcG9uZW50SWQsbz1bXTtpZih0aGlzLmJhc2VTdHlsZSYmby5wdXNoKHRoaXMuYmFzZVN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGUsdCxuKSksdGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHIsdGhpcy5zdGF0aWNSdWxlc0lkKSlvLnB1c2godGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBzPU5lKHRoaXMucnVsZXMsZSx0LG4pLmpvaW4oXCJcIiksaT1lZSh0ZSh0aGlzLmJhc2VIYXNoLHMubGVuZ3RoKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLGkpKXt2YXIgYT1uKHMsXCIuXCIraSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLGksYSl9by5wdXNoKGkpLHRoaXMuc3RhdGljUnVsZXNJZD1pfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxpZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxzPXZvaWQgMD09PWU/RTplLGk9cy5vcHRpb25zLGE9dm9pZCAwPT09aT9FOmksYz1zLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8scyxpLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIscyl7cmV0dXJuIDA9PT1yJiZhZS5pbmNsdWRlcyhzW24ubGVuZ3RoXSl8fHMubWF0Y2gobyk/ZTpcIi5cIit0fTtmdW5jdGlvbiBtKGUscyxpLGEpe3ZvaWQgMD09PWEmJihhPVwiJlwiKTt2YXIgYz1lLnJlcGxhY2UoaWUsXCJcIiksdT1zJiZpP2krXCIgXCIrcytcIiB7IFwiK2MrXCIgfVwiOmM7cmV0dXJuIHQ9YSxuPXMscj1uZXcgUmVnRXhwKFwiXFxcXFwiK24rXCJcXFxcYlwiLFwiZ1wiKSxvPW5ldyBSZWdFeHAoXCIoXFxcXFwiK24rXCJcXFxcYil7Mix9XCIpLGwoaXx8IXM/XCJcIjpzLHUpfXJldHVybiBsLnVzZShbXS5jb25jYXQodSxbZnVuY3Rpb24oZSx0LG8pezI9PT1lJiZvLmxlbmd0aCYmb1swXS5sYXN0SW5kZXhPZihuKT4wJiYob1swXT1vWzBdLnJlcGxhY2UocixmKSl9LGgsZnVuY3Rpb24oZSl7aWYoLTI9PT1lKXt2YXIgdD1kO3JldHVybiBkPVtdLHR9fV0pKSxtLmhhc2g9dS5sZW5ndGg/dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZXx8aigxNSksdGUoZSx0Lm5hbWUpfSksNTM4MSkudG9TdHJpbmcoKTpcIlwiLG19dmFyIHVlPXIuY3JlYXRlQ29udGV4dCgpLGxlPXVlLkNvbnN1bWVyLGRlPXIuY3JlYXRlQ29udGV4dCgpLGhlPShkZS5Db25zdW1lcixuZXcgWikscGU9Y2UoKTtmdW5jdGlvbiBmZSgpe3JldHVybiBzKHVlKXx8aGV9ZnVuY3Rpb24gbWUoKXtyZXR1cm4gcyhkZSl8fHBlfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW8oZS5zdHlsaXNQbHVnaW5zKSxuPXRbMF0scz10WzFdLGM9ZmUoKSx1PWkoKGZ1bmN0aW9uKCl7dmFyIHQ9YztyZXR1cm4gZS5zaGVldD90PWUuc2hlZXQ6ZS50YXJnZXQmJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dGFyZ2V0OmUudGFyZ2V0fSwhMSkpLGUuZGlzYWJsZUNTU09NSW5qZWN0aW9uJiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3VzZUNTU09NSW5qZWN0aW9uOiExfSkpLHR9KSxbZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24sZS5zaGVldCxlLnRhcmdldF0pLGw9aSgoZnVuY3Rpb24oKXtyZXR1cm4gY2Uoe29wdGlvbnM6e3ByZWZpeDohZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6bn0pfSksW2UuZGlzYWJsZVZlbmRvclByZWZpeGVzLG5dKTtyZXR1cm4gYSgoZnVuY3Rpb24oKXtoKG4sZS5zdHlsaXNQbHVnaW5zKXx8cyhlLnN0eWxpc1BsdWdpbnMpfSksW2Uuc3R5bGlzUGx1Z2luc10pLHIuY3JlYXRlRWxlbWVudCh1ZS5Qcm92aWRlcix7dmFsdWU6dX0sci5jcmVhdGVFbGVtZW50KGRlLlByb3ZpZGVyLHt2YWx1ZTpsfSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3IuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKTplLmNoaWxkcmVuKSl9dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1wZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGooMTIsU3RyaW5nKG4ubmFtZSkpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiK2UsdGhpcy5ydWxlcz10fXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1wZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxnZT0vKFtBLVpdKS8sU2U9LyhbQS1aXSkvZyx3ZT0vXm1zLS8sRWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfTtmdW5jdGlvbiBiZShlKXtyZXR1cm4gZ2UudGVzdChlKT9lLnJlcGxhY2UoU2UsRWUpLnJlcGxhY2Uod2UsXCItbXMtXCIpOmV9dmFyIF9lPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHwhMT09PWV8fFwiXCI9PT1lfTtmdW5jdGlvbiBOZShlLG4scixvKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHMsaT1bXSxhPTAsYz1lLmxlbmd0aDthPGM7YSs9MSlcIlwiIT09KHM9TmUoZVthXSxuLHIsbykpJiYoQXJyYXkuaXNBcnJheShzKT9pLnB1c2guYXBwbHkoaSxzKTppLnB1c2gocykpO3JldHVybiBpfWlmKF9lKGUpKXJldHVyblwiXCI7aWYoTihlKSlyZXR1cm5cIi5cIitlLnN0eWxlZENvbXBvbmVudElkO2lmKGIoZSkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGw9ZSl8fGwucHJvdG90eXBlJiZsLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhbilyZXR1cm4gZTt2YXIgdT1lKG4pO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQodSkmJmNvbnNvbGUud2FybihfKGUpK1wiIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cIiksTmUodSxuLHIsbyl9dmFyIGw7cmV0dXJuIGUgaW5zdGFuY2VvZiB2ZT9yPyhlLmluamVjdChyLG8pLGUuZ2V0TmFtZShvKSk6ZTpTKGUpP2Z1bmN0aW9uIGUodCxuKXt2YXIgcixvLHM9W107Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmIV9lKHRbaV0pJiYoUyh0W2ldKT9zLnB1c2guYXBwbHkocyxlKHRbaV0saSkpOmIodFtpXSk/cy5wdXNoKGJlKGkpK1wiOlwiLHRbaV0sXCI7XCIpOnMucHVzaChiZShpKStcIjogXCIrKHI9aSxudWxsPT0obz10W2ldKXx8XCJib29sZWFuXCI9PXR5cGVvZiBvfHxcIlwiPT09bz9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiBvfHwwPT09b3x8ciBpbiBmP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQocyxbXCJ9XCJdKTpzfShlKTplLnRvU3RyaW5nKCl9ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBiKGUpfHxTKGUpP05lKGcodyxbZV0uY29uY2F0KG4pKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6TmUoZyhlLG4pKX12YXIgQ2U9L2ludmFsaWQgaG9vayBjYWxsL2ksSWU9bmV3IFNldCxQZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiO3RyeXtjKCksSWUuaGFzKG4pfHwoY29uc29sZS53YXJuKG4pLEllLmFkZChuKSl9Y2F0Y2goZSl7Q2UudGVzdChlLm1lc3NhZ2UpJiZJZS5kZWxldGUobil9fX0sT2U9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sUmU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxEZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIGplKGUpe3JldHVybiBlLnJlcGxhY2UoUmUsXCItXCIpLnJlcGxhY2UoRGUsXCJcIil9dmFyIFRlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07eGUodCkmJnhlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoeGUoaSkpZm9yKHZhciBhIGluIGkpVmUoYSkmJkJlKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgemU9ci5jcmVhdGVDb250ZXh0KCksTGU9emUuQ29uc3VtZXI7ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9cyh6ZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4yLjFcIituK0ZlW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/amUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIpJiZ0LnNob3VsZEZvcndhcmRQcm9wKG4scil9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KE9lKHQscyh6ZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSk6IU58fG0oSSkpJiYoQ1tJXT1BW0ldKSk7cmV0dXJuIHQuc3R5bGUmJmcuc3R5bGUhPT10LnN0eWxlJiYoQy5zdHlsZT12KHt9LHQuc3R5bGUse30sZy5zdHlsZSkpLEMuY2xhc3NOYW1lPUFycmF5LnByb3RvdHlwZS5jb25jYXQoYyxoLFMhPT1oP1M6bnVsbCx0LmNsYXNzTmFtZSxnLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEMucmVmPXcsdShfLEMpfShDLGUsdCxQKX07cmV0dXJuIE8uZGlzcGxheU5hbWU9ZiwoQz1yLmZvcndhcmRSZWYoTykpLmF0dHJzPVMsQy5jb21wb25lbnRTdHlsZT1JLEMuZGlzcGxheU5hbWU9ZixDLnNob3VsZEZvcndhcmRQcm9wPUEsQy5mb2xkZWRDb21wb25lbnRJZHM9bz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuZm9sZGVkQ29tcG9uZW50SWRzLGUuc3R5bGVkQ29tcG9uZW50SWQpOncsQy5zdHlsZWRDb21wb25lbnRJZD1nLEMudGFyZ2V0PW8/ZS50YXJnZXQ6ZSxDLndpdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9dC5jb21wb25lbnRJZCxvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30scz1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8cy5sZW5ndGg7cisrKW49c1tyXSx0LmluZGV4T2Yobik+PTB8fChvW25dPWVbbl0pO3JldHVybiBvfSh0LFtcImNvbXBvbmVudElkXCJdKSxzPXImJnIrXCItXCIrKGtlKGUpP2U6amUoXyhlKSkpO3JldHVybiBZZShlLHYoe30sbyx7YXR0cnM6Uyxjb21wb25lbnRJZDpzfSksbil9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9bz9NZSh7fSxlLmRlZmF1bHRQcm9wcyx0KTp0fX0pLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihQZShmLGcpLEMud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIjtjb25zb2xlLndhcm4oXCJPdmVyIDIwMCBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIrZStzK1wiLlxcbkNvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuRXhhbXBsZTpcXG4gIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4gICAgc3R5bGU6IHtcXG4gICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbiAgICB9LFxcbiAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4gIDxDb21wb25lbnQgLz5cIikscj0hMCxuPXt9fX19KGYsZykpLEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5cIitDLnN0eWxlZENvbXBvbmVudElkfSxpJiZ5KEMsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQ312YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPUUpLCFuKHIpKXJldHVybiBqKDEsU3RyaW5nKHIpKTt2YXIgcz1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBzLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7fSxuKSl9LHMuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0sc30oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3FlW2VdPXFlKGUpfSkpO3ZhciBIZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uICRlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitUZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgSGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyh6ZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpPZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlBlKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBXZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPVRlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgVWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCksbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMi4xXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKHplKSxpPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIHMoemUpfSxaZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsemUgYXMgVGhlbWVDb250ZXh0LEdlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9