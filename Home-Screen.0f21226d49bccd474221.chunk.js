(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [8011], {
        58078: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => c
            });
            var n = r(67294),
                a = r.n(n),
                i = r(6501),
                o = ["src"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var c = function(e) {
                var t = e.src,
                    r = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                        }
                        return a
                    }(e, o),
                    c = (0, n.useRef)(null),
                    s = (0, i.J)({
                        src: t,
                        width: e.width,
                        height: e.height
                    }, c).imageSrc;
                return a().createElement("img", l({
                    ref: c,
                    src: s
                }, r))
            }
        },
        6501: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => l
            });
            var n = r(67294);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
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
                    var r, l, c = e.src,
                        s = e.width,
                        d = e.height,
                        p = (r = (0, n.useState)(!1), l = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(r) || function(e, t) {
                            var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [],
                                    o = !0,
                                    l = !1;
                                try {
                                    for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    l = !0, a = e
                                } finally {
                                    try {
                                        o || null == r.return || r.return()
                                    } finally {
                                        if (l) throw a
                                    }
                                }
                                return i
                            }
                        }(r, l) || function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return a(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                            }
                        }(r, l) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = p[0],
                        m = p[1];
                    return (0, n.useEffect)((function() {
                        if (null !== t && void 0 !== t && t.current) {
                            var e = new IntersectionObserver((function(t) {
                                t.forEach((function(t) {
                                    t.isIntersecting && (m(!0), e.unobserve(t.target))
                                }))
                            }), i);
                            return e.observe(t.current),
                                function() {
                                    e.unobserve(t.current)
                                }
                        }
                    }), []), {
                        imageSrc: u ? c : o(s, d)
                    }
                }
        },
        26300: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => h
            });
            var n = r(67294),
                a = r.n(n),
                i = r(71893),
                o = r(83109),
                l = r(12252),
                c = (0, i.ZP)(l.W).withConfig({
                    displayName: "style__BannerContainer",
                    componentId: "sc-1g5c6gd-0"
                })(["display:flex;justify-content:space-between;margin:120px auto 0;height:640px;.banner-main{width:420px;}.banner-grid-list{width:100%;flex-direction:column;gap:24px 0;.banner-grid-box{display:grid;width:100%;gap:0 16px;grid-template-columns:64px 1fr;grid-template-areas:'grid-icon grid-title' 'grid-icon grid-desc';img{grid-area:grid-icon;}em{grid-area:grid-title;}span{grid-area:grid-desc;}}}@media ", "{margin:52px auto 0;height:auto;flex-wrap:wrap;}"], o.We),
                s = r(4098),
                d = r(97132),
                p = r(26493);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function g(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var f = [r(67047), r(82441)];

            function h() {
                var e, t, i, o, l = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).themeColor,
                    u = (e = (0, d.YB)(), t = (0, s.S)("keystone"), i = (0, s.S)("keystone.home.screen"), o = (0, s.z)("keystone.home.screen"), {
                        title: e.formatMessage(o("title"), {
                            em: function(e) {
                                return a().createElement("em", null, e)
                            }
                        }),
                        desc: e.formatMessage(o("desc"), {
                            em: function(e) {
                                return a().createElement("em", null, e)
                            }
                        }),
                        gridList: Array.from({
                            length: 2
                        }).map((function(e, t) {
                            return {
                                title: i("gridList.t".concat(t + 1, ".title")),
                                desc: i("gridList.t".concat(t + 1, ".desc"))
                            }
                        })),
                        link: {
                            text: i("link"),
                            link: t("blog.assetsProtector")
                        }
                    }),
                    g = (0, n.useMemo)((function() {
                        return {
                            title: u.title,
                            desc: [u.desc],
                            gridList: u.gridList.map((function(e, t) {
                                return m(m({}, e), {}, {
                                    icon: f[t]
                                })
                            })),
                            image: r(89705),
                            link: u.link
                        }
                    }), []);
                return a().createElement(c, null, a().createElement(p.Z, {
                    data: g,
                    subTitleColor: "var(--color-fg-muted)",
                    themeColor: l,
                    reverse: !0
                }))
            }
        },
        26493: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => S
            });
            var n = r(67294),
                a = r.n(n),
                i = r(34257),
                o = r(71893),
                l = r(83109),
                c = r(93423),
                s = r(82229),
                d = r(49402),
                p = r(94100),
                u = r(34790),
                m = r(44763),
                g = o.ZP.div.withConfig({
                    displayName: "style__Container",
                    componentId: "sc-1a3ea8p-0"
                })(["display:flex;justify-content:", ";align-items:center;width:100%;@media ", "{flex-wrap:wrap;justify-content:center;height:auto;}"], (function(e) {
                    return e.reverse ? "flex-start" : "flex-end"
                }), l.We),
                f = (0, o.ZP)(m.Z).withConfig({
                    displayName: "style__BuyButtonLink",
                    componentId: "sc-1a3ea8p-1"
                })(["margin:0;@media ", "{margin:0 auto;width:100%;text-align:center;}"], l.We),
                h = (0, o.ZP)(u.Z).withConfig({
                    displayName: "style__BuyButton",
                    componentId: "sc-1a3ea8p-2"
                })(["margin-top:32px;border-image:", " 1 !important;@media ", "{margin:32px auto 0;}"], (function(e) {
                    return e.themeColor || "var(--color-bg-metamask)"
                }), l.We),
                y = (0, o.ZP)(m.Z).withConfig({
                    displayName: "style__Link",
                    componentId: "sc-1a3ea8p-3"
                })(["margin-top:32px;@media ", "{margin:18px auto;", "}"], l.We, s.cl),
                b = ((0, o.ZP)(p.Z).withConfig({
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
                w = o.ZP.div.attrs({
                    className: "banner-main"
                }).withConfig({
                    displayName: "style__Main",
                    componentId: "sc-1a3ea8p-6"
                })(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:640px;z-index:1;@media ", "{width:100%;height:auto;margin:0;padding:0 22px;}"], l.We),
                v = (0, o.ZP)(s.o1).attrs({
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
                C = (0, o.ZP)(c.uT).attrs({
                    className: "desc-item"
                }).withConfig({
                    displayName: "style__Desc",
                    componentId: "sc-1a3ea8p-9"
                })(["margin-top:32px;+ .desc-item{margin-top:8px;}color:var(--color-fg-subtle);> em{color:var(--color-fg-emphasis);}@media ", "{width:100%;margin-top:24px;text-align:center;", "}"], l.We, c.ub),
                E = (0, o.ZP)(d.bW).attrs({
                    className: "banner-grid-list"
                }).withConfig({
                    displayName: "style__GridList",
                    componentId: "sc-1a3ea8p-10"
                })(["margin-top:48px;gap:0 20px;@media ", "{justify-content:center;flex-wrap:wrap;width:100%;margin-top:40px;gap:8px;}"], l.We),
                _ = (0, o.ZP)(d.Lb).attrs({
                    className: "banner-grid-box"
                }).withConfig({
                    displayName: "style__GridBox",
                    componentId: "sc-1a3ea8p-11"
                })(["padding:16px;background:var(--color-bg-subtle);flex-direction:column;gap:8px 0;em{color:var(--color-fg-subtle);", ";}span{color:var(--color-fg-default);", "}@media ", "{padding:14px;em{", " white-space:nowrap;}span{", " white-space:nowrap;}}"], c.ub, s.cb, l.We, c.AF, s.cl),
                k = (0, o.ZP)(d.bW).withConfig({
                    displayName: "style__DescMultiList",
                    componentId: "sc-1a3ea8p-12"
                })(["flex-direction:column;align-items:flex-start;margin-top:64px;gap:24px 0;@media ", "{margin:40px auto 0;padding:0 20px;}"], l.We),
                O = (0, o.ZP)(d.Lb).withConfig({
                    displayName: "style__DescMultiListItem",
                    componentId: "sc-1a3ea8p-13"
                })(["flex-direction:column;align-items:flex-start;em{color:var(--color-fg-default);", ";}span{color:var(--color-fg-muted);", "}@media ", "{em{", "}span{", "}}"], s.Bw, c.Go, l.We, s.r0, c.AF),
                P = r(6501),
                j = r(58078),
                Z = r(68225);

            function S() {
                var e, t, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        data: {}
                    },
                    l = o.data,
                    c = o.className,
                    s = o.titleStyle,
                    d = o.mediaStyle,
                    p = o.themeColor,
                    u = o.subTitleColor,
                    m = o.reverse,
                    S = (0, i.Z)(),
                    I = (0, n.useRef)(null),
                    N = (0, P.J)({
                        src: l.image
                    }, I).imageSrc,
                    L = a().createElement(a().Fragment, null, (null === (e = l.descMultiList) || void 0 === e ? void 0 : e.length) && a().createElement(k, null, l.descMultiList.map((function(e, t) {
                        return a().createElement(O, {
                            key: e.title,
                            "data-aos": "fade-up",
                            "data-aos-delay": 100 * t
                        }, a().createElement("em", {
                            key: e.title
                        }, e.title), a().createElement("span", {
                            key: e.desc
                        }, e.desc))
                    }))), l.button && a().createElement(f, {
                        href: l.button.link,
                        blnak: l.button.blank,
                        arrow: !1
                    }, a().createElement(h, {
                        type: "primary",
                        themeColor: p,
                        icon: l.button.icon,
                        arrow: l.button.arrow,
                        "data-aos": "fade-up",
                        "data-aos-delay": 100
                    }, l.button.text)));
                return a().createElement(g, {
                    className: c,
                    reverse: m
                }, a().createElement(w, null, a().createElement(v, {
                    themeColor: p,
                    subTitleColor: u
                }, l.subTitle), a().createElement(x, {
                    themeColor: p,
                    customStyle: s
                }, l.title), l.desc && a().createElement(C, {
                    "data-aos": "fade-up"
                }, l.desc), (null === (t = l.descList) || void 0 === t ? void 0 : t.length) && a().createElement(a().Fragment, null, l.descList.map((function(e) {
                    return a().createElement(C, {
                        key: e,
                        "data-aos": "fade-up"
                    }, e)
                }))), (null === (r = l.gridList) || void 0 === r ? void 0 : r.length) && a().createElement(E, null, l.gridList.map((function(e, t) {
                    return a().createElement(_, {
                        themeColor: p,
                        key: e.title + e.desc,
                        "data-aos": "fade-up",
                        "data-aos-delay": 100 * t
                    }, e.icon && a().createElement("img", {
                        src: e.icon,
                        alt: e.title
                    }), a().createElement("em", {
                        key: e.title
                    }, e.title), a().createElement("span", {
                        key: e.desc
                    }, e.desc))
                }))), l.link && a().createElement(y, {
                    color: "var(--color-bd-pink)",
                    href: l.link.link,
                    "data-aos": "fade-up",
                    exit: !0,
                    blank: !0
                }, l.link.text), !S && L), a().createElement(b, {
                    ref: I,
                    role: "img",
                    "aria-label": (0, Z.nZ)(l.title),
                    backgroundImage: N,
                    reverse: m,
                    customStyle: d
                }, l.video && a().createElement("video", {
                    src: l.video,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0
                }), S && a().createElement(j.w, {
                    className: "img-hidden",
                    src: N,
                    alt: (0, Z.nZ)(l.title),
                    style: {
                        visibility: "hidden"
                    }
                })), S && L)
            }
        },
        67047: (e, t, r) => {
            e.exports = r.p + "67cca0d24785e7ecdb7860444511b573.svg"
        },
        82441: e => {
            e.exports = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M13 5H51V59H13V5Z' stroke='url(%23paint0_linear_5134_69331)' stroke-width='2'/%3E %3Crect x='17' y='9' width='30' height='41' fill='url(%23paint1_linear_5134_69331)' fill-opacity='0.3'/%3E %3Crect x='17' y='9' width='30' height='41' fill='url(%23paint2_radial_5134_69331)' fill-opacity='0.1'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 13H28V15H20V13ZM36 17V19H20V17H36ZM28 21H20V23H28V21Z' fill='url(%23paint3_linear_5134_69331)'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear_5134_69331' x1='52' y1='60' x2='-0.972973' y2='22.1622' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%233D71FF'/%3E %3Cstop offset='1' stop-color='%2393CEF5'/%3E %3C/linearGradient%3E %3ClinearGradient id='paint1_linear_5134_69331' x1='17' y1='9' x2='22.8223' y2='53.1858' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='white' stop-opacity='0.6'/%3E %3Cstop offset='1' stop-color='white' stop-opacity='0.1'/%3E %3C/linearGradient%3E %3CradialGradient id='paint2_radial_5134_69331' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(17 9) rotate(53.8068) scale(25.4018 26.4939)'%3E %3Cstop stop-color='white'/%3E %3Cstop offset='1' stop-color='white' stop-opacity='0.2'/%3E %3C/radialGradient%3E %3ClinearGradient id='paint3_linear_5134_69331' x1='28' y1='13' x2='28' y2='23' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%23D8E9F5'/%3E %3Cstop offset='1' stop-color='%2393CEF5'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E"
        },
        89705: (e, t, r) => {
            e.exports = r.p + "app/pages/Home/features/Keystone3/Screen/assets/banner-ee57e1211b38b075b901005dca625334.jpg"
        }
    }
]);