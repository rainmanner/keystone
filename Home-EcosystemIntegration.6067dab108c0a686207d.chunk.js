(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [9730], {
        89804: (t, e, r) => {
            "use strict";
            r.d(e, {
                _: () => p
            });
            var n = r(50354);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }
            var i = ["search", "page", "limit"];

            function a() {
                a = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    l = i.iterator || "@@iterator",
                    c = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof m ? e : m,
                        a = Object.create(i.prototype),
                        l = new O(o || []);
                    return n(a, "_invoke", {
                        value: k(t, r, l)
                    }), a
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = f;
                var h = {};

                function m() {}

                function d() {}

                function y() {}
                var v = {};
                s(v, l, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(C([])));
                w && w !== e && r.call(w, l) && (v = w);
                var b = y.prototype = m.prototype = Object.create(v);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function i(n, a, l, c) {
                        var u = p(t[n], t, a);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && "object" == o(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                i("next", t, l, c)
                            }), (function(t) {
                                i("throw", t, l, c)
                            })) : e.resolve(f).then((function(t) {
                                s.value = t, l(s)
                            }), (function(t) {
                                return i("throw", t, l, c)
                            }))
                        }
                        c(u.arg)
                    }
                    var a;
                    n(this, "_invoke", {
                        value: function(t, r) {
                            function n() {
                                return new e((function(e, n) {
                                    i(t, r, e, n)
                                }))
                            }
                            return a = a ? a.then(n, n) : n()
                        }
                    })
                }

                function k(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var l = S(a, r);
                                if (l) {
                                    if (l === h) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = p(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function S(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = p(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function A(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(A, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[l];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, n(b, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = s(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, u, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), s(E.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = E, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), s(b, u, "Generator"), s(b, l, (function() {
                    return this
                })), s(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = C, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var l = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function s(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function f(t, e, r, n, o, i, a) {
                try {
                    var l = t[i](a),
                        c = l.value
                } catch (t) {
                    return void r(t)
                }
                l.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function p() {
                return h.apply(this, arguments)
            }

            function h() {
                var t;
                return t = a().mark((function t() {
                    var e, r, o, l, f, p, h, m, d = arguments;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = d.length > 0 && void 0 !== d[0] ? d[0] : "wallet", o = (r = d.length > 1 && void 0 !== d[1] ? d[1] : {
                                    page: 1,
                                    limit: 20
                                }).search, l = r.page, f = r.limit, p = s(r, i), h = {
                                    wallet: "/search_wallet/",
                                    coin: "/search_coin/"
                                }[e], t.next = 5, (0, n.W)(h, c(c(c(c({}, o && u({}, e, o)), l && {
                                    page: l
                                }), f && {
                                    limit: f
                                }), p));
                            case 5:
                                if (!((m = t.sent) instanceof Error)) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return", []);
                            case 8:
                                return t.abrupt("return", m);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })), h = function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            f(i, n, o, a, l, "next", t)
                        }

                        function l(t) {
                            f(i, n, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }, h.apply(this, arguments)
            }
        },
        58078: (t, e, r) => {
            "use strict";
            r.d(e, {
                w: () => c
            });
            var n = r(67294),
                o = r.n(n),
                i = r(6501),
                a = ["src"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, l.apply(this, arguments)
            }
            var c = function(t) {
                var e = t.src,
                    r = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, a),
                    c = (0, n.useRef)(null),
                    u = (0, i.J)({
                        src: e,
                        width: t.width,
                        height: t.height
                    }, c).imageSrc;
                return o().createElement("img", l({
                    ref: c,
                    src: u
                }, r))
            }
        },
        6501: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => l
            });
            var n = r(67294);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var i = {
                    threshold: 0,
                    rootMargin: "100%"
                },
                a = function() {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450;
                    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800, " ").concat(t, '"%3E%3C/svg%3E')
                },
                l = function(t, e) {
                    var r, l, c = t.src,
                        u = t.width,
                        s = t.height,
                        f = (r = (0, n.useState)(!1), l = 2, function(t) {
                            if (Array.isArray(t)) return t
                        }(r) || function(t, e) {
                            var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                                } catch (t) {
                                    l = !0, o = t
                                } finally {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return i
                            }
                        }(r, l) || function(t, e) {
                            if (t) {
                                if ("string" === typeof t) return o(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
                            }
                        }(r, l) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        p = f[0],
                        h = f[1];
                    return (0, n.useEffect)((function() {
                        if (null !== e && void 0 !== e && e.current) {
                            var t = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    e.isIntersecting && (h(!0), t.unobserve(e.target))
                                }))
                            }), i);
                            return t.observe(e.current),
                                function() {
                                    t.unobserve(e.current)
                                }
                        }
                    }), []), {
                        imageSrc: p ? c : a(u, s)
                    }
                }
        },
        10821: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => u
            });
            var n = r(67294);

            function o(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach((function(e) {
                        a(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function a(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" === typeof t) return c(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            const u = function(t, e) {
                var r = e.highlightSize,
                    o = void 0 === r ? "10%" : r,
                    a = function(t) {
                        var e = l((0, n.useState)(!1), 2),
                            r = e[0],
                            o = e[1],
                            a = l((0, n.useState)({
                                x: 0,
                                y: 0,
                                xPercentage: 0,
                                yPercentage: 0
                            }), 2),
                            c = a[0],
                            u = a[1],
                            s = (0, n.useRef)(),
                            f = (0, n.useCallback)((function(t) {
                                var e = t.clientX,
                                    r = t.clientY,
                                    n = s.current.getBoundingClientRect();
                                if (s.current && n) {
                                    var i = t.clientX - n.left,
                                        a = t.clientY - n.top,
                                        l = s.current,
                                        c = l.offsetWidth,
                                        f = l.offsetHeight,
                                        p = Math.round(i / c * 100),
                                        h = Math.round(a / f * 100),
                                        m = s.current && s.current.contains(t.target);
                                    o(m), u({
                                        xPercentage: p,
                                        yPercentage: h,
                                        x: e,
                                        y: r
                                    })
                                }
                            }), []);
                        return (0, n.useEffect)((function() {
                            t && (s.current = t.current);
                            var e = function() {
                                o(!1)
                            };
                            return s.current.addEventListener("mousemove", f), s.current.addEventListener("mouseleave", e),
                                function() {
                                    s.current.removeEventListener("mousemove", f), s.current.removeEventListener("mouseleave", e)
                                }
                        }), [t]), i(i({}, c), {}, {
                            isHovering: r
                        })
                    }(t);
                return (0, n.useMemo)((function() {
                    return {
                        top: "calc(".concat(a.yPercentage, "% - ").concat(o, ")"),
                        left: "calc(".concat(a.xPercentage, "% - ").concat(o, ")"),
                        visible: a.isHovering ? "visible" : "hidden"
                    }
                }), [a])
            }
        },
        68109: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => vt
            });
            var n = r(67294),
                o = r.n(n),
                i = r(71893),
                a = r(83109),
                l = r(12252),
                c = r(82229),
                u = r(49402),
                s = r(93423),
                f = r(44763),
                p = r(38703),
                h = (0, i.ZP)(l.W).withConfig({
                    displayName: "style__Container",
                    componentId: "sc-1nv5hm3-0"
                })(["margin:200px auto;text-align:center;@media ", "{margin:128px 0 80px;padding:0 20px;}"], a.We),
                m = (0, i.ZP)(u.bW).withConfig({
                    displayName: "style__TitleBox",
                    componentId: "sc-1nv5hm3-1"
                })(["display:flex;justify-content:space-between;@media ", "{flex-direction:column;}"], a.We),
                d = (0, i.ZP)(c.H2).attrs({
                    as: "h4"
                }).withConfig({
                    displayName: "style__Title",
                    componentId: "sc-1nv5hm3-2"
                })(["color:var(--color-fg-emphasis);em{display:inline-block;background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;}@media ", "{", "}"], (function(t) {
                    return t.themeColor || "var(--color-bg-metamask)"
                }), a.We, c.rU),
                y = (0, i.ZP)(s.uT).withConfig({
                    displayName: "style__Desc",
                    componentId: "sc-1nv5hm3-3"
                })(["color:var(--color-fg-subtle);text-align:left;em{color:var(--color-fg-default);}@media ", "{margin-top:16px;width:100%;text-align:center;", "}"], a.We, s.ub),
                v = (0, i.ZP)(u.bW).withConfig({
                    displayName: "style__Details",
                    componentId: "sc-1nv5hm3-4"
                })(["flex-direction:column;align-items:flex-start;width:480px;gap:24px 0;.link-wrapper{color:var(--color-bd-pink);}@media ", "{width:100%;}"], a.We),
                g = (0, i.ZP)(f.Z).withConfig({
                    displayName: "style__ViewAllLink",
                    componentId: "sc-1nv5hm3-5"
                })(["display:inline-block;color:var(--color-bd-pink);", " @media ", "{", "}"], c.FF, a.We, c.cl),
                w = (0, i.ZP)(p.Z).withConfig({
                    displayName: "style__NewTag",
                    componentId: "sc-1nv5hm3-6"
                })(["position:absolute;top:0;right:0;z-index:6;border-radius:35px;background:var(--color-bd-pink);color:var(--color-fg-default);", " @media ", "{right:-8px;top:-8px;", "}"], c.cb, a.We, c.cl),
                b = r(97132),
                x = r(4098),
                E = r(3888);

            function k() {
                var t = (0, b.YB)(),
                    e = (0, x.S)("keystone.home.ecosystemIntegration"),
                    r = (0, x.S)("keystone"),
                    n = ((0, x.S)("keystone.supportedWalletsAndCoins.tables.gen3SupportedStatus"), (0, x.z)("keystone.home.ecosystemIntegration"));
                return {
                    title: t.formatMessage(n("title"), {
                        em: function(t) {
                            return o().createElement("em", null, t)
                        }
                    }),
                    desc: t.formatMessage(n("desc"), {
                        em: function(t) {
                            return o().createElement("em", null, t)
                        }
                    }),
                    new: r("new"),
                    link: {
                        text: e("link"),
                        link: E.B.supportAssetsAndWallets,
                        blank: !1
                    },
                    viewAll: r("viewAll"),
                    roadmap: e("roadmap"),
                    panels: {
                        wallet: {
                            title: e("panels.wallet.title"),
                            metamask: {
                                desc: t.formatMessage(n("panels.wallet.metamask.desc"), {
                                    em: function(t) {
                                        return o().createElement("em", null, t)
                                    }
                                }),
                                link: {
                                    href: E.B.metamask,
                                    text: e("panels.wallet.metamask.link")
                                }
                            },
                            okx: {
                                desc: t.formatMessage(n("panels.wallet.okx.desc"), {
                                    em: function(t) {
                                        return o().createElement("em", null, t)
                                    }
                                }),
                                link: {
                                    href: E.B.okxCollabs,
                                    text: e("panels.wallet.okx.link")
                                }
                            }
                        },
                        coin: {
                            title: e("panels.coin.title"),
                            desc: t.formatMessage(n("panels.coin.desc"), {
                                supportedWalletAndCoin: function(t) {
                                    return o().createElement(f.Z, {
                                        to: E.B.supportAssetsAndWallets,
                                        underline: !0,
                                        color: "var(--color-bd-primary)",
                                        arrow: !1
                                    }, t)
                                }
                            })
                        }
                    }
                }
            }
            var S = i.ZP.div.withConfig({
                    displayName: "Panel__Container",
                    componentId: "sc-11nteq8-0"
                })(["display:flex;flex-direction:column;justify-content:flex-start;margin-top:64px;gap:64px 0;@media ", "{gap:24px 0;}"], a.We),
                A = (0, i.ZP)(c.H3).attrs({
                    as: "h5"
                }).withConfig({
                    displayName: "Panel__Title",
                    componentId: "sc-11nteq8-1"
                })(["text-align:left;color:var(--color-fg-emphasis);"]);

            function j() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.title,
                    r = t.link,
                    n = t.children;
                return o().createElement(S, null, o().createElement(u.$9, null, o().createElement(A, null, e), r ? o().createElement(g, {
                    to: r.link
                }, r.text) : o().createElement(o().Fragment, null)), n)
            }
            var O = r(89804),
                C = i.ZP.div.withConfig({
                    displayName: "Walletstyle__Container",
                    componentId: "z9lj3e-0"
                })(["display:flex;justify-content:space-between;gap:64px 0;@media ", "{gap:48px 0;align-items:center;flex-direction:column;}"], a.We),
                P = (0, i.ZP)(s.uT).withConfig({
                    displayName: "Walletstyle__Desc",
                    componentId: "z9lj3e-1"
                })(["text-align:left;color:var(--color-fg-subtle);em{color:var(--color-fg-default);}@media ", "{", "}"], a.We, s.AF),
                L = i.ZP.div.withConfig({
                    displayName: "Walletstyle__WalletGridContainer",
                    componentId: "z9lj3e-2"
                })(["display:grid;grid-template-columns:repeat(4,140px);grid-template-areas:'big  big  item1 item2' 'big  big  item3 item4' 'item5 item6 item7 item8';grid-gap:32px;@media ", "{grid-template-columns:repeat(4,minmax(14vw,100px));grid-gap:20px;}"], a.We),
                W = (0, i.ZP)(u.Lb).withConfig({
                    displayName: "Walletstyle__WalletGridItemContainer",
                    componentId: "z9lj3e-3"
                })(["position:realtive;grid-area:", ";flex-direction:column;padding:1px;border:1px solid var(--color-border-subtle);transition:var(--transition);aspect-ratio:1 / 1;img{width:50%;}.wallet-item-new-tag{top:-13px;right:-10px;}", " .link-wrapper{z-index:5;}:hover{border-color:", ";.wallet-item-mask{backdrop-filter:blur(15px);opacity:1;}}:first-child{grid-area:big;.wallet-item-mask{::before{background:radial-gradient( 100.94% 70.94% at 50% 50%,rgba(255,255,255,0.27) 18.23%,rgba(255,255,255,0) 100% );}h5{", "}.caption{", "}}}@media ", "{.link-wrapper{", "}}"], (function(t) {
                    return t.areaName
                }), (function(t) {
                    return 2 === t.supportStatus ? (0, i.iv)(["img{filter:saturate(30%) brightness(0.5);}"]) : ""
                }), (function(t) {
                    return "var(--color-bd-".concat(t.hoverColor, ")")
                }), c.rU, s.v1, a.We, c.cl),
                I = (0, i.ZP)(u.Lb).attrs({
                    className: "wallet-item-mask"
                }).withConfig({
                    displayName: "Walletstyle__WalletGridItemContainerMask",
                    componentId: "z9lj3e-4"
                })(["position:absolute;top:0;left:0;flex-direction:column;width:100%;height:100%;background:rgba(17,18,20,0.6);z-index:3;opacity:0;transition:var(--transition);overflow:hidden;::before{content:'';position:absolute;top:var(--top);left:var(--left);display:block;width:20%;height:20%;background:radial-gradient( 70.94% 70.94% at 50% 50%,rgba(255,255,255,0.87) 18.23%,rgba(255,255,255,0) 100% );-webkit-filter:blur(21.875px);filter:blur(20px);z-index:4;visibility:var(--visible);}"]),
                N = (0, i.ZP)(c.H5).withConfig({
                    displayName: "Walletstyle__WalletItemTitle",
                    componentId: "z9lj3e-5"
                })(["color:var(--color-fg-default);@media ", "{font-size:9px;font-style:normal;font-weight:600;line-height:14px;}"], a.We),
                _ = ((0, i.ZP)(s.YS).withConfig({
                    displayName: "Walletstyle__WalletItemStatus",
                    componentId: "z9lj3e-6"
                })(["color:", ";@media ", "{font-size:7px;font-style:normal;font-weight:400;line-height:11px;}"], (function(t) {
                    return t.color || "var(--color-fg-default)"
                }), a.We), (0, i.ZP)(u.bW).withConfig({
                    displayName: "Walletstyle__WalletInfoContainer",
                    componentId: "z9lj3e-7"
                })(["flex-direction:column;align-items:flex-start;width:460px;gap:24px;@media ", "{width:100%;max-width:420px;}"], a.We)),
                Z = (0, i.ZP)(u.bW).withConfig({
                    displayName: "Walletstyle__WalletInfoItemContainer",
                    componentId: "z9lj3e-8"
                })(["flex-direction:column;align-items:flex-start;gap:24px;img{width:64px;height:64px;}.link-wrapper{color:var(--color-bd-pink);}@media ", "{.link-wrapper{", "}}"], a.We, c.cl),
                T = r(34257),
                z = r(10821),
                J = r(27683),
                F = [{
                    name: "Solflare",
                    time: "2023-11-01 00:00:00"
                }, {
                    name: "Fewcha",
                    time: "2023-11-01 00:00:00"
                }, {
                    name: "Petra",
                    time: "2023-11-01 00:00:00"
                }, {
                    name: "XRP Toolkit",
                    time: "2023-11-10 12:00:00"
                }, {
                    name: "imToken",
                    time: "2023-11-23 18:00:00"
                }, {
                    name: "Eternl",
                    time: "2023-11-23 18:00:00"
                }, {
                    name: "Sparrow",
                    time: "2023-11-23 18:00:00"
                }],
                B = [{
                    symbol: "sol",
                    time: "2023-11-01 00:00:00"
                }, {
                    symbol: "apt",
                    time: "2023-11-01 00:00:00"
                }, {
                    symbol: "sui",
                    time: "2023-11-01 00:00:00"
                }, {
                    symbol: "xrp",
                    time: "2023-11-10 12:00:00"
                }, {
                    symbol: "ada",
                    time: "2023-11-23 18:00:00"
                }, {
                    symbol: "trx",
                    time: "2024-01-09 12:00:00"
                }, {
                    symbol: "bch",
                    time: "2024-01-09 12:00:00"
                }, {
                    symbol: "dash",
                    time: "2024-01-09 12:00:00"
                }, {
                    symbol: "ltc",
                    time: "2024-01-09 12:00:00"
                }],
                U = r(58078);

            function M(t) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, M(t)
            }

            function G() {
                return G = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, G.apply(this, arguments)
            }

            function D() {
                D = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, o) {
                    var i = e && e.prototype instanceof p ? e : p,
                        a = Object.create(i.prototype),
                        l = new A(o || []);
                    return n(a, "_invoke", {
                        value: x(t, r, l)
                    }), a
                }

                function s(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var f = {};

                function p() {}

                function h() {}

                function m() {}
                var d = {};
                c(d, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, i) && (d = v);
                var g = m.prototype = p.prototype = Object.create(d);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    function o(n, i, a, l) {
                        var c = s(t[n], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                f = u.value;
                            return f && "object" == M(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                o("next", t, a, l)
                            }), (function(t) {
                                o("throw", t, a, l)
                            })) : e.resolve(f).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return o("throw", t, a, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var i;
                    n(this, "_invoke", {
                        value: function(t, r) {
                            function n() {
                                return new e((function(e, n) {
                                    o(t, r, e, n)
                                }))
                            }
                            return i = i ? i.then(n, n) : n()
                        }
                    })
                }

                function x(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var l = E(a, r);
                                if (l) {
                                    if (l === f) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = s(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function E(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function A(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = c(m, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, c(t, l, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), c(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, l, "Generator"), c(g, i, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = j, A.prototype = {
                    constructor: A,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var l = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function Y(t, e, r, n, o, i, a) {
                try {
                    var l = t[i](a),
                        c = l.value
                } catch (t) {
                    return void r(t)
                }
                l.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function K(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var X = ["black", "gray", "var(--color-fg-muted)", "var(--color-bd-primary)"];

            function R(t) {
                var e = t.name,
                    r = t.logo_url_dark,
                    i = t.areaName,
                    a = t.gen3_supported_status,
                    l = t.viewAll,
                    c = t.link,
                    u = (0, n.useRef)(),
                    s = k(),
                    p = (0, n.useMemo)((function() {
                        var t = F.find((function(t) {
                            return t.name === e
                        }));
                        return t && (0, J.ZP)().diff((0, J.ZP)(t.time), "month") <= 1
                    }), [e]),
                    h = (0, n.useMemo)((function() {
                        return l ? "pink" : X[a]
                    }), [a]),
                    m = (0, z.Z)(u, {
                        highlightSize: "10%"
                    });
                return o().createElement(W, {
                    ref: u,
                    areaName: i,
                    supportStatus: a,
                    hoverColor: h
                }, l ? o().createElement(f.Z, {
                    color: "var(--color-bd-pink)",
                    to: c,
                    blank: !1,
                    arrow: !1,
                    style: {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%"
                    }
                }, s.viewAll) : o().createElement(o().Fragment, null, o().createElement(U.w, {
                    src: r,
                    alt: e
                }), p && o().createElement(w, {
                    className: "wallet-item-new-tag"
                }, s.new), o().createElement(I, {
                    style: {
                        "--top": m.top,
                        "--left": m.left,
                        "--visible": m.visible
                    }
                }, o().createElement(N, null, e))))
            }

            function H() {
                var t, e, r = (t = (0, n.useState)([]), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != r) {
                            var n, o, i = [],
                                a = !0,
                                l = !1;
                            try {
                                for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                            } catch (t) {
                                l = !0, o = t
                            } finally {
                                try {
                                    a || null == r.return || r.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                            return i
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" === typeof t) return K(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? K(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = r[0],
                    a = r[1],
                    l = (0, T.Z)();
                return (0, n.useEffect)((function() {
                    function t() {
                        var e;
                        return e = D().mark((function t() {
                            var e;
                            return D().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, O._)("wallet", {
                                            page: 1,
                                            limit: 0,
                                            gen3: !0
                                        });
                                    case 2:
                                        if (e = t.sent, Array.isArray(e)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        a(e.slice(0, l ? 9 : 8));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), t = function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, o) {
                                var i = e.apply(t, r);

                                function a(t) {
                                    Y(i, n, o, a, l, "next", t)
                                }

                                function l(t) {
                                    Y(i, n, o, a, l, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, t.apply(this, arguments)
                    }
                    return function() {
                            t.apply(this, arguments)
                        }(),
                        function() {
                            a([])
                        }
                }), [l]), o().createElement(L, null, i.map((function(t, e) {
                    return o().createElement(R, G({
                        key: t.name
                    }, t, {
                        areaName: 0 === e ? "big" : "item".concat(e)
                    }))
                })), !l && o().createElement(R, {
                    viewAll: !0,
                    link: E.B.supportAssetsAndWallets,
                    areaName: "item8"
                }))
            }

            function Q(t) {
                var e = t.icon,
                    r = t.desc,
                    n = t.link;
                return o().createElement(Z, null, o().createElement(U.w, {
                    src: e,
                    alt: name
                }), o().createElement(P, null, r), o().createElement(f.Z, {
                    href: n.href,
                    blank: n.blank
                }, n.text))
            }

            function q() {
                var t = k(),
                    e = [{
                        icon: r(39428),
                        desc: t.panels.wallet.metamask.desc,
                        link: t.panels.wallet.metamask.link
                    }, {
                        icon: r(55939),
                        desc: t.panels.wallet.okx.desc,
                        link: t.panels.wallet.okx.link
                    }];
                return o().createElement(_, null, e.map((function(t) {
                    return o().createElement(Q, G({}, t, {
                        key: t.desc
                    }))
                })))
            }

            function V() {
                return o().createElement(C, null, o().createElement(H, null), o().createElement(q, null))
            }
            var $ = i.ZP.div.withConfig({
                    displayName: "Coinstyle__Container",
                    componentId: "sc-1ruu58u-0"
                })(["display:flex;justify-content:space-between;gap:64px 0;@media ", "{flex-direction:column;gap:24px 0;}"], a.We),
                tt = (0, i.ZP)(s.uT).withConfig({
                    displayName: "Coinstyle__Desc",
                    componentId: "sc-1ruu58u-1"
                })(["text-align:left;color:var(--color-fg-subtle);@media ", "{", "}"], a.We, s.AF),
                et = i.ZP.div.withConfig({
                    displayName: "Coinstyle__CoinCenterContainer",
                    componentId: "sc-1ruu58u-2"
                })(["display:flex;flex-wrap:wrap;width:704px;gap:64px 48px;@media ", "{margin:0 auto;width:100%;max-width:320px;gap:24px 12px;img{width:50px !important;height:50px !important;}}"], a.We),
                rt = (0, i.ZP)(u.Lb).attrs({
                    className: "coin-item-container"
                }).withConfig({
                    displayName: "Coinstyle__CoinItemContainer",
                    componentId: "sc-1ruu58u-3"
                })(["padding:", ";border:1px solid var(--color-border-subtle);border-radius:50%;width:140px;height:140px;transition:var(--transition);img{width:90%;}", " .link-wrapper{z-index:5;}:hover{border-color:", ";.coin-item-mask{backdrop-filter:blur(15px);opacity:1;}}:first-child{grid-area:big;.wallet-item-mask{h5{", "}.caption{", "}}}@media ", "{width:70px;height:70px;.link-wrapper{", "}}"], (function(t) {
                    return t.viewAll ? "0" : "20px"
                }), (function(t) {
                    return 2 === t.supportStatus ? (0, i.iv)(["img{filter:saturate(30%) brightness(0.5);}"]) : ""
                }), (function(t) {
                    return "var(--color-bd-".concat(t.hoverColor, ")")
                }), c.rU, s.v1, a.We, c.cl),
                nt = (0, i.ZP)(u.Lb).attrs({
                    className: "coin-item-mask"
                }).withConfig({
                    displayName: "Coinstyle__CoinItemContainerMask",
                    componentId: "sc-1ruu58u-4"
                })(["position:absolute;border-radius:50%;top:0;left:0;flex-direction:column;width:100%;height:100%;background:rgba(17,18,20,0.6);z-index:3;opacity:0;transition:var(--transition);overflow:hidden;::before{content:'';position:absolute;top:var(--top);left:var(--left);display:block;width:20%;height:20%;background:radial-gradient( 70.94% 70.94% at 50% 50%,rgba(255,255,255,0.67) 18.23%,rgba(255,255,255,0) 100% );-webkit-filter:blur(21.875px);filter:blur(20px);z-index:4;visibility:var(--visible);}"]),
                ot = (0, i.ZP)(c.H5).withConfig({
                    displayName: "Coinstyle__WalletItemTitle",
                    componentId: "sc-1ruu58u-5"
                })(["color:var(--color-fg-default);text-transform:uppercase;@media ", "{font-size:9px;font-style:normal;font-weight:600;line-height:14px;}"], a.We),
                it = ((0, i.ZP)(s.YS).withConfig({
                    displayName: "Coinstyle__WalletItemStatus",
                    componentId: "sc-1ruu58u-6"
                })(["color:", ";@media ", "{font-size:7px;font-style:normal;font-weight:600;line-height:11px;}"], (function(t) {
                    return t.color || "var(--color-fg-default)"
                }), a.We), (0, i.ZP)(u.Lb).withConfig({
                    displayName: "Coinstyle__CoinSideContainer",
                    componentId: "sc-1ruu58u-7"
                })(["flex-wrap:wrap;width:232px;gap:32px;.coin-item-container{width:100px;height:100px;img{width:90%;}h5{", "}.link-wrapper{", "}}@media ", "{width:100%;gap:16px;.coin-item-container{width:50px;height:50px;img{width:37px;height:37px;}h5{font-size:7px;font-style:normal;font-weight:600;line-height:11px;}.caption{font-size:7px;font-style:normal;font-weight:600;line-height:11px;}}}"], c.FF, c.FF, a.We));

            function at(t) {
                return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, at(t)
            }

            function lt() {
                lt = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, o) {
                    var i = e && e.prototype instanceof p ? e : p,
                        a = Object.create(i.prototype),
                        l = new A(o || []);
                    return n(a, "_invoke", {
                        value: x(t, r, l)
                    }), a
                }

                function s(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var f = {};

                function p() {}

                function h() {}

                function m() {}
                var d = {};
                c(d, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, i) && (d = v);
                var g = m.prototype = p.prototype = Object.create(d);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    function o(n, i, a, l) {
                        var c = s(t[n], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                f = u.value;
                            return f && "object" == at(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                o("next", t, a, l)
                            }), (function(t) {
                                o("throw", t, a, l)
                            })) : e.resolve(f).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return o("throw", t, a, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var i;
                    n(this, "_invoke", {
                        value: function(t, r) {
                            function n() {
                                return new e((function(e, n) {
                                    o(t, r, e, n)
                                }))
                            }
                            return i = i ? i.then(n, n) : n()
                        }
                    })
                }

                function x(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var l = E(a, r);
                                if (l) {
                                    if (l === f) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = s(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function E(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function A(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = c(m, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, c(t, l, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), c(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, l, "Generator"), c(g, i, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = j, A.prototype = {
                    constructor: A,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var l = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function ct(t, e, r, n, o, i, a) {
                try {
                    var l = t[i](a),
                        c = l.value
                } catch (t) {
                    return void r(t)
                }
                l.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function ut(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" === typeof t) return st(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? st(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function st(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function ft() {
                return ft = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, ft.apply(this, arguments)
            }
            var pt = ["black", "gray", "var(--color-fg-muted)", "var(--color-bd-primary)"];

            function ht(t) {
                var e = t.symbol,
                    r = t.logo_url,
                    i = t.gen3_supported_status,
                    a = t.viewAll,
                    l = t.link,
                    c = (0, n.useRef)(),
                    u = k(),
                    s = (0, n.useMemo)((function() {
                        var t = B.find((function(t) {
                            return t.symbol === e
                        }));
                        return t && (0, J.ZP)().diff((0, J.ZP)(t.time), "month") <= 1
                    }), [e]),
                    p = (0, n.useMemo)((function() {
                        return a ? "pink" : pt[i]
                    }), [i]),
                    h = (0, z.Z)(c, {
                        highlightSize: "10%"
                    });
                return o().createElement(rt, {
                    ref: c,
                    hoverColor: p,
                    supportStatus: i,
                    viewAll: a
                }, a ? o().createElement(f.Z, {
                    color: "var(--color-bd-pink)",
                    to: l,
                    blank: !1,
                    arrow: !1,
                    style: {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%"
                    }
                }, u.viewAll) : o().createElement(o().Fragment, null, o().createElement(U.w, {
                    src: r,
                    alt: e
                }), s && o().createElement(w, null, u.new), o().createElement(nt, {
                    style: {
                        "--top": h.top,
                        "--left": h.left,
                        "--visible": h.visible
                    }
                }, o().createElement(ot, null, e))))
            }

            function mt(t) {
                var e = t.list;
                return o().createElement(et, null, e.map((function(t) {
                    return o().createElement(ht, ft({}, t, {
                        key: t.name
                    }))
                })))
            }

            function dt(t) {
                var e = t.list,
                    r = t.viewAll;
                return o().createElement(it, null, e.map((function(t) {
                    return o().createElement(ht, ft({}, t, {
                        key: t.name
                    }))
                })), r && o().createElement(ht, {
                    viewAll: !0,
                    link: E.B.supportAssetsAndWallets + "?type=assets"
                }))
            }

            function yt() {
                var t = k(),
                    e = ut((0, n.useState)([]), 2),
                    r = e[0],
                    i = e[1],
                    a = ut((0, n.useState)([]), 2),
                    l = a[0],
                    c = a[1],
                    u = ut((0, n.useState)([]), 2),
                    s = u[0],
                    f = u[1],
                    p = (0, T.Z)();
                return (0, n.useEffect)((function() {
                    function t() {
                        var e;
                        return e = lt().mark((function t() {
                            var e;
                            return lt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, O._)("coin", {
                                            page: 1,
                                            limit: 19,
                                            gen3: !0
                                        });
                                    case 2:
                                        if (e = t.sent, Array.isArray(e)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        f(e.slice(0, 8)), i(e.slice(8, p ? 13 : 14)), c(e.slice(14, p ? 20 : 19));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), t = function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, o) {
                                var i = e.apply(t, r);

                                function a(t) {
                                    ct(i, n, o, a, l, "next", t)
                                }

                                function l(t) {
                                    ct(i, n, o, a, l, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, t.apply(this, arguments)
                    }! function() {
                        t.apply(this, arguments)
                    }()
                }), [p]), o().createElement(o().Fragment, null, o().createElement($, null, o().createElement(dt, {
                    list: r,
                    key: "left-side"
                }), o().createElement(mt, {
                    list: s
                }), o().createElement(dt, {
                    list: l,
                    key: "right-side",
                    viewAll: !p
                })), o().createElement(tt, null, t.panels.coin.desc))
            }

            function vt() {
                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).themeColor,
                    e = k(),
                    r = (0, T.Z)(),
                    i = (0, n.useMemo)((function() {
                        return {
                            title: e.title,
                            desc: e.desc,
                            link: e.link,
                            panels: e.panels
                        }
                    }), []);
                return o().createElement(h, null, o().createElement(m, null, o().createElement(d, {
                    themeColor: t
                }, i.title), o().createElement(v, null, o().createElement(y, null, i.desc), o().createElement(f.Z, {
                    to: E.B.roadmap
                }, e.roadmap))), o().createElement(j, {
                    title: i.panels.wallet.title,
                    link: r && {
                        text: e.viewAll,
                        link: E.B.supportAssetsAndWallets
                    }
                }, o().createElement(V, null)), o().createElement(j, {
                    title: i.panels.coin.title,
                    link: r && {
                        text: e.viewAll,
                        link: E.B.supportAssetsAndWallets + "?type=assets"
                    }
                }, o().createElement(yt, null)))
            }
        },
        55939: t => {
            t.exports = "data:image/svg+xml,%3Csvg fill='none' height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Cpath d='m6 6h9.7998v9.7998h-9.7998z'/%3E%3Cpath d='m24.1992 6h9.7999v9.7998h-9.7999z'/%3E%3Cpath d='m24.1992 24.1997h9.7999v9.7999h-9.7999z'/%3E%3Cpath d='m6 24.1997h9.7998v9.7999h-9.7998z'/%3E%3Cpath d='m15.8008 15.7998h8.3998v8.3999h-8.3998z'/%3E%3C/g%3E%3C/svg%3E"
        },
        39428: t => {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyLSURBVHgB7VxbbBzlFT7/XPbmS9aJAwGTZAMJhBQ1BJFUVWuylihSeUlSgVSpleJIbd9agirSvCCMWkGAPoS3SiCFqE+IUsILlVqBJ7RIbaHFQSV1IZANJITESby+7O7sZebvObOeeHfmn+uuuUT+JMf2f5v5vznf+c85sw7AMpaxjGUsYxnXHA7mc7mXfpzLwzWM02O57G+/v3a33xjm1fHI8NBoSoUjW9eohR1rVU1l8uM3HJoswDWATw9uzpvc2DX+cW305IV6VpKkkUPaWU00VvFaRJJgb7XB4Z9na7mqwUd3DKmjn/xqkwYmHFVlWfu6kUXWopQTD5mMjc7oRu71UzqcmzWsPm5ysiJNNE9oQSQv06ydbm3rSzL4wZa09X1h5guMyUfXHprU4CsKIkXWU7uB870ceJ7aiJQ//U8HevgtKD795mcDojWEBJG8GONHRH3DuSRsXdNmeAVc5SslQVtCuL1R/DVrt/+tUIUT5+vCOV4yU8SDYS/nwnXgr3iRSyUDdtyUsK0pBxxG69z4UiW4KCHYb3Iz2/rs56ocXpuswKWy6TnfS2YuCxLJSwSX5NwrL7kEiRSpnERrh122hJz4+EoD3vio6pSUCEKZuXbnJy8RyJJ23KT6Dem6BL0k1Aoi5O2zNU9JiSCSmeIe5C0vEfCUs0x3eH3Cy5quSrA4tqGgqiZ0glJVyVaq7RJyIoykRBDJrO0qYeUlApFz7y1JGOqXPceoCof+TPgnKsKVUgJM05uc99Bi6KGFkJQILplJ7f2NHMQEPbVXTup4c94ENAwGJmcQF3VD8iSHCKFTig6RmOQQsmP5XJtk2ySmgzKRgBp0Anp6FGuQNTklR9Kt1iVIJwyIA5orAknptUkdH1Jn8sW7LYxphWJrW9sVD1MnQ6faIYigP56sWCeIE/WGBHFRE8wlSR17v9IxOQs44WxwX5HDcegCLEf5QdUluXqDodSik6TX5TZ5kowoIu5QUm3AVSacbQKC2AR0ESS5o++WLcJsEElRUa0vOn+S1IvviS20E+Axr7naXA1ydwkiEDkkuf9ONTdUqcmR5pNjrhtNUklSL54od0tSbUihD3a2ueKgbjhqEYik1zGitWMm8kWqEm6TNZSkLSk7A+82MBqfcDpogsuCLEcN3bciGxTZkuSm5sPPOTUFlqSWihwLHM6Imj28JT8BSwiypt//uwp6CBcyXQF4+T/6kkiqFZxzTdQuJogvnQXZ2I45XEIOdta9qgRbb1BgqSHJsnDP4iszvgKWCEmFwf232ilJcNph4OE3vD4JSSTTL0rvFBjjZ8XtDhzIYxHbNF6BJYCzRNKfaQQ6ah1PvJLePPU+nm6go691Le5xQpHYtie0c22W5Dpv3yrMTg5v6D/DOcsDnXxdwmBGgl23t9ePEpjZy5L/Zil6tgPLgbQEt65SkCgDT7bukUQpBsZAe57Uzv3d2Sf0QaYJXX1Et69WYM+WlCs3M2NcpWmFKRjsiZ+yONG8DaUg6nNZ0H7MZjGo/x1Oy0EXQMU0qmOj+br6yIIU2Z8liqANRwZPfuyO61XAty1wYb4rp1uWc2PmrTNzmrPD8xg5cM/QC0jSXogJ2sR3MSAk6/FCOmlAJukf28xXFM8snkCpTBec9+NYBxoTdQhjfiqcoQCInBxEQEplMJSV4FvrZLjrhiSsz/qnFFRAoy8/WEmqT4GMTsN1eJ2+tAkNTGZL1ei6ZRgYf2/Dqn9gjKw7+4SPF0cVkyElRqRsvZFBbqUEOazFpdByynjqVGrBPqKT4lkr1vTKcMtgAlK3GVCsSFCY5jB5EUNj/K7XgwnjjOdEaQbB8w4P5tfkOJfGsciVc/att8ggUpj1vRWUY82WwwV2yYQJvSn/cHp6XvW1IBuYS0G2p44ZeTshTbJM/A5wYdbtr+gES0uJbZEJIjySH7qTmTCO7+izt11HZEiw+bqmlYiAoQEUS0qoDRESKK++gBp1WIIIQTXvYoVbhE18htZ1xbTIYZKJbzI+L3jNCbzy5C/XHV47wB6CEGhKK3wpI0wR//JsAqKgJ2VAKmRJ9/ws27Px6cIxvzGBjgLJ2QkhQNKKWucxliD/LFfl0BY3tAJ2BY3xdRaVJ/E1kMHvhBC4PKNApSphZLzYZkfJDNtawyB5gUcWsA8q8pNs7fd0GMBe/dloMRI7TjJ5sx/vArJ9waUCk1vvwfb5jfElCG9id9hzJttrwFxJwhJG6wz/2arKYWWfdz9tfOpytIg5lUTZ9oSuG2Urv87l048WNK8BAVfngSa4eGMGDGYxMlbCxyFSoAWxNosMvgcOq1c2XCeZHwwwfT9h5nl5khfefx4iIIMOckWfeVVCQVAUCPQXYQm3LKfXDIzMnWCM+WYLngShA81DRCQTdIJwyPYbQpJOllJw9Pzim92E6r956lVanADNpTWcsMmhuCqK9SzAkplXp7cP4vHyMMqv6g3FIqk4K8Ms5lHvzGRAm+6Bk/PNzW3vr8CWHt1KVMnPeG2KnHIzmWVwfLoXXpvqt7629OqQHyjBzoF5i0AihxDVemwsyEwT9QktKI68bFABjOIb8h3XD9ahiDWcyUYSzlYX45mXLqywTjAW4gSwJUZzbNBa55gC01hjIp9DiGk9FvxkJrQgklcnWZJtRQrK7N6hOeuL8M6lDLxxvhfGz/fBB3oSVkM5cC0i+s1iD+T6a/DAYBG2D5bh7sHFebMlFchu4lrPAjxPMyEP879ZPx7XgmzQjdMT7U2L4xFyztNzKh7J3mVXHRNevargmLqndQRdJyzwrcazvY9+st/Z7pJYJ/JqRTrgidKmwkhCloPHdWg9FpjEhCGNi6A4p5cIZBWK7J9LKCHCATloDSW+72kDVi1Ep5n73XyE4DAIqYT/5oLeaFC9SA0oyaYT3UvoTDDzzjaXk740l5iRItTs5+ZlqHkk5GQhN66uWbVnEUJJzGcMJaafXfT+AGkmZUI6HcG6THDVhNynmAGaGRBdtiKFN0FlDi7ggBLHOawpZ0xD6JMUibsK8q2gMEBEIqUglBgTQfW6eD4FqokEhM7sCYaS0Jxtbh9Ur/vWR1w3giv0ZMQWYsc5tJG5irvwRZv3i4UUATm0xgxWLKm0QnO9cjUKHlmUWIVBYcMT7wd/gGrDYetjeBpEQCbFrczcidY8qlZvbsxJkp8jd/ooeolIFUvDWFxDEhBEslLVyI5bEzUK+UcTPg4R0Y9JKnOs5ny6VuyDJVQ9YmGNYFkhEswdhX7ZkcyStHozMRy3xF4VNXv8rYapcZM9BhFgS21+fpEV2eMEonftDSkNz/9rGo5MGNCfFK85WwX4xXf64MGbvT+25yyZRJbWAoxkTRO1ey71yYFN+B5A/DF/P0zjGWg7zoEVpsvUuZqGWu4eqOeGIf+jnweut2b1ILz4zAFIfPhnUK58BKxypa2/okt4kjavR9Lq64lhPehS1j314YioyzObR/f5KovxZpWkdqXYPNVafZCZXonEDEPjpu3AlTScKnwaar35ctmaq3/zhyAhOcq5dyBx9u2rRDFoZvuxpdVc5KhXl+I9x8DTTIpMUKvUyNQtYjbdB/Wh7W3jaONhMF8qW2N7M5nmWhvvg8bQ3SBfeB+ShTdBMaatcXGlRVBB1rz6PAkyaoYmJ+J9goJOtVrmeihv3w3GyluEYy5MXYaw+PziZdiYy1z9nYgy0RpJpuzUccic/AtKuQJxgD5/wu+vkDwZiHPcI2jOC7jqPv3mHdsuSSsn9KouHPj51CW4btVA4FdPJgUfnXHLEbNvKFVKcHnVN57tVyrbMKV9eOF+ixANvie271sNfPWMfsidn7QBb4rGSZIxsfbQKW2x4xn6Z9v4H54/XC6XH8qgRFLJxXLpXXdshvtHvg1BKFV0LHk0Wu6JY+Rehgq2m2bj4ZEHf3p4oYuCPOvnTw9uzGMetxvd005Une9rK4nxY/7b88Hpg5tzsmmcbm3jjBXw31dp4UaqMbFhrBD4xMZffm4/49JjsiRnk6kkph0py69UPazLib6ePkwbVChXKkhWFfdtFrhp7kNytKC51h7AyHOqUjC2k/G2D2UU1z394YDf/EC3dubApncZsAKeascTEjsW968Gx185kmOmOU5lBSSKXtqhNYQ7dRRZgYbRtCKc9SweWWMje/ZFlZKFs49sutNgUp4xcxfuaWb9Ux/E+48FlgrjLz03xpgUKQhdQBHJ2TfywE8i5Yqd4gsniNBqTeFmMI3LbB9aTQG+YHwpBNlAa8oHDlJ4cWTPz5b8g+3LWMYylrGMryH+D6/flAP24HRSAAAAAElFTkSuQmCC"
        }
    }
]);