"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [6280], {
        57854: (t, e, r) => {
            r.d(e, {
                Gr: () => E,
                Ny: () => T
            });
            const s = {
                    staleTTL: 6e4,
                    cacheKey: "gbFeaturesCache",
                    backgroundSync: !0
                },
                n = {
                    fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
                    SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
                    EventSource: globalThis.EventSource
                };
            try {
                globalThis.localStorage && (n.localStorage = globalThis.localStorage)
            } catch (t) {}
            const i = new Map;
            let a = !1;
            const o = new Map,
                u = new Map,
                c = new Map,
                h = new Set;

            function l(t) {
                const [e, r] = t.getApiInfo();
                return ["".concat(e, "||").concat(r), e, r]
            }

            function f(t, e) {
                const r = e.dateUpdated || "",
                    a = new Date(Date.now() + s.staleTTL),
                    u = o.get(t);
                if (u && r && u.version === r) return void(u.staleAt = a);
                o.set(t, {
                    data: e,
                    version: r,
                    staleAt: a
                }), async function() {
                    try {
                        if (!n.localStorage) return;
                        await n.localStorage.setItem(s.cacheKey, JSON.stringify(Array.from(o.entries())))
                    } catch (t) {}
                }();
                const c = i.get(t);
                c && c.forEach((t => d(t, e)))
            }
            async function d(t, e) {
                await (e.encryptedFeatures ? t.setEncryptedFeatures(e.encryptedFeatures, void 0, n.SubtleCrypto) : t.setFeatures(e.features || t.getFeatures()))
            }
            async function g(t) {
                const [e, r, s] = l(t), i = r + "/api/features/" + s;
                let a = u.get(e);
                return a || (a = n.fetch(i).then((t => ("enabled" === t.headers.get("x-sse-support") && h.add(e), t.json()))).then((r => (f(e, r), _(t), u.delete(e), r))).catch((t => (u.delete(e), Promise.resolve({})))), u.set(e, a)), await a
            }

            function _(t) {
                const [e, r, i] = l(t);
                if (s.backgroundSync && h.has(e) && n.EventSource) {
                    if (c.has(e)) return;
                    const t = {
                        src: new n.EventSource("".concat(r, "/sub/").concat(i)),
                        cb: r => {
                            try {
                                const s = JSON.parse(r.data);
                                f(e, s), t.errors = 0
                            } catch (r) {
                                p(t, e)
                            }
                        },
                        errors: 0
                    };
                    c.set(e, t), t.src.addEventListener("features", t.cb), t.src.onerror = () => {
                        p(t, e)
                    }
                }
            }

            function p(t, e) {
                t.errors++, (t.errors > 3 || 2 === t.src.readyState) && function(t, e) {
                    t.src.onerror = null, t.src.close(), c.delete(e)
                }(t, e)
            }

            function y(t) {
                let e = 2166136261;
                const r = t.length;
                for (let s = 0; s < r; s++) e ^= t.charCodeAt(s), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                return e >>> 0
            }

            function b(t, e, r) {
                return 2 === r ? y(y(t + e) + "") % 1e4 / 1e4 : 1 === r ? y(e + t) % 1e3 / 1e3 : -1
            }

            function w(t, e) {
                return t >= e[0] && t < e[1]
            }
            const v = {};

            function m(t, e) {
                if ("$or" in e) return R(t, e.$or);
                if ("$nor" in e) return !R(t, e.$nor);
                if ("$and" in e) return function(t, e) {
                    for (let r = 0; r < e.length; r++)
                        if (!m(t, e[r])) return !1;
                    return !0
                }(t, e.$and);
                if ("$not" in e) return !m(t, e.$not);
                for (const [r, s] of Object.entries(e))
                    if (!k(s, x(t, r))) return !1;
                return !0
            }

            function x(t, e) {
                const r = e.split(".");
                let s = t;
                for (let t = 0; t < r.length; t++) {
                    if (!s || "object" !== typeof s || !(r[t] in s)) return null;
                    s = s[r[t]]
                }
                return s
            }

            function k(t, e) {
                if ("string" === typeof t) return e + "" === t;
                if ("number" === typeof t) return 1 * e === t;
                if ("boolean" === typeof t) return !!e === t;
                if (Array.isArray(t) || !A(t)) return JSON.stringify(e) === JSON.stringify(t);
                for (const r in t)
                    if (!F(r, e, t[r])) return !1;
                return !0
            }

            function A(t) {
                const e = Object.keys(t);
                return e.length > 0 && e.filter((t => "$" === t[0])).length === e.length
            }

            function F(t, e, r) {
                switch (t) {
                    case "$eq":
                        return e === r;
                    case "$ne":
                        return e !== r;
                    case "$lt":
                        return e < r;
                    case "$lte":
                        return e <= r;
                    case "$gt":
                        return e > r;
                    case "$gte":
                        return e >= r;
                    case "$exists":
                        return r ? null !== e : null === e;
                    case "$in":
                        return r.includes(e);
                    case "$nin":
                        return !r.includes(e);
                    case "$not":
                        return !k(r, e);
                    case "$size":
                        return !!Array.isArray(e) && k(r, e.length);
                    case "$elemMatch":
                        return function(t, e) {
                            if (!Array.isArray(t)) return !1;
                            const r = A(e) ? t => k(e, t) : t => m(t, e);
                            for (let e = 0; e < t.length; e++)
                                if (t[e] && r(t[e])) return !0;
                            return !1
                        }(e, r);
                    case "$all":
                        if (!Array.isArray(e)) return !1;
                        for (let t = 0; t < r.length; t++) {
                            let s = !1;
                            for (let n = 0; n < e.length; n++)
                                if (k(r[t], e[n])) {
                                    s = !0;
                                    break
                                }
                            if (!s) return !1
                        }
                        return !0;
                    case "$regex":
                        try {
                            return (s = r, v[s] || (v[s] = new RegExp(s.replace(/([^\\])\//g, "$1\\/"))), v[s]).test(e)
                        } catch (t) {
                            return !1
                        }
                    case "$type":
                        return function(t) {
                            if (null === t) return "null";
                            if (Array.isArray(t)) return "array";
                            const e = typeof t;
                            return ["string", "number", "boolean", "object", "undefined"].includes(e) ? e : "unknown"
                        }(e) === r;
                    default:
                        return console.error("Unknown operator: " + t), !1
                }
                var s
            }

            function R(t, e) {
                if (!e.length) return !0;
                for (let r = 0; r < e.length; r++)
                    if (m(t, e[r])) return !0;
                return !1
            }
            const S = "undefined" !== typeof window && "undefined" !== typeof document,
                V = t => Uint8Array.from(atob(t), (t => t.charCodeAt(0)));
            class E {
                constructor(t) {
                    t = t || {}, this._ctx = this.context = t, this._renderer = null, this._trackedExperiments = new Set, this._trackedFeatures = {}, this.debug = !1, this._subscriptions = new Set, this._rtQueue = [], this._rtTimer = 0, this.ready = !1, this._assigned = new Map, this._forcedFeatureValues = new Map, this._attributeOverrides = {}, t.features && (this.ready = !0), S && t.enableDevMode && (window._growthbook = this, document.dispatchEvent(new Event("gbloaded"))), t.clientKey && this._refresh({}, !0, !1)
                }
                async loadFeatures(t) {
                    await this._refresh(t, !0, !0), t && t.autoRefresh && function(t) {
                        const [e] = l(t), r = i.get(e) || new Set;
                        r.add(t), i.set(e, r)
                    }(this)
                }
                async refreshFeatures(t) {
                    await this._refresh(t, !1, !0)
                }
                getApiInfo() {
                    return [(this._ctx.apiHost || "https://cdn.growthbook.io").replace(/\/*$/, ""), this._ctx.clientKey || ""]
                }
                async _refresh(t, e, r) {
                    if (t = t || {}, !this._ctx.clientKey) throw new Error("Missing clientKey");
                    await async function(t, e, r, i, u) {
                        const c = await async function(t, e, r, i) {
                            const [u] = l(t), c = new Date;
                            await async function() {
                                if (!a) {
                                    a = !0;
                                    try {
                                        if (n.localStorage) {
                                            const t = await n.localStorage.getItem(s.cacheKey);
                                            if (t) {
                                                const e = JSON.parse(t);
                                                e && Array.isArray(e) && e.forEach((t => {
                                                    let [e, r] = t;
                                                    o.set(e, { ...r,
                                                        staleAt: new Date(r.staleAt)
                                                    })
                                                }))
                                            }
                                        }
                                    } catch (t) {}
                                }
                            }();
                            const h = o.get(u);
                            if (h && !i && (e || h.staleAt > c)) return h.staleAt < c ? g(t) : _(t), h.data; {
                                const e = await
                                function(t, e) {
                                    return new Promise((r => {
                                        let s, n = !1;
                                        const i = t => {
                                            n || (n = !0, s && clearTimeout(s), r(t || null))
                                        };
                                        e && (s = setTimeout((() => i()), e)), t.then((t => i(t))).catch((() => i()))
                                    }))
                                }(g(t), r);
                                return e
                            }
                        }(t, i, e, r);
                        u && c && await d(t, c)
                    }(this, t.timeout, t.skipCache || this._ctx.enableDevMode, e, r)
                }
                _render() {
                    this._renderer && this._renderer()
                }
                setFeatures(t) {
                    this._ctx.features = t, this.ready = !0, this._render()
                }
                async setEncryptedFeatures(t, e, r) {
                    if (e = e || this._ctx.decryptionKey || "", !(r = r || globalThis.crypto && globalThis.crypto.subtle)) throw new Error("No SubtleCrypto implementation found");
                    try {
                        const s = await r.importKey("raw", V(e), {
                                name: "AES-CBC",
                                length: 128
                            }, !0, ["encrypt", "decrypt"]),
                            [n, i] = t.split("."),
                            a = await r.decrypt({
                                name: "AES-CBC",
                                iv: V(n)
                            }, s, V(i));
                        this.setFeatures(JSON.parse((new TextDecoder).decode(a)))
                    } catch (t) {
                        throw new Error("Failed to decrypt features")
                    }
                }
                setAttributes(t) {
                    this._ctx.attributes = t, this._render()
                }
                setAttributeOverrides(t) {
                    this._attributeOverrides = t, this._render()
                }
                setForcedVariations(t) {
                    this._ctx.forcedVariations = t || {}, this._render()
                }
                setForcedFeatures(t) {
                    this._forcedFeatureValues = t, this._render()
                }
                getAttributes() {
                    return { ...this._ctx.attributes,
                        ...this._attributeOverrides
                    }
                }
                getFeatures() {
                    return this._ctx.features || {}
                }
                subscribe(t) {
                    return this._subscriptions.add(t), () => {
                        this._subscriptions.delete(t)
                    }
                }
                getAllResults() {
                    return new Map(this._assigned)
                }
                destroy() {
                    var t;
                    this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._trackedFeatures = {}, this._rtQueue = [], this._rtTimer && clearTimeout(this._rtTimer), t = this, i.forEach((e => e.delete(t))), S && window._growthbook === this && delete window._growthbook
                }
                setRenderer(t) {
                    this._renderer = t
                }
                forceVariation(t, e) {
                    this._ctx.forcedVariations = this._ctx.forcedVariations || {}, this._ctx.forcedVariations[t] = e, this._render()
                }
                run(t) {
                    const e = this._run(t, null);
                    return this._fireSubscriptions(t, e), e
                }
                _fireSubscriptions(t, e) {
                    const r = t.key,
                        s = this._assigned.get(r);
                    s && s.result.inExperiment === e.inExperiment && s.result.variationId === e.variationId || (this._assigned.set(r, {
                        experiment: t,
                        result: e
                    }), this._subscriptions.forEach((r => {
                        try {
                            r(t, e)
                        } catch (t) {
                            console.error(t)
                        }
                    })))
                }
                _trackFeatureUsage(t, e) {
                    if ("override" === e.source) return;
                    const r = JSON.stringify(e.value);
                    if (this._trackedFeatures[t] !== r) {
                        if (this._trackedFeatures[t] = r, this._ctx.onFeatureUsage) try {
                            this._ctx.onFeatureUsage(t, e)
                        } catch (t) {}
                        S && window.fetch && (this._rtQueue.push({
                            key: t,
                            on: e.on
                        }), this._rtTimer || (this._rtTimer = window.setTimeout((() => {
                            this._rtTimer = 0;
                            const t = [...this._rtQueue];
                            this._rtQueue = [], this._ctx.realtimeKey && window.fetch("https://rt.growthbook.io/?key=".concat(this._ctx.realtimeKey, "&events=").concat(encodeURIComponent(JSON.stringify(t))), {
                                cache: "no-cache",
                                mode: "no-cors"
                            }).catch((() => {}))
                        }), this._ctx.realtimeInterval || 2e3)))
                    }
                }
                _getFeatureResult(t, e, r, s, n, i) {
                    const a = {
                        value: e,
                        on: !!e,
                        off: !e,
                        source: r,
                        ruleId: s || ""
                    };
                    return n && (a.experiment = n), i && (a.experimentResult = i), this._trackFeatureUsage(t, a), a
                }
                isOn(t) {
                    return this.evalFeature(t).on
                }
                isOff(t) {
                    return this.evalFeature(t).off
                }
                getFeatureValue(t, e) {
                    const r = this.evalFeature(t).value;
                    return null === r ? e : r
                }
                feature(t) {
                    return this.evalFeature(t)
                }
                evalFeature(t) {
                    if (this._forcedFeatureValues.has(t)) return this._getFeatureResult(t, this._forcedFeatureValues.get(t), "override");
                    if (!this._ctx.features || !this._ctx.features[t]) return this._getFeatureResult(t, null, "unknownFeature");
                    const e = this._ctx.features[t];
                    if (e.rules)
                        for (const r of e.rules) {
                            if (r.condition && !this._conditionPasses(r.condition)) continue;
                            if (r.filters && this._isFilteredOut(r.filters)) continue;
                            if ("force" in r) {
                                if (!this._isIncludedInRollout(r.seed || t, r.hashAttribute, r.range, r.coverage, r.hashVersion)) continue;
                                return r.tracks && r.tracks.forEach((t => {
                                    this._track(t.experiment, t.result)
                                })), this._getFeatureResult(t, r.force, "force", r.id)
                            }
                            if (!r.variations) continue;
                            const e = {
                                variations: r.variations,
                                key: r.key || t
                            };
                            "coverage" in r && (e.coverage = r.coverage), r.weights && (e.weights = r.weights), r.hashAttribute && (e.hashAttribute = r.hashAttribute), r.namespace && (e.namespace = r.namespace), r.meta && (e.meta = r.meta), r.ranges && (e.ranges = r.ranges), r.name && (e.name = r.name), r.phase && (e.phase = r.phase), r.seed && (e.seed = r.seed), r.hashVersion && (e.hashVersion = r.hashVersion), r.filters && (e.filters = r.filters);
                            const s = this._run(e, t);
                            if (this._fireSubscriptions(e, s), s.inExperiment && !s.passthrough) return this._getFeatureResult(t, s.value, "experiment", r.id, e, s)
                        }
                    return this._getFeatureResult(t, void 0 === e.defaultValue ? null : e.defaultValue, "defaultValue")
                }
                _isIncludedInRollout(t, e, r, s, n) {
                    if (!r && void 0 === s) return !0;
                    const {
                        hashValue: i
                    } = this._getHashAttribute(e);
                    if (!i) return !1;
                    const a = b(t, i, n || 1);
                    return r ? w(a, r) : void 0 === s || a <= s
                }
                _conditionPasses(t) {
                    return m(this.getAttributes(), t)
                }
                _isFilteredOut(t) {
                    return t.some((t => {
                        const {
                            hashValue: e
                        } = this._getHashAttribute(t.attribute);
                        if (!e) return !0;
                        const r = b(t.seed, e, t.hashVersion || 2);
                        return !t.ranges.some((t => w(r, t)))
                    }))
                }
                _run(t, e) {
                    const r = t.key,
                        s = t.variations.length;
                    if (s < 2) return this._getResult(t, -1, !1, e);
                    if (!1 === this._ctx.enabled) return this._getResult(t, -1, !1, e);
                    t = this._mergeOverrides(t);
                    const n = function(t, e, r) {
                        if (!e) return null;
                        const s = e.split("?")[1];
                        if (!s) return null;
                        const n = s.replace(/#.*/, "").split("&").map((t => t.split("=", 2))).filter((e => {
                            let [r] = e;
                            return r === t
                        })).map((t => {
                            let [, e] = t;
                            return parseInt(e)
                        }));
                        return n.length > 0 && n[0] >= 0 && n[0] < r ? n[0] : null
                    }(r, this._getContextUrl(), s);
                    if (null !== n) return this._getResult(t, n, !1, e);
                    if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
                        const s = this._ctx.forcedVariations[r];
                        return this._getResult(t, s, !1, e)
                    }
                    if ("draft" === t.status || !1 === t.active) return this._getResult(t, -1, !1, e);
                    const {
                        hashValue: i
                    } = this._getHashAttribute(t.hashAttribute);
                    if (!i) return this._getResult(t, -1, !1, e);
                    if (t.filters) {
                        if (this._isFilteredOut(t.filters)) return this._getResult(t, -1, !1, e)
                    } else if (t.namespace && ! function(t, e) {
                            const r = b("__" + e[0], t, 1);
                            return r >= e[1] && r < e[2]
                        }(i, t.namespace)) return this._getResult(t, -1, !1, e);
                    if (t.include && ! function(t) {
                            try {
                                return t()
                            } catch (t) {
                                return console.error(t), !1
                            }
                        }(t.include)) return this._getResult(t, -1, !1, e);
                    if (t.condition && !this._conditionPasses(t.condition)) return this._getResult(t, -1, !1, e);
                    if (t.groups && !this._hasGroupOverlap(t.groups)) return this._getResult(t, -1, !1, e);
                    if (t.url && !this._urlIsValid(t.url)) return this._getResult(t, -1, !1, e);
                    const a = b(t.seed || r, i, t.hashVersion || 1),
                        o = function(t, e) {
                            for (let r = 0; r < e.length; r++)
                                if (w(t, e[r])) return r;
                            return -1
                        }(a, t.ranges || function(t, e, r) {
                            (e = void 0 === e ? 1 : e) < 0 ? e = 0 : e > 1 && (e = 1);
                            const s = (n = t) <= 0 ? [] : new Array(n).fill(1 / n);
                            var n;
                            (r = r || s).length !== t && (r = s);
                            const i = r.reduce(((t, e) => e + t), 0);
                            (i < .99 || i > 1.01) && (r = s);
                            let a = 0;
                            return r.map((t => {
                                const r = a;
                                return a += t, [r, r + e * t]
                            }))
                        }(s, void 0 === t.coverage ? 1 : t.coverage, t.weights));
                    if (o < 0) return this._getResult(t, -1, !1, e);
                    if ("force" in t) return this._getResult(t, void 0 === t.force ? -1 : t.force, !1, e);
                    if (this._ctx.qaMode) return this._getResult(t, -1, !1, e);
                    if ("stopped" === t.status) return this._getResult(t, -1, !1, e);
                    const u = this._getResult(t, o, !0, e, a);
                    return this._track(t, u), u
                }
                log(t, e) {
                    this.debug && (this._ctx.log ? this._ctx.log(t, e) : console.log(t, e))
                }
                _track(t, e) {
                    if (!this._ctx.trackingCallback) return;
                    const r = t.key,
                        s = e.hashAttribute + e.hashValue + r + e.variationId;
                    if (!this._trackedExperiments.has(s)) {
                        this._trackedExperiments.add(s);
                        try {
                            this._ctx.trackingCallback(t, e)
                        } catch (t) {
                            console.error(t)
                        }
                    }
                }
                _mergeOverrides(t) {
                    const e = t.key,
                        r = this._ctx.overrides;
                    return r && r[e] && "string" === typeof(t = Object.assign({}, t, r[e])).url && (t.url = function(t) {
                        try {
                            const e = t.replace(/([^\\])\//g, "$1\\/");
                            return new RegExp(e)
                        } catch (t) {
                            return void console.error(t)
                        }
                    }(t.url)), t
                }
                _getHashAttribute(t) {
                    const e = t || "id";
                    let r = "";
                    return this._attributeOverrides[e] ? r = this._attributeOverrides[e] : this._ctx.attributes ? r = this._ctx.attributes[e] || "" : this._ctx.user && (r = this._ctx.user[e] || ""), {
                        hashAttribute: e,
                        hashValue: r
                    }
                }
                _getResult(t, e, r, s, n) {
                    let i = !0;
                    (e < 0 || e >= t.variations.length) && (e = 0, i = !1);
                    const {
                        hashAttribute: a,
                        hashValue: o
                    } = this._getHashAttribute(t.hashAttribute), u = t.meta ? t.meta[e] : {}, c = {
                        key: u.key || "" + e,
                        featureId: s,
                        inExperiment: i,
                        hashUsed: r,
                        variationId: e,
                        value: t.variations[e],
                        hashAttribute: a,
                        hashValue: o
                    };
                    return u.name && (c.name = u.name), void 0 !== n && (c.bucket = n), u.passthrough && (c.passthrough = u.passthrough), c
                }
                _getContextUrl() {
                    return this._ctx.url || (S ? window.location.href : "")
                }
                _urlIsValid(t) {
                    const e = this._getContextUrl();
                    if (!e) return !1;
                    const r = e.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
                    return !!t.test(e) || !!t.test(r)
                }
                _hasGroupOverlap(t) {
                    const e = this._ctx.groups || {};
                    for (let r = 0; r < t.length; r++)
                        if (e[t[r]]) return !0;
                    return !1
                }
            }
            var $ = r(67294);
            const O = $.createContext({}),
                T = ({
                    children: t,
                    growthbook: e
                }) => {
                    const [r, s] = $.useState(0);
                    return $.useEffect((() => {
                        if (e && e.setRenderer) return e.setRenderer((() => {
                            s((t => t + 1))
                        })), () => {
                            e.setRenderer((() => {}))
                        }
                    }), [e]), $.createElement(O.Provider, {
                        value: {
                            growthbook: e
                        }
                    }, t)
                }
        }
    }
]);