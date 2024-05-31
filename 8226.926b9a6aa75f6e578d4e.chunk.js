"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [8226], {
        38226: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var o = n(67294),
                r = n.n(o),
                i = n(56180),
                l = n(48300),
                c = n(97396),
                a = ["width", "height", "color"];

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? "36" : t,
                    o = e.height,
                    i = void 0 === o ? "36" : o,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = function(e, t) {
                        if (null == e) return {};
                        var n, o, r = function(e, t) {
                            if (null == e) return {};
                            var n, o, r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, a);
                return r().createElement(l.Z, s, r().createElement("svg", {
                    width: n,
                    height: i,
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.9393 17.9996L10.3986 24.5403L11.4593 25.601L18 19.0602L24.5407 25.601L25.6014 24.5403L19.0607 17.9996L25.6014 11.4588L24.5407 10.3982L18 16.9389L11.4593 10.3982L10.3986 11.4588L16.9393 17.9996Z",
                    fill: u
                })))
            }
            u.propTypes = c.Q;
            var s = n(93423),
                f = n(49402),
                p = n(82229),
                y = n(71893),
                d = n(83109),
                h = y.ZP.div.withConfig({
                    displayName: "style__CollapseContainer",
                    componentId: "sc-1yr7yqy-0"
                })(["width:100%;"]),
                b = y.ZP.div.withConfig({
                    displayName: "style__CollapseItem",
                    componentId: "sc-1yr7yqy-1"
                })(["cursor:pointer;border-bottom:1px solid var(--color-border-subtle);.ReactCollapse--collapse{transition:height ease-in-out 0.25s;}"]),
                v = (0, y.ZP)(f.$9).withConfig({
                    displayName: "style__CollapseHeader",
                    componentId: "sc-1yr7yqy-2"
                })(["padding:25px 34px 25px 0;color:var(--color-fg-default);text-transform:none;", " @media ", "{padding-right:0px;width:100%;font-size:16px;line-height:24px;}"], p.r0, d.We),
                O = (0, y.ZP)(u).withConfig({
                    displayName: "style__ExpandIcon",
                    componentId: "sc-1yr7yqy-3"
                })(["color:var(--color-fg-muted);transition:var(--transition);transform:rotate(45deg);", ""], (function(e) {
                    return e.open ? (0, y.iv)(["transform:rotate(0deg);"]) : ""
                })),
                m = y.ZP.div.withConfig({
                    displayName: "style__CollapseContent",
                    componentId: "sc-1yr7yqy-4"
                })(["padding-bottom:10px;color:var(--color-fg-subtle);", " @media ", "{font-size:14px;line-height:22px;}"], s.Go, d.We);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        j(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function C(e) {
                var t, n, l = e.items,
                    c = void 0 === l ? [] : l,
                    a = e.accordion,
                    u = e.onToggle,
                    s = (t = (0, o.useState)([]), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var o, r, i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (n = n.call(e); !(l = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    l || null == n.return || n.return()
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return i
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" === typeof e) return P(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    f = s[0],
                    p = s[1];
                (0, o.useEffect)((function() {
                    p(c)
                }), [c]);
                var y = (0, o.useCallback)((function(e) {
                    p((function(t) {
                        return t.map((function(t) {
                            return w(w({}, t), {}, {
                                isOpened: t.id === e.id ? !t.isOpened : !a && t.isOpened
                            })
                        }))
                    })), null === u || void 0 === u || u({
                        isOpened: !e.isOpened,
                        data: e
                    })
                }), [a]);
                return r().createElement(h, null, f.map((function(e) {
                    return r().createElement(b, {
                        key: e.id,
                        onClick: function() {
                            return y(e)
                        }
                    }, r().createElement(v, null, e.title, r().createElement(O, {
                        open: e.isOpened
                    })), r().createElement(i.Collapse, {
                        isOpened: e.isOpened
                    }, r().createElement(m, null, e.content)))
                })))
            }
        },
        97295: (e, t, n) => {
            function o(e) {
                return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Collapse = void 0;
            var r, i = (r = n(67294)) && r.__esModule ? r : {
                default: r
            };

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function u(e) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, u(e)
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(y, e);
                var t, n, r, f, p = (r = y, f = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = u(r);
                    if (f) {
                        var n = u(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else e = t.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === o(t) || "function" === typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return a(e)
                    }(this, e)
                });

                function y(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), s(a(t = p.call(this, e)), "timeout", void 0), s(a(t), "container", void 0), s(a(t), "content", void 0), s(a(t), "onResize", (function() {
                        if (clearTimeout(t.timeout), t.container && t.content) {
                            var e = t.props,
                                n = e.isOpened,
                                o = e.checkTimeout,
                                r = Math.floor(t.container.clientHeight),
                                i = Math.floor(t.content.clientHeight),
                                l = n && Math.abs(i - r) <= 1,
                                c = !n && Math.abs(r) <= 1;
                            l || c ? t.onRest({
                                isFullyOpened: l,
                                isFullyClosed: c,
                                isOpened: n,
                                containerHeight: r,
                                contentHeight: i
                            }) : (t.onWork({
                                isFullyOpened: l,
                                isFullyClosed: c,
                                isOpened: n,
                                containerHeight: r,
                                contentHeight: i
                            }), t.timeout = setTimeout((function() {
                                return t.onResize()
                            }), o))
                        }
                    })), s(a(t), "onRest", (function(e) {
                        var n = e.isFullyOpened,
                            o = e.isFullyClosed,
                            r = e.isOpened,
                            i = e.containerHeight,
                            l = e.contentHeight;
                        if (t.container && t.content) {
                            var c = r && t.container.style.height === "".concat(l, "px"),
                                a = !r && "0px" === t.container.style.height;
                            if (c || a) {
                                t.container.style.overflow = r ? "initial" : "hidden", t.container.style.height = r ? "auto" : "0px";
                                var u = t.props.onRest;
                                u && u({
                                    isFullyOpened: n,
                                    isFullyClosed: o,
                                    isOpened: r,
                                    containerHeight: i,
                                    contentHeight: l
                                })
                            }
                        }
                    })), s(a(t), "onWork", (function(e) {
                        var n = e.isFullyOpened,
                            o = e.isFullyClosed,
                            r = e.isOpened,
                            i = e.containerHeight,
                            l = e.contentHeight;
                        if (t.container && t.content) {
                            var c = r && t.container.style.height === "".concat(l, "px"),
                                a = !r && "0px" === t.container.style.height;
                            if (!c && !a) {
                                t.container.style.overflow = "hidden", t.container.style.height = r ? "".concat(l, "px") : "0px";
                                var u = t.props.onWork;
                                u && u({
                                    isFullyOpened: n,
                                    isFullyClosed: o,
                                    isOpened: r,
                                    containerHeight: i,
                                    contentHeight: l
                                })
                            }
                        }
                    })), s(a(t), "onRefContainer", (function(e) {
                        t.container = e
                    })), s(a(t), "onRefContent", (function(e) {
                        t.content = e
                    })), e.initialStyle ? t.initialStyle = e.initialStyle : t.initialStyle = e.isOpened ? {
                        height: "auto",
                        overflow: "initial"
                    } : {
                        height: "0px",
                        overflow: "hidden"
                    }, t
                }
                return t = y, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.onResize()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = t.theme,
                            o = t.isOpened;
                        return t.children !== e.children || o !== e.isOpened || Object.keys(n).some((function(t) {
                            return n[t] !== e.theme[t]
                        }))
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function() {
                        if (!this.container || !this.content) return null;
                        if ("auto" === this.container.style.height) {
                            var e = this.content.clientHeight;
                            this.container.style.height = "".concat(e, "px")
                        }
                        return null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.onResize()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.theme,
                            n = e.children,
                            o = e.isOpened;
                        return i.default.createElement("div", {
                            ref: this.onRefContainer,
                            className: t.collapse,
                            style: this.initialStyle,
                            "aria-hidden": !o
                        }, i.default.createElement("div", {
                            ref: this.onRefContent,
                            className: t.content
                        }, n))
                    }
                }]) && l(t.prototype, n), y
            }(i.default.Component);
            t.Collapse = f, s(f, "defaultProps", {
                theme: {
                    collapse: "ReactCollapse--collapse",
                    content: "ReactCollapse--content"
                },
                initialStyle: void 0,
                onRest: void 0,
                onWork: void 0,
                checkTimeout: 50
            })
        },
        17619: (e, t, n) => {
            function o(e) {
                return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnmountClosed = void 0;
            var r, i = (r = n(67294)) && r.__esModule ? r : {
                    default: r
                },
                l = n(97295),
                c = ["isOpened"],
                a = ["isOpened"];

            function u() {
                return u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        v(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(m, e);
                var t, n, r, s, O = (r = m, s = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = b(r);
                    if (s) {
                        var n = b(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else e = t.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === o(t) || "function" === typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return h(e)
                    }(this, e)
                });

                function m(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), v(h(t = O.call(this, e)), "onWork", (function(e) {
                        var n = e.isOpened,
                            o = p(e, c);
                        t.setState({
                            isResting: !1,
                            isOpened: n
                        });
                        var r = t.props.onWork;
                        r && r(f({
                            isOpened: n
                        }, o))
                    })), v(h(t), "onRest", (function(e) {
                        var n = e.isOpened,
                            o = p(e, a);
                        t.setState({
                            isResting: !0,
                            isOpened: n,
                            isInitialRender: !1
                        });
                        var r = t.props.onRest;
                        r && r(f({
                            isOpened: n
                        }, o))
                    })), v(h(t), "getInitialStyle", (function() {
                        var e = t.state,
                            n = e.isOpened;
                        return e.isInitialRender && n ? {
                            height: "auto",
                            overflow: "initial"
                        } : {
                            height: "0px",
                            overflow: "hidden"
                        }
                    })), t.state = {
                        isResting: !0,
                        isOpened: e.isOpened,
                        isInitialRender: !0
                    }, t
                }
                return t = m, (n = [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props.isOpened;
                        e.isOpened !== t && this.setState({
                            isResting: !1,
                            isOpened: t,
                            isInitialRender: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.isResting,
                            n = e.isOpened;
                        return t && !n ? null : i.default.createElement(l.Collapse, u({}, this.props, {
                            initialStyle: this.getInitialStyle(),
                            onWork: this.onWork,
                            onRest: this.onRest
                        }))
                    }
                }]) && y(t.prototype, n), m
            }(i.default.PureComponent);
            t.UnmountClosed = O, v(O, "defaultProps", {
                onWork: void 0,
                onRest: void 0
            })
        },
        56180: (e, t, n) => {
            var o = n(97295).Collapse,
                r = n(17619).UnmountClosed;
            e.exports = r, r.Collapse = o, r.UnmountClosed = r
        }
    }
]);