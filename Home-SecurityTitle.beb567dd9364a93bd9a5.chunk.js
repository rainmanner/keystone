"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [8149], {
        36049: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => d
            });
            var r = n(67294),
                i = n.n(r),
                o = n(71893),
                l = n(83109),
                a = n(12252),
                c = (0, o.ZP)(a.W).withConfig({
                    displayName: "style__Container",
                    componentId: "sc-1cj7peq-0"
                })(["margin:200px auto;text-align:center;width:1035px;@media ", "{margin:128px 0 80px;padding:0 20px;}"], l.We),
                u = n(4098),
                p = n(86387);

            function d() {
                var t, e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).themeColor,
                    n = {
                        subTitle: (t = (0, u.S)("keystone.home.securityTitle"))("subTitle"),
                        title: t("title"),
                        link: {
                            text: t("link"),
                            link: "/",
                            blank: !1
                        }
                    },
                    o = (0, r.useMemo)((function() {
                        return {
                            subTitle: n.subTitle,
                            title: n.title
                        }
                    }), []);
                return i().createElement(c, null, i().createElement(p.Z, {
                    data: o,
                    themeColor: e
                }))
            }
        },
        86387: (t, e, n) => {
            n.d(e, {
                Z: () => g
            });
            var r = n(67294),
                i = n.n(r),
                o = n(71893),
                l = n(83109),
                a = n(82229),
                c = n(44763),
                u = n(52329),
                p = o.ZP.div.withConfig({
                    displayName: "style__Container",
                    componentId: "veb5wh-0"
                })(["text-align:center;@media ", "{padding:0 20px;}"], l.We),
                d = (0, o.ZP)(a.o1).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__SubTitle",
                    componentId: "veb5wh-1"
                })(["background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;@media ", "{text-align:center;", "}"], (function(t) {
                    return t.themeColor || "var(--color-bg-metamask)"
                }), l.We, a._7),
                s = (0, o.ZP)((0, u.q)(a.H3)).withConfig({
                    displayName: "style__Title",
                    componentId: "veb5wh-2"
                })(["", ";margin-top:32px;font-size:72px;line-height:inherit;background:linear-gradient(130deg,#707070 45%,white 50%,#707070 60%);background-size:200% 100%;background-position-x:150%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;@media ", "{margin-top:16px;width:100%;", "}"], a.V9, l.We, a.rU),
                m = (0, o.ZP)(c.Z).withConfig({
                    displayName: "style__Link",
                    componentId: "veb5wh-3"
                })(["display:block;margin-top:32px;", " @media ", "{margin-top:18px;}"], a.FF, l.We);

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function g() {
                var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.data,
                    o = n.themeColor,
                    l = (t = (0, u.YD)((function() {
                        return {
                            from: {
                                backgroundPositionX: "150%"
                            },
                            to: {
                                backgroundPositionX: "-10%"
                            },
                            config: {
                                duration: 1200
                            }
                        }
                    }), {
                        rootMargin: "0px 0px -50% 0px"
                    }), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, i, o = [],
                                l = !0,
                                a = !1;
                            try {
                                for (n = n.call(t); !(l = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); l = !0);
                            } catch (t) {
                                a = !0, i = t
                            } finally {
                                try {
                                    l || null == n.return || n.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            return o
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" === typeof t) return b(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    a = l[0],
                    c = l[1];
                return i().createElement(p, null, i().createElement(d, {
                    themeColor: o
                }, r.subTitle), i().createElement(s, {
                    ref: a,
                    style: c
                }, r.title), r.link && i().createElement(m, {
                    color: "var(--color-bd-pink)",
                    to: r.link.link,
                    blank: void 0 === r.link.blank || r.link.blank
                }, r.link.text))
            }
        }
    }
]);