(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [9492], {
        58078: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => c
            });
            var a = n(67294),
                r = n.n(a),
                i = n(6501),
                o = ["src"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var c = function(e) {
                var t = e.src,
                    n = function(e, t) {
                        if (null == e) return {};
                        var n, a, r = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, o),
                    c = (0, a.useRef)(null),
                    s = (0, i.J)({
                        src: t,
                        width: e.width,
                        height: e.height
                    }, c).imageSrc;
                return r().createElement("img", l({
                    ref: c,
                    src: s
                }, n))
            }
        },
        6501: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => l
            });
            var a = n(67294);

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var i = {
                    threshold: 0,
                    rootMargin: "100%"
                },
                o = function() {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450;
                    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800, " ").concat(e, '"%3E%3C/svg%3E')
                },
                l = function(e, t) {
                    var n, l, c = e.src,
                        s = e.width,
                        d = e.height,
                        u = (n = (0, a.useState)(!1), l = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n) || function(e, t) {
                            var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var a, r, i = [],
                                    o = !0,
                                    l = !1;
                                try {
                                    for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    l = !0, r = e
                                } finally {
                                    try {
                                        o || null == n.return || n.return()
                                    } finally {
                                        if (l) throw r
                                    }
                                }
                                return i
                            }
                        }(n, l) || function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return r(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                            }
                        }(n, l) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        m = u[0],
                        p = u[1];
                    return (0, a.useEffect)((function() {
                        if (null !== t && void 0 !== t && t.current) {
                            var e = new IntersectionObserver((function(t) {
                                t.forEach((function(t) {
                                    t.isIntersecting && (p(!0), e.unobserve(t.target))
                                }))
                            }), i);
                            return e.observe(t.current),
                                function() {
                                    e.unobserve(t.current)
                                }
                        }
                    }), []), {
                        imageSrc: m ? c : o(s, d)
                    }
                }
        },
        90746: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => m
            });
            var a = n(67294),
                r = n.n(a),
                i = n(71893),
                o = n(83109),
                l = n(12252),
                c = (0, i.ZP)(l.W).withConfig({
                    displayName: "style__BannerContainer",
                    componentId: "bdwvd4-0"
                })(["display:flex;justify-content:space-between;margin:0 auto;height:640px;@media ", "{margin:52px auto 0;height:auto;flex-wrap:wrap;.banner-grid-list{width:100%;.banner-grid-box{flex:1;width:100%;:first-child{flex:auto;}}}}"], o.We),
                s = n(4098),
                d = n(97132),
                u = n(26493);

            function m() {
                var e, t, i, o, l = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).themeColor,
                    m = (e = (0, d.YB)(), t = (0, s.S)("keystone"), i = (0, s.S)("keystone.home.security"), o = (0, s.z)("keystone.home.security"), {
                        title: e.formatMessage(o("title"), {
                            em: function(e) {
                                return r().createElement("em", null, e)
                            }
                        }),
                        desc: e.formatMessage(o("desc"), {
                            em: function(e) {
                                return r().createElement("em", null, e)
                            }
                        }),
                        gridList: Array.from({
                            length: 3
                        }).map((function(e, t) {
                            return {
                                title: i("gridList.t".concat(t + 1, ".title")),
                                desc: i("gridList.t".concat(t + 1, ".desc"))
                            }
                        })),
                        link: {
                            text: i("link"),
                            link: t("blog.secureElements")
                        }
                    }),
                    p = (0, a.useMemo)((function() {
                        return {
                            title: m.title,
                            desc: [m.desc],
                            gridList: m.gridList,
                            link: m.link,
                            image: n(95235)
                        }
                    }), []);
                return r().createElement(c, null, r().createElement(u.Z, {
                    data: p,
                    subTitleColor: "var(--color-fg-muted)",
                    themeColor: l,
                    reverse: !0
                }))
            }
        },
        26493: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => P
            });
            var a = n(67294),
                r = n.n(a),
                i = n(34257),
                o = n(71893),
                l = n(83109),
                c = n(93423),
                s = n(82229),
                d = n(49402),
                u = n(94100),
                m = n(34790),
                p = n(44763),
                g = o.ZP.div.withConfig({
                    displayName: "style__Container",
                    componentId: "sc-1a3ea8p-0"
                })(["display:flex;justify-content:", ";align-items:center;width:100%;@media ", "{flex-wrap:wrap;justify-content:center;height:auto;}"], (function(e) {
                    return e.reverse ? "flex-start" : "flex-end"
                }), l.We),
                f = (0, o.ZP)(p.Z).withConfig({
                    displayName: "style__BuyButtonLink",
                    componentId: "sc-1a3ea8p-1"
                })(["margin:0;@media ", "{margin:0 auto;width:100%;text-align:center;}"], l.We),
                h = (0, o.ZP)(m.Z).withConfig({
                    displayName: "style__BuyButton",
                    componentId: "sc-1a3ea8p-2"
                })(["margin-top:32px;border-image:", " 1 !important;@media ", "{margin:32px auto 0;}"], (function(e) {
                    return e.themeColor || "var(--color-bg-metamask)"
                }), l.We),
                y = (0, o.ZP)(p.Z).withConfig({
                    displayName: "style__Link",
                    componentId: "sc-1a3ea8p-3"
                })(["margin-top:32px;@media ", "{margin:18px auto;", "}"], l.We, s.cl),
                b = ((0, o.ZP)(u.Z).withConfig({
                    displayName: "style__CartIcon",
                    componentId: "sc-1a3ea8p-4"
                })(["color:var(--color-bd-cyan);"]), (0, o.ZP)(d.jk).attrs({
                    className: "banner-media"
                }).withConfig({
                    displayName: "style__BannerMedia",
                    componentId: "sc-1a3ea8p-5"
                })(["position:absolute;width:100%;height:100%;top:0;left:0;right:0;background-image:url(", ");background-size:contain;background-position:center ", ";video{width:100%;}@media ", "{position:relative;min-width:auto;margin:32px auto 0;width:100%;max-width:400px;height:auto;background-position:center;order:0;.img-hidden{width:100%;}", ""], (function(e) {
                    return e.backgroundImage
                }), (function(e) {
                    return e.reverse ? "right" : "left"
                }), l.We, (function(e) {
                    return e.customStyle || ""
                }))),
                v = o.ZP.div.attrs({
                    className: "banner-main"
                }).withConfig({
                    displayName: "style__Main",
                    componentId: "sc-1a3ea8p-6"
                })(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:640px;z-index:1;@media ", "{width:100%;height:auto;margin:0;padding:0 22px;}"], l.We),
                w = (0, o.ZP)(s.o1).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__SubTitle",
                    componentId: "sc-1a3ea8p-7"
                })(["background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;@media ", "{text-align:center;width:100%;", "}"], (function(e) {
                    var t = e.themeColor;
                    return e.subTitleColor || t || "var(--color-bg-metamask)"
                }), l.We, s._7),
                x = (0, o.ZP)(s.H2).attrs({
                    className: "desc-title",
                    as: "h4"
                }).withConfig({
                    displayName: "style__Title",
                    componentId: "sc-1a3ea8p-8"
                })(["margin-top:16px;color:var(--color-fg-default);> em{display:inline-block;background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;}@media ", "{margin-top:16px;width:100%;text-align:center;", "}", ""], (function(e) {
                    return e.themeColor || "var(--color-bg-metamask)"
                }), l.We, s.rU, (function(e) {
                    return e.customStyle || ""
                })),
                k = (0, o.ZP)(c.uT).attrs({
                    className: "desc-item"
                }).withConfig({
                    displayName: "style__Desc",
                    componentId: "sc-1a3ea8p-9"
                })(["margin-top:32px;+ .desc-item{margin-top:8px;}color:var(--color-fg-subtle);> em{color:var(--color-fg-emphasis);}@media ", "{width:100%;margin-top:24px;text-align:center;", "}"], l.We, c.ub),
                C = (0, o.ZP)(d.bW).attrs({
                    className: "banner-grid-list"
                }).withConfig({
                    displayName: "style__GridList",
                    componentId: "sc-1a3ea8p-10"
                })(["margin-top:48px;gap:0 20px;@media ", "{justify-content:center;flex-wrap:wrap;width:100%;margin-top:40px;gap:8px;}"], l.We),
                E = (0, o.ZP)(d.Lb).attrs({
                    className: "banner-grid-box"
                }).withConfig({
                    displayName: "style__GridBox",
                    componentId: "sc-1a3ea8p-11"
                })(["padding:16px;background:var(--color-bg-subtle);flex-direction:column;gap:8px 0;em{color:var(--color-fg-subtle);", ";}span{color:var(--color-fg-default);", "}@media ", "{padding:14px;em{", " white-space:nowrap;}span{", " white-space:nowrap;}}"], c.ub, s.cb, l.We, c.AF, s.cl),
                _ = (0, o.ZP)(d.bW).withConfig({
                    displayName: "style__DescMultiList",
                    componentId: "sc-1a3ea8p-12"
                })(["flex-direction:column;align-items:flex-start;margin-top:64px;gap:24px 0;@media ", "{margin:40px auto 0;padding:0 20px;}"], l.We),
                I = (0, o.ZP)(d.Lb).withConfig({
                    displayName: "style__DescMultiListItem",
                    componentId: "sc-1a3ea8p-13"
                })(["flex-direction:column;align-items:flex-start;em{color:var(--color-fg-default);", ";}span{color:var(--color-fg-muted);", "}@media ", "{em{", "}span{", "}}"], s.Bw, c.Go, l.We, s.r0, c.AF),
                N = n(6501),
                Z = n(58078),
                S = n(68225);

            function P() {
                var e, t, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        data: {}
                    },
                    l = o.data,
                    c = o.className,
                    s = o.titleStyle,
                    d = o.mediaStyle,
                    u = o.themeColor,
                    m = o.subTitleColor,
                    p = o.reverse,
                    P = (0, i.Z)(),
                    L = (0, a.useRef)(null),
                    W = (0, N.J)({
                        src: l.image
                    }, L).imageSrc,
                    j = r().createElement(r().Fragment, null, (null === (e = l.descMultiList) || void 0 === e ? void 0 : e.length) && r().createElement(_, null, l.descMultiList.map((function(e, t) {
                        return r().createElement(I, {
                            key: e.title,
                            "data-aos": "fade-up",
                            "data-aos-delay": 100 * t
                        }, r().createElement("em", {
                            key: e.title
                        }, e.title), r().createElement("span", {
                            key: e.desc
                        }, e.desc))
                    }))), l.button && r().createElement(f, {
                        href: l.button.link,
                        blnak: l.button.blank,
                        arrow: !1
                    }, r().createElement(h, {
                        type: "primary",
                        themeColor: u,
                        icon: l.button.icon,
                        arrow: l.button.arrow,
                        "data-aos": "fade-up",
                        "data-aos-delay": 100
                    }, l.button.text)));
                return r().createElement(g, {
                    className: c,
                    reverse: p
                }, r().createElement(v, null, r().createElement(w, {
                    themeColor: u,
                    subTitleColor: m
                }, l.subTitle), r().createElement(x, {
                    themeColor: u,
                    customStyle: s
                }, l.title), l.desc && r().createElement(k, {
                    "data-aos": "fade-up"
                }, l.desc), (null === (t = l.descList) || void 0 === t ? void 0 : t.length) && r().createElement(r().Fragment, null, l.descList.map((function(e) {
                    return r().createElement(k, {
                        key: e,
                        "data-aos": "fade-up"
                    }, e)
                }))), (null === (n = l.gridList) || void 0 === n ? void 0 : n.length) && r().createElement(C, null, l.gridList.map((function(e, t) {
                    return r().createElement(E, {
                        themeColor: u,
                        key: e.title + e.desc,
                        "data-aos": "fade-up",
                        "data-aos-delay": 100 * t
                    }, e.icon && r().createElement("img", {
                        src: e.icon,
                        alt: e.title
                    }), r().createElement("em", {
                        key: e.title
                    }, e.title), r().createElement("span", {
                        key: e.desc
                    }, e.desc))
                }))), l.link && r().createElement(y, {
                    color: "var(--color-bd-pink)",
                    href: l.link.link,
                    "data-aos": "fade-up",
                    exit: !0,
                    blank: !0
                }, l.link.text), !P && j), r().createElement(b, {
                    ref: L,
                    role: "img",
                    "aria-label": (0, S.nZ)(l.title),
                    backgroundImage: W,
                    reverse: p,
                    customStyle: d
                }, l.video && r().createElement("video", {
                    src: l.video,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0
                }), P && r().createElement(Z.w, {
                    className: "img-hidden",
                    src: W,
                    alt: (0, S.nZ)(l.title),
                    style: {
                        visibility: "hidden"
                    }
                })), P && j)
            }
        },
        95235: (e, t, n) => {
            e.exports = n.p + "app/pages/Home/features/Keystone3/Security/assets/banner-e981d074e290e613ecb67e63e4f44626.jpg"
        }
    }
]);