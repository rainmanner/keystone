(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [1216], {
        79655: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                AbortedDeferredError: () => a.AbortedDeferredError,
                Await: () => a.Await,
                BrowserRouter: () => x,
                Form: () => M,
                HashRouter: () => T,
                Link: () => k,
                MemoryRouter: () => a.MemoryRouter,
                NavLink: () => D,
                Navigate: () => a.Navigate,
                NavigationType: () => a.NavigationType,
                Outlet: () => a.Outlet,
                Route: () => a.Route,
                Router: () => a.Router,
                RouterProvider: () => F,
                Routes: () => a.Routes,
                ScrollRestoration: () => B,
                UNSAFE_DataRouterContext: () => a.UNSAFE_DataRouterContext,
                UNSAFE_DataRouterStateContext: () => a.UNSAFE_DataRouterStateContext,
                UNSAFE_FetchersContext: () => _,
                UNSAFE_LocationContext: () => a.UNSAFE_LocationContext,
                UNSAFE_NavigationContext: () => a.UNSAFE_NavigationContext,
                UNSAFE_RouteContext: () => a.UNSAFE_RouteContext,
                UNSAFE_ViewTransitionContext: () => E,
                UNSAFE_useRouteId: () => a.UNSAFE_useRouteId,
                UNSAFE_useScrollRestoration: () => ee,
                createBrowserRouter: () => g,
                createHashRouter: () => w,
                createMemoryRouter: () => a.createMemoryRouter,
                createPath: () => a.createPath,
                createRoutesFromChildren: () => a.createRoutesFromChildren,
                createRoutesFromElements: () => a.createRoutesFromElements,
                createSearchParams: () => d,
                defer: () => a.defer,
                generatePath: () => a.generatePath,
                isRouteErrorResponse: () => a.isRouteErrorResponse,
                json: () => a.json,
                matchPath: () => a.matchPath,
                matchRoutes: () => a.matchRoutes,
                parsePath: () => a.parsePath,
                redirect: () => a.redirect,
                redirectDocument: () => a.redirectDocument,
                renderMatches: () => a.renderMatches,
                resolvePath: () => a.resolvePath,
                unstable_HistoryRouter: () => U,
                unstable_usePrompt: () => ne,
                unstable_useViewTransitionState: () => re,
                useActionData: () => a.useActionData,
                useAsyncError: () => a.useAsyncError,
                useAsyncValue: () => a.useAsyncValue,
                useBeforeUnload: () => te,
                useBlocker: () => a.useBlocker,
                useFetcher: () => Q,
                useFetchers: () => X,
                useFormAction: () => G,
                useHref: () => a.useHref,
                useInRouterContext: () => a.useInRouterContext,
                useLinkClickHandler: () => z,
                useLoaderData: () => a.useLoaderData,
                useLocation: () => a.useLocation,
                useMatch: () => a.useMatch,
                useMatches: () => a.useMatches,
                useNavigate: () => a.useNavigate,
                useNavigation: () => a.useNavigation,
                useNavigationType: () => a.useNavigationType,
                useOutlet: () => a.useOutlet,
                useOutletContext: () => a.useOutletContext,
                useParams: () => a.useParams,
                useResolvedPath: () => a.useResolvedPath,
                useRevalidator: () => a.useRevalidator,
                useRouteError: () => a.useRouteError,
                useRouteLoaderData: () => a.useRouteLoaderData,
                useRoutes: () => a.useRoutes,
                useSearchParams: () => W,
                useSubmit: () => q
            });
            var r = n(67294),
                o = n(73935),
                a = n(85283),
                i = n(57927);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            const c = "get",
                l = "application/x-www-form-urlencoded";

            function f(e) {
                return null != e && "string" === typeof e.tagName
            }

            function d(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" === typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
                    let r = e[n];
                    return t.concat(Array.isArray(r) ? r.map((e => [n, e])) : [
                        [n, r]
                    ])
                }), []))
            }
            let m = null;
            const h = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

            function v(e) {
                return null == e || h.has(e) ? e : null
            }
            const p = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                b = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                y = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"];

            function g(e, t) {
                return (0, i.createRouter)({
                    basename: null == t ? void 0 : t.basename,
                    future: u({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0
                    }),
                    history: (0, i.createBrowserHistory)({
                        window: null == t ? void 0 : t.window
                    }),
                    hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
                    routes: e,
                    mapRouteProperties: a.UNSAFE_mapRouteProperties,
                    window: null == t ? void 0 : t.window
                }).initialize()
            }

            function w(e, t) {
                return (0, i.createRouter)({
                    basename: null == t ? void 0 : t.basename,
                    future: u({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0
                    }),
                    history: (0, i.createHashHistory)({
                        window: null == t ? void 0 : t.window
                    }),
                    hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
                    routes: e,
                    mapRouteProperties: a.UNSAFE_mapRouteProperties,
                    window: null == t ? void 0 : t.window
                }).initialize()
            }

            function R() {
                var e;
                let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                return t && t.errors && (t = u({}, t, {
                    errors: S(t.errors)
                })), t
            }

            function S(e) {
                if (!e) return null;
                let t = Object.entries(e),
                    n = {};
                for (let [e, r] of t)
                    if (r && "RouteErrorResponse" === r.__type) n[e] = new i.UNSAFE_ErrorResponseImpl(r.status, r.statusText, r.data, !0 === r.internal);
                    else if (r && "Error" === r.__type) {
                    if (r.__subType) {
                        let t = window[r.__subType];
                        if ("function" === typeof t) try {
                            let o = new t(r.message);
                            o.stack = "", n[e] = o
                        } catch (e) {}
                    }
                    if (null == n[e]) {
                        let t = new Error(r.message);
                        t.stack = "", n[e] = t
                    }
                } else n[e] = r;
                return n
            }
            const E = r.createContext({
                    isTransitioning: !1
                }),
                _ = r.createContext(new Map),
                C = r.startTransition,
                P = o.flushSync;

            function A(e) {
                P ? P(e) : e()
            }
            class N {
                constructor() {
                    this.status = "pending", this.promise = new Promise(((e, t) => {
                        this.resolve = t => {
                            "pending" === this.status && (this.status = "resolved", e(t))
                        }, this.reject = e => {
                            "pending" === this.status && (this.status = "rejected", t(e))
                        }
                    }))
                }
            }

            function F(e) {
                let {
                    fallbackElement: t,
                    router: n,
                    future: o
                } = e, [i, u] = r.useState(n.state), [s, c] = r.useState(), [l, f] = r.useState({
                    isTransitioning: !1
                }), [d, m] = r.useState(), [h, v] = r.useState(), [p, b] = r.useState(), y = r.useRef(new Map), {
                    v7_startTransition: g
                } = o || {}, w = r.useCallback((e => {
                    g ? function(e) {
                        C ? C(e) : e()
                    }(e) : e()
                }), [g]), R = r.useCallback(((e, t) => {
                    let {
                        deletedFetchers: r,
                        unstable_flushSync: o,
                        unstable_viewTransitionOpts: a
                    } = t;
                    r.forEach((e => y.current.delete(e))), e.fetchers.forEach(((e, t) => {
                        void 0 !== e.data && y.current.set(t, e.data)
                    }));
                    let i = null == n.window || "function" !== typeof n.window.document.startViewTransition;
                    if (a && !i) {
                        if (o) {
                            A((() => {
                                h && (d && d.resolve(), h.skipTransition()), f({
                                    isTransitioning: !0,
                                    flushSync: !0,
                                    currentLocation: a.currentLocation,
                                    nextLocation: a.nextLocation
                                })
                            }));
                            let t = n.window.document.startViewTransition((() => {
                                A((() => u(e)))
                            }));
                            return t.finished.finally((() => {
                                A((() => {
                                    m(void 0), v(void 0), c(void 0), f({
                                        isTransitioning: !1
                                    })
                                }))
                            })), void A((() => v(t)))
                        }
                        h ? (d && d.resolve(), h.skipTransition(), b({
                            state: e,
                            currentLocation: a.currentLocation,
                            nextLocation: a.nextLocation
                        })) : (c(e), f({
                            isTransitioning: !0,
                            flushSync: !1,
                            currentLocation: a.currentLocation,
                            nextLocation: a.nextLocation
                        }))
                    } else o ? A((() => u(e))) : w((() => u(e)))
                }), [n.window, h, d, y, w]);
                r.useLayoutEffect((() => n.subscribe(R)), [n, R]), r.useEffect((() => {
                    l.isTransitioning && !l.flushSync && m(new N)
                }), [l]), r.useEffect((() => {
                    if (d && s && n.window) {
                        let e = s,
                            t = d.promise,
                            r = n.window.document.startViewTransition((async () => {
                                w((() => u(e))), await t
                            }));
                        r.finished.finally((() => {
                            m(void 0), v(void 0), c(void 0), f({
                                isTransitioning: !1
                            })
                        })), v(r)
                    }
                }), [w, s, d, n.window]), r.useEffect((() => {
                    d && s && i.location.key === s.location.key && d.resolve()
                }), [d, h, i.location, s]), r.useEffect((() => {
                    !l.isTransitioning && p && (c(p.state), f({
                        isTransitioning: !0,
                        flushSync: !1,
                        currentLocation: p.currentLocation,
                        nextLocation: p.nextLocation
                    }), b(void 0))
                }), [l.isTransitioning, p]);
                let S = r.useMemo((() => ({
                        createHref: n.createHref,
                        encodeLocation: n.encodeLocation,
                        go: e => n.navigate(e),
                        push: (e, t, r) => n.navigate(e, {
                            state: t,
                            preventScrollReset: null == r ? void 0 : r.preventScrollReset
                        }),
                        replace: (e, t, r) => n.navigate(e, {
                            replace: !0,
                            state: t,
                            preventScrollReset: null == r ? void 0 : r.preventScrollReset
                        })
                    })), [n]),
                    P = n.basename || "/",
                    F = r.useMemo((() => ({
                        router: n,
                        navigator: S,
                        static: !1,
                        basename: P
                    })), [n, S, P]);
                return r.createElement(r.Fragment, null, r.createElement(a.UNSAFE_DataRouterContext.Provider, {
                    value: F
                }, r.createElement(a.UNSAFE_DataRouterStateContext.Provider, {
                    value: i
                }, r.createElement(_.Provider, {
                    value: y.current
                }, r.createElement(E.Provider, {
                    value: l
                }, r.createElement(a.Router, {
                    basename: P,
                    location: i.location,
                    navigationType: i.historyAction,
                    navigator: S
                }, i.initialized ? r.createElement(L, {
                    routes: n.routes,
                    state: i
                }) : t))))), null)
            }

            function L(e) {
                let {
                    routes: t,
                    state: n
                } = e;
                return (0, a.UNSAFE_useRoutesImpl)(t, void 0, n)
            }

            function x(e) {
                let {
                    basename: t,
                    children: n,
                    future: o,
                    window: u
                } = e, s = r.useRef();
                null == s.current && (s.current = (0, i.createBrowserHistory)({
                    window: u,
                    v5Compat: !0
                }));
                let c = s.current,
                    [l, f] = r.useState({
                        action: c.action,
                        location: c.location
                    }),
                    {
                        v7_startTransition: d
                    } = o || {},
                    m = r.useCallback((e => {
                        d && C ? C((() => f(e))) : f(e)
                    }), [f, d]);
                return r.useLayoutEffect((() => c.listen(m)), [c, m]), r.createElement(a.Router, {
                    basename: t,
                    children: n,
                    location: l.location,
                    navigationType: l.action,
                    navigator: c
                })
            }

            function T(e) {
                let {
                    basename: t,
                    children: n,
                    future: o,
                    window: u
                } = e, s = r.useRef();
                null == s.current && (s.current = (0, i.createHashHistory)({
                    window: u,
                    v5Compat: !0
                }));
                let c = s.current,
                    [l, f] = r.useState({
                        action: c.action,
                        location: c.location
                    }),
                    {
                        v7_startTransition: d
                    } = o || {},
                    m = r.useCallback((e => {
                        d && C ? C((() => f(e))) : f(e)
                    }), [f, d]);
                return r.useLayoutEffect((() => c.listen(m)), [c, m]), r.createElement(a.Router, {
                    basename: t,
                    children: n,
                    location: l.location,
                    navigationType: l.action,
                    navigator: c
                })
            }

            function U(e) {
                let {
                    basename: t,
                    children: n,
                    future: o,
                    history: i
                } = e, [u, s] = r.useState({
                    action: i.action,
                    location: i.location
                }), {
                    v7_startTransition: c
                } = o || {}, l = r.useCallback((e => {
                    c && C ? C((() => s(e))) : s(e)
                }), [s, c]);
                return r.useLayoutEffect((() => i.listen(l)), [i, l]), r.createElement(a.Router, {
                    basename: t,
                    children: n,
                    location: u.location,
                    navigationType: u.action,
                    navigator: i
                })
            }
            const O = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
                j = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                k = r.forwardRef((function(e, t) {
                    let n, {
                            onClick: o,
                            relative: c,
                            reloadDocument: l,
                            replace: f,
                            state: d,
                            target: m,
                            to: h,
                            preventScrollReset: v,
                            unstable_viewTransition: b
                        } = e,
                        y = s(e, p),
                        {
                            basename: g
                        } = r.useContext(a.UNSAFE_NavigationContext),
                        w = !1;
                    if ("string" === typeof h && j.test(h) && (n = h, O)) try {
                        let e = new URL(window.location.href),
                            t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h),
                            n = (0, i.stripBasename)(t.pathname, g);
                        t.origin === e.origin && null != n ? h = n + t.search + t.hash : w = !0
                    } catch (e) {}
                    let R = (0, a.useHref)(h, {
                            relative: c
                        }),
                        S = z(h, {
                            replace: f,
                            state: d,
                            target: m,
                            preventScrollReset: v,
                            relative: c,
                            unstable_viewTransition: b
                        });
                    return r.createElement("a", u({}, y, {
                        href: n || R,
                        onClick: w || l ? o : function(e) {
                            o && o(e), e.defaultPrevented || S(e)
                        },
                        ref: t,
                        target: m
                    }))
                })),
                D = r.forwardRef((function(e, t) {
                    let {
                        "aria-current": n = "page",
                        caseSensitive: o = !1,
                        className: i = "",
                        end: c = !1,
                        style: l,
                        to: f,
                        unstable_viewTransition: d,
                        children: m
                    } = e, h = s(e, b), v = (0, a.useResolvedPath)(f, {
                        relative: h.relative
                    }), p = (0, a.useLocation)(), y = r.useContext(a.UNSAFE_DataRouterStateContext), {
                        navigator: g
                    } = r.useContext(a.UNSAFE_NavigationContext), w = null != y && re(v) && !0 === d, R = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname, S = p.pathname, E = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
                    o || (S = S.toLowerCase(), E = E ? E.toLowerCase() : null, R = R.toLowerCase());
                    const _ = "/" !== R && R.endsWith("/") ? R.length - 1 : R.length;
                    let C, P = S === R || !c && S.startsWith(R) && "/" === S.charAt(_),
                        A = null != E && (E === R || !c && E.startsWith(R) && "/" === E.charAt(R.length)),
                        N = {
                            isActive: P,
                            isPending: A,
                            isTransitioning: w
                        },
                        F = P ? n : void 0;
                    C = "function" === typeof i ? i(N) : [i, P ? "active" : null, A ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
                    let L = "function" === typeof l ? l(N) : l;
                    return r.createElement(k, u({}, h, {
                        "aria-current": F,
                        className: C,
                        ref: t,
                        style: L,
                        to: f,
                        unstable_viewTransition: d
                    }), "function" === typeof m ? m(N) : m)
                })),
                M = r.forwardRef(((e, t) => {
                    let {
                        fetcherKey: n,
                        navigate: o,
                        reloadDocument: a,
                        replace: i,
                        state: l,
                        method: f = c,
                        action: d,
                        onSubmit: m,
                        relative: h,
                        preventScrollReset: v,
                        unstable_viewTransition: p
                    } = e, b = s(e, y), g = q(), w = G(d, {
                        relative: h
                    }), R = "get" === f.toLowerCase() ? "get" : "post";
                    return r.createElement("form", u({
                        ref: t,
                        method: R,
                        action: w,
                        onSubmit: a ? m : e => {
                            if (m && m(e), e.defaultPrevented) return;
                            e.preventDefault();
                            let t = e.nativeEvent.submitter,
                                r = (null == t ? void 0 : t.getAttribute("formmethod")) || f;
                            g(t || e.currentTarget, {
                                fetcherKey: n,
                                method: r,
                                navigate: o,
                                replace: i,
                                state: l,
                                relative: h,
                                preventScrollReset: v,
                                unstable_viewTransition: p
                            })
                        }
                    }, b))
                }));

            function B(e) {
                let {
                    getKey: t,
                    storageKey: n
                } = e;
                return ee({
                    getKey: t,
                    storageKey: n
                }), null
            }
            var H, K;

            function I(e) {
                let t = r.useContext(a.UNSAFE_DataRouterContext);
                return t || (0, i.UNSAFE_invariant)(!1), t
            }

            function V(e) {
                let t = r.useContext(a.UNSAFE_DataRouterStateContext);
                return t || (0, i.UNSAFE_invariant)(!1), t
            }

            function z(e, t) {
                let {
                    target: n,
                    replace: o,
                    state: i,
                    preventScrollReset: u,
                    relative: s,
                    unstable_viewTransition: c
                } = void 0 === t ? {} : t, l = (0, a.useNavigate)(), f = (0, a.useLocation)(), d = (0, a.useResolvedPath)(e, {
                    relative: s
                });
                return r.useCallback((t => {
                    if (function(e, t) {
                            return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e)
                        }(t, n)) {
                        t.preventDefault();
                        let n = void 0 !== o ? o : (0, a.createPath)(f) === (0, a.createPath)(d);
                        l(e, {
                            replace: n,
                            state: i,
                            preventScrollReset: u,
                            relative: s,
                            unstable_viewTransition: c
                        })
                    }
                }), [f, l, d, o, i, n, e, u, s, c])
            }

            function W(e) {
                let t = r.useRef(d(e)),
                    n = r.useRef(!1),
                    o = (0, a.useLocation)(),
                    i = r.useMemo((() => function(e, t) {
                        let n = d(e);
                        return t && t.forEach(((e, r) => {
                            n.has(r) || t.getAll(r).forEach((e => {
                                n.append(r, e)
                            }))
                        })), n
                    }(o.search, n.current ? null : t.current)), [o.search]),
                    u = (0, a.useNavigate)(),
                    s = r.useCallback(((e, t) => {
                        const r = d("function" === typeof e ? e(i) : e);
                        n.current = !0, u("?" + r, t)
                    }), [u, i]);
                return [i, s]
            }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
            })(H || (H = {})),
            function(e) {
                e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
            }(K || (K = {}));
            let Y = 0,
                J = () => "__" + String(++Y) + "__";

            function q() {
                let {
                    router: e
                } = I(H.UseSubmit), {
                    basename: t
                } = r.useContext(a.UNSAFE_NavigationContext), n = (0, a.UNSAFE_useRouteId)();
                return r.useCallback((function(r, o) {
                    void 0 === o && (o = {}),
                        function() {
                            if ("undefined" === typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
                        }();
                    let {
                        action: a,
                        method: u,
                        encType: s,
                        formData: d,
                        body: h
                    } = function(e, t) {
                        let n, r, o, a, u;
                        if (f(s = e) && "form" === s.tagName.toLowerCase()) {
                            let u = e.getAttribute("action");
                            r = u ? (0, i.stripBasename)(u, t) : null, n = e.getAttribute("method") || c, o = v(e.getAttribute("enctype")) || l, a = new FormData(e)
                        } else if (function(e) {
                                return f(e) && "button" === e.tagName.toLowerCase()
                            }(e) || function(e) {
                                return f(e) && "input" === e.tagName.toLowerCase()
                            }(e) && ("submit" === e.type || "image" === e.type)) {
                            let u = e.form;
                            if (null == u) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                            let s = e.getAttribute("formaction") || u.getAttribute("action");
                            if (r = s ? (0, i.stripBasename)(s, t) : null, n = e.getAttribute("formmethod") || u.getAttribute("method") || c, o = v(e.getAttribute("formenctype")) || v(u.getAttribute("enctype")) || l, a = new FormData(u, e), ! function() {
                                    if (null === m) try {
                                        new FormData(document.createElement("form"), 0), m = !1
                                    } catch (e) {
                                        m = !0
                                    }
                                    return m
                                }()) {
                                let {
                                    name: t,
                                    type: n,
                                    value: r
                                } = e;
                                if ("image" === n) {
                                    let e = t ? t + "." : "";
                                    a.append(e + "x", "0"), a.append(e + "y", "0")
                                } else t && a.append(t, r)
                            }
                        } else {
                            if (f(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                            n = c, r = null, o = l, u = e
                        }
                        var s;
                        return a && "text/plain" === o && (u = a, a = void 0), {
                            action: r,
                            method: n.toLowerCase(),
                            encType: o,
                            formData: a,
                            body: u
                        }
                    }(r, t);
                    if (!1 === o.navigate) {
                        let t = o.fetcherKey || J();
                        e.fetch(t, n, o.action || a, {
                            preventScrollReset: o.preventScrollReset,
                            formData: d,
                            body: h,
                            formMethod: o.method || u,
                            formEncType: o.encType || s,
                            unstable_flushSync: o.unstable_flushSync
                        })
                    } else e.navigate(o.action || a, {
                        preventScrollReset: o.preventScrollReset,
                        formData: d,
                        body: h,
                        formMethod: o.method || u,
                        formEncType: o.encType || s,
                        replace: o.replace,
                        state: o.state,
                        fromRouteId: n,
                        unstable_flushSync: o.unstable_flushSync,
                        unstable_viewTransition: o.unstable_viewTransition
                    })
                }), [e, t, n])
            }

            function G(e, t) {
                let {
                    relative: n
                } = void 0 === t ? {} : t, {
                    basename: o
                } = r.useContext(a.UNSAFE_NavigationContext), s = r.useContext(a.UNSAFE_RouteContext);
                s || (0, i.UNSAFE_invariant)(!1);
                let [c] = s.matches.slice(-1), l = u({}, (0, a.useResolvedPath)(e || ".", {
                    relative: n
                })), f = (0, a.useLocation)();
                if (null == e) {
                    l.search = f.search;
                    let e = new URLSearchParams(l.search);
                    e.has("index") && "" === e.get("index") && (e.delete("index"), l.search = e.toString() ? "?" + e.toString() : "")
                }
                return e && "." !== e || !c.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== o && (l.pathname = "/" === l.pathname ? o : (0, i.joinPaths)([o, l.pathname])), (0, a.createPath)(l)
            }

            function Q(e) {
                var t;
                let {
                    key: n
                } = void 0 === e ? {} : e, {
                    router: o
                } = I(H.UseFetcher), s = V(K.UseFetcher), c = r.useContext(_), l = r.useContext(a.UNSAFE_RouteContext), f = null == (t = l.matches[l.matches.length - 1]) ? void 0 : t.route.id;
                c || (0, i.UNSAFE_invariant)(!1), l || (0, i.UNSAFE_invariant)(!1), null == f && (0, i.UNSAFE_invariant)(!1);
                let [d, m] = r.useState(n || "");
                n && n !== d ? m(n) : d || m(J()), r.useEffect((() => (o.getFetcher(d), () => {
                    o.deleteFetcher(d)
                })), [o, d]);
                let h = r.useCallback(((e, t) => {
                        f || (0, i.UNSAFE_invariant)(!1), o.fetch(d, f, e, t)
                    }), [d, f, o]),
                    v = q(),
                    p = r.useCallback(((e, t) => {
                        v(e, u({}, t, {
                            navigate: !1,
                            fetcherKey: d
                        }))
                    }), [d, v]),
                    b = r.useMemo((() => r.forwardRef(((e, t) => r.createElement(M, u({}, e, {
                        navigate: !1,
                        fetcherKey: d,
                        ref: t
                    }))))), [d]),
                    y = s.fetchers.get(d) || i.IDLE_FETCHER,
                    g = c.get(d);
                return r.useMemo((() => u({
                    Form: b,
                    submit: p,
                    load: h
                }, y, {
                    data: g
                })), [b, p, h, y, g])
            }

            function X() {
                let e = V(K.UseFetchers);
                return Array.from(e.fetchers.entries()).map((e => {
                    let [t, n] = e;
                    return u({}, n, {
                        key: t
                    })
                }))
            }
            const Z = "react-router-scroll-positions";
            let $ = {};

            function ee(e) {
                let {
                    getKey: t,
                    storageKey: n
                } = void 0 === e ? {} : e, {
                    router: o
                } = I(H.UseScrollRestoration), {
                    restoreScrollPosition: s,
                    preventScrollReset: c
                } = V(K.UseScrollRestoration), {
                    basename: l
                } = r.useContext(a.UNSAFE_NavigationContext), f = (0, a.useLocation)(), d = (0, a.useMatches)(), m = (0, a.useNavigation)();
                r.useEffect((() => (window.history.scrollRestoration = "manual", () => {
                        window.history.scrollRestoration = "auto"
                    })), []),
                    function(e, t) {
                        let {
                            capture: n
                        } = {};
                        r.useEffect((() => {
                            let t = null != n ? {
                                capture: n
                            } : void 0;
                            return window.addEventListener("pagehide", e, t), () => {
                                window.removeEventListener("pagehide", e, t)
                            }
                        }), [e, n])
                    }(r.useCallback((() => {
                        if ("idle" === m.state) {
                            let e = (t ? t(f, d) : null) || f.key;
                            $[e] = window.scrollY
                        }
                        try {
                            sessionStorage.setItem(n || Z, JSON.stringify($))
                        } catch (e) {}
                        window.history.scrollRestoration = "auto"
                    }), [n, t, m.state, f, d])), "undefined" !== typeof document && (r.useLayoutEffect((() => {
                        try {
                            let e = sessionStorage.getItem(n || Z);
                            e && ($ = JSON.parse(e))
                        } catch (e) {}
                    }), [n]), r.useLayoutEffect((() => {
                        let e = t && "/" !== l ? (e, n) => t(u({}, e, {
                                pathname: (0, i.stripBasename)(e.pathname, l) || e.pathname
                            }), n) : t,
                            n = null == o ? void 0 : o.enableScrollRestoration($, (() => window.scrollY), e);
                        return () => n && n()
                    }), [o, l, t]), r.useLayoutEffect((() => {
                        if (!1 !== s)
                            if ("number" !== typeof s) {
                                if (f.hash) {
                                    let e = document.getElementById(decodeURIComponent(f.hash.slice(1)));
                                    if (e) return void e.scrollIntoView()
                                }!0 !== c && window.scrollTo(0, 0)
                            } else window.scrollTo(0, s)
                    }), [f, s, c]))
            }

            function te(e, t) {
                let {
                    capture: n
                } = t || {};
                r.useEffect((() => {
                    let t = null != n ? {
                        capture: n
                    } : void 0;
                    return window.addEventListener("beforeunload", e, t), () => {
                        window.removeEventListener("beforeunload", e, t)
                    }
                }), [e, n])
            }

            function ne(e) {
                let {
                    when: t,
                    message: n
                } = e, o = (0, a.useBlocker)(t);
                r.useEffect((() => {
                    "blocked" === o.state && (window.confirm(n) ? setTimeout(o.proceed, 0) : o.reset())
                }), [o, n]), r.useEffect((() => {
                    "blocked" !== o.state || t || o.reset()
                }), [o, t])
            }

            function re(e, t) {
                void 0 === t && (t = {});
                let n = r.useContext(E);
                null == n && (0, i.UNSAFE_invariant)(!1);
                let {
                    basename: o
                } = I(H.useViewTransitionState), u = (0, a.useResolvedPath)(e, {
                    relative: t.relative
                });
                if (!n.isTransitioning) return !1;
                let s = (0, i.stripBasename)(n.currentLocation.pathname, o) || n.currentLocation.pathname,
                    c = (0, i.stripBasename)(n.nextLocation.pathname, o) || n.nextLocation.pathname;
                return null != (0, i.matchPath)(u.pathname, c) || null != (0, i.matchPath)(u.pathname, s)
            }
        },
        92876: function(e, t, n) {
            ! function(e, t, n, r, o) {
                "use strict";

                function a(e) {
                    if (e && e.__esModule) return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    })), t.default = e, Object.freeze(t)
                }
                var i = a(t),
                    u = a(n);

                function s() {
                    return s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function c(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }
                const l = "get",
                    f = "application/x-www-form-urlencoded";

                function d(e) {
                    return null != e && "string" == typeof e.tagName
                }

                function m(e) {
                    return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
                        let r = e[n];
                        return t.concat(Array.isArray(r) ? r.map((e => [n, e])) : [
                            [n, r]
                        ])
                    }), []))
                }
                let h = null;
                const v = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

                function p(e) {
                    return null == e || v.has(e) ? e : null
                }

                function b(e, t) {
                    let n, r, a, i, u;
                    if (d(s = e) && "form" === s.tagName.toLowerCase()) {
                        let u = e.getAttribute("action");
                        r = u ? o.stripBasename(u, t) : null, n = e.getAttribute("method") || l, a = p(e.getAttribute("enctype")) || f, i = new FormData(e)
                    } else if (function(e) {
                            return d(e) && "button" === e.tagName.toLowerCase()
                        }(e) || function(e) {
                            return d(e) && "input" === e.tagName.toLowerCase()
                        }(e) && ("submit" === e.type || "image" === e.type)) {
                        let u = e.form;
                        if (null == u) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                        let s = e.getAttribute("formaction") || u.getAttribute("action");
                        if (r = s ? o.stripBasename(s, t) : null, n = e.getAttribute("formmethod") || u.getAttribute("method") || l, a = p(e.getAttribute("formenctype")) || p(u.getAttribute("enctype")) || f, i = new FormData(u, e), ! function() {
                                if (null === h) try {
                                    new FormData(document.createElement("form"), 0), h = !1
                                } catch (e) {
                                    h = !0
                                }
                                return h
                            }()) {
                            let {
                                name: t,
                                type: n,
                                value: r
                            } = e;
                            if ("image" === n) {
                                let e = t ? t + "." : "";
                                i.append(e + "x", "0"), i.append(e + "y", "0")
                            } else t && i.append(t, r)
                        }
                    } else {
                        if (d(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                        n = l, r = null, a = f, u = e
                    }
                    var s;
                    return i && "text/plain" === a && (u = i, i = void 0), {
                        action: r,
                        method: n.toLowerCase(),
                        encType: a,
                        formData: i,
                        body: u
                    }
                }
                const y = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                    g = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                    w = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"];

                function R() {
                    var e;
                    let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                    return t && t.errors && (t = s({}, t, {
                        errors: S(t.errors)
                    })), t
                }

                function S(e) {
                    if (!e) return null;
                    let t = Object.entries(e),
                        n = {};
                    for (let [r, a] of t)
                        if (a && "RouteErrorResponse" === a.__type) n[r] = new o.UNSAFE_ErrorResponseImpl(a.status, a.statusText, a.data, !0 === a.internal);
                        else if (a && "Error" === a.__type) {
                        if (a.__subType) {
                            let t = window[a.__subType];
                            if ("function" == typeof t) try {
                                let e = new t(a.message);
                                e.stack = "", n[r] = e
                            } catch (e) {}
                        }
                        if (null == n[r]) {
                            let e = new Error(a.message);
                            e.stack = "", n[r] = e
                        }
                    } else n[r] = a;
                    return n
                }
                const E = i.createContext({
                        isTransitioning: !1
                    }),
                    _ = i.createContext(new Map),
                    C = i.startTransition,
                    P = u.flushSync;

                function A(e) {
                    P ? P(e) : e()
                }
                class N {
                    constructor() {
                        this.status = "pending", this.promise = new Promise(((e, t) => {
                            this.resolve = t => {
                                "pending" === this.status && (this.status = "resolved", e(t))
                            }, this.reject = e => {
                                "pending" === this.status && (this.status = "rejected", t(e))
                            }
                        }))
                    }
                }

                function F(e) {
                    let {
                        routes: t,
                        state: n
                    } = e;
                    return r.UNSAFE_useRoutesImpl(t, void 0, n)
                }
                const L = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                    x = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                    T = i.forwardRef((function(e, t) {
                        let n, {
                                onClick: a,
                                relative: u,
                                reloadDocument: l,
                                replace: f,
                                state: d,
                                target: m,
                                to: h,
                                preventScrollReset: v,
                                unstable_viewTransition: p
                            } = e,
                            b = c(e, y),
                            {
                                basename: g
                            } = i.useContext(r.UNSAFE_NavigationContext),
                            w = !1;
                        if ("string" == typeof h && x.test(h) && (n = h, L)) try {
                            let e = new URL(window.location.href),
                                t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h),
                                n = o.stripBasename(t.pathname, g);
                            t.origin === e.origin && null != n ? h = n + t.search + t.hash : w = !0
                        } catch (e) {}
                        let R = r.useHref(h, {
                                relative: u
                            }),
                            S = B(h, {
                                replace: f,
                                state: d,
                                target: m,
                                preventScrollReset: v,
                                relative: u,
                                unstable_viewTransition: p
                            });
                        return i.createElement("a", s({}, b, {
                            href: n || R,
                            onClick: w || l ? a : function(e) {
                                a && a(e), e.defaultPrevented || S(e)
                            },
                            ref: t,
                            target: m
                        }))
                    })),
                    U = i.forwardRef((function(e, t) {
                        let {
                            "aria-current": n = "page",
                            caseSensitive: o = !1,
                            className: a = "",
                            end: u = !1,
                            style: l,
                            to: f,
                            unstable_viewTransition: d,
                            children: m
                        } = e, h = c(e, g), v = r.useResolvedPath(f, {
                            relative: h.relative
                        }), p = r.useLocation(), b = i.useContext(r.UNSAFE_DataRouterStateContext), {
                            navigator: y
                        } = i.useContext(r.UNSAFE_NavigationContext), w = null != b && J(v) && !0 === d, R = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname, S = p.pathname, E = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
                        o || (S = S.toLowerCase(), E = E ? E.toLowerCase() : null, R = R.toLowerCase());
                        const _ = "/" !== R && R.endsWith("/") ? R.length - 1 : R.length;
                        let C, P = S === R || !u && S.startsWith(R) && "/" === S.charAt(_),
                            A = null != E && (E === R || !u && E.startsWith(R) && "/" === E.charAt(R.length)),
                            N = {
                                isActive: P,
                                isPending: A,
                                isTransitioning: w
                            },
                            F = P ? n : void 0;
                        C = "function" == typeof a ? a(N) : [a, P ? "active" : null, A ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
                        let L = "function" == typeof l ? l(N) : l;
                        return i.createElement(T, s({}, h, {
                            "aria-current": F,
                            className: C,
                            ref: t,
                            style: L,
                            to: f,
                            unstable_viewTransition: d
                        }), "function" == typeof m ? m(N) : m)
                    })),
                    O = i.forwardRef(((e, t) => {
                        let {
                            fetcherKey: n,
                            navigate: r,
                            reloadDocument: o,
                            replace: a,
                            state: u,
                            method: f = l,
                            action: d,
                            onSubmit: m,
                            relative: h,
                            preventScrollReset: v,
                            unstable_viewTransition: p
                        } = e, b = c(e, w), y = I(), g = V(d, {
                            relative: h
                        }), R = "get" === f.toLowerCase() ? "get" : "post";
                        return i.createElement("form", s({
                            ref: t,
                            method: R,
                            action: g,
                            onSubmit: o ? m : e => {
                                if (m && m(e), e.defaultPrevented) return;
                                e.preventDefault();
                                let t = e.nativeEvent.submitter,
                                    o = (null == t ? void 0 : t.getAttribute("formmethod")) || f;
                                y(t || e.currentTarget, {
                                    fetcherKey: n,
                                    method: o,
                                    navigate: r,
                                    replace: a,
                                    state: u,
                                    relative: h,
                                    preventScrollReset: v,
                                    unstable_viewTransition: p
                                })
                            }
                        }, b))
                    }));
                var j = function(e) {
                        return e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState", e
                    }(j || {}),
                    k = function(e) {
                        return e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration", e
                    }(k || {});

                function D(e) {
                    let t = i.useContext(r.UNSAFE_DataRouterContext);
                    return t || o.UNSAFE_invariant(!1), t
                }

                function M(e) {
                    let t = i.useContext(r.UNSAFE_DataRouterStateContext);
                    return t || o.UNSAFE_invariant(!1), t
                }

                function B(e, t) {
                    let {
                        target: n,
                        replace: o,
                        state: a,
                        preventScrollReset: u,
                        relative: s,
                        unstable_viewTransition: c
                    } = void 0 === t ? {} : t, l = r.useNavigate(), f = r.useLocation(), d = r.useResolvedPath(e, {
                        relative: s
                    });
                    return i.useCallback((t => {
                        if (function(e, t) {
                                return !(0 !== e.button || t && "_self" !== t || function(e) {
                                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                }(e))
                            }(t, n)) {
                            t.preventDefault();
                            let n = void 0 !== o ? o : r.createPath(f) === r.createPath(d);
                            l(e, {
                                replace: n,
                                state: a,
                                preventScrollReset: u,
                                relative: s,
                                unstable_viewTransition: c
                            })
                        }
                    }), [f, l, d, o, a, n, e, u, s, c])
                }
                let H = 0,
                    K = () => "__" + String(++H) + "__";

                function I() {
                    let {
                        router: e
                    } = D(j.UseSubmit), {
                        basename: t
                    } = i.useContext(r.UNSAFE_NavigationContext), n = r.UNSAFE_useRouteId();
                    return i.useCallback((function(r, o) {
                        void 0 === o && (o = {}),
                            function() {
                                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
                            }();
                        let {
                            action: a,
                            method: i,
                            encType: u,
                            formData: s,
                            body: c
                        } = b(r, t);
                        if (!1 === o.navigate) {
                            let t = o.fetcherKey || K();
                            e.fetch(t, n, o.action || a, {
                                preventScrollReset: o.preventScrollReset,
                                formData: s,
                                body: c,
                                formMethod: o.method || i,
                                formEncType: o.encType || u,
                                unstable_flushSync: o.unstable_flushSync
                            })
                        } else e.navigate(o.action || a, {
                            preventScrollReset: o.preventScrollReset,
                            formData: s,
                            body: c,
                            formMethod: o.method || i,
                            formEncType: o.encType || u,
                            replace: o.replace,
                            state: o.state,
                            fromRouteId: n,
                            unstable_flushSync: o.unstable_flushSync,
                            unstable_viewTransition: o.unstable_viewTransition
                        })
                    }), [e, t, n])
                }

                function V(e, t) {
                    let {
                        relative: n
                    } = void 0 === t ? {} : t, {
                        basename: a
                    } = i.useContext(r.UNSAFE_NavigationContext), u = i.useContext(r.UNSAFE_RouteContext);
                    u || o.UNSAFE_invariant(!1);
                    let [c] = u.matches.slice(-1), l = s({}, r.useResolvedPath(e || ".", {
                        relative: n
                    })), f = r.useLocation();
                    if (null == e) {
                        l.search = f.search;
                        let e = new URLSearchParams(l.search);
                        e.has("index") && "" === e.get("index") && (e.delete("index"), l.search = e.toString() ? "?" + e.toString() : "")
                    }
                    return e && "." !== e || !c.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (l.pathname = "/" === l.pathname ? a : o.joinPaths([a, l.pathname])), r.createPath(l)
                }
                const z = "react-router-scroll-positions";
                let W = {};

                function Y(e) {
                    let {
                        getKey: t,
                        storageKey: n
                    } = void 0 === e ? {} : e, {
                        router: a
                    } = D(j.UseScrollRestoration), {
                        restoreScrollPosition: u,
                        preventScrollReset: c
                    } = M(k.UseScrollRestoration), {
                        basename: l
                    } = i.useContext(r.UNSAFE_NavigationContext), f = r.useLocation(), d = r.useMatches(), m = r.useNavigation();
                    i.useEffect((() => (window.history.scrollRestoration = "manual", () => {
                            window.history.scrollRestoration = "auto"
                        })), []),
                        function(e, t) {
                            let {
                                capture: n
                            } = {};
                            i.useEffect((() => {
                                let t = null != n ? {
                                    capture: n
                                } : void 0;
                                return window.addEventListener("pagehide", e, t), () => {
                                    window.removeEventListener("pagehide", e, t)
                                }
                            }), [e, n])
                        }(i.useCallback((() => {
                            if ("idle" === m.state) {
                                let e = (t ? t(f, d) : null) || f.key;
                                W[e] = window.scrollY
                            }
                            try {
                                sessionStorage.setItem(n || z, JSON.stringify(W))
                            } catch (e) {}
                            window.history.scrollRestoration = "auto"
                        }), [n, t, m.state, f, d])), "undefined" != typeof document && (i.useLayoutEffect((() => {
                            try {
                                let e = sessionStorage.getItem(n || z);
                                e && (W = JSON.parse(e))
                            } catch (e) {}
                        }), [n]), i.useLayoutEffect((() => {
                            let e = t && "/" !== l ? (e, n) => t(s({}, e, {
                                    pathname: o.stripBasename(e.pathname, l) || e.pathname
                                }), n) : t,
                                n = null == a ? void 0 : a.enableScrollRestoration(W, (() => window.scrollY), e);
                            return () => n && n()
                        }), [a, l, t]), i.useLayoutEffect((() => {
                            if (!1 !== u)
                                if ("number" != typeof u) {
                                    if (f.hash) {
                                        let e = document.getElementById(decodeURIComponent(f.hash.slice(1)));
                                        if (e) return void e.scrollIntoView()
                                    }!0 !== c && window.scrollTo(0, 0)
                                } else window.scrollTo(0, u)
                        }), [f, u, c]))
                }

                function J(e, t) {
                    void 0 === t && (t = {});
                    let n = i.useContext(E);
                    null == n && o.UNSAFE_invariant(!1);
                    let {
                        basename: a
                    } = D(j.useViewTransitionState), u = r.useResolvedPath(e, {
                        relative: t.relative
                    });
                    if (!n.isTransitioning) return !1;
                    let s = o.stripBasename(n.currentLocation.pathname, a) || n.currentLocation.pathname,
                        c = o.stripBasename(n.nextLocation.pathname, a) || n.nextLocation.pathname;
                    return null != o.matchPath(u.pathname, c) || null != o.matchPath(u.pathname, s)
                }
                Object.defineProperty(e, "AbortedDeferredError", {
                    enumerable: !0,
                    get: function() {
                        return r.AbortedDeferredError
                    }
                }), Object.defineProperty(e, "Await", {
                    enumerable: !0,
                    get: function() {
                        return r.Await
                    }
                }), Object.defineProperty(e, "MemoryRouter", {
                    enumerable: !0,
                    get: function() {
                        return r.MemoryRouter
                    }
                }), Object.defineProperty(e, "Navigate", {
                    enumerable: !0,
                    get: function() {
                        return r.Navigate
                    }
                }), Object.defineProperty(e, "NavigationType", {
                    enumerable: !0,
                    get: function() {
                        return r.NavigationType
                    }
                }), Object.defineProperty(e, "Outlet", {
                    enumerable: !0,
                    get: function() {
                        return r.Outlet
                    }
                }), Object.defineProperty(e, "Route", {
                    enumerable: !0,
                    get: function() {
                        return r.Route
                    }
                }), Object.defineProperty(e, "Router", {
                    enumerable: !0,
                    get: function() {
                        return r.Router
                    }
                }), Object.defineProperty(e, "Routes", {
                    enumerable: !0,
                    get: function() {
                        return r.Routes
                    }
                }), Object.defineProperty(e, "UNSAFE_DataRouterContext", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_DataRouterContext
                    }
                }), Object.defineProperty(e, "UNSAFE_DataRouterStateContext", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_DataRouterStateContext
                    }
                }), Object.defineProperty(e, "UNSAFE_LocationContext", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_LocationContext
                    }
                }), Object.defineProperty(e, "UNSAFE_NavigationContext", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_NavigationContext
                    }
                }), Object.defineProperty(e, "UNSAFE_RouteContext", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_RouteContext
                    }
                }), Object.defineProperty(e, "UNSAFE_useRouteId", {
                    enumerable: !0,
                    get: function() {
                        return r.UNSAFE_useRouteId
                    }
                }), Object.defineProperty(e, "createMemoryRouter", {
                    enumerable: !0,
                    get: function() {
                        return r.createMemoryRouter
                    }
                }), Object.defineProperty(e, "createPath", {
                    enumerable: !0,
                    get: function() {
                        return r.createPath
                    }
                }), Object.defineProperty(e, "createRoutesFromChildren", {
                    enumerable: !0,
                    get: function() {
                        return r.createRoutesFromChildren
                    }
                }), Object.defineProperty(e, "createRoutesFromElements", {
                    enumerable: !0,
                    get: function() {
                        return r.createRoutesFromElements
                    }
                }), Object.defineProperty(e, "defer", {
                    enumerable: !0,
                    get: function() {
                        return r.defer
                    }
                }), Object.defineProperty(e, "generatePath", {
                    enumerable: !0,
                    get: function() {
                        return r.generatePath
                    }
                }), Object.defineProperty(e, "isRouteErrorResponse", {
                    enumerable: !0,
                    get: function() {
                        return r.isRouteErrorResponse
                    }
                }), Object.defineProperty(e, "json", {
                    enumerable: !0,
                    get: function() {
                        return r.json
                    }
                }), Object.defineProperty(e, "matchPath", {
                    enumerable: !0,
                    get: function() {
                        return r.matchPath
                    }
                }), Object.defineProperty(e, "matchRoutes", {
                    enumerable: !0,
                    get: function() {
                        return r.matchRoutes
                    }
                }), Object.defineProperty(e, "parsePath", {
                    enumerable: !0,
                    get: function() {
                        return r.parsePath
                    }
                }), Object.defineProperty(e, "redirect", {
                    enumerable: !0,
                    get: function() {
                        return r.redirect
                    }
                }), Object.defineProperty(e, "redirectDocument", {
                    enumerable: !0,
                    get: function() {
                        return r.redirectDocument
                    }
                }), Object.defineProperty(e, "renderMatches", {
                    enumerable: !0,
                    get: function() {
                        return r.renderMatches
                    }
                }), Object.defineProperty(e, "resolvePath", {
                    enumerable: !0,
                    get: function() {
                        return r.resolvePath
                    }
                }), Object.defineProperty(e, "useActionData", {
                    enumerable: !0,
                    get: function() {
                        return r.useActionData
                    }
                }), Object.defineProperty(e, "useAsyncError", {
                    enumerable: !0,
                    get: function() {
                        return r.useAsyncError
                    }
                }), Object.defineProperty(e, "useAsyncValue", {
                    enumerable: !0,
                    get: function() {
                        return r.useAsyncValue
                    }
                }), Object.defineProperty(e, "useBlocker", {
                    enumerable: !0,
                    get: function() {
                        return r.useBlocker
                    }
                }), Object.defineProperty(e, "useHref", {
                    enumerable: !0,
                    get: function() {
                        return r.useHref
                    }
                }), Object.defineProperty(e, "useInRouterContext", {
                    enumerable: !0,
                    get: function() {
                        return r.useInRouterContext
                    }
                }), Object.defineProperty(e, "useLoaderData", {
                    enumerable: !0,
                    get: function() {
                        return r.useLoaderData
                    }
                }), Object.defineProperty(e, "useLocation", {
                    enumerable: !0,
                    get: function() {
                        return r.useLocation
                    }
                }), Object.defineProperty(e, "useMatch", {
                    enumerable: !0,
                    get: function() {
                        return r.useMatch
                    }
                }), Object.defineProperty(e, "useMatches", {
                    enumerable: !0,
                    get: function() {
                        return r.useMatches
                    }
                }), Object.defineProperty(e, "useNavigate", {
                    enumerable: !0,
                    get: function() {
                        return r.useNavigate
                    }
                }), Object.defineProperty(e, "useNavigation", {
                    enumerable: !0,
                    get: function() {
                        return r.useNavigation
                    }
                }), Object.defineProperty(e, "useNavigationType", {
                    enumerable: !0,
                    get: function() {
                        return r.useNavigationType
                    }
                }), Object.defineProperty(e, "useOutlet", {
                    enumerable: !0,
                    get: function() {
                        return r.useOutlet
                    }
                }), Object.defineProperty(e, "useOutletContext", {
                    enumerable: !0,
                    get: function() {
                        return r.useOutletContext
                    }
                }), Object.defineProperty(e, "useParams", {
                    enumerable: !0,
                    get: function() {
                        return r.useParams
                    }
                }), Object.defineProperty(e, "useResolvedPath", {
                    enumerable: !0,
                    get: function() {
                        return r.useResolvedPath
                    }
                }), Object.defineProperty(e, "useRevalidator", {
                    enumerable: !0,
                    get: function() {
                        return r.useRevalidator
                    }
                }), Object.defineProperty(e, "useRouteError", {
                    enumerable: !0,
                    get: function() {
                        return r.useRouteError
                    }
                }), Object.defineProperty(e, "useRouteLoaderData", {
                    enumerable: !0,
                    get: function() {
                        return r.useRouteLoaderData
                    }
                }), Object.defineProperty(e, "useRoutes", {
                    enumerable: !0,
                    get: function() {
                        return r.useRoutes
                    }
                }), e.BrowserRouter = function(e) {
                    let {
                        basename: t,
                        children: n,
                        future: a,
                        window: u
                    } = e, s = i.useRef();
                    null == s.current && (s.current = o.createBrowserHistory({
                        window: u,
                        v5Compat: !0
                    }));
                    let c = s.current,
                        [l, f] = i.useState({
                            action: c.action,
                            location: c.location
                        }),
                        {
                            v7_startTransition: d
                        } = a || {},
                        m = i.useCallback((e => {
                            d && C ? C((() => f(e))) : f(e)
                        }), [f, d]);
                    return i.useLayoutEffect((() => c.listen(m)), [c, m]), i.createElement(r.Router, {
                        basename: t,
                        children: n,
                        location: l.location,
                        navigationType: l.action,
                        navigator: c
                    })
                }, e.Form = O, e.HashRouter = function(e) {
                    let {
                        basename: t,
                        children: n,
                        future: a,
                        window: u
                    } = e, s = i.useRef();
                    null == s.current && (s.current = o.createHashHistory({
                        window: u,
                        v5Compat: !0
                    }));
                    let c = s.current,
                        [l, f] = i.useState({
                            action: c.action,
                            location: c.location
                        }),
                        {
                            v7_startTransition: d
                        } = a || {},
                        m = i.useCallback((e => {
                            d && C ? C((() => f(e))) : f(e)
                        }), [f, d]);
                    return i.useLayoutEffect((() => c.listen(m)), [c, m]), i.createElement(r.Router, {
                        basename: t,
                        children: n,
                        location: l.location,
                        navigationType: l.action,
                        navigator: c
                    })
                }, e.Link = T, e.NavLink = U, e.RouterProvider = function(e) {
                    let {
                        fallbackElement: t,
                        router: n,
                        future: o
                    } = e, [a, u] = i.useState(n.state), [s, c] = i.useState(), [l, f] = i.useState({
                        isTransitioning: !1
                    }), [d, m] = i.useState(), [h, v] = i.useState(), [p, b] = i.useState(), y = i.useRef(new Map), {
                        v7_startTransition: g
                    } = o || {}, w = i.useCallback((e => {
                        g ? function(e) {
                            C ? C(e) : e()
                        }(e) : e()
                    }), [g]), R = i.useCallback(((e, t) => {
                        let {
                            deletedFetchers: r,
                            unstable_flushSync: o,
                            unstable_viewTransitionOpts: a
                        } = t;
                        r.forEach((e => y.current.delete(e))), e.fetchers.forEach(((e, t) => {
                            void 0 !== e.data && y.current.set(t, e.data)
                        }));
                        let i = null == n.window || "function" != typeof n.window.document.startViewTransition;
                        if (a && !i) {
                            if (o) {
                                A((() => {
                                    h && (d && d.resolve(), h.skipTransition()), f({
                                        isTransitioning: !0,
                                        flushSync: !0,
                                        currentLocation: a.currentLocation,
                                        nextLocation: a.nextLocation
                                    })
                                }));
                                let t = n.window.document.startViewTransition((() => {
                                    A((() => u(e)))
                                }));
                                return t.finished.finally((() => {
                                    A((() => {
                                        m(void 0), v(void 0), c(void 0), f({
                                            isTransitioning: !1
                                        })
                                    }))
                                })), void A((() => v(t)))
                            }
                            h ? (d && d.resolve(), h.skipTransition(), b({
                                state: e,
                                currentLocation: a.currentLocation,
                                nextLocation: a.nextLocation
                            })) : (c(e), f({
                                isTransitioning: !0,
                                flushSync: !1,
                                currentLocation: a.currentLocation,
                                nextLocation: a.nextLocation
                            }))
                        } else o ? A((() => u(e))) : w((() => u(e)))
                    }), [n.window, h, d, y, w]);
                    i.useLayoutEffect((() => n.subscribe(R)), [n, R]), i.useEffect((() => {
                        l.isTransitioning && !l.flushSync && m(new N)
                    }), [l]), i.useEffect((() => {
                        if (d && s && n.window) {
                            let e = s,
                                t = d.promise,
                                r = n.window.document.startViewTransition((async () => {
                                    w((() => u(e))), await t
                                }));
                            r.finished.finally((() => {
                                m(void 0), v(void 0), c(void 0), f({
                                    isTransitioning: !1
                                })
                            })), v(r)
                        }
                    }), [w, s, d, n.window]), i.useEffect((() => {
                        d && s && a.location.key === s.location.key && d.resolve()
                    }), [d, h, a.location, s]), i.useEffect((() => {
                        !l.isTransitioning && p && (c(p.state), f({
                            isTransitioning: !0,
                            flushSync: !1,
                            currentLocation: p.currentLocation,
                            nextLocation: p.nextLocation
                        }), b(void 0))
                    }), [l.isTransitioning, p]);
                    let S = i.useMemo((() => ({
                            createHref: n.createHref,
                            encodeLocation: n.encodeLocation,
                            go: e => n.navigate(e),
                            push: (e, t, r) => n.navigate(e, {
                                state: t,
                                preventScrollReset: null == r ? void 0 : r.preventScrollReset
                            }),
                            replace: (e, t, r) => n.navigate(e, {
                                replace: !0,
                                state: t,
                                preventScrollReset: null == r ? void 0 : r.preventScrollReset
                            })
                        })), [n]),
                        P = n.basename || "/",
                        L = i.useMemo((() => ({
                            router: n,
                            navigator: S,
                            static: !1,
                            basename: P
                        })), [n, S, P]);
                    return i.createElement(i.Fragment, null, i.createElement(r.UNSAFE_DataRouterContext.Provider, {
                        value: L
                    }, i.createElement(r.UNSAFE_DataRouterStateContext.Provider, {
                        value: a
                    }, i.createElement(_.Provider, {
                        value: y.current
                    }, i.createElement(E.Provider, {
                        value: l
                    }, i.createElement(r.Router, {
                        basename: P,
                        location: a.location,
                        navigationType: a.historyAction,
                        navigator: S
                    }, a.initialized ? i.createElement(F, {
                        routes: n.routes,
                        state: a
                    }) : t))))), null)
                }, e.ScrollRestoration = function(e) {
                    let {
                        getKey: t,
                        storageKey: n
                    } = e;
                    return Y({
                        getKey: t,
                        storageKey: n
                    }), null
                }, e.UNSAFE_FetchersContext = _, e.UNSAFE_ViewTransitionContext = E, e.UNSAFE_useScrollRestoration = Y, e.createBrowserRouter = function(e, t) {
                    return o.createRouter({
                        basename: null == t ? void 0 : t.basename,
                        future: s({}, null == t ? void 0 : t.future, {
                            v7_prependBasename: !0
                        }),
                        history: o.createBrowserHistory({
                            window: null == t ? void 0 : t.window
                        }),
                        hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
                        routes: e,
                        mapRouteProperties: r.UNSAFE_mapRouteProperties,
                        window: null == t ? void 0 : t.window
                    }).initialize()
                }, e.createHashRouter = function(e, t) {
                    return o.createRouter({
                        basename: null == t ? void 0 : t.basename,
                        future: s({}, null == t ? void 0 : t.future, {
                            v7_prependBasename: !0
                        }),
                        history: o.createHashHistory({
                            window: null == t ? void 0 : t.window
                        }),
                        hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
                        routes: e,
                        mapRouteProperties: r.UNSAFE_mapRouteProperties,
                        window: null == t ? void 0 : t.window
                    }).initialize()
                }, e.createSearchParams = m, e.unstable_HistoryRouter = function(e) {
                    let {
                        basename: t,
                        children: n,
                        future: o,
                        history: a
                    } = e, [u, s] = i.useState({
                        action: a.action,
                        location: a.location
                    }), {
                        v7_startTransition: c
                    } = o || {}, l = i.useCallback((e => {
                        c && C ? C((() => s(e))) : s(e)
                    }), [s, c]);
                    return i.useLayoutEffect((() => a.listen(l)), [a, l]), i.createElement(r.Router, {
                        basename: t,
                        children: n,
                        location: u.location,
                        navigationType: u.action,
                        navigator: a
                    })
                }, e.unstable_usePrompt = function(e) {
                    let {
                        when: t,
                        message: n
                    } = e, o = r.useBlocker(t);
                    i.useEffect((() => {
                        "blocked" === o.state && (window.confirm(n) ? setTimeout(o.proceed, 0) : o.reset())
                    }), [o, n]), i.useEffect((() => {
                        "blocked" !== o.state || t || o.reset()
                    }), [o, t])
                }, e.unstable_useViewTransitionState = J, e.useBeforeUnload = function(e, t) {
                    let {
                        capture: n
                    } = t || {};
                    i.useEffect((() => {
                        let t = null != n ? {
                            capture: n
                        } : void 0;
                        return window.addEventListener("beforeunload", e, t), () => {
                            window.removeEventListener("beforeunload", e, t)
                        }
                    }), [e, n])
                }, e.useFetcher = function(e) {
                    var t;
                    let {
                        key: n
                    } = void 0 === e ? {} : e, {
                        router: a
                    } = D(j.UseFetcher), u = M(k.UseFetcher), c = i.useContext(_), l = i.useContext(r.UNSAFE_RouteContext), f = null == (t = l.matches[l.matches.length - 1]) ? void 0 : t.route.id;
                    c || o.UNSAFE_invariant(!1), l || o.UNSAFE_invariant(!1), null == f && o.UNSAFE_invariant(!1);
                    let [d, m] = i.useState(n || "");
                    n && n !== d ? m(n) : d || m(K()), i.useEffect((() => (a.getFetcher(d), () => {
                        a.deleteFetcher(d)
                    })), [a, d]);
                    let h = i.useCallback(((e, t) => {
                            f || o.UNSAFE_invariant(!1), a.fetch(d, f, e, t)
                        }), [d, f, a]),
                        v = I(),
                        p = i.useCallback(((e, t) => {
                            v(e, s({}, t, {
                                navigate: !1,
                                fetcherKey: d
                            }))
                        }), [d, v]),
                        b = i.useMemo((() => i.forwardRef(((e, t) => i.createElement(O, s({}, e, {
                            navigate: !1,
                            fetcherKey: d,
                            ref: t
                        }))))), [d]),
                        y = u.fetchers.get(d) || o.IDLE_FETCHER,
                        g = c.get(d);
                    return i.useMemo((() => s({
                        Form: b,
                        submit: p,
                        load: h
                    }, y, {
                        data: g
                    })), [b, p, h, y, g])
                }, e.useFetchers = function() {
                    let e = M(k.UseFetchers);
                    return Array.from(e.fetchers.entries()).map((e => {
                        let [t, n] = e;
                        return s({}, n, {
                            key: t
                        })
                    }))
                }, e.useFormAction = V, e.useLinkClickHandler = B, e.useSearchParams = function(e) {
                    let t = i.useRef(m(e)),
                        n = i.useRef(!1),
                        o = r.useLocation(),
                        a = i.useMemo((() => function(e, t) {
                            let n = m(e);
                            return t && t.forEach(((e, r) => {
                                n.has(r) || t.getAll(r).forEach((e => {
                                    n.append(r, e)
                                }))
                            })), n
                        }(o.search, n.current ? null : t.current)), [o.search]),
                        u = r.useNavigate(),
                        s = i.useCallback(((e, t) => {
                            const r = m("function" == typeof e ? e(a) : e);
                            n.current = !0, u("?" + r, t)
                        }), [u, a]);
                    return [a, s]
                }, e.useSubmit = I, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(67294), n(73935), n(31673), n(57927))
        }
    }
]);