"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [2846], {
        52329: (e, t, n) => {
            n.d(t, {
                q: () => Ln,
                YD: () => Mn,
                q_: () => wn,
                ZI: () => kn,
                Yz: () => xn
            });
            var s = n(67294),
                r = Object.defineProperty,
                i = {};
            ((e, t) => {
                for (var n in t) r(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(i, {
                assign: () => F,
                colors: () => q,
                createStringInterpolator: () => R,
                skipAnimation: () => z,
                to: () => V,
                willAdvance: () => $
            });
            var a = k(),
                o = e => v(e, a),
                u = k();
            o.write = e => v(e, u);
            var c = k();
            o.onStart = e => v(e, c);
            var l = k();
            o.onFrame = e => v(e, l);
            var d = k();
            o.onFinish = e => v(e, d);
            var h = [];
            o.setTimeout = (e, t) => {
                const n = o.now() + t,
                    s = () => {
                        const e = h.findIndex((e => e.cancel == s));
                        ~e && h.splice(e, 1), g -= ~e ? 1 : 0
                    },
                    r = {
                        time: n,
                        handler: e,
                        cancel: s
                    };
                return h.splice(p(n), 0, r), g += 1, b(), r
            };
            var p = e => ~(~h.findIndex((t => t.time > e)) || ~h.length);
            o.cancel = e => {
                c.delete(e), l.delete(e), d.delete(e), a.delete(e), u.delete(e)
            }, o.sync = e => {
                y = !0, o.batchedUpdates(e), y = !1
            }, o.throttle = e => {
                let t;

                function n() {
                    try {
                        e(...t)
                    } finally {
                        t = null
                    }
                }

                function s(...e) {
                    t = e, o.onStart(n)
                }
                return s.handler = e, s.cancel = () => {
                    c.delete(n), t = null
                }, s
            };
            var f = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            o.use = e => f = e, o.now = "undefined" != typeof performance ? () => performance.now() : Date.now, o.batchedUpdates = e => e(), o.catch = console.error, o.frameLoop = "always", o.advance = () => {
                "demand" !== o.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : _()
            };
            var m = -1,
                g = 0,
                y = !1;

            function v(e, t) {
                y ? (t.delete(e), e(0)) : (t.add(e), b())
            }

            function b() {
                m < 0 && (m = 0, "demand" !== o.frameLoop && f(w))
            }

            function w() {
                ~m && (f(w), o.batchedUpdates(_))
            }

            function _() {
                const e = m;
                m = o.now();
                const t = p(m);
                t && (x(h.splice(0, t), (e => e.handler())), g -= t), g ? (c.flush(), a.flush(e ? Math.min(64, m - e) : 16.667), l.flush(), u.flush(), d.flush()) : m = -1
            }

            function k() {
                let e = new Set,
                    t = e;
                return {
                    add(n) {
                        g += t != e || e.has(n) ? 0 : 1, e.add(n)
                    },
                    delete: n => (g -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
                    flush(n) {
                        t.size && (e = new Set, g -= t.size, x(t, (t => t(n) && e.add(t))), g += e.size, t = e)
                    }
                }
            }

            function x(e, t) {
                e.forEach((e => {
                    try {
                        t(e)
                    } catch (e) {
                        o.catch(e)
                    }
                }))
            }

            function P() {}
            var I = {
                arr: Array.isArray,
                obj: e => !!e && "Object" === e.constructor.name,
                fun: e => "function" === typeof e,
                str: e => "string" === typeof e,
                num: e => "number" === typeof e,
                und: e => void 0 === e
            };

            function M(e, t) {
                if (I.arr(e)) {
                    if (!I.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
                return e === t
            }
            var S = (e, t) => e.forEach(t);

            function A(e, t, n) {
                if (I.arr(e))
                    for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
                else
                    for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
            }
            var C = e => I.und(e) ? [] : I.arr(e) ? e : [e];

            function O(e, t) {
                if (e.size) {
                    const n = Array.from(e);
                    e.clear(), S(n, t)
                }
            }
            var R, V, E = (e, ...t) => O(e, (e => e(...t))),
                j = () => "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                q = null,
                z = !1,
                $ = P,
                F = e => {
                    e.to && (V = e.to), e.now && (o.now = e.now), void 0 !== e.colors && (q = e.colors), null != e.skipAnimation && (z = e.skipAnimation), e.createStringInterpolator && (R = e.createStringInterpolator), e.requestAnimationFrame && o.use(e.requestAnimationFrame), e.batchedUpdates && (o.batchedUpdates = e.batchedUpdates), e.willAdvance && ($ = e.willAdvance), e.frameLoop && (o.frameLoop = e.frameLoop)
                },
                T = new Set,
                Q = [],
                N = [],
                U = 0,
                D = {
                    get idle() {
                        return !T.size && !Q.length
                    },
                    start(e) {
                        U > e.priority ? (T.add(e), o.onStart(B)) : (L(e), o(G))
                    },
                    advance: G,
                    sort(e) {
                        if (U) o.onFrame((() => D.sort(e)));
                        else {
                            const t = Q.indexOf(e);
                            ~t && (Q.splice(t, 1), W(e))
                        }
                    },
                    clear() {
                        Q = [], T.clear()
                    }
                };

            function B() {
                T.forEach(L), T.clear(), o(G)
            }

            function L(e) {
                Q.includes(e) || W(e)
            }

            function W(e) {
                Q.splice(function(t, n) {
                    const s = t.findIndex((t => t.priority > e.priority));
                    return s < 0 ? t.length : s
                }(Q), 0, e)
            }

            function G(e) {
                const t = N;
                for (let n = 0; n < Q.length; n++) {
                    const s = Q[n];
                    U = s.priority, s.idle || ($(s), s.advance(e), s.idle || t.push(s))
                }
                return U = 0, (N = Q).length = 0, (Q = t).length > 0
            }
            var Z = "[-+]?\\d*\\.?\\d+",
                Y = Z + "%";

            function H(...e) {
                return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var J = new RegExp("rgb" + H(Z, Z, Z)),
                X = new RegExp("rgba" + H(Z, Z, Z, Z)),
                K = new RegExp("hsl" + H(Z, Y, Y)),
                ee = new RegExp("hsla" + H(Z, Y, Y, Z)),
                te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                se = /^#([0-9a-fA-F]{6})$/,
                re = /^#([0-9a-fA-F]{8})$/;

            function ie(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function ae(e, t, n) {
                const s = n < .5 ? n * (1 + t) : n + t - n * t,
                    r = 2 * n - s,
                    i = ie(r, s, e + 1 / 3),
                    a = ie(r, s, e),
                    o = ie(r, s, e - 1 / 3);
                return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * o) << 8
            }

            function oe(e) {
                const t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function ue(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function ce(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function le(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function de(e) {
                let t = function(e) {
                    let t;
                    return "number" === typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = se.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : q && void 0 !== q[e] ? q[e] : (t = J.exec(e)) ? (oe(t[1]) << 24 | oe(t[2]) << 16 | oe(t[3]) << 8 | 255) >>> 0 : (t = X.exec(e)) ? (oe(t[1]) << 24 | oe(t[2]) << 16 | oe(t[3]) << 8 | ce(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = K.exec(e)) ? (255 | ae(ue(t[1]), le(t[2]), le(t[3]))) >>> 0 : (t = ee.exec(e)) ? (ae(ue(t[1]), le(t[2]), le(t[3])) | ce(t[4])) >>> 0 : null
                }(e);
                return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
            }
            var he = (e, t, n) => {
                    if (I.fun(e)) return e;
                    if (I.arr(e)) return he({
                        range: e,
                        output: t,
                        extrapolate: n
                    });
                    if (I.str(e.output[0])) return R(e);
                    const s = e,
                        r = s.output,
                        i = s.range || [0, 1],
                        a = s.extrapolateLeft || s.extrapolate || "extend",
                        o = s.extrapolateRight || s.extrapolate || "extend",
                        u = s.easing || (e => e);
                    return e => {
                        const t = function(e, t) {
                            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                            return n - 1
                        }(e, i);
                        return function(e, t, n, s, r, i, a, o, u) {
                            let c = u ? u(e) : e;
                            if (c < t) {
                                if ("identity" === a) return c;
                                "clamp" === a && (c = t)
                            }
                            if (c > n) {
                                if ("identity" === o) return c;
                                "clamp" === o && (c = n)
                            }
                            return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), s === -1 / 0 ? c = -c : r === 1 / 0 ? c += s : c = c * (r - s) + s, c)
                        }(e, i[t], i[t + 1], r[t], r[t + 1], u, a, o, s.map)
                    }
                },
                pe = 1.70158,
                fe = 1.525 * pe,
                me = pe + 1,
                ge = 2 * Math.PI / 3,
                ye = 2 * Math.PI / 4.5,
                ve = e => {
                    const t = 7.5625,
                        n = 2.75;
                    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                },
                be = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => 1 - (1 - e) * (1 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
                    easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
                    easeOutSine: e => Math.sin(e * Math.PI / 2),
                    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
                    easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
                    easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
                    easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
                    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
                    easeInBack: e => me * e * e * e - pe * e * e,
                    easeOutBack: e => 1 + me * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
                    easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - fe) / 2 : (Math.pow(2 * e - 2, 2) * ((fe + 1) * (2 * e - 2) + fe) + 2) / 2,
                    easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ge),
                    easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ge) + 1,
                    easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ye) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ye) / 2 + 1,
                    easeInBounce: e => 1 - ve(1 - e),
                    easeOutBounce: ve,
                    easeInOutBounce: e => e < .5 ? (1 - ve(1 - 2 * e)) / 2 : (1 + ve(2 * e - 1)) / 2,
                    steps: (e, t = "end") => n => {
                        const s = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
                        return 0, 1, r = ("end" === t ? Math.floor(s) : Math.ceil(s)) / e, Math.min(Math.max(r, 0), 1);
                        var r
                    }
                },
                we = Symbol.for("FluidValue.get"),
                _e = Symbol.for("FluidValue.observers"),
                ke = e => Boolean(e && e[we]),
                xe = e => e && e[we] ? e[we]() : e,
                Pe = e => e[_e] || null;

            function Ie(e, t) {
                const n = e[_e];
                n && n.forEach((e => {
                    ! function(e, t) {
                        e.eventObserved ? e.eventObserved(t) : e(t)
                    }(e, t)
                }))
            }
            var Me = class {
                    constructor(e) {
                        if (!e && !(e = this.get)) throw Error("Unknown getter");
                        Se(this, e)
                    }
                },
                Se = (e, t) => Re(e, we, t);

            function Ae(e, t) {
                if (e[we]) {
                    let n = e[_e];
                    n || Re(e, _e, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
                }
                return t
            }

            function Ce(e, t) {
                const n = e[_e];
                if (n && n.has(t)) {
                    const s = n.size - 1;
                    s ? n.delete(t) : e[_e] = null, e.observerRemoved && e.observerRemoved(s, t)
                }
            }
            var Oe, Re = (e, t, n) => Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                Ve = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                Ee = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                je = new RegExp(`(${Ve.source})(%|[a-z]+)`, "i"),
                qe = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                ze = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                $e = e => {
                    const [t, n] = Fe(e);
                    if (!t || j()) return e;
                    const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                    if (s) return s.trim();
                    if (n && n.startsWith("--")) {
                        return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
                    }
                    return n && ze.test(n) ? $e(n) : n || e
                },
                Fe = e => {
                    const t = ze.exec(e);
                    if (!t) return [, ];
                    const [, n, s] = t;
                    return [n, s]
                },
                Te = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
                Qe = e => {
                    Oe || (Oe = q ? new RegExp(`(${Object.keys(q).join("|")})(?!\\w)`, "g") : /^\b$/);
                    const t = e.output.map((e => xe(e).replace(ze, $e).replace(Ee, de).replace(Oe, de))),
                        n = t.map((e => e.match(Ve).map(Number))),
                        s = n[0].map(((e, t) => n.map((e => {
                            if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                            return e[t]
                        })))).map((t => he({ ...e,
                            output: t
                        })));
                    return e => {
                        const n = !je.test(t[0]) && t.find((e => je.test(e))) ? .replace(Ve, "");
                        let r = 0;
                        return t[0].replace(Ve, (() => `${s[r++](e)}${n||""}`)).replace(qe, Te)
                    }
                },
                Ne = "react-spring: ",
                Ue = e => {
                    const t = e;
                    let n = !1;
                    if ("function" != typeof t) throw new TypeError(`${Ne}once requires a function parameter`);
                    return (...e) => {
                        n || (t(...e), n = !0)
                    }
                },
                De = Ue(console.warn),
                Be = Ue(console.warn);

            function Le(e) {
                return I.str(e) && ("#" == e[0] || /\d/.test(e) || !j() && ze.test(e) || e in (q || {}))
            }
            var We = j() ? s.useEffect : s.useLayoutEffect,
                Ge = () => {
                    const e = (0, s.useRef)(!1);
                    return We((() => (e.current = !0, () => {
                        e.current = !1
                    })), []), e
                };

            function Ze() {
                const e = (0, s.useState)()[1],
                    t = Ge();
                return () => {
                    t.current && e(Math.random())
                }
            }
            var Ye = e => (0, s.useEffect)(e, He),
                He = [];

            function Je(e) {
                const t = (0, s.useRef)();
                return (0, s.useEffect)((() => {
                    t.current = e
                })), t.current
            }
            var Xe = Symbol.for("Animated:node"),
                Ke = e => e && e[Xe],
                et = (e, t) => {
                    return n = e, s = Xe, r = t, Object.defineProperty(n, s, {
                        value: r,
                        writable: !0,
                        configurable: !0
                    });
                    var n, s, r
                },
                tt = e => e && e[Xe] && e[Xe].getPayload(),
                nt = class {
                    constructor() {
                        et(this, this)
                    }
                    getPayload() {
                        return this.payload || []
                    }
                },
                st = class extends nt {
                    constructor(e) {
                        super(), this._value = e, this.done = !0, this.durationProgress = 0, I.num(this._value) && (this.lastPosition = this._value)
                    }
                    static create(e) {
                        return new st(e)
                    }
                    getPayload() {
                        return [this]
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e, t) {
                        return I.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                    }
                    reset() {
                        const {
                            done: e
                        } = this;
                        this.done = !1, I.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                    }
                },
                rt = class extends st {
                    constructor(e) {
                        super(0), this._string = null, this._toString = he({
                            output: [e, e]
                        })
                    }
                    static create(e) {
                        return new rt(e)
                    }
                    getValue() {
                        const e = this._string;
                        return null == e ? this._string = this._toString(this._value) : e
                    }
                    setValue(e) {
                        if (I.str(e)) {
                            if (e == this._string) return !1;
                            this._string = e, this._value = 1
                        } else {
                            if (!super.setValue(e)) return !1;
                            this._string = null
                        }
                        return !0
                    }
                    reset(e) {
                        e && (this._toString = he({
                            output: [this.getValue(), e]
                        })), this._value = 0, super.reset()
                    }
                },
                it = {
                    dependencies: null
                },
                at = class extends nt {
                    constructor(e) {
                        super(), this.source = e, this.setValue(e)
                    }
                    getValue(e) {
                        const t = {};
                        return A(this.source, ((n, s) => {
                            var r;
                            (r = n) && r[Xe] === r ? t[s] = n.getValue(e) : ke(n) ? t[s] = xe(n) : e || (t[s] = n)
                        })), t
                    }
                    setValue(e) {
                        this.source = e, this.payload = this._makePayload(e)
                    }
                    reset() {
                        this.payload && S(this.payload, (e => e.reset()))
                    }
                    _makePayload(e) {
                        if (e) {
                            const t = new Set;
                            return A(e, this._addToPayload, t), Array.from(t)
                        }
                    }
                    _addToPayload(e) {
                        it.dependencies && ke(e) && it.dependencies.add(e);
                        const t = tt(e);
                        t && S(t, (e => this.add(e)))
                    }
                },
                ot = class extends at {
                    constructor(e) {
                        super(e)
                    }
                    static create(e) {
                        return new ot(e)
                    }
                    getValue() {
                        return this.source.map((e => e.getValue()))
                    }
                    setValue(e) {
                        const t = this.getPayload();
                        return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(ut)), !0)
                    }
                };

            function ut(e) {
                return (Le(e) ? rt : st).create(e)
            }

            function ct(e) {
                const t = Ke(e);
                return t ? t.constructor : I.arr(e) ? ot : Le(e) ? rt : st
            }
            var lt = (e, t) => {
                    const n = !I.fun(e) || e.prototype && e.prototype.isReactComponent;
                    return (0, s.forwardRef)(((r, i) => {
                        const a = (0, s.useRef)(null),
                            u = n && (0, s.useCallback)((e => {
                                a.current = function(e, t) {
                                    return e && (I.fun(e) ? e(t) : e.current = t), t
                                }(i, e)
                            }), [i]),
                            [c, l] = function(e, t) {
                                const n = new Set;
                                return it.dependencies = n, e.style && (e = { ...e,
                                    style: t.createAnimatedStyle(e.style)
                                }), e = new at(e), it.dependencies = null, [e, n]
                            }(r, t),
                            d = Ze(),
                            h = () => {
                                const e = a.current;
                                n && !e || !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && d()
                            },
                            p = new dt(h, l),
                            f = (0, s.useRef)();
                        We((() => (f.current = p, S(l, (e => Ae(e, p))), () => {
                            f.current && (S(f.current.deps, (e => Ce(e, f.current))), o.cancel(f.current.update))
                        }))), (0, s.useEffect)(h, []), Ye((() => () => {
                            const e = f.current;
                            S(e.deps, (t => Ce(t, e)))
                        }));
                        const m = t.getComponentProps(c.getValue());
                        return s.createElement(e, { ...m,
                            ref: u
                        })
                    }))
                },
                dt = class {
                    constructor(e, t) {
                        this.update = e, this.deps = t
                    }
                    eventObserved(e) {
                        "change" == e.type && o.write(this.update)
                    }
                },
                ht = Symbol.for("AnimatedComponent"),
                pt = e => I.str(e) ? e : e && I.str(e.displayName) ? e.displayName : I.fun(e) && e.name || null;

            function ft(e, ...t) {
                return I.fun(e) ? e(...t) : e
            }
            var mt = (e, t) => !0 === e || !!(t && e && (I.fun(e) ? e(t) : C(e).includes(t))),
                gt = (e, t) => I.obj(e) ? t && e[t] : e,
                yt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                vt = e => e,
                bt = (e, t = vt) => {
                    let n = wt;
                    e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
                    const s = {};
                    for (const r of n) {
                        const n = t(e[r], r);
                        I.und(n) || (s[r] = n)
                    }
                    return s
                },
                wt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                _t = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function kt(e) {
                const t = function(e) {
                    const t = {};
                    let n = 0;
                    if (A(e, ((e, s) => {
                            _t[s] || (t[s] = e, n++)
                        })), n) return t
                }(e);
                if (t) {
                    const n = {
                        to: t
                    };
                    return A(e, ((e, s) => s in t || (n[s] = e))), n
                }
                return { ...e
                }
            }

            function xt(e) {
                return e = xe(e), I.arr(e) ? e.map(xt) : Le(e) ? i.createStringInterpolator({
                    range: [0, 1],
                    output: [e, e]
                })(1) : e
            }

            function Pt(e) {
                for (const t in e) return !0;
                return !1
            }

            function It(e) {
                return I.fun(e) || I.arr(e) && I.obj(e[0])
            }

            function Mt(e, t) {
                e.ref ? .delete(e), t ? .delete(e)
            }

            function St(e, t) {
                t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
            }
            var At = {
                tension: 170,
                friction: 26,
                mass: 1,
                damping: 1,
                easing: be.linear,
                clamp: !1
            };

            function Ct(e, t) {
                if (I.und(t.decay)) {
                    const n = !I.und(t.tension) || !I.und(t.friction);
                    !n && I.und(t.frequency) && I.und(t.damping) && I.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
                } else e.duration = void 0
            }
            var Ot = [];

            function Rt(e, {
                key: t,
                props: n,
                defaultProps: s,
                state: r,
                actions: a
            }) {
                return new Promise(((u, c) => {
                    let l, d, h = mt(n.cancel ? ? s ? .cancel, t);
                    if (h) m();
                    else {
                        I.und(n.pause) || (r.paused = mt(n.pause, t));
                        let e = s ? .pause;
                        !0 !== e && (e = r.paused || mt(e, t)), l = ft(n.delay || 0, t), e ? (r.resumeQueue.add(f), a.pause()) : (a.resume(), f())
                    }

                    function p() {
                        r.resumeQueue.add(f), r.timeouts.delete(d), d.cancel(), l = d.time - o.now()
                    }

                    function f() {
                        l > 0 && !i.skipAnimation ? (r.delayed = !0, d = o.setTimeout(m, l), r.pauseQueue.add(p), r.timeouts.add(d)) : m()
                    }

                    function m() {
                        r.delayed && (r.delayed = !1), r.pauseQueue.delete(p), r.timeouts.delete(d), e <= (r.cancelId || 0) && (h = !0);
                        try {
                            a.start({ ...n,
                                callId: e,
                                cancel: h
                            }, u)
                        } catch (e) {
                            c(e)
                        }
                    }
                }))
            }
            var Vt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? qt(e.get()) : t.every((e => e.noop)) ? Et(e.get()) : jt(e.get(), t.every((e => e.finished))),
                Et = e => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                jt = (e, t, n = !1) => ({
                    value: e,
                    finished: t,
                    cancelled: n
                }),
                qt = e => ({
                    value: e,
                    cancelled: !0,
                    finished: !1
                });

            function zt(e, t, n, s) {
                const {
                    callId: r,
                    parentId: a,
                    onRest: u
                } = t, {
                    asyncTo: c,
                    promise: l
                } = n;
                return a || e !== c || t.reset ? n.promise = (async () => {
                    n.asyncId = r, n.asyncTo = e;
                    const d = bt(t, ((e, t) => "onRest" === t ? void 0 : e));
                    let h, p;
                    const f = new Promise(((e, t) => (h = e, p = t))),
                        m = e => {
                            const t = r <= (n.cancelId || 0) && qt(s) || r !== n.asyncId && jt(s, !1);
                            if (t) throw e.result = t, p(e), e
                        },
                        g = (e, t) => {
                            const a = new Ft,
                                o = new Tt;
                            return (async () => {
                                if (i.skipAnimation) throw $t(n), o.result = jt(s, !1), p(o), o;
                                m(a);
                                const u = I.obj(e) ? { ...e
                                } : { ...t,
                                    to: e
                                };
                                u.parentId = r, A(d, ((e, t) => {
                                    I.und(u[t]) && (u[t] = e)
                                }));
                                const c = await s.start(u);
                                return m(a), n.paused && await new Promise((e => {
                                    n.resumeQueue.add(e)
                                })), c
                            })()
                        };
                    let y;
                    if (i.skipAnimation) return $t(n), jt(s, !1);
                    try {
                        let t;
                        t = I.arr(e) ? (async e => {
                            for (const t of e) await g(t)
                        })(e) : Promise.resolve(e(g, s.stop.bind(s))), await Promise.all([t.then(h), f]), y = jt(s.get(), !0, !1)
                    } catch (e) {
                        if (e instanceof Ft) y = e.result;
                        else {
                            if (!(e instanceof Tt)) throw e;
                            y = e.result
                        }
                    } finally {
                        r == n.asyncId && (n.asyncId = a, n.asyncTo = a ? c : void 0, n.promise = a ? l : void 0)
                    }
                    return I.fun(u) && o.batchedUpdates((() => {
                        u(y, s, s.item)
                    })), y
                })() : l
            }

            function $t(e, t) {
                O(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
            }
            var Ft = class extends Error {
                    constructor() {
                        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
                    }
                },
                Tt = class extends Error {
                    constructor() {
                        super("SkipAnimationSignal")
                    }
                },
                Qt = e => e instanceof Ut,
                Nt = 1,
                Ut = class extends Me {
                    constructor() {
                        super(...arguments), this.id = Nt++, this._priority = 0
                    }
                    get priority() {
                        return this._priority
                    }
                    set priority(e) {
                        this._priority != e && (this._priority = e, this._onPriorityChange(e))
                    }
                    get() {
                        const e = Ke(this);
                        return e && e.getValue()
                    }
                    to(...e) {
                        return i.to(this, e)
                    }
                    interpolate(...e) {
                        return De(`${Ne}The "interpolate" function is deprecated in v9 (use "to" instead)`), i.to(this, e)
                    }
                    toJSON() {
                        return this.get()
                    }
                    observerAdded(e) {
                        1 == e && this._attach()
                    }
                    observerRemoved(e) {
                        0 == e && this._detach()
                    }
                    _attach() {}
                    _detach() {}
                    _onChange(e, t = !1) {
                        Ie(this, {
                            type: "change",
                            parent: this,
                            value: e,
                            idle: t
                        })
                    }
                    _onPriorityChange(e) {
                        this.idle || D.sort(this), Ie(this, {
                            type: "priority",
                            parent: this,
                            priority: e
                        })
                    }
                },
                Dt = Symbol.for("SpringPhase"),
                Bt = e => (1 & e[Dt]) > 0,
                Lt = e => (2 & e[Dt]) > 0,
                Wt = e => (4 & e[Dt]) > 0,
                Gt = (e, t) => t ? e[Dt] |= 3 : e[Dt] &= -3,
                Zt = (e, t) => t ? e[Dt] |= 4 : e[Dt] &= -5,
                Yt = class extends Ut {
                    constructor(e, t) {
                        if (super(), this.animation = new class {
                                constructor() {
                                    this.changed = !1, this.values = Ot, this.toValues = null, this.fromValues = Ot, this.config = new class {
                                        constructor() {
                                            this.velocity = 0, Object.assign(this, At)
                                        }
                                    }, this.immediate = !1
                                }
                            }, this.defaultProps = {}, this._state = {
                                paused: !1,
                                delayed: !1,
                                pauseQueue: new Set,
                                resumeQueue: new Set,
                                timeouts: new Set
                            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !I.und(e) || !I.und(t)) {
                            const n = I.obj(e) ? { ...e
                            } : { ...t,
                                from: e
                            };
                            I.und(n.default) && (n.default = !0), this.start(n)
                        }
                    }
                    get idle() {
                        return !(Lt(this) || this._state.asyncTo) || Wt(this)
                    }
                    get goal() {
                        return xe(this.animation.to)
                    }
                    get velocity() {
                        const e = Ke(this);
                        return e instanceof st ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
                    }
                    get hasAnimated() {
                        return Bt(this)
                    }
                    get isAnimating() {
                        return Lt(this)
                    }
                    get isPaused() {
                        return Wt(this)
                    }
                    get isDelayed() {
                        return this._state.delayed
                    }
                    advance(e) {
                        let t = !0,
                            n = !1;
                        const s = this.animation;
                        let {
                            toValues: r
                        } = s;
                        const {
                            config: i
                        } = s, a = tt(s.to);
                        !a && ke(s.to) && (r = C(xe(s.to))), s.values.forEach(((o, u) => {
                            if (o.done) return;
                            const c = o.constructor == rt ? 1 : a ? a[u].lastPosition : r[u];
                            let l = s.immediate,
                                d = c;
                            if (!l) {
                                if (d = o.lastPosition, i.tension <= 0) return void(o.done = !0);
                                let t = o.elapsedTime += e;
                                const n = s.fromValues[u],
                                    r = null != o.v0 ? o.v0 : o.v0 = I.arr(i.velocity) ? i.velocity[u] : i.velocity;
                                let a;
                                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                                if (I.und(i.duration))
                                    if (i.decay) {
                                        const e = !0 === i.decay ? .998 : i.decay,
                                            s = Math.exp(-(1 - e) * t);
                                        d = n + r / (1 - e) * (1 - s), l = Math.abs(o.lastPosition - d) <= h, a = r * s
                                    } else {
                                        a = null == o.lastVelocity ? r : o.lastVelocity;
                                        const t = i.restVelocity || h / 10,
                                            s = i.clamp ? 0 : i.bounce,
                                            u = !I.und(s),
                                            p = n == c ? o.v0 > 0 : n < c;
                                        let f, m = !1;
                                        const g = 1,
                                            y = Math.ceil(e / g);
                                        for (let e = 0; e < y && (f = Math.abs(a) > t, f || (l = Math.abs(c - d) <= h, !l)); ++e) u && (m = d == c || d > c == p, m && (a = -a * s, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * g, d += a * g
                                    }
                                else {
                                    let s = 1;
                                    i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, o.durationProgress > 0 && (o.elapsedTime = i.duration * o.durationProgress, t = o.elapsedTime += e)), s = (i.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, o.durationProgress = s), d = n + i.easing(s) * (c - n), a = (d - o.lastPosition) / e, l = 1 == s
                                }
                                o.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), l = !0)
                            }
                            a && !a[u].done && (l = !1), l ? o.done = !0 : t = !1, o.setValue(d, i.round) && (n = !0)
                        }));
                        const o = Ke(this),
                            u = o.getValue();
                        if (t) {
                            const e = xe(s.to);
                            u === e && !n || i.decay ? n && i.decay && this._onChange(u) : (o.setValue(e), this._onChange(e)), this._stop()
                        } else n && this._onChange(u)
                    }
                    set(e) {
                        return o.batchedUpdates((() => {
                            this._stop(), this._focus(e), this._set(e)
                        })), this
                    }
                    pause() {
                        this._update({
                            pause: !0
                        })
                    }
                    resume() {
                        this._update({
                            pause: !1
                        })
                    }
                    finish() {
                        if (Lt(this)) {
                            const {
                                to: e,
                                config: t
                            } = this.animation;
                            o.batchedUpdates((() => {
                                this._onStart(), t.decay || this._set(e, !1), this._stop()
                            }))
                        }
                        return this
                    }
                    update(e) {
                        return (this.queue || (this.queue = [])).push(e), this
                    }
                    start(e, t) {
                        let n;
                        return I.und(e) ? (n = this.queue || [], this.queue = []) : n = [I.obj(e) ? e : { ...t,
                            to: e
                        }], Promise.all(n.map((e => this._update(e)))).then((e => Vt(this, e)))
                    }
                    stop(e) {
                        const {
                            to: t
                        } = this.animation;
                        return this._focus(this.get()), $t(this._state, e && this._lastCallId), o.batchedUpdates((() => this._stop(t, e))), this
                    }
                    reset() {
                        this._update({
                            reset: !0
                        })
                    }
                    eventObserved(e) {
                        "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
                    }
                    _prepareNode(e) {
                        const t = this.key || "";
                        let {
                            to: n,
                            from: s
                        } = e;
                        n = I.obj(n) ? n[t] : n, (null == n || It(n)) && (n = void 0), s = I.obj(s) ? s[t] : s, null == s && (s = void 0);
                        const r = {
                            to: n,
                            from: s
                        };
                        return Bt(this) || (e.reverse && ([n, s] = [s, n]), s = xe(s), I.und(s) ? Ke(this) || this._set(n) : this._set(s)), r
                    }
                    _update({ ...e
                    }, t) {
                        const {
                            key: n,
                            defaultProps: s
                        } = this;
                        e.default && Object.assign(s, bt(e, ((e, t) => /^on/.test(t) ? gt(e, n) : e))), nn(this, e, "onProps"), sn(this, "onProps", e, this);
                        const r = this._prepareNode(e);
                        if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                        const i = this._state;
                        return Rt(++this._lastCallId, {
                            key: n,
                            props: e,
                            defaultProps: s,
                            state: i,
                            actions: {
                                pause: () => {
                                    Wt(this) || (Zt(this, !0), E(i.pauseQueue), sn(this, "onPause", jt(this, Ht(this, this.animation.to)), this))
                                },
                                resume: () => {
                                    Wt(this) && (Zt(this, !1), Lt(this) && this._resume(), E(i.resumeQueue), sn(this, "onResume", jt(this, Ht(this, this.animation.to)), this))
                                },
                                start: this._merge.bind(this, r)
                            }
                        }).then((n => {
                            if (e.loop && n.finished && (!t || !n.noop)) {
                                const t = Jt(e);
                                if (t) return this._update(t, !0)
                            }
                            return n
                        }))
                    }
                    _merge(e, t, n) {
                        if (t.cancel) return this.stop(!0), n(qt(this));
                        const s = !I.und(e.to),
                            r = !I.und(e.from);
                        if (s || r) {
                            if (!(t.callId > this._lastToId)) return n(qt(this));
                            this._lastToId = t.callId
                        }
                        const {
                            key: i,
                            defaultProps: a,
                            animation: u
                        } = this, {
                            to: c,
                            from: l
                        } = u;
                        let {
                            to: d = c,
                            from: h = l
                        } = e;
                        !r || s || t.default && !I.und(d) || (d = h), t.reverse && ([d, h] = [h, d]);
                        const p = !M(h, l);
                        p && (u.from = h), h = xe(h);
                        const f = !M(d, c);
                        f && this._focus(d);
                        const m = It(t.to),
                            {
                                config: g
                            } = u,
                            {
                                decay: y,
                                velocity: v
                            } = g;
                        (s || r) && (g.velocity = 0), t.config && !m && function(e, t, n) {
                            n && (Ct(n = { ...n
                            }, t), t = { ...n,
                                ...t
                            }), Ct(e, t), Object.assign(e, t);
                            for (const t in At) null == e[t] && (e[t] = At[t]);
                            let {
                                frequency: s,
                                damping: r
                            } = e;
                            const {
                                mass: i
                            } = e;
                            I.und(s) || (s < .01 && (s = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * r * i / s)
                        }(g, ft(t.config, i), t.config !== a.config ? ft(a.config, i) : void 0);
                        let b = Ke(this);
                        if (!b || I.und(d)) return n(jt(this, !0));
                        const w = I.und(t.reset) ? r && !t.default : !I.und(h) && mt(t.reset, i),
                            _ = w ? h : this.get(),
                            k = xt(d),
                            x = I.num(k) || I.arr(k) || Le(k),
                            P = !m && (!x || mt(a.immediate || t.immediate, i));
                        if (f) {
                            const e = ct(d);
                            if (e !== b.constructor) {
                                if (!P) throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);
                                b = this._set(k)
                            }
                        }
                        const A = b.constructor;
                        let O = ke(d),
                            R = !1;
                        if (!O) {
                            const e = w || !Bt(this) && p;
                            (f || e) && (R = M(xt(_), k), O = !R), (M(u.immediate, P) || P) && M(g.decay, y) && M(g.velocity, v) || (O = !0)
                        }
                        if (R && Lt(this) && (u.changed && !w ? O = !0 : O || this._stop(c)), !m && ((O || ke(c)) && (u.values = b.getPayload(), u.toValues = ke(d) ? null : A == rt ? [1] : C(k)), u.immediate != P && (u.immediate = P, P || w || this._set(c)), O)) {
                            const {
                                onRest: e
                            } = u;
                            S(tn, (e => nn(this, t, e)));
                            const s = jt(this, Ht(this, c));
                            E(this._pendingCalls, s), this._pendingCalls.add(n), u.changed && o.batchedUpdates((() => {
                                u.changed = !w, e ? .(s, this), w ? ft(a.onRest, s) : u.onStart ? .(s, this)
                            }))
                        }
                        w && this._set(_), m ? n(zt(t.to, t, this._state, this)) : O ? this._start() : Lt(this) && !f ? this._pendingCalls.add(n) : n(Et(_))
                    }
                    _focus(e) {
                        const t = this.animation;
                        e !== t.to && (Pe(this) && this._detach(), t.to = e, Pe(this) && this._attach())
                    }
                    _attach() {
                        let e = 0;
                        const {
                            to: t
                        } = this.animation;
                        ke(t) && (Ae(t, this), Qt(t) && (e = t.priority + 1)), this.priority = e
                    }
                    _detach() {
                        const {
                            to: e
                        } = this.animation;
                        ke(e) && Ce(e, this)
                    }
                    _set(e, t = !0) {
                        const n = xe(e);
                        if (!I.und(n)) {
                            const e = Ke(this);
                            if (!e || !M(n, e.getValue())) {
                                const s = ct(n);
                                e && e.constructor == s ? e.setValue(n) : et(this, s.create(n)), e && o.batchedUpdates((() => {
                                    this._onChange(n, t)
                                }))
                            }
                        }
                        return Ke(this)
                    }
                    _onStart() {
                        const e = this.animation;
                        e.changed || (e.changed = !0, sn(this, "onStart", jt(this, Ht(this, e.to)), this))
                    }
                    _onChange(e, t) {
                        t || (this._onStart(), ft(this.animation.onChange, e, this)), ft(this.defaultProps.onChange, e, this), super._onChange(e, t)
                    }
                    _start() {
                        const e = this.animation;
                        Ke(this).reset(xe(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Lt(this) || (Gt(this, !0), Wt(this) || this._resume())
                    }
                    _resume() {
                        i.skipAnimation ? this.finish() : D.start(this)
                    }
                    _stop(e, t) {
                        if (Lt(this)) {
                            Gt(this, !1);
                            const n = this.animation;
                            S(n.values, (e => {
                                e.done = !0
                            })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ie(this, {
                                type: "idle",
                                parent: this
                            });
                            const s = t ? qt(this.get()) : jt(this.get(), Ht(this, e ? ? n.to));
                            E(this._pendingCalls, s), n.changed && (n.changed = !1, sn(this, "onRest", s, this))
                        }
                    }
                };

            function Ht(e, t) {
                const n = xt(t);
                return M(xt(e.get()), n)
            }

            function Jt(e, t = e.loop, n = e.to) {
                const s = ft(t);
                if (s) {
                    const r = !0 !== s && kt(s),
                        i = (r || e).reverse,
                        a = !r || r.reset;
                    return Xt({ ...e,
                        loop: t,
                        default: !1,
                        pause: void 0,
                        to: !i || It(n) ? n : void 0,
                        from: a ? e.from : void 0,
                        reset: a,
                        ...r
                    })
                }
            }

            function Xt(e) {
                const {
                    to: t,
                    from: n
                } = e = kt(e), s = new Set;
                return I.obj(t) && en(t, s), I.obj(n) && en(n, s), e.keys = s.size ? Array.from(s) : null, e
            }

            function Kt(e) {
                const t = Xt(e);
                return I.und(t.default) && (t.default = bt(t)), t
            }

            function en(e, t) {
                A(e, ((e, n) => null != e && t.add(n)))
            }
            var tn = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function nn(e, t, n) {
                e.animation[n] = t[n] !== yt(t, n) ? gt(t[n], e.key) : void 0
            }

            function sn(e, t, ...n) {
                e.animation[t] ? .(...n), e.defaultProps[t] ? .(...n)
            }
            var rn = ["onStart", "onChange", "onRest"],
                an = 1,
                on = class {
                    constructor(e, t) {
                        this.id = an++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                            paused: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._events = {
                            onStart: new Map,
                            onChange: new Map,
                            onRest: new Map
                        }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                            default: !0,
                            ...e
                        })
                    }
                    get idle() {
                        return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
                    }
                    get item() {
                        return this._item
                    }
                    set item(e) {
                        this._item = e
                    }
                    get() {
                        const e = {};
                        return this.each(((t, n) => e[n] = t.get())), e
                    }
                    set(e) {
                        for (const t in e) {
                            const n = e[t];
                            I.und(n) || this.springs[t].set(n)
                        }
                    }
                    update(e) {
                        return e && this.queue.push(Xt(e)), this
                    }
                    start(e) {
                        let {
                            queue: t
                        } = this;
                        return e ? t = C(e).map(Xt) : this.queue = [], this._flush ? this._flush(this, t) : (fn(this, t), un(this, t))
                    }
                    stop(e, t) {
                        if (e !== !!e && (t = e), t) {
                            const n = this.springs;
                            S(C(t), (t => n[t].stop(!!e)))
                        } else $t(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
                        return this
                    }
                    pause(e) {
                        if (I.und(e)) this.start({
                            pause: !0
                        });
                        else {
                            const t = this.springs;
                            S(C(e), (e => t[e].pause()))
                        }
                        return this
                    }
                    resume(e) {
                        if (I.und(e)) this.start({
                            pause: !1
                        });
                        else {
                            const t = this.springs;
                            S(C(e), (e => t[e].resume()))
                        }
                        return this
                    }
                    each(e) {
                        A(this.springs, e)
                    }
                    _onFrame() {
                        const {
                            onStart: e,
                            onChange: t,
                            onRest: n
                        } = this._events, s = this._active.size > 0, r = this._changed.size > 0;
                        (s && !this._started || r && !this._started) && (this._started = !0, O(e, (([e, t]) => {
                            t.value = this.get(), e(t, this, this._item)
                        })));
                        const i = !s && this._started,
                            a = r || i && n.size ? this.get() : null;
                        r && t.size && O(t, (([e, t]) => {
                            t.value = a, e(t, this, this._item)
                        })), i && (this._started = !1, O(n, (([e, t]) => {
                            t.value = a, e(t, this, this._item)
                        })))
                    }
                    eventObserved(e) {
                        if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                        else {
                            if ("idle" != e.type) return;
                            this._active.delete(e.parent)
                        }
                        o.onFrame(this._onFrame)
                    }
                };

            function un(e, t) {
                return Promise.all(t.map((t => cn(e, t)))).then((t => Vt(e, t)))
            }
            async function cn(e, t, n) {
                const {
                    keys: s,
                    to: r,
                    from: i,
                    loop: a,
                    onRest: u,
                    onResolve: c
                } = t, l = I.obj(t.default) && t.default;
                a && (t.loop = !1), !1 === r && (t.to = null), !1 === i && (t.from = null);
                const d = I.arr(r) || I.fun(r) ? r : void 0;
                d ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : S(rn, (n => {
                    const s = t[n];
                    if (I.fun(s)) {
                        const r = e._events[n];
                        t[n] = ({
                            finished: e,
                            cancelled: t
                        }) => {
                            const n = r.get(s);
                            n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : r.set(s, {
                                value: null,
                                finished: e || !1,
                                cancelled: t || !1
                            })
                        }, l && (l[n] = t[n])
                    }
                }));
                const h = e._state;
                t.pause === !h.paused ? (h.paused = t.pause, E(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
                const p = (s || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
                    f = !0 === t.cancel || !0 === yt(t, "cancel");
                (d || f && h.asyncId) && p.push(Rt(++e._lastAsyncId, {
                    props: t,
                    state: h,
                    actions: {
                        pause: P,
                        resume: P,
                        start(t, n) {
                            f ? ($t(h, e._lastAsyncId), n(qt(e))) : (t.onRest = u, n(zt(d, t, h, e)))
                        }
                    }
                })), h.paused && await new Promise((e => {
                    h.resumeQueue.add(e)
                }));
                const m = Vt(e, await Promise.all(p));
                if (a && m.finished && (!n || !m.noop)) {
                    const n = Jt(t, a, r);
                    if (n) return fn(e, [n]), cn(e, n, !0)
                }
                return c && o.batchedUpdates((() => c(m, e, e.item))), m
            }

            function ln(e, t) {
                const n = { ...e.springs
                };
                return t && S(C(t), (e => {
                    I.und(e.keys) && (e = Xt(e)), I.obj(e.to) || (e = { ...e,
                        to: void 0
                    }), pn(n, e, (e => hn(e)))
                })), dn(e, n), n
            }

            function dn(e, t) {
                A(t, ((t, n) => {
                    e.springs[n] || (e.springs[n] = t, Ae(t, e))
                }))
            }

            function hn(e, t) {
                const n = new Yt;
                return n.key = e, t && Ae(n, t), n
            }

            function pn(e, t, n) {
                t.keys && S(t.keys, (s => {
                    (e[s] || (e[s] = n(s)))._prepareNode(t)
                }))
            }

            function fn(e, t) {
                S(t, (t => {
                    pn(e.springs, t, (t => hn(t, e)))
                }))
            }
            var mn, gn, yn = ({
                    children: e,
                    ...t
                }) => {
                    const n = (0, s.useContext)(vn),
                        r = t.pause || !!n.pause,
                        i = t.immediate || !!n.immediate;
                    t = function(e, t) {
                        const [n] = (0, s.useState)((() => ({
                            inputs: t,
                            result: e()
                        }))), r = (0, s.useRef)(), i = r.current;
                        let a = i;
                        return a ? Boolean(t && a.inputs && function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }(t, a.inputs)) || (a = {
                            inputs: t,
                            result: e()
                        }) : a = n, (0, s.useEffect)((() => {
                            r.current = a, i == n && (n.inputs = n.result = void 0)
                        }), [a]), a.result
                    }((() => ({
                        pause: r,
                        immediate: i
                    })), [r, i]);
                    const {
                        Provider: a
                    } = vn;
                    return s.createElement(a, {
                        value: t
                    }, e)
                },
                vn = (mn = yn, gn = {}, Object.assign(mn, s.createContext(gn)), mn.Provider._context = mn, mn.Consumer._context = mn, mn);
            yn.Provider = vn.Provider, yn.Consumer = vn.Consumer;
            var bn = () => {
                const e = [],
                    t = function(t) {
                        Be(`${Ne}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                        const s = [];
                        return S(e, ((e, r) => {
                            if (I.und(t)) s.push(e.start());
                            else {
                                const i = n(t, e, r);
                                i && s.push(e.start(i))
                            }
                        })), s
                    };
                t.current = e, t.add = function(t) {
                    e.includes(t) || e.push(t)
                }, t.delete = function(t) {
                    const n = e.indexOf(t);
                    ~n && e.splice(n, 1)
                }, t.pause = function() {
                    return S(e, (e => e.pause(...arguments))), this
                }, t.resume = function() {
                    return S(e, (e => e.resume(...arguments))), this
                }, t.set = function(t) {
                    S(e, ((e, n) => {
                        const s = I.fun(t) ? t(n, e) : t;
                        s && e.set(s)
                    }))
                }, t.start = function(t) {
                    const n = [];
                    return S(e, ((e, s) => {
                        if (I.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r))
                        }
                    })), n
                }, t.stop = function() {
                    return S(e, (e => e.stop(...arguments))), this
                }, t.update = function(t) {
                    return S(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
                };
                const n = function(e, t, n) {
                    return I.fun(e) ? e(n, t) : e
                };
                return t._getProps = n, t
            };

            function wn(e, t) {
                const n = I.fun(e),
                    [
                        [r], i
                    ] = function(e, t, n) {
                        const r = I.fun(t) && t;
                        r && !n && (n = []);
                        const i = (0, s.useMemo)((() => r || 3 == arguments.length ? bn() : void 0), []),
                            a = (0, s.useRef)(0),
                            o = Ze(),
                            u = (0, s.useMemo)((() => ({
                                ctrls: [],
                                queue: [],
                                flush(e, t) {
                                    const n = ln(e, t);
                                    return a.current > 0 && !u.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? un(e, t) : new Promise((s => {
                                        dn(e, n), u.queue.push((() => {
                                            s(un(e, t))
                                        })), o()
                                    }))
                                }
                            })), []),
                            c = (0, s.useRef)([...u.ctrls]),
                            l = [],
                            d = Je(e) || 0;

                        function h(e, n) {
                            for (let s = e; s < n; s++) {
                                const e = c.current[s] || (c.current[s] = new on(null, u.flush)),
                                    n = r ? r(s, e) : t[s];
                                n && (l[s] = Kt(n))
                            }
                        }(0, s.useMemo)((() => {
                            S(c.current.slice(e, d), (e => {
                                Mt(e, i), e.stop(!0)
                            })), c.current.length = e, h(d, e)
                        }), [e]), (0, s.useMemo)((() => {
                            h(0, Math.min(d, e))
                        }), n);
                        const p = c.current.map(((e, t) => ln(e, l[t]))),
                            f = (0, s.useContext)(yn),
                            m = Je(f),
                            g = f !== m && Pt(f);
                        We((() => {
                            a.current++, u.ctrls = c.current;
                            const {
                                queue: e
                            } = u;
                            e.length && (u.queue = [], S(e, (e => e()))), S(c.current, ((e, t) => {
                                i ? .add(e), g && e.start({
                                    default: f
                                });
                                const n = l[t];
                                n && (St(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
                            }))
                        })), Ye((() => () => {
                            S(u.ctrls, (e => e.stop(!0)))
                        }));
                        const y = p.map((e => ({ ...e
                        })));
                        return i ? [y, i] : y
                    }(1, n ? e : [e], n ? t || [] : t);
                return n || 2 == arguments.length ? [r, i] : r
            }
            var _n = () => bn(),
                kn = () => (0, s.useState)(_n)[0];

            function xn(e, t, n) {
                const r = I.fun(t) && t,
                    {
                        reset: i,
                        sort: a,
                        trail: o = 0,
                        expires: u = !0,
                        exitBeforeEnter: c = !1,
                        onDestroyed: l,
                        ref: d,
                        config: h
                    } = r ? r() : t,
                    p = (0, s.useMemo)((() => r || 3 == arguments.length ? bn() : void 0), []),
                    f = C(e),
                    m = [],
                    g = (0, s.useRef)(null),
                    y = i ? null : g.current;
                We((() => {
                    g.current = m
                })), Ye((() => (S(m, (e => {
                    p ? .add(e.ctrl), e.ctrl.ref = p
                })), () => {
                    S(g.current, (e => {
                        e.expired && clearTimeout(e.expirationId), Mt(e.ctrl, p), e.ctrl.stop(!0)
                    }))
                })));
                const v = function(e, {
                        key: t,
                        keys: n = t
                    }, s) {
                        if (null === n) {
                            const t = new Set;
                            return e.map((e => {
                                const n = s && s.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                                return n ? (t.add(n), n.key) : Pn++
                            }))
                        }
                        return I.und(n) ? e : I.fun(n) ? e.map(n) : C(n)
                    }(f, r ? r() : t, y),
                    b = i && g.current || [];
                We((() => S(b, (({
                    ctrl: e,
                    item: t,
                    key: n
                }) => {
                    Mt(e, p), ft(l, t, n)
                }))));
                const w = [];
                if (y && S(y, ((e, t) => {
                        e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = v.indexOf(e.key)) && (m[t] = e)
                    })), S(f, ((e, t) => {
                        m[t] || (m[t] = {
                            key: v[t],
                            item: e,
                            phase: "mount",
                            ctrl: new on
                        }, m[t].ctrl.item = e)
                    })), w.length) {
                    let e = -1;
                    const {
                        leave: n
                    } = r ? r() : t;
                    S(w, ((t, s) => {
                        const r = y[s];
                        ~t ? (e = m.indexOf(r), m[e] = { ...r,
                            item: f[t]
                        }) : n && m.splice(++e, 0, r)
                    }))
                }
                I.fun(a) && m.sort(((e, t) => a(e.item, t.item)));
                let _ = -o;
                const k = Ze(),
                    x = bt(t),
                    P = new Map,
                    M = (0, s.useRef)(new Map),
                    A = (0, s.useRef)(!1);
                S(m, ((e, n) => {
                    const s = e.key,
                        i = e.phase,
                        a = r ? r() : t;
                    let l, p;
                    const f = ft(a.delay || 0, s);
                    if ("mount" == i) l = a.enter, p = "enter";
                    else {
                        const e = v.indexOf(s) < 0;
                        if ("leave" != i)
                            if (e) l = a.leave, p = "leave";
                            else {
                                if (!(l = a.update)) return;
                                p = "update"
                            }
                        else {
                            if (e) return;
                            l = a.enter, p = "enter"
                        }
                    }
                    if (l = ft(l, e.item, n), l = I.obj(l) ? kt(l) : {
                            to: l
                        }, !l.config) {
                        const t = h || x.config;
                        l.config = ft(t, e.item, n, p)
                    }
                    _ += o;
                    const m = { ...x,
                        delay: f + _,
                        ref: d,
                        immediate: a.immediate,
                        reset: !1,
                        ...l
                    };
                    if ("enter" == p && I.und(m.from)) {
                        const s = r ? r() : t,
                            i = I.und(s.initial) || y ? s.from : s.initial;
                        m.from = ft(i, e.item, n)
                    }
                    const {
                        onResolve: b
                    } = m;
                    m.onResolve = e => {
                        ft(b, e);
                        const t = g.current,
                            n = t.find((e => e.key === s));
                        if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                            const e = t.every((e => e.ctrl.idle));
                            if ("leave" == n.phase) {
                                const t = ft(u, n.item);
                                if (!1 !== t) {
                                    const s = !0 === t ? 0 : t;
                                    if (n.expired = !0, !e && s > 0) return void(s <= 2147483647 && (n.expirationId = setTimeout(k, s)))
                                }
                            }
                            e && t.some((e => e.expired)) && (M.current.delete(n), c && (A.current = !0), k())
                        }
                    };
                    const w = ln(e.ctrl, m);
                    "leave" === p && c ? M.current.set(e, {
                        phase: p,
                        springs: w,
                        payload: m
                    }) : P.set(e, {
                        phase: p,
                        springs: w,
                        payload: m
                    })
                }));
                const O = (0, s.useContext)(yn),
                    R = Je(O),
                    V = O !== R && Pt(O);
                We((() => {
                    V && S(m, (e => {
                        e.ctrl.start({
                            default: O
                        })
                    }))
                }), [O]), S(P, ((e, t) => {
                    if (M.current.size) {
                        const e = m.findIndex((e => e.key === t.key));
                        m.splice(e, 1)
                    }
                })), We((() => {
                    S(M.current.size ? M.current : P, (({
                        phase: e,
                        payload: t
                    }, n) => {
                        const {
                            ctrl: s
                        } = n;
                        n.phase = e, p ? .add(s), V && "enter" == e && s.start({
                            default: O
                        }), t && (St(s, t.ref), !s.ref && !p || A.current ? (s.start(t), A.current && (A.current = !1)) : s.update(t))
                    }))
                }), i ? void 0 : n);
                const E = e => s.createElement(s.Fragment, null, m.map(((t, n) => {
                    const {
                        springs: r
                    } = P.get(t) || t.ctrl, i = e({ ...r
                    }, t.item, t, n);
                    return i && i.type ? s.createElement(i.type, { ...i.props,
                        key: I.str(t.key) || I.num(t.key) ? t.key : t.ctrl.id,
                        ref: i.ref
                    }) : i
                })));
                return p ? [E, p] : E
            }
            var Pn = 1,
                In = {
                    any: 0,
                    all: 1
                };

            function Mn(e, t) {
                const [n, r] = (0, s.useState)(!1), i = (0, s.useRef)(), a = I.fun(e) && e, o = a ? a() : {}, {
                    to: u = {},
                    from: c = {},
                    ...l
                } = o, d = a ? t : e, [h, p] = wn((() => ({
                    from: c,
                    ...l
                })), []);
                return We((() => {
                    const e = i.current,
                        {
                            root: t,
                            once: s,
                            amount: a = "any",
                            ...o
                        } = d ? ? {};
                    if (!e || s && n || "undefined" === typeof IntersectionObserver) return;
                    const l = new WeakMap,
                        h = new IntersectionObserver((e => {
                            e.forEach((e => {
                                const t = l.get(e.target);
                                if (e.isIntersecting !== Boolean(t))
                                    if (e.isIntersecting) {
                                        const t = (u && p.start(u), r(!0), s ? void 0 : () => {
                                            c && p.start(c), r(!1)
                                        });
                                        I.fun(t) ? l.set(e.target, t) : h.unobserve(e.target)
                                    } else t && (t(), l.delete(e.target))
                            }))
                        }), {
                            root: t && t.current || void 0,
                            threshold: "number" === typeof a || Array.isArray(a) ? a : In[a],
                            ...o
                        });
                    return h.observe(e), () => h.unobserve(e)
                }), [d]), a ? [i, h] : [i, n]
            }
            var Sn = class extends Ut {
                constructor(e, t) {
                    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = he(...t);
                    const n = this._get(),
                        s = ct(n);
                    et(this, s.create(n))
                }
                advance(e) {
                    const t = this._get();
                    M(t, this.get()) || (Ke(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Cn(this._active) && On(this)
                }
                _get() {
                    const e = I.arr(this.source) ? this.source.map(xe) : C(xe(this.source));
                    return this.calc(...e)
                }
                _start() {
                    this.idle && !Cn(this._active) && (this.idle = !1, S(tt(this), (e => {
                        e.done = !1
                    })), i.skipAnimation ? (o.batchedUpdates((() => this.advance())), On(this)) : D.start(this))
                }
                _attach() {
                    let e = 1;
                    S(C(this.source), (t => {
                        ke(t) && Ae(t, this), Qt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                    })), this.priority = e, this._start()
                }
                _detach() {
                    S(C(this.source), (e => {
                        ke(e) && Ce(e, this)
                    })), this._active.clear(), On(this)
                }
                eventObserved(e) {
                    "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = C(this.source).reduce(((e, t) => Math.max(e, (Qt(t) ? t.priority : 0) + 1)), 0))
                }
            };

            function An(e) {
                return !1 !== e.idle
            }

            function Cn(e) {
                return !e.size || Array.from(e).every(An)
            }

            function On(e) {
                e.idle || (e.idle = !0, S(tt(e), (e => {
                    e.done = !0
                })), Ie(e, {
                    type: "idle",
                    parent: e
                }))
            }
            i.assign({
                createStringInterpolator: Qe,
                to: (e, t) => new Sn(e, t)
            }), D.advance;
            var Rn = n(73935),
                Vn = /^--/;

            function En(e, t) {
                return null == t || "boolean" === typeof t || "" === t ? "" : "number" !== typeof t || 0 === t || Vn.test(e) || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px"
            }
            var jn = {},
                qn = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                zn = ["Webkit", "Ms", "Moz", "O"];
            qn = Object.keys(qn).reduce(((e, t) => (zn.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), qn);
            var $n = /^(matrix|translate|scale|rotate|skew)/,
                Fn = /^(translate)/,
                Tn = /^(rotate|skew)/,
                Qn = (e, t) => I.num(e) && 0 !== e ? e + t : e,
                Nn = (e, t) => I.arr(e) ? e.every((e => Nn(e, t))) : I.num(e) ? e === t : parseFloat(e) === t,
                Un = class extends at {
                    constructor({
                        x: e,
                        y: t,
                        z: n,
                        ...s
                    }) {
                        const r = [],
                            i = [];
                        (e || t || n) && (r.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Qn(e,"px"))).join(",")})`, Nn(e, 0)]))), A(s, ((e, t) => {
                            if ("transform" === t) r.push([e || ""]), i.push((e => [e, "" === e]));
                            else if ($n.test(t)) {
                                if (delete s[t], I.und(e)) return;
                                const n = Fn.test(t) ? "px" : Tn.test(t) ? "deg" : "";
                                r.push(C(e)), i.push("rotate3d" === t ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${Qn(r,n)})`, Nn(r, 0)] : e => [`${t}(${e.map((e=>Qn(e,n))).join(",")})`, Nn(e, t.startsWith("scale") ? 1 : 0)])
                            }
                        })), r.length && (s.transform = new Dn(r, i)), super(s)
                    }
                },
                Dn = class extends Me {
                    constructor(e, t) {
                        super(), this.inputs = e, this.transforms = t, this._value = null
                    }
                    get() {
                        return this._value || (this._value = this._get())
                    }
                    _get() {
                        let e = "",
                            t = !0;
                        return S(this.inputs, ((n, s) => {
                            const r = xe(n[0]),
                                [i, a] = this.transforms[s](I.arr(r) ? r : n.map(xe));
                            e += " " + i, t = t && a
                        })), t ? "none" : e
                    }
                    observerAdded(e) {
                        1 == e && S(this.inputs, (e => S(e, (e => ke(e) && Ae(e, this)))))
                    }
                    observerRemoved(e) {
                        0 == e && S(this.inputs, (e => S(e, (e => ke(e) && Ce(e, this)))))
                    }
                    eventObserved(e) {
                        "change" == e.type && (this._value = null), Ie(this, e)
                    }
                };
            i.assign({
                batchedUpdates: Rn.unstable_batchedUpdates,
                createStringInterpolator: Qe,
                colors: {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                }
            });
            var Bn = ((e, {
                    applyAnimatedValues: t = (() => !1),
                    createAnimatedStyle: n = (e => new at(e)),
                    getComponentProps: s = (e => e)
                } = {}) => {
                    const r = {
                            applyAnimatedValues: t,
                            createAnimatedStyle: n,
                            getComponentProps: s
                        },
                        i = e => {
                            const t = pt(e) || "Anonymous";
                            return (e = I.str(e) ? i[e] || (i[e] = lt(e, r)) : e[ht] || (e[ht] = lt(e, r))).displayName = `Animated(${t})`, e
                        };
                    return A(e, ((t, n) => {
                        I.arr(e) && (n = pt(t)), i[n] = i(t)
                    })), {
                        animated: i
                    }
                })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                    applyAnimatedValues: function(e, t) {
                        if (!e.nodeType || !e.setAttribute) return !1;
                        const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                            {
                                style: s,
                                children: r,
                                scrollTop: i,
                                scrollLeft: a,
                                viewBox: o,
                                ...u
                            } = t,
                            c = Object.values(u),
                            l = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : jn[t] || (jn[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
                        void 0 !== r && (e.textContent = r);
                        for (const t in s)
                            if (s.hasOwnProperty(t)) {
                                const n = En(t, s[t]);
                                Vn.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
                            }
                        l.forEach(((t, n) => {
                            e.setAttribute(t, c[n])
                        })), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== o && e.setAttribute("viewBox", o)
                    },
                    createAnimatedStyle: e => new Un(e),
                    getComponentProps: ({
                        scrollTop: e,
                        scrollLeft: t,
                        ...n
                    }) => n
                }),
                Ln = Bn.animated
        }
    }
]);