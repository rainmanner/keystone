(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [5779], {
        15482: (e, t, n) => {
            "use strict";

            function r(e) {
                return e && "object" === typeof e && "default" in e ? e.default : e
            }
            var o, i, a, c, u = r(n(89324)),
                s = r(n(83524)),
                l = r(n(69590)),
                f = r(n(67294)),
                p = r(n(27418)),
                d = "bodyAttributes",
                y = "htmlAttributes",
                h = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                T = (Object.keys(h).map((function(e) {
                    return h[e]
                })), "charset"),
                b = "cssText",
                m = "href",
                g = "innerHTML",
                v = "itemprop",
                C = "rel",
                A = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                O = Object.keys(A).reduce((function(e, t) {
                    return e[A[t]] = t, e
                }), {}),
                w = [h.NOSCRIPT, h.SCRIPT, h.STYLE],
                S = "data-react-helmet",
                E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                P = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                j = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                k = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                },
                I = function(e) {
                    return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                L = function(e) {
                    var t = _(e, h.TITLE),
                        n = _(e, "titleTemplate");
                    if (n && t) return n.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = _(e, "defaultTitle");
                    return t || r || void 0
                },
                x = function(e) {
                    return _(e, "onChangeClientState") || function() {}
                },
                R = function(e, t) {
                    return t.filter((function(t) {
                        return "undefined" !== typeof t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return j({}, e, t)
                    }), {})
                },
                N = function(e, t) {
                    return t.filter((function(e) {
                        return "undefined" !== typeof e[h.BASE]
                    })).map((function(e) {
                        return e[h.BASE]
                    })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                var i = r[o].toLowerCase();
                                if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
                            }
                        return t
                    }), [])
                },
                M = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) {
                        return !!Array.isArray(t[e]) || ("undefined" !== typeof t[e] && B("Helmet: " + e + ' should be of type "Array". Instead found type "' + E(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, n) {
                        var o = {};
                        n.filter((function(e) {
                            for (var n = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    u = c.toLowerCase(); - 1 === t.indexOf(u) || n === C && "canonical" === e[n].toLowerCase() || u === C && "stylesheet" === e[u].toLowerCase() || (n = u), -1 === t.indexOf(c) || c !== g && c !== b && c !== v || (n = c)
                            }
                            if (!n || !e[n]) return !1;
                            var s = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][s] && (o[n][s] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                            var c = i[a],
                                u = p({}, r[c], o[c]);
                            r[c] = u
                        }
                        return e
                    }), []).reverse()
                },
                _ = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                H = (o = Date.now(), function(e) {
                    var t = Date.now();
                    t - o > 16 ? (o = t, e(t)) : setTimeout((function() {
                        H(e)
                    }), 0)
                }),
                q = function(e) {
                    return clearTimeout(e)
                },
                D = "undefined" !== typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || H : n.g.requestAnimationFrame || H,
                Y = "undefined" !== typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || q : n.g.cancelAnimationFrame || q,
                B = function(e) {
                    return console && "function" === typeof console.warn && console.warn(e)
                },
                F = null,
                K = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.onChangeClientState,
                        s = e.scriptTags,
                        l = e.styleTags,
                        f = e.title,
                        p = e.titleAttributes;
                    z(h.BODY, r), z(h.HTML, o), W(f, p);
                    var d = {
                            baseTag: V(h.BASE, n),
                            linkTags: V(h.LINK, i),
                            metaTags: V(h.META, a),
                            noscriptTags: V(h.NOSCRIPT, c),
                            scriptTags: V(h.SCRIPT, s),
                            styleTags: V(h.STYLE, l)
                        },
                        y = {},
                        T = {};
                    Object.keys(d).forEach((function(e) {
                        var t = d[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (y[e] = n), r.length && (T[e] = d[e].oldTags)
                    })), t && t(), u(e, y, T)
                },
                U = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                W = function(e, t) {
                    "undefined" !== typeof e && document.title !== e && (document.title = U(e)), z(h.TITLE, t)
                },
                z = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(S), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), c = 0; c < a.length; c++) {
                            var u = a[c],
                                s = t[u] || "";
                            n.getAttribute(u) !== s && n.setAttribute(u, s), -1 === o.indexOf(u) && o.push(u);
                            var l = i.indexOf(u); - 1 !== l && i.splice(l, 1)
                        }
                        for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
                        o.length === i.length ? n.removeAttribute(S) : n.getAttribute(S) !== a.join(",") && n.setAttribute(S, a.join(","))
                    }
                },
                V = function(e, t) {
                    var n = document.head || document.querySelector(h.HEAD),
                        r = n.querySelectorAll(e + "[" + S + "]"),
                        o = Array.prototype.slice.call(r),
                        i = [],
                        a = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === g) n.innerHTML = t.innerHTML;
                                else if (r === b) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var c = "undefined" === typeof t[r] ? "" : t[r];
                            n.setAttribute(r, c)
                        }
                        n.setAttribute(S, "true"), o.some((function(e, t) {
                            return a = t, n.isEqualNode(e)
                        })) ? o.splice(a, 1) : i.push(n)
                    })), o.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), i.forEach((function(e) {
                        return n.appendChild(e)
                    })), {
                        oldTags: o,
                        newTags: i
                    }
                },
                G = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        var r = "undefined" !== typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
                        return t ? t + " " + r : r
                    }), "")
                },
                J = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[A[n] || n] = e[n], t
                    }), t)
                },
                Q = function(e, t, n) {
                    switch (e) {
                        case h.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, n = t.titleAttributes, (r = {
                                        key: e
                                    })[S] = !0, o = J(n, r), [f.createElement(h.TITLE, o, e)];
                                    var e, n, r, o
                                },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var o = G(n),
                                            i = U(t);
                                        return o ? "<" + e + " " + S + '="true" ' + o + ">" + I(i, r) + "</" + e + ">" : "<" + e + " " + S + '="true">' + I(i, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case d:
                        case y:
                            return {
                                toComponent: function() {
                                    return J(t)
                                },
                                toString: function() {
                                    return G(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, o = ((r = {
                                                key: n
                                            })[S] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = A[e] || e;
                                                if (n === g || n === b) {
                                                    var r = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else o[n] = t[e]
                                            })), f.createElement(e, o)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var o = Object.keys(r).filter((function(e) {
                                                    return !(e === g || e === b)
                                                })).reduce((function(e, t) {
                                                    var o = "undefined" === typeof r[t] ? t : t + '="' + I(r[t], n) + '"';
                                                    return e ? e + " " + o : o
                                                }), ""),
                                                i = r.innerHTML || r.cssText || "",
                                                a = -1 === w.indexOf(e);
                                            return t + "<" + e + " " + S + '="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                X = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.scriptTags,
                        s = e.styleTags,
                        l = e.title,
                        f = void 0 === l ? "" : l,
                        p = e.titleAttributes;
                    return {
                        base: Q(h.BASE, t, r),
                        bodyAttributes: Q(d, n, r),
                        htmlAttributes: Q(y, o, r),
                        link: Q(h.LINK, i, r),
                        meta: Q(h.META, a, r),
                        noscript: Q(h.NOSCRIPT, c, r),
                        script: Q(h.SCRIPT, u, r),
                        style: Q(h.STYLE, s, r),
                        title: Q(h.TITLE, {
                            title: f,
                            titleAttributes: p
                        }, r)
                    }
                },
                Z = s((function(e) {
                    return {
                        baseTag: N([m], e),
                        bodyAttributes: R(d, e),
                        defer: _(e, "defer"),
                        encode: _(e, "encodeSpecialCharacters"),
                        htmlAttributes: R(y, e),
                        linkTags: M(h.LINK, [C, m], e),
                        metaTags: M(h.META, ["name", T, "http-equiv", "property", v], e),
                        noscriptTags: M(h.NOSCRIPT, [g], e),
                        onChangeClientState: x(e),
                        scriptTags: M(h.SCRIPT, ["src", g], e),
                        styleTags: M(h.STYLE, [b], e),
                        title: L(e),
                        titleAttributes: R("titleAttributes", e)
                    }
                }), (function(e) {
                    F && Y(F), e.defer ? F = D((function() {
                        K(e, (function() {
                            F = null
                        }))
                    })) : (K(e), F = null)
                }), X)((function() {
                    return null
                })),
                $ = (i = Z, c = a = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !l(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case h.SCRIPT:
                            case h.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case h.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        return j({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [j({}, o, this.mapNestedChildrenToProps(n, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            o = e.newProps,
                            i = e.newChildProps,
                            a = e.nestedChildren;
                        switch (r.type) {
                            case h.TITLE:
                                return j({}, o, ((t = {})[r.type] = a, t.titleAttributes = j({}, i), t));
                            case h.BODY:
                                return j({}, o, {
                                    bodyAttributes: j({}, i)
                                });
                            case h.HTML:
                                return j({}, o, {
                                    htmlAttributes: j({}, i)
                                })
                        }
                        return j({}, o, ((n = {})[r.type] = j({}, i), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = j({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = j({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return f.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    i = o.children,
                                    a = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, n) {
                                            return t[O[n] || n] = e[n], t
                                        }), t)
                                    }(k(o, ["children"]));
                                switch (n.warnOnInvalidChildren(e, i), e.type) {
                                    case h.LINK:
                                    case h.META:
                                    case h.NOSCRIPT:
                                    case h.SCRIPT:
                                    case h.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: a,
                                            nestedChildren: i
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: a,
                                            nestedChildren: i
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = k(e, ["children"]),
                            r = j({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), f.createElement(i, r)
                    }, P(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            i.canUseDOM = e
                        }
                    }]), t
                }(f.Component), a.propTypes = {
                    base: u.object,
                    bodyAttributes: u.object,
                    children: u.oneOfType([u.arrayOf(u.node), u.node]),
                    defaultTitle: u.string,
                    defer: u.bool,
                    encodeSpecialCharacters: u.bool,
                    htmlAttributes: u.object,
                    link: u.arrayOf(u.object),
                    meta: u.arrayOf(u.object),
                    noscript: u.arrayOf(u.object),
                    onChangeClientState: u.func,
                    script: u.arrayOf(u.object),
                    style: u.arrayOf(u.object),
                    title: u.string,
                    titleAttributes: u.object,
                    titleTemplate: u.string
                }, a.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, a.peek = i.peek, a.rewind = function() {
                    var e = i.rewind();
                    return e || (e = X({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, c);
            $.renderStatic = $.rewind, t.q = $
        },
        17579: (e, t, n) => {
            "use strict";
            var r = n(80070);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw c.name = "Invariant Violation", c
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        89324: (e, t, n) => {
            e.exports = n(17579)()
        },
        80070: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    }
]);