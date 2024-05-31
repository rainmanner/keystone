"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [1525], {
        73824: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => y
            });
            var a = n(67294),
                o = n.n(a),
                l = n(71893),
                r = n(83109),
                i = n(12252),
                c = n(82229),
                d = (0, l.ZP)(i.W).withConfig({
                    displayName: "style__Container",
                    componentId: "thbw8s-0"
                })(["margin:150px auto;@media ", "{margin:128px 0 80px;padding:0 20px;}"], r.We),
                s = (0, l.ZP)(c.H2).withConfig({
                    displayName: "style__Title",
                    componentId: "thbw8s-1"
                })(["color:var(--color-fg-default);@media ", "{text-align:center;}"], r.We),
                p = l.ZP.div.withConfig({
                    displayName: "style__FAQContentBox",
                    componentId: "thbw8s-2"
                })(["margin-top:64px;padding:0 120px;@media ", "{padding:0;}"], r.We),
                m = n(44763),
                u = n(3888),
                f = n(4098),
                g = n(97132),
                h = n(74411),
                b = n(38226);

            function y() {
                var e, t, n, l = (e = (0, g.YB)(), t = (0, f.S)("keystone.home.faq"), n = (0, f.z)("keystone.home.faq"), {
                        title: t("title"),
                        faq: Array.from({
                            length: 6
                        }).map((function(a, l) {
                            return {
                                id: "question".concat(l + 1),
                                title: t("question".concat(l + 1)),
                                content: e.formatMessage(n("answer".concat(l + 1)), {
                                    keystoneTablet: function(e) {
                                        return o().createElement(m.Z, {
                                            to: u.B.shopProducts.tablet,
                                            color: "var(--color-bd-primary)",
                                            underline: !0,
                                            arrow: !1
                                        }, e)
                                    }
                                })
                            }
                        }))
                    }),
                    r = (0, a.useCallback)((function(e) {
                        var t = e.isOpened,
                            n = e.data;
                        t && (0, h.Jd)(n.title)
                    }), []);
                return o().createElement(d, null, o().createElement(s, null, l.title), o().createElement(p, null, o().createElement(b.Z, {
                    items: l.faq,
                    accordion: !0,
                    onToggle: r
                })))
            }
        }
    }
]);