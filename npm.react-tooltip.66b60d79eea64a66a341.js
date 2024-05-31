(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [8631], {
        95626: (e, t, n) => {
            (e.exports = n(23645)(!1)).push([e.id, ":root {\n  --rt-color-white: #fff;\n  --rt-color-dark: #222;\n  --rt-color-success: #8dc572;\n  --rt-color-error: #be6464;\n  --rt-color-warning: #f0ad4e;\n  --rt-color-info: #337ab7;\n  --rt-opacity: 0.9;\n}\n\n.styles-module_tooltip__mnnfp {\n  visibility: hidden;\n  width: max-content;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-size: 90%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n  will-change: opacity, visibility;\n}\n\n.styles-module_fixed__7ciUi {\n  position: fixed;\n}\n\n.styles-module_arrow__K0L3T {\n  position: absolute;\n  background: inherit;\n  width: 8px;\n  height: 8px;\n  transform: rotate(45deg);\n}\n\n.styles-module_no-arrow__KcFZN {\n  display: none;\n}\n\n.styles-module_clickable__Bv9o7 {\n  pointer-events: auto;\n}\n\n.styles-module_show__2NboJ {\n  visibility: visible;\n  opacity: var(--rt-opacity);\n}\n\n/** Types variant **/\n.styles-module_dark__xNqje {\n  background: var(--rt-color-dark);\n  color: var(--rt-color-white);\n}\n\n.styles-module_light__Z6W-X {\n  background-color: var(--rt-color-white);\n  color: var(--rt-color-dark);\n}\n\n.styles-module_success__A2AKt {\n  background-color: var(--rt-color-success);\n  color: var(--rt-color-white);\n}\n\n.styles-module_warning__SCK0X {\n  background-color: var(--rt-color-warning);\n  color: var(--rt-color-white);\n}\n\n.styles-module_error__JvumD {\n  background-color: var(--rt-color-error);\n  color: var(--rt-color-white);\n}\n\n.styles-module_info__BWdHW {\n  background-color: var(--rt-color-info);\n  color: var(--rt-color-white);\n}\n", ""])
        },
        52783: (e, t, n) => {
            "use strict";
            var r = n(67294),
                o = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(r),
                i = {
                    exports: {}
                },
                l = {};
            ! function(e) {
                ! function() {
                    var t = o.default,
                        n = 60103,
                        r = 60106;
                    e.Fragment = 60107;
                    var i = 60108,
                        l = 60114,
                        a = 60109,
                        s = 60110,
                        c = 60112,
                        u = 60113,
                        f = 60120,
                        d = 60115,
                        p = 60116,
                        y = 60121,
                        m = 60122,
                        h = 60117,
                        g = 60129,
                        v = 60131;
                    if ("function" == typeof Symbol && Symbol.for) {
                        var w = Symbol.for;
                        n = w("react.element"), r = w("react.portal"), e.Fragment = w("react.fragment"), i = w("react.strict_mode"), l = w("react.profiler"), a = w("react.provider"), s = w("react.context"), c = w("react.forward_ref"), u = w("react.suspense"), f = w("react.suspense_list"), d = w("react.memo"), p = w("react.lazy"), y = w("react.block"), m = w("react.server.block"), h = w("react.fundamental"), w("react.scope"), w("react.opaque.id"), g = w("react.debug_trace_mode"), w("react.offscreen"), v = w("react.legacy_hidden")
                    }
                    var b = "function" == typeof Symbol && Symbol.iterator,
                        x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

                    function _(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        ! function(e, t, n) {
                            var r = x.ReactDebugCurrentFrame,
                                o = "";
                            if (E) {
                                var i = k(E.type),
                                    l = E._owner;
                                o += function(e, t, n) {
                                    var r = "";
                                    if (t) {
                                        var o = t.fileName,
                                            i = o.replace(S, "");
                                        if (/^index\./.test(i)) {
                                            var l = o.match(S);
                                            if (l) {
                                                var a = l[1];
                                                a && (i = a.replace(S, "") + "/" + i)
                                            }
                                        }
                                        r = " (at " + i + ":" + t.lineNumber + ")"
                                    } else n && (r = " (created by " + n + ")");
                                    return "\n    in " + (e || "Unknown") + r
                                }(i, E._source, l && k(l.type))
                            }
                            "" !== (o += r.getStackAddendum()) && (t += "%s", n = n.concat([o]));
                            var a = n.map((function(e) {
                                return "" + e
                            }));
                            a.unshift("Warning: " + t), Function.prototype.apply.call(console.error, console, a)
                        }(0, e, n)
                    }
                    var S = /^(.*)[\\\/]/;

                    function k(t) {
                        if (null == t) return null;
                        if ("number" == typeof t.tag && _("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), "function" == typeof t) return t.displayName || t.name || null;
                        if ("string" == typeof t) return t;
                        switch (t) {
                            case e.Fragment:
                                return "Fragment";
                            case r:
                                return "Portal";
                            case l:
                                return "Profiler";
                            case i:
                                return "StrictMode";
                            case u:
                                return "Suspense";
                            case f:
                                return "SuspenseList"
                        }
                        if ("object" == typeof t) switch (t.$$typeof) {
                            case s:
                                return "Context.Consumer";
                            case a:
                                return "Context.Provider";
                            case c:
                                return m = t, g = "ForwardRef", v = (h = t.render).displayName || h.name || "", m.displayName || ("" !== v ? g + "(" + v + ")" : g);
                            case d:
                                return k(t.type);
                            case y:
                                return k(t.render);
                            case p:
                                var n = 1 === (o = t)._status ? o._result : null;
                                if (n) return k(n)
                        }
                        var o, m, h, g, v;
                        return null
                    }
                    var R = {};
                    x.ReactDebugCurrentFrame;
                    var E = null;

                    function A(e) {
                        E = e
                    }
                    var T, O, j, L = x.ReactCurrentOwner,
                        P = Object.prototype.hasOwnProperty,
                        N = {
                            key: !0,
                            ref: !0,
                            __self: !0,
                            __source: !0
                        };

                    function C(e, t, r, o, i) {
                        var l, a = {},
                            s = null,
                            c = null;
                        for (l in void 0 !== r && (s = "" + r), function(e) {
                                if (P.call(e, "key")) {
                                    var t = Object.getOwnPropertyDescriptor(e, "key").get;
                                    if (t && t.isReactWarning) return !1
                                }
                                return void 0 !== e.key
                            }(t) && (s = "" + t.key), function(e) {
                                if (P.call(e, "ref")) {
                                    var t = Object.getOwnPropertyDescriptor(e, "ref").get;
                                    if (t && t.isReactWarning) return !1
                                }
                                return void 0 !== e.ref
                            }(t) && (c = t.ref, function(e, t) {
                                if ("string" == typeof e.ref && L.current && t && L.current.stateNode !== t) {
                                    var n = k(L.current.type);
                                    j[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), e.ref), j[n] = !0)
                                }
                            }(t, i)), t) P.call(t, l) && !N.hasOwnProperty(l) && (a[l] = t[l]);
                        if (e && e.defaultProps) {
                            var u = e.defaultProps;
                            for (l in u) void 0 === a[l] && (a[l] = u[l])
                        }
                        if (s || c) {
                            var f = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
                            s && function(e, t) {
                                var n = function() {
                                    T || (T = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                                };
                                n.isReactWarning = !0, Object.defineProperty(e, "key", {
                                    get: n,
                                    configurable: !0
                                })
                            }(a, f), c && function(e, t) {
                                var n = function() {
                                    O || (O = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                                };
                                n.isReactWarning = !0, Object.defineProperty(e, "ref", {
                                    get: n,
                                    configurable: !0
                                })
                            }(a, f)
                        }
                        return function(e, t, r, o, i, l, a) {
                            var s = {
                                $$typeof: n,
                                type: e,
                                key: t,
                                ref: r,
                                props: a,
                                _owner: l,
                                _store: {}
                            };
                            return Object.defineProperty(s._store, "validated", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !0,
                                value: !1
                            }), Object.defineProperty(s, "_self", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: o
                            }), Object.defineProperty(s, "_source", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: i
                            }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s
                        }(e, s, c, i, o, L.current, a)
                    }
                    j = {};
                    var $, D = x.ReactCurrentOwner;

                    function F(e) {
                        E = e
                    }

                    function I(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === n
                    }

                    function W() {
                        if (D.current) {
                            var e = k(D.current.type);
                            if (e) return "\n\nCheck the render method of `" + e + "`."
                        }
                        return ""
                    }
                    x.ReactDebugCurrentFrame, $ = !1;
                    var B = {};

                    function H(e, t) {
                        if (e._store && !e._store.validated && null == e.key) {
                            e._store.validated = !0;
                            var n = function(e) {
                                var t = W();
                                if (!t) {
                                    var n = "string" == typeof e ? e : e.displayName || e.name;
                                    n && (t = "\n\nCheck the top-level render call using <" + n + ">.")
                                }
                                return t
                            }(t);
                            if (!B[n]) {
                                B[n] = !0;
                                var r = "";
                                e && e._owner && e._owner !== D.current && (r = " It was passed a child from " + k(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, r), F(null)
                            }
                        }
                    }

                    function U(e, t) {
                        if ("object" == typeof e)
                            if (Array.isArray(e))
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    I(r) && H(r, t)
                                } else if (I(e)) e._store && (e._store.validated = !0);
                                else if (e) {
                            var o = function(e) {
                                if (null === e || "object" != typeof e) return null;
                                var t = b && e[b] || e["@@iterator"];
                                return "function" == typeof t ? t : null
                            }(e);
                            if ("function" == typeof o && o !== e.entries)
                                for (var i, l = o.call(e); !(i = l.next()).done;) I(i.value) && H(i.value, t)
                        }
                    }

                    function q(e) {
                        var t, n = e.type;
                        if (null != n && "string" != typeof n) {
                            if ("function" == typeof n) t = n.propTypes;
                            else {
                                if ("object" != typeof n || n.$$typeof !== c && n.$$typeof !== d) return;
                                t = n.propTypes
                            }
                            if (t) {
                                var r = k(n);
                                ! function(e, t, n, r, o) {
                                    var i = Function.call.bind(Object.prototype.hasOwnProperty);
                                    for (var l in e)
                                        if (i(e, l)) {
                                            var a = void 0;
                                            try {
                                                if ("function" != typeof e[l]) {
                                                    var s = Error((r || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                                    throw s.name = "Invariant Violation", s
                                                }
                                                a = e[l](t, l, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                                            } catch (e) {
                                                a = e
                                            }!a || a instanceof Error || (A(o), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, l, typeof a), A(null)), a instanceof Error && !(a.message in R) && (R[a.message] = !0, A(o), _("Failed %s type: %s", n, a.message), A(null))
                                        }
                                }(t, e.props, "prop", r, e)
                            } else void 0 === n.PropTypes || $ || ($ = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k(n) || "Unknown"));
                            "function" != typeof n.getDefaultProps || n.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
                        }
                    }

                    function M(t, r, o, w, b, x) {
                        var S = function(t) {
                            return "string" == typeof t || "function" == typeof t || t === e.Fragment || t === l || t === g || t === i || t === u || t === f || t === v || "object" == typeof t && null !== t && (t.$$typeof === p || t.$$typeof === d || t.$$typeof === a || t.$$typeof === s || t.$$typeof === c || t.$$typeof === h || t.$$typeof === y || t[0] === m)
                        }(t);
                        if (!S) {
                            var R = "";
                            (void 0 === t || "object" == typeof t && null !== t && 0 === Object.keys(t).length) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                            var E, A = function(e) {
                                return void 0 !== e ? "\n\nCheck your code at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + "." : ""
                            }(b);
                            R += A || W(), null === t ? E = "null" : Array.isArray(t) ? E = "array" : void 0 !== t && t.$$typeof === n ? (E = "<" + (k(t.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, R)
                        }
                        var T = C(t, r, o, b, x);
                        if (null == T) return T;
                        if (S) {
                            var O = r.children;
                            if (void 0 !== O)
                                if (w)
                                    if (Array.isArray(O)) {
                                        for (var j = 0; j < O.length; j++) U(O[j], t);
                                        Object.freeze && Object.freeze(O)
                                    } else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                            else U(O, t)
                        }
                        return t === e.Fragment ? function(e) {
                            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
                                var r = t[n];
                                if ("children" !== r && "key" !== r) {
                                    F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r), F(null);
                                    break
                                }
                            }
                            null !== e.ref && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null))
                        }(T) : q(T), T
                    }
                    e.jsx = function(e, t, n) {
                        return M(e, t, n, !1)
                    }, e.jsxs = function(e, t, n) {
                        return M(e, t, n, !0)
                    }
                }()
            }(l), i.exports = l;
            var a, s = {
                exports: {}
            };
            a = s,
                function() {
                    var e = {}.hasOwnProperty;

                    function t() {
                        for (var n = [], r = 0; r < arguments.length; r++) {
                            var o = arguments[r];
                            if (o) {
                                var i = typeof o;
                                if ("string" === i || "number" === i) n.push(o);
                                else if (Array.isArray(o)) {
                                    if (o.length) {
                                        var l = t.apply(null, o);
                                        l && n.push(l)
                                    }
                                } else if ("object" === i) {
                                    if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                                        n.push(o.toString());
                                        continue
                                    }
                                    for (var a in o) e.call(o, a) && o[a] && n.push(a)
                                }
                            }
                        }
                        return n.join(" ")
                    }
                    a.exports ? (t.default = t, a.exports = t) : window.classNames = t
                }();
            var c = s.exports;
            const u = (e, t, n) => {
                    let r = null;
                    return function(...o) {
                        r && clearTimeout(r), r = setTimeout((() => {
                            r = null, n || e.apply(this, o)
                        }), t)
                    }
                },
                f = ({
                    content: e
                }) => i.exports.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }),
                d = {
                    anchorRefs: new Set,
                    activeAnchor: {
                        current: null
                    },
                    attach: () => {},
                    detach: () => {},
                    setActiveAnchor: () => {}
                },
                p = {
                    getTooltipData: () => d
                },
                y = r.createContext(p);

            function m(e = "DEFAULT_TOOLTIP_ID") {
                return r.useContext(y).getTooltipData(e)
            }
            const h = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

            function g(e) {
                return e.split("-")[1]
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }

            function w(e) {
                return e.split("-")[0]
            }

            function b(e) {
                return ["top", "bottom"].includes(w(e)) ? "x" : "y"
            }

            function x(e, t, n) {
                let {
                    reference: r,
                    floating: o
                } = e;
                const i = r.x + r.width / 2 - o.width / 2,
                    l = r.y + r.height / 2 - o.height / 2,
                    a = b(t),
                    s = v(a),
                    c = r[s] / 2 - o[s] / 2,
                    u = "x" === a;
                let f;
                switch (w(t)) {
                    case "top":
                        f = {
                            x: i,
                            y: r.y - o.height
                        };
                        break;
                    case "bottom":
                        f = {
                            x: i,
                            y: r.y + r.height
                        };
                        break;
                    case "right":
                        f = {
                            x: r.x + r.width,
                            y: l
                        };
                        break;
                    case "left":
                        f = {
                            x: r.x - o.width,
                            y: l
                        };
                        break;
                    default:
                        f = {
                            x: r.x,
                            y: r.y
                        }
                }
                switch (g(t)) {
                    case "start":
                        f[a] -= c * (n && u ? -1 : 1);
                        break;
                    case "end":
                        f[a] += c * (n && u ? -1 : 1)
                }
                return f
            }

            function _(e) {
                return "number" != typeof e ? function(e) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...e
                    }
                }(e) : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function S(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function k(e, t) {
                var n;
                void 0 === t && (t = {});
                const {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: f = "floating",
                    altBoundary: d = !1,
                    padding: p = 0
                } = t, y = _(p), m = a[d ? "floating" === f ? "reference" : "floating" : f], h = S(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s
                })), g = "floating" === f ? { ...l.floating,
                    x: r,
                    y: o
                } : l.reference, v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), w = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
                    x: 1,
                    y: 1
                }, b = S(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: g,
                    offsetParent: v,
                    strategy: s
                }) : g);
                return {
                    top: (h.top - b.top + y.top) / w.y,
                    bottom: (b.bottom - h.bottom + y.bottom) / w.y,
                    left: (h.left - b.left + y.left) / w.x,
                    right: (b.right - h.right + y.right) / w.x
                }
            }
            const R = Math.min,
                E = Math.max;

            function A(e, t, n) {
                return E(e, R(t, n))
            }
            const T = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function O(e) {
                return e.replace(/left|right|bottom|top/g, (e => T[e]))
            }
            const j = {
                start: "end",
                end: "start"
            };

            function L(e) {
                return e.replace(/start|end/g, (e => j[e]))
            }
            const P = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n;
                            const {
                                placement: r,
                                middlewareData: o,
                                rects: i,
                                initialPlacement: l,
                                platform: a,
                                elements: s
                            } = t, {
                                mainAxis: c = !0,
                                crossAxis: u = !0,
                                fallbackPlacements: f,
                                fallbackStrategy: d = "bestFit",
                                fallbackAxisSideDirection: p = "none",
                                flipAlignment: y = !0,
                                ...m
                            } = e, h = w(r), x = w(l) === l, _ = await (null == a.isRTL ? void 0 : a.isRTL(s.floating)), S = f || (x || !y ? [O(l)] : function(e) {
                                const t = O(e);
                                return [L(e), t, L(t)]
                            }(l));
                            f || "none" === p || S.push(... function(e, t, n, r) {
                                const o = g(e);
                                let i = function(e, t, n) {
                                    const r = ["left", "right"],
                                        o = ["right", "left"],
                                        i = ["top", "bottom"],
                                        l = ["bottom", "top"];
                                    switch (e) {
                                        case "top":
                                        case "bottom":
                                            return n ? t ? o : r : t ? r : o;
                                        case "left":
                                        case "right":
                                            return t ? i : l;
                                        default:
                                            return []
                                    }
                                }(w(e), "start" === n, r);
                                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(L)))), i
                            }(l, y, p, _));
                            const R = [l, ...S],
                                E = await k(t, m),
                                A = [];
                            let T = (null == (n = o.flip) ? void 0 : n.overflows) || [];
                            if (c && A.push(E[h]), u) {
                                const {
                                    main: e,
                                    cross: t
                                } = function(e, t, n) {
                                    void 0 === n && (n = !1);
                                    const r = g(e),
                                        o = b(e),
                                        i = v(o);
                                    let l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                    return t.reference[i] > t.floating[i] && (l = O(l)), {
                                        main: l,
                                        cross: O(l)
                                    }
                                }(r, i, _);
                                A.push(E[e], E[t])
                            }
                            if (T = [...T, {
                                    placement: r,
                                    overflows: A
                                }], !A.every((e => e <= 0))) {
                                var j, P;
                                const e = ((null == (j = o.flip) ? void 0 : j.index) || 0) + 1,
                                    t = R[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: T
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (P = T.find((e => e.overflows[0] <= 0))) ? void 0 : P.placement;
                                if (!n) switch (d) {
                                    case "bestFit":
                                        {
                                            var N;
                                            const e = null == (N = T.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : N[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = l
                                }
                                if (r !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                N = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            const {
                                x: n,
                                y: r
                            } = t, o = await async function(e, t) {
                                const {
                                    placement: n,
                                    platform: r,
                                    elements: o
                                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = w(n), a = g(n), s = "x" === b(n), c = ["left", "top"].includes(l) ? -1 : 1, u = i && s ? -1 : 1, f = "function" == typeof t ? t(e) : t;
                                let {
                                    mainAxis: d,
                                    crossAxis: p,
                                    alignmentAxis: y
                                } = "number" == typeof f ? {
                                    mainAxis: f,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...f
                                };
                                return a && "number" == typeof y && (p = "end" === a ? -1 * y : y), s ? {
                                    x: p * u,
                                    y: d * c
                                } : {
                                    x: d * c,
                                    y: p * u
                                }
                            }(t, e);
                            return {
                                x: n + o.x,
                                y: r + o.y,
                                data: o
                            }
                        }
                    }
                },
                C = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            const {
                                x: n,
                                y: r,
                                placement: o
                            } = t, {
                                mainAxis: i = !0,
                                crossAxis: l = !1,
                                limiter: a = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...s
                            } = e, c = {
                                x: n,
                                y: r
                            }, u = await k(t, s), f = b(w(o)), d = "x" === f ? "y" : "x";
                            let p = c[f],
                                y = c[d];
                            if (i) {
                                const e = "y" === f ? "bottom" : "right";
                                p = A(p + u["y" === f ? "top" : "left"], p, p - u[e])
                            }
                            if (l) {
                                const e = "y" === d ? "bottom" : "right";
                                y = A(y + u["y" === d ? "top" : "left"], y, y - u[e])
                            }
                            const m = a.fn({ ...t,
                                [f]: p,
                                [d]: y
                            });
                            return { ...m,
                                data: {
                                    x: m.x - n,
                                    y: m.y - r
                                }
                            }
                        }
                    }
                };

            function $(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function D(e) {
                return $(e).getComputedStyle(e)
            }
            const F = Math.min,
                I = Math.max,
                W = Math.round;

            function B(e) {
                const t = D(e);
                let n = parseFloat(t.width),
                    r = parseFloat(t.height);
                const o = e.offsetWidth,
                    i = e.offsetHeight,
                    l = W(n) !== o || W(r) !== i;
                return l && (n = o, r = i), {
                    width: n,
                    height: r,
                    fallback: l
                }
            }

            function H(e) {
                return z(e) ? (e.nodeName || "").toLowerCase() : ""
            }
            let U;

            function q() {
                if (U) return U;
                const e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? (U = e.brands.map((e => e.brand + "/" + e.version)).join(" "), U) : navigator.userAgent
            }

            function M(e) {
                return e instanceof $(e).HTMLElement
            }

            function V(e) {
                return e instanceof $(e).Element
            }

            function z(e) {
                return e instanceof $(e).Node
            }

            function K(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof $(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function X(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = D(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function Y(e) {
                return ["table", "td", "th"].includes(H(e))
            }

            function J(e) {
                const t = /firefox/i.test(q()),
                    n = D(e),
                    r = n.backdropFilter || n.WebkitBackdropFilter;
                return "none" !== n.transform || "none" !== n.perspective || !!r && "none" !== r || t && "filter" === n.willChange || t && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some((e => n.willChange.includes(e))) || ["paint", "layout", "strict", "content"].some((e => {
                    const t = n.contain;
                    return null != t && t.includes(e)
                }))
            }

            function Z() {
                return !/^((?!chrome|android).)*safari/i.test(q())
            }

            function G(e) {
                return ["html", "body", "#document"].includes(H(e))
            }

            function Q(e) {
                return V(e) ? e : e.contextElement
            }
            const ee = {
                x: 1,
                y: 1
            };

            function te(e) {
                const t = Q(e);
                if (!M(t)) return ee;
                const n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        fallback: i
                    } = B(t);
                let l = (i ? W(n.width) : n.width) / r,
                    a = (i ? W(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }

            function ne(e, t, n, r) {
                var o, i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const l = e.getBoundingClientRect(),
                    a = Q(e);
                let s = ee;
                t && (r ? V(r) && (s = te(r)) : s = te(e));
                const c = a ? $(a) : window,
                    u = !Z() && n;
                let f = (l.left + (u && (null == (o = c.visualViewport) ? void 0 : o.offsetLeft) || 0)) / s.x,
                    d = (l.top + (u && (null == (i = c.visualViewport) ? void 0 : i.offsetTop) || 0)) / s.y,
                    p = l.width / s.x,
                    y = l.height / s.y;
                if (a) {
                    const e = $(a),
                        t = r && V(r) ? $(r) : r;
                    let n = e.frameElement;
                    for (; n && r && t !== e;) {
                        const e = te(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n);
                        t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, f *= e.x, d *= e.y, p *= e.x, y *= e.y, f += t.x, d += t.y, n = $(n).frameElement
                    }
                }
                return {
                    width: p,
                    height: y,
                    top: d,
                    right: f + p,
                    bottom: d + y,
                    left: f,
                    x: f,
                    y: d
                }
            }

            function re(e) {
                return ((z(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function oe(e) {
                return V(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function ie(e) {
                return ne(re(e)).left + oe(e).scrollLeft
            }

            function le(e) {
                if ("html" === H(e)) return e;
                const t = e.assignedSlot || e.parentNode || K(e) && e.host || re(e);
                return K(t) ? t.host : t
            }

            function ae(e) {
                const t = le(e);
                return G(t) ? t.ownerDocument.body : M(t) && X(t) ? t : ae(t)
            }

            function se(e, t) {
                var n;
                void 0 === t && (t = []);
                const r = ae(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = $(r);
                return o ? t.concat(i, i.visualViewport || [], X(r) ? r : []) : t.concat(r, se(r))
            }

            function ce(e, t, n) {
                return "viewport" === t ? S(function(e, t) {
                    const n = $(e),
                        r = re(e),
                        o = n.visualViewport;
                    let i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        const e = Z();
                        (e || !e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n)) : V(t) ? S(function(e, t) {
                    const n = ne(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = M(e) ? te(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * i.x,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n)) : S(function(e) {
                    const t = re(e),
                        n = oe(e),
                        r = e.ownerDocument.body,
                        o = I(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = I(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                    let l = -n.scrollLeft + ie(e);
                    const a = -n.scrollTop;
                    return "rtl" === D(r).direction && (l += I(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(re(e)))
            }

            function ue(e) {
                return M(e) && "fixed" !== D(e).position ? e.offsetParent : null
            }

            function fe(e) {
                const t = $(e);
                let n = ue(e);
                for (; n && Y(n) && "static" === D(n).position;) n = ue(n);
                return n && ("html" === H(n) || "body" === H(n) && "static" === D(n).position && !J(n)) ? t : n || function(e) {
                    let t = le(e);
                    for (; M(t) && !G(t);) {
                        if (J(t)) return t;
                        t = le(t)
                    }
                    return null
                }(e) || t
            }

            function de(e, t, n) {
                const r = M(t),
                    o = re(t),
                    i = ne(e, !0, "fixed" === n, t);
                let l = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const a = {
                    x: 0,
                    y: 0
                };
                if (r || !r && "fixed" !== n)
                    if (("body" !== H(t) || X(o)) && (l = oe(t)), M(t)) {
                        const e = ne(t, !0);
                        a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                    } else o && (a.x = ie(o));
                return {
                    x: i.left + l.scrollLeft - a.x,
                    y: i.top + l.scrollTop - a.y,
                    width: i.width,
                    height: i.height
                }
            }
            const pe = {
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e;
                        const i = "clippingAncestors" === n ? function(e, t) {
                                const n = t.get(e);
                                if (n) return n;
                                let r = se(e).filter((e => V(e) && "body" !== H(e))),
                                    o = null;
                                const i = "fixed" === D(e).position;
                                let l = i ? le(e) : e;
                                for (; V(l) && !G(l);) {
                                    const e = D(l),
                                        t = J(l);
                                    (i ? t || o : t || "static" !== e.position || !o || !["absolute", "fixed"].includes(o.position)) ? o = e: r = r.filter((e => e !== l)), l = le(l)
                                }
                                return t.set(e, r), r
                            }(t, this._c) : [].concat(n),
                            l = [...i, r],
                            a = l[0],
                            s = l.reduce(((e, n) => {
                                const r = ce(t, n, o);
                                return e.top = I(r.top, e.top), e.right = F(r.right, e.right), e.bottom = F(r.bottom, e.bottom), e.left = I(r.left, e.left), e
                            }), ce(t, a, o));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            rect: t,
                            offsetParent: n,
                            strategy: r
                        } = e;
                        const o = M(n),
                            i = re(n);
                        if (n === i) return t;
                        let l = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = {
                                x: 1,
                                y: 1
                            };
                        const s = {
                            x: 0,
                            y: 0
                        };
                        if ((o || !o && "fixed" !== r) && (("body" !== H(n) || X(i)) && (l = oe(n)), M(n))) {
                            const e = ne(n);
                            a = te(n), s.x = e.x + n.clientLeft, s.y = e.y + n.clientTop
                        }
                        return {
                            width: t.width * a.x,
                            height: t.height * a.y,
                            x: t.x * a.x - l.scrollLeft * a.x + s.x,
                            y: t.y * a.y - l.scrollTop * a.y + s.y
                        }
                    },
                    isElement: V,
                    getDimensions: function(e) {
                        return M(e) ? B(e) : e.getBoundingClientRect()
                    },
                    getOffsetParent: fe,
                    getDocumentElement: re,
                    getScale: te,
                    async getElementRects(e) {
                        let {
                            reference: t,
                            floating: n,
                            strategy: r
                        } = e;
                        const o = this.getOffsetParent || fe,
                            i = this.getDimensions;
                        return {
                            reference: de(t, await o(n), r),
                            floating: {
                                x: 0,
                                y: 0,
                                ...await i(n)
                            }
                        }
                    },
                    getClientRects: e => Array.from(e.getClientRects()),
                    isRTL: e => "rtl" === D(e).direction
                },
                ye = (e, t, n) => {
                    const r = new Map,
                        o = {
                            platform: pe,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return (async (e, t, n) => {
                        const {
                            placement: r = "bottom",
                            strategy: o = "absolute",
                            middleware: i = [],
                            platform: l
                        } = n, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t));
                        if (null == l && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), a.filter((e => {
                                let {
                                    name: t
                                } = e;
                                return "autoPlacement" === t || "flip" === t
                            })).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
                        e && t || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
                        let c = await l.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: o
                            }),
                            {
                                x: u,
                                y: f
                            } = x(c, r, s),
                            d = r,
                            p = {},
                            y = 0;
                        for (let n = 0; n < a.length; n++) {
                            const {
                                name: i,
                                fn: m
                            } = a[n], {
                                x: h,
                                y: g,
                                data: v,
                                reset: w
                            } = await m({
                                x: u,
                                y: f,
                                initialPlacement: r,
                                placement: d,
                                strategy: o,
                                middlewareData: p,
                                rects: c,
                                platform: l,
                                elements: {
                                    reference: e,
                                    floating: t
                                }
                            });
                            u = null != h ? h : u, f = null != g ? g : f, p = { ...p,
                                [i]: { ...p[i],
                                    ...v
                                }
                            }, y > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), w && y <= 50 && (y++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (c = !0 === w.rects ? await l.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: o
                            }) : w.rects), ({
                                x: u,
                                y: f
                            } = x(c, d, s))), n = -1)
                        }
                        return {
                            x: u,
                            y: f,
                            placement: d,
                            strategy: o,
                            middlewareData: p
                        }
                    })(e, t, { ...o,
                        platform: i
                    })
                },
                me = async ({
                    elementReference: e = null,
                    tooltipReference: t = null,
                    tooltipArrowReference: n = null,
                    place: r = "top",
                    offset: o = 10,
                    strategy: i = "absolute",
                    middlewares: l = [N(Number(o)), P(), C({
                        padding: 5
                    })]
                }) => {
                    if (!e) return {
                        tooltipStyles: {},
                        tooltipArrowStyles: {}
                    };
                    if (null === t) return {
                        tooltipStyles: {},
                        tooltipArrowStyles: {}
                    };
                    const a = l;
                    return n ? (a.push({
                        name: "arrow",
                        options: s = {
                            element: n,
                            padding: 5
                        },
                        async fn(e) {
                            const {
                                element: t,
                                padding: n = 0
                            } = s || {}, {
                                x: r,
                                y: o,
                                placement: i,
                                rects: l,
                                platform: a
                            } = e;
                            if (null == t) return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
                            const c = _(n),
                                u = {
                                    x: r,
                                    y: o
                                },
                                f = b(i),
                                d = v(f),
                                p = await a.getDimensions(t),
                                y = "y" === f ? "top" : "left",
                                m = "y" === f ? "bottom" : "right",
                                h = l.reference[d] + l.reference[f] - u[f] - l.floating[d],
                                w = u[f] - l.reference[f],
                                x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(t));
                            let S = x ? "y" === f ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
                            0 === S && (S = l.floating[d]);
                            const k = h / 2 - w / 2,
                                R = c[y],
                                E = S - p[d] - c[m],
                                T = S / 2 - p[d] / 2 + k,
                                O = A(R, T, E),
                                j = null != g(i) && T != O && l.reference[d] / 2 - (T < R ? c[y] : c[m]) - p[d] / 2 < 0;
                            return {
                                [f]: u[f] - (j ? T < R ? R - T : E - T : 0),
                                data: {
                                    [f]: O,
                                    centerOffset: T - O
                                }
                            }
                        }
                    }), ye(e, t, {
                        placement: r,
                        strategy: i,
                        middleware: a
                    }).then((({
                        x: e,
                        y: t,
                        placement: n,
                        middlewareData: r
                    }) => {
                        var o, i;
                        const l = {
                                left: `${e}px`,
                                top: `${t}px`
                            },
                            {
                                x: a,
                                y: s
                            } = null !== (o = r.arrow) && void 0 !== o ? o : {
                                x: 0,
                                y: 0
                            };
                        return {
                            tooltipStyles: l,
                            tooltipArrowStyles: {
                                left: null != a ? `${a}px` : "",
                                top: null != s ? `${s}px` : "",
                                right: "",
                                bottom: "",
                                [null !== (i = {
                                    top: "bottom",
                                    right: "left",
                                    bottom: "top",
                                    left: "right"
                                }[n.split("-")[0]]) && void 0 !== i ? i : "bottom"]: "-4px"
                            }
                        }
                    }))) : ye(e, t, {
                        placement: "bottom",
                        strategy: i,
                        middleware: a
                    }).then((({
                        x: e,
                        y: t
                    }) => ({
                        tooltipStyles: {
                            left: `${e}px`,
                            top: `${t}px`
                        },
                        tooltipArrowStyles: {}
                    })));
                    var s
                };
            var he = {
                tooltip: "styles-module_tooltip__mnnfp",
                fixed: "styles-module_fixed__7ciUi",
                arrow: "styles-module_arrow__K0L3T",
                "no-arrow": "styles-module_no-arrow__KcFZN",
                clickable: "styles-module_clickable__Bv9o7",
                show: "styles-module_show__2NboJ",
                dark: "styles-module_dark__xNqje",
                light: "styles-module_light__Z6W-X",
                success: "styles-module_success__A2AKt",
                warning: "styles-module_warning__SCK0X",
                error: "styles-module_error__JvumD",
                info: "styles-module_info__BWdHW"
            };
            const ge = ({
                id: e,
                className: t,
                classNameArrow: n,
                variant: o = "dark",
                anchorId: l,
                anchorSelect: a,
                place: s = "top",
                offset: d = 10,
                events: p = ["hover"],
                positionStrategy: y = "absolute",
                middlewares: g,
                wrapper: v,
                children: w = null,
                delayShow: b = 0,
                delayHide: x = 0,
                float: _ = !1,
                noArrow: S = !1,
                clickable: k = !1,
                closeOnEsc: R = !1,
                style: E,
                position: A,
                afterShow: T,
                afterHide: O,
                content: j,
                html: L,
                isOpen: P,
                setIsOpen: N,
                activeAnchor: C,
                setActiveAnchor: $
            }) => {
                const D = r.useRef(null),
                    F = r.useRef(null),
                    I = r.useRef(null),
                    W = r.useRef(null),
                    [B, H] = r.useState({}),
                    [U, q] = r.useState({}),
                    [M, V] = r.useState(!1),
                    [z, K] = r.useState(!1),
                    X = r.useRef(!1),
                    Y = r.useRef(null),
                    {
                        anchorRefs: J,
                        setActiveAnchor: Z
                    } = m(e),
                    G = r.useRef(!1),
                    [Q, ee] = r.useState([]),
                    te = r.useRef(!1);
                h((() => (te.current = !0, () => {
                    te.current = !1
                })), []), r.useEffect((() => {
                    if (!M) {
                        const e = setTimeout((() => {
                            K(!1)
                        }), 150);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                    return () => null
                }), [M]);
                const ne = e => {
                    te.current && (e && K(!0), setTimeout((() => {
                        te.current && (null == N || N(e), void 0 === P && V(e))
                    }), 10))
                };
                r.useEffect((() => {
                    if (void 0 === P) return () => null;
                    P && K(!0);
                    const e = setTimeout((() => {
                        V(P)
                    }), 10);
                    return () => {
                        clearTimeout(e)
                    }
                }), [P]), r.useEffect((() => {
                    M !== X.current && (X.current = M, M ? null == T || T() : null == O || O())
                }), [M]);
                const re = (e = x) => {
                        W.current && clearTimeout(W.current), W.current = setTimeout((() => {
                            G.current || ne(!1)
                        }), e)
                    },
                    oe = e => {
                        var t;
                        if (!e) return;
                        b ? (I.current && clearTimeout(I.current), I.current = setTimeout((() => {
                            ne(!0)
                        }), b)) : ne(!0);
                        const n = null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
                        $(n), Z({
                            current: n
                        }), W.current && clearTimeout(W.current)
                    },
                    ie = () => {
                        k ? re(x || 100) : x ? re() : ne(!1), I.current && clearTimeout(I.current)
                    },
                    le = ({
                        x: e,
                        y: t
                    }) => {
                        me({
                            place: s,
                            offset: d,
                            elementReference: {
                                getBoundingClientRect: () => ({
                                    x: e,
                                    y: t,
                                    width: 0,
                                    height: 0,
                                    top: t,
                                    left: e,
                                    right: e,
                                    bottom: t
                                })
                            },
                            tooltipReference: D.current,
                            tooltipArrowReference: F.current,
                            strategy: y,
                            middlewares: g
                        }).then((e => {
                            Object.keys(e.tooltipStyles).length && H(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && q(e.tooltipArrowStyles)
                        }))
                    },
                    ae = e => {
                        if (!e) return;
                        const t = e,
                            n = {
                                x: t.clientX,
                                y: t.clientY
                            };
                        le(n), Y.current = n
                    },
                    se = e => {
                        oe(e), x && re()
                    },
                    ce = e => {
                        const t = document.querySelector(`[id='${l}']`);
                        (null == t ? void 0 : t.contains(e.target)) || Q.some((t => t.contains(e.target))) || ne(!1)
                    },
                    ue = e => {
                        "Escape" === e.key && ne(!1)
                    },
                    fe = u(oe, 50),
                    de = u(ie, 50);
                r.useEffect((() => {
                    var e, t;
                    const n = new Set(J);
                    Q.forEach((e => {
                        n.add({
                            current: e
                        })
                    }));
                    const r = document.querySelector(`[id='${l}']`);
                    r && n.add({
                        current: r
                    }), R && window.addEventListener("keydown", ue);
                    const o = [];
                    p.find((e => "click" === e)) && (window.addEventListener("click", ce), o.push({
                        event: "click",
                        listener: se
                    })), p.find((e => "hover" === e)) && (o.push({
                        event: "mouseenter",
                        listener: fe
                    }, {
                        event: "mouseleave",
                        listener: de
                    }, {
                        event: "focus",
                        listener: fe
                    }, {
                        event: "blur",
                        listener: de
                    }), _ && o.push({
                        event: "mousemove",
                        listener: ae
                    }));
                    const i = () => {
                            G.current = !0
                        },
                        a = () => {
                            G.current = !1, ie()
                        };
                    return k && (null === (e = D.current) || void 0 === e || e.addEventListener("mouseenter", i), null === (t = D.current) || void 0 === t || t.addEventListener("mouseleave", a)), o.forEach((({
                        event: e,
                        listener: t
                    }) => {
                        n.forEach((n => {
                            var r;
                            null === (r = n.current) || void 0 === r || r.addEventListener(e, t)
                        }))
                    })), () => {
                        var e, t;
                        p.find((e => "click" === e)) && window.removeEventListener("click", ce), R && window.removeEventListener("keydown", ue), k && (null === (e = D.current) || void 0 === e || e.removeEventListener("mouseenter", i), null === (t = D.current) || void 0 === t || t.removeEventListener("mouseleave", a)), o.forEach((({
                            event: e,
                            listener: t
                        }) => {
                            n.forEach((n => {
                                var r;
                                null === (r = n.current) || void 0 === r || r.removeEventListener(e, t)
                            }))
                        }))
                    }
                }), [z, J, Q, R, p]), r.useEffect((() => {
                    let t = null != a ? a : "";
                    !t && e && (t = `[data-tooltip-id='${e}']`);
                    const n = new MutationObserver((n => {
                        const r = [];
                        n.forEach((n => {
                            if ("attributes" === n.type && "data-tooltip-id" === n.attributeName && n.target.getAttribute("data-tooltip-id") === e && r.push(n.target), "childList" === n.type && (C && [...n.removedNodes].some((e => !!e.contains(C) && (K(!1), ne(!1), $(null), !0))), t)) try {
                                const e = [...n.addedNodes].filter((e => 1 === e.nodeType));
                                r.push(...e.filter((e => e.matches(t)))), r.push(...e.flatMap((e => [...e.querySelectorAll(t)])))
                            } catch (e) {}
                        })), r.length && ee((e => [...e, ...r]))
                    }));
                    return n.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        attributeFilter: ["data-tooltip-id"]
                    }), () => {
                        n.disconnect()
                    }
                }), [e, a, C]), r.useEffect((() => {
                    A ? le(A) : _ ? Y.current && le(Y.current) : me({
                        place: s,
                        offset: d,
                        elementReference: C,
                        tooltipReference: D.current,
                        tooltipArrowReference: F.current,
                        strategy: y,
                        middlewares: g
                    }).then((e => {
                        te.current && (Object.keys(e.tooltipStyles).length && H(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && q(e.tooltipArrowStyles))
                    }))
                }), [M, C, j, L, s, d, y, A]), r.useEffect((() => {
                    var e;
                    const t = document.querySelector(`[id='${l}']`),
                        n = [...Q, t];
                    C && n.includes(C) || $(null !== (e = Q[0]) && void 0 !== e ? e : t)
                }), [l, Q, C]), r.useEffect((() => () => {
                    I.current && clearTimeout(I.current), W.current && clearTimeout(W.current)
                }), []), r.useEffect((() => {
                    let t = a;
                    if (!t && e && (t = `[data-tooltip-id='${e}']`), t) try {
                        const e = Array.from(document.querySelectorAll(t));
                        ee(e)
                    } catch (t) {
                        ee([])
                    }
                }), [e, a]);
                const pe = Boolean(L || j || w) && M && Object.keys(B).length > 0;
                return z ? i.exports.jsxs(v, {
                    id: e,
                    role: "tooltip",
                    className: c("react-tooltip", he.tooltip, he[o], t, {
                        [he.show]: pe,
                        [he.fixed]: "fixed" === y,
                        [he.clickable]: k
                    }),
                    style: { ...E,
                        ...B
                    },
                    ref: D,
                    children: [L && i.exports.jsx(f, {
                        content: L
                    }) || j || w, i.exports.jsx(v, {
                        className: c("react-tooltip-arrow", he.arrow, n, {
                            [he["no-arrow"]]: S
                        }),
                        style: U,
                        ref: F
                    })]
                }) : null
            };
            t.u = ({
                id: e,
                anchorId: t,
                anchorSelect: n,
                content: o,
                html: l,
                className: a,
                classNameArrow: s,
                variant: c = "dark",
                place: u = "top",
                offset: f = 10,
                wrapper: d = "div",
                children: p = null,
                events: y = ["hover"],
                positionStrategy: h = "absolute",
                middlewares: g,
                delayShow: v = 0,
                delayHide: w = 0,
                float: b = !1,
                noArrow: x = !1,
                clickable: _ = !1,
                closeOnEsc: S = !1,
                style: k,
                position: R,
                isOpen: E,
                setIsOpen: A,
                afterShow: T,
                afterHide: O
            }) => {
                const [j, L] = r.useState(o), [P, N] = r.useState(l), [C, $] = r.useState(u), [D, F] = r.useState(c), [I, W] = r.useState(f), [B, H] = r.useState(v), [U, q] = r.useState(w), [M, V] = r.useState(b), [z, K] = r.useState(d), [X, Y] = r.useState(y), [J, Z] = r.useState(h), [G, Q] = r.useState(null), {
                    anchorRefs: ee,
                    activeAnchor: te
                } = m(e), ne = e => null == e ? void 0 : e.getAttributeNames().reduce(((t, n) => {
                    var r;
                    return n.startsWith("data-tooltip-") && (t[n.replace(/^data-tooltip-/, "")] = null !== (r = null == e ? void 0 : e.getAttribute(n)) && void 0 !== r ? r : null), t
                }), {}), re = e => {
                    const t = {
                        place: e => {
                            var t;
                            $(null !== (t = e) && void 0 !== t ? t : u)
                        },
                        content: e => {
                            L(null != e ? e : o)
                        },
                        html: e => {
                            N(null != e ? e : l)
                        },
                        variant: e => {
                            var t;
                            F(null !== (t = e) && void 0 !== t ? t : c)
                        },
                        offset: e => {
                            W(null === e ? f : Number(e))
                        },
                        wrapper: e => {
                            var t;
                            K(null !== (t = e) && void 0 !== t ? t : d)
                        },
                        events: e => {
                            const t = null == e ? void 0 : e.split(" ");
                            Y(null != t ? t : y)
                        },
                        "position-strategy": e => {
                            var t;
                            Z(null !== (t = e) && void 0 !== t ? t : h)
                        },
                        "delay-show": e => {
                            H(null === e ? v : Number(e))
                        },
                        "delay-hide": e => {
                            q(null === e ? w : Number(e))
                        },
                        float: e => {
                            V(null === e ? b : "true" === e)
                        }
                    };
                    Object.values(t).forEach((e => e(null))), Object.entries(e).forEach((([e, n]) => {
                        var r;
                        null === (r = t[e]) || void 0 === r || r.call(t, n)
                    }))
                };
                r.useEffect((() => {
                    L(o)
                }), [o]), r.useEffect((() => {
                    N(l)
                }), [l]), r.useEffect((() => {
                    $(u)
                }), [u]), r.useEffect((() => {
                    var r;
                    const o = new Set(ee);
                    let i = n;
                    if (!i && e && (i = `[data-tooltip-id='${e}']`), i) try {
                        document.querySelectorAll(i).forEach((e => {
                            o.add({
                                current: e
                            })
                        }))
                    } catch (r) {
                        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`)
                    }
                    const l = document.querySelector(`[id='${t}']`);
                    if (l && o.add({
                            current: l
                        }), !o.size) return () => null;
                    const a = null !== (r = null != G ? G : l) && void 0 !== r ? r : te.current,
                        s = new MutationObserver((e => {
                            e.forEach((e => {
                                var t;
                                if (!a || "attributes" !== e.type || !(null === (t = e.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-"))) return;
                                const n = ne(a);
                                re(n)
                            }))
                        })),
                        c = {
                            attributes: !0,
                            childList: !1,
                            subtree: !1
                        };
                    if (a) {
                        const e = ne(a);
                        re(e), s.observe(a, c)
                    }
                    return () => {
                        s.disconnect()
                    }
                }), [ee, te, G, t, n]);
                const oe = {
                    id: e,
                    anchorId: t,
                    anchorSelect: n,
                    className: a,
                    classNameArrow: s,
                    content: j,
                    html: P,
                    place: C,
                    variant: D,
                    offset: I,
                    wrapper: z,
                    events: X,
                    positionStrategy: J,
                    middlewares: g,
                    delayShow: B,
                    delayHide: U,
                    float: M,
                    noArrow: x,
                    clickable: _,
                    closeOnEsc: S,
                    style: k,
                    position: R,
                    isOpen: E,
                    setIsOpen: A,
                    afterShow: T,
                    afterHide: O,
                    activeAnchor: G,
                    setActiveAnchor: e => Q(e)
                };
                return p ? i.exports.jsx(ge, { ...oe,
                    children: p
                }) : i.exports.jsx(ge, { ...oe
                })
            }
        },
        68950: (e, t, n) => {
            var r = n(95626);
            "string" === typeof r && (r = [
                [e.id, r, ""]
            ]);
            n(76723)(r, {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            }), r.locals && (e.exports = r.locals)
        }
    }
]);