(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [3893], {
        93794: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => y
            });
            var i = o(67294),
                a = o.n(i),
                n = o(97132),
                l = o(34790),
                d = o(93370),
                r = o(71893),
                p = o(83109),
                c = o(12252),
                s = o(82229),
                m = (0, r.ZP)(c.W).withConfig({
                    displayName: "style__Main",
                    componentId: "sc-1cka0yf-0"
                })(["@media ", "{width:100%;height:580px;padding:96px 0 0 0;margin:0 0 80px 0;border:none;}margin:220px auto 224px;padding:80px 40px;position:relative;border:1px solid var(--color-border-slight);"], p.We),
                u = (0, r.ZP)(s.V1).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__Subtitle",
                    componentId: "sc-1cka0yf-1"
                })(["@media ", "{width:100%;padding-left:24px;margin-bottom:16px;text-align:center;", "}display:inline-block;background:", ";-webkit-background-clip:text;background-clip:text;color:transparent;"], p.We, s._7, (function(e) {
                    return e.themeColor || "var(--color-gd-primary)"
                })),
                g = (0, r.ZP)(s.H3).attrs({
                    as: "p"
                }).withConfig({
                    displayName: "style__Title",
                    componentId: "sc-1cka0yf-2"
                })(["@media ", "{width:100%;padding:0 24px;font-size:24px;line-height:36px;text-align:center;margin:0;z-index:1;}color:rgba(255,255,255,0.88);margin-top:16px;"], p.We),
                x = r.ZP.div.withConfig({
                    displayName: "style__Btns",
                    componentId: "sc-1cka0yf-3"
                })(["@media ", "{left:50%;transform:translateX(-50%);bottom:60px;z-index:1;a{padding:12px 24px;font-size:16px;line-height:24px;}}position:absolute;background:var(--color-bg-default);left:40px;bottom:-24px;", ""], p.We, (function(e) {
                    return e.customStyle || ""
                })),
                h = r.ZP.img.withConfig({
                    displayName: "style__Img",
                    componentId: "sc-1cka0yf-4"
                })(["@media ", "{width:312px;height:315px;right:24px;bottom:55px;z-index:0;}width:320px;height:381px;position:absolute;bottom:65px;right:65px;z-index:10;"], p.We),
                b = (r.ZP.div.withConfig({
                    displayName: "style__FixImg",
                    componentId: "sc-1cka0yf-5"
                })(["width:239px;height:1px;background:var(--color-bg-default);position:absolute;top:-1px;right:138px;"]), o(3888)),
                f = o(44763);

            function y(e) {
                var t = e.themeColor,
                    i = e.messageScope,
                    r = void 0 === i ? "keystone.home.buy." : i,
                    p = e.button,
                    c = e.image,
                    s = !1 === (null === p || void 0 === p ? void 0 : p.icon) ? null : void 0 !== (null === p || void 0 === p ? void 0 : p.icon) ? null === p || void 0 === p ? void 0 : p.icon : a().createElement(d.w7, null);
                return a().createElement(m, null, a().createElement(u, {
                    themeColor: t
                }, a().createElement(n._H, {
                    id: "".concat(r, "subtitle")
                })), a().createElement(g, null, a().createElement(n._H, {
                    id: "".concat(r, "title")
                })), a().createElement(h, {
                    "data-aos": "fade-up",
                    src: c || o(65434),
                    loading: "lazy"
                }), a().createElement(x, {
                    customStyle: null === p || void 0 === p ? void 0 : p.style
                }, a().createElement(f.Z, {
                    href: null === p || void 0 === p ? void 0 : p.href,
                    to: (null === p || void 0 === p ? void 0 : p.to) || b.B.shopProducts.k3Pro,
                    blank: null === p || void 0 === p ? void 0 : p.blank,
                    arrow: !1,
                    "data-mixpanel-id": "READY TO GO? BuyNow",
                    "data-mixpanel-pos": "content",
                    "data-mixpanel-to": b.B.shopProducts.k3Pro,
                    "data-aos": "fade-up"
                }, a().createElement(l.Z, {
                    type: "primary",
                    icon: s,
                    style: {
                        borderImage: "".concat(t, " 1")
                    },
                    arrow: null === p || void 0 === p ? void 0 : p.arrow
                }, a().createElement(n._H, {
                    id: (null === p || void 0 === p ? void 0 : p.textId) || "keystone.buyNow"
                })))))
            }
        },
        65434: (e, t, o) => {
            e.exports = o.p + "app/pages/Home/Buy/images/device-07ca59b536ec566fc868c8234e2f662f.jpg"
        }
    }
]);