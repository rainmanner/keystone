"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [303], {
        57927: (e, t) => {
            function r() {
                return r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }, r.apply(this, arguments)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let a = function(e) {
                return e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE", e
            }({});
            const o = "popstate";

            function n(e, t) {
                if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
            }

            function i(e, t) {
                if (!e) {
                    "undefined" !== typeof console && console.warn(t);
                    try {
                        throw new Error(t)
                    } catch (e) {}
                }
            }

            function s(e, t) {
                return {
                    usr: e.state,
                    key: e.key,
                    idx: t
                }
            }

            function l(e, t, a, o) {
                return void 0 === a && (a = null), r({
                    pathname: "string" === typeof e ? e : e.pathname,
                    search: "",
                    hash: ""
                }, "string" === typeof t ? d(t) : t, {
                    state: a,
                    key: t && t.key || o || Math.random().toString(36).substr(2, 8)
                })
            }

            function c(e) {
                let {
                    pathname: t = "/",
                    search: r = "",
                    hash: a = ""
                } = e;
                return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
            }

            function d(e) {
                let t = {};
                if (e) {
                    let r = e.indexOf("#");
                    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
                    let a = e.indexOf("?");
                    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
                }
                return t
            }

            function u(e, t, i, d) {
                void 0 === d && (d = {});
                let {
                    window: u = document.defaultView,
                    v5Compat: h = !1
                } = d, f = u.history, p = a.Pop, m = null, y = v();

                function v() {
                    return (f.state || {
                        idx: null
                    }).idx
                }

                function g() {
                    p = a.Pop;
                    let e = v(),
                        t = null == e ? null : e - y;
                    y = e, m && m({
                        action: p,
                        location: w.location,
                        delta: t
                    })
                }

                function b(e) {
                    let t = "null" !== u.location.origin ? u.location.origin : u.location.href,
                        r = "string" === typeof e ? e : c(e);
                    return n(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
                }
                null == y && (y = 0, f.replaceState(r({}, f.state, {
                    idx: y
                }), ""));
                let w = {
                    get action() {
                        return p
                    },
                    get location() {
                        return e(u, f)
                    },
                    listen(e) {
                        if (m) throw new Error("A history only accepts one active listener");
                        return u.addEventListener(o, g), m = e, () => {
                            u.removeEventListener(o, g), m = null
                        }
                    },
                    createHref: e => t(u, e),
                    createURL: b,
                    encodeLocation(e) {
                        let t = b(e);
                        return {
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash
                        }
                    },
                    push: function(e, t) {
                        p = a.Push;
                        let r = l(w.location, e, t);
                        i && i(r, e), y = v() + 1;
                        let o = s(r, y),
                            n = w.createHref(r);
                        try {
                            f.pushState(o, "", n)
                        } catch (e) {
                            if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                            u.location.assign(n)
                        }
                        h && m && m({
                            action: p,
                            location: w.location,
                            delta: 1
                        })
                    },
                    replace: function(e, t) {
                        p = a.Replace;
                        let r = l(w.location, e, t);
                        i && i(r, e), y = v();
                        let o = s(r, y),
                            n = w.createHref(r);
                        f.replaceState(o, "", n), h && m && m({
                            action: p,
                            location: w.location,
                            delta: 0
                        })
                    },
                    go: e => f.go(e)
                };
                return w
            }
            let h = function(e) {
                return e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error", e
            }({});
            const f = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

            function p(e, t, a, o) {
                return void 0 === a && (a = []), void 0 === o && (o = {}), e.map(((e, i) => {
                    let s = [...a, i],
                        l = "string" === typeof e.id ? e.id : s.join("-");
                    if (n(!0 !== e.index || !e.children, "Cannot specify children on an index route"), n(!o[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
                            return !0 === e.index
                        }(e)) {
                        let a = r({}, e, t(e), {
                            id: l
                        });
                        return o[l] = a, a
                    } {
                        let a = r({}, e, t(e), {
                            id: l,
                            children: void 0
                        });
                        return o[l] = a, e.children && (a.children = p(e.children, t, s, o)), a
                    }
                }))
            }

            function m(e, t, r) {
                void 0 === r && (r = "/");
                let a = j(("string" === typeof t ? d(t) : t).pathname || "/", r);
                if (null == a) return null;
                let o = v(e);
                ! function(e) {
                    e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                        return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                }(o);
                let n = null;
                for (let e = 0; null == n && e < o.length; ++e) n = L(o[e], M(a));
                return n
            }

            function y(e, t) {
                let {
                    route: r,
                    pathname: a,
                    params: o
                } = e;
                return {
                    id: r.id,
                    pathname: a,
                    params: o,
                    data: t[r.id],
                    handle: r.handle
                }
            }

            function v(e, t, r, a) {
                void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
                let o = (e, o, i) => {
                    let s = {
                        relativePath: void 0 === i ? e.path || "" : i,
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: o,
                        route: e
                    };
                    s.relativePath.startsWith("/") && (n(s.relativePath.startsWith(a), 'Absolute route path "' + s.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), s.relativePath = s.relativePath.slice(a.length));
                    let l = _([a, s.relativePath]),
                        c = r.concat(s);
                    e.children && e.children.length > 0 && (n(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), v(e.children, t, c, l)), (null != e.path || e.index) && t.push({
                        path: l,
                        score: P(l, e.index),
                        routesMeta: c
                    })
                };
                return e.forEach(((e, t) => {
                    var r;
                    if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                        for (let r of g(e.path)) o(e, t, r);
                    else o(e, t)
                })), t
            }

            function g(e) {
                let t = e.split("/");
                if (0 === t.length) return [];
                let [r, ...a] = t, o = r.endsWith("?"), n = r.replace(/\?$/, "");
                if (0 === a.length) return o ? [n, ""] : [n];
                let i = g(a.join("/")),
                    s = [];
                return s.push(...i.map((e => "" === e ? n : [n, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
            }
            const b = /^:\w+$/,
                w = 3,
                D = 2,
                E = 1,
                R = 10,
                S = -2,
                x = e => "*" === e;

            function P(e, t) {
                let r = e.split("/"),
                    a = r.length;
                return r.some(x) && (a += S), t && (a += D), r.filter((e => !x(e))).reduce(((e, t) => e + (b.test(t) ? w : "" === t ? E : R)), a)
            }

            function L(e, t) {
                let {
                    routesMeta: r
                } = e, a = {}, o = "/", n = [];
                for (let e = 0; e < r.length; ++e) {
                    let i = r[e],
                        s = e === r.length - 1,
                        l = "/" === o ? t : t.slice(o.length) || "/",
                        c = A({
                            path: i.relativePath,
                            caseSensitive: i.caseSensitive,
                            end: s
                        }, l);
                    if (!c) return null;
                    Object.assign(a, c.params);
                    let d = i.route;
                    n.push({
                        params: a,
                        pathname: _([o, c.pathname]),
                        pathnameBase: I(_([o, c.pathnameBase])),
                        route: d
                    }), "/" !== c.pathnameBase && (o = _([o, c.pathnameBase]))
                }
                return n
            }

            function A(e, t) {
                "string" === typeof e && (e = {
                    path: e,
                    caseSensitive: !1,
                    end: !0
                });
                let [r, a] = function(e, t, r) {
                    void 0 === t && (t = !1), void 0 === r && (r = !0), i("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                    let a = [],
                        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, ((e, t, r) => (a.push({
                            paramName: t,
                            isOptional: null != r
                        }), r ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                    return e.endsWith("*") ? (a.push({
                        paramName: "*"
                    }), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), a]
                }(e.path, e.caseSensitive, e.end), o = t.match(r);
                if (!o) return null;
                let n = o[0],
                    s = n.replace(/(.)\/+$/, "$1"),
                    l = o.slice(1);
                return {
                    params: a.reduce(((e, t, r) => {
                        let {
                            paramName: a,
                            isOptional: o
                        } = t;
                        if ("*" === a) {
                            let e = l[r] || "";
                            s = n.slice(0, n.length - e.length).replace(/(.)\/+$/, "$1")
                        }
                        const c = l[r];
                        return e[a] = o && !c ? void 0 : function(e, t) {
                            try {
                                return decodeURIComponent(e)
                            } catch (r) {
                                return i(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
                            }
                        }(c || "", a), e
                    }), {}),
                    pathname: n,
                    pathnameBase: s,
                    pattern: e
                }
            }

            function M(e) {
                try {
                    return decodeURI(e)
                } catch (t) {
                    return i(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                }
            }

            function j(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    a = e.charAt(r);
                return a && "/" !== a ? null : e.slice(r) || "/"
            }

            function k(e, t) {
                void 0 === t && (t = "/");
                let {
                    pathname: r,
                    search: a = "",
                    hash: o = ""
                } = "string" === typeof e ? d(e) : e, n = r ? r.startsWith("/") ? r : function(e, t) {
                    let r = t.replace(/\/+$/, "").split("/");
                    return e.split("/").forEach((e => {
                        ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                    })), r.length > 1 ? r.join("/") : "/"
                }(r, t) : t;
                return {
                    pathname: n,
                    search: z(a),
                    hash: q(o)
                }
            }

            function C(e, t, r, a) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
            }

            function T(e) {
                return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
            }

            function U(e) {
                return T(e).map(((t, r) => r === e.length - 1 ? t.pathname : t.pathnameBase))
            }

            function O(e, t, a, o) {
                let i;
                void 0 === o && (o = !1), "string" === typeof e ? i = d(e) : (i = r({}, e), n(!i.pathname || !i.pathname.includes("?"), C("?", "pathname", "search", i)), n(!i.pathname || !i.pathname.includes("#"), C("#", "pathname", "hash", i)), n(!i.search || !i.search.includes("#"), C("#", "search", "hash", i)));
                let s, l = "" === e || "" === i.pathname,
                    c = l ? "/" : i.pathname;
                if (null == c) s = a;
                else if (o) {
                    let e = t[t.length - 1].replace(/^\//, "").split("/");
                    if (c.startsWith("..")) {
                        let t = c.split("/");
                        for (;
                            ".." === t[0];) t.shift(), e.pop();
                        i.pathname = t.join("/")
                    }
                    s = "/" + e.join("/")
                } else {
                    let e = t.length - 1;
                    if (c.startsWith("..")) {
                        let t = c.split("/");
                        for (;
                            ".." === t[0];) t.shift(), e -= 1;
                        i.pathname = t.join("/")
                    }
                    s = e >= 0 ? t[e] : "/"
                }
                let u = k(i, s),
                    h = c && "/" !== c && c.endsWith("/"),
                    f = (l || "." === c) && a.endsWith("/");
                return u.pathname.endsWith("/") || !h && !f || (u.pathname += "/"), u
            }
            const _ = e => e.join("/").replace(/\/\/+/g, "/"),
                I = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                z = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                q = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
            class H extends Error {}
            class N {
                constructor(e, t) {
                    let r;
                    this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], n(e && "object" === typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
                    let a = () => r(new H("Deferred data aborted"));
                    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", a), this.controller.signal.addEventListener("abort", a), this.data = Object.entries(e).reduce(((e, t) => {
                        let [r, a] = t;
                        return Object.assign(e, {
                            [r]: this.trackPromise(r, a)
                        })
                    }), {}), this.done && this.unlistenAbortSignal(), this.init = t
                }
                trackPromise(e, t) {
                    if (!(t instanceof Promise)) return t;
                    this.deferredKeys.push(e), this.pendingKeysSet.add(e);
                    let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
                    return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
                        get: () => !0
                    }), r
                }
                onSettle(e, t, r, a) {
                    if (this.controller.signal.aborted && r instanceof H) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
                        get: () => r
                    }), Promise.reject(r);
                    if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === a) {
                        let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
                        return Object.defineProperty(e, "_error", {
                            get: () => r
                        }), this.emit(!1, t), Promise.reject(r)
                    }
                    return void 0 === a ? (Object.defineProperty(e, "_error", {
                        get: () => r
                    }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
                        get: () => a
                    }), this.emit(!1, t), a)
                }
                emit(e, t) {
                    this.subscribers.forEach((r => r(e, t)))
                }
                subscribe(e) {
                    return this.subscribers.add(e), () => this.subscribers.delete(e)
                }
                cancel() {
                    this.controller.abort(), this.pendingKeysSet.forEach(((e, t) => this.pendingKeysSet.delete(t))), this.emit(!0)
                }
                async resolveData(e) {
                    let t = !1;
                    if (!this.done) {
                        let r = () => this.cancel();
                        e.addEventListener("abort", r), t = await new Promise((t => {
                            this.subscribe((a => {
                                e.removeEventListener("abort", r), (a || this.done) && t(a)
                            }))
                        }))
                    }
                    return t
                }
                get done() {
                    return 0 === this.pendingKeysSet.size
                }
                get unwrappedData() {
                    return n(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
                        let [r, a] = t;
                        return Object.assign(e, {
                            [r]: B(a)
                        })
                    }), {})
                }
                get pendingKeys() {
                    return Array.from(this.pendingKeysSet)
                }
            }

            function B(e) {
                if (! function(e) {
                        return e instanceof Promise && !0 === e._tracked
                    }(e)) return e;
                if (e._error) throw e._error;
                return e._data
            }
            const F = function(e, t) {
                void 0 === t && (t = 302);
                let a = t;
                "number" === typeof a ? a = {
                    status: a
                } : "undefined" === typeof a.status && (a.status = 302);
                let o = new Headers(a.headers);
                return o.set("Location", e), new Response(null, r({}, a, {
                    headers: o
                }))
            };
            class W {
                constructor(e, t, r, a) {
                    void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
                }
            }

            function $(e) {
                return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
            }
            const K = ["post", "put", "patch", "delete"],
                J = new Set(K),
                Y = ["get", ...K],
                V = new Set(Y),
                X = new Set([301, 302, 303, 307, 308]),
                G = new Set([307, 308]),
                Q = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                Z = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                ee = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0
                },
                te = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                re = e => ({
                    hasErrorBoundary: Boolean(e.hasErrorBoundary)
                }),
                ae = "remix-router-transitions",
                oe = Symbol("deferred");

            function ne(e, t, r, a, o, n, i) {
                let s, l;
                if (n) {
                    s = [];
                    for (let e of t)
                        if (s.push(e), e.route.id === n) {
                            l = e;
                            break
                        }
                } else s = t, l = t[t.length - 1];
                let d = O(o || ".", U(s), j(e.pathname, r) || e.pathname, "path" === i);
                return null == o && (d.search = e.search, d.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || Te(d.search) || (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), a && "/" !== r && (d.pathname = "/" === d.pathname ? r : _([r, d.pathname])), c(d)
            }

            function ie(e, t, r, a) {
                if (!a || ! function(e) {
                        return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
                    }(a)) return {
                    path: r
                };
                if (a.formMethod && !Me(a.formMethod)) return {
                    path: r,
                    error: De(405, {
                        method: a.formMethod
                    })
                };
                let o, i, s = () => ({
                        path: r,
                        error: De(400, {
                            type: "invalid-body"
                        })
                    }),
                    l = a.formMethod || "get",
                    u = e ? l.toUpperCase() : l.toLowerCase(),
                    h = Re(r);
                if (void 0 !== a.body) {
                    if ("text/plain" === a.formEncType) {
                        if (!je(u)) return s();
                        let e = "string" === typeof a.body ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? Array.from(a.body.entries()).reduce(((e, t) => {
                            let [r, a] = t;
                            return "" + e + r + "=" + a + "\n"
                        }), "") : String(a.body);
                        return {
                            path: r,
                            submission: {
                                formMethod: u,
                                formAction: h,
                                formEncType: a.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e
                            }
                        }
                    }
                    if ("application/json" === a.formEncType) {
                        if (!je(u)) return s();
                        try {
                            let e = "string" === typeof a.body ? JSON.parse(a.body) : a.body;
                            return {
                                path: r,
                                submission: {
                                    formMethod: u,
                                    formAction: h,
                                    formEncType: a.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0
                                }
                            }
                        } catch (e) {
                            return s()
                        }
                    }
                }
                if (n("function" === typeof FormData, "FormData is not available in this environment"), a.formData) o = pe(a.formData), i = a.formData;
                else if (a.body instanceof FormData) o = pe(a.body), i = a.body;
                else if (a.body instanceof URLSearchParams) o = a.body, i = me(o);
                else if (null == a.body) o = new URLSearchParams, i = new FormData;
                else try {
                    o = new URLSearchParams(a.body), i = me(o)
                } catch (e) {
                    return s()
                }
                let f = {
                    formMethod: u,
                    formAction: h,
                    formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
                    formData: i,
                    json: void 0,
                    text: void 0
                };
                if (je(f.formMethod)) return {
                    path: r,
                    submission: f
                };
                let p = d(r);
                return t && p.search && Te(p.search) && o.append("index", ""), p.search = "?" + o, {
                    path: c(p),
                    submission: f
                }
            }

            function se(e, t) {
                let r = e;
                if (t) {
                    let a = e.findIndex((e => e.route.id === t));
                    a >= 0 && (r = e.slice(0, a))
                }
                return r
            }

            function le(e, t, a, o, n, i, s, l, c, d, u, h, f, p, y) {
                let v = y ? Object.values(y)[0] : p ? Object.values(p)[0] : void 0,
                    g = e.createURL(t.location),
                    b = e.createURL(n),
                    w = y ? Object.keys(y)[0] : void 0,
                    D = se(a, w).filter(((e, a) => {
                        if (e.route.lazy) return !0;
                        if (null == e.route.loader) return !1;
                        if (function(e, t, r) {
                                let a = !t || r.route.id !== t.route.id,
                                    o = void 0 === e[r.route.id];
                                return a || o
                            }(t.loaderData, t.matches[a], e) || s.some((t => t === e.route.id))) return !0;
                        let n = t.matches[a],
                            l = e;
                        return de(e, r({
                            currentUrl: g,
                            currentParams: n.params,
                            nextUrl: b,
                            nextParams: l.params
                        }, o, {
                            actionResult: v,
                            defaultShouldRevalidate: i || g.pathname + g.search === b.pathname + b.search || g.search !== b.search || ce(n, l)
                        }))
                    })),
                    E = [];
                return d.forEach(((e, n) => {
                    if (!a.some((t => t.route.id === e.routeId)) || c.has(n)) return;
                    let s = m(h, e.path, f);
                    if (!s) return void E.push({
                        key: n,
                        routeId: e.routeId,
                        path: e.path,
                        matches: null,
                        match: null,
                        controller: null
                    });
                    let d = t.fetchers.get(n),
                        p = Ue(s, e.path),
                        y = !1;
                    y = !u.has(n) && (!!l.includes(n) || (d && "idle" !== d.state && void 0 === d.data ? i : de(p, r({
                        currentUrl: g,
                        currentParams: t.matches[t.matches.length - 1].params,
                        nextUrl: b,
                        nextParams: a[a.length - 1].params
                    }, o, {
                        actionResult: v,
                        defaultShouldRevalidate: i
                    })))), y && E.push({
                        key: n,
                        routeId: e.routeId,
                        path: e.path,
                        matches: s,
                        match: p,
                        controller: new AbortController
                    })
                })), [D, E]
            }

            function ce(e, t) {
                let r = e.route.path;
                return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
            }

            function de(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" === typeof r) return r
                }
                return t.defaultShouldRevalidate
            }
            async function ue(e, t, a) {
                if (!e.lazy) return;
                let o = await e.lazy();
                if (!e.lazy) return;
                let s = a[e.id];
                n(s, "No route found in manifest");
                let l = {};
                for (let e in o) {
                    let t = void 0 !== s[e] && "hasErrorBoundary" !== e;
                    i(!t, 'Route "' + s.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || f.has(e) || (l[e] = o[e])
                }
                Object.assign(s, l), Object.assign(s, r({}, t(s), {
                    lazy: void 0
                }))
            }
            async function he(e, t, r, a, o, i, s, l) {
                let c, d, u;
                void 0 === l && (l = {});
                let f = e => {
                    let a, o = new Promise(((e, t) => a = t));
                    return u = () => a(), t.signal.addEventListener("abort", u), Promise.race([e({
                        request: t,
                        params: r.params,
                        context: l.requestContext
                    }), o])
                };
                try {
                    let a = r.route[e];
                    if (r.route.lazy)
                        if (a) {
                            let e, t = await Promise.all([f(a).catch((t => {
                                e = t
                            })), ue(r.route, i, o)]);
                            if (e) throw e;
                            d = t[0]
                        } else {
                            if (await ue(r.route, i, o), a = r.route[e], !a) {
                                if ("action" === e) {
                                    let e = new URL(t.url),
                                        a = e.pathname + e.search;
                                    throw De(405, {
                                        method: t.method,
                                        pathname: a,
                                        routeId: r.route.id
                                    })
                                }
                                return {
                                    type: h.data,
                                    data: void 0
                                }
                            }
                            d = await f(a)
                        }
                    else {
                        if (!a) {
                            let e = new URL(t.url);
                            throw De(404, {
                                pathname: e.pathname + e.search
                            })
                        }
                        d = await f(a)
                    }
                    n(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                } catch (e) {
                    c = h.error, d = e
                } finally {
                    u && t.signal.removeEventListener("abort", u)
                }
                if (Ae(d)) {
                    let e, o = d.status;
                    if (X.has(o)) {
                        let e = d.headers.get("Location");
                        if (n(e, "Redirects returned/thrown from loaders/actions must have a Location header"), te.test(e)) {
                            if (!l.isStaticRequest) {
                                let r = new URL(t.url),
                                    a = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                                    o = null != j(a.pathname, s);
                                a.origin === r.origin && o && (e = a.pathname + a.search + a.hash)
                            }
                        } else e = ne(new URL(t.url), a.slice(0, a.indexOf(r) + 1), s, !0, e);
                        if (l.isStaticRequest) throw d.headers.set("Location", e), d;
                        return {
                            type: h.redirect,
                            status: o,
                            location: e,
                            revalidate: null !== d.headers.get("X-Remix-Revalidate"),
                            reloadDocument: null !== d.headers.get("X-Remix-Reload-Document")
                        }
                    }
                    if (l.isRouteRequest) throw {
                        type: c === h.error ? h.error : h.data,
                        response: d
                    };
                    let i = d.headers.get("Content-Type");
                    return e = i && /\bapplication\/json\b/.test(i) ? await d.json() : await d.text(), c === h.error ? {
                        type: c,
                        error: new W(o, d.statusText, e),
                        headers: d.headers
                    } : {
                        type: h.data,
                        data: e,
                        statusCode: d.status,
                        headers: d.headers
                    }
                }
                return c === h.error ? {
                    type: c,
                    error: d
                } : Le(d) ? {
                    type: h.deferred,
                    deferredData: d,
                    statusCode: null == (p = d.init) ? void 0 : p.status,
                    headers: (null == (m = d.init) ? void 0 : m.headers) && new Headers(d.init.headers)
                } : {
                    type: h.data,
                    data: d
                };
                var p, m
            }

            function fe(e, t, r, a) {
                let o = e.createURL(Re(t)).toString(),
                    n = {
                        signal: r
                    };
                if (a && je(a.formMethod)) {
                    let {
                        formMethod: e,
                        formEncType: t
                    } = a;
                    n.method = e.toUpperCase(), "application/json" === t ? (n.headers = new Headers({
                        "Content-Type": t
                    }), n.body = JSON.stringify(a.json)) : "text/plain" === t ? n.body = a.text : "application/x-www-form-urlencoded" === t && a.formData ? n.body = pe(a.formData) : n.body = a.formData
                }
                return new Request(o, n)
            }

            function pe(e) {
                let t = new URLSearchParams;
                for (let [r, a] of e.entries()) t.append(r, "string" === typeof a ? a : a.name);
                return t
            }

            function me(e) {
                let t = new FormData;
                for (let [r, a] of e.entries()) t.append(r, a);
                return t
            }

            function ye(e, t, r, a, o) {
                let i, s = {},
                    l = null,
                    c = !1,
                    d = {};
                return r.forEach(((r, u) => {
                    let h = t[u].route.id;
                    if (n(!Pe(r), "Cannot handle redirect results in processLoaderData"), xe(r)) {
                        let t = be(e, h),
                            o = r.error;
                        a && (o = Object.values(a)[0], a = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = o), s[h] = void 0, c || (c = !0, i = $(r.error) ? r.error.status : 500), r.headers && (d[h] = r.headers)
                    } else Se(r) ? (o.set(h, r.deferredData), s[h] = r.deferredData.data) : s[h] = r.data, null == r.statusCode || 200 === r.statusCode || c || (i = r.statusCode), r.headers && (d[h] = r.headers)
                })), a && (l = a, s[Object.keys(a)[0]] = void 0), {
                    loaderData: s,
                    errors: l,
                    statusCode: i || 200,
                    loaderHeaders: d
                }
            }

            function ve(e, t, a, o, i, s, l, c) {
                let {
                    loaderData: d,
                    errors: u
                } = ye(t, a, o, i, c);
                for (let t = 0; t < s.length; t++) {
                    let {
                        key: a,
                        match: o,
                        controller: i
                    } = s[t];
                    n(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
                    let c = l[t];
                    if (!i || !i.signal.aborted)
                        if (xe(c)) {
                            let t = be(e.matches, null == o ? void 0 : o.route.id);
                            u && u[t.route.id] || (u = r({}, u, {
                                [t.route.id]: c.error
                            })), e.fetchers.delete(a)
                        } else if (Pe(c)) n(!1, "Unhandled fetcher revalidation redirect");
                    else if (Se(c)) n(!1, "Unhandled fetcher deferred data");
                    else {
                        let t = ze(c.data);
                        e.fetchers.set(a, t)
                    }
                }
                return {
                    loaderData: d,
                    errors: u
                }
            }

            function ge(e, t, a, o) {
                let n = r({}, t);
                for (let r of a) {
                    let a = r.route.id;
                    if (t.hasOwnProperty(a) ? void 0 !== t[a] && (n[a] = t[a]) : void 0 !== e[a] && r.route.loader && (n[a] = e[a]), o && o.hasOwnProperty(a)) break
                }
                return n
            }

            function be(e, t) {
                return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
            }

            function we(e) {
                let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
                    id: "__shim-error-route__"
                };
                return {
                    matches: [{
                        params: {},
                        pathname: "",
                        pathnameBase: "",
                        route: t
                    }],
                    route: t
                }
            }

            function De(e, t) {
                let {
                    pathname: r,
                    routeId: a,
                    method: o,
                    type: n
                } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (i = "Bad Request", o && r && a ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === n ? s = "defer() is not supported in actions" : "invalid-body" === n && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && a ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new W(e || 500, i, new Error(s), !0)
            }

            function Ee(e) {
                for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    if (Pe(r)) return {
                        result: r,
                        idx: t
                    }
                }
            }

            function Re(e) {
                return c(r({}, "string" === typeof e ? d(e) : e, {
                    hash: ""
                }))
            }

            function Se(e) {
                return e.type === h.deferred
            }

            function xe(e) {
                return e.type === h.error
            }

            function Pe(e) {
                return (e && e.type) === h.redirect
            }

            function Le(e) {
                let t = e;
                return t && "object" === typeof t && "object" === typeof t.data && "function" === typeof t.subscribe && "function" === typeof t.cancel && "function" === typeof t.resolveData
            }

            function Ae(e) {
                return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "object" === typeof e.headers && "undefined" !== typeof e.body
            }

            function Me(e) {
                return V.has(e.toLowerCase())
            }

            function je(e) {
                return J.has(e.toLowerCase())
            }
            async function ke(e, t, r, a, o, i) {
                for (let s = 0; s < r.length; s++) {
                    let l = r[s],
                        c = t[s];
                    if (!c) continue;
                    let d = e.find((e => e.route.id === c.route.id)),
                        u = null != d && !ce(d, c) && void 0 !== (i && i[c.route.id]);
                    if (Se(l) && (o || u)) {
                        let e = a[s];
                        n(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ce(l, e, o).then((e => {
                            e && (r[s] = e || r[s])
                        }))
                    }
                }
            }
            async function Ce(e, t, r) {
                if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
                    if (r) try {
                        return {
                            type: h.data,
                            data: e.deferredData.unwrappedData
                        }
                    } catch (e) {
                        return {
                            type: h.error,
                            error: e
                        }
                    }
                    return {
                        type: h.data,
                        data: e.deferredData.data
                    }
                }
            }

            function Te(e) {
                return new URLSearchParams(e).getAll("index").some((e => "" === e))
            }

            function Ue(e, t) {
                let r = "string" === typeof t ? d(t).search : t.search;
                if (e[e.length - 1].route.index && Te(r || "")) return e[e.length - 1];
                let a = T(e);
                return a[a.length - 1]
            }

            function Oe(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: a,
                    text: o,
                    formData: n,
                    json: i
                } = e;
                if (t && r && a) return null != o ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: a,
                    formData: void 0,
                    json: void 0,
                    text: o
                } : null != n ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: a,
                    formData: n,
                    json: void 0,
                    text: void 0
                } : void 0 !== i ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: a,
                    formData: void 0,
                    json: i,
                    text: void 0
                } : void 0
            }

            function _e(e, t) {
                return t ? {
                    state: "loading",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text
                } : {
                    state: "loading",
                    location: e,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                }
            }

            function Ie(e, t) {
                return e ? {
                    state: "loading",
                    formMethod: e.formMethod,
                    formAction: e.formAction,
                    formEncType: e.formEncType,
                    formData: e.formData,
                    json: e.json,
                    text: e.text,
                    data: t
                } : {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: t
                }
            }

            function ze(e) {
                return {
                    state: "idle",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: e
                }
            }
            t.AbortedDeferredError = H, t.Action = a, t.IDLE_BLOCKER = ee, t.IDLE_FETCHER = Z, t.IDLE_NAVIGATION = Q, t.UNSAFE_DEFERRED_SYMBOL = oe, t.UNSAFE_DeferredData = N, t.UNSAFE_ErrorResponseImpl = W, t.UNSAFE_convertRouteMatchToUiMatch = y, t.UNSAFE_convertRoutesToDataRoutes = p, t.UNSAFE_getResolveToMatches = U, t.UNSAFE_invariant = n, t.UNSAFE_warning = i, t.createBrowserHistory = function(e) {
                return void 0 === e && (e = {}), u((function(e, t) {
                    let {
                        pathname: r,
                        search: a,
                        hash: o
                    } = e.location;
                    return l("", {
                        pathname: r,
                        search: a,
                        hash: o
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                    return "string" === typeof t ? t : c(t)
                }), null, e)
            }, t.createHashHistory = function(e) {
                return void 0 === e && (e = {}), u((function(e, t) {
                    let {
                        pathname: r = "/",
                        search: a = "",
                        hash: o = ""
                    } = d(e.location.hash.substr(1));
                    return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), l("", {
                        pathname: r,
                        search: a,
                        hash: o
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                    let r = e.document.querySelector("base"),
                        a = "";
                    if (r && r.getAttribute("href")) {
                        let t = e.location.href,
                            r = t.indexOf("#");
                        a = -1 === r ? t : t.slice(0, r)
                    }
                    return a + "#" + ("string" === typeof t ? t : c(t))
                }), (function(e, t) {
                    i("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
                }), e)
            }, t.createMemoryHistory = function(e) {
                void 0 === e && (e = {});
                let t, {
                    initialEntries: r = ["/"],
                    initialIndex: o,
                    v5Compat: n = !1
                } = e;
                t = r.map(((e, t) => m(e, "string" === typeof e ? null : e.state, 0 === t ? "default" : void 0)));
                let s = f(null == o ? t.length - 1 : o),
                    u = a.Pop,
                    h = null;

                function f(e) {
                    return Math.min(Math.max(e, 0), t.length - 1)
                }

                function p() {
                    return t[s]
                }

                function m(e, r, a) {
                    void 0 === r && (r = null);
                    let o = l(t ? p().pathname : "/", e, r, a);
                    return i("/" === o.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), o
                }

                function y(e) {
                    return "string" === typeof e ? e : c(e)
                }
                return {
                    get index() {
                        return s
                    },
                    get action() {
                        return u
                    },
                    get location() {
                        return p()
                    },
                    createHref: y,
                    createURL: e => new URL(y(e), "http://localhost"),
                    encodeLocation(e) {
                        let t = "string" === typeof e ? d(e) : e;
                        return {
                            pathname: t.pathname || "",
                            search: t.search || "",
                            hash: t.hash || ""
                        }
                    },
                    push(e, r) {
                        u = a.Push;
                        let o = m(e, r);
                        s += 1, t.splice(s, t.length, o), n && h && h({
                            action: u,
                            location: o,
                            delta: 1
                        })
                    },
                    replace(e, r) {
                        u = a.Replace;
                        let o = m(e, r);
                        t[s] = o, n && h && h({
                            action: u,
                            location: o,
                            delta: 0
                        })
                    },
                    go(e) {
                        u = a.Pop;
                        let r = f(s + e),
                            o = t[r];
                        s = r, h && h({
                            action: u,
                            location: o,
                            delta: e
                        })
                    },
                    listen: e => (h = e, () => {
                        h = null
                    })
                }
            }, t.createPath = c, t.createRouter = function(e) {
                const t = e.window ? e.window : "undefined" !== typeof window ? window : void 0,
                    o = "undefined" !== typeof t && "undefined" !== typeof t.document && "undefined" !== typeof t.document.createElement,
                    s = !o;
                let c;
                if (n(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) c = e.mapRouteProperties;
                else if (e.detectErrorBoundary) {
                    let t = e.detectErrorBoundary;
                    c = e => ({
                        hasErrorBoundary: t(e)
                    })
                } else c = re;
                let d, u = {},
                    f = p(e.routes, c, void 0, u),
                    v = e.basename || "/",
                    g = r({
                        v7_fetcherPersist: !1,
                        v7_normalizeFormMethod: !1,
                        v7_prependBasename: !1
                    }, e.future),
                    b = null,
                    w = new Set,
                    D = null,
                    E = null,
                    R = null,
                    S = null != e.hydrationData,
                    x = m(f, e.history.location, v),
                    P = null;
                if (null == x) {
                    let t = De(404, {
                            pathname: e.history.location.pathname
                        }),
                        {
                            matches: r,
                            route: a
                        } = we(f);
                    x = r, P = {
                        [a.id]: t
                    }
                }
                let L, A, M = !x.some((e => e.route.lazy)) && (!x.some((e => e.route.loader)) || null != e.hydrationData),
                    k = {
                        historyAction: e.history.action,
                        location: e.history.location,
                        matches: x,
                        initialized: M,
                        navigation: Q,
                        restoreScrollPosition: null == e.hydrationData && null,
                        preventScrollReset: !1,
                        revalidation: "idle",
                        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
                        actionData: e.hydrationData && e.hydrationData.actionData || null,
                        errors: e.hydrationData && e.hydrationData.errors || P,
                        fetchers: new Map,
                        blockers: new Map
                    },
                    C = a.Pop,
                    T = !1,
                    U = !1,
                    O = new Map,
                    _ = null,
                    I = !1,
                    z = !1,
                    q = [],
                    H = [],
                    N = new Map,
                    B = 0,
                    F = -1,
                    W = new Map,
                    $ = new Set,
                    K = new Map,
                    J = new Map,
                    Y = new Set,
                    V = new Map,
                    X = new Map,
                    oe = !1;

                function se(e, t) {
                    void 0 === t && (t = {}), k = r({}, k, e);
                    let a = [],
                        o = [];
                    g.v7_fetcherPersist && k.fetchers.forEach(((e, t) => {
                        "idle" === e.state && (Y.has(t) ? o.push(t) : a.push(t))
                    })), [...w].forEach((e => e(k, {
                        deletedFetchers: o,
                        unstable_viewTransitionOpts: t.viewTransitionOpts,
                        unstable_flushSync: !0 === t.flushSync
                    }))), g.v7_fetcherPersist && (a.forEach((e => k.fetchers.delete(e))), o.forEach((e => Ae(e))))
                }

                function ce(t, o, n) {
                    var i, s;
                    let l, {
                            flushSync: c
                        } = void 0 === n ? {} : n,
                        u = null != k.actionData && null != k.navigation.formMethod && je(k.navigation.formMethod) && "loading" === k.navigation.state && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
                    l = o.actionData ? Object.keys(o.actionData).length > 0 ? o.actionData : null : u ? k.actionData : null;
                    let h = o.loaderData ? ge(k.loaderData, o.loaderData, o.matches || [], o.errors) : k.loaderData,
                        p = k.blockers;
                    p.size > 0 && (p = new Map(p), p.forEach(((e, t) => p.set(t, ee))));
                    let m, y = !0 === T || null != k.navigation.formMethod && je(k.navigation.formMethod) && !0 !== (null == (s = t.state) ? void 0 : s._isRedirect);
                    if (d && (f = d, d = void 0), I || C === a.Pop || (C === a.Push ? e.history.push(t, t.state) : C === a.Replace && e.history.replace(t, t.state)), C === a.Pop) {
                        let e = O.get(k.location.pathname);
                        e && e.has(t.pathname) ? m = {
                            currentLocation: k.location,
                            nextLocation: t
                        } : O.has(t.pathname) && (m = {
                            currentLocation: t,
                            nextLocation: k.location
                        })
                    } else if (U) {
                        let e = O.get(k.location.pathname);
                        e ? e.add(t.pathname) : (e = new Set([t.pathname]), O.set(k.location.pathname, e)), m = {
                            currentLocation: k.location,
                            nextLocation: t
                        }
                    }
                    se(r({}, o, {
                        actionData: l,
                        loaderData: h,
                        historyAction: C,
                        location: t,
                        initialized: !0,
                        navigation: Q,
                        revalidation: "idle",
                        restoreScrollPosition: Ke(t, o.matches || k.matches),
                        preventScrollReset: y,
                        blockers: p
                    }), {
                        viewTransitionOpts: m,
                        flushSync: !0 === c
                    }), C = a.Pop, T = !1, U = !1, I = !1, z = !1, q = [], H = []
                }
                async function de(t, o, n) {
                    A && A.abort(), A = null, C = t, I = !0 === (n && n.startUninterruptedRevalidation),
                        function(e, t) {
                            if (D && R) {
                                let r = $e(e, t);
                                D[r] = R()
                            }
                        }(k.location, k.matches), T = !0 === (n && n.preventScrollReset), U = !0 === (n && n.enableViewTransition);
                    let i = d || f,
                        s = n && n.overrideNavigation,
                        l = m(i, o, v),
                        p = !0 === (n && n.flushSync);
                    if (!l) {
                        let e = De(404, {
                                pathname: o.pathname
                            }),
                            {
                                matches: t,
                                route: r
                            } = we(i);
                        return We(), void ce(o, {
                            matches: t,
                            loaderData: {},
                            errors: {
                                [r.id]: e
                            }
                        }, {
                            flushSync: p
                        })
                    }
                    if (k.initialized && !z && (y = k.location, g = o, y.pathname === g.pathname && y.search === g.search && ("" === y.hash ? "" !== g.hash : y.hash === g.hash || "" !== g.hash)) && !(n && n.submission && je(n.submission.formMethod))) return void ce(o, {
                        matches: l
                    }, {
                        flushSync: p
                    });
                    var y, g;
                    A = new AbortController;
                    let b, w, E = fe(e.history, o, A.signal, n && n.submission);
                    if (n && n.pendingError) w = {
                        [be(l).route.id]: n.pendingError
                    };
                    else if (n && n.submission && je(n.submission.formMethod)) {
                        let e = await async function(e, t, r, o, n) {
                            void 0 === n && (n = {}), me();
                            let i, s = function(e, t) {
                                return {
                                    state: "submitting",
                                    location: e,
                                    formMethod: t.formMethod,
                                    formAction: t.formAction,
                                    formEncType: t.formEncType,
                                    formData: t.formData,
                                    json: t.json,
                                    text: t.text
                                }
                            }(t, r);
                            se({
                                navigation: s
                            }, {
                                flushSync: !0 === n.flushSync
                            });
                            let l = Ue(o, t);
                            if (l.route.action || l.route.lazy) {
                                if (i = await he("action", e, l, o, u, c, v), e.signal.aborted) return {
                                    shortCircuited: !0
                                }
                            } else i = {
                                type: h.error,
                                error: De(405, {
                                    method: e.method,
                                    pathname: t.pathname,
                                    routeId: l.route.id
                                })
                            };
                            if (Pe(i)) {
                                let e;
                                return e = n && null != n.replace ? n.replace : i.location === k.location.pathname + k.location.search, await ue(k, i, {
                                    submission: r,
                                    replace: e
                                }), {
                                    shortCircuited: !0
                                }
                            }
                            if (xe(i)) {
                                let e = be(o, l.route.id);
                                return !0 !== (n && n.replace) && (C = a.Push), {
                                    pendingActionData: {},
                                    pendingActionError: {
                                        [e.route.id]: i.error
                                    }
                                }
                            }
                            if (Se(i)) throw De(400, {
                                type: "defer-action"
                            });
                            return {
                                pendingActionData: {
                                    [l.route.id]: i.data
                                }
                            }
                        }(E, o, n.submission, l, {
                            replace: n.replace,
                            flushSync: p
                        });
                        if (e.shortCircuited) return;
                        b = e.pendingActionData, w = e.pendingActionError, s = _e(o, n.submission), p = !1, E = new Request(E.url, {
                            signal: E.signal
                        })
                    }
                    let {
                        shortCircuited: S,
                        loaderData: x,
                        errors: P
                    } = await async function(t, a, o, n, i, s, l, c, u, h) {
                        let p = n || _e(a, i),
                            m = i || s || Oe(p),
                            y = d || f,
                            [g, b] = le(e.history, k, o, m, a, z, q, H, Y, K, $, y, v, u, h);
                        if (We((e => !(o && o.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), F = ++B, 0 === g.length && 0 === b.length) {
                            let e = qe();
                            return ce(a, r({
                                matches: o,
                                loaderData: {},
                                errors: h || null
                            }, u ? {
                                actionData: u
                            } : {}, e ? {
                                fetchers: new Map(k.fetchers)
                            } : {}), {
                                flushSync: c
                            }), {
                                shortCircuited: !0
                            }
                        }
                        if (!I) {
                            b.forEach((e => {
                                let t = k.fetchers.get(e.key),
                                    r = Ie(void 0, t ? t.data : void 0);
                                k.fetchers.set(e.key, r)
                            }));
                            let e = u || k.actionData;
                            se(r({
                                navigation: p
                            }, e ? 0 === Object.keys(e).length ? {
                                actionData: null
                            } : {
                                actionData: e
                            } : {}, b.length > 0 ? {
                                fetchers: new Map(k.fetchers)
                            } : {}), {
                                flushSync: c
                            })
                        }
                        b.forEach((e => {
                            N.has(e.key) && Me(e.key), e.controller && N.set(e.key, e.controller)
                        }));
                        let w = () => b.forEach((e => Me(e.key)));
                        A && A.signal.addEventListener("abort", w);
                        let {
                            results: D,
                            loaderResults: E,
                            fetcherResults: R
                        } = await pe(k.matches, o, g, b, t);
                        if (t.signal.aborted) return {
                            shortCircuited: !0
                        };
                        A && A.signal.removeEventListener("abort", w), b.forEach((e => N.delete(e.key)));
                        let S = Ee(D);
                        if (S) {
                            if (S.idx >= g.length) {
                                let e = b[S.idx - g.length].key;
                                $.add(e)
                            }
                            return await ue(k, S.result, {
                                replace: l
                            }), {
                                shortCircuited: !0
                            }
                        }
                        let {
                            loaderData: x,
                            errors: P
                        } = ve(k, o, g, E, h, b, R, V);
                        V.forEach(((e, t) => {
                            e.subscribe((r => {
                                (r || e.done) && V.delete(t)
                            }))
                        }));
                        let L = qe(),
                            M = He(F);
                        return r({
                            loaderData: x,
                            errors: P
                        }, L || M || b.length > 0 ? {
                            fetchers: new Map(k.fetchers)
                        } : {})
                    }(E, o, l, s, n && n.submission, n && n.fetcherSubmission, n && n.replace, p, b, w);
                    S || (A = null, ce(o, r({
                        matches: l
                    }, b ? {
                        actionData: b
                    } : {}, {
                        loaderData: x,
                        errors: P
                    })))
                }
                async function ue(i, s, c) {
                    let {
                        submission: d,
                        fetcherSubmission: u,
                        replace: h
                    } = void 0 === c ? {} : c;
                    s.revalidate && (z = !0);
                    let f = l(i.location, s.location, {
                        _isRedirect: !0
                    });
                    if (n(f, "Expected a location on the redirect navigation"), o) {
                        let r = !1;
                        if (s.reloadDocument) r = !0;
                        else if (te.test(s.location)) {
                            const a = e.history.createURL(s.location);
                            r = a.origin !== t.location.origin || null == j(a.pathname, v)
                        }
                        if (r) return void(h ? t.location.replace(s.location) : t.location.assign(s.location))
                    }
                    A = null;
                    let p = !0 === h ? a.Replace : a.Push,
                        {
                            formMethod: m,
                            formAction: y,
                            formEncType: g
                        } = i.navigation;
                    !d && !u && m && y && g && (d = Oe(i.navigation));
                    let b = d || u;
                    if (G.has(s.status) && b && je(b.formMethod)) await de(p, f, {
                        submission: r({}, b, {
                            formAction: s.location
                        }),
                        preventScrollReset: T
                    });
                    else {
                        let e = _e(f, d);
                        await de(p, f, {
                            overrideNavigation: e,
                            fetcherSubmission: u,
                            preventScrollReset: T
                        })
                    }
                }
                async function pe(t, r, a, o, n) {
                    let i = await Promise.all([...a.map((e => he("loader", n, e, r, u, c, v))), ...o.map((t => t.matches && t.match && t.controller ? he("loader", fe(e.history, t.path, t.controller.signal), t.match, t.matches, u, c, v) : {
                            type: h.error,
                            error: De(404, {
                                pathname: t.path
                            })
                        }))]),
                        s = i.slice(0, a.length),
                        l = i.slice(a.length);
                    return await Promise.all([ke(t, a, s, s.map((() => n.signal)), !1, k.loaderData), ke(t, o.map((e => e.match)), l, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
                        results: i,
                        loaderResults: s,
                        fetcherResults: l
                    }
                }

                function me() {
                    z = !0, q.push(...We()), K.forEach(((e, t) => {
                        N.has(t) && (H.push(t), Me(t))
                    }))
                }

                function ye(e, t, r) {
                    void 0 === r && (r = {}), k.fetchers.set(e, t), se({
                        fetchers: new Map(k.fetchers)
                    }, {
                        flushSync: !0 === (r && r.flushSync)
                    })
                }

                function Re(e, t, r, a) {
                    void 0 === a && (a = {});
                    let o = be(k.matches, t);
                    Ae(e), se({
                        errors: {
                            [o.route.id]: r
                        },
                        fetchers: new Map(k.fetchers)
                    }, {
                        flushSync: !0 === (a && a.flushSync)
                    })
                }

                function Le(e) {
                    return g.v7_fetcherPersist && (J.set(e, (J.get(e) || 0) + 1), Y.has(e) && Y.delete(e)), k.fetchers.get(e) || Z
                }

                function Ae(e) {
                    let t = k.fetchers.get(e);
                    !N.has(e) || t && "loading" === t.state && W.has(e) || Me(e), K.delete(e), W.delete(e), $.delete(e), Y.delete(e), k.fetchers.delete(e)
                }

                function Me(e) {
                    let t = N.get(e);
                    n(t, "Expected fetch controller: " + e), t.abort(), N.delete(e)
                }

                function Te(e) {
                    for (let t of e) {
                        let e = ze(Le(t).data);
                        k.fetchers.set(t, e)
                    }
                }

                function qe() {
                    let e = [],
                        t = !1;
                    for (let r of $) {
                        let a = k.fetchers.get(r);
                        n(a, "Expected fetcher: " + r), "loading" === a.state && ($.delete(r), e.push(r), t = !0)
                    }
                    return Te(e), t
                }

                function He(e) {
                    let t = [];
                    for (let [r, a] of W)
                        if (a < e) {
                            let e = k.fetchers.get(r);
                            n(e, "Expected fetcher: " + r), "loading" === e.state && (Me(r), W.delete(r), t.push(r))
                        }
                    return Te(t), t.length > 0
                }

                function Ne(e) {
                    k.blockers.delete(e), X.delete(e)
                }

                function Be(e, t) {
                    let r = k.blockers.get(e) || ee;
                    n("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                    let a = new Map(k.blockers);
                    a.set(e, t), se({
                        blockers: a
                    })
                }

                function Fe(e) {
                    let {
                        currentLocation: t,
                        nextLocation: r,
                        historyAction: a
                    } = e;
                    if (0 === X.size) return;
                    X.size > 1 && i(!1, "A router only supports one blocker at a time");
                    let o = Array.from(X.entries()),
                        [n, s] = o[o.length - 1],
                        l = k.blockers.get(n);
                    return l && "proceeding" === l.state ? void 0 : s({
                        currentLocation: t,
                        nextLocation: r,
                        historyAction: a
                    }) ? n : void 0
                }

                function We(e) {
                    let t = [];
                    return V.forEach(((r, a) => {
                        e && !e(a) || (r.cancel(), t.push(a), V.delete(a))
                    })), t
                }

                function $e(e, t) {
                    return E && E(e, t.map((e => y(e, k.loaderData)))) || e.key
                }

                function Ke(e, t) {
                    if (D) {
                        let r = $e(e, t),
                            a = D[r];
                        if ("number" === typeof a) return a
                    }
                    return null
                }
                return L = {
                    get basename() {
                        return v
                    },
                    get state() {
                        return k
                    },
                    get routes() {
                        return f
                    },
                    get window() {
                        return t
                    },
                    initialize: function() {
                        if (b = e.history.listen((t => {
                                let {
                                    action: r,
                                    location: a,
                                    delta: o
                                } = t;
                                if (oe) return void(oe = !1);
                                i(0 === X.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                                let n = Fe({
                                    currentLocation: k.location,
                                    nextLocation: a,
                                    historyAction: r
                                });
                                return n && null != o ? (oe = !0, e.history.go(-1 * o), void Be(n, {
                                    state: "blocked",
                                    location: a,
                                    proceed() {
                                        Be(n, {
                                            state: "proceeding",
                                            proceed: void 0,
                                            reset: void 0,
                                            location: a
                                        }), e.history.go(o)
                                    },
                                    reset() {
                                        let e = new Map(k.blockers);
                                        e.set(n, ee), se({
                                            blockers: e
                                        })
                                    }
                                })) : de(r, a)
                            })), o) {
                            ! function(e, t) {
                                try {
                                    let r = e.sessionStorage.getItem(ae);
                                    if (r) {
                                        let e = JSON.parse(r);
                                        for (let [r, a] of Object.entries(e || {})) a && Array.isArray(a) && t.set(r, new Set(a || []))
                                    }
                                } catch (e) {}
                            }(t, O);
                            let e = () => function(e, t) {
                                if (t.size > 0) {
                                    let r = {};
                                    for (let [e, a] of t) r[e] = [...a];
                                    try {
                                        e.sessionStorage.setItem(ae, JSON.stringify(r))
                                    } catch (e) {
                                        i(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                                    }
                                }
                            }(t, O);
                            t.addEventListener("pagehide", e), _ = () => t.removeEventListener("pagehide", e)
                        }
                        return k.initialized || de(a.Pop, k.location), L
                    },
                    subscribe: function(e) {
                        return w.add(e), () => w.delete(e)
                    },
                    enableScrollRestoration: function(e, t, r) {
                        if (D = e, R = t, E = r || null, !S && k.navigation === Q) {
                            S = !0;
                            let e = Ke(k.location, k.matches);
                            null != e && se({
                                restoreScrollPosition: e
                            })
                        }
                        return () => {
                            D = null, R = null, E = null
                        }
                    },
                    navigate: async function t(o, n) {
                        if ("number" === typeof o) return void e.history.go(o);
                        let i = ne(k.location, k.matches, v, g.v7_prependBasename, o, null == n ? void 0 : n.fromRouteId, null == n ? void 0 : n.relative),
                            {
                                path: s,
                                submission: c,
                                error: d
                            } = ie(g.v7_normalizeFormMethod, !1, i, n),
                            u = k.location,
                            h = l(k.location, s, n && n.state);
                        h = r({}, h, e.history.encodeLocation(h));
                        let f = n && null != n.replace ? n.replace : void 0,
                            p = a.Push;
                        !0 === f ? p = a.Replace : !1 === f || null != c && je(c.formMethod) && c.formAction === k.location.pathname + k.location.search && (p = a.Replace);
                        let m = n && "preventScrollReset" in n ? !0 === n.preventScrollReset : void 0,
                            y = !0 === (n && n.unstable_flushSync),
                            b = Fe({
                                currentLocation: u,
                                nextLocation: h,
                                historyAction: p
                            });
                        if (!b) return await de(p, h, {
                            submission: c,
                            pendingError: d,
                            preventScrollReset: m,
                            replace: n && n.replace,
                            enableViewTransition: n && n.unstable_viewTransition,
                            flushSync: y
                        });
                        Be(b, {
                            state: "blocked",
                            location: h,
                            proceed() {
                                Be(b, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: h
                                }), t(o, n)
                            },
                            reset() {
                                let e = new Map(k.blockers);
                                e.set(b, ee), se({
                                    blockers: e
                                })
                            }
                        })
                    },
                    fetch: function(t, r, a, o) {
                        if (s) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                        N.has(t) && Me(t);
                        let i = !0 === (o && o.unstable_flushSync),
                            l = d || f,
                            h = ne(k.location, k.matches, v, g.v7_prependBasename, a, r, null == o ? void 0 : o.relative),
                            p = m(l, h, v);
                        if (!p) return void Re(t, r, De(404, {
                            pathname: h
                        }), {
                            flushSync: i
                        });
                        let {
                            path: y,
                            submission: b,
                            error: w
                        } = ie(g.v7_normalizeFormMethod, !0, h, o);
                        if (w) return void Re(t, r, w, {
                            flushSync: i
                        });
                        let D = Ue(p, y);
                        T = !0 === (o && o.preventScrollReset), b && je(b.formMethod) ? async function(t, r, a, o, i, s, l) {
                            if (me(), K.delete(t), !o.route.action && !o.route.lazy) {
                                let e = De(405, {
                                    method: l.formMethod,
                                    pathname: a,
                                    routeId: r
                                });
                                return void Re(t, r, e, {
                                    flushSync: s
                                })
                            }
                            let h = k.fetchers.get(t);
                            ye(t, function(e, t) {
                                return {
                                    state: "submitting",
                                    formMethod: e.formMethod,
                                    formAction: e.formAction,
                                    formEncType: e.formEncType,
                                    formData: e.formData,
                                    json: e.json,
                                    text: e.text,
                                    data: t ? t.data : void 0
                                }
                            }(l, h), {
                                flushSync: s
                            });
                            let p = new AbortController,
                                y = fe(e.history, a, p.signal, l);
                            N.set(t, p);
                            let g = B,
                                b = await he("action", y, o, i, u, c, v);
                            if (y.signal.aborted) return void(N.get(t) === p && N.delete(t));
                            if (Y.has(t)) return void ye(t, ze(void 0));
                            if (Pe(b)) return N.delete(t), F > g ? void ye(t, ze(void 0)) : ($.add(t), ye(t, Ie(l)), ue(k, b, {
                                fetcherSubmission: l
                            }));
                            if (xe(b)) return void Re(t, r, b.error);
                            if (Se(b)) throw De(400, {
                                type: "defer-action"
                            });
                            let w = k.navigation.location || k.location,
                                D = fe(e.history, w, p.signal),
                                E = d || f,
                                R = "idle" !== k.navigation.state ? m(E, k.navigation.location, v) : k.matches;
                            n(R, "Didn't find any matches after fetcher action");
                            let S = ++B;
                            W.set(t, S);
                            let x = Ie(l, b.data);
                            k.fetchers.set(t, x);
                            let [P, L] = le(e.history, k, R, l, w, z, q, H, Y, K, $, E, v, {
                                [o.route.id]: b.data
                            }, void 0);
                            L.filter((e => e.key !== t)).forEach((e => {
                                let t = e.key,
                                    r = k.fetchers.get(t),
                                    a = Ie(void 0, r ? r.data : void 0);
                                k.fetchers.set(t, a), N.has(t) && Me(t), e.controller && N.set(t, e.controller)
                            })), se({
                                fetchers: new Map(k.fetchers)
                            });
                            let M = () => L.forEach((e => Me(e.key)));
                            p.signal.addEventListener("abort", M);
                            let {
                                results: j,
                                loaderResults: T,
                                fetcherResults: U
                            } = await pe(k.matches, R, P, L, D);
                            if (p.signal.aborted) return;
                            p.signal.removeEventListener("abort", M), W.delete(t), N.delete(t), L.forEach((e => N.delete(e.key)));
                            let O = Ee(j);
                            if (O) {
                                if (O.idx >= P.length) {
                                    let e = L[O.idx - P.length].key;
                                    $.add(e)
                                }
                                return ue(k, O.result)
                            }
                            let {
                                loaderData: _,
                                errors: I
                            } = ve(k, k.matches, P, T, void 0, L, U, V);
                            if (k.fetchers.has(t)) {
                                let e = ze(b.data);
                                k.fetchers.set(t, e)
                            }
                            He(S), "loading" === k.navigation.state && S > F ? (n(C, "Expected pending action"), A && A.abort(), ce(k.navigation.location, {
                                matches: R,
                                loaderData: _,
                                errors: I,
                                fetchers: new Map(k.fetchers)
                            })) : (se({
                                errors: I,
                                loaderData: ge(k.loaderData, _, R, I),
                                fetchers: new Map(k.fetchers)
                            }), z = !1)
                        }(t, r, y, D, p, i, b) : (K.set(t, {
                            routeId: r,
                            path: y
                        }), async function(t, r, a, o, i, s, l) {
                            let d = k.fetchers.get(t);
                            ye(t, Ie(l, d ? d.data : void 0), {
                                flushSync: s
                            });
                            let h = new AbortController,
                                f = fe(e.history, a, h.signal);
                            N.set(t, h);
                            let p = B,
                                m = await he("loader", f, o, i, u, c, v);
                            if (Se(m) && (m = await Ce(m, f.signal, !0) || m), N.get(t) === h && N.delete(t), !f.signal.aborted) {
                                if (!Y.has(t)) return Pe(m) ? F > p ? void ye(t, ze(void 0)) : ($.add(t), void await ue(k, m)) : void(xe(m) ? Re(t, r, m.error) : (n(!Se(m), "Unhandled fetcher deferred data"), ye(t, ze(m.data))));
                                ye(t, ze(void 0))
                            }
                        }(t, r, y, D, p, i, b))
                    },
                    revalidate: function() {
                        me(), se({
                            revalidation: "loading"
                        }), "submitting" !== k.navigation.state && ("idle" !== k.navigation.state ? de(C || k.historyAction, k.navigation.location, {
                            overrideNavigation: k.navigation
                        }) : de(k.historyAction, k.location, {
                            startUninterruptedRevalidation: !0
                        }))
                    },
                    createHref: t => e.history.createHref(t),
                    encodeLocation: t => e.history.encodeLocation(t),
                    getFetcher: Le,
                    deleteFetcher: function(e) {
                        if (g.v7_fetcherPersist) {
                            let t = (J.get(e) || 0) - 1;
                            t <= 0 ? (J.delete(e), Y.add(e)) : J.set(e, t)
                        } else Ae(e);
                        se({
                            fetchers: new Map(k.fetchers)
                        })
                    },
                    dispose: function() {
                        b && b(), _ && _(), w.clear(), A && A.abort(), k.fetchers.forEach(((e, t) => Ae(t))), k.blockers.forEach(((e, t) => Ne(t)))
                    },
                    getBlocker: function(e, t) {
                        let r = k.blockers.get(e) || ee;
                        return X.get(e) !== t && X.set(e, t), r
                    },
                    deleteBlocker: Ne,
                    _internalFetchControllers: N,
                    _internalActiveDeferreds: V,
                    _internalSetRoutes: function(e) {
                        u = {}, d = p(e, c, void 0, u)
                    }
                }, L
            }, t.createStaticHandler = function(e, t) {
                n(e.length > 0, "You must provide a non-empty routes array to createStaticHandler");
                let a, o = {},
                    i = (t ? t.basename : null) || "/";
                if (null != t && t.mapRouteProperties) a = t.mapRouteProperties;
                else if (null != t && t.detectErrorBoundary) {
                    let e = t.detectErrorBoundary;
                    a = t => ({
                        hasErrorBoundary: e(t)
                    })
                } else a = re;
                let s = p(e, a, void 0, o);
                async function d(e, t, s, l, c) {
                    n(e.signal, "query()/queryRoute() requests must contain an AbortController signal");
                    try {
                        if (je(e.method.toLowerCase())) {
                            let n = await async function(e, t, n, s, l) {
                                let c;
                                if (n.route.action || n.route.lazy) {
                                    if (c = await he("action", e, n, t, o, a, i, {
                                            isStaticRequest: !0,
                                            isRouteRequest: l,
                                            requestContext: s
                                        }), e.signal.aborted) throw new Error((l ? "queryRoute" : "query") + "() call aborted: " + e.method + " " + e.url)
                                } else {
                                    let t = De(405, {
                                        method: e.method,
                                        pathname: new URL(e.url).pathname,
                                        routeId: n.route.id
                                    });
                                    if (l) throw t;
                                    c = {
                                        type: h.error,
                                        error: t
                                    }
                                }
                                if (Pe(c)) throw new Response(null, {
                                    status: c.status,
                                    headers: {
                                        Location: c.location
                                    }
                                });
                                if (Se(c)) {
                                    let e = De(400, {
                                        type: "defer-action"
                                    });
                                    if (l) throw e;
                                    c = {
                                        type: h.error,
                                        error: e
                                    }
                                }
                                if (l) {
                                    if (xe(c)) throw c.error;
                                    return {
                                        matches: [n],
                                        loaderData: {},
                                        actionData: {
                                            [n.route.id]: c.data
                                        },
                                        errors: null,
                                        statusCode: 200,
                                        loaderHeaders: {},
                                        actionHeaders: {},
                                        activeDeferreds: null
                                    }
                                }
                                if (xe(c)) {
                                    let a = be(t, n.route.id);
                                    return r({}, await u(e, t, s, void 0, {
                                        [a.route.id]: c.error
                                    }), {
                                        statusCode: $(c.error) ? c.error.status : 500,
                                        actionData: null,
                                        actionHeaders: r({}, c.headers ? {
                                            [n.route.id]: c.headers
                                        } : {})
                                    })
                                }
                                let d = new Request(e.url, {
                                    headers: e.headers,
                                    redirect: e.redirect,
                                    signal: e.signal
                                });
                                return r({}, await u(d, t, s), c.statusCode ? {
                                    statusCode: c.statusCode
                                } : {}, {
                                    actionData: {
                                        [n.route.id]: c.data
                                    },
                                    actionHeaders: r({}, c.headers ? {
                                        [n.route.id]: c.headers
                                    } : {})
                                })
                            }(e, s, c || Ue(s, t), l, null != c);
                            return n
                        }
                        let n = await u(e, s, l, c);
                        return Ae(n) ? n : r({}, n, {
                            actionData: null,
                            actionHeaders: {}
                        })
                    } catch (e) {
                        if ((d = e) && Ae(d.response) && (d.type === h.data || d.type === h.error)) {
                            if (e.type === h.error) throw e.response;
                            return e.response
                        }
                        if (function(e) {
                                if (!Ae(e)) return !1;
                                let t = e.status,
                                    r = e.headers.get("Location");
                                return t >= 300 && t <= 399 && null != r
                            }(e)) return e;
                        throw e
                    }
                    var d
                }
                async function u(e, t, n, s, l) {
                    let c = null != s;
                    if (c && (null == s || !s.route.loader) && (null == s || !s.route.lazy)) throw De(400, {
                        method: e.method,
                        pathname: new URL(e.url).pathname,
                        routeId: null == s ? void 0 : s.route.id
                    });
                    let d = (s ? [s] : se(t, Object.keys(l || {})[0])).filter((e => e.route.loader || e.route.lazy));
                    if (0 === d.length) return {
                        matches: t,
                        loaderData: t.reduce(((e, t) => Object.assign(e, {
                            [t.route.id]: null
                        })), {}),
                        errors: l || null,
                        statusCode: 200,
                        loaderHeaders: {},
                        activeDeferreds: null
                    };
                    let u = await Promise.all([...d.map((r => he("loader", e, r, t, o, a, i, {
                        isStaticRequest: !0,
                        isRouteRequest: c,
                        requestContext: n
                    })))]);
                    if (e.signal.aborted) throw new Error((c ? "queryRoute" : "query") + "() call aborted: " + e.method + " " + e.url);
                    let h = new Map,
                        f = ye(t, d, u, l, h),
                        p = new Set(d.map((e => e.route.id)));
                    return t.forEach((e => {
                        p.has(e.route.id) || (f.loaderData[e.route.id] = null)
                    })), r({}, f, {
                        matches: t,
                        activeDeferreds: h.size > 0 ? Object.fromEntries(h.entries()) : null
                    })
                }
                return {
                    dataRoutes: s,
                    query: async function(e, t) {
                        let {
                            requestContext: a
                        } = void 0 === t ? {} : t, o = new URL(e.url), n = e.method, u = l("", c(o), null, "default"), h = m(s, u, i);
                        if (!Me(n) && "HEAD" !== n) {
                            let e = De(405, {
                                    method: n
                                }),
                                {
                                    matches: t,
                                    route: r
                                } = we(s);
                            return {
                                basename: i,
                                location: u,
                                matches: t,
                                loaderData: {},
                                actionData: null,
                                errors: {
                                    [r.id]: e
                                },
                                statusCode: e.status,
                                loaderHeaders: {},
                                actionHeaders: {},
                                activeDeferreds: null
                            }
                        }
                        if (!h) {
                            let e = De(404, {
                                    pathname: u.pathname
                                }),
                                {
                                    matches: t,
                                    route: r
                                } = we(s);
                            return {
                                basename: i,
                                location: u,
                                matches: t,
                                loaderData: {},
                                actionData: null,
                                errors: {
                                    [r.id]: e
                                },
                                statusCode: e.status,
                                loaderHeaders: {},
                                actionHeaders: {},
                                activeDeferreds: null
                            }
                        }
                        let f = await d(e, u, h, a);
                        return Ae(f) ? f : r({
                            location: u,
                            basename: i
                        }, f)
                    },
                    queryRoute: async function(e, t) {
                        let {
                            routeId: r,
                            requestContext: a
                        } = void 0 === t ? {} : t, o = new URL(e.url), n = e.method, u = l("", c(o), null, "default"), h = m(s, u, i);
                        if (!Me(n) && "HEAD" !== n && "OPTIONS" !== n) throw De(405, {
                            method: n
                        });
                        if (!h) throw De(404, {
                            pathname: u.pathname
                        });
                        let f = r ? h.find((e => e.route.id === r)) : Ue(h, u);
                        if (r && !f) throw De(403, {
                            pathname: u.pathname,
                            routeId: r
                        });
                        if (!f) throw De(404, {
                            pathname: u.pathname
                        });
                        let p = await d(e, u, h, a, f);
                        if (Ae(p)) return p;
                        let y = p.errors ? Object.values(p.errors)[0] : void 0;
                        if (void 0 !== y) throw y;
                        if (p.actionData) return Object.values(p.actionData)[0];
                        if (p.loaderData) {
                            var v;
                            let e = Object.values(p.loaderData)[0];
                            return null != (v = p.activeDeferreds) && v[f.route.id] && (e[oe] = p.activeDeferreds[f.route.id]), e
                        }
                    }
                }
            }, t.defer = function(e, t) {
                return void 0 === t && (t = {}), new N(e, "number" === typeof t ? {
                    status: t
                } : t)
            }, t.generatePath = function(e, t) {
                void 0 === t && (t = {});
                let r = e;
                r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (i(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
                const a = r.startsWith("/") ? "/" : "",
                    o = e => null == e ? "" : "string" === typeof e ? e : String(e);
                return a + r.split(/\/+/).map(((e, r, a) => {
                    if (r === a.length - 1 && "*" === e) return o(t["*"]);
                    const i = e.match(/^:(\w+)(\??)$/);
                    if (i) {
                        const [, e, r] = i;
                        let a = t[e];
                        return n("?" === r || null != a, 'Missing ":' + e + '" param'), o(a)
                    }
                    return e.replace(/\?$/g, "")
                })).filter((e => !!e)).join("/")
            }, t.getStaticContextFromError = function(e, t, a) {
                return r({}, t, {
                    statusCode: 500,
                    errors: {
                        [t._deepestRenderedBoundaryId || e[0].id]: a
                    }
                })
            }, t.getToPathname = function(e) {
                return "" === e || "" === e.pathname ? "/" : "string" === typeof e ? d(e).pathname : e.pathname
            }, t.isDeferredData = Le, t.isRouteErrorResponse = $, t.joinPaths = _, t.json = function(e, t) {
                void 0 === t && (t = {});
                let a = "number" === typeof t ? {
                        status: t
                    } : t,
                    o = new Headers(a.headers);
                return o.has("Content-Type") || o.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), r({}, a, {
                    headers: o
                }))
            }, t.matchPath = A, t.matchRoutes = m, t.normalizePathname = I, t.parsePath = d, t.redirect = F, t.redirectDocument = (e, t) => {
                let r = F(e, t);
                return r.headers.set("X-Remix-Reload-Document", "true"), r
            }, t.resolvePath = k, t.resolveTo = O, t.stripBasename = j
        }
    }
]);