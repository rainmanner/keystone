"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [4495], {
        81226: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o = n(67294),
                r = n.n(o),
                i = n(48300),
                a = n(97396),
                l = ["width", "height", "color"];

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? "64" : t,
                    o = e.height,
                    a = void 0 === o ? "64" : o,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    s = function(e, t) {
                        if (null == e) return {};
                        var n, o, r = function(e, t) {
                            if (null == e) return {};
                            var n, o, r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, l);
                return r().createElement(i.Z, s, r().createElement("svg", {
                    width: n,
                    height: a,
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r().createElement("path", {
                    d: "M32 4C16.5375 4 4 16.5375 4 32C4 47.4625 16.5375 60 32 60C47.4625 60 60 47.4625 60 32C60 16.5375 47.4625 4 32 4ZM41.0063 32.4313L27.3563 42.3625C27.2814 42.4163 27.1932 42.4484 27.1013 42.4553C27.0094 42.4622 26.9174 42.4436 26.8354 42.4016C26.7533 42.3597 26.6845 42.2959 26.6363 42.2173C26.5882 42.1387 26.5627 42.0484 26.5625 41.9562V22.1063C26.5622 22.0139 26.5875 21.9233 26.6355 21.8444C26.6836 21.7656 26.7525 21.7016 26.8347 21.6595C26.9169 21.6175 27.0091 21.599 27.1012 21.6061C27.1933 21.6133 27.2815 21.6458 27.3563 21.7L41.0063 31.625C41.0707 31.6706 41.1233 31.731 41.1596 31.8012C41.196 31.8713 41.2149 31.9491 41.2149 32.0281C41.2149 32.1071 41.196 32.1849 41.1596 32.2551C41.1233 32.3252 41.0707 32.3856 41.0063 32.4313Z",
                    fill: d
                })))
            }
            c.propTypes = a.Q
        },
        35343: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o = n(67294),
                r = n.n(o),
                i = n(48300),
                a = n(97396),
                l = ["width", "height"];

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? "48" : t,
                    o = e.height,
                    a = void 0 === o ? "48" : o,
                    c = function(e, t) {
                        if (null == e) return {};
                        var n, o, r = function(e, t) {
                            if (null == e) return {};
                            var n, o, r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, l);
                return r().createElement(i.Z, c, r().createElement("svg", {
                    width: n,
                    height: a,
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r().createElement("path", {
                    d: "M43.086 12.996C44 16.56 44 24 44 24C44 24 44 31.44 43.086 35.004C42.578 36.974 41.092 38.524 39.21 39.048C35.792 40 24 40 24 40C24 40 12.214 40 8.79 39.048C6.9 38.516 5.416 36.968 4.914 35.004C4 31.44 4 24 4 24C4 24 4 16.56 4.914 12.996C5.422 11.026 6.908 9.476 8.79 8.952C12.214 8 24 8 24 8C24 8 35.792 8 39.21 8.952C41.1 9.484 42.584 11.032 43.086 12.996Z",
                    fill: "#FF0000"
                }), r().createElement("path", {
                    d: "M32 24L20 31V17L32 24Z",
                    fill: "white"
                })))
            }
            c.propTypes = a.Q
        },
        83634: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var o = n(67294),
                r = n.n(o),
                i = n(89995),
                a = n(50221),
                l = n(34257),
                c = n(42268),
                d = n(81226),
                s = n(35343);

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, r, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            l = !0, r = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return i
                    }
                }(e, t) || p(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                if (e) {
                    if ("string" === typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (e.image, e.title),
                    n = e.author,
                    o = e.url,
                    i = (e.blog, e.date);
                return r().createElement(c.rs, {
                    href: o,
                    target: "_blank"
                }, r().createElement(d.Z, {
                    className: "play-circle-icon",
                    color: "var(--color-fg-muted)"
                }), r().createElement(c.an, null, t), r().createElement(c.xn, null, r().createElement(c.Vs, null, r().createElement(c.Bc, null, n), r().createElement(c.PR, null, r().createElement("span", null, "|"), r().createElement("span", null, i))), r().createElement(s.Z, {
                    className: "youtube-icon"
                })), r().createElement(c.Ng, null, r().createElement(d.Z, {
                    color: "var(--color-fg-muted)"
                })))
            }
            var h = 2;

            function g() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.title,
                    n = e.list,
                    d = e.customSlideRender,
                    s = e.onSlideClick,
                    g = e.perView,
                    y = e.spaceBetween,
                    w = e.width,
                    v = m((0, o.useState)(null), 2),
                    b = v[0],
                    x = v[1],
                    C = m((0, o.useState)(0), 2),
                    E = C[0],
                    _ = C[1],
                    S = (0, l.Z)(),
                    k = m((0, o.useState)([]), 2),
                    I = k[0],
                    Z = k[1];

                function N(e) {
                    b && ("next" === e ? b.slideTo(b.realIndex + h) : b.slideTo(b.realIndex - h))
                }(0, o.useEffect)((function() {
                    var e;
                    Z(S ? [n.pop()].concat(function(e) {
                        if (Array.isArray(e)) return u(e)
                    }(e = n) || function(e) {
                        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || p(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()) : n)
                }), [n]);
                var P = (0, o.useMemo)((function() {
                    return E >= n.length - (g || (S ? 1 : 3))
                }), [E, n]);
                return r().createElement(r().Fragment, null, r().createElement(c.W2, null, r().createElement(c._u, null, r().createElement(c.G2, null, r().createElement(c.Dx, null, t)), r().createElement(c.I3, null, r().createElement(c.$b, {
                    arrowStyle: {
                        transform: "rotate(-180deg) translate(1px,-1px) !important"
                    },
                    onClick: function() {
                        return N("prev")
                    },
                    disabled: 0 === E
                }), r().createElement(c.$b, {
                    onClick: function() {
                        return N("next")
                    },
                    disabled: P
                })))), r().createElement(c.or, null, r().createElement(c.hv, {
                    slidesPerView: g || (S ? 1 : 3),
                    spaceBetween: y || (S ? 10 : 32),
                    onSwiper: function(e) {
                        return x(t = e), t.slideTo(S ? 1 : 0), void t.on("slideChange", (function(e) {
                            _(e.realIndex)
                        }));
                        var t
                    },
                    modules: [i.tl],
                    width: w || (S ? 320 : 1280),
                    centeredSlides: S
                }, I.map((function(e, t) {
                    return r().createElement(a.o5, {
                        key: (null === e || void 0 === e ? void 0 : e.key) || "swiper-slice-".concat(t),
                        onClick: function() {
                            return null === s || void 0 === s ? void 0 : s(e)
                        }
                    }, d ? d(e) : r().createElement(f, e))
                })))))
            }
        },
        42268: (e, t, n) => {
            n.d(t, {
                $b: () => v,
                Bc: () => _,
                Dx: () => y,
                G2: () => h,
                I3: () => w,
                Ng: () => C,
                PR: () => S,
                Vs: () => E,
                W2: () => p,
                _u: () => f,
                an: () => k,
                hv: () => u,
                or: () => g,
                rs: () => b,
                xn: () => x
            });
            var o = n(71893),
                r = n(83109),
                i = n(82229),
                a = n(49402),
                l = n(34790),
                c = n(93423),
                d = n(50221),
                s = n(12252),
                m = n(44763),
                p = (0, o.ZP)(s.W).withConfig({
                    displayName: "style__Container",
                    componentId: "etm68x-0"
                })([""]),
                u = (0, o.ZP)(d.tq).withConfig({
                    displayName: "style__SwiperWrapper",
                    componentId: "etm68x-1"
                })([".swiper-wrapper{margin:0 auto;width:1280px;}@media ", "{.swiper-wrapper{width:100%;padding:0 24px;}}"], r.We),
                f = (0, o.ZP)(a.$9).withConfig({
                    displayName: "style__HeaderBox",
                    componentId: "etm68x-2"
                })(["align-items:flex-end;@media ", "{padding:0 24px;}"], r.We),
                h = (0, o.ZP)(a.$9).withConfig({
                    displayName: "style__HeadTitle",
                    componentId: "etm68x-3"
                })(["align-items:flex-start;flex-direction:column;"]),
                g = o.ZP.div.withConfig({
                    displayName: "style__Main",
                    componentId: "etm68x-4"
                })(["width:100%;margin-top:80px;@media ", "{margin-top:48px;height:auto;}"], r.We),
                y = (0, o.ZP)(i.H2).withConfig({
                    displayName: "style__Title",
                    componentId: "etm68x-5"
                })(["margin-top:16px;color:var(--color-fg-default);span{background-size:160%;}span:nth-child(2){background-position:100% 0;}@media ", "{margin-top:16px;width:100%;text-align:center;", "}"], r.We, i.Bw),
                w = ((0, o.ZP)(i.H2).attrs({
                    as: "span"
                }).withConfig({
                    displayName: "style__TitleEm",
                    componentId: "etm68x-6"
                })(["background:var(--color-bg-metamask);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;"]), (0, o.ZP)(a.$9).withConfig({
                    displayName: "style__VideoPagination",
                    componentId: "etm68x-7"
                })(["gap:0 32px;@media ", "{display:none;}"], r.We)),
                v = (0, o.ZP)(l.Z).attrs({
                    className: "btn-circle video-pagination",
                    arrow: !0
                }).withConfig({
                    displayName: "style__VideoPaginationButton",
                    componentId: "etm68x-8"
                })(["&.btn-circle{--background-color:var(--color-bg-subtle);width:56px;height:56px;.btn-icon-arrow{color:var(--color-fg-emphasis);}}", ""], (function(e) {
                    return e.arrowStyle ? "\n        .btn-icon-arrow {\n          ".concat((0, o.iv)(e.arrowStyle), "\n        }\n        &:hover {\n          .btn-icon-arrow {\n            ").concat((0, o.iv)(e.arrowStyle), "\n          }\n        }\n      ") : ""
                })),
                b = o.ZP.a.withConfig({
                    displayName: "style__VideoSlideContainer",
                    componentId: "etm68x-9"
                })(["display:flex;flex-direction:column;justify-content:space-between;padding:24px 32px;width:100%;height:316px;background:var(--color-bg-muted) ", " no-repeat center / cover;cursor:pointer;.video-slide-fixed-mask{opacity:0;}:hover{.video-slide-fixed-mask{opacity:1;}}@media ", "{padding:16px;height:208px;.play-circle-icon svg{width:48px;height:48px;}}"], (function(e) {
                    return e.bg ? "url(".concat(e.bg, ")") : ""
                }), r.We),
                x = (o.ZP.div.withConfig({
                    displayName: "style__VideoSlideImage",
                    componentId: "etm68x-10"
                })(["height:235px;> img{width:100%;height:100%;object-fit:contain;}@media ", "{height:auto;}"], r.We), o.ZP.div.withConfig({
                    displayName: "style__VideoSlideFooter",
                    componentId: "etm68x-11"
                })(["display:flex;justify-content:space-between;@media ", "{.youtube-icon svg{width:32px;height:32px;}}"], r.We)),
                C = o.ZP.div.attrs({
                    className: "video-slide-fixed-mask"
                }).withConfig({
                    displayName: "style__VideoSlideFixedMask",
                    componentId: "etm68x-12"
                })(["position:absolute;display:flex;justify-content:center;align-items:center;top:0;left:0;width:100%;height:100%;background:rgba(17,18,20,0.6);backdrop-filter:blur(4px);transition:var(--transition);"]),
                E = (0, o.ZP)(a.bW).withConfig({
                    displayName: "style__VideoSlideInfo",
                    componentId: "etm68x-13"
                })(["gap:0 16px;white-space:nowrap;", " @media ", "{gap:0 10px;}"], c.Tf, r.We),
                _ = o.ZP.div.withConfig({
                    displayName: "style__VideoSlideAuthor",
                    componentId: "etm68x-14"
                })(["color:var(--color-fg-muted);:hover{color:var(--color-fg-default);}"]),
                S = (0, o.ZP)(c.YS).withConfig({
                    displayName: "style__VideoSlideExtra",
                    componentId: "etm68x-15"
                })(["display:flex;gap:0 16px;color:var(--color-fg-subtle);@media ", "{gap:0 10px;", "}"], r.We, c.AF),
                k = (0, o.ZP)(i.H4).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__VideoSlideTitle",
                    componentId: "etm68x-16"
                })(["margin-top:16px;color:white;display:-webkit-box;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;white-space:normal;@media ", "{", "}"], r.We, i.cb);
            (0, o.ZP)(m.Z).withConfig({
                displayName: "style__ViewAllLink",
                componentId: "etm68x-17"
            })(["display:inline-block;margin-top:40px;color:var(--color-bd-pink);", " @media ", "{", "}"], i.FF, r.We, i.cl)
        },
        77628: (e, t, n) => {
            function o(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e = {}, t = {}) {
                Object.keys(t).forEach((n => {
                    "undefined" === typeof e[n] ? e[n] = t[n] : o(t[n]) && o(e[n]) && Object.keys(t[n]).length > 0 && r(e[n], t[n])
                }))
            }
            n.d(t, {
                Jj: () => c,
                Me: () => a
            });
            const i = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return r(e, i), e
            }
            const l = {
                document: i,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function c() {
                const e = "undefined" !== typeof window ? window : {};
                return r(e, l), e
            }
        }
    }
]);