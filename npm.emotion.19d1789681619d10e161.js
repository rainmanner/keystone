"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [4931], {
        17896: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var a = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const i = function(e) {
                var t = Object.create(null);
                return function(e) {
                    return void 0 === t[e] && (t[e] = (r = e, a.test(r) || 111 === r.charCodeAt(0) && 110 === r.charCodeAt(1) && r.charCodeAt(2) < 91)), t[e];
                    var r
                }
            }()
        },
        56940: (e, t) => {
            t.Z = function(e) {
                function t(e, a, o, l, h) {
                    for (var p, f, b, k, C, v = 0, A = 0, y = 0, S = 0, O = 0, L = 0, $ = b = p = 0, E = 0, D = 0, U = 0, F = 0, W = o.length, G = W - 1, j = "", q = "", B = "", X = ""; E < W;) {
                        if (f = o.charCodeAt(E), E === G && 0 !== A + S + y + v && (0 !== A && (f = 47 === A ? 10 : 47), S = y = v = 0, W++, G++), 0 === A + S + y + v) {
                            if (E === G && (0 < D && (j = j.replace(u, "")), 0 < j.trim().length)) {
                                switch (f) {
                                    case 32:
                                    case 9:
                                    case 59:
                                    case 13:
                                    case 10:
                                        break;
                                    default:
                                        j += o.charAt(E)
                                }
                                f = 59
                            }
                            switch (f) {
                                case 123:
                                    for (p = (j = j.trim()).charCodeAt(0), b = 1, F = ++E; E < W;) {
                                        switch (f = o.charCodeAt(E)) {
                                            case 123:
                                                b++;
                                                break;
                                            case 125:
                                                b--;
                                                break;
                                            case 47:
                                                switch (f = o.charCodeAt(E + 1)) {
                                                    case 42:
                                                    case 47:
                                                        e: {
                                                            for ($ = E + 1; $ < G; ++$) switch (o.charCodeAt($)) {
                                                                case 47:
                                                                    if (42 === f && 42 === o.charCodeAt($ - 1) && E + 2 !== $) {
                                                                        E = $ + 1;
                                                                        break e
                                                                    }
                                                                    break;
                                                                case 10:
                                                                    if (47 === f) {
                                                                        E = $ + 1;
                                                                        break e
                                                                    }
                                                            }
                                                            E = $
                                                        }
                                                }
                                                break;
                                            case 91:
                                                f++;
                                            case 40:
                                                f++;
                                            case 34:
                                            case 39:
                                                for (; E++ < G && o.charCodeAt(E) !== f;);
                                        }
                                        if (0 === b) break;
                                        E++
                                    }
                                    if (b = o.substring(F, E), 0 === p && (p = (j = j.replace(d, "").trim()).charCodeAt(0)), 64 === p) {
                                        switch (0 < D && (j = j.replace(u, "")), f = j.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                D = a;
                                                break;
                                            default:
                                                D = I
                                        }
                                        if (F = (b = t(a, D, b, f, h + 1)).length, 0 < M && (C = c(3, b, D = r(I, j, U), a, T, R, F, f, h, l), j = D.join(""), void 0 !== C && 0 === (F = (b = C.trim()).length) && (f = 0, b = "")), 0 < F) switch (f) {
                                            case 115:
                                                j = j.replace(x, s);
                                            case 100:
                                            case 109:
                                            case 45:
                                                b = j + "{" + b + "}";
                                                break;
                                            case 107:
                                                b = (j = j.replace(g, "$1 $2")) + "{" + b + "}", b = 1 === P || 2 === P && n("@" + b, 3) ? "@-webkit-" + b + "@" + b : "@" + b;
                                                break;
                                            default:
                                                b = j + b, 112 === l && (q += b, b = "")
                                        } else b = ""
                                    } else b = t(a, r(a, j, U), b, l, h + 1);
                                    B += b, b = U = D = $ = p = 0, j = "", f = o.charCodeAt(++E);
                                    break;
                                case 125:
                                case 59:
                                    if (1 < (F = (j = (0 < D ? j.replace(u, "") : j).trim()).length)) switch (0 === $ && (p = j.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (F = (j = j.replace(" ", ":")).length), 0 < M && void 0 !== (C = c(1, j, a, e, T, R, q.length, l, h, l)) && 0 === (F = (j = C.trim()).length) && (j = "\0\0"), p = j.charCodeAt(0), f = j.charCodeAt(1), p) {
                                        case 0:
                                            break;
                                        case 64:
                                            if (105 === f || 99 === f) {
                                                X += j + o.charAt(E);
                                                break
                                            }
                                        default:
                                            58 !== j.charCodeAt(F - 1) && (q += i(j, p, f, j.charCodeAt(2)))
                                    }
                                    U = D = $ = p = 0, j = "", f = o.charCodeAt(++E)
                            }
                        }
                        switch (f) {
                            case 13:
                            case 10:
                                47 === A ? A = 0 : 0 === 1 + p && 107 !== l && 0 < j.length && (D = 1, j += "\0"), 0 < M * H && c(0, j, a, e, T, R, q.length, l, h, l), R = 1, T++;
                                break;
                            case 59:
                            case 125:
                                if (0 === A + S + y + v) {
                                    R++;
                                    break
                                }
                            default:
                                switch (R++, k = o.charAt(E), f) {
                                    case 9:
                                    case 32:
                                        if (0 === S + v + A) switch (O) {
                                            case 44:
                                            case 58:
                                            case 9:
                                            case 32:
                                                k = "";
                                                break;
                                            default:
                                                32 !== f && (k = " ")
                                        }
                                        break;
                                    case 0:
                                        k = "\\0";
                                        break;
                                    case 12:
                                        k = "\\f";
                                        break;
                                    case 11:
                                        k = "\\v";
                                        break;
                                    case 38:
                                        0 === S + A + v && (D = U = 1, k = "\f" + k);
                                        break;
                                    case 108:
                                        if (0 === S + A + v + z && 0 < $) switch (E - $) {
                                            case 2:
                                                112 === O && 58 === o.charCodeAt(E - 3) && (z = O);
                                            case 8:
                                                111 === L && (z = L)
                                        }
                                        break;
                                    case 58:
                                        0 === S + A + v && ($ = E);
                                        break;
                                    case 44:
                                        0 === A + y + S + v && (D = 1, k += "\r");
                                        break;
                                    case 34:
                                    case 39:
                                        0 === A && (S = S === f ? 0 : 0 === S ? f : S);
                                        break;
                                    case 91:
                                        0 === S + A + y && v++;
                                        break;
                                    case 93:
                                        0 === S + A + y && v--;
                                        break;
                                    case 41:
                                        0 === S + A + v && y--;
                                        break;
                                    case 40:
                                        0 === S + A + v && (0 === p && (2 * O + 3 * L === 533 || (p = 1)), y++);
                                        break;
                                    case 64:
                                        0 === A + y + S + v + $ + b && (b = 1);
                                        break;
                                    case 42:
                                    case 47:
                                        if (!(0 < S + v + y)) switch (A) {
                                            case 0:
                                                switch (2 * f + 3 * o.charCodeAt(E + 1)) {
                                                    case 235:
                                                        A = 47;
                                                        break;
                                                    case 220:
                                                        F = E, A = 42
                                                }
                                                break;
                                            case 42:
                                                47 === f && 42 === O && F + 2 !== E && (33 === o.charCodeAt(F + 2) && (q += o.substring(F, E + 1)), k = "", A = 0)
                                        }
                                }
                                0 === A && (j += k)
                        }
                        L = O, O = f, E++
                    }
                    if (0 < (F = q.length)) {
                        if (D = a, 0 < M && void 0 !== (C = c(2, q, D, e, T, R, F, l, h, l)) && 0 === (q = C).length) return X + q + B;
                        if (q = D.join(",") + "{" + q + "}", 0 !== P * z) {
                            switch (2 !== P || n(q, 2) || (z = 0), z) {
                                case 111:
                                    q = q.replace(w, ":-moz-$1") + q;
                                    break;
                                case 112:
                                    q = q.replace(m, "::-webkit-input-$1") + q.replace(m, "::-moz-$1") + q.replace(m, ":-ms-input-$1") + q
                            }
                            z = 0
                        }
                    }
                    return X + q + B
                }

                function r(e, t, r) {
                    var i = t.trim().split(b);
                    t = i;
                    var n = i.length,
                        s = e.length;
                    switch (s) {
                        case 0:
                        case 1:
                            var c = 0;
                            for (e = 0 === s ? "" : e[0] + " "; c < n; ++c) t[c] = a(e, t[c], r).trim();
                            break;
                        default:
                            var o = c = 0;
                            for (t = []; c < n; ++c)
                                for (var l = 0; l < s; ++l) t[o++] = a(e[l] + " ", i[c], r).trim()
                    }
                    return t
                }

                function a(e, t, r) {
                    var a = t.charCodeAt(0);
                    switch (33 > a && (a = (t = t.trim()).charCodeAt(0)), a) {
                        case 38:
                            return t.replace(k, "$1" + e.trim());
                        case 58:
                            return e.trim() + t.replace(k, "$1" + e.trim());
                        default:
                            if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(k, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + t
                }

                function i(e, t, r, a) {
                    var s = e + ";",
                        c = 2 * t + 3 * r + 4 * a;
                    if (944 === c) {
                        e = s.indexOf(":", 9) + 1;
                        var o = s.substring(e, s.length - 1).trim();
                        return o = s.substring(0, e).trim() + o + ";", 1 === P || 2 === P && n(o, 1) ? "-webkit-" + o + o : o
                    }
                    if (0 === P || 2 === P && !n(s, 1)) return s;
                    switch (c) {
                        case 1015:
                            return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
                        case 951:
                            return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
                        case 963:
                            return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
                        case 1009:
                            if (100 !== s.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + s + s;
                        case 978:
                            return "-webkit-" + s + "-moz-" + s + s;
                        case 1019:
                        case 983:
                            return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
                        case 883:
                            if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
                            if (0 < s.indexOf("image-set(", 11)) return s.replace(O, "$1-webkit-$2") + s;
                            break;
                        case 932:
                            if (45 === s.charCodeAt(4)) switch (s.charCodeAt(5)) {
                                case 103:
                                    return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
                                case 115:
                                    return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
                                case 98:
                                    return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s
                            }
                            return "-webkit-" + s + "-ms-" + s + s;
                        case 964:
                            return "-webkit-" + s + "-ms-flex-" + s + s;
                        case 1023:
                            if (99 !== s.charCodeAt(8)) break;
                            return "-webkit-box-pack" + (o = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + s + "-ms-flex-pack" + o + s;
                        case 1005:
                            return p.test(s) ? s.replace(h, ":-webkit-") + s.replace(h, ":-moz-") + s : s;
                        case 1e3:
                            switch (t = (o = s.substring(13).trim()).indexOf("-") + 1, o.charCodeAt(0) + o.charCodeAt(t)) {
                                case 226:
                                    o = s.replace(C, "tb");
                                    break;
                                case 232:
                                    o = s.replace(C, "tb-rl");
                                    break;
                                case 220:
                                    o = s.replace(C, "lr");
                                    break;
                                default:
                                    return s
                            }
                            return "-webkit-" + s + "-ms-" + o + s;
                        case 1017:
                            if (-1 === s.indexOf("sticky", 9)) break;
                        case 975:
                            switch (t = (s = e).length - 10, c = (o = (33 === s.charCodeAt(t) ? s.substring(0, t) : s).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | o.charCodeAt(7))) {
                                case 203:
                                    if (111 > o.charCodeAt(8)) break;
                                case 115:
                                    s = s.replace(o, "-webkit-" + o) + ";" + s;
                                    break;
                                case 207:
                                case 102:
                                    s = s.replace(o, "-webkit-" + (102 < c ? "inline-" : "") + "box") + ";" + s.replace(o, "-webkit-" + o) + ";" + s.replace(o, "-ms-" + o + "box") + ";" + s
                            }
                            return s + ";";
                        case 938:
                            if (45 === s.charCodeAt(5)) switch (s.charCodeAt(6)) {
                                case 105:
                                    return o = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + o + "-ms-flex-" + o + s;
                                case 115:
                                    return "-webkit-" + s + "-ms-flex-item-" + s.replace(A, "") + s;
                                default:
                                    return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(A, "") + s
                            }
                            break;
                        case 973:
                        case 989:
                            if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === S.test(e)) return 115 === (o = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? i(e.replace("stretch", "fill-available"), t, r, a).replace(":fill-available", ":stretch") : s.replace(o, "-webkit-" + o) + s.replace(o, "-moz-" + o.replace("fill-", "")) + s;
                            break;
                        case 962:
                            if (s = "-webkit-" + s + (102 === s.charCodeAt(5) ? "-ms-" + s : "") + s, 211 === r + a && 105 === s.charCodeAt(13) && 0 < s.indexOf("transform", 10)) return s.substring(0, s.indexOf(";", 27) + 1).replace(f, "$1-webkit-$2") + s
                    }
                    return s
                }

                function n(e, t) {
                    var r = e.indexOf(1 === t ? ":" : "{"),
                        a = e.substring(0, 3 !== t ? r : 10);
                    return r = e.substring(r + 1, e.length - 1), $(2 !== t ? a : a.replace(y, "$1"), r, t)
                }

                function s(e, t) {
                    var r = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return r !== t + ";" ? r.replace(v, " or ($1)").substring(4) : "(" + t + ")"
                }

                function c(e, t, r, a, i, n, s, c, o, d) {
                    for (var u, h = 0, p = t; h < M; ++h) switch (u = L[h].call(l, e, p, r, a, i, n, s, c, o, d)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            p = u
                    }
                    if (p !== t) return p
                }

                function o(e) {
                    return void 0 !== (e = e.prefix) && ($ = null, e ? "function" !== typeof e ? P = 1 : (P = 2, $ = e) : P = 0), o
                }

                function l(e, r) {
                    var a = e;
                    if (33 > a.charCodeAt(0) && (a = a.trim()), a = [a], 0 < M) {
                        var i = c(-1, r, a, a, T, R, 0, 0, 0, 0);
                        void 0 !== i && "string" === typeof i && (r = i)
                    }
                    var n = t(I, a, r, 0, 0);
                    return 0 < M && void 0 !== (i = c(-2, n, a, a, T, R, n.length, 0, 0, 0)) && (n = i), z = 0, R = T = 1, n
                }
                var d = /^\0+/g,
                    u = /[\0\r\f]/g,
                    h = /: */g,
                    p = /zoo|gra/,
                    f = /([,: ])(transform)/g,
                    b = /,\r+?/g,
                    k = /([\t\r\n ])*\f?&/g,
                    g = /@(k\w+)\s*(\S*)\s*/,
                    m = /::(place)/g,
                    w = /:(read-only)/g,
                    C = /[svh]\w+-[tblr]{2}/,
                    x = /\(\s*(.*)\s*\)/g,
                    v = /([\s\S]*?);/g,
                    A = /-self|flex-/g,
                    y = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    S = /stretch|:\s*\w+\-(?:conte|avail)/,
                    O = /([^-])(image-set\()/,
                    R = 1,
                    T = 1,
                    z = 0,
                    P = 1,
                    I = [],
                    L = [],
                    M = 0,
                    $ = null,
                    H = 0;
                return l.use = function e(t) {
                    switch (t) {
                        case void 0:
                        case null:
                            M = L.length = 0;
                            break;
                        default:
                            if ("function" === typeof t) L[M++] = t;
                            else if ("object" === typeof t)
                                for (var r = 0, a = t.length; r < a; ++r) e(t[r]);
                            else H = 0 | !!t
                    }
                    return e
                }, l.set = o, void 0 !== e && o(e), l
            }
        },
        1064: (e, t) => {
            t.Z = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            }
        }
    }
]);