"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [5589], {
        74444: (e, t, n) => {
            n.d(t, {
                BH: () => u,
                L: () => s,
                LL: () => g,
                ZR: () => p,
                aH: () => l,
                eu: () => d,
                hl: () => h,
                m9: () => w,
                vZ: () => b,
                zI: () => f
            });
            var r = n(34155);
            const i = function(e) {
                    const t = [];
                    let n = 0;
                    for (let r = 0; r < e.length; r++) {
                        let i = e.charCodeAt(r);
                        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < e.length && 56320 === (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                    }
                    return t
                },
                a = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" === typeof atob,
                    encodeByteArray(e, t) {
                        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                            r = [];
                        for (let t = 0; t < e.length; t += 3) {
                            const i = e[t],
                                a = t + 1 < e.length,
                                o = a ? e[t + 1] : 0,
                                s = t + 2 < e.length,
                                c = s ? e[t + 2] : 0,
                                l = i >> 2,
                                u = (3 & i) << 4 | o >> 4;
                            let h = (15 & o) << 2 | c >> 6,
                                d = 63 & c;
                            s || (d = 64, a || (h = 64)), r.push(n[l], n[u], n[h], n[d])
                        }
                        return r.join("")
                    },
                    encodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(i(e), t)
                    },
                    decodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                            const t = [];
                            let n = 0,
                                r = 0;
                            for (; n < e.length;) {
                                const i = e[n++];
                                if (i < 128) t[r++] = String.fromCharCode(i);
                                else if (i > 191 && i < 224) {
                                    const a = e[n++];
                                    t[r++] = String.fromCharCode((31 & i) << 6 | 63 & a)
                                } else if (i > 239 && i < 365) {
                                    const a = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                    t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                                } else {
                                    const a = e[n++],
                                        o = e[n++];
                                    t[r++] = String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & o)
                                }
                            }
                            return t.join("")
                        }(this.decodeStringToByteArray(e, t))
                    },
                    decodeStringToByteArray(e, t) {
                        this.init_();
                        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                            r = [];
                        for (let t = 0; t < e.length;) {
                            const i = n[e.charAt(t++)],
                                a = t < e.length ? n[e.charAt(t)] : 0;
                            ++t;
                            const s = t < e.length ? n[e.charAt(t)] : 64;
                            ++t;
                            const c = t < e.length ? n[e.charAt(t)] : 64;
                            if (++t, null == i || null == a || null == s || null == c) throw new o;
                            const l = i << 2 | a >> 4;
                            if (r.push(l), 64 !== s) {
                                const e = a << 4 & 240 | s >> 2;
                                if (r.push(e), 64 !== c) {
                                    const e = s << 6 & 192 | c;
                                    r.push(e)
                                }
                            }
                        }
                        return r
                    },
                    init_() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                        }
                    }
                };
            class o extends Error {
                constructor() {
                    super(...arguments), this.name = "DecodeBase64StringError"
                }
            }
            const s = function(e) {
                    return function(e) {
                        const t = i(e);
                        return a.encodeByteArray(t, !0)
                    }(e).replace(/\./g, "")
                },
                c = () => {
                    try {
                        return function() {
                            if ("undefined" !== typeof self) return self;
                            if ("undefined" !== typeof window) return window;
                            if ("undefined" !== typeof n.g) return n.g;
                            throw new Error("Unable to locate global object.")
                        }().__FIREBASE_DEFAULTS__ || (() => {
                            if ("undefined" === typeof r || "undefined" === typeof r.env) return;
                            const e = r.env.__FIREBASE_DEFAULTS__;
                            return e ? JSON.parse(e) : void 0
                        })() || (() => {
                            if ("undefined" === typeof document) return;
                            let e;
                            try {
                                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                            } catch (e) {
                                return
                            }
                            const t = e && function(e) {
                                try {
                                    return a.decodeString(e, !0)
                                } catch (e) {
                                    console.error("base64Decode failed: ", e)
                                }
                                return null
                            }(e[1]);
                            return t && JSON.parse(t)
                        })()
                    } catch (e) {
                        return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
                    }
                },
                l = () => {
                    var e;
                    return null === (e = c()) || void 0 === e ? void 0 : e.config
                };
            class u {
                constructor() {
                    this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
                        this.resolve = e, this.reject = t
                    }))
                }
                wrapCallback(e) {
                    return (t, n) => {
                        t ? this.reject(t) : this.resolve(n), "function" === typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
                    }
                }
            }

            function h() {
                try {
                    return "object" === typeof indexedDB
                } catch (e) {
                    return !1
                }
            }

            function d() {
                return new Promise(((e, t) => {
                    try {
                        let n = !0;
                        const r = "validate-browser-context-for-indexeddb-analytics-module",
                            i = self.indexedDB.open(r);
                        i.onsuccess = () => {
                            i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                        }, i.onupgradeneeded = () => {
                            n = !1
                        }, i.onerror = () => {
                            var e;
                            t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                        }
                    } catch (e) {
                        t(e)
                    }
                }))
            }

            function f() {
                return !("undefined" === typeof navigator || !navigator.cookieEnabled)
            }
            class p extends Error {
                constructor(e, t, n) {
                    super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, p.prototype), Error.captureStackTrace && Error.captureStackTrace(this, g.prototype.create)
                }
            }
            class g {
                constructor(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n
                }
                create(e, ...t) {
                    const n = t[0] || {},
                        r = `${this.service}/${e}`,
                        i = this.errors[e],
                        a = i ? function(e, t) {
                            return e.replace(m, ((e, n) => {
                                const r = t[n];
                                return null != r ? String(r) : `<${n}?>`
                            }))
                        }(i, n) : "Error",
                        o = `${this.serviceName}: ${a} (${r}).`;
                    return new p(r, o, n)
                }
            }
            const m = /\{\$([^}]+)}/g;

            function b(e, t) {
                if (e === t) return !0;
                const n = Object.keys(e),
                    r = Object.keys(t);
                for (const i of n) {
                    if (!r.includes(i)) return !1;
                    const n = e[i],
                        a = t[i];
                    if (v(n) && v(a)) {
                        if (!b(n, a)) return !1
                    } else if (n !== a) return !1
                }
                for (const e of r)
                    if (!n.includes(e)) return !1;
                return !0
            }

            function v(e) {
                return null !== e && "object" === typeof e
            }

            function w(e) {
                return e && e._delegate ? e._delegate : e
            }
        },
        32238: (e, t, n) => {
            n.d(t, {
                KN: () => E,
                Mq: () => y,
                Xd: () => m,
                ZF: () => _,
                qX: () => b
            });
            var r = n(8463),
                i = n(53333),
                a = n(74444),
                o = n(4424);
            class s {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    return this.container.getProviders().map((e => {
                        if (function(e) {
                                const t = e.getComponent();
                                return "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
                            }(e)) {
                            const t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                        return null
                    })).filter((e => e)).join(" ")
                }
            }
            const c = "@firebase/app",
                l = "0.9.25",
                u = new i.Yd("@firebase/app"),
                h = "[DEFAULT]",
                d = {
                    [c]: "fire-core",
                    "@firebase/app-compat": "fire-core-compat",
                    "@firebase/analytics": "fire-analytics",
                    "@firebase/analytics-compat": "fire-analytics-compat",
                    "@firebase/app-check": "fire-app-check",
                    "@firebase/app-check-compat": "fire-app-check-compat",
                    "@firebase/auth": "fire-auth",
                    "@firebase/auth-compat": "fire-auth-compat",
                    "@firebase/database": "fire-rtdb",
                    "@firebase/database-compat": "fire-rtdb-compat",
                    "@firebase/functions": "fire-fn",
                    "@firebase/functions-compat": "fire-fn-compat",
                    "@firebase/installations": "fire-iid",
                    "@firebase/installations-compat": "fire-iid-compat",
                    "@firebase/messaging": "fire-fcm",
                    "@firebase/messaging-compat": "fire-fcm-compat",
                    "@firebase/performance": "fire-perf",
                    "@firebase/performance-compat": "fire-perf-compat",
                    "@firebase/remote-config": "fire-rc",
                    "@firebase/remote-config-compat": "fire-rc-compat",
                    "@firebase/storage": "fire-gcs",
                    "@firebase/storage-compat": "fire-gcs-compat",
                    "@firebase/firestore": "fire-fst",
                    "@firebase/firestore-compat": "fire-fst-compat",
                    "fire-js": "fire-js",
                    firebase: "fire-js-all"
                },
                f = new Map,
                p = new Map;

            function g(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                }
            }

            function m(e) {
                const t = e.name;
                if (p.has(t)) return u.debug(`There were multiple attempts to register component ${t}.`), !1;
                p.set(t, e);
                for (const t of f.values()) g(t, e);
                return !0
            }

            function b(e, t) {
                const n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }
            const v = new a.LL("app", "Firebase", {
                "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
                "bad-app-name": "Illegal App name: '{$appName}",
                "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                "app-deleted": "Firebase App named '{$appName}' already deleted",
                "no-options": "Need to provide options, when not being deployed to hosting via source.",
                "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
            });
            class w {
                constructor(e, t, n) {
                    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new r.wA("app", (() => this), "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw v.create("app-deleted", {
                        appName: this._name
                    })
                }
            }

            function _(e, t = {}) {
                let n = e;
                "object" !== typeof t && (t = {
                    name: t
                });
                const i = Object.assign({
                        name: h,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    o = i.name;
                if ("string" !== typeof o || !o) throw v.create("bad-app-name", {
                    appName: String(o)
                });
                if (n || (n = (0, a.aH)()), !n) throw v.create("no-options");
                const s = f.get(o);
                if (s) {
                    if ((0, a.vZ)(n, s.options) && (0, a.vZ)(i, s.config)) return s;
                    throw v.create("duplicate-app", {
                        appName: o
                    })
                }
                const c = new r.H0(o);
                for (const e of p.values()) c.addComponent(e);
                const l = new w(n, i, c);
                return f.set(o, l), l
            }

            function y(e = h) {
                const t = f.get(e);
                if (!t && e === h && (0, a.aH)()) return _();
                if (!t) throw v.create("no-app", {
                    appName: e
                });
                return t
            }

            function E(e, t, n) {
                var i;
                let a = null !== (i = d[e]) && void 0 !== i ? i : e;
                n && (a += `-${n}`);
                const o = a.match(/\s|\//),
                    s = t.match(/\s|\//);
                if (o || s) {
                    const e = [`Unable to register library "${a}" with version "${t}":`];
                    return o && e.push(`library name "${a}" contains illegal characters (whitespace or "/")`), o && s && e.push("and"), s && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void u.warn(e.join(" "))
                }
                m(new r.wA(`${a}-version`, (() => ({
                    library: a,
                    version: t
                })), "VERSION"))
            }
            const I = "firebase-heartbeat-database",
                S = 1,
                T = "firebase-heartbeat-store";
            let C = null;

            function A() {
                return C || (C = (0, o.X3)(I, S, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(T)
                    }
                }).catch((e => {
                    throw v.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), C
            }
            async function D(e, t) {
                try {
                    const n = (await A()).transaction(T, "readwrite"),
                        r = n.objectStore(T);
                    await r.put(t, N(e)), await n.done
                } catch (e) {
                    if (e instanceof a.ZR) u.warn(e.message);
                    else {
                        const t = v.create("idb-set", {
                            originalErrorMessage: null === e || void 0 === e ? void 0 : e.message
                        });
                        u.warn(t.message)
                    }
                }
            }

            function N(e) {
                return `${e.name}!${e.options.appId}`
            }
            class k {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    const t = this.container.getProvider("app").getImmediate();
                    this._storage = new M(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
                }
                async triggerHeartbeat() {
                    var e, t;
                    const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        r = O();
                    if ((null != (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || (this._heartbeatsCache = await this._heartbeatsCachePromise, null != (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats))) && this._heartbeatsCache.lastSentHeartbeatDate !== r && !this._heartbeatsCache.heartbeats.some((e => e.date === r))) return this._heartbeatsCache.heartbeats.push({
                        date: r,
                        agent: n
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                        const t = new Date(e.date).valueOf();
                        return Date.now() - t <= 2592e6
                    })), this._storage.overwrite(this._heartbeatsCache)
                }
                async getHeartbeatsHeader() {
                    var e;
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    const t = O(),
                        {
                            heartbeatsToSend: n,
                            unsentEntries: r
                        } = function(e, t = 1024) {
                            const n = [];
                            let r = e.slice();
                            for (const i of e) {
                                const e = n.find((e => e.agent === i.agent));
                                if (e) {
                                    if (e.dates.push(i.date), B(n) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (n.push({
                                        agent: i.agent,
                                        dates: [i.date]
                                    }), B(n) > t) {
                                    n.pop();
                                    break
                                }
                                r = r.slice(1)
                            }
                            return {
                                heartbeatsToSend: n,
                                unsentEntries: r
                            }
                        }(this._heartbeatsCache.heartbeats),
                        i = (0, a.L)(JSON.stringify({
                            version: 2,
                            heartbeats: n
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
                }
            }

            function O() {
                return (new Date).toISOString().substring(0, 10)
            }
            class M {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!(0, a.hl)() && (0, a.eu)().then((() => !0)).catch((() => !1))
                }
                async read() {
                    if (await this._canUseIndexedDBPromise) {
                        const e = await async function(e) {
                            try {
                                const t = await A();
                                return await t.transaction(T).objectStore(T).get(N(e))
                            } catch (e) {
                                if (e instanceof a.ZR) u.warn(e.message);
                                else {
                                    const t = v.create("idb-get", {
                                        originalErrorMessage: null === e || void 0 === e ? void 0 : e.message
                                    });
                                    u.warn(t.message)
                                }
                            }
                        }(this.app);
                        return (null === e || void 0 === e ? void 0 : e.heartbeats) ? e : {
                            heartbeats: []
                        }
                    }
                    return {
                        heartbeats: []
                    }
                }
                async overwrite(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return D(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return D(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: [...n.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            }

            function B(e) {
                return (0, a.L)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            m(new r.wA("platform-logger", (e => new s(e)), "PRIVATE")), m(new r.wA("heartbeat", (e => new k(e)), "PRIVATE")), E(c, l, ""), E(c, l, "esm2017"), E("fire-js", "")
        },
        8463: (e, t, n) => {
            n.d(t, {
                H0: () => s,
                wA: () => i
            });
            var r = n(74444);
            class i {
                constructor(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            }
            const a = "[DEFAULT]";
            class o {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    const t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        const e = new r.BH;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            const n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    const n = this.normalizeInstanceIdentifier(null === e || void 0 === e ? void 0 : e.identifier),
                        r = null !== (t = null === e || void 0 === e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(e) {
                    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if (function(e) {
                                return "EAGER" === e.instantiationMode
                            }(e)) try {
                            this.getOrInitializeService({
                                instanceIdentifier: a
                            })
                        } catch (e) {}
                        for (const [e, t] of this.instancesDeferred.entries()) {
                            const n = this.normalizeInstanceIdentifier(e);
                            try {
                                const e = this.getOrInitializeService({
                                    instanceIdentifier: n
                                });
                                t.resolve(e)
                            } catch (e) {}
                        }
                    }
                }
                clearInstance(e = a) {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    const e = Array.from(this.instances.values());
                    await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = a) {
                    return this.instances.has(e)
                }
                getOptions(e = a) {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    const {
                        options: t = {}
                    } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    const r = this.getOrInitializeService({
                        instanceIdentifier: n,
                        options: t
                    });
                    for (const [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
                    return r
                }
                onInit(e, t) {
                    var n;
                    const r = this.normalizeInstanceIdentifier(t),
                        i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    i.add(e), this.onInitCallbacks.set(r, i);
                    const a = this.instances.get(r);
                    return a && e(a, r), () => {
                        i.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    const n = this.onInitCallbacks.get(t);
                    if (n)
                        for (const r of n) try {
                            r(e, t)
                        } catch (e) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let n = this.instances.get(e);
                    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                            instanceIdentifier: (r = e, r === a ? void 0 : r),
                            options: t
                        }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (e) {}
                    var r;
                    return n || null
                }
                normalizeInstanceIdentifier(e = a) {
                    return this.component ? this.component.multipleInstances ? e : a : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            }
            class s {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(e) {
                    const t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
                    t.setComponent(e)
                }
                addOrOverwriteComponent(e) {
                    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    const t = new o(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        53333: (e, t, n) => {
            n.d(t, {
                Yd: () => l,
                in: () => i
            });
            const r = [];
            var i;
            ! function(e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(i || (i = {}));
            const a = {
                    debug: i.DEBUG,
                    verbose: i.VERBOSE,
                    info: i.INFO,
                    warn: i.WARN,
                    error: i.ERROR,
                    silent: i.SILENT
                },
                o = i.INFO,
                s = {
                    [i.DEBUG]: "log",
                    [i.VERBOSE]: "log",
                    [i.INFO]: "info",
                    [i.WARN]: "warn",
                    [i.ERROR]: "error"
                },
                c = (e, t, ...n) => {
                    if (t < e.logLevel) return;
                    const r = (new Date).toISOString(),
                        i = s[t];
                    if (!i) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                    console[i](`[${r}]  ${e.name}:`, ...n)
                };
            class l {
                constructor(e) {
                    this.name = e, this._logLevel = o, this._logHandler = c, this._userLogHandler = null, r.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in i)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" === typeof e ? a[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" !== typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.DEBUG, ...e), this._logHandler(this, i.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.VERBOSE, ...e), this._logHandler(this, i.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.INFO, ...e), this._logHandler(this, i.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.WARN, ...e), this._logHandler(this, i.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.ERROR, ...e), this._logHandler(this, i.ERROR, ...e)
                }
            }
        },
        83977: (e, t, n) => {
            n.d(t, {
                ZF: () => r.ZF
            });
            var r = n(32238);
            (0, r.KN)("firebase", "10.7.1", "app")
        },
        86428: (e, t, n) => {
            n.d(t, {
                r: () => ht,
                g4: () => dt
            });
            var r = n(74444),
                i = n(53333),
                a = n(32238),
                o = n(8463);
            const s = (e, t) => t.some((t => e instanceof t));
            let c, l;
            const u = new WeakMap,
                h = new WeakMap,
                d = new WeakMap,
                f = new WeakMap,
                p = new WeakMap;
            let g = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return h.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || d.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return b(e[t])
                },
                set: (e, t, n) => (e[t] = n, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

            function m(e) {
                return "function" === typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (l || (l = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(v(this), e), b(u.get(this))
                } : function(...e) {
                    return b(t.apply(v(this), e))
                } : function(e, ...n) {
                    const r = t.call(v(this), e, ...n);
                    return d.set(r, e.sort ? e.sort() : [e]), b(r)
                } : (e instanceof IDBTransaction && function(e) {
                    if (h.has(e)) return;
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a)
                            },
                            i = () => {
                                t(), r()
                            },
                            a = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a)
                    }));
                    h.set(e, t)
                }(e), s(e, c || (c = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, g) : e);
                var t
            }

            function b(e) {
                if (e instanceof IDBRequest) return function(e) {
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", a)
                            },
                            i = () => {
                                t(b(e.result)), r()
                            },
                            a = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", i), e.addEventListener("error", a)
                    }));
                    return t.then((t => {
                        t instanceof IDBCursor && u.set(t, e)
                    })).catch((() => {})), p.set(t, e), t
                }(e);
                if (f.has(e)) return f.get(e);
                const t = m(e);
                return t !== e && (f.set(e, t), p.set(t, e)), t
            }
            const v = e => p.get(e),
                w = ["get", "getKey", "getAll", "getAllKeys", "count"],
                _ = ["put", "add", "delete", "clear"],
                y = new Map;

            function E(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
                if (y.get(t)) return y.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    i = _.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !w.includes(n)) return;
                const a = async function(e, ...t) {
                    const a = this.transaction(e, i ? "readwrite" : "readonly");
                    let o = a.store;
                    return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0]
                };
                return y.set(t, a), a
            }
            var I;
            I = g, g = { ...I,
                get: (e, t, n) => E(e, t) || I.get(e, t, n),
                has: (e, t) => !!E(e, t) || I.has(e, t)
            };
            const S = "@firebase/installations",
                T = "0.6.4",
                C = 1e4,
                A = `w:${T}`,
                D = "FIS_v2",
                N = "https://firebaseinstallations.googleapis.com/v1",
                k = 36e5,
                O = new r.LL("installations", "Installations", {
                    "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                    "not-registered": "Firebase Installation is not registered.",
                    "installation-not-found": "Firebase Installation not found.",
                    "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                    "app-offline": "Could not process request. Application offline.",
                    "delete-pending-registration": "Can't delete installation while there is a pending registration request."
                });

            function M(e) {
                return e instanceof r.ZR && e.code.includes("request-failed")
            }

            function B({
                projectId: e
            }) {
                return `${N}/projects/${e}/installations`
            }

            function L(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: (t = e.expiresIn, Number(t.replace("s", "000"))),
                    creationTime: Date.now()
                };
                var t
            }
            async function P(e, t) {
                const n = (await t.json()).error;
                return O.create("request-failed", {
                    requestName: e,
                    serverCode: n.code,
                    serverMessage: n.message,
                    serverStatus: n.status
                })
            }

            function R({
                apiKey: e
            }) {
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }
            async function $(e) {
                const t = await e();
                return t.status >= 500 && t.status < 600 ? e() : t
            }

            function j(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }
            const F = /^[cdef][\w-]{21}$/,
                U = "";

            function H() {
                try {
                    const e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                    const t = function(e) {
                        var t;
                        return (t = e, btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22)
                    }(e);
                    return F.test(t) ? t : U
                } catch (e) {
                    return U
                }
            }

            function q(e) {
                return `${e.appName}!${e.appId}`
            }
            const x = new Map;

            function V(e, t) {
                const n = q(e);
                z(n, t),
                    function(e, t) {
                        const n = (!W && "BroadcastChannel" in self && (W = new BroadcastChannel("[Firebase] FID Change"), W.onmessage = e => {
                            z(e.data.key, e.data.fid)
                        }), W);
                        n && n.postMessage({
                            key: e,
                            fid: t
                        }), 0 === x.size && W && (W.close(), W = null)
                    }(n, t)
            }

            function z(e, t) {
                const n = x.get(e);
                if (n)
                    for (const e of n) e(t)
            }
            let W = null;
            const K = "firebase-installations-database",
                J = 1,
                Z = "firebase-installations-store";
            let X = null;

            function G() {
                return X || (X = function(e, t, {
                    blocked: n,
                    upgrade: r,
                    blocking: i,
                    terminated: a
                } = {}) {
                    const o = indexedDB.open(e, t),
                        s = b(o);
                    return r && o.addEventListener("upgradeneeded", (e => {
                        r(b(o.result), e.oldVersion, e.newVersion, b(o.transaction))
                    })), n && o.addEventListener("blocked", (() => n())), s.then((e => {
                        a && e.addEventListener("close", (() => a())), i && e.addEventListener("versionchange", (() => i()))
                    })).catch((() => {})), s
                }(K, J, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(Z)
                    }
                })), X
            }
            async function Y(e, t) {
                const n = q(e),
                    r = (await G()).transaction(Z, "readwrite"),
                    i = r.objectStore(Z),
                    a = await i.get(n);
                return await i.put(t, n), await r.done, a && a.fid === t.fid || V(e, t.fid), t
            }
            async function Q(e) {
                const t = q(e),
                    n = (await G()).transaction(Z, "readwrite");
                await n.objectStore(Z).delete(t), await n.done
            }
            async function ee(e, t) {
                const n = q(e),
                    r = (await G()).transaction(Z, "readwrite"),
                    i = r.objectStore(Z),
                    a = await i.get(n),
                    o = t(a);
                return void 0 === o ? await i.delete(n) : await i.put(o, n), await r.done, !o || a && a.fid === o.fid || V(e, o.fid), o
            }
            async function te(e) {
                let t;
                const n = await ee(e.appConfig, (n => {
                    const r = function(e) {
                            return ie(e || {
                                fid: H(),
                                registrationStatus: 0
                            })
                        }(n),
                        i = function(e, t) {
                            if (0 === t.registrationStatus) {
                                if (!navigator.onLine) return {
                                    installationEntry: t,
                                    registrationPromise: Promise.reject(O.create("app-offline"))
                                };
                                const n = {
                                        fid: t.fid,
                                        registrationStatus: 1,
                                        registrationTime: Date.now()
                                    },
                                    r = async function(e, t) {
                                        try {
                                            const n = await async function({
                                                appConfig: e,
                                                heartbeatServiceProvider: t
                                            }, {
                                                fid: n
                                            }) {
                                                const r = B(e),
                                                    i = R(e),
                                                    a = t.getImmediate({
                                                        optional: !0
                                                    });
                                                if (a) {
                                                    const e = await a.getHeartbeatsHeader();
                                                    e && i.append("x-firebase-client", e)
                                                }
                                                const o = {
                                                        fid: n,
                                                        authVersion: D,
                                                        appId: e.appId,
                                                        sdkVersion: A
                                                    },
                                                    s = {
                                                        method: "POST",
                                                        headers: i,
                                                        body: JSON.stringify(o)
                                                    },
                                                    c = await $((() => fetch(r, s)));
                                                if (c.ok) {
                                                    const e = await c.json();
                                                    return {
                                                        fid: e.fid || n,
                                                        registrationStatus: 2,
                                                        refreshToken: e.refreshToken,
                                                        authToken: L(e.authToken)
                                                    }
                                                }
                                                throw await P("Create Installation", c)
                                            }(e, t);
                                            return Y(e.appConfig, n)
                                        } catch (n) {
                                            throw M(n) && 409 === n.customData.serverCode ? await Q(e.appConfig) : await Y(e.appConfig, {
                                                fid: t.fid,
                                                registrationStatus: 0
                                            }), n
                                        }
                                    }(e, n);
                                return {
                                    installationEntry: n,
                                    registrationPromise: r
                                }
                            }
                            return 1 === t.registrationStatus ? {
                                installationEntry: t,
                                registrationPromise: ne(e)
                            } : {
                                installationEntry: t
                            }
                        }(e, r);
                    return t = i.registrationPromise, i.installationEntry
                }));
                return n.fid === U ? {
                    installationEntry: await t
                } : {
                    installationEntry: n,
                    registrationPromise: t
                }
            }
            async function ne(e) {
                let t = await re(e.appConfig);
                for (; 1 === t.registrationStatus;) await j(100), t = await re(e.appConfig);
                if (0 === t.registrationStatus) {
                    const {
                        installationEntry: t,
                        registrationPromise: n
                    } = await te(e);
                    return n || t
                }
                return t
            }

            function re(e) {
                return ee(e, (e => {
                    if (!e) throw O.create("installation-not-found");
                    return ie(e)
                }))
            }

            function ie(e) {
                return 1 === (t = e).registrationStatus && t.registrationTime + C < Date.now() ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e;
                var t
            }
            async function ae({
                appConfig: e,
                heartbeatServiceProvider: t
            }, n) {
                const r = function(e, {
                        fid: t
                    }) {
                        return `${B(e)}/${t}/authTokens:generate`
                    }(e, n),
                    i = function(e, {
                        refreshToken: t
                    }) {
                        const n = R(e);
                        return n.append("Authorization", function(e) {
                            return `${D} ${e}`
                        }(t)), n
                    }(e, n),
                    a = t.getImmediate({
                        optional: !0
                    });
                if (a) {
                    const e = await a.getHeartbeatsHeader();
                    e && i.append("x-firebase-client", e)
                }
                const o = {
                        installation: {
                            sdkVersion: A,
                            appId: e.appId
                        }
                    },
                    s = {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(o)
                    },
                    c = await $((() => fetch(r, s)));
                if (c.ok) return L(await c.json());
                throw await P("Generate Auth Token", c)
            }
            async function oe(e, t = !1) {
                let n;
                const r = await ee(e.appConfig, (r => {
                    if (!ce(r)) throw O.create("not-registered");
                    const i = r.authToken;
                    if (!t && (2 === (a = i).requestStatus && ! function(e) {
                            const t = Date.now();
                            return t < e.creationTime || e.creationTime + e.expiresIn < t + k
                        }(a))) return r;
                    var a;
                    if (1 === i.requestStatus) return n = async function(e, t) {
                        let n = await se(e.appConfig);
                        for (; 1 === n.authToken.requestStatus;) await j(100), n = await se(e.appConfig);
                        const r = n.authToken;
                        return 0 === r.requestStatus ? oe(e, t) : r
                    }(e, t), r; {
                        if (!navigator.onLine) throw O.create("app-offline");
                        const t = function(e) {
                            const t = {
                                requestStatus: 1,
                                requestTime: Date.now()
                            };
                            return Object.assign(Object.assign({}, e), {
                                authToken: t
                            })
                        }(r);
                        return n = async function(e, t) {
                            try {
                                const n = await ae(e, t),
                                    r = Object.assign(Object.assign({}, t), {
                                        authToken: n
                                    });
                                return await Y(e.appConfig, r), n
                            } catch (n) {
                                if (!M(n) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode) {
                                    const n = Object.assign(Object.assign({}, t), {
                                        authToken: {
                                            requestStatus: 0
                                        }
                                    });
                                    await Y(e.appConfig, n)
                                } else await Q(e.appConfig);
                                throw n
                            }
                        }(e, t), t
                    }
                }));
                return n ? await n : r.authToken
            }

            function se(e) {
                return ee(e, (e => {
                    if (!ce(e)) throw O.create("not-registered");
                    return 1 === (t = e.authToken).requestStatus && t.requestTime + C < Date.now() ? Object.assign(Object.assign({}, e), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : e;
                    var t
                }))
            }

            function ce(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }

            function le(e) {
                return O.create("missing-app-config-values", {
                    valueName: e
                })
            }
            const ue = "installations";
            (0, a.Xd)(new o.wA(ue, (e => {
                const t = e.getProvider("app").getImmediate(),
                    n = function(e) {
                        if (!e || !e.options) throw le("App Configuration");
                        if (!e.name) throw le("App Name");
                        const t = ["projectId", "apiKey", "appId"];
                        for (const n of t)
                            if (!e.options[n]) throw le(n);
                        return {
                            appName: e.name,
                            projectId: e.options.projectId,
                            apiKey: e.options.apiKey,
                            appId: e.options.appId
                        }
                    }(t);
                return {
                    app: t,
                    appConfig: n,
                    heartbeatServiceProvider: (0, a.qX)(t, "heartbeat"),
                    _delete: () => Promise.resolve()
                }
            }), "PUBLIC")), (0, a.Xd)(new o.wA("installations-internal", (e => {
                const t = e.getProvider("app").getImmediate(),
                    n = (0, a.qX)(t, ue).getImmediate();
                return {
                    getId: () => async function(e) {
                        const t = e,
                            {
                                installationEntry: n,
                                registrationPromise: r
                            } = await te(t);
                        return r ? r.catch(console.error) : oe(t).catch(console.error), n.fid
                    }(n),
                    getToken: e => async function(e, t = !1) {
                        const n = e;
                        return await async function(e) {
                            const {
                                registrationPromise: t
                            } = await te(e);
                            t && await t
                        }(n), (await oe(n, t)).token
                    }(n, e)
                }
            }), "PRIVATE")), (0, a.KN)(S, T), (0, a.KN)(S, T, "esm2017");
            const he = "@firebase/performance",
                de = "0.6.4",
                fe = de,
                pe = "FB-PERF-TRACE-MEASURE",
                ge = "_wt_",
                me = "_fcp",
                be = "_fid",
                ve = "@firebase/performance/config",
                we = "@firebase/performance/configexpire",
                _e = "Performance",
                ye = new r.LL("performance", _e, {
                    "trace started": "Trace {$traceName} was started before.",
                    "trace stopped": "Trace {$traceName} is not running.",
                    "nonpositive trace startTime": "Trace {$traceName} startTime should be positive.",
                    "nonpositive trace duration": "Trace {$traceName} duration should be positive.",
                    "no window": "Window is not available.",
                    "no app id": "App id is not available.",
                    "no project id": "Project id is not available.",
                    "no api key": "Api key is not available.",
                    "invalid cc log": "Attempted to queue invalid cc event",
                    "FB not default": "Performance can only start when Firebase app instance is the default one.",
                    "RC response not ok": "RC response is not ok",
                    "invalid attribute name": "Attribute name {$attributeName} is invalid.",
                    "invalid attribute value": "Attribute value {$attributeValue} is invalid.",
                    "invalid custom metric name": "Custom metric name {$customMetricName} is invalid",
                    "invalid String merger input": "Input for String merger is invalid, contact support team to resolve.",
                    "already initialized": "initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."
                }),
                Ee = new i.Yd(_e);
            let Ie, Se, Te, Ce;
            Ee.logLevel = i.in.INFO;
            class Ae {
                constructor(e) {
                    if (this.window = e, !e) throw ye.create("no window");
                    this.performance = e.performance, this.PerformanceObserver = e.PerformanceObserver, this.windowLocation = e.location, this.navigator = e.navigator, this.document = e.document, this.navigator && this.navigator.cookieEnabled && (this.localStorage = e.localStorage), e.perfMetrics && e.perfMetrics.onFirstInputDelay && (this.onFirstInputDelay = e.perfMetrics.onFirstInputDelay)
                }
                getUrl() {
                    return this.windowLocation.href.split("?")[0]
                }
                mark(e) {
                    this.performance && this.performance.mark && this.performance.mark(e)
                }
                measure(e, t, n) {
                    this.performance && this.performance.measure && this.performance.measure(e, t, n)
                }
                getEntriesByType(e) {
                    return this.performance && this.performance.getEntriesByType ? this.performance.getEntriesByType(e) : []
                }
                getEntriesByName(e) {
                    return this.performance && this.performance.getEntriesByName ? this.performance.getEntriesByName(e) : []
                }
                getTimeOrigin() {
                    return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart)
                }
                requiredApisAvailable() {
                    return fetch && Promise && (0, r.zI)() ? !!(0, r.hl)() || (Ee.info("IndexedDB is not supported by current browswer"), !1) : (Ee.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."), !1)
                }
                setupObserver(e, t) {
                    this.PerformanceObserver && new this.PerformanceObserver((e => {
                        for (const n of e.getEntries()) t(n)
                    })).observe({
                        entryTypes: [e]
                    })
                }
                static getInstance() {
                    return void 0 === Ie && (Ie = new Ae(Se)), Ie
                }
            }

            function De() {
                return Te
            }

            function Ne(e, t) {
                const n = e.length - t.length;
                if (n < 0 || n > 1) throw ye.create("invalid String merger input");
                const r = [];
                for (let n = 0; n < e.length; n++) r.push(e.charAt(n)), t.length > n && r.push(t.charAt(n));
                return r.join("")
            }
            class ke {
                constructor() {
                    this.instrumentationEnabled = !0, this.dataCollectionEnabled = !0, this.loggingEnabled = !1, this.tracesSamplingRate = 1, this.networkRequestsSamplingRate = 1, this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto", this.flTransportEndpointUrl = Ne("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), this.transportKey = Ne("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV"), this.logSource = 462, this.logTraceAfterSampling = !1, this.logNetworkAfterSampling = !1, this.configTimeToLive = 12
                }
                getFlTransportFullUrl() {
                    return this.flTransportEndpointUrl.concat("?key=", this.transportKey)
                }
                static getInstance() {
                    return void 0 === Ce && (Ce = new ke), Ce
                }
            }
            var Oe;
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.VISIBLE = 1] = "VISIBLE", e[e.HIDDEN = 2] = "HIDDEN"
            }(Oe || (Oe = {}));
            const Me = ["firebase_", "google_", "ga_"],
                Be = new RegExp("^[a-zA-Z]\\w*$");

            function Le() {
                const e = Ae.getInstance().navigator;
                return (null === e || void 0 === e ? void 0 : e.serviceWorker) ? e.serviceWorker.controller ? 2 : 3 : 1
            }

            function Pe() {
                switch (Ae.getInstance().document.visibilityState) {
                    case "visible":
                        return Oe.VISIBLE;
                    case "hidden":
                        return Oe.HIDDEN;
                    default:
                        return Oe.UNKNOWN
                }
            }

            function Re() {
                const e = Ae.getInstance().navigator.connection;
                switch (e && e.effectiveType) {
                    case "slow-2g":
                        return 1;
                    case "2g":
                        return 2;
                    case "3g":
                        return 3;
                    case "4g":
                        return 4;
                    default:
                        return 0
                }
            }

            function $e(e) {
                var t;
                const n = null === (t = e.options) || void 0 === t ? void 0 : t.appId;
                if (!n) throw ye.create("no app id");
                return n
            }
            const je = "0.0.1",
                Fe = {
                    loggingEnabled: !0
                },
                Ue = "FIREBASE_INSTALLATIONS_AUTH";
            const He = "Could not fetch config, will use default configs";

            function qe(e) {
                if (!e) return e;
                const t = ke.getInstance(),
                    n = e.entries || {};
                return void 0 !== n.fpr_enabled ? t.loggingEnabled = "true" === String(n.fpr_enabled) : t.loggingEnabled = Fe.loggingEnabled, n.fpr_log_source ? t.logSource = Number(n.fpr_log_source) : Fe.logSource && (t.logSource = Fe.logSource), n.fpr_log_endpoint_url ? t.logEndPointUrl = n.fpr_log_endpoint_url : Fe.logEndPointUrl && (t.logEndPointUrl = Fe.logEndPointUrl), n.fpr_log_transport_key ? t.transportKey = n.fpr_log_transport_key : Fe.transportKey && (t.transportKey = Fe.transportKey), void 0 !== n.fpr_vc_network_request_sampling_rate ? t.networkRequestsSamplingRate = Number(n.fpr_vc_network_request_sampling_rate) : void 0 !== Fe.networkRequestsSamplingRate && (t.networkRequestsSamplingRate = Fe.networkRequestsSamplingRate), void 0 !== n.fpr_vc_trace_sampling_rate ? t.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate) : void 0 !== Fe.tracesSamplingRate && (t.tracesSamplingRate = Fe.tracesSamplingRate), t.logTraceAfterSampling = xe(t.tracesSamplingRate), t.logNetworkAfterSampling = xe(t.networkRequestsSamplingRate), e
            }

            function xe(e) {
                return Math.random() <= e
            }
            let Ve, ze = 1;

            function We(e) {
                return ze = 2, Ve = Ve || function(e) {
                    return function() {
                        const e = Ae.getInstance().document;
                        return new Promise((t => {
                            if (e && "complete" !== e.readyState) {
                                const n = () => {
                                    "complete" === e.readyState && (e.removeEventListener("readystatechange", n), t())
                                };
                                e.addEventListener("readystatechange", n)
                            } else t()
                        }))
                    }().then((() => function(e) {
                        const t = e.getId();
                        return t.then((e => {
                            Te = e
                        })), t
                    }(e.installations))).then((t => function(e, t) {
                        const n = function() {
                            const e = Ae.getInstance().localStorage;
                            if (!e) return;
                            const t = e.getItem(we);
                            if (!t || !(Number(t) > Date.now())) return;
                            const n = e.getItem(ve);
                            if (n) try {
                                return JSON.parse(n)
                            } catch (e) {
                                return
                            }
                        }();
                        return n ? (qe(n), Promise.resolve()) : function(e, t) {
                            return function(e) {
                                const t = e.getToken();
                                return t.then((e => {})), t
                            }(e.installations).then((n => {
                                const r = function(e) {
                                        var t;
                                        const n = null === (t = e.options) || void 0 === t ? void 0 : t.projectId;
                                        if (!n) throw ye.create("no project id");
                                        return n
                                    }(e.app),
                                    i = function(e) {
                                        var t;
                                        const n = null === (t = e.options) || void 0 === t ? void 0 : t.apiKey;
                                        if (!n) throw ye.create("no api key");
                                        return n
                                    }(e.app),
                                    a = new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`, {
                                        method: "POST",
                                        headers: {
                                            Authorization: `${Ue} ${n}`
                                        },
                                        body: JSON.stringify({
                                            app_instance_id: t,
                                            app_instance_id_token: n,
                                            app_id: $e(e.app),
                                            app_version: fe,
                                            sdk_version: je
                                        })
                                    });
                                return fetch(a).then((e => {
                                    if (e.ok) return e.json();
                                    throw ye.create("RC response not ok")
                                }))
                            })).catch((() => {
                                Ee.info(He)
                            }))
                        }(e, t).then(qe).then((e => function(e) {
                            const t = Ae.getInstance().localStorage;
                            e && t && (t.setItem(ve, JSON.stringify(e)), t.setItem(we, String(Date.now() + 60 * ke.getInstance().configTimeToLive * 60 * 1e3)))
                        }(e)), (() => {}))
                    }(e, t))).then((() => Ke()), (() => Ke()))
                }(e), Ve
            }

            function Ke() {
                ze = 3
            }
            const Je = 1e4;
            let Ze, Xe = 3,
                Ge = [],
                Ye = !1;

            function Qe(e) {
                setTimeout((() => {
                    if (0 !== Xe) return Ge.length ? void
                    function() {
                        const e = Ge.splice(0, 1e3),
                            t = e.map((e => ({
                                source_extension_json_proto3: e.message,
                                event_time_ms: String(e.eventTime)
                            })));
                        (function(e, t) {
                            return function(e) {
                                const t = ke.getInstance().getFlTransportFullUrl();
                                return fetch(t, {
                                    method: "POST",
                                    body: JSON.stringify(e)
                                })
                            }(e).then((e => (e.ok || Ee.info("Call to Firebase backend failed."), e.json()))).then((e => {
                                const n = Number(e.nextRequestWaitMillis);
                                let r = Je;
                                isNaN(n) || (r = Math.max(n, r));
                                const i = e.logResponseDetails;
                                Array.isArray(i) && i.length > 0 && "RETRY_REQUEST_LATER" === i[0].responseAction && (Ge = [...t, ...Ge], Ee.info("Retry transport request later.")), Xe = 3, Qe(r)
                            }))
                        })({
                            request_time_ms: String(Date.now()),
                            client_info: {
                                client_type: 1,
                                js_client_info: {}
                            },
                            log_source: ke.getInstance().logSource,
                            log_event: t
                        }, e).catch((() => {
                            Ge = [...e, ...Ge], Xe--, Ee.info(`Tries left: ${Xe}.`), Qe(Je)
                        }))
                    }(): Qe(Je)
                }), e)
            }

            function et(e, t) {
                Ze || (Ze = function(e) {
                    return (...t) => {
                        ! function(e) {
                            if (!e.eventTime || !e.message) throw ye.create("invalid cc log");
                            Ge = [...Ge, e]
                        }({
                            message: e(...t),
                            eventTime: Date.now()
                        })
                    }
                }(rt)), Ze(e, t)
            }

            function tt(e) {
                const t = ke.getInstance();
                !t.instrumentationEnabled && e.isAuto || (t.dataCollectionEnabled || e.isAuto) && Ae.getInstance().requiredApisAvailable() && (e.isAuto && Pe() !== Oe.VISIBLE || (3 === ze ? nt(e) : We(e.performanceController).then((() => nt(e)), (() => nt(e)))))
            }

            function nt(e) {
                if (!De()) return;
                const t = ke.getInstance();
                t.loggingEnabled && t.logTraceAfterSampling && setTimeout((() => et(e, 1)), 0)
            }

            function rt(e, t) {
                return 0 === t ? function(e) {
                    const t = {
                            url: e.url,
                            http_method: e.httpMethod || 0,
                            http_response_code: 200,
                            response_payload_bytes: e.responsePayloadBytes,
                            client_start_time_us: e.startTimeUs,
                            time_to_response_initiated_us: e.timeToResponseInitiatedUs,
                            time_to_response_completed_us: e.timeToResponseCompletedUs
                        },
                        n = {
                            application_info: it(e.performanceController.app),
                            network_request_metric: t
                        };
                    return JSON.stringify(n)
                }(e) : function(e) {
                    const t = {
                        name: e.name,
                        is_auto: e.isAuto,
                        client_start_time_us: e.startTimeUs,
                        duration_us: e.durationUs
                    };
                    0 !== Object.keys(e.counters).length && (t.counters = e.counters);
                    const n = e.getAttributes();
                    0 !== Object.keys(n).length && (t.custom_attributes = n);
                    const r = {
                        application_info: it(e.performanceController.app),
                        trace_metric: t
                    };
                    return JSON.stringify(r)
                }(e)
            }

            function it(e) {
                return {
                    google_app_id: $e(e),
                    app_instance_id: De(),
                    web_app_info: {
                        sdk_version: fe,
                        page_url: Ae.getInstance().getUrl(),
                        service_worker_status: Le(),
                        visibility_state: Pe(),
                        effective_connection_type: Re()
                    },
                    application_process_state: 0
                }
            }
            const at = ["_fp", me, be];
            class ot {
                constructor(e, t, n = !1, r) {
                    this.performanceController = e, this.name = t, this.isAuto = n, this.state = 1, this.customAttributes = {}, this.counters = {}, this.api = Ae.getInstance(), this.randomId = Math.floor(1e6 * Math.random()), this.isAuto || (this.traceStartMark = `FB-PERF-TRACE-START-${this.randomId}-${this.name}`, this.traceStopMark = `FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`, this.traceMeasure = r || `${pe}-${this.randomId}-${this.name}`, r && this.calculateTraceMetrics())
                }
                start() {
                    if (1 !== this.state) throw ye.create("trace started", {
                        traceName: this.name
                    });
                    this.api.mark(this.traceStartMark), this.state = 2
                }
                stop() {
                    if (2 !== this.state) throw ye.create("trace stopped", {
                        traceName: this.name
                    });
                    this.state = 3, this.api.mark(this.traceStopMark), this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark), this.calculateTraceMetrics(), tt(this)
                }
                record(e, t, n) {
                    if (e <= 0) throw ye.create("nonpositive trace startTime", {
                        traceName: this.name
                    });
                    if (t <= 0) throw ye.create("nonpositive trace duration", {
                        traceName: this.name
                    });
                    if (this.durationUs = Math.floor(1e3 * t), this.startTimeUs = Math.floor(1e3 * e), n && n.attributes && (this.customAttributes = Object.assign({}, n.attributes)), n && n.metrics)
                        for (const e of Object.keys(n.metrics)) isNaN(Number(n.metrics[e])) || (this.counters[e] = Math.floor(Number(n.metrics[e])));
                    tt(this)
                }
                incrementMetric(e, t = 1) {
                    void 0 === this.counters[e] ? this.putMetric(e, t) : this.putMetric(e, this.counters[e] + t)
                }
                putMetric(e, t) {
                    if (n = e, r = this.name, 0 === n.length || n.length > 100 || !(r && r.startsWith(ge) && at.indexOf(n) > -1) && n.startsWith("_")) throw ye.create("invalid custom metric name", {
                        customMetricName: e
                    });
                    var n, r;
                    this.counters[e] = function(e) {
                        const t = Math.floor(e);
                        return t < e && Ee.info(`Metric value should be an Integer, setting the value as : ${t}.`), t
                    }(null !== t && void 0 !== t ? t : 0)
                }
                getMetric(e) {
                    return this.counters[e] || 0
                }
                putAttribute(e, t) {
                    const n = !(0 === (r = e).length || r.length > 40) && !Me.some((e => r.startsWith(e))) && !!r.match(Be);
                    var r;
                    const i = function(e) {
                        return 0 !== e.length && e.length <= 100
                    }(t);
                    if (n && i) this.customAttributes[e] = t;
                    else {
                        if (!n) throw ye.create("invalid attribute name", {
                            attributeName: e
                        });
                        if (!i) throw ye.create("invalid attribute value", {
                            attributeValue: t
                        })
                    }
                }
                getAttribute(e) {
                    return this.customAttributes[e]
                }
                removeAttribute(e) {
                    void 0 !== this.customAttributes[e] && delete this.customAttributes[e]
                }
                getAttributes() {
                    return Object.assign({}, this.customAttributes)
                }
                setStartTime(e) {
                    this.startTimeUs = e
                }
                setDuration(e) {
                    this.durationUs = e
                }
                calculateTraceMetrics() {
                    const e = this.api.getEntriesByName(this.traceMeasure),
                        t = e && e[0];
                    t && (this.durationUs = Math.floor(1e3 * t.duration), this.startTimeUs = Math.floor(1e3 * (t.startTime + this.api.getTimeOrigin())))
                }
                static createOobTrace(e, t, n, r) {
                    const i = Ae.getInstance().getUrl();
                    if (!i) return;
                    const a = new ot(e, ge + i, !0),
                        o = Math.floor(1e3 * Ae.getInstance().getTimeOrigin());
                    if (a.setStartTime(o), t && t[0] && (a.setDuration(Math.floor(1e3 * t[0].duration)), a.putMetric("domInteractive", Math.floor(1e3 * t[0].domInteractive)), a.putMetric("domContentLoadedEventEnd", Math.floor(1e3 * t[0].domContentLoadedEventEnd)), a.putMetric("loadEventEnd", Math.floor(1e3 * t[0].loadEventEnd))), n) {
                        const e = n.find((e => "first-paint" === e.name));
                        e && e.startTime && a.putMetric("_fp", Math.floor(1e3 * e.startTime));
                        const t = n.find((e => "first-contentful-paint" === e.name));
                        t && t.startTime && a.putMetric(me, Math.floor(1e3 * t.startTime)), r && a.putMetric(be, Math.floor(1e3 * r))
                    }
                    tt(a)
                }
                static createUserTimingTrace(e, t) {
                    tt(new ot(e, t, !1, t))
                }
            }

            function st(e, t) {
                const n = t;
                if (!n || void 0 === n.responseStart) return;
                const r = Ae.getInstance().getTimeOrigin(),
                    i = Math.floor(1e3 * (n.startTime + r)),
                    a = n.responseStart ? Math.floor(1e3 * (n.responseStart - n.startTime)) : void 0,
                    o = Math.floor(1e3 * (n.responseEnd - n.startTime));
                ! function(e) {
                    const t = ke.getInstance();
                    if (!t.instrumentationEnabled) return;
                    const n = e.url,
                        r = t.logEndPointUrl.split("?")[0],
                        i = t.flTransportEndpointUrl.split("?")[0];
                    n !== r && n !== i && t.loggingEnabled && t.logNetworkAfterSampling && setTimeout((() => et(e, 0)), 0)
                }({
                    performanceController: e,
                    url: n.name && n.name.split("?")[0],
                    responsePayloadBytes: n.transferSize,
                    startTimeUs: i,
                    timeToResponseInitiatedUs: a,
                    timeToResponseCompletedUs: o
                })
            }

            function ct(e) {
                De() && (setTimeout((() => function(e) {
                    const t = Ae.getInstance(),
                        n = t.getEntriesByType("navigation"),
                        r = t.getEntriesByType("paint");
                    if (t.onFirstInputDelay) {
                        let i = setTimeout((() => {
                            ot.createOobTrace(e, n, r), i = void 0
                        }), 5e3);
                        t.onFirstInputDelay((t => {
                            i && (clearTimeout(i), ot.createOobTrace(e, n, r, t))
                        }))
                    } else ot.createOobTrace(e, n, r)
                }(e)), 0), setTimeout((() => function(e) {
                    const t = Ae.getInstance(),
                        n = t.getEntriesByType("resource");
                    for (const t of n) st(e, t);
                    t.setupObserver("resource", (t => st(e, t)))
                }(e)), 0), setTimeout((() => function(e) {
                    const t = Ae.getInstance(),
                        n = t.getEntriesByType("measure");
                    for (const t of n) lt(e, t);
                    t.setupObserver("measure", (t => lt(e, t)))
                }(e)), 0))
            }

            function lt(e, t) {
                const n = t.name;
                n.substring(0, pe.length) !== pe && ot.createUserTimingTrace(e, n)
            }
            class ut {
                constructor(e, t) {
                    this.app = e, this.installations = t, this.initialized = !1
                }
                _init(e) {
                    this.initialized || (void 0 !== (null === e || void 0 === e ? void 0 : e.dataCollectionEnabled) && (this.dataCollectionEnabled = e.dataCollectionEnabled), void 0 !== (null === e || void 0 === e ? void 0 : e.instrumentationEnabled) && (this.instrumentationEnabled = e.instrumentationEnabled), Ae.getInstance().requiredApisAvailable() ? (0, r.eu)().then((e => {
                        e && (Ye || (Qe(5500), Ye = !0), We(this).then((() => ct(this)), (() => ct(this))), this.initialized = !0)
                    })).catch((e => {
                        Ee.info(`Environment doesn't support IndexedDB: ${e}`)
                    })) : Ee.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))
                }
                set instrumentationEnabled(e) {
                    ke.getInstance().instrumentationEnabled = e
                }
                get instrumentationEnabled() {
                    return ke.getInstance().instrumentationEnabled
                }
                set dataCollectionEnabled(e) {
                    ke.getInstance().dataCollectionEnabled = e
                }
                get dataCollectionEnabled() {
                    return ke.getInstance().dataCollectionEnabled
                }
            }

            function ht(e = (0, a.Mq)()) {
                return e = (0, r.m9)(e), (0, a.qX)(e, "performance").getImmediate()
            }

            function dt(e, t) {
                return e = (0, r.m9)(e), new ot(e, t)
            }(0, a.Xd)(new o.wA("performance", ((e, {
                options: t
            }) => {
                const n = e.getProvider("app").getImmediate(),
                    r = e.getProvider("installations-internal").getImmediate();
                if ("[DEFAULT]" !== n.name) throw ye.create("FB not default");
                if ("undefined" === typeof window) throw ye.create("no window");
                ! function(e) {
                    Se = e
                }(window);
                const i = new ut(n, r);
                return i._init(t), i
            }), "PUBLIC")), (0, a.KN)(he, de), (0, a.KN)(he, de, "esm2017")
        }
    }
]);