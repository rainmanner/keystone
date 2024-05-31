"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [4271], {
        25373: (e, t, r) => {
            r.d(t, {
                Z: () => m
            });
            var o = r(67294),
                i = r.n(o),
                a = r(45697),
                n = r.n(a),
                l = r(71893),
                c = r(83109),
                p = r(90663),
                u = (0, l.ZP)(p.Z).withConfig({
                    displayName: "style__VideoBoxModal",
                    componentId: "n504jo-0"
                })(["@media ", "{& > div:first-child{width:100vw !important;& > div:first-child{top:calc(100% + 20px);right:calc(50% - 20px);svg{fill:var(--color-fg-default);}}}}"], c.We),
                d = l.ZP.iframe.withConfig({
                    displayName: "style__Iframe",
                    componentId: "n504jo-1"
                })(["width:100%;aspect-ratio:16 / 9;border:none;"]),
                s = ["open", "onClose", "src"];

            function y() {
                return y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, y.apply(this, arguments)
            }

            function m(e) {
                var t = e.open,
                    r = e.onClose,
                    o = e.src,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, o, i = function(e, t) {
                            if (null == e) return {};
                            var r, o, i = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, s);
                return i().createElement(u, y({
                    open: t,
                    width: "75vw",
                    closeIcon: !0,
                    onClose: r,
                    style: {
                        border: "none"
                    },
                    centered: !0
                }, a), i().createElement(d, {
                    title: "video",
                    src: "".concat(o, "?autoplay=1"),
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                }))
            }
            m.propTypes = {
                open: n().bool,
                onClose: n().func,
                src: n().string
            }
        },
        1986: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => I
            });
            var o = r(67294),
                i = r.n(o),
                a = (r(71150), r(71893)),
                n = r(83109),
                l = r(82229),
                c = r(44763),
                p = r(12252),
                u = a.ZP.div.withConfig({
                    displayName: "style__Container",
                    componentId: "sc-52ahkc-0"
                })(["margin-top:200px;padding:128px 0 95px;background:var(--color-bg-subtle);@media ", "{margin-top:128px;padding:48px 0;}"], n.We),
                d = (0, a.ZP)(p.W).withConfig({
                    displayName: "style__ViewAllContainer",
                    componentId: "sc-52ahkc-1"
                })(["@media ", "{padding:0 24px;}"], n.We),
                s = (0, a.ZP)(c.Z).withConfig({
                    displayName: "style__ViewAllLink",
                    componentId: "sc-52ahkc-2"
                })(["display:inline-block;margin-top:40px;color:var(--color-bd-pink);", " @media ", "{", "}"], l.FF, n.We, l.cl),
                y = [{
                    image: "https://i.ytimg.com/vi_webp/dm-RUo8kKPI/maxresdefault.webp",
                    title: "Keystone 3 Pro: CryptoDad's Ultimate Air-Gapped Crypto Wallet Guide",
                    videoId: "dm-RUo8kKPI",
                    author: "The CryptoDad",
                    date: "2023-10-12",
                    blog: "https://www.youtube.com/@CryptoDad"
                }, {
                    image: "https://i.ytimg.com/vi_webp/KMGFiP8x_SI/sddefault.webp",
                    title: "Keystone la Mejor Carteria Fria para tus CRYPTOS (La Mas Segura \u{1f510}) (TUTORIAL)",
                    videoId: "KMGFiP8x_SI",
                    author: "TecnoBoca",
                    date: "2024-04-26",
                    blog: "https://www.youtube.com/@tecnoboca"
                }, {
                    image: "\thttps://i.ytimg.com/vi/vdgcRbTOUK0/maxresdefault.jpg",
                    title: "Choosing a Secure Hardware Wallet",
                    videoId: "vdgcRbTOUK0",
                    author: "Just Crypto",
                    date: "2023-5-18",
                    blog: "https://www.youtube.com/@JustCrypto"
                }, {
                    image: "https://i.ytimg.com/vi_webp/eyi-YznynSk/maxresdefault.webp",
                    title: "Keystone 3 Pro - Air Gapped Defi Crypto Hardware Wallet (Cold Wallet) (Bitcoin, Ethereum)",
                    videoId: "eyi-YznynSk",
                    author: "Crypto Guide",
                    date: "2023-10-5",
                    blog: "https://www.youtube.com/@CryptoGuide"
                }, {
                    image: "https://i.ytimg.com/vi_webp/lra1iW6Tpjk/maxresdefault.webp",
                    title: "Keystone 3 Pro Review - New Crypto Hardware Wallet with unique security",
                    videoId: "lra1iW6Tpjk",
                    author: "Nordic Crypto",
                    date: "2023-10-6",
                    blog: "https://www.youtube.com/@NordicCrypto"
                }, {
                    image: "https://i.ytimg.com/vi/sP6jZ9024Cc/maxresdefault.jpg",
                    title: "Keystone 3 Pro Review: Most Secure Cold Wallet?",
                    videoId: "sP6jZ9024Cc",
                    author: "Cyber Scrilla",
                    date: "2023-10-12",
                    blog: "https://www.youtube.com/@cyberscrilla"
                }, {
                    image: "https://i.ytimg.com/vi_webp/Rlt-C-WTxq0/maxresdefault.webp",
                    title: "KEYSTONE 3 PRO VS. PRO: 3 WALLETS IN ONE (30% OFF!?!)",
                    videoId: "Rlt-C-WTxq0",
                    author: "Donald Lee",
                    date: "2023-8-9",
                    blog: "https://www.youtube.com/@DonaldLeeCrypto"
                }, {
                    image: "https://i.ytimg.com/vi_webp/0lxaGY7prOI/maxresdefault.webp",
                    title: "The BEST Ledger Alternative (Keystone Pro Cold Wallet Live Demo)",
                    videoId: "0lxaGY7prOI",
                    author: "Crypto Jay",
                    date: "2023-5-22",
                    blog: "https://www.youtube.com/@Crypto_Jay"
                }, {
                    image: "https://i.ytimg.com/vi/O8dxD5Tpr-k/maxresdefault.jpg",
                    title: "KEYSTONE - Portfel Sprzetowy CRYPTO \u{1f6e1}\ufe0f Integracja z OKX Web3 \u2705 Bezpiecze\u0144stwo + Wygoda i Wydajno\u015b\u0107",
                    videoId: "O8dxD5Tpr-k",
                    author: "Michal Lewicz",
                    date: "2023-9-16",
                    blog: "https://www.youtube.com/@MichalLewicz"
                }, {
                    image: "https://i.ytimg.com/vi/zZFrTe242z0/maxresdefault.jpg",
                    title: "I Just DESTROYED My Keystone Pro Gen-3 Crypto Hardware Wallet!",
                    videoId: "zZFrTe242z0",
                    author: "Crypto Renegade",
                    date: "2023-8-29",
                    blog: "https://www.youtube.com/@cryptorenegade"
                }, {
                    image: "https://i.ytimg.com/vi/EPdulN4eGoI/maxresdefault.jpg",
                    title: "Keystone Pro Gen-3 Crypto Hardware Wallet Unboxing/Review (2023)",
                    videoId: "EPdulN4eGoI",
                    author: "Crypto Renegade",
                    date: "2023-8-17",
                    blog: "https://www.youtube.com/@cryptorenegade"
                }],
                m = r(4098),
                w = r(97132),
                b = r(3888),
                g = r(83634),
                f = r(25373),
                h = r(34257);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        C(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function C(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var o, i, a = [],
                            n = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(n = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); n = !0);
                        } catch (e) {
                            l = !0, i = e
                        } finally {
                            try {
                                n || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return j(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function I() {
                var e, t, r, a = P((0, o.useState)([]), 2),
                    n = a[0],
                    l = a[1],
                    c = P((0, o.useState)({
                        open: !1,
                        url: ""
                    }), 2),
                    p = c[0],
                    v = c[1],
                    C = (0, h.Z)(),
                    j = (e = (0, w.YB)(), (0, m.S)("keystone"), t = (0, m.S)("keystone.home.userReviews"), r = (0, m.z)("keystone.home.userReviews"), {
                        subTitle: t("subTitle"),
                        title: e.formatMessage(r("title"), {
                            em: function(e) {
                                return i().createElement("em", null, e)
                            }
                        }),
                        viewAll: t("viewAll")
                    });
                return (0, o.useEffect)((function() {
                    l(y.map((function(e) {
                        return O(O({}, e), {}, {
                            key: e.title
                        })
                    })))
                }), []), i().createElement(u, null, i().createElement(g.Z, {
                    title: j.title,
                    list: n,
                    onSlideClick: function(e) {
                        var t = e.url ? e.url : e.videoId ? "https://www.youtube.com/embed/".concat(e.videoId) : null;
                        v({
                            open: !0,
                            url: t
                        })
                    },
                    width: C ? 280 : 1280
                }), i().createElement(f.Z, {
                    open: p.open,
                    src: p.url,
                    onClose: function() {
                        return v({
                            open: !1
                        })
                    }
                }), i().createElement(d, null, i().createElement(s, {
                    to: b.B.expertReviews
                }, j.viewAll)))
            }
        }
    }
]);