(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [572], {
        58078: (e, t, a) => {
            "use strict";
            a.d(t, {
                w: () => s
            });
            var n = a(67294),
                r = a.n(n),
                i = a(6501),
                o = ["src"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var s = function(e) {
                var t = e.src,
                    a = function(e, t) {
                        if (null == e) return {};
                        var a, n, r = function(e, t) {
                            if (null == e) return {};
                            var a, n, r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) a = i[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) a = i[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                        }
                        return r
                    }(e, o),
                    s = (0, n.useRef)(null),
                    c = (0, i.J)({
                        src: t,
                        width: e.width,
                        height: e.height
                    }, s).imageSrc;
                return r().createElement("img", l({
                    ref: s,
                    src: c
                }, a))
            }
        },
        6501: (e, t, a) => {
            "use strict";
            a.d(t, {
                J: () => l
            });
            var n = a(67294);

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
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
                    var a, l, s = e.src,
                        c = e.width,
                        d = e.height,
                        m = (a = (0, n.useState)(!1), l = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(a) || function(e, t) {
                            var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != a) {
                                var n, r, i = [],
                                    o = !0,
                                    l = !1;
                                try {
                                    for (a = a.call(e); !(o = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    l = !0, r = e
                                } finally {
                                    try {
                                        o || null == a.return || a.return()
                                    } finally {
                                        if (l) throw r
                                    }
                                }
                                return i
                            }
                        }(a, l) || function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return r(e, t);
                                var a = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? r(e, t) : void 0
                            }
                        }(a, l) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = m[0],
                        p = m[1];
                    return (0, n.useEffect)((function() {
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
                        imageSrc: u ? s : o(c, d)
                    }
                }
        },
        85956: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => u
            });
            var n = a(67294),
                r = a.n(n),
                i = a(71893),
                o = a(83109),
                l = a(12252),
                s = (0, i.ZP)(l.W).withConfig({
                    displayName: "style__BannerContainer",
                    componentId: "sc-16xjrqk-0"
                })(["display:flex;justify-content:space-between;margin:120px auto 0;height:640px;.banner-main{width:600px;align-items:flex-end;.desc-title,.desc-item{width:420px;}}.banner-grid-list{width:100%;.banner-grid-box{flex:1;}}@media ", "{margin:96px auto 0;height:auto;flex-wrap:wrap;.banner-main{width:100%;align-items:flex-end;.desc-title,.desc-item{width:100%;}}.banner-grid-list{width:100%;.banner-grid-box{width:100%;:first-child{flex:auto;}}}}"], o.We),
                c = a(4098),
                d = a(97132),
                m = a(26493);

            function u() {
                var e, t, i, o, l = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).themeColor,
                    u = (e = (0, d.YB)(), t = (0, c.S)("keystone"), i = (0, c.S)("keystone.home.passphrase"), o = (0, c.z)("keystone.home.passphrase"), {
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
                            link: t("blog.multiSecretPassphrase")
                        }
                    }),
                    p = (0, n.useMemo)((function() {
                        return {
                            title: u.title,
                            desc: [u.desc],
                            gridList: u.gridList,
                            image: a(62934),
                            link: u.link
                        }
                    }), []);
                return r().createElement(s, null, r().createElement(m.Z, {
                    data: p,
                    subTitleColor: "var(--color-fg-muted)",
                    themeColor: l
                }))
            }
        },
        26493: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => S
            });
            var n = a(67294),
                r = a.n(n),
                i = a(34257),
                o = a(71893),
                l = a(83109),
                s = a(93423),
                c = a(82229),
                d = a(49402),
                m = a(94100),
                u = a(34790),
                p = a(44763),
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
                h = (0, o.ZP)(u.Z).withConfig({
                    displayName: "style__BuyButton",
                    componentId: "sc-1a3ea8p-2"
                })(["margin-top:32px;border-image:", " 1 !important;@media ", "{margin:32px auto 0;}"], (function(e) {
                    return e.themeColor || "var(--color-bg-metamask)"
                }), l.We),
                b = (0, o.ZP)(p.Z).withConfig({
                    displayName: "style__Link",
                    componentId: "sc-1a3ea8p-3"
                })(["margin-top:32px;@media ", "{margin:18px auto;", "}"], l.We, c.cl),
                y = ((0, o.ZP)(m.Z).withConfig({
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
                x = o.ZP.div.attrs({
                    className: "banner-main"
                }).withConfig({
                    displayName: "style__Main",
                    componentId: "sc-1a3ea8p-6"
                })(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:640px;z-index:1;@media ", "{width:100%;height:auto;margin:0;padding:0 22px;}"], l.We),
                v = (0, o.ZP)(c.o1).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__SubTitle",
                    componentId: "sc-1a3ea8p-7"
                })(["background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;@media ", "{text-align:center;width:100%;", "}"], (function(e) {
                    var t = e.themeColor;
                    return e.subTitleColor || t || "var(--color-bg-metamask)"
                }), l.We, c._7),
                w = (0, o.ZP)(c.H2).attrs({
                    className: "desc-title",
                    as: "h4"
                }).withConfig({
                    displayName: "style__Title",
                    componentId: "sc-1a3ea8p-8"
                })(["margin-top:16px;color:var(--color-fg-default);> em{display:inline-block;background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;}@media ", "{margin-top:16px;width:100%;text-align:center;", "}", ""], (function(e) {
                    return e.themeColor || "var(--color-bg-metamask)"
                }), l.We, c.rU, (function(e) {
                    return e.customStyle || ""
                })),
                k = (0, o.ZP)(s.uT).attrs({
                    className: "desc-item"
                }).withConfig({
                    displayName: "style__Desc",
                    componentId: "sc-1a3ea8p-9"
                })(["margin-top:32px;+ .desc-item{margin-top:8px;}color:var(--color-fg-subtle);> em{color:var(--color-fg-emphasis);}@media ", "{width:100%;margin-top:24px;text-align:center;", "}"], l.We, s.ub),
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
                })(["padding:16px;background:var(--color-bg-subtle);flex-direction:column;gap:8px 0;em{color:var(--color-fg-subtle);", ";}span{color:var(--color-fg-default);", "}@media ", "{padding:14px;em{", " white-space:nowrap;}span{", " white-space:nowrap;}}"], s.ub, c.cb, l.We, s.AF, c.cl),
                _ = (0, o.ZP)(d.bW).withConfig({
                    displayName: "style__DescMultiList",
                    componentId: "sc-1a3ea8p-12"
                })(["flex-direction:column;align-items:flex-start;margin-top:64px;gap:24px 0;@media ", "{margin:40px auto 0;padding:0 20px;}"], l.We),
                I = (0, o.ZP)(d.Lb).withConfig({
                    displayName: "style__DescMultiListItem",
                    componentId: "sc-1a3ea8p-13"
                })(["flex-direction:column;align-items:flex-start;em{color:var(--color-fg-default);", ";}span{color:var(--color-fg-muted);", "}@media ", "{em{", "}span{", "}}"], c.Bw, s.Go, l.We, c.r0, s.AF),
                N = a(6501),
                Z = a(58078),
                P = a(68225);

            function S() {
                var e, t, a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        data: {}
                    },
                    l = o.data,
                    s = o.className,
                    c = o.titleStyle,
                    d = o.mediaStyle,
                    m = o.themeColor,
                    u = o.subTitleColor,
                    p = o.reverse,
                    S = (0, i.Z)(),
                    L = (0, n.useRef)(null),
                    j = (0, N.J)({
                        src: l.image
                    }, L).imageSrc,
                    W = r().createElement(r().Fragment, null, (null === (e = l.descMultiList) || void 0 === e ? void 0 : e.length) && r().createElement(_, null, l.descMultiList.map((function(e, t) {
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
                        themeColor: m,
                        icon: l.button.icon,
                        arrow: l.button.arrow,
                        "data-aos": "fade-up",
                        "data-aos-delay": 100
                    }, l.button.text)));
                return r().createElement(g, {
                    className: s,
                    reverse: p
                }, r().createElement(x, null, r().createElement(v, {
                    themeColor: m,
                    subTitleColor: u
                }, l.subTitle), r().createElement(w, {
                    themeColor: m,
                    customStyle: c
                }, l.title), l.desc && r().createElement(k, {
                    "data-aos": "fade-up"
                }, l.desc), (null === (t = l.descList) || void 0 === t ? void 0 : t.length) && r().createElement(r().Fragment, null, l.descList.map((function(e) {
                    return r().createElement(k, {
                        key: e,
                        "data-aos": "fade-up"
                    }, e)
                }))), (null === (a = l.gridList) || void 0 === a ? void 0 : a.length) && r().createElement(C, null, l.gridList.map((function(e, t) {
                    return r().createElement(E, {
                        themeColor: m,
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
                }))), l.link && r().createElement(b, {
                    color: "var(--color-bd-pink)",
                    href: l.link.link,
                    "data-aos": "fade-up",
                    exit: !0,
                    blank: !0
                }, l.link.text), !S && W), r().createElement(y, {
                    ref: L,
                    role: "img",
                    "aria-label": (0, P.nZ)(l.title),
                    backgroundImage: j,
                    reverse: p,
                    customStyle: d
                }, l.video && r().createElement("video", {
                    src: l.video,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0
                }), S && r().createElement(Z.w, {
                    className: "img-hidden",
                    src: j,
                    alt: (0, P.nZ)(l.title),
                    style: {
                        visibility: "hidden"
                    }
                })), S && W)
            }
        },
        62934: (e, t, a) => {
            e.exports = a.p + "app/pages/Home/features/Keystone3/Passphrase/assets/banner-e164d47867b525cd4dea9b6cf3d38a94.jpg"
        }
    }
]);