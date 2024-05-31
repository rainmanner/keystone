(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [4244], {
        91056: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(37204),
                o = n(28481),
                a = n(91950);
            class c extends r.BaseClient {
                constructor(e) {
                    const t = o.WINDOW.SENTRY_SDK_SOURCE || s.getSDKSource();
                    e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: `${t}:@sentry/browser`,
                            version: r.SDK_VERSION
                        }],
                        version: r.SDK_VERSION
                    }, super(e), e.sendClientReports && o.WINDOW.document && o.WINDOW.document.addEventListener("visibilitychange", (() => {
                        "hidden" === o.WINDOW.document.visibilityState && this._flushOutcomes()
                    }))
                }
                eventFromException(e, t) {
                    return i.eventFromException(this._options.stackParser, e, t, this._options.attachStacktrace)
                }
                eventFromMessage(e, t = "info", n) {
                    return i.eventFromMessage(this._options.stackParser, e, t, n, this._options.attachStacktrace)
                }
                sendEvent(e, t) {
                    const n = this.getIntegrationById(a.BREADCRUMB_INTEGRATION_ID);
                    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, t)
                }
                _prepareEvent(e, t, n) {
                    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n)
                }
                _flushOutcomes() {
                    const e = this._clearOutcomes();
                    if (0 === e.length) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("No outcomes to send"));
                    if (!this._dsn) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("No dsn provided, will not send outcomes"));
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Sending outcomes:", e);
                    const t = r.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, this._options),
                        n = s.createClientReportEnvelope(e, this._options.tunnel && s.dsnToString(this._dsn));
                    try {
                        "[object Navigator]" === Object.prototype.toString.call(o.WINDOW && o.WINDOW.navigator) && "function" === typeof o.WINDOW.navigator.sendBeacon && !this._options.transportOptions ? o.WINDOW.navigator.sendBeacon.bind(o.WINDOW.navigator)(t, s.serializeEnvelope(n)) : this._sendEnvelope(n)
                    } catch (e) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(e)
                    }
                }
            }
            t.BrowserClient = c
        },
        37204: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365);

            function i(e, t) {
                const n = c(e, t),
                    r = {
                        type: t && t.name,
                        value: u(t)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function o(e, t, n, i) {
                const o = r.getCurrentHub().getClient(),
                    a = o && o.getOptions().normalizeDepth,
                    l = {
                        exception: {
                            values: [{
                                type: s.isEvent(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
                                value: `Non-Error ${i?"promise rejection":"exception"} captured with keys: ${s.extractExceptionKeysForMessage(t)}`
                            }]
                        },
                        extra: {
                            __serialized__: s.normalizeToSize(t, a)
                        }
                    };
                if (n) {
                    const t = c(e, n);
                    t.length && (l.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return l
            }

            function a(e, t) {
                return {
                    exception: {
                        values: [i(e, t)]
                    }
                }
            }

            function c(e, t) {
                const n = t.stacktrace || t.stack || "",
                    r = function(e) {
                        if (e) {
                            if ("number" === typeof e.framesToPop) return e.framesToPop;
                            if (l.test(e.message)) return 1
                        }
                        return 0
                    }(t);
                try {
                    return e(n, r)
                } catch (e) {}
                return []
            }
            const l = /Minified React error #\d+;/i;

            function u(e) {
                const t = e && e.message;
                return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
            }

            function d(e, t, n, r, i) {
                let c;
                if (s.isErrorEvent(t) && t.error) return a(e, t.error);
                if (s.isDOMError(t) || s.isDOMException(t)) {
                    const i = t;
                    if ("stack" in t) c = a(e, t);
                    else {
                        const t = i.name || (s.isDOMError(i) ? "DOMError" : "DOMException"),
                            o = i.message ? `${t}: ${i.message}` : t;
                        c = p(e, o, n, r), s.addExceptionTypeValue(c, o)
                    }
                    return "code" in i && (c.tags = { ...c.tags,
                        "DOMException.code": `${i.code}`
                    }), c
                }
                return s.isError(t) ? a(e, t) : s.isPlainObject(t) || s.isEvent(t) ? (c = o(e, t, n, i), s.addExceptionMechanism(c, {
                    synthetic: !0
                }), c) : (c = p(e, t, n, r), s.addExceptionTypeValue(c, `${t}`, void 0), s.addExceptionMechanism(c, {
                    synthetic: !0
                }), c)
            }

            function p(e, t, n, r) {
                const s = {
                    message: t
                };
                if (r && n) {
                    const r = c(e, n);
                    r.length && (s.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                return s
            }
            t.eventFromError = a, t.eventFromException = function(e, t, n, r) {
                const i = d(e, t, n && n.syntheticException || void 0, r);
                return s.addExceptionMechanism(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), s.resolvedSyncPromise(i)
            }, t.eventFromMessage = function(e, t, n = "info", r, i) {
                const o = p(e, t, r && r.syntheticException || void 0, i);
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), s.resolvedSyncPromise(o)
            }, t.eventFromPlainObject = o, t.eventFromString = p, t.eventFromUnknownInput = d, t.exceptionFromError = i, t.parseStackFrames = c
        },
        28481: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = s.GLOBAL_OBJ;
            let o = 0;

            function a() {
                o++, setTimeout((() => {
                    o--
                }))
            }
            t.WINDOW = i, t.ignoreNextOnError = a, t.shouldIgnoreOnError = function() {
                return o > 0
            }, t.wrap = function e(t, n = {}, i) {
                if ("function" !== typeof t) return t;
                try {
                    const e = t.__sentry_wrapped__;
                    if (e) return e;
                    if (s.getOriginalFunction(t)) return t
                } catch (e) {
                    return t
                }
                const o = function() {
                    const o = Array.prototype.slice.call(arguments);
                    try {
                        i && "function" === typeof i && i.apply(this, arguments);
                        const r = o.map((t => e(t, n)));
                        return t.apply(this, r)
                    } catch (e) {
                        throw a(), r.withScope((t => {
                            t.addEventProcessor((e => (n.mechanism && (s.addExceptionTypeValue(e, void 0, void 0), s.addExceptionMechanism(e, n.mechanism)), e.extra = { ...e.extra,
                                arguments: o
                            }, e))), r.captureException(e)
                        })), e
                    }
                };
                try {
                    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e])
                } catch (e) {}
                s.markFunctionWrapped(o, t), s.addNonEnumerableProperty(t, "__sentry_wrapped__", o);
                try {
                    Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
                        get: () => t.name
                    })
                } catch (e) {}
                return o
            }
        },
        29929: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(28481),
                i = n(91056),
                o = n(70030),
                a = n(5503),
                c = n(19193),
                l = n(37204),
                u = n(91197),
                d = n(36034),
                p = n(20103),
                _ = n(61994),
                h = n(59842),
                f = n(88266),
                m = n(91950),
                g = n(95593),
                y = n(56578),
                E = n(93643);
            let v = {};
            s.WINDOW.Sentry && s.WINDOW.Sentry.Integrations && (v = s.WINDOW.Sentry.Integrations);
            const S = { ...v,
                ...r.Integrations,
                ...d
            };
            t.FunctionToString = r.FunctionToString, t.Hub = r.Hub, t.InboundFilters = r.InboundFilters, t.SDK_VERSION = r.SDK_VERSION, t.Scope = r.Scope, t.addBreadcrumb = r.addBreadcrumb, t.addGlobalEventProcessor = r.addGlobalEventProcessor, t.captureEvent = r.captureEvent, t.captureException = r.captureException, t.captureMessage = r.captureMessage, t.configureScope = r.configureScope, t.createTransport = r.createTransport, t.getCurrentHub = r.getCurrentHub, t.getHubFromCarrier = r.getHubFromCarrier, t.makeMain = r.makeMain, t.setContext = r.setContext, t.setExtra = r.setExtra, t.setExtras = r.setExtras, t.setTag = r.setTag, t.setTags = r.setTags, t.setUser = r.setUser, t.startTransaction = r.startTransaction, t.withScope = r.withScope, t.WINDOW = s.WINDOW, t.BrowserClient = i.BrowserClient, t.makeFetchTransport = o.makeFetchTransport, t.makeXHRTransport = a.makeXHRTransport, t.chromeStackLineParser = c.chromeStackLineParser, t.defaultStackLineParsers = c.defaultStackLineParsers, t.defaultStackParser = c.defaultStackParser, t.geckoStackLineParser = c.geckoStackLineParser, t.opera10StackLineParser = c.opera10StackLineParser, t.opera11StackLineParser = c.opera11StackLineParser, t.winjsStackLineParser = c.winjsStackLineParser, t.eventFromException = l.eventFromException, t.eventFromMessage = l.eventFromMessage, t.close = u.close, t.defaultIntegrations = u.defaultIntegrations, t.flush = u.flush, t.forceLoad = u.forceLoad, t.init = u.init, t.lastEventId = u.lastEventId, t.onLoad = u.onLoad, t.showReportDialog = u.showReportDialog, t.wrap = u.wrap, t.Replay = p.Replay, t.makeBrowserOfflineTransport = _.makeBrowserOfflineTransport, t.GlobalHandlers = h.GlobalHandlers, t.TryCatch = f.TryCatch, t.Breadcrumbs = m.Breadcrumbs, t.LinkedErrors = g.LinkedErrors, t.HttpContext = y.HttpContext, t.Dedupe = E.Dedupe, t.Integrations = S
        },
        91950: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(28481),
                o = "Breadcrumbs";
            class a {
                static __initStatic() {
                    this.id = o
                }
                __init() {
                    this.name = a.id
                }
                constructor(e) {
                    a.prototype.__init.call(this), this.options = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...e
                    }
                }
                setupOnce() {
                    var e;
                    this.options.console && s.addInstrumentationHandler("console", c), this.options.dom && s.addInstrumentationHandler("dom", (e = this.options.dom, function(t) {
                        let n, i = "object" === typeof e ? e.serializeAttribute : void 0,
                            o = "object" === typeof e && "number" === typeof e.maxStringLength ? e.maxStringLength : void 0;
                        o && o > 1024 && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" === typeof i && (i = [i]);
                        try {
                            n = t.event.target ? s.htmlTreeAsString(t.event.target, {
                                keyAttrs: i,
                                maxStringLength: o
                            }) : s.htmlTreeAsString(t.event, {
                                keyAttrs: i,
                                maxStringLength: o
                            })
                        } catch (e) {
                            n = "<unknown>"
                        }
                        0 !== n.length && r.getCurrentHub().addBreadcrumb({
                            category: `ui.${t.name}`,
                            message: n
                        }, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    })), this.options.xhr && s.addInstrumentationHandler("xhr", l), this.options.fetch && s.addInstrumentationHandler("fetch", u), this.options.history && s.addInstrumentationHandler("history", d)
                }
                addSentryBreadcrumb(e) {
                    this.options.sentry && r.getCurrentHub().addBreadcrumb({
                        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                        event_id: e.event_id,
                        level: e.level,
                        message: s.getEventDescription(e)
                    }, {
                        event: e
                    })
                }
            }

            function c(e) {
                for (let t = 0; t < e.args.length; t++)
                    if ("ref=Ref<" === e.args[t]) {
                        e.args[t + 1] = "viewRef";
                        break
                    }
                const t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: s.severityLevelFromString(e.level),
                    message: s.safeJoin(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    t.message = `Assertion failed: ${s.safeJoin(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1)
                }
                r.getCurrentHub().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            }

            function l(e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    const {
                        method: t,
                        url: n,
                        status_code: s,
                        body: i
                    } = e.xhr.__sentry_xhr__ || {};
                    r.getCurrentHub().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: t,
                            url: n,
                            status_code: s
                        },
                        type: "http"
                    }, {
                        xhr: e.xhr,
                        input: i
                    })
                }
            }

            function u(e) {
                e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? r.getCurrentHub().addBreadcrumb({
                    category: "fetch",
                    data: e.fetchData,
                    level: "error",
                    type: "http"
                }, {
                    data: e.error,
                    input: e.args
                }) : r.getCurrentHub().addBreadcrumb({
                    category: "fetch",
                    data: { ...e.fetchData,
                        status_code: e.response.status
                    },
                    type: "http"
                }, {
                    input: e.args,
                    response: e.response
                })))
            }

            function d(e) {
                let t = e.from,
                    n = e.to;
                const o = s.parseUrl(i.WINDOW.location.href);
                let a = s.parseUrl(t);
                const c = s.parseUrl(n);
                a.path || (a = o), o.protocol === c.protocol && o.host === c.host && (n = c.relative), o.protocol === a.protocol && o.host === a.host && (t = a.relative), r.getCurrentHub().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: t,
                        to: n
                    }
                })
            }
            a.__initStatic(), t.BREADCRUMB_INTEGRATION_ID = o, t.Breadcrumbs = a
        },
        93643: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);
            class s {
                constructor() {
                    s.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "Dedupe"
                }
                __init() {
                    this.name = s.id
                }
                setupOnce(e, t) {
                    const n = e => {
                        if (e.type) return e;
                        const n = t().getIntegration(s);
                        if (n) {
                            try {
                                if (function(e, t) {
                                        return !!t && (!! function(e, t) {
                                            const n = e.message,
                                                r = t.message;
                                            return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!o(e, t) && !!i(e, t))))
                                        }(e, t) || !! function(e, t) {
                                            const n = a(t),
                                                r = a(e);
                                            return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!o(e, t) && !!i(e, t)))
                                        }(e, t))
                                    }(e, n._previousEvent)) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (t) {
                                return n._previousEvent = e
                            }
                            return n._previousEvent = e
                        }
                        return e
                    };
                    n.id = this.name, e(n)
                }
            }

            function i(e, t) {
                let n = c(e),
                    r = c(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e],
                        s = n[e];
                    if (t.filename !== s.filename || t.lineno !== s.lineno || t.colno !== s.colno || t.function !== s.function) return !1
                }
                return !0
            }

            function o(e, t) {
                let n = e.fingerprint,
                    r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (e) {
                    return !1
                }
            }

            function a(e) {
                return e.exception && e.exception.values && e.exception.values[0]
            }

            function c(e) {
                const t = e.exception;
                if (t) try {
                    return t.values[0].stacktrace.frames
                } catch (e) {
                    return
                }
            }
            s.__initStatic(), t.Dedupe = s
        },
        59842: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(37204),
                o = n(28481);
            class a {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = a.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: c,
                        onunhandledrejection: l
                    }
                }
                constructor(e) {
                    a.prototype.__init.call(this), a.prototype.__init2.call(this), this._options = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...e
                    }
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    const e = this._options;
                    for (const n in e) {
                        const r = this._installFunc[n];
                        r && e[n] && (t = n, ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log(`Global Handler attached: ${t}`), r(), this._installFunc[n] = void 0)
                    }
                    var t
                }
            }

            function c() {
                s.addInstrumentationHandler("error", (e => {
                    const [t, n, r] = p();
                    if (!t.getIntegration(a)) return;
                    const {
                        msg: c,
                        url: l,
                        line: _,
                        column: h,
                        error: f
                    } = e;
                    if (o.shouldIgnoreOnError() || f && f.__sentry_own_request__) return;
                    const m = void 0 === f && s.isString(c) ? function(e, t, n, r) {
                        let i = s.isErrorEvent(e) ? e.message : e,
                            o = "Error";
                        const a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        a && (o = a[1], i = a[2]);
                        return u({
                            exception: {
                                values: [{
                                    type: o,
                                    value: i
                                }]
                            }
                        }, t, n, r)
                    }(c, l, _, h) : u(i.eventFromUnknownInput(n, f || c, void 0, r, !1), l, _, h);
                    m.level = "error", d(t, f, m, "onerror")
                }))
            }

            function l() {
                s.addInstrumentationHandler("unhandledrejection", (e => {
                    const [t, n, r] = p();
                    if (!t.getIntegration(a)) return;
                    let c = e;
                    try {
                        "reason" in e ? c = e.reason : "detail" in e && "reason" in e.detail && (c = e.detail.reason)
                    } catch (e) {}
                    if (o.shouldIgnoreOnError() || c && c.__sentry_own_request__) return !0;
                    const l = s.isPrimitive(c) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: `Non-Error promise rejection captured with value: ${String(c)}`
                            }]
                        }
                    } : i.eventFromUnknownInput(n, c, void 0, r, !0);
                    l.level = "error", d(t, c, l, "onunhandledrejection")
                }))
            }

            function u(e, t, n, r) {
                const i = e.exception = e.exception || {},
                    o = i.values = i.values || [],
                    a = o[0] = o[0] || {},
                    c = a.stacktrace = a.stacktrace || {},
                    l = c.frames = c.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    d = isNaN(parseInt(n, 10)) ? void 0 : n,
                    p = s.isString(t) && t.length > 0 ? t : s.getLocationHref();
                return 0 === l.length && l.push({
                    colno: u,
                    filename: p,
                    function: "?",
                    in_app: !0,
                    lineno: d
                }), e
            }

            function d(e, t, n, r) {
                s.addExceptionMechanism(n, {
                    handled: !1,
                    type: r
                }), e.captureEvent(n, {
                    originalException: t
                })
            }

            function p() {
                const e = r.getCurrentHub(),
                    t = e.getClient(),
                    n = t && t.getOptions() || {
                        stackParser: () => [],
                        attachStacktrace: !1
                    };
                return [e, n.stackParser, n.attachStacktrace]
            }
            a.__initStatic(), t.GlobalHandlers = a
        },
        56578: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(28481);
            class i {
                constructor() {
                    i.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "HttpContext"
                }
                __init() {
                    this.name = i.id
                }
                setupOnce() {
                    r.addGlobalEventProcessor((e => {
                        if (r.getCurrentHub().getIntegration(i)) {
                            if (!s.WINDOW.navigator && !s.WINDOW.location && !s.WINDOW.document) return e;
                            const t = e.request && e.request.url || s.WINDOW.location && s.WINDOW.location.href,
                                {
                                    referrer: n
                                } = s.WINDOW.document || {},
                                {
                                    userAgent: r
                                } = s.WINDOW.navigator || {},
                                i = { ...e.request && e.request.headers,
                                    ...n && {
                                        Referer: n
                                    },
                                    ...r && {
                                        "User-Agent": r
                                    }
                                },
                                o = { ...e.request,
                                    ...t && {
                                        url: t
                                    },
                                    headers: i
                                };
                            return { ...e,
                                request: o
                            }
                        }
                        return e
                    }))
                }
            }
            i.__initStatic(), t.HttpContext = i
        },
        36034: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(59842),
                s = n(88266),
                i = n(91950),
                o = n(95593),
                a = n(56578),
                c = n(93643);
            t.GlobalHandlers = r.GlobalHandlers, t.TryCatch = s.TryCatch, t.Breadcrumbs = i.Breadcrumbs, t.LinkedErrors = o.LinkedErrors, t.HttpContext = a.HttpContext, t.Dedupe = c.Dedupe
        },
        95593: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(37204);
            class o {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e = {}) {
                    o.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5
                }
                setupOnce() {
                    const e = r.getCurrentHub().getClient();
                    e && r.addGlobalEventProcessor(((t, n) => {
                        const s = r.getCurrentHub().getIntegration(o);
                        return s ? a(e.getOptions().stackParser, s._key, s._limit, t, n) : t
                    }))
                }
            }

            function a(e, t, n, r, i) {
                if (!r.exception || !r.exception.values || !i || !s.isInstanceOf(i.originalException, Error)) return r;
                const o = c(e, n, i.originalException, t);
                return r.exception.values = [...o, ...r.exception.values], r
            }

            function c(e, t, n, r, o = []) {
                if (!s.isInstanceOf(n[r], Error) || o.length + 1 >= t) return o;
                const a = i.exceptionFromError(e, n[r]);
                return c(e, t, n[r], r, [a, ...o])
            }
            o.__initStatic(), t.LinkedErrors = o, t._handler = a, t._walkErrorTree = c
        },
        88266: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(28481),
                i = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class o {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e) {
                    o.prototype.__init.call(this), this._options = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...e
                    }
                }
                setupOnce() {
                    this._options.setTimeout && r.fill(s.WINDOW, "setTimeout", a), this._options.setInterval && r.fill(s.WINDOW, "setInterval", a), this._options.requestAnimationFrame && r.fill(s.WINDOW, "requestAnimationFrame", c), this._options.XMLHttpRequest && "XMLHttpRequest" in s.WINDOW && r.fill(XMLHttpRequest.prototype, "send", l);
                    const e = this._options.eventTarget;
                    e && (Array.isArray(e) ? e : i).forEach(u)
                }
            }

            function a(e) {
                return function(...t) {
                    const n = t[0];
                    return t[0] = s.wrap(n, {
                        mechanism: {
                            data: {
                                function: r.getFunctionName(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }

            function c(e) {
                return function(t) {
                    return e.apply(this, [s.wrap(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: r.getFunctionName(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function l(e) {
                return function(...t) {
                    const n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
                        e in n && "function" === typeof n[e] && r.fill(n, e, (function(t) {
                            const n = {
                                    mechanism: {
                                        data: {
                                            function: e,
                                            handler: r.getFunctionName(t)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                i = r.getOriginalFunction(t);
                            return i && (n.mechanism.data.handler = r.getFunctionName(i)), s.wrap(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }

            function u(e) {
                const t = s.WINDOW,
                    n = t[e] && t[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (r.fill(n, "addEventListener", (function(t) {
                    return function(n, i, o) {
                        try {
                            "function" === typeof i.handleEvent && (i.handleEvent = s.wrap(i.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: r.getFunctionName(i),
                                        target: e
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return t.apply(this, [n, s.wrap(i, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: r.getFunctionName(i),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), o])
                    }
                })), r.fill(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        const s = n;
                        try {
                            const n = s && s.__sentry_wrapped__;
                            n && e.call(this, t, n, r)
                        } catch (e) {}
                        return e.call(this, t, s, r)
                    }
                })))
            }
            o.__initStatic(), t.TryCatch = o
        },
        91197: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(91056),
                o = n(28481),
                a = n(59842),
                c = n(88266),
                l = n(91950),
                u = n(95593),
                d = n(56578),
                p = n(93643),
                _ = n(19193),
                h = n(70030),
                f = n(5503),
                m = [new r.Integrations.InboundFilters, new r.Integrations.FunctionToString, new c.TryCatch, new l.Breadcrumbs, new a.GlobalHandlers, new u.LinkedErrors, new p.Dedupe, new d.HttpContext];

            function g(e) {
                e.startSession({
                    ignoreDuration: !0
                }), e.captureSession()
            }
            t.close = function(e) {
                const t = r.getCurrentHub().getClient();
                return t ? t.close(e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Cannot flush events and disable SDK. No client defined."), s.resolvedSyncPromise(!1))
            }, t.defaultIntegrations = m, t.flush = function(e) {
                const t = r.getCurrentHub().getClient();
                return t ? t.flush(e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Cannot flush events. No client defined."), s.resolvedSyncPromise(!1))
            }, t.forceLoad = function() {}, t.init = function(e = {}) {
                void 0 === e.defaultIntegrations && (e.defaultIntegrations = m), void 0 === e.release && ("string" === typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), o.WINDOW.SENTRY_RELEASE && o.WINDOW.SENTRY_RELEASE.id && (e.release = o.WINDOW.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0);
                const t = { ...e,
                    stackParser: s.stackParserFromStackParserOptions(e.stackParser || _.defaultStackParser),
                    integrations: r.getIntegrationsToSetup(e),
                    transport: e.transport || (s.supportsFetch() ? h.makeFetchTransport : f.makeXHRTransport)
                };
                r.initAndBind(i.BrowserClient, t), e.autoSessionTracking && function() {
                    if ("undefined" === typeof o.WINDOW.document) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                    const e = r.getCurrentHub();
                    e.captureSession && (g(e), s.addInstrumentationHandler("history", (({
                        from: e,
                        to: t
                    }) => {
                        void 0 !== e && e !== t && g(r.getCurrentHub())
                    })))
                }()
            }, t.lastEventId = function() {
                return r.getCurrentHub().lastEventId()
            }, t.onLoad = function(e) {
                e()
            }, t.showReportDialog = function(e = {}, t = r.getCurrentHub()) {
                if (!o.WINDOW.document) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Global document not defined in showReportDialog call"));
                const {
                    client: n,
                    scope: i
                } = t.getStackTop(), a = e.dsn || n && n.getDsn();
                if (!a) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("DSN not configured for showReportDialog call"));
                i && (e.user = { ...i.getUser(),
                    ...e.user
                }), e.eventId || (e.eventId = t.lastEventId());
                const c = o.WINDOW.document.createElement("script");
                c.async = !0, c.src = r.getReportDialogEndpoint(a, e), e.onLoad && (c.onload = e.onLoad);
                const l = o.WINDOW.document.head || o.WINDOW.document.body;
                l ? l.appendChild(c) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Not injecting report dialog. No injection point found in HTML")
            }, t.wrap = function(e) {
                return o.wrap(e)()
            }
        },
        19193: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = "?";

            function i(e, t, n, r) {
                const s = {
                    filename: e,
                    abs_path: e,
                    function: t,
                    in_app: !0
                };
                return void 0 !== n && (s.lineno = n), void 0 !== r && (s.colno = r), s
            }
            const o = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                c = [30, e => {
                    const t = o.exec(e);
                    if (t) {
                        if (t[2] && 0 === t[2].indexOf("eval")) {
                            const e = a.exec(t[2]);
                            e && (t[2] = e[1], t[3] = e[2], t[4] = e[3])
                        }
                        const [e, n] = v(t[1] || s, t[2]);
                        return i(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                    }
                }],
                l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                d = [50, e => {
                    const t = l.exec(e);
                    if (t) {
                        if (t[3] && t[3].indexOf(" > eval") > -1) {
                            const e = u.exec(t[3]);
                            e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                        }
                        let e = t[3],
                            n = t[1] || s;
                        return [n, e] = v(n, e), i(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                }],
                p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                _ = [40, e => {
                    const t = p.exec(e);
                    return t ? i(t[2], t[1] || s, +t[3], t[4] ? +t[4] : void 0) : void 0
                }],
                h = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                f = [10, e => {
                    const t = h.exec(e);
                    return t ? i(t[2], t[3] || s, +t[1]) : void 0
                }],
                m = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                g = [20, e => {
                    const t = m.exec(e);
                    return t ? i(t[5], t[3] || t[4] || s, +t[1], +t[2]) : void 0
                }],
                y = [c, d, _],
                E = r.createStackParser(...y),
                v = (e, t) => {
                    const n = -1 !== e.indexOf("safari-extension"),
                        r = -1 !== e.indexOf("safari-web-extension");
                    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : s, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
                };
            t.chromeStackLineParser = c, t.defaultStackLineParsers = y, t.defaultStackParser = E, t.geckoStackLineParser = d, t.opera10StackLineParser = f, t.opera11StackLineParser = g, t.winjsStackLineParser = _
        },
        70030: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365),
                i = n(67678);
            t.makeFetchTransport = function(e, t = i.getNativeFetchImplementation()) {
                return r.createTransport(e, (function(n) {
                    const r = {
                        body: n.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: e.headers,
                        keepalive: n.body.length <= 65536,
                        ...e.fetchOptions
                    };
                    try {
                        return t(e.url, r).then((e => ({
                            statusCode: e.status,
                            headers: {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            }
                        })))
                    } catch (e) {
                        return i.clearCachedFetchImplementation(), s.rejectedSyncPromise(e)
                    }
                }))
            }
        },
        61994: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365);

            function i(e) {
                return new Promise(((t, n) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
                }))
            }

            function o(e, t) {
                const n = indexedDB.open(e);
                n.onupgradeneeded = () => n.result.createObjectStore(t);
                const r = i(n);
                return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))))
            }

            function a(e) {
                return i(e.getAllKeys())
            }

            function c(e, t, n) {
                return e((e => a(e).then((r => {
                    if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), i(e.transaction)
                }))))
            }

            function l(e) {
                return e((e => a(e).then((t => {
                    if (0 !== t.length) return i(e.get(t[0])).then((n => (e.delete(t[0]), i(e.transaction).then((() => n)))))
                }))))
            }

            function u(e) {
                let t;

                function n() {
                    return void 0 == t && (t = o(e.dbName || "sentry-offline", e.storeName || "queue")), t
                }
                return {
                    insert: async t => {
                        try {
                            const r = await s.serializeEnvelope(t, e.textEncoder);
                            await c(n(), r, e.maxQueueSize || 30)
                        } catch (e) {}
                    },
                    pop: async () => {
                        try {
                            const t = await l(n());
                            if (t) return s.parseEnvelope(t, e.textEncoder || new TextEncoder, e.textDecoder || new TextDecoder)
                        } catch (e) {}
                    }
                }
            }
            t.createStore = o, t.insert = c, t.makeBrowserOfflineTransport = function(e) {
                return function(e) {
                    return t => e({ ...t,
                        createStore: u
                    })
                }(r.makeOfflineTransport(e))
            }, t.pop = l
        },
        67678: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(28481);
            let i;
            t.clearCachedFetchImplementation = function() {
                i = void 0
            }, t.getNativeFetchImplementation = function() {
                if (i) return i;
                if (r.isNativeFetch(s.WINDOW.fetch)) return i = s.WINDOW.fetch.bind(s.WINDOW);
                const e = s.WINDOW.document;
                let t = s.WINDOW.fetch;
                if (e && "function" === typeof e.createElement) try {
                    const n = e.createElement("iframe");
                    n.hidden = !0, e.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.fetch && (t = r.fetch), e.head.removeChild(n)
                } catch (e) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
                return i = t.bind(s.WINDOW)
            }
        },
        5503: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(50722),
                s = n(56365);
            t.makeXHRTransport = function(e) {
                return r.createTransport(e, (function(t) {
                    return new s.SyncPromise(((n, r) => {
                        const s = new XMLHttpRequest;
                        s.onerror = r, s.onreadystatechange = () => {
                            4 === s.readyState && n({
                                statusCode: s.status,
                                headers: {
                                    "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": s.getResponseHeader("Retry-After")
                                }
                            })
                        }, s.open("POST", e.url);
                        for (const t in e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && s.setRequestHeader(t, e.headers[t]);
                        s.send(t.body)
                    }))
                }))
            }
        },
        69533: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);

            function s(e) {
                const t = e.protocol ? `${e.protocol}:` : "",
                    n = e.port ? `:${e.port}` : "";
                return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
            }
            t.getEnvelopeEndpointWithUrlEncodedAuth = function(e, t = {}) {
                const n = "string" === typeof t ? t : t.tunnel,
                    i = "string" !== typeof t && t._metadata ? t._metadata.sdk : void 0;
                return n || `${function(e){return`${s(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return r.urlEncode({sentry_key:e.publicKey,sentry_version:"7",...t&&{sentry_client:`${t.name}/${t.version}`}})}(e,i)}`
            }, t.getReportDialogEndpoint = function(e, t) {
                const n = r.makeDsn(e),
                    i = `${s(n)}embed/error-page/`;
                let o = `dsn=${r.dsnToString(n)}`;
                for (const e in t)
                    if ("dsn" !== e)
                        if ("user" === e) {
                            const e = t.user;
                            if (!e) continue;
                            e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`)
                        } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
                return `${i}?${o}`
            }
        },
        12680: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(69533),
                i = n(69010),
                o = n(39002),
                a = n(96531),
                c = n(5258),
                l = "Not capturing exception because it's already been captured.";
            class u {
                __init() {
                    this._integrations = {}
                }
                __init2() {
                    this._integrationsInitialized = !1
                }
                __init3() {
                    this._numProcessing = 0
                }
                __init4() {
                    this._outcomes = {}
                }
                constructor(e) {
                    if (u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), u.prototype.__init4.call(this), this._options = e, e.dsn) {
                        this._dsn = r.makeDsn(e.dsn);
                        const t = s.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, e);
                        this._transport = e.transport({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...e.transportOptions,
                            url: t
                        })
                    } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("No DSN provided, client will not do anything.")
                }
                captureException(e, t, n) {
                    if (r.checkOrSetAlreadyCaught(e)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l));
                    let s = t && t.event_id;
                    return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, n))).then((e => {
                        s = e
                    }))), s
                }
                captureMessage(e, t, n, s) {
                    let i = n && n.event_id;
                    const o = r.isPrimitive(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
                    return this._process(o.then((e => this._captureEvent(e, n, s))).then((e => {
                        i = e
                    }))), i
                }
                captureEvent(e, t, n) {
                    if (t && t.originalException && r.checkOrSetAlreadyCaught(t.originalException)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l));
                    let s = t && t.event_id;
                    return this._process(this._captureEvent(e, t, n).then((e => {
                        s = e
                    }))), s
                }
                captureSession(e) {
                    this._isEnabled() ? "string" !== typeof e.release ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), a.updateSession(e, {
                        init: !1
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("SDK not enabled, will not capture session.")
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(e) {
                    const t = this._transport;
                    return t ? this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e)))) : r.resolvedSyncPromise(!0)
                }
                close(e) {
                    return this.flush(e).then((e => (this.getOptions().enabled = !1, e)))
                }
                setupIntegrations() {
                    this._isEnabled() && !this._integrationsInitialized && (this._integrations = o.setupIntegrations(this._options.integrations), this._integrationsInitialized = !0)
                }
                getIntegrationById(e) {
                    return this._integrations[e]
                }
                getIntegration(e) {
                    try {
                        return this._integrations[e.id] || null
                    } catch (t) {
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
                    }
                }
                addIntegration(e) {
                    o.setupIntegration(e, this._integrations)
                }
                sendEvent(e, t = {}) {
                    if (this._dsn) {
                        let n = i.createEventEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                        for (const e of t.attachments || []) n = r.addItemToEnvelope(n, r.createAttachmentEnvelopeItem(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                        this._sendEnvelope(n)
                    }
                }
                sendSession(e) {
                    if (this._dsn) {
                        const t = i.createSessionEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                        this._sendEnvelope(t)
                    }
                }
                recordDroppedEvent(e, t, n) {
                    if (this._options.sendClientReports) {
                        const n = `${e}:${t}`;
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
                    }
                }
                _updateSessionFromEvent(e, t) {
                    let n = !1,
                        r = !1;
                    const s = t.exception && t.exception.values;
                    if (s) {
                        r = !0;
                        for (const e of s) {
                            const t = e.mechanism;
                            if (t && !1 === t.handled) {
                                n = !0;
                                break
                            }
                        }
                    }
                    const i = "ok" === e.status;
                    (i && 0 === e.errors || i && n) && (a.updateSession(e, { ...n && {
                            status: "crashed"
                        },
                        errors: e.errors || Number(r || n)
                    }), this.captureSession(e))
                }
                _isClientDoneProcessing(e) {
                    return new r.SyncPromise((t => {
                        let n = 0;
                        const r = setInterval((() => {
                            0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                        }), 1)
                    }))
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }
                _prepareEvent(e, t, n) {
                    const r = this.getOptions(),
                        s = Object.keys(this._integrations);
                    return !t.integrations && s.length > 0 && (t.integrations = s), c.prepareEvent(r, e, t, n)
                }
                _captureEvent(e, t = {}, n) {
                    return this._processEvent(e, t, n).then((e => e.event_id), (e => {
                        if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const t = e;
                            "log" === t.logLevel ? r.logger.log(t.message) : r.logger.warn(t)
                        }
                    }))
                }
                _processEvent(e, t, n) {
                    const s = this.getOptions(),
                        {
                            sampleRate: i
                        } = s;
                    if (!this._isEnabled()) return r.rejectedSyncPromise(new r.SentryError("SDK not enabled, will not capture event.", "log"));
                    const o = p(e),
                        a = d(e),
                        c = e.type || "error",
                        l = `before send for type \`${c}\``;
                    if (a && "number" === typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), r.rejectedSyncPromise(new r.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                    const u = "replay_event" === c ? "replay" : c;
                    return this._prepareEvent(e, t, n).then((n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", u, e), new r.SentryError("An event processor returned `null`, will not send event.", "log");
                        if (t.data && !0 === t.data.__sentry__) return n;
                        const i = function(e, t, n) {
                            const {
                                beforeSend: r,
                                beforeSendTransaction: s
                            } = e;
                            return d(t) && r ? r(t, n) : p(t) && s ? s(t, n) : t
                        }(s, n, t);
                        return function(e, t) {
                            const n = `${t} must return \`null\` or a valid event.`;
                            if (r.isThenable(e)) return e.then((e => {
                                if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                                return e
                            }), (e => {
                                throw new r.SentryError(`${t} rejected with ${e}`)
                            }));
                            if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                            return e
                        }(i, l)
                    })).then((s => {
                        if (null === s) throw this.recordDroppedEvent("before_send", u, e), new r.SentryError(`${l} returned \`null\`, will not send event.`, "log");
                        const i = n && n.getSession();
                        !o && i && this._updateSessionFromEvent(i, s);
                        const a = s.transaction_info;
                        if (o && a && s.transaction !== e.transaction) {
                            const e = "custom";
                            s.transaction_info = { ...a,
                                source: e
                            }
                        }
                        return this.sendEvent(s, t), s
                    })).then(null, (e => {
                        if (e instanceof r.SentryError) throw e;
                        throw this.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), new r.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
                    }))
                }
                _process(e) {
                    this._numProcessing++, e.then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, e)))
                }
                _sendEnvelope(e) {
                    this._transport && this._dsn ? this._transport.send(e).then(null, (e => {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Error while sending event:", e)
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Transport disabled")
                }
                _clearOutcomes() {
                    const e = this._outcomes;
                    return this._outcomes = {}, Object.keys(e).map((t => {
                        const [n, r] = t.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: e[t]
                        }
                    }))
                }
            }

            function d(e) {
                return void 0 === e.type
            }

            function p(e) {
                return "transaction" === e.type
            }
            t.BaseClient = u
        },
        69010: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);
            t.createEventEnvelope = function(e, t, n, s) {
                const i = r.getSdkMetadataForEnvelopeHeader(n),
                    o = e.type && "replay_event" !== e.type ? e.type : "event";
                ! function(e, t) {
                    t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
                }(e, n && n.sdk);
                const a = r.createEventEnvelopeHeaders(e, i, s, t);
                delete e.sdkProcessingMetadata;
                const c = [{
                    type: o
                }, e];
                return r.createEnvelope(a, [c])
            }, t.createSessionEnvelope = function(e, t, n, s) {
                const i = r.getSdkMetadataForEnvelopeHeader(n),
                    o = {
                        sent_at: (new Date).toISOString(),
                        ...i && {
                            sdk: i
                        },
                        ...!!s && {
                            dsn: r.dsnToString(t)
                        }
                    },
                    a = "aggregates" in e ? [{
                        type: "sessions"
                    }, e] : [{
                        type: "session"
                    }, e];
                return r.createEnvelope(o, [a])
            }
        },
        87573: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(34070);
            t.addBreadcrumb = function(e) {
                r.getCurrentHub().addBreadcrumb(e)
            }, t.captureEvent = function(e, t) {
                return r.getCurrentHub().captureEvent(e, t)
            }, t.captureException = function(e, t) {
                return r.getCurrentHub().captureException(e, {
                    captureContext: t
                })
            }, t.captureMessage = function(e, t) {
                const n = "string" === typeof t ? t : void 0,
                    s = "string" !== typeof t ? {
                        captureContext: t
                    } : void 0;
                return r.getCurrentHub().captureMessage(e, n, s)
            }, t.configureScope = function(e) {
                r.getCurrentHub().configureScope(e)
            }, t.setContext = function(e, t) {
                r.getCurrentHub().setContext(e, t)
            }, t.setExtra = function(e, t) {
                r.getCurrentHub().setExtra(e, t)
            }, t.setExtras = function(e) {
                r.getCurrentHub().setExtras(e)
            }, t.setTag = function(e, t) {
                r.getCurrentHub().setTag(e, t)
            }, t.setTags = function(e) {
                r.getCurrentHub().setTags(e)
            }, t.setUser = function(e) {
                r.getCurrentHub().setUser(e)
            }, t.startTransaction = function(e, t) {
                return r.getCurrentHub().startTransaction({ ...e
                }, t)
            }, t.withScope = function(e) {
                r.getCurrentHub().withScope(e)
            }
        },
        34070: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(59845),
                i = n(96531),
                o = 100;
            class a {
                __init() {
                    this._stack = [{}]
                }
                constructor(e, t = new s.Scope, n = 4) {
                    this._version = n, a.prototype.__init.call(this), this.getStackTop().scope = t, e && this.bindClient(e)
                }
                isOlderThan(e) {
                    return this._version < e
                }
                bindClient(e) {
                    this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
                }
                pushScope() {
                    const e = s.Scope.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(e) {
                    const t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(e, t) {
                    const n = this._lastEventId = t && t.event_id ? t.event_id : r.uuid4(),
                        s = new Error("Sentry syntheticException");
                    return this._withClient(((r, i) => {
                        r.captureException(e, {
                            originalException: e,
                            syntheticException: s,
                            ...t,
                            event_id: n
                        }, i)
                    })), n
                }
                captureMessage(e, t, n) {
                    const s = this._lastEventId = n && n.event_id ? n.event_id : r.uuid4(),
                        i = new Error(e);
                    return this._withClient(((r, o) => {
                        r.captureMessage(e, t, {
                            originalException: e,
                            syntheticException: i,
                            ...n,
                            event_id: s
                        }, o)
                    })), s
                }
                captureEvent(e, t) {
                    const n = t && t.event_id ? t.event_id : r.uuid4();
                    return e.type || (this._lastEventId = n), this._withClient(((r, s) => {
                        r.captureEvent(e, { ...t,
                            event_id: n
                        }, s)
                    })), n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(e, t) {
                    const {
                        scope: n,
                        client: s
                    } = this.getStackTop();
                    if (!n || !s) return;
                    const {
                        beforeBreadcrumb: i = null,
                        maxBreadcrumbs: a = o
                    } = s.getOptions && s.getOptions() || {};
                    if (a <= 0) return;
                    const c = {
                            timestamp: r.dateTimestampInSeconds(),
                            ...e
                        },
                        l = i ? r.consoleSandbox((() => i(c, t))) : c;
                    null !== l && n.addBreadcrumb(l, a)
                }
                setUser(e) {
                    const t = this.getScope();
                    t && t.setUser(e)
                }
                setTags(e) {
                    const t = this.getScope();
                    t && t.setTags(e)
                }
                setExtras(e) {
                    const t = this.getScope();
                    t && t.setExtras(e)
                }
                setTag(e, t) {
                    const n = this.getScope();
                    n && n.setTag(e, t)
                }
                setExtra(e, t) {
                    const n = this.getScope();
                    n && n.setExtra(e, t)
                }
                setContext(e, t) {
                    const n = this.getScope();
                    n && n.setContext(e, t)
                }
                configureScope(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop();
                    t && n && e(t)
                }
                run(e) {
                    const t = l(this);
                    try {
                        e(this)
                    } finally {
                        l(t)
                    }
                }
                getIntegration(e) {
                    const t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(e)
                    } catch (t) {
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
                    }
                }
                startTransaction(e, t) {
                    return this._callExtensionMethod("startTransaction", e, t)
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(e = !1) {
                    if (e) return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    const e = this.getStackTop(),
                        t = e && e.scope,
                        n = t && t.getSession();
                    n && i.closeSession(n), this._sendSessionUpdate(), t && t.setSession()
                }
                startSession(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop(), {
                        release: s,
                        environment: o
                    } = n && n.getOptions() || {}, {
                        userAgent: a
                    } = r.GLOBAL_OBJ.navigator || {}, c = i.makeSession({
                        release: s,
                        environment: o,
                        ...t && {
                            user: t.getUser()
                        },
                        ...a && {
                            userAgent: a
                        },
                        ...e
                    });
                    if (t) {
                        const e = t.getSession && t.getSession();
                        e && "ok" === e.status && i.updateSession(e, {
                            status: "exited"
                        }), this.endSession(), t.setSession(c)
                    }
                    return c
                }
                shouldSendDefaultPii() {
                    const e = this.getClient(),
                        t = e && e.getOptions();
                    return Boolean(t && t.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    const {
                        scope: e,
                        client: t
                    } = this.getStackTop();
                    if (!e) return;
                    const n = e.getSession();
                    n && t && t.captureSession && t.captureSession(n)
                }
                _withClient(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop();
                    n && e(n, t)
                }
                _callExtensionMethod(e, ...t) {
                    const n = c().__SENTRY__;
                    if (n && n.extensions && "function" === typeof n.extensions[e]) return n.extensions[e].apply(this, t);
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Extension method ${e} couldn't be found, doing nothing.`)
                }
            }

            function c() {
                return r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, r.GLOBAL_OBJ
            }

            function l(e) {
                const t = c(),
                    n = d(t);
                return p(t, e), n
            }

            function u(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
            }

            function d(e) {
                return r.getGlobalSingleton("hub", (() => new a), e)
            }

            function p(e, t) {
                return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
            }
            t.API_VERSION = 4, t.Hub = a, t.getCurrentHub = function() {
                const e = c();
                return u(e) && !d(e).isOlderThan(4) || p(e, new a), r.isNodeEnv() ? function(e) {
                    try {
                        const t = c().__SENTRY__,
                            n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                        if (!n) return d(e);
                        if (!u(n) || d(n).isOlderThan(4)) {
                            const t = d(e).getStackTop();
                            p(n, new a(t.client, s.Scope.clone(t.scope)))
                        }
                        return d(n)
                    } catch (t) {
                        return d(e)
                    }
                }(e) : d(e)
            }, t.getHubFromCarrier = d, t.getMainCarrier = c, t.makeMain = l, t.setHubOnCarrier = p
        },
        50722: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(87573),
                s = n(34070),
                i = n(96531),
                o = n(50554),
                a = n(59845),
                c = n(69533),
                l = n(12680),
                u = n(58602),
                d = n(555),
                p = n(72156),
                _ = n(85895),
                h = n(39002),
                f = n(17372),
                m = n(5258),
                g = n(5917),
                y = n(85040),
                E = n(69734);
            t.addBreadcrumb = r.addBreadcrumb, t.captureEvent = r.captureEvent, t.captureException = r.captureException, t.captureMessage = r.captureMessage, t.configureScope = r.configureScope, t.setContext = r.setContext, t.setExtra = r.setExtra, t.setExtras = r.setExtras, t.setTag = r.setTag, t.setTags = r.setTags, t.setUser = r.setUser, t.startTransaction = r.startTransaction, t.withScope = r.withScope, t.Hub = s.Hub, t.getCurrentHub = s.getCurrentHub, t.getHubFromCarrier = s.getHubFromCarrier, t.getMainCarrier = s.getMainCarrier, t.makeMain = s.makeMain, t.setHubOnCarrier = s.setHubOnCarrier, t.closeSession = i.closeSession, t.makeSession = i.makeSession, t.updateSession = i.updateSession, t.SessionFlusher = o.SessionFlusher, t.Scope = a.Scope, t.addGlobalEventProcessor = a.addGlobalEventProcessor, t.getEnvelopeEndpointWithUrlEncodedAuth = c.getEnvelopeEndpointWithUrlEncodedAuth, t.getReportDialogEndpoint = c.getReportDialogEndpoint, t.BaseClient = l.BaseClient, t.initAndBind = u.initAndBind, t.createTransport = d.createTransport, t.makeOfflineTransport = p.makeOfflineTransport, t.SDK_VERSION = _.SDK_VERSION, t.getIntegrationsToSetup = h.getIntegrationsToSetup, t.Integrations = f, t.prepareEvent = m.prepareEvent, t.hasTracingEnabled = g.hasTracingEnabled, t.FunctionToString = y.FunctionToString, t.InboundFilters = E.InboundFilters
        },
        39002: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(34070),
                i = n(59845),
                o = [];

            function a(e, t) {
                t[e.name] = e, -1 === o.indexOf(e.name) && (e.setupOnce(i.addGlobalEventProcessor, s.getCurrentHub), o.push(e.name), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Integration installed: ${e.name}`))
            }
            t.getIntegrationsToSetup = function(e) {
                const t = e.defaultIntegrations || [],
                    n = e.integrations;
                let s;
                t.forEach((e => {
                    e.isDefaultInstance = !0
                })), s = Array.isArray(n) ? [...t, ...n] : "function" === typeof n ? r.arrayify(n(t)) : t;
                const i = function(e) {
                        const t = {};
                        return e.forEach((e => {
                            const {
                                name: n
                            } = e, r = t[n];
                            r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                        })), Object.values(t)
                    }(s),
                    o = i.findIndex((e => "Debug" === e.name));
                if (-1 !== o) {
                    const [e] = i.splice(o, 1);
                    i.push(e)
                }
                return i
            }, t.installedIntegrations = o, t.setupIntegration = a, t.setupIntegrations = function(e) {
                const t = {};
                return e.forEach((e => {
                    e && a(e, t)
                })), t
            }
        },
        85040: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);
            let s;
            class i {
                constructor() {
                    i.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = i.id
                }
                setupOnce() {
                    s = Function.prototype.toString, Function.prototype.toString = function(...e) {
                        const t = r.getOriginalFunction(this) || this;
                        return s.apply(t, e)
                    }
                }
            }
            i.__initStatic(), t.FunctionToString = i
        },
        69734: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
            class i {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = i.id
                }
                constructor(e = {}) {
                    this._options = e, i.prototype.__init.call(this)
                }
                setupOnce(e, t) {
                    const n = e => {
                        const n = t();
                        if (n) {
                            const t = n.getIntegration(i);
                            if (t) {
                                const r = n.getClient(),
                                    s = r ? r.getOptions() : {};
                                return a(e, o(t._options, s)) ? null : e
                            }
                        }
                        return e
                    };
                    n.id = this.name, e(n)
                }
            }

            function o(e = {}, t = {}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...s],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                }
            }

            function a(e, t) {
                return t.ignoreInternal && function(e) {
                    try {
                        return "SentryError" === e.exception.values[0].type
                    } catch (e) {}
                    return !1
                }(e) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${r.getEventDescription(e)}`), !0) : function(e, t) {
                    return !(!t || !t.length) && function(e) {
                        if (e.message) return [e.message];
                        if (e.exception) try {
                            const {
                                type: t = "",
                                value: n = ""
                            } = e.exception.values && e.exception.values[0] || {};
                            return [`${n}`, `${t}: ${n}`]
                        } catch (t) {
                            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract message for event ${r.getEventDescription(e)}`), []
                        }
                        return []
                    }(e).some((e => r.stringMatchesSomePattern(e, t)))
                }(e, t.ignoreErrors) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${r.getEventDescription(e)}`), !0) : function(e, t) {
                    if (!t || !t.length) return !1;
                    const n = c(e);
                    return !!n && r.stringMatchesSomePattern(n, t)
                }(e, t.denyUrls) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`), !0) : ! function(e, t) {
                    if (!t || !t.length) return !0;
                    const n = c(e);
                    return !n || r.stringMatchesSomePattern(n, t)
                }(e, t.allowUrls) && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`), !0)
            }

            function c(e) {
                try {
                    let t;
                    try {
                        t = e.exception.values[0].stacktrace.frames
                    } catch (e) {}
                    return t ? function(e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            const n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(t) : null
                } catch (t) {
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract url for event ${r.getEventDescription(e)}`), null
                }
            }
            i.__initStatic(), t.InboundFilters = i, t._mergeOptions = o, t._shouldDropEvent = a
        },
        17372: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(85040),
                s = n(69734);
            t.FunctionToString = r.FunctionToString, t.InboundFilters = s.InboundFilters
        },
        59845: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(96531);
            class i {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                }
                static clone(e) {
                    const t = new i;
                    return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = { ...e._tags
                    }, t._extra = { ...e._extra
                    }, t._contexts = { ...e._contexts
                    }, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata
                    }), t
                }
                addScopeListener(e) {
                    this._scopeListeners.push(e)
                }
                addEventProcessor(e) {
                    return this._eventProcessors.push(e), this
                }
                setUser(e) {
                    return this._user = e || {}, this._session && s.updateSession(this._session, {
                        user: e
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(e) {
                    return this._requestSession = e, this
                }
                setTags(e) {
                    return this._tags = { ...this._tags,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setTag(e, t) {
                    return this._tags = { ...this._tags,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setExtras(e) {
                    return this._extra = { ...this._extra,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setExtra(e, t) {
                    return this._extra = { ...this._extra,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }
                setLevel(e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }
                setTransactionName(e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }
                setContext(e, t) {
                    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
                }
                setSpan(e) {
                    return this._span = e, this._notifyScopeListeners(), this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    const e = this.getSpan();
                    return e && e.transaction
                }
                setSession(e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(e) {
                    if (!e) return this;
                    if ("function" === typeof e) {
                        const t = e(this);
                        return t instanceof i ? t : this
                    }
                    return e instanceof i ? (this._tags = { ...this._tags,
                        ...e._tags
                    }, this._extra = { ...this._extra,
                        ...e._extra
                    }, this._contexts = { ...this._contexts,
                        ...e._contexts
                    }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : r.isPlainObject(e) && (this._tags = { ...this._tags,
                        ...e.tags
                    }, this._extra = { ...this._extra,
                        ...e.extra
                    }, this._contexts = { ...this._contexts,
                        ...e.contexts
                    }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
                }
                addBreadcrumb(e, t) {
                    const n = "number" === typeof t ? t : 100;
                    if (n <= 0) return this;
                    const s = {
                        timestamp: r.dateTimestampInSeconds(),
                        ...e
                    };
                    return this._breadcrumbs = [...this._breadcrumbs, s].slice(-n), this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(e) {
                    return this._attachments.push(e), this
                }
                getAttachments() {
                    return this._attachments
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                applyToEvent(e, t = {}) {
                    if (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra,
                            ...e.extra
                        }), this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags,
                            ...e.tags
                        }), this._user && Object.keys(this._user).length && (e.user = { ...this._user,
                            ...e.user
                        }), this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts,
                            ...e.contexts
                        }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                        e.contexts = {
                            trace: this._span.getTraceContext(),
                            ...e.contexts
                        };
                        const t = this._span.transaction && this._span.transaction.name;
                        t && (e.tags = {
                            transaction: t,
                            ...e.tags
                        })
                    }
                    return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                        ...this._sdkProcessingMetadata
                    }, this._notifyEventProcessors([...o(), ...this._eventProcessors], e, t)
                }
                setSDKProcessingMetadata(e) {
                    return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
                        ...e
                    }, this
                }
                _notifyEventProcessors(e, t, n, s = 0) {
                    return new r.SyncPromise(((i, o) => {
                        const a = e[s];
                        if (null === t || "function" !== typeof a) i(t);
                        else {
                            const c = a({ ...t
                            }, n);
                            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === c && r.logger.log(`Event processor "${a.id}" dropped event`), r.isThenable(c) ? c.then((t => this._notifyEventProcessors(e, t, n, s + 1).then(i))).then(null, o) : this._notifyEventProcessors(e, c, n, s + 1).then(i).then(null, o)
                        }
                    }))
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
                        e(this)
                    })), this._notifyingListeners = !1)
                }
                _applyFingerprint(e) {
                    e.fingerprint = e.fingerprint ? r.arrayify(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                }
            }

            function o() {
                return r.getGlobalSingleton("globalEventProcessors", (() => []))
            }
            t.Scope = i, t.addGlobalEventProcessor = function(e) {
                o().push(e)
            }
        },
        58602: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(34070);
            t.initAndBind = function(e, t) {
                !0 === t.debug && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.logger.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                const n = s.getCurrentHub(),
                    i = n.getScope();
                i && i.update(t.initialScope);
                const o = new e(t);
                n.bindClient(o)
            }
        },
        96531: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);

            function s(e, t = {}) {
                if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || r.timestampInSeconds(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : r.uuid4()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" === typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" === typeof t.duration) e.duration = t.duration;
                else {
                    const t = e.timestamp - e.started;
                    e.duration = t >= 0 ? t : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" === typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }
            t.closeSession = function(e, t) {
                let n = {};
                t ? n = {
                    status: t
                } : "ok" === e.status && (n = {
                    status: "exited"
                }), s(e, n)
            }, t.makeSession = function(e) {
                const t = r.timestampInSeconds(),
                    n = {
                        sid: r.uuid4(),
                        init: !0,
                        timestamp: t,
                        started: t,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => function(e) {
                            return r.dropUndefinedKeys({
                                sid: `${e.sid}`,
                                init: e.init,
                                started: new Date(1e3 * e.started).toISOString(),
                                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                status: e.status,
                                errors: e.errors,
                                did: "number" === typeof e.did || "string" === typeof e.did ? `${e.did}` : void 0,
                                duration: e.duration,
                                attrs: {
                                    release: e.release,
                                    environment: e.environment,
                                    ip_address: e.ipAddress,
                                    user_agent: e.userAgent
                                }
                            })
                        }(n)
                    };
                return e && s(n, e), n
            }, t.updateSession = s
        },
        50554: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(34070);
            class i {
                __init() {
                    this.flushTimeout = 60
                }
                __init2() {
                    this._pendingAggregates = {}
                }
                __init3() {
                    this._isEnabled = !0
                }
                constructor(e, t) {
                    i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), this._client = e, this._intervalId = setInterval((() => this.flush()), 1e3 * this.flushTimeout), this._sessionAttrs = t
                }
                flush() {
                    const e = this.getSessionAggregates();
                    0 !== e.aggregates.length && (this._pendingAggregates = {}, this._client.sendSession(e))
                }
                getSessionAggregates() {
                    const e = Object.keys(this._pendingAggregates).map((e => this._pendingAggregates[parseInt(e)])),
                        t = {
                            attrs: this._sessionAttrs,
                            aggregates: e
                        };
                    return r.dropUndefinedKeys(t)
                }
                close() {
                    clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
                }
                incrementSessionStatusCount() {
                    if (!this._isEnabled) return;
                    const e = s.getCurrentHub().getScope(),
                        t = e && e.getRequestSession();
                    t && t.status && (this._incrementSessionStatusCount(t.status, new Date), e && e.setRequestSession(void 0))
                }
                _incrementSessionStatusCount(e, t) {
                    const n = new Date(t).setSeconds(0, 0);
                    this._pendingAggregates[n] = this._pendingAggregates[n] || {};
                    const r = this._pendingAggregates[n];
                    switch (r.started || (r.started = new Date(n).toISOString()), e) {
                        case "errored":
                            return r.errored = (r.errored || 0) + 1, r.errored;
                        case "ok":
                            return r.exited = (r.exited || 0) + 1, r.exited;
                        default:
                            return r.crashed = (r.crashed || 0) + 1, r.crashed
                    }
                }
            }
            t.SessionFlusher = i
        },
        555: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365);

            function s(e, t) {
                if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
            }
            t.DEFAULT_TRANSPORT_BUFFER_SIZE = 30, t.createTransport = function(e, t, n = r.makePromiseBuffer(e.bufferSize || 30)) {
                let i = {};
                return {
                    send: function(o) {
                        const a = [];
                        if (r.forEachEnvelopeItem(o, ((t, n) => {
                                const o = r.envelopeItemTypeToDataCategory(n);
                                if (r.isRateLimited(i, o)) {
                                    const r = s(t, n);
                                    e.recordDroppedEvent("ratelimit_backoff", o, r)
                                } else a.push(t)
                            })), 0 === a.length) return r.resolvedSyncPromise();
                        const c = r.createEnvelope(o[0], a),
                            l = t => {
                                r.forEachEnvelopeItem(c, ((n, i) => {
                                    const o = s(n, i);
                                    e.recordDroppedEvent(t, r.envelopeItemTypeToDataCategory(i), o)
                                }))
                            };
                        return n.add((() => t({
                            body: r.serializeEnvelope(c, e.textEncoder)
                        }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), i = r.updateRateLimits(i, e), e)), (e => {
                            throw l("network_error"), e
                        })))).then((e => e), (e => {
                            if (e instanceof r.SentryError) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), l("queue_overflow"), r.resolvedSyncPromise();
                            throw e
                        }))
                    },
                    flush: e => n.drain(e)
                }
            }
        },
        72156: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = 5e3;

            function i(e, t) {
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info(`[Offline]: ${e}`, t)
            }
            t.MIN_DELAY = 100, t.START_DELAY = s, t.makeOfflineTransport = function(e) {
                return t => {
                    const n = e(t),
                        o = t.createStore ? t.createStore(t) : void 0;
                    let a, c = s;

                    function l(e) {
                        o && (a && clearTimeout(a), a = setTimeout((async () => {
                            a = void 0;
                            const e = await o.pop();
                            e && (i("Attempting to send previously queued event"), d(e).catch((e => {
                                i("Failed to retry sending", e)
                            })))
                        }), e), "number" !== typeof a && a.unref && a.unref())
                    }

                    function u() {
                        a || (l(c), c = Math.min(2 * c, 36e5))
                    }
                    async function d(e) {
                        try {
                            const t = await n.send(e);
                            let i = 100;
                            if (t)
                                if (t.headers && t.headers["retry-after"]) i = r.parseRetryAfterHeader(t.headers["retry-after"]);
                                else if ((t.statusCode || 0) >= 400) return t;
                            return l(i), c = s, t
                        } catch (n) {
                            if (o && await
                                function(e, n, s) {
                                    return !r.envelopeContainsItemType(e, ["replay_event", "replay_recording", "client_report"]) && (!t.shouldStore || t.shouldStore(e, n, s))
                                }(e, n, c)) return await o.insert(e), u(), i("Error sending. Event queued", n), {};
                            throw n
                        }
                    }
                    return t.flushAtStartup && u(), {
                        send: d,
                        flush: e => n.flush(e)
                    }
                }
            }
        },
        5917: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(34070);
            t.hasTracingEnabled = function(e) {
                if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const t = r.getCurrentHub().getClient(),
                    n = e || t && t.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        5258: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(56365),
                s = n(59845);

            function i(e, t) {
                const n = r.GLOBAL_OBJ._sentryDebugIds;
                if (!n) return;
                const s = Object.keys(n).reduce(((e, r) => {
                        const s = t(r);
                        for (const t of s)
                            if (t.abs_path) {
                                e[t.abs_path] = n[r];
                                break
                            }
                        return e
                    }), {}),
                    i = new Set;
                try {
                    e.exception.values.forEach((e => {
                        e.stacktrace.frames.forEach((e => {
                            e.abs_path && i.add(e.abs_path)
                        }))
                    }))
                } catch (e) {}
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                const o = e.debug_meta.images;
                i.forEach((e => {
                    s[e] && o.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: s[e]
                    })
                }))
            }
            t.applyDebugMetadata = i, t.prepareEvent = function(e, t, n, o) {
                const {
                    normalizeDepth: a = 3,
                    normalizeMaxBreadth: c = 1e3
                } = e, l = { ...t,
                    event_id: t.event_id || n.event_id || r.uuid4(),
                    timestamp: t.timestamp || r.dateTimestampInSeconds()
                }, u = n.integrations || e.integrations.map((e => e.name));
                ! function(e, t) {
                    const {
                        environment: n,
                        release: s,
                        dist: i,
                        maxValueLength: o = 250
                    } = t;
                    "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== s && (e.release = s), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = r.truncate(e.message, o));
                    const a = e.exception && e.exception.values && e.exception.values[0];
                    a && a.value && (a.value = r.truncate(a.value, o));
                    const c = e.request;
                    c && c.url && (c.url = r.truncate(c.url, o))
                }(l, e),
                function(e, t) {
                    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
                }(l, u), i(l, e.stackParser);
                let d = o;
                n.captureContext && (d = s.Scope.clone(d).update(n.captureContext));
                let p = r.resolvedSyncPromise(l);
                if (d) {
                    if (d.getAttachments) {
                        const e = [...n.attachments || [], ...d.getAttachments()];
                        e.length && (n.attachments = e)
                    }
                    p = d.applyToEvent(l, n)
                }
                return p.then((e => "number" === typeof a && a > 0 ? function(e, t, n) {
                    if (!e) return null;
                    const s = { ...e,
                        ...e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map((e => ({ ...e,
                                ...e.data && {
                                    data: r.normalize(e.data, t, n)
                                }
                            })))
                        },
                        ...e.user && {
                            user: r.normalize(e.user, t, n)
                        },
                        ...e.contexts && {
                            contexts: r.normalize(e.contexts, t, n)
                        },
                        ...e.extra && {
                            extra: r.normalize(e.extra, t, n)
                        }
                    };
                    return e.contexts && e.contexts.trace && s.contexts && (s.contexts.trace = e.contexts.trace, e.contexts.trace.data && (s.contexts.trace.data = r.normalize(e.contexts.trace.data, t, n))), e.spans && (s.spans = e.spans.map((e => (e.data && (e.data = r.normalize(e.data, t, n)), e)))), s
                }(e, a, c) : e))
            }
        },
        85895: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SDK_VERSION = "7.40.0"
        },
        87464: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.REACT_MOUNT_OP = "ui.react.mount", t.REACT_RENDER_OP = "ui.react.render", t.REACT_UPDATE_OP = "ui.react.update"
        },
        97794: (e, t, n) => {
            var {
                _interopDefault: r,
                _interopNamespace: s
            } = n(48554);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(29929),
                o = n(56365),
                a = n(65885),
                c = n(67294),
                l = r(a),
                u = s(c),
                d = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";

            function p(e) {
                const t = e.match(/^([^.]+)/);
                return null !== t && parseInt(t[0]) >= 17
            }
            const _ = "unknown",
                h = {
                    componentStack: null,
                    error: null,
                    eventId: null
                };
            class f extends u.Component {
                constructor(...e) {
                    super(...e), f.prototype.__init.call(this), f.prototype.__init2.call(this)
                }
                __init() {
                    this.state = h
                }
                componentDidCatch(e, {
                    componentStack: t
                }) {
                    const {
                        beforeCapture: n,
                        onError: r,
                        showDialog: s,
                        dialogOptions: a
                    } = this.props;
                    i.withScope((c => {
                        if (p(u.version) && o.isError(e)) {
                            const n = new Error(e.message);
                            n.name = `React ErrorBoundary ${n.name}`, n.stack = t, e.cause = n
                        }
                        n && n(c, e, t);
                        const l = i.captureException(e, {
                            contexts: {
                                react: {
                                    componentStack: t
                                }
                            }
                        });
                        r && r(e, t, l), s && i.showReportDialog({ ...a,
                            eventId: l
                        }), this.setState({
                            error: e,
                            componentStack: t,
                            eventId: l
                        })
                    }))
                }
                componentDidMount() {
                    const {
                        onMount: e
                    } = this.props;
                    e && e()
                }
                componentWillUnmount() {
                    const {
                        error: e,
                        componentStack: t,
                        eventId: n
                    } = this.state, {
                        onUnmount: r
                    } = this.props;
                    r && r(e, t, n)
                }
                __init2() {
                    this.resetErrorBoundary = () => {
                        const {
                            onReset: e
                        } = this.props, {
                            error: t,
                            componentStack: n,
                            eventId: r
                        } = this.state;
                        e && e(t, n, r), this.setState(h)
                    }
                }
                render() {
                    const {
                        fallback: e,
                        children: t
                    } = this.props, n = this.state;
                    if (n.error) {
                        let t;
                        return t = "function" === typeof e ? e({
                            error: n.error,
                            componentStack: n.componentStack,
                            resetError: this.resetErrorBoundary,
                            eventId: n.eventId
                        }) : e, u.isValidElement(t) ? t : (e && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("fallback did not produce a valid ReactElement"), null)
                    }
                    return "function" === typeof t ? t() : t
                }
            }
            t.ErrorBoundary = f, t.UNKNOWN_COMPONENT = _, t.isAtLeastReact17 = p, t.withErrorBoundary = function(e, t) {
                const n = e.displayName || e.name || _,
                    r = n => u.createElement(f, { ...t,
                        __self: this,
                        __source: {
                            fileName: d,
                            lineNumber: 185
                        }
                    }, u.createElement(e, { ...n,
                        __self: this,
                        __source: {
                            fileName: d,
                            lineNumber: 186
                        }
                    }));
                return r.displayName = `errorBoundary(${n})`, l(r, e), r
            }
        },
        28339: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(29929),
                s = n(2455),
                i = n(20323),
                o = n(97794),
                a = n(154),
                c = n(66400),
                l = n(42920),
                u = n(3623);
            t.init = s.init, t.Profiler = i.Profiler, t.useProfiler = i.useProfiler, t.withProfiler = i.withProfiler, t.ErrorBoundary = o.ErrorBoundary, t.withErrorBoundary = o.withErrorBoundary, t.createReduxEnhancer = a.createReduxEnhancer, t.reactRouterV3Instrumentation = c.reactRouterV3Instrumentation, t.reactRouterV4Instrumentation = l.reactRouterV4Instrumentation, t.reactRouterV5Instrumentation = l.reactRouterV5Instrumentation, t.withSentryRouting = l.withSentryRouting, t.reactRouterV6Instrumentation = u.reactRouterV6Instrumentation, t.withSentryReactRouterV6Routing = u.withSentryReactRouterV6Routing, t.wrapCreateBrowserRouter = u.wrapCreateBrowserRouter, t.wrapUseRoutes = u.wrapUseRoutes;
            for (const e in r) "default" === e || t.hasOwnProperty(e) || (t[e] = r[e])
        },
        20323: (e, t, n) => {
            var {
                _interopDefault: r,
                _interopNamespace: s
            } = n(48554);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(29929),
                o = n(56365),
                a = n(65885),
                c = n(67294),
                l = n(87464),
                u = r(a),
                d = s(c),
                p = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx",
                _ = "unknown";
            class h extends d.Component {
                __init() {
                    this._mountSpan = void 0
                }
                __init2() {
                    this._updateSpan = void 0
                }
                static __initStatic() {
                    this.defaultProps = {
                        disabled: !1,
                        includeRender: !0,
                        includeUpdates: !0
                    }
                }
                constructor(e) {
                    super(e), h.prototype.__init.call(this), h.prototype.__init2.call(this);
                    const {
                        name: t,
                        disabled: n = !1
                    } = this.props;
                    if (n) return;
                    const r = f();
                    r && (this._mountSpan = r.startChild({
                        description: `<${t}>`,
                        op: l.REACT_MOUNT_OP
                    }))
                }
                componentDidMount() {
                    this._mountSpan && this._mountSpan.finish()
                }
                shouldComponentUpdate({
                    updateProps: e,
                    includeUpdates: t = !0
                }) {
                    if (t && this._mountSpan && e !== this.props.updateProps) {
                        const t = Object.keys(e).filter((t => e[t] !== this.props.updateProps[t]));
                        if (t.length > 0) {
                            const e = o.timestampWithMs();
                            this._updateSpan = this._mountSpan.startChild({
                                data: {
                                    changedProps: t
                                },
                                description: `<${this.props.name}>`,
                                op: l.REACT_UPDATE_OP,
                                startTimestamp: e
                            })
                        }
                    }
                    return !0
                }
                componentDidUpdate() {
                    this._updateSpan && (this._updateSpan.finish(), this._updateSpan = void 0)
                }
                componentWillUnmount() {
                    const {
                        name: e,
                        includeRender: t = !0
                    } = this.props;
                    this._mountSpan && t && this._mountSpan.startChild({
                        description: `<${e}>`,
                        endTimestamp: o.timestampWithMs(),
                        op: l.REACT_RENDER_OP,
                        startTimestamp: this._mountSpan.endTimestamp
                    })
                }
                render() {
                    return this.props.children
                }
            }

            function f(e = i.getCurrentHub()) {
                if (e) {
                    const t = e.getScope();
                    if (t) return t.getTransaction()
                }
            }
            h.__initStatic(), t.Profiler = h, t.UNKNOWN_COMPONENT = _, t.getActiveTransaction = f, t.useProfiler = function(e, t = {
                disabled: !1,
                hasRenderSpan: !0
            }) {
                const [n] = d.useState((() => {
                    if (t && t.disabled) return;
                    const n = f();
                    return n ? n.startChild({
                        description: `<${e}>`,
                        op: l.REACT_MOUNT_OP
                    }) : void 0
                }));
                d.useEffect((() => (n && n.finish(), () => {
                    n && t.hasRenderSpan && n.startChild({
                        description: `<${e}>`,
                        endTimestamp: o.timestampWithMs(),
                        op: l.REACT_RENDER_OP,
                        startTimestamp: n.endTimestamp
                    })
                })), [])
            }, t.withProfiler = function(e, t) {
                const n = t && t.name || e.displayName || e.name || _,
                    r = r => d.createElement(h, { ...t,
                        name: n,
                        updateProps: r,
                        __self: this,
                        __source: {
                            fileName: p,
                            lineNumber: 146
                        }
                    }, d.createElement(e, { ...r,
                        __self: this,
                        __source: {
                            fileName: p,
                            lineNumber: 147
                        }
                    }));
                return r.displayName = `profiler(${n})`, u(r, e), r
            }
        },
        42920: (e, t, n) => {
            var {
                _interopDefault: r,
                _interopNamespace: s
            } = n(48554);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(29929),
                o = n(65885),
                a = n(67294),
                c = r(o),
                l = s(a);
            let u;

            function d(e, t, n = [], r) {
                function s(e) {
                    if (0 === n.length || !r) return [e, "url"];
                    const t = p(n, e, r);
                    for (let e = 0; e < t.length; e++)
                        if (t[e].match.isExact) return [t[e].match.path, "route"];
                    return [e, "url"]
                }
                const o = {
                    "routing.instrumentation": t
                };
                return (t, n = !0, r = !0) => {
                    const a = e && e.location ? e.location.pathname : i.WINDOW && i.WINDOW.location ? i.WINDOW.location.pathname : void 0;
                    if (n && a) {
                        const [e, n] = s(a);
                        u = t({
                            name: e,
                            op: "pageload",
                            tags: o,
                            metadata: {
                                source: n
                            }
                        })
                    }
                    r && e.listen && e.listen(((e, n) => {
                        if (n && ("PUSH" === n || "POP" === n)) {
                            u && u.finish();
                            const [n, r] = s(e.pathname);
                            u = t({
                                name: n,
                                op: "navigation",
                                tags: o,
                                metadata: {
                                    source: r
                                }
                            })
                        }
                    }))
                }
            }

            function p(e, t, n, r = []) {
                return e.some((e => {
                    const s = e.path ? n(t, e) : r.length ? r[r.length - 1].match : function(e) {
                        return {
                            path: "/",
                            url: "/",
                            params: {},
                            isExact: "/" === e
                        }
                    }(t);
                    return s && (r.push({
                        route: e,
                        match: s
                    }), e.routes && p(e.routes, t, n, r)), !!s
                })), r
            }
            t.reactRouterV4Instrumentation = function(e, t, n) {
                return d(e, "react-router-v4", t, n)
            }, t.reactRouterV5Instrumentation = function(e, t, n) {
                return d(e, "react-router-v5", t, n)
            }, t.withSentryRouting = function(e) {
                const t = e.displayName || e.name,
                    n = t => (u && t && t.computedMatch && t.computedMatch.isExact && u.setName(t.computedMatch.path, "route"), l.createElement(e, { ...t,
                        __self: this,
                        __source: {
                            fileName: "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx",
                            lineNumber: 174
                        }
                    }));
                return n.displayName = `sentryRoute(${t})`, c(n, e), n
            }
        },
        66400: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(29929);

            function s(e, t, n, r) {
                let s = t.pathname;
                n({
                    location: t,
                    routes: e
                }, ((e, t, n) => {
                    if (e || !n) return r(s);
                    const i = function(e) {
                        if (!Array.isArray(e) || 0 === e.length) return "";
                        const t = e.filter((e => !!e.path));
                        let n = -1;
                        for (let e = t.length - 1; e >= 0; e--) {
                            const r = t[e];
                            if (r.path && r.path.startsWith("/")) {
                                n = e;
                                break
                            }
                        }
                        return t.slice(n).filter((({
                            path: e
                        }) => !!e)).map((({
                            path: e
                        }) => e)).join("")
                    }(n.routes || []);
                    return 0 === i.length || "/*" === i ? r(s) : (s = i, r(s, "route"))
                }))
            }
            t.reactRouterV3Instrumentation = function(e, t, n) {
                return (i, o = !0, a = !0) => {
                    let c, l;
                    o && r.WINDOW && r.WINDOW.location && s(t, r.WINDOW.location, n, ((e, t = "url") => {
                        l = e, c = i({
                            name: l,
                            op: "pageload",
                            tags: {
                                "routing.instrumentation": "react-router-v3"
                            },
                            metadata: {
                                source: t
                            }
                        })
                    })), a && e.listen && e.listen((e => {
                        if ("PUSH" === e.action || "POP" === e.action) {
                            c && c.finish();
                            const r = {
                                "routing.instrumentation": "react-router-v3"
                            };
                            l && (r.from = l), s(t, e, n, ((e, t = "url") => {
                                l = e, c = i({
                                    name: l,
                                    op: "navigation",
                                    tags: r,
                                    metadata: {
                                        source: t
                                    }
                                })
                            }))
                        }
                    }))
                }
            }
        },
        3623: (e, t, n) => {
            var {
                _interopDefault: r
            } = n(48554);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(29929),
                i = n(56365),
                o = n(65885),
                a = n(67294),
                c = r(o),
                l = r(a),
                u = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx";
            let d, p, _, h, f, m, g, y;
            const E = {
                "routing.instrumentation": "react-router-v6"
            };

            function v(e, t, n) {
                if (!e || 0 === e.length) return [t.pathname, "url"];
                let r = "";
                if (n)
                    for (let e = 0; e < n.length; e++) {
                        const s = n[e],
                            o = s.route;
                        if (o) {
                            if (o.index) return [s.pathname, "route"];
                            const e = o.path;
                            if (e) {
                                const n = "/" === e[0] || "/" === r[r.length - 1] ? e : `/${e}`;
                                if (r += n, s.pathname === t.pathname) return i.getNumberOfUrlSegments(r) !== i.getNumberOfUrlSegments(s.pathname) && "/*" !== r.slice(-2) ? [n, "route"] : [r, "route"]
                            }
                        }
                    }
                return [t.pathname, "url"]
            }

            function S(e, t, n) {
                const r = Array.isArray(n) ? n : m(t, e);
                d && r && d.setName(...v(t, e, r))
            }

            function b(e, t, n, r) {
                const s = Array.isArray(r) ? r : m(t, e);
                if (y && ("PUSH" === n || "POP" === n) && s) {
                    d && d.finish();
                    const [n, r] = v(t, e, s);
                    d = g({
                        name: n,
                        op: "navigation",
                        tags: E,
                        metadata: {
                            source: r
                        }
                    })
                }
            }
            t.reactRouterV6Instrumentation = function(e, t, n, r, i) {
                return (o, a = !0, c = !0) => {
                    const l = s.WINDOW && s.WINDOW.location && s.WINDOW.location.pathname;
                    a && l && (d = o({
                        name: l,
                        op: "pageload",
                        tags: E,
                        metadata: {
                            source: "url"
                        }
                    })), p = e, _ = t, h = n, m = i, f = r, g = o, y = c
                }
            }, t.withSentryReactRouterV6Routing = function(e) {
                if (!p || !_ || !h || !f || !m || !g) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ${p}. useLocation: ${_}. useNavigationType: ${h}.\n      createRoutesFromChildren: ${f}. matchRoutes: ${m}. customStartTransaction: ${g}.`), e;
                let t = !0;
                const n = n => {
                    const r = _(),
                        s = h();
                    return p((() => {
                        const e = f(n.children);
                        t ? (S(r, e), t = !1) : b(r, e, s)
                    }), [r, s]), l.createElement(e, { ...n,
                        __self: this,
                        __source: {
                            fileName: u,
                            lineNumber: 197
                        }
                    })
                };
                return c(n, e), n
            }, t.wrapCreateBrowserRouter = function(e) {
                return function(t, n) {
                    const r = e(t, n);
                    return "POP" === r.state.historyAction && d && S(r.state.location, t), r.subscribe((e => {
                        const n = e.location;
                        y && ("PUSH" === e.historyAction || "POP" === e.historyAction) && d && b(n, t, e.historyAction)
                    })), r
                }
            }, t.wrapUseRoutes = function(e) {
                if (!p || !_ || !h || !m || !g) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), e;
                let t = !0;
                return (n, r) => l.createElement((() => {
                    const s = e(n, r),
                        i = _(),
                        o = h(),
                        a = "string" === typeof r || r && r.pathname ? r : i;
                    return p((() => {
                        const e = "string" === typeof a ? {
                            pathname: a
                        } : a;
                        t ? (S(e, n), t = !1) : b(e, n, o)
                    }), [o, a]), s
                }), {
                    __self: this,
                    __source: {
                        fileName: u,
                        lineNumber: 248
                    }
                })
            }
        },
        154: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(29929),
                s = {
                    actionTransformer: e => e,
                    stateTransformer: e => e || null
                };
            t.createReduxEnhancer = function(e) {
                const t = { ...s,
                    ...e
                };
                return e => (n, s) => e(((e, s) => {
                    const i = n(e, s);
                    return r.configureScope((e => {
                        const n = t.actionTransformer(s);
                        "undefined" !== typeof n && null !== n && e.addBreadcrumb({
                            category: "redux.action",
                            data: n,
                            type: "info"
                        });
                        const r = t.stateTransformer(i);
                        "undefined" !== typeof r && null !== r ? e.setContext("state", {
                            state: {
                                type: "redux",
                                value: r
                            }
                        }) : e.setContext("state", null);
                        const {
                            configureScopeWithState: o
                        } = t;
                        "function" === typeof o && o(e, i)
                    })), i
                }), s)
            }
        },
        2455: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(29929);
            t.init = function(e) {
                e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.react",
                    packages: [{
                        name: "npm:@sentry/react",
                        version: r.SDK_VERSION
                    }],
                    version: r.SDK_VERSION
                }, r.init(e)
            }
        },
        65885: (e, t, n) => {
            "use strict";
            var r = n(59864),
                s = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                o = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {};

            function c(e) {
                return r.isMemo(e) ? o : a[e.$$typeof] || s
            }
            a[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, a[r.Memo] = o;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                _ = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (h) {
                        var s = _(n);
                        s && s !== h && e(t, s, r)
                    }
                    var o = u(n);
                    d && (o = o.concat(d(n)));
                    for (var a = c(t), f = c(n), m = 0; m < o.length; ++m) {
                        var g = o[m];
                        if (!i[g] && (!r || !r[g]) && (!f || !f[g]) && (!a || !a[g])) {
                            var y = p(n, g);
                            try {
                                l(t, g, y)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        20103: (e, t, n) => {
            var r = n(34155);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(50722),
                i = n(56365),
                o = i.GLOBAL_OBJ,
                a = "sentryReplaySession",
                c = "replay_event",
                l = "Unable to send Replay",
                u = 3e5,
                d = u,
                p = 36e5;
            var _;

            function h(e) {
                const t = null === e || void 0 === e ? void 0 : e.host;
                return Boolean(t && t.shadowRoot && t.shadowRoot === e)
            }

            function f({
                maskInputOptions: e,
                tagName: t,
                type: n
            }) {
                return e[t.toLowerCase()] || e[n] || "input" === t && !n && e.text
            }

            function m({
                input: e,
                maskInputSelector: t,
                unmaskInputSelector: n,
                maskInputOptions: r,
                tagName: s,
                type: i,
                value: o,
                maskInputFn: a
            }) {
                let c = o || "";
                return n && e.matches(n) || (f({
                    maskInputOptions: r,
                    tagName: s,
                    type: i
                }) || t && e.matches(t)) && (c = a ? a(c) : "*".repeat(c.length)), c
            }! function(e) {
                e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
            }(_ || (_ = {}));
            const g = "__rrweb_original__";
            let y = 1;
            const E = new RegExp("[^a-z0-9-_:]"),
                v = -2;

            function S(e) {
                return e ? e.replace(/[\S]/g, "*") : ""
            }

            function b(e) {
                try {
                    const t = e.rules || e.cssRules;
                    return t ? Array.from(t).map(T).join("") : null
                } catch (e) {
                    return null
                }
            }

            function T(e) {
                let t = e.cssText;
                if (function(e) {
                        return "styleSheet" in e
                    }(e)) try {
                    t = b(e.styleSheet) || t
                } catch (e) {}
                return t
            }
            let w, k;
            const x = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                R = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                O = /^(data:)([^,]*),(.*)/i;

            function D(e, t) {
                return (e || "").replace(x, ((e, n, r, s, i, o) => {
                    const a = r || i || o,
                        c = n || s || "";
                    if (!a) return e;
                    if (!R.test(a)) return `url(${c}${a}${c})`;
                    if (O.test(a)) return `url(${c}${a}${c})`;
                    if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
                    const l = t.split("/"),
                        u = a.split("/");
                    l.pop();
                    for (const e of u) "." !== e && (".." === e ? l.pop() : l.push(e));
                    return `url(${c}${l.join("/")}${c})`
                }))
            }
            const N = /^[^ \t\n\r\u000c]+/,
                I = /^[, \t\n\r\u000c]+/;

            function C(e, t) {
                if (!t || "" === t.trim()) return t;
                const n = e.createElement("a");
                return n.href = t, n.href
            }

            function A() {
                const e = document.createElement("a");
                return e.href = "", e.href
            }

            function M(e, t, n, r, s, i) {
                return r ? "src" === n || "href" === n || "xlink:href" === n && "#" !== r[0] ? C(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
                    if ("" === t.trim()) return t;
                    let n = 0;

                    function r(e) {
                        let r, s = e.exec(t.substring(n));
                        return s ? (r = s[0], n += r.length, r) : ""
                    }
                    let s = [];
                    for (; r(I), !(n >= t.length);) {
                        let i = r(N);
                        if ("," === i.slice(-1)) i = C(e, i.substring(0, i.length - 1)), s.push(i);
                        else {
                            let r = "";
                            i = C(e, i);
                            let o = !1;
                            for (;;) {
                                let e = t.charAt(n);
                                if ("" === e) {
                                    s.push((i + r).trim());
                                    break
                                }
                                if (o) ")" === e && (o = !1);
                                else {
                                    if ("," === e) {
                                        n += 1, s.push((i + r).trim());
                                        break
                                    }
                                    "(" === e && (o = !0)
                                }
                                r += e, n += 1
                            }
                        }
                    }
                    return s.join(", ")
                }(e, r) : "style" === n ? D(r, A()) : "object" === t && "data" === n ? C(e, r) : s && ["placeholder", "title", "aria-label"].indexOf(n) > -1 ? i ? i(r) : S(r) : r : C(e, r) : r
            }

            function P(e, t, n, r, s) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return P(e.parentNode, t, n, r, s);
                if (r && (e.matches(r) || e.closest(r))) return !1;
                if (s) return !0;
                if ("string" === typeof t) {
                    if (e.classList.contains(t)) return !0
                } else
                    for (let n = 0; n < e.classList.length; n++) {
                        const r = e.classList[n];
                        if (t.test(r)) return !0
                    }
                return !(!n || !e.matches(n)) || P(e.parentNode, t, n, r, s)
            }

            function U(e) {
                return void 0 === e || null === e ? "" : e.toLowerCase()
            }

            function B(e, t) {
                const {
                    doc: n,
                    map: r,
                    blockClass: s,
                    blockSelector: i,
                    unblockSelector: o,
                    maskTextClass: a,
                    maskTextSelector: c,
                    unmaskTextSelector: l,
                    skipChild: u = !1,
                    inlineStylesheet: d = !0,
                    maskInputSelector: p,
                    unmaskInputSelector: f,
                    maskAllText: T,
                    maskInputOptions: x = {},
                    maskTextFn: R,
                    maskInputFn: O,
                    slimDOMOptions: N,
                    dataURLOptions: I = {},
                    inlineImages: C = !1,
                    recordCanvas: L = !1,
                    onSerialize: j,
                    onIframeLoad: F,
                    iframeLoadTimeout: Y = 5e3,
                    keepIframeSrcFn: $ = (() => !1)
                } = t;
                let {
                    preserveWhiteSpace: z = !0
                } = t;
                const H = function(e, t) {
                    var n;
                    const {
                        doc: r,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskTextClass: a,
                        maskTextSelector: c,
                        unmaskTextSelector: l,
                        inlineStylesheet: u,
                        maskInputSelector: d,
                        unmaskInputSelector: p,
                        maskAllText: h,
                        maskInputOptions: f = {},
                        maskTextFn: y,
                        maskInputFn: v,
                        dataURLOptions: T = {},
                        inlineImages: x,
                        recordCanvas: R,
                        keepIframeSrcFn: O
                    } = t;
                    let N;
                    if (r.__sn) {
                        const e = r.__sn.id;
                        N = 1 === e ? void 0 : e
                    }
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            return "CSS1Compat" !== e.compatMode ? {
                                type: _.Document,
                                childNodes: [],
                                compatMode: e.compatMode,
                                rootId: N
                            } : {
                                type: _.Document,
                                childNodes: [],
                                rootId: N
                            };
                        case e.DOCUMENT_TYPE_NODE:
                            return {
                                type: _.DocumentType,
                                name: e.name,
                                publicId: e.publicId,
                                systemId: e.systemId,
                                rootId: N
                            };
                        case e.ELEMENT_NODE:
                            const t = function(e, t, n, r) {
                                    if (r && e.matches(r)) return !1;
                                    if ("string" === typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (let n = 0; n < e.classList.length; n++) {
                                            const r = e.classList[n];
                                            if (t.test(r)) return !0
                                        }
                                    return !!n && e.matches(n)
                                }(e, s, i, o),
                                U = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    const t = e.tagName.toLowerCase().trim();
                                    return E.test(t) ? "div" : t
                                }(e);
                            let B = {};
                            for (const {
                                    name: t,
                                    value: n
                                } of Array.from(e.attributes)) G(U, t) || (B[t] = M(r, U, t, n, h, y));
                            if ("link" === U && u) {
                                const t = Array.from(r.styleSheets).find((t => t.href === e.href));
                                let n = null;
                                t && (n = b(t)), n && (delete B.rel, delete B.href, B._cssText = D(n, t.href))
                            }
                            if ("style" === U && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                const t = b(e.sheet);
                                t && (B._cssText = D(t, A()))
                            }
                            if ("input" === U || "textarea" === U || "select" === U) {
                                const t = e.value;
                                "radio" !== B.type && "checkbox" !== B.type && "submit" !== B.type && "button" !== B.type && t ? B.value = m({
                                    input: e,
                                    type: B.type,
                                    tagName: U,
                                    value: t,
                                    maskInputSelector: d,
                                    unmaskInputSelector: p,
                                    maskInputOptions: f,
                                    maskInputFn: v
                                }) : e.checked && (B.checked = e.checked)
                            }
                            if ("option" === U && (e.selected && !f.select ? B.selected = !0 : delete B.selected), "canvas" === U && R)
                                if ("2d" === e.__context)(function(e) {
                                    const t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            const s = t.getImageData,
                                                i = g in s ? s[g] : s;
                                            if (new Uint32Array(i.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1
                                        }
                                    return !0
                                })(e) || (B.rr_dataURL = e.toDataURL(T.type, T.quality));
                                else if (!("__context" in e)) {
                                const t = e.toDataURL(T.type, T.quality),
                                    n = document.createElement("canvas");
                                n.width = e.width, n.height = e.height, t !== n.toDataURL(T.type, T.quality) && (B.rr_dataURL = t)
                            }
                            if ("img" === U && x) {
                                w || (w = r.createElement("canvas"), k = w.getContext("2d"));
                                const t = e,
                                    n = t.crossOrigin;
                                t.crossOrigin = "anonymous";
                                const s = () => {
                                    try {
                                        w.width = t.naturalWidth, w.height = t.naturalHeight, k.drawImage(t, 0, 0), B.rr_dataURL = w.toDataURL(T.type, T.quality)
                                    } catch (e) {
                                        console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                                    }
                                    n ? B.crossOrigin = n : delete B.crossOrigin
                                };
                                t.complete && 0 !== t.naturalWidth ? s() : t.onload = s
                            }
                            if ("audio" !== U && "video" !== U || (B.rr_mediaState = e.paused ? "paused" : "played", B.rr_mediaCurrentTime = e.currentTime), e.scrollLeft && (B.rr_scrollLeft = e.scrollLeft), e.scrollTop && (B.rr_scrollTop = e.scrollTop), t) {
                                const {
                                    width: t,
                                    height: n
                                } = e.getBoundingClientRect();
                                B = {
                                    class: B.class,
                                    rr_width: `${t}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            return "iframe" !== U || O(B.src) || (e.contentDocument || (B.rr_src = B.src), delete B.src), {
                                type: _.Element,
                                tagName: U,
                                attributes: B,
                                childNodes: [],
                                isSVG: (C = e, Boolean("svg" === C.tagName || C.ownerSVGElement) || void 0),
                                needBlock: t,
                                rootId: N
                            };
                        case e.TEXT_NODE:
                            const L = e.parentNode && e.parentNode.tagName;
                            let j = e.textContent;
                            const F = "STYLE" === L || void 0,
                                Y = "SCRIPT" === L || void 0;
                            if (F && j) {
                                try {
                                    e.nextSibling || e.previousSibling || (null === (n = e.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) && (j = (I = e.parentNode.sheet).cssRules ? Array.from(I.cssRules).map((e => e.cssText || "")).join("") : "")
                                } catch (t) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                }
                                j = D(j, A())
                            }
                            return Y && (j = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === L && j ? j = "" : !F && !Y && P(e, a, c, l, h) && j && (j = y ? y(j) : S(j)), {
                                type: _.Text,
                                textContent: j || "",
                                isStyle: F,
                                rootId: N
                            };
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: _.CDATA,
                                textContent: "",
                                rootId: N
                            };
                        case e.COMMENT_NODE:
                            return {
                                type: _.Comment,
                                textContent: e.textContent || "",
                                rootId: N
                            };
                        default:
                            return !1
                    }
                    var I, C
                }(e, {
                    doc: n,
                    blockClass: s,
                    blockSelector: i,
                    unblockSelector: o,
                    maskTextClass: a,
                    maskTextSelector: c,
                    unmaskTextSelector: l,
                    inlineStylesheet: d,
                    maskInputSelector: p,
                    unmaskInputSelector: f,
                    maskAllText: T,
                    maskInputOptions: x,
                    maskTextFn: R,
                    maskInputFn: O,
                    dataURLOptions: I,
                    inlineImages: C,
                    recordCanvas: L,
                    keepIframeSrcFn: $
                });
                if (!H) return console.warn(e, "not serialized"), null;
                let W;
                W = "__sn" in e ? e.__sn.id : ! function(e, t) {
                    if (t.comment && e.type === _.Comment) return !0;
                    if (e.type === _.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" === typeof e.attributes.href && e.attributes.href.endsWith(".js"))) return !0;
                        if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (U(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === U(e.attributes.name) || "icon" === U(e.attributes.rel) || "apple-touch-icon" === U(e.attributes.rel) || "shortcut icon" === U(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && U(e.attributes.name).match(/^description|keywords$/)) return !0;
                            if (t.headMetaSocial && (U(e.attributes.property).match(/^(og|twitter|fb):/) || U(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === U(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === U(e.attributes.name) || "googlebot" === U(e.attributes.name) || "bingbot" === U(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            if (t.headMetaAuthorship && ("author" === U(e.attributes.name) || "generator" === U(e.attributes.name) || "framework" === U(e.attributes.name) || "publisher" === U(e.attributes.name) || "progid" === U(e.attributes.name) || U(e.attributes.property).match(/^article:/) || U(e.attributes.property).match(/^product:/))) return !0;
                            if (t.headMetaVerification && ("google-site-verification" === U(e.attributes.name) || "yandex-verification" === U(e.attributes.name) || "csrf-token" === U(e.attributes.name) || "p:domain_verify" === U(e.attributes.name) || "verify-v1" === U(e.attributes.name) || "verification" === U(e.attributes.name) || "shopify-checkout-api-token" === U(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(H, N) && (z || H.type !== _.Text || H.isStyle || H.textContent.replace(/^\s+|\s+$/gm, "").length) ? y++ : v;
                const q = Object.assign(H, {
                    id: W
                });
                if (e.__sn = q, W === v) return null;
                r[W] = e, j && j(e);
                let V = !u;
                if (q.type === _.Element && (V = V && !q.needBlock, delete q.needBlock, e.shadowRoot && (q.isShadowHost = !0)), (q.type === _.Document || q.type === _.Element) && V) {
                    N.headWhitespace && H.type === _.Element && "head" === H.tagName && (z = !1);
                    const t = {
                        doc: n,
                        map: r,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskTextClass: a,
                        maskTextSelector: c,
                        unmaskTextSelector: l,
                        skipChild: u,
                        inlineStylesheet: d,
                        maskInputSelector: p,
                        unmaskInputSelector: f,
                        maskAllText: T,
                        maskInputOptions: x,
                        maskTextFn: R,
                        maskInputFn: O,
                        slimDOMOptions: N,
                        dataURLOptions: I,
                        inlineImages: C,
                        recordCanvas: L,
                        preserveWhiteSpace: z,
                        onSerialize: j,
                        onIframeLoad: F,
                        iframeLoadTimeout: Y,
                        keepIframeSrcFn: $
                    };
                    for (const n of Array.from(e.childNodes)) {
                        const e = B(n, t);
                        e && q.childNodes.push(e)
                    }
                    if (function(e) {
                            return e.nodeType === e.ELEMENT_NODE
                        }(e) && e.shadowRoot)
                        for (const n of Array.from(e.shadowRoot.childNodes)) {
                            const e = B(n, t);
                            e && (e.isShadow = !0, q.childNodes.push(e))
                        }
                }
                return e.parentNode && h(e.parentNode) && (q.isShadow = !0), q.type === _.Element && "iframe" === q.tagName && function(e, t, n) {
                    const r = e.contentWindow;
                    if (!r) return;
                    let s, i = !1;
                    try {
                        s = r.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== s) {
                        const r = setTimeout((() => {
                            i || (t(), i = !0)
                        }), n);
                        return void e.addEventListener("load", (() => {
                            clearTimeout(r), i = !0, t()
                        }))
                    }
                    const o = "about:blank";
                    r.location.href === o && e.src !== o && "" !== e.src ? e.addEventListener("load", t) : setTimeout(t, 0)
                }(e, (() => {
                    const t = e.contentDocument;
                    if (t && F) {
                        const n = B(t, {
                            doc: t,
                            map: r,
                            blockClass: s,
                            blockSelector: i,
                            unblockSelector: o,
                            maskTextClass: a,
                            maskTextSelector: c,
                            unmaskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: d,
                            maskInputSelector: p,
                            unmaskInputSelector: f,
                            maskAllText: T,
                            maskInputOptions: x,
                            maskTextFn: R,
                            maskInputFn: O,
                            slimDOMOptions: N,
                            dataURLOptions: I,
                            inlineImages: C,
                            recordCanvas: L,
                            preserveWhiteSpace: z,
                            onSerialize: j,
                            onIframeLoad: F,
                            iframeLoadTimeout: Y,
                            keepIframeSrcFn: $
                        });
                        n && F(e, n)
                    }
                }), Y), q
            }

            function G(e, t, n) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }
            var L, j, F, Y, $, z;

            function H(e, t, n = document) {
                const r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
            }! function(e) {
                e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin"
            }(L || (L = {})),
            function(e) {
                e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration"
            }(j || (j = {})),
            function(e) {
                e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel"
            }(F || (F = {})),
            function(e) {
                e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2"
            }(Y || (Y = {})),
            function(e) {
                e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange"
            }($ || ($ = {})),
            function(e) {
                e.Start = "start", e.Pause = "pause", e.Resume = "resume", e.Resize = "resize", e.Finish = "finish", e.FullsnapshotRebuilded = "fullsnapshot-rebuilded", e.LoadStylesheetStart = "load-stylesheet-start", e.LoadStylesheetEnd = "load-stylesheet-end", e.SkipStart = "skip-start", e.SkipEnd = "skip-end", e.MouseInteraction = "mouse-interaction", e.EventCast = "event-cast", e.CustomEvent = "custom-event", e.Flush = "flush", e.StateChange = "state-change", e.PlayBack = "play-back"
            }(z || (z = {}));
            const W = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
            let q = {
                map: {},
                getId: () => (console.error(W), -1),
                getNode: () => (console.error(W), null),
                removeNodeFromMap() {
                    console.error(W)
                },
                has: () => (console.error(W), !1),
                reset() {
                    console.error(W)
                }
            };

            function V(e, t, n = {}) {
                let r = null,
                    s = 0;
                return function(i) {
                    let o = Date.now();
                    s || !1 !== n.leading || (s = o);
                    let a = t - (o - s),
                        c = this,
                        l = arguments;
                    a <= 0 || a > t ? (r && (clearTimeout(r), r = null), s = o, e.apply(c, l)) : r || !1 === n.trailing || (r = setTimeout((() => {
                        s = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, l)
                    }), a))
                }
            }

            function K(e, t, n, r, s = window) {
                const i = s.Object.getOwnPropertyDescriptor(e, t);
                return s.Object.defineProperty(e, t, r ? n : {
                    set(e) {
                        setTimeout((() => {
                            n.set.call(this, e)
                        }), 0), i && i.set && i.set.call(this, e)
                    }
                }), () => K(e, t, i || {}, !0)
            }

            function Z(e, t, n) {
                try {
                    if (!(t in e)) return () => {};
                    const r = e[t],
                        s = n(r);
                    return "function" === typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), e[t] = s, () => {
                        e[t] = r
                    }
                } catch (e) {
                    return () => {}
                }
            }

            function J() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function X() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function Q(e, t, n, r) {
                if (!e) return !1;
                if (e.nodeType === e.ELEMENT_NODE) {
                    let s = !1;
                    const i = r && e.matches(r);
                    return "string" === typeof t ? s = void 0 !== e.closest ? !i && null !== e.closest("." + t) : !i && e.classList.contains(t) : !i && e.classList.forEach((e => {
                        t.test(e) && (s = !0)
                    })), !s && n && (s = e.matches(n)), !i && s || Q(e.parentNode, t, n, r)
                }
                return e.nodeType, e.TEXT_NODE, Q(e.parentNode, t, n, r)
            }

            function ee(e) {
                return "__sn" in e && e.__sn.id === v
            }

            function te(e, t) {
                if (h(e)) return !1;
                const n = t.getId(e);
                return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || te(e.parentNode, t))
            }

            function ne(e) {
                return Boolean(e.changedTouches)
            }

            function re(e) {
                return "__sn" in e && e.__sn.type === _.Element && "iframe" === e.__sn.tagName
            }

            function se(e) {
                return Boolean(null === e || void 0 === e ? void 0 : e.shadowRoot)
            }

            function ie(e) {
                return "__ln" in e
            }
            "undefined" !== typeof window && window.Proxy && window.Reflect && (q = new Proxy(q, {
                get: (e, t, n) => ("map" === t && console.error(W), Reflect.get(e, t, n))
            }));
            class oe {
                constructor() {
                    this.length = 0, this.head = null
                }
                get(e) {
                    if (e >= this.length) throw new Error("Position outside of list range");
                    let t = this.head;
                    for (let n = 0; n < e; n++) t = (null === t || void 0 === t ? void 0 : t.next) || null;
                    return t
                }
                addNode(e) {
                    const t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && ie(e.previousSibling)) {
                        const n = e.previousSibling.__ln.next;
                        t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
                    } else if (e.nextSibling && ie(e.nextSibling) && e.nextSibling.__ln.previous) {
                        const n = e.nextSibling.__ln.previous;
                        t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    this.length++
                }
                removeNode(e) {
                    const t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next && (t.next.previous = t.previous)) : (this.head = t.next, this.head && (this.head.previous = null)), e.__ln && delete e.__ln, this.length--)
                }
            }
            const ae = (e, t) => `${e}@${t}`;

            function ce(e) {
                return "__sn" in e
            }
            class le {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        const e = [],
                            t = new oe,
                            n = e => {
                                let t = e,
                                    n = v;
                                for (; n === v;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                                return n
                            },
                            r = r => {
                                var s, i, o, a, c;
                                const l = r.getRootNode ? null === (s = r.getRootNode()) || void 0 === s ? void 0 : s.host : null;
                                let u = l;
                                for (; null === (o = null === (i = null === u || void 0 === u ? void 0 : u.getRootNode) || void 0 === i ? void 0 : i.call(u)) || void 0 === o ? void 0 : o.host;) u = (null === (c = null === (a = null === u || void 0 === u ? void 0 : u.getRootNode) || void 0 === a ? void 0 : a.call(u)) || void 0 === c ? void 0 : c.host) || null;
                                const d = !this.doc.contains(r) && (!u || !this.doc.contains(u));
                                if (!r.parentNode || d) return;
                                const p = h(r.parentNode) ? this.mirror.getId(l) : this.mirror.getId(r.parentNode),
                                    _ = n(r);
                                if (-1 === p || -1 === _) return t.addNode(r);
                                let f = B(r, {
                                    doc: this.doc,
                                    map: this.mirror.map,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    maskInputSelector: this.maskInputSelector,
                                    unmaskInputSelector: this.unmaskInputSelector,
                                    skipChild: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskAllText: this.maskAllText,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        re(e) && this.iframeManager.addIframe(e), se(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
                                    },
                                    onIframeLoad: (e, t) => {
                                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                                    }
                                });
                                f && e.push({
                                    parentId: p,
                                    nextId: _,
                                    node: f
                                })
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (const e of this.movedSet) de(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || r(e);
                        for (const e of this.addedSet) pe(this.droppedSet, e) || de(this.removes, e, this.mirror) ? pe(this.movedSet, e) ? r(e) : this.droppedSet.add(e) : r(e);
                        let s = null;
                        for (; t.length;) {
                            let e = null;
                            if (s) {
                                const t = this.mirror.getId(s.value.parentNode),
                                    r = n(s.value); - 1 !== t && -1 !== r && (e = s)
                            }
                            if (!e)
                                for (let r = t.length - 1; r >= 0; r--) {
                                    const s = t.get(r);
                                    if (s) {
                                        const t = this.mirror.getId(s.value.parentNode),
                                            r = n(s.value);
                                        if (-1 !== t && -1 !== r) {
                                            e = s;
                                            break
                                        }
                                    }
                                }
                            if (!e) {
                                for (; t.head;) t.removeNode(t.head.value);
                                break
                            }
                            s = e.previous, t.removeNode(e.value), r(e.value)
                        }
                        const i = {
                            texts: this.texts.map((e => ({
                                id: this.mirror.getId(e.node),
                                value: e.value
                            }))).filter((e => this.mirror.has(e.id))),
                            attributes: this.attributes.map((e => ({
                                id: this.mirror.getId(e.node),
                                attributes: e.attributes
                            }))).filter((e => this.mirror.has(e.id))),
                            removes: this.removes,
                            adds: e
                        };
                        (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
                    }, this.processMutation = e => {
                        if (!ee(e.target)) switch (e.type) {
                            case "characterData":
                                {
                                    const t = e.target.textContent;Q(e.target, this.blockClass, this.blockSelector, this.unblockSelector) || t === e.oldValue || this.texts.push({
                                        value: P(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t) : t.replace(/[\S]/g, "*") : t,
                                        node: e.target
                                    });
                                    break
                                }
                            case "attributes":
                                {
                                    const t = e.target;
                                    let n = e.target.getAttribute(e.attributeName);
                                    if ("value" === e.attributeName && (n = m({
                                            input: t,
                                            maskInputSelector: this.maskInputSelector,
                                            unmaskInputSelector: this.unmaskInputSelector,
                                            maskInputOptions: this.maskInputOptions,
                                            tagName: e.target.tagName,
                                            type: e.target.getAttribute("type"),
                                            value: n,
                                            maskInputFn: this.maskInputFn
                                        })), Q(e.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === e.oldValue) return;
                                    let r = this.attributes.find((t => t.node === e.target));
                                    if (r || (r = {
                                            node: e.target,
                                            attributes: {}
                                        }, this.attributes.push(r)), "style" === e.attributeName) {
                                        const n = this.doc.createElement("span");
                                        e.oldValue && n.setAttribute("style", e.oldValue), void 0 !== r.attributes.style && null !== r.attributes.style || (r.attributes.style = {});
                                        try {
                                            const e = r.attributes.style;
                                            for (const r of Array.from(t.style)) {
                                                const s = t.style.getPropertyValue(r),
                                                    i = t.style.getPropertyPriority(r);
                                                s === n.style.getPropertyValue(r) && i === n.style.getPropertyPriority(r) || (e[r] = "" === i ? s : [s, i])
                                            }
                                            for (const r of Array.from(n.style)) "" === t.style.getPropertyValue(r) && (e[r] = !1)
                                        } catch (e) {
                                            console.warn("[rrweb] Error when parsing update to style attribute:", e)
                                        }
                                    } else r.attributes[e.attributeName] = M(this.doc, e.target.tagName, e.attributeName, n, this.maskAllText, this.maskTextFn);
                                    break
                                }
                            case "childList":
                                e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                                    const n = this.mirror.getId(t),
                                        r = h(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    Q(e.target, this.blockClass, this.blockSelector, this.unblockSelector) || ee(t) || (this.addedSet.has(t) ? (ue(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || te(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[ae(n, r)] ? ue(this.movedSet, t) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!h(e.target) || void 0
                                    })), this.mapRemoves.push(t))
                                }))
                        }
                    }, this.genAdds = (e, t) => {
                        if (!t || !Q(t, this.blockClass, this.blockSelector, this.unblockSelector)) {
                            if (ce(e)) {
                                if (ee(e)) return;
                                this.movedSet.add(e);
                                let n = null;
                                t && ce(t) && (n = t.__sn.id), n && (this.movedMap[ae(e.__sn.id, n)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            Q(e, this.blockClass, this.blockSelector, this.unblockSelector) || e.childNodes.forEach((e => this.genAdds(e)))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach((t => {
                        this[t] = e[t]
                    }))
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function ue(e, t) {
                e.delete(t), t.childNodes.forEach((t => ue(e, t)))
            }

            function de(e, t, n) {
                const {
                    parentNode: r
                } = t;
                if (!r) return !1;
                const s = n.getId(r);
                return !!e.some((e => e.id === s)) || de(e, r, n)
            }

            function pe(e, t) {
                const {
                    parentNode: n
                } = t;
                return !!n && (!!e.has(n) || pe(e, n))
            }
            const _e = e => (...t) => {
                    try {
                        return e(...t)
                    } catch (e) {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {}
                        throw e
                    }
                },
                he = [];

            function fe(e) {
                try {
                    if ("composedPath" in e) {
                        const t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch (e) {}
                return e && e.target
            }

            function me(e, t) {
                var n, r;
                const s = new le;
                he.push(s), s.init(e);
                let i = window.MutationObserver || window.__rrMutationObserver;
                const o = null === (r = null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                o && window[o] && (i = window[o]);
                const a = new i(_e(s.processMutations.bind(s)));
                return a.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), a
            }

            function ge({
                scrollCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: s,
                unblockSelector: i,
                sampling: o
            }) {
                const a = V((o => {
                    const a = fe(o);
                    if (!a || Q(a, r, s, i)) return;
                    const c = n.getId(a);
                    if (a === t) {
                        const n = t.scrollingElement || t.documentElement;
                        _e(e)({
                            id: c,
                            x: n.scrollLeft,
                            y: n.scrollTop
                        })
                    } else _e(e)({
                        id: c,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
                }), o.scroll || 100);
                return H("scroll", _e(a), t)
            }

            function ye(e, t) {
                const n = Object.assign({}, e);
                return t || delete n.userTriggered, n
            }
            const Ee = ["INPUT", "TEXTAREA", "SELECT"],
                ve = new WeakMap;

            function Se(e) {
                return function(e, t) {
                    if (Te("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Te("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Te("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Te("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                        const n = Array.from(e.parentRule.cssRules).indexOf(e);
                        t.unshift(n)
                    } else {
                        const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                        t.unshift(n)
                    }
                    return t
                }(e, [])
            }

            function be(e, t = {}) {
                const n = e.doc.defaultView;
                if (!n) return () => {};
                ! function(e, t) {
                    const {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: s,
                        scrollCb: i,
                        viewportResizeCb: o,
                        inputCb: a,
                        mediaInteractionCb: c,
                        styleSheetRuleCb: l,
                        styleDeclarationCb: u,
                        canvasMutationCb: d,
                        fontCb: p
                    } = e;
                    e.mutationCb = (...e) => {
                        t.mutation && t.mutation(...e), n(...e)
                    }, e.mousemoveCb = (...e) => {
                        t.mousemove && t.mousemove(...e), r(...e)
                    }, e.mouseInteractionCb = (...e) => {
                        t.mouseInteraction && t.mouseInteraction(...e), s(...e)
                    }, e.scrollCb = (...e) => {
                        t.scroll && t.scroll(...e), i(...e)
                    }, e.viewportResizeCb = (...e) => {
                        t.viewportResize && t.viewportResize(...e), o(...e)
                    }, e.inputCb = (...e) => {
                        t.input && t.input(...e), a(...e)
                    }, e.mediaInteractionCb = (...e) => {
                        t.mediaInteaction && t.mediaInteaction(...e), c(...e)
                    }, e.styleSheetRuleCb = (...e) => {
                        t.styleSheetRule && t.styleSheetRule(...e), l(...e)
                    }, e.styleDeclarationCb = (...e) => {
                        t.styleDeclaration && t.styleDeclaration(...e), u(...e)
                    }, e.canvasMutationCb = (...e) => {
                        t.canvasMutation && t.canvasMutation(...e), d(...e)
                    }, e.fontCb = (...e) => {
                        t.font && t.font(...e), p(...e)
                    }
                }(e, t);
                const r = me(e, e.doc),
                    s = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: n,
                        mirror: r
                    }) {
                        if (!1 === t.mousemove) return () => {};
                        const s = "number" === typeof t.mousemove ? t.mousemove : 50,
                            i = "number" === typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                        let o, a = [];
                        const c = V((t => {
                                const n = Date.now() - o;
                                _e(e)(a.map((e => (e.timeOffset -= n, e))), t), a = [], o = null
                            }), i),
                            l = V((e => {
                                const t = fe(e),
                                    {
                                        clientX: n,
                                        clientY: s
                                    } = ne(e) ? e.changedTouches[0] : e;
                                o || (o = Date.now()), a.push({
                                    x: n,
                                    y: s,
                                    id: r.getId(t),
                                    timeOffset: Date.now() - o
                                }), c("undefined" !== typeof DragEvent && e instanceof DragEvent ? j.Drag : e instanceof MouseEvent ? j.MouseMove : j.TouchMove)
                            }), s, {
                                trailing: !1
                            }),
                            u = [H("mousemove", _e(l), n), H("touchmove", _e(l), n), H("drag", _e(l), n)];
                        return _e((() => {
                            u.forEach((e => e()))
                        }))
                    }(e),
                    i = function({
                        mouseInteractionCb: e,
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: s,
                        unblockSelector: i,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        const a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            c = [];
                        return Object.keys(F).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((o => {
                            const a = o.toLowerCase(),
                                l = _e((t => o => {
                                    const a = fe(o);
                                    if (Q(a, r, s, i)) return;
                                    const c = ne(o) ? o.changedTouches[0] : o;
                                    if (!c) return;
                                    const l = n.getId(a),
                                        {
                                            clientX: u,
                                            clientY: d
                                        } = c;
                                    _e(e)({
                                        type: F[t],
                                        id: l,
                                        x: u,
                                        y: d
                                    })
                                })(o));
                            c.push(H(a, l, t))
                        })), _e((() => {
                            c.forEach((e => e()))
                        }))
                    }(e),
                    o = ge(e),
                    a = function({
                        viewportResizeCb: e
                    }) {
                        let t = -1,
                            n = -1;
                        const r = V((() => {
                            const r = J(),
                                s = X();
                            t === r && n === s || (_e(e)({
                                width: Number(s),
                                height: Number(r)
                            }), t = r, n = s)
                        }), 200);
                        return H("resize", _e(r), window)
                    }(e),
                    c = function({
                        inputCb: e,
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: s,
                        unblockSelector: i,
                        ignoreClass: o,
                        ignoreSelector: a,
                        maskInputSelector: c,
                        unmaskInputSelector: l,
                        maskInputOptions: u,
                        maskInputFn: d,
                        sampling: p,
                        userTriggeredOnInput: _
                    }) {
                        function h(e) {
                            let n = fe(e);
                            const p = e.isTrusted;
                            if (n && "OPTION" === n.tagName && (n = n.parentElement), !n || !n.tagName || Ee.indexOf(n.tagName) < 0 || Q(n, r, s, i)) return;
                            const h = n.type;
                            if (n.classList.contains(o) || a && n.matches(a)) return;
                            let y = n.value,
                                E = !1;
                            "radio" === h || "checkbox" === h ? E = n.checked : function({
                                tagName: e,
                                type: t,
                                maskInputOptions: n,
                                maskInputSelector: r
                            }) {
                                return r || f({
                                    maskInputOptions: n,
                                    tagName: e,
                                    type: t
                                })
                            }({
                                maskInputOptions: u,
                                maskInputSelector: c,
                                tagName: n.tagName,
                                type: h
                            }) && (y = m({
                                input: n,
                                maskInputOptions: u,
                                maskInputSelector: c,
                                unmaskInputSelector: l,
                                tagName: n.tagName,
                                type: h,
                                value: y,
                                maskInputFn: d
                            })), g(n, _e(ye)({
                                text: y,
                                isChecked: E,
                                userTriggered: p
                            }, _));
                            const v = n.name;
                            "radio" === h && v && E && t.querySelectorAll(`input[type="radio"][name="${v}"]`).forEach((e => {
                                e !== n && g(e, _e(ye)({
                                    text: e.value,
                                    isChecked: !E,
                                    userTriggered: !1
                                }, _))
                            }))
                        }

                        function g(t, r) {
                            const s = ve.get(t);
                            if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
                                ve.set(t, r);
                                const s = n.getId(t);
                                e(Object.assign(Object.assign({}, r), {
                                    id: s
                                }))
                            }
                        }
                        const y = ("last" === p.input ? ["change"] : ["input", "change"]).map((e => H(e, _e(h), t))),
                            E = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            v = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return E && E.set && y.push(...v.map((e => K(e[0], e[1], {
                            set() {
                                _e(h)({
                                    target: this
                                })
                            }
                        })))), _e((() => {
                            y.forEach((e => e()))
                        }))
                    }(e),
                    l = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: n,
                        unblockSelector: r,
                        mirror: s,
                        sampling: i
                    }) {
                        const o = o => V(_e((i => {
                                const a = fe(i);
                                if (!a || Q(a, t, n, r)) return;
                                const {
                                    currentTime: c,
                                    volume: l,
                                    muted: u
                                } = a;
                                e({
                                    type: o,
                                    id: s.getId(a),
                                    currentTime: c,
                                    volume: l,
                                    muted: u
                                })
                            })), i.media || 500),
                            a = [H("play", o(0)), H("pause", o(1)), H("seeked", o(2)), H("volumechange", o(3))];
                        return _e((() => {
                            a.forEach((e => e()))
                        }))
                    }(e),
                    u = function({
                        styleSheetRuleCb: e,
                        mirror: t
                    }, {
                        win: n
                    }) {
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        const r = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
                            apply: _e(((n, r, s) => {
                                const [i, o] = s, a = t.getId(r.ownerNode);
                                return -1 !== a && e({
                                    id: a,
                                    adds: [{
                                        rule: i,
                                        index: o
                                    }]
                                }), n.apply(r, s)
                            }))
                        });
                        const s = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                            apply: _e(((n, r, s) => {
                                const [i] = s, o = t.getId(r.ownerNode);
                                return -1 !== o && e({
                                    id: o,
                                    removes: [{
                                        index: i
                                    }]
                                }), n.apply(r, s)
                            }))
                        });
                        const i = {};
                        we("CSSGroupingRule") ? i.CSSGroupingRule = n.CSSGroupingRule : (we("CSSMediaRule") && (i.CSSMediaRule = n.CSSMediaRule), we("CSSConditionRule") && (i.CSSConditionRule = n.CSSConditionRule), we("CSSSupportsRule") && (i.CSSSupportsRule = n.CSSSupportsRule));
                        const o = {};
                        return Object.entries(i).forEach((([n, r]) => {
                            o[n] = {
                                insertRule: r.prototype.insertRule,
                                deleteRule: r.prototype.deleteRule
                            }, r.prototype.insertRule = new Proxy(o[n].insertRule, {
                                apply: _e(((n, r, s) => {
                                    const [i, o] = s, a = t.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== a && e({
                                        id: a,
                                        adds: [{
                                            rule: i,
                                            index: [...Se(r), o || 0]
                                        }]
                                    }), n.apply(r, s)
                                }))
                            }), r.prototype.deleteRule = new Proxy(o[n].deleteRule, {
                                apply: _e(((n, r, s) => {
                                    const [i] = s, o = t.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== o && e({
                                        id: o,
                                        removes: [{
                                            index: [...Se(r), i]
                                        }]
                                    }), n.apply(r, s)
                                }))
                            })
                        })), _e((() => {
                            n.CSSStyleSheet.prototype.insertRule = r, n.CSSStyleSheet.prototype.deleteRule = s, Object.entries(i).forEach((([e, t]) => {
                                t.prototype.insertRule = o[e].insertRule, t.prototype.deleteRule = o[e].deleteRule
                            }))
                        }))
                    }(e, {
                        win: n
                    }),
                    d = function({
                        styleDeclarationCb: e,
                        mirror: t
                    }, {
                        win: n
                    }) {
                        const r = n.CSSStyleDeclaration.prototype.setProperty;
                        n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
                            apply: _e(((n, r, s) => {
                                var i, o;
                                const [a, c, l] = s, u = t.getId(null === (o = null === (i = r.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== u && e({
                                    id: u,
                                    set: {
                                        property: a,
                                        value: c,
                                        priority: l
                                    },
                                    index: Se(r.parentRule)
                                }), n.apply(r, s)
                            }))
                        });
                        const s = n.CSSStyleDeclaration.prototype.removeProperty;
                        return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                            apply: _e(((n, r, s) => {
                                var i, o;
                                const [a] = s, c = t.getId(null === (o = null === (i = r.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== c && e({
                                    id: c,
                                    remove: {
                                        property: a
                                    },
                                    index: Se(r.parentRule)
                                }), n.apply(r, s)
                            }))
                        }), _e((() => {
                            n.CSSStyleDeclaration.prototype.setProperty = r, n.CSSStyleDeclaration.prototype.removeProperty = s
                        }))
                    }(e, {
                        win: n
                    }),
                    p = e.collectFonts ? function({
                        fontCb: e,
                        doc: t
                    }) {
                        const n = t.defaultView;
                        if (!n) return () => {};
                        const r = [],
                            s = new WeakMap,
                            i = n.FontFace;
                        n.FontFace = function(e, t, n) {
                            const r = new i(e, t, n);
                            return s.set(r, {
                                family: e,
                                buffer: "string" !== typeof t,
                                descriptors: n,
                                fontSource: "string" === typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                            }), r
                        };
                        const o = Z(t.fonts, "add", (function(t) {
                            return function(n) {
                                return setTimeout((() => {
                                    const t = s.get(n);
                                    t && (e(t), s.delete(n))
                                }), 0), t.apply(this, [n])
                            }
                        }));
                        return r.push((() => {
                            n.FontFace = i
                        })), r.push(o), _e((() => {
                            r.forEach((e => e()))
                        }))
                    }(e) : () => {},
                    _ = [];
                for (const t of e.plugins) _.push(t.observer(t.callback, n, t.options));
                return _e((() => {
                    he.forEach((e => e.reset())), r.disconnect(), s(), i(), o(), a(), c(), l();
                    try {
                        u(), d()
                    } catch (e) {}
                    p(), _.forEach((e => e()))
                }))
            }

            function Te(e) {
                return "undefined" !== typeof window[e]
            }

            function we(e) {
                return Boolean("undefined" !== typeof window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class ke {
                constructor(e) {
                    this.iframes = new WeakMap, this.mutationCb = e.mutationCb
                }
                addIframe(e) {
                    this.iframes.set(e, !0)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    var n;
                    this.mutationCb({
                        adds: [{
                            parentId: e.__sn.id,
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), null === (n = this.loadListener) || void 0 === n || n.call(this, e)
                }
            }
            class xe {
                constructor(e) {
                    this.restorePatches = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror;
                    const t = this;
                    this.restorePatches.push(Z(HTMLElement.prototype, "attachShadow", (function(e) {
                        return function() {
                            const n = e.apply(this, arguments);
                            return this.shadowRoot && t.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    })))
                }
                addShadowRoot(e, t) {
                    me(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), e), ge(Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    }))
                }
                observeAttachShadow(e) {
                    if (e.contentWindow) {
                        const t = this;
                        this.restorePatches.push(Z(e.contentWindow.HTMLElement.prototype, "attachShadow", (function(n) {
                            return function() {
                                const r = n.apply(this, arguments);
                                return this.shadowRoot && t.addShadowRoot(this.shadowRoot, e.contentDocument), r
                            }
                        })))
                    }
                }
                reset() {
                    this.restorePatches.forEach((e => e()))
                }
            }
            for (var Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Oe = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), De = 0; De < 64; De++) Oe[Re.charCodeAt(De)] = De;
            const Ne = new Map,
                Ie = (e, t, n) => {
                    if (!e || !Me(e, t) && "object" !== typeof e) return;
                    const r = function(e, t) {
                        let n = Ne.get(e);
                        return n || (n = new Map, Ne.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                    }(n, e.constructor.name);
                    let s = r.indexOf(e);
                    return -1 === s && (s = r.length, r.push(e)), s
                };

            function Ce(e, t, n) {
                if (e instanceof Array) return e.map((e => Ce(e, t, n)));
                if (null === e) return e;
                if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
                    rr_type: e.constructor.name,
                    args: [Object.values(e)]
                };
                if (e instanceof ArrayBuffer) {
                    const t = e.constructor.name,
                        n = function(e) {
                            var t, n = new Uint8Array(e),
                                r = n.length,
                                s = "";
                            for (t = 0; t < r; t += 3) s += Re[n[t] >> 2], s += Re[(3 & n[t]) << 4 | n[t + 1] >> 4], s += Re[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], s += Re[63 & n[t + 2]];
                            return r % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : r % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
                        }(e);
                    return {
                        rr_type: t,
                        base64: n
                    }
                }
                if (e instanceof DataView) return {
                    rr_type: e.constructor.name,
                    args: [Ce(e.buffer, t, n), e.byteOffset, e.byteLength]
                };
                if (e instanceof HTMLImageElement) {
                    const t = e.constructor.name,
                        {
                            src: n
                        } = e;
                    return {
                        rr_type: t,
                        src: n
                    }
                }
                return e instanceof ImageData ? {
                    rr_type: e.constructor.name,
                    args: [Ce(e.data, t, n), e.width, e.height]
                } : Me(e, t) || "object" === typeof e ? {
                    rr_type: e.constructor.name,
                    index: Ie(e, t, n)
                } : e
            }
            const Ae = (e, t, n) => [...e].map((e => Ce(e, t, n))),
                Me = (e, t) => {
                    const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" === typeof t[e]));
                    return Boolean(n.find((n => e instanceof t[n])))
                };

            function Pe(e, t, n, r, s, i, o, a) {
                const c = [],
                    l = Object.getOwnPropertyNames(e);
                for (const u of l) try {
                    if ("function" !== typeof e[u]) continue;
                    const l = Z(e, u, (function(c) {
                        return function(...l) {
                            const d = c.apply(this, l);
                            if (Ie(d, a, e), !Q(this.canvas, r, i, s)) {
                                o.getId(this.canvas);
                                const r = Ae([...l], a, e),
                                    s = {
                                        type: t,
                                        property: u,
                                        args: r
                                    };
                                n(this.canvas, s)
                            }
                            return d
                        }
                    }));
                    c.push(l)
                } catch (r) {
                    const s = K(e, u, {
                        set(e) {
                            n(this.canvas, {
                                type: t,
                                property: u,
                                args: [e],
                                setter: !0
                            })
                        }
                    });
                    c.push(s)
                }
                return c
            }
            class Ue {
                reset() {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                constructor(e) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(e, t) {
                        !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                    }, this.mutationCb = e.mutationCb, this.mirror = e.mirror, !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass, e.blockSelector, e.unblockSelector)
                }
                initCanvasMutationObserver(e, t, n, r) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    const s = function(e, t, n, r) {
                            const s = [];
                            try {
                                const i = Z(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                                    return function(s, ...i) {
                                        return Q(this, t, n, r) || "__context" in this || (this.__context = s), e.apply(this, [s, ...i])
                                    }
                                }));
                                s.push(i)
                            } catch (e) {
                                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                            }
                            return () => {
                                s.forEach((e => e()))
                            }
                        }(e, t, r, n),
                        i = function(e, t, n, r, s, i) {
                            const o = [],
                                a = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                            for (const i of a) try {
                                if ("function" !== typeof t.CanvasRenderingContext2D.prototype[i]) continue;
                                const a = Z(t.CanvasRenderingContext2D.prototype, i, (function(t) {
                                    return function(...o) {
                                        return Q(this.canvas, n, s, r) || setTimeout((() => {
                                            const t = [...o];
                                            if ("drawImage" === i && t[0] && t[0] instanceof HTMLCanvasElement) {
                                                const e = t[0],
                                                    n = e.getContext("2d");
                                                let r = null === n || void 0 === n ? void 0 : n.getImageData(0, 0, e.width, e.height),
                                                    s = null === r || void 0 === r ? void 0 : r.data;
                                                t[0] = JSON.stringify(s)
                                            }
                                            e(this.canvas, {
                                                type: Y["2D"],
                                                property: i,
                                                args: t
                                            })
                                        }), 0), t.apply(this, o)
                                    }
                                }));
                                o.push(a)
                            } catch (n) {
                                const r = K(t.CanvasRenderingContext2D.prototype, i, {
                                    set(t) {
                                        e(this.canvas, {
                                            type: Y["2D"],
                                            property: i,
                                            args: [t],
                                            setter: !0
                                        })
                                    }
                                });
                                o.push(r)
                            }
                            return () => {
                                o.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, r, n, this.mirror),
                        o = function(e, t, n, r, s, i) {
                            const o = [];
                            return o.push(...Pe(t.WebGLRenderingContext.prototype, Y.WebGL, e, n, r, s, i, t)), "undefined" !== typeof t.WebGL2RenderingContext && o.push(...Pe(t.WebGL2RenderingContext.prototype, Y.WebGL2, e, n, r, s, i, t)), () => {
                                o.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, r, n, this.mirror);
                    this.resetObservers = () => {
                        s(), i(), o()
                    }
                }
                startPendingCanvasMutationFlusher() {
                    requestAnimationFrame((() => this.flushPendingCanvasMutations()))
                }
                startRAFTimestamping() {
                    const e = t => {
                        this.rafStamps.latestId = t, requestAnimationFrame(e)
                    };
                    requestAnimationFrame(e)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach(((e, t) => {
                        const n = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, n)
                    })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
                }
                flushPendingCanvasMutationFor(e, t) {
                    if (this.frozen || this.locked) return;
                    const n = this.pendingCanvasMutations.get(e);
                    if (!n || -1 === t) return;
                    const r = n.map((e => {
                            const t = function(e, t) {
                                var n = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                                    var s = 0;
                                    for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
                                }
                                return n
                            }(e, ["type"]);
                            return t
                        })),
                        {
                            type: s
                        } = n[0];
                    this.mutationCb({
                        id: t,
                        type: s,
                        commands: r
                    }), this.pendingCanvasMutations.delete(e)
                }
            }

            function Be(e) {
                return Object.assign(Object.assign({}, e), {
                    timestamp: Date.now()
                })
            }
            let Ge, Le;
            const je = {
                map: {},
                getId: e => e && e.__sn ? e.__sn.id : -1,
                getNode(e) {
                    return this.map[e] || null
                },
                removeNodeFromMap(e) {
                    const t = e.__sn && e.__sn.id;
                    delete this.map[t], e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
                },
                has(e) {
                    return this.map.hasOwnProperty(e)
                },
                reset() {
                    this.map = {}
                }
            };

            function Fe(e = {}) {
                const {
                    emit: t,
                    checkoutEveryNms: n,
                    checkoutEveryNth: r,
                    blockClass: s = "rr-block",
                    blockSelector: i = null,
                    unblockSelector: o = null,
                    ignoreClass: a = "rr-ignore",
                    ignoreSelector: c = null,
                    maskTextClass: l = "rr-mask",
                    maskTextSelector: u = null,
                    maskInputSelector: d = null,
                    unmaskTextSelector: p = null,
                    unmaskInputSelector: _ = null,
                    inlineStylesheet: h = !0,
                    maskAllText: f = !1,
                    maskAllInputs: m,
                    maskInputOptions: g,
                    slimDOMOptions: y,
                    maskInputFn: E,
                    maskTextFn: v,
                    hooks: S,
                    packFn: b,
                    sampling: T = {},
                    mousemoveWait: w,
                    recordCanvas: k = !1,
                    userTriggeredOnInput: x = !1,
                    collectFonts: R = !1,
                    inlineImages: O = !1,
                    plugins: D,
                    keepIframeSrcFn: N = (() => !1)
                } = e;
                if (!t) throw new Error("emit function is required");
                void 0 !== w && void 0 === T.mousemove && (T.mousemove = w);
                const I = !0 === m ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0
                    } : void 0 !== g ? g : {
                        password: !0
                    },
                    C = !0 === y || "all" === y ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === y,
                        headMetaDescKeywords: "all" === y
                    } : y || {};
                let A;
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function(e) {
                        if (!(0 in arguments)) throw new TypeError("1 argument is required");
                        do {
                            if (this === e) return !0
                        } while (e = e && e.parentNode);
                        return !1
                    })
                }();
                let M = 0;
                Ge = (e, s) => {
                    var i;
                    if (!(null === (i = he[0]) || void 0 === i ? void 0 : i.isFrozen()) || e.type === L.FullSnapshot || e.type === L.IncrementalSnapshot && e.data.source === j.Mutation || he.forEach((e => e.unfreeze())), t((e => {
                            for (const t of D || []) t.eventProcessor && (e = t.eventProcessor(e));
                            return b && (e = b(e)), e
                        })(e), s), e.type === L.FullSnapshot) A = e, M = 0;
                    else if (e.type === L.IncrementalSnapshot) {
                        if (e.data.source === j.Mutation && e.data.isAttachIframe) return;
                        M++;
                        const t = r && M >= r,
                            s = n && e.timestamp - A.timestamp > n;
                        (t || s) && Le(!0)
                    }
                };
                const P = e => {
                        Ge(Be({
                            type: L.IncrementalSnapshot,
                            data: Object.assign({
                                source: j.Mutation
                            }, e)
                        }))
                    },
                    U = e => Ge(Be({
                        type: L.IncrementalSnapshot,
                        data: Object.assign({
                            source: j.Scroll
                        }, e)
                    })),
                    G = e => Ge(Be({
                        type: L.IncrementalSnapshot,
                        data: Object.assign({
                            source: j.CanvasMutation
                        }, e)
                    })),
                    F = new ke({
                        mutationCb: P
                    }),
                    Y = new Ue({
                        recordCanvas: k,
                        mutationCb: G,
                        win: window,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        mirror: je
                    }),
                    $ = new xe({
                        mutationCb: P,
                        scrollCb: U,
                        bypassOptions: {
                            blockClass: s,
                            blockSelector: i,
                            unblockSelector: o,
                            maskTextClass: l,
                            maskTextSelector: u,
                            unmaskTextSelector: p,
                            maskInputSelector: d,
                            unmaskInputSelector: _,
                            inlineStylesheet: h,
                            maskAllText: f,
                            maskInputOptions: I,
                            maskTextFn: v,
                            maskInputFn: E,
                            recordCanvas: k,
                            inlineImages: O,
                            sampling: T,
                            slimDOMOptions: C,
                            iframeManager: F,
                            canvasManager: Y
                        },
                        mirror: je
                    });
                Le = (e = !1) => {
                    var t, n, r, a;
                    Ge(Be({
                        type: L.Meta,
                        data: {
                            href: window.location.href,
                            width: X(),
                            height: J()
                        }
                    }), e), he.forEach((e => e.lock()));
                    const [c, m] = function(e, t) {
                        const {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: s = null,
                            maskTextClass: i = "rr-mask",
                            maskTextSelector: o = null,
                            unmaskTextSelector: a = null,
                            inlineStylesheet: c = !0,
                            inlineImages: l = !1,
                            recordCanvas: u = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: p = null,
                            maskAllText: _ = !1,
                            maskAllInputs: h = !1,
                            maskTextFn: f,
                            maskInputFn: m,
                            slimDOM: g = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: E,
                            onSerialize: v,
                            onIframeLoad: S,
                            iframeLoadTimeout: b,
                            keepIframeSrcFn: T = (() => !1)
                        } = t || {}, w = {};
                        return [B(e, {
                            doc: e,
                            map: w,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: s,
                            maskTextClass: i,
                            maskTextSelector: o,
                            unmaskTextSelector: a,
                            skipChild: !1,
                            inlineStylesheet: c,
                            maskInputSelector: d,
                            unmaskInputSelector: p,
                            maskAllText: _,
                            maskInputOptions: !0 === h ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0,
                                password: !0
                            } : !1 === h ? {
                                password: !0
                            } : h,
                            maskTextFn: f,
                            maskInputFn: m,
                            slimDOMOptions: !0 === g || "all" === g ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === g,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === g ? {} : g,
                            dataURLOptions: y,
                            inlineImages: l,
                            recordCanvas: u,
                            preserveWhiteSpace: E,
                            onSerialize: v,
                            onIframeLoad: S,
                            iframeLoadTimeout: b,
                            keepIframeSrcFn: T
                        }), w]
                    }(document, {
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: p,
                        maskInputSelector: d,
                        unmaskInputSelector: _,
                        inlineStylesheet: h,
                        maskAllText: f,
                        maskAllInputs: I,
                        maskTextFn: v,
                        slimDOM: C,
                        recordCanvas: k,
                        inlineImages: O,
                        onSerialize: e => {
                            re(e) && F.addIframe(e), se(e) && $.addShadowRoot(e.shadowRoot, document)
                        },
                        onIframeLoad: (e, t) => {
                            F.attachIframe(e, t), $.observeAttachShadow(e)
                        },
                        keepIframeSrcFn: N
                    });
                    if (!c) return console.warn("Failed to snapshot the document");
                    je.map = m, Ge(Be({
                        type: L.FullSnapshot,
                        data: {
                            node: c,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (t = null === document || void 0 === document ? void 0 : document.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null === document || void 0 === document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollTop) || (null === (a = null === (r = null === document || void 0 === document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === a ? void 0 : a.scrollTop) || (null === document || void 0 === document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), he.forEach((e => e.unlock()))
                };
                try {
                    const e = [];
                    e.push(H("DOMContentLoaded", (() => {
                        Ge(Be({
                            type: L.DomContentLoaded,
                            data: {}
                        }))
                    })));
                    const t = e => {
                        var t;
                        return _e(be)({
                            mutationCb: P,
                            mousemoveCb: (e, t) => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            })),
                            mouseInteractionCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.MouseInteraction
                                }, e)
                            })),
                            scrollCb: U,
                            viewportResizeCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.ViewportResize
                                }, e)
                            })),
                            inputCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.Input
                                }, e)
                            })),
                            mediaInteractionCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.MediaInteraction
                                }, e)
                            })),
                            styleSheetRuleCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.StyleSheetRule
                                }, e)
                            })),
                            styleDeclarationCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.StyleDeclaration
                                }, e)
                            })),
                            canvasMutationCb: G,
                            fontCb: e => Ge(Be({
                                type: L.IncrementalSnapshot,
                                data: Object.assign({
                                    source: j.Font
                                }, e)
                            })),
                            blockClass: s,
                            ignoreClass: a,
                            ignoreSelector: c,
                            maskTextClass: l,
                            maskTextSelector: u,
                            unmaskTextSelector: p,
                            maskInputSelector: d,
                            unmaskInputSelector: _,
                            maskInputOptions: I,
                            inlineStylesheet: h,
                            sampling: T,
                            recordCanvas: k,
                            inlineImages: O,
                            userTriggeredOnInput: x,
                            collectFonts: R,
                            doc: e,
                            maskAllText: f,
                            maskInputFn: E,
                            maskTextFn: v,
                            blockSelector: i,
                            unblockSelector: o,
                            slimDOMOptions: C,
                            mirror: je,
                            iframeManager: F,
                            shadowDomManager: $,
                            canvasManager: Y,
                            plugins: (null === (t = null === D || void 0 === D ? void 0 : D.filter((e => e.observer))) || void 0 === t ? void 0 : t.map((e => ({
                                observer: e.observer,
                                options: e.options,
                                callback: t => Ge(Be({
                                    type: L.Plugin,
                                    data: {
                                        plugin: e.name,
                                        payload: t
                                    }
                                }))
                            })))) || []
                        }, S)
                    };
                    F.addLoadListener((n => {
                        try {
                            e.push(t(n.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    }));
                    const n = () => {
                        Le(), e.push(t(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : e.push(H("load", (() => {
                        Ge(Be({
                            type: L.Load,
                            data: {}
                        })), n()
                    }), window)), () => {
                        e.forEach((e => e()))
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
            Fe.addCustomEvent = (e, t) => {
                if (!Ge) throw new Error("please add custom event after start recording");
                Ge(Be({
                    type: L.Custom,
                    data: {
                        tag: e,
                        payload: t
                    }
                }))
            }, Fe.freezePage = () => {
                he.forEach((e => e.freeze()))
            }, Fe.takeFullSnapshot = e => {
                if (!Le) throw new Error("please take full snapshot after start recording");
                Le(e)
            }, Fe.mirror = je;
            const Ye = ["name", "type", "startTime", "transferSize", "duration"];

            function $e(e) {
                return function(t) {
                    return Ye.every((n => e[n] === t[n]))
                }
            }
            class ze {
                constructor() {
                    this.events = []
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                destroy() {
                    this.events = []
                }
                async addEvent(e, t) {
                    t ? this.events = [e] : this.events.push(e)
                }
                finish() {
                    return new Promise((e => {
                        const t = this.events;
                        this.events = [], e(JSON.stringify(t))
                    }))
                }
            }
            class He {
                constructor(e) {
                    this._worker = e, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((e, t) => {
                        this._worker.addEventListener("message", (({
                            data: n
                        }) => {
                            n.success ? e() : t()
                        }), {
                            once: !0
                        }), this._worker.addEventListener("error", (e => {
                            t(e)
                        }), {
                            once: !0
                        })
                    }))), this._ensureReadyPromise
                }
                destroy() {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(e, t) {
                    const n = this._getAndIncrementId();
                    return new Promise(((r, s) => {
                        const o = ({
                            data: t
                        }) => {
                            const a = t;
                            if (a.method === e && a.id === n) {
                                if (this._worker.removeEventListener("message", o), !a.success) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay]", a.response), void s(new Error("Error in compression worker"));
                                r(a.response)
                            }
                        };
                        this._worker.addEventListener("message", o), this._worker.postMessage({
                            id: n,
                            method: e,
                            arg: t
                        })
                    }))
                }
                _getAndIncrementId() {
                    return this._id++
                }
            }
            class We {
                constructor(e) {
                    this._worker = new He(e), this.hasEvents = !1
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                async addEvent(e, t) {
                    return this.hasEvents = !0, t && await this._clear(), this._sendEventToWorker(e)
                }
                finish() {
                    return this._finishRequest()
                }
                _sendEventToWorker(e) {
                    return this._worker.postMessage("addEvent", JSON.stringify(e))
                }
                async _finishRequest() {
                    const e = await this._worker.postMessage("finish");
                    return this.hasEvents = !1, e
                }
                _clear() {
                    return this._worker.postMessage("clear")
                }
            }
            class qe {
                constructor(e) {
                    this._fallback = new ze, this._compression = new We(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                addEvent(e, t) {
                    return this._used.addEvent(e, t)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (e) {
                        return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer"))
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    const {
                        events: e
                    } = this._fallback, t = [];
                    for (const n of e) t.push(this._compression.addEvent(n));
                    this._used = this._compression;
                    try {
                        await Promise.all(t)
                    } catch (e) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Replay] Failed to add events when switching buffers.", e)
                    }
                }
            }

            function Ve(e, t, n = +new Date) {
                return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
            }

            function Ke(e, t, n = +new Date) {
                return Ve(e.started, p, n) || Ve(e.lastActivity, t, n)
            }

            function Ze(e) {
                if ("sessionStorage" in o) try {
                    o.sessionStorage.setItem(a, JSON.stringify(e))
                } catch (e) {}
            }

            function Je(e) {
                return void 0 !== e && Math.random() < e
            }

            function Xe(e) {
                const t = (new Date).getTime();
                return {
                    id: e.id || i.uuid4(),
                    started: e.started || t,
                    lastActivity: e.lastActivity || t,
                    segmentId: e.segmentId || 0,
                    sampled: e.sampled
                }
            }

            function Qe({
                sessionSampleRate: e,
                errorSampleRate: t,
                stickySession: n = !1
            }) {
                const r = function(e, t) {
                        return Je(e) ? "session" : !!Je(t) && "error"
                    }(e, t),
                    s = Xe({
                        sampled: r
                    });
                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Replay] Creating new session: ${s.id}`), n && Ze(s), s
            }
            async function et(e, t, n) {
                if (!e.eventBuffer) return null;
                if (e.isPaused()) return null;
                const r = t.timestamp > 9999999999 ? t.timestamp : 1e3 * t.timestamp;
                if (r + u < (new Date).getTime()) return null;
                const o = e.getContext().earliestEvent;
                e.session && 0 === e.session.segmentId && (!o || r < o) && (e.getContext().earliestEvent = r);
                try {
                    return await e.eventBuffer.addEvent(t, n)
                } catch (t) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error(t), e.stop("addEvent");
                    const n = s.getCurrentHub().getClient();
                    n && n.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function tt(e) {
                return {
                    timestamp: (new Date).getTime() / 1e3,
                    type: "default",
                    ...e
                }
            }

            function nt(e, t) {
                "sentry.transaction" !== t.category && ("ui.click" === t.category ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate((() => (et(e, {
                    type: L.Custom,
                    timestamp: 1e3 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: t
                    }
                }), "console" === t.category))))
            }

            function rt(e, t) {
                return t.map((({
                    type: t,
                    start: n,
                    end: r,
                    name: s,
                    data: i
                }) => et(e, {
                    type: L.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: t,
                            description: s,
                            startTimestamp: n,
                            endTimestamp: r,
                            data: i
                        }
                    }
                })))
            }

            function st(e, t) {
                return ("undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || !e.getOptions()._experiments.traceInternals) && function(e) {
                    const t = s.getCurrentHub().getClient(),
                        n = t && t.getDsn();
                    return !!n && e.includes(n.host)
                }(t)
            }
            let it = null;

            function ot(e) {
                const t = s.getCurrentHub().getScope();
                t && t.addScopeListener((e => t => {
                    if (!e.isEnabled()) return;
                    const n = function(e) {
                        const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                        return it !== t && t ? (it = t, t.category && (["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.")) ? null : tt(t)) : null
                    }(t);
                    n && nt(e, n)
                })(e)), i.addInstrumentationHandler("dom", (e => t => {
                    if (!e.isEnabled()) return;
                    const n = function(e) {
                        let t, n;
                        try {
                            n = function(e) {
                                return e.event.target ? e.event.target : e.event
                            }(e), t = i.htmlTreeAsString(n)
                        } catch (e) {
                            t = "<unknown>"
                        }
                        return 0 === t.length ? null : tt({
                            category: `ui.${e.name}`,
                            message: t,
                            data: { ...n ? {
                                    nodeId: Fe.mirror.getId(n)
                                } : {}
                            }
                        })
                    }(t);
                    n && nt(e, n)
                })(e)), i.addInstrumentationHandler("fetch", function(e) {
                    return t => {
                        if (!e.isEnabled()) return;
                        const n = function(e) {
                            if (!e.endTimestamp) return null;
                            const {
                                startTimestamp: t,
                                endTimestamp: n,
                                fetchData: r,
                                response: s
                            } = e;
                            return {
                                type: "resource.fetch",
                                start: t / 1e3,
                                end: n / 1e3,
                                name: r.url,
                                data: {
                                    method: r.method,
                                    statusCode: s.status
                                }
                            }
                        }(t);
                        null !== n && (st(e, n.name) || e.addUpdate((() => (rt(e, [n]), !0))))
                    }
                }(e)), i.addInstrumentationHandler("xhr", function(e) {
                    return t => {
                        if (!e.isEnabled()) return;
                        const n = function(e) {
                            if (e.xhr.__sentry_own_request__) return null;
                            if (e.startTimestamp && (e.xhr.__sentry_xhr__ = e.xhr.__sentry_xhr__ || {}, e.xhr.__sentry_xhr__.startTimestamp = e.startTimestamp), !e.endTimestamp) return null;
                            const {
                                method: t,
                                url: n,
                                status_code: r
                            } = e.xhr.__sentry_xhr__ || {};
                            return void 0 === n ? null : {
                                type: "resource.xhr",
                                name: n,
                                start: (e.xhr.__sentry_xhr__ ? e.xhr.__sentry_xhr__.startTimestamp || 0 : e.endTimestamp) / 1e3,
                                end: e.endTimestamp / 1e3,
                                data: {
                                    method: t,
                                    statusCode: r
                                }
                            }
                        }(t);
                        null !== n && (st(e, n.name) || e.addUpdate((() => (rt(e, [n]), !0))))
                    }
                }(e)), i.addInstrumentationHandler("history", function(e) {
                    return t => {
                        if (!e.isEnabled()) return;
                        const n = function(e) {
                            const {
                                from: t,
                                to: n
                            } = e, r = (new Date).getTime() / 1e3;
                            return {
                                type: "navigation.push",
                                start: r,
                                end: r,
                                name: n,
                                data: {
                                    previous: t
                                }
                            }
                        }(t);
                        null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (rt(e, [n]), !1))))
                    }
                }(e)), s.addGlobalEventProcessor(function(e) {
                    return (t, n) => {
                        if (t.type === c) return delete t.breadcrumbs, t;
                        if (function(e, t) {
                                return !(e.type || !e.exception || !e.exception.values || !e.exception.values.length) && (!(!t.originalException || !t.originalException.__rrweb__) || e.exception.values.some((e => !!(e.stacktrace && e.stacktrace.frames && e.stacktrace.frames.length) && e.stacktrace.frames.some((e => e.filename && e.filename.includes("/rrweb/src/"))))))
                            }(t, n) && !e.getOptions()._experiments.captureExceptions) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Ignoring error from rrweb internals", t), null;
                        if (t.type && "session" !== e.recordingMode || (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), "transaction" === t.type && t.contexts && t.contexts.trace && t.contexts.trace.trace_id) return e.getContext().traceIds.add(t.contexts.trace.trace_id), t;
                        if (t.type || e.getContext().errorIds.add(t.event_id), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals) {
                            const e = function(e) {
                                return {
                                    type: "Unknown",
                                    value: "n/a",
                                    ...e.exception && e.exception.values && e.exception.values[0]
                                }
                            }(t);
                            ! function(e) {
                                const {
                                    category: t,
                                    level: n,
                                    message: r,
                                    ...i
                                } = e;
                                s.addBreadcrumb({
                                    category: t || "console",
                                    level: n || "debug",
                                    message: `[debug]: ${r}`,
                                    ...i
                                })
                            }({
                                message: `Tagging event (${t.event_id}) - ${t.message} - ${e.type}: ${e.value}`
                            })
                        }
                        return "error" === e.recordingMode && t.exception && t.message !== l && setTimeout((async () => {
                            await e.flushImmediate(), e.stopRecording() && (e.recordingMode = "session", e.startRecording())
                        })), t
                    }
                }(e))
            }

            function at(e) {
                const {
                    jsHeapSizeLimit: t,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r
                } = e, s = (new Date).getTime() / 1e3;
                return {
                    type: "memory",
                    name: "memory",
                    start: s,
                    end: s,
                    data: {
                        memory: {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        }
                    }
                }
            }
            const ct = {
                resource: function(e) {
                    const {
                        entryType: t,
                        initiatorType: n,
                        name: r,
                        responseEnd: s,
                        startTime: i,
                        encodedBodySize: o,
                        transferSize: a
                    } = e;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: `${t}.${n}`,
                        start: ut(i),
                        end: ut(s),
                        name: r,
                        data: {
                            size: a,
                            encodedBodySize: o
                        }
                    }
                },
                paint: function(e) {
                    const {
                        duration: t,
                        entryType: n,
                        name: r,
                        startTime: s
                    } = e, i = ut(s);
                    return {
                        type: n,
                        name: r,
                        start: i,
                        end: i + t
                    }
                },
                navigation: function(e) {
                    const {
                        entryType: t,
                        name: n,
                        duration: r,
                        domComplete: s,
                        startTime: i,
                        transferSize: o,
                        type: a
                    } = e;
                    return 0 === r ? null : {
                        type: `${t}.${a}`,
                        start: ut(i),
                        end: ut(s),
                        name: n,
                        data: {
                            size: o,
                            duration: r
                        }
                    }
                },
                "largest-contentful-paint": function(e) {
                    const {
                        entryType: t,
                        startTime: n,
                        size: r
                    } = e;
                    let s = 0;
                    if (o.performance) {
                        const e = o.performance.getEntriesByType("navigation")[0];
                        s = e && e.activationStart || 0
                    }
                    const i = Math.max(n - s, 0),
                        a = ut(s) + i / 1e3;
                    return {
                        type: t,
                        name: t,
                        start: a,
                        end: a,
                        data: {
                            value: i,
                            size: r,
                            nodeId: Fe.mirror.getId(e.element)
                        }
                    }
                }
            };

            function lt(e) {
                return void 0 === ct[e.entryType] ? null : ct[e.entryType](e)
            }

            function ut(e) {
                return ((i.browserPerformanceTimeOrigin || o.performance.timeOrigin) + e) / 1e3
            }
            let dt;
            class pt extends Error {
                constructor(e) {
                    super(`Transport returned status code ${e}`)
                }
            }
            async function _t(e, t = {
                count: 0,
                interval: 5e3
            }) {
                const {
                    recordingData: n,
                    options: r
                } = e;
                if (n.length) try {
                    return await async function({
                        recordingData: e,
                        replayId: t,
                        segmentId: n,
                        includeReplayStartTimestamp: r,
                        eventContext: o,
                        timestamp: a,
                        session: u,
                        options: d
                    }) {
                        const p = function({
                                recordingData: e,
                                headers: t
                            }) {
                                let n;
                                const r = `${JSON.stringify(t)}\n`;
                                if ("string" === typeof e) n = `${r}${e}`;
                                else {
                                    const t = (new TextEncoder).encode(r);
                                    n = new Uint8Array(t.length + e.length), n.set(t), n.set(e, t.length)
                                }
                                return n
                            }({
                                recordingData: e,
                                headers: {
                                    segment_id: n
                                }
                            }),
                            {
                                urls: _,
                                errorIds: h,
                                traceIds: f,
                                initialTimestamp: m
                            } = o,
                            g = s.getCurrentHub(),
                            y = g.getClient(),
                            E = g.getScope(),
                            v = y && y.getTransport(),
                            S = y && y.getDsn();
                        if (!y || !E || !v || !S || !u.sampled) return;
                        const b = {
                                type: c,
                                ...r ? {
                                    replay_start_timestamp: m / 1e3
                                } : {},
                                timestamp: a / 1e3,
                                error_ids: h,
                                trace_ids: f,
                                urls: _,
                                replay_id: t,
                                segment_id: n,
                                replay_type: u.sampled
                            },
                            T = await async function({
                                client: e,
                                scope: t,
                                replayId: n,
                                event: r
                            }) {
                                const i = "object" !== typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations),
                                    o = await s.prepareEvent(e.getOptions(), r, {
                                        event_id: n,
                                        integrations: i
                                    }, t);
                                if (!o) return null;
                                o.platform = o.platform || "javascript";
                                const a = e.getSdkMetadata && e.getSdkMetadata(),
                                    {
                                        name: c,
                                        version: l
                                    } = a && a.sdk || {};
                                return o.sdk = { ...o.sdk,
                                    name: c || "sentry.javascript.unknown",
                                    version: l || "0.0.0"
                                }, o
                            }({
                                scope: E,
                                client: y,
                                replayId: t,
                                event: b
                            });
                        if (!T) return y.recordDroppedEvent("event_processor", "replay", b), void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("An event processor returned `null`, will not send event."));
                        T.contexts = { ...T.contexts,
                            replay: { ...T.contexts && T.contexts.replay,
                                session_sample_rate: d.sessionSampleRate,
                                error_sample_rate: d.errorSampleRate
                            }
                        };
                        const w = function(e, t, n, r) {
                            return i.createEnvelope(i.createEventEnvelopeHeaders(e, i.getSdkMetadataForEnvelopeHeader(e), r, n), [
                                [{
                                    type: "replay_event"
                                }, e],
                                [{
                                    type: "replay_recording",
                                    length: "string" === typeof t ? (new TextEncoder).encode(t).length : t.length
                                }, t]
                            ])
                        }(T, p, S, y.getOptions().tunnel);
                        let k;
                        try {
                            k = await v.send(w)
                        } catch (e) {
                            throw new Error(l)
                        }
                        if (!k) return k;
                        if ("number" === typeof k.statusCode && (k.statusCode < 200 || k.statusCode >= 300)) throw new pt(k.statusCode);
                        return k
                    }(e), !0
                } catch (n) {
                    if (n instanceof pt) throw n;
                    if (s.setContext("Replays", {
                            _retryCount: t.count
                        }), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && s.captureException(n), t.count >= 3) throw new Error(`${l} - max retries exceeded`);
                    return t.interval *= ++t.count, await new Promise(((n, r) => {
                        setTimeout((async () => {
                            try {
                                await _t(e, t), n(!0)
                            } catch (e) {
                                r(e)
                            }
                        }), t.interval)
                    }))
                }
            }
            class ht {
                __init() {
                    this.eventBuffer = null
                }
                __init2() {
                    this.performanceEvents = []
                }
                __init3() {
                    this.recordingMode = "session"
                }
                __init4() {
                    this._performanceObserver = null
                }
                __init5() {
                    this._flushLock = null
                }
                __init6() {
                    this._lastActivity = (new Date).getTime()
                }
                __init7() {
                    this._isEnabled = !1
                }
                __init8() {
                    this._isPaused = !1
                }
                __init9() {
                    this._hasInitializedCoreListeners = !1
                }
                __init10() {
                    this._stopRecording = null
                }
                __init11() {
                    this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        earliestEvent: null,
                        initialTimestamp: (new Date).getTime(),
                        initialUrl: ""
                    }
                }
                constructor({
                    options: e,
                    recordingOptions: t
                }) {
                    ht.prototype.__init.call(this), ht.prototype.__init2.call(this), ht.prototype.__init3.call(this), ht.prototype.__init4.call(this), ht.prototype.__init5.call(this), ht.prototype.__init6.call(this), ht.prototype.__init7.call(this), ht.prototype.__init8.call(this), ht.prototype.__init9.call(this), ht.prototype.__init10.call(this), ht.prototype.__init11.call(this), ht.prototype.__init12.call(this), ht.prototype.__init13.call(this), ht.prototype.__init14.call(this), ht.prototype.__init15.call(this), ht.prototype.__init16.call(this), this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
                        let r, s, i;
                        const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;

                        function a() {
                            return c(), r = e(), r
                        }

                        function c() {
                            void 0 !== s && clearTimeout(s), void 0 !== i && clearTimeout(i), s = i = void 0
                        }

                        function l() {
                            return s && clearTimeout(s), s = setTimeout(a, t), o && void 0 === i && (i = setTimeout(a, o)), r
                        }
                        return l.cancel = c, l.flush = function() {
                            return void 0 !== s || void 0 !== i ? a() : r
                        }, l
                    }((() => this._flush()), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    })
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                getOptions() {
                    return this._options
                }
                start() {
                    this._setInitialState(), this._loadAndCheckSession() && (this.session ? this.session.sampled && ("error" === this.session.sampled && (this.recordingMode = "error"), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: e
                    }) {
                        if (e && window.Worker) try {
                            const e = function() {
                                const e = new Blob(['/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(e)
                            }();
                            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Using compression worker");
                            const t = new Worker(e);
                            return new qe(t)
                        } catch (e) {
                            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Failed to create compression worker")
                        }
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Using simple buffer"), new ze
                    }({
                        useCompression: this._options.useCompression
                    }), this._addListeners(), this._isEnabled = !0, this.startRecording()) : this._handleException(new Error("No session found")))
                }
                startRecording() {
                    try {
                        this._stopRecording = Fe({ ...this._recordingOptions,
                            ..."error" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: this._handleRecordingEmit
                        })
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                stopRecording() {
                    try {
                        return !!this._stopRecording && (this._stopRecording(), this._stopRecording = void 0, !0)
                    } catch (e) {
                        return this._handleException(e), !1
                    }
                }
                stop(e) {
                    if (this._isEnabled) try {
                        if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const t = "[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : "");
                            (this.getOptions()._experiments.traceInternals ? console.warn : i.logger.log)(t)
                        }
                        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, this._debouncedFlush.cancel()
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                pause() {
                    this._isPaused = !0, this.stopRecording()
                }
                resume() {
                    this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
                }
                addUpdate(e) {
                    const t = e();
                    "error" !== this.recordingMode && !0 !== t && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
                    else {
                        if (!this._loadAndCheckSession()) return;
                        this.resume()
                    }
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession(e) {
                    const t = this.getSessionId();
                    if (this._lastActivity && Ve(this._lastActivity, p)) this.pause();
                    else if (this._loadAndCheckSession(e)) return t === this.getSessionId() || (this._triggerFullSnapshot(), !1)
                }
                _handleException(e) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay]", e), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && s.captureException(e)
                }
                _loadAndCheckSession(e = u) {
                    const {
                        type: t,
                        session: n
                    } = function({
                        expiry: e,
                        currentSession: t,
                        stickySession: n,
                        sessionSampleRate: r,
                        errorSampleRate: s
                    }) {
                        const c = t || n && function() {
                            if (!("sessionStorage" in o)) return null;
                            try {
                                const e = o.sessionStorage.getItem(a);
                                return e ? Xe(JSON.parse(e)) : null
                            } catch (e) {
                                return null
                            }
                        }();
                        if (c) {
                            if (!Ke(c, e)) return {
                                type: "saved",
                                session: c
                            };
                            if ("error" === c.sampled) return {
                                type: "new",
                                session: Xe({
                                    sampled: !1
                                })
                            };
                            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Session has expired")
                        }
                        return {
                            type: "new",
                            session: Qe({
                                stickySession: n,
                                sessionSampleRate: r,
                                errorSampleRate: s
                            })
                        }
                    }({
                        expiry: e,
                        stickySession: Boolean(this._options.stickySession),
                        currentSession: this.session,
                        sessionSampleRate: this._options.sessionSampleRate,
                        errorSampleRate: this._options.errorSampleRate
                    });
                    "new" === t && this._setInitialState();
                    const r = this.getSessionId();
                    return n.id !== r && (n.previousSessionId = r), this.session = n, !!this.session.sampled || (this.stop("session unsampled"), !1)
                }
                _setInitialState() {
                    const e = `${o.location.pathname}${o.location.hash}${o.location.search}`,
                        t = `${o.location.origin}${e}`;
                    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = (new Date).getTime(), this._context.urls.push(t)
                }
                _addListeners() {
                    try {
                        o.document.addEventListener("visibilitychange", this._handleVisibilityChange), o.addEventListener("blur", this._handleWindowBlur), o.addEventListener("focus", this._handleWindowFocus),
                            function(e) {
                                const t = s.getCurrentHub().getClient();
                                if (!t) return;
                                const n = t.recordDroppedEvent.bind(t);
                                t.recordDroppedEvent = (t, r, s) => (s && !s.type && s.event_id && e.delete(s.event_id), n(t, r, s)), dt = n
                            }(this._context.errorIds), this._hasInitializedCoreListeners || (ot(this), this._hasInitializedCoreListeners = !0)
                    } catch (e) {
                        this._handleException(e)
                    }
                    "PerformanceObserver" in o && (this._performanceObserver = function(e) {
                        const t = new PerformanceObserver((t => {
                            const n = function(e, t) {
                                const [n, r, s] = e.reduce(((e, t) => ("navigation" === t.entryType ? e[0].push(t) : "largest-contentful-paint" === t.entryType ? e[1].push(t) : e[2].push(t), e)), [
                                    [],
                                    [],
                                    []
                                ]), i = [], o = [];
                                let a = r.length ? r[r.length - 1] : void 0;
                                return t.forEach((e => {
                                    if ("largest-contentful-paint" !== e.entryType)
                                        if ("navigation" !== e.entryType) i.push(e);
                                        else {
                                            const t = e;
                                            e.duration > 0 && !n.find($e(t)) && !o.find($e(t)) && o.push(t)
                                        }
                                    else(!a || a.startTime < e.startTime) && (a = e)
                                })), [...a ? [a] : [], ...n, ...s, ...i, ...o].sort(((e, t) => e.startTime - t.startTime))
                            }(e.performanceEvents, t.getEntries());
                            e.performanceEvents = n
                        }));
                        return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach((e => {
                            try {
                                t.observe({
                                    type: e,
                                    buffered: !0
                                })
                            } catch (e) {}
                        })), t
                    }(this))
                }
                _removeListeners() {
                    try {
                        o.document.removeEventListener("visibilitychange", this._handleVisibilityChange), o.removeEventListener("blur", this._handleWindowBlur), o.removeEventListener("focus", this._handleWindowFocus),
                            function() {
                                const e = s.getCurrentHub().getClient();
                                e && dt && (e.recordDroppedEvent = dt)
                            }(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                __init12() {
                    this._handleRecordingEmit = (e, t) => {
                        this.checkAndHandleExpiredSession() ? this.addUpdate((() => ("error" === this.recordingMode && 2 === e.type && this._setInitialState(), et(this, e, t), 2 === e.type && (this.session && this.session.previousSessionId || ("error" === this.recordingMode && this.session && this._context.earliestEvent && (this.session.started = this._context.earliestEvent, this._maybeSaveSession()), "session" === this.recordingMode && this.flushImmediate()), !0)))) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay] Received replay event after session expired.")
                    }
                }
                __init13() {
                    this._handleVisibilityChange = () => {
                        "visible" === o.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init14() {
                    this._handleWindowBlur = () => {
                        const e = tt({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(e)
                    }
                }
                __init15() {
                    this._handleWindowFocus = () => {
                        const e = tt({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(e)
                    }
                }
                _doChangeToBackgroundTasks(e) {
                    if (!this.session) return;
                    const t = Ke(this.session, d);
                    e && !t && this._createCustomBreadcrumb(e), this._conditionalFlush()
                }
                _doChangeToForegroundTasks(e) {
                    this.session && (this.checkAndHandleExpiredSession(d) ? e && this._createCustomBreadcrumb(e) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Document has become active, but session has expired"))
                }
                _triggerFullSnapshot() {
                    try {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Replay] Taking full rrweb snapshot"), Fe.takeFullSnapshot(!0)
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                _updateUserActivity(e = (new Date).getTime()) {
                    this._lastActivity = e
                }
                _updateSessionActivity(e = (new Date).getTime()) {
                    this.session && (this.session.lastActivity = e, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(e) {
                    this.addUpdate((() => {
                        et(this, {
                            type: L.Custom,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e
                            }
                        })
                    }))
                }
                _addPerformanceEntries() {
                    const e = [...this.performanceEvents];
                    return this.performanceEvents = [], Promise.all(rt(this, function(e) {
                        return e.map(lt).filter(Boolean)
                    }(e)))
                }
                _conditionalFlush() {
                    "error" !== this.recordingMode && this.flushImmediate()
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [], this._context.earliestEvent = null
                }
                _popEventContext() {
                    this._context.earliestEvent && this._context.earliestEvent < this._context.initialTimestamp && (this._context.initialTimestamp = this._context.earliestEvent);
                    const e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds).filter(Boolean),
                        traceIds: Array.from(this._context.traceIds).filter(Boolean),
                        urls: this._context.urls
                    };
                    return this._clearContext(), e
                }
                async _runFlush() {
                    if (this.session && this.eventBuffer) {
                        if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(e) {
                                try {
                                    return Promise.all(rt(e, [at(o.performance.memory)]))
                                } catch (e) {
                                    return []
                                }
                            }(this), this.eventBuffer)) try {
                            const e = await this.eventBuffer.finish(),
                                t = this.session.id,
                                n = this._popEventContext(),
                                r = this.session.segmentId++;
                            this._maybeSaveSession(), await _t({
                                replayId: t,
                                recordingData: e,
                                segmentId: r,
                                includeReplayStartTimestamp: 0 === r,
                                eventContext: n,
                                session: this.session,
                                options: this.getOptions(),
                                timestamp: (new Date).getTime()
                            })
                        } catch (e) {
                            this._handleException(e), this.stop("sendReplay");
                            const t = s.getCurrentHub().getClient();
                            t && t.recordDroppedEvent("send_error", "replay")
                        }
                    } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay] No session or eventBuffer found to flush.")
                }
                __init16() {
                    this._flush = async () => {
                        if (this._isEnabled)
                            if (this.checkAndHandleExpiredSession())
                                if (this.session) {
                                    if (this._debouncedFlush.cancel(), !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, void(this._flushLock = null);
                                    try {
                                        await this._flushLock
                                    } catch (e) {
                                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error(e)
                                    } finally {
                                        this._debouncedFlush()
                                    }
                                } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay] No session found to flush.");
                        else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("[Replay] Attempting to finish replay event after session expired.")
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && Ze(this.session)
                }
            }

            function ft(e, t, n, r) {
                const s = [...e, ..."string" === typeof r ? r.split(",") : [], ...t];
                return "undefined" !== typeof n && ("string" === typeof n && s.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), s.join(",")
            }

            function mt({
                mask: e,
                unmask: t,
                block: n,
                unblock: r,
                ignore: s,
                blockClass: i,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: c,
                ignoreClass: l
            }) {
                const u = ft(e, [".sentry-mask", "[data-sentry-mask]"], a, c),
                    d = ft(t, [".sentry-unmask", "[data-sentry-unmask]"]),
                    p = {
                        maskTextSelector: u,
                        unmaskTextSelector: d,
                        maskInputSelector: u,
                        unmaskInputSelector: d,
                        blockSelector: ft(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, o),
                        unblockSelector: ft(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                        ignoreSelector: ft(s, [".sentry-ignore", "[data-sentry-ignore]"], l)
                    };
                return i instanceof RegExp && (p.blockClass = i), a instanceof RegExp && (p.maskTextClass = a), p
            }

            function gt() {
                return "undefined" !== typeof window && (!i.isNodeEnv() || "undefined" !== typeof r && "renderer" === r.type)
            }
            const yt = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]';
            let Et = !1;
            class vt {
                static __initStatic() {
                    this.id = "Replay"
                }
                __init() {
                    this.name = vt.id
                }
                constructor({
                    flushMinDelay: e = 5e3,
                    flushMaxDelay: t = 5500,
                    stickySession: n = !0,
                    useCompression: r = !0,
                    _experiments: s = {},
                    sessionSampleRate: i,
                    errorSampleRate: o,
                    maskAllText: a = !0,
                    maskAllInputs: c = !0,
                    blockAllMedia: l = !0,
                    mask: u = [],
                    unmask: d = [],
                    block: p = [],
                    unblock: _ = [],
                    ignore: h = [],
                    maskFn: f,
                    blockClass: m,
                    blockSelector: g,
                    maskInputOptions: y,
                    maskTextClass: E,
                    maskTextSelector: v,
                    ignoreClass: S
                } = {}) {
                    if (vt.prototype.__init.call(this), this._recordingOptions = {
                            maskAllInputs: c,
                            maskAllText: a,
                            maskInputOptions: { ...y || {},
                                password: !0
                            },
                            maskTextFn: f,
                            maskInputFn: f,
                            ...mt({
                                mask: u,
                                unmask: d,
                                block: p,
                                unblock: _,
                                ignore: h,
                                blockClass: m,
                                blockSelector: g,
                                maskTextClass: E,
                                maskTextSelector: v,
                                ignoreClass: S
                            }),
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0
                        }, this._initialOptions = {
                            flushMinDelay: e,
                            flushMaxDelay: t,
                            stickySession: n,
                            sessionSampleRate: i,
                            errorSampleRate: o,
                            useCompression: r,
                            blockAllMedia: l,
                            _experiments: s
                        }, "number" === typeof i && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${i} })`), this._initialOptions.sessionSampleRate = i), "number" === typeof o && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${o} })`), this._initialOptions.errorSampleRate = o), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${yt}` : yt), this._isInitialized && gt()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return Et
                }
                set _isInitialized(e) {
                    Et = e
                }
                setupOnce() {
                    gt() && (this._setup(), setTimeout((() => this.start())))
                }
                start() {
                    this._replay && this._replay.start()
                }
                stop() {
                    this._replay && this._replay.stop()
                }
                flush() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.flushImmediate()
                }
                _setup() {
                    const e = function(e) {
                        const t = s.getCurrentHub().getClient(),
                            n = t && t.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...i.dropUndefinedKeys(e)
                            };
                        return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" === typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" === typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                    }(this._initialOptions);
                    this._replay = new ht({
                        options: e,
                        recordingOptions: this._recordingOptions
                    })
                }
            }
            vt.__initStatic(), t.Replay = vt
        },
        80444: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(2053),
                i = n(68073);
            t.registerBackgroundTabDetection = function() {
                i.WINDOW && i.WINDOW.document ? i.WINDOW.document.addEventListener("visibilitychange", (() => {
                    const e = s.getActiveTransaction();
                    if (i.WINDOW.document.hidden && e) {
                        const t = "cancelled";
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`), e.status || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.finish()
                    }
                })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }
        },
        70628: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(2225),
                i = n(77524);
            n(69790);
            const o = n(80444),
                a = n(6879),
                c = n(40578),
                l = n(29833),
                u = n(68073),
                d = "BrowserTracing",
                p = {
                    idleTimeout: i.DEFAULT_IDLE_TIMEOUT,
                    finalTimeout: i.DEFAULT_FINAL_TIMEOUT,
                    heartbeatInterval: i.DEFAULT_HEARTBEAT_INTERVAL,
                    markBackgroundTransactions: !0,
                    routingInstrumentation: l.instrumentRoutingWithDefaults,
                    startTransactionOnLocationChange: !0,
                    startTransactionOnPageLoad: !0,
                    enableLongTask: !0,
                    _experiments: {},
                    ...c.defaultRequestInstrumentationOptions
                };
            class _ {
                __init() {
                    this.name = d
                }
                constructor(e) {
                    _.prototype.__init.call(this), this.options = { ...p,
                        ...e
                    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), a.startTrackingWebVitals(), this.options.enableLongTask && a.startTrackingLongTasks()
                }
                setupOnce(e, t) {
                    this._getCurrentHub = t;
                    const {
                        routingInstrumentation: n,
                        startTransactionOnLocationChange: r,
                        startTransactionOnPageLoad: s,
                        markBackgroundTransactions: i,
                        traceFetch: a,
                        traceXHR: l,
                        tracePropagationTargets: u,
                        shouldCreateSpanForRequest: d,
                        _experiments: p
                    } = this.options;
                    n((e => {
                        const n = this._createRouteTransaction(e);
                        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n
                    }), s, r), i && o.registerBackgroundTabDetection(), p.enableInteractions && this._registerInteractionListener(), c.instrumentOutgoingRequests({
                        traceFetch: a,
                        traceXHR: l,
                        tracePropagationTargets: u,
                        shouldCreateSpanForRequest: d
                    })
                }
                _createRouteTransaction(e) {
                    if (!this._getCurrentHub) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
                    const {
                        beforeNavigate: t,
                        idleTimeout: n,
                        finalTimeout: i,
                        heartbeatInterval: o
                    } = this.options, c = "pageload" === e.op, l = c ? h("sentry-trace") : null, d = c ? h("baggage") : null, p = l ? r.extractTraceparentData(l) : void 0, _ = d ? r.baggageHeaderToDynamicSamplingContext(d) : void 0, f = { ...e,
                        ...p,
                        metadata: { ...e.metadata,
                            dynamicSamplingContext: p && !_ ? {} : _
                        },
                        trimEnd: !0
                    }, m = "function" === typeof t ? t(f) : f, g = void 0 === m ? { ...f,
                        sampled: !1
                    } : m;
                    g.metadata = g.name !== f.name ? { ...g.metadata,
                        source: "custom"
                    } : g.metadata, this._latestRouteName = g.name, this._latestRouteSource = g.metadata && g.metadata.source, !1 === g.sampled && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Will not send ${g.op} transaction because of beforeNavigate.`), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Starting ${g.op} transaction on scope`);
                    const y = this._getCurrentHub(),
                        {
                            location: E
                        } = u.WINDOW,
                        v = s.startIdleTransaction(y, g, n, i, !0, {
                            location: E
                        }, o);
                    return v.registerBeforeFinishCallback((e => {
                        a.addPerformanceEntries(e)
                    })), v
                }
                _registerInteractionListener() {
                    let e;
                    const t = () => {
                        const {
                            idleTimeout: t,
                            finalTimeout: n,
                            heartbeatInterval: i
                        } = this.options, o = "ui.action.click";
                        if (e && (e.finish(), e = void 0), !this._getCurrentHub) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`));
                        if (!this._latestRouteName) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`));
                        const a = this._getCurrentHub(),
                            {
                                location: c
                            } = u.WINDOW,
                            l = {
                                name: this._latestRouteName,
                                op: o,
                                trimEnd: !0,
                                metadata: {
                                    source: this._latestRouteSource || "url"
                                }
                            };
                        e = s.startIdleTransaction(a, l, t, n, !0, {
                            location: c
                        }, i)
                    };
                    ["click"].forEach((e => {
                        addEventListener(e, t, {
                            once: !1,
                            capture: !0
                        })
                    }))
                }
            }

            function h(e) {
                const t = r.getDomElement(`meta[name=${e}]`);
                return t ? t.getAttribute("content") : null
            }
            t.BROWSER_TRACING_INTEGRATION_ID = d, t.BrowserTracing = _, t.getMetaContent = h
        },
        6879: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(2053),
                i = n(68073),
                o = n(11167),
                a = n(26288),
                c = n(96541),
                l = n(33621),
                u = n(85294),
                d = n(27883);

            function p() {
                return i.WINDOW && i.WINDOW.addEventListener && i.WINDOW.performance
            }
            let _, h, f = 0,
                m = {};

            function g(e, t, n, r, s) {
                const i = s + n,
                    o = i + r;
                return d._startChild(e, {
                    description: t.name,
                    endTimestamp: o,
                    op: t.entryType,
                    startTimestamp: i
                }), i
            }

            function y(e, t, n, r, i, o) {
                const a = o ? t[o] : t[`${n}End`],
                    c = t[`${n}Start`];
                c && a && d._startChild(e, {
                    op: "browser",
                    description: i || n,
                    startTimestamp: r + s.msToSec(c),
                    endTimestamp: r + s.msToSec(a)
                })
            }

            function E(e, t, n, r, s, i) {
                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                const o = {};
                "transferSize" in t && (o["Transfer Size"] = t.transferSize), "encodedBodySize" in t && (o["Encoded Body Size"] = t.encodedBodySize), "decodedBodySize" in t && (o["Decoded Body Size"] = t.decodedBodySize), "renderBlockingStatus" in t && (o["resource.render_blocking_status"] = t.renderBlockingStatus);
                const a = i + r,
                    c = a + s;
                d._startChild(e, {
                    description: n,
                    endTimestamp: c,
                    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                    startTimestamp: a,
                    data: o
                })
            }
            t._addMeasureSpans = g, t._addResourceSpans = E, t.addPerformanceEntries = function(e) {
                const t = p();
                if (!t || !i.WINDOW.performance.getEntries || !r.browserPerformanceTimeOrigin) return;
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Adding & adjusting spans using Performance API");
                const n = s.msToSec(r.browserPerformanceTimeOrigin),
                    o = t.getEntries();
                let a, c;
                if (o.slice(f).forEach((t => {
                        const o = s.msToSec(t.startTime),
                            u = s.msToSec(t.duration);
                        if (!("navigation" === e.op && n + o < e.startTimestamp)) switch (t.entryType) {
                            case "navigation":
                                ! function(e, t, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                            y(e, t, r, n)
                                        })), y(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), y(e, t, "fetch", n, "cache", "domainLookupStart"), y(e, t, "domainLookup", n, "DNS"),
                                        function(e, t, n) {
                                            d._startChild(e, {
                                                op: "browser",
                                                description: "request",
                                                startTimestamp: n + s.msToSec(t.requestStart),
                                                endTimestamp: n + s.msToSec(t.responseEnd)
                                            }), d._startChild(e, {
                                                op: "browser",
                                                description: "response",
                                                startTimestamp: n + s.msToSec(t.responseStart),
                                                endTimestamp: n + s.msToSec(t.responseEnd)
                                            })
                                        }(e, t, n)
                                }(e, t, n), a = n + s.msToSec(t.responseStart), c = n + s.msToSec(t.requestStart);
                                break;
                            case "mark":
                            case "paint":
                            case "measure":
                                {
                                    g(e, t, o, u, n);
                                    const s = l.getVisibilityWatcher(),
                                        i = t.startTime < s.firstHiddenTime;
                                    "first-paint" === t.name && i && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding FP"), m.fp = {
                                        value: t.startTime,
                                        unit: "millisecond"
                                    }),
                                    "first-contentful-paint" === t.name && i && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding FCP"), m.fcp = {
                                        value: t.startTime,
                                        unit: "millisecond"
                                    });
                                    break
                                }
                            case "resource":
                                {
                                    const r = t.name.replace(i.WINDOW.location.origin, "");E(e, t, r, o, u, n);
                                    break
                                }
                        }
                    })), f = Math.max(o.length - 1, 0), function(e) {
                        const t = i.WINDOW.navigator;
                        if (!t) return;
                        const n = t.connection;
                        n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), d.isMeasurementValue(n.rtt) && (m["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        })), d.isMeasurementValue(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), d.isMeasurementValue(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
                    }(e), "pageload" === e.op) {
                    "number" === typeof a && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding TTFB"), m.ttfb = {
                        value: 1e3 * (a - e.startTimestamp),
                        unit: "millisecond"
                    }, "number" === typeof c && c <= a && (m["ttfb.requestTime"] = {
                        value: 1e3 * (a - c),
                        unit: "millisecond"
                    })), ["fcp", "fp", "lcp"].forEach((t => {
                        if (!m[t] || n >= e.startTimestamp) return;
                        const i = m[t].value,
                            o = n + s.msToSec(i),
                            a = Math.abs(1e3 * (o - e.startTimestamp)),
                            c = a - i;
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Measurements] Normalized ${t} from ${i} to ${a} (${c})`), m[t].value = a
                    }));
                    const t = m["mark.fid"];
                    t && m.fid && (d._startChild(e, {
                            description: "first input delay",
                            endTimestamp: t.value + s.msToSec(m.fid.value),
                            op: "ui.action",
                            startTimestamp: t.value
                        }), delete m["mark.fid"]), "fcp" in m || delete m.cls, Object.keys(m).forEach((t => {
                            e.setMeasurement(t, m[t].value, m[t].unit)
                        })),
                        function(e) {
                            _ && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding LCP Data"), _.element && e.setTag("lcp.element", r.htmlTreeAsString(_.element)), _.id && e.setTag("lcp.id", _.id), _.url && e.setTag("lcp.url", _.url.trim().slice(0, 200)), e.setTag("lcp.size", _.size)), h && h.sources && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding CLS Data"), h.sources.forEach(((t, n) => e.setTag(`cls.source.${n+1}`, r.htmlTreeAsString(t.node)))))
                        }(e)
                }
                _ = void 0, h = void 0, m = {}
            }, t.startTrackingLongTasks = function() {
                u.observe("longtask", (e => {
                    for (const t of e) {
                        const e = s.getActiveTransaction();
                        if (!e) return;
                        const n = s.msToSec(r.browserPerformanceTimeOrigin + t.startTime),
                            i = s.msToSec(t.duration);
                        e.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            startTimestamp: n,
                            endTimestamp: n + i
                        })
                    }
                }))
            }, t.startTrackingWebVitals = function() {
                const e = p();
                e && r.browserPerformanceTimeOrigin && (e.mark && i.WINDOW.performance.mark("sentry-tracing-init"), o.onCLS((e => {
                    const t = e.entries.pop();
                    t && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding CLS"), m.cls = {
                        value: e.value,
                        unit: ""
                    }, h = t)
                })), c.onLCP((e => {
                    const t = e.entries.pop();
                    t && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding LCP"), m.lcp = {
                        value: e.value,
                        unit: "millisecond"
                    }, _ = t)
                })), a.onFID((e => {
                    const t = e.entries.pop();
                    if (!t) return;
                    const n = s.msToSec(r.browserPerformanceTimeOrigin),
                        i = s.msToSec(t.startTime);
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding FID"), m.fid = {
                        value: e.value,
                        unit: "millisecond"
                    }, m["mark.fid"] = {
                        value: n + i,
                        unit: "second"
                    }
                })))
            }
        },
        27883: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._startChild = function(e, {
                startTimestamp: t,
                ...n
            }) {
                return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({
                    startTimestamp: t,
                    ...n
                })
            }, t.isMeasurementValue = function(e) {
                return "number" === typeof e && isFinite(e)
            }
        },
        40578: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(69790),
                s = n(43702),
                i = ["localhost", /^\//],
                o = {
                    traceFetch: !0,
                    traceXHR: !0,
                    tracingOrigins: i,
                    tracePropagationTargets: i
                };

            function a(e, t) {
                return s.stringMatchesSomePattern(e, t || i)
            }

            function c(e, t, n, i) {
                if (!r.hasTracingEnabled() || !e.fetchData || !t(e.fetchData.url)) return;
                if (e.endTimestamp) {
                    const t = e.fetchData.__span;
                    if (!t) return;
                    const n = i[t];
                    return void(n && (e.response ? n.setHttpStatus(e.response.status) : e.error && n.setStatus("internal_error"), n.finish(), delete i[t]))
                }
                const o = r.getCurrentHub().getScope(),
                    a = o && o.getSpan(),
                    c = a && a.transaction;
                if (a && c) {
                    const t = a.startChild({
                        data: { ...e.fetchData,
                            type: "fetch"
                        },
                        description: `${e.fetchData.method} ${e.fetchData.url}`,
                        op: "http.client"
                    });
                    e.fetchData.__span = t.spanId, i[t.spanId] = t;
                    const r = e.args[0];
                    e.args[1] = e.args[1] || {};
                    const o = e.args[1];
                    n(e.fetchData.url) && (o.headers = function(e, t, n, r) {
                        const i = s.dynamicSamplingContextToSentryBaggageHeader(t),
                            o = n.toTraceparent(),
                            a = "undefined" !== typeof Request && s.isInstanceOf(e, Request) ? e.headers : r.headers;
                        if (a) {
                            if ("undefined" !== typeof Headers && s.isInstanceOf(a, Headers)) {
                                const e = new Headers(a);
                                return e.append("sentry-trace", o), i && e.append(s.BAGGAGE_HEADER_NAME, i), e
                            }
                            if (Array.isArray(a)) {
                                const e = [...a, ["sentry-trace", o]];
                                return i && e.push([s.BAGGAGE_HEADER_NAME, i]), e
                            } {
                                const e = "baggage" in a ? a.baggage : void 0,
                                    t = [];
                                return Array.isArray(e) ? t.push(...e) : e && t.push(e), i && t.push(i), { ...a,
                                    "sentry-trace": o,
                                    baggage: t.length > 0 ? t.join(",") : void 0
                                }
                            }
                        }
                        return {
                            "sentry-trace": o,
                            baggage: i
                        }
                    }(r, c.getDynamicSamplingContext(), t, o))
                }
            }

            function l(e, t, n, i) {
                if (!r.hasTracingEnabled() || e.xhr && e.xhr.__sentry_own_request__ || !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url))) return;
                const o = e.xhr.__sentry_xhr__;
                if (e.endTimestamp) {
                    const t = e.xhr.__sentry_xhr_span_id__;
                    if (!t) return;
                    const n = i[t];
                    return void(n && (n.setHttpStatus(o.status_code), n.finish(), delete i[t]))
                }
                const a = r.getCurrentHub().getScope(),
                    c = a && a.getSpan(),
                    l = c && c.transaction;
                if (c && l) {
                    const t = c.startChild({
                        data: { ...o.data,
                            type: "xhr",
                            method: o.method,
                            url: o.url
                        },
                        description: `${o.method} ${o.url}`,
                        op: "http.client"
                    });
                    if (e.xhr.__sentry_xhr_span_id__ = t.spanId, i[e.xhr.__sentry_xhr_span_id__] = t, e.xhr.setRequestHeader && n(e.xhr.__sentry_xhr__.url)) try {
                        e.xhr.setRequestHeader("sentry-trace", t.toTraceparent());
                        const n = l.getDynamicSamplingContext(),
                            r = s.dynamicSamplingContextToSentryBaggageHeader(n);
                        r && e.xhr.setRequestHeader(s.BAGGAGE_HEADER_NAME, r)
                    } catch (e) {}
                }
            }
            t.DEFAULT_TRACE_PROPAGATION_TARGETS = i, t.defaultRequestInstrumentationOptions = o, t.fetchCallback = c, t.instrumentOutgoingRequests = function(e) {
                const {
                    traceFetch: t,
                    traceXHR: n,
                    tracePropagationTargets: r,
                    tracingOrigins: i,
                    shouldCreateSpanForRequest: u
                } = {
                    traceFetch: o.traceFetch,
                    traceXHR: o.traceXHR,
                    ...e
                }, d = "function" === typeof u ? u : e => !0, p = e => a(e, r || i), _ = {};
                t && s.addInstrumentationHandler("fetch", (e => {
                    c(e, d, p, _)
                })), n && s.addInstrumentationHandler("xhr", (e => {
                    l(e, d, p, _)
                }))
            }, t.shouldAttachHeaders = a, t.xhrCallback = l
        },
        29833: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(68073);
            t.instrumentRoutingWithDefaults = function(e, t = !0, n = !0) {
                if (!s.WINDOW || !s.WINDOW.location) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location"));
                let i, o = s.WINDOW.location.href;
                t && (i = e({
                    name: s.WINDOW.location.pathname,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })), n && r.addInstrumentationHandler("history", (({
                    to: t,
                    from: n
                }) => {
                    void 0 === n && o && -1 !== o.indexOf(t) ? o = void 0 : n !== t && (o = void 0, i && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Finishing current transaction with op: ${i.op}`), i.finish()), i = e({
                        name: s.WINDOW.location.pathname,
                        op: "navigation",
                        metadata: {
                            source: "url"
                        }
                    }))
                }))
            }
        },
        68073: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702).GLOBAL_OBJ;
            t.WINDOW = r
        },
        11167: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(87504),
                s = n(42328),
                i = n(85294),
                o = n(57588);
            t.onCLS = e => {
                const t = s.initMetric("CLS", 0);
                let n, a = 0,
                    c = [];
                const l = e => {
                        e.forEach((e => {
                            if (!e.hadRecentInput) {
                                const r = c[0],
                                    s = c[c.length - 1];
                                a && 0 !== c.length && e.startTime - s.startTime < 1e3 && e.startTime - r.startTime < 5e3 ? (a += e.value, c.push(e)) : (a = e.value, c = [e]), a > t.value && (t.value = a, t.entries = c, n && n())
                            }
                        }))
                    },
                    u = i.observe("layout-shift", l);
                u && (n = r.bindReporter(e, t), o.onHidden((() => {
                    l(u.takeRecords()), n(!0)
                })))
            }
        },
        26288: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(87504),
                s = n(33621),
                i = n(42328),
                o = n(85294),
                a = n(57588);
            t.onFID = e => {
                const t = s.getVisibilityWatcher(),
                    n = i.initMetric("FID");
                let c;
                const l = e => {
                        e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), c(!0))
                    },
                    u = e => {
                        e.forEach(l)
                    },
                    d = o.observe("first-input", u);
                c = r.bindReporter(e, n), d && a.onHidden((() => {
                    u(d.takeRecords()), d.disconnect()
                }), !0)
            }
        },
        96541: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(87504),
                s = n(47305),
                i = n(33621),
                o = n(42328),
                a = n(85294),
                c = n(57588),
                l = {};
            t.onLCP = e => {
                const t = i.getVisibilityWatcher(),
                    n = o.initMetric("LCP");
                let u;
                const d = e => {
                        const r = e[e.length - 1];
                        if (r) {
                            const e = Math.max(r.startTime - s.getActivationStart(), 0);
                            e < t.firstHiddenTime && (n.value = e, n.entries = [r], u())
                        }
                    },
                    p = a.observe("largest-contentful-paint", d);
                if (p) {
                    u = r.bindReporter(e, n);
                    const t = () => {
                        l[n.id] || (d(p.takeRecords()), p.disconnect(), l[n.id] = !0, u(!0))
                    };
                    ["keydown", "click"].forEach((e => {
                        addEventListener(e, t, {
                            once: !0,
                            capture: !0
                        })
                    })), c.onHidden(t, !0)
                }
            }
        },
        87504: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bindReporter = (e, t, n) => {
                let r, s;
                return i => {
                    t.value >= 0 && (i || n) && (s = t.value - (r || 0), (s || void 0 === r) && (r = t.value, t.delta = s, e(t)))
                }
            }
        },
        52250: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateUniqueID = () => `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`
        },
        47305: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(91830);
            t.getActivationStart = () => {
                const e = r.getNavigationEntry();
                return e && e.activationStart || 0
            }
        },
        91830: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68073);
            t.getNavigationEntry = () => r.WINDOW.__WEB_VITALS_POLYFILL__ ? r.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
                const e = r.WINDOW.performance.timing,
                    t = r.WINDOW.performance.navigation.type,
                    n = {
                        entryType: "navigation",
                        startTime: 0,
                        type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
                    };
                for (const t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
                return n
            })()) : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        33621: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68073),
                s = n(57588);
            let i = -1;
            t.getVisibilityWatcher = () => (i < 0 && (i = "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0, s.onHidden((({
                timeStamp: e
            }) => {
                i = e
            }), !0)), {
                get firstHiddenTime() {
                    return i
                }
            })
        },
        42328: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68073),
                s = n(52250),
                i = n(47305),
                o = n(91830);
            t.initMetric = (e, t) => {
                const n = o.getNavigationEntry();
                let a = "navigate";
                return n && (a = r.WINDOW.document.prerendering || i.getActivationStart() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                    name: e,
                    value: "undefined" === typeof t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: s.generateUniqueID(),
                    navigationType: a
                }
            }
        },
        85294: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.observe = (e, t, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        const r = new PerformanceObserver((e => {
                            t(e.getEntries())
                        }));
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (e) {}
            }
        },
        57588: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68073);
            t.onHidden = (e, t) => {
                const n = s => {
                    "pagehide" !== s.type && "hidden" !== r.WINDOW.document.visibilityState || (e(s), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }
        },
        54409: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(2053);

            function i() {
                const e = s.getActiveTransaction();
                if (e) {
                    const t = "internal_error";
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t)
                }
            }
            t.registerErrorInstrumentation = function() {
                r.addInstrumentationHandler("error", i), r.addInstrumentationHandler("unhandledrejection", i)
            }
        },
        2225: (e, t, n) => {
            e = n.nmd(e), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(69790),
                s = n(43702),
                i = n(54409),
                o = n(77524),
                a = n(65985);

            function c() {
                const e = this.getScope();
                if (e) {
                    const t = e.getSpan();
                    if (t) return {
                        "sentry-trace": t.toTraceparent()
                    }
                }
                return {}
            }

            function l(e, t, n) {
                if (!r.hasTracingEnabled(t)) return e.sampled = !1, e;
                if (void 0 !== e.sampled) return e.setMetadata({
                    sampleRate: Number(e.sampled)
                }), e;
                let i;
                return "function" === typeof t.tracesSampler ? (i = t.tracesSampler(n), e.setMetadata({
                    sampleRate: Number(i)
                })) : void 0 !== n.parentSampled ? i = n.parentSampled : "undefined" !== typeof t.tracesSampleRate ? (i = t.tracesSampleRate, e.setMetadata({
                    sampleRate: Number(i)
                })) : (i = 1, e.setMetadata({
                    sampleRate: i
                })), o = i, (s.isNaN(o) || "number" !== typeof o && "boolean" !== typeof o ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 0) : !(o < 0 || o > 1) || (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${o}.`), 0)) ? i ? (e.sampled = Math.random() < i, e.sampled ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log(`[Tracing] starting ${e.op} transaction - ${e.name}`), e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), e)) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = !1, e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1, e);
                var o
            }

            function u(e, t) {
                const n = this.getClient(),
                    r = n && n.getOptions() || {},
                    i = r.instrumenter || "sentry",
                    o = e.instrumenter || "sentry";
                i !== o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`), e.sampled = !1);
                let c = new a.Transaction(e, this);
                return c = l(c, r, {
                    parentSampled: e.parentSampled,
                    transactionContext: e,
                    ...t
                }), c.sampled && c.initSpanRecorder(r._experiments && r._experiments.maxSpans), c
            }

            function d() {
                const e = r.getMainCarrier();
                e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = u), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = c))
            }
            t._addTracingExtensions = d, t.addExtensionMethods = function() {
                d(), s.isNodeEnv() && function() {
                    const t = r.getMainCarrier();
                    if (!t.__SENTRY__) return;
                    const n = {
                            mongodb: () => new(s.dynamicRequire(e, "./integrations/node/mongo").Mongo),
                            mongoose: () => new(s.dynamicRequire(e, "./integrations/node/mongo").Mongo)({
                                mongoose: !0
                            }),
                            mysql: () => new(s.dynamicRequire(e, "./integrations/node/mysql").Mysql),
                            pg: () => new(s.dynamicRequire(e, "./integrations/node/postgres").Postgres)
                        },
                        i = Object.keys(n).filter((e => !!s.loadModule(e))).map((e => {
                            try {
                                return n[e]()
                            } catch (e) {
                                return
                            }
                        })).filter((e => e));
                    i.length > 0 && (t.__SENTRY__.integrations = [...t.__SENTRY__.integrations || [], ...i])
                }(), i.registerErrorInstrumentation()
            }, t.startIdleTransaction = function(e, t, n, r, s, i, a) {
                const c = e.getClient(),
                    u = c && c.getOptions() || {};
                let d = new o.IdleTransaction(t, e, n, r, a, s);
                return d = l(d, u, {
                    parentSampled: t.parentSampled,
                    transactionContext: t,
                    ...i
                }), d.sampled && d.initSpanRecorder(u._experiments && u._experiments.maxSpans), d
            }
        },
        77524: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(26327),
                i = n(65985);
            class o extends s.SpanRecorder {
                constructor(e, t, n, r) {
                    super(r), this._pushActivity = e, this._popActivity = t, this.transactionSpanId = n
                }
                add(e) {
                    e.spanId !== this.transactionSpanId && (e.finish = t => {
                        e.endTimestamp = "number" === typeof t ? t : r.timestampWithMs(), this._popActivity(e.spanId)
                    }, void 0 === e.endTimestamp && this._pushActivity(e.spanId)), super.add(e)
                }
            }
            class a extends i.Transaction {
                __init() {
                    this.activities = {}
                }
                __init2() {
                    this._heartbeatCounter = 0
                }
                __init3() {
                    this._finished = !1
                }
                __init4() {
                    this._beforeFinishCallbacks = []
                }
                constructor(e, t, n = 1e3, s = 3e4, i = 5e3, o = !1) {
                    super(e, t), this._idleHub = t, this._idleTimeout = n, this._finalTimeout = s, this._heartbeatInterval = i, this._onScope = o, a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), o && (c(t), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), t.configureScope((e => e.setSpan(this)))), this._startIdleTimeout(), setTimeout((() => {
                        this._finished || (this.setStatus("deadline_exceeded"), this.finish())
                    }), this._finalTimeout)
                }
                finish(e = r.timestampWithMs()) {
                    if (this._finished = !0, this.activities = {}, this.spanRecorder) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                        for (const t of this._beforeFinishCallbacks) t(this, e);
                        this.spanRecorder.spans = this.spanRecorder.spans.filter((t => {
                            if (t.spanId === this.spanId) return !0;
                            t.endTimestamp || (t.endTimestamp = e, t.setStatus("cancelled"), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                            const n = t.startTimestamp < e;
                            return n || ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(t, void 0, 2)), n
                        })), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] flushing IdleTransaction")
                    } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] No active IdleTransaction");
                    return this._onScope && c(this._idleHub), super.finish(e)
                }
                registerBeforeFinishCallback(e) {
                    this._beforeFinishCallbacks.push(e)
                }
                initSpanRecorder(e) {
                    if (!this.spanRecorder) {
                        const t = e => {
                                this._finished || this._pushActivity(e)
                            },
                            n = e => {
                                this._finished || this._popActivity(e)
                            };
                        this.spanRecorder = new o(t, n, this.spanId, e), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("Starting heartbeat"), this._pingHeartbeat()
                    }
                    this.spanRecorder.add(this)
                }
                _cancelIdleTimeout() {
                    this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0)
                }
                _startIdleTimeout(e) {
                    this._cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                        this._finished || 0 !== Object.keys(this.activities).length || this.finish(e)
                    }), this._idleTimeout)
                }
                _pushActivity(e) {
                    this._cancelIdleTimeout(), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] pushActivity: ${e}`), this.activities[e] = !0, ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }
                _popActivity(e) {
                    if (this.activities[e] && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] popActivity ${e}`), delete this.activities[e], ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                        const e = r.timestampWithMs() + this._idleTimeout / 1e3;
                        this._startIdleTimeout(e)
                    }
                }
                _beat() {
                    if (this._finished) return;
                    const e = Object.keys(this.activities).join("");
                    e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this.finish()) : this._pingHeartbeat()
                }
                _pingHeartbeat() {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
                        this._beat()
                    }), this._heartbeatInterval)
                }
            }

            function c(e) {
                const t = e.getScope();
                t && t.getTransaction() && t.setSpan(void 0)
            }
            t.DEFAULT_FINAL_TIMEOUT = 3e4, t.DEFAULT_HEARTBEAT_INTERVAL = 5e3, t.DEFAULT_IDLE_TIMEOUT = 1e3, t.IdleTransaction = a, t.IdleTransactionSpanRecorder = o
        },
        23026: (e, t, n) => {
            const r = n(2225),
                s = (n(98275), n(70628)),
                i = n(40578),
                o = n(26327),
                a = (n(46880), n(65985)),
                c = n(77524),
                l = n(2053),
                u = n(43702);
            ("undefined" === typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && r.addExtensionMethods(), r.addExtensionMethods, r.startIdleTransaction, s.BROWSER_TRACING_INTEGRATION_ID, t.gE = s.BrowserTracing, i.defaultRequestInstrumentationOptions, i.instrumentOutgoingRequests, o.Span, o.spanStatusfromHttpCode, a.Transaction, c.IdleTransaction, l.getActiveTransaction, l.hasTracingEnabled, u.TRACEPARENT_REGEXP, u.extractTraceparentData, u.stripUrlQueryAndFragment
        },
        98275: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(46801),
                s = n(89355),
                i = n(15415),
                o = n(11227),
                a = n(78981),
                c = n(40405),
                l = n(25521),
                u = n(70628);
            n(69790), n(43702), t.Express = r.Express, t.Postgres = s.Postgres, t.Mysql = i.Mysql, t.Mongo = o.Mongo, t.Prisma = a.Prisma, t.GraphQL = c.GraphQL, t.Apollo = l.Apollo, t.BrowserTracing = u.BrowserTracing
        },
        25521: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                static __initStatic() {
                    this.id = "Apollo"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e = {
                    useNestjs: !1
                }) {
                    o.prototype.__init.call(this), this._useNest = !!e.useNestjs
                }
                setupOnce(e, t) {
                    if (i.shouldDisableAutoInstrumentation(t))("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
                    else if (this._useNest) {
                        const e = s.loadModule("@nestjs/graphql");
                        if (!e) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package."));
                        s.fill(e.GraphQLFactory.prototype, "mergeWithSchema", (function(e) {
                            return function(...n) {
                                return s.fill(this.resolversExplorerService, "explore", (function(e) {
                                    return function() {
                                        return a(s.arrayify(e.call(this)), t)
                                    }
                                })), e.call(this, ...n)
                            }
                        }))
                    } else {
                        const e = s.loadModule("apollo-server-core");
                        if (!e) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Apollo Integration was unable to require apollo-server-core package."));
                        s.fill(e.ApolloServerBase.prototype, "constructSchema", (function(e) {
                            return function() {
                                if (!this.config.resolvers) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this.config.schema ? (s.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), s.logger.warn()) : this.config.modules && s.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."), s.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")), e.call(this);
                                const n = s.arrayify(this.config.resolvers);
                                return this.config.resolvers = a(n, t), e.call(this)
                            }
                        }))
                    }
                }
            }

            function a(e, t) {
                return e.map((e => (Object.keys(e).forEach((n => {
                    Object.keys(e[n]).forEach((i => {
                        "function" === typeof e[n][i] && function(e, t, n, i) {
                            s.fill(e[t], n, (function(e) {
                                return function(...o) {
                                    const a = i().getScope(),
                                        c = r([a, "optionalAccess", e => e.getSpan, "call", e => e()]),
                                        l = r([c, "optionalAccess", e => e.startChild, "call", e => e({
                                            description: `${t}.${n}`,
                                            op: "graphql.resolve"
                                        })]),
                                        u = e.call(this, ...o);
                                    return s.isThenable(u) ? u.then((e => (r([l, "optionalAccess", e => e.finish, "call", e => e()]), e))) : (r([l, "optionalAccess", e => e.finish, "call", e => e()]), u)
                                }
                            }))
                        }(e, n, i, t)
                    }))
                })), e)))
            }
            o.__initStatic(), t.Apollo = o
        },
        46801: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                static __initStatic() {
                    this.id = "Express"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e = {}) {
                    o.prototype.__init.call(this), this._router = e.router || e.app, this._methods = (Array.isArray(e.methods) ? e.methods : []).concat("use")
                }
                setupOnce(e, t) {
                    this._router ? i.shouldDisableAutoInstrumentation(t) ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Express Integration is skipped because of instrumenter configuration.") : (function(e, t = []) {
                        t.forEach((t => function(e, t) {
                            const n = e[t];
                            return e[t] = function(...e) {
                                return n.call(this, ... function(e, t) {
                                    return e.map((e => "function" === typeof e ? a(e, t) : Array.isArray(e) ? e.map((e => "function" === typeof e ? a(e, t) : e)) : e))
                                }(e, t))
                            }, e
                        }(e, t)))
                    }(this._router, this._methods), function(e) {
                        const t = "settings" in e;
                        t && void 0 === e._router && e.lazyrouter && e.lazyrouter();
                        const n = t ? e._router : e;
                        if (!n) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.debug("Routing instrumentation is currently only supported in Express 4."));
                        const i = Object.getPrototypeOf(n),
                            o = i.process_params;
                        i.process_params = function(e, t, n, i, a) {
                            n._reconstructedRoute || (n._reconstructedRoute = "");
                            const {
                                layerRoutePath: c,
                                isRegex: l,
                                isArray: u,
                                numExtraSegments: d
                            } = function(e) {
                                const t = r([e, "access", e => e.route, "optionalAccess", e => e.path]),
                                    n = s.isRegExp(t),
                                    i = Array.isArray(t);
                                if (!t) return {
                                    isRegex: n,
                                    isArray: i,
                                    numExtraSegments: 0
                                };
                                const o = i ? Math.max(t.reduce(((e, t) => e + s.getNumberOfUrlSegments(t.toString())), 0) - s.getNumberOfUrlSegments(e.path || ""), 0) : 0,
                                    a = function(e, t) {
                                        return e ? t.map((e => e.toString())).join(",") : t && t.toString()
                                    }(i, t);
                                return {
                                    layerRoutePath: a,
                                    isRegex: n,
                                    isArray: i,
                                    numExtraSegments: o
                                }
                            }(e);
                            (c || l || u) && (n._hasParameters = !0);
                            const p = (c || e.path || "").split("/").filter((e => e.length > 0 && (l || u || !e.includes("*")))).join("/");
                            if (p && p.length > 0 && (n._reconstructedRoute += `/${p}${l?"/":""}`), s.getNumberOfUrlSegments(n.originalUrl || "") + d === s.getNumberOfUrlSegments(n._reconstructedRoute)) {
                                n._hasParameters || n._reconstructedRoute !== n.originalUrl && (n._reconstructedRoute = n.originalUrl);
                                const e = i.__sentry_transaction;
                                if (e && "custom" !== e.metadata.source) {
                                    const t = n._reconstructedRoute || "/";
                                    e.setName(...s.extractPathForTransaction(n, {
                                        path: !0,
                                        method: !0,
                                        customRoute: t
                                    }))
                                }
                            }
                            return o.call(this, e, t, n, i, a)
                        }
                    }(this._router)) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("ExpressIntegration is missing an Express instance")
                }
            }

            function a(e, t) {
                const n = e.length;
                switch (n) {
                    case 2:
                        return function(n, r) {
                            const s = r.__sentry_transaction;
                            if (s) {
                                const n = s.startChild({
                                    description: e.name,
                                    op: `middleware.express.${t}`
                                });
                                r.once("finish", (() => {
                                    n.finish()
                                }))
                            }
                            return e.call(this, n, r)
                        };
                    case 3:
                        return function(n, s, i) {
                            const o = s.__sentry_transaction,
                                a = r([o, "optionalAccess", e => e.startChild, "call", n => n({
                                    description: e.name,
                                    op: `middleware.express.${t}`
                                })]);
                            e.call(this, n, s, (function(...e) {
                                r([a, "optionalAccess", e => e.finish, "call", e => e()]), i.call(this, ...e)
                            }))
                        };
                    case 4:
                        return function(n, s, i, o) {
                            const a = i.__sentry_transaction,
                                c = r([a, "optionalAccess", e => e.startChild, "call", n => n({
                                    description: e.name,
                                    op: `middleware.express.${t}`
                                })]);
                            e.call(this, n, s, i, (function(...e) {
                                r([c, "optionalAccess", e => e.finish, "call", e => e()]), o.call(this, ...e)
                            }))
                        };
                    default:
                        throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)
                }
            }
            o.__initStatic(), t.Express = o
        },
        40405: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                constructor() {
                    o.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "GraphQL"
                }
                __init() {
                    this.name = o.id
                }
                setupOnce(e, t) {
                    if (i.shouldDisableAutoInstrumentation(t)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("GraphQL Integration is skipped because of instrumenter configuration."));
                    const n = s.loadModule("graphql/execution/execute.js");
                    n ? s.fill(n, "execute", (function(e) {
                        return function(...n) {
                            const i = t().getScope(),
                                o = r([i, "optionalAccess", e => e.getSpan, "call", e => e()]),
                                a = r([o, "optionalAccess", e => e.startChild, "call", e => e({
                                    description: "execute",
                                    op: "graphql.execute"
                                })]);
                            r([i, "optionalAccess", e => e.setSpan, "call", e => e(a)]);
                            const c = e.call(this, ...n);
                            return s.isThenable(c) ? c.then((e => (r([a, "optionalAccess", e => e.finish, "call", e => e()]), r([i, "optionalAccess", e => e.setSpan, "call", e => e(o)]), e))) : (r([a, "optionalAccess", e => e.finish, "call", e => e()]), r([i, "optionalAccess", e => e.setSpan, "call", e => e(o)]), c)
                        }
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("GraphQL Integration was unable to require graphql/execution package.")
                }
            }
            o.__initStatic(), t.GraphQL = o
        },
        11227: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801),
                o = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
                a = {
                    bulkWrite: ["operations"],
                    countDocuments: ["query"],
                    createIndex: ["fieldOrSpec"],
                    createIndexes: ["indexSpecs"],
                    deleteMany: ["filter"],
                    deleteOne: ["filter"],
                    distinct: ["key", "query"],
                    dropIndex: ["indexName"],
                    find: ["query"],
                    findOne: ["query"],
                    findOneAndDelete: ["filter"],
                    findOneAndReplace: ["filter", "replacement"],
                    findOneAndUpdate: ["filter", "update"],
                    indexExists: ["indexes"],
                    insertMany: ["docs"],
                    insertOne: ["doc"],
                    mapReduce: ["map", "reduce"],
                    rename: ["newName"],
                    replaceOne: ["filter", "doc"],
                    updateMany: ["filter", "update"],
                    updateOne: ["filter", "update"]
                };
            class c {
                static __initStatic() {
                    this.id = "Mongo"
                }
                __init() {
                    this.name = c.id
                }
                constructor(e = {}) {
                    c.prototype.__init.call(this), this._operations = Array.isArray(e.operations) ? e.operations : o, this._describeOperations = !("describeOperations" in e) || e.describeOperations, this._useMongoose = !!e.useMongoose
                }
                setupOnce(e, t) {
                    if (i.shouldDisableAutoInstrumentation(t)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Mongo Integration is skipped because of instrumenter configuration."));
                    const n = this._useMongoose ? "mongoose" : "mongodb",
                        r = s.loadModule(n);
                    r ? this._instrumentOperations(r.Collection, this._operations, t) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(`Mongo Integration was unable to require \`${n}\` package.`)
                }
                _instrumentOperations(e, t, n) {
                    t.forEach((t => this._patchOperation(e, t, n)))
                }
                _patchOperation(e, t, n) {
                    if (!(t in e.prototype)) return;
                    const i = this._getSpanContextFromOperationArguments.bind(this);
                    s.fill(e.prototype, t, (function(e) {
                        return function(...o) {
                            const a = o[o.length - 1],
                                c = n().getScope(),
                                l = r([c, "optionalAccess", e => e.getSpan, "call", e => e()]);
                            if ("function" !== typeof a || "mapReduce" === t && 2 === o.length) {
                                const n = r([l, "optionalAccess", e => e.startChild, "call", e => e(i(this, t, o))]),
                                    a = e.call(this, ...o);
                                if (s.isThenable(a)) return a.then((e => (r([n, "optionalAccess", e => e.finish, "call", e => e()]), e)));
                                if ((u = a) && "object" === typeof u && u.once && "function" === typeof u.once) {
                                    const e = a;
                                    try {
                                        e.once("close", (() => {
                                            r([n, "optionalAccess", e => e.finish, "call", e => e()])
                                        }))
                                    } catch (e) {
                                        r([n, "optionalAccess", e => e.finish, "call", e => e()])
                                    }
                                    return e
                                }
                                return r([n, "optionalAccess", e => e.finish, "call", e => e()]), a
                            }
                            var u;
                            const d = r([l, "optionalAccess", e => e.startChild, "call", e => e(i(this, t, o.slice(0, -1)))]);
                            return e.call(this, ...o.slice(0, -1), (function(e, t) {
                                r([d, "optionalAccess", e => e.finish, "call", e => e()]), a(e, t)
                            }))
                        }
                    }))
                }
                _getSpanContextFromOperationArguments(e, t, n) {
                    const r = {
                            collectionName: e.collectionName,
                            dbName: e.dbName,
                            namespace: e.namespace
                        },
                        s = {
                            op: "db",
                            description: t,
                            data: r
                        },
                        i = a[t],
                        o = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations;
                    if (!i || !o) return s;
                    try {
                        if ("mapReduce" === t) {
                            const [e, t] = n;
                            r[i[0]] = "string" === typeof e ? e : e.name || "<anonymous>", r[i[1]] = "string" === typeof t ? t : t.name || "<anonymous>"
                        } else
                            for (let e = 0; e < i.length; e++) r[i[e]] = JSON.stringify(n[e])
                    } catch (e) {}
                    return s
                }
            }
            c.__initStatic(), t.Mongo = c
        },
        15415: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                constructor() {
                    o.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "Mysql"
                }
                __init() {
                    this.name = o.id
                }
                setupOnce(e, t) {
                    if (i.shouldDisableAutoInstrumentation(t)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Mysql Integration is skipped because of instrumenter configuration."));
                    const n = s.loadModule("mysql/lib/Connection.js");
                    n ? s.fill(n, "createQuery", (function(e) {
                        return function(n, s, i) {
                            const o = t().getScope(),
                                a = r([o, "optionalAccess", e => e.getSpan, "call", e => e()]),
                                c = r([a, "optionalAccess", e => e.startChild, "call", e => e({
                                    description: "string" === typeof n ? n : n.sql,
                                    op: "db"
                                })]);
                            return "function" === typeof i ? e.call(this, n, s, (function(e, t, n) {
                                r([c, "optionalAccess", e => e.finish, "call", e => e()]), i(e, t, n)
                            })) : "function" === typeof s ? e.call(this, n, (function(e, t, n) {
                                r([c, "optionalAccess", e => e.finish, "call", e => e()]), s(e, t, n)
                            })) : e.call(this, n, s, i)
                        }
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Mysql Integration was unable to require `mysql` package.")
                }
            }
            o.__initStatic(), t.Mysql = o
        },
        89355: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                static __initStatic() {
                    this.id = "Postgres"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e = {}) {
                    o.prototype.__init.call(this), this._usePgNative = !!e.usePgNative
                }
                setupOnce(e, t) {
                    if (i.shouldDisableAutoInstrumentation(t)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Postgres Integration is skipped because of instrumenter configuration."));
                    const n = s.loadModule("pg");
                    if (!n) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Postgres Integration was unable to require `pg` package."));
                    if (this._usePgNative && !r([n, "access", e => e.native, "optionalAccess", e => e.Client])) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Postgres Integration was unable to access 'pg-native' bindings."));
                    const {
                        Client: o
                    } = this._usePgNative ? n.native : n;
                    s.fill(o.prototype, "query", (function(e) {
                        return function(n, i, o) {
                            const a = t().getScope(),
                                c = r([a, "optionalAccess", e => e.getSpan, "call", e => e()]),
                                l = r([c, "optionalAccess", e => e.startChild, "call", e => e({
                                    description: "string" === typeof n ? n : n.text,
                                    op: "db"
                                })]);
                            if ("function" === typeof o) return e.call(this, n, i, (function(e, t) {
                                r([l, "optionalAccess", e => e.finish, "call", e => e()]), o(e, t)
                            }));
                            if ("function" === typeof i) return e.call(this, n, (function(e, t) {
                                r([l, "optionalAccess", e => e.finish, "call", e => e()]), i(e, t)
                            }));
                            const u = "undefined" !== typeof i ? e.call(this, n, i) : e.call(this, n);
                            return s.isThenable(u) ? u.then((e => (r([l, "optionalAccess", e => e.finish, "call", e => e()]), e))) : (r([l, "optionalAccess", e => e.finish, "call", e => e()]), u)
                        }
                    }))
                }
            }
            o.__initStatic(), t.Postgres = o
        },
        78981: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(43702),
                i = n(52801);
            class o {
                static __initStatic() {
                    this.id = "Prisma"
                }
                __init() {
                    this.name = o.id
                }
                constructor(e = {}) {
                    var t;
                    o.prototype.__init.call(this), (t = e.client) && t.$use ? this._client = e.client : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(e.client)}`)
                }
                setupOnce(e, t) {
                    this._client ? i.shouldDisableAutoInstrumentation(t) ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Prisma Integration is skipped because of instrumenter configuration.") : this._client.$use(((e, n) => {
                        const i = t().getScope(),
                            o = r([i, "optionalAccess", e => e.getSpan, "call", e => e()]),
                            a = e.action,
                            c = e.model,
                            l = r([o, "optionalAccess", e => e.startChild, "call", e => e({
                                description: c ? `${c} ${a}` : a,
                                op: "db.sql.prisma"
                            })]),
                            u = n(e);
                        return s.isThenable(u) ? u.then((e => (r([l, "optionalAccess", e => e.finish, "call", e => e()]), e))) : (r([l, "optionalAccess", e => e.finish, "call", e => e()]), u)
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("PrismaIntegration is missing a Prisma Client Instance")
                }
            }
            o.__initStatic(), t.Prisma = o
        },
        52801: (e, t, n) => {
            var {
                _optionalChain: r
            } = n(59661);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.shouldDisableAutoInstrumentation = function(e) {
                const t = r([e, "call", e => e(), "access", e => e.getClient, "call", e => e(), "optionalAccess", e => e.getOptions, "call", e => e()]);
                return "sentry" !== (r([t, "optionalAccess", e => e.instrumenter]) || "sentry")
            }
        },
        26327: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);
            class s {
                __init() {
                    this.spans = []
                }
                constructor(e = 1e3) {
                    s.prototype.__init.call(this), this._maxlen = e
                }
                add(e) {
                    this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
                }
            }
            class i {
                __init2() {
                    this.traceId = r.uuid4()
                }
                __init3() {
                    this.spanId = r.uuid4().substring(16)
                }
                __init4() {
                    this.startTimestamp = r.timestampWithMs()
                }
                __init5() {
                    this.tags = {}
                }
                __init6() {
                    this.data = {}
                }
                __init7() {
                    this.instrumenter = "sentry"
                }
                constructor(e) {
                    if (i.prototype.__init2.call(this), i.prototype.__init3.call(this), i.prototype.__init4.call(this), i.prototype.__init5.call(this), i.prototype.__init6.call(this), i.prototype.__init7.call(this), !e) return this;
                    e.traceId && (this.traceId = e.traceId), e.spanId && (this.spanId = e.spanId), e.parentSpanId && (this.parentSpanId = e.parentSpanId), "sampled" in e && (this.sampled = e.sampled), e.op && (this.op = e.op), e.description && (this.description = e.description), e.data && (this.data = e.data), e.tags && (this.tags = e.tags), e.status && (this.status = e.status), e.startTimestamp && (this.startTimestamp = e.startTimestamp), e.endTimestamp && (this.endTimestamp = e.endTimestamp), e.instrumenter && (this.instrumenter = e.instrumenter)
                }
                startChild(e) {
                    const t = new i({ ...e,
                        parentSpanId: this.spanId,
                        sampled: this.sampled,
                        traceId: this.traceId
                    });
                    if (t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t), t.transaction = this.transaction, ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t.transaction) {
                        const n = `[Tracing] Starting '${e&&e.op||"< unknown op >"}' span on transaction '${t.transaction.name||"< unknown name >"}' (${t.transaction.spanId}).`;
                        t.transaction.metadata.spanMetadata[t.spanId] = {
                            logMessage: n
                        }, r.logger.log(n)
                    }
                    return t
                }
                setTag(e, t) {
                    return this.tags = { ...this.tags,
                        [e]: t
                    }, this
                }
                setData(e, t) {
                    return this.data = { ...this.data,
                        [e]: t
                    }, this
                }
                setStatus(e) {
                    return this.status = e, this
                }
                setHttpStatus(e) {
                    this.setTag("http.status_code", String(e));
                    const t = o(e);
                    return "unknown_error" !== t && this.setStatus(t), this
                }
                isSuccess() {
                    return "ok" === this.status
                }
                finish(e) {
                    if (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                        const {
                            logMessage: e
                        } = this.transaction.metadata.spanMetadata[this.spanId];
                        e && r.logger.log(e.replace("Starting", "Finishing"))
                    }
                    this.endTimestamp = "number" === typeof e ? e : r.timestampWithMs()
                }
                toTraceparent() {
                    let e = "";
                    return void 0 !== this.sampled && (e = this.sampled ? "-1" : "-0"), `${this.traceId}-${this.spanId}${e}`
                }
                toContext() {
                    return r.dropUndefinedKeys({
                        data: this.data,
                        description: this.description,
                        endTimestamp: this.endTimestamp,
                        op: this.op,
                        parentSpanId: this.parentSpanId,
                        sampled: this.sampled,
                        spanId: this.spanId,
                        startTimestamp: this.startTimestamp,
                        status: this.status,
                        tags: this.tags,
                        traceId: this.traceId
                    })
                }
                updateWithContext(e) {
                    return this.data = e.data || {}, this.description = e.description, this.endTimestamp = e.endTimestamp, this.op = e.op, this.parentSpanId = e.parentSpanId, this.sampled = e.sampled, this.spanId = e.spanId || this.spanId, this.startTimestamp = e.startTimestamp || this.startTimestamp, this.status = e.status, this.tags = e.tags || {}, this.traceId = e.traceId || this.traceId, this
                }
                getTraceContext() {
                    return r.dropUndefinedKeys({
                        data: Object.keys(this.data).length > 0 ? this.data : void 0,
                        description: this.description,
                        op: this.op,
                        parent_span_id: this.parentSpanId,
                        span_id: this.spanId,
                        status: this.status,
                        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                        trace_id: this.traceId
                    })
                }
                toJSON() {
                    return r.dropUndefinedKeys({
                        data: Object.keys(this.data).length > 0 ? this.data : void 0,
                        description: this.description,
                        op: this.op,
                        parent_span_id: this.parentSpanId,
                        span_id: this.spanId,
                        start_timestamp: this.startTimestamp,
                        status: this.status,
                        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                        timestamp: this.endTimestamp,
                        trace_id: this.traceId
                    })
                }
            }

            function o(e) {
                if (e < 400 && e >= 100) return "ok";
                if (e >= 400 && e < 500) switch (e) {
                    case 401:
                        return "unauthenticated";
                    case 403:
                        return "permission_denied";
                    case 404:
                        return "not_found";
                    case 409:
                        return "already_exists";
                    case 413:
                        return "failed_precondition";
                    case 429:
                        return "resource_exhausted";
                    default:
                        return "invalid_argument"
                }
                if (e >= 500 && e < 600) switch (e) {
                    case 501:
                        return "unimplemented";
                    case 503:
                        return "unavailable";
                    case 504:
                        return "deadline_exceeded";
                    default:
                        return "internal_error"
                }
                return "unknown_error"
            }
            t.Span = i, t.SpanRecorder = s, t.spanStatusfromHttpCode = o
        },
        46880: (e, t) => {
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SpanStatus = void 0, (n = t.SpanStatus || (t.SpanStatus = {})).Ok = "ok", n.DeadlineExceeded = "deadline_exceeded", n.Unauthenticated = "unauthenticated", n.PermissionDenied = "permission_denied", n.NotFound = "not_found", n.ResourceExhausted = "resource_exhausted", n.InvalidArgument = "invalid_argument", n.Unimplemented = "unimplemented", n.Unavailable = "unavailable", n.InternalError = "internal_error", n.UnknownError = "unknown_error", n.Cancelled = "cancelled", n.AlreadyExists = "already_exists", n.FailedPrecondition = "failed_precondition", n.Aborted = "aborted", n.OutOfRange = "out_of_range", n.DataLoss = "data_loss"
        },
        65985: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(69790),
                s = n(43702),
                i = n(26327);
            class o extends i.Span {
                __init() {
                    this._measurements = {}
                }
                __init2() {
                    this._contexts = {}
                }
                __init3() {
                    this._frozenDynamicSamplingContext = void 0
                }
                constructor(e, t) {
                    super(e), o.prototype.__init.call(this), o.prototype.__init2.call(this), o.prototype.__init3.call(this), this._hub = t || r.getCurrentHub(), this._name = e.name || "", this.metadata = {
                        source: "custom",
                        ...e.metadata,
                        spanMetadata: {}
                    }, this._trimEnd = e.trimEnd, this.transaction = this;
                    const n = this.metadata.dynamicSamplingContext;
                    n && (this._frozenDynamicSamplingContext = { ...n
                    })
                }
                get name() {
                    return this._name
                }
                set name(e) {
                    this.setName(e)
                }
                setName(e, t = "custom") {
                    this._name = e, this.metadata.source = t
                }
                initSpanRecorder(e = 1e3) {
                    this.spanRecorder || (this.spanRecorder = new i.SpanRecorder(e)), this.spanRecorder.add(this)
                }
                setContext(e, t) {
                    null === t ? delete this._contexts[e] : this._contexts[e] = t
                }
                setMeasurement(e, t, n = "") {
                    this._measurements[e] = {
                        value: t,
                        unit: n
                    }
                }
                setMetadata(e) {
                    this.metadata = { ...this.metadata,
                        ...e
                    }
                }
                finish(e) {
                    if (void 0 !== this.endTimestamp) return;
                    if (this.name || (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(e), !0 !== this.sampled) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                        const e = this._hub.getClient();
                        return void(e && e.recordDroppedEvent("sample_rate", "transaction"))
                    }
                    const t = this.spanRecorder ? this.spanRecorder.spans.filter((e => e !== this && e.endTimestamp)) : [];
                    this._trimEnd && t.length > 0 && (this.endTimestamp = t.reduce(((e, t) => e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e)).endTimestamp);
                    const n = this.metadata,
                        r = {
                            contexts: { ...this._contexts,
                                trace: this.getTraceContext()
                            },
                            spans: t,
                            start_timestamp: this.startTimestamp,
                            tags: this.tags,
                            timestamp: this.endTimestamp,
                            transaction: this.name,
                            type: "transaction",
                            sdkProcessingMetadata: { ...n,
                                dynamicSamplingContext: this.getDynamicSamplingContext()
                            },
                            ...n.source && {
                                transaction_info: {
                                    source: n.source
                                }
                            }
                        };
                    return Object.keys(this._measurements).length > 0 && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), r.measurements = this._measurements), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(r)
                }
                toContext() {
                    const e = super.toContext();
                    return s.dropUndefinedKeys({ ...e,
                        name: this.name,
                        trimEnd: this._trimEnd
                    })
                }
                updateWithContext(e) {
                    return super.updateWithContext(e), this.name = e.name || "", this._trimEnd = e.trimEnd, this
                }
                getDynamicSamplingContext() {
                    if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                    const e = this._hub || r.getCurrentHub(),
                        t = e && e.getClient();
                    if (!t) return {};
                    const {
                        environment: n,
                        release: i
                    } = t.getOptions() || {}, {
                        publicKey: o
                    } = t.getDsn() || {}, a = this.metadata.sampleRate, c = void 0 !== a ? a.toString() : void 0, l = e.getScope(), {
                        segment: u
                    } = l && l.getUser() || {}, d = this.metadata.source, p = d && "url" !== d ? this.name : void 0;
                    return s.dropUndefinedKeys({
                        environment: n || r.DEFAULT_ENVIRONMENT,
                        release: i,
                        transaction: p,
                        user_segment: u,
                        public_key: o,
                        trace_id: this.traceId,
                        sample_rate: c
                    })
                }
            }
            t.Transaction = o
        },
        2053: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(69790),
                s = n(43702);
            t.TRACEPARENT_REGEXP = s.TRACEPARENT_REGEXP, t.extractTraceparentData = s.extractTraceparentData, t.stripUrlQueryAndFragment = s.stripUrlQueryAndFragment, t.getActiveTransaction = function(e) {
                const t = (e || r.getCurrentHub()).getScope();
                return t && t.getTransaction()
            }, t.hasTracingEnabled = function(e) {
                return r.hasTracingEnabled(e)
            }, t.msToSec = function(e) {
                return e / 1e3
            }
        },
        47629: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);

            function s(e) {
                const t = e.protocol ? `${e.protocol}:` : "",
                    n = e.port ? `:${e.port}` : "";
                return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
            }
            t.getEnvelopeEndpointWithUrlEncodedAuth = function(e, t = {}) {
                const n = "string" === typeof t ? t : t.tunnel,
                    i = "string" !== typeof t && t._metadata ? t._metadata.sdk : void 0;
                return n || `${function(e){return`${s(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return r.urlEncode({sentry_key:e.publicKey,sentry_version:"7",...t&&{sentry_client:`${t.name}/${t.version}`}})}(e,i)}`
            }, t.getReportDialogEndpoint = function(e, t) {
                const n = r.makeDsn(e),
                    i = `${s(n)}embed/error-page/`;
                let o = `dsn=${r.dsnToString(n)}`;
                for (const e in t)
                    if ("dsn" !== e)
                        if ("user" === e) {
                            const e = t.user;
                            if (!e) continue;
                            e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`)
                        } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
                return `${i}?${o}`
            }
        },
        29097: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(47629),
                i = n(16677),
                o = n(14862),
                a = n(35725),
                c = n(91502),
                l = "Not capturing exception because it's already been captured.";
            class u {
                __init() {
                    this._integrations = {}
                }
                __init2() {
                    this._integrationsInitialized = !1
                }
                __init3() {
                    this._numProcessing = 0
                }
                __init4() {
                    this._outcomes = {}
                }
                constructor(e) {
                    if (u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), u.prototype.__init4.call(this), this._options = e, e.dsn) {
                        this._dsn = r.makeDsn(e.dsn);
                        const t = s.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, e);
                        this._transport = e.transport({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...e.transportOptions,
                            url: t
                        })
                    } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("No DSN provided, client will not do anything.")
                }
                captureException(e, t, n) {
                    if (r.checkOrSetAlreadyCaught(e)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l));
                    let s = t && t.event_id;
                    return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, n))).then((e => {
                        s = e
                    }))), s
                }
                captureMessage(e, t, n, s) {
                    let i = n && n.event_id;
                    const o = r.isPrimitive(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
                    return this._process(o.then((e => this._captureEvent(e, n, s))).then((e => {
                        i = e
                    }))), i
                }
                captureEvent(e, t, n) {
                    if (t && t.originalException && r.checkOrSetAlreadyCaught(t.originalException)) return void(("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l));
                    let s = t && t.event_id;
                    return this._process(this._captureEvent(e, t, n).then((e => {
                        s = e
                    }))), s
                }
                captureSession(e) {
                    this._isEnabled() ? "string" !== typeof e.release ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), a.updateSession(e, {
                        init: !1
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("SDK not enabled, will not capture session.")
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(e) {
                    const t = this._transport;
                    return t ? this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e)))) : r.resolvedSyncPromise(!0)
                }
                close(e) {
                    return this.flush(e).then((e => (this.getOptions().enabled = !1, e)))
                }
                setupIntegrations() {
                    this._isEnabled() && !this._integrationsInitialized && (this._integrations = o.setupIntegrations(this._options.integrations), this._integrationsInitialized = !0)
                }
                getIntegrationById(e) {
                    return this._integrations[e]
                }
                getIntegration(e) {
                    try {
                        return this._integrations[e.id] || null
                    } catch (t) {
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
                    }
                }
                addIntegration(e) {
                    o.setupIntegration(e, this._integrations)
                }
                sendEvent(e, t = {}) {
                    if (this._dsn) {
                        let n = i.createEventEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                        for (const e of t.attachments || []) n = r.addItemToEnvelope(n, r.createAttachmentEnvelopeItem(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                        this._sendEnvelope(n)
                    }
                }
                sendSession(e) {
                    if (this._dsn) {
                        const t = i.createSessionEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                        this._sendEnvelope(t)
                    }
                }
                recordDroppedEvent(e, t, n) {
                    if (this._options.sendClientReports) {
                        const n = `${e}:${t}`;
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
                    }
                }
                _updateSessionFromEvent(e, t) {
                    let n = !1,
                        r = !1;
                    const s = t.exception && t.exception.values;
                    if (s) {
                        r = !0;
                        for (const e of s) {
                            const t = e.mechanism;
                            if (t && !1 === t.handled) {
                                n = !0;
                                break
                            }
                        }
                    }
                    const i = "ok" === e.status;
                    (i && 0 === e.errors || i && n) && (a.updateSession(e, { ...n && {
                            status: "crashed"
                        },
                        errors: e.errors || Number(r || n)
                    }), this.captureSession(e))
                }
                _isClientDoneProcessing(e) {
                    return new r.SyncPromise((t => {
                        let n = 0;
                        const r = setInterval((() => {
                            0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                        }), 1)
                    }))
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }
                _prepareEvent(e, t, n) {
                    const r = this.getOptions(),
                        s = Object.keys(this._integrations);
                    return !t.integrations && s.length > 0 && (t.integrations = s), c.prepareEvent(r, e, t, n)
                }
                _captureEvent(e, t = {}, n) {
                    return this._processEvent(e, t, n).then((e => e.event_id), (e => {
                        if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const t = e;
                            "log" === t.logLevel ? r.logger.log(t.message) : r.logger.warn(t)
                        }
                    }))
                }
                _processEvent(e, t, n) {
                    const s = this.getOptions(),
                        {
                            sampleRate: i
                        } = s;
                    if (!this._isEnabled()) return r.rejectedSyncPromise(new r.SentryError("SDK not enabled, will not capture event.", "log"));
                    const o = p(e),
                        a = d(e),
                        c = e.type || "error",
                        l = `before send for type \`${c}\``;
                    if (a && "number" === typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), r.rejectedSyncPromise(new r.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                    const u = "replay_event" === c ? "replay" : c;
                    return this._prepareEvent(e, t, n).then((n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", u, e), new r.SentryError("An event processor returned `null`, will not send event.", "log");
                        if (t.data && !0 === t.data.__sentry__) return n;
                        const i = function(e, t, n) {
                            const {
                                beforeSend: r,
                                beforeSendTransaction: s
                            } = e;
                            return d(t) && r ? r(t, n) : p(t) && s ? s(t, n) : t
                        }(s, n, t);
                        return function(e, t) {
                            const n = `${t} must return \`null\` or a valid event.`;
                            if (r.isThenable(e)) return e.then((e => {
                                if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                                return e
                            }), (e => {
                                throw new r.SentryError(`${t} rejected with ${e}`)
                            }));
                            if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                            return e
                        }(i, l)
                    })).then((s => {
                        if (null === s) throw this.recordDroppedEvent("before_send", u, e), new r.SentryError(`${l} returned \`null\`, will not send event.`, "log");
                        const i = n && n.getSession();
                        !o && i && this._updateSessionFromEvent(i, s);
                        const a = s.transaction_info;
                        if (o && a && s.transaction !== e.transaction) {
                            const e = "custom";
                            s.transaction_info = { ...a,
                                source: e
                            }
                        }
                        return this.sendEvent(s, t), s
                    })).then(null, (e => {
                        if (e instanceof r.SentryError) throw e;
                        throw this.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), new r.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
                    }))
                }
                _process(e) {
                    this._numProcessing++, e.then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, e)))
                }
                _sendEnvelope(e) {
                    this._transport && this._dsn ? this._transport.send(e).then(null, (e => {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Error while sending event:", e)
                    })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Transport disabled")
                }
                _clearOutcomes() {
                    const e = this._outcomes;
                    return this._outcomes = {}, Object.keys(e).map((t => {
                        const [n, r] = t.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: e[t]
                        }
                    }))
                }
            }

            function d(e) {
                return void 0 === e.type
            }

            function p(e) {
                return "transaction" === e.type
            }
            t.BaseClient = u
        },
        13603: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_ENVIRONMENT = "production"
        },
        16677: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);
            t.createEventEnvelope = function(e, t, n, s) {
                const i = r.getSdkMetadataForEnvelopeHeader(n),
                    o = e.type && "replay_event" !== e.type ? e.type : "event";
                ! function(e, t) {
                    t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
                }(e, n && n.sdk);
                const a = r.createEventEnvelopeHeaders(e, i, s, t);
                delete e.sdkProcessingMetadata;
                const c = [{
                    type: o
                }, e];
                return r.createEnvelope(a, [c])
            }, t.createSessionEnvelope = function(e, t, n, s) {
                const i = r.getSdkMetadataForEnvelopeHeader(n),
                    o = {
                        sent_at: (new Date).toISOString(),
                        ...i && {
                            sdk: i
                        },
                        ...!!s && {
                            dsn: r.dsnToString(t)
                        }
                    },
                    a = "aggregates" in e ? [{
                        type: "sessions"
                    }, e] : [{
                        type: "session"
                    }, e];
                return r.createEnvelope(o, [a])
            }
        },
        48904: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(16311);
            t.addBreadcrumb = function(e) {
                r.getCurrentHub().addBreadcrumb(e)
            }, t.captureEvent = function(e, t) {
                return r.getCurrentHub().captureEvent(e, t)
            }, t.captureException = function(e, t) {
                return r.getCurrentHub().captureException(e, {
                    captureContext: t
                })
            }, t.captureMessage = function(e, t) {
                const n = "string" === typeof t ? t : void 0,
                    s = "string" !== typeof t ? {
                        captureContext: t
                    } : void 0;
                return r.getCurrentHub().captureMessage(e, n, s)
            }, t.configureScope = function(e) {
                r.getCurrentHub().configureScope(e)
            }, t.setContext = function(e, t) {
                r.getCurrentHub().setContext(e, t)
            }, t.setExtra = function(e, t) {
                r.getCurrentHub().setExtra(e, t)
            }, t.setExtras = function(e) {
                r.getCurrentHub().setExtras(e)
            }, t.setTag = function(e, t) {
                r.getCurrentHub().setTag(e, t)
            }, t.setTags = function(e) {
                r.getCurrentHub().setTags(e)
            }, t.setUser = function(e) {
                r.getCurrentHub().setUser(e)
            }, t.startTransaction = function(e, t) {
                return r.getCurrentHub().startTransaction({ ...e
                }, t)
            }, t.withScope = function(e) {
                r.getCurrentHub().withScope(e)
            }
        },
        16311: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(13603),
                i = n(23455),
                o = n(35725),
                a = 100;
            class c {
                __init() {
                    this._stack = [{}]
                }
                constructor(e, t = new i.Scope, n = 4) {
                    this._version = n, c.prototype.__init.call(this), this.getStackTop().scope = t, e && this.bindClient(e)
                }
                isOlderThan(e) {
                    return this._version < e
                }
                bindClient(e) {
                    this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
                }
                pushScope() {
                    const e = i.Scope.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(e) {
                    const t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(e, t) {
                    const n = this._lastEventId = t && t.event_id ? t.event_id : r.uuid4(),
                        s = new Error("Sentry syntheticException");
                    return this._withClient(((r, i) => {
                        r.captureException(e, {
                            originalException: e,
                            syntheticException: s,
                            ...t,
                            event_id: n
                        }, i)
                    })), n
                }
                captureMessage(e, t, n) {
                    const s = this._lastEventId = n && n.event_id ? n.event_id : r.uuid4(),
                        i = new Error(e);
                    return this._withClient(((r, o) => {
                        r.captureMessage(e, t, {
                            originalException: e,
                            syntheticException: i,
                            ...n,
                            event_id: s
                        }, o)
                    })), s
                }
                captureEvent(e, t) {
                    const n = t && t.event_id ? t.event_id : r.uuid4();
                    return e.type || (this._lastEventId = n), this._withClient(((r, s) => {
                        r.captureEvent(e, { ...t,
                            event_id: n
                        }, s)
                    })), n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(e, t) {
                    const {
                        scope: n,
                        client: s
                    } = this.getStackTop();
                    if (!n || !s) return;
                    const {
                        beforeBreadcrumb: i = null,
                        maxBreadcrumbs: o = a
                    } = s.getOptions && s.getOptions() || {};
                    if (o <= 0) return;
                    const c = {
                            timestamp: r.dateTimestampInSeconds(),
                            ...e
                        },
                        l = i ? r.consoleSandbox((() => i(c, t))) : c;
                    null !== l && n.addBreadcrumb(l, o)
                }
                setUser(e) {
                    const t = this.getScope();
                    t && t.setUser(e)
                }
                setTags(e) {
                    const t = this.getScope();
                    t && t.setTags(e)
                }
                setExtras(e) {
                    const t = this.getScope();
                    t && t.setExtras(e)
                }
                setTag(e, t) {
                    const n = this.getScope();
                    n && n.setTag(e, t)
                }
                setExtra(e, t) {
                    const n = this.getScope();
                    n && n.setExtra(e, t)
                }
                setContext(e, t) {
                    const n = this.getScope();
                    n && n.setContext(e, t)
                }
                configureScope(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop();
                    t && n && e(t)
                }
                run(e) {
                    const t = u(this);
                    try {
                        e(this)
                    } finally {
                        u(t)
                    }
                }
                getIntegration(e) {
                    const t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(e)
                    } catch (t) {
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
                    }
                }
                startTransaction(e, t) {
                    return this._callExtensionMethod("startTransaction", e, t)
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(e = !1) {
                    if (e) return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    const e = this.getStackTop(),
                        t = e && e.scope,
                        n = t && t.getSession();
                    n && o.closeSession(n), this._sendSessionUpdate(), t && t.setSession()
                }
                startSession(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop(), {
                        release: i,
                        environment: a = s.DEFAULT_ENVIRONMENT
                    } = n && n.getOptions() || {}, {
                        userAgent: c
                    } = r.GLOBAL_OBJ.navigator || {}, l = o.makeSession({
                        release: i,
                        environment: a,
                        ...t && {
                            user: t.getUser()
                        },
                        ...c && {
                            userAgent: c
                        },
                        ...e
                    });
                    if (t) {
                        const e = t.getSession && t.getSession();
                        e && "ok" === e.status && o.updateSession(e, {
                            status: "exited"
                        }), this.endSession(), t.setSession(l)
                    }
                    return l
                }
                shouldSendDefaultPii() {
                    const e = this.getClient(),
                        t = e && e.getOptions();
                    return Boolean(t && t.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    const {
                        scope: e,
                        client: t
                    } = this.getStackTop();
                    if (!e) return;
                    const n = e.getSession();
                    n && t && t.captureSession && t.captureSession(n)
                }
                _withClient(e) {
                    const {
                        scope: t,
                        client: n
                    } = this.getStackTop();
                    n && e(n, t)
                }
                _callExtensionMethod(e, ...t) {
                    const n = l().__SENTRY__;
                    if (n && n.extensions && "function" === typeof n.extensions[e]) return n.extensions[e].apply(this, t);
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Extension method ${e} couldn't be found, doing nothing.`)
                }
            }

            function l() {
                return r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, r.GLOBAL_OBJ
            }

            function u(e) {
                const t = l(),
                    n = p(t);
                return _(t, e), n
            }

            function d(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
            }

            function p(e) {
                return r.getGlobalSingleton("hub", (() => new c), e)
            }

            function _(e, t) {
                return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
            }
            t.API_VERSION = 4, t.Hub = c, t.getCurrentHub = function() {
                const e = l();
                return d(e) && !p(e).isOlderThan(4) || _(e, new c), r.isNodeEnv() ? function(e) {
                    try {
                        const t = l().__SENTRY__,
                            n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                        if (!n) return p(e);
                        if (!d(n) || p(n).isOlderThan(4)) {
                            const t = p(e).getStackTop();
                            _(n, new c(t.client, i.Scope.clone(t.scope)))
                        }
                        return p(n)
                    } catch (t) {
                        return p(e)
                    }
                }(e) : p(e)
            }, t.getHubFromCarrier = p, t.getMainCarrier = l, t.makeMain = u, t.setHubOnCarrier = _
        },
        69790: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(48904),
                s = n(16311),
                i = n(35725),
                o = n(35285),
                a = n(23455),
                c = n(47629),
                l = n(29097),
                u = n(42404),
                d = n(82431),
                p = n(16245),
                _ = n(14056),
                h = n(14862),
                f = n(26192),
                m = n(91502),
                g = n(35802),
                y = n(13603),
                E = n(99093),
                v = n(9497);
            t.addBreadcrumb = r.addBreadcrumb, t.captureEvent = r.captureEvent, t.captureException = r.captureException, t.captureMessage = r.captureMessage, t.configureScope = r.configureScope, t.setContext = r.setContext, t.setExtra = r.setExtra, t.setExtras = r.setExtras, t.setTag = r.setTag, t.setTags = r.setTags, t.setUser = r.setUser, t.startTransaction = r.startTransaction, t.withScope = r.withScope, t.Hub = s.Hub, t.getCurrentHub = s.getCurrentHub, t.getHubFromCarrier = s.getHubFromCarrier, t.getMainCarrier = s.getMainCarrier, t.makeMain = s.makeMain, t.setHubOnCarrier = s.setHubOnCarrier, t.closeSession = i.closeSession, t.makeSession = i.makeSession, t.updateSession = i.updateSession, t.SessionFlusher = o.SessionFlusher, t.Scope = a.Scope, t.addGlobalEventProcessor = a.addGlobalEventProcessor, t.getEnvelopeEndpointWithUrlEncodedAuth = c.getEnvelopeEndpointWithUrlEncodedAuth, t.getReportDialogEndpoint = c.getReportDialogEndpoint, t.BaseClient = l.BaseClient, t.initAndBind = u.initAndBind, t.createTransport = d.createTransport, t.makeOfflineTransport = p.makeOfflineTransport, t.SDK_VERSION = _.SDK_VERSION, t.getIntegrationsToSetup = h.getIntegrationsToSetup, t.Integrations = f, t.prepareEvent = m.prepareEvent, t.hasTracingEnabled = g.hasTracingEnabled, t.DEFAULT_ENVIRONMENT = y.DEFAULT_ENVIRONMENT, t.FunctionToString = E.FunctionToString, t.InboundFilters = v.InboundFilters
        },
        14862: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(16311),
                i = n(23455),
                o = [];

            function a(e, t) {
                t[e.name] = e, -1 === o.indexOf(e.name) && (e.setupOnce(i.addGlobalEventProcessor, s.getCurrentHub), o.push(e.name), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Integration installed: ${e.name}`))
            }
            t.getIntegrationsToSetup = function(e) {
                const t = e.defaultIntegrations || [],
                    n = e.integrations;
                let s;
                t.forEach((e => {
                    e.isDefaultInstance = !0
                })), s = Array.isArray(n) ? [...t, ...n] : "function" === typeof n ? r.arrayify(n(t)) : t;
                const i = function(e) {
                        const t = {};
                        return e.forEach((e => {
                            const {
                                name: n
                            } = e, r = t[n];
                            r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                        })), Object.values(t)
                    }(s),
                    o = i.findIndex((e => "Debug" === e.name));
                if (-1 !== o) {
                    const [e] = i.splice(o, 1);
                    i.push(e)
                }
                return i
            }, t.installedIntegrations = o, t.setupIntegration = a, t.setupIntegrations = function(e) {
                const t = {};
                return e.forEach((e => {
                    e && a(e, t)
                })), t
            }
        },
        99093: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);
            let s;
            class i {
                constructor() {
                    i.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = i.id
                }
                setupOnce() {
                    s = Function.prototype.toString, Function.prototype.toString = function(...e) {
                        const t = r.getOriginalFunction(this) || this;
                        return s.apply(t, e)
                    }
                }
            }
            i.__initStatic(), t.FunctionToString = i
        },
        9497: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
            class i {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = i.id
                }
                constructor(e = {}) {
                    this._options = e, i.prototype.__init.call(this)
                }
                setupOnce(e, t) {
                    const n = e => {
                        const n = t();
                        if (n) {
                            const t = n.getIntegration(i);
                            if (t) {
                                const r = n.getClient(),
                                    s = r ? r.getOptions() : {};
                                return a(e, o(t._options, s)) ? null : e
                            }
                        }
                        return e
                    };
                    n.id = this.name, e(n)
                }
            }

            function o(e = {}, t = {}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...s],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                }
            }

            function a(e, t) {
                return t.ignoreInternal && function(e) {
                    try {
                        return "SentryError" === e.exception.values[0].type
                    } catch (e) {}
                    return !1
                }(e) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${r.getEventDescription(e)}`), !0) : function(e, t) {
                    return !(!t || !t.length) && function(e) {
                        if (e.message) return [e.message];
                        if (e.exception) try {
                            const {
                                type: t = "",
                                value: n = ""
                            } = e.exception.values && e.exception.values[0] || {};
                            return [`${n}`, `${t}: ${n}`]
                        } catch (t) {
                            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract message for event ${r.getEventDescription(e)}`), []
                        }
                        return []
                    }(e).some((e => r.stringMatchesSomePattern(e, t)))
                }(e, t.ignoreErrors) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${r.getEventDescription(e)}`), !0) : function(e, t) {
                    if (!t || !t.length) return !1;
                    const n = c(e);
                    return !!n && r.stringMatchesSomePattern(n, t)
                }(e, t.denyUrls) ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`), !0) : ! function(e, t) {
                    if (!t || !t.length) return !0;
                    const n = c(e);
                    return !n || r.stringMatchesSomePattern(n, t)
                }(e, t.allowUrls) && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`), !0)
            }

            function c(e) {
                try {
                    let t;
                    try {
                        t = e.exception.values[0].stacktrace.frames
                    } catch (e) {}
                    return t ? function(e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            const n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(t) : null
                } catch (t) {
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract url for event ${r.getEventDescription(e)}`), null
                }
            }
            i.__initStatic(), t.InboundFilters = i, t._mergeOptions = o, t._shouldDropEvent = a
        },
        26192: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(99093),
                s = n(9497);
            t.FunctionToString = r.FunctionToString, t.InboundFilters = s.InboundFilters
        },
        23455: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(35725);
            class i {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                }
                static clone(e) {
                    const t = new i;
                    return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = { ...e._tags
                    }, t._extra = { ...e._extra
                    }, t._contexts = { ...e._contexts
                    }, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata
                    }), t
                }
                addScopeListener(e) {
                    this._scopeListeners.push(e)
                }
                addEventProcessor(e) {
                    return this._eventProcessors.push(e), this
                }
                setUser(e) {
                    return this._user = e || {}, this._session && s.updateSession(this._session, {
                        user: e
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(e) {
                    return this._requestSession = e, this
                }
                setTags(e) {
                    return this._tags = { ...this._tags,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setTag(e, t) {
                    return this._tags = { ...this._tags,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setExtras(e) {
                    return this._extra = { ...this._extra,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setExtra(e, t) {
                    return this._extra = { ...this._extra,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }
                setLevel(e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }
                setTransactionName(e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }
                setContext(e, t) {
                    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
                }
                setSpan(e) {
                    return this._span = e, this._notifyScopeListeners(), this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    const e = this.getSpan();
                    return e && e.transaction
                }
                setSession(e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(e) {
                    if (!e) return this;
                    if ("function" === typeof e) {
                        const t = e(this);
                        return t instanceof i ? t : this
                    }
                    return e instanceof i ? (this._tags = { ...this._tags,
                        ...e._tags
                    }, this._extra = { ...this._extra,
                        ...e._extra
                    }, this._contexts = { ...this._contexts,
                        ...e._contexts
                    }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : r.isPlainObject(e) && (this._tags = { ...this._tags,
                        ...e.tags
                    }, this._extra = { ...this._extra,
                        ...e.extra
                    }, this._contexts = { ...this._contexts,
                        ...e.contexts
                    }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
                }
                addBreadcrumb(e, t) {
                    const n = "number" === typeof t ? t : 100;
                    if (n <= 0) return this;
                    const s = {
                        timestamp: r.dateTimestampInSeconds(),
                        ...e
                    };
                    return this._breadcrumbs = [...this._breadcrumbs, s].slice(-n), this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(e) {
                    return this._attachments.push(e), this
                }
                getAttachments() {
                    return this._attachments
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                applyToEvent(e, t = {}) {
                    if (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra,
                            ...e.extra
                        }), this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags,
                            ...e.tags
                        }), this._user && Object.keys(this._user).length && (e.user = { ...this._user,
                            ...e.user
                        }), this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts,
                            ...e.contexts
                        }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                        e.contexts = {
                            trace: this._span.getTraceContext(),
                            ...e.contexts
                        };
                        const t = this._span.transaction && this._span.transaction.name;
                        t && (e.tags = {
                            transaction: t,
                            ...e.tags
                        })
                    }
                    return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                        ...this._sdkProcessingMetadata
                    }, this._notifyEventProcessors([...o(), ...this._eventProcessors], e, t)
                }
                setSDKProcessingMetadata(e) {
                    return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
                        ...e
                    }, this
                }
                _notifyEventProcessors(e, t, n, s = 0) {
                    return new r.SyncPromise(((i, o) => {
                        const a = e[s];
                        if (null === t || "function" !== typeof a) i(t);
                        else {
                            const c = a({ ...t
                            }, n);
                            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === c && r.logger.log(`Event processor "${a.id}" dropped event`), r.isThenable(c) ? c.then((t => this._notifyEventProcessors(e, t, n, s + 1).then(i))).then(null, o) : this._notifyEventProcessors(e, c, n, s + 1).then(i).then(null, o)
                        }
                    }))
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
                        e(this)
                    })), this._notifyingListeners = !1)
                }
                _applyFingerprint(e) {
                    e.fingerprint = e.fingerprint ? r.arrayify(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                }
            }

            function o() {
                return r.getGlobalSingleton("globalEventProcessors", (() => []))
            }
            t.Scope = i, t.addGlobalEventProcessor = function(e) {
                o().push(e)
            }
        },
        42404: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(16311);
            t.initAndBind = function(e, t) {
                !0 === t.debug && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.logger.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                const n = s.getCurrentHub(),
                    i = n.getScope();
                i && i.update(t.initialScope);
                const o = new e(t);
                n.bindClient(o)
            }
        },
        35725: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);

            function s(e, t = {}) {
                if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || r.timestampInSeconds(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : r.uuid4()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" === typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" === typeof t.duration) e.duration = t.duration;
                else {
                    const t = e.timestamp - e.started;
                    e.duration = t >= 0 ? t : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" === typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }
            t.closeSession = function(e, t) {
                let n = {};
                t ? n = {
                    status: t
                } : "ok" === e.status && (n = {
                    status: "exited"
                }), s(e, n)
            }, t.makeSession = function(e) {
                const t = r.timestampInSeconds(),
                    n = {
                        sid: r.uuid4(),
                        init: !0,
                        timestamp: t,
                        started: t,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => function(e) {
                            return r.dropUndefinedKeys({
                                sid: `${e.sid}`,
                                init: e.init,
                                started: new Date(1e3 * e.started).toISOString(),
                                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                status: e.status,
                                errors: e.errors,
                                did: "number" === typeof e.did || "string" === typeof e.did ? `${e.did}` : void 0,
                                duration: e.duration,
                                attrs: {
                                    release: e.release,
                                    environment: e.environment,
                                    ip_address: e.ipAddress,
                                    user_agent: e.userAgent
                                }
                            })
                        }(n)
                    };
                return e && s(n, e), n
            }, t.updateSession = s
        },
        35285: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(16311);
            class i {
                __init() {
                    this.flushTimeout = 60
                }
                __init2() {
                    this._pendingAggregates = {}
                }
                __init3() {
                    this._isEnabled = !0
                }
                constructor(e, t) {
                    i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), this._client = e, this._intervalId = setInterval((() => this.flush()), 1e3 * this.flushTimeout), this._sessionAttrs = t
                }
                flush() {
                    const e = this.getSessionAggregates();
                    0 !== e.aggregates.length && (this._pendingAggregates = {}, this._client.sendSession(e))
                }
                getSessionAggregates() {
                    const e = Object.keys(this._pendingAggregates).map((e => this._pendingAggregates[parseInt(e)])),
                        t = {
                            attrs: this._sessionAttrs,
                            aggregates: e
                        };
                    return r.dropUndefinedKeys(t)
                }
                close() {
                    clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
                }
                incrementSessionStatusCount() {
                    if (!this._isEnabled) return;
                    const e = s.getCurrentHub().getScope(),
                        t = e && e.getRequestSession();
                    t && t.status && (this._incrementSessionStatusCount(t.status, new Date), e && e.setRequestSession(void 0))
                }
                _incrementSessionStatusCount(e, t) {
                    const n = new Date(t).setSeconds(0, 0);
                    this._pendingAggregates[n] = this._pendingAggregates[n] || {};
                    const r = this._pendingAggregates[n];
                    switch (r.started || (r.started = new Date(n).toISOString()), e) {
                        case "errored":
                            return r.errored = (r.errored || 0) + 1, r.errored;
                        case "ok":
                            return r.exited = (r.exited || 0) + 1, r.exited;
                        default:
                            return r.crashed = (r.crashed || 0) + 1, r.crashed
                    }
                }
            }
            t.SessionFlusher = i
        },
        82431: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702);

            function s(e, t) {
                if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
            }
            t.DEFAULT_TRANSPORT_BUFFER_SIZE = 30, t.createTransport = function(e, t, n = r.makePromiseBuffer(e.bufferSize || 30)) {
                let i = {};
                return {
                    send: function(o) {
                        const a = [];
                        if (r.forEachEnvelopeItem(o, ((t, n) => {
                                const o = r.envelopeItemTypeToDataCategory(n);
                                if (r.isRateLimited(i, o)) {
                                    const r = s(t, n);
                                    e.recordDroppedEvent("ratelimit_backoff", o, r)
                                } else a.push(t)
                            })), 0 === a.length) return r.resolvedSyncPromise();
                        const c = r.createEnvelope(o[0], a),
                            l = t => {
                                r.forEachEnvelopeItem(c, ((n, i) => {
                                    const o = s(n, i);
                                    e.recordDroppedEvent(t, r.envelopeItemTypeToDataCategory(i), o)
                                }))
                            };
                        return n.add((() => t({
                            body: r.serializeEnvelope(c, e.textEncoder)
                        }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), i = r.updateRateLimits(i, e), e)), (e => {
                            throw l("network_error"), e
                        })))).then((e => e), (e => {
                            if (e instanceof r.SentryError) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), l("queue_overflow"), r.resolvedSyncPromise();
                            throw e
                        }))
                    },
                    flush: e => n.drain(e)
                }
            }
        },
        16245: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = 5e3;

            function i(e, t) {
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info(`[Offline]: ${e}`, t)
            }
            t.MIN_DELAY = 100, t.START_DELAY = s, t.makeOfflineTransport = function(e) {
                return t => {
                    const n = e(t),
                        o = t.createStore ? t.createStore(t) : void 0;
                    let a, c = s;

                    function l(e) {
                        o && (a && clearTimeout(a), a = setTimeout((async () => {
                            a = void 0;
                            const e = await o.pop();
                            e && (i("Attempting to send previously queued event"), d(e).catch((e => {
                                i("Failed to retry sending", e)
                            })))
                        }), e), "number" !== typeof a && a.unref && a.unref())
                    }

                    function u() {
                        a || (l(c), c = Math.min(2 * c, 36e5))
                    }
                    async function d(e) {
                        try {
                            const t = await n.send(e);
                            let i = 100;
                            if (t)
                                if (t.headers && t.headers["retry-after"]) i = r.parseRetryAfterHeader(t.headers["retry-after"]);
                                else if ((t.statusCode || 0) >= 400) return t;
                            return l(i), c = s, t
                        } catch (n) {
                            if (o && await
                                function(e, n, s) {
                                    return !r.envelopeContainsItemType(e, ["replay_event", "replay_recording", "client_report"]) && (!t.shouldStore || t.shouldStore(e, n, s))
                                }(e, n, c)) return await o.insert(e), u(), i("Error sending. Event queued", n), {};
                            throw n
                        }
                    }
                    return t.flushAtStartup && u(), {
                        send: d,
                        flush: e => n.flush(e)
                    }
                }
            }
        },
        35802: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(16311);
            t.hasTracingEnabled = function(e) {
                if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const t = r.getCurrentHub().getClient(),
                    n = e || t && t.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        91502: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(43702),
                s = n(13603),
                i = n(23455);

            function o(e, t) {
                const n = r.GLOBAL_OBJ._sentryDebugIds;
                if (!n) return;
                const s = Object.keys(n).reduce(((e, r) => {
                        const s = t(r);
                        for (const t of s)
                            if (t.abs_path) {
                                e[t.abs_path] = n[r];
                                break
                            }
                        return e
                    }), {}),
                    i = new Set;
                try {
                    e.exception.values.forEach((e => {
                        e.stacktrace.frames.forEach((e => {
                            e.abs_path && i.add(e.abs_path)
                        }))
                    }))
                } catch (e) {}
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                const o = e.debug_meta.images;
                i.forEach((e => {
                    s[e] && o.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: s[e]
                    })
                }))
            }
            t.applyDebugMetadata = o, t.prepareEvent = function(e, t, n, a) {
                const {
                    normalizeDepth: c = 3,
                    normalizeMaxBreadth: l = 1e3
                } = e, u = { ...t,
                    event_id: t.event_id || n.event_id || r.uuid4(),
                    timestamp: t.timestamp || r.dateTimestampInSeconds()
                }, d = n.integrations || e.integrations.map((e => e.name));
                ! function(e, t) {
                    const {
                        environment: n,
                        release: i,
                        dist: o,
                        maxValueLength: a = 250
                    } = t;
                    "environment" in e || (e.environment = "environment" in t ? n : s.DEFAULT_ENVIRONMENT), void 0 === e.release && void 0 !== i && (e.release = i), void 0 === e.dist && void 0 !== o && (e.dist = o), e.message && (e.message = r.truncate(e.message, a));
                    const c = e.exception && e.exception.values && e.exception.values[0];
                    c && c.value && (c.value = r.truncate(c.value, a));
                    const l = e.request;
                    l && l.url && (l.url = r.truncate(l.url, a))
                }(u, e),
                function(e, t) {
                    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
                }(u, d), o(u, e.stackParser);
                let p = a;
                n.captureContext && (p = i.Scope.clone(p).update(n.captureContext));
                let _ = r.resolvedSyncPromise(u);
                if (p) {
                    if (p.getAttachments) {
                        const e = [...n.attachments || [], ...p.getAttachments()];
                        e.length && (n.attachments = e)
                    }
                    _ = p.applyToEvent(u, n)
                }
                return _.then((e => "number" === typeof c && c > 0 ? function(e, t, n) {
                    if (!e) return null;
                    const s = { ...e,
                        ...e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map((e => ({ ...e,
                                ...e.data && {
                                    data: r.normalize(e.data, t, n)
                                }
                            })))
                        },
                        ...e.user && {
                            user: r.normalize(e.user, t, n)
                        },
                        ...e.contexts && {
                            contexts: r.normalize(e.contexts, t, n)
                        },
                        ...e.extra && {
                            extra: r.normalize(e.extra, t, n)
                        }
                    };
                    return e.contexts && e.contexts.trace && s.contexts && (s.contexts.trace = e.contexts.trace, e.contexts.trace.data && (s.contexts.trace.data = r.normalize(e.contexts.trace.data, t, n))), e.spans && (s.spans = e.spans.map((e => (e.data && (e.data = r.normalize(e.data, t, n)), e)))), s
                }(e, c, l) : e))
            }
        },
        14056: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SDK_VERSION = "7.41.0"
        },
        60968: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733),
                s = n(89325),
                i = "sentry-",
                o = /^sentry-/;

            function a(e) {
                return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, [t, n]) => (e[t] = n, e)), {})
            }
            t.BAGGAGE_HEADER_NAME = "baggage", t.MAX_BAGGAGE_STRING_LENGTH = 8192, t.SENTRY_BAGGAGE_KEY_PREFIX = i, t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = o, t.baggageHeaderToDynamicSamplingContext = function(e) {
                if (!r.isString(e) && !Array.isArray(e)) return;
                let t = {};
                if (Array.isArray(e)) t = e.reduce(((e, t) => ({ ...e,
                    ...a(t)
                })), {});
                else {
                    if (!e) return;
                    t = a(e)
                }
                const n = Object.entries(t).reduce(((e, [t, n]) => (t.match(o) && (e[t.slice(7)] = n), e)), {});
                return Object.keys(n).length > 0 ? n : void 0
            }, t.dynamicSamplingContextToSentryBaggageHeader = function(e) {
                return function(e) {
                    if (0 !== Object.keys(e).length) return Object.entries(e).reduce(((e, [t, n], r) => {
                        const i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                            o = 0 === r ? i : `${e},${i}`;
                        return o.length > 8192 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : o
                    }), "")
                }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`${i}${t}`] = n), e)), {}))
            }
        },
        20975: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733),
                s = n(48225).getGlobalObject();

            function i(e, t) {
                const n = e,
                    s = [];
                let i, o, a, c, l;
                if (!n || !n.tagName) return "";
                s.push(n.tagName.toLowerCase());
                const u = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
                if (u && u.length) u.forEach((e => {
                    s.push(`[${e[0]}="${e[1]}"]`)
                }));
                else if (n.id && s.push(`#${n.id}`), i = n.className, i && r.isString(i))
                    for (o = i.split(/\s+/), l = 0; l < o.length; l++) s.push(`.${o[l]}`);
                const d = ["aria-label", "type", "name", "title", "alt"];
                for (l = 0; l < d.length; l++) a = d[l], c = n.getAttribute(a), c && s.push(`[${a}="${c}"]`);
                return s.join("")
            }
            t.getDomElement = function(e) {
                return s.document && s.document.querySelector ? s.document.querySelector(e) : null
            }, t.getLocationHref = function() {
                try {
                    return s.document.location.href
                } catch (e) {
                    return ""
                }
            }, t.htmlTreeAsString = function(e, t = {}) {
                try {
                    let n = e;
                    const r = 5,
                        s = [];
                    let o = 0,
                        a = 0;
                    const c = " > ",
                        l = c.length;
                    let u;
                    const d = Array.isArray(t) ? t : t.keyAttrs,
                        p = !Array.isArray(t) && t.maxStringLength || 80;
                    for (; n && o++ < r && (u = i(n, d), !("html" === u || o > 1 && a + s.length * l + u.length >= p));) s.push(u), a += u.length, n = n.parentNode;
                    return s.reverse().join(c)
                } catch (e) {
                    return "<unknown>"
                }
            }
        },
        38614: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(88656);
            t._asyncNullishCoalesce = async function(e, t) {
                return r._nullishCoalesce(e, t)
            }
        },
        4645: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._asyncOptionalChain = async function(e) {
                let t, n = e[0],
                    r = 1;
                for (; r < e.length;) {
                    const s = e[r],
                        i = e[r + 1];
                    if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                    "access" === s || "optionalAccess" === s ? (t = n, n = await i(n)) : "call" !== s && "optionalCall" !== s || (n = await i(((...e) => n.call(t, ...e))), t = void 0)
                }
                return n
            }
        },
        27416: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(4645);
            t._asyncOptionalChainDelete = async function(e) {
                const t = await r._asyncOptionalChain(e);
                return null == t || t
            }
        },
        98557: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._createNamedExportFrom = function(e, n, r) {
                t[n] = e[r]
            }
        },
        64087: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._createStarExport = function(e) {
                Object.keys(e).filter((e => "default" !== e && "__esModule" !== e && !(e in t))).forEach((n => t[n] = e[n]))
            }
        },
        45553: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopDefault = function(e) {
                return e.__esModule ? e.default : e
            }
        },
        8838: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopNamespace = function(e) {
                return e.__esModule ? e : { ...e,
                    default: e
                }
            }
        },
        814: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopNamespaceDefaultOnly = function(e) {
                return {
                    __proto__: null,
                    default: e
                }
            }
        },
        30067: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopRequireDefault = function(e) {
                return e.__esModule ? e : {
                    default: e
                }
            }
        },
        77263: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopRequireWildcard = function(e) {
                return e.__esModule ? e : { ...e,
                    default: e
                }
            }
        },
        88656: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._nullishCoalesce = function(e, t) {
                return null != e ? e : t()
            }
        },
        61489: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._optionalChain = function(e) {
                let t, n = e[0],
                    r = 1;
                for (; r < e.length;) {
                    const s = e[r],
                        i = e[r + 1];
                    if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                    "access" === s || "optionalAccess" === s ? (t = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...e) => n.call(t, ...e))), t = void 0)
                }
                return n
            }
        },
        14921: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(61489);
            t._optionalChainDelete = function(e) {
                const t = r._optionalChain(e);
                return null == t || t
            }
        },
        59661: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(38614),
                s = n(4645),
                i = n(27416),
                o = n(98557),
                a = n(64087),
                c = n(45553),
                l = n(8838),
                u = n(814),
                d = n(30067),
                p = n(77263),
                _ = n(88656),
                h = n(61489),
                f = n(14921);
            t._asyncNullishCoalesce = r._asyncNullishCoalesce, t._asyncOptionalChain = s._asyncOptionalChain, t._asyncOptionalChainDelete = i._asyncOptionalChainDelete, t._createNamedExportFrom = o._createNamedExportFrom, t._createStarExport = a._createStarExport, t._interopDefault = c._interopDefault, t._interopNamespace = l._interopNamespace, t._interopNamespaceDefaultOnly = u._interopNamespaceDefaultOnly, t._interopRequireDefault = d._interopRequireDefault, t._interopRequireWildcard = p._interopRequireWildcard, t._nullishCoalesce = _._nullishCoalesce, t._optionalChain = h._optionalChain, t._optionalChainDelete = f._optionalChainDelete
        },
        40319: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68130),
                s = n(33115);
            t.createClientReportEnvelope = function(e, t, n) {
                const i = [{
                    type: "client_report"
                }, {
                    timestamp: n || s.dateTimestampInSeconds(),
                    discarded_events: e
                }];
                return r.createEnvelope(t ? {
                    dsn: t
                } : {}, [i])
            }
        },
        60321: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(93876),
                s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function i(e) {
                const t = s.exec(e);
                if (!t) throw new r.SentryError(`Invalid Sentry Dsn: ${e}`);
                const [n, i, a = "", c, l = "", u] = t.slice(1);
                let d = "",
                    p = u;
                const _ = p.split("/");
                if (_.length > 1 && (d = _.slice(0, -1).join("/"), p = _.pop()), p) {
                    const e = p.match(/^\d+/);
                    e && (p = e[0])
                }
                return o({
                    host: c,
                    pass: a,
                    path: d,
                    projectId: p,
                    port: l,
                    protocol: n,
                    publicKey: i
                })
            }

            function o(e) {
                return {
                    protocol: e.protocol,
                    publicKey: e.publicKey || "",
                    pass: e.pass || "",
                    host: e.host,
                    port: e.port || "",
                    path: e.path || "",
                    projectId: e.projectId
                }
            }
            t.dsnFromString = i, t.dsnToString = function(e, t = !1) {
                const {
                    host: n,
                    path: r,
                    pass: s,
                    port: i,
                    projectId: o,
                    protocol: a,
                    publicKey: c
                } = e;
                return `${a}://${c}${t&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r?`${r}/`:r}${o}`
            }, t.makeDsn = function(e) {
                const t = "string" === typeof e ? i(e) : o(e);
                return function(e) {
                    if ("undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return;
                    const {
                        port: t,
                        projectId: n,
                        protocol: s
                    } = e;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((t => {
                            if (!e[t]) throw new r.SentryError(`Invalid Sentry Dsn: ${t} missing`)
                        })), !n.match(/^\d+$/)) throw new r.SentryError(`Invalid Sentry Dsn: Invalid projectId ${n}`);
                    if (! function(e) {
                            return "http" === e || "https" === e
                        }(s)) throw new r.SentryError(`Invalid Sentry Dsn: Invalid protocol ${s}`);
                    if (t && isNaN(parseInt(t, 10))) throw new r.SentryError(`Invalid Sentry Dsn: Invalid port ${t}`)
                }(t), t
            }
        },
        17526: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSDKSource = function() {
                return "npm"
            }, t.isBrowserBundle = function() {
                return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
        },
        68130: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(60321),
                s = n(56375),
                i = n(88451);

            function o(e, t) {
                const n = e[1];
                for (const e of n)
                    if (t(e, e[0].type)) return !0;
                return !1
            }

            function a(e, t) {
                return (t || new TextEncoder).encode(e)
            }
            const c = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay"
            };
            t.addItemToEnvelope = function(e, t) {
                const [n, r] = e;
                return [n, [...r, t]]
            }, t.createAttachmentEnvelopeItem = function(e, t) {
                const n = "string" === typeof e.data ? a(e.data, t) : e.data;
                return [i.dropUndefinedKeys({
                    type: "attachment",
                    length: n.length,
                    filename: e.filename,
                    content_type: e.contentType,
                    attachment_type: e.attachmentType
                }), n]
            }, t.createEnvelope = function(e, t = []) {
                return [e, t]
            }, t.createEventEnvelopeHeaders = function(e, t, n, s) {
                const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString(),
                    ...t && {
                        sdk: t
                    },
                    ...!!n && {
                        dsn: r.dsnToString(s)
                    },
                    ..."transaction" === e.type && o && {
                        trace: i.dropUndefinedKeys({ ...o
                        })
                    }
                }
            }, t.envelopeContainsItemType = function(e, t) {
                return o(e, ((e, n) => t.includes(n)))
            }, t.envelopeItemTypeToDataCategory = function(e) {
                return c[e]
            }, t.forEachEnvelopeItem = o, t.getSdkMetadataForEnvelopeHeader = function(e) {
                if (!e || !e.sdk) return;
                const {
                    name: t,
                    version: n
                } = e.sdk;
                return {
                    name: t,
                    version: n
                }
            }, t.parseEnvelope = function(e, t, n) {
                let r = "string" === typeof e ? t.encode(e) : e;

                function s(e) {
                    const t = r.subarray(0, e);
                    return r = r.subarray(e + 1), t
                }

                function i() {
                    let e = r.indexOf(10);
                    return e < 0 && (e = r.length), JSON.parse(n.decode(s(e)))
                }
                const o = i(),
                    a = [];
                for (; r.length;) {
                    const e = i(),
                        t = "number" === typeof e.length ? e.length : void 0;
                    a.push([e, t ? s(t) : i()])
                }
                return [o, a]
            }, t.serializeEnvelope = function(e, t) {
                const [n, r] = e;
                let i = JSON.stringify(n);

                function o(e) {
                    "string" === typeof i ? i = "string" === typeof e ? i + e : [a(i, t), e] : i.push("string" === typeof e ? a(e, t) : e)
                }
                for (const e of r) {
                    const [t, n] = e;
                    if (o(`\n${JSON.stringify(t)}\n`), "string" === typeof n || n instanceof Uint8Array) o(n);
                    else {
                        let e;
                        try {
                            e = JSON.stringify(n)
                        } catch (t) {
                            e = JSON.stringify(s.normalize(n))
                        }
                        o(e)
                    }
                }
                return "string" === typeof i ? i : function(e) {
                    const t = e.reduce(((e, t) => e + t.length), 0),
                        n = new Uint8Array(t);
                    let r = 0;
                    for (const t of e) n.set(t, r), r += t.length;
                    return n
                }(i)
            }
        },
        93876: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            class n extends Error {
                constructor(e, t = "warn") {
                    super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
                }
            }
            t.SentryError = n
        },
        43702: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20975),
                s = n(60321),
                i = n(93876),
                o = n(48225),
                a = n(85637),
                c = n(22733),
                l = n(89325),
                u = n(70848),
                d = n(91882),
                p = n(23966),
                _ = n(56375),
                h = n(88451),
                f = n(90256),
                m = n(25470),
                g = n(22304),
                y = n(31371),
                E = n(41995),
                v = n(44899),
                S = n(93989),
                b = n(59069),
                T = n(33115),
                w = n(78359),
                k = n(17526),
                x = n(68130),
                R = n(40319),
                O = n(14801),
                D = n(60968),
                N = n(50045);
            t.getDomElement = r.getDomElement, t.getLocationHref = r.getLocationHref, t.htmlTreeAsString = r.htmlTreeAsString, t.dsnFromString = s.dsnFromString, t.dsnToString = s.dsnToString, t.makeDsn = s.makeDsn, t.SentryError = i.SentryError, t.GLOBAL_OBJ = o.GLOBAL_OBJ, t.getGlobalObject = o.getGlobalObject, t.getGlobalSingleton = o.getGlobalSingleton, t.addInstrumentationHandler = a.addInstrumentationHandler, t.isDOMError = c.isDOMError, t.isDOMException = c.isDOMException, t.isElement = c.isElement, t.isError = c.isError, t.isErrorEvent = c.isErrorEvent, t.isEvent = c.isEvent, t.isInstanceOf = c.isInstanceOf, t.isNaN = c.isNaN, t.isPlainObject = c.isPlainObject, t.isPrimitive = c.isPrimitive, t.isRegExp = c.isRegExp, t.isString = c.isString, t.isSyntheticEvent = c.isSyntheticEvent, t.isThenable = c.isThenable, t.CONSOLE_LEVELS = l.CONSOLE_LEVELS, t.consoleSandbox = l.consoleSandbox, Object.defineProperty(t, "logger", {
                enumerable: !0,
                get: () => l.logger
            }), t.memoBuilder = u.memoBuilder, t.addContextToFrame = d.addContextToFrame, t.addExceptionMechanism = d.addExceptionMechanism, t.addExceptionTypeValue = d.addExceptionTypeValue, t.arrayify = d.arrayify, t.checkOrSetAlreadyCaught = d.checkOrSetAlreadyCaught, t.getEventDescription = d.getEventDescription, t.parseSemver = d.parseSemver, t.uuid4 = d.uuid4, t.dynamicRequire = p.dynamicRequire, t.isNodeEnv = p.isNodeEnv, t.loadModule = p.loadModule, t.normalize = _.normalize, t.normalizeToSize = _.normalizeToSize, t.walk = _.walk, t.addNonEnumerableProperty = h.addNonEnumerableProperty, t.convertToPlainObject = h.convertToPlainObject, t.dropUndefinedKeys = h.dropUndefinedKeys, t.extractExceptionKeysForMessage = h.extractExceptionKeysForMessage, t.fill = h.fill, t.getOriginalFunction = h.getOriginalFunction, t.markFunctionWrapped = h.markFunctionWrapped, t.objectify = h.objectify, t.urlEncode = h.urlEncode, t.basename = f.basename, t.dirname = f.dirname, t.isAbsolute = f.isAbsolute, t.join = f.join, t.normalizePath = f.normalizePath, t.relative = f.relative, t.resolve = f.resolve, t.makePromiseBuffer = m.makePromiseBuffer, t.addRequestDataToEvent = g.addRequestDataToEvent, t.addRequestDataToTransaction = g.addRequestDataToTransaction, t.extractPathForTransaction = g.extractPathForTransaction, t.extractRequestData = g.extractRequestData, t.severityFromString = y.severityFromString, t.severityLevelFromString = y.severityLevelFromString, t.validSeverityLevels = y.validSeverityLevels, t.createStackParser = E.createStackParser, t.getFunctionName = E.getFunctionName, t.nodeStackLineParser = E.nodeStackLineParser, t.stackParserFromStackParserOptions = E.stackParserFromStackParserOptions, t.stripSentryFramesAndReverse = E.stripSentryFramesAndReverse, t.escapeStringForRegex = v.escapeStringForRegex, t.isMatchingPattern = v.isMatchingPattern, t.safeJoin = v.safeJoin, t.snipLine = v.snipLine, t.stringMatchesSomePattern = v.stringMatchesSomePattern, t.truncate = v.truncate, t.isNativeFetch = S.isNativeFetch, t.supportsDOMError = S.supportsDOMError, t.supportsDOMException = S.supportsDOMException, t.supportsErrorEvent = S.supportsErrorEvent, t.supportsFetch = S.supportsFetch, t.supportsHistory = S.supportsHistory, t.supportsNativeFetch = S.supportsNativeFetch, t.supportsReferrerPolicy = S.supportsReferrerPolicy, t.supportsReportingObserver = S.supportsReportingObserver, t.SyncPromise = b.SyncPromise, t.rejectedSyncPromise = b.rejectedSyncPromise, t.resolvedSyncPromise = b.resolvedSyncPromise, Object.defineProperty(t, "_browserPerformanceTimeOriginMode", {
                enumerable: !0,
                get: () => T._browserPerformanceTimeOriginMode
            }), t.browserPerformanceTimeOrigin = T.browserPerformanceTimeOrigin, t.dateTimestampInSeconds = T.dateTimestampInSeconds, t.timestampInSeconds = T.timestampInSeconds, t.timestampWithMs = T.timestampWithMs, t.usingPerformanceAPI = T.usingPerformanceAPI, t.TRACEPARENT_REGEXP = w.TRACEPARENT_REGEXP, t.extractTraceparentData = w.extractTraceparentData, t.getSDKSource = k.getSDKSource, t.isBrowserBundle = k.isBrowserBundle, t.addItemToEnvelope = x.addItemToEnvelope, t.createAttachmentEnvelopeItem = x.createAttachmentEnvelopeItem, t.createEnvelope = x.createEnvelope, t.createEventEnvelopeHeaders = x.createEventEnvelopeHeaders, t.envelopeContainsItemType = x.envelopeContainsItemType, t.envelopeItemTypeToDataCategory = x.envelopeItemTypeToDataCategory, t.forEachEnvelopeItem = x.forEachEnvelopeItem, t.getSdkMetadataForEnvelopeHeader = x.getSdkMetadataForEnvelopeHeader, t.parseEnvelope = x.parseEnvelope, t.serializeEnvelope = x.serializeEnvelope, t.createClientReportEnvelope = R.createClientReportEnvelope, t.DEFAULT_RETRY_AFTER = O.DEFAULT_RETRY_AFTER, t.disabledUntil = O.disabledUntil, t.isRateLimited = O.isRateLimited, t.parseRetryAfterHeader = O.parseRetryAfterHeader, t.updateRateLimits = O.updateRateLimits, t.BAGGAGE_HEADER_NAME = D.BAGGAGE_HEADER_NAME, t.MAX_BAGGAGE_STRING_LENGTH = D.MAX_BAGGAGE_STRING_LENGTH, t.SENTRY_BAGGAGE_KEY_PREFIX = D.SENTRY_BAGGAGE_KEY_PREFIX, t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = D.SENTRY_BAGGAGE_KEY_PREFIX_REGEX, t.baggageHeaderToDynamicSamplingContext = D.baggageHeaderToDynamicSamplingContext, t.dynamicSamplingContextToSentryBaggageHeader = D.dynamicSamplingContextToSentryBaggageHeader, t.getNumberOfUrlSegments = N.getNumberOfUrlSegments, t.parseUrl = N.parseUrl, t.stripUrlQueryAndFragment = N.stripUrlQueryAndFragment
        },
        85637: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733),
                s = n(89325),
                i = n(88451),
                o = n(41995),
                a = n(93989),
                c = n(48225).getGlobalObject(),
                l = {},
                u = {};

            function d(e, t) {
                if (e && l[e])
                    for (const n of l[e] || []) try {
                        n(t)
                    } catch (t) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${o.getFunctionName(n)}\nError:`, t)
                    }
            }

            function p(e = []) {
                return "Request" in c && r.isInstanceOf(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
            }

            function _(e = []) {
                return "string" === typeof e[0] ? e[0] : "Request" in c && r.isInstanceOf(e[0], Request) ? e[0].url : String(e[0])
            }
            let h;
            const f = 1e3;
            let m, g;

            function y(e, t = !1) {
                return n => {
                    if (!n || g === n) return;
                    if (function(e) {
                            if ("keypress" !== e.type) return !1;
                            try {
                                const t = e.target;
                                if (!t || !t.tagName) return !0;
                                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1
                            } catch (e) {}
                            return !0
                        }(n)) return;
                    const r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === m || function(e, t) {
                        if (!e) return !0;
                        if (e.type !== t.type) return !0;
                        try {
                            if (e.target !== t.target) return !0
                        } catch (e) {}
                        return !1
                    }(g, n)) && (e({
                        event: n,
                        name: r,
                        global: t
                    }), g = n), clearTimeout(m), m = c.setTimeout((() => {
                        m = void 0
                    }), f)
                }
            }
            let E = null,
                v = null;
            t.addInstrumentationHandler = function(e, t) {
                l[e] = l[e] || [], l[e].push(t),
                    function(e) {
                        if (!u[e]) switch (u[e] = !0, e) {
                            case "console":
                                "console" in c && s.CONSOLE_LEVELS.forEach((function(e) {
                                    e in c.console && i.fill(c.console, e, (function(t) {
                                        return function(...n) {
                                            d("console", {
                                                args: n,
                                                level: e
                                            }), t && t.apply(c.console, n)
                                        }
                                    }))
                                }));
                                break;
                            case "dom":
                                ! function() {
                                    if (!("document" in c)) return;
                                    const e = d.bind(null, "dom"),
                                        t = y(e, !0);
                                    c.document.addEventListener("click", t, !1), c.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
                                        const n = c[t] && c[t].prototype;
                                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (i.fill(n, "addEventListener", (function(t) {
                                            return function(n, r, s) {
                                                if ("click" === n || "keypress" == n) try {
                                                    const r = this,
                                                        i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                                                        o = i[n] = i[n] || {
                                                            refCount: 0
                                                        };
                                                    if (!o.handler) {
                                                        const r = y(e);
                                                        o.handler = r, t.call(this, n, r, s)
                                                    }
                                                    o.refCount++
                                                } catch (e) {}
                                                return t.call(this, n, r, s)
                                            }
                                        })), i.fill(n, "removeEventListener", (function(e) {
                                            return function(t, n, r) {
                                                if ("click" === t || "keypress" == t) try {
                                                    const n = this,
                                                        s = n.__sentry_instrumentation_handlers__ || {},
                                                        i = s[t];
                                                    i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete s[t]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
                                                } catch (e) {}
                                                return e.call(this, t, n, r)
                                            }
                                        })))
                                    }))
                                }();
                                break;
                            case "xhr":
                                ! function() {
                                    if (!("XMLHttpRequest" in c)) return;
                                    const e = XMLHttpRequest.prototype;
                                    i.fill(e, "open", (function(e) {
                                        return function(...t) {
                                            const n = this,
                                                s = t[1],
                                                o = n.__sentry_xhr__ = {
                                                    method: r.isString(t[0]) ? t[0].toUpperCase() : t[0],
                                                    url: t[1]
                                                };
                                            r.isString(s) && "POST" === o.method && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                                            const a = function() {
                                                if (4 === n.readyState) {
                                                    try {
                                                        o.status_code = n.status
                                                    } catch (e) {}
                                                    d("xhr", {
                                                        args: t,
                                                        endTimestamp: Date.now(),
                                                        startTimestamp: Date.now(),
                                                        xhr: n
                                                    })
                                                }
                                            };
                                            return "onreadystatechange" in n && "function" === typeof n.onreadystatechange ? i.fill(n, "onreadystatechange", (function(e) {
                                                return function(...t) {
                                                    return a(), e.apply(n, t)
                                                }
                                            })) : n.addEventListener("readystatechange", a), e.apply(n, t)
                                        }
                                    })), i.fill(e, "send", (function(e) {
                                        return function(...t) {
                                            return this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]), d("xhr", {
                                                args: t,
                                                startTimestamp: Date.now(),
                                                xhr: this
                                            }), e.apply(this, t)
                                        }
                                    }))
                                }();
                                break;
                            case "fetch":
                                a.supportsNativeFetch() && i.fill(c, "fetch", (function(e) {
                                    return function(...t) {
                                        const n = {
                                            args: t,
                                            fetchData: {
                                                method: p(t),
                                                url: _(t)
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return d("fetch", { ...n
                                        }), e.apply(c, t).then((e => (d("fetch", { ...n,
                                            endTimestamp: Date.now(),
                                            response: e
                                        }), e)), (e => {
                                            throw d("fetch", { ...n,
                                                endTimestamp: Date.now(),
                                                error: e
                                            }), e
                                        }))
                                    }
                                }));
                                break;
                            case "history":
                                ! function() {
                                    if (!a.supportsHistory()) return;
                                    const e = c.onpopstate;

                                    function t(e) {
                                        return function(...t) {
                                            const n = t.length > 2 ? t[2] : void 0;
                                            if (n) {
                                                const e = h,
                                                    t = String(n);
                                                h = t, d("history", {
                                                    from: e,
                                                    to: t
                                                })
                                            }
                                            return e.apply(this, t)
                                        }
                                    }
                                    c.onpopstate = function(...t) {
                                        const n = c.location.href,
                                            r = h;
                                        if (h = n, d("history", {
                                                from: r,
                                                to: n
                                            }), e) try {
                                            return e.apply(this, t)
                                        } catch (e) {}
                                    }, i.fill(c.history, "pushState", t), i.fill(c.history, "replaceState", t)
                                }();
                                break;
                            case "error":
                                E = c.onerror, c.onerror = function(e, t, n, r, s) {
                                    return d("error", {
                                        column: r,
                                        error: s,
                                        line: n,
                                        msg: e,
                                        url: t
                                    }), !!E && E.apply(this, arguments)
                                };
                                break;
                            case "unhandledrejection":
                                v = c.onunhandledrejection, c.onunhandledrejection = function(e) {
                                    return d("unhandledrejection", e), !v || v.apply(this, arguments)
                                };
                                break;
                            default:
                                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("unknown instrumentation type:", e)
                        }
                    }(e)
            }
        },
        22733: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = Object.prototype.toString;

            function r(e, t) {
                return n.call(e) === `[object ${t}]`
            }

            function s(e) {
                return r(e, "Object")
            }

            function i(e, t) {
                try {
                    return e instanceof t
                } catch (e) {
                    return !1
                }
            }
            t.isDOMError = function(e) {
                return r(e, "DOMError")
            }, t.isDOMException = function(e) {
                return r(e, "DOMException")
            }, t.isElement = function(e) {
                return "undefined" !== typeof Element && i(e, Element)
            }, t.isError = function(e) {
                switch (n.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return i(e, Error)
                }
            }, t.isErrorEvent = function(e) {
                return r(e, "ErrorEvent")
            }, t.isEvent = function(e) {
                return "undefined" !== typeof Event && i(e, Event)
            }, t.isInstanceOf = i, t.isNaN = function(e) {
                return "number" === typeof e && e !== e
            }, t.isPlainObject = s, t.isPrimitive = function(e) {
                return null === e || "object" !== typeof e && "function" !== typeof e
            }, t.isRegExp = function(e) {
                return r(e, "RegExp")
            }, t.isString = function(e) {
                return r(e, "String")
            }, t.isSyntheticEvent = function(e) {
                return s(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
            }, t.isThenable = function(e) {
                return Boolean(e && e.then && "function" === typeof e.then)
            }
        },
        89325: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(48225),
                s = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function i(e) {
                if (!("console" in r.GLOBAL_OBJ)) return e();
                const t = r.GLOBAL_OBJ.console,
                    n = {};
                s.forEach((e => {
                    const r = t[e] && t[e].__sentry_original__;
                    e in t && r && (n[e] = t[e], t[e] = r)
                }));
                try {
                    return e()
                } finally {
                    Object.keys(n).forEach((e => {
                        t[e] = n[e]
                    }))
                }
            }

            function o() {
                let e = !1;
                const t = {
                    enable: () => {
                        e = !0
                    },
                    disable: () => {
                        e = !1
                    }
                };
                return "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? s.forEach((n => {
                    t[n] = (...t) => {
                        e && i((() => {
                            r.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t)
                        }))
                    }
                })) : s.forEach((e => {
                    t[e] = () => {}
                })), t
            }
            t.logger = void 0, "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? t.logger = r.getGlobalSingleton("logger", o) : t.logger = o(), t.CONSOLE_LEVELS = s, t.consoleSandbox = i
        },
        70848: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.memoBuilder = function() {
                const e = "function" === typeof WeakSet,
                    t = e ? new WeakSet : [];
                return [function(n) {
                    if (e) return !!t.has(n) || (t.add(n), !1);
                    for (let e = 0; e < t.length; e++)
                        if (t[e] === n) return !0;
                    return t.push(n), !1
                }, function(n) {
                    if (e) t.delete(n);
                    else
                        for (let e = 0; e < t.length; e++)
                            if (t[e] === n) {
                                t.splice(e, 1);
                                break
                            }
                }]
            }
        },
        91882: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(88451),
                s = n(44899),
                i = n(48225);

            function o(e) {
                return e.exception && e.exception.values ? e.exception.values[0] : void 0
            }
            const a = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
            t.addContextToFrame = function(e, t, n = 5) {
                if (void 0 === t.lineno) return;
                const r = e.length,
                    i = Math.max(Math.min(r, t.lineno - 1), 0);
                t.pre_context = e.slice(Math.max(0, i - n), i).map((e => s.snipLine(e, 0))), t.context_line = s.snipLine(e[Math.min(r - 1, i)], t.colno || 0), t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map((e => s.snipLine(e, 0)))
            }, t.addExceptionMechanism = function(e, t) {
                const n = o(e);
                if (!n) return;
                const r = n.mechanism;
                if (n.mechanism = {
                        type: "generic",
                        handled: !0,
                        ...r,
                        ...t
                    }, t && "data" in t) {
                    const e = { ...r && r.data,
                        ...t.data
                    };
                    n.mechanism.data = e
                }
            }, t.addExceptionTypeValue = function(e, t, n) {
                const r = e.exception = e.exception || {},
                    s = r.values = r.values || [],
                    i = s[0] = s[0] || {};
                i.value || (i.value = t || ""), i.type || (i.type = n || "Error")
            }, t.arrayify = function(e) {
                return Array.isArray(e) ? e : [e]
            }, t.checkOrSetAlreadyCaught = function(e) {
                if (e && e.__sentry_captured__) return !0;
                try {
                    r.addNonEnumerableProperty(e, "__sentry_captured__", !0)
                } catch (e) {}
                return !1
            }, t.getEventDescription = function(e) {
                const {
                    message: t,
                    event_id: n
                } = e;
                if (t) return t;
                const r = o(e);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }, t.parseSemver = function(e) {
                const t = e.match(a) || [],
                    n = parseInt(t[1], 10),
                    r = parseInt(t[2], 10),
                    s = parseInt(t[3], 10);
                return {
                    buildmetadata: t[5],
                    major: isNaN(n) ? void 0 : n,
                    minor: isNaN(r) ? void 0 : r,
                    patch: isNaN(s) ? void 0 : s,
                    prerelease: t[4]
                }
            }, t.uuid4 = function() {
                const e = i.GLOBAL_OBJ,
                    t = e.crypto || e.msCrypto;
                if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
            }
        },
        23966: (e, t, n) => {
            e = n.nmd(e);
            var r = n(34155);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(17526);

            function i(e, t) {
                return e.require(t)
            }
            t.dynamicRequire = i, t.isNodeEnv = function() {
                return !s.isBrowserBundle() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof r ? r : 0)
            }, t.loadModule = function(t) {
                let n;
                try {
                    n = i(e, t)
                } catch (e) {}
                try {
                    const {
                        cwd: r
                    } = i(e, "process");
                    n = i(e, `${r()}/node_modules/${t}`)
                } catch (e) {}
                return n
            }
        },
        56375: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733),
                s = n(70848),
                i = n(88451),
                o = n(41995);

            function a(e, t = 1 / 0, n = 1 / 0) {
                try {
                    return c("", e, t, n)
                } catch (e) {
                    return {
                        ERROR: `**non-serializable** (${e})`
                    }
                }
            }

            function c(e, t, a = 1 / 0, l = 1 / 0, u = s.memoBuilder()) {
                const [d, p] = u;
                if (null === t || ["number", "boolean", "string"].includes(typeof t) && !r.isNaN(t)) return t;
                const _ = function(e, t) {
                    try {
                        return "domain" === e && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" !== typeof n.g && t === n.g ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : r.isSyntheticEvent(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" === typeof t ? `[Function: ${o.getFunctionName(t)}]` : "symbol" === typeof t ? `[${String(t)}]` : "bigint" === typeof t ? `[BigInt: ${String(t)}]` : `[object ${function(e){const t=Object.getPrototypeOf(e);return t?t.constructor.name:"null prototype"}(t)}]`
                    } catch (e) {
                        return `**non-serializable** (${e})`
                    }
                }(e, t);
                if (!_.startsWith("[object ")) return _;
                if (t.__sentry_skip_normalization__) return t;
                if (0 === a) return _.replace("object ", "");
                if (d(t)) return "[Circular ~]";
                const h = t;
                if (h && "function" === typeof h.toJSON) try {
                    return c("", h.toJSON(), a - 1, l, u)
                } catch (e) {}
                const f = Array.isArray(t) ? [] : {};
                let m = 0;
                const g = i.convertToPlainObject(t);
                for (const e in g) {
                    if (!Object.prototype.hasOwnProperty.call(g, e)) continue;
                    if (m >= l) {
                        f[e] = "[MaxProperties ~]";
                        break
                    }
                    const t = g[e];
                    f[e] = c(e, t, a - 1, l, u), m++
                }
                return p(t), f
            }
            t.normalize = a, t.normalizeToSize = function e(t, n = 3, r = 102400) {
                const s = a(t, n);
                return i = s,
                    function(e) {
                        return ~-encodeURI(e).split(/%..|./).length
                    }(JSON.stringify(i)) > r ? e(t, n - 1, r) : s;
                var i
            }, t.walk = c
        },
        88451: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20975),
                s = n(22733),
                i = n(44899);

            function o(e, t, n) {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function a(e, t) {
                const n = t.prototype || {};
                e.prototype = t.prototype = n, o(e, "__sentry_original__", t)
            }

            function c(e) {
                if (s.isError(e)) return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...u(e)
                };
                if (s.isEvent(e)) {
                    const t = {
                        type: e.type,
                        target: l(e.target),
                        currentTarget: l(e.currentTarget),
                        ...u(e)
                    };
                    return "undefined" !== typeof CustomEvent && s.isInstanceOf(e, CustomEvent) && (t.detail = e.detail), t
                }
                return e
            }

            function l(e) {
                try {
                    return s.isElement(e) ? r.htmlTreeAsString(e) : Object.prototype.toString.call(e)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function u(e) {
                if ("object" === typeof e && null !== e) {
                    const t = {};
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }
                return {}
            }

            function d(e, t) {
                if (s.isPlainObject(e)) {
                    const n = t.get(e);
                    if (void 0 !== n) return n;
                    const r = {};
                    t.set(e, r);
                    for (const n of Object.keys(e)) "undefined" !== typeof e[n] && (r[n] = d(e[n], t));
                    return r
                }
                if (Array.isArray(e)) {
                    const n = t.get(e);
                    if (void 0 !== n) return n;
                    const r = [];
                    return t.set(e, r), e.forEach((e => {
                        r.push(d(e, t))
                    })), r
                }
                return e
            }
            t.addNonEnumerableProperty = o, t.convertToPlainObject = c, t.dropUndefinedKeys = function(e) {
                return d(e, new Map)
            }, t.extractExceptionKeysForMessage = function(e, t = 40) {
                const n = Object.keys(c(e));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= t) return i.truncate(n[0], t);
                for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : i.truncate(r, t)
                }
                return ""
            }, t.fill = function(e, t, n) {
                if (!(t in e)) return;
                const r = e[t],
                    s = n(r);
                if ("function" === typeof s) try {
                    a(s, r)
                } catch (e) {}
                e[t] = s
            }, t.getOriginalFunction = function(e) {
                return e.__sentry_original__
            }, t.markFunctionWrapped = a, t.objectify = function(e) {
                let t;
                switch (!0) {
                    case void 0 === e || null === e:
                        t = new String(e);
                        break;
                    case "symbol" === typeof e || "bigint" === typeof e:
                        t = Object(e);
                        break;
                    case s.isPrimitive(e):
                        t = new e.constructor(e);
                        break;
                    default:
                        t = e
                }
                return t
            }, t.urlEncode = function(e) {
                return Object.keys(e).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
            }
        },
        90256: (e, t) => {
            function n(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    const r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
                }
                if (t)
                    for (; n--; n) e.unshift("..");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

            function s(e) {
                const t = r.exec(e);
                return t ? t.slice(1) : []
            }

            function i(...e) {
                let t = "",
                    r = !1;
                for (let n = e.length - 1; n >= -1 && !r; n--) {
                    const s = n >= 0 ? e[n] : "/";
                    s && (t = `${s}/${t}`, r = "/" === s.charAt(0))
                }
                return t = n(t.split("/").filter((e => !!e)), !r).join("/"), (r ? "/" : "") + t || "."
            }

            function o(e) {
                let t = 0;
                for (; t < e.length && "" === e[t]; t++);
                let n = e.length - 1;
                for (; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1)
            }

            function a(e) {
                const t = c(e),
                    r = "/" === e.slice(-1);
                let s = n(e.split("/").filter((e => !!e)), !t).join("/");
                return s || t || (s = "."), s && r && (s += "/"), (t ? "/" : "") + s
            }

            function c(e) {
                return "/" === e.charAt(0)
            }
            t.basename = function(e, t) {
                let n = s(e)[2];
                return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n
            }, t.dirname = function(e) {
                const t = s(e),
                    n = t[0];
                let r = t[1];
                return n || r ? (r && (r = r.slice(0, r.length - 1)), n + r) : "."
            }, t.isAbsolute = c, t.join = function(...e) {
                return a(e.join("/"))
            }, t.normalizePath = a, t.relative = function(e, t) {
                e = i(e).slice(1), t = i(t).slice(1);
                const n = o(e.split("/")),
                    r = o(t.split("/")),
                    s = Math.min(n.length, r.length);
                let a = s;
                for (let e = 0; e < s; e++)
                    if (n[e] !== r[e]) {
                        a = e;
                        break
                    }
                let c = [];
                for (let e = a; e < n.length; e++) c.push("..");
                return c = c.concat(r.slice(a)), c.join("/")
            }, t.resolve = i
        },
        25470: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(93876),
                s = n(59069);
            t.makePromiseBuffer = function(e) {
                const t = [];

                function n(e) {
                    return t.splice(t.indexOf(e), 1)[0]
                }
                return {
                    $: t,
                    add: function(i) {
                        if (!(void 0 === e || t.length < e)) return s.rejectedSyncPromise(new r.SentryError("Not adding Promise because buffer limit was reached."));
                        const o = i();
                        return -1 === t.indexOf(o) && t.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {})))), o
                    },
                    drain: function(e) {
                        return new s.SyncPromise(((n, r) => {
                            let i = t.length;
                            if (!i) return n(!0);
                            const o = setTimeout((() => {
                                e && e > 0 && n(!1)
                            }), e);
                            t.forEach((e => {
                                s.resolvedSyncPromise(e).then((() => {
                                    --i || (clearTimeout(o), n(!0))
                                }), r)
                            }))
                        }))
                    }
                }
            }
        },
        14801: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function n(e, t = Date.now()) {
                const n = parseInt(`${e}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                const r = Date.parse(`${e}`);
                return isNaN(r) ? 6e4 : r - t
            }

            function r(e, t) {
                return e[t] || e.all || 0
            }
            t.DEFAULT_RETRY_AFTER = 6e4, t.disabledUntil = r, t.isRateLimited = function(e, t, n = Date.now()) {
                return r(e, t) > n
            }, t.parseRetryAfterHeader = n, t.updateRateLimits = function(e, {
                statusCode: t,
                headers: r
            }, s = Date.now()) {
                const i = { ...e
                    },
                    o = r && r["x-sentry-rate-limits"],
                    a = r && r["retry-after"];
                if (o)
                    for (const e of o.trim().split(",")) {
                        const [t, n] = e.split(":", 2), r = parseInt(t, 10), o = 1e3 * (isNaN(r) ? 60 : r);
                        if (n)
                            for (const e of n.split(";")) i[e] = s + o;
                        else i.all = s + o
                    } else a ? i.all = s + n(a, s) : 429 === t && (i.all = s + 6e4);
                return i
            }
        },
        22304: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733),
                s = n(56375),
                i = n(50045),
                o = {
                    ip: !1,
                    request: !0,
                    transaction: !0,
                    user: !0
                },
                a = ["cookies", "data", "headers", "method", "query_string", "url"],
                c = ["id", "username", "email"];

            function l(e, t = {}) {
                const n = e.method && e.method.toUpperCase();
                let r = "",
                    s = "url";
                t.customRoute || e.route ? (r = t.customRoute || `${e.baseUrl||""}${e.route&&e.route.path}`, s = "route") : (e.originalUrl || e.url) && (r = i.stripUrlQueryAndFragment(e.originalUrl || e.url || ""));
                let o = "";
                return t.method && n && (o += n), t.method && t.path && (o += " "), t.path && r && (o += r), [o, s]
            }

            function u(e, t) {
                const {
                    include: n = a,
                    deps: i
                } = t || {}, o = {}, c = e.headers || {}, l = e.method, u = e.hostname || e.host || c.host || "<no host>", p = `${"https"===e.protocol||e.socket&&e.socket.encrypted?"https":"http"}://${u}${e.originalUrl||e.url||""}`;
                return n.forEach((t => {
                    switch (t) {
                        case "headers":
                            o.headers = c;
                            break;
                        case "method":
                            o.method = l;
                            break;
                        case "url":
                            o.url = p;
                            break;
                        case "cookies":
                            o.cookies = e.cookies || c.cookie && i && i.cookie && i.cookie.parse(c.cookie) || {};
                            break;
                        case "query_string":
                            o.query_string = d(e, i);
                            break;
                        case "data":
                            if ("GET" === l || "HEAD" === l) break;
                            void 0 !== e.body && (o.data = r.isString(e.body) ? e.body : JSON.stringify(s.normalize(e.body)));
                            break;
                        default:
                            ({}).hasOwnProperty.call(e, t) && (o[t] = e[t])
                    }
                })), o
            }

            function d(e, t) {
                let n = e.originalUrl || e.url || "";
                if (n) return n.startsWith("/") && (n = `http://dogs.are.great${n}`), e.query || void 0 !== typeof URL && new URL(n).search.replace("?", "") || t && t.url && t.url.parse(n).query || void 0
            }
            t.addRequestDataToEvent = function(e, t, n) {
                const s = { ...o,
                    ...n && n.include
                };
                if (s.request) {
                    const r = Array.isArray(s.request) ? u(t, {
                        include: s.request,
                        deps: n && n.deps
                    }) : u(t, {
                        deps: n && n.deps
                    });
                    e.request = { ...e.request,
                        ...r
                    }
                }
                if (s.user) {
                    const n = t.user && r.isPlainObject(t.user) ? function(e, t) {
                        const n = {};
                        return (Array.isArray(t) ? t : c).forEach((t => {
                            e && t in e && (n[t] = e[t])
                        })), n
                    }(t.user, s.user) : {};
                    Object.keys(n).length && (e.user = { ...e.user,
                        ...n
                    })
                }
                if (s.ip) {
                    const n = t.ip || t.socket && t.socket.remoteAddress;
                    n && (e.user = { ...e.user,
                        ip_address: n
                    })
                }
                return s.transaction && !e.transaction && (e.transaction = function(e, t) {
                    switch (t) {
                        case "path":
                            return l(e, {
                                path: !0
                            })[0];
                        case "handler":
                            return e.route && e.route.stack && e.route.stack[0] && e.route.stack[0].name || "<anonymous>";
                        default:
                            return l(e, {
                                path: !0,
                                method: !0
                            })[0]
                    }
                }(t, s.transaction)), e
            }, t.addRequestDataToTransaction = function(e, t, n) {
                e && (e.metadata.source && "url" !== e.metadata.source || e.setName(...l(t, {
                    path: !0,
                    method: !0
                })), e.setData("url", t.originalUrl || t.url), t.baseUrl && e.setData("baseUrl", t.baseUrl), e.setData("query", d(t, n)))
            }, t.extractPathForTransaction = l, t.extractRequestData = u
        },
        31371: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = ["fatal", "error", "warning", "log", "info", "debug"];

            function r(e) {
                return "warn" === e ? "warning" : n.includes(e) ? e : "log"
            }
            t.severityFromString = function(e) {
                return r(e)
            }, t.severityLevelFromString = r, t.validSeverityLevels = n
        },
        41995: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = 50;

            function r(...e) {
                const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
                return (e, n = 0) => {
                    const r = [];
                    for (const s of e.split("\n").slice(n)) {
                        if (s.length > 1024) continue;
                        const e = s.replace(/\(error: (.*)\)/, "$1");
                        for (const n of t) {
                            const t = n(e);
                            if (t) {
                                r.push(t);
                                break
                            }
                        }
                    }
                    return s(r)
                }
            }

            function s(e) {
                if (!e.length) return [];
                let t = e;
                const r = t[0].function || "",
                    s = t[t.length - 1].function || "";
                return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (t = t.slice(1)), -1 !== s.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, n).map((e => ({ ...e,
                    filename: e.filename || t[0].filename,
                    function: e.function || "?"
                }))).reverse()
            }
            const i = "<anonymous>";

            function o(e) {
                const t = /^\s*[-]{4,}$/,
                    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
                return r => {
                    if (r.match(t)) return {
                        filename: r
                    };
                    const s = r.match(n);
                    if (!s) return;
                    let i, o, a, c, l;
                    if (s[1]) {
                        a = s[1];
                        let e = a.lastIndexOf(".");
                        if ("." === a[e - 1] && e--, e > 0) {
                            i = a.slice(0, e), o = a.slice(e + 1);
                            const t = i.indexOf(".Module");
                            t > 0 && (a = a.slice(t + 1), i = i.slice(0, t))
                        }
                        c = void 0
                    }
                    o && (c = i, l = o), "<anonymous>" === o && (l = void 0, a = void 0), void 0 === a && (l = l || "<anonymous>", a = c ? `${c}.${l}` : l);
                    const u = s[2] && s[2].startsWith("file://") ? s[2].slice(7) : s[2],
                        d = !("native" === s[5] || u && !u.startsWith("/") && !u.startsWith(".") && 1 !== u.indexOf(":\\")) && void 0 !== u && !u.includes("node_modules/");
                    return {
                        filename: u,
                        module: e ? e(u) : void 0,
                        function: a,
                        lineno: parseInt(s[3], 10) || void 0,
                        colno: parseInt(s[4], 10) || void 0,
                        in_app: d
                    }
                }
            }
            t.createStackParser = r, t.getFunctionName = function(e) {
                try {
                    return e && "function" === typeof e && e.name || i
                } catch (e) {
                    return i
                }
            }, t.nodeStackLineParser = function(e) {
                return [90, o(e)]
            }, t.stackParserFromStackParserOptions = function(e) {
                return Array.isArray(e) ? r(...e) : e
            }, t.stripSentryFramesAndReverse = s
        },
        44899: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733);

            function s(e, t, n = !1) {
                return !!r.isString(e) && (r.isRegExp(t) ? t.test(e) : !!r.isString(t) && (n ? e === t : e.includes(t)))
            }
            t.escapeStringForRegex = function(e) {
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }, t.isMatchingPattern = s, t.safeJoin = function(e, t) {
                if (!Array.isArray(e)) return "";
                const n = [];
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    try {
                        n.push(String(r))
                    } catch (e) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }, t.snipLine = function(e, t) {
                let n = e;
                const r = n.length;
                if (r <= 150) return n;
                t > r && (t = r);
                let s = Math.max(t - 60, 0);
                s < 5 && (s = 0);
                let i = Math.min(s + 140, r);
                return i > r - 5 && (i = r), i === r && (s = Math.max(i - 140, 0)), n = n.slice(s, i), s > 0 && (n = `'{snip} ${n}`), i < r && (n += " {snip}"), n
            }, t.stringMatchesSomePattern = function(e, t = [], n = !1) {
                return t.some((t => s(e, t, n)))
            }, t.truncate = function(e, t = 0) {
                return "string" !== typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
            }
        },
        93989: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(89325),
                s = n(48225).getGlobalObject();

            function i() {
                if (!("fetch" in s)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (e) {
                    return !1
                }
            }

            function o(e) {
                return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
            }
            t.isNativeFetch = o, t.supportsDOMError = function() {
                try {
                    return new DOMError(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsDOMException = function() {
                try {
                    return new DOMException(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsErrorEvent = function() {
                try {
                    return new ErrorEvent(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsFetch = i, t.supportsHistory = function() {
                const e = s.chrome,
                    t = e && e.app && e.app.runtime,
                    n = "history" in s && !!s.history.pushState && !!s.history.replaceState;
                return !t && n
            }, t.supportsNativeFetch = function() {
                if (!i()) return !1;
                if (o(s.fetch)) return !0;
                let e = !1;
                const t = s.document;
                if (t && "function" === typeof t.createElement) try {
                    const n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = o(n.contentWindow.fetch)), t.head.removeChild(n)
                } catch (e) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
                return e
            }, t.supportsReferrerPolicy = function() {
                if (!i()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsReportingObserver = function() {
                return "ReportingObserver" in s
            }
        },
        59069: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(22733);
            var s;
            ! function(e) {
                e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED"
            }(s || (s = {}));
            class i {
                __init() {
                    this._state = s.PENDING
                }
                __init2() {
                    this._handlers = []
                }
                constructor(e) {
                    i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), i.prototype.__init4.call(this), i.prototype.__init5.call(this), i.prototype.__init6.call(this);
                    try {
                        e(this._resolve, this._reject)
                    } catch (e) {
                        this._reject(e)
                    }
                }
                then(e, t) {
                    return new i(((n, r) => {
                        this._handlers.push([!1, t => {
                            if (e) try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            } else n(t)
                        }, e => {
                            if (t) try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            } else r(e)
                        }]), this._executeHandlers()
                    }))
                } catch (e) {
                    return this.then((e => e), e)
                } finally(e) {
                    return new i(((t, n) => {
                        let r, s;
                        return this.then((t => {
                            s = !1, r = t, e && e()
                        }), (t => {
                            s = !0, r = t, e && e()
                        })).then((() => {
                            s ? n(r) : t(r)
                        }))
                    }))
                }
                __init3() {
                    this._resolve = e => {
                        this._setResult(s.RESOLVED, e)
                    }
                }
                __init4() {
                    this._reject = e => {
                        this._setResult(s.REJECTED, e)
                    }
                }
                __init5() {
                    this._setResult = (e, t) => {
                        this._state === s.PENDING && (r.isThenable(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()))
                    }
                }
                __init6() {
                    this._executeHandlers = () => {
                        if (this._state === s.PENDING) return;
                        const e = this._handlers.slice();
                        this._handlers = [], e.forEach((e => {
                            e[0] || (this._state === s.RESOLVED && e[1](this._value), this._state === s.REJECTED && e[2](this._value), e[0] = !0)
                        }))
                    }
                }
            }
            t.SyncPromise = i, t.rejectedSyncPromise = function(e) {
                return new i(((t, n) => {
                    n(e)
                }))
            }, t.resolvedSyncPromise = function(e) {
                return new i((t => {
                    t(e)
                }))
            }
        },
        33115: (e, t, n) => {
            e = n.nmd(e), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(23966),
                s = n(48225).getGlobalObject(),
                i = {
                    nowSeconds: () => Date.now() / 1e3
                },
                o = r.isNodeEnv() ? function() {
                    try {
                        return r.dynamicRequire(e, "perf_hooks").performance
                    } catch (e) {
                        return
                    }
                }() : function() {
                    const {
                        performance: e
                    } = s;
                    if (e && e.now) return {
                        now: () => e.now(),
                        timeOrigin: Date.now() - e.now()
                    }
                }(),
                a = void 0 === o ? i : {
                    nowSeconds: () => (o.timeOrigin + o.now()) / 1e3
                },
                c = i.nowSeconds.bind(i),
                l = a.nowSeconds.bind(a),
                u = l,
                d = void 0 !== o;
            t._browserPerformanceTimeOriginMode = void 0;
            const p = (() => {
                const {
                    performance: e
                } = s;
                if (!e || !e.now) return void(t._browserPerformanceTimeOriginMode = "none");
                const n = 36e5,
                    r = e.now(),
                    i = Date.now(),
                    o = e.timeOrigin ? Math.abs(e.timeOrigin + r - i) : n,
                    a = o < n,
                    c = e.timing && e.timing.navigationStart,
                    l = "number" === typeof c ? Math.abs(c + r - i) : n;
                return a || l < n ? o <= l ? (t._browserPerformanceTimeOriginMode = "timeOrigin", e.timeOrigin) : (t._browserPerformanceTimeOriginMode = "navigationStart", c) : (t._browserPerformanceTimeOriginMode = "dateNow", i)
            })();
            t.browserPerformanceTimeOrigin = p, t.dateTimestampInSeconds = c, t.timestampInSeconds = l, t.timestampWithMs = u, t.usingPerformanceAPI = d
        },
        78359: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
            t.TRACEPARENT_REGEXP = n, t.extractTraceparentData = function(e) {
                const t = e.match(n);
                if (!e || !t) return;
                let r;
                return "1" === t[3] ? r = !0 : "0" === t[3] && (r = !1), {
                    traceId: t[1],
                    parentSampled: r,
                    parentSpanId: t[2]
                }
            }
        },
        50045: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getNumberOfUrlSegments = function(e) {
                return e.split(/\\?\//).filter((e => e.length > 0 && "," !== e)).length
            }, t.parseUrl = function(e) {
                if (!e) return {};
                const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                const n = t[6] || "",
                    r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    relative: t[5] + n + r
                }
            }, t.stripUrlQueryAndFragment = function(e) {
                return e.split(/[\?#]/, 1)[0]
            }
        },
        48225: (e, t, n) => {
            function r(e) {
                return e && e.Math == Math ? e : void 0
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};
            t.GLOBAL_OBJ = s, t.getGlobalObject = function() {
                return s
            }, t.getGlobalSingleton = function(e, t, n) {
                const r = n || s,
                    i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[e] || (i[e] = t())
            }
        },
        97942: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291),
                s = n(9673),
                i = "sentry-",
                o = /^sentry-/;

            function a(e) {
                return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, [t, n]) => (e[t] = n, e)), {})
            }
            t.BAGGAGE_HEADER_NAME = "baggage", t.MAX_BAGGAGE_STRING_LENGTH = 8192, t.SENTRY_BAGGAGE_KEY_PREFIX = i, t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = o, t.baggageHeaderToDynamicSamplingContext = function(e) {
                if (!r.isString(e) && !Array.isArray(e)) return;
                let t = {};
                if (Array.isArray(e)) t = e.reduce(((e, t) => ({ ...e,
                    ...a(t)
                })), {});
                else {
                    if (!e) return;
                    t = a(e)
                }
                const n = Object.entries(t).reduce(((e, [t, n]) => (t.match(o) && (e[t.slice(7)] = n), e)), {});
                return Object.keys(n).length > 0 ? n : void 0
            }, t.dynamicSamplingContextToSentryBaggageHeader = function(e) {
                return function(e) {
                    if (0 !== Object.keys(e).length) return Object.entries(e).reduce(((e, [t, n], r) => {
                        const i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                            o = 0 === r ? i : `${e},${i}`;
                        return o.length > 8192 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : o
                    }), "")
                }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`${i}${t}`] = n), e)), {}))
            }
        },
        63617: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291),
                s = n(21188).getGlobalObject();

            function i(e, t) {
                const n = e,
                    s = [];
                let i, o, a, c, l;
                if (!n || !n.tagName) return "";
                s.push(n.tagName.toLowerCase());
                const u = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
                if (u && u.length) u.forEach((e => {
                    s.push(`[${e[0]}="${e[1]}"]`)
                }));
                else if (n.id && s.push(`#${n.id}`), i = n.className, i && r.isString(i))
                    for (o = i.split(/\s+/), l = 0; l < o.length; l++) s.push(`.${o[l]}`);
                const d = ["aria-label", "type", "name", "title", "alt"];
                for (l = 0; l < d.length; l++) a = d[l], c = n.getAttribute(a), c && s.push(`[${a}="${c}"]`);
                return s.join("")
            }
            t.getDomElement = function(e) {
                return s.document && s.document.querySelector ? s.document.querySelector(e) : null
            }, t.getLocationHref = function() {
                try {
                    return s.document.location.href
                } catch (e) {
                    return ""
                }
            }, t.htmlTreeAsString = function(e, t = {}) {
                try {
                    let n = e;
                    const r = 5,
                        s = [];
                    let o = 0,
                        a = 0;
                    const c = " > ",
                        l = c.length;
                    let u;
                    const d = Array.isArray(t) ? t : t.keyAttrs,
                        p = !Array.isArray(t) && t.maxStringLength || 80;
                    for (; n && o++ < r && (u = i(n, d), !("html" === u || o > 1 && a + s.length * l + u.length >= p));) s.push(u), a += u.length, n = n.parentNode;
                    return s.reverse().join(c)
                } catch (e) {
                    return "<unknown>"
                }
            }
        },
        47615: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(81119);
            t._asyncNullishCoalesce = async function(e, t) {
                return r._nullishCoalesce(e, t)
            }
        },
        3695: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._asyncOptionalChain = async function(e) {
                let t, n = e[0],
                    r = 1;
                for (; r < e.length;) {
                    const s = e[r],
                        i = e[r + 1];
                    if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                    "access" === s || "optionalAccess" === s ? (t = n, n = await i(n)) : "call" !== s && "optionalCall" !== s || (n = await i(((...e) => n.call(t, ...e))), t = void 0)
                }
                return n
            }
        },
        52136: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(3695);
            t._asyncOptionalChainDelete = async function(e) {
                const t = await r._asyncOptionalChain(e);
                return null == t || t
            }
        },
        31765: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._createNamedExportFrom = function(e, n, r) {
                t[n] = e[r]
            }
        },
        36334: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._createStarExport = function(e) {
                Object.keys(e).filter((e => "default" !== e && "__esModule" !== e && !(e in t))).forEach((n => t[n] = e[n]))
            }
        },
        15247: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopDefault = function(e) {
                return e.__esModule ? e.default : e
            }
        },
        36684: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopNamespace = function(e) {
                return e.__esModule ? e : { ...e,
                    default: e
                }
            }
        },
        76583: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopNamespaceDefaultOnly = function(e) {
                return {
                    __proto__: null,
                    default: e
                }
            }
        },
        40658: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopRequireDefault = function(e) {
                return e.__esModule ? e : {
                    default: e
                }
            }
        },
        29580: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._interopRequireWildcard = function(e) {
                return e.__esModule ? e : { ...e,
                    default: e
                }
            }
        },
        81119: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._nullishCoalesce = function(e, t) {
                return null != e ? e : t()
            }
        },
        82093: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._optionalChain = function(e) {
                let t, n = e[0],
                    r = 1;
                for (; r < e.length;) {
                    const s = e[r],
                        i = e[r + 1];
                    if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                    "access" === s || "optionalAccess" === s ? (t = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...e) => n.call(t, ...e))), t = void 0)
                }
                return n
            }
        },
        4748: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(82093);
            t._optionalChainDelete = function(e) {
                const t = r._optionalChain(e);
                return null == t || t
            }
        },
        48554: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(47615),
                s = n(3695),
                i = n(52136),
                o = n(31765),
                a = n(36334),
                c = n(15247),
                l = n(36684),
                u = n(76583),
                d = n(40658),
                p = n(29580),
                _ = n(81119),
                h = n(82093),
                f = n(4748);
            t._asyncNullishCoalesce = r._asyncNullishCoalesce, t._asyncOptionalChain = s._asyncOptionalChain, t._asyncOptionalChainDelete = i._asyncOptionalChainDelete, t._createNamedExportFrom = o._createNamedExportFrom, t._createStarExport = a._createStarExport, t._interopDefault = c._interopDefault, t._interopNamespace = l._interopNamespace, t._interopNamespaceDefaultOnly = u._interopNamespaceDefaultOnly, t._interopRequireDefault = d._interopRequireDefault, t._interopRequireWildcard = p._interopRequireWildcard, t._nullishCoalesce = _._nullishCoalesce, t._optionalChain = h._optionalChain, t._optionalChainDelete = f._optionalChainDelete
        },
        72545: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(68765),
                s = n(82429);
            t.createClientReportEnvelope = function(e, t, n) {
                const i = [{
                    type: "client_report"
                }, {
                    timestamp: n || s.dateTimestampInSeconds(),
                    discarded_events: e
                }];
                return r.createEnvelope(t ? {
                    dsn: t
                } : {}, [i])
            }
        },
        29893: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(45676),
                s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function i(e) {
                const t = s.exec(e);
                if (!t) throw new r.SentryError(`Invalid Sentry Dsn: ${e}`);
                const [n, i, a = "", c, l = "", u] = t.slice(1);
                let d = "",
                    p = u;
                const _ = p.split("/");
                if (_.length > 1 && (d = _.slice(0, -1).join("/"), p = _.pop()), p) {
                    const e = p.match(/^\d+/);
                    e && (p = e[0])
                }
                return o({
                    host: c,
                    pass: a,
                    path: d,
                    projectId: p,
                    port: l,
                    protocol: n,
                    publicKey: i
                })
            }

            function o(e) {
                return {
                    protocol: e.protocol,
                    publicKey: e.publicKey || "",
                    pass: e.pass || "",
                    host: e.host,
                    port: e.port || "",
                    path: e.path || "",
                    projectId: e.projectId
                }
            }
            t.dsnFromString = i, t.dsnToString = function(e, t = !1) {
                const {
                    host: n,
                    path: r,
                    pass: s,
                    port: i,
                    projectId: o,
                    protocol: a,
                    publicKey: c
                } = e;
                return `${a}://${c}${t&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r?`${r}/`:r}${o}`
            }, t.makeDsn = function(e) {
                const t = "string" === typeof e ? i(e) : o(e);
                return function(e) {
                    if ("undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return;
                    const {
                        port: t,
                        projectId: n,
                        protocol: s
                    } = e;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((t => {
                            if (!e[t]) throw new r.SentryError(`Invalid Sentry Dsn: ${t} missing`)
                        })), !n.match(/^\d+$/)) throw new r.SentryError(`Invalid Sentry Dsn: Invalid projectId ${n}`);
                    if (! function(e) {
                            return "http" === e || "https" === e
                        }(s)) throw new r.SentryError(`Invalid Sentry Dsn: Invalid protocol ${s}`);
                    if (t && isNaN(parseInt(t, 10))) throw new r.SentryError(`Invalid Sentry Dsn: Invalid port ${t}`)
                }(t), t
            }
        },
        72322: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSDKSource = function() {
                return "npm"
            }, t.isBrowserBundle = function() {
                return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
        },
        68765: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(29893),
                s = n(45196),
                i = n(79553);

            function o(e, t) {
                const n = e[1];
                for (const e of n)
                    if (t(e, e[0].type)) return !0;
                return !1
            }

            function a(e, t) {
                return (t || new TextEncoder).encode(e)
            }
            const c = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay"
            };
            t.addItemToEnvelope = function(e, t) {
                const [n, r] = e;
                return [n, [...r, t]]
            }, t.createAttachmentEnvelopeItem = function(e, t) {
                const n = "string" === typeof e.data ? a(e.data, t) : e.data;
                return [i.dropUndefinedKeys({
                    type: "attachment",
                    length: n.length,
                    filename: e.filename,
                    content_type: e.contentType,
                    attachment_type: e.attachmentType
                }), n]
            }, t.createEnvelope = function(e, t = []) {
                return [e, t]
            }, t.createEventEnvelopeHeaders = function(e, t, n, s) {
                const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString(),
                    ...t && {
                        sdk: t
                    },
                    ...!!n && {
                        dsn: r.dsnToString(s)
                    },
                    ..."transaction" === e.type && o && {
                        trace: i.dropUndefinedKeys({ ...o
                        })
                    }
                }
            }, t.envelopeContainsItemType = function(e, t) {
                return o(e, ((e, n) => t.includes(n)))
            }, t.envelopeItemTypeToDataCategory = function(e) {
                return c[e]
            }, t.forEachEnvelopeItem = o, t.getSdkMetadataForEnvelopeHeader = function(e) {
                if (!e || !e.sdk) return;
                const {
                    name: t,
                    version: n
                } = e.sdk;
                return {
                    name: t,
                    version: n
                }
            }, t.parseEnvelope = function(e, t, n) {
                let r = "string" === typeof e ? t.encode(e) : e;

                function s(e) {
                    const t = r.subarray(0, e);
                    return r = r.subarray(e + 1), t
                }

                function i() {
                    let e = r.indexOf(10);
                    return e < 0 && (e = r.length), JSON.parse(n.decode(s(e)))
                }
                const o = i(),
                    a = [];
                for (; r.length;) {
                    const e = i(),
                        t = "number" === typeof e.length ? e.length : void 0;
                    a.push([e, t ? s(t) : i()])
                }
                return [o, a]
            }, t.serializeEnvelope = function(e, t) {
                const [n, r] = e;
                let i = JSON.stringify(n);

                function o(e) {
                    "string" === typeof i ? i = "string" === typeof e ? i + e : [a(i, t), e] : i.push("string" === typeof e ? a(e, t) : e)
                }
                for (const e of r) {
                    const [t, n] = e;
                    if (o(`\n${JSON.stringify(t)}\n`), "string" === typeof n || n instanceof Uint8Array) o(n);
                    else {
                        let e;
                        try {
                            e = JSON.stringify(n)
                        } catch (t) {
                            e = JSON.stringify(s.normalize(n))
                        }
                        o(e)
                    }
                }
                return "string" === typeof i ? i : function(e) {
                    const t = e.reduce(((e, t) => e + t.length), 0),
                        n = new Uint8Array(t);
                    let r = 0;
                    for (const t of e) n.set(t, r), r += t.length;
                    return n
                }(i)
            }
        },
        45676: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            class n extends Error {
                constructor(e, t = "warn") {
                    super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
                }
            }
            t.SentryError = n
        },
        56365: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(63617),
                s = n(29893),
                i = n(45676),
                o = n(21188),
                a = n(93741),
                c = n(20291),
                l = n(9673),
                u = n(49457),
                d = n(34343),
                p = n(19097),
                _ = n(45196),
                h = n(79553),
                f = n(56730),
                m = n(20613),
                g = n(74851),
                y = n(20707),
                E = n(74246),
                v = n(86437),
                S = n(61636),
                b = n(40738),
                T = n(82429),
                w = n(17982),
                k = n(72322),
                x = n(68765),
                R = n(72545),
                O = n(85607),
                D = n(97942),
                N = n(72038);
            t.getDomElement = r.getDomElement, t.getLocationHref = r.getLocationHref, t.htmlTreeAsString = r.htmlTreeAsString, t.dsnFromString = s.dsnFromString, t.dsnToString = s.dsnToString, t.makeDsn = s.makeDsn, t.SentryError = i.SentryError, t.GLOBAL_OBJ = o.GLOBAL_OBJ, t.getGlobalObject = o.getGlobalObject, t.getGlobalSingleton = o.getGlobalSingleton, t.addInstrumentationHandler = a.addInstrumentationHandler, t.isDOMError = c.isDOMError, t.isDOMException = c.isDOMException, t.isElement = c.isElement, t.isError = c.isError, t.isErrorEvent = c.isErrorEvent, t.isEvent = c.isEvent, t.isInstanceOf = c.isInstanceOf, t.isNaN = c.isNaN, t.isPlainObject = c.isPlainObject, t.isPrimitive = c.isPrimitive, t.isRegExp = c.isRegExp, t.isString = c.isString, t.isSyntheticEvent = c.isSyntheticEvent, t.isThenable = c.isThenable, t.CONSOLE_LEVELS = l.CONSOLE_LEVELS, t.consoleSandbox = l.consoleSandbox, Object.defineProperty(t, "logger", {
                enumerable: !0,
                get: () => l.logger
            }), t.memoBuilder = u.memoBuilder, t.addContextToFrame = d.addContextToFrame, t.addExceptionMechanism = d.addExceptionMechanism, t.addExceptionTypeValue = d.addExceptionTypeValue, t.arrayify = d.arrayify, t.checkOrSetAlreadyCaught = d.checkOrSetAlreadyCaught, t.getEventDescription = d.getEventDescription, t.parseSemver = d.parseSemver, t.uuid4 = d.uuid4, t.dynamicRequire = p.dynamicRequire, t.isNodeEnv = p.isNodeEnv, t.loadModule = p.loadModule, t.normalize = _.normalize, t.normalizeToSize = _.normalizeToSize, t.walk = _.walk, t.addNonEnumerableProperty = h.addNonEnumerableProperty, t.convertToPlainObject = h.convertToPlainObject, t.dropUndefinedKeys = h.dropUndefinedKeys, t.extractExceptionKeysForMessage = h.extractExceptionKeysForMessage, t.fill = h.fill, t.getOriginalFunction = h.getOriginalFunction, t.markFunctionWrapped = h.markFunctionWrapped, t.objectify = h.objectify, t.urlEncode = h.urlEncode, t.basename = f.basename, t.dirname = f.dirname, t.isAbsolute = f.isAbsolute, t.join = f.join, t.normalizePath = f.normalizePath, t.relative = f.relative, t.resolve = f.resolve, t.makePromiseBuffer = m.makePromiseBuffer, t.addRequestDataToEvent = g.addRequestDataToEvent, t.addRequestDataToTransaction = g.addRequestDataToTransaction, t.extractPathForTransaction = g.extractPathForTransaction, t.extractRequestData = g.extractRequestData, t.severityFromString = y.severityFromString, t.severityLevelFromString = y.severityLevelFromString, t.validSeverityLevels = y.validSeverityLevels, t.createStackParser = E.createStackParser, t.getFunctionName = E.getFunctionName, t.nodeStackLineParser = E.nodeStackLineParser, t.stackParserFromStackParserOptions = E.stackParserFromStackParserOptions, t.stripSentryFramesAndReverse = E.stripSentryFramesAndReverse, t.escapeStringForRegex = v.escapeStringForRegex, t.isMatchingPattern = v.isMatchingPattern, t.safeJoin = v.safeJoin, t.snipLine = v.snipLine, t.stringMatchesSomePattern = v.stringMatchesSomePattern, t.truncate = v.truncate, t.isNativeFetch = S.isNativeFetch, t.supportsDOMError = S.supportsDOMError, t.supportsDOMException = S.supportsDOMException, t.supportsErrorEvent = S.supportsErrorEvent, t.supportsFetch = S.supportsFetch, t.supportsHistory = S.supportsHistory, t.supportsNativeFetch = S.supportsNativeFetch, t.supportsReferrerPolicy = S.supportsReferrerPolicy, t.supportsReportingObserver = S.supportsReportingObserver, t.SyncPromise = b.SyncPromise, t.rejectedSyncPromise = b.rejectedSyncPromise, t.resolvedSyncPromise = b.resolvedSyncPromise, Object.defineProperty(t, "_browserPerformanceTimeOriginMode", {
                enumerable: !0,
                get: () => T._browserPerformanceTimeOriginMode
            }), t.browserPerformanceTimeOrigin = T.browserPerformanceTimeOrigin, t.dateTimestampInSeconds = T.dateTimestampInSeconds, t.timestampInSeconds = T.timestampInSeconds, t.timestampWithMs = T.timestampWithMs, t.usingPerformanceAPI = T.usingPerformanceAPI, t.TRACEPARENT_REGEXP = w.TRACEPARENT_REGEXP, t.extractTraceparentData = w.extractTraceparentData, t.getSDKSource = k.getSDKSource, t.isBrowserBundle = k.isBrowserBundle, t.addItemToEnvelope = x.addItemToEnvelope, t.createAttachmentEnvelopeItem = x.createAttachmentEnvelopeItem, t.createEnvelope = x.createEnvelope, t.createEventEnvelopeHeaders = x.createEventEnvelopeHeaders, t.envelopeContainsItemType = x.envelopeContainsItemType, t.envelopeItemTypeToDataCategory = x.envelopeItemTypeToDataCategory, t.forEachEnvelopeItem = x.forEachEnvelopeItem, t.getSdkMetadataForEnvelopeHeader = x.getSdkMetadataForEnvelopeHeader, t.parseEnvelope = x.parseEnvelope, t.serializeEnvelope = x.serializeEnvelope, t.createClientReportEnvelope = R.createClientReportEnvelope, t.DEFAULT_RETRY_AFTER = O.DEFAULT_RETRY_AFTER, t.disabledUntil = O.disabledUntil, t.isRateLimited = O.isRateLimited, t.parseRetryAfterHeader = O.parseRetryAfterHeader, t.updateRateLimits = O.updateRateLimits, t.BAGGAGE_HEADER_NAME = D.BAGGAGE_HEADER_NAME, t.MAX_BAGGAGE_STRING_LENGTH = D.MAX_BAGGAGE_STRING_LENGTH, t.SENTRY_BAGGAGE_KEY_PREFIX = D.SENTRY_BAGGAGE_KEY_PREFIX, t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = D.SENTRY_BAGGAGE_KEY_PREFIX_REGEX, t.baggageHeaderToDynamicSamplingContext = D.baggageHeaderToDynamicSamplingContext, t.dynamicSamplingContextToSentryBaggageHeader = D.dynamicSamplingContextToSentryBaggageHeader, t.getNumberOfUrlSegments = N.getNumberOfUrlSegments, t.parseUrl = N.parseUrl, t.stripUrlQueryAndFragment = N.stripUrlQueryAndFragment
        },
        93741: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291),
                s = n(9673),
                i = n(79553),
                o = n(74246),
                a = n(61636),
                c = n(21188).getGlobalObject(),
                l = {},
                u = {};

            function d(e, t) {
                if (e && l[e])
                    for (const n of l[e] || []) try {
                        n(t)
                    } catch (t) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${o.getFunctionName(n)}\nError:`, t)
                    }
            }

            function p(e = []) {
                return "Request" in c && r.isInstanceOf(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
            }

            function _(e = []) {
                return "string" === typeof e[0] ? e[0] : "Request" in c && r.isInstanceOf(e[0], Request) ? e[0].url : String(e[0])
            }
            let h;
            const f = 1e3;
            let m, g;

            function y(e, t = !1) {
                return n => {
                    if (!n || g === n) return;
                    if (function(e) {
                            if ("keypress" !== e.type) return !1;
                            try {
                                const t = e.target;
                                if (!t || !t.tagName) return !0;
                                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1
                            } catch (e) {}
                            return !0
                        }(n)) return;
                    const r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === m || function(e, t) {
                        if (!e) return !0;
                        if (e.type !== t.type) return !0;
                        try {
                            if (e.target !== t.target) return !0
                        } catch (e) {}
                        return !1
                    }(g, n)) && (e({
                        event: n,
                        name: r,
                        global: t
                    }), g = n), clearTimeout(m), m = c.setTimeout((() => {
                        m = void 0
                    }), f)
                }
            }
            let E = null,
                v = null;
            t.addInstrumentationHandler = function(e, t) {
                l[e] = l[e] || [], l[e].push(t),
                    function(e) {
                        if (!u[e]) switch (u[e] = !0, e) {
                            case "console":
                                "console" in c && s.CONSOLE_LEVELS.forEach((function(e) {
                                    e in c.console && i.fill(c.console, e, (function(t) {
                                        return function(...n) {
                                            d("console", {
                                                args: n,
                                                level: e
                                            }), t && t.apply(c.console, n)
                                        }
                                    }))
                                }));
                                break;
                            case "dom":
                                ! function() {
                                    if (!("document" in c)) return;
                                    const e = d.bind(null, "dom"),
                                        t = y(e, !0);
                                    c.document.addEventListener("click", t, !1), c.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
                                        const n = c[t] && c[t].prototype;
                                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (i.fill(n, "addEventListener", (function(t) {
                                            return function(n, r, s) {
                                                if ("click" === n || "keypress" == n) try {
                                                    const r = this,
                                                        i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                                                        o = i[n] = i[n] || {
                                                            refCount: 0
                                                        };
                                                    if (!o.handler) {
                                                        const r = y(e);
                                                        o.handler = r, t.call(this, n, r, s)
                                                    }
                                                    o.refCount++
                                                } catch (e) {}
                                                return t.call(this, n, r, s)
                                            }
                                        })), i.fill(n, "removeEventListener", (function(e) {
                                            return function(t, n, r) {
                                                if ("click" === t || "keypress" == t) try {
                                                    const n = this,
                                                        s = n.__sentry_instrumentation_handlers__ || {},
                                                        i = s[t];
                                                    i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete s[t]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
                                                } catch (e) {}
                                                return e.call(this, t, n, r)
                                            }
                                        })))
                                    }))
                                }();
                                break;
                            case "xhr":
                                ! function() {
                                    if (!("XMLHttpRequest" in c)) return;
                                    const e = XMLHttpRequest.prototype;
                                    i.fill(e, "open", (function(e) {
                                        return function(...t) {
                                            const n = this,
                                                s = t[1],
                                                o = n.__sentry_xhr__ = {
                                                    method: r.isString(t[0]) ? t[0].toUpperCase() : t[0],
                                                    url: t[1]
                                                };
                                            r.isString(s) && "POST" === o.method && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                                            const a = function() {
                                                if (4 === n.readyState) {
                                                    try {
                                                        o.status_code = n.status
                                                    } catch (e) {}
                                                    d("xhr", {
                                                        args: t,
                                                        endTimestamp: Date.now(),
                                                        startTimestamp: Date.now(),
                                                        xhr: n
                                                    })
                                                }
                                            };
                                            return "onreadystatechange" in n && "function" === typeof n.onreadystatechange ? i.fill(n, "onreadystatechange", (function(e) {
                                                return function(...t) {
                                                    return a(), e.apply(n, t)
                                                }
                                            })) : n.addEventListener("readystatechange", a), e.apply(n, t)
                                        }
                                    })), i.fill(e, "send", (function(e) {
                                        return function(...t) {
                                            return this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]), d("xhr", {
                                                args: t,
                                                startTimestamp: Date.now(),
                                                xhr: this
                                            }), e.apply(this, t)
                                        }
                                    }))
                                }();
                                break;
                            case "fetch":
                                a.supportsNativeFetch() && i.fill(c, "fetch", (function(e) {
                                    return function(...t) {
                                        const n = {
                                            args: t,
                                            fetchData: {
                                                method: p(t),
                                                url: _(t)
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return d("fetch", { ...n
                                        }), e.apply(c, t).then((e => (d("fetch", { ...n,
                                            endTimestamp: Date.now(),
                                            response: e
                                        }), e)), (e => {
                                            throw d("fetch", { ...n,
                                                endTimestamp: Date.now(),
                                                error: e
                                            }), e
                                        }))
                                    }
                                }));
                                break;
                            case "history":
                                ! function() {
                                    if (!a.supportsHistory()) return;
                                    const e = c.onpopstate;

                                    function t(e) {
                                        return function(...t) {
                                            const n = t.length > 2 ? t[2] : void 0;
                                            if (n) {
                                                const e = h,
                                                    t = String(n);
                                                h = t, d("history", {
                                                    from: e,
                                                    to: t
                                                })
                                            }
                                            return e.apply(this, t)
                                        }
                                    }
                                    c.onpopstate = function(...t) {
                                        const n = c.location.href,
                                            r = h;
                                        if (h = n, d("history", {
                                                from: r,
                                                to: n
                                            }), e) try {
                                            return e.apply(this, t)
                                        } catch (e) {}
                                    }, i.fill(c.history, "pushState", t), i.fill(c.history, "replaceState", t)
                                }();
                                break;
                            case "error":
                                E = c.onerror, c.onerror = function(e, t, n, r, s) {
                                    return d("error", {
                                        column: r,
                                        error: s,
                                        line: n,
                                        msg: e,
                                        url: t
                                    }), !!E && E.apply(this, arguments)
                                };
                                break;
                            case "unhandledrejection":
                                v = c.onunhandledrejection, c.onunhandledrejection = function(e) {
                                    return d("unhandledrejection", e), !v || v.apply(this, arguments)
                                };
                                break;
                            default:
                                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("unknown instrumentation type:", e)
                        }
                    }(e)
            }
        },
        20291: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = Object.prototype.toString;

            function r(e, t) {
                return n.call(e) === `[object ${t}]`
            }

            function s(e) {
                return r(e, "Object")
            }

            function i(e, t) {
                try {
                    return e instanceof t
                } catch (e) {
                    return !1
                }
            }
            t.isDOMError = function(e) {
                return r(e, "DOMError")
            }, t.isDOMException = function(e) {
                return r(e, "DOMException")
            }, t.isElement = function(e) {
                return "undefined" !== typeof Element && i(e, Element)
            }, t.isError = function(e) {
                switch (n.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return i(e, Error)
                }
            }, t.isErrorEvent = function(e) {
                return r(e, "ErrorEvent")
            }, t.isEvent = function(e) {
                return "undefined" !== typeof Event && i(e, Event)
            }, t.isInstanceOf = i, t.isNaN = function(e) {
                return "number" === typeof e && e !== e
            }, t.isPlainObject = s, t.isPrimitive = function(e) {
                return null === e || "object" !== typeof e && "function" !== typeof e
            }, t.isRegExp = function(e) {
                return r(e, "RegExp")
            }, t.isString = function(e) {
                return r(e, "String")
            }, t.isSyntheticEvent = function(e) {
                return s(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
            }, t.isThenable = function(e) {
                return Boolean(e && e.then && "function" === typeof e.then)
            }
        },
        9673: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(21188),
                s = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function i(e) {
                if (!("console" in r.GLOBAL_OBJ)) return e();
                const t = r.GLOBAL_OBJ.console,
                    n = {};
                s.forEach((e => {
                    const r = t[e] && t[e].__sentry_original__;
                    e in t && r && (n[e] = t[e], t[e] = r)
                }));
                try {
                    return e()
                } finally {
                    Object.keys(n).forEach((e => {
                        t[e] = n[e]
                    }))
                }
            }

            function o() {
                let e = !1;
                const t = {
                    enable: () => {
                        e = !0
                    },
                    disable: () => {
                        e = !1
                    }
                };
                return "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? s.forEach((n => {
                    t[n] = (...t) => {
                        e && i((() => {
                            r.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t)
                        }))
                    }
                })) : s.forEach((e => {
                    t[e] = () => {}
                })), t
            }
            t.logger = void 0, "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? t.logger = r.getGlobalSingleton("logger", o) : t.logger = o(), t.CONSOLE_LEVELS = s, t.consoleSandbox = i
        },
        49457: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.memoBuilder = function() {
                const e = "function" === typeof WeakSet,
                    t = e ? new WeakSet : [];
                return [function(n) {
                    if (e) return !!t.has(n) || (t.add(n), !1);
                    for (let e = 0; e < t.length; e++)
                        if (t[e] === n) return !0;
                    return t.push(n), !1
                }, function(n) {
                    if (e) t.delete(n);
                    else
                        for (let e = 0; e < t.length; e++)
                            if (t[e] === n) {
                                t.splice(e, 1);
                                break
                            }
                }]
            }
        },
        34343: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(79553),
                s = n(86437),
                i = n(21188);

            function o(e) {
                return e.exception && e.exception.values ? e.exception.values[0] : void 0
            }
            const a = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
            t.addContextToFrame = function(e, t, n = 5) {
                if (void 0 === t.lineno) return;
                const r = e.length,
                    i = Math.max(Math.min(r, t.lineno - 1), 0);
                t.pre_context = e.slice(Math.max(0, i - n), i).map((e => s.snipLine(e, 0))), t.context_line = s.snipLine(e[Math.min(r - 1, i)], t.colno || 0), t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map((e => s.snipLine(e, 0)))
            }, t.addExceptionMechanism = function(e, t) {
                const n = o(e);
                if (!n) return;
                const r = n.mechanism;
                if (n.mechanism = {
                        type: "generic",
                        handled: !0,
                        ...r,
                        ...t
                    }, t && "data" in t) {
                    const e = { ...r && r.data,
                        ...t.data
                    };
                    n.mechanism.data = e
                }
            }, t.addExceptionTypeValue = function(e, t, n) {
                const r = e.exception = e.exception || {},
                    s = r.values = r.values || [],
                    i = s[0] = s[0] || {};
                i.value || (i.value = t || ""), i.type || (i.type = n || "Error")
            }, t.arrayify = function(e) {
                return Array.isArray(e) ? e : [e]
            }, t.checkOrSetAlreadyCaught = function(e) {
                if (e && e.__sentry_captured__) return !0;
                try {
                    r.addNonEnumerableProperty(e, "__sentry_captured__", !0)
                } catch (e) {}
                return !1
            }, t.getEventDescription = function(e) {
                const {
                    message: t,
                    event_id: n
                } = e;
                if (t) return t;
                const r = o(e);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }, t.parseSemver = function(e) {
                const t = e.match(a) || [],
                    n = parseInt(t[1], 10),
                    r = parseInt(t[2], 10),
                    s = parseInt(t[3], 10);
                return {
                    buildmetadata: t[5],
                    major: isNaN(n) ? void 0 : n,
                    minor: isNaN(r) ? void 0 : r,
                    patch: isNaN(s) ? void 0 : s,
                    prerelease: t[4]
                }
            }, t.uuid4 = function() {
                const e = i.GLOBAL_OBJ,
                    t = e.crypto || e.msCrypto;
                if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
            }
        },
        19097: (e, t, n) => {
            e = n.nmd(e);
            var r = n(34155);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(72322);

            function i(e, t) {
                return e.require(t)
            }
            t.dynamicRequire = i, t.isNodeEnv = function() {
                return !s.isBrowserBundle() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof r ? r : 0)
            }, t.loadModule = function(t) {
                let n;
                try {
                    n = i(e, t)
                } catch (e) {}
                try {
                    const {
                        cwd: r
                    } = i(e, "process");
                    n = i(e, `${r()}/node_modules/${t}`)
                } catch (e) {}
                return n
            }
        },
        45196: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291),
                s = n(49457),
                i = n(79553),
                o = n(74246);

            function a(e, t = 1 / 0, n = 1 / 0) {
                try {
                    return c("", e, t, n)
                } catch (e) {
                    return {
                        ERROR: `**non-serializable** (${e})`
                    }
                }
            }

            function c(e, t, a = 1 / 0, l = 1 / 0, u = s.memoBuilder()) {
                const [d, p] = u;
                if (null === t || ["number", "boolean", "string"].includes(typeof t) && !r.isNaN(t)) return t;
                const _ = function(e, t) {
                    try {
                        return "domain" === e && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" !== typeof n.g && t === n.g ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : r.isSyntheticEvent(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" === typeof t ? `[Function: ${o.getFunctionName(t)}]` : "symbol" === typeof t ? `[${String(t)}]` : "bigint" === typeof t ? `[BigInt: ${String(t)}]` : `[object ${function(e){const t=Object.getPrototypeOf(e);return t?t.constructor.name:"null prototype"}(t)}]`
                    } catch (e) {
                        return `**non-serializable** (${e})`
                    }
                }(e, t);
                if (!_.startsWith("[object ")) return _;
                if (t.__sentry_skip_normalization__) return t;
                if (0 === a) return _.replace("object ", "");
                if (d(t)) return "[Circular ~]";
                const h = t;
                if (h && "function" === typeof h.toJSON) try {
                    return c("", h.toJSON(), a - 1, l, u)
                } catch (e) {}
                const f = Array.isArray(t) ? [] : {};
                let m = 0;
                const g = i.convertToPlainObject(t);
                for (const e in g) {
                    if (!Object.prototype.hasOwnProperty.call(g, e)) continue;
                    if (m >= l) {
                        f[e] = "[MaxProperties ~]";
                        break
                    }
                    const t = g[e];
                    f[e] = c(e, t, a - 1, l, u), m++
                }
                return p(t), f
            }
            t.normalize = a, t.normalizeToSize = function e(t, n = 3, r = 102400) {
                const s = a(t, n);
                return i = s,
                    function(e) {
                        return ~-encodeURI(e).split(/%..|./).length
                    }(JSON.stringify(i)) > r ? e(t, n - 1, r) : s;
                var i
            }, t.walk = c
        },
        79553: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(63617),
                s = n(20291),
                i = n(86437);

            function o(e, t, n) {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function a(e, t) {
                const n = t.prototype || {};
                e.prototype = t.prototype = n, o(e, "__sentry_original__", t)
            }

            function c(e) {
                if (s.isError(e)) return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...u(e)
                };
                if (s.isEvent(e)) {
                    const t = {
                        type: e.type,
                        target: l(e.target),
                        currentTarget: l(e.currentTarget),
                        ...u(e)
                    };
                    return "undefined" !== typeof CustomEvent && s.isInstanceOf(e, CustomEvent) && (t.detail = e.detail), t
                }
                return e
            }

            function l(e) {
                try {
                    return s.isElement(e) ? r.htmlTreeAsString(e) : Object.prototype.toString.call(e)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function u(e) {
                if ("object" === typeof e && null !== e) {
                    const t = {};
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }
                return {}
            }

            function d(e, t) {
                if (s.isPlainObject(e)) {
                    const n = t.get(e);
                    if (void 0 !== n) return n;
                    const r = {};
                    t.set(e, r);
                    for (const n of Object.keys(e)) "undefined" !== typeof e[n] && (r[n] = d(e[n], t));
                    return r
                }
                if (Array.isArray(e)) {
                    const n = t.get(e);
                    if (void 0 !== n) return n;
                    const r = [];
                    return t.set(e, r), e.forEach((e => {
                        r.push(d(e, t))
                    })), r
                }
                return e
            }
            t.addNonEnumerableProperty = o, t.convertToPlainObject = c, t.dropUndefinedKeys = function(e) {
                return d(e, new Map)
            }, t.extractExceptionKeysForMessage = function(e, t = 40) {
                const n = Object.keys(c(e));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= t) return i.truncate(n[0], t);
                for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : i.truncate(r, t)
                }
                return ""
            }, t.fill = function(e, t, n) {
                if (!(t in e)) return;
                const r = e[t],
                    s = n(r);
                if ("function" === typeof s) try {
                    a(s, r)
                } catch (e) {}
                e[t] = s
            }, t.getOriginalFunction = function(e) {
                return e.__sentry_original__
            }, t.markFunctionWrapped = a, t.objectify = function(e) {
                let t;
                switch (!0) {
                    case void 0 === e || null === e:
                        t = new String(e);
                        break;
                    case "symbol" === typeof e || "bigint" === typeof e:
                        t = Object(e);
                        break;
                    case s.isPrimitive(e):
                        t = new e.constructor(e);
                        break;
                    default:
                        t = e
                }
                return t
            }, t.urlEncode = function(e) {
                return Object.keys(e).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
            }
        },
        56730: (e, t) => {
            function n(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    const r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
                }
                if (t)
                    for (; n--; n) e.unshift("..");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

            function s(e) {
                const t = r.exec(e);
                return t ? t.slice(1) : []
            }

            function i(...e) {
                let t = "",
                    r = !1;
                for (let n = e.length - 1; n >= -1 && !r; n--) {
                    const s = n >= 0 ? e[n] : "/";
                    s && (t = `${s}/${t}`, r = "/" === s.charAt(0))
                }
                return t = n(t.split("/").filter((e => !!e)), !r).join("/"), (r ? "/" : "") + t || "."
            }

            function o(e) {
                let t = 0;
                for (; t < e.length && "" === e[t]; t++);
                let n = e.length - 1;
                for (; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1)
            }

            function a(e) {
                const t = c(e),
                    r = "/" === e.slice(-1);
                let s = n(e.split("/").filter((e => !!e)), !t).join("/");
                return s || t || (s = "."), s && r && (s += "/"), (t ? "/" : "") + s
            }

            function c(e) {
                return "/" === e.charAt(0)
            }
            t.basename = function(e, t) {
                let n = s(e)[2];
                return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n
            }, t.dirname = function(e) {
                const t = s(e),
                    n = t[0];
                let r = t[1];
                return n || r ? (r && (r = r.slice(0, r.length - 1)), n + r) : "."
            }, t.isAbsolute = c, t.join = function(...e) {
                return a(e.join("/"))
            }, t.normalizePath = a, t.relative = function(e, t) {
                e = i(e).slice(1), t = i(t).slice(1);
                const n = o(e.split("/")),
                    r = o(t.split("/")),
                    s = Math.min(n.length, r.length);
                let a = s;
                for (let e = 0; e < s; e++)
                    if (n[e] !== r[e]) {
                        a = e;
                        break
                    }
                let c = [];
                for (let e = a; e < n.length; e++) c.push("..");
                return c = c.concat(r.slice(a)), c.join("/")
            }, t.resolve = i
        },
        20613: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(45676),
                s = n(40738);
            t.makePromiseBuffer = function(e) {
                const t = [];

                function n(e) {
                    return t.splice(t.indexOf(e), 1)[0]
                }
                return {
                    $: t,
                    add: function(i) {
                        if (!(void 0 === e || t.length < e)) return s.rejectedSyncPromise(new r.SentryError("Not adding Promise because buffer limit was reached."));
                        const o = i();
                        return -1 === t.indexOf(o) && t.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {})))), o
                    },
                    drain: function(e) {
                        return new s.SyncPromise(((n, r) => {
                            let i = t.length;
                            if (!i) return n(!0);
                            const o = setTimeout((() => {
                                e && e > 0 && n(!1)
                            }), e);
                            t.forEach((e => {
                                s.resolvedSyncPromise(e).then((() => {
                                    --i || (clearTimeout(o), n(!0))
                                }), r)
                            }))
                        }))
                    }
                }
            }
        },
        85607: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function n(e, t = Date.now()) {
                const n = parseInt(`${e}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                const r = Date.parse(`${e}`);
                return isNaN(r) ? 6e4 : r - t
            }

            function r(e, t) {
                return e[t] || e.all || 0
            }
            t.DEFAULT_RETRY_AFTER = 6e4, t.disabledUntil = r, t.isRateLimited = function(e, t, n = Date.now()) {
                return r(e, t) > n
            }, t.parseRetryAfterHeader = n, t.updateRateLimits = function(e, {
                statusCode: t,
                headers: r
            }, s = Date.now()) {
                const i = { ...e
                    },
                    o = r && r["x-sentry-rate-limits"],
                    a = r && r["retry-after"];
                if (o)
                    for (const e of o.trim().split(",")) {
                        const [t, n] = e.split(":", 2), r = parseInt(t, 10), o = 1e3 * (isNaN(r) ? 60 : r);
                        if (n)
                            for (const e of n.split(";")) i[e] = s + o;
                        else i.all = s + o
                    } else a ? i.all = s + n(a, s) : 429 === t && (i.all = s + 6e4);
                return i
            }
        },
        74851: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291),
                s = n(45196),
                i = n(72038),
                o = {
                    ip: !1,
                    request: !0,
                    transaction: !0,
                    user: !0
                },
                a = ["cookies", "data", "headers", "method", "query_string", "url"],
                c = ["id", "username", "email"];

            function l(e, t = {}) {
                const n = e.method && e.method.toUpperCase();
                let r = "",
                    s = "url";
                t.customRoute || e.route ? (r = t.customRoute || `${e.baseUrl||""}${e.route&&e.route.path}`, s = "route") : (e.originalUrl || e.url) && (r = i.stripUrlQueryAndFragment(e.originalUrl || e.url || ""));
                let o = "";
                return t.method && n && (o += n), t.method && t.path && (o += " "), t.path && r && (o += r), [o, s]
            }

            function u(e, t) {
                const {
                    include: n = a,
                    deps: i
                } = t || {}, o = {}, c = e.headers || {}, l = e.method, u = e.hostname || e.host || c.host || "<no host>", p = `${"https"===e.protocol||e.socket&&e.socket.encrypted?"https":"http"}://${u}${e.originalUrl||e.url||""}`;
                return n.forEach((t => {
                    switch (t) {
                        case "headers":
                            o.headers = c;
                            break;
                        case "method":
                            o.method = l;
                            break;
                        case "url":
                            o.url = p;
                            break;
                        case "cookies":
                            o.cookies = e.cookies || c.cookie && i && i.cookie && i.cookie.parse(c.cookie) || {};
                            break;
                        case "query_string":
                            o.query_string = d(e, i);
                            break;
                        case "data":
                            if ("GET" === l || "HEAD" === l) break;
                            void 0 !== e.body && (o.data = r.isString(e.body) ? e.body : JSON.stringify(s.normalize(e.body)));
                            break;
                        default:
                            ({}).hasOwnProperty.call(e, t) && (o[t] = e[t])
                    }
                })), o
            }

            function d(e, t) {
                let n = e.originalUrl || e.url || "";
                if (n) return n.startsWith("/") && (n = `http://dogs.are.great${n}`), e.query || void 0 !== typeof URL && new URL(n).search.replace("?", "") || t && t.url && t.url.parse(n).query || void 0
            }
            t.addRequestDataToEvent = function(e, t, n) {
                const s = { ...o,
                    ...n && n.include
                };
                if (s.request) {
                    const r = Array.isArray(s.request) ? u(t, {
                        include: s.request,
                        deps: n && n.deps
                    }) : u(t, {
                        deps: n && n.deps
                    });
                    e.request = { ...e.request,
                        ...r
                    }
                }
                if (s.user) {
                    const n = t.user && r.isPlainObject(t.user) ? function(e, t) {
                        const n = {};
                        return (Array.isArray(t) ? t : c).forEach((t => {
                            e && t in e && (n[t] = e[t])
                        })), n
                    }(t.user, s.user) : {};
                    Object.keys(n).length && (e.user = { ...e.user,
                        ...n
                    })
                }
                if (s.ip) {
                    const n = t.ip || t.socket && t.socket.remoteAddress;
                    n && (e.user = { ...e.user,
                        ip_address: n
                    })
                }
                return s.transaction && !e.transaction && (e.transaction = function(e, t) {
                    switch (t) {
                        case "path":
                            return l(e, {
                                path: !0
                            })[0];
                        case "handler":
                            return e.route && e.route.stack && e.route.stack[0] && e.route.stack[0].name || "<anonymous>";
                        default:
                            return l(e, {
                                path: !0,
                                method: !0
                            })[0]
                    }
                }(t, s.transaction)), e
            }, t.addRequestDataToTransaction = function(e, t, n) {
                e && (e.metadata.source && "url" !== e.metadata.source || e.setName(...l(t, {
                    path: !0,
                    method: !0
                })), e.setData("url", t.originalUrl || t.url), t.baseUrl && e.setData("baseUrl", t.baseUrl), e.setData("query", d(t, n)))
            }, t.extractPathForTransaction = l, t.extractRequestData = u
        },
        20707: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = ["fatal", "error", "warning", "log", "info", "debug"];

            function r(e) {
                return "warn" === e ? "warning" : n.includes(e) ? e : "log"
            }
            t.severityFromString = function(e) {
                return r(e)
            }, t.severityLevelFromString = r, t.validSeverityLevels = n
        },
        74246: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = 50;

            function r(...e) {
                const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
                return (e, n = 0) => {
                    const r = [];
                    for (const s of e.split("\n").slice(n)) {
                        if (s.length > 1024) continue;
                        const e = s.replace(/\(error: (.*)\)/, "$1");
                        for (const n of t) {
                            const t = n(e);
                            if (t) {
                                r.push(t);
                                break
                            }
                        }
                    }
                    return s(r)
                }
            }

            function s(e) {
                if (!e.length) return [];
                let t = e;
                const r = t[0].function || "",
                    s = t[t.length - 1].function || "";
                return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (t = t.slice(1)), -1 !== s.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, n).map((e => ({ ...e,
                    filename: e.filename || t[0].filename,
                    function: e.function || "?"
                }))).reverse()
            }
            const i = "<anonymous>";

            function o(e) {
                const t = /^\s*[-]{4,}$/,
                    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
                return r => {
                    if (r.match(t)) return {
                        filename: r
                    };
                    const s = r.match(n);
                    if (!s) return;
                    let i, o, a, c, l;
                    if (s[1]) {
                        a = s[1];
                        let e = a.lastIndexOf(".");
                        if ("." === a[e - 1] && e--, e > 0) {
                            i = a.slice(0, e), o = a.slice(e + 1);
                            const t = i.indexOf(".Module");
                            t > 0 && (a = a.slice(t + 1), i = i.slice(0, t))
                        }
                        c = void 0
                    }
                    o && (c = i, l = o), "<anonymous>" === o && (l = void 0, a = void 0), void 0 === a && (l = l || "<anonymous>", a = c ? `${c}.${l}` : l);
                    const u = s[2] && s[2].startsWith("file://") ? s[2].slice(7) : s[2],
                        d = !("native" === s[5] || u && !u.startsWith("/") && !u.startsWith(".") && 1 !== u.indexOf(":\\")) && void 0 !== u && !u.includes("node_modules/");
                    return {
                        filename: u,
                        module: e ? e(u) : void 0,
                        function: a,
                        lineno: parseInt(s[3], 10) || void 0,
                        colno: parseInt(s[4], 10) || void 0,
                        in_app: d
                    }
                }
            }
            t.createStackParser = r, t.getFunctionName = function(e) {
                try {
                    return e && "function" === typeof e && e.name || i
                } catch (e) {
                    return i
                }
            }, t.nodeStackLineParser = function(e) {
                return [90, o(e)]
            }, t.stackParserFromStackParserOptions = function(e) {
                return Array.isArray(e) ? r(...e) : e
            }, t.stripSentryFramesAndReverse = s
        },
        86437: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291);

            function s(e, t, n = !1) {
                return !!r.isString(e) && (r.isRegExp(t) ? t.test(e) : !!r.isString(t) && (n ? e === t : e.includes(t)))
            }
            t.escapeStringForRegex = function(e) {
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }, t.isMatchingPattern = s, t.safeJoin = function(e, t) {
                if (!Array.isArray(e)) return "";
                const n = [];
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    try {
                        n.push(String(r))
                    } catch (e) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }, t.snipLine = function(e, t) {
                let n = e;
                const r = n.length;
                if (r <= 150) return n;
                t > r && (t = r);
                let s = Math.max(t - 60, 0);
                s < 5 && (s = 0);
                let i = Math.min(s + 140, r);
                return i > r - 5 && (i = r), i === r && (s = Math.max(i - 140, 0)), n = n.slice(s, i), s > 0 && (n = `'{snip} ${n}`), i < r && (n += " {snip}"), n
            }, t.stringMatchesSomePattern = function(e, t = [], n = !1) {
                return t.some((t => s(e, t, n)))
            }, t.truncate = function(e, t = 0) {
                return "string" !== typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
            }
        },
        61636: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(9673),
                s = n(21188).getGlobalObject();

            function i() {
                if (!("fetch" in s)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (e) {
                    return !1
                }
            }

            function o(e) {
                return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
            }
            t.isNativeFetch = o, t.supportsDOMError = function() {
                try {
                    return new DOMError(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsDOMException = function() {
                try {
                    return new DOMException(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsErrorEvent = function() {
                try {
                    return new ErrorEvent(""), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsFetch = i, t.supportsHistory = function() {
                const e = s.chrome,
                    t = e && e.app && e.app.runtime,
                    n = "history" in s && !!s.history.pushState && !!s.history.replaceState;
                return !t && n
            }, t.supportsNativeFetch = function() {
                if (!i()) return !1;
                if (o(s.fetch)) return !0;
                let e = !1;
                const t = s.document;
                if (t && "function" === typeof t.createElement) try {
                    const n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = o(n.contentWindow.fetch)), t.head.removeChild(n)
                } catch (e) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
                return e
            }, t.supportsReferrerPolicy = function() {
                if (!i()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (e) {
                    return !1
                }
            }, t.supportsReportingObserver = function() {
                return "ReportingObserver" in s
            }
        },
        40738: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(20291);
            var s;
            ! function(e) {
                e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED"
            }(s || (s = {}));
            class i {
                __init() {
                    this._state = s.PENDING
                }
                __init2() {
                    this._handlers = []
                }
                constructor(e) {
                    i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), i.prototype.__init4.call(this), i.prototype.__init5.call(this), i.prototype.__init6.call(this);
                    try {
                        e(this._resolve, this._reject)
                    } catch (e) {
                        this._reject(e)
                    }
                }
                then(e, t) {
                    return new i(((n, r) => {
                        this._handlers.push([!1, t => {
                            if (e) try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            } else n(t)
                        }, e => {
                            if (t) try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            } else r(e)
                        }]), this._executeHandlers()
                    }))
                } catch (e) {
                    return this.then((e => e), e)
                } finally(e) {
                    return new i(((t, n) => {
                        let r, s;
                        return this.then((t => {
                            s = !1, r = t, e && e()
                        }), (t => {
                            s = !0, r = t, e && e()
                        })).then((() => {
                            s ? n(r) : t(r)
                        }))
                    }))
                }
                __init3() {
                    this._resolve = e => {
                        this._setResult(s.RESOLVED, e)
                    }
                }
                __init4() {
                    this._reject = e => {
                        this._setResult(s.REJECTED, e)
                    }
                }
                __init5() {
                    this._setResult = (e, t) => {
                        this._state === s.PENDING && (r.isThenable(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()))
                    }
                }
                __init6() {
                    this._executeHandlers = () => {
                        if (this._state === s.PENDING) return;
                        const e = this._handlers.slice();
                        this._handlers = [], e.forEach((e => {
                            e[0] || (this._state === s.RESOLVED && e[1](this._value), this._state === s.REJECTED && e[2](this._value), e[0] = !0)
                        }))
                    }
                }
            }
            t.SyncPromise = i, t.rejectedSyncPromise = function(e) {
                return new i(((t, n) => {
                    n(e)
                }))
            }, t.resolvedSyncPromise = function(e) {
                return new i((t => {
                    t(e)
                }))
            }
        },
        82429: (e, t, n) => {
            e = n.nmd(e), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(19097),
                s = n(21188).getGlobalObject(),
                i = {
                    nowSeconds: () => Date.now() / 1e3
                },
                o = r.isNodeEnv() ? function() {
                    try {
                        return r.dynamicRequire(e, "perf_hooks").performance
                    } catch (e) {
                        return
                    }
                }() : function() {
                    const {
                        performance: e
                    } = s;
                    if (e && e.now) return {
                        now: () => e.now(),
                        timeOrigin: Date.now() - e.now()
                    }
                }(),
                a = void 0 === o ? i : {
                    nowSeconds: () => (o.timeOrigin + o.now()) / 1e3
                },
                c = i.nowSeconds.bind(i),
                l = a.nowSeconds.bind(a),
                u = l,
                d = void 0 !== o;
            t._browserPerformanceTimeOriginMode = void 0;
            const p = (() => {
                const {
                    performance: e
                } = s;
                if (!e || !e.now) return void(t._browserPerformanceTimeOriginMode = "none");
                const n = 36e5,
                    r = e.now(),
                    i = Date.now(),
                    o = e.timeOrigin ? Math.abs(e.timeOrigin + r - i) : n,
                    a = o < n,
                    c = e.timing && e.timing.navigationStart,
                    l = "number" === typeof c ? Math.abs(c + r - i) : n;
                return a || l < n ? o <= l ? (t._browserPerformanceTimeOriginMode = "timeOrigin", e.timeOrigin) : (t._browserPerformanceTimeOriginMode = "navigationStart", c) : (t._browserPerformanceTimeOriginMode = "dateNow", i)
            })();
            t.browserPerformanceTimeOrigin = p, t.dateTimestampInSeconds = c, t.timestampInSeconds = l, t.timestampWithMs = u, t.usingPerformanceAPI = d
        },
        17982: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
            t.TRACEPARENT_REGEXP = n, t.extractTraceparentData = function(e) {
                const t = e.match(n);
                if (!e || !t) return;
                let r;
                return "1" === t[3] ? r = !0 : "0" === t[3] && (r = !1), {
                    traceId: t[1],
                    parentSampled: r,
                    parentSpanId: t[2]
                }
            }
        },
        72038: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getNumberOfUrlSegments = function(e) {
                return e.split(/\\?\//).filter((e => e.length > 0 && "," !== e)).length
            }, t.parseUrl = function(e) {
                if (!e) return {};
                const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                const n = t[6] || "",
                    r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    relative: t[5] + n + r
                }
            }, t.stripUrlQueryAndFragment = function(e) {
                return e.split(/[\?#]/, 1)[0]
            }
        },
        21188: (e, t, n) => {
            function r(e) {
                return e && e.Math == Math ? e : void 0
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};
            t.GLOBAL_OBJ = s, t.getGlobalObject = function() {
                return s
            }, t.getGlobalSingleton = function(e, t, n) {
                const r = n || s,
                    i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[e] || (i[e] = t())
            }
        }
    }
]);