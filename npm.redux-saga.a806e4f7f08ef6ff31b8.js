"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [1749], {
        20852: (n, t, e) => {
            e.d(t, {
                $: () => fn,
                A: () => K,
                B: () => A,
                C: () => Z,
                D: () => C,
                E: () => f,
                F: () => X,
                G: () => J,
                H: () => j,
                I: () => $,
                J: () => Y,
                K: () => nn,
                L: () => sn,
                M: () => pn,
                N: () => un,
                O: () => yn,
                P: () => U,
                Q: () => I,
                R: () => P,
                S: () => G,
                T: () => R,
                U: () => Sn,
                V: () => an,
                W: () => Q,
                X: () => tn,
                Y: () => en,
                Z: () => rn,
                _: () => on,
                a: () => H,
                a0: () => ln,
                a1: () => vn,
                a2: () => dn,
                a3: () => hn,
                a4: () => An,
                a5: () => gn,
                a6: () => En,
                a7: () => Cn,
                b: () => D,
                d: () => F,
                e: () => M,
                f: () => z,
                g: () => B,
                h: () => V,
                i: () => g,
                j: () => m,
                k: () => u,
                l: () => L,
                m: () => E,
                n: () => x,
                o: () => d,
                p: () => l,
                q: () => y,
                r: () => v,
                s: () => N,
                t: () => i,
                u: () => s,
                v: () => b,
                y: () => T,
                z: () => S
            });
            var r = e(75365),
                o = e(87462),
                a = e(43077),
                c = e(49387),
                u = function(n) {
                    return function() {
                        return true
                    }
                }(),
                i = function() {},
                f = function(n) {
                    return n
                };
            "function" === typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
            var l = function(n, t) {
                    (0, o.Z)(n, t), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((function(e) {
                        n[e] = t[e]
                    }))
                },
                s = function(n, t) {
                    var e;
                    return (e = []).concat.apply(e, t.map(n))
                };

            function v(n, t) {
                var e = n.indexOf(t);
                e >= 0 && n.splice(e, 1)
            }

            function d(n) {
                var t = !1;
                return function() {
                    t || (t = !0, n())
                }
            }
            var p = function(n) {
                    throw n
                },
                h = function(n) {
                    return {
                        value: n,
                        done: !0
                    }
                };

            function y(n, t, e) {
                void 0 === t && (t = p), void 0 === e && (e = "iterator");
                var r = {
                    meta: {
                        name: e
                    },
                    next: n,
                    throw: t,
                    return: h,
                    isSagaIterator: !0
                };
                return "undefined" !== typeof Symbol && (r[Symbol.iterator] = function() {
                    return r
                }), r
            }

            function A(n, t) {
                var e = t.sagaStack;
                console.error(n), console.error(e)
            }
            var g = function(n) {
                    return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + n + "\n")
                },
                E = function(n) {
                    return Array.apply(null, new Array(n))
                },
                C = function(n) {
                    return function(t) {
                        return n(Object.defineProperty(t, r.SAGA_ACTION, {
                            value: !0
                        }))
                    }
                },
                S = function(n) {
                    return n === r.TERMINATE
                },
                T = function(n) {
                    return n === r.TASK_CANCEL
                },
                N = function(n) {
                    return S(n) || T(n)
                };

            function L(n, t) {
                var e, r = Object.keys(n),
                    o = r.length,
                    c = 0,
                    u = (0, a.IX)(n) ? E(o) : {},
                    f = {};
                return r.forEach((function(n) {
                    var r = function(r, a) {
                        e || (a || N(r) ? (t.cancel(), t(r, a)) : (u[n] = r, ++c === o && (e = !0, t(u))))
                    };
                    r.cancel = i, f[n] = r
                })), t.cancel = function() {
                    e || (e = !0, r.forEach((function(n) {
                        return f[n].cancel()
                    })))
                }, f
            }

            function m(n) {
                return {
                    name: n.name || "anonymous",
                    location: b(n)
                }
            }

            function b(n) {
                return n[r.SAGA_LOCATION]
            }
            var k = 1,
                O = 3,
                _ = 4,
                w = {
                    isEmpty: u,
                    put: i,
                    take: i
                };

            function q(n, t) {
                void 0 === n && (n = 10);
                var e = new Array(n),
                    r = 0,
                    o = 0,
                    a = 0,
                    c = function(t) {
                        e[o] = t, o = (o + 1) % n, r++
                    },
                    u = function() {
                        if (0 != r) {
                            var t = e[a];
                            return e[a] = null, r--, a = (a + 1) % n, t
                        }
                    },
                    i = function() {
                        for (var n = []; r;) n.push(u());
                        return n
                    };
                return {
                    isEmpty: function() {
                        return 0 == r
                    },
                    put: function(u) {
                        var f;
                        if (r < n) c(u);
                        else switch (t) {
                            case k:
                                throw new Error("Channel's Buffer overflow!");
                            case O:
                                e[o] = u, a = o = (o + 1) % n;
                                break;
                            case _:
                                f = 2 * n, e = i(), r = e.length, o = e.length, a = 0, e.length = f, n = f, c(u)
                        }
                    },
                    take: u,
                    flush: i
                }
            }
            var x = function() {
                    return w
                },
                I = function(n) {
                    return q(n, O)
                },
                M = function(n) {
                    return q(n, _)
                },
                j = Object.freeze({
                    __proto__: null,
                    none: x,
                    fixed: function(n) {
                        return q(n, k)
                    },
                    dropping: function(n) {
                        return q(n, 2)
                    },
                    sliding: I,
                    expanding: M
                }),
                R = "TAKE",
                U = "PUT",
                K = "ALL",
                P = "RACE",
                Z = "CALL",
                H = "CPS",
                X = "FORK",
                Y = "JOIN",
                D = "CANCEL",
                G = "SELECT",
                F = "ACTION_CHANNEL",
                z = "CANCELLED",
                B = "FLUSH",
                J = "GET_CONTEXT",
                V = "SET_CONTEXT",
                Q = Object.freeze({
                    __proto__: null,
                    TAKE: R,
                    PUT: U,
                    ALL: K,
                    RACE: P,
                    CALL: Z,
                    CPS: H,
                    FORK: X,
                    JOIN: Y,
                    CANCEL: D,
                    SELECT: G,
                    ACTION_CHANNEL: F,
                    CANCELLED: z,
                    FLUSH: B,
                    GET_CONTEXT: J,
                    SET_CONTEXT: V
                }),
                W = function(n, t) {
                    var e;
                    return (e = {})[r.IO] = !0, e.combinator = !1, e.type = n, e.payload = t, e
                },
                $ = function(n) {
                    return W(X, (0, o.Z)({}, n.payload, {
                        detached: !0
                    }))
                };

            function nn(n, t) {
                return void 0 === n && (n = "*"), (0, a.uj)(n) ? ((0, a.d5)(t) && console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"), W(R, {
                    pattern: n
                })) : (0, a.Om)(n) && (0, a.d5)(t) && (0, a.uj)(t) ? W(R, {
                    channel: n,
                    pattern: t
                }) : (0, a.CE)(n) ? ((0, a.d5)(t) && console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."), W(R, {
                    channel: n
                })) : void 0
            }
            var tn = function() {
                var n = nn.apply(void 0, arguments);
                return n.payload.maybe = !0, n
            };

            function en(n, t) {
                return (0, a.sR)(t) && (t = n, n = void 0), W(U, {
                    channel: n,
                    action: t
                })
            }
            var rn = function() {
                var n = en.apply(void 0, arguments);
                return n.payload.resolve = !0, n
            };

            function on(n) {
                var t = W(K, n);
                return t.combinator = !0, t
            }

            function an(n) {
                var t = W(P, n);
                return t.combinator = !0, t
            }

            function cn(n, t) {
                var e, r = null;
                return (0, a.Yl)(n) ? e = n : ((0, a.IX)(n) ? (r = n[0], e = n[1]) : (r = n.context, e = n.fn), r && (0, a.Z_)(e) && (0, a.Yl)(r[e]) && (e = r[e])), {
                    context: r,
                    fn: e,
                    args: t
                }
            }

            function un(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return W(Z, cn(n, e))
            }

            function fn(n, t, e) {
                return void 0 === e && (e = []), W(Z, cn([n, t], e))
            }

            function ln(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return W(H, cn(n, e))
            }

            function sn(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return W(X, cn(n, e))
            }

            function vn(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return $(sn.apply(void 0, [n].concat(e)))
            }

            function dn(n) {
                return W(Y, n)
            }

            function pn(n) {
                return void 0 === n && (n = r.SELF_CANCELLATION), W(D, n)
            }

            function hn(n) {
                void 0 === n && (n = f);
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return W(G, {
                    selector: n,
                    args: e
                })
            }

            function yn(n, t) {
                return W(F, {
                    pattern: n,
                    buffer: t
                })
            }

            function An() {
                return W(z, {})
            }

            function gn(n) {
                return W(B, n)
            }

            function En(n) {
                return W(J, n)
            }

            function Cn(n) {
                return W(V, n)
            }
            var Sn = un.bind(null, c.Z)
        },
        77835: (n, t, e) => {
            e.r(t), e.d(t, {
                CANCEL: () => r.CANCEL,
                END: () => L,
                SAGA_LOCATION: () => r.SAGA_LOCATION,
                buffers: () => u.H,
                channel: () => b,
                default: () => Q,
                detach: () => u.I,
                eventChannel: () => k,
                isEnd: () => m,
                multicastChannel: () => O,
                runSaga: () => V,
                stdChannel: () => _
            });
            var r = e(75365),
                o = e(87462),
                a = e(63366),
                c = e(43077),
                u = e(20852),
                i = e(23190);
            const f = function() {
                var n = {};
                return n.promise = new Promise((function(t, e) {
                    n.resolve = t, n.reject = e
                })), n
            };
            e(49387);
            var l = [],
                s = 0;

            function v(n) {
                try {
                    h(), n()
                } finally {
                    y()
                }
            }

            function d(n) {
                l.push(n), s || (h(), A())
            }

            function p(n) {
                try {
                    return h(), n()
                } finally {
                    A()
                }
            }

            function h() {
                s++
            }

            function y() {
                s--
            }

            function A() {
                var n;
                for (y(); !s && void 0 !== (n = l.shift());) v(n)
            }
            var g = function(n) {
                    return function(t) {
                        return n.some((function(n) {
                            return N(n)(t)
                        }))
                    }
                },
                E = function(n) {
                    return function(t) {
                        return n(t)
                    }
                },
                C = function(n) {
                    return function(t) {
                        return t.type === String(n)
                    }
                },
                S = function(n) {
                    return function(t) {
                        return t.type === n
                    }
                },
                T = function() {
                    return u.k
                };

            function N(n) {
                var t = "*" === n ? T : (0, c.Z_)(n) ? C : (0, c.IX)(n) ? g : (0, c.eR)(n) ? C : (0, c.Yl)(n) ? E : (0, c.NA)(n) ? S : null;
                if (null === t) throw new Error("invalid pattern: " + n);
                return t(n)
            }
            var L = {
                    type: r.CHANNEL_END_TYPE
                },
                m = function(n) {
                    return n && n.type === r.CHANNEL_END_TYPE
                };

            function b(n) {
                void 0 === n && (n = (0, u.e)());
                var t = !1,
                    e = [];
                return {
                    take: function(r) {
                        t && n.isEmpty() ? r(L) : n.isEmpty() ? (e.push(r), r.cancel = function() {
                            (0, u.r)(e, r)
                        }) : r(n.take())
                    },
                    put: function(r) {
                        if (!t) {
                            if (0 === e.length) return n.put(r);
                            e.shift()(r)
                        }
                    },
                    flush: function(e) {
                        t && n.isEmpty() ? e(L) : e(n.flush())
                    },
                    close: function() {
                        if (!t) {
                            t = !0;
                            var n = e;
                            e = [];
                            for (var r = 0, o = n.length; r < o; r++)(0, n[r])(L)
                        }
                    }
                }
            }

            function k(n, t) {
                void 0 === t && (t = (0, u.n)());
                var e, r = !1,
                    o = b(t),
                    a = function() {
                        r || (r = !0, (0, c.Yl)(e) && e(), o.close())
                    };
                return e = n((function(n) {
                    m(n) ? a() : o.put(n)
                })), e = (0, u.o)(e), r && e(), {
                    take: o.take,
                    flush: o.flush,
                    close: a
                }
            }

            function O() {
                var n, t = !1,
                    e = [],
                    o = e,
                    a = function() {
                        o === e && (o = e.slice())
                    },
                    c = function() {
                        t = !0;
                        var n = e = o;
                        o = [], n.forEach((function(n) {
                            n(L)
                        }))
                    };
                return (n = {})[r.MULTICAST] = !0, n.put = function(n) {
                    if (!t)
                        if (m(n)) c();
                        else
                            for (var a = e = o, u = 0, i = a.length; u < i; u++) {
                                var f = a[u];
                                f[r.MATCH](n) && (f.cancel(), f(n))
                            }
                }, n.take = function(n, e) {
                    void 0 === e && (e = T), t ? n(L) : (n[r.MATCH] = e, a(), o.push(n), n.cancel = (0, u.o)((function() {
                        a(), (0, u.r)(o, n)
                    })))
                }, n.close = c, n
            }

            function _() {
                var n = O(),
                    t = n.put;
                return n.put = function(n) {
                    n[r.SAGA_ACTION] ? t(n) : d((function() {
                        t(n)
                    }))
                }, n
            }
            var w = 0,
                q = 1,
                x = 2,
                I = 3;

            function M(n, t) {
                var e = n[r.CANCEL];
                (0, c.Yl)(e) && (t.cancel = e), n.then(t, (function(n) {
                    t(n, !0)
                }))
            }
            var j, R = 0,
                U = function() {
                    return ++R
                };

            function K(n) {
                n.isRunning() && n.cancel()
            }
            var P = ((j = {})[u.T] = function(n, t, e) {
                var o = t.channel,
                    a = void 0 === o ? n.channel : o,
                    u = t.pattern,
                    i = t.maybe,
                    f = function(n) {
                        n instanceof Error ? e(n, !0) : !m(n) || i ? e(n) : e(r.TERMINATE)
                    };
                try {
                    a.take(f, (0, c.d5)(u) ? N(u) : null)
                } catch (n) {
                    return void e(n, !0)
                }
                e.cancel = f.cancel
            }, j[u.P] = function(n, t, e) {
                var r = t.channel,
                    o = t.action,
                    a = t.resolve;
                d((function() {
                    var t;
                    try {
                        t = (r ? r.put : n.dispatch)(o)
                    } catch (n) {
                        return void e(n, !0)
                    }
                    a && (0, c.MC)(t) ? M(t, e) : e(t)
                }))
            }, j[u.A] = function(n, t, e, r) {
                var o = r.digestEffect,
                    a = R,
                    i = Object.keys(t);
                if (0 !== i.length) {
                    var f = (0, u.l)(t, e);
                    i.forEach((function(n) {
                        o(t[n], a, f[n], n)
                    }))
                } else e((0, c.IX)(t) ? [] : {})
            }, j[u.R] = function(n, t, e, r) {
                var o = r.digestEffect,
                    a = R,
                    i = Object.keys(t),
                    f = (0, c.IX)(t) ? (0, u.m)(i.length) : {},
                    l = {},
                    s = !1;
                i.forEach((function(n) {
                    var t = function(t, r) {
                        s || (r || (0, u.s)(t) ? (e.cancel(), e(t, r)) : (e.cancel(), s = !0, f[n] = t, e(f)))
                    };
                    t.cancel = u.t, l[n] = t
                })), e.cancel = function() {
                    s || (s = !0, i.forEach((function(n) {
                        return l[n].cancel()
                    })))
                }, i.forEach((function(n) {
                    s || o(t[n], a, l[n], n)
                }))
            }, j[u.C] = function(n, t, e, r) {
                var o = t.context,
                    a = t.fn,
                    i = t.args,
                    f = r.task;
                try {
                    var l = a.apply(o, i);
                    if ((0, c.MC)(l)) return void M(l, e);
                    if ((0, c.hZ)(l)) return void J(n, l, f.context, R, (0, u.j)(a), !1, e);
                    e(l)
                } catch (n) {
                    e(n, !0)
                }
            }, j[u.a] = function(n, t, e) {
                var r = t.context,
                    o = t.fn,
                    a = t.args;
                try {
                    var u = function(n, t) {
                        (0, c.sR)(n) ? e(t): e(n, !0)
                    };
                    o.apply(r, a.concat(u)), u.cancel && (e.cancel = u.cancel)
                } catch (n) {
                    e(n, !0)
                }
            }, j[u.F] = function(n, t, e, r) {
                var o = t.context,
                    a = t.fn,
                    i = t.args,
                    f = t.detached,
                    l = r.task,
                    s = function(n) {
                        var t = n.context,
                            e = n.fn,
                            r = n.args;
                        try {
                            var o = e.apply(t, r);
                            if ((0, c.hZ)(o)) return o;
                            var a = !1;
                            return (0, u.q)((function(n) {
                                return a ? {
                                    value: n,
                                    done: !0
                                } : (a = !0, {
                                    value: o,
                                    done: !(0, c.MC)(o)
                                })
                            }))
                        } catch (n) {
                            return (0, u.q)((function() {
                                throw n
                            }))
                        }
                    }({
                        context: o,
                        fn: a,
                        args: i
                    }),
                    v = function(n, t) {
                        return n.isSagaIterator ? {
                            name: n.meta.name
                        } : (0, u.j)(t)
                    }(s, a);
                p((function() {
                    var t = J(n, s, l.context, R, v, f, void 0);
                    f ? e(t) : t.isRunning() ? (l.queue.addTask(t), e(t)) : t.isAborted() ? l.queue.abort(t.error()) : e(t)
                }))
            }, j[u.J] = function(n, t, e, r) {
                var o = r.task,
                    a = function(n, t) {
                        if (n.isRunning()) {
                            var e = {
                                task: o,
                                cb: t
                            };
                            t.cancel = function() {
                                n.isRunning() && (0, u.r)(n.joiners, e)
                            }, n.joiners.push(e)
                        } else n.isAborted() ? t(n.error(), !0) : t(n.result())
                    };
                if ((0, c.IX)(t)) {
                    if (0 === t.length) return void e([]);
                    var i = (0, u.l)(t, e);
                    t.forEach((function(n, t) {
                        a(n, i[t])
                    }))
                } else a(t, e)
            }, j[u.b] = function(n, t, e, o) {
                var a = o.task;
                t === r.SELF_CANCELLATION ? K(a) : (0, c.IX)(t) ? t.forEach(K) : K(t), e()
            }, j[u.S] = function(n, t, e) {
                var r = t.selector,
                    o = t.args;
                try {
                    e(r.apply(void 0, [n.getState()].concat(o)))
                } catch (n) {
                    e(n, !0)
                }
            }, j[u.d] = function(n, t, e) {
                var r = t.pattern,
                    o = b(t.buffer),
                    a = N(r),
                    c = function t(e) {
                        m(e) || n.channel.take(t, a), o.put(e)
                    },
                    u = o.close;
                o.close = function() {
                    c.cancel(), u()
                }, n.channel.take(c, a), e(o)
            }, j[u.f] = function(n, t, e, r) {
                e(r.task.isCancelled())
            }, j[u.g] = function(n, t, e) {
                t.flush(e)
            }, j[u.G] = function(n, t, e, r) {
                e(r.task.context[t])
            }, j[u.h] = function(n, t, e, r) {
                var o = r.task;
                (0, u.p)(o.context, t), e()
            }, j);

            function Z(n, t) {
                return n + "?" + t
            }

            function H(n) {
                var t = n.name,
                    e = n.location;
                return e ? t + "  " + Z(e.fileName, e.lineNumber) : t
            }

            function X(n) {
                var t = (0, u.u)((function(n) {
                    return n.cancelledTasks
                }), n);
                return t.length ? ["Tasks cancelled due to error:"].concat(t).join("\n") : ""
            }
            var Y = null,
                D = [],
                G = function(n) {
                    n.crashedEffect = Y, D.push(n)
                },
                F = function() {
                    Y = null, D.length = 0
                },
                z = function(n) {
                    Y = n
                },
                B = function() {
                    var n, t, e = D[0],
                        r = D.slice(1),
                        o = e.crashedEffect ? (n = e.crashedEffect, (t = (0, u.v)(n)) ? t.code + "  " + Z(t.fileName, t.lineNumber) : "") : null;
                    return ["The above error occurred in task " + H(e.meta) + (o ? " \n when executing effect " + o : "")].concat(r.map((function(n) {
                        return "    created by " + H(n.meta)
                    })), [X(D)]).join("\n")
                };

            function J(n, t, e, o, a, i, l) {
                var s = n.finalizeRunEffect((function(t, e, o) {
                    (0, c.MC)(t) ? M(t, o): (0, c.hZ)(t) ? J(n, t, d.context, e, a, !1, o) : t && t[r.IO] ? (0, P[t.type])(n, t.payload, o, p) : o(t)
                }));
                h.cancel = u.t;
                var v = {
                        meta: a,
                        cancel: function() {
                            v.status === w && (v.status = q, h(r.TASK_CANCEL))
                        },
                        status: w
                    },
                    d = function(n, t, e, o, a, c, i) {
                        var l;
                        void 0 === i && (i = u.t);
                        var s, v, d = w,
                            p = null,
                            h = [],
                            y = Object.create(e),
                            A = function(n, t, e) {
                                var r, o = [],
                                    a = !1;

                                function c(n) {
                                    t(), f(), e(n, !0)
                                }

                                function i(t) {
                                    o.push(t), t.cont = function(i, f) {
                                        a || ((0, u.r)(o, t), t.cont = u.t, f ? c(i) : (t === n && (r = i), o.length || (a = !0, e(r))))
                                    }
                                }

                                function f() {
                                    a || (a = !0, o.forEach((function(n) {
                                        n.cont = u.t, n.cancel()
                                    })), o = [])
                                }
                                return i(n), {
                                    addTask: i,
                                    cancelAll: f,
                                    abort: c,
                                    getTasks: function() {
                                        return o
                                    }
                                }
                            }(t, (function() {
                                h.push.apply(h, A.getTasks().map((function(n) {
                                    return n.meta.name
                                })))
                            }), g);

                        function g(t, e) {
                            if (e) {
                                if (d = x, G({
                                        meta: a,
                                        cancelledTasks: h
                                    }), E.isRoot) {
                                    var o = B();
                                    F(), n.onError(t, {
                                        sagaStack: o
                                    })
                                }
                                v = t, p && p.reject(t)
                            } else t === r.TASK_CANCEL ? d = q : d !== q && (d = I), s = t, p && p.resolve(t);
                            E.cont(t, e), E.joiners.forEach((function(n) {
                                n.cb(t, e)
                            })), E.joiners = null
                        }
                        var E = ((l = {})[r.TASK] = !0, l.id = o, l.meta = a, l.isRoot = c, l.context = y, l.joiners = [], l.queue = A, l.cancel = function() {
                            d === w && (d = q, A.cancelAll(), g(r.TASK_CANCEL, !1))
                        }, l.cont = i, l.end = g, l.setContext = function(n) {
                            (0, u.p)(y, n)
                        }, l.toPromise = function() {
                            return p || (p = f(), d === x ? p.reject(v) : d !== w && p.resolve(s)), p.promise
                        }, l.isRunning = function() {
                            return d === w
                        }, l.isCancelled = function() {
                            return d === q || d === w && t.status === q
                        }, l.isAborted = function() {
                            return d === x
                        }, l.result = function() {
                            return s
                        }, l.error = function() {
                            return v
                        }, l);
                        return E
                    }(n, v, e, o, a, i, l),
                    p = {
                        task: d,
                        digestEffect: y
                    };
                return l && (l.cancel = d.cancel), h(), d;

                function h(n, e) {
                    try {
                        var a;
                        e ? (a = t.throw(n), F()) : (0, u.y)(n) ? (v.status = q, h.cancel(), a = (0, c.Yl)(t.return) ? t.return(r.TASK_CANCEL) : {
                            done: !0,
                            value: r.TASK_CANCEL
                        }) : a = (0, u.z)(n) ? (0, c.Yl)(t.return) ? t.return() : {
                            done: !0
                        } : t.next(n), a.done ? (v.status !== q && (v.status = I), v.cont(a.value)) : y(a.value, o, h)
                    } catch (n) {
                        if (v.status === q) throw n;
                        v.status = x, v.cont(n, !0)
                    }
                }

                function y(t, e, r, o) {
                    void 0 === o && (o = "");
                    var a, c = U();

                    function i(e, o) {
                        a || (a = !0, r.cancel = u.t, n.sagaMonitor && (o ? n.sagaMonitor.effectRejected(c, e) : n.sagaMonitor.effectResolved(c, e)), o && z(t), r(e, o))
                    }
                    n.sagaMonitor && n.sagaMonitor.effectTriggered({
                        effectId: c,
                        parentEffectId: e,
                        label: o,
                        effect: t
                    }), i.cancel = u.t, r.cancel = function() {
                        a || (a = !0, i.cancel(), i.cancel = u.t, n.sagaMonitor && n.sagaMonitor.effectCancelled(c))
                    }, s(t, c, i)
                }
            }

            function V(n, t) {
                for (var e = n.channel, r = void 0 === e ? _() : e, o = n.dispatch, a = n.getState, c = n.context, f = void 0 === c ? {} : c, l = n.sagaMonitor, s = n.effectMiddlewares, v = n.onError, d = void 0 === v ? u.B : v, h = arguments.length, y = new Array(h > 2 ? h - 2 : 0), A = 2; A < h; A++) y[A - 2] = arguments[A];
                var g, E = t.apply(void 0, y),
                    C = U();
                if (l && (l.rootSagaStarted = l.rootSagaStarted || u.t, l.effectTriggered = l.effectTriggered || u.t, l.effectResolved = l.effectResolved || u.t, l.effectRejected = l.effectRejected || u.t, l.effectCancelled = l.effectCancelled || u.t, l.actionDispatched = l.actionDispatched || u.t, l.rootSagaStarted({
                        effectId: C,
                        saga: t,
                        args: y
                    })), s) {
                    var S = i.qC.apply(void 0, s);
                    g = function(n) {
                        return function(t, e, r) {
                            return S((function(t) {
                                return n(t, e, r)
                            }))(t)
                        }
                    }
                } else g = u.E;
                var T = {
                    channel: r,
                    dispatch: (0, u.D)(o),
                    getState: a,
                    sagaMonitor: l,
                    onError: d,
                    finalizeRunEffect: g
                };
                return p((function() {
                    var n = J(T, E, f, C, (0, u.j)(t), !0, void 0);
                    return l && l.effectResolved(C, n), n
                }))
            }
            const Q = function(n) {
                var t, e = void 0 === n ? {} : n,
                    r = e.context,
                    c = void 0 === r ? {} : r,
                    i = e.channel,
                    f = void 0 === i ? _() : i,
                    l = e.sagaMonitor,
                    s = (0, a.Z)(e, ["context", "channel", "sagaMonitor"]);

                function v(n) {
                    var e = n.getState,
                        r = n.dispatch;
                    return t = V.bind(null, (0, o.Z)({}, s, {
                            context: c,
                            channel: f,
                            dispatch: r,
                            getState: e,
                            sagaMonitor: l
                        })),
                        function(n) {
                            return function(t) {
                                l && l.actionDispatched && l.actionDispatched(t);
                                var e = n(t);
                                return f.put(t), e
                            }
                        }
                }
                return v.run = function() {
                    return t.apply(void 0, arguments)
                }, v.setContext = function(n) {
                    (0, u.p)(c, n)
                }, v
            }
        },
        19864: (n, t, e) => {
            e.r(t), e.d(t, {
                actionChannel: () => o.O,
                all: () => o._,
                apply: () => o.$,
                call: () => o.N,
                cancel: () => o.M,
                cancelled: () => o.a4,
                cps: () => o.a0,
                debounce: () => C,
                delay: () => o.U,
                effectTypes: () => o.W,
                flush: () => o.a5,
                fork: () => o.L,
                getContext: () => o.a6,
                join: () => o.a2,
                put: () => o.Y,
                putResolve: () => o.Z,
                race: () => o.V,
                retry: () => E,
                select: () => o.a3,
                setContext: () => o.a7,
                spawn: () => o.a1,
                take: () => o.K,
                takeEvery: () => h,
                takeLatest: () => y,
                takeLeading: () => A,
                takeMaybe: () => o.X,
                throttle: () => g
            }), e(75365);
            var r = e(43077),
                o = e(20852),
                a = (e(49387), function(n) {
                    return {
                        done: !0,
                        value: n
                    }
                }),
                c = {};

            function u(n) {
                return (0, r.CE)(n) ? "channel" : (0, r.eR)(n) ? String(n) : (0, r.Yl)(n) ? n.name : String(n)
            }

            function i(n, t, e) {
                var r, u, i, f = t;

                function l(t, e) {
                    if (f === c) return a(t);
                    if (e && !u) throw f = c, e;
                    r && r(t);
                    var o = e ? n[u](e) : n[f]();
                    return f = o.nextState, i = o.effect, r = o.stateUpdater, u = o.errorState, f === c ? a(t) : i
                }
                return (0, o.q)(l, (function(n) {
                    return l(null, n)
                }), e)
            }

            function f(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                var c, f = {
                        done: !1,
                        value: (0, o.K)(n)
                    },
                    l = function(n) {
                        return c = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: f,
                            stateUpdater: l
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q1",
                            effect: (n = c, {
                                done: !1,
                                value: o.L.apply(void 0, [t].concat(r, [n]))
                            })
                        };
                        var n
                    }
                }, "q1", "takeEvery(" + u(n) + ", " + t.name + ")")
            }

            function l(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                var c, f, l = {
                        done: !1,
                        value: (0, o.K)(n)
                    },
                    s = function(n) {
                        return {
                            done: !1,
                            value: o.L.apply(void 0, [t].concat(r, [n]))
                        }
                    },
                    v = function(n) {
                        return {
                            done: !1,
                            value: (0, o.M)(n)
                        }
                    },
                    d = function(n) {
                        return c = n
                    },
                    p = function(n) {
                        return f = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: l,
                            stateUpdater: p
                        }
                    },
                    q2: function() {
                        return c ? {
                            nextState: "q3",
                            effect: v(c)
                        } : {
                            nextState: "q1",
                            effect: s(f),
                            stateUpdater: d
                        }
                    },
                    q3: function() {
                        return {
                            nextState: "q1",
                            effect: s(f),
                            stateUpdater: d
                        }
                    }
                }, "q1", "takeLatest(" + u(n) + ", " + t.name + ")")
            }

            function s(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                var c, f = {
                        done: !1,
                        value: (0, o.K)(n)
                    },
                    l = function(n) {
                        return c = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: f,
                            stateUpdater: l
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q1",
                            effect: (n = c, {
                                done: !1,
                                value: o.N.apply(void 0, [t].concat(r, [n]))
                            })
                        };
                        var n
                    }
                }, "q1", "takeLeading(" + u(n) + ", " + t.name + ")")
            }

            function v(n, t, e) {
                for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) a[c - 3] = arguments[c];
                var f, l, s = {
                        done: !1,
                        value: (0, o.O)(t, (0, o.Q)(1))
                    },
                    v = {
                        done: !1,
                        value: (0, o.U)(n)
                    },
                    d = function(n) {
                        return f = n
                    },
                    p = function(n) {
                        return l = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: s,
                            stateUpdater: p
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q3",
                            effect: {
                                done: !1,
                                value: (0, o.K)(l)
                            },
                            stateUpdater: d
                        }
                    },
                    q3: function() {
                        return {
                            nextState: "q4",
                            effect: (n = f, {
                                done: !1,
                                value: o.L.apply(void 0, [e].concat(a, [n]))
                            })
                        };
                        var n
                    },
                    q4: function() {
                        return {
                            nextState: "q2",
                            effect: v
                        }
                    }
                }, "q1", "throttle(" + u(t) + ", " + e.name + ")")
            }

            function d(n, t, e) {
                for (var r = n, a = arguments.length, u = new Array(a > 3 ? a - 3 : 0), f = 3; f < a; f++) u[f - 3] = arguments[f];
                var l = {
                        done: !1,
                        value: o.N.apply(void 0, [e].concat(u))
                    },
                    s = {
                        done: !1,
                        value: (0, o.U)(t)
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: l,
                            errorState: "q10"
                        }
                    },
                    q2: function() {
                        return {
                            nextState: c
                        }
                    },
                    q10: function(n) {
                        if ((r -= 1) <= 0) throw n;
                        return {
                            nextState: "q1",
                            effect: s
                        }
                    }
                }, "q1", "retry(" + e.name + ")")
            }

            function p(n, t, e) {
                for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) a[c - 3] = arguments[c];
                var f, l, s = {
                        done: !1,
                        value: (0, o.K)(t)
                    },
                    v = {
                        done: !1,
                        value: (0, o.V)({
                            action: (0, o.K)(t),
                            debounce: (0, o.U)(n)
                        })
                    },
                    d = function(n) {
                        return f = n
                    },
                    p = function(n) {
                        return l = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: s,
                            stateUpdater: d
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q3",
                            effect: v,
                            stateUpdater: p
                        }
                    },
                    q3: function() {
                        return l.debounce ? {
                            nextState: "q1",
                            effect: (t = f, {
                                done: !1,
                                value: o.L.apply(void 0, [e].concat(a, [t]))
                            })
                        } : {
                            nextState: "q2",
                            effect: (n = l.action, {
                                done: !1,
                                value: n
                            }),
                            stateUpdater: d
                        };
                        var n, t
                    }
                }, "q1", "debounce(" + u(t) + ", " + e.name + ")")
            }

            function h(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                return o.L.apply(void 0, [f, n, t].concat(r))
            }

            function y(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                return o.L.apply(void 0, [l, n, t].concat(r))
            }

            function A(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) r[a - 2] = arguments[a];
                return o.L.apply(void 0, [s, n, t].concat(r))
            }

            function g(n, t, e) {
                for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) a[c - 3] = arguments[c];
                return o.L.apply(void 0, [v, n, t, e].concat(a))
            }

            function E(n, t, e) {
                for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) a[c - 3] = arguments[c];
                return o.N.apply(void 0, [d, n, t, e].concat(a))
            }

            function C(n, t, e) {
                for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) a[c - 3] = arguments[c];
                return o.L.apply(void 0, [p, n, t, e].concat(a))
            }
        },
        23190: (n, t, e) => {
            function r(n) {
                return n && "object" === typeof n && "default" in n ? n : {
                    default: n
                }
            }
            e(42122);
            "function" === typeof Symbol && Symbol.observable;
            var o = function() {
                return Math.random().toString(36).substring(7).split("").join(".")
            };
            o(), o();
            t.qC = function() {
                for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                return 0 === t.length ? function(n) {
                    return n
                } : 1 === t.length ? t[0] : t.reduce((function(n, t) {
                    return function() {
                        return n(t.apply(void 0, arguments))
                    }
                }))
            }
        },
        49387: (n, t, e) => {
            e.d(t, {
                Z: () => o
            });
            var r = e(75365);
            const o = function(n, t) {
                var e;
                void 0 === t && (t = !0);
                var o = new Promise((function(r) {
                    e = setTimeout(r, Math.min(2147483647, n), t)
                }));
                return o[r.CANCEL] = function() {
                    clearTimeout(e)
                }, o
            }
        },
        43077: (n, t, e) => {
            var r = e(75365),
                o = function(n) {
                    return "function" === typeof n
                },
                a = function(n) {
                    return "string" === typeof n
                },
                c = Array.isArray,
                u = function(n) {
                    return n && o(n.take) && o(n.close)
                },
                i = function(n) {
                    return Boolean(n) && "function" === typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                };
            t.IX = c, t.CE = u, t.Yl = o, t.hZ = function(n) {
                return n && o(n.next) && o(n.throw)
            }, t.Om = function(n) {
                return u(n) && n[r.MULTICAST]
            }, t.d5 = function(n) {
                return null !== n && void 0 !== n
            }, t.uj = function n(t) {
                return t && (a(t) || i(t) || o(t) || c(t) && t.every(n))
            }, t.MC = function(n) {
                return n && o(n.then)
            }, t.Z_ = a, t.eR = function(n) {
                return o(n) && n.hasOwnProperty("toString")
            }, t.NA = i, t.sR = function(n) {
                return null === n || void 0 === n
            }
        },
        75365: (n, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var e = function(n) {
                    return "@@redux-saga/" + n
                },
                r = e("CANCEL_PROMISE"),
                o = e("CHANNEL_END"),
                a = e("IO"),
                c = e("MATCH"),
                u = e("MULTICAST"),
                i = e("SAGA_ACTION"),
                f = e("SELF_CANCELLATION"),
                l = e("TASK"),
                s = e("TASK_CANCEL"),
                v = e("TERMINATE"),
                d = e("LOCATION");
            t.CANCEL = r, t.CHANNEL_END_TYPE = o, t.IO = a, t.MATCH = c, t.MULTICAST = u, t.SAGA_ACTION = i, t.SAGA_LOCATION = d, t.SELF_CANCELLATION = f, t.TASK = l, t.TASK_CANCEL = s, t.TERMINATE = v
        },
        51523: (n, t, e) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o = e(77835),
                a = (r = o) && "object" === typeof r && "default" in r ? r.default : r;
            Object.keys(o).forEach((function(n) {
                t[n] = o[n]
            })), t.default = a
        },
        73375: (n, t, e) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = e(19864);
            Object.keys(r).forEach((function(n) {
                t[n] = r[n]
            }))
        }
    }
]);