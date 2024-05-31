(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [2910], {
        17401: (t, e, r) => {
            var o = {
                "./site.png": 52506,
                "./twitter.png": 1420
            };

            function n(t) {
                var e = a(t);
                return r(e)
            }

            function a(t) {
                if (!r.o(o, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return o[t]
            }
            n.keys = function() {
                return Object.keys(o)
            }, n.resolve = a, t.exports = n, n.id = 17401
        },
        71990: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => P
            });
            var o = r(67294),
                n = r.n(o),
                a = (r(71150), r(71893)),
                i = r(83109),
                s = r(82229),
                l = r(44763),
                c = r(93423),
                u = r(48300),
                p = r(97396),
                h = ["width", "height", "color"];

            function y(t) {
                var e = t.width,
                    r = void 0 === e ? "24" : e,
                    o = t.height,
                    a = void 0 === o ? "24" : o,
                    i = t.color,
                    s = void 0 === i ? "currentColor" : i,
                    l = function(t, e) {
                        if (null == t) return {};
                        var r, o, n = function(t, e) {
                            if (null == t) return {};
                            var r, o, n = {},
                                a = Object.keys(t);
                            for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (n[r] = t[r]);
                            return n
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(t);
                            for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                        }
                        return n
                    }(t, h);
                return n().createElement(u.Z, l, n().createElement("svg", {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: s,
                    xmlns: "http://www.w3.org/2000/svg"
                }, n().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.0002 4.66602C8.00016 5.99935 3.3335 11.3327 3.3335 17.9993H8.66683C8.00016 11.9993 9.3335 9.33268 12.6668 5.33268L12.0002 4.66602ZM21.3332 4.66602C17.3332 5.99935 12.6665 11.3327 12.6665 17.9993H17.9998C17.3332 11.9993 18.6665 9.33268 21.9998 5.33268L21.3332 4.66602Z"
                })))
            }
            y.propTypes = p.Q;
            var d = a.ZP.div.withConfig({
                    displayName: "style__Container",
                    componentId: "sc-1yqesu1-0"
                })(["margin-top:200px;.swiper-wrapper{padding-top:5px;}.video-pagination{--background-color:var(--color-bg-default) !important;}@media ", "{margin-top:128px;}"], i.We),
                m = ((0, a.ZP)(l.Z).withConfig({
                    displayName: "style__ViewAllLink",
                    componentId: "sc-1yqesu1-1"
                })(["display:inline-block;margin-top:40px;color:var(--color-bd-pink);", ""], s.FF), a.ZP.div.withConfig({
                    displayName: "style__Li",
                    componentId: "sc-1yqesu1-2"
                })(["@media ", "{height:434px;.user-name{color:var(--color-bd-pink);}}position:relative;display:inline-block;border:1px solid var(--color-border-subtle);padding:36px 24px;transition:var(--transition);margin-bottom:24px;cursor:url(", ") 25 25,auto;&:last-child{margin-bottom:0;}&:hover{border-color:var(--color-bd-pink);.user-name{color:var(--color-bd-pink);}}"], i.We, (function(t) {
                    return r(17401)("./".concat(t.origin, ".png"))
                }))),
                g = (0, a.ZP)(c.uT).withConfig({
                    displayName: "style__Text",
                    componentId: "sc-1yqesu1-3"
                })(["margin-bottom:48px;color:var(--color-fg-muted);white-space:pre-wrap;"]),
                w = a.ZP.img.withConfig({
                    displayName: "style__Avatar",
                    componentId: "sc-1yqesu1-4"
                })(["box-sizing:border-box;width:24px;height:24px;border:2px solid rgba(255,255,255,0.2);border-radius:50%;margin-right:8px;"]),
                f = (0, a.ZP)(c.iO).attrs({
                    className: "user-name"
                }).withConfig({
                    displayName: "style__Name",
                    componentId: "sc-1yqesu1-5"
                })(["color:var(--color-fg-subtle);transition:var(--transition);"]),
                v = (0, a.ZP)(y).withConfig({
                    displayName: "style__QuoteIcon",
                    componentId: "sc-1yqesu1-6"
                })(["color:var(--color-bd-pink);position:absolute;top:-12px;left:24px;"]),
                b = (a.ZP.em.withConfig({
                    displayName: "style__Em",
                    componentId: "sc-1yqesu1-7"
                })(["color:var(--color-bd-cyan);"]), r(4098)),
                A = r(97132),
                k = r(83634),
                I = r(49402),
                C = [{
                    avatar: "https://unavatar.io/twitter/staccSats",
                    name: "\u20bfitcoin\u20bfruder",
                    content: "First impression is very positive. Great build quality and I love the touchscreen and finger print reader, not sure if any other wallet has that. The built in shamir backup options are very interesting for advanced 'fake' multisig setups.  Feels much more solid than a jade for example.",
                    link: "https://twitter.com/staccSats/status/1776691507539378180",
                    zhContent: "\u7b2c\u4e00\u5370\u8c61\u975e\u5e38\u79ef\u6781\u3002\u51fa\u8272\u7684\u8d28\u91cf\uff0c\u6211\u559c\u6b22\u89e6\u6478\u5c4f\u548c\u6307\u7eb9\u8bc6\u522b\u5668\uff0c\u4e0d\u786e\u5b9a\u5176\u4ed6\u4efb\u4f55\u94b1\u5305\u662f\u5426\u90fd\u6709\u8fd9\u4e2a\u529f\u80fd\u3002\u5185\u7f6e\u7684Shamir\u5907\u4efd\u9009\u9879\u5bf9\u4e8e\u9ad8\u7ea7\u7684\u201c\u5047\u201d\u591a\u91cd\u7b7e\u540d\u8bbe\u7f6e\u975e\u5e38\u6709\u8da3\u3002\u6bd4\u5982\u8bf4\uff0c\u5b83\u611f\u89c9\u6bd4Jade\u8981\u575a\u56fa\u5f97\u591a\u3002",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/solashenone",
                    name: "ashen",
                    content: "I tried out the new @KeystoneWallet and tbh, i loved it.  Some honest thoughts: 1. Touch screen has good adaptability & usage 2. Fingerprint makes it easy to unlock & secure3. Good alternative to Ledger5. Mobile access through wallet 6. Open source, secure, and allat ",
                    zhContent: "\u6211\u8bd5\u7528\u4e86\u65b0\u7684 @KeystoneWallet \uff0c\u8bf4\u5b9e\u8bdd\uff0c\u6211\u5f88\u559c\u6b22\u3002\u4e00\u4e9b\u771f\u5b9e\u7684\u60f3\u6cd5\uff1a1.\u89e6\u6478\u5c4f\u5177\u6709\u826f\u597d\u7684\u9002\u5e94\u6027\u548c\u4f7f\u7528\u6027 2.\u6307\u7eb9\u4f7f\u5176\u6613\u4e8e\u89e3\u9501\u548c\u5b89\u5168 3.\u662fLedger\u7684\u826f\u597d\u66ff\u4ee3\u54c1 4.\u901a\u8fc7\u94b1\u5305\u8fdb\u884c\u79fb\u52a8\u8bbf\u95ee 5.\u5f00\u6e90\u3001\u5b89\u5168\uff0c\u7b49\u7b49",
                    link: "https://twitter.com/notashenone/status/1724124279745184065",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/cryptojohnnyfap",
                    name: "Johnny Fap",
                    content: "Just tried out @KeystoneWallet and I must say, it's incredibly seamless and supports a wide range of currencies !  The packaging is good and the quality is top-notch!  Hardware wallets protect you from potential hacks.",
                    zhContent: "\u521a\u521a\u5c1d\u8bd5\u4e86 @KeystoneWallet \uff0c\u6211\u5fc5\u987b\u8bf4\uff0c\u5b83\u7684\u4f7f\u7528\u975e\u5e38\u6d41\u7545\uff0c\u652f\u6301\u591a\u79cd\u8d27\u5e01\uff01\u5305\u88c5\u5f88\u597d\uff0c\u8d28\u91cf\u4e00\u6d41\uff01\u786c\u4ef6\u94b1\u5305\u53ef\u4ee5\u4fdd\u62a4\u60a8\u514d\u53d7\u6f5c\u5728\u7684\u9ed1\u5ba2\u653b\u51fb\u3002",
                    link: "https://twitter.com/cryptojohnnyfap/status/1785545505897959890",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/reardencode",
                    name: "Rearden \u{1f36f}\u{1f9a1} \u{1f9a2} | embrace forks",
                    content: "1. seed security - whether via Jade's blind oracle or secure element (obv. keystone has this)  2. ease of use - i will never use another 2-button HWW (e.g. ledger, trezor), keystone is absolutely best in class here 3. support for passphrase - keystone has it",
                    zhContent: "1. \u79cd\u5b50\u5b89\u5168\u6027 - \u65e0\u8bba\u662f\u901a\u8fc7Jade \u7684\u76f2\u773c\u9884\u8a00\u8fd8\u662f\u5b89\u5168\u5143\u7d20\uff08\u663e\u7136Keystone\u4e5f\u6709\u8fd9\u4e2a\uff09 2. \u4f7f\u7528\u4fbf\u6377\u6027 - \u6211\u6c38\u8fdc\u4e0d\u4f1a\u518d\u4f7f\u7528\u53e6\u4e00\u4e2a2\u6309\u94ae\u7684\u786c\u4ef6\u94b1\u5305\uff08\u4f8b\u5982Ledger\uff0cTrezor\uff09\uff0c\u5728\u8fd9\u65b9\u9762Keystone\u7edd\u5bf9\u662f\u6700\u4f73\u7684 3. \u652f\u6301passphrase - Keystone\u6709\u8fd9\u4e2a",
                    link: "https://twitter.com/reardencode",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/akibablade",
                    name: "Akiba",
                    content: "I will say this - I gave my wife my ledger and she couldn't figure out how to login. I gave her my keystone and she was in in 2 seconds. In terms of usability and security it's definitely the best on the market imo.",
                    zhContent: "\u6211\u8981\u8bf4\u7684\u662f - \u6211\u628a\u6211\u7684Ledger\u7ed9\u4e86\u6211\u7684\u59bb\u5b50\uff0c\u5979\u627e\u4e0d\u5230\u5982\u4f55\u767b\u5f55\u3002\u6211\u7ed9\u5979\u6211\u7684Keystone\uff0c\u59792\u79d2\u949f\u5c31\u767b\u5f55\u4e86\u3002\u5728\u53ef\u7528\u6027\u548c\u5b89\u5168\u6027\u65b9\u9762\uff0c\u6211\u8ba4\u4e3a\u5b83\u7edd\u5bf9\u662f\u5e02\u573a\u4e0a\u6700\u597d\u7684\u3002",
                    link: "https://twitter.com/akibablade",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/32e73f34-5f77-4857-b464-6bf062c9b5fd._CR0,0,375,375_UX460_.jpg",
                    name: "Sudarshan MS",
                    content: "This is my second purchase of Keystone 3 Pro and oh boy I just love it for how good it integrates with almost all big software wallets like MM, Rabby. The integrations are seamless and you never feel insecure as you get all the information displayed on its big screen before you sign any contracts.",
                    zhContent: "\u8fd9\u662f\u6211\u7b2c\u4e8c\u6b21\u8d2d\u4e70Keystone 3 Pro\uff0c\u54e6\uff0c\u5929\u54ea\uff0c\u6211\u5c31\u662f\u559c\u6b22\u5b83\uff0c\u56e0\u4e3a\u5b83\u4e0e\u51e0\u4e4e\u6240\u6709\u5927\u578b\u8f6f\u4ef6\u94b1\u5305\uff08\u5982MM\u3001Rabby\uff09\u90fd\u80fd\u5f88\u597d\u5730\u96c6\u6210\u3002\u96c6\u6210\u975e\u5e38\u987a\u7545\uff0c\u5728\u7b7e\u7f72\u4efb\u4f55\u5408\u540c\u4e4b\u524d\uff0c\u60a8\u90fd\u53ef\u4ee5\u5728\u5b83\u7684\u5927\u5c4f\u5e55\u4e0a\u770b\u5230\u6240\u6709\u7684\u4fe1\u606f\uff0c\u60a8\u4e0d\u4f1a\u611f\u5230\u4e0d\u5b89\u5168\u3002",
                    link: "https://www.amazon.co.uk/gp/customer-reviews/R2DHVRK25KJDHA/ref_=bcr_shw_rev_dtl",
                    origin: "site",
                    type: "user"
                }, {
                    avatar: "https://unavatar.io/twitter/0xTangle",
                    name: "0xTangle.eth",
                    content: "If you haven't checked out Keystone yet, you absolutely need to. It's my go to wallet. It's air gapped using a built-in camera and QR codes, so no connection to your computer or phone! NFTs can also be set as your lock screen!",
                    zhContent: "\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u4f7f\u7528\u8fc7Keystone \uff0c\u60a8\u7edd\u5bf9\u9700\u8981\u5c1d\u8bd5\u4e0b\u5b83\u3002\u5b83\u662f\u6211\u7684\u786c\u4ef6\u94b1\u5305\u3002\u5b83\u4f7f\u7528\u5185\u7f6e\u76f8\u673a\u548c\u4e8c\u7ef4\u7801\u8fdb\u884c\u6570\u636e\u901a\u4fe1\uff0c\u56e0\u6b64\u4e0d\u4e0e\u60a8\u7684\u7535\u8111\u6216\u624b\u673a\u8fde\u63a5\uff01 NFT\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u60a8\u7684\u9501\u5c4f\uff01",
                    link: "https://twitter.com/0xTangle/status/1493668376601931784",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/cryptopulse_1",
                    name: "MaticNews",
                    content: "Excellent customer service! Critical issues are addressed swiftly & accurately assisted by professional support staff 24/7.",
                    zhContent: "\u4f18\u79c0\u7684\u5ba2\u6237\u670d\u52a1\uff01\u91cd\u8981\u95ee\u9898\u5f97\u5230\u4e86\u5feb\u901f\u89e3\u51b3\uff0c\u5e76\u5f97\u5230\u4e86\u5de5\u4f5c\u4eba\u5458\u5168\u5929\u5019\u7684\u4e13\u4e1a\u534f\u52a9\u3002",
                    link: "https://twitter.com/maticnews_com/status/1625162934589562882",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/LewiczMichal",
                    name: "LewiczMichal",
                    content: "This is the one and only one I have been waiting for a while. I have tested many hardware wallets, but I am sure Keystone will stay with me for a long time. Lots of updates, good service support on discord. Everything you need for your security!",
                    zhContent: "\u8fd9\u662f\u6211\u7b49\u4e86\u5f88\u4e45\u7684\u552f\u4e00\u7684\u4e00\u6b3e\u786c\u4ef6\u94b1\u5305\u3002\u6211\u6d4b\u8bd5\u4e86\u8bb8\u591a\u786c\u4ef6\u94b1\u5305\uff0c\u4f46\u6211\u786e\u4fe1 Keystone \u5c06\u4e0e\u6211\u5171\u5ea6\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u3002 Discord \u4e0a\u6709\u5f88\u591a\u66f4\u65b0\u548c\u826f\u597d\u7684\u670d\u52a1\u652f\u6301\u3002\u4e00\u5207\u90fd\u662f\u4e3a\u4e86\u60a8\u7684\u5b89\u5168\uff01",
                    link: "https://twitter.com/LewiczMichal",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/Curious__J",
                    name: "Curious J",
                    content: "In terms of my overall experience, I have to say that I was impressed with the Keystone Pro Hardware Wallet. It feels like they have really thought about the various ways in which they can keep users disconnected from online attack vectors.",
                    zhContent: "\u5c31\u6211\u7684\u6574\u4f53\u7ecf\u9a8c\u800c\u8a00\uff0c\u6211\u5fc5\u987b\u8bf4\u6211\u5bf9 Keystone Pro \u786c\u4ef6\u94b1\u5305\u5370\u8c61\u6df1\u523b\u3002\u611f\u89c9\u4ed6\u4eec\u771f\u7684\u8003\u8651\u4e86\u5404\u79cd\u65b9\u5f0f\uff0c\u8ba9\u7528\u6237\u8fdc\u79bb\u7ebf\u4e0a\u653b\u51fb\u3002",
                    link: "https://twitter.com/Curious__J/status/1632118756536381441",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/everstake_pool",
                    name: "Everstake",
                    content: "All in all, the wallet is quite a nice device that ensures high-grade security for personal use.",
                    zhContent: "\u603b\u7684\u6765\u8bf4\uff0cKeystone \u94b1\u5305\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u8bbe\u5907\uff0c\u53ef\u786e\u4fdd\u4e2a\u4eba\u4f7f\u7528\u7684\u9ad8\u7ea7\u5b89\u5168\u6027\u3002",
                    link: "https://twitter.com/everstake_pool/status/1631706794429906951",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/Kyle",
                    name: "Kyle",
                    content: "Keystone has an extra layer of protection that just eases my mind. The ability to read decoded transactions on Keystone is a huge plus point in my opinion.",
                    zhContent: "Keystone \u5177\u6709\u989d\u5916\u7684\u4fdd\u62a4\u5c42\uff0c\u8ba9\u6211\u653e\u5fc3\u3002\u5728 Keystone \u4e0a\u89e3\u7801\u4ea4\u6613\u7684\u80fd\u529b\u5728\u6211\u770b\u6765\u662f\u4e00\u4e2a\u5de8\u5927\u7684\u52a0\u5206\u70b9\u3002",
                    link: "https://twitter.com/0xkyle__/status/1584545264978649088",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/0xArjay",
                    name: "0xArjay",
                    content: "When I travel, I ONLY carry my Keystone Hardware Wallet. This is because it allows me to perform my DeFi transactions from my mobile device vs a Trezor or Ledger, I would need to connect my laptop to a wifi or hotspot connection.",
                    zhContent: "\u65c5\u884c\u65f6\u6211\u53ea\u643a\u5e26 Keystone \u786c\u4ef6\u94b1\u5305. \u56e0\u4e3a\u5b83\u53ef\u4ee5\u8ba9\u6211\u4ece\u6211\u7684\u79fb\u52a8\u88c5\u7f6e\u8fdb\u884c DeFi \u4ea4\u6613, \u800c\u4e0d\u50cf Trezor \u6216 Ledger \u90a3\u6837, \u6211\u9700\u8981\u8fde\u63a5\u6211\u7684\u7b14\u8bb0\u672c\u7535\u8111\u5230 wifi \u6216\u70ed\u70b9\u8fde\u63a5\u3002",
                    link: "https://twitter.com/0xArjay/status/1575958200020787200",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/CuriousKiwi23",
                    name: "Keith Nicol",
                    content: "I manage my crypto on the GO, this will now be the sole device I use moving forward. Gone are the days of Ledger and Ellipal.",
                    zhContent: "\u6211\u5728\u79fb\u52a8\u65f6\u7ba1\u7406\u6211\u7684\u52a0\u5bc6\u8d27\u5e01\uff0c\u8fd9\u5c06\u662f\u6211\u672a\u6765\u4f7f\u7528\u7684\u552f\u4e00\u8bbe\u5907\u3002Ledger \u548c Ellipal \u7684\u65e5\u5b50\u5df2\u7ecf\u4e00\u53bb\u4e0d\u590d\u8fd4\u4e86\u3002",
                    link: "https://twitter.com/KiwiKeithNZ/status/1628218630193434624",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/Krug_Crypto",
                    name: "Krug_Crypto",
                    content: "If you are active in DeFi/Crypto I implore you, Keystone or otherwise, to look into getting and utilizing a cold wallet. $20-200 now could save you many thousands of dollars in the future. It could easily be the best investment you ever make in cryptocurrency.",
                    zhContent: "\u5982\u679c\u60a8\u5728 DeFi / Crypto \u793e\u533a\u4e2d\u6d3b\u8dc3\uff0c\u6211\u6073\u8bf7\u60a8\u5c1d\u8bd5 Keystone \u6216\u5176\u4ed6\u51b7\u94b1\u5305\u3002\u73b0\u5728\u7684 20-200 \u7f8e\u5143\u53ef\u4ee5\u4e3a\u60a8\u672a\u6765\u8282\u7701\u6210\u5343\u4e0a\u4e07\u7f8e\u5143\u3002\u8fd9\u53ef\u80fd\u662f\u60a8\u5728\u52a0\u5bc6\u8d27\u5e01\u65b9\u9762\u505a\u51fa\u7684\u6700\u4f73\u6295\u8d44\u3002",
                    link: "https://twitter.com/Krug_Crypto/status/1523496808806338560",
                    origin: "twitter",
                    type: "kol"
                }, {
                    avatar: "https://cyberscrilla.com/ezoimgfmt/secure.gravatar.com/avatar/d7a014b83422df8e7195e9ea9a861cf1?d=mm&ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1&r=g&s=96",
                    name: "Cyber Scrilla",
                    content: "If you\u2019re looking for an affordable and user-friendly wallet, the Keystone Pro is my top pick! It\u2019s arguably one of the most secure hardware wallets on the market. It\u2019s 100% air gapped, has an anti-tamper mechanism, and supports Shamir backup. This thing is basically a vault for you digital assets.",
                    zhContent: "\u5982\u679c\u60a8\u6b63\u5728\u5bfb\u627e\u4ef7\u683c\u5b9e\u60e0\u4e14\u4f7f\u7528\u53cb\u597d\u7684\u94b1\u5305\uff0cKeystone Pro \u662f\u6211\u9996\u9009\uff01\u5b83\u53ef\u4ee5\u8bf4\u662f\u5e02\u573a\u4e0a\u6700\u5b89\u5168\u7684\u786c\u4ef6\u94b1\u5305\u4e4b\u4e00\u3002\u5b83\u662f 100\uff05 \u7684\u79bb\u7ebf\uff0c\u5177\u6709\u53cd\u7834\u574f\u673a\u5236\uff0c\u5e76\u652f\u6301 Shamir \u5907\u4efd\u3002\u8fd9\u4e1c\u897f\u57fa\u672c\u4e0a\u662f\u60a8\u6570\u5b57\u8d44\u4ea7\u7684\u4fdd\u9669\u5e93\u3002",
                    link: "https://cyberscrilla.com/keystone-pro-hardware-wallet-review/",
                    origin: "site",
                    type: "kol"
                }, {
                    avatar: "https://unavatar.io/twitter/SliphNFT",
                    name: "SliphNFT",
                    content: "Ever wanted to Sweep and List NFTs or Swap on the go?{br}Thanks to @KeystoneWallet now you can.{br}AirGapped QR Based Wallet (No BT/WiFi) that is the only of his kind supported by Metamask.{br}I never leave my desk without it!{br}Keystone ONE PRO is my choice here.",
                    zhContent: "\u4e00\u76f4\u60f3\u8981\u5728\u79fb\u52a8\u8bbe\u5907\u4e2d\u626b\u63cf\u548c\u5217\u51fa NFT \u6216\u8fdb\u884c\u4ea4\u6362\u5417\uff1f{br}\u591a\u4e8f\u4e86@KeystoneWallet\uff0c\u73b0\u5728\u60a8\u53ef\u4ee5{br}\u57fa\u4e8e\u4e8c\u7ef4\u7801\u7684\u79bb\u7ebf\u51b7\u94b1\u5305\uff08\u65e0BT / WiFi\uff09\uff0c\u8fd9\u662f MetaMask \u652f\u6301\u7684\u552f\u4e00\u4e00\u79cd{br}Keystone \u662f\u6211\u7684\u9009\u62e9\uff0c\u6211\u4e00\u76f4\u5728\u4f7f\u7528\u5b83\uff01",
                    link: "https://twitter.com/SliphNFT/status/1646149288773206022",
                    origin: "twitter",
                    type: "user"
                }, {
                    avatar: "https://rankfi.com/wp-content/uploads/2021/11/RankFi-64x64-2.png",
                    name: "RankFi",
                    content: "Hardware wallets used to be slow and clunky, but The Keystone Pro has been a pleasure to use. The touchscreen, built-in camera, and fingerprint sensor make it one of the easiest and fastest wallets out there.",
                    zhContent: "\u786c\u4ef6\u94b1\u5305\u66fe\u7ecf\u5f88\u6162\u4e14\u7b28\u91cd\uff0c\u4f46 Keystone Pro \u4f7f\u7528\u8d77\u6765\u5f88\u6109\u5feb\u3002\u89e6\u6478\u5c4f\uff0c\u5185\u7f6e\u76f8\u673a\u548c\u6307\u7eb9\u4f20\u611f\u5668\u4f7f\u5176\u6210\u4e3a\u5e02\u573a\u4e0a\u6700\u7b80\u5355\uff0c\u6700\u5feb\u901f\u7684\u94b1\u5305\u4e4b\u4e00\u3002",
                    link: "https://rankfi.com/keystone-wallet-review/",
                    origin: "site",
                    type: "kol"
                }],
                E = r(34257);

            function O(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(r), !0).forEach((function(e) {
                        x(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function x(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function K(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
                return o
            }

            function D(t) {
                var e;
                return t ? n().createElement(m, {
                    as: "a",
                    origin: t.origin,
                    href: t.link,
                    target: "_blank",
                    key: t.name
                }, n().createElement(v, null), n().createElement(g, null, null === (e = t.content) || void 0 === e ? void 0 : e.replace(/\{br\}/g, "\n")), n().createElement(I.bW, null, n().createElement(w, {
                    src: t.avatar,
                    loading: "lazy"
                }), n().createElement(f, null, t.name))) : null
            }

            function P() {
                var t, e, r = (t = (0, o.useState)([]), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != r) {
                            var o, n, a = [],
                                i = !0,
                                s = !1;
                            try {
                                for (r = r.call(t); !(i = (o = r.next()).done) && (a.push(o.value), !e || a.length !== e); i = !0);
                            } catch (t) {
                                s = !0, n = t
                            } finally {
                                try {
                                    i || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" === typeof t) return K(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? K(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    a = r[0],
                    i = r[1],
                    s = function() {
                        var t = (0, A.YB)(),
                            e = ((0, b.S)("keystone"), (0, b.S)("keystone.home.userComments")),
                            r = (0, b.z)("keystone.home.userComments");
                        return {
                            subTitle: e("subTitle"),
                            title: t.formatMessage(r("title"), {
                                em: function(t) {
                                    return n().createElement("em", null, t)
                                }
                            })
                        }
                    }(),
                    l = (0, A.YB)(),
                    c = (0, E.Z)();
                return (0, o.useEffect)((function() {
                    i(C.map((function(t) {
                        return T(T({}, t), {}, {
                            key: t.content,
                            content: "en" === l.locale ? t.content : t.zhContent
                        })
                    })))
                }), [l.locale]), n().createElement(d, null, n().createElement(k.Z, {
                    title: s.title,
                    list: a,
                    customSlideRender: D,
                    perView: c ? 1 : 4
                }))
            }
        },
        52506: t => {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU/SURBVHgBzVm/UxtHFH57iN8xCDtxwIhBN+MqzASRxqNQBJo4pVPEreOBHsM/YPEPQOjxhLRQ2K0r7CIoHXJmkioZHQMYJomNUAjhh9DmfQun6Ned9k5nWd/M6U53u3ff2/3e27e7ggJANL0ZPqfje2S0jEqZj/KtmEEyLEmE7TKSyBJ8kDBSlL941UrGC8uMW1QnBPkESJ8ZJzNCygn+O0H+kCIpl+oxxrMBNnFD5h8Vt3DdEGKlNU/zXg3xZMCtreTjwImXQQqReD0cn9ctr2VANJ2Mngv5lC9j1BhYrVJM6vSGUavA4FbyQU7kN6lx5AE02Oat9Ma9WgVdDYBk2MlW3qVkXBAWgp4qDi5wlBAqcoRJUBPAzS+qGoCug/XUTBAt3+4O3/mh4nb5DTgsNP+eZOOGDDv2WLljV/gAO896E5IHwleRsAQlBlw5TJSaF7FI+sdE8Y2ChK5ifZqaHyylTtMyxzL4U+iBc4MeU4AYCrWrY6S1W50DRDhHx4/sP6oHgmh9kPym+ybFO3popK2LeoxQRZnkSZZ+OfuHnvy9R9u5U6oDhV5QXzmn/ITfxBTEF27cVsRrAWVwTPcM0OrRn7R4uO3XELsXEpcSEmKGfOD+Bzfp+cCnWuQr636k6k5fGyA/4MHtC5yFX/nMhYdorjdCQWAhs0ML3BtewTLqC/mRTy3y2XyuoHcg3tHr2ktz4Yiqs8y+4QUXPAsMMfWY9FAp3t7jSn716A9KHGwpQgUc7ihfWft4hCIOESlxPaoMTp5mSRd5EjFDCmNUtwJILH542/H5cnaP5t78rsjD0Olr/epAPTjrl3s/046L0+Ld1aKXEyTJqIEf3QpT7HBOLQhiT64kAImt9Y9wq5rqSA5+phwehs2++c3x/Xg3DNaFEGLUEJqpA1oR4c8JG6x5tPLdzutVJZboG1atC9/YyZ04vgff8DDwhWvOyGxM1Qh3P50cqrOTs4L8V5196hrGOgHlpvRDq74BQeBQXjp2rwed1wJLSGZ0CkLfJZGlDJ+0davz83/fVn2Our+eHavrSKiDan1LFwaHIi0DoG+3OI2R1dZ4+aAE8okDS73DzpWcgEjmIb2wQqyhlNR05OXsPt3nhK1aJAJ5OC+IYmSFIQilWZbN6tFfygiUWbzhHIaLI5kOsFQZ4lWHLY5HWhXsMIgBqRoQQRRJ7gEYkCxyVhiDkBpxiTB4t5fkTkp6FZJYn/QAkEIrJ/qiVZ9DSipRO36rRlYYNML+USvhW8hslxisB5HiZG6d55rtB+QRyF/meocoCID8AqcbXnEhham0M2gl17lDJsgjIBnovsdnWIQkQRyO6x0ytRsdH1PjgJD5l+QD+PBdzm+QwHkF5IK6/sgzpLGE09WUcj2cE23pepZTMPxjBHXTu3Ls00Na49lYnVNKJZ99XiMqhB8sV/AsJ7CJfXk+Uy/hEvBewu5w/KG6tO8F0QuNgt36uC7kQpY5meEEe4maHLzgPL9ftLxYMYINWhuN3gvwAms3+rlZfKMiG+Xu+Vo3wWskwIm5TZbfrzAA3SOlMUtNhrwMPdyvsuVUdT6wa8ZXoDVqEoDLa/POs6rP3CoGHVr9AOR3zPGE43OqgSHerZFCft/o8ArNC0mz2+b4ins5DfTz6l0Lb3xQ4/YOUggm+xrbrJ6W5N61pFT047HITTKVdTxC9Qbx7qWgBxQQbOIh6vrO3rjQr+sTl4bQhBByRvoc+PjjL3ha9dIP8aJ31A/bGM5xY5xo8VKlWu2L/v8RmeEgkBGYf0vaQi7fSl3P/JIuxn+8ImMkUv9C4wAAAABJRU5ErkJggg=="
        },
        1420: t => {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOnSURBVHgBzZrPbtNAEMYnFfcGxAM4cC1qyhFQ/xwBVZQzgYZTEa0QvRQ1PTRIgJKeyoWUE0VVG270QLhGiMK1KH2ANLxAE15g2LG91mRZGtu7TvyTRk7WdvKtd7/MeJ0MWAARs2KzIGJShCMiLyLrh+TUj18ivtE2k8mcwqgg0SI2RTQxPsciiiIcGBZM+Bna5UPiHUlIuMom2IauDHrDPSzaaGs0xActYvJXXQd95wKYgN6UGTXxphSmQ7wkWifECQuYPhZ1WjMa8Y7YHEN/EkoDXRFTavLTdaANXjZNI5S9p3jDGH+D3lxzIL3khcYybwhGwJ86bUg/NJVyYiRoCxfYjlBOr9c/ufE/9vY+wvj4OET9nNdvXsG1iQkIAXnzuYhy0IJepg1Ft9vFyfx1vHjpsjaWl1cGfkar1eo7p1LdwohQksvyDhSjnN3p/EYnd9X98vn5e/j96Aj3D+qBoFrt/TnndsQFmDIRL+kbgch1zrvaTiDiS6PhtlWqVfc9da51coKDxD8oPEQDmpGnj8p6qRQIJnEEjQi1kVCabhJ6PT0zG4ifnpkTbT00JGuUdV1R054o2tJ7ml7SI4XCo+DYgrjaUjztp+MsUKQObKMB3A+l0obbRp7gfqhUqkmIJ7apA000hDygGlj6QY1W6wQtcuiWDmgB7gdpYOkHGQf1OlqmDWgR1cA8Z5CBE+DMage4gWVCU/1gG6sdIHSCec6g/TahDli93200vvab1vcD/aTq8oMp1kxMUDJzclf6OqDzA3nFEq6JP6MF1DLhqfCAKphGI6iBKrFrIE7TOJERqvjzBFv2w3bkSlQHr3HoqvMaRyeY+0HWUDEpyrXO2KyvbwwsE+gnlRd9Fv3gyIq0iTHgNY4nTl/j6ATT9JI1VEw/HPP7gTJGhIsPM5950Ucjsr9/0FdqxPBDkXeAplHofKD+1td2dkKdx/2gBr+nCIk7ffiqBN2iDbyx7/V6sLzyDP6ILXHn7m14srQEYalubcGPo5/afTdv3YAXa2sQgl2xKvGYXvAO0E0yLaukbUVOR06u0AULW/46y1tIPy/58qJuaZHcnYd0cirE53jDmOag++CtfqUN0jSnNv7TAX94ViF9rEZ6LIsxckOClCEOmI5OlMEE9Iq9UT3kK4IN0Fu9a+PwoKVOB2yDyU8puuplSBL0RmMX7eIKR75knjR+R8gfJk/wm6bCM2AB9ObrLHgZXP7lxmGHdP2gv9p0/O2hfExkwl+1NgWTXUJ/ZQAAAABJRU5ErkJggg=="
        }
    }
]);