(() => {
    "use strict";
    var e, a, f, c, d, t = {},
        b = {};

    function r(e) {
        var a = b[e];
        if (void 0 !== a) return a.exports;
        var f = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(f.exports, f, f.exports, r), f.loaded = !0, f.exports
    }
    r.m = t, e = [], r.O = (a, f, c, d) => {
        if (!f) {
            var t = 1 / 0;
            for (i = 0; i < e.length; i++) {
                for (var [f, c, d] = e[i], b = !0, n = 0; n < f.length; n++)(!1 & d || t >= d) && Object.keys(r.O).every((e => r.O[e](f[n]))) ? f.splice(n--, 1) : (b = !1, d < t && (t = d));
                if (b) {
                    e.splice(i--, 1);
                    var o = c();
                    void 0 !== o && (a = o)
                }
            }
            return a
        }
        d = d || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > d; i--) e[i] = e[i - 1];
        e[i] = [f, c, d]
    }, r.n = e => {
        var a = e && e.__esModule ? () => e.default : () => e;
        return r.d(a, {
            a
        }), a
    }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, r.t = function(e, c) {
        if (1 & c && (e = this(e)), 8 & c) return e;
        if ("object" === typeof e && e) {
            if (4 & c && e.__esModule) return e;
            if (16 & c && "function" === typeof e.then) return e
        }
        var d = Object.create(null);
        r.r(d);
        var t = {};
        a = a || [null, f({}), f([]), f(f)];
        for (var b = 2 & c && e;
            "object" == typeof b && !~a.indexOf(b); b = f(b)) Object.getOwnPropertyNames(b).forEach((a => t[a] = () => e[a]));
        return t.default = () => e, r.d(d, t), d
    }, r.d = (e, a) => {
        for (var f in a) r.o(a, f) && !r.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce(((a, f) => (r.f[f](e, a), a)), [])), r.u = e => (({
        234: "npm.browserify-aes",
        320: "npm.jpeg-js",
        516: "npm.hash.js",
        534: "OKXBrand",
        572: "Home-Passphrase",
        598: "npm.react-markdown",
        609: "SupportedWalletsAndCoins",
        831: "npm.exif-parser",
        1292: "npm.gifwrap",
        1366: "Roadmap",
        1420: "npm.react-grid-system",
        1431: "ContactUsPage",
        1506: "PrivacyPromises",
        1509: "Home-TrustedBy",
        1525: "Home-FAQ",
        1534: "WalletsAndCoinsIntegration",
        1607: "FromLedgerToKeystone",
        1706: "Home-Integration",
        1719: "Firmware",
        2245: "npm.react-highlight-words",
        2284: "npm.mdast-util-to-hast",
        2413: "OverviewKVP",
        2478: "OKX",
        2497: "npm.dom7",
        2506: "npm.ngraveio",
        2599: "GetStartedStep6",
        2723: "Home-Opensource",
        2849: "TabletEasyToUse",
        2910: "UserComments",
        2974: "npm.keccak",
        2980: "Home-Backed",
        2992: "npm.browserify-rsa",
        3023: "npm.semver",
        3026: "ShippingRegions",
        3147: "npm.bignumber.js",
        3302: "TabletInstallationGuide",
        3385: "npm.pngjs",
        3513: "npm.micromark",
        3542: "FeatureTiles",
        3573: "npm.browserify-zlib",
        3619: "npm.secp256k1",
        3699: "npm.pako",
        3832: "npm.hash-base",
        3846: "npm.elliptic",
        3874: "npm.stream-browserify",
        3883: "npm.util",
        3893: "Home-Buy",
        4077: "TabletSecurity",
        4250: "npm.react-world-flags",
        4271: "UserReviews",
        4280: "ShopDetails",
        4393: "Home-Blog",
        4544: "npm.ethereumjs-util",
        4548: "npm.vfile",
        4765: "GetStartedStep1",
        4769: "GetStartedStep5",
        4845: "GetStarted",
        4917: "npm.stream-http",
        4960: "npm.asn1.js",
        5072: "Cart",
        5149: "NFTList",
        5182: "npm.utif",
        5244: "Home-BlowTheFold",
        5338: "CoBranded",
        5554: "npm.browserify-sign",
        5652: "BtcOnly",
        5715: "npm.micromark-core-commonmark",
        5737: "npm.bn.js",
        5756: "Review",
        6001: "Landing",
        6384: "LikeList",
        6412: "GetStartedStep3",
        6420: "Shop",
        6508: "npm.jimp",
        6664: "GetStartedStep4",
        6799: "WhatsInTheBox",
        6847: "Redirect",
        7024: "WebUsbUpgrade",
        7113: "OpenSourceAndBlindSigning",
        7128: "Home-MetaMask",
        7174: "npm.mdast-util-from-markdown",
        7179: "OverviewKV",
        7187: "NotFound",
        7449: "npm.rlp",
        7558: "TechSpecs",
        7581: "Home-EasyToUse",
        7767: "npm.crc",
        7981: "npm.apocentre",
        8011: "Home-Screen",
        8055: "npm.qr.js",
        8095: "npm.swiper",
        8133: "TechSpecsOther",
        8149: "Home-SecurityTitle",
        8158: "GetStartedGen3",
        8208: "SecurityPillar",
        8211: "npm.big-integer",
        8364: "Affiliates",
        8370: "npm.dompurify",
        8430: "Legal",
        8545: "Product-OverviewK3",
        8593: "BountyProgram",
        8709: "DetailsFAQ",
        8787: "npm.property-information",
        8853: "npm.marked",
        8901: "OverviewKT",
        9191: "WhyKeystone",
        9227: "npm.buffer",
        9390: "Welcome",
        9492: "Home-Security",
        9502: "Home-SelfDestruction",
        9641: "Resellers",
        9721: "npm.keystonehq",
        9728: "MetaMask",
        9730: "Home-EcosystemIntegration",
        9744: "npm.assert",
        9772: "npm.image-q",
        9797: "npm.intl",
        9867: "WebAuthentication",
        9868: "GetStartedStep2",
        9898: "BTCHalving",
        9941: "OverviewBundle",
        9961: "ComparisonGrid"
    }[e] || e) + "." + {
        234: "15b252fa79c0743dae4f",
        320: "0949ff6d8fb551a631af",
        516: "0874341ff12eb2d16df5",
        534: "e220a79e5a96a0faba9c",
        571: "3f4edf8b528db6876b09",
        572: "e1bfe6b4f5b5ff787269",
        598: "caf0059630f3955a8c70",
        609: "b9c6b829bbfd5adb1f44",
        831: "07ef79c857319e5fd970",
        954: "72cde2d9fa401bf1b903",
        1292: "8854a910e5b8139ab2d7",
        1366: "85cc6f7d26c1fd4a6608",
        1420: "90c09e1c557f359d73ab",
        1431: "6d4460bf2d0d57ea6c95",
        1441: "022bcc7c9a0ca9ae91b9",
        1450: "1efaf9bffe620a75c478",
        1506: "a15c048e3631872ea8aa",
        1509: "982b65e81359768b910e",
        1525: "198a35fc78f040954935",
        1534: "5fad9c89406bc50ead76",
        1607: "d9fb217835445500331f",
        1706: "9eb162495356cb9423ac",
        1719: "8081895cd2e2cdcf654e",
        1778: "b79e86a05a3c424bb3b8",
        1809: "656d0ea8757ab76baa1a",
        2055: "e2d0255a6157a904166b",
        2245: "9a08e7e4f902d8dc0b89",
        2284: "2bdeaca2f71566d3a7ee",
        2413: "838e049073f3b9e03a12",
        2478: "b1b29534f0359629690b",
        2479: "60bcb493e95e5abced83",
        2482: "9d9213532c6ed9408cb2",
        2497: "0de1f08ca5898f3dbb9c",
        2506: "29d916a2798bd429e76d",
        2568: "2b37eb4d8f560293733d",
        2599: "ee66e247d5a16cb73f6c",
        2723: "7410af88f453c6da2f77",
        2740: "ad273391722af96e5a62",
        2849: "fbd1bac3d845fb2d2438",
        2910: "69b393e603671245da33",
        2974: "1f56858620d4690f015a",
        2980: "9d1f0ea4d6e22624572a",
        2992: "1b004de395dee2da5642",
        3023: "c92996ddf64e1e43bb60",
        3026: "f864f5234674d57c80ea",
        3043: "55219b7a52edd2931789",
        3147: "3e3cc1284a2a6c04030c",
        3302: "5e088b374d7c3edd5dc2",
        3385: "1f0b090e3acaecb07246",
        3513: "ea8664425aedc23e3c52",
        3542: "2c3b3ddb7399a3bdf239",
        3573: "7b98bc937f4f79de5911",
        3599: "114460e0c7d224271867",
        3619: "73b13cd0eeb5d6d46366",
        3625: "cefce985f44e27537dc9",
        3699: "853e5dc91c05b204a97e",
        3832: "7405a46873c2acdaa0f3",
        3846: "ed632a30006e72420566",
        3874: "e6589e195983ee69c570",
        3883: "2c4720b6b8c7cbfbd0c3",
        3893: "46c115539807a317a725",
        3906: "4dbe5787c58e24f8af14",
        3943: "f600e40d7b7ad6ecde86",
        3974: "999714bc18acd5054120",
        4077: "88fad2261d3fd1065670",
        4250: "8d048b5017dcf7d18ce0",
        4271: "f3b508ba67b4d33910ef",
        4280: "b59f1dc7b8c8626dd572",
        4393: "1e2a3cf36f7f73a96ecc",
        4495: "47607e92fad032a03e66",
        4544: "cbb2f8a1a3f4bfdf5685",
        4548: "15d7f2089e2d48cef25b",
        4765: "3be7d4f99e9d647fdde4",
        4769: "7e53b0b73f439f24129c",
        4845: "197b31ee358131f9f12a",
        4917: "3e31692f9827bac74bd4",
        4960: "1d1c4dbc62bfb13b1d18",
        5026: "2cb8eae48da1d97d1066",
        5040: "65679dac84170967d3e6",
        5072: "3a3aaf0d80db9c5c3a11",
        5126: "f024b23ba28406a6a0a3",
        5149: "8e3599dabf81478d2944",
        5182: "c268d63676efb1574be9",
        5244: "c5414ba191ab30009cf5",
        5338: "e3768c86d24bb235dad2",
        5554: "5a7e255f68f643e12ab7",
        5652: "4fc42c1ec7ffe00a22c5",
        5715: "15bc42f82e5a5345d458",
        5737: "bf7520df7c5d2c37c19e",
        5756: "5be09f43470d86bf00d3",
        5770: "f75c56ca77e8c8903209",
        6001: "5485912adff3801ef3d3",
        6007: "194e262b3285548096b5",
        6384: "16d0ed91c640b2c144d6",
        6412: "39fdeb4eda900e88d6e0",
        6420: "8f042422931e2e40e438",
        6431: "a7ae92c53210b74826db",
        6508: "acf2c5b1d0564bf3efb7",
        6664: "a2a9ddd130bd0be3021f",
        6799: "f18ea3497072091dd658",
        6847: "8bcd59b9345cdd5ab837",
        7024: "625b79192be50561b74b",
        7113: "e5433f1f7d751d7b7526",
        7128: "c75fde63d4b7117e7441",
        7174: "efafbfe310d326a9df4e",
        7179: "6e874955d47c35d7d54a",
        7187: "0a16b1a9e357fc6e399c",
        7449: "09c7456244585718b4fc",
        7558: "0119623937de949819d1",
        7581: "6edde0603dd7a6ca0702",
        7767: "4a806c0bfc3d2913578c",
        7891: "8a825ab961c223ec9b71",
        7896: "f9395590b4a979ce1781",
        7981: "8d81a482c49480c6c192",
        8011: "0f21226d49bccd474221",
        8055: "469a17fecdf56fed55b6",
        8095: "6b96b61a06dffe06b0ae",
        8133: "2943ae6a819d6799ecc1",
        8149: "beb567dd9364a93bd9a5",
        8158: "3a976bee0196b64dbc45",
        8208: "502b4b9a1d315b1efc1e",
        8211: "37ad97e60bd34607fd3c",
        8226: "926b9a6aa75f6e578d4e",
        8364: "022b5033ad35cf88b471",
        8370: "cce527b125c25e4450eb",
        8430: "57e22aa158f0874ecb9a",
        8545: "a726670a4e6427553400",
        8593: "dd13b4764aa7550d05da",
        8681: "25ba3a46f257b47d6b52",
        8684: "15a38096afa6cd16cbb9",
        8709: "647dee1c46d5dc5004d8",
        8787: "2e61f5d0a2772c9d09bf",
        8853: "72747591d298f2cca43c",
        8901: "7c882d7ee4e62461c07c",
        9039: "9aac6f8a371d4273298c",
        9042: "e02c63163c2a98791076",
        9097: "ec267bfc6fe09a4c008a",
        9191: "d60881718d1b5a7d14b5",
        9227: "a5dd264ba6fe2217988e",
        9317: "1c2cbb431643f532fe1b",
        9345: "707c6ff753e79fc4f149",
        9390: "67380386eee9051f2a36",
        9462: "ebca89a010463ca710cc",
        9492: "5c87c885b83a5b0c575c",
        9502: "a45ccf05042086272d65",
        9641: "b0dae7a3b53f86d00393",
        9721: "e9f39714995573f01395",
        9728: "5e7cea02a33fa7b233e9",
        9730: "6067dab108c0a686207d",
        9744: "a5aac0d7ed893d8a2bcb",
        9772: "c26e771d03b815d8e7c8",
        9797: "409153473c56840053c0",
        9867: "8ba0a7d822fcc476109e",
        9868: "cdbff4e3f4a08e5ea8b8",
        9898: "15484d4053da45977881",
        9941: "e79810f1e9b0e36ed544",
        9961: "5784834332df97cedd4e"
    }[e] + ".chunk.js"), r.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), r.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), r.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, d = "react-boilerplate:", r.l = (e, a, f, t) => {
        if (c[e]) c[e].push(a);
        else {
            var b, n;
            if (void 0 !== f)
                for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                    var s = o[i];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + f) {
                        b = s;
                        break
                    }
                }
            b || (n = !0, (b = document.createElement("script")).charset = "utf-8", b.timeout = 120, r.nc && b.setAttribute("nonce", r.nc), b.setAttribute("data-webpack", d + f), b.src = e), c[e] = [a];
            var p = (a, f) => {
                    b.onerror = b.onload = null, clearTimeout(m);
                    var d = c[e];
                    if (delete c[e], b.parentNode && b.parentNode.removeChild(b), d && d.forEach((e => e(f))), a) return a(f)
                },
                m = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: b
                }), 12e4);
            b.onerror = p.bind(null, b.onerror), b.onload = p.bind(null, b.onload), n && document.head.appendChild(b)
        }
    }, r.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.p = "/", (() => {
        var e = {
            1303: 0
        };
        r.f.j = (a, f) => {
            var c = r.o(e, a) ? e[a] : void 0;
            if (0 !== c)
                if (c) f.push(c[2]);
                else if (1303 != a) {
                var d = new Promise(((f, d) => c = e[a] = [f, d]));
                f.push(c[2] = d);
                var t = r.p + r.u(a),
                    b = new Error;
                r.l(t, (f => {
                    if (r.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                        var d = f && ("load" === f.type ? "missing" : f.type),
                            t = f && f.target && f.target.src;
                        b.message = "Loading chunk " + a + " failed.\n(" + d + ": " + t + ")", b.name = "ChunkLoadError", b.type = d, b.request = t, c[1](b)
                    }
                }), "chunk-" + a, a)
            } else e[a] = 0
        }, r.O.j = a => 0 === e[a];
        var a = (a, f) => {
                var c, d, [t, b, n] = f,
                    o = 0;
                if (t.some((a => 0 !== e[a]))) {
                    for (c in b) r.o(b, c) && (r.m[c] = b[c]);
                    if (n) var i = n(r)
                }
                for (a && a(f); o < t.length; o++) d = t[o], r.o(e, d) && e[d] && e[d][0](), e[d] = 0;
                return r.O(i)
            },
            f = self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || [];
        f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
    })(), r.nc = void 0
})();