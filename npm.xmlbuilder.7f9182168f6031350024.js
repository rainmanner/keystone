(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [658], {
        17557: function(t) {
            (function() {
                t.exports = {
                    Disconnected: 1,
                    Preceding: 2,
                    Following: 4,
                    Contains: 8,
                    ContainedBy: 16,
                    ImplementationSpecific: 32
                }
            }).call(this)
        },
        39335: function(t) {
            (function() {
                t.exports = {
                    Element: 1,
                    Attribute: 2,
                    Text: 3,
                    CData: 4,
                    EntityReference: 5,
                    EntityDeclaration: 6,
                    ProcessingInstruction: 7,
                    Comment: 8,
                    Document: 9,
                    DocType: 10,
                    DocumentFragment: 11,
                    NotationDeclaration: 12,
                    Declaration: 201,
                    Raw: 202,
                    AttributeDeclaration: 203,
                    ElementDeclaration: 204,
                    Dummy: 205
                }
            }).call(this)
        },
        78369: function(t) {
            (function() {
                var e, r, n, i, s, o, h, a = {}.hasOwnProperty;
                e = function(t, ...e) {
                    var r, n, i, o;
                    if (s(Object.assign)) Object.assign.apply(null, arguments);
                    else
                        for (r = 0, i = e.length; r < i; r++)
                            if (null != (o = e[r]))
                                for (n in o) a.call(o, n) && (t[n] = o[n]);
                    return t
                }, s = function(t) {
                    return !!t && "[object Function]" === Object.prototype.toString.call(t)
                }, o = function(t) {
                    var e;
                    return !!t && ("function" === (e = typeof t) || "object" === e)
                }, n = function(t) {
                    return s(Array.isArray) ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
                }, i = function(t) {
                    var e;
                    if (n(t)) return !t.length;
                    for (e in t)
                        if (a.call(t, e)) return !1;
                    return !0
                }, h = function(t) {
                    var e, r;
                    return o(t) && (r = Object.getPrototypeOf(t)) && (e = r.constructor) && "function" === typeof e && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object)
                }, r = function(t) {
                    return s(t.valueOf) ? t.valueOf() : t
                }, t.exports.assign = e, t.exports.isFunction = s, t.exports.isObject = o, t.exports.isArray = n, t.exports.isEmpty = i, t.exports.isPlainObject = h, t.exports.getValue = r
            }).call(this)
        },
        30594: function(t) {
            (function() {
                t.exports = {
                    None: 0,
                    OpenTag: 1,
                    InsideTag: 2,
                    CloseTag: 3
                }
            }).call(this)
        },
        72750: function(t, e, r) {
            (function() {
                var e;
                e = r(39335), r(32026), t.exports = function() {
                    class t {
                        constructor(t, r, n) {
                            if (this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), null == r) throw new Error("Missing attribute name. " + this.debugInfo(r));
                            this.name = this.stringify.name(r), this.value = this.stringify.attValue(n), this.type = e.Attribute, this.isId = !1, this.schemaTypeInfo = null
                        }
                        clone() {
                            return Object.create(this)
                        }
                        toString(t) {
                            return this.options.writer.attribute(this, this.options.writer.filterOptions(t))
                        }
                        debugInfo(t) {
                            return null == (t = t || this.name) ? "parent: <" + this.parent.name + ">" : "attribute: {" + t + "}, parent: <" + this.parent.name + ">"
                        }
                        isEqualNode(t) {
                            return t.namespaceURI === this.namespaceURI && t.prefix === this.prefix && t.localName === this.localName && t.value === this.value
                        }
                    }
                    return Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return this.type
                        }
                    }), Object.defineProperty(t.prototype, "ownerElement", {
                        get: function() {
                            return this.parent
                        }
                    }), Object.defineProperty(t.prototype, "textContent", {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            return this.value = t || ""
                        }
                    }), Object.defineProperty(t.prototype, "namespaceURI", {
                        get: function() {
                            return ""
                        }
                    }), Object.defineProperty(t.prototype, "prefix", {
                        get: function() {
                            return ""
                        }
                    }), Object.defineProperty(t.prototype, "localName", {
                        get: function() {
                            return this.name
                        }
                    }), Object.defineProperty(t.prototype, "specified", {
                        get: function() {
                            return !0
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        66170: function(t, e, r) {
            (function() {
                var e, n;
                e = r(39335), n = r(6488), t.exports = class extends n {
                    constructor(t, r) {
                        if (super(t), null == r) throw new Error("Missing CDATA text. " + this.debugInfo());
                        this.name = "#cdata-section", this.type = e.CData, this.value = this.stringify.cdata(r)
                    }
                    clone() {
                        return Object.create(this)
                    }
                    toString(t) {
                        return this.options.writer.cdata(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        6488: function(t, e, r) {
            (function() {
                var e;
                e = r(32026), t.exports = function() {
                    class t extends e {
                        constructor(t) {
                            super(t), this.value = ""
                        }
                        clone() {
                            return Object.create(this)
                        }
                        substringData(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        appendData(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        insertData(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        deleteData(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        replaceData(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        isEqualNode(t) {
                            return !!super.isEqualNode(t) && t.data === this.data
                        }
                    }
                    return Object.defineProperty(t.prototype, "data", {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            return this.value = t || ""
                        }
                    }), Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return this.value.length
                        }
                    }), Object.defineProperty(t.prototype, "textContent", {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            return this.value = t || ""
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        62096: function(t, e, r) {
            (function() {
                var e, n;
                e = r(39335), n = r(6488), t.exports = class extends n {
                    constructor(t, r) {
                        if (super(t), null == r) throw new Error("Missing comment text. " + this.debugInfo());
                        this.name = "#comment", this.type = e.Comment, this.value = this.stringify.comment(r)
                    }
                    clone() {
                        return Object.create(this)
                    }
                    toString(t) {
                        return this.options.writer.comment(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        30383: function(t, e, r) {
            (function() {
                var e, n;
                e = r(93933), n = r(66210), t.exports = function() {
                    class t {
                        constructor() {
                            this.defaultParams = {
                                "canonical-form": !1,
                                "cdata-sections": !1,
                                comments: !1,
                                "datatype-normalization": !1,
                                "element-content-whitespace": !0,
                                entities: !0,
                                "error-handler": new e,
                                infoset: !0,
                                "validate-if-schema": !1,
                                namespaces: !0,
                                "namespace-declarations": !0,
                                "normalize-characters": !1,
                                "schema-location": "",
                                "schema-type": "",
                                "split-cdata-sections": !0,
                                validate: !1,
                                "well-formed": !0
                            }, this.params = Object.create(this.defaultParams)
                        }
                        getParameter(t) {
                            return this.params.hasOwnProperty(t) ? this.params[t] : null
                        }
                        canSetParameter(t, e) {
                            return !0
                        }
                        setParameter(t, e) {
                            return null != e ? this.params[t] = e : delete this.params[t]
                        }
                    }
                    return Object.defineProperty(t.prototype, "parameterNames", {
                        get: function() {
                            return new n(Object.keys(this.defaultParams))
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        93933: function(t) {
            (function() {
                t.exports = class {
                    constructor() {}
                    handleError(t) {
                        throw new Error(t)
                    }
                }
            }).call(this)
        },
        91770: function(t) {
            (function() {
                t.exports = class {
                    hasFeature(t, e) {
                        return !0
                    }
                    createDocumentType(t, e, r) {
                        throw new Error("This DOM method is not implemented.")
                    }
                    createDocument(t, e, r) {
                        throw new Error("This DOM method is not implemented.")
                    }
                    createHTMLDocument(t) {
                        throw new Error("This DOM method is not implemented.")
                    }
                    getFeature(t, e) {
                        throw new Error("This DOM method is not implemented.")
                    }
                }
            }).call(this)
        },
        66210: function(t) {
            (function() {
                t.exports = function() {
                    class t {
                        constructor(t) {
                            this.arr = t || []
                        }
                        item(t) {
                            return this.arr[t] || null
                        }
                        contains(t) {
                            return -1 !== this.arr.indexOf(t)
                        }
                    }
                    return Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return this.arr.length
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        51179: function(t, e, r) {
            (function() {
                var e, n;
                n = r(32026), e = r(39335), t.exports = class extends n {
                    constructor(t, r, n, i, s, o) {
                        if (super(t), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                        if (null == n) throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
                        if (!i) throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
                        if (!s) throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
                        if (0 !== s.indexOf("#") && (s = "#" + s), !s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
                        if (o && !s.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
                        this.elementName = this.stringify.name(r), this.type = e.AttributeDeclaration, this.attributeName = this.stringify.name(n), this.attributeType = this.stringify.dtdAttType(i), o && (this.defaultValue = this.stringify.dtdAttDefault(o)), this.defaultValueType = s
                    }
                    toString(t) {
                        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        36347: function(t, e, r) {
            (function() {
                var e, n;
                n = r(32026), e = r(39335), t.exports = class extends n {
                    constructor(t, r, n) {
                        if (super(t), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                        n || (n = "(#PCDATA)"), Array.isArray(n) && (n = "(" + n.join(",") + ")"), this.name = this.stringify.name(r), this.type = e.ElementDeclaration, this.value = this.stringify.dtdElementValue(n)
                    }
                    toString(t) {
                        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        99078: function(t, e, r) {
            (function() {
                var e, n, i;
                ({
                    isObject: i
                } = r(78369)), n = r(32026), e = r(39335), t.exports = function() {
                    class t extends n {
                        constructor(t, r, n, s) {
                            if (super(t), null == n) throw new Error("Missing DTD entity name. " + this.debugInfo(n));
                            if (null == s) throw new Error("Missing DTD entity value. " + this.debugInfo(n));
                            if (this.pe = !!r, this.name = this.stringify.name(n), this.type = e.EntityDeclaration, i(s)) {
                                if (!s.pubID && !s.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(n));
                                if (s.pubID && !s.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(n));
                                if (this.internal = !1, null != s.pubID && (this.pubID = this.stringify.dtdPubID(s.pubID)), null != s.sysID && (this.sysID = this.stringify.dtdSysID(s.sysID)), null != s.nData && (this.nData = this.stringify.dtdNData(s.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(n))
                            } else this.value = this.stringify.dtdEntityValue(s), this.internal = !0
                        }
                        toString(t) {
                            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(t))
                        }
                    }
                    return Object.defineProperty(t.prototype, "publicId", {
                        get: function() {
                            return this.pubID
                        }
                    }), Object.defineProperty(t.prototype, "systemId", {
                        get: function() {
                            return this.sysID
                        }
                    }), Object.defineProperty(t.prototype, "notationName", {
                        get: function() {
                            return this.nData || null
                        }
                    }), Object.defineProperty(t.prototype, "inputEncoding", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "xmlEncoding", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "xmlVersion", {
                        get: function() {
                            return null
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        44777: function(t, e, r) {
            (function() {
                var e, n;
                n = r(32026), e = r(39335), t.exports = function() {
                    class t extends n {
                        constructor(t, r, n) {
                            if (super(t), null == r) throw new Error("Missing DTD notation name. " + this.debugInfo(r));
                            if (!n.pubID && !n.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
                            this.name = this.stringify.name(r), this.type = e.NotationDeclaration, null != n.pubID && (this.pubID = this.stringify.dtdPubID(n.pubID)), null != n.sysID && (this.sysID = this.stringify.dtdSysID(n.sysID))
                        }
                        toString(t) {
                            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(t))
                        }
                    }
                    return Object.defineProperty(t.prototype, "publicId", {
                        get: function() {
                            return this.pubID
                        }
                    }), Object.defineProperty(t.prototype, "systemId", {
                        get: function() {
                            return this.sysID
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        59077: function(t, e, r) {
            (function() {
                var e, n, i;
                ({
                    isObject: i
                } = r(78369)), n = r(32026), e = r(39335), t.exports = class extends n {
                    constructor(t, r, n, s) {
                        super(t), i(r) && ({
                            version: r,
                            encoding: n,
                            standalone: s
                        } = r), r || (r = "1.0"), this.type = e.Declaration, this.version = this.stringify.xmlVersion(r), null != n && (this.encoding = this.stringify.xmlEncoding(n)), null != s && (this.standalone = this.stringify.xmlStandalone(s))
                    }
                    toString(t) {
                        return this.options.writer.declaration(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        86544: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a, l;
                ({
                    isObject: l
                } = r(78369)), a = r(32026), e = r(39335), n = r(51179), s = r(99078), i = r(36347), o = r(44777), h = r(40663), t.exports = function() {
                    class t extends a {
                        constructor(t, r, n) {
                            var i, s, o, h;
                            if (super(t), this.type = e.DocType, t.children)
                                for (s = 0, o = (h = t.children).length; s < o; s++)
                                    if ((i = h[s]).type === e.Element) {
                                        this.name = i.name;
                                        break
                                    }
                            this.documentObject = t, l(r) && ({
                                pubID: r,
                                sysID: n
                            } = r), null == n && ([n, r] = [r, n]), null != r && (this.pubID = this.stringify.dtdPubID(r)), null != n && (this.sysID = this.stringify.dtdSysID(n))
                        }
                        element(t, e) {
                            var r;
                            return r = new i(this, t, e), this.children.push(r), this
                        }
                        attList(t, e, r, i, s) {
                            var o;
                            return o = new n(this, t, e, r, i, s), this.children.push(o), this
                        }
                        entity(t, e) {
                            var r;
                            return r = new s(this, !1, t, e), this.children.push(r), this
                        }
                        pEntity(t, e) {
                            var r;
                            return r = new s(this, !0, t, e), this.children.push(r), this
                        }
                        notation(t, e) {
                            var r;
                            return r = new o(this, t, e), this.children.push(r), this
                        }
                        toString(t) {
                            return this.options.writer.docType(this, this.options.writer.filterOptions(t))
                        }
                        ele(t, e) {
                            return this.element(t, e)
                        }
                        att(t, e, r, n, i) {
                            return this.attList(t, e, r, n, i)
                        }
                        ent(t, e) {
                            return this.entity(t, e)
                        }
                        pent(t, e) {
                            return this.pEntity(t, e)
                        }
                        not(t, e) {
                            return this.notation(t, e)
                        }
                        up() {
                            return this.root() || this.documentObject
                        }
                        isEqualNode(t) {
                            return !!super.isEqualNode(t) && t.name === this.name && t.publicId === this.publicId && t.systemId === this.systemId
                        }
                    }
                    return Object.defineProperty(t.prototype, "entities", {
                        get: function() {
                            var t, r, n, i, s;
                            for (i = {}, r = 0, n = (s = this.children).length; r < n; r++)(t = s[r]).type !== e.EntityDeclaration || t.pe || (i[t.name] = t);
                            return new h(i)
                        }
                    }), Object.defineProperty(t.prototype, "notations", {
                        get: function() {
                            var t, r, n, i, s;
                            for (i = {}, r = 0, n = (s = this.children).length; r < n; r++)(t = s[r]).type === e.NotationDeclaration && (i[t.name] = t);
                            return new h(i)
                        }
                    }), Object.defineProperty(t.prototype, "publicId", {
                        get: function() {
                            return this.pubID
                        }
                    }), Object.defineProperty(t.prototype, "systemId", {
                        get: function() {
                            return this.sysID
                        }
                    }), Object.defineProperty(t.prototype, "internalSubset", {
                        get: function() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        66934: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a;
                ({
                    isPlainObject: a
                } = r(78369)), i = r(91770), n = r(30383), s = r(32026), e = r(39335), h = r(95549), o = r(26434), t.exports = function() {
                    class t extends s {
                        constructor(t) {
                            super(null), this.name = "#document", this.type = e.Document, this.documentURI = null, this.domConfig = new n, t || (t = {}), t.writer || (t.writer = new o), this.options = t, this.stringify = new h(t)
                        }
                        end(t) {
                            var e;
                            return e = {}, t ? a(t) && (e = t, t = this.options.writer) : t = this.options.writer, t.document(this, t.filterOptions(e))
                        }
                        toString(t) {
                            return this.options.writer.document(this, this.options.writer.filterOptions(t))
                        }
                        createElement(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createDocumentFragment() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createTextNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createComment(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createCDATASection(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createProcessingInstruction(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createAttribute(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createEntityReference(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagName(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        importNode(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createElementNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createAttributeNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagNameNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementById(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        adoptNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        normalizeDocument() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        renameNode(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByClassName(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createEvent(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createRange() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createNodeIterator(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        createTreeWalker(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }
                    return Object.defineProperty(t.prototype, "implementation", {
                        value: new i
                    }), Object.defineProperty(t.prototype, "doctype", {
                        get: function() {
                            var t, r, n, i;
                            for (r = 0, n = (i = this.children).length; r < n; r++)
                                if ((t = i[r]).type === e.DocType) return t;
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "documentElement", {
                        get: function() {
                            return this.rootObject || null
                        }
                    }), Object.defineProperty(t.prototype, "inputEncoding", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "strictErrorChecking", {
                        get: function() {
                            return !1
                        }
                    }), Object.defineProperty(t.prototype, "xmlEncoding", {
                        get: function() {
                            return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].encoding : null
                        }
                    }), Object.defineProperty(t.prototype, "xmlStandalone", {
                        get: function() {
                            return 0 !== this.children.length && this.children[0].type === e.Declaration && "yes" === this.children[0].standalone
                        }
                    }), Object.defineProperty(t.prototype, "xmlVersion", {
                        get: function() {
                            return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].version : "1.0"
                        }
                    }), Object.defineProperty(t.prototype, "URL", {
                        get: function() {
                            return this.documentURI
                        }
                    }), Object.defineProperty(t.prototype, "origin", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "compatMode", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "characterSet", {
                        get: function() {
                            return null
                        }
                    }), Object.defineProperty(t.prototype, "contentType", {
                        get: function() {
                            return null
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        79227: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a, l, u, c, d, p, m, f, g, y, w, b, D, v, O, I, E = {}.hasOwnProperty;
                ({
                    isObject: O,
                    isFunction: v,
                    isPlainObject: I,
                    getValue: D
                } = r(78369)), e = r(39335), p = r(66934), m = r(32161), s = r(66170), o = r(62096), g = r(79406), b = r(43595), f = r(19181), c = r(59077), d = r(86544), h = r(51179), l = r(99078), a = r(36347), u = r(44777), i = r(72750), w = r(95549), y = r(26434), n = r(30594), t.exports = class {
                    constructor(t, r, n) {
                        var i;
                        this.name = "?xml", this.type = e.Document, t || (t = {}), i = {}, t.writer ? I(t.writer) && (i = t.writer, t.writer = new y) : t.writer = new y, this.options = t, this.writer = t.writer, this.writerOptions = this.writer.filterOptions(i), this.stringify = new w(t), this.onDataCallback = r || function() {}, this.onEndCallback = n || function() {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null
                    }
                    createChildNode(t) {
                        var r, n, i, s, o, h, a, l;
                        switch (t.type) {
                            case e.CData:
                                this.cdata(t.value);
                                break;
                            case e.Comment:
                                this.comment(t.value);
                                break;
                            case e.Element:
                                for (n in i = {}, a = t.attribs) E.call(a, n) && (r = a[n], i[n] = r.value);
                                this.node(t.name, i);
                                break;
                            case e.Dummy:
                                this.dummy();
                                break;
                            case e.Raw:
                                this.raw(t.value);
                                break;
                            case e.Text:
                                this.text(t.value);
                                break;
                            case e.ProcessingInstruction:
                                this.instruction(t.target, t.value);
                                break;
                            default:
                                throw new Error("This XML node type is not supported in a JS object: " + t.constructor.name)
                        }
                        for (o = 0, h = (l = t.children).length; o < h; o++) s = l[o], this.createChildNode(s), s.type === e.Element && this.up();
                        return this
                    }
                    dummy() {
                        return this
                    }
                    node(t, e, r) {
                        if (null == t) throw new Error("Missing node name.");
                        if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node. " + this.debugInfo(t));
                        return this.openCurrent(), t = D(t), null == e && (e = {}), e = D(e), O(e) || ([r, e] = [e, r]), this.currentNode = new m(this, t, e), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != r && this.text(r), this
                    }
                    element(t, r, n) {
                        var i, s, o, h, a, l;
                        if (this.currentNode && this.currentNode.type === e.DocType) this.dtdElement(...arguments);
                        else if (Array.isArray(t) || O(t) || v(t))
                            for (h = this.options.noValidation, this.options.noValidation = !0, (l = new p(this.options).element("TEMP_ROOT")).element(t), this.options.noValidation = h, s = 0, o = (a = l.children).length; s < o; s++) i = a[s], this.createChildNode(i), i.type === e.Element && this.up();
                        else this.node(t, r, n);
                        return this
                    }
                    attribute(t, e) {
                        var r, n;
                        if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
                        if (null != t && (t = D(t)), O(t))
                            for (r in t) E.call(t, r) && (n = t[r], this.attribute(r, n));
                        else v(e) && (e = e.apply()), this.options.keepNullAttributes && null == e ? this.currentNode.attribs[t] = new i(this, t, "") : null != e && (this.currentNode.attribs[t] = new i(this, t, e));
                        return this
                    }
                    text(t) {
                        var e;
                        return this.openCurrent(), e = new b(this, t), this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    cdata(t) {
                        var e;
                        return this.openCurrent(), e = new s(this, t), this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    comment(t) {
                        var e;
                        return this.openCurrent(), e = new o(this, t), this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    raw(t) {
                        var e;
                        return this.openCurrent(), e = new g(this, t), this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    instruction(t, e) {
                        var r, n, i, s, o;
                        if (this.openCurrent(), null != t && (t = D(t)), null != e && (e = D(e)), Array.isArray(t))
                            for (r = 0, s = t.length; r < s; r++) n = t[r], this.instruction(n);
                        else if (O(t))
                            for (n in t) E.call(t, n) && (i = t[n], this.instruction(n, i));
                        else v(e) && (e = e.apply()), o = new f(this, t, e), this.onData(this.writer.processingInstruction(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
                        return this
                    }
                    declaration(t, e, r) {
                        var n;
                        if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
                        return n = new c(this, t, e, r), this.onData(this.writer.declaration(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    doctype(t, e, r) {
                        if (this.openCurrent(), null == t) throw new Error("Missing root node name.");
                        if (this.root) throw new Error("dtd() must come before the root node.");
                        return this.currentNode = new d(this, e, r), this.currentNode.rootNodeName = t, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this
                    }
                    dtdElement(t, e) {
                        var r;
                        return this.openCurrent(), r = new a(this, t, e), this.onData(this.writer.dtdElement(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    attList(t, e, r, n, i) {
                        var s;
                        return this.openCurrent(), s = new h(this, t, e, r, n, i), this.onData(this.writer.dtdAttList(s, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    entity(t, e) {
                        var r;
                        return this.openCurrent(), r = new l(this, !1, t, e), this.onData(this.writer.dtdEntity(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    pEntity(t, e) {
                        var r;
                        return this.openCurrent(), r = new l(this, !0, t, e), this.onData(this.writer.dtdEntity(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    notation(t, e) {
                        var r;
                        return this.openCurrent(), r = new u(this, t, e), this.onData(this.writer.dtdNotation(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                    }
                    up() {
                        if (this.currentLevel < 0) throw new Error("The document node has no parent.");
                        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this
                    }
                    end() {
                        for (; this.currentLevel >= 0;) this.up();
                        return this.onEnd()
                    }
                    openCurrent() {
                        if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode)
                    }
                    openNode(t) {
                        var r, i, s, o;
                        if (!t.isOpen) {
                            if (this.root || 0 !== this.currentLevel || t.type !== e.Element || (this.root = t), i = "", t.type === e.Element) {
                                for (s in this.writerOptions.state = n.OpenTag, i = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name, o = t.attribs) E.call(o, s) && (r = o[s], i += this.writer.attribute(r, this.writerOptions, this.currentLevel));
                                i += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = n.InsideTag
                            } else this.writerOptions.state = n.OpenTag, i = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName, t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), t.children ? (i += " [", this.writerOptions.state = n.InsideTag) : (this.writerOptions.state = n.CloseTag, i += ">"), i += this.writer.endline(t, this.writerOptions, this.currentLevel);
                            return this.onData(i, this.currentLevel), t.isOpen = !0
                        }
                    }
                    closeNode(t) {
                        var r;
                        if (!t.isClosed) return "", this.writerOptions.state = n.CloseTag, r = t.type === e.Element ? this.writer.indent(t, this.writerOptions, this.currentLevel) + "</" + t.name + ">" + this.writer.endline(t, this.writerOptions, this.currentLevel) : this.writer.indent(t, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = n.None, this.onData(r, this.currentLevel), t.isClosed = !0
                    }
                    onData(t, e) {
                        return this.documentStarted = !0, this.onDataCallback(t, e + 1)
                    }
                    onEnd() {
                        return this.documentCompleted = !0, this.onEndCallback()
                    }
                    debugInfo(t) {
                        return null == t ? "" : "node: <" + t + ">"
                    }
                    ele() {
                        return this.element(...arguments)
                    }
                    nod(t, e, r) {
                        return this.node(t, e, r)
                    }
                    txt(t) {
                        return this.text(t)
                    }
                    dat(t) {
                        return this.cdata(t)
                    }
                    com(t) {
                        return this.comment(t)
                    }
                    ins(t, e) {
                        return this.instruction(t, e)
                    }
                    dec(t, e, r) {
                        return this.declaration(t, e, r)
                    }
                    dtd(t, e, r) {
                        return this.doctype(t, e, r)
                    }
                    e(t, e, r) {
                        return this.element(t, e, r)
                    }
                    n(t, e, r) {
                        return this.node(t, e, r)
                    }
                    t(t) {
                        return this.text(t)
                    }
                    d(t) {
                        return this.cdata(t)
                    }
                    c(t) {
                        return this.comment(t)
                    }
                    r(t) {
                        return this.raw(t)
                    }
                    i(t, e) {
                        return this.instruction(t, e)
                    }
                    att() {
                        return this.currentNode && this.currentNode.type === e.DocType ? this.attList(...arguments) : this.attribute(...arguments)
                    }
                    a() {
                        return this.currentNode && this.currentNode.type === e.DocType ? this.attList(...arguments) : this.attribute(...arguments)
                    }
                    ent(t, e) {
                        return this.entity(t, e)
                    }
                    pent(t, e) {
                        return this.pEntity(t, e)
                    }
                    not(t, e) {
                        return this.notation(t, e)
                    }
                }
            }).call(this)
        },
        78833: function(t, e, r) {
            (function() {
                var e, n;
                n = r(32026), e = r(39335), t.exports = class extends n {
                    constructor(t) {
                        super(t), this.type = e.Dummy
                    }
                    clone() {
                        return Object.create(this)
                    }
                    toString(t) {
                        return ""
                    }
                }
            }).call(this)
        },
        32161: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a, l = {}.hasOwnProperty;
                ({
                    isObject: a,
                    isFunction: h,
                    getValue: o
                } = r(78369)), s = r(32026), e = r(39335), n = r(72750), i = r(40663), t.exports = function() {
                    class t extends s {
                        constructor(t, r, n) {
                            var i, s, o, h;
                            if (super(t), null == r) throw new Error("Missing element name. " + this.debugInfo());
                            if (this.name = this.stringify.name(r), this.type = e.Element, this.attribs = {}, this.schemaTypeInfo = null, null != n && this.attribute(n), t.type === e.Document && (this.isRoot = !0, this.documentObject = t, t.rootObject = this, t.children))
                                for (s = 0, o = (h = t.children).length; s < o; s++)
                                    if ((i = h[s]).type === e.DocType) {
                                        i.name = this.name;
                                        break
                                    }
                        }
                        clone() {
                            var t, e, r, n;
                            for (e in (r = Object.create(this)).isRoot && (r.documentObject = null), r.attribs = {}, n = this.attribs) l.call(n, e) && (t = n[e], r.attribs[e] = t.clone());
                            return r.children = [], this.children.forEach((function(t) {
                                var e;
                                return (e = t.clone()).parent = r, r.children.push(e)
                            })), r
                        }
                        attribute(t, e) {
                            var r, i;
                            if (null != t && (t = o(t)), a(t))
                                for (r in t) l.call(t, r) && (i = t[r], this.attribute(r, i));
                            else h(e) && (e = e.apply()), this.options.keepNullAttributes && null == e ? this.attribs[t] = new n(this, t, "") : null != e && (this.attribs[t] = new n(this, t, e));
                            return this
                        }
                        removeAttribute(t) {
                            var e, r, n;
                            if (null == t) throw new Error("Missing attribute name. " + this.debugInfo());
                            if (t = o(t), Array.isArray(t))
                                for (r = 0, n = t.length; r < n; r++) e = t[r], delete this.attribs[e];
                            else delete this.attribs[t];
                            return this
                        }
                        toString(t) {
                            return this.options.writer.element(this, this.options.writer.filterOptions(t))
                        }
                        att(t, e) {
                            return this.attribute(t, e)
                        }
                        a(t, e) {
                            return this.attribute(t, e)
                        }
                        getAttribute(t) {
                            return this.attribs.hasOwnProperty(t) ? this.attribs[t].value : null
                        }
                        setAttribute(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getAttributeNode(t) {
                            return this.attribs.hasOwnProperty(t) ? this.attribs[t] : null
                        }
                        setAttributeNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        removeAttributeNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagName(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getAttributeNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        setAttributeNS(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        removeAttributeNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getAttributeNodeNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        setAttributeNodeNS(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagNameNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        hasAttribute(t) {
                            return this.attribs.hasOwnProperty(t)
                        }
                        hasAttributeNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        setIdAttribute(t, e) {
                            return this.attribs.hasOwnProperty(t) ? this.attribs[t].isId : e
                        }
                        setIdAttributeNS(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        setIdAttributeNode(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagName(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByTagNameNS(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getElementsByClassName(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        isEqualNode(t) {
                            var e, r, n;
                            if (!super.isEqualNode(t)) return !1;
                            if (t.namespaceURI !== this.namespaceURI) return !1;
                            if (t.prefix !== this.prefix) return !1;
                            if (t.localName !== this.localName) return !1;
                            if (t.attribs.length !== this.attribs.length) return !1;
                            for (e = r = 0, n = this.attribs.length - 1; 0 <= n ? r <= n : r >= n; e = 0 <= n ? ++r : --r)
                                if (!this.attribs[e].isEqualNode(t.attribs[e])) return !1;
                            return !0
                        }
                    }
                    return Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        }
                    }), Object.defineProperty(t.prototype, "namespaceURI", {
                        get: function() {
                            return ""
                        }
                    }), Object.defineProperty(t.prototype, "prefix", {
                        get: function() {
                            return ""
                        }
                    }), Object.defineProperty(t.prototype, "localName", {
                        get: function() {
                            return this.name
                        }
                    }), Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), Object.defineProperty(t.prototype, "className", {
                        get: function() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), Object.defineProperty(t.prototype, "classList", {
                        get: function() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            return this.attributeMap && this.attributeMap.nodes || (this.attributeMap = new i(this.attribs)), this.attributeMap
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        40663: function(t) {
            (function() {
                t.exports = function() {
                    class t {
                        constructor(t) {
                            this.nodes = t
                        }
                        clone() {
                            return this.nodes = null
                        }
                        getNamedItem(t) {
                            return this.nodes[t]
                        }
                        setNamedItem(t) {
                            var e;
                            return e = this.nodes[t.nodeName], this.nodes[t.nodeName] = t, e || null
                        }
                        removeNamedItem(t) {
                            var e;
                            return e = this.nodes[t], delete this.nodes[t], e || null
                        }
                        item(t) {
                            return this.nodes[Object.keys(this.nodes)[t]] || null
                        }
                        getNamedItemNS(t, e) {
                            throw new Error("This DOM method is not implemented.")
                        }
                        setNamedItemNS(t) {
                            throw new Error("This DOM method is not implemented.")
                        }
                        removeNamedItemNS(t, e) {
                            throw new Error("This DOM method is not implemented.")
                        }
                    }
                    return Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return Object.keys(this.nodes).length || 0
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        32026: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a, l, u, c, d, p, m, f, g, y, w = {}.hasOwnProperty,
                    b = [].splice;
                ({
                    isObject: y,
                    isFunction: g,
                    isEmpty: f,
                    getValue: m
                } = r(78369)), l = null, i = null, s = null, o = null, h = null, d = null, p = null, c = null, a = null, n = null, u = null, e = null, t.exports = function() {
                    class t {
                        constructor(t) {
                            this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, l || (l = r(32161), i = r(66170), s = r(62096), o = r(59077), h = r(86544), d = r(79406), p = r(43595), c = r(19181), a = r(78833), n = r(39335), u = r(82390), r(40663), e = r(17557))
                        }
                        setParent(t) {
                            var e, r, n, i, s;
                            for (this.parent = t, t && (this.options = t.options, this.stringify = t.stringify), s = [], r = 0, n = (i = this.children).length; r < n; r++) e = i[r], s.push(e.setParent(this));
                            return s
                        }
                        element(t, e, r) {
                            var n, i, s, o, h, a, l, u, c;
                            if (a = null, null === e && null == r && ([e, r] = [{}, null]), null == e && (e = {}), e = m(e), y(e) || ([r, e] = [e, r]), null != t && (t = m(t)), Array.isArray(t))
                                for (s = 0, l = t.length; s < l; s++) i = t[s], a = this.element(i);
                            else if (g(t)) a = this.element(t.apply());
                            else if (y(t)) {
                                for (h in t)
                                    if (w.call(t, h))
                                        if (c = t[h], g(c) && (c = c.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === h.indexOf(this.stringify.convertAttKey)) a = this.attribute(h.substr(this.stringify.convertAttKey.length), c);
                                        else if (!this.options.separateArrayItems && Array.isArray(c) && f(c)) a = this.dummy();
                                else if (y(c) && f(c)) a = this.element(h);
                                else if (this.options.keepNullNodes || null != c)
                                    if (!this.options.separateArrayItems && Array.isArray(c))
                                        for (o = 0, u = c.length; o < u; o++) i = c[o], (n = {})[h] = i, a = this.element(n);
                                    else y(c) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === h.indexOf(this.stringify.convertTextKey) ? a = this.element(c) : (a = this.element(h)).element(c) : a = this.element(h, c);
                                else a = this.dummy()
                            } else a = this.options.keepNullNodes || null !== r ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === t.indexOf(this.stringify.convertTextKey) ? this.text(r) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === t.indexOf(this.stringify.convertCDataKey) ? this.cdata(r) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === t.indexOf(this.stringify.convertCommentKey) ? this.comment(r) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === t.indexOf(this.stringify.convertRawKey) ? this.raw(r) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === t.indexOf(this.stringify.convertPIKey) ? this.instruction(t.substr(this.stringify.convertPIKey.length), r) : this.node(t, e, r) : this.dummy();
                            if (null == a) throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
                            return a
                        }
                        insertBefore(t, e, r) {
                            var n, i, s, o, h;
                            if (null != t ? t.type : void 0) return o = e, (s = t).setParent(this), o ? (i = children.indexOf(o), h = children.splice(i), children.push(s), Array.prototype.push.apply(children, h)) : children.push(s), s;
                            if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
                            return i = this.parent.children.indexOf(this), h = this.parent.children.splice(i), n = this.parent.element(t, e, r), Array.prototype.push.apply(this.parent.children, h), n
                        }
                        insertAfter(t, e, r) {
                            var n, i, s;
                            if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
                            return i = this.parent.children.indexOf(this), s = this.parent.children.splice(i + 1), n = this.parent.element(t, e, r), Array.prototype.push.apply(this.parent.children, s), n
                        }
                        remove() {
                            var t;
                            if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
                            return t = this.parent.children.indexOf(this), b.apply(this.parent.children, [t, t - t + 1].concat([])), this.parent
                        }
                        node(t, e, r) {
                            var n;
                            return null != t && (t = m(t)), e || (e = {}), e = m(e), y(e) || ([r, e] = [e, r]), n = new l(this, t, e), null != r && n.text(r), this.children.push(n), n
                        }
                        text(t) {
                            var e;
                            return y(t) && this.element(t), e = new p(this, t), this.children.push(e), this
                        }
                        cdata(t) {
                            var e;
                            return e = new i(this, t), this.children.push(e), this
                        }
                        comment(t) {
                            var e;
                            return e = new s(this, t), this.children.push(e), this
                        }
                        commentBefore(t) {
                            var e, r;
                            return e = this.parent.children.indexOf(this), r = this.parent.children.splice(e), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, r), this
                        }
                        commentAfter(t) {
                            var e, r;
                            return e = this.parent.children.indexOf(this), r = this.parent.children.splice(e + 1), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, r), this
                        }
                        raw(t) {
                            var e;
                            return e = new d(this, t), this.children.push(e), this
                        }
                        dummy() {
                            return new a(this)
                        }
                        instruction(t, e) {
                            var r, n, i, s, o;
                            if (null != t && (t = m(t)), null != e && (e = m(e)), Array.isArray(t))
                                for (s = 0, o = t.length; s < o; s++) r = t[s], this.instruction(r);
                            else if (y(t))
                                for (r in t) w.call(t, r) && (n = t[r], this.instruction(r, n));
                            else g(e) && (e = e.apply()), i = new c(this, t, e), this.children.push(i);
                            return this
                        }
                        instructionBefore(t, e) {
                            var r, n;
                            return r = this.parent.children.indexOf(this), n = this.parent.children.splice(r), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, n), this
                        }
                        instructionAfter(t, e) {
                            var r, n;
                            return r = this.parent.children.indexOf(this), n = this.parent.children.splice(r + 1), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, n), this
                        }
                        declaration(t, e, r) {
                            var i, s;
                            return i = this.document(), s = new o(i, t, e, r), 0 === i.children.length ? i.children.unshift(s) : i.children[0].type === n.Declaration ? i.children[0] = s : i.children.unshift(s), i.root() || i
                        }
                        dtd(t, e) {
                            var r, i, s, o, a, l, u, c, d;
                            for (r = this.document(), i = new h(r, t, e), s = o = 0, l = (c = r.children).length; o < l; s = ++o)
                                if (c[s].type === n.DocType) return r.children[s] = i, i;
                            for (s = a = 0, u = (d = r.children).length; a < u; s = ++a)
                                if (d[s].isRoot) return r.children.splice(s, 0, i), i;
                            return r.children.push(i), i
                        }
                        up() {
                            if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
                            return this.parent
                        }
                        root() {
                            var t;
                            for (t = this; t;) {
                                if (t.type === n.Document) return t.rootObject;
                                if (t.isRoot) return t;
                                t = t.parent
                            }
                        }
                        document() {
                            var t;
                            for (t = this; t;) {
                                if (t.type === n.Document) return t;
                                t = t.parent
                            }
                        }
                        end(t) {
                            return this.document().end(t)
                        }
                        prev() {
                            var t;
                            if ((t = this.parent.children.indexOf(this)) < 1) throw new Error("Already at the first node. " + this.debugInfo());
                            return this.parent.children[t - 1]
                        }
                        next() {
                            var t;
                            if (-1 === (t = this.parent.children.indexOf(this)) || t === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
                            return this.parent.children[t + 1]
                        }
                        importDocument(t) {
                            var e, r, i, s, o;
                            if ((r = t.root().clone()).parent = this, r.isRoot = !1, this.children.push(r), this.type === n.Document && (r.isRoot = !0, r.documentObject = this, this.rootObject = r, this.children))
                                for (i = 0, s = (o = this.children).length; i < s; i++)
                                    if ((e = o[i]).type === n.DocType) {
                                        e.name = r.name;
                                        break
                                    }
                            return this
                        }
                        debugInfo(t) {
                            var e, r;
                            return null != (t = t || this.name) || (null != (e = this.parent) ? e.name : void 0) ? null == t ? "parent: <" + this.parent.name + ">" : (null != (r = this.parent) ? r.name : void 0) ? "node: <" + t + ">, parent: <" + this.parent.name + ">" : "node: <" + t + ">" : ""
                        }
                        ele(t, e, r) {
                            return this.element(t, e, r)
                        }
                        nod(t, e, r) {
                            return this.node(t, e, r)
                        }
                        txt(t) {
                            return this.text(t)
                        }
                        dat(t) {
                            return this.cdata(t)
                        }
                        com(t) {
                            return this.comment(t)
                        }
                        ins(t, e) {
                            return this.instruction(t, e)
                        }
                        doc() {
                            return this.document()
                        }
                        dec(t, e, r) {
                            return this.declaration(t, e, r)
                        }
                        e(t, e, r) {
                            return this.element(t, e, r)
                        }
                        n(t, e, r) {
                            return this.node(t, e, r)
                        }
                        t(t) {
                            return this.text(t)
                        }
                        d(t) {
                            return this.cdata(t)
                        }
                        c(t) {
                            return this.comment(t)
                        }
                        r(t) {
                            return this.raw(t)
                        }
                        i(t, e) {
                            return this.instruction(t, e)
                        }
                        u() {
                            return this.up()
                        }
                        importXMLBuilder(t) {
                            return this.importDocument(t)
                        }
                        attribute(t, e) {
                            throw new Error("attribute() applies to element nodes only.")
                        }
                        att(t, e) {
                            return this.attribute(t, e)
                        }
                        a(t, e) {
                            return this.attribute(t, e)
                        }
                        removeAttribute(t) {
                            throw new Error("attribute() applies to element nodes only.")
                        }
                        replaceChild(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        removeChild(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        appendChild(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        hasChildNodes() {
                            return 0 !== this.children.length
                        }
                        cloneNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        normalize() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        isSupported(t, e) {
                            return !0
                        }
                        hasAttributes() {
                            return 0 !== this.attribs.length
                        }
                        compareDocumentPosition(t) {
                            var r, n;
                            return (r = this) === t ? 0 : this.document() !== t.document() ? (n = e.Disconnected | e.ImplementationSpecific, Math.random() < .5 ? n |= e.Preceding : n |= e.Following, n) : r.isAncestor(t) ? e.Contains | e.Preceding : r.isDescendant(t) ? e.Contains | e.Following : r.isPreceding(t) ? e.Preceding : e.Following
                        }
                        isSameNode(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        lookupPrefix(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        isDefaultNamespace(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        lookupNamespaceURI(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        isEqualNode(t) {
                            var e, r, n;
                            if (t.nodeType !== this.nodeType) return !1;
                            if (t.children.length !== this.children.length) return !1;
                            for (e = r = 0, n = this.children.length - 1; 0 <= n ? r <= n : r >= n; e = 0 <= n ? ++r : --r)
                                if (!this.children[e].isEqualNode(t.children[e])) return !1;
                            return !0
                        }
                        getFeature(t, e) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        setUserData(t, e, r) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        getUserData(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        contains(t) {
                            return !!t && (t === this || this.isDescendant(t))
                        }
                        isDescendant(t) {
                            var e, r, n, i;
                            for (r = 0, n = (i = this.children).length; r < n; r++) {
                                if (t === (e = i[r])) return !0;
                                if (e.isDescendant(t)) return !0
                            }
                            return !1
                        }
                        isAncestor(t) {
                            return t.isDescendant(this)
                        }
                        isPreceding(t) {
                            var e, r;
                            return e = this.treePosition(t), r = this.treePosition(this), -1 !== e && -1 !== r && e < r
                        }
                        isFollowing(t) {
                            var e, r;
                            return e = this.treePosition(t), r = this.treePosition(this), -1 !== e && -1 !== r && e > r
                        }
                        treePosition(t) {
                            var e, r;
                            return r = 0, e = !1, this.foreachTreeNode(this.document(), (function(n) {
                                if (r++, !e && n === t) return e = !0
                            })), e ? r : -1
                        }
                        foreachTreeNode(t, e) {
                            var r, n, i, s, o;
                            for (t || (t = this.document()), n = 0, i = (s = t.children).length; n < i; n++) {
                                if (o = e(r = s[n])) return o;
                                if (o = this.foreachTreeNode(r, e)) return o
                            }
                        }
                    }
                    return Object.defineProperty(t.prototype, "nodeName", {
                        get: function() {
                            return this.name
                        }
                    }), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return this.type
                        }
                    }), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.value
                        }
                    }), Object.defineProperty(t.prototype, "parentNode", {
                        get: function() {
                            return this.parent
                        }
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.childNodeList && this.childNodeList.nodes || (this.childNodeList = new u(this.children)), this.childNodeList
                        }
                    }), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            return this.children[0] || null
                        }
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children[this.children.length - 1] || null
                        }
                    }), Object.defineProperty(t.prototype, "previousSibling", {
                        get: function() {
                            var t;
                            return t = this.parent.children.indexOf(this), this.parent.children[t - 1] || null
                        }
                    }), Object.defineProperty(t.prototype, "nextSibling", {
                        get: function() {
                            var t;
                            return t = this.parent.children.indexOf(this), this.parent.children[t + 1] || null
                        }
                    }), Object.defineProperty(t.prototype, "ownerDocument", {
                        get: function() {
                            return this.document() || null
                        }
                    }), Object.defineProperty(t.prototype, "textContent", {
                        get: function() {
                            var t, e, r, i, s;
                            if (this.nodeType === n.Element || this.nodeType === n.DocumentFragment) {
                                for (s = "", e = 0, r = (i = this.children).length; e < r; e++)(t = i[e]).textContent && (s += t.textContent);
                                return s
                            }
                            return null
                        },
                        set: function(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        82390: function(t) {
            (function() {
                t.exports = function() {
                    class t {
                        constructor(t) {
                            this.nodes = t
                        }
                        clone() {
                            return this.nodes = null
                        }
                        item(t) {
                            return this.nodes[t] || null
                        }
                    }
                    return Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return this.nodes.length || 0
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        19181: function(t, e, r) {
            (function() {
                var e, n;
                e = r(39335), n = r(6488), t.exports = class extends n {
                    constructor(t, r, n) {
                        if (super(t), null == r) throw new Error("Missing instruction target. " + this.debugInfo());
                        this.type = e.ProcessingInstruction, this.target = this.stringify.insTarget(r), this.name = this.target, n && (this.value = this.stringify.insValue(n))
                    }
                    clone() {
                        return Object.create(this)
                    }
                    toString(t) {
                        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(t))
                    }
                    isEqualNode(t) {
                        return !!super.isEqualNode(t) && t.target === this.target
                    }
                }
            }).call(this)
        },
        79406: function(t, e, r) {
            (function() {
                var e, n;
                e = r(39335), n = r(32026), t.exports = class extends n {
                    constructor(t, r) {
                        if (super(t), null == r) throw new Error("Missing raw text. " + this.debugInfo());
                        this.type = e.Raw, this.value = this.stringify.raw(r)
                    }
                    clone() {
                        return Object.create(this)
                    }
                    toString(t) {
                        return this.options.writer.raw(this, this.options.writer.filterOptions(t))
                    }
                }
            }).call(this)
        },
        81996: function(t, e, r) {
            (function() {
                var e, n, i, s = {}.hasOwnProperty;
                e = r(39335), i = r(60751), n = r(30594), t.exports = class extends i {
                    constructor(t, e) {
                        super(e), this.stream = t
                    }
                    endline(t, e, r) {
                        return t.isLastRootNode && e.state === n.CloseTag ? "" : super.endline(t, e, r)
                    }
                    document(t, e) {
                        var r, n, i, s, o, h, a, l, u;
                        for (n = i = 0, o = (a = t.children).length; i < o; n = ++i)(r = a[n]).isLastRootNode = n === t.children.length - 1;
                        for (e = this.filterOptions(e), u = [], s = 0, h = (l = t.children).length; s < h; s++) r = l[s], u.push(this.writeChildNode(r, e, 0));
                        return u
                    }
                    cdata(t, e, r) {
                        return this.stream.write(super.cdata(t, e, r))
                    }
                    comment(t, e, r) {
                        return this.stream.write(super.comment(t, e, r))
                    }
                    declaration(t, e, r) {
                        return this.stream.write(super.declaration(t, e, r))
                    }
                    docType(t, e, r) {
                        var i, s, o, h;
                        if (r || (r = 0), this.openNode(t, e, r), e.state = n.OpenTag, this.stream.write(this.indent(t, e, r)), this.stream.write("<!DOCTYPE " + t.root().name), t.pubID && t.sysID ? this.stream.write(' PUBLIC "' + t.pubID + '" "' + t.sysID + '"') : t.sysID && this.stream.write(' SYSTEM "' + t.sysID + '"'), t.children.length > 0) {
                            for (this.stream.write(" ["), this.stream.write(this.endline(t, e, r)), e.state = n.InsideTag, s = 0, o = (h = t.children).length; s < o; s++) i = h[s], this.writeChildNode(i, e, r + 1);
                            e.state = n.CloseTag, this.stream.write("]")
                        }
                        return e.state = n.CloseTag, this.stream.write(e.spaceBeforeSlash + ">"), this.stream.write(this.endline(t, e, r)), e.state = n.None, this.closeNode(t, e, r)
                    }
                    element(t, r, i) {
                        var o, h, a, l, u, c, d, p, m, f, g, y, w, b;
                        if (i || (i = 0), this.openNode(t, r, i), r.state = n.OpenTag, m = this.indent(t, r, i) + "<" + t.name, r.pretty && r.width > 0)
                            for (p in c = m.length, g = t.attribs) s.call(g, p) && (o = g[p], c + (f = this.attribute(o, r, i)).length > r.width ? (b = this.indent(t, r, i + 1) + f, m += this.endline(t, r, i) + b, c = b.length) : (m += b = " " + f, c += b.length));
                        else
                            for (p in y = t.attribs) s.call(y, p) && (o = y[p], m += this.attribute(o, r, i));
                        if (this.stream.write(m), l = 0 === (a = t.children.length) ? null : t.children[0], 0 === a || t.children.every((function(t) {
                                return (t.type === e.Text || t.type === e.Raw || t.type === e.CData) && "" === t.value
                            }))) r.allowEmpty ? (this.stream.write(">"), r.state = n.CloseTag, this.stream.write("</" + t.name + ">")) : (r.state = n.CloseTag, this.stream.write(r.spaceBeforeSlash + "/>"));
                        else if (!r.pretty || 1 !== a || l.type !== e.Text && l.type !== e.Raw && l.type !== e.CData || null == l.value) {
                            for (this.stream.write(">" + this.endline(t, r, i)), r.state = n.InsideTag, u = 0, d = (w = t.children).length; u < d; u++) h = w[u], this.writeChildNode(h, r, i + 1);
                            r.state = n.CloseTag, this.stream.write(this.indent(t, r, i) + "</" + t.name + ">")
                        } else this.stream.write(">"), r.state = n.InsideTag, r.suppressPrettyCount++, this.writeChildNode(l, r, i + 1), r.suppressPrettyCount--, r.state = n.CloseTag, this.stream.write("</" + t.name + ">");
                        return this.stream.write(this.endline(t, r, i)), r.state = n.None, this.closeNode(t, r, i)
                    }
                    processingInstruction(t, e, r) {
                        return this.stream.write(super.processingInstruction(t, e, r))
                    }
                    raw(t, e, r) {
                        return this.stream.write(super.raw(t, e, r))
                    }
                    text(t, e, r) {
                        return this.stream.write(super.text(t, e, r))
                    }
                    dtdAttList(t, e, r) {
                        return this.stream.write(super.dtdAttList(t, e, r))
                    }
                    dtdElement(t, e, r) {
                        return this.stream.write(super.dtdElement(t, e, r))
                    }
                    dtdEntity(t, e, r) {
                        return this.stream.write(super.dtdEntity(t, e, r))
                    }
                    dtdNotation(t, e, r) {
                        return this.stream.write(super.dtdNotation(t, e, r))
                    }
                }
            }).call(this)
        },
        26434: function(t, e, r) {
            (function() {
                var e;
                e = r(60751), t.exports = class extends e {
                    constructor(t) {
                        super(t)
                    }
                    document(t, e) {
                        var r, n, i, s, o;
                        for (e = this.filterOptions(e), s = "", n = 0, i = (o = t.children).length; n < i; n++) r = o[n], s += this.writeChildNode(r, e, 0);
                        return e.pretty && s.slice(-e.newline.length) === e.newline && (s = s.slice(0, -e.newline.length)), s
                    }
                }
            }).call(this)
        },
        95549: function(t) {
            (function() {
                var e = {}.hasOwnProperty;
                t.exports = function() {
                    class t {
                        constructor(t) {
                            var r, n, i;
                            for (r in this.assertLegalChar = this.assertLegalChar.bind(this), this.assertLegalName = this.assertLegalName.bind(this), t || (t = {}), this.options = t, this.options.version || (this.options.version = "1.0"), n = t.stringify || {}) e.call(n, r) && (i = n[r], this[r] = i)
                        }
                        name(t) {
                            return this.options.noValidation ? t : this.assertLegalName("" + t || "")
                        }
                        text(t) {
                            return this.options.noValidation ? t : this.assertLegalChar(this.textEscape("" + t || ""))
                        }
                        cdata(t) {
                            return this.options.noValidation ? t : (t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(t))
                        }
                        comment(t) {
                            if (this.options.noValidation) return t;
                            if ((t = "" + t || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + t);
                            return this.assertLegalChar(t)
                        }
                        raw(t) {
                            return this.options.noValidation ? t : "" + t || ""
                        }
                        attValue(t) {
                            return this.options.noValidation ? t : this.assertLegalChar(this.attEscape(t = "" + t || ""))
                        }
                        insTarget(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        insValue(t) {
                            if (this.options.noValidation) return t;
                            if ((t = "" + t || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + t);
                            return this.assertLegalChar(t)
                        }
                        xmlVersion(t) {
                            if (this.options.noValidation) return t;
                            if (!(t = "" + t || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + t);
                            return t
                        }
                        xmlEncoding(t) {
                            if (this.options.noValidation) return t;
                            if (!(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + t);
                            return this.assertLegalChar(t)
                        }
                        xmlStandalone(t) {
                            return this.options.noValidation ? t : t ? "yes" : "no"
                        }
                        dtdPubID(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdSysID(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdElementValue(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdAttType(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdAttDefault(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdEntityValue(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        dtdNData(t) {
                            return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                        }
                        assertLegalChar(t) {
                            var e, r;
                            if (this.options.noValidation) return t;
                            if ("1.0" === this.options.version) {
                                if (e = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, void 0 !== this.options.invalidCharReplacement) t = t.replace(e, this.options.invalidCharReplacement);
                                else if (r = t.match(e)) throw new Error(`Invalid character in string: ${t} at index ${r.index}`)
                            } else if ("1.1" === this.options.version)
                                if (e = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, void 0 !== this.options.invalidCharReplacement) t = t.replace(e, this.options.invalidCharReplacement);
                                else if (r = t.match(e)) throw new Error(`Invalid character in string: ${t} at index ${r.index}`);
                            return t
                        }
                        assertLegalName(t) {
                            var e;
                            if (this.options.noValidation) return t;
                            if (e = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !(t = this.assertLegalChar(t)).match(e)) throw new Error(`Invalid character in name: ${t}`);
                            return t
                        }
                        textEscape(t) {
                            var e;
                            return this.options.noValidation ? t : (e = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;"))
                        }
                        attEscape(t) {
                            var e;
                            return this.options.noValidation ? t : (e = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;"))
                        }
                    }
                    return t.prototype.convertAttKey = "@", t.prototype.convertPIKey = "?", t.prototype.convertTextKey = "#text", t.prototype.convertCDataKey = "#cdata", t.prototype.convertCommentKey = "#comment", t.prototype.convertRawKey = "#raw", t
                }.call(this)
            }).call(this)
        },
        43595: function(t, e, r) {
            (function() {
                var e, n;
                e = r(39335), n = r(6488), t.exports = function() {
                    class t extends n {
                        constructor(t, r) {
                            if (super(t), null == r) throw new Error("Missing element text. " + this.debugInfo());
                            this.name = "#text", this.type = e.Text, this.value = this.stringify.text(r)
                        }
                        clone() {
                            return Object.create(this)
                        }
                        toString(t) {
                            return this.options.writer.text(this, this.options.writer.filterOptions(t))
                        }
                        splitText(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                        replaceWholeText(t) {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }
                    return Object.defineProperty(t.prototype, "isElementContentWhitespace", {
                        get: function() {
                            throw new Error("This DOM method is not implemented." + this.debugInfo())
                        }
                    }), Object.defineProperty(t.prototype, "wholeText", {
                        get: function() {
                            var t, e, r;
                            for (r = "", e = this.previousSibling; e;) r = e.data + r, e = e.previousSibling;
                            for (r += this.data, t = this.nextSibling; t;) r += t.data, t = t.nextSibling;
                            return r
                        }
                    }), t
                }.call(this)
            }).call(this)
        },
        60751: function(t, e, r) {
            (function() {
                var e, n, i, s = {}.hasOwnProperty;
                ({
                    assign: i
                } = r(78369)), e = r(39335), r(59077), r(86544), r(66170), r(62096), r(32161), r(79406), r(43595), r(19181), r(78833), r(51179), r(36347), r(99078), r(44777), n = r(30594), t.exports = class {
                    constructor(t) {
                        var e, r, n;
                        for (e in t || (t = {}), this.options = t, r = t.writer || {}) s.call(r, e) && (n = r[e], this["_" + e] = this[e], this[e] = n)
                    }
                    filterOptions(t) {
                        var e, r, s, o, h, a, l, u, c;
                        return t || (t = {}), t = i({}, this.options, t), (e = {
                            writer: this
                        }).pretty = t.pretty || !1, e.allowEmpty = t.allowEmpty || !1, e.indent = null != (r = t.indent) ? r : "  ", e.newline = null != (s = t.newline) ? s : "\n", e.offset = null != (o = t.offset) ? o : 0, e.width = null != (h = t.width) ? h : 0, e.dontPrettyTextNodes = null != (a = null != (l = t.dontPrettyTextNodes) ? l : t.dontprettytextnodes) ? a : 0, e.spaceBeforeSlash = null != (u = null != (c = t.spaceBeforeSlash) ? c : t.spacebeforeslash) ? u : "", !0 === e.spaceBeforeSlash && (e.spaceBeforeSlash = " "), e.suppressPrettyCount = 0, e.user = {}, e.state = n.None, e
                    }
                    indent(t, e, r) {
                        var n;
                        return !e.pretty || e.suppressPrettyCount ? "" : e.pretty && (n = (r || 0) + e.offset + 1) > 0 ? new Array(n).join(e.indent) : ""
                    }
                    endline(t, e, r) {
                        return !e.pretty || e.suppressPrettyCount ? "" : e.newline
                    }
                    attribute(t, e, r) {
                        var n;
                        return this.openAttribute(t, e, r), n = e.pretty && e.width > 0 ? t.name + '="' + t.value + '"' : " " + t.name + '="' + t.value + '"', this.closeAttribute(t, e, r), n
                    }
                    cdata(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<![CDATA[", e.state = n.InsideTag, i += t.value, e.state = n.CloseTag, i += "]]>" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    comment(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "\x3c!-- ", e.state = n.InsideTag, i += t.value, e.state = n.CloseTag, i += " --\x3e" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    declaration(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<?xml", e.state = n.InsideTag, i += ' version="' + t.version + '"', null != t.encoding && (i += ' encoding="' + t.encoding + '"'), null != t.standalone && (i += ' standalone="' + t.standalone + '"'), e.state = n.CloseTag, i += e.spaceBeforeSlash + "?>", i += this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    docType(t, e, r) {
                        var i, s, o, h, a;
                        if (r || (r = 0), this.openNode(t, e, r), e.state = n.OpenTag, h = this.indent(t, e, r), h += "<!DOCTYPE " + t.root().name, t.pubID && t.sysID ? h += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (h += ' SYSTEM "' + t.sysID + '"'), t.children.length > 0) {
                            for (h += " [", h += this.endline(t, e, r), e.state = n.InsideTag, s = 0, o = (a = t.children).length; s < o; s++) i = a[s], h += this.writeChildNode(i, e, r + 1);
                            e.state = n.CloseTag, h += "]"
                        }
                        return e.state = n.CloseTag, h += e.spaceBeforeSlash + ">", h += this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), h
                    }
                    element(t, r, i) {
                        var o, h, a, l, u, c, d, p, m, f, g, y, w, b, D, v, O, I;
                        if (i || (i = 0), g = !1, this.openNode(t, r, i), r.state = n.OpenTag, y = this.indent(t, r, i) + "<" + t.name, r.pretty && r.width > 0)
                            for (f in d = y.length, b = t.attribs) s.call(b, f) && (o = b[f], d + (w = this.attribute(o, r, i)).length > r.width ? (I = this.indent(t, r, i + 1) + w, y += this.endline(t, r, i) + I, d = I.length) : (y += I = " " + w, d += I.length));
                        else
                            for (f in D = t.attribs) s.call(D, f) && (o = D[f], y += this.attribute(o, r, i));
                        if (l = 0 === (a = t.children.length) ? null : t.children[0], 0 === a || t.children.every((function(t) {
                                return (t.type === e.Text || t.type === e.Raw || t.type === e.CData) && "" === t.value
                            }))) r.allowEmpty ? (y += ">", r.state = n.CloseTag, y += "</" + t.name + ">" + this.endline(t, r, i)) : (r.state = n.CloseTag, y += r.spaceBeforeSlash + "/>" + this.endline(t, r, i));
                        else if (!r.pretty || 1 !== a || l.type !== e.Text && l.type !== e.Raw && l.type !== e.CData || null == l.value) {
                            if (r.dontPrettyTextNodes)
                                for (u = 0, p = (v = t.children).length; u < p; u++)
                                    if (((h = v[u]).type === e.Text || h.type === e.Raw || h.type === e.CData) && null != h.value) {
                                        r.suppressPrettyCount++, g = !0;
                                        break
                                    }
                            for (y += ">" + this.endline(t, r, i), r.state = n.InsideTag, c = 0, m = (O = t.children).length; c < m; c++) h = O[c], y += this.writeChildNode(h, r, i + 1);
                            r.state = n.CloseTag, y += this.indent(t, r, i) + "</" + t.name + ">", g && r.suppressPrettyCount--, y += this.endline(t, r, i), r.state = n.None
                        } else y += ">", r.state = n.InsideTag, r.suppressPrettyCount++, g = !0, y += this.writeChildNode(l, r, i + 1), r.suppressPrettyCount--, g = !1, r.state = n.CloseTag, y += "</" + t.name + ">" + this.endline(t, r, i);
                        return this.closeNode(t, r, i), y
                    }
                    writeChildNode(t, r, n) {
                        switch (t.type) {
                            case e.CData:
                                return this.cdata(t, r, n);
                            case e.Comment:
                                return this.comment(t, r, n);
                            case e.Element:
                                return this.element(t, r, n);
                            case e.Raw:
                                return this.raw(t, r, n);
                            case e.Text:
                                return this.text(t, r, n);
                            case e.ProcessingInstruction:
                                return this.processingInstruction(t, r, n);
                            case e.Dummy:
                                return "";
                            case e.Declaration:
                                return this.declaration(t, r, n);
                            case e.DocType:
                                return this.docType(t, r, n);
                            case e.AttributeDeclaration:
                                return this.dtdAttList(t, r, n);
                            case e.ElementDeclaration:
                                return this.dtdElement(t, r, n);
                            case e.EntityDeclaration:
                                return this.dtdEntity(t, r, n);
                            case e.NotationDeclaration:
                                return this.dtdNotation(t, r, n);
                            default:
                                throw new Error("Unknown XML node type: " + t.constructor.name)
                        }
                    }
                    processingInstruction(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<?", e.state = n.InsideTag, i += t.target, t.value && (i += " " + t.value), e.state = n.CloseTag, i += e.spaceBeforeSlash + "?>", i += this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    raw(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r), e.state = n.InsideTag, i += t.value, e.state = n.CloseTag, i += this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    text(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r), e.state = n.InsideTag, i += t.value, e.state = n.CloseTag, i += this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    dtdAttList(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<!ATTLIST", e.state = n.InsideTag, i += " " + t.elementName + " " + t.attributeName + " " + t.attributeType, "#DEFAULT" !== t.defaultValueType && (i += " " + t.defaultValueType), t.defaultValue && (i += ' "' + t.defaultValue + '"'), e.state = n.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    dtdElement(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<!ELEMENT", e.state = n.InsideTag, i += " " + t.name + " " + t.value, e.state = n.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    dtdEntity(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<!ENTITY", e.state = n.InsideTag, t.pe && (i += " %"), i += " " + t.name, t.value ? i += ' "' + t.value + '"' : (t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), t.nData && (i += " NDATA " + t.nData)), e.state = n.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    dtdNotation(t, e, r) {
                        var i;
                        return this.openNode(t, e, r), e.state = n.OpenTag, i = this.indent(t, e, r) + "<!NOTATION", e.state = n.InsideTag, i += " " + t.name, t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.pubID ? i += ' PUBLIC "' + t.pubID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), e.state = n.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, r), e.state = n.None, this.closeNode(t, e, r), i
                    }
                    openNode(t, e, r) {}
                    closeNode(t, e, r) {}
                    openAttribute(t, e, r) {}
                    closeAttribute(t, e, r) {}
                }
            }).call(this)
        },
        5532: function(t, e, r) {
            (function() {
                var e, n, i, s, o, h, a, l, u;
                ({
                    assign: l,
                    isFunction: u
                } = r(78369)), i = r(91770), s = r(66934), o = r(79227), a = r(26434), h = r(81996), e = r(39335), n = r(30594), t.exports.create = function(t, e, r, n) {
                    var i, o;
                    if (null == t) throw new Error("Root element needs a name.");
                    return n = l({}, e, r, n), o = (i = new s(n)).element(t), n.headless || (i.declaration(n), null == n.pubID && null == n.sysID || i.dtd(n)), o
                }, t.exports.begin = function(t, e, r) {
                    return u(t) && ([e, r] = [t, e], t = {}), e ? new o(t, e, r) : new s(t)
                }, t.exports.stringWriter = function(t) {
                    return new a(t)
                }, t.exports.streamWriter = function(t, e) {
                    return new h(t, e)
                }, t.exports.implementation = new i, t.exports.nodeType = e, t.exports.writerState = n
            }).call(this)
        }
    }
]);